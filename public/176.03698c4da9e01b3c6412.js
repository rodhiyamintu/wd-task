(self.webpackChunktask_app=self.webpackChunktask_app||[]).push([[176],{3176:(e,t,s)=>{"use strict";s.d(t,{m:()=>D});var r=s(1116),n=s(1462),o=s(7368),a=s(878),i=s(8318),h=s(436),l=s(3835),u=s(9996);class d{}class p{}class c{constructor(e){this.normalizedNames=new Map,this.lazyUpdate=null,e?this.lazyInit="string"==typeof e?()=>{this.headers=new Map,e.split("\n").forEach(e=>{const t=e.indexOf(":");if(t>0){const s=e.slice(0,t),r=s.toLowerCase(),n=e.slice(t+1).trim();this.maybeSetNormalizedName(s,r),this.headers.has(r)?this.headers.get(r).push(n):this.headers.set(r,[n])}})}:()=>{this.headers=new Map,Object.keys(e).forEach(t=>{let s=e[t];const r=t.toLowerCase();"string"==typeof s&&(s=[s]),s.length>0&&(this.headers.set(r,s),this.maybeSetNormalizedName(t,r))})}:this.headers=new Map}has(e){return this.init(),this.headers.has(e.toLowerCase())}get(e){this.init();const t=this.headers.get(e.toLowerCase());return t&&t.length>0?t[0]:null}keys(){return this.init(),Array.from(this.normalizedNames.values())}getAll(e){return this.init(),this.headers.get(e.toLowerCase())||null}append(e,t){return this.clone({name:e,value:t,op:"a"})}set(e,t){return this.clone({name:e,value:t,op:"s"})}delete(e,t){return this.clone({name:e,value:t,op:"d"})}maybeSetNormalizedName(e,t){this.normalizedNames.has(t)||this.normalizedNames.set(t,e)}init(){this.lazyInit&&(this.lazyInit instanceof c?this.copyFrom(this.lazyInit):this.lazyInit(),this.lazyInit=null,this.lazyUpdate&&(this.lazyUpdate.forEach(e=>this.applyUpdate(e)),this.lazyUpdate=null))}copyFrom(e){e.init(),Array.from(e.headers.keys()).forEach(t=>{this.headers.set(t,e.headers.get(t)),this.normalizedNames.set(t,e.normalizedNames.get(t))})}clone(e){const t=new c;return t.lazyInit=this.lazyInit&&this.lazyInit instanceof c?this.lazyInit:this,t.lazyUpdate=(this.lazyUpdate||[]).concat([e]),t}applyUpdate(e){const t=e.name.toLowerCase();switch(e.op){case"a":case"s":let s=e.value;if("string"==typeof s&&(s=[s]),0===s.length)return;this.maybeSetNormalizedName(e.name,t);const r=("a"===e.op?this.headers.get(t):void 0)||[];r.push(...s),this.headers.set(t,r);break;case"d":const n=e.value;if(n){let e=this.headers.get(t);if(!e)return;e=e.filter(e=>-1===n.indexOf(e)),0===e.length?(this.headers.delete(t),this.normalizedNames.delete(t)):this.headers.set(t,e)}else this.headers.delete(t),this.normalizedNames.delete(t)}}forEach(e){this.init(),Array.from(this.normalizedNames.keys()).forEach(t=>e(this.normalizedNames.get(t),this.headers.get(t)))}}class m{encodeKey(e){return y(e)}encodeValue(e){return y(e)}decodeKey(e){return decodeURIComponent(e)}decodeValue(e){return decodeURIComponent(e)}}function y(e){return encodeURIComponent(e).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/gi,"$").replace(/%2C/gi,",").replace(/%3B/gi,";").replace(/%2B/gi,"+").replace(/%3D/gi,"=").replace(/%3F/gi,"?").replace(/%2F/gi,"/")}function f(e){return`${e}`}class b{constructor(e={}){if(this.updates=null,this.cloneFrom=null,this.encoder=e.encoder||new m,e.fromString){if(e.fromObject)throw new Error("Cannot specify both fromString and fromObject.");this.map=function(e,t){const s=new Map;return e.length>0&&e.replace(/^\?/,"").split("&").forEach(e=>{const r=e.indexOf("="),[n,o]=-1==r?[t.decodeKey(e),""]:[t.decodeKey(e.slice(0,r)),t.decodeValue(e.slice(r+1))],a=s.get(n)||[];a.push(o),s.set(n,a)}),s}(e.fromString,this.encoder)}else e.fromObject?(this.map=new Map,Object.keys(e.fromObject).forEach(t=>{const s=e.fromObject[t];this.map.set(t,Array.isArray(s)?s:[s])})):this.map=null}has(e){return this.init(),this.map.has(e)}get(e){this.init();const t=this.map.get(e);return t?t[0]:null}getAll(e){return this.init(),this.map.get(e)||null}keys(){return this.init(),Array.from(this.map.keys())}append(e,t){return this.clone({param:e,value:t,op:"a"})}appendAll(e){const t=[];return Object.keys(e).forEach(s=>{const r=e[s];Array.isArray(r)?r.forEach(e=>{t.push({param:s,value:e,op:"a"})}):t.push({param:s,value:r,op:"a"})}),this.clone(t)}set(e,t){return this.clone({param:e,value:t,op:"s"})}delete(e,t){return this.clone({param:e,value:t,op:"d"})}toString(){return this.init(),this.keys().map(e=>{const t=this.encoder.encodeKey(e);return this.map.get(e).map(e=>t+"="+this.encoder.encodeValue(e)).join("&")}).filter(e=>""!==e).join("&")}clone(e){const t=new b({encoder:this.encoder});return t.cloneFrom=this.cloneFrom||this,t.updates=(this.updates||[]).concat(e),t}init(){null===this.map&&(this.map=new Map),null!==this.cloneFrom&&(this.cloneFrom.init(),this.cloneFrom.keys().forEach(e=>this.map.set(e,this.cloneFrom.map.get(e))),this.updates.forEach(e=>{switch(e.op){case"a":case"s":const t=("a"===e.op?this.map.get(e.param):void 0)||[];t.push(f(e.value)),this.map.set(e.param,t);break;case"d":if(void 0===e.value){this.map.delete(e.param);break}{let t=this.map.get(e.param)||[];const s=t.indexOf(f(e.value));-1!==s&&t.splice(s,1),t.length>0?this.map.set(e.param,t):this.map.delete(e.param)}}}),this.cloneFrom=this.updates=null)}}class g{constructor(){this.map=new Map}set(e,t){return this.map.set(e,t),this}get(e){return this.map.has(e)||this.map.set(e,e.defaultValue()),this.map.get(e)}delete(e){return this.map.delete(e),this}keys(){return this.map.keys()}}function w(e){return"undefined"!=typeof ArrayBuffer&&e instanceof ArrayBuffer}function v(e){return"undefined"!=typeof Blob&&e instanceof Blob}function T(e){return"undefined"!=typeof FormData&&e instanceof FormData}class E{constructor(e,t,s,r){let n;if(this.url=t,this.body=null,this.reportProgress=!1,this.withCredentials=!1,this.responseType="json",this.method=e.toUpperCase(),function(e){switch(e){case"DELETE":case"GET":case"HEAD":case"OPTIONS":case"JSONP":return!1;default:return!0}}(this.method)||r?(this.body=void 0!==s?s:null,n=r):n=s,n&&(this.reportProgress=!!n.reportProgress,this.withCredentials=!!n.withCredentials,n.responseType&&(this.responseType=n.responseType),n.headers&&(this.headers=n.headers),n.context&&(this.context=n.context),n.params&&(this.params=n.params)),this.headers||(this.headers=new c),this.context||(this.context=new g),this.params){const e=this.params.toString();if(0===e.length)this.urlWithParams=t;else{const s=t.indexOf("?");this.urlWithParams=t+(-1===s?"?":s<t.length-1?"&":"")+e}}else this.params=new b,this.urlWithParams=t}serializeBody(){return null===this.body?null:w(this.body)||v(this.body)||T(this.body)||"string"==typeof this.body?this.body:this.body instanceof b?this.body.toString():"object"==typeof this.body||"boolean"==typeof this.body||Array.isArray(this.body)?JSON.stringify(this.body):this.body.toString()}detectContentTypeHeader(){return null===this.body||T(this.body)?null:v(this.body)?this.body.type||null:w(this.body)?null:"string"==typeof this.body?"text/plain":this.body instanceof b?"application/x-www-form-urlencoded;charset=UTF-8":"object"==typeof this.body||"number"==typeof this.body||"boolean"==typeof this.body?"application/json":null}clone(e={}){var t;const s=e.method||this.method,r=e.url||this.url,n=e.responseType||this.responseType,o=void 0!==e.body?e.body:this.body,a=void 0!==e.withCredentials?e.withCredentials:this.withCredentials,i=void 0!==e.reportProgress?e.reportProgress:this.reportProgress;let h=e.headers||this.headers,l=e.params||this.params;const u=null!==(t=e.context)&&void 0!==t?t:this.context;return void 0!==e.setHeaders&&(h=Object.keys(e.setHeaders).reduce((t,s)=>t.set(s,e.setHeaders[s]),h)),e.setParams&&(l=Object.keys(e.setParams).reduce((t,s)=>t.set(s,e.setParams[s]),l)),new E(s,r,o,{params:l,headers:h,context:u,reportProgress:i,responseType:n,withCredentials:a})}}var x=function(e){return e[e.Sent=0]="Sent",e[e.UploadProgress=1]="UploadProgress",e[e.ResponseHeader=2]="ResponseHeader",e[e.DownloadProgress=3]="DownloadProgress",e[e.Response=4]="Response",e[e.User=5]="User",e}({});class k{constructor(e,t=200,s="OK"){this.headers=e.headers||new c,this.status=void 0!==e.status?e.status:t,this.statusText=e.statusText||s,this.url=e.url||null,this.ok=this.status>=200&&this.status<300}}class C extends k{constructor(e={}){super(e),this.type=x.ResponseHeader}clone(e={}){return new C({headers:e.headers||this.headers,status:void 0!==e.status?e.status:this.status,statusText:e.statusText||this.statusText,url:e.url||this.url||void 0})}}class N extends k{constructor(e={}){super(e),this.type=x.Response,this.body=void 0!==e.body?e.body:null}clone(e={}){return new N({body:void 0!==e.body?e.body:this.body,headers:e.headers||this.headers,status:void 0!==e.status?e.status:this.status,statusText:e.statusText||this.statusText,url:e.url||this.url||void 0})}}class O extends k{constructor(e){super(e,0,"Unknown Error"),this.name="HttpErrorResponse",this.ok=!1,this.message=this.status>=200&&this.status<300?`Http failure during parsing for ${e.url||"(unknown url)"}`:`Http failure response for ${e.url||"(unknown url)"}: ${e.status} ${e.statusText}`,this.error=e.error||null}}function z(e,t){return{body:t,headers:e.headers,context:e.context,observe:e.observe,params:e.params,reportProgress:e.reportProgress,responseType:e.responseType,withCredentials:e.withCredentials}}let P=(()=>{class e{constructor(e){this.handler=e}request(e,t,s={}){let r;if(e instanceof E)r=e;else{let n,o;n=s.headers instanceof c?s.headers:new c(s.headers),s.params&&(o=s.params instanceof b?s.params:new b({fromObject:s.params})),r=new E(e,t,void 0!==s.body?s.body:null,{headers:n,context:s.context,params:o,reportProgress:s.reportProgress,responseType:s.responseType||"json",withCredentials:s.withCredentials})}const n=(0,a.of)(r).pipe((0,h.b)(e=>this.handler.handle(e)));if(e instanceof E||"events"===s.observe)return n;const o=n.pipe((0,l.h)(e=>e instanceof N));switch(s.observe||"body"){case"body":switch(r.responseType){case"arraybuffer":return o.pipe((0,u.U)(e=>{if(null!==e.body&&!(e.body instanceof ArrayBuffer))throw new Error("Response is not an ArrayBuffer.");return e.body}));case"blob":return o.pipe((0,u.U)(e=>{if(null!==e.body&&!(e.body instanceof Blob))throw new Error("Response is not a Blob.");return e.body}));case"text":return o.pipe((0,u.U)(e=>{if(null!==e.body&&"string"!=typeof e.body)throw new Error("Response is not a string.");return e.body}));case"json":default:return o.pipe((0,u.U)(e=>e.body))}case"response":return o;default:throw new Error(`Unreachable: unhandled observe type ${s.observe}}`)}}delete(e,t={}){return this.request("DELETE",e,t)}get(e,t={}){return this.request("GET",e,t)}head(e,t={}){return this.request("HEAD",e,t)}jsonp(e,t){return this.request("JSONP",e,{params:(new b).append(t,"JSONP_CALLBACK"),observe:"body",responseType:"json"})}options(e,t={}){return this.request("OPTIONS",e,t)}patch(e,t,s={}){return this.request("PATCH",e,z(s,t))}post(e,t,s={}){return this.request("POST",e,z(s,t))}put(e,t,s={}){return this.request("PUT",e,z(s,t))}}return e.\u0275fac=function(t){return new(t||e)(o.LFG(d))},e.\u0275prov=o.Yz7({token:e,factory:e.\u0275fac}),e})();class L{constructor(e,t){this.next=e,this.interceptor=t}handle(e){return this.interceptor.intercept(e,this.next)}}const S=new o.OlP("HTTP_INTERCEPTORS");let R=(()=>{class e{intercept(e,t){return t.handle(e)}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275prov=o.Yz7({token:e,factory:e.\u0275fac}),e})();const A=/^\)\]\}',?\n/;let F=(()=>{class e{constructor(e){this.xhrFactory=e}handle(e){if("JSONP"===e.method)throw new Error("Attempted to construct Jsonp request without HttpClientJsonpModule installed.");return new i.y(t=>{const s=this.xhrFactory.build();if(s.open(e.method,e.urlWithParams),e.withCredentials&&(s.withCredentials=!0),e.headers.forEach((e,t)=>s.setRequestHeader(e,t.join(","))),e.headers.has("Accept")||s.setRequestHeader("Accept","application/json, text/plain, */*"),!e.headers.has("Content-Type")){const t=e.detectContentTypeHeader();null!==t&&s.setRequestHeader("Content-Type",t)}if(e.responseType){const t=e.responseType.toLowerCase();s.responseType="json"!==t?t:"text"}const r=e.serializeBody();let n=null;const o=()=>{if(null!==n)return n;const t=1223===s.status?204:s.status,r=s.statusText||"OK",o=new c(s.getAllResponseHeaders()),a=function(e){return"responseURL"in e&&e.responseURL?e.responseURL:/^X-Request-URL:/m.test(e.getAllResponseHeaders())?e.getResponseHeader("X-Request-URL"):null}(s)||e.url;return n=new C({headers:o,status:t,statusText:r,url:a}),n},a=()=>{let{headers:r,status:n,statusText:a,url:i}=o(),h=null;204!==n&&(h=void 0===s.response?s.responseText:s.response),0===n&&(n=h?200:0);let l=n>=200&&n<300;if("json"===e.responseType&&"string"==typeof h){const e=h;h=h.replace(A,"");try{h=""!==h?JSON.parse(h):null}catch(u){h=e,l&&(l=!1,h={error:u,text:h})}}l?(t.next(new N({body:h,headers:r,status:n,statusText:a,url:i||void 0})),t.complete()):t.error(new O({error:h,headers:r,status:n,statusText:a,url:i||void 0}))},i=e=>{const{url:r}=o(),n=new O({error:e,status:s.status||0,statusText:s.statusText||"Unknown Error",url:r||void 0});t.error(n)};let h=!1;const l=r=>{h||(t.next(o()),h=!0);let n={type:x.DownloadProgress,loaded:r.loaded};r.lengthComputable&&(n.total=r.total),"text"===e.responseType&&s.responseText&&(n.partialText=s.responseText),t.next(n)},u=e=>{let s={type:x.UploadProgress,loaded:e.loaded};e.lengthComputable&&(s.total=e.total),t.next(s)};return s.addEventListener("load",a),s.addEventListener("error",i),s.addEventListener("timeout",i),s.addEventListener("abort",i),e.reportProgress&&(s.addEventListener("progress",l),null!==r&&s.upload&&s.upload.addEventListener("progress",u)),s.send(r),t.next({type:x.Sent}),()=>{s.removeEventListener("error",i),s.removeEventListener("abort",i),s.removeEventListener("load",a),s.removeEventListener("timeout",i),e.reportProgress&&(s.removeEventListener("progress",l),null!==r&&s.upload&&s.upload.removeEventListener("progress",u)),s.readyState!==s.DONE&&s.abort()}})}}return e.\u0275fac=function(t){return new(t||e)(o.LFG(r.JF))},e.\u0275prov=o.Yz7({token:e,factory:e.\u0275fac}),e})();const U=new o.OlP("XSRF_COOKIE_NAME"),j=new o.OlP("XSRF_HEADER_NAME");class H{}let I=(()=>{class e{constructor(e,t,s){this.doc=e,this.platform=t,this.cookieName=s,this.lastCookieString="",this.lastToken=null,this.parseCount=0}getToken(){if("server"===this.platform)return null;const e=this.doc.cookie||"";return e!==this.lastCookieString&&(this.parseCount++,this.lastToken=(0,r.Mx)(e,this.cookieName),this.lastCookieString=e),this.lastToken}}return e.\u0275fac=function(t){return new(t||e)(o.LFG(r.K0),o.LFG(o.Lbi),o.LFG(U))},e.\u0275prov=o.Yz7({token:e,factory:e.\u0275fac}),e})(),B=(()=>{class e{constructor(e,t){this.tokenService=e,this.headerName=t}intercept(e,t){const s=e.url.toLowerCase();if("GET"===e.method||"HEAD"===e.method||s.startsWith("http://")||s.startsWith("https://"))return t.handle(e);const r=this.tokenService.getToken();return null===r||e.headers.has(this.headerName)||(e=e.clone({headers:e.headers.set(this.headerName,r)})),t.handle(e)}}return e.\u0275fac=function(t){return new(t||e)(o.LFG(H),o.LFG(j))},e.\u0275prov=o.Yz7({token:e,factory:e.\u0275fac}),e})(),q=(()=>{class e{constructor(e,t){this.backend=e,this.injector=t,this.chain=null}handle(e){if(null===this.chain){const e=this.injector.get(S,[]);this.chain=e.reduceRight((e,t)=>new L(e,t),this.backend)}return this.chain.handle(e)}}return e.\u0275fac=function(t){return new(t||e)(o.LFG(p),o.LFG(o.zs3))},e.\u0275prov=o.Yz7({token:e,factory:e.\u0275fac}),e})(),K=(()=>{class e{static disable(){return{ngModule:e,providers:[{provide:B,useClass:R}]}}static withOptions(t={}){return{ngModule:e,providers:[t.cookieName?{provide:U,useValue:t.cookieName}:[],t.headerName?{provide:j,useValue:t.headerName}:[]]}}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=o.oAB({type:e}),e.\u0275inj=o.cJS({providers:[B,{provide:S,useExisting:B,multi:!0},{provide:H,useClass:I},{provide:U,useValue:"XSRF-TOKEN"},{provide:j,useValue:"X-XSRF-TOKEN"}]}),e})(),M=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=o.oAB({type:e}),e.\u0275inj=o.cJS({providers:[P,{provide:d,useClass:q},F,{provide:p,useExisting:F}],imports:[[K.withOptions({cookieName:"XSRF-TOKEN",headerName:"X-XSRF-TOKEN"})]]}),e})(),D=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=o.oAB({type:e}),e.\u0275inj=o.cJS({imports:[[r.ez,n.u5,n.UX,M],n.u5,n.UX,M]}),e})()}}]);