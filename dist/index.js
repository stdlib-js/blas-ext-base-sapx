"use strict";var a=function(t,r){return function(){return r||t((r={exports:{}}).exports,r),r.exports}};var o=a(function(C,q){
var v=5;function _(t,r,e,s,R){var i,n,u;if(t<=0||r===0)return e;if(i=R,s===1){if(n=t%v,n>0)for(u=0;u<n;u++)e[i]+=r,i+=s;if(t<v)return e;for(u=n;u<t;u+=v)e[i]+=r,e[i+1]+=r,e[i+2]+=r,e[i+3]+=r,e[i+4]+=r,i+=v;return e}for(u=0;u<t;u++)e[i]+=r,i+=s;return e}q.exports=_
});var y=a(function(D,c){
var E=require('@stdlib/strided-base-stride2offset/dist'),M=o();function O(t,r,e,s){return M(t,r,e,s,E(t,s))}c.exports=O
});var j=a(function(F,d){
var b=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),m=y(),g=o();b(m,"ndarray",g);d.exports=m
});var k=require("path").join,w=require('@stdlib/utils-try-require/dist'),z=require('@stdlib/assert-is-error/dist'),A=j(),f,p=w(k(__dirname,"./native.js"));z(p)?f=A:f=p;module.exports=f;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
