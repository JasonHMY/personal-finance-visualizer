import { createHash } from 'node:crypto';
import Finance from './finance-engine.cjs';
const LIMIT=16384;
const digest=value=>createHash('sha256').update(value).digest('hex');
const fail=(status,code)=>Object.assign(new Error(code),{status,code});
const path=()=>{
  const value=process.env.BUDGET_SETTINGS_PATH||'budget/settings.json';
  if(value!=='budget/settings.json'&&!/^budget\/previews\/[a-z0-9-]{1,64}\.json$/.test(value))throw fail(503,'unavailable');
  return value;
};
function reply(res,status,value){
  res.statusCode=status;res.setHeader('Content-Type','application/json; charset=utf-8');
  res.end(value==null?'':JSON.stringify(value));
}
async function boundedBody(stream){
  const chunks=[];let size=0;
  for await(const chunk of stream){const b=Buffer.from(chunk);size+=b.length;if(size>LIMIT)throw fail(413,'too_large');chunks.push(b);}
  return Buffer.concat(chunks);
}
async function requestBody(req){
  if(req.headers['content-length']!=null&&(!/^\d+$/.test(String(req.headers['content-length']))||Number(req.headers['content-length'])>LIMIT))throw fail(413,'too_large');
  let body=req.body;
  if(body===undefined)body=await boundedBody(req);
  if(Buffer.isBuffer(body))body=body.toString('utf8');
  if(typeof body==='string'){if(Buffer.byteLength(body)>LIMIT)throw fail(413,'too_large');try{body=JSON.parse(body);}catch{throw fail(400,'invalid_settings');}}
  if(Buffer.byteLength(JSON.stringify(body??null))>LIMIT)throw fail(413,'too_large');
  try{return Finance.validateBudgetSettings(body);}catch{throw fail(400,'invalid_settings');}
}
function checkWriteOrigin(req){
  let origin;
  try{origin=new URL(req.headers.origin);}catch{throw fail(403,'same_origin_required');}
  if(origin.protocol!=='https:'||origin.host!==req.headers.host||origin.pathname!=='/'||origin.search||origin.hash||origin.username||origin.password)throw fail(403,'same_origin_required');
  if(req.headers['sec-fetch-site']&&req.headers['sec-fetch-site']!=='same-origin')throw fail(403,'same_origin_required');
  if((req.headers['content-type']||'').split(';')[0].trim()!=='application/json')throw fail(415,'json_required');
}
export function createBudgetHandler(storage){
  async function read(){
    const file=await storage.get(path(),{access:'private',useCache:false});
    if(!file)return {settings:null,revision:null,sha:null};
    if(file.statusCode!==200)throw fail(503,'unavailable');
    const bytes=await boundedBody(file.stream);let settings;
    try{settings=Finance.validateBudgetSettings(JSON.parse(bytes.toString('utf8')));}catch{throw fail(503,'invalid_saved_settings');}
    const metadata=await storage.head(path());
    if(file.blob.etag.replace(/^W\//,'')!==metadata.etag.replace(/^W\//,''))throw fail(409,'conflict');
    return {settings,revision:metadata.etag,sha:digest(bytes)};
  }
  return async function budgetHandler(req,res){
    res.setHeader('Cache-Control','private, no-store, max-age=0');
    res.setHeader('Vercel-CDN-Cache-Control','no-store');
    res.setHeader('X-Content-Type-Options','nosniff');res.setHeader('Referrer-Policy','no-referrer');
    try{
      if(['GET','HEAD'].includes(req.method)){
        const current=await read();if(current.revision)res.setHeader('ETag',current.revision);
        return reply(res,200,req.method==='HEAD'?null:{settings:current.settings,revision:current.revision});
      }
      if(req.method!=='POST'){res.setHeader('Allow','GET, HEAD, POST');throw fail(405,'method_not_allowed');}
      checkWriteOrigin(req);
      const settings=await requestBody(req),revision=req.headers['x-budget-revision'],create=revision==='absent';
      const expected=create?null:revision;
      if(!revision)throw fail(428,'revision_required');
      if(!create&&!/^"[A-Za-z0-9._:-]{1,200}"$/.test(expected))throw fail(400,'invalid_revision');
      const previous=await read();
      if(create?previous.revision!==null:previous.revision!==expected)throw fail(409,'conflict');
      const body=JSON.stringify(settings);
      try{await storage.put(path(),body,{access:'private',addRandomSuffix:false,contentType:'application/json',cacheControlMaxAge:60,...(expected?{ifMatch:expected}:{allowOverwrite:false})});}
      catch(error){if(/precondition|etag|already exists/i.test(String(error.message)))throw fail(409,'conflict');throw error;}
      const saved=await read();if(saved.sha!==digest(body))throw fail(409,'conflict');
      res.setHeader('ETag',saved.revision);return reply(res,200,{settings:saved.settings,revision:saved.revision});
    }catch(error){return reply(res,error.status||503,{error:error.code||'unavailable'});}
  };
}
