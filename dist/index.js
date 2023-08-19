"use strict";var o=function(u,i){return function(){return i||u((i={exports:{}}).exports,i),i.exports}};var y=o(function(D,m){
var q=5;function O(u,i,e,f){var v,r,t;if(u<=0||i===0)return e;if(f===1){if(t=u%q,t>0)for(r=0;r<t;r++)e[r]+=i;if(u<q)return e;for(r=t;r<u;r+=q)e[r]+=i,e[r+1]+=i,e[r+2]+=i,e[r+3]+=i,e[r+4]+=i;return e}for(f<0?v=(1-u)*f:v=0,r=0;r<u;r++)e[v]+=i,v+=f;return e}m.exports=O
});var M=o(function(F,j){
var s=5;function b(u,i,e,f,v){var r,t,n;if(u<=0||i===0)return e;if(r=v,f===1){if(t=u%s,t>0)for(n=0;n<t;n++)e[r]+=i,r+=f;if(u<s)return e;for(n=t;n<u;n+=s)e[r]+=i,e[r+1]+=i,e[r+2]+=i,e[r+3]+=i,e[r+4]+=i,r+=s;return e}for(n=0;n<u;n++)e[r]+=i,r+=f;return e}j.exports=b
});var a=o(function(G,_){
var g=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),R=y(),k=M();g(R,"ndarray",k);_.exports=R
});var w=require("path").join,z=require('@stdlib/utils-try-require/dist'),A=require('@stdlib/assert-is-error/dist'),B=a(),c,E=z(w(__dirname,"./native.js"));A(E)?c=B:c=E;module.exports=c;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
