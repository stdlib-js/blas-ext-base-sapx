// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,r;e=this,r=function(){"use strict";var e,r="function"==typeof Object.defineProperty?Object.defineProperty:null,t=Object.defineProperty,o=Object.prototype,n=o.toString,i=o.__defineGetter__,a=o.__defineSetter__,u=o.__lookupGetter__,f=o.__lookupSetter__;function l(e,r,t,o){var n,i,a;if(e<=0||0===r)return t;if(1===o){if((a=e%5)>0)for(i=0;i<a;i++)t[i]+=r;if(e<5)return t;for(i=a;i<e;i+=5)t[i]+=r,t[i+1]+=r,t[i+2]+=r,t[i+3]+=r,t[i+4]+=r;return t}for(n=o<0?(1-e)*o:0,i=0;i<e;i++)t[n]+=r,n+=o;return t}return e=function(){try{return r({},"x",{}),!0}catch(e){return!1}}()?t:function(e,r,t){var l,c,p,_;if("object"!=typeof e||null===e||"[object Array]"===n.call(e))throw new TypeError("invalid argument. First argument must be an object. Value: `"+e+"`.");if("object"!=typeof t||null===t||"[object Array]"===n.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((c="value"in t)&&(u.call(e,r)||f.call(e,r)?(l=e.__proto__,e.__proto__=o,delete e[r],e[r]=t.value,e.__proto__=l):e[r]=t.value),p="get"in t,_="set"in t,c&&(p||_))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return p&&i&&i.call(e,r,t.get),_&&a&&a.call(e,r,t.set),e},e(l,"ndarray",{configurable:!1,enumerable:!1,writable:!1,value:function(e,r,t,o,n){var i,a,u;if(e<=0||0===r)return t;if(i=n,1===o){if((a=e%5)>0)for(u=0;u<a;u++)t[i]+=r,i+=o;if(e<5)return t;for(u=a;u<e;u+=5)t[i]+=r,t[i+1]+=r,t[i+2]+=r,t[i+3]+=r,t[i+4]+=r,i+=5;return t}for(u=0;u<e;u++)t[i]+=r,i+=o;return t}}),l},"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).sapx=r();
//# sourceMappingURL=browser.js.map
