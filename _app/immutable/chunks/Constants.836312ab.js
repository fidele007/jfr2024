import"./index.1111d42d.js";const a=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global;function p(e){return(e==null?void 0:e.length)!==void 0?e:Array.from(e)}const r=e=>e.normalize("NFD").replace(/\p{Diacritic}/gu,""),x=e=>new Date(e).toLocaleDateString("fr-FR",{weekday:"short",day:"2-digit",month:"short"}),h=(e,n="")=>{if(typeof e!="string")throw new Error("Input must be string");const t=/[\/\?<>\\:\*\|"]/g,s=/[\x00-\x1f\x80-\x9f]/g,o=/^\.+$/,c=/^(con|prn|aux|nul|com[0-9]|lpt[0-9])(\..*)?$/i,i=/[\. ]+$/,d=e.replace(t,n).replace(s,n).replace(o,n).replace(c,n).replace(i,n);let l=new TextEncoder,g=new TextDecoder("utf-8"),u=l.encode(d).slice(0,255);return g.decode(u)};export{x as a,p as e,a as g,r as n,h as s};
