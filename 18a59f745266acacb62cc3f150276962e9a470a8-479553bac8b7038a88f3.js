(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{"+924":function(t,n,e){"use strict";e.d(n,"d",(function(){return o})),e.d(n,"c",(function(){return i})),e.d(n,"b",(function(){return c})),e.d(n,"a",(function(){return s}));var r=e("9AQC");function o(t,n){return void 0===n&&(n=0),"string"!=typeof t||0===n||t.length<=n?t:t.substr(0,n)+"..."}function i(t,n){var e=t,r=e.length;if(r<=150)return e;n>r&&(n=r);var o=Math.max(n-60,0);o<5&&(o=0);var i=Math.min(o+140,r);return i>r-5&&(i=r),i===r&&(o=Math.max(i-140,0)),e=e.slice(o,i),o>0&&(e="'{snip} "+e),i<r&&(e+=" {snip}"),e}function c(t,n){if(!Array.isArray(t))return"";for(var e=[],r=0;r<t.length;r++){var o=t[r];try{e.push(String(o))}catch(i){e.push("[value cannot be serialized]")}}return e.join(n)}function s(t,n){return!!Object(r.k)(t)&&(Object(r.j)(n)?n.test(t):"string"==typeof n&&-1!==t.indexOf(n))}},"0uqK":function(t,n,e){var r=e("m/aQ"),o=e("ckLD"),i=e("FUra");t.exports=function(t,n){if(r(t),o(n)&&n.constructor===t)return n;var e=i.f(t);return(0,e.resolve)(n),e.promise}},"3UD+":function(t,n){t.exports=function(t){if(!t.webpackPolyfill){var n=Object.create(t);n.children||(n.children=[]),Object.defineProperty(n,"loaded",{enumerable:!0,get:function(){return n.l}}),Object.defineProperty(n,"id",{enumerable:!0,get:function(){return n.i}}),Object.defineProperty(n,"exports",{enumerable:!0}),n.webpackPolyfill=1}return n}},"67Pw":function(t,n,e){var r=e("m/aQ"),o=e("wTlq"),i=e("QD2z")("species");t.exports=function(t,n){var e,c=r(t).constructor;return void 0===c||null==(e=r(c)[i])?n:o(e)}},"8LbN":function(t,n,e){"use strict";e.d(n,"a",(function(){return s}));var r=e("9/Zf"),o=Object(r.f)(),i="Sentry Logger ",c=function(){function t(){this._enabled=!1}return t.prototype.disable=function(){this._enabled=!1},t.prototype.enable=function(){this._enabled=!0},t.prototype.log=function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];this._enabled&&Object(r.c)((function(){o.console.log(i+"[Log]: "+t.join(" "))}))},t.prototype.warn=function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];this._enabled&&Object(r.c)((function(){o.console.warn(i+"[Warn]: "+t.join(" "))}))},t.prototype.error=function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];this._enabled&&Object(r.c)((function(){o.console.error(i+"[Error]: "+t.join(" "))}))},t}();o.__SENTRY__=o.__SENTRY__||{};var s=o.__SENTRY__.logger||(o.__SENTRY__.logger=new c)},"8oxB":function(t,n){var e,r,o=t.exports={};function i(){throw new Error("setTimeout has not been defined")}function c(){throw new Error("clearTimeout has not been defined")}function s(t){if(e===setTimeout)return setTimeout(t,0);if((e===i||!e)&&setTimeout)return e=setTimeout,setTimeout(t,0);try{return e(t,0)}catch(n){try{return e.call(null,t,0)}catch(n){return e.call(this,t,0)}}}!function(){try{e="function"==typeof setTimeout?setTimeout:i}catch(t){e=i}try{r="function"==typeof clearTimeout?clearTimeout:c}catch(t){r=c}}();var u,a=[],f=!1,p=-1;function h(){f&&u&&(f=!1,u.length?a=u.concat(a):p=-1,a.length&&l())}function l(){if(!f){var t=s(h);f=!0;for(var n=a.length;n;){for(u=a,a=[];++p<n;)u&&u[p].run();p=-1,n=a.length}u=null,f=!1,function(t){if(r===clearTimeout)return clearTimeout(t);if((r===c||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(t);try{r(t)}catch(n){try{return r.call(null,t)}catch(n){return r.call(this,t)}}}(t)}}function _(t,n){this.fun=t,this.array=n}function v(){}o.nextTick=function(t){var n=new Array(arguments.length-1);if(arguments.length>1)for(var e=1;e<arguments.length;e++)n[e-1]=arguments[e];a.push(new _(t,n)),1!==a.length||f||s(l)},_.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=v,o.addListener=v,o.once=v,o.off=v,o.removeListener=v,o.removeAllListeners=v,o.emit=v,o.prependListener=v,o.prependOnceListener=v,o.listeners=function(t){return[]},o.binding=function(t){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(t){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},"9/Zf":function(t,n,e){"use strict";(function(t,r,o){e.d(n,"i",(function(){return c})),e.d(n,"f",(function(){return u})),e.d(n,"m",(function(){return a})),e.d(n,"k",(function(){return f})),e.d(n,"d",(function(){return p})),e.d(n,"c",(function(){return h})),e.d(n,"b",(function(){return l})),e.d(n,"a",(function(){return _})),e.d(n,"g",(function(){return v})),e.d(n,"h",(function(){return d})),e.d(n,"l",(function(){return E})),e.d(n,"j",(function(){return S})),e.d(n,"e",(function(){return T}));var i=e("9AQC");e("+924");function c(){return"[object process]"===Object.prototype.toString.call(void 0!==t?t:0)}var s={};function u(){return c()?r:"undefined"!=typeof window?window:"undefined"!=typeof self?self:s}function a(){var t=u(),n=t.crypto||t.msCrypto;if(void 0!==n&&n.getRandomValues){var e=new Uint16Array(8);n.getRandomValues(e),e[3]=4095&e[3]|16384,e[4]=16383&e[4]|32768;var r=function(t){for(var n=t.toString(16);n.length<4;)n="0"+n;return n};return r(e[0])+r(e[1])+r(e[2])+r(e[3])+r(e[4])+r(e[5])+r(e[6])+r(e[7])}return"xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx".replace(/[xy]/g,(function(t){var n=16*Math.random()|0;return("x"===t?n:3&n|8).toString(16)}))}function f(t){if(!t)return{};var n=t.match(/^(([^:\/?#]+):)?(\/\/([^\/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/);if(!n)return{};var e=n[6]||"",r=n[8]||"";return{host:n[4],path:n[5],protocol:n[2],relative:n[5]+e+r}}function p(t){if(t.message)return t.message;if(t.exception&&t.exception.values&&t.exception.values[0]){var n=t.exception.values[0];return n.type&&n.value?n.type+": "+n.value:n.type||n.value||t.event_id||"<unknown>"}return t.event_id||"<unknown>"}function h(t){var n=u();if(!("console"in n))return t();var e=n.console,r={};["debug","info","warn","error","log","assert"].forEach((function(t){t in n.console&&e[t].__sentry_original__&&(r[t]=e[t],e[t]=e[t].__sentry_original__)}));var o=t();return Object.keys(r).forEach((function(t){e[t]=r[t]})),o}function l(t,n,e){t.exception=t.exception||{},t.exception.values=t.exception.values||[],t.exception.values[0]=t.exception.values[0]||{},t.exception.values[0].value=t.exception.values[0].value||n||"",t.exception.values[0].type=t.exception.values[0].type||e||"Error"}function _(t,n){void 0===n&&(n={});try{t.exception.values[0].mechanism=t.exception.values[0].mechanism||{},Object.keys(n).forEach((function(e){t.exception.values[0].mechanism[e]=n[e]}))}catch(e){}}function v(){try{return document.location.href}catch(t){return""}}function d(t){try{for(var n=t,e=[],r=0,o=0,i=" > ".length,c=void 0;n&&r++<5&&!("html"===(c=y(n))||r>1&&o+e.length*i+c.length>=80);)e.push(c),o+=c.length,n=n.parentNode;return e.reverse().join(" > ")}catch(s){return"<unknown>"}}function y(t){var n,e,r,o,c,s=t,u=[];if(!s||!s.tagName)return"";if(u.push(s.tagName.toLowerCase()),s.id&&u.push("#"+s.id),(n=s.className)&&Object(i.k)(n))for(e=n.split(/\s+/),c=0;c<e.length;c++)u.push("."+e[c]);var a=["type","name","title","alt"];for(c=0;c<a.length;c++)r=a[c],(o=s.getAttribute(r))&&u.push("["+r+'="'+o+'"]');return u.join("")}var g=Date.now(),b=0,x={now:function(){var t=Date.now()-g;return t<b&&(t=b),b=t,t},timeOrigin:g},m=function(){if(c())try{return(t="perf_hooks",o.require(t)).performance}catch(e){return x}var t,n=u().performance;return n&&n.now?(void 0===n.timeOrigin&&(n.timeOrigin=n.timing&&n.timing.navigationStart||g),n):x}();function E(){return(m.timeOrigin+m.now())/1e3}function S(t,n){if(!n)return 6e4;var e=parseInt(""+n,10);if(!isNaN(e))return 1e3*e;var r=Date.parse(""+n);return isNaN(r)?6e4:r-t}function T(t){try{return t&&"function"==typeof t&&t.name||"<anonymous>"}catch(n){return"<anonymous>"}}}).call(this,e("8oxB"),e("yLpj"),e("3UD+")(t))},"9AQC":function(t,n,e){"use strict";function r(t){switch(Object.prototype.toString.call(t)){case"[object Error]":case"[object Exception]":case"[object DOMException]":return!0;default:return v(t,Error)}}function o(t){return"[object ErrorEvent]"===Object.prototype.toString.call(t)}function i(t){return"[object DOMError]"===Object.prototype.toString.call(t)}function c(t){return"[object DOMException]"===Object.prototype.toString.call(t)}function s(t){return"[object String]"===Object.prototype.toString.call(t)}function u(t){return null===t||"object"!=typeof t&&"function"!=typeof t}function a(t){return"[object Object]"===Object.prototype.toString.call(t)}function f(t){return"undefined"!=typeof Event&&v(t,Event)}function p(t){return"undefined"!=typeof Element&&v(t,Element)}function h(t){return"[object RegExp]"===Object.prototype.toString.call(t)}function l(t){return Boolean(t&&t.then&&"function"==typeof t.then)}function _(t){return a(t)&&"nativeEvent"in t&&"preventDefault"in t&&"stopPropagation"in t}function v(t,n){try{return t instanceof n}catch(e){return!1}}e.d(n,"d",(function(){return r})),e.d(n,"e",(function(){return o})),e.d(n,"a",(function(){return i})),e.d(n,"b",(function(){return c})),e.d(n,"k",(function(){return s})),e.d(n,"i",(function(){return u})),e.d(n,"h",(function(){return a})),e.d(n,"f",(function(){return f})),e.d(n,"c",(function(){return p})),e.d(n,"j",(function(){return h})),e.d(n,"m",(function(){return l})),e.d(n,"l",(function(){return _})),e.d(n,"g",(function(){return v}))},FUra:function(t,n,e){"use strict";var r=e("wTlq"),o=function(t){var n,e;this.promise=new t((function(t,r){if(void 0!==n||void 0!==e)throw TypeError("Bad Promise constructor");n=t,e=r})),this.resolve=r(n),this.reject=r(e)};t.exports.f=function(t){return new o(t)}},HR75:function(t,n,e){"use strict";e.d(n,"a",(function(){return i}));e("eiRb");var r,o=e("9AQC");!function(t){t.PENDING="PENDING",t.RESOLVED="RESOLVED",t.REJECTED="REJECTED"}(r||(r={}));var i=function(){function t(t){var n=this;this._state=r.PENDING,this._handlers=[],this._resolve=function(t){n._setResult(r.RESOLVED,t)},this._reject=function(t){n._setResult(r.REJECTED,t)},this._setResult=function(t,e){n._state===r.PENDING&&(Object(o.m)(e)?e.then(n._resolve,n._reject):(n._state=t,n._value=e,n._executeHandlers()))},this._attachHandler=function(t){n._handlers=n._handlers.concat(t),n._executeHandlers()},this._executeHandlers=function(){if(n._state!==r.PENDING){var t=n._handlers.slice();n._handlers=[],t.forEach((function(t){t.done||(n._state===r.RESOLVED&&t.onfulfilled&&t.onfulfilled(n._value),n._state===r.REJECTED&&t.onrejected&&t.onrejected(n._value),t.done=!0)}))}};try{t(this._resolve,this._reject)}catch(e){this._reject(e)}}return t.prototype.toString=function(){return"[object SyncPromise]"},t.resolve=function(n){return new t((function(t){t(n)}))},t.reject=function(n){return new t((function(t,e){e(n)}))},t.all=function(n){return new t((function(e,r){if(Array.isArray(n))if(0!==n.length){var o=n.length,i=[];n.forEach((function(n,c){t.resolve(n).then((function(t){i[c]=t,0===(o-=1)&&e(i)})).then(null,r)}))}else e([]);else r(new TypeError("Promise.all requires an array as input."))}))},t.prototype.then=function(n,e){var r=this;return new t((function(t,o){r._attachHandler({done:!1,onfulfilled:function(e){if(n)try{return void t(n(e))}catch(r){return void o(r)}else t(e)},onrejected:function(n){if(e)try{return void t(e(n))}catch(r){return void o(r)}else o(n)}})}))},t.prototype.catch=function(t){return this.then((function(t){return t}),t)},t.prototype.finally=function(n){var e=this;return new t((function(t,r){var o,i;return e.then((function(t){i=!1,o=t,n&&n()}),(function(t){i=!0,o=t,n&&n()})).then((function(){i?r(o):t(o)}))}))},t}()},JdiF:function(t,n,e){"use strict";e.d(n,"a",(function(){return r})),e.d(n,"b",(function(){return i}));var r=function(){return(r=Object.assign||function(t){for(var n,e=1,r=arguments.length;e<r;e++)for(var o in n=arguments[e])Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o]);return t}).apply(this,arguments)};function o(t,n){var e="function"==typeof Symbol&&t[Symbol.iterator];if(!e)return t;var r,o,i=e.call(t),c=[];try{for(;(void 0===n||n-- >0)&&!(r=i.next()).done;)c.push(r.value)}catch(s){o={error:s}}finally{try{r&&!r.done&&(e=i.return)&&e.call(i)}finally{if(o)throw o.error}}return c}function i(){for(var t=[],n=0;n<arguments.length;n++)t=t.concat(o(arguments[n]));return t}},KjyA:function(t,n,e){"use strict";e.d(n,"a",(function(){return s})),e.d(n,"b",(function(){return a}));var r=e("JdiF"),o=e("HR75"),i=e("9AQC"),c=e("9/Zf"),s=function(){function t(){this._notifyingListeners=!1,this._scopeListeners=[],this._eventProcessors=[],this._breadcrumbs=[],this._user={},this._tags={},this._extra={},this._contexts={}}return t.prototype.addScopeListener=function(t){this._scopeListeners.push(t)},t.prototype.addEventProcessor=function(t){return this._eventProcessors.push(t),this},t.prototype._notifyScopeListeners=function(){var t=this;this._notifyingListeners||(this._notifyingListeners=!0,setTimeout((function(){t._scopeListeners.forEach((function(n){n(t)})),t._notifyingListeners=!1})))},t.prototype._notifyEventProcessors=function(t,n,e,c){var s=this;return void 0===c&&(c=0),new o.a((function(o,u){var a=t[c];if(null===n||"function"!=typeof a)o(n);else{var f=a(r.a({},n),e);Object(i.m)(f)?f.then((function(n){return s._notifyEventProcessors(t,n,e,c+1).then(o)})).then(null,u):s._notifyEventProcessors(t,f,e,c+1).then(o).then(null,u)}}))},t.prototype.setUser=function(t){return this._user=t||{},this._notifyScopeListeners(),this},t.prototype.setTags=function(t){return this._tags=r.a({},this._tags,t),this._notifyScopeListeners(),this},t.prototype.setTag=function(t,n){var e;return this._tags=r.a({},this._tags,((e={})[t]=n,e)),this._notifyScopeListeners(),this},t.prototype.setExtras=function(t){return this._extra=r.a({},this._extra,t),this._notifyScopeListeners(),this},t.prototype.setExtra=function(t,n){var e;return this._extra=r.a({},this._extra,((e={})[t]=n,e)),this._notifyScopeListeners(),this},t.prototype.setFingerprint=function(t){return this._fingerprint=t,this._notifyScopeListeners(),this},t.prototype.setLevel=function(t){return this._level=t,this._notifyScopeListeners(),this},t.prototype.setTransactionName=function(t){return this._transactionName=t,this._notifyScopeListeners(),this},t.prototype.setTransaction=function(t){return this.setTransactionName(t)},t.prototype.setContext=function(t,n){var e;return this._contexts=r.a({},this._contexts,((e={})[t]=n,e)),this._notifyScopeListeners(),this},t.prototype.setSpan=function(t){return this._span=t,this._notifyScopeListeners(),this},t.prototype.getSpan=function(){return this._span},t.prototype.getTransaction=function(){var t=this.getSpan();if(t&&t.spanRecorder&&t.spanRecorder.spans[0])return t.spanRecorder.spans[0]},t.clone=function(n){var e=new t;return n&&(e._breadcrumbs=r.b(n._breadcrumbs),e._tags=r.a({},n._tags),e._extra=r.a({},n._extra),e._contexts=r.a({},n._contexts),e._user=n._user,e._level=n._level,e._span=n._span,e._transactionName=n._transactionName,e._fingerprint=n._fingerprint,e._eventProcessors=r.b(n._eventProcessors)),e},t.prototype.update=function(n){if(!n)return this;if("function"==typeof n){var e=n(this);return e instanceof t?e:this}return n instanceof t?(this._tags=r.a({},this._tags,n._tags),this._extra=r.a({},this._extra,n._extra),this._contexts=r.a({},this._contexts,n._contexts),n._user&&(this._user=n._user),n._level&&(this._level=n._level),n._fingerprint&&(this._fingerprint=n._fingerprint)):Object(i.h)(n)&&(n=n,this._tags=r.a({},this._tags,n.tags),this._extra=r.a({},this._extra,n.extra),this._contexts=r.a({},this._contexts,n.contexts),n.user&&(this._user=n.user),n.level&&(this._level=n.level),n.fingerprint&&(this._fingerprint=n.fingerprint)),this},t.prototype.clear=function(){return this._breadcrumbs=[],this._tags={},this._extra={},this._user={},this._contexts={},this._level=void 0,this._transactionName=void 0,this._fingerprint=void 0,this._span=void 0,this._notifyScopeListeners(),this},t.prototype.addBreadcrumb=function(t,n){var e=r.a({timestamp:Object(c.l)()},t);return this._breadcrumbs=void 0!==n&&n>=0?r.b(this._breadcrumbs,[e]).slice(-n):r.b(this._breadcrumbs,[e]),this._notifyScopeListeners(),this},t.prototype.clearBreadcrumbs=function(){return this._breadcrumbs=[],this._notifyScopeListeners(),this},t.prototype._applyFingerprint=function(t){t.fingerprint=t.fingerprint?Array.isArray(t.fingerprint)?t.fingerprint:[t.fingerprint]:[],this._fingerprint&&(t.fingerprint=t.fingerprint.concat(this._fingerprint)),t.fingerprint&&!t.fingerprint.length&&delete t.fingerprint},t.prototype.applyToEvent=function(t,n){return this._extra&&Object.keys(this._extra).length&&(t.extra=r.a({},this._extra,t.extra)),this._tags&&Object.keys(this._tags).length&&(t.tags=r.a({},this._tags,t.tags)),this._user&&Object.keys(this._user).length&&(t.user=r.a({},this._user,t.user)),this._contexts&&Object.keys(this._contexts).length&&(t.contexts=r.a({},this._contexts,t.contexts)),this._level&&(t.level=this._level),this._transactionName&&(t.transaction=this._transactionName),this._span&&(t.contexts=r.a({trace:this._span.getTraceContext()},t.contexts)),this._applyFingerprint(t),t.breadcrumbs=r.b(t.breadcrumbs||[],this._breadcrumbs),t.breadcrumbs=t.breadcrumbs.length>0?t.breadcrumbs:void 0,this._notifyEventProcessors(r.b(u(),this._eventProcessors),t,n)},t}();function u(){var t=Object(c.f)();return t.__SENTRY__=t.__SENTRY__||{},t.__SENTRY__.globalEventProcessors=t.__SENTRY__.globalEventProcessors||[],t.__SENTRY__.globalEventProcessors}function a(t){u().push(t)}},OaLt:function(t,n,e){var r=e("JhOX");t.exports=!!Object.getOwnPropertySymbols&&!r((function(){return!String(Symbol())}))},QD2z:function(t,n,e){var r=e("REpN"),o=e("8deY"),i=e("34EK"),c=e("F8ZZ"),s=e("OaLt"),u=e("TuXZ"),a=o("wks"),f=r.Symbol,p=u?f:f&&f.withoutSetter||c;t.exports=function(t){return i(a,t)||(s&&i(f,t)?a[t]=f[t]:a[t]=p("Symbol."+t)),a[t]}},TuXZ:function(t,n,e){var r=e("OaLt");t.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},eSMk:function(t,n,e){var r=e("REpN");t.exports=r.Promise},eiRb:function(t,n,e){"use strict";var r=e("ZS3K"),o=e("lSYd"),i=e("eSMk"),c=e("JhOX"),s=e("jdR/"),u=e("67Pw"),a=e("0uqK"),f=e("+7hJ");r({target:"Promise",proto:!0,real:!0,forced:!!i&&c((function(){i.prototype.finally.call({then:function(){}},(function(){}))}))},{finally:function(t){var n=u(this,s("Promise")),e="function"==typeof t;return this.then(e?function(e){return a(n,t()).then((function(){return e}))}:t,e?function(e){return a(n,t()).then((function(){throw e}))}:t)}}),o||"function"!=typeof i||i.prototype.finally||f(i.prototype,"finally",s("Promise").prototype.finally)},gtzJ:function(t,n,e){"use strict";e.d(n,"c",(function(){return u})),e.d(n,"d",(function(){return a})),e.d(n,"b",(function(){return f})),e.d(n,"e",(function(){return p})),e.d(n,"a",(function(){return h})),e.d(n,"f",(function(){return l})),e.d(n,"h",(function(){return _})),e.d(n,"j",(function(){return v})),e.d(n,"g",(function(){return d})),e.d(n,"i",(function(){return y})),e.d(n,"k",(function(){return g})),e.d(n,"m",(function(){return b})),e.d(n,"l",(function(){return x}));var r=function(){return(r=Object.assign||function(t){for(var n,e=1,r=arguments.length;e<r;e++)for(var o in n=arguments[e])Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o]);return t}).apply(this,arguments)};function o(t,n){var e="function"==typeof Symbol&&t[Symbol.iterator];if(!e)return t;var r,o,i=e.call(t),c=[];try{for(;(void 0===n||n-- >0)&&!(r=i.next()).done;)c.push(r.value)}catch(s){o={error:s}}finally{try{r&&!r.done&&(e=i.return)&&e.call(i)}finally{if(o)throw o.error}}return c}function i(){for(var t=[],n=0;n<arguments.length;n++)t=t.concat(o(arguments[n]));return t}var c=e("lW6c");function s(t){for(var n=[],e=1;e<arguments.length;e++)n[e-1]=arguments[e];var r=Object(c.b)();if(r&&r[t])return r[t].apply(r,i(n));throw new Error("No hub defined or "+t+" was not found on the hub, please open a bug report.")}function u(t,n){var e;try{throw new Error("Sentry syntheticException")}catch(t){e=t}return s("captureException",t,{captureContext:n,originalException:t,syntheticException:e})}function a(t,n){var e;try{throw new Error(t)}catch(o){e=o}return s("captureMessage",t,"string"==typeof n?n:void 0,r({originalException:t,syntheticException:e},"string"!=typeof n?{captureContext:n}:void 0))}function f(t){return s("captureEvent",t)}function p(t){s("configureScope",t)}function h(t){s("addBreadcrumb",t)}function l(t,n){s("setContext",t,n)}function _(t){s("setExtras",t)}function v(t){s("setTags",t)}function d(t,n){s("setExtra",t,n)}function y(t,n){s("setTag",t,n)}function g(t){s("setUser",t)}function b(t){s("withScope",t)}function x(t){return s("startTransaction",r({},t))}},lW6c:function(t,n,e){"use strict";e.d(n,"a",(function(){return s})),e.d(n,"d",(function(){return a})),e.d(n,"b",(function(){return f})),e.d(n,"c",(function(){return h}));var r=e("JdiF"),o=e("9/Zf"),i=e("8LbN"),c=e("KjyA"),s=function(){function t(t,n,e){void 0===n&&(n=new c.a),void 0===e&&(e=3),this._version=e,this._stack=[],this._stack.push({client:t,scope:n}),this.bindClient(t)}return t.prototype._invokeClient=function(t){for(var n,e=[],o=1;o<arguments.length;o++)e[o-1]=arguments[o];var i=this.getStackTop();i&&i.client&&i.client[t]&&(n=i.client)[t].apply(n,r.b(e,[i.scope]))},t.prototype.isOlderThan=function(t){return this._version<t},t.prototype.bindClient=function(t){this.getStackTop().client=t,t&&t.setupIntegrations&&t.setupIntegrations()},t.prototype.pushScope=function(){var t=this.getStack(),n=t.length>0?t[t.length-1].scope:void 0,e=c.a.clone(n);return this.getStack().push({client:this.getClient(),scope:e}),e},t.prototype.popScope=function(){return void 0!==this.getStack().pop()},t.prototype.withScope=function(t){var n=this.pushScope();try{t(n)}finally{this.popScope()}},t.prototype.getClient=function(){return this.getStackTop().client},t.prototype.getScope=function(){return this.getStackTop().scope},t.prototype.getStack=function(){return this._stack},t.prototype.getStackTop=function(){return this._stack[this._stack.length-1]},t.prototype.captureException=function(t,n){var e=this._lastEventId=Object(o.m)(),i=n;if(!n){var c=void 0;try{throw new Error("Sentry syntheticException")}catch(t){c=t}i={originalException:t,syntheticException:c}}return this._invokeClient("captureException",t,r.a({},i,{event_id:e})),e},t.prototype.captureMessage=function(t,n,e){var i=this._lastEventId=Object(o.m)(),c=e;if(!e){var s=void 0;try{throw new Error(t)}catch(u){s=u}c={originalException:t,syntheticException:s}}return this._invokeClient("captureMessage",t,n,r.a({},c,{event_id:i})),i},t.prototype.captureEvent=function(t,n){var e=this._lastEventId=Object(o.m)();return this._invokeClient("captureEvent",t,r.a({},n,{event_id:e})),e},t.prototype.lastEventId=function(){return this._lastEventId},t.prototype.addBreadcrumb=function(t,n){var e=this.getStackTop();if(e.scope&&e.client){var i=e.client.getOptions&&e.client.getOptions()||{},c=i.beforeBreadcrumb,s=void 0===c?null:c,u=i.maxBreadcrumbs,a=void 0===u?100:u;if(!(a<=0)){var f=Object(o.l)(),p=r.a({timestamp:f},t),h=s?Object(o.c)((function(){return s(p,n)})):p;null!==h&&e.scope.addBreadcrumb(h,Math.min(a,100))}}},t.prototype.setUser=function(t){var n=this.getStackTop();n.scope&&n.scope.setUser(t)},t.prototype.setTags=function(t){var n=this.getStackTop();n.scope&&n.scope.setTags(t)},t.prototype.setExtras=function(t){var n=this.getStackTop();n.scope&&n.scope.setExtras(t)},t.prototype.setTag=function(t,n){var e=this.getStackTop();e.scope&&e.scope.setTag(t,n)},t.prototype.setExtra=function(t,n){var e=this.getStackTop();e.scope&&e.scope.setExtra(t,n)},t.prototype.setContext=function(t,n){var e=this.getStackTop();e.scope&&e.scope.setContext(t,n)},t.prototype.configureScope=function(t){var n=this.getStackTop();n.scope&&n.client&&t(n.scope)},t.prototype.run=function(t){var n=a(this);try{t(this)}finally{a(n)}},t.prototype.getIntegration=function(t){var n=this.getClient();if(!n)return null;try{return n.getIntegration(t)}catch(e){return i.a.warn("Cannot retrieve integration "+t.id+" from the current Hub"),null}},t.prototype.startSpan=function(t){return this._callExtensionMethod("startSpan",t)},t.prototype.startTransaction=function(t){return this._callExtensionMethod("startTransaction",t)},t.prototype.traceHeaders=function(){return this._callExtensionMethod("traceHeaders")},t.prototype._callExtensionMethod=function(t){for(var n=[],e=1;e<arguments.length;e++)n[e-1]=arguments[e];var r=u(),o=r.__SENTRY__;if(o&&o.extensions&&"function"==typeof o.extensions[t])return o.extensions[t].apply(this,n);i.a.warn("Extension method "+t+" couldn't be found, doing nothing.")},t}();function u(){var t=Object(o.f)();return t.__SENTRY__=t.__SENTRY__||{extensions:{},hub:void 0},t}function a(t){var n=u(),e=h(n);return l(n,t),e}function f(){var t=u();return p(t)&&!h(t).isOlderThan(3)||l(t,new s),Object(o.i)()?function(t){try{var n=u().__SENTRY__;if(!n||!n.extensions||!n.extensions.domain)return h(t);var e=n.extensions.domain.active;if(!e)return h(t);if(!p(e)||h(e).isOlderThan(3)){var r=h(t).getStackTop();l(e,new s(r.client,c.a.clone(r.scope)))}return h(e)}catch(o){return h(t)}}(t):h(t)}function p(t){return!!(t&&t.__SENTRY__&&t.__SENTRY__.hub)}function h(t){return t&&t.__SENTRY__&&t.__SENTRY__.hub||(t.__SENTRY__=t.__SENTRY__||{},t.__SENTRY__.hub=new s),t.__SENTRY__.hub}function l(t,n){return!!t&&(t.__SENTRY__=t.__SENTRY__||{},t.__SENTRY__.hub=n,!0)}}}]);
//# sourceMappingURL=18a59f745266acacb62cc3f150276962e9a470a8-479553bac8b7038a88f3.js.map