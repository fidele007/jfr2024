import{s as wt,e as _,a as N,c as p,b as y,g as V,f as m,A as _e,v,w as me,i as U,h as u,B as Qe,n as rt,C as At,k as Pe,r as Bt,t as B,d as H,j as ie,x as Zt,D as ot,E as Jt,F as De,G as Ht,H as Lt,I as Ot,J as ct}from"../chunks/scheduler.Bric7bkU.js";import{S as zt,i as Gt,b as be,d as ye,m as je,t as b,a as k,c as K,e as Ie,g as x,f as St}from"../chunks/index.6an2BHur.js";import{M as Ut,g as ze,a as Ge,e as de,S as qt,P as Se,b as Xt,m as ft,p as dt}from"../chunks/MediaHistoryButton.thbbowJV.js";import{b as Pt}from"../chunks/paths.Nwas0oLl.js";import{p as Qt}from"../chunks/stores.C9KFWmhX.js";function Kt(r){let e,l,t,n,i,d,f,a="Autoplay",T,o;return{c(){e=_("div"),l=_("label"),t=_("input"),n=N(),i=_("span"),d=N(),f=_("span"),f.textContent=a,this.h()},l(c){e=p(c,"DIV",{class:!0});var s=y(e);l=p(s,"LABEL",{class:!0,style:!0});var h=y(l);t=p(h,"INPUT",{type:!0,class:!0}),n=V(h),i=p(h,"SPAN",{class:!0}),y(i).forEach(m),h.forEach(m),d=V(s),f=p(s,"SPAN",{"data-svelte-h":!0}),_e(f)!=="svelte-1q3ae6r"&&(f.textContent=a),s.forEach(m),this.h()},h(){v(t,"type","checkbox"),v(t,"class","svelte-24vers"),v(i,"class","slider svelte-24vers"),v(l,"class","switch svelte-24vers"),me(l,"--switch-color",r[1]),v(e,"class","switch-container svelte-24vers")},m(c,s){U(c,e,s),u(e,l),u(l,t),t.checked=r[0],u(l,n),u(l,i),u(e,d),u(e,f),T||(o=Qe(t,"change",r[2]),T=!0)},p(c,[s]){s&1&&(t.checked=c[0])},i:rt,o:rt,d(c){c&&m(e),T=!1,o()}}}function xt(r,e,l){let{checked:t=!1}=e;const n="#646cff";function i(){t=this.checked,l(0,t)}return r.$$set=d=>{"checked"in d&&l(0,t=d.checked)},[t,n,i]}class el extends zt{constructor(e){super(),Gt(this,e,xt,Kt,wt,{checked:0,color:1})}get color(){return this.$$.ctx[1]}}function ut(r,e,l){const t=r.slice();return t[24]=e[l],t}function ht(r,e,l){const t=r.slice();return t[24]=e[l],t}function vt(r,e,l){const t=r.slice();return t[29]=e[l],t}function mt(r,e,l){const t=r.slice();return t[24]=e[l],t}function _t(r,e,l){const t=r.slice();return t[24]=e[l],t}function pt(r){let e,l='<div class="nucleobase svelte-yja7an"></div> <div class="nucleobase svelte-yja7an"></div> <div class="nucleobase svelte-yja7an"></div> <div class="nucleobase svelte-yja7an"></div> <div class="nucleobase svelte-yja7an"></div> <div class="nucleobase svelte-yja7an"></div> <div class="nucleobase svelte-yja7an"></div> <div class="nucleobase svelte-yja7an"></div> <div class="nucleobase svelte-yja7an"></div> <div class="nucleobase svelte-yja7an"></div>';return{c(){e=_("div"),e.innerHTML=l,this.h()},l(t){e=p(t,"DIV",{class:!0,"data-svelte-h":!0}),_e(e)!=="svelte-9yhqwq"&&(e.innerHTML=l),this.h()},h(){v(e,"class","DNA_cont svelte-yja7an")},m(t,n){U(t,e,n)},d(t){t&&m(e)}}}function gt(r){var Y,te,pe,ke;let e,l,t,n,i=r[2].sessionType+"",d,f,a,T=r[2].title+"",o,c,s,h,W,z=ze((Y=r[2].start)==null?void 0:Y.split("T")[0])+"",I,L,$,ee=Ge((te=r[2].start)==null?void 0:te.split("T")[1].split("+")[0])+"",le,re,q=((pe=r[2].start)==null?void 0:pe.split("T")[1].split("+")[0])+" - "+((ke=r[2].end)==null?void 0:ke.split("T")[1].split("+")[0]),se,oe,ce,E,w,M=r[7].length>0&&bt(r),J=r[3]&&Vt(r),Z=(r[4]||r[5])&&Mt(r);return{c(){M&&M.c(),e=N(),l=_("div"),t=_("div"),n=_("div"),d=B(i),f=N(),a=_("h1"),o=B(T),c=N(),s=_("div"),h=_("div"),W=B("🗓️ "),I=B(z),L=N(),$=_("div"),le=B(ee),re=N(),se=B(q),oe=N(),J&&J.c(),ce=N(),Z&&Z.c(),this.h()},l(j){M&&M.l(j),e=V(j),l=p(j,"DIV",{class:!0,style:!0});var D=y(l);t=p(D,"DIV",{class:!0});var X=y(t);n=p(X,"DIV",{class:!0,style:!0});var ue=y(n);d=H(ue,i),ue.forEach(m),f=V(X),a=p(X,"H1",{class:!0});var fe=y(a);o=H(fe,T),fe.forEach(m),c=V(X),s=p(X,"DIV",{class:!0});var ne=y(s);h=p(ne,"DIV",{class:!0});var ae=y(h);W=H(ae,"🗓️ "),I=H(ae,z),ae.forEach(m),L=V(ne),$=p(ne,"DIV",{class:!0});var P=y($);le=H(P,ee),re=V(P),se=H(P,q),P.forEach(m),ne.forEach(m),X.forEach(m),oe=V(D),J&&J.l(D),ce=V(D),Z&&Z.l(D),D.forEach(m),this.h()},h(){v(n,"class","session-type svelte-yja7an"),me(n,"color",r[2].sessionTypeColor!=="#000000"?r[2].sessionTypeColor:"#dfdfdf"),v(a,"class","svelte-yja7an"),v(h,"class","svelte-yja7an"),v($,"class","svelte-yja7an"),v(s,"class","date-time subtitle svelte-yja7an"),v(t,"class","session-header svelte-yja7an"),v(l,"class",E="detail screen-small "+(r[7].length==0?"no-media":"")+" svelte-yja7an"),me(l,"border-left-color",r[2].sessionTypeColor)},m(j,D){M&&M.m(j,D),U(j,e,D),U(j,l,D),u(l,t),u(t,n),u(n,d),u(t,f),u(t,a),u(a,o),u(t,c),u(t,s),u(s,h),u(h,W),u(h,I),u(s,L),u(s,$),u($,le),u($,re),u($,se),u(l,oe),J&&J.m(l,null),u(l,ce),Z&&Z.m(l,null),w=!0},p(j,D){var X,ue,fe,ne;j[7].length>0?M?(M.p(j,D),D[0]&128&&b(M,1)):(M=bt(j),M.c(),b(M,1),M.m(e.parentNode,e)):M&&(x(),k(M,1,1,()=>{M=null}),K()),(!w||D[0]&4)&&i!==(i=j[2].sessionType+"")&&ie(d,i),(!w||D[0]&4)&&me(n,"color",j[2].sessionTypeColor!=="#000000"?j[2].sessionTypeColor:"#dfdfdf"),(!w||D[0]&4)&&T!==(T=j[2].title+"")&&ie(o,T),(!w||D[0]&4)&&z!==(z=ze((X=j[2].start)==null?void 0:X.split("T")[0])+"")&&ie(I,z),(!w||D[0]&4)&&ee!==(ee=Ge((ue=j[2].start)==null?void 0:ue.split("T")[1].split("+")[0])+"")&&ie(le,ee),(!w||D[0]&4)&&q!==(q=((fe=j[2].start)==null?void 0:fe.split("T")[1].split("+")[0])+" - "+((ne=j[2].end)==null?void 0:ne.split("T")[1].split("+")[0]))&&ie(se,q),j[3]?J?J.p(j,D):(J=Vt(j),J.c(),J.m(l,ce)):J&&(J.d(1),J=null),j[4]||j[5]?Z?(Z.p(j,D),D[0]&48&&b(Z,1)):(Z=Mt(j),Z.c(),b(Z,1),Z.m(l,null)):Z&&(x(),k(Z,1,1,()=>{Z=null}),K()),(!w||D[0]&128&&E!==(E="detail screen-small "+(j[7].length==0?"no-media":"")+" svelte-yja7an"))&&v(l,"class",E),(!w||D[0]&4)&&me(l,"border-left-color",j[2].sessionTypeColor)},i(j){w||(b(M),b(Z),w=!0)},o(j){k(M),k(Z),w=!1},d(j){j&&(m(e),m(l)),M&&M.d(j),J&&J.d(),Z&&Z.d()}}}function bt(r){var et,tt,lt,st;let e,l,t,n,i,d=(r[6].title??"😶‍🌫️")+"",f,a,T,o,c,s,h,W,z,I,L,$,ee=r[2].sessionType+"",le,re,q,se=r[2].title+"",oe,ce,E,w,M,J=ze((et=r[2].start)==null?void 0:et.split("T")[0])+"",Z,Y,te,pe=Ge((tt=r[2].start)==null?void 0:tt.split("T")[1].split("+")[0])+"",ke,j,D=((lt=r[2].start)==null?void 0:lt.split("T")[1].split("+")[0])+" - "+((st=r[2].end)==null?void 0:st.split("T")[1].split("+")[0]),X,ue,fe,ne,ae,P,ge,Fe,Ve=r[7].length+"",$e,Re,Ae,he,Be,He,Te,R,Ue,Ke,G=r[6].speakers&&yt(r),A=r[3]&&jt(r),S=(r[4]||r[5])&&It(r);function Ft(g){r[14](g)}let xe={};r[0]!==void 0&&(xe.checked=r[0]),he=new el({props:xe}),Zt.push(()=>St(he,"checked",Ft));let Ce=de(r[7]),O=[];for(let g=0;g<Ce.length;g+=1)O[g]=Nt(vt(r,Ce,g));const Rt=g=>k(O[g],1,1,()=>{O[g]=null});return{c(){e=_("div"),l=_("div"),t=_("div"),n=_("div"),i=_("strong"),f=B(d),a=N(),G&&G.c(),T=N(),o=_("div"),c=_("video"),s=_("track"),z=N(),I=_("div"),L=_("div"),$=_("div"),le=B(ee),re=N(),q=_("h1"),oe=B(se),ce=N(),E=_("div"),w=_("div"),M=B("🗓️ "),Z=B(J),Y=N(),te=_("div"),ke=B(pe),j=N(),X=B(D),ue=N(),A&&A.c(),fe=N(),S&&S.c(),ne=N(),ae=_("div"),P=_("div"),ge=_("strong"),Fe=B("Liste de lecture ("),$e=B(Ve),Re=B("):"),Ae=N(),be(he.$$.fragment),He=N(),Te=_("div");for(let g=0;g<O.length;g+=1)O[g].c();this.h()},l(g){e=p(g,"DIV",{class:!0});var C=y(e);l=p(C,"DIV",{class:!0});var Q=y(l);t=p(Q,"DIV",{id:!0,class:!0});var Ee=y(t);n=p(Ee,"DIV",{class:!0});var Me=y(n);i=p(Me,"STRONG",{class:!0});var We=y(i);f=H(We,d),We.forEach(m),Me.forEach(m),a=V(Ee),G&&G.l(Ee),Ee.forEach(m),T=V(Q),o=p(Q,"DIV",{id:!0,class:!0});var Ye=y(o);c=p(Ye,"VIDEO",{class:!0,src:!0,poster:!0});var F=y(c);s=p(F,"TRACK",{kind:!0,class:!0}),F.forEach(m),Ye.forEach(m),z=V(Q),I=p(Q,"DIV",{class:!0,style:!0});var ve=y(I);L=p(ve,"DIV",{class:!0});var Ne=y(L);$=p(Ne,"DIV",{class:!0,style:!0});var at=y($);le=H(at,ee),at.forEach(m),re=V(Ne),q=p(Ne,"H1",{class:!0});var it=y(q);oe=H(it,se),it.forEach(m),ce=V(Ne),E=p(Ne,"DIV",{class:!0});var we=y(E);w=p(we,"DIV",{class:!0});var qe=y(w);M=H(qe,"🗓️ "),Z=H(qe,J),qe.forEach(m),Y=V(we),te=p(we,"DIV",{class:!0});var Ze=y(te);ke=H(Ze,pe),j=V(Ze),X=H(Ze,D),Ze.forEach(m),we.forEach(m),Ne.forEach(m),ue=V(ve),A&&A.l(ve),fe=V(ve),S&&S.l(ve),ve.forEach(m),Q.forEach(m),ne=V(C),ae=p(C,"DIV",{class:!0});var Je=y(ae);P=p(Je,"DIV",{id:!0,class:!0});var Le=y(P);ge=p(Le,"STRONG",{class:!0});var Oe=y(ge);Fe=H(Oe,"Liste de lecture ("),$e=H(Oe,Ve),Re=H(Oe,"):"),Oe.forEach(m),Ae=V(Le),ye(he.$$.fragment,Le),Le.forEach(m),He=V(Je),Te=p(Je,"DIV",{class:!0});var nt=y(Te);for(let Xe=0;Xe<O.length;Xe+=1)O[Xe].l(nt);nt.forEach(m),Je.forEach(m),C.forEach(m),this.h()},h(){v(i,"class","svelte-yja7an"),v(n,"class","svelte-yja7an"),v(t,"id","current-media-info"),v(t,"class","svelte-yja7an"),v(s,"kind","captions"),v(s,"class","svelte-yja7an"),c.autoplay=r[0],c.controls=!0,v(c,"class","video-player svelte-yja7an"),ot(c.src,h=r[8](r[6]))||v(c,"src",h),v(c,"poster",W=r[6].thumbnail),v(o,"id","video-container"),v(o,"class","svelte-yja7an"),v($,"class","session-type svelte-yja7an"),me($,"color",r[2].sessionTypeColor!=="#000000"?r[2].sessionTypeColor:"#dfdfdf"),v(q,"class","svelte-yja7an"),v(w,"class","svelte-yja7an"),v(te,"class","svelte-yja7an"),v(E,"class","date-time subtitle svelte-yja7an"),v(L,"class","session-header svelte-yja7an"),v(I,"class","detail screen-big svelte-yja7an"),me(I,"border-left-color",r[2].sessionTypeColor),v(l,"class","current-media svelte-yja7an"),v(ge,"class","svelte-yja7an"),v(P,"id","playlist-title"),v(P,"class","svelte-yja7an"),v(Te,"class","playlist svelte-yja7an"),v(ae,"class","playlist-container svelte-yja7an"),v(e,"class","media svelte-yja7an")},m(g,C){U(g,e,C),u(e,l),u(l,t),u(t,n),u(n,i),u(i,f),u(t,a),G&&G.m(t,null),u(l,T),u(l,o),u(o,c),u(c,s),u(l,z),u(l,I),u(I,L),u(L,$),u($,le),u(L,re),u(L,q),u(q,oe),u(L,ce),u(L,E),u(E,w),u(w,M),u(w,Z),u(E,Y),u(E,te),u(te,ke),u(te,j),u(te,X),u(I,ue),A&&A.m(I,null),u(I,fe),S&&S.m(I,null),u(e,ne),u(e,ae),u(ae,P),u(P,ge),u(ge,Fe),u(ge,$e),u(ge,Re),u(P,Ae),je(he,P,null),u(ae,He),u(ae,Te);for(let Q=0;Q<O.length;Q+=1)O[Q]&&O[Q].m(Te,null);R=!0,Ue||(Ke=[Qe(c,"play",r[12]),Qe(c,"ended",r[13])],Ue=!0)},p(g,C){var Ee,Me,We,Ye;(!R||C[0]&64)&&d!==(d=(g[6].title??"😶‍🌫️")+"")&&ie(f,d),g[6].speakers?G?(G.p(g,C),C[0]&64&&b(G,1)):(G=yt(g),G.c(),b(G,1),G.m(t,null)):G&&(x(),k(G,1,1,()=>{G=null}),K()),(!R||C[0]&1)&&(c.autoplay=g[0]),(!R||C[0]&64&&!ot(c.src,h=g[8](g[6])))&&v(c,"src",h),(!R||C[0]&64&&W!==(W=g[6].thumbnail))&&v(c,"poster",W),(!R||C[0]&4)&&ee!==(ee=g[2].sessionType+"")&&ie(le,ee),(!R||C[0]&4)&&me($,"color",g[2].sessionTypeColor!=="#000000"?g[2].sessionTypeColor:"#dfdfdf"),(!R||C[0]&4)&&se!==(se=g[2].title+"")&&ie(oe,se),(!R||C[0]&4)&&J!==(J=ze((Ee=g[2].start)==null?void 0:Ee.split("T")[0])+"")&&ie(Z,J),(!R||C[0]&4)&&pe!==(pe=Ge((Me=g[2].start)==null?void 0:Me.split("T")[1].split("+")[0])+"")&&ie(ke,pe),(!R||C[0]&4)&&D!==(D=((We=g[2].start)==null?void 0:We.split("T")[1].split("+")[0])+" - "+((Ye=g[2].end)==null?void 0:Ye.split("T")[1].split("+")[0]))&&ie(X,D),g[3]?A?A.p(g,C):(A=jt(g),A.c(),A.m(I,fe)):A&&(A.d(1),A=null),g[4]||g[5]?S?(S.p(g,C),C[0]&48&&b(S,1)):(S=It(g),S.c(),b(S,1),S.m(I,null)):S&&(x(),k(S,1,1,()=>{S=null}),K()),(!R||C[0]&4)&&me(I,"border-left-color",g[2].sessionTypeColor),(!R||C[0]&128)&&Ve!==(Ve=g[7].length+"")&&ie($e,Ve);const Q={};if(!Be&&C[0]&1&&(Be=!0,Q.checked=g[0],Jt(()=>Be=!1)),he.$set(Q),C[0]&192){Ce=de(g[7]);let F;for(F=0;F<Ce.length;F+=1){const ve=vt(g,Ce,F);O[F]?(O[F].p(ve,C),b(O[F],1)):(O[F]=Nt(ve),O[F].c(),b(O[F],1),O[F].m(Te,null))}for(x(),F=Ce.length;F<O.length;F+=1)Rt(F);K()}},i(g){if(!R){b(G),b(S),b(he.$$.fragment,g);for(let C=0;C<Ce.length;C+=1)b(O[C]);R=!0}},o(g){k(G),k(S),k(he.$$.fragment,g),O=O.filter(Boolean);for(let C=0;C<O.length;C+=1)k(O[C]);R=!1},d(g){g&&m(e),G&&G.d(),A&&A.d(),S&&S.d(),Ie(he),De(O,g),Ue=!1,Ht(Ke)}}}function yt(r){let e,l;return e=new qt({props:{speakers:r[6].speakers}}),{c(){be(e.$$.fragment)},l(t){ye(e.$$.fragment,t)},m(t,n){je(e,t,n),l=!0},p(t,n){const i={};n[0]&64&&(i.speakers=t[6].speakers),e.$set(i)},i(t){l||(b(e.$$.fragment,t),l=!0)},o(t){k(e.$$.fragment,t),l=!1},d(t){Ie(e,t)}}}function jt(r){let e,l,t="Objectifs :",n,i,d;return{c(){e=_("div"),l=_("strong"),l.textContent=t,n=N(),i=_("div"),d=new Lt(!1),this.h()},l(f){e=p(f,"DIV",{class:!0});var a=y(e);l=p(a,"STRONG",{class:!0,"data-svelte-h":!0}),_e(l)!=="svelte-1jn7qe7"&&(l.textContent=t),n=V(a),i=p(a,"DIV",{class:!0});var T=y(i);d=Ot(T,!1),T.forEach(m),a.forEach(m),this.h()},h(){v(l,"class","svelte-yja7an"),d.a=null,v(i,"class","svelte-yja7an"),v(e,"class","objectives svelte-yja7an")},m(f,a){U(f,e,a),u(e,l),u(e,n),u(e,i),d.m(r[3],i)},p(f,a){a[0]&8&&d.p(f[3])},d(f){f&&m(e)}}}function It(r){let e,l,t,n=r[4]&&kt(r),i=r[5]&&Ct(r);return{c(){e=_("table"),n&&n.c(),l=N(),i&&i.c(),this.h()},l(d){e=p(d,"TABLE",{class:!0});var f=y(e);n&&n.l(f),l=V(f),i&&i.l(f),f.forEach(m),this.h()},h(){v(e,"class","person-list svelte-yja7an")},m(d,f){U(d,e,f),n&&n.m(e,null),u(e,l),i&&i.m(e,null),t=!0},p(d,f){d[4]?n?(n.p(d,f),f[0]&16&&b(n,1)):(n=kt(d),n.c(),b(n,1),n.m(e,l)):n&&(x(),k(n,1,1,()=>{n=null}),K()),d[5]?i?(i.p(d,f),f[0]&32&&b(i,1)):(i=Ct(d),i.c(),b(i,1),i.m(e,null)):i&&(x(),k(i,1,1,()=>{i=null}),K())},i(d){t||(b(n),b(i),t=!0)},o(d){k(n),k(i),t=!1},d(d){d&&m(e),n&&n.d(),i&&i.d()}}}function kt(r){let e,l,t="Modérateur :",n,i,d,f=de(r[4]),a=[];for(let o=0;o<f.length;o+=1)a[o]=Tt(_t(r,f,o));const T=o=>k(a[o],1,1,()=>{a[o]=null});return{c(){e=_("tr"),l=_("td"),l.textContent=t,n=N(),i=_("td");for(let o=0;o<a.length;o+=1)a[o].c();this.h()},l(o){e=p(o,"TR",{class:!0});var c=y(e);l=p(c,"TD",{class:!0,"data-svelte-h":!0}),_e(l)!=="svelte-1noy2yo"&&(l.textContent=t),n=V(c),i=p(c,"TD",{class:!0});var s=y(i);for(let h=0;h<a.length;h+=1)a[h].l(s);s.forEach(m),c.forEach(m),this.h()},h(){v(l,"class","role-label svelte-yja7an"),v(i,"class","svelte-yja7an"),v(e,"class","svelte-yja7an")},m(o,c){U(o,e,c),u(e,l),u(e,n),u(e,i);for(let s=0;s<a.length;s+=1)a[s]&&a[s].m(i,null);d=!0},p(o,c){if(c[0]&16){f=de(o[4]);let s;for(s=0;s<f.length;s+=1){const h=_t(o,f,s);a[s]?(a[s].p(h,c),b(a[s],1)):(a[s]=Tt(h),a[s].c(),b(a[s],1),a[s].m(i,null))}for(x(),s=f.length;s<a.length;s+=1)T(s);K()}},i(o){if(!d){for(let c=0;c<f.length;c+=1)b(a[c]);d=!0}},o(o){a=a.filter(Boolean);for(let c=0;c<a.length;c+=1)k(a[c]);d=!1},d(o){o&&m(e),De(a,o)}}}function Tt(r){let e,l;return e=new Se({props:{info:r[24]}}),{c(){be(e.$$.fragment)},l(t){ye(e.$$.fragment,t)},m(t,n){je(e,t,n),l=!0},p(t,n){const i={};n[0]&16&&(i.info=t[24]),e.$set(i)},i(t){l||(b(e.$$.fragment,t),l=!0)},o(t){k(e.$$.fragment,t),l=!1},d(t){Ie(e,t)}}}function Ct(r){let e,l,t="Responsable :",n,i,d,f=de(r[5]),a=[];for(let o=0;o<f.length;o+=1)a[o]=Et(mt(r,f,o));const T=o=>k(a[o],1,1,()=>{a[o]=null});return{c(){e=_("tr"),l=_("td"),l.textContent=t,n=N(),i=_("td");for(let o=0;o<a.length;o+=1)a[o].c();this.h()},l(o){e=p(o,"TR",{class:!0});var c=y(e);l=p(c,"TD",{class:!0,"data-svelte-h":!0}),_e(l)!=="svelte-1xum5yq"&&(l.textContent=t),n=V(c),i=p(c,"TD",{class:!0});var s=y(i);for(let h=0;h<a.length;h+=1)a[h].l(s);s.forEach(m),c.forEach(m),this.h()},h(){v(l,"class","role-label svelte-yja7an"),v(i,"class","svelte-yja7an"),v(e,"class","svelte-yja7an")},m(o,c){U(o,e,c),u(e,l),u(e,n),u(e,i);for(let s=0;s<a.length;s+=1)a[s]&&a[s].m(i,null);d=!0},p(o,c){if(c[0]&32){f=de(o[5]);let s;for(s=0;s<f.length;s+=1){const h=mt(o,f,s);a[s]?(a[s].p(h,c),b(a[s],1)):(a[s]=Et(h),a[s].c(),b(a[s],1),a[s].m(i,null))}for(x(),s=f.length;s<a.length;s+=1)T(s);K()}},i(o){if(!d){for(let c=0;c<f.length;c+=1)b(a[c]);d=!0}},o(o){a=a.filter(Boolean);for(let c=0;c<a.length;c+=1)k(a[c]);d=!1},d(o){o&&m(e),De(a,o)}}}function Et(r){let e,l;return e=new Se({props:{info:r[24]}}),{c(){be(e.$$.fragment)},l(t){ye(e.$$.fragment,t)},m(t,n){je(e,t,n),l=!0},p(t,n){const i={};n[0]&32&&(i.info=t[24]),e.$set(i)},i(t){l||(b(e.$$.fragment,t),l=!0)},o(t){k(e.$$.fragment,t),l=!1},d(t){Ie(e,t)}}}function Nt(r){let e,l,t;function n(d){r[15](d)}let i={media:r[29],downloadable:!0};return r[6]!==void 0&&(i.currentMedia=r[6]),e=new Xt({props:i}),Zt.push(()=>St(e,"currentMedia",n)),{c(){be(e.$$.fragment)},l(d){ye(e.$$.fragment,d)},m(d,f){je(e,d,f),t=!0},p(d,f){const a={};f[0]&128&&(a.media=d[29]),!l&&f[0]&64&&(l=!0,a.currentMedia=d[6],Jt(()=>l=!1)),e.$set(a)},i(d){t||(b(e.$$.fragment,d),t=!0)},o(d){k(e.$$.fragment,d),t=!1},d(d){Ie(e,d)}}}function Vt(r){let e,l,t="Objectifs :",n,i,d;return{c(){e=_("div"),l=_("strong"),l.textContent=t,n=N(),i=_("div"),d=new Lt(!1),this.h()},l(f){e=p(f,"DIV",{class:!0});var a=y(e);l=p(a,"STRONG",{class:!0,"data-svelte-h":!0}),_e(l)!=="svelte-1jn7qe7"&&(l.textContent=t),n=V(a),i=p(a,"DIV",{class:!0});var T=y(i);d=Ot(T,!1),T.forEach(m),a.forEach(m),this.h()},h(){v(l,"class","svelte-yja7an"),d.a=null,v(i,"class","svelte-yja7an"),v(e,"class","objectives svelte-yja7an")},m(f,a){U(f,e,a),u(e,l),u(e,n),u(e,i),d.m(r[3],i)},p(f,a){a[0]&8&&d.p(f[3])},d(f){f&&m(e)}}}function Mt(r){let e,l,t,n=r[4]&&Wt(r),i=r[5]&&Dt(r);return{c(){e=_("table"),n&&n.c(),l=N(),i&&i.c(),this.h()},l(d){e=p(d,"TABLE",{class:!0});var f=y(e);n&&n.l(f),l=V(f),i&&i.l(f),f.forEach(m),this.h()},h(){v(e,"class","person-list svelte-yja7an")},m(d,f){U(d,e,f),n&&n.m(e,null),u(e,l),i&&i.m(e,null),t=!0},p(d,f){d[4]?n?(n.p(d,f),f[0]&16&&b(n,1)):(n=Wt(d),n.c(),b(n,1),n.m(e,l)):n&&(x(),k(n,1,1,()=>{n=null}),K()),d[5]?i?(i.p(d,f),f[0]&32&&b(i,1)):(i=Dt(d),i.c(),b(i,1),i.m(e,null)):i&&(x(),k(i,1,1,()=>{i=null}),K())},i(d){t||(b(n),b(i),t=!0)},o(d){k(n),k(i),t=!1},d(d){d&&m(e),n&&n.d(),i&&i.d()}}}function Wt(r){let e,l,t="Modérateur :",n,i,d,f=de(r[4]),a=[];for(let o=0;o<f.length;o+=1)a[o]=Yt(ht(r,f,o));const T=o=>k(a[o],1,1,()=>{a[o]=null});return{c(){e=_("tr"),l=_("td"),l.textContent=t,n=N(),i=_("td");for(let o=0;o<a.length;o+=1)a[o].c();this.h()},l(o){e=p(o,"TR",{class:!0});var c=y(e);l=p(c,"TD",{class:!0,"data-svelte-h":!0}),_e(l)!=="svelte-1noy2yo"&&(l.textContent=t),n=V(c),i=p(c,"TD",{class:!0});var s=y(i);for(let h=0;h<a.length;h+=1)a[h].l(s);s.forEach(m),c.forEach(m),this.h()},h(){v(l,"class","role-label svelte-yja7an"),v(i,"class","svelte-yja7an"),v(e,"class","svelte-yja7an")},m(o,c){U(o,e,c),u(e,l),u(e,n),u(e,i);for(let s=0;s<a.length;s+=1)a[s]&&a[s].m(i,null);d=!0},p(o,c){if(c[0]&16){f=de(o[4]);let s;for(s=0;s<f.length;s+=1){const h=ht(o,f,s);a[s]?(a[s].p(h,c),b(a[s],1)):(a[s]=Yt(h),a[s].c(),b(a[s],1),a[s].m(i,null))}for(x(),s=f.length;s<a.length;s+=1)T(s);K()}},i(o){if(!d){for(let c=0;c<f.length;c+=1)b(a[c]);d=!0}},o(o){a=a.filter(Boolean);for(let c=0;c<a.length;c+=1)k(a[c]);d=!1},d(o){o&&m(e),De(a,o)}}}function Yt(r){let e,l;return e=new Se({props:{info:r[24]}}),{c(){be(e.$$.fragment)},l(t){ye(e.$$.fragment,t)},m(t,n){je(e,t,n),l=!0},p(t,n){const i={};n[0]&16&&(i.info=t[24]),e.$set(i)},i(t){l||(b(e.$$.fragment,t),l=!0)},o(t){k(e.$$.fragment,t),l=!1},d(t){Ie(e,t)}}}function Dt(r){let e,l,t="Responsable :",n,i,d,f=de(r[5]),a=[];for(let o=0;o<f.length;o+=1)a[o]=$t(ut(r,f,o));const T=o=>k(a[o],1,1,()=>{a[o]=null});return{c(){e=_("tr"),l=_("td"),l.textContent=t,n=N(),i=_("td");for(let o=0;o<a.length;o+=1)a[o].c();this.h()},l(o){e=p(o,"TR",{class:!0});var c=y(e);l=p(c,"TD",{class:!0,"data-svelte-h":!0}),_e(l)!=="svelte-1xum5yq"&&(l.textContent=t),n=V(c),i=p(c,"TD",{class:!0});var s=y(i);for(let h=0;h<a.length;h+=1)a[h].l(s);s.forEach(m),c.forEach(m),this.h()},h(){v(l,"class","role-label svelte-yja7an"),v(i,"class","svelte-yja7an"),v(e,"class","svelte-yja7an")},m(o,c){U(o,e,c),u(e,l),u(e,n),u(e,i);for(let s=0;s<a.length;s+=1)a[s]&&a[s].m(i,null);d=!0},p(o,c){if(c[0]&32){f=de(o[5]);let s;for(s=0;s<f.length;s+=1){const h=ut(o,f,s);a[s]?(a[s].p(h,c),b(a[s],1)):(a[s]=$t(h),a[s].c(),b(a[s],1),a[s].m(i,null))}for(x(),s=f.length;s<a.length;s+=1)T(s);K()}},i(o){if(!d){for(let c=0;c<f.length;c+=1)b(a[c]);d=!0}},o(o){a=a.filter(Boolean);for(let c=0;c<a.length;c+=1)k(a[c]);d=!1},d(o){o&&m(e),De(a,o)}}}function $t(r){let e,l;return e=new Se({props:{info:r[24]}}),{c(){be(e.$$.fragment)},l(t){ye(e.$$.fragment,t)},m(t,n){je(e,t,n),l=!0},p(t,n){const i={};n[0]&32&&(i.info=t[24]),e.$set(i)},i(t){l||(b(e.$$.fragment,t),l=!0)},o(t){k(e.$$.fragment,t),l=!1},d(t){Ie(e,t)}}}function tl(r){let e,l,t,n,i,d='<i class="gg-chevron-left svelte-yja7an"></i> Retour',f,a,T,o,c;document.title=e=r[2]?r[2].title:"JFR 2024",a=new Ut({});let s=r[1]&&pt(),h=!r[1]&&r[2]&&gt(r);return{c(){l=N(),t=_("main"),n=_("div"),i=_("a"),i.innerHTML=d,f=N(),be(a.$$.fragment),T=N(),s&&s.c(),o=N(),h&&h.c(),this.h()},l(W){At("svelte-135ofcf",document.head).forEach(m),l=V(W),t=p(W,"MAIN",{class:!0});var I=y(t);n=p(I,"DIV",{id:!0,class:!0});var L=y(n);i=p(L,"A",{href:!0,class:!0,"data-svelte-h":!0}),_e(i)!=="svelte-o11hhh"&&(i.innerHTML=d),f=V(L),ye(a.$$.fragment,L),L.forEach(m),T=V(I),s&&s.l(I),o=V(I),h&&h.l(I),I.forEach(m),this.h()},h(){v(i,"href",Pt+"/"),v(i,"class","one-liner svelte-yja7an"),v(n,"id","navbar"),v(n,"class","svelte-yja7an"),v(t,"class","svelte-yja7an")},m(W,z){U(W,l,z),U(W,t,z),u(t,n),u(n,i),u(n,f),je(a,n,null),u(t,T),s&&s.m(t,null),u(t,o),h&&h.m(t,null),c=!0},p(W,z){(!c||z[0]&4)&&e!==(e=W[2]?W[2].title:"JFR 2024")&&(document.title=e),W[1]?s||(s=pt(),s.c(),s.m(t,o)):s&&(s.d(1),s=null),!W[1]&&W[2]?h?(h.p(W,z),z[0]&6&&b(h,1)):(h=gt(W),h.c(),b(h,1),h.m(t,null)):h&&(x(),k(h,1,1,()=>{h=null}),K())},i(W){c||(b(a.$$.fragment,W),b(h),c=!0)},o(W){k(a.$$.fragment,W),k(h),c=!1},d(W){W&&(m(l),m(t)),Ie(a),s&&s.d(),h&&h.d()}}}const ll="https://gql.cyim.com/graphql",sl="eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJZWldOOHcxMXZHa2J6bkZ4cXNaVDd0dWVKcW9BNG5TU0FLTHVtQ2VsMzJ3In0.eyJleHAiOjE3Mjg2NTY1MTgsImlhdCI6MTcyODM5NzMxOCwiYXV0aF90aW1lIjoxNzI4MzkyNzUyLCJqdGkiOiI5NGI2OGYyNC04MzBjLTQwM2MtYjNkNy1iNjE4MGYwNzYyZjMiLCJpc3MiOiJodHRwczovL2F1dGguamZycGx1cy5qZnIucGx1cy9hdXRoL3JlYWxtcy9jeWltLW15YWNjb3VudCIsImF1ZCI6ImFjY291bnQiLCJzdWIiOiI2OWMyYjU4OC0zNDNkLTQ2MDctOGYyZC1mMDRmNTMzNmE1ZTAiLCJ0eXAiOiJCZWFyZXIiLCJhenAiOiJhcHBzLWNvbmdyZXMiLCJub25jZSI6IjRkN2Y0MjY5LTYxNGItNGNiZi04ZTlkLTA1YTkxM2EwOTJkZSIsInNlc3Npb25fc3RhdGUiOiJjYmNhYTVmNi00YjMwLTQzNjgtYmQyZi05ZGFhMWYzZjJkZjEiLCJhY3IiOiIwIiwiYWxsb3dlZC1vcmlnaW5zIjpbIioiXSwicmVhbG1fYWNjZXNzIjp7InJvbGVzIjpbImRlZmF1bHQtcm9sZXMtY3lpbS1teWFjY291bnQiLCJvZmZsaW5lX2FjY2VzcyIsInVtYV9hdXRob3JpemF0aW9uIl19LCJyZXNvdXJjZV9hY2Nlc3MiOnsiYWNjb3VudCI6eyJyb2xlcyI6WyJtYW5hZ2UtYWNjb3VudCIsIm1hbmFnZS1hY2NvdW50LWxpbmtzIiwidmlldy1wcm9maWxlIl19fSwic2NvcGUiOiJvcGVuaWQgY3lpbSBlbWFpbCBwcm9maWxlIGxlYWRzIiwic2lkIjoiY2JjYWE1ZjYtNGIzMC00MzY4LWJkMmYtOWRhYTFmM2YyZGYxIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJuYW1lIjoiTGVhbmdzaW5nIElWIiwicHJlZmVycmVkX3VzZXJuYW1lIjoibGVhbmdzaW5nLmltYUBnbWFpbC5jb20iLCJnaXZlbl9uYW1lIjoiTGVhbmdzaW5nIiwiZmFtaWx5X25hbWUiOiJJViIsImVtYWlsIjoibGVhbmdzaW5nLmltYUBnbWFpbC5jb20ifQ.RCI0_VRQI6gzFMN_nmE07qRKkniaYXh-VPtK2zokaQIjQg_AxTwhMAbAs0_f2nFGdf_rG8ZFFWaBmgvknH3bnnDAR3Sjv1D4fopcCCbwrpEN0k4xcrdThlePFj5B6G4WCZvcdmeLPjYFj3D7BVBEH3BDXocq0_i7_VhdOrxCNVW8KA_EKd5NHQYwdLAl0Jpdcnc3zM_gSW1AyZh5Ew0fM5sFLUiEKxsReqdBpSqzRaUJfqhz68sqbLl4qK37diTxKVjl8P_VBp5UOIn42jNOjBrgstGyKkxYDex7pSNhYMUHOBUhTYj8-iEj8yi0FvSvB1WjGEZNzh6UaBIPqtP0CQ",al=25;function il(r,e,l){let t,n,i;Pe(r,dt,E=>l(11,t=E)),Pe(r,ft,E=>l(19,n=E)),Pe(r,Qt,E=>l(20,i=E));const d=`
	{
		event(id: "$sessionId") {
			id
			picture
			sessionType: tag(category: "/session/type")
			sessionTypeColor: color
			voting: tag(category: "/interactivity/voting")
			title
			start
			end
			objectives
			onAir: ongoing
			vod {
				checkPermissions(actions: ["media:view"])
				media {
					id
					type
					thumbnail
					element {
						... on MediaVideo {
							sources {
								uri
							}
						}
					}
				}
			}
			broadcasts {
				items {
					isLive
					onAir
					channel: location {
						id
						type
						name
						thumbnails {
							id
							url
						}
					}
				}
			}
			room: location {
				id
				name
				type
			}
			schedule {
				items {
					id
					title
					start
					end
					element {
						... on Presentation {
							abstract {
								id
							}
						}
					}
					speakers: participants(role: "speaker", recursive: true) {
						items {
							id
							lastName
							firstName
							roles {
								name
							}
							photo {
								url
							}
							country {
								name
							}
							city {
								name
							}
						}
					}
					vod {
						checkPermissions(actions: ["media:view"])
						media {
							id
							type
							thumbnail
							element {
								... on MediaVideo {
									sources {
										uri
									}
								}
							}
						}
					}
				}
			}
			roles {
				name
				assignees {
					items {
						id
						firstName
						lastName
						photo {
							url
						}
						country {
							name
						}
						city {
							name
						}
					}
				}
			}
			speakers: participants(role: "speaker", recursive: true) {
				items {
					id
					firstName
					lastName
					photo {
						url
					}
					country {
						name
					}
					city {
						name
					}
				}
			}
			chairs: participants(role: "chair", recursive: false) {
				items {
					id
					firstName
					lastName
					photo {
						url
					}
					country {
						name
					}
					city {
						name
					}
				}
			}
			topics {
				_id: id
				value
			}
			tracks {
				color
				id
				value
				label
			}
			organizers {
				id
				name
				logo
			}
			programmeOwners {
				title
				id
			}
		}
	}
	`,f=i.url.searchParams;let a,T;f&&(a=f.get("id"),T=f.get("media-url"));let o=!0,c,s,h,W,z,I,L=(t==null?void 0:t.autoplay)??!1,$=[];const ee=E=>screen.width<=1024&&E.url?E.url:E.hdUrl;Bt(async()=>{var w,M,J,Z;c=await(await fetch(ll,{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${sl}`},body:JSON.stringify({query:d.replace("$sessionId",a)})})).json(),l(2,s=c.data.event),l(3,h=s.objectives.map(Y=>`<div class="objectives-value">${Y}</div>`).join("")),l(4,W=(w=s.roles.find(Y=>Y.name==="modérateur"))==null?void 0:w.assignees.items),l(5,z=(M=s.roles.find(Y=>Y.name==="responsable"))==null?void 0:M.assignees.items);for(const Y of s.schedule.items)Y.vod&&Y.vod.media&&Y.vod.media.element&&Y.vod.media.element.sources&&$.push({id:Y.vod.media.id,title:Y.vod.media.id?Y.title:`${Y.title} Ⓜ️`,hdUrl:Y.vod.media.element.sources[0].uri,url:(J=Y.vod.media.element.sources[1])==null?void 0:J.uri,thumbnail:Y.vod.media.thumbnail,start:Y.start.split("T")[1].split("+")[0],speakers:Y.speakers.items});s.vod&&s.vod.media&&s.vod.media.element&&s.vod.media.element.sources&&$.push({id:s.vod.media.id,title:s.vod.media.title??"[Sans titre]",hdUrl:s.vod.media.element.sources[0].uri,url:(Z=s.vod.media.element.sources[1])==null?void 0:Z.uri,thumbnail:s.vod.media.thumbnail,start:s.start.split("T")[1].split("+")[0],speakers:s.speakers.items}),l(7,$=$.toSorted((Y,te)=>Y.start.localeCompare(te.start))),$.length>0&&(T&&l(6,I=$.find(Y=>Y.hdUrl===T)),I||l(6,I=$[0])),l(1,o=!1)});const le=E=>{const w=n.filter(J=>J.hdUrl!==E.hdUrl),M=structuredClone(E);M.sessionId=a,M.sessionTitle=s.title,M.sessionTypeColor=s.sessionTypeColor!=="#000000"?s.sessionTypeColor:"#dfdfdf",ct(ft,n=[M,...w].slice(0,al),n)},re=E=>{if(!t.autoplay)return;const w=$.indexOf(E);w<$.length-1&&l(6,I=$[w+1])},q=()=>le(I),se=()=>re(I);function oe(E){L=E,l(0,L)}function ce(E){I=E,l(6,I)}return r.$$.update=()=>{r.$$.dirty[0]&2049&&t&&ct(dt,t={autoplay:L},t)},[L,o,s,h,W,z,I,$,ee,le,re,t,q,se,oe,ce]}class dl extends zt{constructor(e){super(),Gt(this,e,il,tl,wt,{},null,[-1,-1])}}export{dl as component};
