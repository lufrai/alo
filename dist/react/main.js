/*! For license information please see main.js.LICENSE.txt */
module.exports=function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s="YMrE")}({"7W2i":function(t,e,n){var r=n("SksO");t.exports=function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&r(t,e)}},DzBc:function(t,e){t.exports=require("alo")},J4zp:function(t,e,n){var r=n("wTVA"),o=n("m0LI"),i=n("wkBT");t.exports=function(t,e){return r(t)||o(t,e)||i()}},Nsbk:function(t,e){function n(e){return t.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},n(e)}t.exports=n},PJYZ:function(t,e){t.exports=function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}},SksO:function(t,e){function n(e,r){return t.exports=n=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},n(e,r)}t.exports=n},W8MJ:function(t,e){function n(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}t.exports=function(t,e,r){return e&&n(t.prototype,e),r&&n(t,r),t}},YMrE:function(t,e,n){"use strict";n.r(e);var r=n("J4zp"),o=n.n(r),i=n("W8MJ"),u=n.n(i),s=n("PJYZ"),c=n.n(s),a=n("lSNA"),p=n.n(a),f=n("lwsE"),l=n.n(f),v=n("a1gu"),b=n.n(v),y=n("Nsbk"),h=n.n(y),d=n("7W2i"),m=n.n(d),O=n("DzBc"),g=n("cDcd"),w=function(t,e){var n=x(e);return n.prototype.createState=t,n},x=function(t){var e=function(t){function e(){return l()(this,e),b()(this,h()(e).apply(this,arguments))}return m()(e,t),e}(j);return e.prototype.view=t,e},j=function(t){function e(){var t,n;l()(this,e);for(var r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];return n=b()(this,(t=h()(e)).call.apply(t,[this].concat(o))),p()(c()(n),"rendering",!1),p()(c()(n),"updating",!1),p()(c()(n),"computation",void 0),p()(c()(n),"renderedVnode",void 0),p()(c()(n),"id",void 0),p()(c()(n),"computing",!1),p()(c()(n),"observers",[]),p()(c()(n),"observeFunctions",[]),p()(c()(n),"$state",void 0),p()(c()(n),"$props",Object(O.observable)({})),p()(c()(n),"knownKeys",{}),p()(c()(n),"$computed",void 0),p()(c()(n),"viewObserver",(function(t){return n.computing?(n.renderedVnode=n.view(n.$props,n.$state,t),n.updating=!0,n.rendering||n.forceUpdate(),n.renderedVnode):n.renderedVnode})),n}return m()(e,t),u()(e,[{key:"observe",value:function(t){this.observeFunctions.push(t)}},{key:"startObservers",value:function(){var t=!0,e=!1,n=void 0;try{for(var r,o=this.observeFunctions[Symbol.iterator]();!(t=(r=o.next()).done);t=!0){var i=r.value;this.observers.push(Object(O.observe)(i))}}catch(t){e=!0,n=t}finally{try{t||null==o.return||o.return()}finally{if(e)throw n}}}},{key:"stopObservers",value:function(){for(var t=0,e=Object.values(this.observers);t<e.length;t++){(0,e[t])()}this.observers=[]}},{key:"startComputation",value:function(){this.computing=!0;var t=this.createComputation();t._viewObserver=this.viewObserver;var e=Object(O.computation)(t),n=o()(e,2),r=n[0],i=n[1];this.$computed=r,this.computation=i}},{key:"stopComputation",value:function(){this.computing=!1,this.computation(),this.computation=null}},{key:"createComputation",value:function(){return{}}},{key:"UNSAFE_componentWillMount",value:function(){this.mapPropsToOps(),this.$state=Object(O.observable)(this.createState(this.$props)),this.observeFunctions&&(this.startObservers(),this.stopObservers()),this.startComputation(),this.stopComputation()}},{key:"mapPropsToOps",value:function(){var t=Object.keys(this.props);Object(O.batchStart)();for(var e=0,n=t;e<n.length;e++){var r=n[e],o=this.props[r];null==this.knownKeys[r]?(this.knownKeys[r]=!0,Object(O.setProp)(this.$props,r,o)):this.$props[r]=o}Object(O.batchEnd)()}},{key:"createState",value:function(t){return this.state||{}}},{key:"componentDidMount",value:function(){this.startObservers(),this.startComputation()}},{key:"componentWillUnmount",value:function(){this.stopComputation(),this.stopObservers()}},{key:"view",value:function(t,e,n){}},{key:"render",value:function(){return this.rendering=!0,this.updating||this.mapPropsToOps(),this.updating=!1,this.rendering=!1,this.renderedVnode}}]),e}(g.Component);n.d(e,"observerWithState",(function(){return w})),n.d(e,"observer",(function(){return x})),n.d(e,"Observer",(function(){return j}))},a1gu:function(t,e,n){var r=n("cDf5"),o=n("PJYZ");t.exports=function(t,e){return!e||"object"!==r(e)&&"function"!=typeof e?o(t):e}},cDcd:function(t,e){t.exports=require("react")},cDf5:function(t,e){function n(e){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?t.exports=n=function(t){return typeof t}:t.exports=n=function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n(e)}t.exports=n},lSNA:function(t,e){t.exports=function(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}},lwsE:function(t,e){t.exports=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},m0LI:function(t,e){t.exports=function(t,e){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t)){var n=[],r=!0,o=!1,i=void 0;try{for(var u,s=t[Symbol.iterator]();!(r=(u=s.next()).done)&&(n.push(u.value),!e||n.length!==e);r=!0);}catch(t){o=!0,i=t}finally{try{r||null==s.return||s.return()}finally{if(o)throw i}}return n}}},wTVA:function(t,e){t.exports=function(t){if(Array.isArray(t))return t}},wkBT:function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}}});
//# sourceMappingURL=main.js.map