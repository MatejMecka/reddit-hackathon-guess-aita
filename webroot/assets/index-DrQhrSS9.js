(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const l of a.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function r(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(i){if(i.ep)return;i.ep=!0;const a=r(i);fetch(i.href,a)}})();const or=!1;var Ge=Array.isArray,ze=Array.from,sr=Object.defineProperty,ee=Object.getOwnPropertyDescriptor,St=Object.getOwnPropertyDescriptors,ur=Object.prototype,fr=Array.prototype,me=Object.getPrototypeOf;function cr(e){return typeof e=="function"}const le=()=>{};function vr(e){return e()}function De(e){for(var t=0;t<e.length;t++)e[t]()}const L=2,Ot=4,Ne=8,Se=16,R=32,fe=64,K=128,we=256,C=512,j=1024,ce=2048,$=4096,ve=8192,kt=16384,Oe=32768,_r=65536,dr=1<<18,It=1<<19,te=Symbol("$state"),pr=Symbol("legacy props");function Ct(e){return e===this.v}function hr(e,t){return e!=e?t==t:e!==t||e!==null&&typeof e=="object"||typeof e=="function"}function Rt(e){return!hr(e,this.v)}function yr(e){throw new Error("effect_in_teardown")}function gr(){throw new Error("effect_in_unowned_derived")}function mr(e){throw new Error("effect_orphan")}function wr(){throw new Error("effect_update_depth_exceeded")}function br(e){throw new Error("props_invalid_value")}function Er(){throw new Error("state_descriptors_fixed")}function xr(){throw new Error("state_prototype_fixed")}function Tr(){throw new Error("state_unsafe_local_read")}function Ar(){throw new Error("state_unsafe_mutation")}let ne=!1;function Nr(){ne=!0}function I(e){return{f:0,v:e,reactions:null,equals:Ct,version:0}}function dt(e){return Or(I(e))}function Sr(e,t=!1){var n;const r=I(e);return t||(r.equals=Rt),ne&&x!==null&&x.l!==null&&((n=x.l).s??(n.s=[])).push(r),r}function Or(e){return E!==null&&E.f&L&&(D===null?Gr([e]):D.push(e)),e}function P(e,t){return E!==null&&nt()&&E.f&(L|Se)&&(D===null||!D.includes(e))&&Ar(),Fe(e,t)}function Fe(e,t){return e.equals(t)||(e.v=t,e.version=Jt(),Pt(e,j),nt()&&g!==null&&g.f&C&&!(g.f&R)&&(N!==null&&N.includes(e)?(q(g,j),Re(g)):U===null?zr([e]):U.push(e))),t}function Pt(e,t){var r=e.reactions;if(r!==null)for(var n=nt(),i=r.length,a=0;a<i;a++){var l=r[a],v=l.f;v&j||!n&&l===g||(q(l,t),v&(C|K)&&(v&L?Pt(l,ce):Re(l)))}}const Xe=1,Ze=2,$t=4,kr=8,Ir=16,Cr=1,Rr=2,Pr=8,$r=1,Dr=2,Fr=4,Mr=1,Lr=2,O=Symbol();let Dt=!1;function Y(e,t=null,r){if(typeof e!="object"||e===null||te in e)return e;const n=me(e);if(n!==ur&&n!==fr)return e;var i=new Map,a=Ge(e),l=I(0);a&&i.set("length",I(e.length));var v;return new Proxy(e,{defineProperty(c,u,s){(!("value"in s)||s.configurable===!1||s.enumerable===!1||s.writable===!1)&&Er();var f=i.get(u);return f===void 0?(f=I(s.value),i.set(u,f)):P(f,Y(s.value,v)),!0},deleteProperty(c,u){var s=i.get(u);if(s===void 0)u in c&&i.set(u,I(O));else{if(a&&typeof u=="string"){var f=i.get("length"),o=Number(u);Number.isInteger(o)&&o<f.v&&P(f,o)}P(s,O),pt(l)}return!0},get(c,u,s){var _;if(u===te)return e;var f=i.get(u),o=u in c;if(f===void 0&&(!o||(_=ee(c,u))!=null&&_.writable)&&(f=I(Y(o?c[u]:O,v)),i.set(u,f)),f!==void 0){var d=A(f);return d===O?void 0:d}return Reflect.get(c,u,s)},getOwnPropertyDescriptor(c,u){var s=Reflect.getOwnPropertyDescriptor(c,u);if(s&&"value"in s){var f=i.get(u);f&&(s.value=A(f))}else if(s===void 0){var o=i.get(u),d=o==null?void 0:o.v;if(o!==void 0&&d!==O)return{enumerable:!0,configurable:!0,value:d,writable:!0}}return s},has(c,u){var d;if(u===te)return!0;var s=i.get(u),f=s!==void 0&&s.v!==O||Reflect.has(c,u);if(s!==void 0||g!==null&&(!f||(d=ee(c,u))!=null&&d.writable)){s===void 0&&(s=I(f?Y(c[u],v):O),i.set(u,s));var o=A(s);if(o===O)return!1}return f},set(c,u,s,f){var T;var o=i.get(u),d=u in c;if(a&&u==="length")for(var _=s;_<o.v;_+=1){var p=i.get(_+"");p!==void 0?P(p,O):_ in c&&(p=I(O),i.set(_+"",p))}o===void 0?(!d||(T=ee(c,u))!=null&&T.writable)&&(o=I(void 0),P(o,Y(s,v)),i.set(u,o)):(d=o.v!==O,P(o,Y(s,v)));var y=Reflect.getOwnPropertyDescriptor(c,u);if(y!=null&&y.set&&y.set.call(f,s),!d){if(a&&typeof u=="string"){var h=i.get("length"),m=Number(u);Number.isInteger(m)&&m>=h.v&&P(h,m+1)}pt(l)}return!0},ownKeys(c){A(l);var u=Reflect.ownKeys(c).filter(o=>{var d=i.get(o);return d===void 0||d.v!==O});for(var[s,f]of i)f.v!==O&&!(s in c)&&u.push(s);return u},setPrototypeOf(){xr()}})}function pt(e,t=1){P(e,e.v+t)}var ht,Ft,Mt;function qr(){if(ht===void 0){ht=window;var e=Element.prototype,t=Node.prototype;Ft=ee(t,"firstChild").get,Mt=ee(t,"nextSibling").get,e.__click=void 0,e.__className="",e.__attributes=null,e.__styles=null,e.__e=void 0,Text.prototype.__t=void 0}}function Lt(e=""){return document.createTextNode(e)}function be(e){return Ft.call(e)}function ke(e){return Mt.call(e)}function M(e,t){return be(e)}function Me(e,t){{var r=be(e);return r instanceof Comment&&r.data===""?ke(r):r}}function W(e,t=1,r=!1){let n=e;for(;t--;)n=ke(n);return n}function Br(e){e.textContent=""}function Ie(e){var t=L|j;g===null?t|=K:g.f|=It;const r={children:null,ctx:x,deps:null,equals:Ct,f:t,fn:e,reactions:null,v:null,version:0,parent:g};if(E!==null&&E.f&L){var n=E;(n.children??(n.children=[])).push(r)}return r}function qt(e){const t=Ie(e);return t.equals=Rt,t}function Bt(e){var t=e.children;if(t!==null){e.children=null;for(var r=0;r<t.length;r+=1){var n=t[r];n.f&L?Je(n):G(n)}}}function Vt(e){var t,r=g;F(e.parent);try{Bt(e),t=Qt(e)}finally{F(r)}return t}function Ut(e){var t=Vt(e),r=(J||e.f&K)&&e.deps!==null?ce:C;q(e,r),e.equals(t)||(e.v=t,e.version=Jt())}function Je(e){Bt(e),ue(e,0),q(e,ve),e.v=e.children=e.deps=e.ctx=e.reactions=null}function jt(e){g===null&&E===null&&mr(),E!==null&&E.f&K&&gr(),rt&&yr()}function Vr(e,t){var r=t.last;r===null?t.last=t.first=e:(r.next=e,e.prev=r,t.last=e)}function _e(e,t,r,n=!0){var i=(e&fe)!==0,a=g,l={ctx:x,deps:null,deriveds:null,nodes_start:null,nodes_end:null,f:e|j,first:null,fn:t,last:null,next:null,parent:i?null:a,prev:null,teardown:null,transitions:null,version:0};if(r){var v=re;try{yt(!0),Ce(l),l.f|=kt}catch(s){throw G(l),s}finally{yt(v)}}else t!==null&&Re(l);var c=r&&l.deps===null&&l.first===null&&l.nodes_start===null&&l.teardown===null&&(l.f&It)===0;if(!c&&!i&&n&&(a!==null&&Vr(l,a),E!==null&&E.f&L)){var u=E;(u.children??(u.children=[])).push(l)}return l}function Le(e){jt();var t=g!==null&&(g.f&R)!==0&&x!==null&&!x.m;if(t){var r=x;(r.e??(r.e=[])).push({fn:e,effect:g,reaction:E})}else{var n=Qe(e);return n}}function Ur(e){return jt(),Hr(e)}function jr(e){const t=_e(fe,e,!0);return()=>{G(t)}}function Qe(e){return _e(Ot,e,!1)}function Hr(e){return _e(Ne,e,!0)}function Ee(e){return et(e)}function et(e,t=0){return _e(Ne|Se|t,e,!0)}function se(e,t=!0){return _e(Ne|R,e,!0,t)}function Ht(e){var t=e.teardown;if(t!==null){const r=rt,n=E;gt(!0),H(null);try{t.call(null)}finally{gt(r),H(n)}}}function Yt(e){var t=e.deriveds;if(t!==null){e.deriveds=null;for(var r=0;r<t.length;r+=1)Je(t[r])}}function Wt(e,t=!1){var r=e.first;for(e.first=e.last=null;r!==null;){var n=r.next;G(r,t),r=n}}function Yr(e){for(var t=e.first;t!==null;){var r=t.next;t.f&R||G(t),t=r}}function G(e,t=!0){var r=!1;if((t||e.f&dr)&&e.nodes_start!==null){for(var n=e.nodes_start,i=e.nodes_end;n!==null;){var a=n===i?null:ke(n);n.remove(),n=a}r=!0}Wt(e,t&&!r),Yt(e),ue(e,0),q(e,ve);var l=e.transitions;if(l!==null)for(const c of l)c.stop();Ht(e);var v=e.parent;v!==null&&v.first!==null&&Kt(e),e.next=e.prev=e.teardown=e.ctx=e.deps=e.parent=e.fn=e.nodes_start=e.nodes_end=null}function Kt(e){var t=e.parent,r=e.prev,n=e.next;r!==null&&(r.next=n),n!==null&&(n.prev=r),t!==null&&(t.first===e&&(t.first=n),t.last===e&&(t.last=r))}function qe(e,t){var r=[];tt(e,r,!0),Gt(r,()=>{G(e),t&&t()})}function Gt(e,t){var r=e.length;if(r>0){var n=()=>--r||t();for(var i of e)i.out(n)}else t()}function tt(e,t,r){if(!(e.f&$)){if(e.f^=$,e.transitions!==null)for(const l of e.transitions)(l.is_global||r)&&t.push(l);for(var n=e.first;n!==null;){var i=n.next,a=(n.f&Oe)!==0||(n.f&R)!==0;tt(n,t,a?r:!1),n=i}}}function xe(e){zt(e,!0)}function zt(e,t){if(e.f&$){de(e)&&Ce(e),e.f^=$;for(var r=e.first;r!==null;){var n=r.next,i=(r.f&Oe)!==0||(r.f&R)!==0;zt(r,i?t:!1),r=n}if(e.transitions!==null)for(const a of e.transitions)(a.is_global||t)&&a.in()}}let Be=!1,Ve=[];function Wr(){Be=!1;const e=Ve.slice();Ve=[],De(e)}function Xt(e){Be||(Be=!0,queueMicrotask(Wr)),Ve.push(e)}function Kr(e){throw new Error("lifecycle_outside_component")}let Te=!1,re=!1,rt=!1;function yt(e){re=e}function gt(e){rt=e}let Ue=[],oe=0;let E=null;function H(e){E=e}let g=null;function F(e){g=e}let D=null;function Gr(e){D=e}let N=null,k=0,U=null;function zr(e){U=e}let Zt=0,J=!1,x=null;function Jt(){return++Zt}function nt(){return!ne||x!==null&&x.l===null}function de(e){var l,v;var t=e.f;if(t&j)return!0;if(t&ce){var r=e.deps,n=(t&K)!==0;if(r!==null){var i;if(t&we){for(i=0;i<r.length;i++)((l=r[i]).reactions??(l.reactions=[])).push(e);e.f^=we}for(i=0;i<r.length;i++){var a=r[i];if(de(a)&&Ut(a),n&&g!==null&&!J&&!((v=a==null?void 0:a.reactions)!=null&&v.includes(e))&&(a.reactions??(a.reactions=[])).push(e),a.version>e.version)return!0}}n||q(e,C)}return!1}function Xr(e,t,r){throw e}function Qt(e){var o;var t=N,r=k,n=U,i=E,a=J,l=D,v=x,c=e.f;N=null,k=0,U=null,E=c&(R|fe)?null:e,J=!re&&(c&K)!==0,D=null,x=e.ctx;try{var u=(0,e.fn)(),s=e.deps;if(N!==null){var f;if(ue(e,k),s!==null&&k>0)for(s.length=k+N.length,f=0;f<N.length;f++)s[k+f]=N[f];else e.deps=s=N;if(!J)for(f=k;f<s.length;f++)((o=s[f]).reactions??(o.reactions=[])).push(e)}else s!==null&&k<s.length&&(ue(e,k),s.length=k);return u}finally{N=t,k=r,U=n,E=i,J=a,D=l,x=v}}function Zr(e,t){let r=t.reactions;if(r!==null){var n=r.indexOf(e);if(n!==-1){var i=r.length-1;i===0?r=t.reactions=null:(r[n]=r[i],r.pop())}}r===null&&t.f&L&&(N===null||!N.includes(t))&&(q(t,ce),t.f&(K|we)||(t.f^=we),ue(t,0))}function ue(e,t){var r=e.deps;if(r!==null)for(var n=t;n<r.length;n++)Zr(e,r[n])}function Ce(e){var t=e.f;if(!(t&ve)){q(e,C);var r=g;g=e;try{t&Se?Yr(e):Wt(e),Yt(e),Ht(e);var n=Qt(e);e.teardown=typeof n=="function"?n:null,e.version=Zt}catch(i){Xr(i)}finally{g=r}}}function Jr(){oe>1e3&&(oe=0,wr()),oe++}function Qr(e){var t=e.length;if(t!==0){Jr();var r=re;re=!0;try{for(var n=0;n<t;n++){var i=e[n];i.f&C||(i.f^=C);var a=[];er(i,a),en(a)}}finally{re=r}}}function en(e){var t=e.length;if(t!==0)for(var r=0;r<t;r++){var n=e[r];!(n.f&(ve|$))&&de(n)&&(Ce(n),n.deps===null&&n.first===null&&n.nodes_start===null&&(n.teardown===null?Kt(n):n.fn=null))}}function tn(){if(Te=!1,oe>1001)return;const e=Ue;Ue=[],Qr(e),Te||(oe=0)}function Re(e){Te||(Te=!0,queueMicrotask(tn));for(var t=e;t.parent!==null;){t=t.parent;var r=t.f;if(r&(fe|R)){if(!(r&C))return;t.f^=C}}Ue.push(t)}function er(e,t){var r=e.first,n=[];e:for(;r!==null;){var i=r.f,a=(i&R)!==0,l=a&&(i&C)!==0;if(!l&&!(i&$))if(i&Ne){a?r.f^=C:de(r)&&Ce(r);var v=r.first;if(v!==null){r=v;continue}}else i&Ot&&n.push(r);var c=r.next;if(c===null){let f=r.parent;for(;f!==null;){if(e===f)break e;var u=f.next;if(u!==null){r=u;continue e}f=f.parent}}r=c}for(var s=0;s<n.length;s++)v=n[s],t.push(v),er(v,t)}function A(e){var v;var t=e.f,r=(t&L)!==0;if(r&&t&ve){var n=Vt(e);return Je(e),n}if(E!==null){D!==null&&D.includes(e)&&Tr();var i=E.deps;N===null&&i!==null&&i[k]===e?k++:N===null?N=[e]:N.push(e),U!==null&&g!==null&&g.f&C&&!(g.f&R)&&U.includes(e)&&(q(g,j),Re(g))}else if(r&&e.deps===null){var a=e,l=a.parent;l!==null&&!((v=l.deriveds)!=null&&v.includes(a))&&(l.deriveds??(l.deriveds=[])).push(a)}return r&&(a=e,de(a)&&Ut(a)),e.v}function it(e){const t=E;try{return E=null,e()}finally{E=t}}const rn=~(j|ce|C);function q(e,t){e.f=e.f&rn|t}function at(e,t=!1,r){x={p:x,c:null,e:null,m:!1,s:e,x:null,l:null},ne&&!t&&(x.l={s:null,u:null,r1:[],r2:I(!1)})}function lt(e){const t=x;if(t!==null){const l=t.e;if(l!==null){var r=g,n=E;t.e=null;try{for(var i=0;i<l.length;i++){var a=l[i];F(a.effect),H(a.reaction),Qe(a.fn)}}finally{F(r),H(n)}}x=t.p,t.m=!0}return{}}function nn(e){if(!(typeof e!="object"||!e||e instanceof EventTarget)){if(te in e)je(e);else if(!Array.isArray(e))for(let t in e){const r=e[t];typeof r=="object"&&r&&te in r&&je(r)}}}function je(e,t=new Set){if(typeof e=="object"&&e!==null&&!(e instanceof EventTarget)&&!t.has(e)){t.add(e),e instanceof Date&&e.getTime();for(let n in e)try{je(e[n],t)}catch{}const r=me(e);if(r!==Object.prototype&&r!==Array.prototype&&r!==Map.prototype&&r!==Set.prototype&&r!==Date.prototype){const n=St(r);for(let i in n){const a=n[i].get;if(a)try{a.call(e)}catch{}}}}}const tr=new Set,He=new Set;function an(e){for(var t=0;t<e.length;t++)tr.add(e[t]);for(var r of He)r(e)}function pe(e){var m;var t=this,r=t.ownerDocument,n=e.type,i=((m=e.composedPath)==null?void 0:m.call(e))||[],a=i[0]||e.target,l=0,v=e.__root;if(v){var c=i.indexOf(v);if(c!==-1&&(t===document||t===window)){e.__root=t;return}var u=i.indexOf(t);if(u===-1)return;c<=u&&(l=c)}if(a=i[l]||e.target,a!==t){sr(e,"currentTarget",{configurable:!0,get(){return a||r}});var s=E,f=g;H(null),F(null);try{for(var o,d=[];a!==null;){var _=a.assignedSlot||a.parentNode||a.host||null;try{var p=a["__"+n];if(p!==void 0&&!a.disabled)if(Ge(p)){var[y,...h]=p;y.apply(a,[e,...h])}else p.call(a,e)}catch(T){o?d.push(T):o=T}if(e.cancelBubble||_===t||_===null)break;a=_}if(o){for(let T of d)queueMicrotask(()=>{throw T});throw o}}finally{e.__root=t,delete e.currentTarget,H(s),F(f)}}}function ln(e){var t=document.createElement("template");return t.innerHTML=e,t.content}function mt(e,t){var r=g;r.nodes_start===null&&(r.nodes_start=e,r.nodes_end=t)}function ie(e,t){var r=(t&Mr)!==0,n=(t&Lr)!==0,i,a=!e.startsWith("<!>");return()=>{i===void 0&&(i=ln(a?e:"<!>"+e),r||(i=be(i)));var l=n?document.importNode(i,!0):i.cloneNode(!0);if(r){var v=be(l),c=l.lastChild;mt(v,c)}else mt(l,l);return l}}function Q(e,t){e!==null&&e.before(t)}const on=["touchstart","touchmove"];function sn(e){return on.includes(e)}let Ye=!0;function Ae(e,t){var r=t==null?"":typeof t=="object"?t+"":t;r!==(e.__t??(e.__t=e.nodeValue))&&(e.__t=r,e.nodeValue=r==null?"":r+"")}function un(e,t){return fn(e,t)}const Z=new Map;function fn(e,{target:t,anchor:r,props:n={},events:i,context:a,intro:l=!0}){qr();var v=new Set,c=f=>{for(var o=0;o<f.length;o++){var d=f[o];if(!v.has(d)){v.add(d);var _=sn(d);t.addEventListener(d,pe,{passive:_});var p=Z.get(d);p===void 0?(document.addEventListener(d,pe,{passive:_}),Z.set(d,1)):Z.set(d,p+1)}}};c(ze(tr)),He.add(c);var u=void 0,s=jr(()=>{var f=r??t.appendChild(Lt());return se(()=>{if(a){at({});var o=x;o.c=a}i&&(n.$$events=i),Ye=l,u=e(f,n)||{},Ye=!0,a&&lt()}),()=>{var _;for(var o of v){t.removeEventListener(o,pe);var d=Z.get(o);--d===0?(document.removeEventListener(o,pe),Z.delete(o)):Z.set(o,d)}He.delete(c),wt.delete(u),f!==r&&((_=f.parentNode)==null||_.removeChild(f))}});return wt.set(u,s),u}let wt=new WeakMap;function bt(e,t,r,n=null,i=!1){var a=e,l=null,v=null,c=null,u=i?Oe:0;et(()=>{c!==(c=!!t())&&(c?(l?xe(l):l=se(()=>r(a)),v&&qe(v,()=>{v=null})):(v?xe(v):n&&(v=se(()=>n(a))),l&&qe(l,()=>{l=null})))},u)}function rr(e,t){return t}function cn(e,t,r,n){for(var i=[],a=t.length,l=0;l<a;l++)tt(t[l].e,i,!0);var v=a>0&&i.length===0&&r!==null;if(v){var c=r.parentNode;Br(c),c.append(r),n.clear(),B(e,t[0].prev,t[a-1].next)}Gt(i,()=>{for(var u=0;u<a;u++){var s=t[u];v||(n.delete(s.k),B(e,s.prev,s.next)),G(s.e,!v)}})}function nr(e,t,r,n,i,a=null){var l=e,v={flags:t,items:new Map,first:null},c=(t&$t)!==0;if(c){var u=e;l=u.appendChild(Lt())}var s=null,f=!1;et(()=>{var o=r(),d=Ge(o)?o:o==null?[]:ze(o),_=d.length;if(!(f&&_===0)){f=_===0;{var p=E;vn(d,v,l,i,t,(p.f&$)!==0,n)}a!==null&&(_===0?s?xe(s):s=se(()=>a(l)):s!==null&&qe(s,()=>{s=null})),r()}})}function vn(e,t,r,n,i,a,l){var ut,ft,ct,vt;var v=(i&kr)!==0,c=(i&(Xe|Ze))!==0,u=e.length,s=t.items,f=t.first,o=f,d,_=null,p,y=[],h=[],m,T,w,b;if(v)for(b=0;b<u;b+=1)m=e[b],T=l(m,b),w=s.get(T),w!==void 0&&((ut=w.a)==null||ut.measure(),(p??(p=new Set)).add(w));for(b=0;b<u;b+=1){if(m=e[b],T=l(m,b),w=s.get(T),w===void 0){var z=o?o.e.nodes_start:r;_=dn(z,t,_,_===null?t.first:_.next,m,T,b,n,i),s.set(T,_),y=[],h=[],o=_.next;continue}if(c&&_n(w,m,b,i),w.e.f&$&&(xe(w.e),v&&((ft=w.a)==null||ft.unfix(),(p??(p=new Set)).delete(w))),w!==o){if(d!==void 0&&d.has(w)){if(y.length<h.length){var X=h[0],S;_=X.prev;var st=y[0],Pe=y[y.length-1];for(S=0;S<y.length;S+=1)Et(y[S],X,r);for(S=0;S<h.length;S+=1)d.delete(h[S]);B(t,st.prev,Pe.next),B(t,_,st),B(t,Pe,X),o=X,_=Pe,b-=1,y=[],h=[]}else d.delete(w),Et(w,o,r),B(t,w.prev,w.next),B(t,w,_===null?t.first:_.next),B(t,_,w),_=w;continue}for(y=[],h=[];o!==null&&o.k!==T;)(a||!(o.e.f&$))&&(d??(d=new Set)).add(o),h.push(o),o=o.next;if(o===null)continue;w=o}y.push(w),_=w,o=w.next}if(o!==null||d!==void 0){for(var ae=d===void 0?[]:ze(d);o!==null;)(a||!(o.e.f&$))&&ae.push(o),o=o.next;var $e=ae.length;if($e>0){var lr=i&$t&&u===0?r:null;if(v){for(b=0;b<$e;b+=1)(ct=ae[b].a)==null||ct.measure();for(b=0;b<$e;b+=1)(vt=ae[b].a)==null||vt.fix()}cn(t,ae,lr,s)}}v&&Xt(()=>{var _t;if(p!==void 0)for(w of p)(_t=w.a)==null||_t.apply()}),g.first=t.first&&t.first.e,g.last=_&&_.e}function _n(e,t,r,n){n&Xe&&Fe(e.v,t),n&Ze?Fe(e.i,r):e.i=r}function dn(e,t,r,n,i,a,l,v,c){var u=(c&Xe)!==0,s=(c&Ir)===0,f=u?s?Sr(i):I(i):i,o=c&Ze?I(l):l,d={i:o,v:f,k:a,a:null,e:null,prev:r,next:n};try{return d.e=se(()=>v(e,f,o),Dt),d.e.prev=r&&r.e,d.e.next=n&&n.e,r===null?t.first=d:(r.next=d,r.e.next=d.e),n!==null&&(n.prev=d,n.e.prev=d.e),d}finally{}}function Et(e,t,r){for(var n=e.next?e.next.e.nodes_start:r,i=t?t.e.nodes_start:r,a=e.e.nodes_start;a!==n;){var l=ke(a);i.before(a),a=l}}function B(e,t,r){t===null?e.first=r:(t.next=r,t.e.next=r&&r.e),r!==null&&(r.prev=t,r.e.prev=t&&t.e)}function pn(e,t,r,n){var i=e.__attributes??(e.__attributes={});i[t]!==(i[t]=r)&&("__styles"in e&&(e.__styles={}),r==null?e.removeAttribute(t):typeof r!="string"&&hn(e).includes(t)?e[t]=r:e.setAttribute(t,r))}var xt=new Map;function hn(e){var t=xt.get(e.nodeName);if(t)return t;xt.set(e.nodeName,t=[]);for(var r,n=me(e),i=Element.prototype;i!==n;){r=St(n);for(var a in r)r[a].set&&t.push(a);n=me(n)}return t}function ir(e,t){var r=e.__className,n=yn(t);(r!==n||Dt)&&(t==null?e.removeAttribute("class"):e.className=n,e.__className=n)}function yn(e){return e??""}const gn=()=>performance.now(),V={tick:e=>requestAnimationFrame(e),now:()=>gn(),tasks:new Set};function ar(e){V.tasks.forEach(t=>{t.c(e)||(V.tasks.delete(t),t.f())}),V.tasks.size!==0&&V.tick(ar)}function mn(e){let t;return V.tasks.size===0&&V.tick(ar),{promise:new Promise(r=>{V.tasks.add(t={c:e,f:r})}),abort(){V.tasks.delete(t)}}}function he(e,t){e.dispatchEvent(new CustomEvent(t))}function wn(e){if(e==="float")return"cssFloat";if(e==="offset")return"cssOffset";if(e.startsWith("--"))return e;const t=e.split("-");return t.length===1?t[0]:t[0]+t.slice(1).map(r=>r[0].toUpperCase()+r.slice(1)).join("")}function Tt(e){const t={},r=e.split(";");for(const n of r){const[i,a]=n.split(":");if(!i||a===void 0)break;const l=wn(i.trim());t[l]=a.trim()}return t}const bn=e=>e;function We(e,t,r,n){var i=(e&$r)!==0,a=(e&Dr)!==0,l=i&&a,v=(e&Fr)!==0,c=l?"both":i?"in":"out",u,s=t.inert,f,o;function d(){var m=E,T=g;H(null),F(null);try{return u??(u=r()(t,(n==null?void 0:n())??{},{direction:c}))}finally{H(m),F(T)}}var _={is_global:v,in(){var m;if(t.inert=s,!i){o==null||o.abort(),(m=o==null?void 0:o.reset)==null||m.call(o);return}a||f==null||f.abort(),he(t,"introstart"),f=Ke(t,d(),o,1,()=>{he(t,"introend"),f==null||f.abort(),f=u=void 0})},out(m){if(!a){m==null||m(),u=void 0;return}t.inert=!0,he(t,"outrostart"),o=Ke(t,d(),f,0,()=>{he(t,"outroend"),m==null||m()})},stop:()=>{f==null||f.abort(),o==null||o.abort()}},p=g;if((p.transitions??(p.transitions=[])).push(_),i&&Ye){var y=v;if(!y){for(var h=p.parent;h&&h.f&Oe;)for(;(h=h.parent)&&!(h.f&Se););y=!h||(h.f&kt)!==0}y&&Qe(()=>{it(()=>_.in())})}}function Ke(e,t,r,n,i){var a=n===1;if(cr(t)){var l,v=!1;return Xt(()=>{if(!v){var y=t({direction:a?"in":"out"});l=Ke(e,y,r,n,i)}}),{abort:()=>{v=!0,l==null||l.abort()},deactivate:()=>l.deactivate(),reset:()=>l.reset(),t:()=>l.t()}}if(r==null||r.deactivate(),!(t!=null&&t.duration))return i(),{abort:le,deactivate:le,reset:le,t:()=>n};const{delay:c=0,css:u,tick:s,easing:f=bn}=t;var o=[];if(a&&r===void 0&&(s&&s(0,1),u)){var d=Tt(u(0,1));o.push(d,d)}var _=()=>1-n,p=e.animate(o,{duration:c});return p.onfinish=()=>{var y=(r==null?void 0:r.t())??1-n;r==null||r.abort();var h=n-y,m=t.duration*Math.abs(h),T=[];if(m>0){if(u)for(var w=Math.ceil(m/16.666666666666668),b=0;b<=w;b+=1){var z=y+h*f(b/w),X=u(z,1-z);T.push(Tt(X))}_=()=>{var S=p.currentTime;return y+h*f(S/m)},s&&mn(()=>{if(p.playState!=="running")return!1;var S=_();return s(S,1-S),!0})}p=e.animate(T,{duration:m,fill:"forwards"}),p.onfinish=()=>{_=()=>n,s==null||s(n,1-n),i()}},{abort:()=>{p&&(p.cancel(),p.effect=null,p.onfinish=le)},deactivate:()=>{i=le},reset:()=>{n===0&&(s==null||s(1,0))},t:()=>_()}}function En(e=!1){const t=x,r=t.l.u;if(!r)return;let n=()=>nn(t.s);if(e){let i=0,a={};const l=Ie(()=>{let v=!1;const c=t.s;for(const u in c)c[u]!==a[u]&&(a[u]=c[u],v=!0);return v&&i++,i});n=()=>A(l)}r.b.length&&Ur(()=>{At(t,n),De(r.b)}),Le(()=>{const i=it(()=>r.m.map(vr));return()=>{for(const a of i)typeof a=="function"&&a()}}),r.a.length&&Le(()=>{At(t,n),De(r.a)})}function At(e,t){if(e.l.s)for(const r of e.l.s)A(r);t()}let ye=!1;function xn(e){var t=ye;try{return ye=!1,[e(),ye]}finally{ye=t}}function Tn(e){for(var t=g,r=g;t!==null&&!(t.f&(R|fe));)t=t.parent;try{return F(t),e()}finally{F(r)}}function ge(e,t,r,n){var y;var i=(r&Cr)!==0,a=!ne||(r&Rr)!==0,l=(r&Pr)!==0,v=!1,c;[c,v]=xn(()=>e[t]);var u=te in e||pr in e,s=((y=ee(e,t))==null?void 0:y.set)??(u&&l&&t in e?h=>e[t]=h:void 0),f=n,o=!0,d=()=>(o&&(o=!1,f=n),f);c===void 0&&n!==void 0&&(s&&a&&br(),c=d(),s&&s(c));var _;if(a)_=()=>{var h=e[t];return h===void 0?d():(o=!0,h)};else{var p=Tn(()=>(i?Ie:qt)(()=>e[t]));p.f|=_r,_=()=>{var h=A(p);return h!==void 0&&(f=void 0),h===void 0?f:h}}return _}function An(e){x===null&&Kr(),ne&&x.l!==null?Nn(x).m.push(e):Le(()=>{const t=it(e);if(typeof t=="function")return t})}function Nn(e){var t=e.l;return t.u??(t.u={a:[],b:[],m:[]})}const Sn="5";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(Sn);function ot(e){const t=e-1;return t*t*t+1}function Nt(e){const t=typeof e=="string"&&e.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);return t?[parseFloat(t[1]),t[2]||"px"]:[e,"px"]}function On(e,{delay:t=0,duration:r=400,easing:n=ot,x:i=0,y:a=0,opacity:l=0}={}){const v=getComputedStyle(e),c=+v.opacity,u=v.transform==="none"?"":v.transform,s=c*(1-l),[f,o]=Nt(i),[d,_]=Nt(a);return{delay:t,duration:r,easing:n,css:(p,y)=>`
			transform: ${u} translate(${(1-p)*f}${o}, ${(1-p)*d}${_});
			opacity: ${c-s*y}`}}function kn(e,{delay:t=0,duration:r=400,easing:n=ot,axis:i="y"}={}){const a=getComputedStyle(e),l=+a.opacity,v=i==="y"?"height":"width",c=parseFloat(a[v]),u=i==="y"?["top","bottom"]:["left","right"],s=u.map(h=>`${h[0].toUpperCase()}${h.slice(1)}`),f=parseFloat(a[`padding${s[0]}`]),o=parseFloat(a[`padding${s[1]}`]),d=parseFloat(a[`margin${s[0]}`]),_=parseFloat(a[`margin${s[1]}`]),p=parseFloat(a[`border${s[0]}Width`]),y=parseFloat(a[`border${s[1]}Width`]);return{delay:t,duration:r,easing:n,css:h=>`overflow: hidden;opacity: ${Math.min(h*20,1)*l};${v}: ${h*c}px;padding-${u[0]}: ${h*f}px;padding-${u[1]}: ${h*o}px;margin-${u[0]}: ${h*d}px;margin-${u[1]}: ${h*_}px;border-${u[0]}-width: ${h*p}px;border-${u[1]}-width: ${h*y}px;`}}function In(e,{delay:t=0,duration:r=400,easing:n=ot,start:i=0,opacity:a=0}={}){const l=getComputedStyle(e),v=+l.opacity,c=l.transform==="none"?"":l.transform,u=1-i,s=v*(1-a);return{delay:t,duration:r,easing:n,css:(f,o)=>`
			transform: ${c} scale(${1-u*o});
			opacity: ${v-s*o}
		`}}Nr();var Cn=ie('<div class="mb-4"><div class="flex justify-between mb-1"><span class="text-gray-700"><b> </b></span> <span class="text-gray-700"> </span></div> <div class="h-4 rounded-full overflow-hidden bg-gray-200"><div></div></div></div>'),Rn=ie('<h3 class="text-2xl text-center mb-4 text-gray-700">Bla bla bla</h3> <div class="w-full max-w-md"></div>',1);function Pn(e,t){at(t,!1),ge(t,"voteName",8);let r=ge(t,"choices",8),n=ge(t,"votes",8),i=ge(t,"calculatePercentage",8);En();var a=Rn(),l=W(Me(a),2);nr(l,5,r,rr,(v,c)=>{var u=Cn(),s=M(u),f=M(s),o=M(f),d=M(o),_=W(f,2),p=M(_);Ee(()=>Ae(p,`${i()(n()[A(c).id])??""}%`));var y=W(s,2),h=M(y);const m=qt(()=>`width: ${i()(n()[A(c).id])??""}%`);Ee(()=>{Ae(d,A(c).label),ir(h,`h-full ${A(c).color??""} transition-all duration-500`),pn(h,"style",A(m))}),Q(v,u)}),We(3,l,()=>kn,()=>({duration:500})),Q(e,a),lt()}var $n=(e,t,r)=>t(A(r).id),Dn=ie("<button> </button>"),Fn=ie('<div class="text-2xl text-center mb-8 text-gray-700"> </div> <div class="flex space-x-4 mb-12"></div>',1),Mn=(e,t)=>t(choice.id),Ln=ie('<!> <button class="bg-green-300 text-white font-bold py-2 px-4 rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105 active:scale-95">Next AITA?</button>',1),qn=ie('<div class="min-h-screen bg-gradient-to-br from-yellow-100 to-pink-100 flex flex-col items-center justify-center p-4"><h1 class="text-4xl font-bold text-purple-600 mb-4">Bla Bla</h1> <!> <!></div>');function Bn(e,t){at(t,!0);let r="Bla Bla";const n=[{id:"Bla",label:"Bla",color:"bg-pink-300"},{id:"bla",label:"bla",color:"bg-blue-300"},{id:"BLA",label:"BLA",color:"bg-purple-300"}];let i=Y({NTA:0,YTA:0,ESH:0}),a=dt(!1),l=dt("");function v(_){var p;i[_]+=1,P(a,!0),P(l,Y(_)),(p=window.parent)==null||p.postMessage({type:"guess",data:{choice:_,question:r}},"*")}let c=Ie(()=>Object.values(i).reduce((_,p)=>_+p,0));function u(_){return A(c)===0?0:(_/A(c)*100).toFixed(1)}window.addEventListener("message",_=>{if(_.data.type==="devvit-message"){const{message:p}=_.data;console.log("Received from Devvit:",p)}}),An(()=>{var _;console.log("BROADCAST"),setTimeout(()=>5e3),(_=window.parent)==null||_.postMessage({type:"Load",data:"hello"},"*")});var s=qn(),f=M(s),o=W(f,2);bt(o,()=>!A(a),_=>{var p=Fn(),y=Me(p),h=M(y),m=W(y,2);nr(m,21,()=>n,rr,(T,w)=>{var b=Dn();b.__click=[$n,v,w];var z=M(b);Ee(()=>{ir(b,`${A(w).color??""} text-white font-bold py-2 px-4 rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105 active:scale-95`),Ae(z,A(w).label)}),Q(T,b)}),Ee(()=>Ae(h,r)),We(1,y,()=>In,()=>({duration:500,delay:500,start:.9})),Q(_,p)});var d=W(o,2);bt(d,()=>A(a),_=>{var p=Ln(),y=Me(p);Pn(y,{get voteName(){return A(l)},choices:n,get votes(){return i},calculatePercentage:u});var h=W(y,2);h.__click=[Mn,v],Q(_,p)}),We(1,f,()=>On,()=>({y:-50,duration:500})),Q(e,s),lt()}an(["click"]);un(Bn,{target:document.getElementById("app")});
