const {test} = require('node:test');
const assert = require('node:assert/strict');
const F = require('../skills/personal-finance-visualizer/assets/engine.js');
const tx = (id,date,amount,kind,extra={}) => ({id,date,amount,kind,group:'daily',...extra});
const data = (transactions,extra={}) => F.validate({schemaVersion:1,currency:'USD',coverage:{start:'2024-01-01',end:'2024-03-31'},transactions,...extra});
const period = {start:'2024-01-01',end:'2024-03-31'};

test('shared spending preserves fractional cents and bank cash',()=>{
 const d=data([tx('a','2024-01-02','-13.31','expense',{share:.5,group:'housing'}),tx('b','2024-01-02','100.00','income')]);
 const s=F.summarize(d,period);
 assert.equal(s.spending,665.5);assert.equal(s.outflow,1331);assert.equal(s.net,8669);assert.equal(s.income,10000);
 assert.equal(d.transactions[0].amount,'-13.31');
});
test('full return across months cancels personal purchase but preserves bank-date cash',()=>{
 const d=data([tx('p','2024-01-21','-37.10','expense'),tx('r','2024-03-03','37.10','refund')],{refunds:[{purchaseId:'p',refundIds:['r']}]});
 assert.equal(F.summarize(d,period).spending,0);
 const jan=F.summarize(d,F.periods(d,'month')[0]), mar=F.summarize(d,F.periods(d,'month')[2]);
 assert.equal(jan.outflow,3710);assert.equal(mar.inflow,3710);assert.equal(mar.unpairedRefunds,0);
});
test('partial or unpaired refund is separate, not silently assigned',()=>{
 const s=F.summarize(data([tx('p','2024-01-21','-100','expense'),tx('r','2024-03-03','25','refund')]),period);
 assert.equal(s.spending,10000);assert.equal(s.unpairedRefunds,2500);
});
test('confirmed partial loan repayment offsets endpoints across periods',()=>{
 const d=data([tx('a','2024-01-21','-90','transfer_out'),tx('b','2024-03-03','30','transfer_in')],{settlements:[{outId:'a',inId:'b',amount:'30'}]});
 const s=F.summarize(d,period);assert.equal(s.transferOut,6000);assert.equal(s.transferIn,0);assert.equal(s.net,-6000);
 assert.equal(F.summarize(d,F.periods(d,'month')[0]).outflow,6000);
});
test('same amount alone never creates a loan match or duplicate',()=>{
 const s=F.summarize(data([tx('a','2024-01-02','-90','transfer_out'),tx('b','2024-01-02','90','transfer_in'),tx('c','2024-01-02','-90','transfer_out')]),period);
 assert.equal(s.transferOut,18000);assert.equal(s.transferIn,9000);assert.equal(s.rows.length,3);
});
test('own-account movement is excluded from external totals',()=>{
 const s=F.summarize(data([tx('a','2024-02-02','-250','internal'),tx('b','2024-02-02','250','internal')]),period);
 assert.equal(s.inflow,0);assert.equal(s.outflow,0);assert.equal(s.spending,0);assert.equal(s.rows.length,2);
});
test('weeks run Monday to Sunday and coverage is clipped',()=>{
 const d=data([],{coverage:{start:'2024-01-03',end:'2024-01-10'}});
 assert.deepEqual(F.periods(d,'week').map(p=>[p.start,p.end]),[['2024-01-03','2024-01-07'],['2024-01-08','2024-01-10']]);
 assert.equal(F.summarize(d,F.periods(d,'month')[0]).days,8);
 assert.equal(F.periods(data([]),'day').length,91);
});
test('reject invalid amounts, dates, directions, IDs and unsupported decimals',()=>{
 for(const row of [tx('a','2024-02-30','-1','expense'),tx('a','2024-01-01','1','expense'),tx('a','2024-01-01','NaN','income'),tx('a','2024-01-01','-1.001','expense'),tx('a','2024-01-01','-1','expense',{share:1.1})]) assert.throws(()=>data([row]));
 assert.throws(()=>data([tx('a','2024-01-01','1','income'),tx('a','2024-01-01','2','income')]));
 assert.throws(()=>data([],{currency:'JPY'}));
});
test('reject overallocated, duplicate or nonexact refund/loan mappings',()=>{
 const a=tx('a','2024-01-01','-10','expense'),b=tx('b','2024-01-03','5','refund');
 assert.throws(()=>data([a,b],{refunds:[{purchaseId:'a',refundIds:['b']}]}));
 assert.throws(()=>data([a,{...b,amount:'10'}],{refunds:[{purchaseId:'a',refundIds:['b']},{purchaseId:'a',refundIds:['b']}]}));
 assert.throws(()=>data([{...a,kind:'transfer_out'},{...b,kind:'transfer_in'}],{settlements:[{outId:'a',inId:'b',amount:'6'}]}));
});
test('untrusted text remains text and does not corrupt category maps',()=>{
 const d=data([tx('x','2024-02-01','-1','expense',{description:'</script><script>throw Error(1)</script>',category:'__proto__'})]);
 assert.equal(d.transactions[0].category,'__proto__');assert.equal(F.summarize(d,period).spending,100);
});
test('synthetic demo reconciles views and every period partition',()=>{
 const d=F.validate(require('../demo/sample.json'));const all=F.summarize(d,period);
 for(const grain of ['day','week','month','year']) {
  const totals=F.periods(d,grain).map(p=>F.summarize(d,p));
  for(const key of ['inflow','outflow','spending','income','transferIn','transferOut']) assert.ok(Math.abs(totals.reduce((s,t)=>s+t[key],0)-all[key])<.000001,`${grain} ${key}`);
 }
 assert.equal(all.net,all.inflow-all.outflow);
 assert.equal(all.spending,Object.values(all.groups).reduce((s,v)=>s+v,0));
});
test('confirmed optional classifications survive normalization without inference',()=>{
 const d=data([tx('s','2024-01-01','100','income',{incomeType:'salary',merchant:'Fictional employer'}),tx('l','2024-01-03','-80','transfer_out',{purpose:'loan'}),tx('u','2024-02-01','75','transfer_in')]);
 const rows=F.summarize(d,period).rows;
 assert.equal(rows.find(r=>r.id==='s').incomeType,'salary');assert.equal(rows.find(r=>r.id==='l').purpose,'loan');assert.equal(rows.find(r=>r.id==='u').purpose,'other');
 assert.throws(()=>data([tx('x','2024-01-01','100','income',{incomeType:'guessed'})]));
});
