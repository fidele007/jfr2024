import{s as It,a as M,e as p,l as Vt,f as _,g as H,c as m,b as E,m as ue,o as h,i as W,h as d,k as We,p as Mt,t as J,d as z,q as ce,j as ee,r as Ze,u as Ht,v as Ce,H as Et,w as $t,x as Ut,y as wt,z as Rt}from"../chunks/scheduler.CJxP4hYY.js";import{S as jt,i as yt,c as me,a as ke,m as ge,t as k,b as D,d as Y,e as be,g as Q,f as St}from"../chunks/index.CScdH7UO.js";import{M as Lt,g as Re,a as je,e as ie,S as qt,P as ye,b as At,m as xe}from"../chunks/MediaHistoryButton.B6pIqYjB.js";import{b as Dt}from"../chunks/paths.CZSr_C4P.js";import{p as Bt}from"../chunks/stores.D31ug7YF.js";function et(o,e,l){const t=o.slice();return t[18]=e[l],t}function tt(o,e,l){const t=o.slice();return t[18]=e[l],t}function lt(o,e,l){const t=o.slice();return t[23]=e[l],t}function st(o,e,l){const t=o.slice();return t[18]=e[l],t}function rt(o,e,l){const t=o.slice();return t[18]=e[l],t}function it(o){let e,l='<div class="nucleobase svelte-1krgekn"></div> <div class="nucleobase svelte-1krgekn"></div> <div class="nucleobase svelte-1krgekn"></div> <div class="nucleobase svelte-1krgekn"></div> <div class="nucleobase svelte-1krgekn"></div> <div class="nucleobase svelte-1krgekn"></div> <div class="nucleobase svelte-1krgekn"></div> <div class="nucleobase svelte-1krgekn"></div> <div class="nucleobase svelte-1krgekn"></div> <div class="nucleobase svelte-1krgekn"></div>';return{c(){e=p("div"),e.innerHTML=l,this.h()},l(t){e=m(t,"DIV",{class:!0,"data-svelte-h":!0}),ue(e)!=="svelte-9yhqwq"&&(e.innerHTML=l),this.h()},h(){h(e,"class","DNA_cont svelte-1krgekn")},m(t,a){W(t,e,a)},d(t){t&&_(e)}}}function nt(o){let e,l,t,a,i=o[1].sessionType+"",c,u,s,V=o[1].title+"",r,f,n,v,$,U=Re(o[1].start.split("T")[0])+"",w,B,O,Z=je(o[1].start.split("T")[1].split("+")[0])+"",te,j,N=o[1].start.split("T")[1].split("+")[0]+" - "+o[1].end.split("T")[1].split("+")[0],K,le,se,b,y,q=o[6].length>0&&at(o),S=o[2]&&pt(o),L=(o[3]||o[4])&&mt(o);return{c(){q&&q.c(),e=M(),l=p("div"),t=p("div"),a=p("div"),c=J(i),u=M(),s=p("h1"),r=J(V),f=M(),n=p("div"),v=p("div"),$=J("🗓️ "),w=J(U),B=M(),O=p("div"),te=J(Z),j=M(),K=J(N),le=M(),S&&S.c(),se=M(),L&&L.c(),this.h()},l(T){q&&q.l(T),e=H(T),l=m(T,"DIV",{class:!0,style:!0});var C=E(l);t=m(C,"DIV",{class:!0});var x=E(t);a=m(x,"DIV",{class:!0,style:!0});var de=E(a);c=z(de,i),de.forEach(_),u=H(x),s=m(x,"H1",{class:!0});var Te=E(s);r=z(Te,V),Te.forEach(_),f=H(x),n=m(x,"DIV",{class:!0});var re=E(n);v=m(re,"DIV",{class:!0});var ne=E(v);$=z(ne,"🗓️ "),w=z(ne,U),ne.forEach(_),B=H(re),O=m(re,"DIV",{class:!0});var ae=E(O);te=z(ae,Z),j=H(ae),K=z(ae,N),ae.forEach(_),re.forEach(_),x.forEach(_),le=H(C),S&&S.l(C),se=H(C),L&&L.l(C),C.forEach(_),this.h()},h(){h(a,"class","session-type svelte-1krgekn"),ce(a,"color",o[1].sessionTypeColor!=="#000000"?o[1].sessionTypeColor:"#dfdfdf"),h(s,"class","svelte-1krgekn"),h(v,"class","svelte-1krgekn"),h(O,"class","svelte-1krgekn"),h(n,"class","date-time subtitle svelte-1krgekn"),h(t,"class","session-header svelte-1krgekn"),h(l,"class",b="detail screen-small "+(o[6].length==0?"no-media":"")+" svelte-1krgekn"),ce(l,"border-left-color",o[1].sessionTypeColor)},m(T,C){q&&q.m(T,C),W(T,e,C),W(T,l,C),d(l,t),d(t,a),d(a,c),d(t,u),d(t,s),d(s,r),d(t,f),d(t,n),d(n,v),d(v,$),d(v,w),d(n,B),d(n,O),d(O,te),d(O,j),d(O,K),d(l,le),S&&S.m(l,null),d(l,se),L&&L.m(l,null),y=!0},p(T,C){T[6].length>0?q?(q.p(T,C),C&64&&k(q,1)):(q=at(T),q.c(),k(q,1),q.m(e.parentNode,e)):q&&(Q(),D(q,1,1,()=>{q=null}),Y()),(!y||C&2)&&i!==(i=T[1].sessionType+"")&&ee(c,i),(!y||C&2)&&ce(a,"color",T[1].sessionTypeColor!=="#000000"?T[1].sessionTypeColor:"#dfdfdf"),(!y||C&2)&&V!==(V=T[1].title+"")&&ee(r,V),(!y||C&2)&&U!==(U=Re(T[1].start.split("T")[0])+"")&&ee(w,U),(!y||C&2)&&Z!==(Z=je(T[1].start.split("T")[1].split("+")[0])+"")&&ee(te,Z),(!y||C&2)&&N!==(N=T[1].start.split("T")[1].split("+")[0]+" - "+T[1].end.split("T")[1].split("+")[0])&&ee(K,N),T[2]?S?S.p(T,C):(S=pt(T),S.c(),S.m(l,se)):S&&(S.d(1),S=null),T[3]||T[4]?L?(L.p(T,C),C&24&&k(L,1)):(L=mt(T),L.c(),k(L,1),L.m(l,null)):L&&(Q(),D(L,1,1,()=>{L=null}),Y()),(!y||C&64&&b!==(b="detail screen-small "+(T[6].length==0?"no-media":"")+" svelte-1krgekn"))&&h(l,"class",b),(!y||C&2)&&ce(l,"border-left-color",T[1].sessionTypeColor)},i(T){y||(k(q),k(L),y=!0)},o(T){D(q),D(L),y=!1},d(T){T&&(_(e),_(l)),q&&q.d(T),S&&S.d(),L&&L.d()}}}function at(o){let e,l,t,a,i,c=(o[5].title??"😶‍🌫️")+"",u,s,V,r,f,n,v,$,U,w,B,O,Z=o[1].sessionType+"",te,j,N,K=o[1].title+"",le,se,b,y,q,S=Re(o[1].start.split("T")[0])+"",L,T,C,x=je(o[1].start.split("T")[1].split("+")[0])+"",de,Te,re=o[1].start.split("T")[1].split("+")[0]+" - "+o[1].end.split("T")[1].split("+")[0],ne,ae,Ie,Se,oe,ve,fe,Le,De=o[6].length+"",Ve,qe,Ae,he,X,Be,Pe,P=o[5].speakers&&ot(o),G=o[2]&&ft(o),F=(o[3]||o[4])&&ct(o),_e=ie(o[6]),A=[];for(let g=0;g<_e.length;g+=1)A[g]=_t(lt(o,_e,g));const Ct=g=>D(A[g],1,1,()=>{A[g]=null});return{c(){e=p("div"),l=p("div"),t=p("div"),a=p("div"),i=p("strong"),u=J(c),s=M(),P&&P.c(),V=M(),r=p("div"),f=p("video"),n=p("track"),U=M(),w=p("div"),B=p("div"),O=p("div"),te=J(Z),j=M(),N=p("h1"),le=J(K),se=M(),b=p("div"),y=p("div"),q=J("🗓️ "),L=J(S),T=M(),C=p("div"),de=J(x),Te=M(),ne=J(re),ae=M(),G&&G.c(),Ie=M(),F&&F.c(),Se=M(),oe=p("div"),ve=p("div"),fe=p("strong"),Le=J("Liste de lecture ("),Ve=J(De),qe=J("):"),Ae=M(),he=p("div");for(let g=0;g<A.length;g+=1)A[g].c();this.h()},l(g){e=m(g,"DIV",{class:!0});var I=E(e);l=m(I,"DIV",{class:!0});var R=E(l);t=m(R,"DIV",{id:!0,class:!0});var pe=E(t);a=m(pe,"DIV",{class:!0});var Fe=E(a);i=m(Fe,"STRONG",{class:!0});var Ge=E(i);u=z(Ge,c),Ge.forEach(_),Fe.forEach(_),s=H(pe),P&&P.l(pe),pe.forEach(_),V=H(R),r=m(R,"DIV",{id:!0,class:!0});var Je=E(r);f=m(Je,"VIDEO",{class:!0,src:!0,poster:!0});var ze=E(f);n=m(ze,"TRACK",{kind:!0,class:!0}),ze.forEach(_),Je.forEach(_),U=H(R),w=m(R,"DIV",{class:!0,style:!0});var Ee=E(w);B=m(Ee,"DIV",{class:!0});var $e=E(B);O=m($e,"DIV",{class:!0,style:!0});var Ke=E(O);te=z(Ke,Z),Ke.forEach(_),j=H($e),N=m($e,"H1",{class:!0});var Xe=E(N);le=z(Xe,K),Xe.forEach(_),se=H($e),b=m($e,"DIV",{class:!0});var Me=E(b);y=m(Me,"DIV",{class:!0});var Ne=E(y);q=z(Ne,"🗓️ "),L=z(Ne,S),Ne.forEach(_),T=H(Me),C=m(Me,"DIV",{class:!0});var He=E(C);de=z(He,x),Te=H(He),ne=z(He,re),He.forEach(_),Me.forEach(_),$e.forEach(_),ae=H(Ee),G&&G.l(Ee),Ie=H(Ee),F&&F.l(Ee),Ee.forEach(_),R.forEach(_),Se=H(I),oe=m(I,"DIV",{class:!0});var Ue=E(oe);ve=m(Ue,"DIV",{id:!0,class:!0});var Ye=E(ve);fe=m(Ye,"STRONG",{class:!0});var we=E(fe);Le=z(we,"Liste de lecture ("),Ve=z(we,De),qe=z(we,"):"),we.forEach(_),Ye.forEach(_),Ae=H(Ue),he=m(Ue,"DIV",{class:!0});var Qe=E(he);for(let Oe=0;Oe<A.length;Oe+=1)A[Oe].l(Qe);Qe.forEach(_),Ue.forEach(_),I.forEach(_),this.h()},h(){h(i,"class","svelte-1krgekn"),h(a,"class","svelte-1krgekn"),h(t,"id","current-media-info"),h(t,"class","svelte-1krgekn"),h(n,"kind","captions"),h(n,"class","svelte-1krgekn"),f.controls=!0,h(f,"class","video-player svelte-1krgekn"),Ze(f.src,v=o[7](o[5]))||h(f,"src",v),h(f,"poster",$=o[5].thumbnail),h(r,"id","video-container"),h(r,"class","svelte-1krgekn"),h(O,"class","session-type svelte-1krgekn"),ce(O,"color",o[1].sessionTypeColor!=="#000000"?o[1].sessionTypeColor:"#dfdfdf"),h(N,"class","svelte-1krgekn"),h(y,"class","svelte-1krgekn"),h(C,"class","svelte-1krgekn"),h(b,"class","date-time subtitle svelte-1krgekn"),h(B,"class","session-header svelte-1krgekn"),h(w,"class","detail screen-big svelte-1krgekn"),ce(w,"border-left-color",o[1].sessionTypeColor),h(l,"class","current-media svelte-1krgekn"),h(fe,"class","svelte-1krgekn"),h(ve,"id","playlist-title"),h(ve,"class","svelte-1krgekn"),h(he,"class","playlist svelte-1krgekn"),h(oe,"class","playlist-container svelte-1krgekn"),h(e,"class","media svelte-1krgekn")},m(g,I){W(g,e,I),d(e,l),d(l,t),d(t,a),d(a,i),d(i,u),d(t,s),P&&P.m(t,null),d(l,V),d(l,r),d(r,f),d(f,n),d(l,U),d(l,w),d(w,B),d(B,O),d(O,te),d(B,j),d(B,N),d(N,le),d(B,se),d(B,b),d(b,y),d(y,q),d(y,L),d(b,T),d(b,C),d(C,de),d(C,Te),d(C,ne),d(w,ae),G&&G.m(w,null),d(w,Ie),F&&F.m(w,null),d(e,Se),d(e,oe),d(oe,ve),d(ve,fe),d(fe,Le),d(fe,Ve),d(fe,qe),d(oe,Ae),d(oe,he);for(let R=0;R<A.length;R+=1)A[R]&&A[R].m(he,null);X=!0,Be||(Pe=Ht(f,"play",o[9]),Be=!0)},p(g,I){if((!X||I&32)&&c!==(c=(g[5].title??"😶‍🌫️")+"")&&ee(u,c),g[5].speakers?P?(P.p(g,I),I&32&&k(P,1)):(P=ot(g),P.c(),k(P,1),P.m(t,null)):P&&(Q(),D(P,1,1,()=>{P=null}),Y()),(!X||I&32&&!Ze(f.src,v=g[7](g[5])))&&h(f,"src",v),(!X||I&32&&$!==($=g[5].thumbnail))&&h(f,"poster",$),(!X||I&2)&&Z!==(Z=g[1].sessionType+"")&&ee(te,Z),(!X||I&2)&&ce(O,"color",g[1].sessionTypeColor!=="#000000"?g[1].sessionTypeColor:"#dfdfdf"),(!X||I&2)&&K!==(K=g[1].title+"")&&ee(le,K),(!X||I&2)&&S!==(S=Re(g[1].start.split("T")[0])+"")&&ee(L,S),(!X||I&2)&&x!==(x=je(g[1].start.split("T")[1].split("+")[0])+"")&&ee(de,x),(!X||I&2)&&re!==(re=g[1].start.split("T")[1].split("+")[0]+" - "+g[1].end.split("T")[1].split("+")[0])&&ee(ne,re),g[2]?G?G.p(g,I):(G=ft(g),G.c(),G.m(w,Ie)):G&&(G.d(1),G=null),g[3]||g[4]?F?(F.p(g,I),I&24&&k(F,1)):(F=ct(g),F.c(),k(F,1),F.m(w,null)):F&&(Q(),D(F,1,1,()=>{F=null}),Y()),(!X||I&2)&&ce(w,"border-left-color",g[1].sessionTypeColor),(!X||I&64)&&De!==(De=g[6].length+"")&&ee(Ve,De),I&96){_e=ie(g[6]);let R;for(R=0;R<_e.length;R+=1){const pe=lt(g,_e,R);A[R]?(A[R].p(pe,I),k(A[R],1)):(A[R]=_t(pe),A[R].c(),k(A[R],1),A[R].m(he,null))}for(Q(),R=_e.length;R<A.length;R+=1)Ct(R);Y()}},i(g){if(!X){k(P),k(F);for(let I=0;I<_e.length;I+=1)k(A[I]);X=!0}},o(g){D(P),D(F),A=A.filter(Boolean);for(let I=0;I<A.length;I+=1)D(A[I]);X=!1},d(g){g&&_(e),P&&P.d(),G&&G.d(),F&&F.d(),Ce(A,g),Be=!1,Pe()}}}function ot(o){let e,l;return e=new qt({props:{speakers:o[5].speakers}}),{c(){me(e.$$.fragment)},l(t){ke(e.$$.fragment,t)},m(t,a){ge(e,t,a),l=!0},p(t,a){const i={};a&32&&(i.speakers=t[5].speakers),e.$set(i)},i(t){l||(k(e.$$.fragment,t),l=!0)},o(t){D(e.$$.fragment,t),l=!1},d(t){be(e,t)}}}function ft(o){let e,l,t="Objectifs :",a,i,c;return{c(){e=p("div"),l=p("strong"),l.textContent=t,a=M(),i=p("div"),c=new Et(!1),this.h()},l(u){e=m(u,"DIV",{class:!0});var s=E(e);l=m(s,"STRONG",{class:!0,"data-svelte-h":!0}),ue(l)!=="svelte-1jn7qe7"&&(l.textContent=t),a=H(s),i=m(s,"DIV",{class:!0});var V=E(i);c=$t(V,!1),V.forEach(_),s.forEach(_),this.h()},h(){h(l,"class","svelte-1krgekn"),c.a=null,h(i,"class","svelte-1krgekn"),h(e,"class","objectives svelte-1krgekn")},m(u,s){W(u,e,s),d(e,l),d(e,a),d(e,i),c.m(o[2],i)},p(u,s){s&4&&c.p(u[2])},d(u){u&&_(e)}}}function ct(o){let e,l,t,a=o[3]&&ut(o),i=o[4]&&vt(o);return{c(){e=p("table"),a&&a.c(),l=M(),i&&i.c(),this.h()},l(c){e=m(c,"TABLE",{class:!0});var u=E(e);a&&a.l(u),l=H(u),i&&i.l(u),u.forEach(_),this.h()},h(){h(e,"class","person-list svelte-1krgekn")},m(c,u){W(c,e,u),a&&a.m(e,null),d(e,l),i&&i.m(e,null),t=!0},p(c,u){c[3]?a?(a.p(c,u),u&8&&k(a,1)):(a=ut(c),a.c(),k(a,1),a.m(e,l)):a&&(Q(),D(a,1,1,()=>{a=null}),Y()),c[4]?i?(i.p(c,u),u&16&&k(i,1)):(i=vt(c),i.c(),k(i,1),i.m(e,null)):i&&(Q(),D(i,1,1,()=>{i=null}),Y())},i(c){t||(k(a),k(i),t=!0)},o(c){D(a),D(i),t=!1},d(c){c&&_(e),a&&a.d(),i&&i.d()}}}function ut(o){let e,l,t="Modérateur :",a,i,c,u=ie(o[3]),s=[];for(let r=0;r<u.length;r+=1)s[r]=dt(rt(o,u,r));const V=r=>D(s[r],1,1,()=>{s[r]=null});return{c(){e=p("tr"),l=p("td"),l.textContent=t,a=M(),i=p("td");for(let r=0;r<s.length;r+=1)s[r].c();this.h()},l(r){e=m(r,"TR",{class:!0});var f=E(e);l=m(f,"TD",{class:!0,"data-svelte-h":!0}),ue(l)!=="svelte-1noy2yo"&&(l.textContent=t),a=H(f),i=m(f,"TD",{class:!0});var n=E(i);for(let v=0;v<s.length;v+=1)s[v].l(n);n.forEach(_),f.forEach(_),this.h()},h(){h(l,"class","role-label svelte-1krgekn"),h(i,"class","svelte-1krgekn"),h(e,"class","svelte-1krgekn")},m(r,f){W(r,e,f),d(e,l),d(e,a),d(e,i);for(let n=0;n<s.length;n+=1)s[n]&&s[n].m(i,null);c=!0},p(r,f){if(f&8){u=ie(r[3]);let n;for(n=0;n<u.length;n+=1){const v=rt(r,u,n);s[n]?(s[n].p(v,f),k(s[n],1)):(s[n]=dt(v),s[n].c(),k(s[n],1),s[n].m(i,null))}for(Q(),n=u.length;n<s.length;n+=1)V(n);Y()}},i(r){if(!c){for(let f=0;f<u.length;f+=1)k(s[f]);c=!0}},o(r){s=s.filter(Boolean);for(let f=0;f<s.length;f+=1)D(s[f]);c=!1},d(r){r&&_(e),Ce(s,r)}}}function dt(o){let e,l;return e=new ye({props:{info:o[18]}}),{c(){me(e.$$.fragment)},l(t){ke(e.$$.fragment,t)},m(t,a){ge(e,t,a),l=!0},p(t,a){const i={};a&8&&(i.info=t[18]),e.$set(i)},i(t){l||(k(e.$$.fragment,t),l=!0)},o(t){D(e.$$.fragment,t),l=!1},d(t){be(e,t)}}}function vt(o){let e,l,t="Responsable :",a,i,c,u=ie(o[4]),s=[];for(let r=0;r<u.length;r+=1)s[r]=ht(st(o,u,r));const V=r=>D(s[r],1,1,()=>{s[r]=null});return{c(){e=p("tr"),l=p("td"),l.textContent=t,a=M(),i=p("td");for(let r=0;r<s.length;r+=1)s[r].c();this.h()},l(r){e=m(r,"TR",{class:!0});var f=E(e);l=m(f,"TD",{class:!0,"data-svelte-h":!0}),ue(l)!=="svelte-1xum5yq"&&(l.textContent=t),a=H(f),i=m(f,"TD",{class:!0});var n=E(i);for(let v=0;v<s.length;v+=1)s[v].l(n);n.forEach(_),f.forEach(_),this.h()},h(){h(l,"class","role-label svelte-1krgekn"),h(i,"class","svelte-1krgekn"),h(e,"class","svelte-1krgekn")},m(r,f){W(r,e,f),d(e,l),d(e,a),d(e,i);for(let n=0;n<s.length;n+=1)s[n]&&s[n].m(i,null);c=!0},p(r,f){if(f&16){u=ie(r[4]);let n;for(n=0;n<u.length;n+=1){const v=st(r,u,n);s[n]?(s[n].p(v,f),k(s[n],1)):(s[n]=ht(v),s[n].c(),k(s[n],1),s[n].m(i,null))}for(Q(),n=u.length;n<s.length;n+=1)V(n);Y()}},i(r){if(!c){for(let f=0;f<u.length;f+=1)k(s[f]);c=!0}},o(r){s=s.filter(Boolean);for(let f=0;f<s.length;f+=1)D(s[f]);c=!1},d(r){r&&_(e),Ce(s,r)}}}function ht(o){let e,l;return e=new ye({props:{info:o[18]}}),{c(){me(e.$$.fragment)},l(t){ke(e.$$.fragment,t)},m(t,a){ge(e,t,a),l=!0},p(t,a){const i={};a&16&&(i.info=t[18]),e.$set(i)},i(t){l||(k(e.$$.fragment,t),l=!0)},o(t){D(e.$$.fragment,t),l=!1},d(t){be(e,t)}}}function _t(o){let e,l,t;function a(c){o[10](c)}let i={media:o[23],downloadable:!0};return o[5]!==void 0&&(i.currentMedia=o[5]),e=new At({props:i}),Ut.push(()=>St(e,"currentMedia",a)),{c(){me(e.$$.fragment)},l(c){ke(e.$$.fragment,c)},m(c,u){ge(e,c,u),t=!0},p(c,u){const s={};u&64&&(s.media=c[23]),!l&&u&32&&(l=!0,s.currentMedia=c[5],wt(()=>l=!1)),e.$set(s)},i(c){t||(k(e.$$.fragment,c),t=!0)},o(c){D(e.$$.fragment,c),t=!1},d(c){be(e,c)}}}function pt(o){let e,l,t="Objectifs :",a,i,c;return{c(){e=p("div"),l=p("strong"),l.textContent=t,a=M(),i=p("div"),c=new Et(!1),this.h()},l(u){e=m(u,"DIV",{class:!0});var s=E(e);l=m(s,"STRONG",{class:!0,"data-svelte-h":!0}),ue(l)!=="svelte-1jn7qe7"&&(l.textContent=t),a=H(s),i=m(s,"DIV",{class:!0});var V=E(i);c=$t(V,!1),V.forEach(_),s.forEach(_),this.h()},h(){h(l,"class","svelte-1krgekn"),c.a=null,h(i,"class","svelte-1krgekn"),h(e,"class","objectives svelte-1krgekn")},m(u,s){W(u,e,s),d(e,l),d(e,a),d(e,i),c.m(o[2],i)},p(u,s){s&4&&c.p(u[2])},d(u){u&&_(e)}}}function mt(o){let e,l,t,a=o[3]&&kt(o),i=o[4]&&bt(o);return{c(){e=p("table"),a&&a.c(),l=M(),i&&i.c(),this.h()},l(c){e=m(c,"TABLE",{class:!0});var u=E(e);a&&a.l(u),l=H(u),i&&i.l(u),u.forEach(_),this.h()},h(){h(e,"class","person-list svelte-1krgekn")},m(c,u){W(c,e,u),a&&a.m(e,null),d(e,l),i&&i.m(e,null),t=!0},p(c,u){c[3]?a?(a.p(c,u),u&8&&k(a,1)):(a=kt(c),a.c(),k(a,1),a.m(e,l)):a&&(Q(),D(a,1,1,()=>{a=null}),Y()),c[4]?i?(i.p(c,u),u&16&&k(i,1)):(i=bt(c),i.c(),k(i,1),i.m(e,null)):i&&(Q(),D(i,1,1,()=>{i=null}),Y())},i(c){t||(k(a),k(i),t=!0)},o(c){D(a),D(i),t=!1},d(c){c&&_(e),a&&a.d(),i&&i.d()}}}function kt(o){let e,l,t="Modérateur :",a,i,c,u=ie(o[3]),s=[];for(let r=0;r<u.length;r+=1)s[r]=gt(tt(o,u,r));const V=r=>D(s[r],1,1,()=>{s[r]=null});return{c(){e=p("tr"),l=p("td"),l.textContent=t,a=M(),i=p("td");for(let r=0;r<s.length;r+=1)s[r].c();this.h()},l(r){e=m(r,"TR",{class:!0});var f=E(e);l=m(f,"TD",{class:!0,"data-svelte-h":!0}),ue(l)!=="svelte-1noy2yo"&&(l.textContent=t),a=H(f),i=m(f,"TD",{class:!0});var n=E(i);for(let v=0;v<s.length;v+=1)s[v].l(n);n.forEach(_),f.forEach(_),this.h()},h(){h(l,"class","role-label svelte-1krgekn"),h(i,"class","svelte-1krgekn"),h(e,"class","svelte-1krgekn")},m(r,f){W(r,e,f),d(e,l),d(e,a),d(e,i);for(let n=0;n<s.length;n+=1)s[n]&&s[n].m(i,null);c=!0},p(r,f){if(f&8){u=ie(r[3]);let n;for(n=0;n<u.length;n+=1){const v=tt(r,u,n);s[n]?(s[n].p(v,f),k(s[n],1)):(s[n]=gt(v),s[n].c(),k(s[n],1),s[n].m(i,null))}for(Q(),n=u.length;n<s.length;n+=1)V(n);Y()}},i(r){if(!c){for(let f=0;f<u.length;f+=1)k(s[f]);c=!0}},o(r){s=s.filter(Boolean);for(let f=0;f<s.length;f+=1)D(s[f]);c=!1},d(r){r&&_(e),Ce(s,r)}}}function gt(o){let e,l;return e=new ye({props:{info:o[18]}}),{c(){me(e.$$.fragment)},l(t){ke(e.$$.fragment,t)},m(t,a){ge(e,t,a),l=!0},p(t,a){const i={};a&8&&(i.info=t[18]),e.$set(i)},i(t){l||(k(e.$$.fragment,t),l=!0)},o(t){D(e.$$.fragment,t),l=!1},d(t){be(e,t)}}}function bt(o){let e,l,t="Responsable :",a,i,c,u=ie(o[4]),s=[];for(let r=0;r<u.length;r+=1)s[r]=Tt(et(o,u,r));const V=r=>D(s[r],1,1,()=>{s[r]=null});return{c(){e=p("tr"),l=p("td"),l.textContent=t,a=M(),i=p("td");for(let r=0;r<s.length;r+=1)s[r].c();this.h()},l(r){e=m(r,"TR",{class:!0});var f=E(e);l=m(f,"TD",{class:!0,"data-svelte-h":!0}),ue(l)!=="svelte-1xum5yq"&&(l.textContent=t),a=H(f),i=m(f,"TD",{class:!0});var n=E(i);for(let v=0;v<s.length;v+=1)s[v].l(n);n.forEach(_),f.forEach(_),this.h()},h(){h(l,"class","role-label svelte-1krgekn"),h(i,"class","svelte-1krgekn"),h(e,"class","svelte-1krgekn")},m(r,f){W(r,e,f),d(e,l),d(e,a),d(e,i);for(let n=0;n<s.length;n+=1)s[n]&&s[n].m(i,null);c=!0},p(r,f){if(f&16){u=ie(r[4]);let n;for(n=0;n<u.length;n+=1){const v=et(r,u,n);s[n]?(s[n].p(v,f),k(s[n],1)):(s[n]=Tt(v),s[n].c(),k(s[n],1),s[n].m(i,null))}for(Q(),n=u.length;n<s.length;n+=1)V(n);Y()}},i(r){if(!c){for(let f=0;f<u.length;f+=1)k(s[f]);c=!0}},o(r){s=s.filter(Boolean);for(let f=0;f<s.length;f+=1)D(s[f]);c=!1},d(r){r&&_(e),Ce(s,r)}}}function Tt(o){let e,l;return e=new ye({props:{info:o[18]}}),{c(){me(e.$$.fragment)},l(t){ke(e.$$.fragment,t)},m(t,a){ge(e,t,a),l=!0},p(t,a){const i={};a&16&&(i.info=t[18]),e.$set(i)},i(t){l||(k(e.$$.fragment,t),l=!0)},o(t){D(e.$$.fragment,t),l=!1},d(t){be(e,t)}}}function Nt(o){let e,l,t,a,i,c='<i class="gg-chevron-left svelte-1krgekn"></i> Retour',u,s,V,r,f;document.title=e=o[1]?o[1].title:"JFR 2024",s=new Lt({});let n=o[0]&&it(),v=!o[0]&&o[1]&&nt(o);return{c(){l=M(),t=p("main"),a=p("div"),i=p("a"),i.innerHTML=c,u=M(),me(s.$$.fragment),V=M(),n&&n.c(),r=M(),v&&v.c(),this.h()},l($){Vt("svelte-135ofcf",document.head).forEach(_),l=H($),t=m($,"MAIN",{class:!0});var w=E(t);a=m(w,"DIV",{id:!0,class:!0});var B=E(a);i=m(B,"A",{href:!0,class:!0,"data-svelte-h":!0}),ue(i)!=="svelte-o11hhh"&&(i.innerHTML=c),u=H(B),ke(s.$$.fragment,B),B.forEach(_),V=H(w),n&&n.l(w),r=H(w),v&&v.l(w),w.forEach(_),this.h()},h(){h(i,"href",Dt+"/"),h(i,"class","one-liner svelte-1krgekn"),h(a,"id","navbar"),h(a,"class","svelte-1krgekn"),h(t,"class","svelte-1krgekn")},m($,U){W($,l,U),W($,t,U),d(t,a),d(a,i),d(a,u),ge(s,a,null),d(t,V),n&&n.m(t,null),d(t,r),v&&v.m(t,null),f=!0},p($,[U]){(!f||U&2)&&e!==(e=$[1]?$[1].title:"JFR 2024")&&(document.title=e),$[0]?n||(n=it(),n.c(),n.m(t,r)):n&&(n.d(1),n=null),!$[0]&&$[1]?v?(v.p($,U),U&3&&k(v,1)):(v=nt($),v.c(),k(v,1),v.m(t,null)):v&&(Q(),D(v,1,1,()=>{v=null}),Y())},i($){f||(k(s.$$.fragment,$),k(v),f=!0)},o($){D(s.$$.fragment,$),D(v),f=!1},d($){$&&(_(l),_(t)),be(s),n&&n.d(),v&&v.d()}}}const Ot=25;function Pt(o,e,l){let t,a;We(o,xe,j=>l(14,t=j)),We(o,Bt,j=>l(15,a=j));const i=a.url.searchParams;let c,u;i&&(c=i.get("id"),u=i.get("selectedMediaUrl"));let s=!0,V,r,f,n,v,$,U=[];const w=j=>{var N=new XMLHttpRequest;return N.open("HEAD",j,!1),N.send(),N.status!=404},B=j=>screen.width<=1024&&j.url?j.url:j.hdUrl;Mt(async()=>{var N,K,le,se;V=await(await fetch(`${Dt}/json/${c}.json`)).json(),l(1,r=V.data.event),l(2,f=r.objectives.map(b=>`<div class="objectives-value">${b}</div>`).join("")),l(3,n=(N=r.roles.find(b=>b.name==="modérateur"))==null?void 0:N.assignees.items),l(4,v=(K=r.roles.find(b=>b.name==="responsable"))==null?void 0:K.assignees.items);for(const b of r.schedule.items)b.vod&&b.vod.media&&b.vod.media.element&&b.vod.media.element.sources&&U.push({id:b.vod.media.id,title:b.vod.media.id?b.title:`${b.title} Ⓜ️`,hdUrl:b.vod.media.element.sources[0].uri,url:(le=b.vod.media.element.sources[1])==null?void 0:le.uri,thumbnail:b.vod.media.thumbnail,start:b.start.split("T")[1].split("+")[0],speakers:b.speakers.items});if(r.vod&&r.vod.media&&r.vod.media.element&&r.vod.media.element.sources&&U.push({id:r.vod.media.id,title:r.vod.media.title??"[Sans titre]",hdUrl:r.vod.media.element.sources[0].uri,url:(se=r.vod.media.element.sources[1])==null?void 0:se.uri,thumbnail:r.vod.media.thumbnail,start:r.start.split("T")[1].split("+")[0],speakers:r.speakers.items}),r.picture){const b={id:null,title:"[Non répertoriée]",thumbnail:r.picture,start:r.start.split("T")[1].split("+")[0],speakers:null},y=r.picture.split("/video/")[0]+"/video/y_1080p_4000kb.mp4";!U.some(T=>T.hdUrl===y)&&w(y)&&(b.hdUrl=y);const S=r.picture.split("/video/")[0]+"/video/y_480p_800kb.mp4";!U.some(T=>T.url===S)&&w(S)&&(b.url=S),(b.hdUrl||b.url)&&U.push(b)}l(6,U=U.toSorted((b,y)=>b.start.localeCompare(y.start))),U.length>0&&(u&&l(5,$=U.find(b=>b.hdUrl===u)),$||l(5,$=U[0])),l(0,s=!1)});const O=j=>{const N=t.filter(K=>K.hdUrl!==j.hdUrl);j.sessionId=c,j.sessionTitle=r.title,j.sessionTypeColor=r.sessionTypeColor!=="#000000"?r.sessionTypeColor:"#dfdfdf",Rt(xe,t=[j,...N].slice(0,Ot),t)},Z=()=>O($);function te(j){$=j,l(5,$)}return[s,r,f,n,v,$,U,B,O,Z,te]}class Xt extends jt{constructor(e){super(),yt(this,e,Pt,Nt,It,{})}}export{Xt as component};
