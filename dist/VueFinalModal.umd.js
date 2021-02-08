!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t(require("vue")):"function"==typeof define&&define.amd?define(["vue"],t):(e="undefined"!=typeof globalThis?globalThis:e||self).VueFinalModal=t(e.Vue)}(this,(function(e){"use strict";function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function n(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e){return function(e){if(Array.isArray(e))return i(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return i(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return i(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}var u=function(e){return function(e,t){return l(e.querySelectorAll(t)||[])}(e,'button:not([disabled]), select:not([disabled]), a[href]:not([disabled]), area[href]:not([disabled]), [contentEditable=""]:not([disabled]), [contentEditable="true"]:not([disabled]), [contentEditable="TRUE"]:not([disabled]), textarea:not([disabled]), iframe:not([disabled]), input:not([disabled]), summary:not([disabled]), [tabindex]:not([tabindex="-1"])')},c=function(e){return e==document.activeElement},d=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.root=null,this.elements=[],this.onKeyDown=this.onKeyDown.bind(this),this.enable=this.enable.bind(this),this.disable=this.disable.bind(this),this.firstElement=this.firstElement.bind(this),this.lastElement=this.lastElement.bind(this)}var t,o,r;return t=e,(o=[{key:"lastElement",value:function(){return this.elements[this.elements.length-1]||null}},{key:"firstElement",value:function(){return this.elements[0]||null}},{key:"onKeyDown",value:function(e){if(function(e){return"Tab"===e.key||9===e.keyCode}(e)){if(!e.shiftKey)return!document.activeElement||c(this.lastElement())?(this.firstElement().focus(),void e.preventDefault()):void 0;c(this.firstElement())&&(this.lastElement().focus(),e.preventDefault())}}},{key:"enabled",value:function(){return!!this.root}},{key:"enable",value:function(e){e&&(this.root=e,this.elements=u(this.root),this.root.addEventListener("keydown",this.onKeyDown))}},{key:"disable",value:function(){this.root.removeEventListener("keydown",this.onKeyDown),this.root=null}}])&&n(t.prototype,o),r&&n(t,r),e}(),s=!1;if("undefined"!=typeof window){var f={get passive(){s=!0}};window.addEventListener("testPassive",null,f),window.removeEventListener("testPassive",null,f)}var v,p,m="undefined"!=typeof window&&window.navigator&&window.navigator.platform&&(/iP(ad|hone|od)/.test(window.navigator.platform)||"MacIntel"===window.navigator.platform&&window.navigator.maxTouchPoints>1),y=[],b=!1,h=0,g=-1,w=function(e,t){var n=!1;return function(e){for(var t=[];e;){if(t.push(e),e.classList.contains("vfm"))return t;e=e.parentElement}return t}(e).forEach((function(e){(function(e){if(!e||e.nodeType!==Node.ELEMENT_NODE)return!1;var t=window.getComputedStyle(e);return["auto","scroll"].includes(t.overflowY)&&e.scrollHeight>e.clientHeight})(e)&&function(e,t){return!(0===e.scrollTop&&t<0||e.scrollTop+e.clientHeight+t>=e.scrollHeight&&t>0)}(e,t)&&(n=!0)})),n},E=function(e){return y.some((function(){return w(e,-h)}))},S=function(e){var t=e||window.event;return!!E(t.target)||(t.touches.length>1||(t.preventDefault&&t.preventDefault(),!1))},k=function(e,t){if(e){if(!y.some((function(t){return t.targetElement===e}))){var n={targetElement:e,options:t||{}};y=[].concat(l(y),[n]),m?(e.ontouchstart=function(e){1===e.targetTouches.length&&(g=e.targetTouches[0].clientY)},e.ontouchmove=function(t){1===t.targetTouches.length&&function(e,t){h=e.targetTouches[0].clientY-g,!E(e.target)&&(t&&0===t.scrollTop&&h>0||function(e){return!!e&&e.scrollHeight-e.scrollTop<=e.clientHeight}(t)&&h<0?S(e):e.stopPropagation())}(t,e)},b||(document.addEventListener("touchmove",S,s?{passive:!1}:void 0),b=!0)):function(e){if(void 0===p){var t=!!e&&!0===e.reserveScrollBarGap,n=window.innerWidth-document.documentElement.clientWidth;if(t&&n>0){var o=parseInt(getComputedStyle(document.body).getPropertyValue("padding-right"),10);p=document.body.style.paddingRight,document.body.style.paddingRight="".concat(o+n,"px")}}void 0===v&&(v=document.body.style.overflow,document.body.style.overflow="hidden")}(t)}}else console.error("disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.")},O=function(e){e?(y=y.filter((function(t){return t.targetElement!==e})),m?(e.ontouchstart=null,e.ontouchmove=null,b&&0===y.length&&(document.removeEventListener("touchmove",S,s?{passive:!1}:void 0),b=!1)):y.length||(void 0!==p&&(document.body.style.paddingRight=p,p=void 0),void 0!==v&&(document.body.style.overflow=v,v=void 0))):console.error("enableBodyScroll unsuccessful - targetElement must be provided when calling enableBodyScroll on IOS devices.")},C="enter",B="entering",M="leave",T="leavng",x={props:{name:{type:String,default:null},modelValue:{type:Boolean,default:!1},ssr:{type:Boolean,default:!0},classes:{type:[String,Object,Array],default:""},overlayClass:{type:[String,Object,Array],default:""},contentClass:{type:[String,Object,Array],default:""},styles:{type:[String,Object,Array],default:""},overlayStyle:{type:[String,Object,Array],default:""},contentStyle:{type:[String,Object,Array],default:""},lockScroll:{type:Boolean,default:!0},hideOverlay:{type:Boolean,default:!1},clickToClose:{type:Boolean,default:!0},escToClose:{type:Boolean,default:!1},preventClick:{type:Boolean,default:!1},attach:{type:null,default:!1,validator:function(e){var n=t(e);return"boolean"===n||"string"===n||e.nodeType===Node.ELEMENT_NODE}},transition:{type:String,default:"vfm"},overlayTransition:{type:String,default:"vfm"},zIndexAuto:{type:Boolean,default:!0},zIndexBase:{type:[String,Number],default:1e3},zIndex:{type:[Boolean,String,Number],default:!1},focusRetain:{type:Boolean,default:!0},focusTrap:{type:Boolean,default:!1}},emits:["update:modelValue","click-outside","before-open","opened","before-close","closed"],setup:function(t,n){var o=n.emit,r=Symbol("vfm"),l=e.ref(null),i=e.ref(null),u=e.inject(t.options.key),c=e.ref(null),s=new d,f=e.ref(!1),v=e.reactive({modal:!1,overlay:!1}),p=e.ref(null),m=e.ref(null),y=e.ref(!1),b=e.ref({}),h=e.computed((function(){return(t.hideOverlay||p.value===M)&&m.value===M})),g=e.computed((function(){return!1===t.zIndex?!!t.zIndexAuto&&+t.zIndexBase+2*(c.value||0):t.zIndex})),w=e.computed((function(){return a({},!1!==g.value&&{zIndex:g.value})}));function E(){return{uid:r,props:t,emit:o,vfmContainer:i,getAttachElement:j,modalStackIndex:c,visibility:v,handleLockScroll:A,$focusTrap:s,toggle:I,params:b}}function S(){if(t.modelValue){if(N("before-open",!1))return;var n=j();if(n||!1===t.attach){!1!==t.attach&&n.appendChild(l.value);var o=u.openedModals.findIndex((function(e){return e.uid===r}));-1!==o&&u.openedModals.splice(o,1),u.openedModals.push(E()),c.value=u.openedModals.length-1,A(),u.openedModals.filter((function(e){return e.uid!==r})).forEach((function(e,t){e.getAttachElement()===n&&(e.modalStackIndex.value=t,e.visibility.overlay=!1)})),f.value=!0,e.nextTick((function(){v.overlay=!0,v.modal=!0}))}else!1!==n&&console.warn("Unable to locate target ".concat(t.attach))}}function x(){var e=u.openedModals.findIndex((function(e){return e.uid===r}));if(-1!==e&&u.openedModals.splice(e,1),u.openedModals.length>0){var t=u.openedModals[u.openedModals.length-1];t.props.focusTrap&&t.$focusTrap.firstElement().focus(),(t.props.focusRetain||t.props.focusTrap)&&t.vfmContainer.value.focus(),!t.props.hideOverlay&&(t.visibility.overlay=!0)}v.overlay=!1,v.modal=!1}function A(){t.modelValue&&(t.lockScroll?k(i.value,{reserveScrollBarGap:!0}):O(i.value))}function j(){return!1!==t.attach&&("string"==typeof t.attach?!!window&&window.document.querySelector(t.attach):t.attach)}function V(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return a({ref:E()},e)}function N(t,n){var r=!1,a=V({type:t,stop:function(){r=!0}});return o(t,a),!!r&&(y.value=!0,e.nextTick((function(){o("update:modelValue",n)})),!0)}function I(e,n){var r="boolean"==typeof e?e:!t.modelValue;r&&2===arguments.length&&(b.value=n),o("update:modelValue",r)}return e.watch((function(){return t.modelValue}),(function(e){if(y.value)y.value=!1;else if(S(),!e){if(N("before-close",!0))return;x()}})),e.watch((function(){return t.lockScroll}),A),e.watch((function(){return t.hideOverlay}),(function(e){t.modelValue&&!e&&(v.overlay=!0)})),e.watch((function(){return t.attach}),S),e.watch(h,(function(e){e&&(f.value=!1)}),{flush:"post"}),u.modals.push(E()),e.onMounted((function(){S()})),e.onBeforeUnmount((function(){var e;x(),t.lockScroll&&O(i.value),null==l||null===(e=l.value)||void 0===e||e.remove();var n=u.modals.findIndex((function(e){return e.uid===r}));u.modals.splice(n,1)})),{root:l,vfmContainer:i,visible:f,visibility:v,params:b,calculateZIndex:g,bindStyle:w,beforeOverlayEnter:function(){p.value=B},afterOverlayEnter:function(){p.value=C},beforeOverlayLeave:function(){p.value=T},afterOverlayLeave:function(){p.value=M},beforeModalEnter:function(){m.value=B},afterModalEnter:function(){m.value=C,(t.focusRetain||t.focusTrap)&&i.value.focus(),t.focusTrap&&s.enable(i.value),o("opened",V({type:"opened"}))},beforeModalLeave:function(){m.value=T,s.enabled()&&s.disable()},afterModalLeave:function(){m.value=M,c.value=null,t.lockScroll&&O(i.value);var e=!1,n=V({type:"closed",stop:function(){e=!0}});o("closed",n),e||(b.value={})},onClickContainer:function(){o("click-outside",V({type:"click-outside"})),t.clickToClose&&o("update:modelValue",!1)},onEsc:function(e){27===e.keyCode&&f.value&&t.escToClose&&o("update:modelValue",!1)}}}},A=e.withScopeId("data-v-2836fdb5"),j=A((function(t,n,o,r,a,l){return o.ssr||r.visible?e.withDirectives((e.openBlock(),e.createBlock("div",{key:0,ref:"root",style:r.bindStyle,class:["vfm vfm--inset",[!1===o.attach?"vfm--fixed":"vfm--absolute",{"vfm--prevent-none":o.preventClick}]],onKeydown:n[2]||(n[2]=function(){return r.onEsc.apply(r,arguments)})},[e.createVNode(e.Transition,{name:o.overlayTransition,"onBefore-enter":r.beforeOverlayEnter,"onAfter-enter":r.afterOverlayEnter,"onBefore-leave":r.beforeOverlayLeave,"onAfter-leave":r.afterOverlayLeave},{default:A((function(){return[!o.hideOverlay&&r.visibility.overlay?(e.openBlock(),e.createBlock("div",{key:0,class:["vfm__overlay vfm--overlay vfm--absolute vfm--inset",o.overlayClass],style:o.overlayStyle},null,6)):e.createCommentVNode("v-if",!0)]})),_:1},8,["name","onBefore-enter","onAfter-enter","onBefore-leave","onAfter-leave"]),e.createVNode(e.Transition,{name:o.transition,"onBefore-enter":r.beforeModalEnter,"onAfter-enter":r.afterModalEnter,"onBefore-leave":r.beforeModalLeave,"onAfter-leave":r.afterModalLeave},{default:A((function(){return[e.withDirectives(e.createVNode("div",{ref:"vfmContainer",class:["vfm__container vfm--absolute vfm--inset vfm--outline-none",o.classes],style:o.styles,"aria-expanded":r.visibility.modal.toString(),role:"dialog","aria-modal":"true",tabindex:"-1",onClick:n[1]||(n[1]=e.withModifiers((function(){return r.onClickContainer.apply(r,arguments)}),["self"]))},[e.createVNode("div",{class:["vfm__content",[o.contentClass,{"vfm--prevent-auto":o.preventClick}]],style:o.contentStyle},[e.renderSlot(t.$slots,"default",{params:r.params})],6)],14,["aria-expanded"]),[[e.vShow,r.visibility.modal]])]})),_:3},8,["name","onBefore-enter","onAfter-enter","onBefore-leave","onAfter-leave"])],38)),[[e.vShow,!o.ssr||r.visible]]):e.createCommentVNode("v-if",!0)}));!function(e,t){void 0===t&&(t={});var n=t.insertAt;if(e&&"undefined"!=typeof document){var o=document.head||document.getElementsByTagName("head")[0],r=document.createElement("style");r.type="text/css","top"===n&&o.firstChild?o.insertBefore(r,o.firstChild):o.appendChild(r),r.styleSheet?r.styleSheet.cssText=e:r.appendChild(document.createTextNode(e))}}("\n.vfm--fixed[data-v-2836fdb5] {\n  position: fixed;\n}\n.vfm--absolute[data-v-2836fdb5] {\n  position: absolute;\n}\n.vfm--inset[data-v-2836fdb5] {\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n}\n.vfm--overlay[data-v-2836fdb5] {\n  background-color: rgba(0, 0, 0, 0.5);\n}\n.vfm--prevent-none[data-v-2836fdb5] {\n  pointer-events: none;\n}\n.vfm--prevent-auto[data-v-2836fdb5] {\n  pointer-events: auto;\n}\n.vfm--outline-none[data-v-2836fdb5]:focus {\n  outline: none;\n}\n.vfm-enter-active[data-v-2836fdb5],\n.vfm-leave-active[data-v-2836fdb5] {\n  transition: opacity 0.2s;\n}\n.vfm-enter-from[data-v-2836fdb5],\n.vfm-leave-to[data-v-2836fdb5] {\n  opacity: 0;\n}\n"),x.render=j,x.__scopeId="data-v-2836fdb5",x.__file="lib/VueFinalModal.vue";var V={props:{},computed:{api:function(){return this[this.options.key]}},methods:{slice:function(e){this.api.dynamicModals.splice(e,1)},beforeOpen:function(e,t){e.ref.params=t.params}}},N={class:"modals-container"};function I(e,t){var n=a({},e);return Object.assign(n.props,{options:{type:Object,default:function(){return t}}}),n}function D(n,o){var r=function(n){return function(){return{show:function(o){for(var r=arguments.length,a=new Array(r>1?r-1:0),l=1;l<r;l++)a[l-1]=arguments[l];switch(t(o)){case"string":this.toggle.apply(this,[o,!0].concat(a));break;case"object":var i={value:!0,id:Symbol("dynamicModal"),component:n.componentName,bind:{},slots:{},on:{},params:a[0]};this.dynamicModals.push(e.shallowReactive(Object.assign(i,o)))}},hide:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];this.toggle(t,!1)},hideAll:function(){for(var e=this.openedModals.length-1;e>=0;e--)this.openedModals[e].emit("update:modelValue",!1)},toggle:function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),o=1;o<t;o++)n[o-1]=arguments[o];(Array.isArray(e)?this.get.apply(this,l(e)):this.get(e)).forEach((function(e){return e.toggle.apply(e,n)}))},get:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return this.modals.filter((function(e){return t.includes(e.props.name)}))},dynamicModals:e.shallowReactive([]),openedModals:[],modals:[]}}}(o)();Object.defineProperty(n.config.globalProperties,o.key,{get:function(){return r}}),n.provide(o.key,r)}V.render=function(t,n,o,r,a,l){return e.openBlock(),e.createBlock("div",N,[(e.openBlock(!0),e.createBlock(e.Fragment,null,e.renderList(l.api.dynamicModals,(function(t,n){return e.openBlock(),e.createBlock(e.resolveDynamicComponent(t.component),e.mergeProps({key:t.id,modelValue:t.value,"onUpdate:modelValue":function(e){return t.value=e}},t.bind,e.toHandlers(t.on),{onClosed:function(e){return l.slice(n)},"onBefore-open":function(e){return l.beforeOpen(e,t)}}),e.createSlots({_:2},[e.renderList(t.slots,(function(t,n){return{name:n,fn:e.withCtx((function(){return[(e.openBlock(),e.createBlock(e.resolveDynamicComponent(t.component),t.bind,null,16))]}))}}))]),1040,["modelValue","onUpdate:modelValue","onClosed","onBefore-open"])})),128))])},V.__file="lib/ModalsContainer.vue";var P={componentName:"VueFinalModal",dynamicContainerName:"ModalsContainer",key:"$vfm"};return function(){return{install:function(e,t){var n=Object.assign({},P,t),o=e.config.globalProperties[n.key],r=e._context.components[n.componentName],a=e._context.components[n.dynamicContainerName];r||a?"undefined"!=typeof window&&(o&&console.error("[vue-final-modal] Duplicate registration API key and componentName of VueFinalModal."),r&&console.error("[vue-final-modal] Duplicate registration componentName of VueFinalModal."),a&&console.error("[vue-final-modal] Duplicate registration dynamicContainerName of ModalsContainer.")):(o||D(e,n),function(e,t){e.component(t.componentName,I(x,t))}(e,n),function(e,t){e.component(t.dynamicContainerName,I(V,t))}(e,n))}}}}));
//# sourceMappingURL=VueFinalModal.umd.js.map
