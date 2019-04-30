/*!
 * alo
 * Copyright(c) 2019 Katja Lutz
 * MIT Licensed
 * https://opensource.org/licenses/MIT
*/
!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.alo=e():t.alo=e()}(window,function(){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=11)}([function(t,e){t.exports=function(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}},function(t,e){t.exports=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},function(t,e){function n(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}t.exports=function(t,e,r){return e&&n(t.prototype,e),r&&n(t,r),t}},function(t,e,n){var r=n(0);t.exports=function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},o=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),o.forEach(function(e){r(t,e,n[e])})}return t}},function(t,e,n){"use strict";n.d(e,"b",function(){return c}),n.d(e,"e",function(){return s}),n.d(e,"d",function(){return f}),n.d(e,"c",function(){return l}),n.d(e,"f",function(){return d}),n.d(e,"a",function(){return v});var r=0,o={},i={},a={},u=function t(e,n){if(i[n]=e,a[n]){var r=!0,o=!1,u=void 0;try{for(var c,s=a[n][Symbol.iterator]();!(r=(c=s.next()).done);r=!0){t(e,c.value)}}catch(t){o=!0,u=t}finally{try{r||null==s.return||s.return()}finally{if(o)throw u}}}},c=function(t){var e=t.name,n=void 0===e?"":e,i=t.children,c=t.entityContainer,s=void 0!==c&&c,f="".concat(r++,"-").concat(n);if(i){a[f]=i;var l=!0,d=!1,v=void 0;try{for(var b,p=i[Symbol.iterator]();!(l=(b=p.next()).done);l=!0){var h=b.value;o[h]=f,s&&u(f,h)}}catch(t){d=!0,v=t}finally{try{l||null==p.return||p.return()}finally{if(d)throw v}}}return f},s=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";t.tags["*"+e]=!0,t.tagsSet=!0},f=function t(e,n,r){e.tagsSet=!0,e.tags[n]=e.tags[n]||!0;var a=o[n];a&&!e.tags[a]&&t(e,a,r);var u=i[n];if(r&&u){var c=e.containers[u]=e.containers[u]||{};(c[r]=c[r]||{})[n]=!0}},l=function(t,e){for(var n=e;;){if(!(e=o[e]))return!1;if(t.tags["*"+e])return t.tags[n]=!0,!0}},d=function(t,e,n){var r=!(arguments.length>3&&void 0!==arguments[3])||arguments[3];if(r&&t.tags["*"])return!0;var o=t.tags[e];if(null!=n){var a=i[e];if(a){var u=t.containers[a],c=u&&u[n];o=c&&c[e]}}var s=!o&&r&&l(t,e);return!(!o&&!s)},v=function(){return{tagsSet:!1,tags:{},containers:{}}}},function(t,e,n){"use strict";n.d(e,"b",function(){return s}),n.d(e,"a",function(){return f});var r=n(0),o=n.n(r),i=n(1),a=n.n(i),u=n(2),c=n.n(u),s=function(){function t(){a()(this,t)}return c()(t,[{key:"normalize",value:function(t){var e=t.action;return(0,t.callBack)(e)}}]),t}(),f=function(){function t(e){var n=e.actionNormalizer;a()(this,t),o()(this,"_actionNormalizer",void 0),this._actionNormalizer=n}return c()(t,[{key:"normalize",value:function(t){return this._actionNormalizer.normalize(t)}}]),t}()},function(t,e,n){var r=n(17),o=n(18);t.exports=function(t,e){return!e||"object"!==r(e)&&"function"!=typeof e?o(t):e}},function(t,e){function n(e){return t.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},n(e)}t.exports=n},function(t,e,n){var r=n(34);t.exports=function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&r(t,e)}},function(t,e,n){"use strict";n.d(e,"b",function(){return r}),n.d(e,"a",function(){return o});n(17);var r=function(t){return void 0!==t.then},o=function(t){return!!(t&&t.constructor&&t.call&&t.apply)}},function(t,e,n){"use strict";n.d(e,"b",function(){return f}),n.d(e,"a",function(){return l});var r=n(0),o=n.n(r),i=n(1),a=n.n(i),u=n(2),c=n.n(u),s=n(4),f=function(){function t(){a()(this,t)}return c()(t,[{key:"resolve",value:function(t){var e=t.action,n=t.callSubscribers,r=t.applyMutator,o=t.setAction,i=Object(s.a)();return e.event=i,r(e),o(e),e.event.tagsSet&&n(),e}}]),t}(),l=function(){function t(e){var n=e.actionResolver;a()(this,t),o()(this,"_actionResolver",void 0),this._actionResolver=n}return c()(t,[{key:"resolve",value:function(t){return this._actionResolver.resolve(t)}}]),t}()},function(t,e,n){"use strict";n.r(e);var r=n(14);n.d(e,"actionTypes",function(){return r.b}),n.d(e,"Store",function(){return r.a});var o=n(19);for(var i in o)["isAction","createTag","setTag","setWildCard","createEvent","tagIsSet","parentWildCardIsSet","combineMutators","typeMutator","createUndoableMutator","undoData","undoAction","redoAction","actionTypes","Store","default"].indexOf(i)<0&&function(t){n.d(e,t,function(){return o[t]})}(i);var a=n(13);n.d(e,"isAction",function(){return a.a});var u=n(20);for(var i in u)["isAction","createTag","setTag","setWildCard","createEvent","tagIsSet","parentWildCardIsSet","combineMutators","typeMutator","createUndoableMutator","undoData","undoAction","redoAction","actionTypes","Store","default"].indexOf(i)<0&&function(t){n.d(e,t,function(){return u[t]})}(i);var c=n(4);n.d(e,"createTag",function(){return c.b}),n.d(e,"setTag",function(){return c.d}),n.d(e,"setWildCard",function(){return c.e}),n.d(e,"createEvent",function(){return c.a}),n.d(e,"tagIsSet",function(){return c.f}),n.d(e,"parentWildCardIsSet",function(){return c.c});var s=n(16);n.d(e,"combineMutators",function(){return s.a}),n.d(e,"typeMutator",function(){return s.b});var f=n(21);n.d(e,"createSelector",function(){return f.b}),n.d(e,"combineSelectorResults",function(){return f.a});var l=n(12);n.d(e,"createUndoableMutator",function(){return l.a}),n.d(e,"undoData",function(){return l.d}),n.d(e,"undoAction",function(){return l.c}),n.d(e,"redoAction",function(){return l.b});var d=n(15);n.d(e,"Subscribable",function(){return d.a});var v=n(22);for(var i in v)["isAction","createTag","setTag","setWildCard","createEvent","tagIsSet","parentWildCardIsSet","combineMutators","typeMutator","createUndoableMutator","undoData","undoAction","redoAction","actionTypes","Store","createSelector","combineSelectorResults","Subscribable","default"].indexOf(i)<0&&function(t){n.d(e,t,function(){return v[t]})}(i);var b=n(5);n.d(e,"ActionNormalizer",function(){return b.b}),n.d(e,"AbstractActionNormalizerDecorator",function(){return b.a});var p=n(23);for(var i in p)["isAction","createTag","setTag","setWildCard","createEvent","tagIsSet","parentWildCardIsSet","combineMutators","typeMutator","createUndoableMutator","undoData","undoAction","redoAction","actionTypes","Store","createSelector","combineSelectorResults","Subscribable","ActionNormalizer","AbstractActionNormalizerDecorator","default"].indexOf(i)<0&&function(t){n.d(e,t,function(){return p[t]})}(i);var h=n(24);n.d(e,"BATCH_ACTION_TYPE",function(){return h.a}),n.d(e,"batchAction",function(){return h.c}),n.d(e,"BatchActionNormalizerDecorator",function(){return h.b});var y=n(25);n.d(e,"PromiseActionNormalizerDecorator",function(){return y.a});var m=n(26);n.d(e,"typeThunk",function(){return m.b}),n.d(e,"ThunkActionNormalizerDecorator",function(){return m.a});var _=n(10);n.d(e,"ActionResolver",function(){return _.b}),n.d(e,"AbstractActionResolverDecorator",function(){return _.a});var g=n(27);for(var i in g)["isAction","createTag","setTag","setWildCard","createEvent","tagIsSet","parentWildCardIsSet","combineMutators","typeMutator","createUndoableMutator","undoData","undoAction","redoAction","actionTypes","Store","createSelector","combineSelectorResults","Subscribable","ActionNormalizer","AbstractActionNormalizerDecorator","BATCH_ACTION_TYPE","batchAction","BatchActionNormalizerDecorator","PromiseActionNormalizerDecorator","typeThunk","ThunkActionNormalizerDecorator","ActionResolver","AbstractActionResolverDecorator","default"].indexOf(i)<0&&function(t){n.d(e,t,function(){return g[t]})}(i);var S=n(28);n.d(e,"BatchActionResolverDecorator",function(){return S.a})},function(t,e,n){"use strict";n.d(e,"d",function(){return a}),n.d(e,"c",function(){return c}),n.d(e,"b",function(){return s}),n.d(e,"a",function(){return f});var r=n(3),o=n.n(r),i=n(14),a=function(t,e,n){return t.meta.undoData=t.meta.undoData||{},t.meta.do&&(t.meta.undoData[e]=n),t.meta.undoData[e]},u=function(t,e){t.meta=t.meta||{},t.meta.undoableCache=e},c=function(t){return function(e){var n={type:"@@undo_"+t};e(n),n.meta&&n.meta.undoableCache&&(e({type:n.meta.undoableCache.type,payload:n.meta.undoableCache.payload,meta:n.meta.undoableCache.meta}),delete n.meta.undoableCache)}},s=function(t){return function(e){var n={type:"@@redo_"+t};e(n),n.meta&&n.meta.undoableCache&&(e(n.meta.undoableCache),delete n.meta.undoableCache)}},f=function(t){var e=t.id,n=t.tags,r=void 0===n?{}:n,a=t.actionFilter;return function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{past:[],future:[]},c=arguments.length>2?arguments[2]:void 0;if(t.action.type==="@@undo_"+e){if(0===n.past.length)return n;var s=n.past.pop();if(t.push(joinTags(c,r.self,r.past)),!s)return console.log("this actually happens"),n;u(t.action,{type:s.type,payload:s.payload,meta:o()({},s.meta,{do:!1,redo:!1,undo:!0})}),n.future.push({type:s.type,payload:s.payload,meta:s.meta}),t.push(joinTags(c,r.self,r.future))}else if(t.action.type==="@@redo_"+e){if(0===n.future.length)return n;var f=n.future.pop();if(t.push(joinTags(c,r.self,r.future)),!f)return n;u(t.action,{type:f.type,payload:f.payload,meta:o()({},f.meta,{do:!0,redo:!0,undo:!1})}),n.past.push(f),t.push(joinTags(c,r.self,r.past))}else{if(t.action.type==i.b.INIT)return n;if(t.action.meta.undo||t.action.meta.redo)return n;if(a&&!a(t.action))return n;n.future=[],t.push(joinTags(c,r.self,r.future)),n.past.push({type:t.action.type,payload:t.action.payload,meta:t.action.meta}),t.push(joinTags(c,r.self,r.past))}return n}}},function(t,e,n){"use strict";n.d(e,"a",function(){return r}),n.d(e,"b",function(){return o});var r=function(t){return t&&void 0!==t.type},o=function(t){return t.meta||(t.meta={}),t.meta.undo||t.meta.redo||(t.meta.do=!0),t}},function(t,e,n){"use strict";n.d(e,"b",function(){return b}),n.d(e,"a",function(){return p});var r=n(1),o=n.n(r),i=n(2),a=n.n(i),u=n(0),c=n.n(u),s=n(5),f=n(10),l=n(13),d=n(4),v=n(15),b={INIT:"@@init"},p=function(){function t(e){var n=this,r=e.mutator,i=e.state,a=e.actionNormalizer,u=void 0===a?new s.b:a,p=e.actionResolver,h=void 0===p?new f.b:p,y=e.subscribable,m=void 0===y?new v.a:y;o()(this,t),c()(this,"_isMutating",void 0),c()(this,"_state",null),c()(this,"_action",void 0),c()(this,"_effectHandler",void 0),c()(this,"_mutator",void 0),c()(this,"_actionNormalizer",void 0),c()(this,"_actionResolver",void 0),c()(this,"_subscribable",void 0),c()(this,"getState",function(){return n._state}),c()(this,"dispatch",function(t){return n._actionNormalizer.normalize({action:t,callBack:n._afterDispatchNormalization,store:n})}),c()(this,"_callSubscribers",function(){n._subscribable.callSubscribers(n)}),c()(this,"_afterDispatchNormalization",function(t){if(!Object(l.a)(t)){if(t)throw new Error("Invalid action dispatched");return t}return n._actionResolver.resolve({action:Object(l.b)(t),store:n,setAction:n._setAction,callSubscribers:n._callSubscribers,applyMutator:n._applyMutator})}),c()(this,"_applyMutator",function(t){if(t.type===b.INIT&&(n._state=t.payload,Object(d.e)(t.event)),n._isMutating)throw new Error("Mutations already in progress");n._isMutating=!0;try{n._state=n._mutator(t,n._state)}catch(t){console.error(t)}n._isMutating=!1}),c()(this,"_setAction",function(t){n._action=t}),this._actionResolver=h,this._actionNormalizer=u,this._subscribable=m,this._isMutating=!1,this._state=i,this._mutator=r,this.dispatch({type:b.INIT,payload:i})}return a()(t,[{key:"getAction",value:function(){return this._action}},{key:"subscribe",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return this._subscribable.subscribe(t,e)}},{key:"getActionNormalizer",value:function(){return this._actionNormalizer}},{key:"setActionNormalizer",value:function(t){this._actionNormalizer=t}},{key:"getActionResolver",value:function(){return this._actionResolver}},{key:"setActionResolver",value:function(t){this._actionResolver=t}},{key:"getSubscribable",value:function(){return this._subscribable}},{key:"setSubscribable",value:function(t){this._subscribable=t}}]),t}()},function(t,e,n){"use strict";n.d(e,"a",function(){return s});var r=n(1),o=n.n(r),i=n(2),a=n.n(i),u=n(0),c=n.n(u),s=function(){function t(){o()(this,t),c()(this,"_currentListeners",void 0),c()(this,"_nextListeners",void 0),c()(this,"_lastListenerOptions",void 0),c()(this,"_subscribersCalled",!1),this._currentListeners=[],this._nextListeners=this._currentListeners}return a()(t,[{key:"_separateNextListeners",value:function(){this._currentListeners===this._nextListeners&&(this._nextListeners=this._currentListeners.slice())}},{key:"subscribe",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];this._separateNextListeners();var n=!0;return this._nextListeners.push(t),e&&this._subscribersCalled&&t(this._lastListenerOptions),function(){if(n){n=!1,this._separateNextListeners();var e=this._nextListeners.indexOf(t);this._nextListeners.splice(e,1)}}}},{key:"callSubscribers",value:function(t){this._subscribersCalled=!0,this._lastListenerOptions=t,this._currentListeners=this._nextListeners;var e=!0,n=!1,r=void 0;try{for(var o,i=this._currentListeners[Symbol.iterator]();!(e=(o=i.next()).done);e=!0){(0,o.value)(t)}}catch(t){n=!0,r=t}finally{try{e||null==i.return||i.return()}finally{if(n)throw r}}}}]),t}()},function(t,e,n){"use strict";n.d(e,"b",function(){return i}),n.d(e,"a",function(){return a});var r=n(29),o=n.n(r),i=function(t){return t},a=function(t){var e=Object.entries(t);return function(t){for(var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r={},i=0,a=e;i<a.length;i++){var u=o()(a[i],2),c=u[0],s=u[1];r[c]=s(t,n[c])}return r}}},function(t,e){function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function r(e){return"function"==typeof Symbol&&"symbol"===n(Symbol.iterator)?t.exports=r=function(t){return n(t)}:t.exports=r=function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":n(t)},r(e)}t.exports=r},function(t,e){t.exports=function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}},function(t,e){},function(t,e){},function(t,e,n){"use strict";n.d(e,"b",function(){return i}),n.d(e,"a",function(){return a});var r=n(3),o=n.n(r),i=function(t){var e,n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=null;return function(i,a){if(n&&r===a)return e=o()({},e,{changed:!1});var u=!!e&&o()({},e,{changed:!1}),c=t(i,a,u);return null==c.changed&&(c.changed=!0),n&&(r=a),e=c}},a=function(t){var e=!1,n=Object.keys(t).reduce(function(n,r){var o=t[r];return n[r]=o.value,o.changed&&(e=!0),n},{});return{changed:e,value:n}}},function(t,e){},function(t,e){},function(t,e,n){"use strict";n.d(e,"a",function(){return p}),n.d(e,"c",function(){return h}),n.d(e,"b",function(){return m});var r=n(1),o=n.n(r),i=n(2),a=n.n(i),u=n(6),c=n.n(u),s=n(7),f=n.n(s),l=n(8),d=n.n(l),v=n(5),b=n(9),p="@@batch",h=function(t){var e=function(e,n){return t(e,n)};return e.isBatch=!0,e},y=0,m=function(t){function e(){return o()(this,e),c()(this,f()(e).apply(this,arguments))}return d()(e,t),a()(e,[{key:"normalize",value:function(t){var e=t.callBack,n=t.action,r=t.store;if(!Object(b.a)(n)||!n.isBatch)return this._actionNormalizer.normalize(t);var o=y++,i={type:p,payload:[],meta:{batch:!0,batchId:o,newBatch:!0}},a=function(t){return i.payload.push(t),t.meta=t.meta||{},t.meta.batchId=o,t.meta.batchItem=!0,e(t),t},u=n(function(t){r.getActionNormalizer().normalize({action:t,store:r,callBack:a})},r.getState);return Object(b.b)(u)?u.then(function(){return e(i)}):e(i)}}]),e}(v.a)},function(t,e,n){"use strict";n.d(e,"a",function(){return h});var r=n(3),o=n.n(r),i=n(1),a=n.n(i),u=n(2),c=n.n(u),s=n(6),f=n.n(s),l=n(7),d=n.n(l),v=n(8),b=n.n(v),p=n(9),h=function(t){function e(){return a()(this,e),f()(this,d()(e).apply(this,arguments))}return b()(e,t),c()(e,[{key:"normalize",value:function(t){var e=t.action,n=t.store;return Object(p.b)(e)?e.then(function(e){return n.getActionNormalizer().normalize(o()({},t,{action:e}))}):this._actionNormalizer.normalize(t)}}]),e}(n(5).a)},function(t,e,n){"use strict";n.d(e,"b",function(){return y}),n.d(e,"a",function(){return m});var r=n(3),o=n.n(r),i=n(1),a=n.n(i),u=n(2),c=n.n(u),s=n(6),f=n.n(s),l=n(7),d=n.n(l),v=n(8),b=n.n(v),p=n(9),h=n(5),y=function(t){return t},m=function(t){function e(){return a()(this,e),f()(this,d()(e).apply(this,arguments))}return b()(e,t),c()(e,[{key:"normalize",value:function(t){var e=t.action,n=t.store;if(!Object(p.a)(e))return this._actionNormalizer.normalize(t);var r=n.getActionNormalizer();return e(function(e){return r.normalize(o()({},t,{action:e}))},n.getState)}}]),e}(h.a)},function(t,e){},function(t,e,n){"use strict";n.d(e,"a",function(){return x});var r=n(3),o=n.n(r),i=n(30),a=n.n(i),u=n(1),c=n.n(u),s=n(2),f=n.n(s),l=n(6),d=n.n(l),v=n(7),b=n.n(v),p=n(18),h=n.n(p),y=n(8),m=n.n(y),_=n(0),g=n.n(_),S=n(10),A=n(11),x=function(t){function e(){var t,n;c()(this,e);for(var r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];return n=d()(this,(t=b()(e)).call.apply(t,[this].concat(o))),g()(h()(n),"_eventByBatchId",{}),n}return m()(e,t),f()(e,[{key:"resolve",value:function(t){var e=t.action,n=t.store,r=t.setAction,i=t.applyMutator;if(e.meta.batchItem){var u=this._eventByBatchId[e.meta.batchId]=this._eventByBatchId[e.meta.batchId]||Object(A.createEvent)();return e.event=u,delete e.meta.batchItem,delete e.meta.batchId,i(e),e}if(e.type===A.BATCH_ACTION_TYPE){if(e.meta.newBatch){var c=this._eventByBatchId[e.meta.batchId]=this._eventByBatchId[e.meta.batchId]||Object(A.createEvent)();return e.event=c,delete e.meta.newBatch,delete this._eventByBatchId[e.meta.batchId],delete e.meta.batchId,r(e),c.tagsSet&&n._callSubscribers(),e}var s=Object(A.createEvent)(),f=a()(e.payload);e.meta.undo&&f.reverse();var l=!0,d=!1,v=void 0;try{for(var b,p=f[Symbol.iterator]();!(l=(b=p.next()).done);l=!0){var h=b.value,y=o()({},h,{meta:o()({},h.meta)});e.meta.undo&&(y.meta.do=!y.meta.do,y.meta.undo=!y.meta.undo),e.meta.redo&&y.meta.do&&(y.meta.redo=!0),y.event=s,i(e)}}catch(t){d=!0,v=t}finally{try{l||null==p.return||p.return()}finally{if(d)throw v}}return r(e),s.tagsSet&&n._callSubscribers(),e}return this._actionResolver.resolve(t)}}]),e}(S.a)},function(t,e,n){var r=n(31),o=n(32),i=n(33);t.exports=function(t,e){return r(t)||o(t,e)||i()}},function(t,e,n){var r=n(35),o=n(36),i=n(37);t.exports=function(t){return r(t)||o(t)||i()}},function(t,e){t.exports=function(t){if(Array.isArray(t))return t}},function(t,e){t.exports=function(t,e){var n=[],r=!0,o=!1,i=void 0;try{for(var a,u=t[Symbol.iterator]();!(r=(a=u.next()).done)&&(n.push(a.value),!e||n.length!==e);r=!0);}catch(t){o=!0,i=t}finally{try{r||null==u.return||u.return()}finally{if(o)throw i}}return n}},function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}},function(t,e){function n(e,r){return t.exports=n=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},n(e,r)}t.exports=n},function(t,e){t.exports=function(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}},function(t,e){t.exports=function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}},function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}}])});
//# sourceMappingURL=main.js.map