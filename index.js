// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,r;e=this,r=function(e){"use strict";var r,t="function"==typeof Object.defineProperty?Object.defineProperty:null,o=Object.defineProperty,n=Object.prototype,i=n.toString,a=n.__defineGetter__,f=n.__defineSetter__,u=n.__lookupGetter__,l=n.__lookupSetter__;function c(e,r,t,o){var n,i,a;if(e<=0||0===r)return t;if(1===o){if((a=e%5)>0)for(i=0;i<a;i++)t[i]+=r;if(e<5)return t;for(i=a;i<e;i+=5)t[i]+=r,t[i+1]+=r,t[i+2]+=r,t[i+3]+=r,t[i+4]+=r;return t}for(n=o<0?(1-e)*o:0,i=0;i<e;i++)t[n]+=r,n+=o;return t}function p(e,r,t,o,n){var i,a,f;if(e<=0||0===r)return t;if(i=n,1===o){if((a=e%5)>0)for(f=0;f<a;f++)t[i]+=r,i+=o;if(e<5)return t;for(f=a;f<e;f+=5)t[i]+=r,t[i+1]+=r,t[i+2]+=r,t[i+3]+=r,t[i+4]+=r,i+=5;return t}for(f=0;f<e;f++)t[i]+=r,i+=o;return t}r=function(){try{return t({},"x",{}),!0}catch(e){return!1}}()?o:function(e,r,t){var o,c,p,_;if("object"!=typeof e||null===e||"[object Array]"===i.call(e))throw new TypeError("invalid argument. First argument must be an object. Value: `"+e+"`.");if("object"!=typeof t||null===t||"[object Array]"===i.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((c="value"in t)&&(u.call(e,r)||l.call(e,r)?(o=e.__proto__,e.__proto__=n,delete e[r],e[r]=t.value,e.__proto__=o):e[r]=t.value),p="get"in t,_="set"in t,c&&(p||_))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return p&&a&&a.call(e,r,t.get),_&&f&&f.call(e,r,t.set),e},r(c,"ndarray",{configurable:!1,enumerable:!1,writable:!1,value:p}),e.default=c,e.ndarray=p,Object.defineProperty(e,"__esModule",{value:!0})},"object"==typeof exports&&"undefined"!=typeof module?r(exports):"function"==typeof define&&define.amd?define(["exports"],r):r((e="undefined"!=typeof globalThis?globalThis:e||self).sapx={});
//# sourceMappingURL=index.js.map
