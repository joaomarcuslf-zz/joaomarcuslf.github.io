!function(e){function t(o){if(r[o])return r[o].exports;var n=r[o]={exports:{},id:o,loaded:!1};return e[o].call(n.exports,n,n.exports,t),n.loaded=!0,n.exports}var r={};return t.m=e,t.c=r,t.p="/build/js",t(0)}([function(e,t,r){e.exports=r(1)},function(e,t,r){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function n(){var e=document.querySelector(".navigation"),t=document.querySelector(".open-nav-btn"),r=document.querySelector("#overlay"),o=document.getElementById("appContainer");e.className=e.className.split(" open-nav").join(""),t.className=t.className.split(" is-open").join(""),o.className="open",r.className=""}function i(){var e=document.getElementById("appContainer");"open"===e.className?e.className="":e.className="open"}function a(){var e=document.querySelector(".navigation"),t=document.querySelector(".open-nav-btn"),r=document.querySelector("#overlay"),o=document.getElementById("appContainer");e.className.includes("open-nav")?n():(e.className+=" open-nav",t.className+=" is-open",r.className="open overlay open-overlay no-overflow",o.className+=" "+r.className,t.blur())}r(2),r(3);var s=r(4),u=o(s);document.querySelector(".open-btn").addEventListener("click",i,!1),document.querySelector(".open-nav-btn").addEventListener("click",a,!1),document.querySelector("#overlay").addEventListener("click",n,!1),document.querySelectorAll(".link-item").forEach(function(e){return e.addEventListener("click",n,!1)});var l=document.querySelector(".portfolio-container");u.default.items.map(function(e){var t=document.createElement("img"),r=document.createElement("figure"),o=document.createElement("h2"),n=document.createElement("p"),i=document.createElement("a");t.src="/build/img/portfolio/"+e.img,r.className="image is-16by9 portfolio-image",n.className="panel-block",o.innerText=e.label,i.href=e.link,i.className="button is-primary is-outlined is-medium\tis-fullwidth",r.append(t),i.append(o),n.append(i),n.append(r),l.append(n)})},function(e,t){!function(e){"use strict";function t(e){if("string"!=typeof e&&(e=String(e)),/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(e))throw new TypeError("Invalid character in header field name");return e.toLowerCase()}function r(e){return"string"!=typeof e&&(e=String(e)),e}function o(e){var t={next:function(){var t=e.shift();return{done:void 0===t,value:t}}};return b.iterable&&(t[Symbol.iterator]=function(){return t}),t}function n(e){this.map={},e instanceof n?e.forEach(function(e,t){this.append(t,e)},this):e&&Object.getOwnPropertyNames(e).forEach(function(t){this.append(t,e[t])},this)}function i(e){return e.bodyUsed?Promise.reject(new TypeError("Already read")):void(e.bodyUsed=!0)}function a(e){return new Promise(function(t,r){e.onload=function(){t(e.result)},e.onerror=function(){r(e.error)}})}function s(e){var t=new FileReader,r=a(t);return t.readAsArrayBuffer(e),r}function u(e){var t=new FileReader,r=a(t);return t.readAsText(e),r}function l(e){for(var t=new Uint8Array(e),r=new Array(t.length),o=0;o<t.length;o++)r[o]=String.fromCharCode(t[o]);return r.join("")}function c(e){if(e.slice)return e.slice(0);var t=new Uint8Array(e.byteLength);return t.set(new Uint8Array(e)),t.buffer}function p(){return this.bodyUsed=!1,this._initBody=function(e){if(this._bodyInit=e,e)if("string"==typeof e)this._bodyText=e;else if(b.blob&&Blob.prototype.isPrototypeOf(e))this._bodyBlob=e;else if(b.formData&&FormData.prototype.isPrototypeOf(e))this._bodyFormData=e;else if(b.searchParams&&URLSearchParams.prototype.isPrototypeOf(e))this._bodyText=e.toString();else if(b.arrayBuffer&&b.blob&&w(e))this._bodyArrayBuffer=c(e.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer]);else{if(!b.arrayBuffer||!ArrayBuffer.prototype.isPrototypeOf(e)&&!g(e))throw new Error("unsupported BodyInit type");this._bodyArrayBuffer=c(e)}else this._bodyText="";this.headers.get("content-type")||("string"==typeof e?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):b.searchParams&&URLSearchParams.prototype.isPrototypeOf(e)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},b.blob&&(this.blob=function(){var e=i(this);if(e)return e;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){return this._bodyArrayBuffer?i(this)||Promise.resolve(this._bodyArrayBuffer):this.blob().then(s)}),this.text=function(){var e=i(this);if(e)return e;if(this._bodyBlob)return u(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(l(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)},b.formData&&(this.formData=function(){return this.text().then(h)}),this.json=function(){return this.text().then(JSON.parse)},this}function f(e){var t=e.toUpperCase();return E.indexOf(t)>-1?t:e}function d(e,t){t=t||{};var r=t.body;if("string"==typeof e)this.url=e;else{if(e.bodyUsed)throw new TypeError("Already read");this.url=e.url,this.credentials=e.credentials,t.headers||(this.headers=new n(e.headers)),this.method=e.method,this.mode=e.mode,r||null==e._bodyInit||(r=e._bodyInit,e.bodyUsed=!0)}if(this.credentials=t.credentials||this.credentials||"omit",!t.headers&&this.headers||(this.headers=new n(t.headers)),this.method=f(t.method||this.method||"GET"),this.mode=t.mode||this.mode||null,this.referrer=null,("GET"===this.method||"HEAD"===this.method)&&r)throw new TypeError("Body not allowed for GET or HEAD requests");this._initBody(r)}function h(e){var t=new FormData;return e.trim().split("&").forEach(function(e){if(e){var r=e.split("="),o=r.shift().replace(/\+/g," "),n=r.join("=").replace(/\+/g," ");t.append(decodeURIComponent(o),decodeURIComponent(n))}}),t}function y(e){var t=new n;return e.split("\r\n").forEach(function(e){var r=e.split(":"),o=r.shift().trim();if(o){var n=r.join(":").trim();t.append(o,n)}}),t}function m(e,t){t||(t={}),this.type="default",this.status="status"in t?t.status:200,this.ok=this.status>=200&&this.status<300,this.statusText="statusText"in t?t.statusText:"OK",this.headers=new n(t.headers),this.url=t.url||"",this._initBody(e)}if(!e.fetch){var b={searchParams:"URLSearchParams"in e,iterable:"Symbol"in e&&"iterator"in Symbol,blob:"FileReader"in e&&"Blob"in e&&function(){try{return new Blob,!0}catch(e){return!1}}(),formData:"FormData"in e,arrayBuffer:"ArrayBuffer"in e};if(b.arrayBuffer)var v=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],w=function(e){return e&&DataView.prototype.isPrototypeOf(e)},g=ArrayBuffer.isView||function(e){return e&&v.indexOf(Object.prototype.toString.call(e))>-1};n.prototype.append=function(e,o){e=t(e),o=r(o);var n=this.map[e];this.map[e]=n?n+","+o:o},n.prototype.delete=function(e){delete this.map[t(e)]},n.prototype.get=function(e){return e=t(e),this.has(e)?this.map[e]:null},n.prototype.has=function(e){return this.map.hasOwnProperty(t(e))},n.prototype.set=function(e,o){this.map[t(e)]=r(o)},n.prototype.forEach=function(e,t){for(var r in this.map)this.map.hasOwnProperty(r)&&e.call(t,this.map[r],r,this)},n.prototype.keys=function(){var e=[];return this.forEach(function(t,r){e.push(r)}),o(e)},n.prototype.values=function(){var e=[];return this.forEach(function(t){e.push(t)}),o(e)},n.prototype.entries=function(){var e=[];return this.forEach(function(t,r){e.push([r,t])}),o(e)},b.iterable&&(n.prototype[Symbol.iterator]=n.prototype.entries);var E=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];d.prototype.clone=function(){return new d(this,{body:this._bodyInit})},p.call(d.prototype),p.call(m.prototype),m.prototype.clone=function(){return new m(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new n(this.headers),url:this.url})},m.error=function(){var e=new m(null,{status:0,statusText:""});return e.type="error",e};var A=[301,302,303,307,308];m.redirect=function(e,t){if(A.indexOf(t)===-1)throw new RangeError("Invalid status code");return new m(null,{status:t,headers:{location:e}})},e.Headers=n,e.Request=d,e.Response=m,e.fetch=function(e,t){return new Promise(function(r,o){var n=new d(e,t),i=new XMLHttpRequest;i.onload=function(){var e={status:i.status,statusText:i.statusText,headers:y(i.getAllResponseHeaders()||"")};e.url="responseURL"in i?i.responseURL:e.headers.get("X-Request-URL");var t="response"in i?i.response:i.responseText;r(new m(t,e))},i.onerror=function(){o(new TypeError("Network request failed"))},i.ontimeout=function(){o(new TypeError("Network request failed"))},i.open(n.method,n.url,!0),"include"===n.credentials&&(i.withCredentials=!0),"responseType"in i&&b.blob&&(i.responseType="blob"),n.headers.forEach(function(e,t){i.setRequestHeader(t,e)}),i.send("undefined"==typeof n._bodyInit?null:n._bodyInit)})},e.fetch.polyfill=!0}}("undefined"!=typeof self?self:this)},function(e,t){"use strict";Array.prototype.map||(Array.prototype.map=function(e,t){var r=void 0,o=void 0,n=void 0;if(null==this)throw new TypeError(" this is null or not defined");var i=Object(this),a=i.length>>>0;if("function"!=typeof e)throw new TypeError(e+" is not a function");for(arguments.length>1&&(r=t),o=new Array(a),n=0;n<a;){var s=void 0,u=void 0;n in i&&(s=i[n],u=e.call(r,s,n,i),o[n]=u),n++}return o}),Array.prototype.forEach||(Array.prototype.forEach=function(e,t){for(var r=0,o=this.length;r<o;++r)e.call(t,this[r],r,this)}),NodeList.prototype.forEach||(NodeList.prototype.forEach=Array.prototype.forEach),Element.prototype.append||(Element.prototype.append=Element.prototype.appendChild)},function(e,t){e.exports={items:[{img:"banner-alien.jpeg",label:"OuterWorldCodes",link:"https://github.com/joaomarcuslf/my-personal-webapp"},{img:"fastformater.png",label:"FastFormater Gem",link:"https://github.com/joaomarcuslf/fast_formater"},{img:"fileminer.png",label:"FileMiner",link:"https://github.com/joaomarcuslf/file-mining"},{img:"gemlist.png",label:"Gem List",link:"https://github.com/joaomarcuslf/data_struct_list"},{img:"hellslist.png",label:"Hell's list",link:"https://github.com/joaomarcuslf/sexta-feira-13"},{img:"todoapp.png",label:"Todo App",link:"https://github.com/joaomarcuslf/my-todo-list"}]}}]);