function _t(t,e){return t+e}var F=globalThis,J=F.ShadowRoot&&(F.ShadyCSS===void 0||F.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,st=Symbol(),yt=new WeakMap,it=class{constructor(t,e,s){if(this._$cssResult$=!0,s!==st)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o,e=this.t;if(J&&t===void 0){let s=e!==void 0&&e.length===1;s&&(t=yt.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&yt.set(e,t))}return t}toString(){return this.cssText}},$t=t=>new it(typeof t=="string"?t:t+"",void 0,st),rt=(t,...e)=>{let s=t.length===1?t[0]:e.reduce((i,r,o)=>i+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+t[o+1],t[0]);return new it(s,t,st)},bt=(t,e)=>{if(J)t.adoptedStyleSheets=e.map(s=>s instanceof CSSStyleSheet?s:s.styleSheet);else for(let s of e){let i=document.createElement("style"),r=F.litNonce;r!==void 0&&i.setAttribute("nonce",r),i.textContent=s.cssText,t.appendChild(i)}},at=J?t=>t:t=>t instanceof CSSStyleSheet?(e=>{let s="";for(let i of e.cssRules)s+=i.cssText;return $t(s)})(t):t;var{is:ae,defineProperty:oe,getOwnPropertyDescriptor:ne,getOwnPropertyNames:le,getOwnPropertySymbols:he,getPrototypeOf:ce}=Object,Z=globalThis,At=Z.trustedTypes,de=At?At.emptyScript:"",ue=Z.reactiveElementPolyfillSupport,V=(t,e)=>t,q={toAttribute(t,e){switch(e){case Boolean:t=t?de:null;break;case Object:case Array:t=t==null?t:JSON.stringify(t)}return t},fromAttribute(t,e){let s=t;switch(e){case Boolean:s=t!==null;break;case Number:s=t===null?null:Number(t);break;case Object:case Array:try{s=JSON.parse(t)}catch{s=null}}return s}},G=(t,e)=>!ae(t,e),xt={attribute:!0,type:String,converter:q,reflect:!1,useDefault:!1,hasChanged:G};Symbol.metadata??=Symbol("metadata"),Z.litPropertyMetadata??=new WeakMap;var U=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=xt){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){let s=Symbol(),i=this.getPropertyDescriptor(t,s,e);i!==void 0&&oe(this.prototype,t,i)}}static getPropertyDescriptor(t,e,s){let{get:i,set:r}=ne(this.prototype,t)??{get(){return this[e]},set(o){this[e]=o}};return{get:i,set(o){let n=i?.call(this);r?.call(this,o),this.requestUpdate(t,n,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??xt}static _$Ei(){if(this.hasOwnProperty(V("elementProperties")))return;let t=ce(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(V("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(V("properties"))){let e=this.properties,s=[...le(e),...he(e)];for(let i of s)this.createProperty(i,e[i])}let t=this[Symbol.metadata];if(t!==null){let e=litPropertyMetadata.get(t);if(e!==void 0)for(let[s,i]of e)this.elementProperties.set(s,i)}this._$Eh=new Map;for(let[e,s]of this.elementProperties){let i=this._$Eu(e,s);i!==void 0&&this._$Eh.set(i,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){let e=[];if(Array.isArray(t)){let s=new Set(t.flat(1/0).reverse());for(let i of s)e.unshift(at(i))}else t!==void 0&&e.push(at(t));return e}static _$Eu(t,e){let s=e.attribute;return s===!1?void 0:typeof s=="string"?s:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){let t=new Map,e=this.constructor.elementProperties;for(let s of e.keys())this.hasOwnProperty(s)&&(t.set(s,this[s]),delete this[s]);t.size>0&&(this._$Ep=t)}createRenderRoot(){let t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return bt(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$ET(t,e){let s=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,s);if(i!==void 0&&s.reflect===!0){let r=(s.converter?.toAttribute!==void 0?s.converter:q).toAttribute(e,s.type);this._$Em=t,r==null?this.removeAttribute(i):this.setAttribute(i,r),this._$Em=null}}_$AK(t,e){let s=this.constructor,i=s._$Eh.get(t);if(i!==void 0&&this._$Em!==i){let r=s.getPropertyOptions(i),o=typeof r.converter=="function"?{fromAttribute:r.converter}:r.converter?.fromAttribute!==void 0?r.converter:q;this._$Em=i;let n=o.fromAttribute(e,r.type);this[i]=n??this._$Ej?.get(i)??n,this._$Em=null}}requestUpdate(t,e,s){if(t!==void 0){let i=this.constructor,r=this[t];if(s??=i.getPropertyOptions(t),!((s.hasChanged??G)(r,e)||s.useDefault&&s.reflect&&r===this._$Ej?.get(t)&&!this.hasAttribute(i._$Eu(t,s))))return;this.C(t,e,s)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,e,{useDefault:s,reflect:i,wrapped:r},o){s&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,o??e??this[t]),r!==!0||o!==void 0)||(this._$AL.has(t)||(this.hasUpdated||s||(e=void 0),this._$AL.set(t,e)),i===!0&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[i,r]of this._$Ep)this[i]=r;this._$Ep=void 0}let s=this.constructor.elementProperties;if(s.size>0)for(let[i,r]of s){let{wrapped:o}=r,n=this[i];o!==!0||this._$AL.has(i)||n===void 0||this.C(i,void 0,r,n)}}let t=!1,e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(s=>s.hostUpdate?.()),this.update(e)):this._$EM()}catch(s){throw t=!1,this._$EM(),s}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(t){}firstUpdated(t){}};U.elementStyles=[],U.shadowRootOptions={mode:"open"},U[V("elementProperties")]=new Map,U[V("finalized")]=new Map,ue?.({ReactiveElement:U}),(Z.reactiveElementVersions??=[]).push("2.1.1");var lt=globalThis,K=lt.trustedTypes,St=K?K.createPolicy("lit-html",{createHTML:t=>t}):void 0,Tt="$lit$",M=`lit$${Math.random().toFixed(9).slice(2)}$`,Ut="?"+M,pe=`<${Ut}>`,H=document,B=()=>H.createComment(""),W=t=>t===null||typeof t!="object"&&typeof t!="function",ht=Array.isArray,me=t=>ht(t)||typeof t?.[Symbol.iterator]=="function",ot=`[ 	
\f\r]`,k=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Et=/-->/g,Ct=/>/g,O=RegExp(`>|${ot}(?:([^\\s"'>=/]+)(${ot}*=${ot}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),wt=/'/g,Mt=/"/g,Ot=/^(?:script|style|textarea|title)$/i,ct=t=>(e,...s)=>({_$litType$:t,strings:e,values:s}),Y=ct(1),Ie=ct(2),je=ct(3),L=Symbol.for("lit-noChange"),$=Symbol.for("lit-nothing"),Pt=new WeakMap,R=H.createTreeWalker(H,129);function Rt(t,e){if(!ht(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return St!==void 0?St.createHTML(e):e}var fe=(t,e)=>{let s=t.length-1,i=[],r,o=e===2?"<svg>":e===3?"<math>":"",n=k;for(let c=0;c<s;c++){let m=t[c],P,h,a=-1,u=0;for(;u<m.length&&(n.lastIndex=u,h=n.exec(m),h!==null);)u=n.lastIndex,n===k?h[1]==="!--"?n=Et:h[1]!==void 0?n=Ct:h[2]!==void 0?(Ot.test(h[2])&&(r=RegExp("</"+h[2],"g")),n=O):h[3]!==void 0&&(n=O):n===O?h[0]===">"?(n=r??k,a=-1):h[1]===void 0?a=-2:(a=n.lastIndex-h[2].length,P=h[1],n=h[3]===void 0?O:h[3]==='"'?Mt:wt):n===Mt||n===wt?n=O:n===Et||n===Ct?n=k:(n=O,r=void 0);let d=n===O&&t[c+1].startsWith("/>")?" ":"";o+=n===k?m+pe:a>=0?(i.push(P),m.slice(0,a)+Tt+m.slice(a)+M+d):m+M+(a===-2?c:d)}return[Rt(t,o+(t[s]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),i]},nt=class Ht{constructor({strings:e,_$litType$:s},i){let r;this.parts=[];let o=0,n=0,c=e.length-1,m=this.parts,[P,h]=fe(e,s);if(this.el=Ht.createElement(P,i),R.currentNode=this.el.content,s===2||s===3){let a=this.el.content.firstChild;a.replaceWith(...a.childNodes)}for(;(r=R.nextNode())!==null&&m.length<c;){if(r.nodeType===1){if(r.hasAttributes())for(let a of r.getAttributeNames())if(a.endsWith(Tt)){let u=h[n++],d=r.getAttribute(a).split(M),l=/([.?@])?(.*)/.exec(u);m.push({type:1,index:o,name:l[2],strings:d,ctor:l[1]==="."?ve:l[1]==="?"?_e:l[1]==="@"?ye:Q}),r.removeAttribute(a)}else a.startsWith(M)&&(m.push({type:6,index:o}),r.removeAttribute(a));if(Ot.test(r.tagName)){let a=r.textContent.split(M),u=a.length-1;if(u>0){r.textContent=K?K.emptyScript:"";for(let d=0;d<u;d++)r.append(a[d],B()),R.nextNode(),m.push({type:2,index:++o});r.append(a[u],B())}}}else if(r.nodeType===8)if(r.data===Ut)m.push({type:2,index:o});else{let a=-1;for(;(a=r.data.indexOf(M,a+1))!==-1;)m.push({type:7,index:o}),a+=M.length-1}o++}}static createElement(e,s){let i=H.createElement("template");return i.innerHTML=e,i}};function D(t,e,s=t,i){if(e===L)return e;let r=i!==void 0?s._$Co?.[i]:s._$Cl,o=W(e)?void 0:e._$litDirective$;return r?.constructor!==o&&(r?._$AO?.(!1),o===void 0?r=void 0:(r=new o(t),r._$AT(t,s,i)),i!==void 0?(s._$Co??=[])[i]=r:s._$Cl=r),r!==void 0&&(e=D(t,r._$AS(t,e.values),r,i)),e}var ge=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){let{el:{content:e},parts:s}=this._$AD,i=(t?.creationScope??H).importNode(e,!0);R.currentNode=i;let r=R.nextNode(),o=0,n=0,c=s[0];for(;c!==void 0;){if(o===c.index){let m;c.type===2?m=new dt(r,r.nextSibling,this,t):c.type===1?m=new c.ctor(r,c.name,c.strings,this,t):c.type===6&&(m=new $e(r,this,t)),this._$AV.push(m),c=s[++n]}o!==c?.index&&(r=R.nextNode(),o++)}return R.currentNode=H,i}p(t){let e=0;for(let s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}},dt=class Lt{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,s,i,r){this.type=2,this._$AH=$,this._$AN=void 0,this._$AA=e,this._$AB=s,this._$AM=i,this.options=r,this._$Cv=r?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,s=this._$AM;return s!==void 0&&e?.nodeType===11&&(e=s.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,s=this){e=D(this,e,s),W(e)?e===$||e==null||e===""?(this._$AH!==$&&this._$AR(),this._$AH=$):e!==this._$AH&&e!==L&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):me(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==$&&W(this._$AH)?this._$AA.nextSibling.data=e:this.T(H.createTextNode(e)),this._$AH=e}$(e){let{values:s,_$litType$:i}=e,r=typeof i=="number"?this._$AC(e):(i.el===void 0&&(i.el=nt.createElement(Rt(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===r)this._$AH.p(s);else{let o=new ge(r,this),n=o.u(this.options);o.p(s),this.T(n),this._$AH=o}}_$AC(e){let s=Pt.get(e.strings);return s===void 0&&Pt.set(e.strings,s=new nt(e)),s}k(e){ht(this._$AH)||(this._$AH=[],this._$AR());let s=this._$AH,i,r=0;for(let o of e)r===s.length?s.push(i=new Lt(this.O(B()),this.O(B()),this,this.options)):i=s[r],i._$AI(o),r++;r<s.length&&(this._$AR(i&&i._$AB.nextSibling,r),s.length=r)}_$AR(e=this._$AA.nextSibling,s){for(this._$AP?.(!1,!0,s);e!==this._$AB;){let i=e.nextSibling;e.remove(),e=i}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},Q=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,s,i,r){this.type=1,this._$AH=$,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=r,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=$}_$AI(t,e=this,s,i){let r=this.strings,o=!1;if(r===void 0)t=D(this,t,e,0),o=!W(t)||t!==this._$AH&&t!==L,o&&(this._$AH=t);else{let n=t,c,m;for(t=r[0],c=0;c<r.length-1;c++)m=D(this,n[s+c],e,c),m===L&&(m=this._$AH[c]),o||=!W(m)||m!==this._$AH[c],m===$?t=$:t!==$&&(t+=(m??"")+r[c+1]),this._$AH[c]=m}o&&!i&&this.j(t)}j(t){t===$?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},ve=class extends Q{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===$?void 0:t}},_e=class extends Q{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==$)}},ye=class extends Q{constructor(t,e,s,i,r){super(t,e,s,i,r),this.type=5}_$AI(t,e=this){if((t=D(this,t,e,0)??$)===L)return;let s=this._$AH,i=t===$&&s!==$||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,r=t!==$&&(s===$||i);i&&this.element.removeEventListener(this.name,this,s),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}},$e=class{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){D(this,t)}};var be=lt.litHtmlPolyfillSupport;be?.(nt,dt),(lt.litHtmlVersions??=[]).push("3.3.1");var Nt=(t,e,s)=>{let i=s?.renderBefore??e,r=i._$litPart$;if(r===void 0){let o=s?.renderBefore??null;i._$litPart$=r=new dt(e.insertBefore(B(),o),o,void 0,s??{})}return r._$AI(t),r};var ut=globalThis,N=class extends U{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){let e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Nt(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return L}};N._$litElement$=!0,N.finalized=!0,ut.litElementHydrateSupport?.({LitElement:N});var Ae=ut.litElementPolyfillSupport;Ae?.({LitElement:N});(ut.litElementVersions??=[]).push("4.2.1");var pt=t=>(e,s)=>{s!==void 0?s.addInitializer(()=>{customElements.define(t,e)}):customElements.define(t,e)};var xe={attribute:!0,type:String,converter:q,reflect:!1,hasChanged:G},Se=(t=xe,e,s)=>{let{kind:i,metadata:r}=s,o=globalThis.litPropertyMetadata.get(r);if(o===void 0&&globalThis.litPropertyMetadata.set(r,o=new Map),i==="setter"&&((t=Object.create(t)).wrapped=!0),o.set(s.name,t),i==="accessor"){let{name:n}=s;return{set(c){let m=e.get.call(this);e.set.call(this,c),this.requestUpdate(n,m,t)},init(c){return c!==void 0&&this.C(n,void 0,t,c),c}}}if(i==="setter"){let{name:n}=s;return function(c){let m=this[n];e.call(this,c),this.requestUpdate(n,m,t)}}throw Error("Unsupported decorator location: "+i)};function z(t){return(e,s)=>typeof s=="object"?Se(t,e,s):((i,r,o)=>{let n=r.hasOwnProperty(o);return r.constructor.createProperty(o,i),n?Object.getOwnPropertyDescriptor(r,o):void 0})(t,e,s)}function mt(t){return z({...t,state:!0,attribute:!1})}function Ee(){function t(h,a){return function(d){s(a,"addInitializer"),i(d,"An initializer"),h.push(d)}}function e(h,a,u,d,l,b,y,S,A){var _;switch(l){case 1:_="accessor";break;case 2:_="method";break;case 3:_="getter";break;case 4:_="setter";break;default:_="field"}var f={kind:_,name:y?"#"+a:a,static:b,private:y,metadata:S},v={v:!1};f.addInitializer=t(d,v);var p,g;l===0?y?(p=u.get,g=u.set):(p=function(){return this[a]},g=function(x){this[a]=x}):l===2?p=function(){return u.value}:((l===1||l===3)&&(p=function(){return u.get.call(this)}),(l===1||l===4)&&(g=function(x){u.set.call(this,x)})),f.access=p&&g?{get:p,set:g}:p?{get:p}:{set:g};try{return h(A,f)}finally{v.v=!0}}function s(h,a){if(h.v)throw new Error("attempted to call "+a+" after decoration was finished")}function i(h,a){if(typeof h!="function")throw new TypeError(a+" must be a function")}function r(h,a){var u=typeof a;if(h===1){if(u!=="object"||a===null)throw new TypeError("accessor decorators must return an object with get, set, or init properties or void 0");a.get!==void 0&&i(a.get,"accessor.get"),a.set!==void 0&&i(a.set,"accessor.set"),a.init!==void 0&&i(a.init,"accessor.init")}else if(u!=="function"){var d;throw h===0?d="field":h===10?d="class":d="method",new TypeError(d+" decorators must return a function or void 0")}}function o(h,a,u,d,l,b,y,S,A){var _=u[0],f,v,p;y?l===0||l===1?f={get:u[3],set:u[4]}:l===3?f={get:u[3]}:l===4?f={set:u[3]}:f={value:u[3]}:l!==0&&(f=Object.getOwnPropertyDescriptor(a,d)),l===1?p={get:f.get,set:f.set}:l===2?p=f.value:l===3?p=f.get:l===4&&(p=f.set);var g,x,w;if(typeof _=="function")g=e(_,d,f,S,l,b,y,A,p),g!==void 0&&(r(l,g),l===0?v=g:l===1?(v=g.init,x=g.get||p.get,w=g.set||p.set,p={get:x,set:w}):p=g);else for(var T=_.length-1;T>=0;T--){var I=_[T];if(g=e(I,d,f,S,l,b,y,A,p),g!==void 0){r(l,g);var j;l===0?j=g:l===1?(j=g.init,x=g.get||p.get,w=g.set||p.set,p={get:x,set:w}):p=g,j!==void 0&&(v===void 0?v=j:typeof v=="function"?v=[v,j]:v.push(j))}}if(l===0||l===1){if(v===void 0)v=function(C,E){return E};else if(typeof v!="function"){var vt=v;v=function(C,E){for(var tt=E,et=0;et<vt.length;et++)tt=vt[et].call(C,tt);return tt}}else{var re=v;v=function(C,E){return re.call(C,E)}}h.push(v)}l!==0&&(l===1?(f.get=p.get,f.set=p.set):l===2?f.value=p:l===3?f.get=p:l===4&&(f.set=p),y?l===1?(h.push(function(C,E){return p.get.call(C,E)}),h.push(function(C,E){return p.set.call(C,E)})):l===2?h.push(p):h.push(function(C,E){return p.call(C,E)}):Object.defineProperty(a,d,f))}function n(h,a,u){for(var d=[],l,b,y=new Map,S=new Map,A=0;A<a.length;A++){var _=a[A];if(Array.isArray(_)){var f=_[1],v=_[2],p=_.length>3,g=f>=5,x,w;if(g?(x=h,f=f-5,b=b||[],w=b):(x=h.prototype,l=l||[],w=l),f!==0&&!p){var T=g?S:y,I=T.get(v)||0;if(I===!0||I===3&&f!==4||I===4&&f!==3)throw new Error("Attempted to decorate a public method/accessor that has the same name as a previously decorated public method/accessor. This is not currently supported by the decorators plugin. Property name was: "+v);!I&&f>2?T.set(v,f):T.set(v,!0)}o(d,x,_,v,f,g,p,w,u)}}return c(d,l),c(d,b),d}function c(h,a){a&&h.push(function(u){for(var d=0;d<a.length;d++)a[d].call(u);return u})}function m(h,a,u){if(a.length>0){for(var d=[],l=h,b=h.name,y=a.length-1;y>=0;y--){var S={v:!1};try{var A=a[y](l,{kind:"class",name:b,addInitializer:t(d,S),metadata:u})}finally{S.v=!0}A!==void 0&&(r(10,A),l=A)}return[P(l,u),function(){for(var _=0;_<d.length;_++)d[_].call(l)}]}}function P(h,a){return Object.defineProperty(h,Symbol.metadata||Symbol.for("Symbol.metadata"),{configurable:!0,enumerable:!0,value:a})}return function(a,u,d,l){if(l!==void 0)var b=l[Symbol.metadata||Symbol.for("Symbol.metadata")];var y=Object.create(b===void 0?null:b),S=n(a,u,y);return d.length||P(a,y),{e:S,get c(){return m(a,d,y)}}}}function gt(t,e,s,i){return(gt=Ee())(t,e,s,i)}function Ce(t){return t}var Kt,zt,It,Yt,Qt,Xt,te,ee,se,jt,Dt,Vt,qt,kt,Bt,Wt,ie,Ft,Jt,ft=class{state;autoTimer;changeCallbacks=[];constructor(e=0){this.state={value:e,min:-50,max:100,stepSize:1,autoInterval:500,mode:"manual",history:[e]}}getState(){return{...this.state}}increment(){return this.changeValue(this.state.value+this.state.stepSize)}decrement(){return this.changeValue(this.state.value-this.state.stepSize)}reset(){this.changeValue(0),this.state.history=[0],this.notifyChange()}setStepSize(e){this.state.stepSize=Math.max(1,e),this.notifyChange()}setBounds(e,s){this.state.min=e,this.state.max=s,this.changeValue(Math.max(e,Math.min(s,this.state.value)))}toggleMode(){this.state.mode=this.state.mode==="manual"?"auto":"manual",this.state.mode==="auto"?this.startAutoIncrement():this.stopAutoIncrement(),this.notifyChange()}setAutoInterval(e){this.state.autoInterval=Math.max(100,e),this.state.mode==="auto"&&(this.stopAutoIncrement(),this.startAutoIncrement()),this.notifyChange()}getStatistics(){let e=this.state.history;return{total:e.reduce((s,i)=>_t(s,i),0),average:e.length>0?e.reduce((s,i)=>s+i,0)/e.length:0,changes:e.length-1,peak:Math.max(...e),valley:Math.min(...e)}}undo(){return this.state.history.length>1?(this.state.history.pop(),this.state.value=this.state.history[this.state.history.length-1],this.notifyChange(),!0):!1}onStateChange(e){this.changeCallbacks.push(e)}dispose(){this.stopAutoIncrement(),this.changeCallbacks=[]}changeValue(e){let s=Math.max(this.state.min,Math.min(this.state.max,e));return s!==this.state.value?(this.state.value=s,this.state.history.push(s),this.state.history.length>100&&(this.state.history=this.state.history.slice(-50)),this.notifyChange(),!0):!1}startAutoIncrement(){this.autoTimer=setInterval(()=>{this.increment()},this.state.autoInterval)}stopAutoIncrement(){this.autoTimer&&(clearInterval(this.autoTimer),this.autoTimer=void 0)}notifyChange(){this.changeCallbacks.forEach(e=>e(this.getState()))}},Zt;Kt=pt("advanced-counter"),Yt=z({attribute:"comp-title",type:String}),Qt=z({attribute:"theme",type:String}),Xt=z({attribute:"disabled",type:Boolean,reflect:!0}),te=z({attribute:"initial-value",type:Number}),ee=mt(),se=mt();new class extends Ce{constructor(){super(Zt),zt()}static{class t extends(It=N){static{({e:[jt,Dt,Vt,qt,kt,Bt,Wt],c:[Zt,zt]}=gt(this,[[Yt,1,"compTitle"],[Qt,1,"theme"],[Xt,1,"disabled"],[te,1,"initialValue"],[ee,1,"state"],[se,1,"stats"]],[Kt],It))}counterLogic;#t=(Wt(this),jt(this,"Advanced Counter"));get compTitle(){return this.#t}set compTitle(s){this.#t=s}#e=Dt(this,"light");get theme(){return this.#e}set theme(s){this.#e=s}#s=Vt(this,!1);get disabled(){return this.#s}set disabled(s){this.#s=s}#i=qt(this,0);get initialValue(){return this.#i}set initialValue(s){this.#i=s}#r=kt(this);get state(){return this.#r}set state(s){this.#r=s}#a=Bt(this);get stats(){return this.#a}set stats(s){this.#a=s}static styles=rt`
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
  `;connectedCallback(){super.connectedCallback(),this.counterLogic=new ft,this.state=this.counterLogic.getState(),this.stats=this.counterLogic.getStatistics(),this.counterLogic.onStateChange(s=>{this.state=s,this.stats=this.counterLogic.getStatistics(),this.requestUpdate(),this.dispatchEvent(new CustomEvent("counter-changed",{detail:{value:s.value,stats:this.stats},bubbles:!0}))})}disconnectedCallback(){super.disconnectedCallback(),this.counterLogic.dispose()}handleIncrement(){this.counterLogic.increment()}handleDecrement(){this.counterLogic.decrement()}handleReset(){this.counterLogic.reset()}handleUndo(){this.counterLogic.undo()}handleModeToggle(){this.counterLogic.toggleMode()}handleStepChange(s){let i=s.target;this.counterLogic.setStepSize(parseInt(i.value)||1)}handleIntervalChange(s){let i=s.target;this.counterLogic.setAutoInterval(parseInt(i.value)||500)}handleMinChange(s){let i=s.target,r=parseInt(i.value)||-50;this.counterLogic.setBounds(r,this.state.max)}handleMaxChange(s){let i=s.target,r=parseInt(i.value)||100;this.counterLogic.setBounds(this.state.min,r)}render(){let s=this.state.value<=this.state.min,i=this.state.value>=this.state.max;return Y`
      <h2>${this.compTitle}</h2>
      <div class="counter-display">
        <div class="counter-mode ${this.state.mode==="auto"?"mode-auto":"mode-manual"}">
          ${this.state.mode} mode
        </div>
        <div class="counter-value">${this.state.value}</div>
        <div class="bounds-indicator">
          Range: ${this.state.min} to ${this.state.max} ${s||i?Y`
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
    `}}}};var we;ie=pt("counter-wrapper");var Gt=class extends(Jt=N){static{({c:[we,Ft]}=gt(this,[],[ie],Jt))}render(){return Y`
      <advanced-counter comp-title="Howdy"></advanced-counter>
    `}static{Ft()}};export{_t as add};
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
