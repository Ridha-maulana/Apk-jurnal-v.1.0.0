const C='edge-journal-v3';
const SHELL=['./','./index.html','./manifest.webmanifest','./icon-192.png','./icon-512.png','./icon-maskable-512.png'];
const CDN=['https://cdnjs.cloudflare.com/ajax/libs/react/18.3.1/umd/react.production.min.js','https://cdnjs.cloudflare.com/ajax/libs/react-dom/18.3.1/umd/react-dom.production.min.js'];
self.addEventListener('install',e=>{self.skipWaiting();e.waitUntil(caches.open(C).then(c=>Promise.all([c.addAll(SHELL).catch(()=>{}),...CDN.map(u=>fetch(new Request(u,{mode:'no-cors'})).then(r=>c.put(u,r)).catch(()=>{}))])));});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==C).map(k=>caches.delete(k)))).then(()=>self.clients.claim()));});
/* Cache dulu (aplikasi terbuka instan, splash Android singkat), lalu perbarui cache di belakang layar. */
self.addEventListener('fetch',e=>{
  const req=e.request;
  if(req.method!=='GET')return;
  const u=new URL(req.url);
  if(u.protocol!=='http:'&&u.protocol!=='https:')return;
  e.respondWith(caches.open(C).then(async cache=>{
    const cached=await cache.match(req,{ignoreSearch:req.mode==='navigate'});
    const net=fetch(req).then(r=>{if(r&&(r.ok||r.type==='opaque'))cache.put(req,r.clone()).catch(()=>{});return r;}).catch(()=>null);
    if(cached){e.waitUntil(net);return cached;}
    return (await net)||(await cache.match('./index.html'))||Response.error();
  }));
});
