import { get } from '@vercel/blob';
import { Readable } from 'node:stream';
import { pipeline } from 'node:stream/promises';

// All Deployments authentication must stay enabled; the Blob store is private.
export default async function handler(req, res) {
  res.setHeader('Cache-Control', 'private, no-store, max-age=0');
  res.setHeader('Vercel-CDN-Cache-Control', 'no-store');
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('Referrer-Policy', 'no-referrer');
  res.setHeader('X-Frame-Options', 'DENY');
  if (!['GET', 'HEAD'].includes(req.method)) {
    res.setHeader('Allow', 'GET, HEAD');
    res.statusCode = 405;
    return res.end();
  }
  try {
    const path = process.env.REPORT_BLOB_PATH || 'reports/current.html';
    if (path !== 'reports/current.html' && !/^reports\/previews\/[a-z0-9-]{1,64}\.html$/.test(path)) throw new Error('Invalid report path');
    const file = await get(path, { access: 'private', useCache: false });
    if (!file || file.statusCode !== 200) {
      res.statusCode = 404;
      return res.end('Report unavailable');
    }
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    if (req.method === 'HEAD') {
      await file.stream.cancel();
      return res.end();
    }
    await pipeline(Readable.fromWeb(file.stream), res);
  } catch {
    // Do not log report content, storage responses or authentication material.
    if (!res.headersSent) {
      res.statusCode = 503;
      res.end('Report temporarily unavailable');
    } else {
      res.destroy();
    }
  }
}
