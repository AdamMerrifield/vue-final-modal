import{ref as e,watch as t,nextTick as n,onBeforeUnmount as o,reactive as a,computed as i,onMounted as l,openBlock as s,createBlock as r,Teleport as d,withDirectives as u,createElementBlock as c,mergeProps as f,withKeys as v,createVNode as m,Transition as p,toHandlers as h,withCtx as y,normalizeClass as b,normalizeStyle as g,createCommentVNode as w,createElementVNode as S,withModifiers as x,renderSlot as T,Fragment as C,renderList as k,vShow as E,resolveDynamicComponent as M,createSlots as z,markRaw as O,shallowReactive as D,useAttrs as L,unref as _}from"vue";import{useEventListener as I}from"@vueuse/core";const V="enter",R="entering",B="leave",A="leavng",P=()=>{const t=e(null),n={beforeEnter(){t.value=R},afterEnter(){t.value=V},beforeLeave(){t.value=A},afterLeave(){t.value=B}};return{state:t,listeners:n}},$=e=>e==document.activeElement;class N{constructor(){this.root=null,this.elements=[],this.onKeyDown=this.onKeyDown.bind(this)}get lastElement(){return this.elements[this.elements.length-1]||null}get firstElement(){return this.elements[0]||null}get isEnabled(){return!!this.root}onKeyDown(e){if((e=>"Tab"===e.key||9===e.keyCode)(e)){if(!e.shiftKey)return!document.activeElement||$(this.lastElement)?(this.firstElement.focus(),void e.preventDefault()):void 0;$(this.firstElement)&&(this.lastElement.focus(),e.preventDefault())}}enable(e){e&&(this.root=e,this.elements=((e,t)=>[...e.querySelectorAll(t)||[]])(this.root,'button:not([disabled]), select:not([disabled]), a[href]:not([disabled]), area[href]:not([disabled]), [contentEditable=""]:not([disabled]), [contentEditable="true"]:not([disabled]), [contentEditable="TRUE"]:not([disabled]), textarea:not([disabled]), iframe:not([disabled]), input:not([disabled]), summary:not([disabled]), [tabindex]:not([tabindex="-1"])'),this.root.addEventListener("keydown",this.onKeyDown))}disable(){this.root.removeEventListener("keydown",this.onKeyDown),this.root=null}}let j=null;function H({props:e,vfmContainer:n,modalTransitionState:o}){return null==j&&(j=new N),t(o,(t=>{switch(t){case V:(e.focusRetain||e.focusTrap)&&n.value.focus(),e.focusTrap&&j.enable(n.value);break;case A:j.enabled&&j.disable()}})),{focusTrap:j}}const F=()=>{},W=()=>{const e=document.activeElement;e&&e!==document.body&&e.blur()},G=e=>{const{clientX:t,clientY:n}=e.targetTouches?e.targetTouches[0]:e;return{x:t,y:n}},K={down:{pc:"mousedown",m:"touchstart"},move:{pc:"mousemove",m:"touchmove"},up:{pc:"mouseup",m:"touchend"}},Y=(e,t,n)=>{t&&t.addEventListener(K[e].pc,n),t&&t.addEventListener(K[e].m,n,{passive:!1})},U=(e,t,n)=>{t&&t.removeEventListener(K[e].pc,n),t&&t.removeEventListener(K[e].m,n)};const X={t:"ns-resize",tr:"nesw-resize",r:"ew-resize",br:"nwse-resize",b:"ns-resize",bl:"nesw-resize",l:"ew-resize",tl:"nwse-resize"},q=(e,t,n)=>("number"!=typeof e&&(e=Math.min(t,n)||t),"number"!=typeof n&&(n=Math.max(t,e)),Math.min(Math.max(t,e),n)),Z=e=>e&&Number(e.replace(/px$/,""))||0;function J({props:o,visible:a,vfmContainer:i,vfmContent:l,vfmResize:s,modalTransitionState:r,onEvent:d=(()=>{})}){const u=e(!1),c=e(null),f=e({});function v(e){e.stopPropagation();const t="resize",n="drag",a=e.target.getAttribute("direction");let s;if(a)s=t;else{if(!((e,t,n)=>""===n||[...t.querySelectorAll(n)].includes(e.target))(e,l.value,o.dragSelector))return;s=n}c.value=`${s}:start`,d?.(e);const r=G(e),u=i.value.getBoundingClientRect(),v=l.value.getBoundingClientRect(),m="absolute"===window.getComputedStyle(l.value).position,p=Z(f.value.top),h=Z(f.value.left),y=(()=>{if(o.fitParent){const e={absolute:()=>({minTop:0,minLeft:0,maxTop:u.height-v.height,maxLeft:u.width-v.width}),relative:()=>({minTop:p+u.top-v.top,minLeft:h+u.left-v.left,maxTop:p+u.bottom-v.bottom,maxLeft:h+u.right-v.right})};return m?e.absolute():e.relative()}return{}})(),b=s===t&&((e,t,n)=>{const o=e.style[t];return e.style[t]=n,()=>{e.style[t]=o}})(document.body,"cursor",X[a]),g=e=>{e.stopPropagation(),c.value=`${s}:move`,d?.(e);const i=G(e);let l,b,g={x:i.x-r.x,y:i.y-r.y};s===t&&(g=function(e,t,n,a,i){const l=e=>{let n=t[e.axis];n=o.fitParent?q(e.min,n,e.max):n;let a=q(e.minEdge,e.getEdge(n),e.maxEdge);return n=e.getOffsetAxis(a,i),{[e.edgeName]:a,[e.axis]:n}},s=(e,t,i,l)=>{const s=a[t],r=n[e]-a[e],d=(u=t).charAt(0).toUpperCase()+u.slice(1);var u;return{axis:i,edgeName:t,min:l?r:-s,max:l?s:r,minEdge:o[`min${d}`],maxEdge:o[`max${d}`],getEdge:e=>a[t]-e*(l?1:-1),getOffsetAxis:(e,n)=>{const o=a[t]-e;return n?l?o:0:(l?1:-1)*o/2}}},r={t:["top","height","y",!0],b:["bottom","height","y",!1],l:["left","width","x",!0],r:["right","width","x",!1]};let d={x:0,y:0};return e.split("").forEach((e=>{const t=s(...r[e]);d={...d,...l(t)}})),d}(a,g,u,v,m)),m?(l=v.top-u.top+g.y,b=v.left-u.left+g.x):(l=p+g.y,b=h+g.x),s===n&&o.fitParent&&(l=q(y.minTop,l,y.maxTop),b=q(y.minLeft,b,y.maxLeft));const w={position:"relative",top:l+"px",left:b+"px",margin:"unset",touchAction:"none",...m&&{position:"absolute",transform:"unset",width:v.width+"px",height:v.height+"px"},...g.width&&{width:g.width+"px"},...g.height&&{height:g.height+"px"}};f.value={...f.value,...w}},w=e=>{e.stopPropagation(),s===t&&b&&b(),setTimeout((()=>{c.value=`${s}:end`,d?.(e)})),U("move",document,g),U("up",document,w)};Y("move",document,g),Y("up",document,w)}function m(){Y("down",l.value,v),f.value.touchAction="none"}function p(){U("down",l.value,v)}function h(){u.value=!0,n((()=>{Y("down",s.value,v)}))}function y(){U("down",s.value,v),u.value=!1}return t(r,(e=>{switch(e){case V:o.drag&&m(),o.resize&&h();break;case B:o.keepChangedStyle||(f.value={})}})),t((()=>o.drag),(e=>{a.value&&(e?m():p())})),t((()=>o.resize),(e=>{a.value&&(e?h():y())})),t((()=>o.keepChangedStyle),(e=>{e||(f.value={})})),{resizeVisible:u,state:c,dragResizeStyle:f,removeDragDown:p,removeResizeDown:y}}let Q=!1;if("undefined"!=typeof window){const e={get passive(){Q=!0}};window.addEventListener("testPassive",null,e),window.removeEventListener("testPassive",null,e)}const ee="undefined"!=typeof window&&window.navigator&&window.navigator.platform&&(/iP(ad|hone|od)/.test(window.navigator.platform)||"MacIntel"===window.navigator.platform&&window.navigator.maxTouchPoints>1);let te,ne,oe=[],ae=!1,ie=0,le=-1;const se=(e,t)=>{let n=!1;return(e=>{const t=[];for(;e;){if(t.push(e),e.classList.contains("vfm"))return t;e=e.parentElement}return t})(e).forEach((e=>{(e=>{if(!e||e.nodeType!==Node.ELEMENT_NODE)return!1;const t=window.getComputedStyle(e);return["auto","scroll"].includes(t.overflowY)&&e.scrollHeight>e.clientHeight})(e)&&((e,t)=>!(0===e.scrollTop&&t<0||e.scrollTop+e.clientHeight+t>=e.scrollHeight&&t>0))(e,t)&&(n=!0)})),n},re=e=>oe.some((()=>se(e,-ie))),de=e=>{const t=e||window.event;return!!re(t.target)||(t.touches.length>1||(t.preventDefault&&t.preventDefault(),!1))},ue=(e,t)=>{if(!e)return void console.error("disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.");if(oe.some((t=>t.targetElement===e)))return;const n={targetElement:e,options:t||{}};oe=[...oe,n],ee?(e.ontouchstart=e=>{1===e.targetTouches.length&&(le=e.targetTouches[0].clientY)},e.ontouchmove=t=>{1===t.targetTouches.length&&((e,t)=>{ie=e.targetTouches[0].clientY-le,!re(e.target)&&(t&&0===t.scrollTop&&ie>0||(e=>!!e&&e.scrollHeight-e.scrollTop<=e.clientHeight)(t)&&ie<0?de(e):e.stopPropagation())})(t,e)},ae||(document.addEventListener("touchmove",de,Q?{passive:!1}:void 0),ae=!0)):(e=>{if(void 0===ne){const t=!!e&&!0===e.reserveScrollBarGap,n=window.innerWidth-document.documentElement.clientWidth;if(t&&n>0){const e=parseInt(getComputedStyle(document.body).getPropertyValue("padding-right"),10);ne=document.body.style.paddingRight,document.body.style.paddingRight=`${e+n}px`}}void 0===te&&(te=document.body.style.overflow,document.body.style.overflow="hidden")})(t)},ce=e=>{e?(oe=oe.filter((t=>t.targetElement!==e)),ee?(e.ontouchstart=null,e.ontouchmove=null,ae&&0===oe.length&&(document.removeEventListener("touchmove",de,Q?{passive:!1}:void 0),ae=!1)):oe.length||(void 0!==ne&&(document.body.style.paddingRight=ne,ne=void 0),void 0!==te&&(document.body.style.overflow=te,te=void 0))):console.error("enableBodyScroll unsuccessful - targetElement must be provided when calling enableBodyScroll on IOS devices.")};function fe({props:e,vfmContainer:a,modalTransitionState:i}){function l(){e.modelValue&&n((()=>{e.lockScroll?a.value&&ue(a.value,{reserveScrollBarGap:!0}):s()}))}function s(){e.lockScroll&&a.value&&ce(a.value)}return t((()=>e.lockScroll),l),t(i,(e=>{e===B&&s()})),o((()=>{s()})),{handleLockScroll:l}}var ve={inheritAttrs:!1,props:{name:{type:String,default:null},modelValue:{type:Boolean,default:!1},displayDirective:{type:String,default:"show",validator:e=>-1!==["if","show"].indexOf(e)},classes:{type:[String,Object,Array],default:""},overlayClass:{type:[String,Object,Array],default:""},contentClass:{type:[String,Object,Array],default:""},styles:{type:[Object,Array],default:()=>({})},overlayStyle:{type:[Object,Array],default:()=>({})},contentStyle:{type:[Object,Array],default:()=>({})},lockScroll:{type:Boolean,default:!0},hideOverlay:{type:Boolean,default:!1},clickToClose:{type:Boolean,default:!0},escToClose:{type:Boolean,default:!1},nonModal:{type:Boolean,default:!1},teleportTo:{type:String,default:null},transition:{type:[String,Object],default:"vfm"},overlayTransition:{type:[String,Object],default:"vfm"},zIndexAuto:{type:Boolean,default:!0},zIndexBase:{type:[String,Number],default:1e3},zIndex:{type:[Boolean,String,Number],default:!1},focusRetain:{type:Boolean,default:!0},focusTrap:{type:Boolean,default:!1},fitParent:{type:Boolean,default:!0},drag:{type:Boolean,default:!1},dragSelector:{type:String,default:""},keepChangedStyle:{type:Boolean,default:!1},resize:{type:Boolean,default:!1},resizeDirections:{type:Array,default:()=>["t","tr","r","br","b","bl","l","tl"],validator:e=>["t","tr","r","br","b","bl","l","tl"].filter((t=>-1!==e.indexOf(t))).length===e.length},minWidth:{type:[Number,String],default:0},minHeight:{type:[Number,String],default:0},maxWidth:{type:[Number,String],default:1/0},maxHeight:{type:[Number,String],default:1/0}},emits:["update:modelValue","click-outside","before-open","opened","_before-close","before-close","closed","_before-open","_opened","_closed","drag:start","drag:move","drag:end","resize:start","resize:move","resize:end"],setup(s,{emit:r}){const d=Symbol("vfm"),u=e(null),c=e(null),f=e(null),v=e(null),m=e(null),p=e(null),h=e(null),y=e(!1),b=a({modal:!1,overlay:!1}),{state:g,listeners:w}=P(),{state:S,listeners:x}=P(),T=e(!1),{focusTrap:C}=H({props:s,vfmContainer:c,modalTransitionState:S}),{resizeVisible:k,state:E,dragResizeStyle:M,removeDragDown:z,removeResizeDown:O}=J({props:s,visible:y,vfmContainer:c,vfmContent:f,vfmResize:v,modalTransitionState:S,onEvent(e){r(E.value,e)}}),{handleLockScroll:D}=fe({props:s,vfmContainer:c,modalTransitionState:S}),L=e(null);let _=F,I=F;const R=i((()=>"string"==typeof s.overlayTransition?{name:s.overlayTransition}:{...s.overlayTransition})),A=i((()=>"string"==typeof s.transition?{name:s.transition}:{...s.transition})),$=i((()=>(s.hideOverlay||g.value===B)&&S.value===B)),N=i((()=>!1===s.zIndex?!!s.zIndexAuto&&+s.zIndexBase+2*(h.value||0):s.zIndex)),j=i((()=>({...!1!==N.value&&{zIndex:N.value}}))),W=i((()=>{let e=[M.value];return Array.isArray(s.contentStyle)?e.push(...s.contentStyle):e.push(s.contentStyle),e}));function G(){return{uid:d,props:s,emit:r,vfmContainer:c,vfmContent:f,vfmResize:v,vfmOverlayTransition:m,vfmTransition:p,modalStackIndex:h,visibility:b,handleLockScroll:D,toggle:q}}function K(){if(s.modelValue){if(r("_before-open",U({type:"_before-open"})),X("before-open",!1))return void I("show");let e=s.api.openedModals.findIndex((e=>e.uid===d));-1!==e&&s.api.openedModals.splice(e,1),s.api.openedModals.push(G()),h.value=s.api.openedModals.length-1,D(),y.value=!0,n((()=>{b.overlay=!0,b.modal=!0}))}}function Y(){let e=s.api.openedModals.findIndex((e=>e.uid===d));if(-1!==e&&s.api.openedModals.splice(e,1),s.api.openedModals.length>0){const e=s.api.openedModals[s.api.openedModals.length-1];e.props.focusTrap&&n((()=>{C.enable(e.vfmContainer.value),C.firstElement.focus()})),(e.props.focusRetain||e.props.focusTrap)&&e.vfmContainer.value.focus(),!e.props.hideOverlay&&(e.visibility.overlay=!0)}s.drag&&z(),s.resize&&O(),E.value=null,b.overlay=!1,b.modal=!1}function U(e={}){return{ref:G(),...e}}function X(e,t){let o=!1;const a=U({type:e,stop(){o=!0}});return r(e,a),!!o&&(T.value=!0,n((()=>{r("update:modelValue",t)})),!0)}function q(e){return new Promise(((t,n)=>{_=e=>{t(e),_=F},I=e=>{n(e),I=F};const o="boolean"==typeof e?e:!s.modelValue;r("update:modelValue",o)}))}return t((()=>s.modelValue),(e=>{if(T.value)T.value=!1;else if(K(),!e){if(r("_before-close",U({type:"_before-close"})),X("before-close",!0))return void I("hide");Y()}})),t((()=>s.hideOverlay),(e=>{s.modelValue&&!e&&(b.overlay=!0)})),t($,(e=>{e&&(y.value=!1,c.value.style.display="none")}),{flush:"post"}),t(S,(e=>{switch(e){case V:r("_opened"),r("opened",U({type:"opened"})),_("show");break;case B:h.value=null,r("_closed"),r("closed",U({type:"closed"})),_("hide")}})),s.api.modals.push(G()),l((()=>{K()})),o((()=>{Y(),u?.value?.remove();let e=s.api.modals.findIndex((e=>e.uid===d));s.api.modals.splice(e,1)})),{root:u,vfmContainer:c,vfmContent:f,vfmResize:v,vfmOverlayTransition:m,vfmTransition:p,computedOverlayTransition:R,computedTransition:A,overlayListeners:w,modalListeners:x,visible:y,visibility:b,resizeVisible:k,calculateZIndex:N,bindStyle:j,bindContentStyle:W,onMousedown:function(e){L.value=e?.target},onMouseupContainer:function(){L.value===c.value&&"resize:move"!==E.value&&(r("click-outside",U({type:"click-outside"})),s.clickToClose&&r("update:modelValue",!1))},onEsc:function(){y.value&&s.escToClose&&r("update:modelValue",!1)}}}};const me=["aria-expanded"],pe={key:0,ref:"vfmResize",class:"vfm__resize vfm--absolute vfm--inset vfm--prevent-none vfm--select-none vfm--touch-none"},he=["direction"];function ye(e,t){void 0===t&&(t={});var n=t.insertAt;if(e&&"undefined"!=typeof document){var o=document.head||document.getElementsByTagName("head")[0],a=document.createElement("style");a.type="text/css","top"===n&&o.firstChild?o.insertBefore(a,o.firstChild):o.appendChild(a),a.styleSheet?a.styleSheet.cssText=e:a.appendChild(document.createTextNode(e))}}ye("\n.vfm--fixed[data-v-72c09f54] {\n  position: fixed;\n}\n.vfm--absolute[data-v-72c09f54] {\n  position: absolute;\n}\n.vfm--inset[data-v-72c09f54] {\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n}\n.vfm--overlay[data-v-72c09f54] {\n  background-color: rgba(0, 0, 0, 0.5);\n}\n.vfm--prevent-none[data-v-72c09f54] {\n  pointer-events: none;\n}\n.vfm--prevent-auto[data-v-72c09f54] {\n  pointer-events: auto;\n}\n.vfm--outline-none[data-v-72c09f54]:focus {\n  outline: none;\n}\n.vfm-enter-active[data-v-72c09f54],\n.vfm-leave-active[data-v-72c09f54] {\n  transition: opacity 0.2s;\n}\n.vfm-enter-from[data-v-72c09f54],\n.vfm-leave-to[data-v-72c09f54] {\n  opacity: 0;\n}\n.vfm--touch-none[data-v-72c09f54] {\n  touch-action: none;\n}\n.vfm--select-none[data-v-72c09f54] {\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n.vfm--resize-tr[data-v-72c09f54],\n.vfm--resize-br[data-v-72c09f54],\n.vfm--resize-bl[data-v-72c09f54],\n.vfm--resize-tl[data-v-72c09f54] {\n  width: 12px;\n  height: 12px;\n  z-index: 10;\n}\n.vfm--resize-t[data-v-72c09f54] {\n  top: -6px;\n  left: 0;\n  width: 100%;\n  height: 12px;\n  cursor: ns-resize;\n}\n.vfm--resize-tr[data-v-72c09f54] {\n  top: -6px;\n  right: -6px;\n  cursor: nesw-resize;\n}\n.vfm--resize-r[data-v-72c09f54] {\n  top: 0;\n  right: -6px;\n  width: 12px;\n  height: 100%;\n  cursor: ew-resize;\n}\n.vfm--resize-br[data-v-72c09f54] {\n  bottom: -6px;\n  right: -6px;\n  cursor: nwse-resize;\n}\n.vfm--resize-b[data-v-72c09f54] {\n  bottom: -6px;\n  left: 0;\n  width: 100%;\n  height: 12px;\n  cursor: ns-resize;\n}\n.vfm--resize-bl[data-v-72c09f54] {\n  bottom: -6px;\n  left: -6px;\n  cursor: nesw-resize;\n}\n.vfm--resize-l[data-v-72c09f54] {\n  top: 0;\n  left: -6px;\n  width: 12px;\n  height: 100%;\n  cursor: ew-resize;\n}\n.vfm--resize-tl[data-v-72c09f54] {\n  top: -6px;\n  left: -6px;\n  cursor: nwse-resize;\n}\n"),ve.render=function(e,t,n,o,a,i){return s(),r(d,{to:n.teleportTo,disabled:!n.teleportTo},["if"!==n.displayDirective||o.visible?u((s(),c("div",f({key:0},e.$attrs,{ref:"root",style:o.bindStyle,class:["vfm vfm--inset",["vfm--fixed",{"vfm--prevent-none":n.nonModal}]],onKeydown:t[3]||(t[3]=v(((...e)=>o.onEsc&&o.onEsc(...e)),["esc"]))}),[m(p,f(o.computedOverlayTransition,h(o.overlayListeners)),{default:y((()=>[!n.hideOverlay&&o.visibility.overlay?(s(),c("div",{key:0,class:b(["vfm__overlay vfm--overlay vfm--absolute vfm--inset",n.overlayClass]),style:g(n.overlayStyle)},null,6)):w("v-if",!0)])),_:1},16),m(p,f(o.computedTransition,h(o.modalListeners)),{default:y((()=>[u(S("div",{ref:"vfmContainer",class:b(["vfm__container vfm--absolute vfm--inset vfm--outline-none",n.classes]),style:g(n.styles),"aria-expanded":o.visibility.modal.toString(),role:"dialog","aria-modal":"true",tabindex:"-1",onMouseup:t[1]||(t[1]=x(((...e)=>o.onMouseupContainer&&o.onMouseupContainer(...e)),["self"])),onMousedown:t[2]||(t[2]=x(((...e)=>o.onMousedown&&o.onMousedown(...e)),["self"]))},[S("div",{ref:"vfmContent",class:b(["vfm__content",[n.contentClass,{"vfm--prevent-auto":n.nonModal}]]),style:g(o.bindContentStyle),onMousedown:t[0]||(t[0]=e=>o.onMousedown(null))},[T(e.$slots,"default",{close:()=>e.$emit("update:modelValue",!1)}),o.resizeVisible&&o.visibility.modal?(s(),c("div",pe,[(s(!0),c(C,null,k(n.resizeDirections,(e=>(s(),c("div",{key:e,direction:e,class:b([`vfm--resize-${e}`,"vfm--absolute vfm--prevent-auto"])},null,10,he)))),128))],512)):w("v-if",!0)],38)],46,me),[[E,o.visibility.modal]])])),_:3},16)],16)),[[E,"show"!==n.displayDirective||o.visible]]):w("v-if",!0)],8,["to","disabled"])},ve.__scopeId="data-v-72c09f54",ve.__file="src/VueFinalModal.vue";var be={methods:{slice(e){this.api.dynamicModals.splice(e,1)},closed(e,t){this.slice(e),t.closed&&t.closed()},beforeClose(e){e.value&&e?.rejectClose("hide")},async beforeOpen(e,t,n){await this.$nextTick(),await this.$nextTick(),t.value||(this.slice(n),t?.reject("show"))},isString:e=>"string"==typeof e}};const ge={class:"modals-container"},we=["innerHTML"];be.render=function(e,t,n,o,a,i){return s(),c("div",ge,[(s(!0),c(C,null,k(e.api.dynamicModals,((e,t)=>(s(),r(M(e.component),f({key:e.id},e.bind,{modelValue:e.value,"onUpdate:modelValue":t=>e.value=t},h(e.on),{on_beforeClose:t=>i.beforeClose(e),on_closed:n=>i.closed(t,e),on_beforeOpen:n=>i.beforeOpen(n,e,t),on_opened:e.opened}),z({_:2},[k(e.slots,((e,t)=>({name:t,fn:y((()=>[w(" eslint-disable vue/no-v-html "),i.isString(e)?(s(),c("div",{key:0,innerHTML:e},null,8,we)):(s(),r(M(e.component),f({key:1},e.bind,h(e.on||{})),null,16))]))})))]),1040,["modelValue","onUpdate:modelValue","on_beforeClose","on_closed","on_beforeOpen","on_opened"])))),128))])},be.__file="src/ModalsContainer.vue";class Se{constructor(){const e=e=>{const t={...e,props:{...e.props}};return Object.assign(t.props,{api:{type:Object,default:()=>this}}),O(t)};this.modals=[],this.openedModals=[],this.VueFinalModal=e(ve),this.dynamicModals=D([]),this.ModalsContainer=e(be)}show(e,...t){switch(typeof e){case"string":return this.toggle(e,!0,...t);case"object":{const{show:n}=this.useModal(e,t[0]);return n()}}}hide(...e){return this.toggle(e,!1)}hideAll(){return this.hide(...this.openedModals.map((e=>e.props.name)))}toggle(e,...t){const n=Array.isArray(e)?this.get(...e):this.get(e);return Promise.allSettled(n.map((e=>e.toggle(...t))))}get(...e){return this.modals.filter((t=>e.includes(t.props.name)))}existModal(e){return-1!==this.dynamicModals.indexOf(e)}useModal(e){let t=a({value:!1,component:this.VueFinalModal,id:Symbol("useModal"),bind:{},slots:{},on:{},...e});return{show:()=>this.existModal(t)?Promise.resolve("[Vue Final Modal] modal is already opened"):new Promise(((e,n)=>{t.value=!0,t.reject=n,t.opened=()=>{e("show")},this.dynamicModals.push(t)})),hide:()=>this.existModal(t)?new Promise(((e,n)=>{t.value=!1,t.rejectClose=n,t.closed=()=>{e("hide")}})):Promise.resolve("[Vue Final Modal] modal is already closed"),options:t}}}const xe=()=>{let e=new Se;return{$vfm:e,VueFinalModal:e.VueFinalModal,ModalsContainer:e.ModalsContainer,useModal:e.useModal.bind(e)}},Te=xe(),{$vfm:Ce,VueFinalModal:ke,ModalsContainer:Ee,useModal:Me}=Te,ze="UP",Oe="RIGHT",De="DOWN",Le="LEFT",_e="NONE";function Ie(t,{threshold:n=50,onSwipeStart:o,onSwipe:l,onSwipeEnd:s,passive:r=!0}){const d=a({x:0,y:0}),u=a({x:0,y:0}),c=i((()=>d.x-u.x)),f=i((()=>d.y-u.y)),{max:v,abs:m}=Math,p=i((()=>v(m(c.value),m(f.value))>=n)),h=e(!1),y=i((()=>p.value?m(c.value)>m(f.value)?c.value>0?Le:Oe:f.value>0?ze:De:_e)),b=(e,t)=>{u.x=e,u.y=t};let g;const w=function(e){if(!e)return!1;let t=!1;const n={get passive(){return t=!0,!1}};return e.addEventListener("x",F,n),e.removeEventListener("x",F),t}(window?.document);let S;function x(e){g.capture&&!g.passive&&e.preventDefault();const{x:n,y:a}=G(e);((e,t)=>{d.x=e,d.y=t})(n,a),b(n,a),o?.(e),S=[I(t,"mousemove",T,g),I(t,"touchmove",T,g),I(t,"mouseup",C,g),I(t,"touchend",C,g),I(t,"touchcancel",C,g)]}function T(e){const{x:t,y:n}=G(e);b(t,n),!h.value&&p.value&&(h.value=!0),h.value&&l?.(e)}function C(e){h.value&&s?.(e,y.value),h.value=!1,S.forEach((e=>e()))}g=r?w?{passive:!0}:{capture:!1}:w?{passive:!1,capture:!0}:{capture:!0};const k=[I(t,"mousedown",x,g),I(t,"touchstart",x,g)];return{isPassiveEventSupported:w,isSwiping:h,direction:y,coordsStart:d,coordsEnd:u,lengthX:c,lengthY:f,stop:()=>{k.forEach((e=>e())),S.forEach((e=>e()))}}}var Ve=Object.assign({inheritAttrs:!1},{props:{swipeToCloseDirection:{type:String,default:"",validator:e=>-1!==["","DOWN"].includes(e)},threshold:{type:Number,default:30},lockScroll:{type:Boolean,default:!1}},setup:function(n,{emit:o}){const a=n,i=L(),l=e(null),d=e(0),u=e(!0);let c=F,v=!0,m=null,p=!1;const{lengthY:h,direction:w,isSwiping:C}=Ie(l,{threshold:a.threshold,onSwipeStart(e){c=I(document,"selectionchange",(()=>{u.value=window.getSelection().isCollapsed})),m=(new Date).getTime(),p=k(e.target)},onSwipe(){var e,t,n;if(p&&w.value===a.swipeToCloseDirection){if(!u.value)return;d.value=(e=Math.abs(h.value),t=0,n=l.value.offsetHeight,-(e>n?n:e<t?t:e)+a.threshold)}},onSwipeEnd(e,t){if(c(),!u.value)return void(u.value=!0);const n=(new Date).getTime(),i=t===a.swipeToCloseDirection,s=Math.abs(h.value)>.1*l.value.offsetHeight;v&&p&&i&&(s||n-m<=300)?o("update:modelValue",!1):d.value=0}});function k(e){const t=0===e.scrollTop;return e===l.value?t:t&&k(e.parentElement)}return t((()=>i.modelValue),(e=>{e&&(d.value=0)})),t((()=>u.value),(e=>{e||(d.value=0)})),t((()=>d.value),((e,t)=>{"DOWN"===a.swipeToCloseDirection&&(v=e<t)})),(e,t)=>(s(),r(_(ke),f(_(i),{transition:{"enter-active-class":"vfmSlideInDown","leave-active-class":"vfmSlideOutDown"},"lock-scroll":n.lockScroll,onMousedown:t[0]||(t[0]=x((()=>{}),["stop"])),onTouchstartPassive:t[1]||(t[1]=x((()=>{}),["stop"])),onClosed:_(W)}),{default:y((()=>[T(e.$slots,"prepend"),S("div",{ref:(e,t)=>{t.bottomSheetEl=e,l.value=e},class:b(["vfm-bottom-sheet",{"vfm-transition":!_(C)}]),style:g({transform:`translateY(${-d.value}px)`})},[T(e.$slots,"default")],6),T(e.$slots,"append")])),_:3},16,["lock-scroll","onClosed"]))}});ye("\n.vfm-bottom-sheet[data-v-730a320a] {\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n  max-height: 90%;\n  overflow-y: auto;\n  background-color: #fff;\n  border-top-left-radius: 12px;\n  border-top-right-radius: 12px;\n}\n.vfm-transition[data-v-730a320a] {\n  transition-property: transform;\n  transition-duration: 250ms;\n}\n@-webkit-keyframes vfmSlideInDown-730a320a {\nfrom {\n    transform: translate3d(0, 100%, 0);\n}\nto {\n    transform: translate3d(0, 0, 0);\n}\n}\n@keyframes vfmSlideInDown-730a320a {\nfrom {\n    transform: translate3d(0, 100%, 0);\n}\nto {\n    transform: translate3d(0, 0, 0);\n}\n}\n.vfmSlideInDown {\n  -webkit-animation-name: vfmSlideInDown-730a320a;\n          animation-name: vfmSlideInDown-730a320a;\n  -webkit-animation-duration: 0.3s;\n          animation-duration: 0.3s;\n}\n@-webkit-keyframes vfmSlideOutDown-730a320a {\nfrom {\n    transform: translate3d(0, 0, 0);\n}\nto {\n    transform: translate3d(0, 100%, 0);\n}\n}\n@keyframes vfmSlideOutDown-730a320a {\nfrom {\n    transform: translate3d(0, 0, 0);\n}\nto {\n    transform: translate3d(0, 100%, 0);\n}\n}\n.vfmSlideOutDown {\n  -webkit-animation-name: vfmSlideOutDown-730a320a;\n          animation-name: vfmSlideOutDown-730a320a;\n  -webkit-animation-duration: 0.3s;\n          animation-duration: 0.3s;\n}\n"),Ve.__scopeId="data-v-730a320a",Ve.__file="src/hoc/VBottomSheet.vue";var Re=Object.assign({inheritAttrs:!1},{props:{fullScreenClass:{type:[String,Object,Array],default:""},fullScreenStyle:{type:[Object,Array],default:()=>({})},swipeToCloseDirection:{type:String,default:"",validator:e=>-1!==["","RIGHT","LEFT"].includes(e)},threshold:{type:Number,default:30},lockScroll:{type:Boolean,default:!1}},setup:function(n,{emit:o}){const a=n,l=L(),d=e(null),u=e(0),c=e(!0);let v=F,m=!0,p=null,h=!1;const w=i((()=>a.swipeToCloseDirection?{"enter-active-class":"RIGHT"===a.swipeToCloseDirection?"vfmSlideInRight":"vfmSlideInLeft","leave-active-class":"RIGHT"===a.swipeToCloseDirection?"vfmSlideOutRight":"vfmSlideOutLeft"}:{})),{lengthX:C,direction:k,isSwiping:E}=a.swipeToCloseDirection?Ie(d,{threshold:a.threshold,onSwipeStart(e){v=I(document,"selectionchange",(()=>{c.value=window.getSelection().isCollapsed})),p=(new Date).getTime(),h=M(e.target)},onSwipe(){var e,t,n;if(h&&k.value===a.swipeToCloseDirection){if(!c.value)return;d.value.classList.add("vfm-overflow-hidden");const o=(e=Math.abs(C.value),t=0,n=d.value.offsetWidth,(e>n?n:e<t?t:e)-a.threshold);u.value="RIGHT"===a.swipeToCloseDirection?-o:o}},onSwipeEnd(e,t){if(d.value.classList.remove("vfm-overflow-hidden"),v(),!c.value)return void(c.value=!0);const n=(new Date).getTime(),i=t===a.swipeToCloseDirection,l=Math.abs(C.value)>.1*d.value.offsetWidth;m&&h&&i&&(l||n-p<=300)?o("update:modelValue",!1):u.value=0}}):{};function M(e){const t=0===e.scrollLeft;return e===d.value?t:t&&M(e.parentElement)}return t((()=>l.modelValue),(e=>{e&&(u.value=0)})),t((()=>c.value),(e=>{e||(u.value=0)})),t((()=>u.value),((e,t)=>{"RIGHT"===a.swipeToCloseDirection?m=e<t:"LEFT"===a.swipeToCloseDirection&&(m=e>t)})),(e,t)=>(s(),r(_(ke),f(_(l),{"hide-overlay":"",transition:_(w),"content-style":[{transform:`translateX(${-u.value}px)`}],"content-class":{"vfm-transition":!_(E)},"lock-scroll":n.lockScroll,onMousedown:t[0]||(t[0]=x((()=>{}),["stop"])),onTouchstartPassive:t[1]||(t[1]=x((()=>{}),["stop"])),onClosed:_(W)}),{default:y((()=>[T(e.$slots,"prepend"),S("div",{ref:(e,t)=>{t.modalContent=e,d.value=e},class:b(["vfm-full-screen",n.fullScreenClass]),style:g(n.fullScreenStyle)},[T(e.$slots,"default")],6),T(e.$slots,"append")])),_:3},16,["transition","content-style","content-class","lock-scroll","onClosed"]))}});ye("\n.vfm-full-screen[data-v-1a4bac96] {\n  width: 100%;\n  height: 100%;\n  overflow-y: auto;\n  background-color: #fff;\n}\n.vfm-overflow-hidden[data-v-1a4bac96],[data-v-1a4bac96] .vfm-overflow-hidden * {\n  overflow: hidden;\n}\n[data-v-1a4bac96] .vfm-transition {\n  transition-property: transform;\n  transition-duration: 0.3s;\n}\n[data-v-1a4bac96] .vfm__content {\n  width: 100%;\n  height: 100%;\n}\n@-webkit-keyframes vfmSlideInLeft-1a4bac96 {\nfrom {\n    transform: translate3d(-100%, 0, 0);\n}\nto {\n    transform: translate3d(0, 0, 0);\n}\n}\n@keyframes vfmSlideInLeft-1a4bac96 {\nfrom {\n    transform: translate3d(-100%, 0, 0);\n}\nto {\n    transform: translate3d(0, 0, 0);\n}\n}\n.vfmSlideInLeft {\n  -webkit-animation-name: vfmSlideInLeft-1a4bac96;\n          animation-name: vfmSlideInLeft-1a4bac96;\n  -webkit-animation-duration: 0.3s;\n          animation-duration: 0.3s;\n}\n@-webkit-keyframes vfmSlideInRight-1a4bac96 {\nfrom {\n    transform: translate3d(100%, 0, 0);\n}\nto {\n    transform: translate3d(0, 0, 0);\n}\n}\n@keyframes vfmSlideInRight-1a4bac96 {\nfrom {\n    transform: translate3d(100%, 0, 0);\n}\nto {\n    transform: translate3d(0, 0, 0);\n}\n}\n.vfmSlideInRight {\n  -webkit-animation-name: vfmSlideInRight-1a4bac96;\n          animation-name: vfmSlideInRight-1a4bac96;\n  -webkit-animation-duration: 0.3s;\n          animation-duration: 0.3s;\n}\n@-webkit-keyframes vfmSlideOutLeft-1a4bac96 {\nfrom {\n    transform: translate3d(0, 0, 0);\n}\nto {\n    transform: translate3d(-100%, 0, 0);\n}\n}\n@keyframes vfmSlideOutLeft-1a4bac96 {\nfrom {\n    transform: translate3d(0, 0, 0);\n}\nto {\n    transform: translate3d(-100%, 0, 0);\n}\n}\n.vfmSlideOutLeft {\n  -webkit-animation-name: vfmSlideOutLeft-1a4bac96;\n          animation-name: vfmSlideOutLeft-1a4bac96;\n  -webkit-animation-duration: 0.3s;\n          animation-duration: 0.3s;\n}\n@-webkit-keyframes vfmSlideOutRight-1a4bac96 {\nfrom {\n    transform: translate3d(0, 0, 0);\n}\nto {\n    transform: translate3d(100%, 0, 0);\n}\n}\n@keyframes vfmSlideOutRight-1a4bac96 {\nfrom {\n    transform: translate3d(0, 0, 0);\n}\nto {\n    transform: translate3d(100%, 0, 0);\n}\n}\n.vfmSlideOutRight {\n  -webkit-animation-name: vfmSlideOutRight-1a4bac96;\n          animation-name: vfmSlideOutRight-1a4bac96;\n  -webkit-animation-duration: 0.3s;\n          animation-duration: 0.3s;\n}\n"),Re.__scopeId="data-v-1a4bac96",Re.__file="src/hoc/VFullScreen.vue";export{Ce as $vfm,Se as ModalInstance,Ee as ModalsContainer,Ve as VBottomSheet,Re as VFullScreen,ke as VueFinalModal,xe as createModalInstance,Me as useModal};
//# sourceMappingURL=VueFinalModal.esm.js.map
