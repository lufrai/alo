/*!
 * alo
 * Copyright(c) 2019 Katja Lutz
 * MIT Licensed
 * https://opensource.org/licenses/MIT
*/
!function(t,n){"object"==typeof exports&&"object"==typeof module?module.exports=n():"function"==typeof define&&define.amd?define([],n):"object"==typeof exports?exports.redom=n():(t.alo=t.alo||{},t.alo.redom=n())}("undefined"!=typeof self?self:this,function(){return function(t){var n={};function e(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,e),r.l=!0,r.exports}return e.m=t,e.c=n,e.d=function(t,n,o){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:o})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(e.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var r in t)e.d(o,r,function(n){return t[n]}.bind(null,r));return o},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="",e(e.s=120)}({0:function(t,n){t.exports=function(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}},1:function(t,n){t.exports=function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}},120:function(t,n,e){"use strict";e.r(n);var o=e(17);e.d(n,"setAloCore",function(){return o.d}),e.d(n,"ObservingComponent",function(){return o.b}),e.d(n,"ObservingListItem",function(){return o.c}),e.d(n,"ConnectedComponent",function(){return o.a})},14:function(t,n){function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function o(n){return"function"==typeof Symbol&&"symbol"===e(Symbol.iterator)?t.exports=o=function(t){return e(t)}:t.exports=o=function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":e(t)},o(n)}t.exports=o},17:function(t,n,e){"use strict";e.d(n,"d",function(){return y}),e.d(n,"b",function(){return v}),e.d(n,"c",function(){return x}),e.d(n,"a",function(){return S});var o,r=e(6),i=e.n(r),u=e(7),s=e.n(u),c=e(1),f=e.n(c),p=e(8),a=e.n(p),l=e(2),b=e.n(l),d=e(4),h=e.n(d),m=e(0),_=e.n(m),y=function(t){o=t},v=function(){function t(){var n=this;b()(this,t),_()(this,"_subscriptions",{}),_()(this,"_observeFunctions",[]),_()(this,"_mounted",!1),_()(this,"_started",!1),_()(this,"_startSubscription",function(t,e){n._subscriptions[e]=o.observe(t)})}return h()(t,[{key:"observe",value:function(t){var n=this,e=this._observeFunctions.push(t)-1;return this._mounted&&this._startSubscription(t,e),function(){n._observeFunctions.splice(e,1),n._subscriptions[e]&&(n._subscriptions[e](),delete n._subscriptions[e])}}},{key:"startSubscriptions",value:function(){this._started&&this.clearSubscriptions(),this._started=!0,this._observeFunctions.forEach(this._startSubscription)}},{key:"clearSubscriptions",value:function(){for(var t=0,n=Object.values(this._subscriptions);t<n.length;t++){var e=n[t];e&&e()}this._started=!1,this._subscriptions={}}},{key:"onmount",value:function(){this._mounted=!0,this.startSubscriptions()}},{key:"onunmount",value:function(){this._mounted=!1,this.clearSubscriptions()}}]),t}(),x=function(t){function n(){var t,e;b()(this,n);for(var r=arguments.length,u=new Array(r),c=0;c<r;c++)u[c]=arguments[c];return e=i()(this,(t=s()(n)).call.apply(t,[this].concat(u))),_()(f()(e),"state",o.observable({index:null,item:null,items:null,context:null})),e}return a()(n,t),h()(n,[{key:"update",value:function(t,n,e,r){o.batchStart(),this.state.item=t,this.state.index=n,this.state.items=e,this.state.context=r,o.batchEnd()}}]),n}(v),S=function(){function t(n){var e=this,o=n.store,r=n.component,i=n.filterUpdate,u=n.id;b()(this,t),_()(this,"el",void 0),_()(this,"_mounted",!1),_()(this,"_component",void 0),_()(this,"_subscription",void 0),_()(this,"_store",void 0),_()(this,"_id",void 0),_()(this,"_filterUpdate",void 0),_()(this,"_storeListener",function(t){if(e._component.update){var n={connectId:e._id,mounted:e._mounted,action:t.getAction()};e._filterUpdate&&!e._filterUpdate(n)||requestAnimationFrame(function(){e._component.update(n)})}}),this._store=o,this._id=u,this._filterUpdate=i,this._component=r,this.el=r.el}return h()(t,[{key:"update",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this._component.update&&this._component.update(t)}},{key:"onmount",value:function(){this._mounted=!0,this._subscription=this._store.subscribe(this._storeListener,!0),this._mounted=!1,this._component.onmount&&this._component.onmount()}},{key:"onremount",value:function(){this._component.onremount&&this._component.onremount()}},{key:"onunmount",value:function(){this._subscription&&(this._subscription(),this._subscription=void 0),this._component.onunmount&&this._component.onunmount()}},{key:"getChild",value:function(){return this._component}}]),t}()},2:function(t,n){t.exports=function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}},36:function(t,n){function e(n,o){return t.exports=e=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t},e(n,o)}t.exports=e},4:function(t,n){function e(t,n){for(var e=0;e<n.length;e++){var o=n[e];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}t.exports=function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}},6:function(t,n,e){var o=e(14),r=e(1);t.exports=function(t,n){return!n||"object"!==o(n)&&"function"!=typeof n?r(t):n}},7:function(t,n){function e(n){return t.exports=e=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},e(n)}t.exports=e},8:function(t,n,e){var o=e(36);t.exports=function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),n&&o(t,n)}}})});
//# sourceMappingURL=redom.js.map