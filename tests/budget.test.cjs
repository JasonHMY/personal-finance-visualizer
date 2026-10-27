// Entirely fictional test inputs; no personal records or saved user preferences.
const assert=require('node:assert/strict');
const F=require('../skills/personal-finance-visualizer/assets/engine.js');
const settings={schemaVersion:1,dailyLimit:'50.00',currency:'USD',timezone:'UTC',groups:['daily','fixed','ai'],allocationMode:'history',shares:[]};
const tx=(id,date,amount,group='daily',category='Groceries',kind='expense',extra={})=>({id,date,amount,group,category,kind,...extra});
const data=(transactions=[],coverage={start:'2025-10-01',end:'2026-01-26'},extra={})=>F.validate({schemaVersion:1,currency:'USD',coverage,transactions,...extra});
let count=0;const test=(name,fn)=>{fn();count++;console.log('PASS '+name)};
test('32 today, spend 40, 30 tomorrow',()=>{
 const a=tx('past','2026-01-01','-1390.00');
 assert.equal(F.dailyBudget(data([a]),settings,'2026-01-27').availableCents,3200);
 const b=tx('today','2026-01-27','-40.00');const d=data([a,b],{start:'2025-10-01',end:'2026-01-27'});
 const today=F.dailyBudget(d,settings,'2026-01-27');assert.equal(today.openingCents,3200);assert.equal(today.availableCents,0);assert.equal(today.overspentTodayCents,800);
 assert.equal(F.dailyBudget(d,settings,'2026-01-28').availableCents,3000);
});
test('savings do not exceed daily upper limit',()=>assert.equal(F.dailyBudget(data(),settings,'2026-01-27').availableCents,5000));
test('daily fixed AI included; rent equipment income and transfers excluded',()=>{
 const rows=[tx('d','2026-01-02','-10.00'),tx('f','2026-01-02','-20.00','fixed'),tx('a','2026-01-02','-30.00','ai'),tx('h','2026-01-02','-1000.00','housing'),tx('e','2026-01-02','-300.00','equipment'),tx('i','2026-01-02','2000.00','other','Salary','income'),tx('t','2026-01-02','200.00','other','Transfer','transfer_in')];
 const result=F.dailyBudget(data(rows),settings,'2026-01-27');assert.equal(result.spentMonthCents,6000);assert.equal(result.excludedCents,130000);
});
test('matched refund removes purchase once; bank data stays unchanged',()=>{
 const rows=[tx('p','2026-01-03','-100.00'),tx('r','2026-01-22','100.00','daily','Groceries','refund')];
 const d=data(rows,undefined,{refunds:[{purchaseId:'p',refundIds:['r']}]});assert.equal(F.dailyBudget(d,settings,'2026-01-27').spentMonthCents,0);assert.equal(d.transactions[0].amountCents,-10000);
});
test('new calendar month resets overspending',()=>{
 const d=data([tx('large','2026-01-20','-2000.00')],{start:'2025-10-01',end:'2026-01-31'});const b=F.dailyBudget(d,settings,'2026-02-01');assert.equal(b.monthlyBudgetCents,140000);assert.equal(b.availableCents,5000);assert.equal(b.spentMonthCents,0);
});
test('leap February uses 29 days',()=>{
 const b=F.dailyBudget(data([],{start:'2027-10-01',end:'2028-01-31'}),settings,'2028-02-01');assert.equal(b.daysInMonth,29);assert.equal(b.monthlyBudgetCents,145000);
});
test('month end has one remaining day and no division by zero',()=>{
 const b=F.dailyBudget(data([tx('prior','2026-01-02','-1549.99')],{start:'2025-10-01',end:'2026-01-30'}),settings,'2026-01-31');assert.equal(b.remainingDays,1);assert.equal(b.availableCents,1);
});
test('overdue coverage hides usable daily amount',()=>{
 const b=F.dailyBudget(data([],{start:'2026-01-01',end:'2026-01-24'}),settings,'2026-01-27');assert.equal(b.usable,false);assert.equal(b.availableCents,null);assert.equal(b.stale,true);
});
test('missing month prefix is not silently treated as zero',()=>{
 const b=F.dailyBudget(data([],{start:'2026-01-05',end:'2026-01-26'}),settings,'2026-01-27');assert.equal(b.availableCents,null);assert.equal(b.missingMonthStart,true);
});
test('recent three complete months use daily categories only',()=>{
 const rows=[];for(const m of ['07','08','09']){rows.push(tx('g'+m,'2026-'+m+'-05','-40.00'));rows.push(tx('d'+m,'2026-'+m+'-06','-60.00','daily','Dining'));rows.push(tx('f'+m,'2026-'+m+'-07','-900.00','fixed','Subscriptions'));}
 const b=F.dailyBudget(data(rows,{start:'2026-07-01',end:'2026-10-24'}),settings,'2026-10-25');assert.deepEqual(b.historicalMonths,['2026-09','2026-08','2026-07']);assert.equal(b.automaticShares.find(x=>x.category==='Dining').basisPoints,6000);assert.equal(b.categoryRows.reduce((s,r)=>s+r.availableCents,0),b.availableCents);
});
test('partial historical months are omitted and sample count stays explicit',()=>{
 const b=F.dailyBudget(data([],{start:'2026-07-15',end:'2026-10-24'}),settings,'2026-10-25');assert.deepEqual(b.historicalMonths,['2026-09','2026-08']);assert.equal(b.hasAllocation,false);
});
test('manual references redistribute exactly including a one-cent remainder',()=>{
 const manual={...settings,allocationMode:'manual',shares:[{category:'A',basisPoints:3333},{category:'B',basisPoints:3333},{category:'C',basisPoints:3334}]};const b=F.dailyBudget(data(),manual,'2026-01-27');assert.equal(b.categoryRows.reduce((s,r)=>s+r.availableCents,0),5000);
});
test('zero budget and month deficit stay non-negative spendable',()=>{
 const b=F.dailyBudget(data([tx('x','2026-01-20','-20.00')]),{...settings,dailyLimit:'0.00'},'2026-01-27');assert.equal(b.availableCents,0);assert.equal(b.monthDeficitCents,2000);
});
test('timezone date follows Tokyo at UTC date boundary',()=>assert.equal(F.budgetDate({...settings,timezone:'Asia/Tokyo'},Date.parse('2026-10-24T15:00:00Z')),'2026-10-25'));
test('invalid settings and incorrect percentages are rejected',()=>{
 for(const bad of [{...settings,dailyLimit:'-1.00'},{...settings,dailyLimit:'1.001'},{...settings,timezone:'Invalid/Zone'},{...settings,allocationMode:'manual',shares:[{category:'A',basisPoints:9999}]},{...settings,unexpected:true}])assert.throws(()=>F.validateBudgetSettings(bad));
});
test('external budget endpoints are rejected',()=>assert.throws(()=>data([],undefined,{budget:{endpoint:'https://example.com',defaults:settings}})));
test('fractional personal shares equal the corresponding full personal charge',()=>{
 const shared=data([tx('a','2026-01-02','-1.00','daily','Groceries','expense',{share:0.3333}),tx('b','2026-01-03','-1.00','daily','Groceries','expense',{share:0.6667})]);
 const full=data([tx('c','2026-01-02','-1.00')]);assert.equal(F.dailyBudget(shared,settings,'2026-01-27').spentMonthCents,100);assert.equal(F.dailyBudget(shared,settings,'2026-01-27').remainingMonthCents,F.dailyBudget(full,settings,'2026-01-27').remainingMonthCents);
});
test('allocation ties do not depend on source transaction order',()=>{
 const rows=['餐饮','超市','衣物'].map((cat,i)=>tx('h'+i,'2025-12-15','-1.00','daily',cat));
 assert.deepEqual(F.dailyBudget(data(rows),settings,'2026-01-27').automaticShares,F.dailyBudget(data([...rows].reverse()),settings,'2026-01-27').automaticShares);
});
test('unclassified allocation is excluded without changing actual spending',()=>{
 const d=data([tx('history-a','2025-12-05','-30.00'),tx('history-b','2025-12-05','-70.00','daily','Dining'),tx('history-u','2025-12-05','-20.00','daily','商户待分类'),tx('current-u','2026-01-05','-39.00','daily','商户待分类')]);
 const b=F.dailyBudget(d,settings,'2026-01-27');assert.equal(b.spentMonthCents,3900);assert.equal(b.availableCents,5000);assert.equal(b.categoryRows.some(r=>r.category==='商户待分类'),false);assert.deepEqual(b.allocationShares.map(s=>s.basisPoints).sort(),[3000,7000]);assert.equal(b.categoryRows.reduce((n,r)=>n+r.availableCents,0),5000);
});
test('old manual shares are renormalized without mutating saved settings',()=>{
 const manual={...settings,allocationMode:'manual',shares:[{category:'A',basisPoints:2000},{category:'B',basisPoints:6000},{category:'Uncategorized',basisPoints:2000}]};const before=JSON.stringify(manual);const b=F.dailyBudget(data(),manual,'2026-01-27');assert.deepEqual(b.allocationShares,[{category:'A',basisPoints:2500},{category:'B',basisPoints:7500}]);assert.equal(JSON.stringify(manual),before);
});
test('only unclassified history produces no invented allocation',()=>{
 const b=F.dailyBudget(data([tx('u','2025-12-05','-20.00','daily','Uncategorized')]),settings,'2026-01-27');assert.equal(b.hasAllocation,false);assert.deepEqual(b.categoryRows,[]);assert.equal(b.availableCents,5000);
});
test('retained tiny shares and amounts sum exactly after exclusion',()=>{
 const manual={...settings,allocationMode:'manual',shares:[{category:'A',basisPoints:3333},{category:'B',basisPoints:3333},{category:'Tiny',basisPoints:1},{category:'待分类',basisPoints:3333}]};const b=F.dailyBudget(data(),manual,'2026-01-27');assert.equal(b.allocationShares.reduce((n,x)=>n+x.basisPoints,0),10000);assert.equal(b.categoryRows.reduce((n,x)=>n+x.availableCents,0),5000);assert(b.categoryRows.some(x=>x.category==='Tiny'));
});
console.log(count+' budget behavior tests passed');
