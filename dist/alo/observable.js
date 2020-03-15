/*! For license information please see observable.js.LICENSE.txt */
!function(t,r){"object"==typeof exports&&"object"==typeof module?module.exports=r():"function"==typeof define&&define.amd?define([],r):"object"==typeof exports?exports.observable=r():(t.alo=t.alo||{},t.alo.observable=r())}("undefined"!=typeof self?self:this,(function(){return function(t){var r={};function e(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,e),o.l=!0,o.exports}return e.m=t,e.c=r,e.d=function(t,r,n){e.o(t,r)||Object.defineProperty(t,r,{enumerable:!0,get:n})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,r){if(1&r&&(t=e(t)),8&r)return t;if(4&r&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(e.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&r&&"string"!=typeof t)for(var o in t)e.d(n,o,function(r){return t[r]}.bind(null,o));return n},e.n=function(t){var r=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(r,"a",r),r},e.o=function(t,r){return Object.prototype.hasOwnProperty.call(t,r)},e.p="",e(e.s="2VHu")}({"2VHu":function(t,r,e){"use strict";e.r(r);var n=e("hF9h");e.d(r,"isObservable",(function(){return n.g})),e.d(r,"pauseObserver",(function(){return n.k})),e.d(r,"observe",(function(){return n.j})),e.d(r,"removeProp",(function(){return n.l})),e.d(r,"getProp",(function(){return n.f})),e.d(r,"setProp",(function(){return n.m})),e.d(r,"observable",(function(){return n.i})),e.d(r,"notify",(function(){return n.h})),e.d(r,"batch",(function(){return n.a})),e.d(r,"batchStart",(function(){return n.c})),e.d(r,"batchEnd",(function(){return n.b})),e.d(r,"computation",(function(){return n.d})),e.d(r,"extract",(function(){return n.e}));var o=e("9cxV");for(var u in o)["isObservable","pauseObserver","observe","removeProp","getProp","setProp","observable","notify","batch","batchStart","batchEnd","computation","extract","default"].indexOf(u)<0&&function(t){e.d(r,t,(function(){return o[t]}))}(u)},"9cxV":function(t,r){},AP2z:function(t,r,e){var n=e("nmnc"),o=Object.prototype,u=o.hasOwnProperty,c=o.toString,i=n?n.toStringTag:void 0;t.exports=function(t){var r=u.call(t,i),e=t[i];try{t[i]=void 0;var n=!0}catch(t){}var o=c.call(t);return n&&(r?t[i]=e:delete t[i]),o}},ExA7:function(t,r){t.exports=function(t){return null!=t&&"object"==typeof t}},KfNM:function(t,r){var e=Object.prototype.toString;t.exports=function(t){return e.call(t)}},Kz5y:function(t,r,e){var n=e("WFqU"),o="object"==typeof self&&self&&self.Object===Object&&self,u=n||o||Function("return this")();t.exports=u},LcsW:function(t,r,e){var n=e("kekF")(Object.getPrototypeOf,Object);t.exports=n},NykK:function(t,r,e){var n=e("nmnc"),o=e("AP2z"),u=e("KfNM"),c=n?n.toStringTag:void 0;t.exports=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":c&&c in Object(t)?o(t):u(t)}},WFqU:function(t,r,e){(function(r){var e="object"==typeof r&&r&&r.Object===Object&&r;t.exports=e}).call(this,e("yLpj"))},YO3V:function(t,r,e){var n=e("NykK"),o=e("LcsW"),u=e("ExA7"),c=Function.prototype,i=Object.prototype,a=c.toString,f=i.hasOwnProperty,l=a.call(Object);t.exports=function(t){if(!u(t)||"[object Object]"!=n(t))return!1;var r=o(t);if(null===r)return!0;var e=f.call(r,"constructor")&&r.constructor;return"function"==typeof e&&e instanceof e&&a.call(e)==l}},cDf5:function(t,r){function e(r){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?t.exports=e=function(t){return typeof t}:t.exports=e=function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},e(r)}t.exports=e},hF9h:function(t,r,e){"use strict";e.d(r,"g",(function(){return v})),e.d(r,"k",(function(){return b})),e.d(r,"j",(function(){return O})),e.d(r,"l",(function(){return j})),e.d(r,"f",(function(){return g})),e.d(r,"m",(function(){return _})),e.d(r,"i",(function(){return P})),e.d(r,"h",(function(){return A})),e.d(r,"a",(function(){return E})),e.d(r,"c",(function(){return K})),e.d(r,"b",(function(){return V})),e.d(r,"d",(function(){return N})),e.d(r,"e",(function(){return z}));var n=e("cDf5"),o=e.n(n),u=e("YO3V"),c=e.n(u),i=0,a=function(){return"".concat(i++)},f="__observableParent",l="__observableId",s={},p={},v=function(t){return null!==t&&"object"===o()(t)&&null!=t[l]},b=function(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];d.id&&(d.pause=t)},d={id:null,pause:!1};function y(t){var r=d.id,e=d.pause;d.pause=!1,d.id=t;var n=s[t];if(n.running)throw console.error("Bad observer",n.fn),new Error("Bad recursion detected in observer");n.running=!0,n.fn(b),n.running=!1,d.id=r,d.pause=e}var h=function(t){var r=t[f];if(r){var e=r();A(e.parent,e.key)}};function O(t){var r=arguments.length>1&&void 0!==arguments[1]&&arguments[1],e=a();return s[e]={running:!1,notifyInBatches:r,fn:t,targetObserverIdSets:[]},y(e),function(){s[e].targetObserverIdSets.forEach((function(t){delete t[e]}))}}var j=function(t,r){var e=p[t.__observableId],n=e.propObserverIdSetMap,o=e.propGetterMap;delete t[r],delete o[r],delete n[r],h(t)},g=function(t,r){return p[t.__observableId].propGetterMap[r]()},x=Array.prototype,m=Object.create(x);["push","pop","shift","unshift","splice","sort","reverse"].forEach((function(t){var r=x[t];m[t]=function(){for(var e=arguments.length,n=new Array(e),o=0;o<e;o++)n[o]=arguments[o];var u,c=r.apply(this,n),i=this[f](),a=i.parent,l=i.key;switch(t){case"push":case"unshift":u=n;break;case"splice":u=n.slice(2)}return u&&S(a,l,u),A(a,l),c}}));var S=function(t,r,e){t.__proto__=m;for(var n=0,o=Object.keys(t);n<o.length;n++){var u=o[n];t[u]=I(t[u],r,e)}return t},I=function(t,r,e){var n=!1;return Array.isArray(t)?(t=S(t,r,e),n=!0):c()(t)&&(t=P(t,r,e),n=!0),n&&Object.defineProperty(t,f,{configurable:!0,value:function(){return{parent:e,key:r}}}),t},_=function(t,r,e){if(t[f]&&void 0===t[l])return t[r]=I(e,r,t),void h(t);var n=p[t.__observableId],o=n.propObserverIdSetMap,u=n.propGetterMap;if(u[r])t[r]=e;else{var c=Object.getOwnPropertyDescriptor(t,r);if(!c||!1!==c.configurable){var i=c&&c.get,a=c&&c.set;u[r]=function(){return i?i.call(t):e};var v=o[r]=o[r]||{},b=r[0],y="$"!==b&&"_"!==b;e=y?I(e,r,t):e,Object.defineProperty(t,r,{configurable:!0,enumerable:!0,get:function(){var r=i?i.call(t):e;if(d.pause)return r;var n=d.id;return!n||v[n]?r:(v[n]=!0,s[n].targetObserverIdSets.push(v),r)}}),Object.defineProperty(t,r,{set:function(n){(i?i.call(t):e)!==n&&(n=y?I(n,r,t):n,a?a.call(t,n):e=n,M(Object.keys(v)))}}),h(t)}}};function P(t,r,e){if(v(t))return t;if(Array.isArray(t))throw new Error("Array object cannot be a root observable");var n=a();p[n]={propObserverIdSetMap:{},propGetterMap:{}},Object.defineProperty(t,l,{value:n});for(var o=0,u=Object.keys(t);o<u.length;o++){var c=u[o];_(t,c,t[c])}return t}var w={},k=0,M=function(t){var r=k++,e=!0;F.count>0&&(e=!1);var n=!0,o=!1,u=void 0;try{for(var c,i=t[Symbol.iterator]();!(n=(c=i.next()).done);n=!0){var a=c.value;null==w[a]&&(w[a]=r)}}catch(t){o=!0,u=t}finally{try{n||null==i.return||i.return()}finally{if(o)throw u}}var f=!0,l=!1,p=void 0;try{for(var v,b=t[Symbol.iterator]();!(f=(v=b.next()).done);f=!0){var d=v.value,h=s[d].notifyInBatches;if(e||!0===h||h===F.batchId){if(w[d]!==r)continue;y(d)}else-1===F.observerIds.indexOf(d)&&F.observerIds.push(d);delete w[d]}}catch(t){l=!0,p=t}finally{try{f||null==b.return||b.return()}finally{if(l)throw p}}};function A(t,r){var e=p[t.__observableId].propObserverIdSetMap[r];M(Object.keys(e))}var F={count:0,observerIds:[],batchId:null},E=function(t){K(),t(),V()},K=function(){F.count++},V=function(){if(0!==F.count&&(F.count--,0===F.count)){var t=F.observerIds;F.observerIds=[],M(t)}},G=0,N=function(t){for(var r=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],e="computation-"+G++,n={},o=Object.keys(t),u=0,c=o;u<c.length;u++){var i=c[u];n[i]=null}n=P(n);for(var a=[],f=!1,s=function(){if(!f){var t=!0,r=!1,e=void 0;try{for(var n,o=a[Symbol.iterator]();!(t=(n=o.next()).done);t=!0){(0,n.value)()}}catch(t){r=!0,e=t}finally{try{t||null==o.return||o.return()}finally{if(r)throw e}}f=!0}},v=function(){var o=d[b],u=!0;a.push(O((function(c){var i=F.batchId;r&&(K(),F.batchId=e),n[o]=t[o](n,p[n[l]].propGetterMap[o](),o,c,u),r&&(V(),F.batchId=i)}),e)),u=!1},b=0,d=o;b<d.length;b++)v();return[n,s]},z=function t(r){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=r;if(Array.isArray(r)){n=[];var o=!0,u=!1,c=void 0;try{for(var i,a=r[Symbol.iterator]();!(o=(i=a.next()).done);o=!0){var f=i.value;e&&(f=t(f,e)),n.push(f)}}catch(t){u=!0,c=t}finally{try{o||null==a.return||a.return()}finally{if(u)throw c}}}else if(v(r)){n={};for(var l=0,s=Object.keys(r);l<s.length;l++){var p=s[l],b=r[p];e&&(b=t(b,e)),n[p]=b}}return n}},kekF:function(t,r){t.exports=function(t,r){return function(e){return t(r(e))}}},nmnc:function(t,r,e){var n=e("Kz5y").Symbol;t.exports=n},yLpj:function(t,r){var e;e=function(){return this}();try{e=e||new Function("return this")()}catch(t){"object"==typeof window&&(e=window)}t.exports=e}})}));
//# sourceMappingURL=observable.js.map