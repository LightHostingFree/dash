import{S as Re,i as ze,s as Oe,e as H,b as I,L as M,g as S,v as x,d as F,f as $,h as y,U as Ae,a6 as Ke,I as Z,J as ce,a1 as Ve,k as B,l as L,m as O,n as m,D as C,a5 as qe,_ as se,a7 as A,N as re,R as de,x as me,y as be,z as Xe,A as he,M as Ie,a8 as Ye,B as _e,a as K,c as V,a3 as ge,q as W,r as G,K as ke,a9 as ye,u as J,aa as je,ab as We}from"./index.c676ab83.js";import{d as w,f as ve}from"./index.3cde08c5.js";import{m as z}from"./stores.848b0f50.js";function Ge(l,e){const t='a[href], button, input, textarea, select, details, [tabindex]:not([tabindex="-1"])';let a,n;function o(r){r.shiftKey&&r.code==="Tab"&&(r.preventDefault(),n.focus())}function s(r){!r.shiftKey&&r.code==="Tab"&&(r.preventDefault(),a.focus())}const d=r=>{if(e===!1)return;const c=Array.from(l.querySelectorAll(t));c.length&&(a=c[0],n=c[c.length-1],r||a.focus(),a.addEventListener("keydown",o),n.addEventListener("keydown",s))};d(!1);function f(){a&&a.removeEventListener("keydown",o),n&&n.removeEventListener("keydown",s)}const u=(r,c)=>(r.length&&(f(),d(!0)),c),b=new MutationObserver(u);return b.observe(l,{childList:!0,subtree:!0}),{update(r){e=r,r?d(!1):f()},destroy(){f(),b.disconnect()}}}function pe(l){let e=l[12],t,a,n=Le(l);return{c(){n.c(),t=H()},l(o){n.l(o),t=H()},m(o,s){n.m(o,s),I(o,t,s),a=!0},p(o,s){s[0]&4096&&Oe(e,e=o[12])?(x(),F(n,1,1,Ve),$(),n=Le(o),n.c(),S(n,1),n.m(t.parentNode,t)):n.p(o,s)},i(o){a||(S(n),a=!0)},o(o){F(n),a=!1},d(o){o&&y(t),n.d(o)}}}function Je(l){var u,b;let e,t,a,n,o;const s=[(u=l[14])==null?void 0:u.props,{parent:l[15]}];var d=(b=l[14])==null?void 0:b.ref;function f(r){let c={$$slots:{default:[Ze]},$$scope:{ctx:r}};for(let h=0;h<s.length;h+=1)c=Z(c,s[h]);return{props:c}}return d&&(t=me(d,f(l))),{c(){e=B("div"),t&&be(t.$$.fragment),this.h()},l(r){e=L(r,"DIV",{class:!0,"data-testid":!0,role:!0,"aria-modal":!0,"aria-label":!0});var c=O(e);t&&Xe(t.$$.fragment,c),c.forEach(y),this.h()},h(){var r;m(e,"class",a="modal contents "+(((r=l[12][0])==null?void 0:r.modalClasses)??"")),m(e,"data-testid","modal-component"),m(e,"role","dialog"),m(e,"aria-modal","true"),m(e,"aria-label",n=l[12][0].title??"")},m(r,c){I(r,e,c),t&&he(t,e,null),o=!0},p(r,c){var g,k,v;const h=c[0]&49152?Ie(s,[c[0]&16384&&Ye((g=r[14])==null?void 0:g.props),c[0]&32768&&{parent:r[15]}]):{};if(c[0]&16384|c[1]&8192&&(h.$$scope={dirty:c,ctx:r}),c[0]&16384&&d!==(d=(k=r[14])==null?void 0:k.ref)){if(t){x();const _=t;F(_.$$.fragment,1,0,()=>{_e(_,1)}),$()}d?(t=me(d,f(r)),be(t.$$.fragment),S(t.$$.fragment,1),he(t,e,null)):t=null}else d&&t.$set(h);(!o||c[0]&4096&&a!==(a="modal contents "+(((v=r[12][0])==null?void 0:v.modalClasses)??"")))&&m(e,"class",a),(!o||c[0]&4096&&n!==(n=r[12][0].title??""))&&m(e,"aria-label",n)},i(r){o||(t&&S(t.$$.fragment,r),o=!0)},o(r){t&&F(t.$$.fragment,r),o=!1},d(r){r&&y(e),t&&_e(t)}}}function Qe(l){var k,v,_,E;let e,t,a,n,o,s,d,f,u=((k=l[12][0])==null?void 0:k.title)&&Ee(l),b=((v=l[12][0])==null?void 0:v.body)&&Ce(l),r=((_=l[12][0])==null?void 0:_.image)&&typeof((E=l[12][0])==null?void 0:E.image)=="string"&&Be(l);function c(T,p){if(T[12][0].type==="alert")return $e;if(T[12][0].type==="confirm")return xe;if(T[12][0].type==="prompt")return we}let h=c(l),g=h&&h(l);return{c(){e=B("div"),u&&u.c(),t=K(),b&&b.c(),a=K(),r&&r.c(),n=K(),g&&g.c(),this.h()},l(T){e=L(T,"DIV",{class:!0,"data-testid":!0,role:!0,"aria-modal":!0,"aria-label":!0});var p=O(e);u&&u.l(p),t=V(p),b&&b.l(p),a=V(p),r&&r.l(p),n=V(p),g&&g.l(p),p.forEach(y),this.h()},h(){m(e,"class",o="modal "+l[16]),m(e,"data-testid","modal"),m(e,"role","dialog"),m(e,"aria-modal","true"),m(e,"aria-label",s=l[12][0].title??"")},m(T,p){I(T,e,p),u&&u.m(e,null),C(e,t),b&&b.m(e,null),C(e,a),r&&r.m(e,null),C(e,n),g&&g.m(e,null),f=!0},p(T,p){var N,U,P,R;l=T,(N=l[12][0])!=null&&N.title?u?u.p(l,p):(u=Ee(l),u.c(),u.m(e,t)):u&&(u.d(1),u=null),(U=l[12][0])!=null&&U.body?b?b.p(l,p):(b=Ce(l),b.c(),b.m(e,a)):b&&(b.d(1),b=null),(P=l[12][0])!=null&&P.image&&typeof((R=l[12][0])==null?void 0:R.image)=="string"?r?r.p(l,p):(r=Be(l),r.c(),r.m(e,n)):r&&(r.d(1),r=null),h===(h=c(l))&&g?g.p(l,p):(g&&g.d(1),g=h&&h(l),g&&(g.c(),g.m(e,null))),(!f||p[0]&65536&&o!==(o="modal "+l[16]))&&m(e,"class",o),(!f||p[0]&4096&&s!==(s=l[12][0].title??""))&&m(e,"aria-label",s)},i(T){f||(se(()=>{f&&(d||(d=A(e,w,{duration:l[3],opacity:0,y:100},!0)),d.run(1))}),f=!0)},o(T){d||(d=A(e,w,{duration:l[3],opacity:0,y:100},!1)),d.run(0),f=!1},d(T){T&&y(e),u&&u.d(),b&&b.d(),r&&r.d(),g&&g.d(),T&&d&&d.end()}}}function Te(l){var n;let e,t=((n=l[14])==null?void 0:n.slot)+"",a;return{c(){e=new je(!1),a=H(),this.h()},l(o){e=We(o,!1),a=H(),this.h()},h(){e.a=a},m(o,s){e.m(t,o,s),I(o,a,s)},p(o,s){var d;s[0]&16384&&t!==(t=((d=o[14])==null?void 0:d.slot)+"")&&e.p(t)},d(o){o&&y(a),o&&e.d()}}}function Ze(l){var a;let e,t=((a=l[14])==null?void 0:a.slot)&&Te(l);return{c(){t&&t.c(),e=H()},l(n){t&&t.l(n),e=H()},m(n,o){t&&t.m(n,o),I(n,e,o)},p(n,o){var s;(s=n[14])!=null&&s.slot?t?t.p(n,o):(t=Te(n),t.c(),t.m(e.parentNode,e)):t&&(t.d(1),t=null)},d(n){t&&t.d(n),n&&y(e)}}}function Ee(l){let e,t=l[12][0].title+"",a;return{c(){e=B("header"),this.h()},l(n){e=L(n,"HEADER",{class:!0});var o=O(e);o.forEach(y),this.h()},h(){m(e,"class",a="modal-header "+l[9])},m(n,o){I(n,e,o),e.innerHTML=t},p(n,o){o[0]&4096&&t!==(t=n[12][0].title+"")&&(e.innerHTML=t),o[0]&512&&a!==(a="modal-header "+n[9])&&m(e,"class",a)},d(n){n&&y(e)}}}function Ce(l){let e,t=l[12][0].body+"",a;return{c(){e=B("article"),this.h()},l(n){e=L(n,"ARTICLE",{class:!0});var o=O(e);o.forEach(y),this.h()},h(){m(e,"class",a="modal-body "+l[10])},m(n,o){I(n,e,o),e.innerHTML=t},p(n,o){o[0]&4096&&t!==(t=n[12][0].body+"")&&(e.innerHTML=t),o[0]&1024&&a!==(a="modal-body "+n[10])&&m(e,"class",a)},d(n){n&&y(e)}}}function Be(l){let e,t;return{c(){e=B("img"),this.h()},l(a){e=L(a,"IMG",{class:!0,src:!0,alt:!0}),this.h()},h(){var a;m(e,"class","modal-image "+nt),ge(e.src,t=(a=l[12][0])==null?void 0:a.image)||m(e,"src",t),m(e,"alt","Modal")},m(a,n){I(a,e,n)},p(a,n){var o;n[0]&4096&&!ge(e.src,t=(o=a[12][0])==null?void 0:o.image)&&m(e,"src",t)},d(a){a&&y(e)}}}function we(l){let e,t,a,n,o,s,d,f,u,b,r,c,h,g,k=[{class:"modal-prompt-input input"},{name:"prompt"},{type:"text"},l[12][0].valueAttr],v={};for(let _=0;_<k.length;_+=1)v=Z(v,k[_]);return{c(){e=B("form"),t=B("input"),a=K(),n=B("footer"),o=B("button"),s=W(l[0]),f=K(),u=B("button"),b=W(l[2]),this.h()},l(_){e=L(_,"FORM",{class:!0});var E=O(e);t=L(E,"INPUT",{class:!0,name:!0,type:!0}),a=V(E),n=L(E,"FOOTER",{class:!0});var T=O(n);o=L(T,"BUTTON",{type:!0,class:!0});var p=O(o);s=G(p,l[0]),p.forEach(y),f=V(T),u=L(T,"BUTTON",{type:!0,class:!0});var N=O(u);b=G(N,l[2]),N.forEach(y),T.forEach(y),E.forEach(y),this.h()},h(){ke(t,v),m(o,"type","button"),m(o,"class",d="btn "+l[7]),m(u,"type","submit"),m(u,"class",r="btn "+l[8]),m(n,"class",c="modal-footer "+l[11]),m(e,"class","space-y-4")},m(_,E){I(_,e,E),C(e,t),t.autofocus&&t.focus(),ye(t,l[13]),C(e,a),C(e,n),C(n,o),C(o,s),C(n,f),C(n,u),C(u,b),h||(g=[M(t,"input",l[39]),M(o,"click",l[21]),M(e,"submit",l[23])],h=!0)},p(_,E){ke(t,v=Ie(k,[{class:"modal-prompt-input input"},{name:"prompt"},{type:"text"},E[0]&4096&&_[12][0].valueAttr])),E[0]&8192&&t.value!==_[13]&&ye(t,_[13]),E[0]&1&&J(s,_[0]),E[0]&128&&d!==(d="btn "+_[7])&&m(o,"class",d),E[0]&4&&J(b,_[2]),E[0]&256&&r!==(r="btn "+_[8])&&m(u,"class",r),E[0]&2048&&c!==(c="modal-footer "+_[11])&&m(n,"class",c)},d(_){_&&y(e),h=!1,re(g)}}}function xe(l){let e,t,a,n,o,s,d,f,u,b,r;return{c(){e=B("footer"),t=B("button"),a=W(l[0]),o=K(),s=B("button"),d=W(l[1]),this.h()},l(c){e=L(c,"FOOTER",{class:!0});var h=O(e);t=L(h,"BUTTON",{type:!0,class:!0});var g=O(t);a=G(g,l[0]),g.forEach(y),o=V(h),s=L(h,"BUTTON",{type:!0,class:!0});var k=O(s);d=G(k,l[1]),k.forEach(y),h.forEach(y),this.h()},h(){m(t,"type","button"),m(t,"class",n="btn "+l[7]),m(s,"type","button"),m(s,"class",f="btn "+l[8]),m(e,"class",u="modal-footer "+l[11])},m(c,h){I(c,e,h),C(e,t),C(t,a),C(e,o),C(e,s),C(s,d),b||(r=[M(t,"click",l[21]),M(s,"click",l[22])],b=!0)},p(c,h){h[0]&1&&J(a,c[0]),h[0]&128&&n!==(n="btn "+c[7])&&m(t,"class",n),h[0]&2&&J(d,c[1]),h[0]&256&&f!==(f="btn "+c[8])&&m(s,"class",f),h[0]&2048&&u!==(u="modal-footer "+c[11])&&m(e,"class",u)},d(c){c&&y(e),b=!1,re(r)}}}function $e(l){let e,t,a,n,o,s,d;return{c(){e=B("footer"),t=B("button"),a=W(l[0]),this.h()},l(f){e=L(f,"FOOTER",{class:!0});var u=O(e);t=L(u,"BUTTON",{type:!0,class:!0});var b=O(t);a=G(b,l[0]),b.forEach(y),u.forEach(y),this.h()},h(){m(t,"type","button"),m(t,"class",n="btn "+l[7]),m(e,"class",o="modal-footer "+l[11])},m(f,u){I(f,e,u),C(e,t),C(t,a),s||(d=M(t,"click",l[21]),s=!0)},p(f,u){u[0]&1&&J(a,f[0]),u[0]&128&&n!==(n="btn "+f[7])&&m(t,"class",n),u[0]&2048&&o!==(o="modal-footer "+f[11])&&m(e,"class",o)},d(f){f&&y(e),s=!1,d()}}}function Le(l){let e,t,a,n,o,s,d,f,u,b,r;const c=[Qe,Je],h=[];function g(k,v){return k[12][0].type!=="component"?0:1}return a=g(l),n=h[a]=c[a](l),{c(){e=B("div"),t=B("div"),n.c(),this.h()},l(k){e=L(k,"DIV",{class:!0,"data-testid":!0});var v=O(e);t=L(v,"DIV",{class:!0});var _=O(t);n.l(_),_.forEach(y),v.forEach(y),this.h()},h(){m(t,"class",o="modal-transition "+l[17]),m(e,"class",d="modal-backdrop "+l[18]),m(e,"data-testid","modal-backdrop")},m(k,v){I(k,e,v),C(e,t),h[a].m(t,null),u=!0,b||(r=[M(e,"mousedown",l[19]),M(e,"mouseup",l[20]),M(e,"touchstart",l[37]),M(e,"touchend",l[38]),qe(Ge.call(null,e,!0))],b=!0)},p(k,v){l=k;let _=a;a=g(l),a===_?h[a].p(l,v):(x(),F(h[_],1,1,()=>{h[_]=null}),$(),n=h[a],n?n.p(l,v):(n=h[a]=c[a](l),n.c()),S(n,1),n.m(t,null)),(!u||v[0]&131072&&o!==(o="modal-transition "+l[17]))&&m(t,"class",o),(!u||v[0]&262144&&d!==(d="modal-backdrop "+l[18]))&&m(e,"class",d)},i(k){u||(S(n),se(()=>{u&&(s||(s=A(t,w,{duration:l[3],opacity:l[4],x:l[5],y:l[6]},!0)),s.run(1))}),se(()=>{u&&(f||(f=A(e,ve,{duration:l[3]},!0)),f.run(1))}),u=!0)},o(k){F(n),s||(s=A(t,w,{duration:l[3],opacity:l[4],x:l[5],y:l[6]},!1)),s.run(0),f||(f=A(e,ve,{duration:l[3]},!1)),f.run(0),u=!1},d(k){k&&y(e),h[a].d(),k&&s&&s.end(),k&&f&&f.end(),b=!1,re(r)}}}function et(l){let e,t,a,n,o=l[12].length>0&&pe(l);return{c(){o&&o.c(),e=H()},l(s){o&&o.l(s),e=H()},m(s,d){o&&o.m(s,d),I(s,e,d),t=!0,a||(n=M(window,"keydown",l[24]),a=!0)},p(s,d){s[12].length>0?o?(o.p(s,d),d[0]&4096&&S(o,1)):(o=pe(s),o.c(),S(o,1),o.m(e.parentNode,e)):o&&(x(),F(o,1,1,()=>{o=null}),$())},i(s){t||(S(o),t=!0)},o(s){F(o),t=!1},d(s){o&&o.d(s),s&&y(e),a=!1,n()}}}const tt="fixed top-0 left-0 right-0 bottom-0",lt="w-full h-full p-4 overflow-y-auto flex justify-center",ot="block",nt="w-full h-auto";function at(l,e,t){let a,n,o,s,d,f;Ae(l,z,i=>t(12,f=i));const u=Ke();let{position:b="items-center"}=e,{components:r={}}=e,{duration:c=150}=e,{flyOpacity:h=0}=e,{flyX:g=0}=e,{flyY:k=100}=e,{background:v="bg-surface-100-800-token"}=e,{width:_="w-modal"}=e,{height:E="h-auto"}=e,{padding:T="p-4"}=e,{spacing:p="space-y-4"}=e,{rounded:N="rounded-container-token"}=e,{shadow:U="shadow-xl"}=e,{zIndex:P="z-[999]"}=e,{buttonNeutral:R="variant-ghost-surface"}=e,{buttonPositive:ee="variant-filled"}=e,{buttonTextCancel:q="Cancel"}=e,{buttonTextConfirm:X="Confirm"}=e,{buttonTextSubmit:Y="Submit"}=e,{regionBackdrop:Q="bg-surface-backdrop-token"}=e,{regionHeader:te="text-2xl font-bold"}=e,{regionBody:le="max-h-[200px] overflow-hidden"}=e,{regionFooter:oe="flex justify-end space-x-2"}=e,j;const ne={buttonTextCancel:q,buttonTextConfirm:X,buttonTextSubmit:Y};let fe,ae=!1;z.subscribe(i=>{i.length&&(i[0].type==="prompt"&&t(13,j=i[0].value),t(0,q=i[0].buttonTextCancel||ne.buttonTextCancel),t(1,X=i[0].buttonTextConfirm||ne.buttonTextConfirm),t(2,Y=i[0].buttonTextSubmit||ne.buttonTextSubmit),t(14,fe=typeof i[0].component=="string"?r[i[0].component]:i[0].component))});function Me(i){if(!(i.target instanceof Element))return;const D=i.target.classList;(D.contains("modal-backdrop")||D.contains("modal-transition"))&&(ae=!0)}function Ne(i){if(!(i.target instanceof Element))return;const D=i.target.classList;(D.contains("modal-backdrop")||D.contains("modal-transition"))&&ae&&(f[0].response&&f[0].response(void 0),z.close(),u("backdrop",i)),ae=!1}function ie(){f[0].response&&f[0].response(!1),z.close()}function Se(){f[0].response&&f[0].response(!0),z.close()}function De(i){i.preventDefault(),f[0].response&&f[0].response(j),z.close()}function He(i){f.length&&i.code==="Escape"&&ie()}function Fe(i){de.call(this,l,i)}function Ue(i){de.call(this,l,i)}function Pe(){j=this.value,t(13,j)}return l.$$set=i=>{t(43,e=Z(Z({},e),ce(i))),"position"in i&&t(25,b=i.position),"components"in i&&t(26,r=i.components),"duration"in i&&t(3,c=i.duration),"flyOpacity"in i&&t(4,h=i.flyOpacity),"flyX"in i&&t(5,g=i.flyX),"flyY"in i&&t(6,k=i.flyY),"background"in i&&t(27,v=i.background),"width"in i&&t(28,_=i.width),"height"in i&&t(29,E=i.height),"padding"in i&&t(30,T=i.padding),"spacing"in i&&t(31,p=i.spacing),"rounded"in i&&t(32,N=i.rounded),"shadow"in i&&t(33,U=i.shadow),"zIndex"in i&&t(34,P=i.zIndex),"buttonNeutral"in i&&t(7,R=i.buttonNeutral),"buttonPositive"in i&&t(8,ee=i.buttonPositive),"buttonTextCancel"in i&&t(0,q=i.buttonTextCancel),"buttonTextConfirm"in i&&t(1,X=i.buttonTextConfirm),"buttonTextSubmit"in i&&t(2,Y=i.buttonTextSubmit),"regionBackdrop"in i&&t(35,Q=i.regionBackdrop),"regionHeader"in i&&t(9,te=i.regionHeader),"regionBody"in i&&t(10,le=i.regionBody),"regionFooter"in i&&t(11,oe=i.regionFooter)},l.$$.update=()=>{var i,D,ue;l.$$.dirty[0]&33558528&&t(36,a=((i=f[0])==null?void 0:i.position)??b),t(18,n=`${tt} ${Q} ${P} ${e.class??""} ${((D=f[0])==null?void 0:D.backdropClasses)??""}`),l.$$.dirty[1]&32&&t(17,o=`${lt} ${a??""}`),l.$$.dirty[0]&2013270016|l.$$.dirty[1]&7&&t(16,s=`${ot} ${v} ${_} ${E} ${T} ${p} ${N} ${U} ${((ue=f[0])==null?void 0:ue.modalClasses)??""}`),l.$$.dirty[0]&2046824447|l.$$.dirty[1]&23&&t(15,d={position:b,duration:c,flyOpacity:h,flyX:g,flyY:k,background:v,width:_,height:E,padding:T,spacing:p,rounded:N,shadow:U,buttonNeutral:R,buttonPositive:ee,buttonTextCancel:q,buttonTextConfirm:X,buttonTextSubmit:Y,regionBackdrop:Q,regionHeader:te,regionBody:le,regionFooter:oe,onClose:ie})},e=ce(e),[q,X,Y,c,h,g,k,R,ee,te,le,oe,f,j,fe,d,s,o,n,Me,Ne,ie,Se,De,He,b,r,v,_,E,T,p,N,U,P,Q,a,Fe,Ue,Pe]}class ft extends Re{constructor(e){super(),ze(this,e,at,et,Oe,{position:25,components:26,duration:3,flyOpacity:4,flyX:5,flyY:6,background:27,width:28,height:29,padding:30,spacing:31,rounded:32,shadow:33,zIndex:34,buttonNeutral:7,buttonPositive:8,buttonTextCancel:0,buttonTextConfirm:1,buttonTextSubmit:2,regionBackdrop:35,regionHeader:9,regionBody:10,regionFooter:11},null,[-1,-1])}}export{ft as M};
//# sourceMappingURL=Modal.43f3f8c9.js.map