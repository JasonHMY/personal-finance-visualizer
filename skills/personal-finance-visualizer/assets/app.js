(function () {
  'use strict';
  const root = document.getElementById('report');
  const dialog = document.getElementById('transactions-dialog');
  const words = {
    en: {title:'Personal finance',subtitle:'A closer look at your money',demo:'Fictional demo data',language:'Language',overview:'Overview',expenses:'Expenses',income:'Income',transfers:'Transfers',day:'Day',week:'Week',month:'Month',year:'Year',period:'Period',previous:'Previous period',next:'Next period',covered:'Source coverage',total:'Total spending',daily:'Everyday spending',dailyAverage:'Daily average',fixed:'Fixed services',ai:'AI services',housing:'Housing',education:'Education',equipment:'Equipment',other:'Other',inflow:'Total inflow',outflow:'Total outflow',net:'Net change',transferIn:'Transfers in',transferOut:'Transfers out',transferNet:'Net transfers',incomeTotal:'Total income',incomeAverage:'Income per day',incomeCount:'Income payments',trend:'Daily spending',incomeTrend:'Daily income',transfersTrend:'Daily transfer movement',cashTrend:'Daily cash movement',breakdown:'By category',sources:'By income category',transferBreakdown:'Transfer categories',cashBreakdown:'Cash movement',transactions:'Transactions',allTransactions:'All transactions in this view',summaries:'Period summary',explanations:'How this report is calculated',refunds:'Refunds',matched:'Full refund matched',settled:'Settled transfer',internal:'Internal transfer',empty:'No transactions in this period.',noChart:'No movement in this period.',date:'Date',description:'Description',category:'Category',account:'Account',bankAmount:'Bank amount',personalAmount:'Personal spending',adjusted:'Adjusted amount',source:'Source',count:'transactions',close:'Close transaction details',details:'Open transactions',days:'covered days',dayLabel:'day',range:'Covered dates',clickChart:'Select a bar to see its transactions',retained:'Original bank transactions are retained.',refundNote:'Confirmed full returns are excluded from spending, including across periods. Other refunds are shown separately.',explanation:'Spending uses confirmed personal shares and removes matched full returns. Cash movement follows bank dates, excludes internal transfers, and uses confirmed transfer settlements. Unknown incoming payments are transfers, not income. All amounts use the report currency.',averageTip:'Everyday spending divided by covered calendar days in this period.',dailyTip:'Personal spending in the everyday group. Fixed services, AI, housing and other groups are separate.',totalTip:'All expense groups at the confirmed personal share, excluding purchases with matched full refunds.',fixedTip:'Recurring services classified as fixed; excludes AI and housing.',aiTip:'Only expenses explicitly classified as AI services.',housingTip:'Housing spending at the confirmed personal share.',cashTip:'External bank-date movement after confirmed transfer settlements; internal movements are excluded.',incomeTip:'Only payments classified as income. Incoming transfers are separate.',transferTip:'External transfers after confirmed settlements. Original bank amounts remain available.',local:'Standalone report · no network connection required',error:'The report could not be opened',errorBody:'Check dates, amount signs, unique IDs, coverage and mappings against references/schema.md, then rerun the command.',unpaired:'Unpaired refund',refundType:'Refund status',zero:'No data',periodTotal:'Total',amount:'Amount',notes:'Source notes',uncategorized:'Uncategorized'},
    zh: {title:'个人财务',subtitle:'看清每一段时间的收支',demo:'虚构演示数据',language:'语言',overview:'收支总览',expenses:'消费',income:'收入',transfers:'转账',day:'天',week:'周',month:'月',year:'年',period:'期间',previous:'上一期',next:'下一期',covered:'资料覆盖',total:'总花费',daily:'日常消费',dailyAverage:'日均日常消费',fixed:'固定服务',ai:'AI 服务',housing:'租房',education:'教育',equipment:'数码设备',other:'其他',inflow:'总流入',outflow:'总流出',net:'净增减',transferIn:'转入',transferOut:'转出',transferNet:'转账净额',incomeTotal:'总收入',incomeAverage:'日均收入',incomeCount:'收入笔数',trend:'每日消费',incomeTrend:'每日收入',transfersTrend:'每日转账',cashTrend:'每日资金变动',breakdown:'消费分类',sources:'收入分类',transferBreakdown:'转账分类',cashBreakdown:'资金构成',transactions:'交易明细',allTransactions:'本视图全部交易',summaries:'各期一览',explanations:'统计口径与资料说明',refunds:'退款',matched:'已匹配全额退款',settled:'已确认抵消',internal:'内部调拨',empty:'本期没有交易。',noChart:'本期没有资金变动。',date:'日期',description:'交易说明',category:'分类',account:'账户',bankAmount:'银行金额',personalAmount:'本人消费',adjusted:'调整后金额',source:'来源',count:'笔交易',close:'关闭交易明细',details:'查看交易明细',days:'个覆盖日',dayLabel:'天',range:'覆盖日期',clickChart:'选择柱形查看当天交易',retained:'原始银行流水完整保留。',refundNote:'已核对的全额退货从消费中抵消，跨期也回到购买时处理。其余退款单独列示。',explanation:'消费按已确认的个人比例计算，排除已匹配全额退款的购买。资金总览按银行入账日统计，排除内部调拨，并应用已确认的转账抵消。未知转入不计收入。金额均使用报表币种。',averageTip:'本期日常消费除以资料覆盖的自然日数。',dailyTip:'日常组的本人消费。固定服务、AI、租房及其他组分别统计。',totalTip:'所有消费组按确认比例计算的本人支出，排除已匹配全额退款的购买。',fixedTip:'已归类为固定服务的费用，不含 AI 及租房。',aiTip:'仅包含明确归入 AI 服务的支出。',housingTip:'按已确认个人分摊比例计算的租房支出。',cashTip:'按银行日期计算、应用已确认转账抵消后的对外资金变动，不含内部调拨。',incomeTip:'只统计归类为收入的款项，转入另计。',transferTip:'应用已确认抵消后的对外转账，原始银行金额仍可查看。',local:'独立本地报表 · 无需联网',error:'报表无法打开',errorBody:'请按 references/schema.md 核对日期、金额正负、唯一 ID、覆盖期和配对关系，再重新运行命令。',unpaired:'未配对退款',refundType:'退款状态',zero:'暂无数据',periodTotal:'合计',amount:'金额',notes:'资料说明',uncategorized:'未分类'}
  };
  let data;
  let language = window.REPORT_DATA && /^zh(?:-|$)/i.test(window.REPORT_DATA.language) ? 'zh' : 'en';
  let view = 'expenses';
  let grain = 'month';
  let periodKey;
  let currentRows = [];
  const t = key => words[language][key] || key;
  const el = (tag, className, text) => {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text !== undefined) node.textContent = String(text);
    return node;
  };
  const button = (label, className, handler) => {
    const node = el('button', className, label);
    node.type = 'button';
    node.addEventListener('click', handler);
    return node;
  };
  const locale = () => language === 'zh' ? 'zh-CN' : 'en';
  const money = cents => new Intl.NumberFormat(locale(), {style:'currency',currency:data.currency,maximumFractionDigits:2}).format((Math.abs(cents) < 0.00001 ? 0 : cents) / 100);
  const number = value => new Intl.NumberFormat(locale()).format(value);
  const date = value => new Intl.DateTimeFormat(locale(), {year:'numeric',month:'short',day:'numeric'}).format(new Date(value + 'T12:00:00'));
  const shortDate = value => new Intl.DateTimeFormat(locale(), {month:'short',day:'numeric'}).format(new Date(value + 'T12:00:00'));
  const range = period => date(period.start) + ' – ' + date(period.end);
  const periodLabel = period => {
    if (grain === 'day') return date(period.start);
    if (grain === 'week') return shortDate(period.start) + ' – ' + shortDate(period.end) + ' · ' + period.start.slice(0,4);
    if (grain === 'year') return period.key.slice(0,4);
    return new Intl.DateTimeFormat(locale(), {year:'numeric',month:'long'}).format(new Date(period.start + 'T12:00:00'));
  };
  const viewRows = rows => rows.filter(row => view === 'overview' ? row.kind !== 'internal' : view === 'expenses' ? row.kind === 'expense' && !row.matchedRefund : view === 'income' ? row.kind === 'income' : row.kind === 'transfer_in' || row.kind === 'transfer_out');
  const rowValue = row => view === 'expenses' ? row.personalCents : view === 'income' ? row.amountCents : view === 'transfers' ? Math.abs(row.transferCents) : Math.abs(row.cashCents);
  const sumRows = rows => rows.reduce((sum,row) => sum + rowValue(row),0);

  function table(rows, showRefundStatus) {
    if (!rows.length) return el('p','empty',t('empty'));
    const wrap = el('div','table-wrap');
    const grid = el('table','data-table');
    const head = el('thead');
    const header = el('tr');
    const keys = ['date','description','category','account','bankAmount'];
    if (view === 'expenses' && !showRefundStatus) keys.push('personalAmount');
    if (view === 'transfers' || view === 'overview') keys.push('adjusted');
    keys.forEach(key => { const cell = el('th',key.includes('Amount') || key === 'adjusted' ? 'amount' : '',t(key)); cell.scope = 'col'; header.append(cell); });
    head.append(header); grid.append(head);
    const body = el('tbody');
    [...rows].sort((a,b) => b.date.localeCompare(a.date) || a.id.localeCompare(b.id)).forEach(row => {
      const tr = el('tr');
      tr.append(el('td','date',row.date));
      const description = el('td','row-description',row.description || t('transactions'));
      if (row.source) description.append(el('span','row-meta',t('source') + ': ' + row.source));
      if (row.matchedRefund) description.append(el('span','status-tag',t('matched')));
      else if (showRefundStatus) description.append(el('span','status-tag',t('unpaired')));
      if (row.settledCents > 0) description.append(el('span','status-tag',t('settled') + ' ' + money(row.settledCents)));
      tr.append(description,el('td','',row.category || t('uncategorized')),el('td','',row.account || '—'),el('td','amount',money(row.amountCents)));
      if (view === 'expenses' && !showRefundStatus) tr.append(el('td','amount',money(row.personalCents)));
      if (view === 'transfers' || view === 'overview') tr.append(el('td','amount',money(view === 'transfers' ? row.transferCents : row.cashCents)));
      body.append(tr);
    });
    grid.append(body); wrap.append(grid); return wrap;
  }

  function openTransactions(label, rows) {
    document.getElementById('dialog-title').textContent = label;
    document.getElementById('dialog-subtitle').textContent = number(rows.length) + ' ' + t('count');
    document.getElementById('dialog-close').setAttribute('aria-label',t('close'));
    document.getElementById('dialog-content').replaceChildren(table(rows));
    dialog.showModal();
  }

  function card(label, value, rows, tip, isNumber) {
    const node = button('', 'metric', () => openTransactions(label,rows));
    const title = el('span','metric-label',label);
    const mark = el('span','help-mark','i'); mark.setAttribute('aria-hidden','true'); title.append(mark);
    node.append(title,el('span','metric-value',isNumber ? number(value) : money(value)),el('span','metric-hint',t('details')));
    const tooltip = el('span','tooltip',tip);
    node.append(tooltip); node.setAttribute('aria-label',label + ': ' + (isNumber ? number(value) : money(value)) + '. ' + tip + ' ' + t('details'));
    return node;
  }

  function metricCards(summary) {
    const cards = el('div','cards' + (view === 'expenses' ? ' six' : ''));
    const rows = summary.rows;
    if (view === 'expenses') {
      cards.append(card(t('total'),summary.spending,currentRows,t('totalTip')));
      const daily = currentRows.filter(row => row.group === 'daily');
      cards.append(card(t('daily'),summary.daily,daily,t('dailyTip')),card(t('dailyAverage'),summary.dailyAverage,daily,t('averageTip')));
      ['fixed','ai','housing'].forEach(group => cards.append(card(t(group),summary.groups[group] || 0,currentRows.filter(row => row.group === group),t(group + 'Tip'))));
    } else if (view === 'overview') {
      cards.append(card(t('inflow'),summary.inflow,rows.filter(row => row.cashCents > 0),t('cashTip')),card(t('outflow'),summary.outflow,rows.filter(row => row.cashCents < 0),t('cashTip')),card(t('net'),summary.net,currentRows,t('cashTip')));
    } else if (view === 'income') {
      cards.append(card(t('incomeTotal'),summary.income,currentRows,t('incomeTip')),card(t('incomeAverage'),summary.income / summary.days,currentRows,t('incomeTip')),card(t('incomeCount'),currentRows.length,currentRows,t('incomeTip'),true));
    } else {
      cards.append(card(t('transferIn'),summary.transferIn,currentRows.filter(row => row.kind === 'transfer_in'),t('transferTip')),card(t('transferOut'),summary.transferOut,currentRows.filter(row => row.kind === 'transfer_out'),t('transferTip')),card(t('transferNet'),summary.transferIn - summary.transferOut,currentRows,t('transferTip')));
    }
    return cards;
  }

  function panel(title, subtitle) {
    const panel = el('section','panel');
    const heading = el('div','panel-heading');
    heading.append(el('h2','',title));
    if (subtitle) heading.append(el('span','muted',subtitle));
    panel.append(heading); return panel;
  }

  function trend(period) {
    const titles = {expenses:'trend',income:'incomeTrend',transfers:'transfersTrend',overview:'cashTrend'};
    const section = panel(t(titles[view]),data.currency);
    const byDay = new Map();
    currentRows.forEach(row => {
      if (!byDay.has(row.date)) byDay.set(row.date,[]);
      byDay.get(row.date).push(row);
    });
    const dates = [];
    const cursor = new Date(period.start + 'T12:00:00Z');
    const end = new Date(period.end + 'T12:00:00Z');
    while (cursor <= end) { dates.push(cursor.toISOString().slice(0,10)); cursor.setUTCDate(cursor.getUTCDate() + 1); }
    const values = dates.map(day => sumRows(byDay.get(day) || []));
    const max = Math.max(...values,0);
    const chart = el('div','chart'); chart.setAttribute('aria-label',t(titles[view]));
    if (!max) chart.append(el('p','chart-zero',t('noChart')));
    else dates.forEach((day,index) => {
      const group = el('div','chart-group');
      const rows = byDay.get(day) || [];
      const bar = button('', 'chart-bar', () => openTransactions(date(day),rows));
      bar.setAttribute('aria-label',date(day) + ': ' + money(values[index]) + '. ' + t('details'));
      bar.title = date(day) + ': ' + money(values[index]);
      bar.disabled = rows.length === 0;
      const fill = el('span','chart-fill'); fill.style.height = (values[index] / max * 100) + '%';
      if (!values[index]) fill.style.visibility = 'hidden';
      bar.append(fill);
      const every = Math.ceil(dates.length / 8);
      group.append(bar,el('span','chart-label',index % every === 0 ? (dates.length > 45 ? day.slice(5) : String(Number(day.slice(8)))) : ''));
      if (dates.length > 45) group.style.minWidth = '9px';
      chart.append(group);
    });
    section.append(chart);
    const footer = el('div','chart-footer'); footer.append(el('span','',shortDate(period.start) + ' – ' + shortDate(period.end)),el('span','',max ? money(max) : ''));
    section.append(footer,el('p','muted',t('clickChart')));
    return section;
  }

  function categories() {
    const titles = {expenses:'breakdown',income:'sources',transfers:'transferBreakdown',overview:'cashBreakdown'};
    const section = panel(t(titles[view]));
    const groups = new Map();
    currentRows.forEach(row => {
      const key = view === 'overview' ? (row.cashCents >= 0 ? t('inflow') : t('outflow')) : row.category || t('uncategorized');
      if (!groups.has(key)) groups.set(key,[]);
      groups.get(key).push(row);
    });
    const entries = [...groups].map(([label,rows]) => ({label,rows,value:sumRows(rows)})).filter(item => item.value > 0).sort((a,b) => b.value - a.value);
    const max = Math.max(...entries.map(item => item.value),0);
    if (!max) section.append(el('p','empty',t('noChart')));
    const list = el('div','category-list');
    entries.forEach(item => {
      const row = button('', 'category-button', () => openTransactions(item.label,item.rows));
      row.setAttribute('aria-label',item.label + ': ' + money(item.value) + '. ' + t('details'));
      const label = el('span','category-label'); label.append(el('span','category-name',item.label),el('span','category-value',money(item.value)));
      const track = el('span','bar-track'); const fill = el('span','bar-fill'); fill.style.width = item.value / max * 100 + '%'; track.append(fill);
      row.append(label,track); list.append(row);
    });
    section.append(list); return section;
  }

  function fold(label,content) {
    const details = el('details','fold');
    details.append(el('summary','',label));
    const body = el('div','fold-content'); body.append(content); details.append(body); return details;
  }

  function summaryTable(periods) {
    const wrap = el('div','table-wrap');
    const table = el('table','data-table');
    const keys = view === 'expenses' ? ['total','daily','fixed','ai','housing'] : view === 'overview' ? ['inflow','outflow','net'] : view === 'income' ? ['incomeTotal'] : ['transferIn','transferOut'];
    const head = el('thead'); const row = el('tr');
    [t('period'),...keys.map(t)].forEach((text,index) => { const cell = el('th',index ? 'amount' : '',text); cell.scope='col'; row.append(cell); }); head.append(row); table.append(head);
    const body = el('tbody');
    [...periods].reverse().forEach(period => {
      const sum = Finance.summarize(data,period);
      const tr = el('tr'); tr.append(el('td','',periodLabel(period)));
      const values = {total:sum.spending,daily:sum.daily,fixed:sum.groups.fixed || 0,ai:sum.groups.ai || 0,housing:sum.groups.housing || 0,inflow:sum.inflow,outflow:sum.outflow,net:sum.net,incomeTotal:sum.income,transferIn:sum.transferIn,transferOut:sum.transferOut};
      keys.forEach(key => tr.append(el('td','amount',money(values[key])))); body.append(tr);
    });
    table.append(body); wrap.append(table); return wrap;
  }

  function render() {
    const focusKey = document.activeElement && document.activeElement.dataset.focus;
    const periods = Finance.periods(data,grain);
    let index = periods.findIndex(period => period.key === periodKey);
    if (index < 0) index = periods.length - 1;
    const period = periods[index]; periodKey = period.key;
    const summary = Finance.summarize(data,period);
    currentRows = viewRows(summary.rows);
    document.documentElement.lang = language === 'zh' ? 'zh-CN' : 'en';
    document.title = t('title');
    root.replaceChildren();
    const header = el('header','masthead'); const title = el('div'); title.append(el('h1','',t('title')),el('p','muted',t('subtitle')));
    const meta = el('div','header-meta');
    if (data.demo) meta.append(el('span','demo-badge',t('demo')));
    const lang = el('select','language'); lang.setAttribute('aria-label',t('language')); lang.dataset.focus='language';
    [['en','English'],['zh','简体中文']].forEach(([value,label]) => { const option = el('option','',label); option.value=value; option.selected=language===value; lang.append(option); });
    lang.addEventListener('change',() => { language=lang.value; render(); }); meta.append(lang); header.append(title,meta); root.append(header);
    const tabs = el('nav','view-tabs'); tabs.setAttribute('aria-label',language === 'zh' ? '报表视图' : 'Report views');
    ['overview','expenses','income','transfers'].forEach(key => { const tab = button(t(key),'view-tab',() => {view=key;render();}); tab.setAttribute('aria-pressed',String(view===key)); tab.dataset.focus='view-'+key; tabs.append(tab); }); root.append(tabs);
    const toolbar = el('div','toolbar'); const grains = el('div','grain-controls'); grains.setAttribute('role','group'); grains.setAttribute('aria-label',t('period'));
    ['day','week','month','year'].forEach(key => { const node = button(t(key),'grain-button',() => {grain=key;periodKey=undefined;render();}); node.setAttribute('aria-pressed',String(grain===key)); node.dataset.focus='grain-'+key; grains.append(node); });
    const controls = el('div','period-controls');
    const previous = button('‹','icon-button',() => {periodKey=periods[index-1].key;render();}); previous.disabled=index===0; previous.setAttribute('aria-label',t('previous')); previous.dataset.focus='previous';
    const next = button('›','icon-button',() => {periodKey=periods[index+1].key;render();}); next.disabled=index===periods.length-1; next.setAttribute('aria-label',t('next')); next.dataset.focus='next';
    const selector = el('select','period-select'); selector.setAttribute('aria-label',t('period')); selector.dataset.focus='period';
    [...periods].reverse().forEach(item => { const option = el('option','',periodLabel(item)); option.value=item.key; option.selected=item.key===period.key; selector.append(option); });
    selector.addEventListener('change',() => {periodKey=selector.value;render();}); controls.append(previous,selector,next); toolbar.append(grains,controls); root.append(toolbar);
    const heading = el('div','period-heading'); heading.append(el('h2','',range(period)),el('p','muted',number(summary.days) + ' ' + t('days') + ' · ' + data.currency)); root.append(heading,metricCards(summary));
    const panels = el('div','panels'); panels.append(trend(period),categories()); root.append(panels);
    root.append(fold(t('allTransactions') + ' (' + number(currentRows.length) + ')',table(currentRows)),fold(t('summaries'),summaryTable(periods)));
    const explanation = el('div'); explanation.append(el('p','muted',t('explanation')),el('p','muted',t('covered') + ': ' + date(data.coverage.start) + ' – ' + date(data.coverage.end)),el('p','muted',t('retained')));
    if (data.notes.length) { const notes = el('ul'); data.notes.forEach(note => notes.append(el('li','',note))); explanation.append(notes); }
    root.append(fold(t('explanations'),explanation));
    const refunds = summary.rows.filter(row => row.kind === 'refund');
    const refundBody = el('div'); refundBody.append(el('p','refund-note',t('refundNote')),table(refunds,true)); root.append(fold(t('refunds') + ' (' + number(refunds.length) + ')',refundBody));
    root.append(el('footer','footer',t('local')));
    root.setAttribute('aria-busy','false');
    if (focusKey) {
      const control = [...root.querySelectorAll('[data-focus]')].find(node => node.dataset.focus === focusKey);
      if (control && !control.disabled) control.focus({preventScroll:true});
    }
  }

  document.getElementById('dialog-close').addEventListener('click',() => dialog.close());
  dialog.addEventListener('click',event => { if (event.target === dialog) { const box=dialog.getBoundingClientRect(); if (event.clientX<box.left || event.clientX>box.right || event.clientY<box.top || event.clientY>box.bottom) dialog.close(); } });
  try { data = Finance.validate(window.REPORT_DATA); render(); }
  catch (_) { const error=el('section','error'); error.append(el('h1','',t('error')),el('p','',t('errorBody'))); root.replaceChildren(error); root.setAttribute('aria-busy','false'); }
}());
