// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(t,r){"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(t="undefined"!=typeof globalThis?globalThis:t||self).iterExp=r()}(this,(function(){"use strict";var t="function"==typeof Object.defineProperty?Object.defineProperty:null;var r,n=Object.defineProperty,e=Object.prototype,o=e.toString,u=e.__defineGetter__,i=e.__defineSetter__,a=e.__lookupGetter__,f=e.__lookupSetter__;r=function(){try{return t({},"x",{}),!0}catch(t){return!1}}()?n:function(t,r,n){var c,l,y,p;if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof n||null===n||"[object Array]"===o.call(n))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+n+"`.");if((l="value"in n)&&(a.call(t,r)||f.call(t,r)?(c=t.__proto__,t.__proto__=e,delete t[r],t[r]=n.value,t.__proto__=c):t[r]=n.value),y="get"in n,p="set"in n,l&&(y||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&u&&u.call(t,r,n.get),p&&i&&i.call(t,r,n.set),t};var c=r;function l(t,r,n){c(t,r,{configurable:!1,enumerable:!1,writable:!1,value:n})}var y=/./;function p(t){return"boolean"==typeof t}var v="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function b(){return v&&"symbol"==typeof Symbol.toStringTag}var s=Object.prototype.toString;var d=Object.prototype.hasOwnProperty;function m(t,r){return null!=t&&d.call(t,r)}var w="function"==typeof Symbol?Symbol.toStringTag:"";var j=b()?function(t){var r,n,e;if(null==t)return s.call(t);n=t[w],r=m(t,w);try{t[w]=void 0}catch(r){return s.call(t)}return e=s.call(t),r?t[w]=n:delete t[w],e}:function(t){return s.call(t)},g=Boolean.prototype.toString;var A=b();function h(t){return"object"==typeof t&&(t instanceof Boolean||(A?function(t){try{return g.call(t),!0}catch(t){return!1}}(t):"[object Boolean]"===j(t)))}function _(t){return p(t)||h(t)}function O(){return new Function("return this;")()}l(_,"isPrimitive",p),l(_,"isObject",h);var U="object"==typeof self?self:null,S="object"==typeof window?window:null,E="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},T="object"==typeof E?E:null;var F=function(t){if(arguments.length){if(!p(t))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+t+"`.");if(t)return O()}if(U)return U;if(S)return S;if(T)return T;throw new Error("unexpected error. Unable to resolve global object.")}(),I=F.document&&F.document.childNodes,N=Int8Array;function P(){return/^\s*function\s*([^(]*)/i}var x=/^\s*function\s*([^(]*)/i;l(P,"REGEXP",x);var V=Array.isArray?Array.isArray:function(t){return"[object Array]"===j(t)};function G(t){return null!==t&&"object"==typeof t}function H(t){var r,n,e,o;if(("Object"===(n=j(t).slice(8,-1))||"Error"===n)&&t.constructor){if("string"==typeof(e=t.constructor).name)return e.name;if(r=x.exec(e.toString()))return r[1]}return G(o=t)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":n}l(G,"isObjectLikeArray",function(t){if("function"!=typeof t)throw new TypeError("invalid argument. Must provide a function. Value: `"+t+"`.");return function(r){var n,e;if(!V(r))return!1;if(0===(n=r.length))return!1;for(e=0;e<n;e++)if(!1===t(r[e]))return!1;return!0}}(G));var B="function"==typeof y||"object"==typeof N||"function"==typeof I?function(t){return H(t).toLowerCase()}:function(t){var r;return null===t?"null":"object"===(r=typeof t)?H(t).toLowerCase():r};function L(t){return"function"===B(t)}function M(t){var r=typeof t;return null!==t&&("object"===r||"function"===r)&&L(t.next)}function W(t){return"number"==typeof t}var k=Number,C=k.prototype.toString;var Y=b();function R(t){return"object"==typeof t&&(t instanceof k||(Y?function(t){try{return C.call(t),!0}catch(t){return!1}}(t):"[object Number]"===j(t)))}function X(t){return W(t)||R(t)}l(X,"isPrimitive",W),l(X,"isObject",R);var q="function"==typeof Symbol&&"symbol"==typeof Symbol("foo")&&m(Symbol,"iterator")&&"symbol"==typeof Symbol.iterator?Symbol.iterator:null;var z,D=Object.getPrototypeOf;z=L(Object.getPrototypeOf)?D:function(t){var r=function(t){return t.__proto__}(t);return r||null===r?r:"[object Function]"===j(t.constructor)?t.constructor.prototype:t instanceof Object?Object.prototype:null};var J=z;var K=Object.prototype;function Q(t){var r;return!!function(t){return"object"==typeof t&&null!==t&&!V(t)}(t)&&(r=function(t){return null==t?null:(t=Object(t),J(t))}(t),!r||!m(t,"constructor")&&m(r,"constructor")&&L(r.constructor)&&"[object Function]"===j(r.constructor)&&m(r,"isPrototypeOf")&&L(r.isPrototypeOf)&&(r===K||function(t){var r;for(r in t)if(!m(t,r))return!1;return!0}(t)))}function Z(t,r){return Q(r)?(m(r,"invalid")&&(t.invalid=r.invalid),null):new TypeError("invalid argument. Options argument must be an object. Value: `"+r+"`.")}function $(t,r,n){var e,o,u,i;if(!M(t))throw new TypeError("invalid argument. First argument must be an iterator protocol-compliant object. Value: `"+t+"`.");if(!L(r))throw new TypeError("invalid argument. Second argument must be a function. Value: `"+r+"`.");if(e={invalid:NaN},arguments.length>2&&(u=Z(e,n)))throw u;return l(o={},"next",a),l(o,"return",f),q&&L(t[q])&&l(o,q,c),o;function a(){var n;return i?{done:!0}:(n=t.next()).done?(i=!0,n):{value:W(n.value)?r(n.value):e.invalid,done:!1}}function f(t){return i=!0,arguments.length?{value:t,done:!0}:{done:!0}}function c(){return $(t[q](),r,e)}}function tt(t){return t!=t}var rt=Math.floor,nt=Math.ceil;function et(t){return t<0?nt(t):rt(t)}var ot=k.NEGATIVE_INFINITY,ut=Number.POSITIVE_INFINITY;function it(t){return t===ut||t===ot}var at="function"==typeof Uint32Array;var ft="function"==typeof Uint32Array?Uint32Array:null;var ct,lt="function"==typeof Uint32Array?Uint32Array:void 0;ct=function(){var t,r,n;if("function"!=typeof ft)return!1;try{r=new ft(r=[1,3.14,-3.14,4294967296,4294967297]),n=r,t=(at&&n instanceof Uint32Array||"[object Uint32Array]"===j(n))&&1===r[0]&&3===r[1]&&4294967293===r[2]&&0===r[3]&&1===r[4]}catch(r){t=!1}return t}()?lt:function(){throw new Error("not implemented")};var yt=ct,pt="function"==typeof Float64Array;var vt="function"==typeof Float64Array?Float64Array:null;var bt,st="function"==typeof Float64Array?Float64Array:void 0;bt=function(){var t,r,n;if("function"!=typeof vt)return!1;try{r=new vt([1,3.14,-3.14,NaN]),n=r,t=(pt&&n instanceof Float64Array||"[object Float64Array]"===j(n))&&1===r[0]&&3.14===r[1]&&-3.14===r[2]&&r[3]!=r[3]}catch(r){t=!1}return t}()?st:function(){throw new Error("not implemented")};var dt=bt,mt="function"==typeof Uint8Array;var wt="function"==typeof Uint8Array?Uint8Array:null;var jt,gt="function"==typeof Uint8Array?Uint8Array:void 0;jt=function(){var t,r,n;if("function"!=typeof wt)return!1;try{r=new wt(r=[1,3.14,-3.14,256,257]),n=r,t=(mt&&n instanceof Uint8Array||"[object Uint8Array]"===j(n))&&1===r[0]&&3===r[1]&&253===r[2]&&0===r[3]&&1===r[4]}catch(r){t=!1}return t}()?gt:function(){throw new Error("not implemented")};var At=jt,ht="function"==typeof Uint16Array;var _t="function"==typeof Uint16Array?Uint16Array:null;var Ot,Ut="function"==typeof Uint16Array?Uint16Array:void 0;Ot=function(){var t,r,n;if("function"!=typeof _t)return!1;try{r=new _t(r=[1,3.14,-3.14,65536,65537]),n=r,t=(ht&&n instanceof Uint16Array||"[object Uint16Array]"===j(n))&&1===r[0]&&3===r[1]&&65533===r[2]&&0===r[3]&&1===r[4]}catch(r){t=!1}return t}()?Ut:function(){throw new Error("not implemented")};var St,Et={uint16:Ot,uint8:At};(St=new Et.uint16(1))[0]=4660;var Tt,Ft,It=52===new Et.uint8(St.buffer)[0];!0===It?(Tt=1,Ft=0):(Tt=0,Ft=1);var Nt={HIGH:Tt,LOW:Ft},Pt=new dt(1),xt=new yt(Pt.buffer),Vt=Nt.HIGH,Gt=Nt.LOW;function Ht(t,r){return Pt[0]=r,t[0]=xt[Vt],t[1]=xt[Gt],t}function Bt(t,r){return 1===arguments.length?Ht([0,0],t):Ht(t,r)}var Lt,Mt,Wt=!0===It?1:0,kt=new dt(1),Ct=new yt(kt.buffer);function Yt(t){return kt[0]=t,Ct[Wt]}!0===It?(Lt=1,Mt=0):(Lt=0,Mt=1);var Rt={HIGH:Lt,LOW:Mt},Xt=new dt(1),qt=new yt(Xt.buffer),zt=Rt.HIGH,Dt=Rt.LOW;function Jt(t,r){return qt[zt]=t,qt[Dt]=r,Xt[0]}var Kt=[0,0];function Qt(t,r){return tt(r)||it(r)?(t[0]=r,t[1]=0,t):0!==r&&function(t){return Math.abs(t)}(r)<22250738585072014e-324?(t[0]=4503599627370496*r,t[1]=-52,t):(t[0]=r,t[1]=0,t)}var Zt=[0,0],$t=[0,0];function tr(t,r){var n,e,o,u,i;return 0===r||0===t||tt(t)||it(t)?t:(function(t,r){1===arguments.length?Qt([0,0],t):Qt(t,r)}(Zt,t),r+=Zt[1],r+=function(t){var r=Yt(t);return(r=(2146435072&r)>>>20)-1023|0}(t=Zt[0]),r<-1074?(o=t,Bt(Kt,0),u=Kt[0],u&=2147483647,i=Yt(o),Jt(u|=i&=2147483648,Kt[1])):r>1023?t<0?ot:ut:(r<=-1023?(r+=52,e=2220446049250313e-31):e=1,Bt($t,t),n=$t[0],n&=2148532223,e*Jt(n|=r+1023<<20,$t[1])))}var rr=1.4426950408889634,nr=1/(1<<28);function er(t){var r;return tt(t)||t===ut?t:t===ot?0:t>709.782712893384?ut:t<-745.1332191019411?0:t>-3.725290298461914e-9&&t<nr?1+t:function(t,r,n){var e,o,u,i;return tr(1-(r-(e=t-r)*(u=e-(o=e*e)*(0===(i=o)?.16666666666666602:.16666666666666602+i*(i*(6613756321437934e-20+i*(4.1381367970572385e-8*i-16533902205465252e-22))-.0027777777777015593)))/(2-u)-t),n)}(t-.6931471803691238*(r=et(t<0?rr*t-.5:rr*t+.5)),1.9082149292705877e-10*r,r)}return function(t){return $(t,er)}}));
//# sourceMappingURL=index.js.map
