import{o as i,y as u,z as c,b as l,d as f,I as s,a1 as d,u as m,h,l as _,a2 as y,a3 as A,a4 as g,a5 as P,a6 as v,a7 as w,a8 as C,a9 as b,aa as R,ab as E,ac as L,ad as x,ae as D,af as T}from"./chunks/framework.0799945b.js";import{t as r}from"./chunks/theme.52324978.js";const O={__name:"MyLayout",setup(e){const{Layout:a}=r;return(t,n)=>(i(),u(l(a),null,{"layout-bottom":c(()=>[]),_:1}))}};const S={...r,Layout:O};function p(e){if(e.extends){const a=p(e.extends);return{...a,...e,async enhanceApp(t){a.enhanceApp&&await a.enhanceApp(t),e.enhanceApp&&await e.enhanceApp(t)}}}return e}const o=p(S),j=f({name:"VitePressApp",setup(){const{site:e}=m();return h(()=>{_(()=>{document.documentElement.lang=e.value.lang,document.documentElement.dir=e.value.dir})}),y(),A(),g(),o.setup&&o.setup(),()=>P(o.Layout)}});async function B(){const e=I(),a=F();a.provide(v,e);const t=w(e.route);return a.provide(C,t),a.component("Content",b),a.component("ClientOnly",R),Object.defineProperties(a.config.globalProperties,{$frontmatter:{get(){return t.frontmatter.value}},$params:{get(){return t.page.value.params}}}),o.enhanceApp&&await o.enhanceApp({app:a,router:e,siteData:E}),{app:a,router:e,data:t}}function F(){return L(j)}function I(){let e=s,a;return x(t=>{let n=D(t);return e&&(a=n),(e||a===n)&&(n=n.replace(/\.js$/,".lean.js")),s&&(e=!1),T(()=>import(n),[])},o.NotFound)}s&&B().then(({app:e,router:a,data:t})=>{a.go().then(()=>{d(a.route,t.site),e.mount("#app")})});export{B as createApp};