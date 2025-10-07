function _t(t,e){return t+e}var J=globalThis,Z=J.ShadowRoot&&(J.ShadyCSS===void 0||J.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,at=Symbol(),yt=new WeakMap,ot=class{constructor(t,e,s){if(this._$cssResult$=!0,s!==at)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o,e=this.t;if(Z&&t===void 0){let s=e!==void 0&&e.length===1;s&&(t=yt.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&yt.set(e,t))}return t}toString(){return this.cssText}},$t=t=>new ot(typeof t=="string"?t:t+"",void 0,at),G=(t,...e)=>{let s=t.length===1?t[0]:e.reduce((i,r,o)=>i+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+t[o+1],t[0]);return new ot(s,t,at)},bt=(t,e)=>{if(Z)t.adoptedStyleSheets=e.map(s=>s instanceof CSSStyleSheet?s:s.styleSheet);else for(let s of e){let i=document.createElement("style"),r=J.litNonce;r!==void 0&&i.setAttribute("nonce",r),i.textContent=s.cssText,t.appendChild(i)}},nt=Z?t=>t:t=>t instanceof CSSStyleSheet?(e=>{let s="";for(let i of e.cssRules)s+=i.cssText;return $t(s)})(t):t;var{is:ce,defineProperty:pe,getOwnPropertyDescriptor:de,getOwnPropertyNames:ue,getOwnPropertySymbols:me,getPrototypeOf:fe}=Object,K=globalThis,At=K.trustedTypes,ge=At?At.emptyScript:"",ve=K.reactiveElementPolyfillSupport,V=(t,e)=>t,q={toAttribute(t,e){switch(e){case Boolean:t=t?ge:null;break;case Object:case Array:t=t==null?t:JSON.stringify(t)}return t},fromAttribute(t,e){let s=t;switch(e){case Boolean:s=t!==null;break;case Number:s=t===null?null:Number(t);break;case Object:case Array:try{s=JSON.parse(t)}catch{s=null}}return s}},Y=(t,e)=>!ce(t,e),xt={attribute:!0,type:String,converter:q,reflect:!1,useDefault:!1,hasChanged:Y};Symbol.metadata??=Symbol("metadata"),K.litPropertyMetadata??=new WeakMap;var O=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=xt){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){let s=Symbol(),i=this.getPropertyDescriptor(t,s,e);i!==void 0&&pe(this.prototype,t,i)}}static getPropertyDescriptor(t,e,s){let{get:i,set:r}=de(this.prototype,t)??{get(){return this[e]},set(o){this[e]=o}};return{get:i,set(o){let n=i?.call(this);r?.call(this,o),this.requestUpdate(t,n,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??xt}static _$Ei(){if(this.hasOwnProperty(V("elementProperties")))return;let t=fe(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(V("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(V("properties"))){let e=this.properties,s=[...ue(e),...me(e)];for(let i of s)this.createProperty(i,e[i])}let t=this[Symbol.metadata];if(t!==null){let e=litPropertyMetadata.get(t);if(e!==void 0)for(let[s,i]of e)this.elementProperties.set(s,i)}this._$Eh=new Map;for(let[e,s]of this.elementProperties){let i=this._$Eu(e,s);i!==void 0&&this._$Eh.set(i,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){let e=[];if(Array.isArray(t)){let s=new Set(t.flat(1/0).reverse());for(let i of s)e.unshift(nt(i))}else t!==void 0&&e.push(nt(t));return e}static _$Eu(t,e){let s=e.attribute;return s===!1?void 0:typeof s=="string"?s:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){let t=new Map,e=this.constructor.elementProperties;for(let s of e.keys())this.hasOwnProperty(s)&&(t.set(s,this[s]),delete this[s]);t.size>0&&(this._$Ep=t)}createRenderRoot(){let t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return bt(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$ET(t,e){let s=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,s);if(i!==void 0&&s.reflect===!0){let r=(s.converter?.toAttribute!==void 0?s.converter:q).toAttribute(e,s.type);this._$Em=t,r==null?this.removeAttribute(i):this.setAttribute(i,r),this._$Em=null}}_$AK(t,e){let s=this.constructor,i=s._$Eh.get(t);if(i!==void 0&&this._$Em!==i){let r=s.getPropertyOptions(i),o=typeof r.converter=="function"?{fromAttribute:r.converter}:r.converter?.fromAttribute!==void 0?r.converter:q;this._$Em=i;let n=o.fromAttribute(e,r.type);this[i]=n??this._$Ej?.get(i)??n,this._$Em=null}}requestUpdate(t,e,s){if(t!==void 0){let i=this.constructor,r=this[t];if(s??=i.getPropertyOptions(t),!((s.hasChanged??Y)(r,e)||s.useDefault&&s.reflect&&r===this._$Ej?.get(t)&&!this.hasAttribute(i._$Eu(t,s))))return;this.C(t,e,s)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,e,{useDefault:s,reflect:i,wrapped:r},o){s&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,o??e??this[t]),r!==!0||o!==void 0)||(this._$AL.has(t)||(this.hasUpdated||s||(e=void 0),this._$AL.set(t,e)),i===!0&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[i,r]of this._$Ep)this[i]=r;this._$Ep=void 0}let s=this.constructor.elementProperties;if(s.size>0)for(let[i,r]of s){let{wrapped:o}=r,n=this[i];o!==!0||this._$AL.has(i)||n===void 0||this.C(i,void 0,r,n)}}let t=!1,e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(s=>s.hostUpdate?.()),this.update(e)):this._$EM()}catch(s){throw t=!1,this._$EM(),s}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(t){}firstUpdated(t){}};O.elementStyles=[],O.shadowRootOptions={mode:"open"},O[V("elementProperties")]=new Map,O[V("finalized")]=new Map,ve?.({ReactiveElement:O}),(K.reactiveElementVersions??=[]).push("2.1.1");var ct=globalThis,Q=ct.trustedTypes,St=Q?Q.createPolicy("lit-html",{createHTML:t=>t}):void 0,Tt="$lit$",M=`lit$${Math.random().toFixed(9).slice(2)}$`,Ut="?"+M,_e=`<${Ut}>`,L=document,B=()=>L.createComment(""),W=t=>t===null||typeof t!="object"&&typeof t!="function",pt=Array.isArray,ye=t=>pt(t)||typeof t?.[Symbol.iterator]=="function",lt=`[ 	
\f\r]`,k=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Et=/-->/g,Ct=/>/g,R=RegExp(`>|${lt}(?:([^\\s"'>=/]+)(${lt}*=${lt}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),wt=/'/g,Mt=/"/g,Ot=/^(?:script|style|textarea|title)$/i,dt=t=>(e,...s)=>({_$litType$:t,strings:e,values:s}),F=dt(1),qe=dt(2),ke=dt(3),N=Symbol.for("lit-noChange"),$=Symbol.for("lit-nothing"),Pt=new WeakMap,H=L.createTreeWalker(L,129);function Rt(t,e){if(!pt(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return St!==void 0?St.createHTML(e):e}var $e=(t,e)=>{let s=t.length-1,i=[],r,o=e===2?"<svg>":e===3?"<math>":"",n=k;for(let c=0;c<s;c++){let m=t[c],T,h,a=-1,d=0;for(;d<m.length&&(n.lastIndex=d,h=n.exec(m),h!==null);)d=n.lastIndex,n===k?h[1]==="!--"?n=Et:h[1]!==void 0?n=Ct:h[2]!==void 0?(Ot.test(h[2])&&(r=RegExp("</"+h[2],"g")),n=R):h[3]!==void 0&&(n=R):n===R?h[0]===">"?(n=r??k,a=-1):h[1]===void 0?a=-2:(a=n.lastIndex-h[2].length,T=h[1],n=h[3]===void 0?R:h[3]==='"'?Mt:wt):n===Mt||n===wt?n=R:n===Et||n===Ct?n=k:(n=R,r=void 0);let p=n===R&&t[c+1].startsWith("/>")?" ":"";o+=n===k?m+_e:a>=0?(i.push(T),m.slice(0,a)+Tt+m.slice(a)+M+p):m+M+(a===-2?c:p)}return[Rt(t,o+(t[s]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),i]},ht=class Ht{constructor({strings:e,_$litType$:s},i){let r;this.parts=[];let o=0,n=0,c=e.length-1,m=this.parts,[T,h]=$e(e,s);if(this.el=Ht.createElement(T,i),H.currentNode=this.el.content,s===2||s===3){let a=this.el.content.firstChild;a.replaceWith(...a.childNodes)}for(;(r=H.nextNode())!==null&&m.length<c;){if(r.nodeType===1){if(r.hasAttributes())for(let a of r.getAttributeNames())if(a.endsWith(Tt)){let d=h[n++],p=r.getAttribute(a).split(M),l=/([.?@])?(.*)/.exec(d);m.push({type:1,index:o,name:l[2],strings:p,ctor:l[1]==="."?Ae:l[1]==="?"?xe:l[1]==="@"?Se:X}),r.removeAttribute(a)}else a.startsWith(M)&&(m.push({type:6,index:o}),r.removeAttribute(a));if(Ot.test(r.tagName)){let a=r.textContent.split(M),d=a.length-1;if(d>0){r.textContent=Q?Q.emptyScript:"";for(let p=0;p<d;p++)r.append(a[p],B()),H.nextNode(),m.push({type:2,index:++o});r.append(a[d],B())}}}else if(r.nodeType===8)if(r.data===Ut)m.push({type:2,index:o});else{let a=-1;for(;(a=r.data.indexOf(M,a+1))!==-1;)m.push({type:7,index:o}),a+=M.length-1}o++}}static createElement(e,s){let i=L.createElement("template");return i.innerHTML=e,i}};function D(t,e,s=t,i){if(e===N)return e;let r=i!==void 0?s._$Co?.[i]:s._$Cl,o=W(e)?void 0:e._$litDirective$;return r?.constructor!==o&&(r?._$AO?.(!1),o===void 0?r=void 0:(r=new o(t),r._$AT(t,s,i)),i!==void 0?(s._$Co??=[])[i]=r:s._$Cl=r),r!==void 0&&(e=D(t,r._$AS(t,e.values),r,i)),e}var be=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){let{el:{content:e},parts:s}=this._$AD,i=(t?.creationScope??L).importNode(e,!0);H.currentNode=i;let r=H.nextNode(),o=0,n=0,c=s[0];for(;c!==void 0;){if(o===c.index){let m;c.type===2?m=new ut(r,r.nextSibling,this,t):c.type===1?m=new c.ctor(r,c.name,c.strings,this,t):c.type===6&&(m=new Ee(r,this,t)),this._$AV.push(m),c=s[++n]}o!==c?.index&&(r=H.nextNode(),o++)}return H.currentNode=L,i}p(t){let e=0;for(let s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}},ut=class Lt{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,s,i,r){this.type=2,this._$AH=$,this._$AN=void 0,this._$AA=e,this._$AB=s,this._$AM=i,this.options=r,this._$Cv=r?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,s=this._$AM;return s!==void 0&&e?.nodeType===11&&(e=s.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,s=this){e=D(this,e,s),W(e)?e===$||e==null||e===""?(this._$AH!==$&&this._$AR(),this._$AH=$):e!==this._$AH&&e!==N&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):ye(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==$&&W(this._$AH)?this._$AA.nextSibling.data=e:this.T(L.createTextNode(e)),this._$AH=e}$(e){let{values:s,_$litType$:i}=e,r=typeof i=="number"?this._$AC(e):(i.el===void 0&&(i.el=ht.createElement(Rt(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===r)this._$AH.p(s);else{let o=new be(r,this),n=o.u(this.options);o.p(s),this.T(n),this._$AH=o}}_$AC(e){let s=Pt.get(e.strings);return s===void 0&&Pt.set(e.strings,s=new ht(e)),s}k(e){pt(this._$AH)||(this._$AH=[],this._$AR());let s=this._$AH,i,r=0;for(let o of e)r===s.length?s.push(i=new Lt(this.O(B()),this.O(B()),this,this.options)):i=s[r],i._$AI(o),r++;r<s.length&&(this._$AR(i&&i._$AB.nextSibling,r),s.length=r)}_$AR(e=this._$AA.nextSibling,s){for(this._$AP?.(!1,!0,s);e!==this._$AB;){let i=e.nextSibling;e.remove(),e=i}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},X=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,s,i,r){this.type=1,this._$AH=$,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=r,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=$}_$AI(t,e=this,s,i){let r=this.strings,o=!1;if(r===void 0)t=D(this,t,e,0),o=!W(t)||t!==this._$AH&&t!==N,o&&(this._$AH=t);else{let n=t,c,m;for(t=r[0],c=0;c<r.length-1;c++)m=D(this,n[s+c],e,c),m===N&&(m=this._$AH[c]),o||=!W(m)||m!==this._$AH[c],m===$?t=$:t!==$&&(t+=(m??"")+r[c+1]),this._$AH[c]=m}o&&!i&&this.j(t)}j(t){t===$?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},Ae=class extends X{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===$?void 0:t}},xe=class extends X{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==$)}},Se=class extends X{constructor(t,e,s,i,r){super(t,e,s,i,r),this.type=5}_$AI(t,e=this){if((t=D(this,t,e,0)??$)===N)return;let s=this._$AH,i=t===$&&s!==$||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,r=t!==$&&(s===$||i);i&&this.element.removeEventListener(this.name,this,s),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}},Ee=class{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){D(this,t)}};var Ce=ct.litHtmlPolyfillSupport;Ce?.(ht,ut),(ct.litHtmlVersions??=[]).push("3.3.1");var Nt=(t,e,s)=>{let i=s?.renderBefore??e,r=i._$litPart$;if(r===void 0){let o=s?.renderBefore??null;i._$litPart$=r=new ut(e.insertBefore(B(),o),o,void 0,s??{})}return r._$AI(t),r};var mt=globalThis,P=class extends O{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){let e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Nt(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return N}};P._$litElement$=!0,P.finalized=!0,mt.litElementHydrateSupport?.({LitElement:P});var we=mt.litElementPolyfillSupport;we?.({LitElement:P});(mt.litElementVersions??=[]).push("4.2.1");var tt=t=>(e,s)=>{s!==void 0?s.addInitializer(()=>{customElements.define(t,e)}):customElements.define(t,e)};var Me={attribute:!0,type:String,converter:q,reflect:!1,hasChanged:Y},Pe=(t=Me,e,s)=>{let{kind:i,metadata:r}=s,o=globalThis.litPropertyMetadata.get(r);if(o===void 0&&globalThis.litPropertyMetadata.set(r,o=new Map),i==="setter"&&((t=Object.create(t)).wrapped=!0),o.set(s.name,t),i==="accessor"){let{name:n}=s;return{set(c){let m=e.get.call(this);e.set.call(this,c),this.requestUpdate(n,m,t)},init(c){return c!==void 0&&this.C(n,void 0,t,c),c}}}if(i==="setter"){let{name:n}=s;return function(c){let m=this[n];e.call(this,c),this.requestUpdate(n,m,t)}}throw Error("Unsupported decorator location: "+i)};function z(t){return(e,s)=>typeof s=="object"?Pe(t,e,s):((i,r,o)=>{let n=r.hasOwnProperty(o);return r.constructor.createProperty(o,i),n?Object.getOwnPropertyDescriptor(r,o):void 0})(t,e,s)}function ft(t){return z({...t,state:!0,attribute:!1})}function Te(){function t(h,a){return function(p){s(a,"addInitializer"),i(p,"An initializer"),h.push(p)}}function e(h,a,d,p,l,b,y,S,A){var _;switch(l){case 1:_="accessor";break;case 2:_="method";break;case 3:_="getter";break;case 4:_="setter";break;default:_="field"}var f={kind:_,name:y?"#"+a:a,static:b,private:y,metadata:S},v={v:!1};f.addInitializer=t(p,v);var u,g;l===0?y?(u=d.get,g=d.set):(u=function(){return this[a]},g=function(x){this[a]=x}):l===2?u=function(){return d.value}:((l===1||l===3)&&(u=function(){return d.get.call(this)}),(l===1||l===4)&&(g=function(x){d.set.call(this,x)})),f.access=u&&g?{get:u,set:g}:u?{get:u}:{set:g};try{return h(A,f)}finally{v.v=!0}}function s(h,a){if(h.v)throw new Error("attempted to call "+a+" after decoration was finished")}function i(h,a){if(typeof h!="function")throw new TypeError(a+" must be a function")}function r(h,a){var d=typeof a;if(h===1){if(d!=="object"||a===null)throw new TypeError("accessor decorators must return an object with get, set, or init properties or void 0");a.get!==void 0&&i(a.get,"accessor.get"),a.set!==void 0&&i(a.set,"accessor.set"),a.init!==void 0&&i(a.init,"accessor.init")}else if(d!=="function"){var p;throw h===0?p="field":h===10?p="class":p="method",new TypeError(p+" decorators must return a function or void 0")}}function o(h,a,d,p,l,b,y,S,A){var _=d[0],f,v,u;y?l===0||l===1?f={get:d[3],set:d[4]}:l===3?f={get:d[3]}:l===4?f={set:d[3]}:f={value:d[3]}:l!==0&&(f=Object.getOwnPropertyDescriptor(a,p)),l===1?u={get:f.get,set:f.set}:l===2?u=f.value:l===3?u=f.get:l===4&&(u=f.set);var g,x,w;if(typeof _=="function")g=e(_,p,f,S,l,b,y,A,u),g!==void 0&&(r(l,g),l===0?v=g:l===1?(v=g.init,x=g.get||u.get,w=g.set||u.set,u={get:x,set:w}):u=g);else for(var U=_.length-1;U>=0;U--){var I=_[U];if(g=e(I,p,f,S,l,b,y,A,u),g!==void 0){r(l,g);var j;l===0?j=g:l===1?(j=g.init,x=g.get||u.get,w=g.set||u.set,u={get:x,set:w}):u=g,j!==void 0&&(v===void 0?v=j:typeof v=="function"?v=[v,j]:v.push(j))}}if(l===0||l===1){if(v===void 0)v=function(C,E){return E};else if(typeof v!="function"){var vt=v;v=function(C,E){for(var it=E,rt=0;rt<vt.length;rt++)it=vt[rt].call(C,it);return it}}else{var he=v;v=function(C,E){return he.call(C,E)}}h.push(v)}l!==0&&(l===1?(f.get=u.get,f.set=u.set):l===2?f.value=u:l===3?f.get=u:l===4&&(f.set=u),y?l===1?(h.push(function(C,E){return u.get.call(C,E)}),h.push(function(C,E){return u.set.call(C,E)})):l===2?h.push(u):h.push(function(C,E){return u.call(C,E)}):Object.defineProperty(a,p,f))}function n(h,a,d){for(var p=[],l,b,y=new Map,S=new Map,A=0;A<a.length;A++){var _=a[A];if(Array.isArray(_)){var f=_[1],v=_[2],u=_.length>3,g=f>=5,x,w;if(g?(x=h,f=f-5,b=b||[],w=b):(x=h.prototype,l=l||[],w=l),f!==0&&!u){var U=g?S:y,I=U.get(v)||0;if(I===!0||I===3&&f!==4||I===4&&f!==3)throw new Error("Attempted to decorate a public method/accessor that has the same name as a previously decorated public method/accessor. This is not currently supported by the decorators plugin. Property name was: "+v);!I&&f>2?U.set(v,f):U.set(v,!0)}o(p,x,_,v,f,g,u,w,d)}}return c(p,l),c(p,b),p}function c(h,a){a&&h.push(function(d){for(var p=0;p<a.length;p++)a[p].call(d);return d})}function m(h,a,d){if(a.length>0){for(var p=[],l=h,b=h.name,y=a.length-1;y>=0;y--){var S={v:!1};try{var A=a[y](l,{kind:"class",name:b,addInitializer:t(p,S),metadata:d})}finally{S.v=!0}A!==void 0&&(r(10,A),l=A)}return[T(l,d),function(){for(var _=0;_<p.length;_++)p[_].call(l)}]}}function T(h,a){return Object.defineProperty(h,Symbol.metadata||Symbol.for("Symbol.metadata"),{configurable:!0,enumerable:!0,value:a})}return function(a,d,p,l){if(l!==void 0)var b=l[Symbol.metadata||Symbol.for("Symbol.metadata")];var y=Object.create(b===void 0?null:b),S=n(a,d,y);return p.length||T(a,y),{e:S,get c(){return m(a,p,y)}}}}function st(t,e,s,i){return(st=Te())(t,e,s,i)}function Xt(t){return t}var te,zt,It,ee,se,ie,re,ae,oe,jt,Dt,Vt,qt,kt,Bt,Wt,ne,Ft,Jt,le,Zt,Gt,gt=class{state;autoTimer;changeCallbacks=[];constructor(e=0){this.state={value:e,min:-50,max:100,stepSize:1,autoInterval:500,mode:"manual",history:[e]}}getState(){return{...this.state}}increment(){return this.changeValue(this.state.value+this.state.stepSize)}decrement(){return this.changeValue(this.state.value-this.state.stepSize)}reset(){this.changeValue(0),this.state.history=[0],this.notifyChange()}setStepSize(e){this.state.stepSize=Math.max(1,e),this.notifyChange()}setBounds(e,s){this.state.min=e,this.state.max=s,this.changeValue(Math.max(e,Math.min(s,this.state.value)))}toggleMode(){this.state.mode=this.state.mode==="manual"?"auto":"manual",this.state.mode==="auto"?this.startAutoIncrement():this.stopAutoIncrement(),this.notifyChange()}setAutoInterval(e){this.state.autoInterval=Math.max(100,e),this.state.mode==="auto"&&(this.stopAutoIncrement(),this.startAutoIncrement()),this.notifyChange()}getStatistics(){let e=this.state.history;return{total:e.reduce((s,i)=>_t(s,i),0),average:e.length>0?e.reduce((s,i)=>s+i,0)/e.length:0,changes:e.length-1,peak:Math.max(...e),valley:Math.min(...e)}}undo(){return this.state.history.length>1?(this.state.history.pop(),this.state.value=this.state.history[this.state.history.length-1],this.notifyChange(),!0):!1}onStateChange(e){this.changeCallbacks.push(e)}dispose(){this.stopAutoIncrement(),this.changeCallbacks=[]}changeValue(e){let s=Math.max(this.state.min,Math.min(this.state.max,e));return s!==this.state.value?(this.state.value=s,this.state.history.push(s),this.state.history.length>100&&(this.state.history=this.state.history.slice(-50)),this.notifyChange(),!0):!1}startAutoIncrement(){this.autoTimer=setInterval(()=>{this.increment()},this.state.autoInterval)}stopAutoIncrement(){this.autoTimer&&(clearInterval(this.autoTimer),this.autoTimer=void 0)}notifyChange(){this.changeCallbacks.forEach(e=>e(this.getState()))}},Kt;te=tt("advanced-counter"),ee=z({attribute:"comp-title",type:String}),se=z({attribute:"theme",type:String}),ie=z({attribute:"disabled",type:Boolean,reflect:!0}),re=z({attribute:"initial-value",type:Number}),ae=ft(),oe=ft();new class extends Xt{constructor(){super(Kt),zt()}static{class t extends(It=P){static{({e:[jt,Dt,Vt,qt,kt,Bt,Wt],c:[Kt,zt]}=st(this,[[ee,1,"compTitle"],[se,1,"theme"],[ie,1,"disabled"],[re,1,"initialValue"],[ae,1,"state"],[oe,1,"stats"]],[te],It))}counterLogic;#t=(Wt(this),jt(this,"Advanced Counter"));get compTitle(){return this.#t}set compTitle(s){this.#t=s}#e=Dt(this,"light");get theme(){return this.#e}set theme(s){this.#e=s}#s=Vt(this,!1);get disabled(){return this.#s}set disabled(s){this.#s=s}#i=qt(this,0);get initialValue(){return this.#i}set initialValue(s){this.#i=s}#r=kt(this);get state(){return this.#r}set state(s){this.#r=s}#a=Bt(this);get stats(){return this.#a}set stats(s){this.#a=s}static styles=G`
    :host {
      display: block;
      padding: 24px;
      border: 3px solid #2196f3;
      border-radius: 12px;
      margin: 16px 0;
      background: linear-gradient(135deg, #f5f5f5 0%, #e8e8e8 100%);
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
      font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    }

    :host([theme="dark"]) {
      background: linear-gradient(135deg, #424242 0%, #303030 100%);
      border-color: #64b5f6;
      color: white;
    }

    :host([disabled]) {
      opacity: 0.6;
      pointer-events: none;
    }

    h2 {
      margin: 0 0 20px 0;
      text-align: center;
      color: #1976d2;
      font-size: 1.5rem;
    }

    :host([theme="dark"]) h2 {
      color: #64b5f6;
    }

    .counter-display {
      text-align: center;
      margin-bottom: 20px;
    }

    .counter-value {
      font-size: 3rem;
      font-weight: bold;
      color: #1976d2;
      text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
      margin: 10px 0;
    }

    .counter-mode {
      display: inline-block;
      padding: 4px 12px;
      border-radius: 16px;
      font-size: 0.8rem;
      font-weight: bold;
      text-transform: uppercase;
      margin-bottom: 10px;
    }

    .mode-manual {
      background-color: #4caf50;
      color: white;
    }

    .mode-auto {
      background-color: #ff9800;
      color: white;
      animation: pulse 1s infinite;
    }

    @keyframes pulse {
      0%, 100% {
        opacity: 1;
      }
      50% {
        opacity: 0.7;
      }
    }

    .controls {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
      gap: 12px;
      margin-bottom: 20px;
    }

    button {
      padding: 12px 16px;
      border: none;
      border-radius: 8px;
      font-weight: bold;
      cursor: pointer;
      transition: all 0.2s ease;
      font-size: 14px;
    }

    button:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    }

    .btn-primary {
      background-color: #2196f3;
      color: white;
    }

    .btn-secondary {
      background-color: #757575;
      color: white;
    }

    .btn-success {
      background-color: #4caf50;
      color: white;
    }

    .btn-warning {
      background-color: #ff9800;
      color: white;
    }

    .btn-danger {
      background-color: #f44336;
      color: white;
    }

    .settings {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 16px;
      margin-bottom: 20px;
      padding: 16px;
      background-color: rgba(255, 255, 255, 0.7);
      border-radius: 8px;
    }

    .setting-group {
      display: flex;
      flex-direction: column;
    }

    label {
      font-weight: bold;
      margin-bottom: 4px;
      color: #424242;
    }

    input[type="number"], input[type="range"] {
      padding: 8px;
      border: 2px solid #ddd;
      border-radius: 4px;
      font-size: 14px;
    }

    input[type="range"] {
      padding: 0;
    }

    .stats {
      background-color: rgba(255, 255, 255, 0.9);
      padding: 16px;
      border-radius: 8px;
      border-left: 4px solid #2196f3;
    }

    .stats h3 {
      margin-top: 0;
      color: #1976d2;
    }

    .stats-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
      gap: 12px;
    }

    .stat-item {
      text-align: center;
      padding: 8px;
      background-color: #f8f9fa;
      border-radius: 6px;
    }

    .stat-value {
      font-size: 1.2rem;
      font-weight: bold;
      color: #2196f3;
    }

    .stat-label {
      font-size: 0.8rem;
      color: #666;
      text-transform: uppercase;
    }

    .bounds-indicator {
      margin: 8px 0;
      font-size: 0.9rem;
      color: #666;
    }

    .at-limit {
      color: #f44336;
      font-weight: bold;
    }
  `;connectedCallback(){super.connectedCallback(),this.counterLogic=new gt,this.state=this.counterLogic.getState(),this.stats=this.counterLogic.getStatistics(),this.counterLogic.onStateChange(s=>{this.state=s,this.stats=this.counterLogic.getStatistics(),this.requestUpdate(),this.dispatchEvent(new CustomEvent("counter-changed",{detail:{value:s.value,stats:this.stats},bubbles:!0}))})}disconnectedCallback(){super.disconnectedCallback(),this.counterLogic.dispose()}handleIncrement(){this.counterLogic.increment()}handleDecrement(){this.counterLogic.decrement()}handleReset(){this.counterLogic.reset()}handleUndo(){this.counterLogic.undo()}handleModeToggle(){this.counterLogic.toggleMode()}handleStepChange(s){let i=s.target;this.counterLogic.setStepSize(parseInt(i.value)||1)}handleIntervalChange(s){let i=s.target;this.counterLogic.setAutoInterval(parseInt(i.value)||500)}handleMinChange(s){let i=s.target,r=parseInt(i.value)||-50;this.counterLogic.setBounds(r,this.state.max)}handleMaxChange(s){let i=s.target,r=parseInt(i.value)||100;this.counterLogic.setBounds(this.state.min,r)}render(){let s=this.state.value<=this.state.min,i=this.state.value>=this.state.max;return F`
      <h2>${this.compTitle}</h2>
      <div class="counter-display">
        <div class="counter-mode ${this.state.mode==="auto"?"mode-auto":"mode-manual"}">
          ${this.state.mode} mode
        </div>
        <div class="counter-value">${this.state.value}</div>
        <div class="bounds-indicator">
          Range: ${this.state.min} to ${this.state.max} ${s||i?F`
          <span class="at-limit">(at limit!)</span>
        `:""}
        </div>
      </div>

      <div class="controls">
        <button
          class="btn-primary"
          @click="${this.handleDecrement}"
          ?disabled="${s}"
        >
          ➖ Decrease
        </button>
        <button
          class="btn-primary"
          @click="${this.handleIncrement}"
          ?disabled="${i}"
        >
          ➕ Increase
        </button>
        <button class="btn-secondary" @click="${this.handleUndo}">
          ↶ Undo
        </button>
        <button class="btn-danger" @click="${this.handleReset}">
          🔄 Reset
        </button>
        <button
          class="btn-${this.state.mode==="auto"?"warning":"success"}"
          @click="${this.handleModeToggle}"
        >
          ${this.state.mode==="auto"?"\u23F8\uFE0F Stop Auto":"\u25B6\uFE0F Start Auto"}
        </button>
      </div>

      <div class="settings">
        <div class="setting-group">
          <label>Step Size: ${this.state.stepSize}</label>
          <input
            type="range"
            min="1"
            max="10"
            .value="${this.state.stepSize.toString()}"
            @input="${this.handleStepChange}"
          />
        </div>
        <div class="setting-group">
          <label>Auto Interval: ${this.state.autoInterval}ms</label>
          <input
            type="range"
            min="100"
            max="2000"
            step="100"
            .value="${this.state.autoInterval.toString()}"
            @input="${this.handleIntervalChange}"
          />
        </div>
        <div class="setting-group">
          <label>Min Value</label>
          <input
            type="number"
            .value="${this.state.min.toString()}"
            @change="${this.handleMinChange}"
          />
        </div>
        <div class="setting-group">
          <label>Max Value</label>
          <input
            type="number"
            .value="${this.state.max.toString()}"
            @change="${this.handleMaxChange}"
          />
        </div>
      </div>

      <div class="stats">
        <h3>📊 Statistics</h3>
        <div class="stats-grid">
          <div class="stat-item">
            <div class="stat-value">${this.stats.total}</div>
            <div class="stat-label">Total Sum</div>
          </div>
          <div class="stat-item">
            <div class="stat-value">${this.stats.average.toFixed(1)}</div>
            <div class="stat-label">Average</div>
          </div>
          <div class="stat-item">
            <div class="stat-value">${this.stats.changes}</div>
            <div class="stat-label">Changes</div>
          </div>
          <div class="stat-item">
            <div class="stat-value">${this.stats.peak}</div>
            <div class="stat-label">Peak</div>
          </div>
          <div class="stat-item">
            <div class="stat-value">${this.stats.valley}</div>
            <div class="stat-label">Valley</div>
          </div>
          <div class="stat-item">
            <div class="stat-value">${this.state.history.length}</div>
            <div class="stat-label">History Size</div>
          </div>
        </div>
      </div>
    `}}}};var Ue;ne=tt("counter-wrapper");var Yt=class extends(Jt=P){static{({c:[Ue,Ft]}=st(this,[],[ne],Jt))}render(){return F`
      <advanced-counter comp-title="Howdy"></advanced-counter>
    `}static{Ft()}},Qt;le=tt("app-home");new class extends Xt{constructor(){super(Qt),Zt()}static{class t extends(Gt=P){static{({c:[Qt,Zt]}=st(this,[],[le],Gt))}static styles=G`
    :host {
      font-family: sans-serif;
      text-align: center;
    }

    h1 {
      color: #333;
      margin: 0 auto;
    }
  `;render(){return F`
      <slot></slot>
    `}}}};export{_t as add};
/*! Bundled license information:

@lit/reactive-element/css-tag.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/
/*! Bundled license information:

@lit/reactive-element/reactive-element.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/
/*! Bundled license information:

lit-html/lit-html.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/
/*! Bundled license information:

lit-element/lit-element.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/
/*! Bundled license information:

lit-html/is-server.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/
/*! Bundled license information:

@lit/reactive-element/decorators/custom-element.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/
/*! Bundled license information:

@lit/reactive-element/decorators/event-options.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/
/*! Bundled license information:

@lit/reactive-element/decorators/property.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/
/*! Bundled license information:

@lit/reactive-element/decorators/base.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/
/*! Bundled license information:

@lit/reactive-element/decorators/query-all.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/
/*! Bundled license information:

@lit/reactive-element/decorators/query-assigned-elements.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/
/*! Bundled license information:

@lit/reactive-element/decorators/query-assigned-nodes.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/
/*! Bundled license information:

@lit/reactive-element/decorators/query-async.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/
/*! Bundled license information:

@lit/reactive-element/decorators/query.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/
/*! Bundled license information:

@lit/reactive-element/decorators/state.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/
