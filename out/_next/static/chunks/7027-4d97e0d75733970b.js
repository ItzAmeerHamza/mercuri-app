(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7027],{91359:function(e,t,n){"use strict";n.d(t,{Z:function(){return g}});var r=n(87462),o=n(63366),i=n(67294),a=n(86010),u=n(94780),c=n(81719),l=n(78884),s=n(34867),f=n(1588);function p(e){return(0,s.Z)("MuiCardContent",e)}(0,f.Z)("MuiCardContent",["root"]);var d=n(85893);let v=["className","component"],m=e=>{let{classes:t}=e;return(0,u.Z)({root:["root"]},p,t)},y=(0,c.ZP)("div",{name:"MuiCardContent",slot:"Root",overridesResolver:(e,t)=>t.root})(()=>({padding:16,"&:last-child":{paddingBottom:24}})),b=i.forwardRef(function(e,t){let n=(0,l.Z)({props:e,name:"MuiCardContent"}),{className:i,component:u="div"}=n,c=(0,o.Z)(n,v),s=(0,r.Z)({},n,{component:u}),f=m(s);return(0,d.jsx)(y,(0,r.Z)({as:u,className:(0,a.Z)(f.root,i),ownerState:s,ref:t},c))});var g=b},49837:function(e,t,n){"use strict";n.d(t,{Z:function(){return h}});var r=n(87462),o=n(63366),i=n(67294),a=n(86010),u=n(94780),c=n(81719),l=n(78884),s=n(70918),f=n(34867),p=n(1588);function d(e){return(0,f.Z)("MuiCard",e)}(0,p.Z)("MuiCard",["root"]);var v=n(85893);let m=["className","raised"],y=e=>{let{classes:t}=e;return(0,u.Z)({root:["root"]},d,t)},b=(0,c.ZP)(s.Z,{name:"MuiCard",slot:"Root",overridesResolver:(e,t)=>t.root})(()=>({overflow:"hidden"})),g=i.forwardRef(function(e,t){let n=(0,l.Z)({props:e,name:"MuiCard"}),{className:i,raised:u=!1}=n,c=(0,o.Z)(n,m),s=(0,r.Z)({},n,{raised:u}),f=y(s);return(0,v.jsx)(b,(0,r.Z)({className:(0,a.Z)(f.root,i),elevation:u?8:void 0,ref:t,ownerState:s},c))});var h=g},58363:function(e,t){"use strict";t.Z=function(e,t){if(e&&t){var n=Array.isArray(t)?t:t.split(","),r=e.name||"",o=(e.type||"").toLowerCase(),i=o.replace(/\/.*$/,"");return n.some(function(e){var t=e.trim().toLowerCase();return"."===t.charAt(0)?r.toLowerCase().endsWith(t):t.endsWith("/*")?i===t.replace(/\/.*$/,""):o===t})}return!0}},90638:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(96856).Z;Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var n=a.default,i=(null==t?void 0:t.suspense)?{}:{loading:function(e){return e.error,e.isLoading,e.pastDelay,null}};if(r(e,Promise)?i.loader=function(){return e}:"function"==typeof e?i.loader=e:"object"==typeof e&&(i=o({},i,e)),(i=o({},i,t)).suspense&&(delete i.ssr,delete i.loading),i.loadableGenerated&&delete(i=o({},i,i.loadableGenerated)).loadableGenerated,"boolean"==typeof i.ssr&&!i.suspense){if(!i.ssr)return delete i.ssr,u(n,i);delete i.ssr}return n(i)},t.noSSR=u;var o=n(6495).Z,i=n(92648).Z,a=(i(n(67294)),i(n(14302)));function u(e,t){return delete t.webpack,delete t.modules,e(t)}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},16319:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.LoadableContext=void 0;var r=(0,n(92648).Z)(n(67294)).default.createContext(null);t.LoadableContext=r},14302:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(79658).Z,o=n(7222).Z;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=n(6495).Z,a=(0,n(92648).Z)(n(67294)),u=n(16319),c=n(67294).useSyncExternalStore,l=[],s=[],f=!1;function p(e){var t=e(),n={loading:!0,loaded:null,error:null};return n.promise=t.then(function(e){return n.loading=!1,n.loaded=e,e}).catch(function(e){throw n.loading=!1,n.error=e,e}),n}var d=function(){function e(t,n){r(this,e),this._loadFn=t,this._opts=n,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}return o(e,[{key:"promise",value:function(){return this._res.promise}},{key:"retry",value:function(){var e=this;this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};var t=this._res,n=this._opts;t.loading&&("number"==typeof n.delay&&(0===n.delay?this._state.pastDelay=!0:this._delay=setTimeout(function(){e._update({pastDelay:!0})},n.delay)),"number"==typeof n.timeout&&(this._timeout=setTimeout(function(){e._update({timedOut:!0})},n.timeout))),this._res.promise.then(function(){e._update({}),e._clearTimeouts()}).catch(function(t){e._update({}),e._clearTimeouts()}),this._update({})}},{key:"_update",value:function(e){this._state=i({},this._state,{error:this._res.error,loaded:this._res.loaded,loading:this._res.loading},e),this._callbacks.forEach(function(e){return e()})}},{key:"_clearTimeouts",value:function(){clearTimeout(this._delay),clearTimeout(this._timeout)}},{key:"getCurrentValue",value:function(){return this._state}},{key:"subscribe",value:function(e){var t=this;return this._callbacks.add(e),function(){t._callbacks.delete(e)}}}]),e}();function v(e){return function(e,t){var n=function(){if(!v){var t=new d(e,p);v={getCurrentValue:t.getCurrentValue.bind(t),subscribe:t.subscribe.bind(t),retry:t.retry.bind(t),promise:t.promise.bind(t)}}return v.promise()},r=function(){n();var e=a.default.useContext(u.LoadableContext);e&&Array.isArray(p.modules)&&p.modules.forEach(function(t){e(t)})},o=function(e,t){r();var n=c(v.subscribe,v.getCurrentValue,v.getCurrentValue);return a.default.useImperativeHandle(t,function(){return{retry:v.retry}},[]),a.default.useMemo(function(){var t;return n.loading||n.error?a.default.createElement(p.loading,{isLoading:n.loading,pastDelay:n.pastDelay,timedOut:n.timedOut,error:n.error,retry:v.retry}):n.loaded?a.default.createElement((t=n.loaded)&&t.__esModule?t.default:t,e):null},[e,n])},l=function(e,t){return r(),a.default.createElement(p.lazy,i({},e,{ref:t}))},p=Object.assign({loader:null,loading:null,delay:200,timeout:null,webpack:null,modules:null,suspense:!1},t);p.suspense&&(p.lazy=a.default.lazy(p.loader));var v=null;if(!f){var m=p.webpack?p.webpack():p.modules;m&&s.push(function(e){var t=!0,r=!1,o=void 0;try{for(var i,a=m[Symbol.iterator]();!(t=(i=a.next()).done);t=!0){var u=i.value;if(-1!==e.indexOf(u))return n()}}catch(c){r=!0,o=c}finally{try{t||null==a.return||a.return()}finally{if(r)throw o}}})}var y=p.suspense?l:o;return y.preload=function(){return n()},y.displayName="LoadableComponent",a.default.forwardRef(y)}(p,e)}function m(e,t){for(var n=[];e.length;){var r=e.pop();n.push(r(t))}return Promise.all(n).then(function(){if(e.length)return m(e,t)})}v.preloadAll=function(){return new Promise(function(e,t){m(l).then(e,t)})},v.preloadReady=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return new Promise(function(t){var n=function(){return f=!0,t()};m(s,e).then(n,n)})},window.__NEXT_PRELOADREADY=v.preloadReady,t.default=v},8215:function(){},5152:function(e,t,n){e.exports=n(90638)},55162:function(e,t,n){"use strict";n.d(t,{uI:function(){return er}});var r=n(67294),o=n(45697),i=n.n(o),a=function(e,t){return(Object.setPrototypeOf||({__proto__:[]})instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])})(e,t)},u=function(){return(Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};function c(e,t,n,r){return new(n||(n=Promise))(function(o,i){function a(e){try{c(r.next(e))}catch(t){i(t)}}function u(e){try{c(r.throw(e))}catch(t){i(t)}}function c(e){var t;e.done?o(e.value):((t=e.value)instanceof n?t:new n(function(e){e(t)})).then(a,u)}c((r=r.apply(e,t||[])).next())})}function l(e,t){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function u(u){return function(c){return function(u){if(n)throw TypeError("Generator is already executing.");for(;i&&(i=0,u[0]&&(a=0)),a;)try{if(n=1,r&&(o=2&u[0]?r.return:u[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,u[1])).done)return o;switch(r=0,o&&(u=[2&u[0],o.value]),u[0]){case 0:case 1:o=u;break;case 4:return a.label++,{value:u[1],done:!1};case 5:a.label++,r=u[1],u=[0];continue;case 7:u=a.ops.pop(),a.trys.pop();continue;default:if(!(o=(o=a.trys).length>0&&o[o.length-1])&&(6===u[0]||2===u[0])){a=0;continue}if(3===u[0]&&(!o||u[1]>o[0]&&u[1]<o[3])){a.label=u[1];break}if(6===u[0]&&a.label<o[1]){a.label=o[1],o=u;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(u);break}o[2]&&a.ops.pop(),a.trys.pop();continue}u=t.call(e,a)}catch(c){u=[6,c],r=0}finally{n=o=0}if(5&u[0])throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}([u,c])}}}function s(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,o,i=n.call(e),a=[];try{for(;(void 0===t||t-- >0)&&!(r=i.next()).done;)a.push(r.value)}catch(u){o={error:u}}finally{try{r&&!r.done&&(n=i.return)&&n.call(i)}finally{if(o)throw o.error}}return a}function f(e,t,n){if(n||2===arguments.length)for(var r,o=0,i=t.length;o<i;o++)!r&&o in t||(r||(r=Array.prototype.slice.call(t,0,o)),r[o]=t[o]);return e.concat(r||Array.prototype.slice.call(t))}var p=new Map([["aac","audio/aac"],["abw","application/x-abiword"],["arc","application/x-freearc"],["avif","image/avif"],["avi","video/x-msvideo"],["azw","application/vnd.amazon.ebook"],["bin","application/octet-stream"],["bmp","image/bmp"],["bz","application/x-bzip"],["bz2","application/x-bzip2"],["cda","application/x-cdf"],["csh","application/x-csh"],["css","text/css"],["csv","text/csv"],["doc","application/msword"],["docx","application/vnd.openxmlformats-officedocument.wordprocessingml.document"],["eot","application/vnd.ms-fontobject"],["epub","application/epub+zip"],["gz","application/gzip"],["gif","image/gif"],["heic","image/heic"],["heif","image/heif"],["htm","text/html"],["html","text/html"],["ico","image/vnd.microsoft.icon"],["ics","text/calendar"],["jar","application/java-archive"],["jpeg","image/jpeg"],["jpg","image/jpeg"],["js","text/javascript"],["json","application/json"],["jsonld","application/ld+json"],["mid","audio/midi"],["midi","audio/midi"],["mjs","text/javascript"],["mp3","audio/mpeg"],["mp4","video/mp4"],["mpeg","video/mpeg"],["mpkg","application/vnd.apple.installer+xml"],["odp","application/vnd.oasis.opendocument.presentation"],["ods","application/vnd.oasis.opendocument.spreadsheet"],["odt","application/vnd.oasis.opendocument.text"],["oga","audio/ogg"],["ogv","video/ogg"],["ogx","application/ogg"],["opus","audio/opus"],["otf","font/otf"],["png","image/png"],["pdf","application/pdf"],["php","application/x-httpd-php"],["ppt","application/vnd.ms-powerpoint"],["pptx","application/vnd.openxmlformats-officedocument.presentationml.presentation"],["rar","application/vnd.rar"],["rtf","application/rtf"],["sh","application/x-sh"],["svg","image/svg+xml"],["swf","application/x-shockwave-flash"],["tar","application/x-tar"],["tif","image/tiff"],["tiff","image/tiff"],["ts","video/mp2t"],["ttf","font/ttf"],["txt","text/plain"],["vsd","application/vnd.visio"],["wav","audio/wav"],["weba","audio/webm"],["webm","video/webm"],["webp","image/webp"],["woff","font/woff"],["woff2","font/woff2"],["xhtml","application/xhtml+xml"],["xls","application/vnd.ms-excel"],["xlsx","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"],["xml","application/xml"],["xul","application/vnd.mozilla.xul+xml"],["zip","application/zip"],["7z","application/x-7z-compressed"],["mkv","video/x-matroska"],["mov","video/quicktime"],["msg","application/vnd.ms-outlook"]]);function d(e,t){var n=function(e){var t=e.name;if(t&&-1!==t.lastIndexOf(".")&&!e.type){var n=t.split(".").pop().toLowerCase(),r=p.get(n);r&&Object.defineProperty(e,"type",{value:r,writable:!1,configurable:!1,enumerable:!0})}return e}(e);if("string"!=typeof n.path){var r=e.webkitRelativePath;Object.defineProperty(n,"path",{value:"string"==typeof t?t:"string"==typeof r&&r.length>0?r:e.name,writable:!1,configurable:!1,enumerable:!0})}return n}var v=[".DS_Store","Thumbs.db"];function m(e){return"object"==typeof e&&null!==e}function y(e){return e.filter(function(e){return -1===v.indexOf(e.name)})}function b(e){if(null===e)return[];for(var t=[],n=0;n<e.length;n++){var r=e[n];t.push(r)}return t}function g(e){if("function"!=typeof e.webkitGetAsEntry)return h(e);var t=e.webkitGetAsEntry();return t&&t.isDirectory?D(t):h(e)}function h(e){var t=e.getAsFile();return t?Promise.resolve(d(t)):Promise.reject("".concat(e," is not a File"))}function w(e){return c(this,void 0,void 0,function(){return l(this,function(t){return[2,e.isDirectory?D(e):function(e){return c(this,void 0,void 0,function(){return l(this,function(t){return[2,new Promise(function(t,n){e.file(function(n){t(d(n,e.fullPath))},function(e){n(e)})})]})})}(e)]})})}function D(e){var t=e.createReader();return new Promise(function(e,n){var r=[];!function o(){var i=this;t.readEntries(function(t){return c(i,void 0,void 0,function(){var i,a,u;return l(this,function(i){switch(i.label){case 0:if(t.length)return[3,5];i.label=1;case 1:return i.trys.push([1,3,,4]),[4,Promise.all(r)];case 2:return e(i.sent()),[3,4];case 3:return n(i.sent()),[3,4];case 4:return[3,6];case 5:u=Promise.all(t.map(w)),r.push(u),o(),i.label=6;case 6:return[2]}})})},function(e){n(e)})}()})}var O=n(58363);function x(e){return function(e){if(Array.isArray(e))return C(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||E(e)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function j(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function _(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?j(Object(n),!0).forEach(function(t){A(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):j(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function A(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function k(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n,r,o=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=o){var i=[],a=!0,u=!1;try{for(o=o.call(e);!(a=(n=o.next()).done)&&(i.push(n.value),!t||i.length!==t);a=!0);}catch(c){u=!0,r=c}finally{try{a||null==o.return||o.return()}finally{if(u)throw r}}return i}}(e,t)||E(e,t)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function E(e,t){if(e){if("string"==typeof e)return C(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if("Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return C(e,t)}}function C(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}var P=function(e){var t=Array.isArray(e=Array.isArray(e)&&1===e.length?e[0]:e)?"one of ".concat(e.join(", ")):e;return{code:"file-invalid-type",message:"File type must be ".concat(t)}},F=function(e){return{code:"file-too-large",message:"File is larger than ".concat(e," ").concat(1===e?"byte":"bytes")}},S=function(e){return{code:"file-too-small",message:"File is smaller than ".concat(e," ").concat(1===e?"byte":"bytes")}},R={code:"too-many-files",message:"Too many files"};function z(e,t){var n="application/x-moz-file"===e.type||(0,O.Z)(e,t);return[n,n?null:P(t)]}function M(e,t,n){if(T(e.size)){if(T(t)&&T(n)){if(e.size>n)return[!1,F(n)];if(e.size<t)return[!1,S(t)]}else if(T(t)&&e.size<t)return[!1,S(t)];else if(T(n)&&e.size>n)return[!1,F(n)]}return[!0,null]}function T(e){return null!=e}function Z(e){return"function"==typeof e.isPropagationStopped?e.isPropagationStopped():void 0!==e.cancelBubble&&e.cancelBubble}function I(e){return e.dataTransfer?Array.prototype.some.call(e.dataTransfer.types,function(e){return"Files"===e||"application/x-moz-file"===e}):!!e.target&&!!e.target.files}function L(e){e.preventDefault()}function B(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){for(var n=arguments.length,r=Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];return t.some(function(t){return!Z(e)&&t&&t.apply(void 0,[e].concat(r)),Z(e)})}}function K(e){return"audio/*"===e||"video/*"===e||"image/*"===e||"text/*"===e||/\w+\/[-+.\w]+/g.test(e)}function N(e){return/^.*\.[\w]+$/.test(e)}var G=["children"],U=["open"],V=["refKey","role","onKeyDown","onFocus","onBlur","onClick","onDragEnter","onDragOver","onDragLeave","onDrop"],$=["refKey","onChange","onClick"];function H(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n,r,o=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=o){var i=[],a=!0,u=!1;try{for(o=o.call(e);!(a=(n=o.next()).done)&&(i.push(n.value),!t||i.length!==t);a=!0);}catch(c){u=!0,r=c}finally{try{a||null==o.return||o.return()}finally{if(u)throw r}}return i}}(e,t)||W(e,t)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function W(e,t){if(e){if("string"==typeof e)return q(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if("Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return q(e,t)}}function q(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function Y(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function X(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Y(Object(n),!0).forEach(function(t){J(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Y(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function J(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Q(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var ee=(0,r.forwardRef)(function(e,t){var n=e.children,o=Q(e,G),i=er(o),a=i.open,u=Q(i,U);return(0,r.useImperativeHandle)(t,function(){return{open:a}},[a]),r.createElement(r.Fragment,null,n(X(X({},u),{},{open:a})))});ee.displayName="Dropzone";var et={disabled:!1,getFilesFromEvent:function(e){return c(this,void 0,void 0,function(){return l(this,function(t){var n,r,o;if(m(e)&&(n=e.dataTransfer,m(n)))return[2,function(e,t){return c(this,void 0,void 0,function(){var n,r;return l(this,function(r){switch(r.label){case 0:if(!e.items)return[3,2];if(n=b(e.items).filter(function(e){return"file"===e.kind}),"drop"!==t)return[2,n];return[4,Promise.all(n.map(g))];case 1:return[2,y(function e(t){return t.reduce(function(t,n){return f(f([],s(t),!1),s(Array.isArray(n)?e(n):[n]),!1)},[])}(r.sent()))];case 2:return[2,y(b(e.files).map(function(e){return d(e)}))]}})})}(e.dataTransfer,e.type)];if(r=e,m(r)&&m(r.target)){return[2,(o=e,b(o.target.files).map(function(e){return d(e)}))]}return Array.isArray(e)&&e.every(function(e){return"getFile"in e&&"function"==typeof e.getFile})?[2,function(e){return c(this,void 0,void 0,function(){var t;return l(this,function(t){switch(t.label){case 0:return[4,Promise.all(e.map(function(e){return e.getFile()}))];case 1:return[2,t.sent().map(function(e){return d(e)})]}})})}(e)]:[2,[]]})})},maxSize:1/0,minSize:0,multiple:!0,maxFiles:0,preventDropOnDocument:!0,noClick:!1,noKeyboard:!1,noDrag:!1,noDragEventsBubbling:!1,validator:null,useFsAccessApi:!0,autoFocus:!1};ee.defaultProps=et,ee.propTypes={children:i().func,accept:i().objectOf(i().arrayOf(i().string)),multiple:i().bool,preventDropOnDocument:i().bool,noClick:i().bool,noKeyboard:i().bool,noDrag:i().bool,noDragEventsBubbling:i().bool,minSize:i().number,maxSize:i().number,maxFiles:i().number,disabled:i().bool,getFilesFromEvent:i().func,onFileDialogCancel:i().func,onFileDialogOpen:i().func,useFsAccessApi:i().bool,autoFocus:i().bool,onDragEnter:i().func,onDragLeave:i().func,onDragOver:i().func,onDrop:i().func,onDropAccepted:i().func,onDropRejected:i().func,onError:i().func,validator:i().func};var en={isFocused:!1,isFileDialogActive:!1,isDragActive:!1,isDragAccept:!1,isDragReject:!1,acceptedFiles:[],fileRejections:[]};function er(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=X(X({},et),e),n=t.accept,o=t.disabled,i=t.getFilesFromEvent,a=t.maxSize,u=t.minSize,c=t.multiple,l=t.maxFiles,s=t.onDragEnter,f=t.onDragLeave,p=t.onDragOver,d=t.onDrop,v=t.onDropAccepted,m=t.onDropRejected,y=t.onFileDialogCancel,b=t.onFileDialogOpen,g=t.useFsAccessApi,h=t.autoFocus,w=t.preventDropOnDocument,D=t.noClick,O=t.noKeyboard,j=t.noDrag,E=t.noDragEventsBubbling,C=t.onError,P=t.validator,F=(0,r.useMemo)(function(){return function(e){if(T(e))return Object.entries(e).reduce(function(e,t){var n=k(t,2),r=n[0],o=n[1];return[].concat(x(e),[r],x(o))},[]).filter(function(e){return K(e)||N(e)}).join(",")}(n)},[n]),S=(0,r.useMemo)(function(){var e;return e=n,T(e)?[{description:"Files",accept:Object.entries(e).filter(function(e){var t=k(e,2),n=t[0],r=t[1],o=!0;return K(n)||(console.warn('Skipped "'.concat(n,'" because it is not a valid MIME type. Check https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types for a list of valid MIME types.')),o=!1),Array.isArray(r)&&r.every(N)||(console.warn('Skipped "'.concat(n,'" because an invalid file extension was provided.')),o=!1),o}).reduce(function(e,t){var n=k(t,2),r=n[0],o=n[1];return _(_({},e),{},A({},r,o))},{})}]:e},[n]),G=(0,r.useMemo)(function(){return"function"==typeof b?b:ei},[b]),U=(0,r.useMemo)(function(){return"function"==typeof y?y:ei},[y]),Y=(0,r.useRef)(null),ee=(0,r.useRef)(null),er=(0,r.useReducer)(eo,en),ea=H(er,2),eu=ea[0],ec=ea[1],el=eu.isFocused,es=eu.isFileDialogActive,ef=(0,r.useRef)("undefined"!=typeof window&&window.isSecureContext&&g&&"showOpenFilePicker"in window),ep=function(){!ef.current&&es&&setTimeout(function(){ee.current&&(ee.current.files.length||(ec({type:"closeDialog"}),U()))},300)};(0,r.useEffect)(function(){return window.addEventListener("focus",ep,!1),function(){window.removeEventListener("focus",ep,!1)}},[ee,es,U,ef]);var ed=(0,r.useRef)([]),ev=function(e){!(Y.current&&Y.current.contains(e.target))&&(e.preventDefault(),ed.current=[])};(0,r.useEffect)(function(){return w&&(document.addEventListener("dragover",L,!1),document.addEventListener("drop",ev,!1)),function(){w&&(document.removeEventListener("dragover",L),document.removeEventListener("drop",ev))}},[Y,w]),(0,r.useEffect)(function(){return!o&&h&&Y.current&&Y.current.focus(),function(){}},[Y,h,o]);var em=(0,r.useCallback)(function(e){C?C(e):console.error(e)},[C]),ey=(0,r.useCallback)(function(e){var t;e.preventDefault(),e.persist(),eC(e),ed.current=[].concat(function(e){if(Array.isArray(e))return q(e)}(t=ed.current)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(t)||W(t)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),[e.target]),I(e)&&Promise.resolve(i(e)).then(function(t){if(!Z(e)||E){var n,r,o,i,f,p,d,v,m=t.length,y=m>0&&(r=(n={files:t,accept:F,minSize:u,maxSize:a,multiple:c,maxFiles:l,validator:P}).files,o=n.accept,i=n.minSize,f=n.maxSize,p=n.multiple,d=n.maxFiles,v=n.validator,(!!p||!(r.length>1))&&(!p||!(d>=1)||!(r.length>d))&&r.every(function(e){var t=z(e,o),n=k(t,1)[0],r=M(e,i,f),a=k(r,1)[0],u=v?v(e):null;return n&&a&&!u}));ec({isDragAccept:y,isDragReject:m>0&&!y,isDragActive:!0,type:"setDraggedFiles"}),s&&s(e)}}).catch(function(e){return em(e)})},[i,s,em,E,F,u,a,c,l,P]),eb=(0,r.useCallback)(function(e){e.preventDefault(),e.persist(),eC(e);var t=I(e);if(t&&e.dataTransfer)try{e.dataTransfer.dropEffect="copy"}catch(n){}return t&&p&&p(e),!1},[p,E]),eg=(0,r.useCallback)(function(e){e.preventDefault(),e.persist(),eC(e);var t=ed.current.filter(function(e){return Y.current&&Y.current.contains(e)}),n=t.indexOf(e.target);-1!==n&&t.splice(n,1),ed.current=t,!(t.length>0)&&(ec({type:"setDraggedFiles",isDragActive:!1,isDragAccept:!1,isDragReject:!1}),I(e)&&f&&f(e))},[Y,f,E]),eh=(0,r.useCallback)(function(e,t){var n=[],r=[];e.forEach(function(e){var t=z(e,F),o=H(t,2),i=o[0],c=o[1],l=M(e,u,a),s=H(l,2),f=s[0],p=s[1],d=P?P(e):null;if(i&&f&&!d)n.push(e);else{var v=[c,p];d&&(v=v.concat(d)),r.push({file:e,errors:v.filter(function(e){return e})})}}),(!c&&n.length>1||c&&l>=1&&n.length>l)&&(n.forEach(function(e){r.push({file:e,errors:[R]})}),n.splice(0)),ec({acceptedFiles:n,fileRejections:r,type:"setFiles"}),d&&d(n,r,t),r.length>0&&m&&m(r,t),n.length>0&&v&&v(n,t)},[ec,c,F,u,a,l,d,v,m,P]),ew=(0,r.useCallback)(function(e){e.preventDefault(),e.persist(),eC(e),ed.current=[],I(e)&&Promise.resolve(i(e)).then(function(t){(!Z(e)||E)&&eh(t,e)}).catch(function(e){return em(e)}),ec({type:"reset"})},[i,eh,em,E]),eD=(0,r.useCallback)(function(){if(ef.current){ec({type:"openDialog"}),G(),window.showOpenFilePicker({multiple:c,types:S}).then(function(e){return i(e)}).then(function(e){eh(e,null),ec({type:"closeDialog"})}).catch(function(e){var t,n;e instanceof DOMException&&("AbortError"===e.name||e.code===e.ABORT_ERR)?(U(e),ec({type:"closeDialog"})):(n=e)instanceof DOMException&&("SecurityError"===n.name||n.code===n.SECURITY_ERR)?(ef.current=!1,ee.current?(ee.current.value=null,ee.current.click()):em(Error("Cannot open the file picker because the https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API is not supported and no <input> was provided."))):em(e)});return}ee.current&&(ec({type:"openDialog"}),G(),ee.current.value=null,ee.current.click())},[ec,G,U,g,eh,em,S,c]),eO=(0,r.useCallback)(function(e){Y.current&&Y.current.isEqualNode(e.target)&&(" "===e.key||"Enter"===e.key||32===e.keyCode||13===e.keyCode)&&(e.preventDefault(),eD())},[Y,eD]),ex=(0,r.useCallback)(function(){ec({type:"focus"})},[]),ej=(0,r.useCallback)(function(){ec({type:"blur"})},[]),e_=(0,r.useCallback)(function(){!D&&(!function(){var e,t,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:window.navigator.userAgent;return -1!==n.indexOf("MSIE")||-1!==n.indexOf("Trident/")||-1!==n.indexOf("Edge/")}()?eD():setTimeout(eD,0))},[D,eD]),eA=function(e){return o?null:e},ek=function(e){return O?null:eA(e)},eE=function(e){return j?null:eA(e)},eC=function(e){E&&e.stopPropagation()},eP=(0,r.useMemo)(function(){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.refKey,n=e.role,r=e.onKeyDown,i=e.onFocus,a=e.onBlur,u=e.onClick,c=e.onDragEnter,l=e.onDragOver,s=e.onDragLeave,f=e.onDrop,p=Q(e,V);return X(X(J({onKeyDown:ek(B(r,eO)),onFocus:ek(B(i,ex)),onBlur:ek(B(a,ej)),onClick:eA(B(u,e_)),onDragEnter:eE(B(c,ey)),onDragOver:eE(B(l,eb)),onDragLeave:eE(B(s,eg)),onDrop:eE(B(f,ew)),role:"string"==typeof n&&""!==n?n:"presentation"},void 0===t?"ref":t,Y),o||O?{}:{tabIndex:0}),p)}},[Y,eO,ex,ej,e_,ey,eb,eg,ew,O,j,o]),eF=(0,r.useCallback)(function(e){e.stopPropagation()},[]),eS=(0,r.useMemo)(function(){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.refKey,n=e.onChange,r=e.onClick,o=Q(e,$),i=J({accept:F,multiple:c,type:"file",style:{display:"none"},onChange:eA(B(n,ew)),onClick:eA(B(r,eF)),tabIndex:-1},void 0===t?"ref":t,ee);return X(X({},i),o)}},[ee,n,c,ew,o]);return X(X({},eu),{},{isFocused:el&&!o,getRootProps:eP,getInputProps:eS,rootRef:Y,inputRef:ee,open:eA(eD)})}function eo(e,t){switch(t.type){case"focus":return X(X({},e),{},{isFocused:!0});case"blur":return X(X({},e),{},{isFocused:!1});case"openDialog":return X(X({},en),{},{isFileDialogActive:!0});case"closeDialog":return X(X({},e),{},{isFileDialogActive:!1});case"setDraggedFiles":return X(X({},e),{},{isDragActive:t.isDragActive,isDragAccept:t.isDragAccept,isDragReject:t.isDragReject});case"setFiles":return X(X({},e),{},{acceptedFiles:t.acceptedFiles,fileRejections:t.fileRejections});case"reset":return X({},en);default:return e}}function ei(){}}}]);