import{S as K,i as L,s as q,a as S,k as y,e as V,c as T,l as E,m as v,h as c,n as o,b as A,G as m,Q as j,J as D,C as O,N as H,o as U,E as C,q as N,F as I,r as B,O as R}from"../../chunks/paths-7ccf1957.js";import{s as W}from"../../chunks/kakao-cf586f8f.js";function F(d){let s,t,e,r;return{c(){s=y("button"),t=N("Share"),this.h()},l(n){s=E(n,"BUTTON",{class:!0});var i=v(s);t=B(i,"Share"),i.forEach(c),this.h()},h(){o(s,"class","btn btn-xs sm:btn-sm md:btn-md lg:btn-lg svelte-1pw9x3o")},m(n,i){A(n,s,i),m(s,t),e||(r=D(s,"click",d[6]),e=!0)},p:O,d(n){n&&c(s),e=!1,r()}}}function G(d){let s,t,e;return{c(){s=y("a"),t=N("Share"),this.h()},l(r){s=E(r,"A",{href:!0,target:!0,class:!0});var n=v(s);t=B(n,"Share"),n.forEach(c),this.h()},h(){o(s,"href",e=`intent://${d[5](d[1]).replace("https://","")}#Intent;scheme=https;package=com.android.chrome;end'`),o(s,"target","__blank"),o(s,"class","btn btn-xs sm:btn-sm md:btn-md lg:btn-lg svelte-1pw9x3o")},m(r,n){A(r,s,n),m(s,t)},p(r,n){n&2&&e!==(e=`intent://${r[5](r[1]).replace("https://","")}#Intent;scheme=https;package=com.android.chrome;end'`)&&o(s,"href",e)},d(r){r&&c(s)}}}function P(d){let s,t,e,r,n,i,f;return{c(){s=y("div"),t=y("div"),e=C("svg"),r=C("path"),n=S(),i=y("span"),f=N("Link copied!"),this.h()},l(h){s=E(h,"DIV",{class:!0});var _=v(s);t=E(_,"DIV",{});var p=v(t);e=I(p,"svg",{xmlns:!0,class:!0,fill:!0,viewBox:!0});var b=v(e);r=I(b,"path",{"stroke-linecap":!0,"stroke-linejoin":!0,"stroke-width":!0,d:!0}),v(r).forEach(c),b.forEach(c),n=T(p),i=E(p,"SPAN",{});var w=v(i);f=B(w,"Link copied!"),w.forEach(c),p.forEach(c),_.forEach(c),this.h()},h(){o(r,"stroke-linecap","round"),o(r,"stroke-linejoin","round"),o(r,"stroke-width","2"),o(r,"d","M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"),o(e,"xmlns","http://www.w3.org/2000/svg"),o(e,"class","stroke-current flex-shrink-0 h-6 w-6"),o(e,"fill","none"),o(e,"viewBox","0 0 24 24"),o(s,"class","alert alert-success shadow-lg svelte-1pw9x3o")},m(h,_){A(h,s,_),m(s,t),m(t,e),m(e,r),m(t,n),m(t,i),m(i,f)},d(h){h&&c(s)}}}function M(d){let s,t,e,r,n,i,f;return{c(){s=y("div"),t=y("div"),e=C("svg"),r=C("path"),n=S(),i=y("span"),f=N("Please enter your message"),this.h()},l(h){s=E(h,"DIV",{class:!0});var _=v(s);t=E(_,"DIV",{});var p=v(t);e=I(p,"svg",{xmlns:!0,class:!0,fill:!0,viewBox:!0});var b=v(e);r=I(b,"path",{"stroke-linecap":!0,"stroke-linejoin":!0,"stroke-width":!0,d:!0}),v(r).forEach(c),b.forEach(c),n=T(p),i=E(p,"SPAN",{});var w=v(i);f=B(w,"Please enter your message"),w.forEach(c),p.forEach(c),_.forEach(c),this.h()},h(){o(r,"stroke-linecap","round"),o(r,"stroke-linejoin","round"),o(r,"stroke-width","2"),o(r,"d","M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"),o(e,"xmlns","http://www.w3.org/2000/svg"),o(e,"class","stroke-current flex-shrink-0 h-6 w-6"),o(e,"fill","none"),o(e,"viewBox","0 0 24 24"),o(s,"class","alert alert-error shadow-lg svelte-1pw9x3o")},m(h,_){A(h,s,_),m(s,t),m(t,e),m(e,r),m(t,n),m(t,i),m(i,f)},d(h){h&&c(s)}}}function z(d){let s,t,e,r,n,i,f;return{c(){s=y("div"),t=y("div"),e=C("svg"),r=C("path"),n=S(),i=y("span"),f=N("Something went wrong!"),this.h()},l(h){s=E(h,"DIV",{class:!0});var _=v(s);t=E(_,"DIV",{});var p=v(t);e=I(p,"svg",{xmlns:!0,class:!0,fill:!0,viewBox:!0});var b=v(e);r=I(b,"path",{"stroke-linecap":!0,"stroke-linejoin":!0,"stroke-width":!0,d:!0}),v(r).forEach(c),b.forEach(c),n=T(p),i=E(p,"SPAN",{});var w=v(i);f=B(w,"Something went wrong!"),w.forEach(c),p.forEach(c),_.forEach(c),this.h()},h(){o(r,"stroke-linecap","round"),o(r,"stroke-linejoin","round"),o(r,"stroke-width","2"),o(r,"d","M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"),o(e,"xmlns","http://www.w3.org/2000/svg"),o(e,"class","stroke-current flex-shrink-0 h-6 w-6"),o(e,"fill","none"),o(e,"viewBox","0 0 24 24"),o(s,"class","alert alert-error shadow-lg svelte-1pw9x3o")},m(h,_){A(h,s,_),m(s,t),m(t,e),m(e,r),m(t,n),m(t,i),m(i,f)},d(h){h&&c(s)}}}function J(d){let s,t,e,r,n,i,f,h,_,p;function b(l,g){return l[0]?G:F}let w=b(d),x=w(d),k=d[3]&&P(),a=d[4]&&M(),u=d[2]&&z();return{c(){x.c(),s=S(),t=y("div"),e=y("textarea"),n=S(),k&&k.c(),i=S(),a&&a.c(),f=S(),u&&u.c(),h=V(),this.h()},l(l){x.l(l),s=T(l),t=E(l,"DIV",{id:!0,class:!0});var g=v(t);e=E(g,"TEXTAREA",{placeholder:!0,class:!0}),v(e).forEach(c),g.forEach(c),n=T(l),k&&k.l(l),i=T(l),a&&a.l(l),f=T(l),u&&u.l(l),h=V(),this.h()},h(){o(e,"placeholder","Type here"),o(e,"class",r="textarea textarea-ghost "+(d[1].length>0?"text-error":"")+" svelte-1pw9x3o"),o(t,"id","title-container"),o(t,"class","svelte-1pw9x3o")},m(l,g){x.m(l,g),A(l,s,g),A(l,t,g),m(t,e),j(e,d[1]),A(l,n,g),k&&k.m(l,g),A(l,i,g),a&&a.m(l,g),A(l,f,g),u&&u.m(l,g),A(l,h,g),_||(p=[D(e,"keydown",d[7]),D(e,"keyup",d[7]),D(e,"input",d[10])],_=!0)},p(l,[g]){w===(w=b(l))&&x?x.p(l,g):(x.d(1),x=w(l),x&&(x.c(),x.m(s.parentNode,s))),g&2&&r!==(r="textarea textarea-ghost "+(l[1].length>0?"text-error":"")+" svelte-1pw9x3o")&&o(e,"class",r),g&2&&j(e,l[1]),l[3]?k||(k=P(),k.c(),k.m(i.parentNode,i)):k&&(k.d(1),k=null),l[4]?a||(a=M(),a.c(),a.m(f.parentNode,f)):a&&(a.d(1),a=null),l[2]?u||(u=z(),u.c(),u.m(h.parentNode,h)):u&&(u.d(1),u=null)},i:O,o:O,d(l){x.d(l),l&&c(s),l&&c(t),l&&c(n),k&&k.d(l),l&&c(i),a&&a.d(l),l&&c(f),u&&u.d(l),l&&c(h),_=!1,H(p)}}}function Q(d,s,t){let e,r,n,i,f,{data:h}=s;const _=!0,p=a=>{const l=`https://swimmingkiim.github.io${R}?message=${a}`;return encodeURI(l)},b=()=>{const a=document.createElement("textarea");a.value=p(e),a.readOnly=!0,a.style.top="0",a.style.left="0",a.style.position="fixed",a.style.display="hidden",document.body.appendChild(a),a.focus(),a.select();try{const u=document.execCommand("copy");return document.body.removeChild(a),!0}catch{return document.body.removeChild(a),!1}},w=async()=>{if(e.length<=0){t(4,n=!0),setTimeout(()=>{t(4,n=!1)},3e3);return}const a=p(e);navigator.userAgent.indexOf("KAKAOTALK")>=0?W(a,e):navigator.share?navigator.share({title:"Christmas Message",url:a}):navigator.clipboard.writeText(a).then(()=>{t(3,r=!0),setTimeout(()=>{t(3,r=!1)},3e3)}).catch(u=>{b()?(t(3,r=!0),setTimeout(()=>{t(3,r=!1)},3e3)):(t(2,i=!0),setTimeout(()=>{t(2,i=!1)},3e3))})},x=a=>{let u=a.target;if(a.type==="set-textarea-height"&&(u=document.querySelector("textarea")),u){const l=u;(a.type==="set-textarea-height"||l.clientHeight<l.scrollHeight)&&(l.style.height=l.scrollHeight+"px")}};U(()=>{h.message&&(t(1,e=h.message),setTimeout(()=>{x(new Event("set-textarea-height"))},50)),!navigator.share&&!navigator.clipboard&&t(0,f=!0)});function k(){e=this.value,t(1,e)}return d.$$set=a=>{"data"in a&&t(8,h=a.data)},t(1,e=""),t(3,r=!1),t(4,n=!1),t(2,i=!1),t(0,f=!1),[f,e,i,r,n,p,w,x,h,_,k]}class Z extends K{constructor(s){super(),L(this,s,Q,J,q,{data:8,prerender:9})}get prerender(){return this.$$.ctx[9]}}export{Z as default};
