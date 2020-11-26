import{S as e,i as t,s as n,e as a,t as r,c as s,a as l,b as c,d as i,f as o,g as h,h as d,n as u,j as f,k as m,l as g,m as p,o as $,p as v,q as E,r as w,u as T,v as b,w as D,x as I,y as S,z as H,A as L,B as M,C as y,D as R}from"./client.cba21230.js";import{c as N,h as k,L as _}from"./createOctokit.7b7bf374.js";function A(e,t,n){const a=e.slice();return a[5]=t[n],a}function U(e){let t,n,f,m=w.i18n.allSystemsOperational+"";return{c(){t=a("article"),n=r("✅   "),f=r(m),this.h()},l(e){t=s(e,"ARTICLE",{class:!0});var a=l(t);n=c(a,"✅   "),f=c(a,m),a.forEach(i),this.h()},h(){o(t,"class","good svelte-18zj4n9")},m(e,a){h(e,t,a),d(t,n),d(t,f)},p:u,d(e){e&&i(t)}}}function O(e){let t,n,o,g,p=w.i18n.activeIncidents+"",$=e[1],v=[];for(let t=0;t<$.length;t+=1)v[t]=C(A(e,$,t));return{c(){t=a("h2"),n=r(p),o=f();for(let e=0;e<v.length;e+=1)v[e].c();g=b()},l(e){t=s(e,"H2",{});var a=l(t);n=c(a,p),a.forEach(i),o=m(e);for(let t=0;t<v.length;t+=1)v[t].l(e);g=b()},m(e,a){h(e,t,a),d(t,n),h(e,o,a);for(let t=0;t<v.length;t+=1)v[t].m(e,a);h(e,g,a)},p(e,t){if(2&t){let n;for($=e[1],n=0;n<$.length;n+=1){const a=A(e,$,n);v[n]?v[n].p(a,t):(v[n]=C(a),v[n].c(),v[n].m(g.parentNode,g))}for(;n<v.length;n+=1)v[n].d(1);v.length=$.length}},i:u,o:u,d(e){e&&i(t),e&&i(o),D(v,e),e&&i(g)}}}function V(e){let t,n;return t=new _({}),{c(){I(t.$$.fragment)},l(e){S(t.$$.fragment,e)},m(e,a){H(t,e,a),n=!0},p:u,i(e){n||(v(t.$$.fragment,e),n=!0)},o(e){p(t.$$.fragment,e),n=!1},d(e){L(t,e)}}}function C(e){let t,n,u,g,p,$,v,E,b,D,I,S,H,L,M,y=e[5].title.replace("🛑","").replace("⚠️","").trim()+"",R=w.i18n.activeIncidentSummary.replace(/\$DATE/g,new Date(e[5].created_at).toLocaleString()).replace(/\$POSTS/g,e[5].comments)+"",N=w.i18n.incidentReport.replace(/\$NUMBER/g,e[5].number)+"";return{c(){t=a("article"),n=a("div"),u=a("div"),g=a("h4"),p=r(y),$=f(),v=a("div"),E=r(R),b=f(),D=a("div"),I=a("a"),S=r(N),L=f(),this.h()},l(e){t=s(e,"ARTICLE",{class:!0});var a=l(t);n=s(a,"DIV",{class:!0});var r=l(n);u=s(r,"DIV",{});var o=l(u);g=s(o,"H4",{});var h=l(g);p=c(h,y),h.forEach(i),$=m(o),v=s(o,"DIV",{});var d=l(v);E=c(d,R),d.forEach(i),o.forEach(i),b=m(r),D=s(r,"DIV",{class:!0});var f=l(D);I=s(f,"A",{href:!0});var w=l(I);S=c(w,N),w.forEach(i),f.forEach(i),r.forEach(i),L=m(a),a.forEach(i),this.h()},h(){o(I,"href",H=`${w.path}/incident/${e[5].number}`),o(D,"class","f r"),o(n,"class","f"),o(t,"class",M="down link "+(e[5].title.includes("degraded")?"degraded":"")+" svelte-18zj4n9")},m(e,a){h(e,t,a),d(t,n),d(n,u),d(u,g),d(g,p),d(u,$),d(u,v),d(v,E),d(n,b),d(n,D),d(D,I),d(I,S),d(t,L)},p(e,n){2&n&&y!==(y=e[5].title.replace("🛑","").replace("⚠️","").trim()+"")&&T(p,y),2&n&&R!==(R=w.i18n.activeIncidentSummary.replace(/\$DATE/g,new Date(e[5].created_at).toLocaleString()).replace(/\$POSTS/g,e[5].comments)+"")&&T(E,R),2&n&&N!==(N=w.i18n.incidentReport.replace(/\$NUMBER/g,e[5].number)+"")&&T(S,N),2&n&&H!==(H=`${w.path}/incident/${e[5].number}`)&&o(I,"href",H),2&n&&M!==(M="down link "+(e[5].title.includes("degraded")?"degraded":"")+" svelte-18zj4n9")&&o(t,"class",M)},d(e){e&&i(t)}}}function j(e){let t,n,r,c,d,u=!e[1].length&&!e[0]&&U();const E=[V,O],w=[];function T(e,t){return e[0]?0:e[1].length?1:-1}return~(r=T(e))&&(c=w[r]=E[r](e)),{c(){u&&u.c(),t=f(),n=a("section"),c&&c.c(),this.h()},l(e){u&&u.l(e),t=m(e),n=s(e,"SECTION",{class:!0});var a=l(n);c&&c.l(a),a.forEach(i),this.h()},h(){o(n,"class","svelte-18zj4n9")},m(e,a){u&&u.m(e,a),h(e,t,a),h(e,n,a),~r&&w[r].m(n,null),d=!0},p(e,[a]){e[1].length||e[0]?u&&(u.d(1),u=null):u?u.p(e,a):(u=U(),u.c(),u.m(t.parentNode,t));let s=r;r=T(e),r===s?~r&&w[r].p(e,a):(c&&(g(),p(w[s],1,1,(()=>{w[s]=null})),$()),~r?(c=w[r],c?c.p(e,a):(c=w[r]=E[r](e),c.c()),v(c,1),c.m(n,null)):c=null)},i(e){d||(v(c),d=!0)},o(e){p(c),d=!1},d(e){u&&u.d(e),e&&i(t),e&&i(n),~r&&w[r].d()}}}function x(e,t,n){let a=!0;const r=N(),s=w.owner,l=w.repo;let c=[];return E((async()=>{try{n(1,c=(await r.issues.listForRepo({owner:s,repo:l,state:"open",filter:"all",sort:"created",direction:"desc",labels:"status"})).data),n(1,c=c.map(((e,t)=>(e.showHeading=0===t||new Date(c[t-1].created_at).toLocaleDateString()!==new Date(e.created_at).toLocaleDateString(),e))))}catch(e){k(e)}n(0,a=!1)})),[a,c]}class z extends e{constructor(e){super(),t(this,e,x,j,n,{})}}function P(e,t,n){const a=e.slice();return a[8]=t[n],a}function B(e){let t,n=e[1],a=[];for(let t=0;t<n.length;t+=1)a[t]=q(P(e,n,t));return{c(){for(let e=0;e<a.length;e+=1)a[e].c();t=b()},l(e){for(let t=0;t<a.length;t+=1)a[t].l(e);t=b()},m(e,n){for(let t=0;t<a.length;t+=1)a[t].m(e,n);h(e,t,n)},p(e,r){if(6&r){let s;for(n=e[1],s=0;s<n.length;s+=1){const l=P(e,n,s);a[s]?a[s].p(l,r):(a[s]=q(l),a[s].c(),a[s].m(t.parentNode,t))}for(;s<a.length;s+=1)a[s].d(1);a.length=n.length}},i:u,o:u,d(e){D(a,e),e&&i(t)}}}function F(e){let t,n;return t=new _({}),{c(){I(t.$$.fragment)},l(e){S(t.$$.fragment,e)},m(e,a){H(t,e,a),n=!0},p:u,i(e){n||(v(t.$$.fragment,e),n=!0)},o(e){p(t.$$.fragment,e),n=!1},d(e){L(t,e)}}}function q(e){let t,n,u,g,p,$,v,E,b,D,I,S,H=e[8].name+"",L=w.i18n.overallUptime.replace(/\$UPTIME/g,e[8].uptime)+"",y=w.i18n.averageResponseTime.replace(/\$TIME/g,e[8].time)+"";return{c(){t=a("article"),n=a("h4"),u=a("a"),g=r(H),$=f(),v=a("div"),E=f(),b=a("div"),D=f(),this.h()},l(e){t=s(e,"ARTICLE",{class:!0,style:!0});var a=l(t);n=s(a,"H4",{});var r=l(n);u=s(r,"A",{href:!0});var o=l(u);g=c(o,H),o.forEach(i),r.forEach(i),$=m(a),v=s(a,"DIV",{}),l(v).forEach(i),E=m(a),b=s(a,"DIV",{}),l(b).forEach(i),D=m(a),a.forEach(i),this.h()},h(){o(u,"href",p=`${w.path}/history/${e[8].slug}`),o(t,"class",I=M(`${e[8].status} link`)+" svelte-b6aso6"),o(t,"style",S=`background-image: url("${e[2]}/${e[8].slug}.png`)},m(e,a){h(e,t,a),d(t,n),d(n,u),d(u,g),d(t,$),d(t,v),v.innerHTML=L,d(t,E),d(t,b),b.innerHTML=y,d(t,D)},p(e,n){2&n&&H!==(H=e[8].name+"")&&T(g,H),2&n&&p!==(p=`${w.path}/history/${e[8].slug}`)&&o(u,"href",p),2&n&&L!==(L=w.i18n.overallUptime.replace(/\$UPTIME/g,e[8].uptime)+"")&&(v.innerHTML=L),2&n&&y!==(y=w.i18n.averageResponseTime.replace(/\$TIME/g,e[8].time)+"")&&(b.innerHTML=y),2&n&&I!==(I=M(`${e[8].status} link`)+" svelte-b6aso6")&&o(t,"class",I),2&n&&S!==(S=`background-image: url("${e[2]}/${e[8].slug}.png`)&&o(t,"style",S)},d(e){e&&i(t)}}}function J(e){let t,n,o,u,E,T,b,D=w.i18n.liveStatus+"";const I=[F,B],S=[];function H(e,t){return e[0]?0:e[1].length?1:-1}return~(E=H(e))&&(T=S[E]=I[E](e)),{c(){t=a("h2"),n=r(D),o=f(),u=a("section"),T&&T.c()},l(e){t=s(e,"H2",{});var a=l(t);n=c(a,D),a.forEach(i),o=m(e),u=s(e,"SECTION",{});var r=l(u);T&&T.l(r),r.forEach(i)},m(e,a){h(e,t,a),d(t,n),h(e,o,a),h(e,u,a),~E&&S[E].m(u,null),b=!0},p(e,[t]){let n=E;E=H(e),E===n?~E&&S[E].p(e,t):(T&&(g(),p(S[n],1,1,(()=>{S[n]=null})),$()),~E?(T=S[E],T?T.p(e,t):(T=S[E]=I[E](e),T.c()),v(T,1),T.m(u,null)):T=null)},i(e){b||(v(T),b=!0)},o(e){p(T),b=!1},d(e){e&&i(t),e&&i(o),e&&i(u),~E&&S[E].d()}}}function G(e,t,n){let a=!0;const r=N(),s=w.owner,l=w.repo;let{apiBaseUrl:c}=w["status-website"]||{},i=[];c||(c="https://api.github.com");const o=`${c.includes("api.github.com")?"https://raw.githubusercontent.com":c}/${s}/${l}/master/graphs`;return E((async()=>{try{n(1,i=JSON.parse(atob((await r.repos.getContent({owner:s,repo:l,path:"history/summary.json"})).data.content.replace(/\n/g,""))))}catch(e){k(e)}n(0,a=!1)})),[a,i,o]}class K extends e{constructor(e){super(),t(this,e,G,J,n,{})}}function Q(e,t,n){const a=e.slice();return a[5]=t[n],a}function W(e){let t,n,g,p,$=w.i18n.pastIncidents+"",v=e[1],E=[];for(let t=0;t<v.length;t+=1)E[t]=Z(Q(e,v,t));return{c(){t=a("h2"),n=r($),g=f();for(let e=0;e<E.length;e+=1)E[e].c();p=b(),this.h()},l(e){t=s(e,"H2",{class:!0});var a=l(t);n=c(a,$),a.forEach(i),g=m(e);for(let t=0;t<E.length;t+=1)E[t].l(e);p=b(),this.h()},h(){o(t,"class","svelte-18y4uo2")},m(e,a){h(e,t,a),d(t,n),h(e,g,a);for(let t=0;t<E.length;t+=1)E[t].m(e,a);h(e,p,a)},p(e,t){if(2&t){let n;for(v=e[1],n=0;n<v.length;n+=1){const a=Q(e,v,n);E[n]?E[n].p(a,t):(E[n]=Z(a),E[n].c(),E[n].m(p.parentNode,p))}for(;n<E.length;n+=1)E[n].d(1);E.length=v.length}},i:u,o:u,d(e){e&&i(t),e&&i(g),D(E,e),e&&i(p)}}}function X(e){let t,n;return t=new _({}),{c(){I(t.$$.fragment)},l(e){S(t.$$.fragment,e)},m(e,a){H(t,e,a),n=!0},p:u,i(e){n||(v(t.$$.fragment,e),n=!0)},o(e){p(t.$$.fragment,e),n=!1},d(e){L(t,e)}}}function Y(e){let t,n,o=new Date(e[5].created_at).toLocaleDateString()+"";return{c(){t=a("h3"),n=r(o)},l(e){t=s(e,"H3",{});var a=l(t);n=c(a,o),a.forEach(i)},m(e,a){h(e,t,a),d(t,n)},p(e,t){2&t&&o!==(o=new Date(e[5].created_at).toLocaleDateString()+"")&&T(n,o)},d(e){e&&i(t)}}}function Z(e){let t,n,u,g,p,$,v,E,b,D,I,S,H,L,M,y=e[5].title.replace("🛑","").replace("⚠️","").trim()+"",R=w.i18n.pastIncidentsResolved.replace(/\$MINUTES/g,((new Date(e[5].closed_at).getTime()-new Date(e[5].created_at).getTime())/6e4).toFixed(0)).replace(/\$POSTS/g,e[5].comments)+"",N=w.i18n.incidentReport.replace(/\$NUMBER/g,e[5].number)+"",k=e[5].showHeading&&Y(e);return{c(){k&&k.c(),t=f(),n=a("article"),u=a("div"),g=a("div"),p=a("h4"),$=r(y),v=f(),E=a("div"),b=f(),D=a("div"),I=a("a"),S=r(N),L=f(),this.h()},l(e){k&&k.l(e),t=m(e),n=s(e,"ARTICLE",{class:!0});var a=l(n);u=s(a,"DIV",{class:!0});var r=l(u);g=s(r,"DIV",{});var o=l(g);p=s(o,"H4",{});var h=l(p);$=c(h,y),h.forEach(i),v=m(o),E=s(o,"DIV",{}),l(E).forEach(i),o.forEach(i),b=m(r),D=s(r,"DIV",{class:!0});var d=l(D);I=s(d,"A",{href:!0});var f=l(I);S=c(f,N),f.forEach(i),d.forEach(i),r.forEach(i),L=m(a),a.forEach(i),this.h()},h(){o(I,"href",H=`${w.path}/incident/${e[5].number}`),o(D,"class","f r"),o(u,"class","f"),o(n,"class",M="down link "+(e[5].title.includes("degraded")?"degraded":""))},m(e,a){k&&k.m(e,a),h(e,t,a),h(e,n,a),d(n,u),d(u,g),d(g,p),d(p,$),d(g,v),d(g,E),E.innerHTML=R,d(u,b),d(u,D),d(D,I),d(I,S),d(n,L)},p(e,a){e[5].showHeading?k?k.p(e,a):(k=Y(e),k.c(),k.m(t.parentNode,t)):k&&(k.d(1),k=null),2&a&&y!==(y=e[5].title.replace("🛑","").replace("⚠️","").trim()+"")&&T($,y),2&a&&R!==(R=w.i18n.pastIncidentsResolved.replace(/\$MINUTES/g,((new Date(e[5].closed_at).getTime()-new Date(e[5].created_at).getTime())/6e4).toFixed(0)).replace(/\$POSTS/g,e[5].comments)+"")&&(E.innerHTML=R),2&a&&N!==(N=w.i18n.incidentReport.replace(/\$NUMBER/g,e[5].number)+"")&&T(S,N),2&a&&H!==(H=`${w.path}/incident/${e[5].number}`)&&o(I,"href",H),2&a&&M!==(M="down link "+(e[5].title.includes("degraded")?"degraded":""))&&o(n,"class",M)},d(e){k&&k.d(e),e&&i(t),e&&i(n)}}}function ee(e){let t,n,r,c;const o=[X,W],d=[];function u(e,t){return e[0]?0:e[1].length?1:-1}return~(n=u(e))&&(r=d[n]=o[n](e)),{c(){t=a("section"),r&&r.c()},l(e){t=s(e,"SECTION",{});var n=l(t);r&&r.l(n),n.forEach(i)},m(e,a){h(e,t,a),~n&&d[n].m(t,null),c=!0},p(e,[a]){let s=n;n=u(e),n===s?~n&&d[n].p(e,a):(r&&(g(),p(d[s],1,1,(()=>{d[s]=null})),$()),~n?(r=d[n],r?r.p(e,a):(r=d[n]=o[n](e),r.c()),v(r,1),r.m(t,null)):r=null)},i(e){c||(v(r),c=!0)},o(e){p(r),c=!1},d(e){e&&i(t),~n&&d[n].d()}}}function te(e,t,n){let a=!0;const r=N(),s=w.owner,l=w.repo;let c=[];return E((async()=>{try{n(1,c=(await r.issues.listForRepo({owner:s,repo:l,state:"closed",filter:"all",sort:"created",direction:"desc",labels:"status"})).data)}catch(e){k(e)}n(1,c=c.map(((e,t)=>(e.showHeading=0===t||new Date(c[t-1].created_at).toLocaleDateString()!==new Date(e.created_at).toLocaleDateString(),e)))),n(0,a=!1)})),[a,c]}class ne extends e{constructor(e){super(),t(this,e,te,ee,n,{})}}function ae(e){let t,n=R(w["status-website"].introTitle)+"";return{c(){t=a("h1")},l(e){t=s(e,"H1",{}),l(t).forEach(i)},m(e,a){h(e,t,a),t.innerHTML=n},p:u,d(e){e&&i(t)}}}function re(e){let t,n=R(w["status-website"].introMessage)+"";return{c(){t=a("p"),this.h()},l(e){t=s(e,"P",{class:!0}),l(t).forEach(i),this.h()},h(){o(t,"class","lead svelte-ngkazm")},m(e,a){h(e,t,a),t.innerHTML=n},p:u,d(e){e&&i(t)}}}function se(e){let t,n,r,c,d,u,g,$,E,T;document.title=t=e[0];let D=w["status-website"]&&function(e){let t,n,a=w["status-website"].introTitle&&ae(),r=w["status-website"].introMessage&&re();return{c(){a&&a.c(),t=f(),r&&r.c(),n=b()},l(e){a&&a.l(e),t=m(e),r&&r.l(e),n=b()},m(e,s){a&&a.m(e,s),h(e,t,s),r&&r.m(e,s),h(e,n,s)},p(e,t){w["status-website"].introTitle&&a.p(e,t),w["status-website"].introMessage&&r.p(e,t)},d(e){a&&a.d(e),e&&i(t),r&&r.d(e),e&&i(n)}}}();return d=new z({}),g=new K({}),E=new ne({}),{c(){n=f(),r=a("header"),D&&D.c(),c=f(),I(d.$$.fragment),u=f(),I(g.$$.fragment),$=f(),I(E.$$.fragment),this.h()},l(e){y('[data-svelte="svelte-1258swp"]',document.head).forEach(i),n=m(e),r=s(e,"HEADER",{class:!0});var t=l(r);D&&D.l(t),t.forEach(i),c=m(e),S(d.$$.fragment,e),u=m(e),S(g.$$.fragment,e),$=m(e),S(E.$$.fragment,e),this.h()},h(){o(r,"class","svelte-ngkazm")},m(e,t){h(e,n,t),h(e,r,t),D&&D.m(r,null),h(e,c,t),H(d,e,t),h(e,u,t),H(g,e,t),h(e,$,t),H(E,e,t),T=!0},p(e,[n]){(!T||1&n)&&t!==(t=e[0])&&(document.title=t),w["status-website"]&&D.p(e,n)},i(e){T||(v(d.$$.fragment,e),v(g.$$.fragment,e),v(E.$$.fragment,e),T=!0)},o(e){p(d.$$.fragment,e),p(g.$$.fragment,e),p(E.$$.fragment,e),T=!1},d(e){e&&i(n),e&&i(r),D&&D.d(),e&&i(c),L(d,e),e&&i(u),L(g,e),e&&i($),L(E,e)}}}function le(e,t,n){let a="Status";try{a=w["status-website"].name}catch(e){}return[a]}export default class extends e{constructor(e){super(),t(this,e,le,se,n,{})}}
