import{w as o}from"./index.0d35ad8e.js";const d={message:"Missing Toast Message",autohide:!0,timeout:5e3};function l(){const u=Math.random();return Number(u).toString(32)}function c(u){if(u.autohide===!0)return setTimeout(()=>{f.close(u.id)},u.timeout)}function m(){const{subscribe:u,set:r,update:s}=o([]);return{subscribe:u,trigger:i=>{const e=l();return s(n=>{i&&i.callback&&i.callback({id:e,status:"queued"}),i.hideDismiss&&(i.autohide=!0);const t={...d,...i,id:e};return t.timeoutId=c(t),n.push(t),n}),e},close:i=>s(e=>{if(e.length>0){const n=e.findIndex(a=>a.id===i),t=e[n];t&&(t.callback&&t.callback({id:i,status:"closed"}),t.timeoutId&&clearTimeout(t.timeoutId),e.splice(n,1))}return e}),freeze:i=>s(e=>(e.length>0&&clearTimeout(e[i].timeoutId),e)),unfreeze:i=>s(e=>(e.length>0&&(e[i].timeoutId=c(e[i])),e)),clear:()=>r([])}}const f=m();export{f as t};
//# sourceMappingURL=stores.73e18257.js.map
