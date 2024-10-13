import{s as Vl,f as Te,n as xe,c as Rl,o as jl,r as Bl}from"../chunks/scheduler.0b3707f5.js";import{S as Il,i as Hl,e as g,s as I,t as z,c as p,a as w,d as _,f as H,b as J,o as d,g as Y,h,j as le,y as Sl,z as ue,A as Fe,B as Ul,k as b,l as D,n as te,p as _e,q as se,C as we,u as De,v as Ce,w as Ve,x as Ie,H as Ll,D as Ml}from"../chunks/index.6455130f.js";import{g as ql,a as Se,b as $e,e as re,s as yl}from"../chunks/Constants.73089128.js";import{b as Ue}from"../chunks/paths.d03bb617.js";import{p as Al}from"../chunks/stores.c0e9faec.js";function Ol(a){let e,i,t,s,o,c,n,l,k=`${a[0].firstName} ${a[0].lastName}`,f,u,r,v=`${a[0].city.name}, ${a[0].country.name}`,N;return{c(){e=g("div"),i=g("div"),t=g("img"),c=I(),n=g("div"),l=g("div"),f=z(k),u=I(),r=g("div"),N=z(v),this.h()},l($){e=p($,"DIV",{class:!0});var C=w(e);i=p(C,"DIV",{class:!0});var q=w(i);t=p(q,"IMG",{class:!0,src:!0,alt:!0}),q.forEach(_),c=H(C),n=p(C,"DIV",{class:!0});var j=w(n);l=p(j,"DIV",{class:!0});var Z=w(l);f=J(Z,k),Z.forEach(_),u=H(j),r=p(j,"DIV",{class:!0});var x=w(r);N=J(x,v),x.forEach(_),j.forEach(_),C.forEach(_),this.h()},h(){var $;d(t,"class","avatar-image svelte-1onx3e7"),Te(t.src,s=(($=a[0].photo)==null?void 0:$.url)??`${Ue}/avatar_placeholder.png`)||d(t,"src",s),d(t,"alt",o=a[0].firstName),d(i,"class","person-avatar svelte-1onx3e7"),d(l,"class","person-name svelte-1onx3e7"),d(r,"class","person-location svelte-1onx3e7"),d(n,"class","person-info"),d(e,"class","person svelte-1onx3e7")},m($,C){Y($,e,C),h(e,i),h(i,t),h(e,c),h(e,n),h(n,l),h(l,f),h(n,u),h(n,r),h(r,N)},p($,[C]){var q;C&1&&!Te(t.src,s=((q=$[0].photo)==null?void 0:q.url)??`${Ue}/avatar_placeholder.png`)&&d(t,"src",s),C&1&&o!==(o=$[0].firstName)&&d(t,"alt",o),C&1&&k!==(k=`${$[0].firstName} ${$[0].lastName}`)&&le(f,k),C&1&&v!==(v=`${$[0].city.name}, ${$[0].country.name}`)&&le(N,v)},i:xe,o:xe,d($){$&&_(e)}}}function Gl(a,e,i){let{info:t}=e;return a.$$set=s=>{"info"in s&&i(0,t=s.info)},[t]}class He extends Il{constructor(e){super(),Hl(this,e,Gl,Ol,Vl,{info:0})}}const{document:Pe}=ql;function el(a,e,i){const t=a.slice();return t[18]=e[i],t}function ll(a,e,i){const t=a.slice();return t[18]=e[i],t}function tl(a,e,i){const t=a.slice();return t[23]=e[i],t}function sl(a,e,i){const t=a.slice();return t[26]=e[i],t}function il(a,e,i){const t=a.slice();return t[18]=e[i],t}function al(a,e,i){const t=a.slice();return t[18]=e[i],t}function rl(a,e,i){const t=a.slice();return t[26]=e[i],t}function nl(a){let e,i='<div class="nucleobase svelte-1awihg0"></div> <div class="nucleobase svelte-1awihg0"></div> <div class="nucleobase svelte-1awihg0"></div> <div class="nucleobase svelte-1awihg0"></div> <div class="nucleobase svelte-1awihg0"></div> <div class="nucleobase svelte-1awihg0"></div> <div class="nucleobase svelte-1awihg0"></div> <div class="nucleobase svelte-1awihg0"></div> <div class="nucleobase svelte-1awihg0"></div> <div class="nucleobase svelte-1awihg0"></div>';return{c(){e=g("div"),e.innerHTML=i,this.h()},l(t){e=p(t,"DIV",{class:!0,"data-svelte-h":!0}),ue(e)!=="svelte-9yhqwq"&&(e.innerHTML=i),this.h()},h(){d(e,"class","DNA_cont svelte-1awihg0")},m(t,s){Y(t,e,s)},d(t){t&&_(e)}}}function ol(a){let e,i,t,s,o=a[1].sessionType+"",c,n,l,k=a[1].title+"",f,u,r,v,N,$=Se(a[1].start.split("T")[0])+"",C,q,j,Z=$e(a[1].start.split("T")[1].split("+")[0])+"",x,L,A=a[1].start.split("T")[1].split("+")[0]+" - "+a[1].end.split("T")[1].split("+")[0],G,Q,W,T,V,B=a[6].length>0&&cl(a),S=a[2]&&kl(a),U=(a[3]||a[4])&&El(a);return{c(){B&&B.c(),e=I(),i=g("div"),t=g("div"),s=g("div"),c=z(o),n=I(),l=g("h1"),f=z(k),u=I(),r=g("div"),v=g("div"),N=z("🗓️ "),C=z($),q=I(),j=g("div"),x=z(Z),L=I(),G=z(A),Q=I(),S&&S.c(),W=I(),U&&U.c(),this.h()},l(m){B&&B.l(m),e=H(m),i=p(m,"DIV",{class:!0,style:!0});var M=w(i);t=p(M,"DIV",{class:!0});var F=w(t);s=p(F,"DIV",{class:!0,style:!0});var O=w(s);c=J(O,o),O.forEach(_),n=H(F),l=p(F,"H1",{class:!0});var ce=w(l);f=J(ce,k),ce.forEach(_),u=H(F),r=p(F,"DIV",{class:!0});var ee=w(r);v=p(ee,"DIV",{class:!0});var ne=w(v);N=J(ne,"🗓️ "),C=J(ne,$),ne.forEach(_),q=H(ee),j=p(ee,"DIV",{class:!0});var oe=w(j);x=J(oe,Z),L=H(oe),G=J(oe,A),oe.forEach(_),ee.forEach(_),F.forEach(_),Q=H(M),S&&S.l(M),W=H(M),U&&U.l(M),M.forEach(_),this.h()},h(){d(s,"class","session-type svelte-1awihg0"),_e(s,"color",a[1].sessionTypeColor!=="#000000"?a[1].sessionTypeColor:"#dfdfdf"),d(l,"class","svelte-1awihg0"),d(v,"class","svelte-1awihg0"),d(j,"class","svelte-1awihg0"),d(r,"class","date-time subtitle svelte-1awihg0"),d(t,"class","session-header svelte-1awihg0"),d(i,"class",T="detail screen-small "+(a[6].length==0?"no-media":"")+" svelte-1awihg0"),_e(i,"border-left-color",a[1].sessionTypeColor)},m(m,M){B&&B.m(m,M),Y(m,e,M),Y(m,i,M),h(i,t),h(t,s),h(s,c),h(t,n),h(t,l),h(l,f),h(t,u),h(t,r),h(r,v),h(v,N),h(v,C),h(r,q),h(r,j),h(j,x),h(j,L),h(j,G),h(i,Q),S&&S.m(i,null),h(i,W),U&&U.m(i,null),V=!0},p(m,M){m[6].length>0?B?(B.p(m,M),M[0]&64&&b(B,1)):(B=cl(m),B.c(),b(B,1),B.m(e.parentNode,e)):B&&(se(),D(B,1,1,()=>{B=null}),te()),(!V||M[0]&2)&&o!==(o=m[1].sessionType+"")&&le(c,o),(!V||M[0]&2)&&_e(s,"color",m[1].sessionTypeColor!=="#000000"?m[1].sessionTypeColor:"#dfdfdf"),(!V||M[0]&2)&&k!==(k=m[1].title+"")&&le(f,k),(!V||M[0]&2)&&$!==($=Se(m[1].start.split("T")[0])+"")&&le(C,$),(!V||M[0]&2)&&Z!==(Z=$e(m[1].start.split("T")[1].split("+")[0])+"")&&le(x,Z),(!V||M[0]&2)&&A!==(A=m[1].start.split("T")[1].split("+")[0]+" - "+m[1].end.split("T")[1].split("+")[0])&&le(G,A),m[2]?S?S.p(m,M):(S=kl(m),S.c(),S.m(i,W)):S&&(S.d(1),S=null),m[3]||m[4]?U?(U.p(m,M),M[0]&24&&b(U,1)):(U=El(m),U.c(),b(U,1),U.m(i,null)):U&&(se(),D(U,1,1,()=>{U=null}),te()),(!V||M[0]&64&&T!==(T="detail screen-small "+(m[6].length==0?"no-media":"")+" svelte-1awihg0"))&&d(i,"class",T),(!V||M[0]&2)&&_e(i,"border-left-color",m[1].sessionTypeColor)},i(m){V||(b(B),b(U),V=!0)},o(m){D(B),D(U),V=!1},d(m){m&&(_(e),_(i)),B&&B.d(m),S&&S.d(),U&&U.d()}}}function cl(a){let e,i,t,s,o,c=(a[5].title??"😶‍🌫️")+"",n,l,k,f,u,r,v,N,$,C,q,j,Z=a[1].sessionType+"",x,L,A,G=a[1].title+"",Q,W,T,V,B,S=Se(a[1].start.split("T")[0])+"",U,m,M,F=$e(a[1].start.split("T")[1].split("+")[0])+"",O,ce,ee=a[1].start.split("T")[1].split("+")[0]+" - "+a[1].end.split("T")[1].split("+")[0],ne,oe,fe,he,de,ge,ve,qe,Le=a[6].length+"",Me,ye,Ae,pe,ae,K=a[5].speakers&&fl(a),ie=a[2]&&hl(a),X=(a[3]||a[4])&&dl(a),me=re(a[6]),P=[];for(let E=0;E<me.length;E+=1)P[E]=wl(tl(a,me,E));const Nl=E=>D(P[E],1,1,()=>{P[E]=null});return{c(){e=g("div"),i=g("div"),t=g("div"),s=g("div"),o=g("strong"),n=z(c),l=I(),K&&K.c(),k=I(),f=g("div"),u=g("video"),r=g("track"),$=I(),C=g("div"),q=g("div"),j=g("div"),x=z(Z),L=I(),A=g("h1"),Q=z(G),W=I(),T=g("div"),V=g("div"),B=z("🗓️ "),U=z(S),m=I(),M=g("div"),O=z(F),ce=I(),ne=z(ee),oe=I(),ie&&ie.c(),fe=I(),X&&X.c(),he=I(),de=g("div"),ge=g("div"),ve=g("strong"),qe=z("Liste de lecture ("),Me=z(Le),ye=z("):"),Ae=I(),pe=g("div");for(let E=0;E<P.length;E+=1)P[E].c();this.h()},l(E){e=p(E,"DIV",{class:!0});var R=w(e);i=p(R,"DIV",{class:!0});var y=w(i);t=p(y,"DIV",{id:!0,class:!0});var be=w(t);s=p(be,"DIV",{class:!0});var ze=w(s);o=p(ze,"STRONG",{class:!0});var Je=w(o);n=J(Je,c),Je.forEach(_),ze.forEach(_),l=H(be),K&&K.l(be),be.forEach(_),k=H(y),f=p(y,"DIV",{id:!0,class:!0});var Ze=w(f);u=p(Ze,"VIDEO",{class:!0,src:!0,poster:!0});var Ke=w(u);r=p(Ke,"TRACK",{kind:!0,class:!0}),Ke.forEach(_),Ze.forEach(_),$=H(y),C=p(y,"DIV",{class:!0,style:!0});var ke=w(C);q=p(ke,"DIV",{class:!0});var Ee=w(q);j=p(Ee,"DIV",{class:!0,style:!0});var Xe=w(j);x=J(Xe,Z),Xe.forEach(_),L=H(Ee),A=p(Ee,"H1",{class:!0});var Qe=w(A);Q=J(Qe,G),Qe.forEach(_),W=H(Ee),T=p(Ee,"DIV",{class:!0});var Ne=w(T);V=p(Ne,"DIV",{class:!0});var Oe=w(V);B=J(Oe,"🗓️ "),U=J(Oe,S),Oe.forEach(_),m=H(Ne),M=p(Ne,"DIV",{class:!0});var Re=w(M);O=J(Re,F),ce=H(Re),ne=J(Re,ee),Re.forEach(_),Ne.forEach(_),Ee.forEach(_),oe=H(ke),ie&&ie.l(ke),fe=H(ke),X&&X.l(ke),ke.forEach(_),y.forEach(_),he=H(R),de=p(R,"DIV",{class:!0});var je=w(de);ge=p(je,"DIV",{id:!0,class:!0});var We=w(ge);ve=p(We,"STRONG",{class:!0});var Be=w(ve);qe=J(Be,"Liste de lecture ("),Me=J(Be,Le),ye=J(Be,"):"),Be.forEach(_),We.forEach(_),Ae=H(je),pe=p(je,"DIV",{class:!0});var Ye=w(pe);for(let Ge=0;Ge<P.length;Ge+=1)P[Ge].l(Ye);Ye.forEach(_),je.forEach(_),R.forEach(_),this.h()},h(){d(o,"class","svelte-1awihg0"),d(s,"class","svelte-1awihg0"),d(t,"id","current-media-info"),d(t,"class","svelte-1awihg0"),d(r,"kind","captions"),d(r,"class","svelte-1awihg0"),u.controls=!0,d(u,"class","video-player svelte-1awihg0"),Te(u.src,v=a[8](a[5]))||d(u,"src",v),d(u,"poster",N=a[5].thumbnail),d(f,"id","video-container"),d(f,"class","svelte-1awihg0"),d(j,"class","session-type svelte-1awihg0"),_e(j,"color",a[1].sessionTypeColor!=="#000000"?a[1].sessionTypeColor:"#dfdfdf"),d(A,"class","svelte-1awihg0"),d(V,"class","svelte-1awihg0"),d(M,"class","svelte-1awihg0"),d(T,"class","date-time subtitle svelte-1awihg0"),d(q,"class","session-header svelte-1awihg0"),d(C,"class","detail screen-big svelte-1awihg0"),_e(C,"border-left-color",a[1].sessionTypeColor),d(i,"class","current-media svelte-1awihg0"),d(ve,"class","svelte-1awihg0"),d(ge,"id","playlist-title"),d(ge,"class","svelte-1awihg0"),d(pe,"class","playlist svelte-1awihg0"),d(de,"class","playlist-container svelte-1awihg0"),d(e,"class","media svelte-1awihg0")},m(E,R){Y(E,e,R),h(e,i),h(i,t),h(t,s),h(s,o),h(o,n),h(t,l),K&&K.m(t,null),h(i,k),h(i,f),h(f,u),h(u,r),h(i,$),h(i,C),h(C,q),h(q,j),h(j,x),h(q,L),h(q,A),h(A,Q),h(q,W),h(q,T),h(T,V),h(V,B),h(V,U),h(T,m),h(T,M),h(M,O),h(M,ce),h(M,ne),h(C,oe),ie&&ie.m(C,null),h(C,fe),X&&X.m(C,null),h(e,he),h(e,de),h(de,ge),h(ge,ve),h(ve,qe),h(ve,Me),h(ve,ye),h(de,Ae),h(de,pe);for(let y=0;y<P.length;y+=1)P[y]&&P[y].m(pe,null);ae=!0},p(E,R){if((!ae||R[0]&32)&&c!==(c=(E[5].title??"😶‍🌫️")+"")&&le(n,c),E[5].speakers?K?(K.p(E,R),R[0]&32&&b(K,1)):(K=fl(E),K.c(),b(K,1),K.m(t,null)):K&&(se(),D(K,1,1,()=>{K=null}),te()),(!ae||R[0]&32&&!Te(u.src,v=E[8](E[5])))&&d(u,"src",v),(!ae||R[0]&32&&N!==(N=E[5].thumbnail))&&d(u,"poster",N),(!ae||R[0]&2)&&Z!==(Z=E[1].sessionType+"")&&le(x,Z),(!ae||R[0]&2)&&_e(j,"color",E[1].sessionTypeColor!=="#000000"?E[1].sessionTypeColor:"#dfdfdf"),(!ae||R[0]&2)&&G!==(G=E[1].title+"")&&le(Q,G),(!ae||R[0]&2)&&S!==(S=Se(E[1].start.split("T")[0])+"")&&le(U,S),(!ae||R[0]&2)&&F!==(F=$e(E[1].start.split("T")[1].split("+")[0])+"")&&le(O,F),(!ae||R[0]&2)&&ee!==(ee=E[1].start.split("T")[1].split("+")[0]+" - "+E[1].end.split("T")[1].split("+")[0])&&le(ne,ee),E[2]?ie?ie.p(E,R):(ie=hl(E),ie.c(),ie.m(C,fe)):ie&&(ie.d(1),ie=null),E[3]||E[4]?X?(X.p(E,R),R[0]&24&&b(X,1)):(X=dl(E),X.c(),b(X,1),X.m(C,null)):X&&(se(),D(X,1,1,()=>{X=null}),te()),(!ae||R[0]&2)&&_e(C,"border-left-color",E[1].sessionTypeColor),(!ae||R[0]&64)&&Le!==(Le=E[6].length+"")&&le(Me,Le),R[0]&736){me=re(E[6]);let y;for(y=0;y<me.length;y+=1){const be=tl(E,me,y);P[y]?(P[y].p(be,R),b(P[y],1)):(P[y]=wl(be),P[y].c(),b(P[y],1),P[y].m(pe,null))}for(se(),y=me.length;y<P.length;y+=1)Nl(y);te()}},i(E){if(!ae){b(K),b(X);for(let R=0;R<me.length;R+=1)b(P[R]);ae=!0}},o(E){D(K),D(X),P=P.filter(Boolean);for(let R=0;R<P.length;R+=1)D(P[R]);ae=!1},d(E){E&&_(e),K&&K.d(),ie&&ie.d(),X&&X.d(),we(P,E)}}}function fl(a){let e,i,t=re(a[5].speakers),s=[];for(let c=0;c<t.length;c+=1)s[c]=ul(rl(a,t,c));const o=c=>D(s[c],1,1,()=>{s[c]=null});return{c(){e=g("div");for(let c=0;c<s.length;c+=1)s[c].c();this.h()},l(c){e=p(c,"DIV",{class:!0});var n=w(e);for(let l=0;l<s.length;l+=1)s[l].l(n);n.forEach(_),this.h()},h(){d(e,"class","speakers svelte-1awihg0")},m(c,n){Y(c,e,n);for(let l=0;l<s.length;l+=1)s[l]&&s[l].m(e,null);i=!0},p(c,n){if(n[0]&32){t=re(c[5].speakers);let l;for(l=0;l<t.length;l+=1){const k=rl(c,t,l);s[l]?(s[l].p(k,n),b(s[l],1)):(s[l]=ul(k),s[l].c(),b(s[l],1),s[l].m(e,null))}for(se(),l=t.length;l<s.length;l+=1)o(l);te()}},i(c){if(!i){for(let n=0;n<t.length;n+=1)b(s[n]);i=!0}},o(c){s=s.filter(Boolean);for(let n=0;n<s.length;n+=1)D(s[n]);i=!1},d(c){c&&_(e),we(s,c)}}}function ul(a){let e,i;return e=new He({props:{info:a[26]}}),{c(){De(e.$$.fragment)},l(t){Ce(e.$$.fragment,t)},m(t,s){Ve(e,t,s),i=!0},p(t,s){const o={};s[0]&32&&(o.info=t[26]),e.$set(o)},i(t){i||(b(e.$$.fragment,t),i=!0)},o(t){D(e.$$.fragment,t),i=!1},d(t){Ie(e,t)}}}function hl(a){let e,i,t="Objectifs :",s,o,c;return{c(){e=g("div"),i=g("strong"),i.textContent=t,s=I(),o=g("div"),c=new Ll(!1),this.h()},l(n){e=p(n,"DIV",{class:!0});var l=w(e);i=p(l,"STRONG",{class:!0,"data-svelte-h":!0}),ue(i)!=="svelte-1jn7qe7"&&(i.textContent=t),s=H(l),o=p(l,"DIV",{class:!0});var k=w(o);c=Ml(k,!1),k.forEach(_),l.forEach(_),this.h()},h(){d(i,"class","svelte-1awihg0"),c.a=null,d(o,"class","svelte-1awihg0"),d(e,"class","objectives svelte-1awihg0")},m(n,l){Y(n,e,l),h(e,i),h(e,s),h(e,o),c.m(a[2],o)},p(n,l){l[0]&4&&c.p(n[2])},d(n){n&&_(e)}}}function dl(a){let e,i,t,s=a[3]&&vl(a),o=a[4]&&gl(a);return{c(){e=g("table"),s&&s.c(),i=I(),o&&o.c(),this.h()},l(c){e=p(c,"TABLE",{class:!0});var n=w(e);s&&s.l(n),i=H(n),o&&o.l(n),n.forEach(_),this.h()},h(){d(e,"class","person-list svelte-1awihg0")},m(c,n){Y(c,e,n),s&&s.m(e,null),h(e,i),o&&o.m(e,null),t=!0},p(c,n){c[3]?s?(s.p(c,n),n[0]&8&&b(s,1)):(s=vl(c),s.c(),b(s,1),s.m(e,i)):s&&(se(),D(s,1,1,()=>{s=null}),te()),c[4]?o?(o.p(c,n),n[0]&16&&b(o,1)):(o=gl(c),o.c(),b(o,1),o.m(e,null)):o&&(se(),D(o,1,1,()=>{o=null}),te())},i(c){t||(b(s),b(o),t=!0)},o(c){D(s),D(o),t=!1},d(c){c&&_(e),s&&s.d(),o&&o.d()}}}function vl(a){let e,i,t="Modérateur :",s,o,c,n=re(a[3]),l=[];for(let f=0;f<n.length;f+=1)l[f]=_l(al(a,n,f));const k=f=>D(l[f],1,1,()=>{l[f]=null});return{c(){e=g("tr"),i=g("td"),i.textContent=t,s=I(),o=g("td");for(let f=0;f<l.length;f+=1)l[f].c();this.h()},l(f){e=p(f,"TR",{class:!0});var u=w(e);i=p(u,"TD",{class:!0,"data-svelte-h":!0}),ue(i)!=="svelte-1noy2yo"&&(i.textContent=t),s=H(u),o=p(u,"TD",{class:!0});var r=w(o);for(let v=0;v<l.length;v+=1)l[v].l(r);r.forEach(_),u.forEach(_),this.h()},h(){d(i,"class","role-label svelte-1awihg0"),d(o,"class","svelte-1awihg0"),d(e,"class","svelte-1awihg0")},m(f,u){Y(f,e,u),h(e,i),h(e,s),h(e,o);for(let r=0;r<l.length;r+=1)l[r]&&l[r].m(o,null);c=!0},p(f,u){if(u[0]&8){n=re(f[3]);let r;for(r=0;r<n.length;r+=1){const v=al(f,n,r);l[r]?(l[r].p(v,u),b(l[r],1)):(l[r]=_l(v),l[r].c(),b(l[r],1),l[r].m(o,null))}for(se(),r=n.length;r<l.length;r+=1)k(r);te()}},i(f){if(!c){for(let u=0;u<n.length;u+=1)b(l[u]);c=!0}},o(f){l=l.filter(Boolean);for(let u=0;u<l.length;u+=1)D(l[u]);c=!1},d(f){f&&_(e),we(l,f)}}}function _l(a){let e,i;return e=new He({props:{info:a[18]}}),{c(){De(e.$$.fragment)},l(t){Ce(e.$$.fragment,t)},m(t,s){Ve(e,t,s),i=!0},p(t,s){const o={};s[0]&8&&(o.info=t[18]),e.$set(o)},i(t){i||(b(e.$$.fragment,t),i=!0)},o(t){D(e.$$.fragment,t),i=!1},d(t){Ie(e,t)}}}function gl(a){let e,i,t="Responsable :",s,o,c,n=re(a[4]),l=[];for(let f=0;f<n.length;f+=1)l[f]=pl(il(a,n,f));const k=f=>D(l[f],1,1,()=>{l[f]=null});return{c(){e=g("tr"),i=g("td"),i.textContent=t,s=I(),o=g("td");for(let f=0;f<l.length;f+=1)l[f].c();this.h()},l(f){e=p(f,"TR",{class:!0});var u=w(e);i=p(u,"TD",{class:!0,"data-svelte-h":!0}),ue(i)!=="svelte-1xum5yq"&&(i.textContent=t),s=H(u),o=p(u,"TD",{class:!0});var r=w(o);for(let v=0;v<l.length;v+=1)l[v].l(r);r.forEach(_),u.forEach(_),this.h()},h(){d(i,"class","role-label svelte-1awihg0"),d(o,"class","svelte-1awihg0"),d(e,"class","svelte-1awihg0")},m(f,u){Y(f,e,u),h(e,i),h(e,s),h(e,o);for(let r=0;r<l.length;r+=1)l[r]&&l[r].m(o,null);c=!0},p(f,u){if(u[0]&16){n=re(f[4]);let r;for(r=0;r<n.length;r+=1){const v=il(f,n,r);l[r]?(l[r].p(v,u),b(l[r],1)):(l[r]=pl(v),l[r].c(),b(l[r],1),l[r].m(o,null))}for(se(),r=n.length;r<l.length;r+=1)k(r);te()}},i(f){if(!c){for(let u=0;u<n.length;u+=1)b(l[u]);c=!0}},o(f){l=l.filter(Boolean);for(let u=0;u<l.length;u+=1)D(l[u]);c=!1},d(f){f&&_(e),we(l,f)}}}function pl(a){let e,i;return e=new He({props:{info:a[18]}}),{c(){De(e.$$.fragment)},l(t){Ce(e.$$.fragment,t)},m(t,s){Ve(e,t,s),i=!0},p(t,s){const o={};s[0]&16&&(o.info=t[18]),e.$set(o)},i(t){i||(b(e.$$.fragment,t),i=!0)},o(t){D(e.$$.fragment,t),i=!1},d(t){Ie(e,t)}}}function ml(a){let e,i,t=re(a[23].speakers),s=[];for(let c=0;c<t.length;c+=1)s[c]=bl(sl(a,t,c));const o=c=>D(s[c],1,1,()=>{s[c]=null});return{c(){e=g("div");for(let c=0;c<s.length;c+=1)s[c].c();this.h()},l(c){e=p(c,"DIV",{class:!0});var n=w(e);for(let l=0;l<s.length;l+=1)s[l].l(n);n.forEach(_),this.h()},h(){d(e,"class","speakers svelte-1awihg0")},m(c,n){Y(c,e,n);for(let l=0;l<s.length;l+=1)s[l]&&s[l].m(e,null);i=!0},p(c,n){if(n[0]&64){t=re(c[23].speakers);let l;for(l=0;l<t.length;l+=1){const k=sl(c,t,l);s[l]?(s[l].p(k,n),b(s[l],1)):(s[l]=bl(k),s[l].c(),b(s[l],1),s[l].m(e,null))}for(se(),l=t.length;l<s.length;l+=1)o(l);te()}},i(c){if(!i){for(let n=0;n<t.length;n+=1)b(s[n]);i=!0}},o(c){s=s.filter(Boolean);for(let n=0;n<s.length;n+=1)D(s[n]);i=!1},d(c){c&&_(e),we(s,c)}}}function bl(a){let e,i;return e=new He({props:{info:a[26]}}),{c(){De(e.$$.fragment)},l(t){Ce(e.$$.fragment,t)},m(t,s){Ve(e,t,s),i=!0},p(t,s){const o={};s[0]&64&&(o.info=t[26]),e.$set(o)},i(t){i||(b(e.$$.fragment,t),i=!0)},o(t){D(e.$$.fragment,t),i=!1},d(t){Ie(e,t)}}}function wl(a){let e,i,t,s,o,c,n,l,k,f=a[23].title+"",u,r,v,N,$=$e(a[23].start)+"",C,q,j=a[23].start+"",Z,x,L,A='<svg width="16" height="16" viewBox="0 0 24 24" fill="none" class="svg-icon svelte-1awihg0" xmlns="http://www.w3.org/2000/svg"><path d="M11 5C11 4.44772 11.4477 4 12 4C12.5523 4 13 4.44772 13 5V12.1578L16.2428 8.91501L17.657 10.3292L12.0001 15.9861L6.34326 10.3292L7.75748 8.91501L11 12.1575V5Z" fill="currentColor" class="svelte-1awihg0"></path><path d="M4 14H6V18H18V14H20V18C20 19.1046 19.1046 20 18 20H6C4.89543 20 4 19.1046 4 18V14Z" fill="currentColor" class="svelte-1awihg0"></path></svg> <div class="svelte-1awihg0">Télécharger</div>',G,Q,W,T,V,B,S;function U(){return a[11](a[23])}let m=a[23].speakers&&ml(a);function M(){return a[12](a[23])}return{c(){e=g("div"),i=g("div"),t=g("img"),c=I(),n=g("div"),l=g("div"),k=g("strong"),u=z(f),r=I(),v=g("div"),N=g("span"),C=z($),q=I(),Z=z(j),x=I(),L=g("button"),L.innerHTML=A,G=I(),m&&m.c(),Q=I(),this.h()},l(F){e=p(F,"DIV",{class:!0,title:!0});var O=w(e);i=p(O,"DIV",{class:!0});var ce=w(i);t=p(ce,"IMG",{class:!0,src:!0,alt:!0}),ce.forEach(_),c=H(O),n=p(O,"DIV",{class:!0});var ee=w(n);l=p(ee,"DIV",{class:!0});var ne=w(l);k=p(ne,"STRONG",{class:!0});var oe=w(k);u=J(oe,f),oe.forEach(_),ne.forEach(_),r=H(ee),v=p(ee,"DIV",{class:!0});var fe=w(v);N=p(fe,"SPAN",{class:!0});var he=w(N);C=J(he,$),q=H(he),Z=J(he,j),he.forEach(_),x=H(fe),L=p(fe,"BUTTON",{type:!0,title:!0,class:!0,"data-svelte-h":!0}),ue(L)!=="svelte-4k9iku"&&(L.innerHTML=A),fe.forEach(_),G=H(ee),m&&m.l(ee),ee.forEach(_),Q=H(O),O.forEach(_),this.h()},h(){d(t,"class","thumbnail svelte-1awihg0"),Te(t.src,s=a[23].thumbnail)||d(t,"src",s),d(t,"alt",o=a[23].title),d(i,"class","thumbnail-container svelte-1awihg0"),d(k,"class","svelte-1awihg0"),d(l,"class","media-title svelte-1awihg0"),d(N,"class","svelte-1awihg0"),d(L,"type","button"),d(L,"title","Télécharger"),d(L,"class","btn-download svelte-1awihg0"),d(v,"class","subtitle svelte-1awihg0"),d(n,"class","video-details svelte-1awihg0"),d(e,"class",W="playlist-item "+(a[23]==a[5]?"selected":"")+" svelte-1awihg0"),d(e,"title",T=a[23].title)},m(F,O){Y(F,e,O),h(e,i),h(i,t),h(e,c),h(e,n),h(n,l),h(l,k),h(k,u),h(n,r),h(n,v),h(v,N),h(N,C),h(N,q),h(N,Z),h(v,x),h(v,L),h(n,G),m&&m.m(n,null),h(e,Q),V=!0,B||(S=[Fe(L,"click",U),Fe(e,"click",M)],B=!0)},p(F,O){a=F,(!V||O[0]&64&&!Te(t.src,s=a[23].thumbnail))&&d(t,"src",s),(!V||O[0]&64&&o!==(o=a[23].title))&&d(t,"alt",o),(!V||O[0]&64)&&f!==(f=a[23].title+"")&&le(u,f),(!V||O[0]&64)&&$!==($=$e(a[23].start)+"")&&le(C,$),(!V||O[0]&64)&&j!==(j=a[23].start+"")&&le(Z,j),a[23].speakers?m?(m.p(a,O),O[0]&64&&b(m,1)):(m=ml(a),m.c(),b(m,1),m.m(n,null)):m&&(se(),D(m,1,1,()=>{m=null}),te()),(!V||O[0]&96&&W!==(W="playlist-item "+(a[23]==a[5]?"selected":"")+" svelte-1awihg0"))&&d(e,"class",W),(!V||O[0]&64&&T!==(T=a[23].title))&&d(e,"title",T)},i(F){V||(b(m),V=!0)},o(F){D(m),V=!1},d(F){F&&_(e),m&&m.d(),B=!1,Bl(S)}}}function kl(a){let e,i,t="Objectifs :",s,o,c;return{c(){e=g("div"),i=g("strong"),i.textContent=t,s=I(),o=g("div"),c=new Ll(!1),this.h()},l(n){e=p(n,"DIV",{class:!0});var l=w(e);i=p(l,"STRONG",{class:!0,"data-svelte-h":!0}),ue(i)!=="svelte-1jn7qe7"&&(i.textContent=t),s=H(l),o=p(l,"DIV",{class:!0});var k=w(o);c=Ml(k,!1),k.forEach(_),l.forEach(_),this.h()},h(){d(i,"class","svelte-1awihg0"),c.a=null,d(o,"class","svelte-1awihg0"),d(e,"class","objectives svelte-1awihg0")},m(n,l){Y(n,e,l),h(e,i),h(e,s),h(e,o),c.m(a[2],o)},p(n,l){l[0]&4&&c.p(n[2])},d(n){n&&_(e)}}}function El(a){let e,i,t,s=a[3]&&Tl(a),o=a[4]&&Dl(a);return{c(){e=g("table"),s&&s.c(),i=I(),o&&o.c(),this.h()},l(c){e=p(c,"TABLE",{class:!0});var n=w(e);s&&s.l(n),i=H(n),o&&o.l(n),n.forEach(_),this.h()},h(){d(e,"class","person-list svelte-1awihg0")},m(c,n){Y(c,e,n),s&&s.m(e,null),h(e,i),o&&o.m(e,null),t=!0},p(c,n){c[3]?s?(s.p(c,n),n[0]&8&&b(s,1)):(s=Tl(c),s.c(),b(s,1),s.m(e,i)):s&&(se(),D(s,1,1,()=>{s=null}),te()),c[4]?o?(o.p(c,n),n[0]&16&&b(o,1)):(o=Dl(c),o.c(),b(o,1),o.m(e,null)):o&&(se(),D(o,1,1,()=>{o=null}),te())},i(c){t||(b(s),b(o),t=!0)},o(c){D(s),D(o),t=!1},d(c){c&&_(e),s&&s.d(),o&&o.d()}}}function Tl(a){let e,i,t="Modérateur :",s,o,c,n=re(a[3]),l=[];for(let f=0;f<n.length;f+=1)l[f]=$l(ll(a,n,f));const k=f=>D(l[f],1,1,()=>{l[f]=null});return{c(){e=g("tr"),i=g("td"),i.textContent=t,s=I(),o=g("td");for(let f=0;f<l.length;f+=1)l[f].c();this.h()},l(f){e=p(f,"TR",{class:!0});var u=w(e);i=p(u,"TD",{class:!0,"data-svelte-h":!0}),ue(i)!=="svelte-1noy2yo"&&(i.textContent=t),s=H(u),o=p(u,"TD",{class:!0});var r=w(o);for(let v=0;v<l.length;v+=1)l[v].l(r);r.forEach(_),u.forEach(_),this.h()},h(){d(i,"class","role-label svelte-1awihg0"),d(o,"class","svelte-1awihg0"),d(e,"class","svelte-1awihg0")},m(f,u){Y(f,e,u),h(e,i),h(e,s),h(e,o);for(let r=0;r<l.length;r+=1)l[r]&&l[r].m(o,null);c=!0},p(f,u){if(u[0]&8){n=re(f[3]);let r;for(r=0;r<n.length;r+=1){const v=ll(f,n,r);l[r]?(l[r].p(v,u),b(l[r],1)):(l[r]=$l(v),l[r].c(),b(l[r],1),l[r].m(o,null))}for(se(),r=n.length;r<l.length;r+=1)k(r);te()}},i(f){if(!c){for(let u=0;u<n.length;u+=1)b(l[u]);c=!0}},o(f){l=l.filter(Boolean);for(let u=0;u<l.length;u+=1)D(l[u]);c=!1},d(f){f&&_(e),we(l,f)}}}function $l(a){let e,i;return e=new He({props:{info:a[18]}}),{c(){De(e.$$.fragment)},l(t){Ce(e.$$.fragment,t)},m(t,s){Ve(e,t,s),i=!0},p(t,s){const o={};s[0]&8&&(o.info=t[18]),e.$set(o)},i(t){i||(b(e.$$.fragment,t),i=!0)},o(t){D(e.$$.fragment,t),i=!1},d(t){Ie(e,t)}}}function Dl(a){let e,i,t="Responsable :",s,o,c,n=re(a[4]),l=[];for(let f=0;f<n.length;f+=1)l[f]=Cl(el(a,n,f));const k=f=>D(l[f],1,1,()=>{l[f]=null});return{c(){e=g("tr"),i=g("td"),i.textContent=t,s=I(),o=g("td");for(let f=0;f<l.length;f+=1)l[f].c();this.h()},l(f){e=p(f,"TR",{class:!0});var u=w(e);i=p(u,"TD",{class:!0,"data-svelte-h":!0}),ue(i)!=="svelte-1xum5yq"&&(i.textContent=t),s=H(u),o=p(u,"TD",{class:!0});var r=w(o);for(let v=0;v<l.length;v+=1)l[v].l(r);r.forEach(_),u.forEach(_),this.h()},h(){d(i,"class","role-label svelte-1awihg0"),d(o,"class","svelte-1awihg0"),d(e,"class","svelte-1awihg0")},m(f,u){Y(f,e,u),h(e,i),h(e,s),h(e,o);for(let r=0;r<l.length;r+=1)l[r]&&l[r].m(o,null);c=!0},p(f,u){if(u[0]&16){n=re(f[4]);let r;for(r=0;r<n.length;r+=1){const v=el(f,n,r);l[r]?(l[r].p(v,u),b(l[r],1)):(l[r]=Cl(v),l[r].c(),b(l[r],1),l[r].m(o,null))}for(se(),r=n.length;r<l.length;r+=1)k(r);te()}},i(f){if(!c){for(let u=0;u<n.length;u+=1)b(l[u]);c=!0}},o(f){l=l.filter(Boolean);for(let u=0;u<l.length;u+=1)D(l[u]);c=!1},d(f){f&&_(e),we(l,f)}}}function Cl(a){let e,i;return e=new He({props:{info:a[18]}}),{c(){De(e.$$.fragment)},l(t){Ce(e.$$.fragment,t)},m(t,s){Ve(e,t,s),i=!0},p(t,s){const o={};s[0]&16&&(o.info=t[18]),e.$set(o)},i(t){i||(b(e.$$.fragment,t),i=!0)},o(t){D(e.$$.fragment,t),i=!1},d(t){Ie(e,t)}}}function Pl(a){let e,i,t,s,o='<i class="gg-chevron-left svelte-1awihg0"></i> Retour',c,n,l,k,f;Pe.title=e=a[1]?a[1].title:"JFR 2024";let u=a[0]&&nl(),r=!a[0]&&a[1]&&ol(a);return{c(){i=I(),t=g("main"),s=g("a"),s.innerHTML=o,c=I(),u&&u.c(),n=I(),r&&r.c(),this.h()},l(v){Sl("svelte-135ofcf",Pe.head).forEach(_),i=H(v),t=p(v,"MAIN",{class:!0});var $=w(t);s=p($,"A",{href:!0,class:!0,"data-svelte-h":!0}),ue(s)!=="svelte-1ry70y4"&&(s.innerHTML=o),c=H($),u&&u.l($),n=H($),r&&r.l($),$.forEach(_),this.h()},h(){d(s,"href",Ue+"/"),d(s,"class","one-liner svelte-1awihg0"),d(t,"class","svelte-1awihg0")},m(v,N){Y(v,i,N),Y(v,t,N),h(t,s),h(t,c),u&&u.m(t,null),h(t,n),r&&r.m(t,null),l=!0,k||(f=Fe(s,"click",Ul(a[10])),k=!0)},p(v,N){(!l||N[0]&2)&&e!==(e=v[1]?v[1].title:"JFR 2024")&&(Pe.title=e),v[0]?u||(u=nl(),u.c(),u.m(t,n)):u&&(u.d(1),u=null),!v[0]&&v[1]?r?(r.p(v,N),N[0]&3&&b(r,1)):(r=ol(v),r.c(),b(r,1),r.m(t,null)):r&&(se(),D(r,1,1,()=>{r=null}),te())},i(v){l||(b(r),l=!0)},o(v){D(r),l=!1},d(v){v&&(_(i),_(t)),u&&u.d(),r&&r.d(),k=!1,f()}}}function Fl(a,e,i){let t;Rl(a,Al,L=>i(15,t=L));const s=t.url.searchParams;let o;s&&(o=s.get("id"));let c=!0,n,l,k,f,u,r,v=[];const N=L=>{var A=new XMLHttpRequest;return A.open("HEAD",L,!1),A.send(),A.status!=404},$=L=>{i(5,r=L)},C=L=>screen.width<=1024&&L.url?L.url:L.hdUrl,q=(L,A)=>{const G=document.createElement("a");G.href=A;const Q=A.split("."),W="."+Q[Q.length-1];G.download=yl(L)+W,G.target="_blank",document.body.appendChild(G),G.click(),document.body.removeChild(G)};return jl(async()=>{var A,G,Q,W;n=await(await fetch(`${Ue}/json/${o}.json`)).json(),i(1,l=n.data.event),i(2,k=l.objectives.map(T=>`<div class="objectives-value">${T}</div>`).join("")),i(3,f=(A=l.roles.find(T=>T.name==="modérateur"))==null?void 0:A.assignees.items),i(4,u=(G=l.roles.find(T=>T.name==="responsable"))==null?void 0:G.assignees.items);for(const T of l.schedule.items)T.vod&&T.vod.media&&T.vod.media.element&&T.vod.media.element.sources&&v.push({id:T.vod.media.id,title:T.vod.media.id?T.title:`${T.title} Ⓜ️`,hdUrl:T.vod.media.element.sources[0].uri,url:(Q=T.vod.media.element.sources[1])==null?void 0:Q.uri,thumbnail:T.vod.media.thumbnail,start:T.start.split("T")[1].split("+")[0],speakers:T.speakers.items});if(l.vod&&l.vod.media&&l.vod.media.element&&l.vod.media.element.sources&&v.push({id:l.vod.media.id,title:l.vod.media.title??"[Sans titre]",hdUrl:l.vod.media.element.sources[0].uri,url:(W=l.vod.media.element.sources[1])==null?void 0:W.uri,thumbnail:l.vod.media.thumbnail,start:l.start.split("T")[1].split("+")[0],speakers:l.speakers.items}),l.picture){const T={id:null,title:"[Non répertoriée]",thumbnail:l.picture,start:l.start.split("T")[1].split("+")[0],speakers:null},V=l.picture.split("/video/")[0]+"/video/y_1080p_4000kb.mp4";!v.some(m=>m.hdUrl===V)&&N(V)&&(T.hdUrl=V);const S=l.picture.split("/video/")[0]+"/video/y_480p_800kb.mp4";!v.some(m=>m.url===S)&&N(S)&&(T.url=S),v.push(T)}i(6,v=v.toSorted((T,V)=>T.start.localeCompare(V.start))),v.length>0&&i(5,r=v[0]),i(0,c=!1)}),[c,l,k,f,u,r,v,$,C,q,()=>history.back(),L=>q(L.title,L.url),L=>$(L)]}class Ql extends Il{constructor(e){super(),Hl(this,e,Fl,Pl,Vl,{},null,[-1,-1])}}export{Ql as component};
