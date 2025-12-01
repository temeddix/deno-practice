function bt(t,e){return t+e}var J=globalThis,Z=J.ShadowRoot&&(J.ShadyCSS===void 0||J.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,ot=Symbol(),yt=new WeakMap,at=class{constructor(t,e,s){if(this._$cssResult$=!0,s!==ot)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o,e=this.t;if(Z&&t===void 0){let s=e!==void 0&&e.length===1;s&&(t=yt.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&yt.set(e,t))}return t}toString(){return this.cssText}},_t=t=>new at(typeof t=="string"?t:t+"",void 0,ot),G=(t,...e)=>{let s=t.length===1?t[0]:e.reduce((r,i,a)=>r+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[a+1],t[0]);return new at(s,t,ot)},$t=(t,e)=>{if(Z)t.adoptedStyleSheets=e.map(s=>s instanceof CSSStyleSheet?s:s.styleSheet);else for(let s of e){let r=document.createElement("style"),i=J.litNonce;i!==void 0&&r.setAttribute("nonce",i),r.textContent=s.cssText,t.appendChild(r)}},nt=Z?t=>t:t=>t instanceof CSSStyleSheet?(e=>{let s="";for(let r of e.cssRules)s+=r.cssText;return _t(s)})(t):t;var{is:ce,defineProperty:de,getOwnPropertyDescriptor:pe,getOwnPropertyNames:ue,getOwnPropertySymbols:fe,getPrototypeOf:me}=Object,K=globalThis,xt=K.trustedTypes,ge=xt?xt.emptyScript:"",ve=K.reactiveElementPolyfillSupport,D=(t,e)=>t,V={toAttribute(t,e){switch(e){case Boolean:t=t?ge:null;break;case Object:case Array:t=t==null?t:JSON.stringify(t)}return t},fromAttribute(t,e){let s=t;switch(e){case Boolean:s=t!==null;break;case Number:s=t===null?null:Number(t);break;case Object:case Array:try{s=JSON.parse(t)}catch{s=null}}return s}},Y=(t,e)=>!ce(t,e),At={attribute:!0,type:String,converter:V,reflect:!1,useDefault:!1,hasChanged:Y};Symbol.metadata??=Symbol("metadata"),K.litPropertyMetadata??=new WeakMap;var R=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=At){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){let s=Symbol(),r=this.getPropertyDescriptor(t,s,e);r!==void 0&&de(this.prototype,t,r)}}static getPropertyDescriptor(t,e,s){let{get:r,set:i}=pe(this.prototype,t)??{get(){return this[e]},set(a){this[e]=a}};return{get:r,set(a){let n=r?.call(this);i?.call(this,a),this.requestUpdate(t,n,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??At}static _$Ei(){if(this.hasOwnProperty(D("elementProperties")))return;let t=me(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(D("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(D("properties"))){let e=this.properties,s=[...ue(e),...fe(e)];for(let r of s)this.createProperty(r,e[r])}let t=this[Symbol.metadata];if(t!==null){let e=litPropertyMetadata.get(t);if(e!==void 0)for(let[s,r]of e)this.elementProperties.set(s,r)}this._$Eh=new Map;for(let[e,s]of this.elementProperties){let r=this._$Eu(e,s);r!==void 0&&this._$Eh.set(r,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){let e=[];if(Array.isArray(t)){let s=new Set(t.flat(1/0).reverse());for(let r of s)e.unshift(nt(r))}else t!==void 0&&e.push(nt(t));return e}static _$Eu(t,e){let s=e.attribute;return s===!1?void 0:typeof s=="string"?s:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){let t=new Map,e=this.constructor.elementProperties;for(let s of e.keys())this.hasOwnProperty(s)&&(t.set(s,this[s]),delete this[s]);t.size>0&&(this._$Ep=t)}createRenderRoot(){let t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return $t(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$ET(t,e){let s=this.constructor.elementProperties.get(t),r=this.constructor._$Eu(t,s);if(r!==void 0&&s.reflect===!0){let i=(s.converter?.toAttribute!==void 0?s.converter:V).toAttribute(e,s.type);this._$Em=t,i==null?this.removeAttribute(r):this.setAttribute(r,i),this._$Em=null}}_$AK(t,e){let s=this.constructor,r=s._$Eh.get(t);if(r!==void 0&&this._$Em!==r){let i=s.getPropertyOptions(r),a=typeof i.converter=="function"?{fromAttribute:i.converter}:i.converter?.fromAttribute!==void 0?i.converter:V;this._$Em=r;let n=a.fromAttribute(e,i.type);this[r]=n??this._$Ej?.get(r)??n,this._$Em=null}}requestUpdate(t,e,s){if(t!==void 0){let r=this.constructor,i=this[t];if(s??=r.getPropertyOptions(t),!((s.hasChanged??Y)(i,e)||s.useDefault&&s.reflect&&i===this._$Ej?.get(t)&&!this.hasAttribute(r._$Eu(t,s))))return;this.C(t,e,s)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,e,{useDefault:s,reflect:r,wrapped:i},a){s&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,a??e??this[t]),i!==!0||a!==void 0)||(this._$AL.has(t)||(this.hasUpdated||s||(e=void 0),this._$AL.set(t,e)),r===!0&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[r,i]of this._$Ep)this[r]=i;this._$Ep=void 0}let s=this.constructor.elementProperties;if(s.size>0)for(let[r,i]of s){let{wrapped:a}=i,n=this[r];a!==!0||this._$AL.has(r)||n===void 0||this.C(r,void 0,i,n)}}let t=!1,e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(s=>s.hostUpdate?.()),this.update(e)):this._$EM()}catch(s){throw t=!1,this._$EM(),s}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(t){}firstUpdated(t){}};R.elementStyles=[],R.shadowRootOptions={mode:"open"},R[D("elementProperties")]=new Map,R[D("finalized")]=new Map,ve?.({ReactiveElement:R}),(K.reactiveElementVersions??=[]).push("2.1.1");var ct=globalThis,Q=ct.trustedTypes,St=Q?Q.createPolicy("lit-html",{createHTML:t=>t}):void 0,Tt="$lit$",M=`lit$${Math.random().toFixed(9).slice(2)}$`,Ut="?"+M,be=`<${Ut}>`,H=document,B=()=>H.createComment(""),W=t=>t===null||typeof t!="object"&&typeof t!="function",dt=Array.isArray,ye=t=>dt(t)||typeof t?.[Symbol.iterator]=="function",lt=`[ 	
\f\r]`,q=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Et=/-->/g,wt=/>/g,O=RegExp(`>|${lt}(?:([^\\s"'>=/]+)(${lt}*=${lt}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Ct=/'/g,Mt=/"/g,Rt=/^(?:script|style|textarea|title)$/i,pt=t=>(e,...s)=>({_$litType$:t,strings:e,values:s}),F=pt(1),Ve=pt(2),qe=pt(3),L=Symbol.for("lit-noChange"),_=Symbol.for("lit-nothing"),Pt=new WeakMap,k=H.createTreeWalker(H,129);function Ot(t,e){if(!dt(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return St!==void 0?St.createHTML(e):e}var _e=(t,e)=>{let s=t.length-1,r=[],i,a=e===2?"<svg>":e===3?"<math>":"",n=q;for(let c=0;c<s;c++){let f=t[c],T,h,o=-1,p=0;for(;p<f.length&&(n.lastIndex=p,h=n.exec(f),h!==null);)p=n.lastIndex,n===q?h[1]==="!--"?n=Et:h[1]!==void 0?n=wt:h[2]!==void 0?(Rt.test(h[2])&&(i=RegExp("</"+h[2],"g")),n=O):h[3]!==void 0&&(n=O):n===O?h[0]===">"?(n=i??q,o=-1):h[1]===void 0?o=-2:(o=n.lastIndex-h[2].length,T=h[1],n=h[3]===void 0?O:h[3]==='"'?Mt:Ct):n===Mt||n===Ct?n=O:n===Et||n===wt?n=q:(n=O,i=void 0);let d=n===O&&t[c+1].startsWith("/>")?" ":"";a+=n===q?f+be:o>=0?(r.push(T),f.slice(0,o)+Tt+f.slice(o)+M+d):f+M+(o===-2?c:d)}return[Ot(t,a+(t[s]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),r]},ht=class kt{constructor({strings:e,_$litType$:s},r){let i;this.parts=[];let a=0,n=0,c=e.length-1,f=this.parts,[T,h]=_e(e,s);if(this.el=kt.createElement(T,r),k.currentNode=this.el.content,s===2||s===3){let o=this.el.content.firstChild;o.replaceWith(...o.childNodes)}for(;(i=k.nextNode())!==null&&f.length<c;){if(i.nodeType===1){if(i.hasAttributes())for(let o of i.getAttributeNames())if(o.endsWith(Tt)){let p=h[n++],d=i.getAttribute(o).split(M),l=/([.?@])?(.*)/.exec(p);f.push({type:1,index:a,name:l[2],strings:d,ctor:l[1]==="."?xe:l[1]==="?"?Ae:l[1]==="@"?Se:X}),i.removeAttribute(o)}else o.startsWith(M)&&(f.push({type:6,index:a}),i.removeAttribute(o));if(Rt.test(i.tagName)){let o=i.textContent.split(M),p=o.length-1;if(p>0){i.textContent=Q?Q.emptyScript:"";for(let d=0;d<p;d++)i.append(o[d],B()),k.nextNode(),f.push({type:2,index:++a});i.append(o[p],B())}}}else if(i.nodeType===8)if(i.data===Ut)f.push({type:2,index:a});else{let o=-1;for(;(o=i.data.indexOf(M,o+1))!==-1;)f.push({type:7,index:a}),o+=M.length-1}a++}}static createElement(e,s){let r=H.createElement("template");return r.innerHTML=e,r}};function j(t,e,s=t,r){if(e===L)return e;let i=r!==void 0?s._$Co?.[r]:s._$Cl,a=W(e)?void 0:e._$litDirective$;return i?.constructor!==a&&(i?._$AO?.(!1),a===void 0?i=void 0:(i=new a(t),i._$AT(t,s,r)),r!==void 0?(s._$Co??=[])[r]=i:s._$Cl=i),i!==void 0&&(e=j(t,i._$AS(t,e.values),i,r)),e}var $e=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){let{el:{content:e},parts:s}=this._$AD,r=(t?.creationScope??H).importNode(e,!0);k.currentNode=r;let i=k.nextNode(),a=0,n=0,c=s[0];for(;c!==void 0;){if(a===c.index){let f;c.type===2?f=new ut(i,i.nextSibling,this,t):c.type===1?f=new c.ctor(i,c.name,c.strings,this,t):c.type===6&&(f=new Ee(i,this,t)),this._$AV.push(f),c=s[++n]}a!==c?.index&&(i=k.nextNode(),a++)}return k.currentNode=H,r}p(t){let e=0;for(let s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}},ut=class Ht{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,s,r,i){this.type=2,this._$AH=_,this._$AN=void 0,this._$AA=e,this._$AB=s,this._$AM=r,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,s=this._$AM;return s!==void 0&&e?.nodeType===11&&(e=s.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,s=this){e=j(this,e,s),W(e)?e===_||e==null||e===""?(this._$AH!==_&&this._$AR(),this._$AH=_):e!==this._$AH&&e!==L&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):ye(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==_&&W(this._$AH)?this._$AA.nextSibling.data=e:this.T(H.createTextNode(e)),this._$AH=e}$(e){let{values:s,_$litType$:r}=e,i=typeof r=="number"?this._$AC(e):(r.el===void 0&&(r.el=ht.createElement(Ot(r.h,r.h[0]),this.options)),r);if(this._$AH?._$AD===i)this._$AH.p(s);else{let a=new $e(i,this),n=a.u(this.options);a.p(s),this.T(n),this._$AH=a}}_$AC(e){let s=Pt.get(e.strings);return s===void 0&&Pt.set(e.strings,s=new ht(e)),s}k(e){dt(this._$AH)||(this._$AH=[],this._$AR());let s=this._$AH,r,i=0;for(let a of e)i===s.length?s.push(r=new Ht(this.O(B()),this.O(B()),this,this.options)):r=s[i],r._$AI(a),i++;i<s.length&&(this._$AR(r&&r._$AB.nextSibling,i),s.length=i)}_$AR(e=this._$AA.nextSibling,s){for(this._$AP?.(!1,!0,s);e!==this._$AB;){let r=e.nextSibling;e.remove(),e=r}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},X=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,s,r,i){this.type=1,this._$AH=_,this._$AN=void 0,this.element=t,this.name=e,this._$AM=r,this.options=i,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=_}_$AI(t,e=this,s,r){let i=this.strings,a=!1;if(i===void 0)t=j(this,t,e,0),a=!W(t)||t!==this._$AH&&t!==L,a&&(this._$AH=t);else{let n=t,c,f;for(t=i[0],c=0;c<i.length-1;c++)f=j(this,n[s+c],e,c),f===L&&(f=this._$AH[c]),a||=!W(f)||f!==this._$AH[c],f===_?t=_:t!==_&&(t+=(f??"")+i[c+1]),this._$AH[c]=f}a&&!r&&this.j(t)}j(t){t===_?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},xe=class extends X{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===_?void 0:t}},Ae=class extends X{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==_)}},Se=class extends X{constructor(t,e,s,r,i){super(t,e,s,r,i),this.type=5}_$AI(t,e=this){if((t=j(this,t,e,0)??_)===L)return;let s=this._$AH,r=t===_&&s!==_||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,i=t!==_&&(s===_||r);r&&this.element.removeEventListener(this.name,this,s),i&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}},Ee=class{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){j(this,t)}};var we=ct.litHtmlPolyfillSupport;we?.(ht,ut),(ct.litHtmlVersions??=[]).push("3.3.1");var Lt=(t,e,s)=>{let r=s?.renderBefore??e,i=r._$litPart$;if(i===void 0){let a=s?.renderBefore??null;r._$litPart$=i=new ut(e.insertBefore(B(),a),a,void 0,s??{})}return i._$AI(t),i};var ft=globalThis,P=class extends R{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){let e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Lt(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return L}};P._$litElement$=!0,P.finalized=!0,ft.litElementHydrateSupport?.({LitElement:P});var Ce=ft.litElementPolyfillSupport;Ce?.({LitElement:P});(ft.litElementVersions??=[]).push("4.2.1");var tt=t=>(e,s)=>{s!==void 0?s.addInitializer(()=>{customElements.define(t,e)}):customElements.define(t,e)};var Me={attribute:!0,type:String,converter:V,reflect:!1,hasChanged:Y},Pe=(t=Me,e,s)=>{let{kind:r,metadata:i}=s,a=globalThis.litPropertyMetadata.get(i);if(a===void 0&&globalThis.litPropertyMetadata.set(i,a=new Map),r==="setter"&&((t=Object.create(t)).wrapped=!0),a.set(s.name,t),r==="accessor"){let{name:n}=s;return{set(c){let f=e.get.call(this);e.set.call(this,c),this.requestUpdate(n,f,t)},init(c){return c!==void 0&&this.C(n,void 0,t,c),c}}}if(r==="setter"){let{name:n}=s;return function(c){let f=this[n];e.call(this,c),this.requestUpdate(n,f,t)}}throw Error("Unsupported decorator location: "+r)};function N(t){return(e,s)=>typeof s=="object"?Pe(t,e,s):((r,i,a)=>{let n=i.hasOwnProperty(a);return i.constructor.createProperty(a,r),n?Object.getOwnPropertyDescriptor(i,a):void 0})(t,e,s)}function mt(t){return N({...t,state:!0,attribute:!1})}function Te(){function t(h,o){return function(d){s(o,"addInitializer"),r(d,"An initializer"),h.push(d)}}function e(h,o,p,d,l,$,y,S,x){var b;switch(l){case 1:b="accessor";break;case 2:b="method";break;case 3:b="getter";break;case 4:b="setter";break;default:b="field"}var m={kind:b,name:y?"#"+o:o,static:$,private:y,metadata:S},v={v:!1};m.addInitializer=t(d,v);var u,g;l===0?y?(u=p.get,g=p.set):(u=function(){return this[o]},g=function(A){this[o]=A}):l===2?u=function(){return p.value}:((l===1||l===3)&&(u=function(){return p.get.call(this)}),(l===1||l===4)&&(g=function(A){p.set.call(this,A)})),m.access=u&&g?{get:u,set:g}:u?{get:u}:{set:g};try{return h(x,m)}finally{v.v=!0}}function s(h,o){if(h.v)throw new Error("attempted to call "+o+" after decoration was finished")}function r(h,o){if(typeof h!="function")throw new TypeError(o+" must be a function")}function i(h,o){var p=typeof o;if(h===1){if(p!=="object"||o===null)throw new TypeError("accessor decorators must return an object with get, set, or init properties or void 0");o.get!==void 0&&r(o.get,"accessor.get"),o.set!==void 0&&r(o.set,"accessor.set"),o.init!==void 0&&r(o.init,"accessor.init")}else if(p!=="function"){var d;throw h===0?d="field":h===10?d="class":d="method",new TypeError(d+" decorators must return a function or void 0")}}function a(h,o,p,d,l,$,y,S,x){var b=p[0],m,v,u;y?l===0||l===1?m={get:p[3],set:p[4]}:l===3?m={get:p[3]}:l===4?m={set:p[3]}:m={value:p[3]}:l!==0&&(m=Object.getOwnPropertyDescriptor(o,d)),l===1?u={get:m.get,set:m.set}:l===2?u=m.value:l===3?u=m.get:l===4&&(u=m.set);var g,A,C;if(typeof b=="function")g=e(b,d,m,S,l,$,y,x,u),g!==void 0&&(i(l,g),l===0?v=g:l===1?(v=g.init,A=g.get||u.get,C=g.set||u.set,u={get:A,set:C}):u=g);else for(var U=b.length-1;U>=0;U--){var z=b[U];if(g=e(z,d,m,S,l,$,y,x,u),g!==void 0){i(l,g);var I;l===0?I=g:l===1?(I=g.init,A=g.get||u.get,C=g.set||u.set,u={get:A,set:C}):u=g,I!==void 0&&(v===void 0?v=I:typeof v=="function"?v=[v,I]:v.push(I))}}if(l===0||l===1){if(v===void 0)v=function(w,E){return E};else if(typeof v!="function"){var vt=v;v=function(w,E){for(var rt=E,it=0;it<vt.length;it++)rt=vt[it].call(w,rt);return rt}}else{var he=v;v=function(w,E){return he.call(w,E)}}h.push(v)}l!==0&&(l===1?(m.get=u.get,m.set=u.set):l===2?m.value=u:l===3?m.get=u:l===4&&(m.set=u),y?l===1?(h.push(function(w,E){return u.get.call(w,E)}),h.push(function(w,E){return u.set.call(w,E)})):l===2?h.push(u):h.push(function(w,E){return u.call(w,E)}):Object.defineProperty(o,d,m))}function n(h,o,p){for(var d=[],l,$,y=new Map,S=new Map,x=0;x<o.length;x++){var b=o[x];if(Array.isArray(b)){var m=b[1],v=b[2],u=b.length>3,g=m>=5,A,C;if(g?(A=h,m=m-5,$=$||[],C=$):(A=h.prototype,l=l||[],C=l),m!==0&&!u){var U=g?S:y,z=U.get(v)||0;if(z===!0||z===3&&m!==4||z===4&&m!==3)throw new Error("Attempted to decorate a public method/accessor that has the same name as a previously decorated public method/accessor. This is not currently supported by the decorators plugin. Property name was: "+v);!z&&m>2?U.set(v,m):U.set(v,!0)}a(d,A,b,v,m,g,u,C,p)}}return c(d,l),c(d,$),d}function c(h,o){o&&h.push(function(p){for(var d=0;d<o.length;d++)o[d].call(p);return p})}function f(h,o,p){if(o.length>0){for(var d=[],l=h,$=h.name,y=o.length-1;y>=0;y--){var S={v:!1};try{var x=o[y](l,{kind:"class",name:$,addInitializer:t(d,S),metadata:p})}finally{S.v=!0}x!==void 0&&(i(10,x),l=x)}return[T(l,p),function(){for(var b=0;b<d.length;b++)d[b].call(l)}]}}function T(h,o){return Object.defineProperty(h,Symbol.metadata||Symbol.for("Symbol.metadata"),{configurable:!0,enumerable:!0,value:o})}return function(o,p,d,l){if(l!==void 0)var $=l[Symbol.metadata||Symbol.for("Symbol.metadata")];var y=Object.create($===void 0?null:$),S=n(o,p,y);return d.length||T(o,y),{e:S,get c(){return f(o,d,y)}}}}function st(t,e,s,r){return(st=Te())(t,e,s,r)}function Xt(t){return t}var te,Nt,zt,ee,se,re,ie,oe,ae,It,jt,Dt,Vt,qt,Bt,Wt,ne,Ft,Jt,le,Zt,Gt,gt=class{state;autoTimer;changeCallbacks=[];constructor(e=0){this.state={value:e,min:-50,max:100,stepSize:1,autoInterval:500,mode:"manual",history:[e]}}getState(){return{...this.state}}increment(){return this.changeValue(this.state.value+this.state.stepSize)}decrement(){return this.changeValue(this.state.value-this.state.stepSize)}reset(){this.changeValue(0),this.state.history=[0],this.notifyChange()}setStepSize(e){this.state.stepSize=Math.max(1,e),this.notifyChange()}setBounds(e,s){this.state.min=e,this.state.max=s,this.changeValue(Math.max(e,Math.min(s,this.state.value)))}toggleMode(){this.state.mode=this.state.mode==="manual"?"auto":"manual",this.state.mode==="auto"?this.startAutoIncrement():this.stopAutoIncrement(),this.notifyChange()}setAutoInterval(e){this.state.autoInterval=Math.max(100,e),this.state.mode==="auto"&&(this.stopAutoIncrement(),this.startAutoIncrement()),this.notifyChange()}getStatistics(){let e=this.state.history;return{total:e.reduce((s,r)=>bt(s,r),0),average:e.length>0?e.reduce((s,r)=>s+r,0)/e.length:0,changes:e.length-1,peak:Math.max(...e),valley:Math.min(...e)}}undo(){return this.state.history.length>1?(this.state.history.pop(),this.state.value=this.state.history[this.state.history.length-1],this.notifyChange(),!0):!1}onStateChange(e){this.changeCallbacks.push(e)}dispose(){this.stopAutoIncrement(),this.changeCallbacks=[]}changeValue(e){let s=Math.max(this.state.min,Math.min(this.state.max,e));return s!==this.state.value?(this.state.value=s,this.state.history.push(s),this.state.history.length>100&&(this.state.history=this.state.history.slice(-50)),this.notifyChange(),!0):!1}startAutoIncrement(){this.autoTimer=setInterval(()=>{this.increment()},this.state.autoInterval)}stopAutoIncrement(){this.autoTimer&&(clearInterval(this.autoTimer),this.autoTimer=void 0)}notifyChange(){this.changeCallbacks.forEach(e=>e(this.getState()))}},Kt;te=tt("advanced-counter"),ee=N({attribute:"comp-title",type:String}),se=N({attribute:"theme",type:String}),re=N({attribute:"disabled",type:Boolean,reflect:!0}),ie=N({attribute:"initial-value",type:Number}),oe=mt(),ae=mt();new class extends Xt{constructor(){super(Kt),Nt()}static{class t extends(zt=P){static{({e:[It,jt,Dt,Vt,qt,Bt,Wt],c:[Kt,Nt]}=st(this,[[ee,1,"compTitle"],[se,1,"theme"],[re,1,"disabled"],[ie,1,"initialValue"],[oe,1,"state"],[ae,1,"stats"]],[te],zt))}counterLogic;#t=(Wt(this),It(this,"Advanced Counter"));get compTitle(){return this.#t}set compTitle(s){this.#t=s}#e=jt(this,"light");get theme(){return this.#e}set theme(s){this.#e=s}#s=Dt(this,!1);get disabled(){return this.#s}set disabled(s){this.#s=s}#r=Vt(this,0);get initialValue(){return this.#r}set initialValue(s){this.#r=s}#i=qt(this);get state(){return this.#i}set state(s){this.#i=s}#o=Bt(this);get stats(){return this.#o}set stats(s){this.#o=s}static styles=G`
    /* 60-30-10 Color Rule:
      60% - Neutral backgrounds (#f5f7fa, #ffffff, #e8ecf1)
      30% - Secondary accents (#34495e, #7f8c8d)
      10% - Primary accent (#3498db) */

    :host {
      display: block;
      max-width: 800px;
      margin: 16px auto;
      padding: 32px;
      border: 1px solid #e8ecf1;
      border-radius: 8px;
      background: #ffffff;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
      font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    }

    :host([theme="dark"]) {
      background: #2c3e50;
      border-color: #34495e;
      color: #ecf0f1;
    }

    :host([disabled]) {
      opacity: 0.6;
      pointer-events: none;
    }

    h2 {
      margin: 0 0 24px 0;
      text-align: center;
      color: #34495e;
      font-size: 1.75rem;
      font-weight: 600;
    }

    :host([theme="dark"]) h2 {
      color: #ecf0f1;
    }

    .counter-display {
      text-align: center;
      margin-bottom: 32px;
      padding: 24px;
      background: #f5f7fa;
      border-radius: 8px;
      border: 1px solid #e8ecf1;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06);
    }

    :host([theme="dark"]) .counter-display {
      background: #34495e;
    }

    .counter-value {
      font-size: 4rem;
      font-weight: 300;
      color: #34495e;
      margin: 16px 0;
      letter-spacing: -2px;
    }

    :host([theme="dark"]) .counter-value {
      color: #ecf0f1;
    }

    .counter-mode {
      display: inline-block;
      padding: 6px 16px;
      border-radius: 20px;
      font-size: 0.75rem;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      margin-bottom: 8px;
    }

    .mode-manual {
      background-color: #e8ecf1;
      color: #34495e;
    }

    .mode-auto {
      background-color: #3498db;
      color: white;
      animation: pulse 2s ease-in-out infinite;
    }

    @keyframes pulse {
      0%, 100% {
        opacity: 1;
      }
      50% {
        opacity: 0.8;
      }
    }

    .controls {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
      gap: 12px;
      margin-bottom: 24px;
    }

    button {
      padding: 14px 20px;
      border: 1px solid transparent;
      border-radius: 6px;
      font-weight: 500;
      cursor: pointer;
      transition: all 0.2s ease;
      font-size: 14px;
      background: #e8ecf1;
      color: #34495e;
    }

    button:hover:not(:disabled) {
      transform: translateY(-1px);
      box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
      background: #d5dce3;
    }

    button:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }

    .btn-primary {
      background-color: #3498db;
      color: white;
      border-color: #3498db;
    }

    .btn-primary:hover:not(:disabled) {
      background-color: #2980b9;
      border-color: #2980b9;
    }

    .btn-secondary {
      background-color: #7f8c8d;
      color: white;
    }

    .btn-secondary:hover:not(:disabled) {
      background-color: #6c7a7b;
    }

    .btn-success {
      background-color: #e8ecf1;
      color: #34495e;
      border: 1px solid #d5dce3;
    }

    .btn-success:hover:not(:disabled) {
      background-color: #3498db;
      color: white;
      border-color: #3498db;
    }

    .btn-warning {
      background-color: #e8ecf1;
      color: #34495e;
      border: 1px solid #d5dce3;
    }

    .btn-warning:hover:not(:disabled) {
      background-color: #7f8c8d;
      color: white;
      border-color: #7f8c8d;
    }

    .btn-danger {
      background-color: #e8ecf1;
      color: #34495e;
      border: 1px solid #d5dce3;
    }

    .btn-danger:hover:not(:disabled) {
      background-color: #7f8c8d;
      color: white;
      border-color: #7f8c8d;
    }

    .settings {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
      gap: 20px;
      margin-bottom: 24px;
      padding: 20px;
      background-color: #f5f7fa;
      border-radius: 8px;
      border: 1px solid #e8ecf1;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06);
    }

    :host([theme="dark"]) .settings {
      background-color: #34495e;
    }

    .setting-group {
      display: flex;
      flex-direction: column;
    }

    label {
      font-weight: 500;
      margin-bottom: 8px;
      color: #34495e;
      font-size: 0.9rem;
    }

    :host([theme="dark"]) label {
      color: #bdc3c7;
    }

    input[type="number"], input[type="range"] {
      padding: 8px 12px;
      border: 1px solid #d5dce3;
      border-radius: 4px;
      font-size: 14px;
      background: white;
      color: #34495e;
    }

    :host([theme="dark"]) input[type="number"] {
      background: #2c3e50;
      color: #ecf0f1;
      border-color: #4a5f7f;
    }

    input[type="range"] {
      padding: 0;
      background: transparent;
    }

    input[type="number"]:focus, input[type="range"]:focus {
      outline: 2px solid #3498db;
      outline-offset: 2px;
    }

    .stats {
      background-color: #f5f7fa;
      padding: 20px;
      border-radius: 8px;
      border: 1px solid #e8ecf1;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06);
    }

    :host([theme="dark"]) .stats {
      background-color: #34495e;
    }

    .stats h3 {
      margin: 0 0 16px 0;
      color: #34495e;
      font-weight: 600;
      font-size: 1.1rem;
    }

    :host([theme="dark"]) .stats h3 {
      color: #ecf0f1;
    }

    .stats-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(110px, 1fr));
      gap: 12px;
    }

    .stat-item {
      text-align: center;
      padding: 12px;
      background-color: white;
      border-radius: 6px;
      border: 1px solid #e8ecf1;
      box-shadow: 0 1px 2px rgba(0, 0, 0, 0.04);
    }

    :host([theme="dark"]) .stat-item {
      background-color: #2c3e50;
      border-color: #4a5f7f;
    }

    .stat-value {
      font-size: 1.5rem;
      font-weight: 600;
      color: #3498db;
      margin-bottom: 4px;
    }

    .stat-label {
      font-size: 0.7rem;
      color: #7f8c8d;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      font-weight: 500;
    }

    .bounds-indicator {
      margin: 12px 0 0 0;
      font-size: 0.9rem;
      color: #7f8c8d;
    }

    .at-limit {
      color: #3498db;
      font-weight: 600;
    }
  `;connectedCallback(){super.connectedCallback(),this.counterLogic=new gt,this.state=this.counterLogic.getState(),this.stats=this.counterLogic.getStatistics(),this.counterLogic.onStateChange(s=>{this.state=s,this.stats=this.counterLogic.getStatistics(),this.requestUpdate(),this.dispatchEvent(new CustomEvent("counter-changed",{detail:{value:s.value,stats:this.stats},bubbles:!0}))})}disconnectedCallback(){super.disconnectedCallback(),this.counterLogic.dispose()}handleIncrement(){this.counterLogic.increment()}handleDecrement(){this.counterLogic.decrement()}handleReset(){this.counterLogic.reset()}handleUndo(){this.counterLogic.undo()}handleModeToggle(){this.counterLogic.toggleMode()}handleStepChange(s){let r=s.target;this.counterLogic.setStepSize(parseInt(r.value)||1)}handleIntervalChange(s){let r=s.target;this.counterLogic.setAutoInterval(parseInt(r.value)||500)}handleMinChange(s){let r=s.target,i=parseInt(r.value)||-50;this.counterLogic.setBounds(i,this.state.max)}handleMaxChange(s){let r=s.target,i=parseInt(r.value)||100;this.counterLogic.setBounds(this.state.min,i)}render(){let s=this.state.value<=this.state.min,r=this.state.value>=this.state.max;return F`
      <h2>${this.compTitle}</h2>
      <div class="counter-display">
        <div class="counter-mode ${this.state.mode==="auto"?"mode-auto":"mode-manual"}">
          ${this.state.mode} mode
        </div>
        <div class="counter-value">${this.state.value}</div>
        <div class="bounds-indicator">
          Range: ${this.state.min} to ${this.state.max} ${s||r?F`
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
          ?disabled="${r}"
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
    `}}}};export{bt as add};
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
