import{d as P,g as o,i as r,b,e as C,f as E,h as k,A as S,t as u,u as D,c as I,a as f,l as T,r as j,m as z,j as F,n as H,O,o as R,p as Q,s as U}from"./entry-client-e2f7a0db.js";import{C as W,g as y,a as G,b as J,c as K}from"./ContextTitles-67218bad.js";const q=[{label:["Quickstart","i-mingcute:safe-flash-fill"],items:[["Install","quickstart/install"],["Post Install","quickstart/post-install"],["Learn basic Lua","quickstart/learn-lua"]]},{label:["Custom config","i-mdi-cog"],items:[["Walkthrough","config/walkthrough"],["Snippets","config/snippets"],["Manage Plugins","config/plugins"],["LSP Configuration","config/lsp"],["Format & Lint","config/format_lint"],["Mappings","config/mappings"],["UI Customization","config/nvchad_ui"],["Customize colors","config/theming"]]},["Features","features","i-tabler:server-cog"],["Api Functions","api","i-mdi:atom-variant"],["Debug config","debugging-config","i-ri-bug-line"],["Contributing","contribute","i-mdi-github"],["Credits","credits","i-line-md:heart"]],V=u('<div class="grid pl-4 gap-3 rounded-none" border="0 l solid slate-2 dark:dark-4" ml-3="" pl-5=""></div>',2),X=u('<div class="grid gap-5"><button class="rounded-xl gap-20 bg-sky-1 text-slate-7 dark:bg-dark-3 dark:text-white-2 p-2 w-full"><div class="vertCentered" font-medium=""><div></div> <!#><!/></div><div></div></button><!#><!/></div>',14),Y=u('<div i-octicon-chevron-down-12=""></div>',2),Z=u('<div i-octicon-chevron-right-12=""></div>',2),ee=u(`<div class="h-fit  xl:sticky z-10 top-0  xl:flex flex-col
     bg-white-1 dark:bg-dark-2
     text-gray-600 dark:text-grey rounded-none pt-0 p-7 xl:p-0"><div h-full="" flex="" flex-col="" gap-5="" class="[&amp;_*]:text-base dark:text-slate-4"></div></div>`,4),te=u("<div></div>",2);function ne(e){const s=e.labels.filter(n=>D().pathname==`/docs/${n[1]}`).length,[t,l]=I(s==1);return(()=>{const n=o(X),i=n.firstChild,a=i.firstChild,c=a.firstChild,d=c.nextSibling,$=d.nextSibling,[_,p]=f($.nextSibling),x=a.nextSibling,w=i.nextSibling,[L,N]=f(w.nextSibling);return i.$$click=()=>l(!t()),r(a,()=>e.BtnLabel[0],_,p),r(x,(()=>{const g=k(()=>!!t());return()=>g()?o(Y):o(Z)})()),r(n,b(T,{get when(){return t()},get children(){const g=o(V);return r(g,()=>e.labels.map(h=>b(S,{rel:"prefetch",activeClass:"text-slate-7 dark:text-white-2 font-bold",get href(){return h[1]},get children(){return h[0]}}))),g}}),L,N),C(g=>{const h=e.BtnLabel[1],B=`text-xl bg-slate-6 text-slate-1 dark:bg-dark-4 p-1 rounded-full
                  ${t()?"dark:text-red-3":"dark:text-white-2"}`;return h!==g._v$&&E(c,g._v$=h),B!==g._v$2&&E(x,g._v$2=B),g},{_v$:void 0,_v$2:void 0}),j(),n})()}function ie(){return(()=>{const e=o(ee),s=e.firstChild;return r(s,()=>q.map(t=>t.label?b(ne,{get BtnLabel(){return t.label},get labels(){return t.items}}):b(S,{rel:"prefetch",get href(){return t[1]},vertCentered:"",activeClass:"font-medium text-blue-5 dark:text-blue-3",get children(){return[(()=>{const l=o(te);return C(()=>E(l,t[2])),l})(),k(()=>t[0])]}}))),C(()=>e.hidden=!M()),e})()}P(["click"]);const le=u('<div flex="" justify-between=""><!#><!/><!#><!/></div>',6),re=u('<button border="1 solid slate-2" class="!bg-transparent text-blue-6 dark:text-blue-4  p-3 px-5 dark:border-dark-4"><div i-ph-arrow-left-bold=""></div><!#><!/></button>',6),A=u("<div></div>",2),se=u('<button border="1 solid slate-2" class="!bg-transparent text-blue-6 dark:text-blue-4  p-3 px-5 dark:border-dark-4"><!#><!/><div i-ph-arrow-right-bold=""></div></button>',6);let m=[];q.forEach(e=>{Array.isArray(e)?m.push(e):e.items.forEach(s=>{m.push(s)})});function v(e,s){let t="",l=D().pathname.replace(/^\/docs\//,"");return m.forEach((n,i)=>{l==n[1]&&m[i+e]&&(t=m[i+e][s?1:0])}),t}const ae=()=>(()=>{const e=o(le),s=e.firstChild,[t,l]=f(s.nextSibling),n=t.nextSibling,[i,a]=f(n.nextSibling);return r(e,(()=>{const c=k(()=>!!v(-1));return()=>c()?b(S,{get href(){return v(-1,!0)},get children(){const d=o(re),$=d.firstChild,_=$.nextSibling,[p,x]=f(_.nextSibling);return r(d,()=>v(-1),p,x),d}}):o(A)})(),t,l),r(e,(()=>{const c=k(()=>!!v(1));return()=>c()?b(S,{get href(){return v(1,!0)},get children(){const d=o(se),$=d.firstChild,[_,p]=f($.nextSibling);return _.nextSibling,r(d,()=>v(1),_,p),d}}):o(A)})(),i,a),e})();const oe=e=>{document.getElementById(e)?.querySelectorAll("pre")?.forEach(function(l){const n=document.createElement("button");n.classList="copyBtn",n.ariaLabel="copy button";const i=document.createElement("div");i.classList="i-uil:clipboard",n.appendChild(i),n.addEventListener("click",function(){const a=n.querySelector("div");a.classList="i-line-md:confirm-circle clickedCopyBtn";const c=l.textContent;navigator.clipboard.writeText(c),setTimeout(()=>{a.classList="i-uil:clipboard"},3e3)}),l.appendChild(n)})},ce=u('<div grid="" class="xl:grid-cols-[auto_1fr] max-w-[1700px] mx-auto my-8 px-4"><!#><!/><div class="xl:blur-none"><div class="flex flex-col-reverse xl:grid xl:grid-cols-[1fr_auto]"><div xl-px-10=""><div id="DocContent" w-full=""></div><!#><!/></div><!#><!/></div></div></div>',16),[M,ge]=I(!1);function be(){return z(()=>{window.addEventListener("scroll",()=>y("DocContent")),R(()=>window.removeEventListener("scroll",()=>y("DocContent")))}),F(H(()=>Q().pathname,()=>{setTimeout(()=>{oe("DocContent"),G(),y("DocContent"),J()},50)})),(()=>{const e=o(ce),s=e.firstChild,[t,l]=f(s.nextSibling),n=t.nextSibling,i=n.firstChild,a=i.firstChild,c=a.firstChild,d=c.nextSibling,[$,_]=f(d.nextSibling),p=a.nextSibling,[x,w]=f(p.nextSibling);return r(e,b(ie,{}),t,l),r(c,b(O,{})),r(a,b(ae,{}),$,_),r(i,(()=>{const L=k(()=>K.length>1);return()=>L()&&b(W,{})})(),x,w),C(()=>U(n,"blur",M()?"sm":"")),e})()}export{be as default,ge as showSidebar,M as sideBarShown};