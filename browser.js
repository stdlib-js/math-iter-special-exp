// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(t,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(t="undefined"!=typeof globalThis?globalThis:t||self).iterExp=n()}(this,(function(){"use strict";var t="function"==typeof Object.defineProperty?Object.defineProperty:null;var n,r=Object.defineProperty,e=Object.prototype,o=e.toString,u=e.__defineGetter__,i=e.__defineSetter__,a=e.__lookupGetter__,f=e.__lookupSetter__;n=function(){try{return t({},"x",{}),!0}catch(t){return!1}}()?r:function(t,n,r){var c,l,y,p;if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof r||null===r||"[object Array]"===o.call(r))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+r+"`.");if((l="value"in r)&&(a.call(t,n)||f.call(t,n)?(c=t.__proto__,t.__proto__=e,delete t[n],t[n]=r.value,t.__proto__=c):t[n]=r.value),y="get"in r,p="set"in r,l&&(y||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&u&&u.call(t,n,r.get),p&&i&&i.call(t,n,r.set),t};var c=n;function l(t,n,r){c(t,n,{configurable:!1,enumerable:!1,writable:!1,value:r})}var y=/./;function p(t){return"boolean"==typeof t}var v="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function b(){return v&&"symbol"==typeof Symbol.toStringTag}var s=Object.prototype.toString;var d=Object.prototype.hasOwnProperty;function m(t,n){return null!=t&&d.call(t,n)}var w="function"==typeof Symbol?Symbol.toStringTag:"";var j=b()?function(t){var n,r,e;if(null==t)return s.call(t);r=t[w],n=m(t,w);try{t[w]=void 0}catch(n){return s.call(t)}return e=s.call(t),n?t[w]=r:delete t[w],e}:function(t){return s.call(t)},g=Boolean.prototype.toString;var A=b();function h(t){return"object"==typeof t&&(t instanceof Boolean||(A?function(t){try{return g.call(t),!0}catch(t){return!1}}(t):"[object Boolean]"===j(t)))}function _(t){return p(t)||h(t)}function O(){return new Function("return this;")()}l(_,"isPrimitive",p),l(_,"isObject",h);var U="object"==typeof self?self:null,S="object"==typeof window?window:null,E="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},T="object"==typeof E?E:null;var F=function(t){if(arguments.length){if(!p(t))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+t+"`.");if(t)return O()}if(U)return U;if(S)return S;if(T)return T;throw new Error("unexpected error. Unable to resolve global object.")}(),I=F.document&&F.document.childNodes,N=Int8Array;function P(){return/^\s*function\s*([^(]*)/i}var x=/^\s*function\s*([^(]*)/i;l(P,"REGEXP",x);var V=Array.isArray?Array.isArray:function(t){return"[object Array]"===j(t)};function G(t){return null!==t&&"object"==typeof t}function H(t){var n,r,e,o;if(("Object"===(r=j(t).slice(8,-1))||"Error"===r)&&t.constructor){if("string"==typeof(e=t.constructor).name)return e.name;if(n=x.exec(e.toString()))return n[1]}return G(o=t)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":r}l(G,"isObjectLikeArray",function(t){if("function"!=typeof t)throw new TypeError("invalid argument. Must provide a function. Value: `"+t+"`.");return function(n){var r,e;if(!V(n))return!1;if(0===(r=n.length))return!1;for(e=0;e<r;e++)if(!1===t(n[e]))return!1;return!0}}(G));var B="function"==typeof y||"object"==typeof N||"function"==typeof I?function(t){return H(t).toLowerCase()}:function(t){var n;return null===t?"null":"object"===(n=typeof t)?H(t).toLowerCase():n};function L(t){return"function"===B(t)}function M(t){var n=typeof t;return null!==t&&("object"===n||"function"===n)&&L(t.next)}function W(t){return"number"==typeof t}var k=Number,C=k.prototype.toString;var Y=b();function R(t){return"object"==typeof t&&(t instanceof k||(Y?function(t){try{return C.call(t),!0}catch(t){return!1}}(t):"[object Number]"===j(t)))}function X(t){return W(t)||R(t)}l(X,"isPrimitive",W),l(X,"isObject",R);var q="function"==typeof Symbol&&"symbol"==typeof Symbol("foo")&&m(Symbol,"iterator")&&"symbol"==typeof Symbol.iterator?Symbol.iterator:null;var z,D=Object.getPrototypeOf;z=L(Object.getPrototypeOf)?D:function(t){var n=function(t){return t.__proto__}(t);return n||null===n?n:"[object Function]"===j(t.constructor)?t.constructor.prototype:t instanceof Object?Object.prototype:null};var J=z;var K=Object.prototype;function Q(t){var n;return!!function(t){return"object"==typeof t&&null!==t&&!V(t)}(t)&&(n=function(t){return null==t?null:(t=Object(t),J(t))}(t),!n||!m(t,"constructor")&&m(n,"constructor")&&L(n.constructor)&&"[object Function]"===j(n.constructor)&&m(n,"isPrototypeOf")&&L(n.isPrototypeOf)&&(n===K||function(t){var n;for(n in t)if(!m(t,n))return!1;return!0}(t)))}function Z(t,n){return Q(n)?(m(n,"invalid")&&(t.invalid=n.invalid),null):new TypeError("invalid argument. Options argument must be an object. Value: `"+n+"`.")}function $(t,n,r){var e,o,u,i;if(!M(t))throw new TypeError("invalid argument. First argument must be an iterator protocol-compliant object. Value: `"+t+"`.");if(!L(n))throw new TypeError("invalid argument. Second argument must be a function. Value: `"+n+"`.");if(e={invalid:NaN},arguments.length>2&&(u=Z(e,r)))throw u;return l(o={},"next",a),l(o,"return",f),q&&L(t[q])&&l(o,q,c),o;function a(){var r;return i?{done:!0}:(r=t.next()).done?(i=!0,r):{value:W(r.value)?n(r.value):e.invalid,done:!1}}function f(t){return i=!0,arguments.length?{value:t,done:!0}:{done:!0}}function c(){return $(t[q](),n,e)}}function tt(t){return t!=t}var nt=Math.floor,rt=Math.ceil;function et(t){return t<0?rt(t):nt(t)}var ot=k.NEGATIVE_INFINITY,ut=Number.POSITIVE_INFINITY;function it(t){return t===ut||t===ot}var at="function"==typeof Uint32Array;var ft="function"==typeof Uint32Array?Uint32Array:null;var ct,lt="function"==typeof Uint32Array?Uint32Array:void 0;ct=function(){var t,n,r;if("function"!=typeof ft)return!1;try{n=new ft(n=[1,3.14,-3.14,4294967296,4294967297]),r=n,t=(at&&r instanceof Uint32Array||"[object Uint32Array]"===j(r))&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){t=!1}return t}()?lt:function(){throw new Error("not implemented")};var yt=ct,pt="function"==typeof Float64Array;var vt="function"==typeof Float64Array?Float64Array:null;var bt,st="function"==typeof Float64Array?Float64Array:void 0;bt=function(){var t,n,r;if("function"!=typeof vt)return!1;try{n=new vt([1,3.14,-3.14,NaN]),r=n,t=(pt&&r instanceof Float64Array||"[object Float64Array]"===j(r))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){t=!1}return t}()?st:function(){throw new Error("not implemented")};var dt=bt,mt="function"==typeof Uint8Array;var wt="function"==typeof Uint8Array?Uint8Array:null;var jt,gt="function"==typeof Uint8Array?Uint8Array:void 0;jt=function(){var t,n,r;if("function"!=typeof wt)return!1;try{n=new wt(n=[1,3.14,-3.14,256,257]),r=n,t=(mt&&r instanceof Uint8Array||"[object Uint8Array]"===j(r))&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){t=!1}return t}()?gt:function(){throw new Error("not implemented")};var At=jt,ht="function"==typeof Uint16Array;var _t="function"==typeof Uint16Array?Uint16Array:null;var Ot,Ut="function"==typeof Uint16Array?Uint16Array:void 0;Ot=function(){var t,n,r;if("function"!=typeof _t)return!1;try{n=new _t(n=[1,3.14,-3.14,65536,65537]),r=n,t=(ht&&r instanceof Uint16Array||"[object Uint16Array]"===j(r))&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){t=!1}return t}()?Ut:function(){throw new Error("not implemented")};var St,Et={uint16:Ot,uint8:At};(St=new Et.uint16(1))[0]=4660;var Tt,Ft,It=52===new Et.uint8(St.buffer)[0];!0===It?(Tt=1,Ft=0):(Tt=0,Ft=1);var Nt={HIGH:Tt,LOW:Ft},Pt=new dt(1),xt=new yt(Pt.buffer),Vt=Nt.HIGH,Gt=Nt.LOW;function Ht(t,n,r,e){return Pt[0]=t,n[e]=xt[Vt],n[e+r]=xt[Gt],n}function Bt(t){return Ht(t,[0,0],1,0)}l(Bt,"assign",Ht);var Lt,Mt,Wt=!0===It?1:0,kt=new dt(1),Ct=new yt(kt.buffer);function Yt(t){return kt[0]=t,Ct[Wt]}!0===It?(Lt=1,Mt=0):(Lt=0,Mt=1);var Rt={HIGH:Lt,LOW:Mt},Xt=new dt(1),qt=new yt(Xt.buffer),zt=Rt.HIGH,Dt=Rt.LOW;function Jt(t,n){return qt[zt]=t,qt[Dt]=n,Xt[0]}var Kt=[0,0];function Qt(t,n,r,e){return tt(t)||it(t)?(n[e]=t,n[e+r]=0,n):0!==t&&function(t){return Math.abs(t)}(t)<22250738585072014e-324?(n[e]=4503599627370496*t,n[e+r]=-52,n):(n[e]=t,n[e+r]=0,n)}l((function(t){return Qt(t,[0,0],1,0)}),"assign",Qt);var Zt=[0,0],$t=[0,0];function tn(t,n){var r,e,o,u,i,a;return 0===n||0===t||tt(t)||it(t)?t:(Qt(t,Zt,1,0),n+=Zt[1],n+=function(t){var n=Yt(t);return(n=(2146435072&n)>>>20)-1023|0}(t=Zt[0]),n<-1074?(o=0,u=t,Bt.assign(o,Kt,1,0),i=Kt[0],i&=2147483647,a=Yt(u),Jt(i|=a&=2147483648,Kt[1])):n>1023?t<0?ot:ut:(n<=-1023?(n+=52,e=2220446049250313e-31):e=1,Bt.assign(t,$t,1,0),r=$t[0],r&=2148532223,e*Jt(r|=n+1023<<20,$t[1])))}var nn=1.4426950408889634,rn=1/(1<<28);function en(t){var n;return tt(t)||t===ut?t:t===ot?0:t>709.782712893384?ut:t<-745.1332191019411?0:t>-3.725290298461914e-9&&t<rn?1+t:function(t,n,r){var e,o,u,i;return tn(1-(n-(e=t-n)*(u=e-(o=e*e)*(0===(i=o)?.16666666666666602:.16666666666666602+i*(i*(6613756321437934e-20+i*(4.1381367970572385e-8*i-16533902205465252e-22))-.0027777777777015593)))/(2-u)-t),r)}(t-.6931471803691238*(n=et(t<0?nn*t-.5:nn*t+.5)),1.9082149292705877e-10*n,n)}return function(t){return $(t,en)}}));
//# sourceMappingURL=browser.js.map