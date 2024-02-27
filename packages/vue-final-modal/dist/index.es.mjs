import { ref as C, computed as g, watch as I, nextTick as x, onBeforeUnmount as we, reactive as ye, onMounted as $e, getCurrentInstance as Fe, inject as oo, shallowReactive as ee, markRaw as ne, defineComponent as be, useAttrs as He, toRef as ae, openBlock as E, createBlock as G, Teleport as to, unref as v, withDirectives as ue, createElementBlock as j, mergeProps as W, withKeys as no, withModifiers as Ve, Transition as Be, toHandlers as Ee, withCtx as he, normalizeClass as lo, normalizeStyle as so, vShow as ce, createCommentVNode as N, createVNode as ro, renderSlot as Oe, normalizeProps as je, guardReactiveProps as io, createElementVNode as oe, Fragment as ao, renderList as Le, resolveDynamicComponent as de, createSlots as uo } from "vue";
import { useEventListener as $, tryOnUnmounted as co } from "@vueuse/core";
import { useFocusTrap as fo } from "@vueuse/integrations/useFocusTrap";
const vo = (e) => (...o) => {
  e && (e == null || e(...o), e = null);
}, J = () => {
};
function te(e, o, t) {
  return e > t ? t : e < o ? o : e;
}
const Te = (e) => typeof e == "string";
function fe(e, o) {
  var n;
  const t = ((n = Y(e, o)) == null ? void 0 : n[0]) || o;
  e.push(t);
}
function Y(e, o) {
  const t = e.indexOf(o);
  if (t !== -1)
    return e.splice(t, 1);
}
function Ne(e) {
  return Object.entries(e);
}
const po = {
  /**
   * @description Set `null | false` to disable teleport.
   * @default `'body'`
   * @example
   * ```js
   * teleportTo: '#modals'
   * ```
   */
  teleportTo: {
    type: [String, null, Boolean, Object],
    default: "body"
  },
  /**
   * @description An uniq name for the open/close a modal via vfm.open/vfm.close APIs.
   * @default `undefined`
   * @example Symbol: `Symbol('MyModal')`
   * @example String: `'AUniqString'`
   * @example Number: `300`
   */
  modalId: {
    type: [String, Number, Symbol],
    default: void 0
  },
  /**
   * @description Display the modal or not.
   * @default `undefined`
   * @example
   * ```js
   * const showModal = ref(false)
   * v-model="showModal"
   * ```
   */
  modelValue: {
    type: Boolean,
    default: void 0
  },
  /**
   * @description Render the modal via `if` or `show`.
   * @default `'if'`
   * @example
   * ```js
   * displayDirective: 'if'
   * ```
   * @example
   * ```js
   * displayDirective: 'show'
   * ```
   */
  displayDirective: {
    type: String,
    default: "if",
    validator: (e) => ["if", "show", "visible"].includes(e)
  },
  /**
   * @description Hide the overlay or not.
   * @default `undefined`
   * @example
   * ```js
   * hideOverlay="true"
   * ```
   */
  hideOverlay: {
    type: Boolean,
    default: void 0
  },
  /**
   * @description Customize the overlay behavior.
   */
  overlayBehavior: {
    type: String,
    default: "auto",
    validator: (e) => ["auto", "persist"].includes(e)
  },
  /**
   * @description Customize the overlay transition.
   * @default `undefined`
   */
  overlayTransition: {
    type: [String, Object],
    default: void 0
  },
  /**
   * @description Customize the content transition.
   * @default `undefined`
   */
  contentTransition: {
    type: [String, Object],
    default: void 0
  },
  /**
   * @description Bind class to vfm__overlay.
   * @default `undefined`
   */
  overlayClass: {
    type: void 0,
    default: void 0
  },
  /**
   * @description Bind class to vfm__content.
   * @default `undefined`
   */
  contentClass: {
    type: void 0,
    default: void 0
  },
  /**
   * @description Bind style to vfm__overlay.
   * @default `undefined`
   */
  overlayStyle: {
    type: [String, Object, Array],
    default: void 0
  },
  /**
   * @description Bind style to vfm__content.
   * @default `undefined`
   */
  contentStyle: {
    type: [String, Object, Array],
    default: void 0
  },
  /**
   * @description Is it allow to close the modal by clicking the overlay.
   * @default `true`
   */
  clickToClose: {
    type: Boolean,
    default: !0
  },
  /**
   * @description Is it allow to close the modal by keypress `esc`.
   * @default `true`
   */
  escToClose: {
    type: Boolean,
    default: !0
  },
  /**
   * @description Is it allow to click outside of the vfm__content when the modal is opened
   * @default `'non-interactive'`
   */
  background: {
    type: String,
    default: "non-interactive",
    validator: (e) => ["interactive", "non-interactive"].includes(e)
  },
  /**
   * @description
   * * Use `{ disabled: true }` to disable the focusTrap.
   * * Checkout the createOptions type here https://github.com/focus-trap/focus-trap for more.
   * @default `{ allowOutsideClick: true }`
   */
  focusTrap: {
    type: [Boolean, Object],
    default: () => ({
      allowOutsideClick: !0
    })
  },
  /**
   * @description Lock body scroll or not when the modal is opened.
   * @default `true`
   */
  lockScroll: {
    type: Boolean,
    default: !0
  },
  /**
   * @description Creates a padding-right when scroll is locked to prevent the page from jumping
   * @default `true`
   */
  reserveScrollBarGap: {
    type: Boolean,
    default: !0
  },
  /**
   * @description Define how to increase the zIndex when there are nested modals
   * @default `({ index }) => 1000 + 2 * index`
   */
  zIndexFn: {
    type: Function,
    default: ({ index: e }) => 1e3 + 2 * e
  },
  /**
   * @description The direction of swiping to close the modal
   * @default `none`
   * @example
   * Set swipeToClose="none" to disable swiping to close
   * ```js
   * swipeToClose="none"
   * ```
   */
  swipeToClose: {
    type: String,
    default: "none",
    validator: (e) => ["none", "up", "right", "down", "left"].includes(e)
  },
  /**
   * @description Threshold for swipe to close
   * @default `0`
   */
  threshold: {
    type: Number,
    default: 0
  },
  /**
   * @description If set `:showSwipeBanner="true"`, only allow clicking `swipe-banner` slot to swipe to close
   * @default `undefined`
   * @example
   * ```js
   * swipeToClose="right"
   * :showSwipeBanner="true"
   * ```
   * ```html
   * <VueFinalModal
   *   ...
   *   swipeToClose="right"
   *   :showSwipeBanner="true"
   * >
   *   <template #swipe-banner>
   *     <div style="position: absolute; height: 100%; top: 0; left: 0; width: 10px;" />
   *   </template>
   *   ...modal content
   * </VueFinalModal>
   * ```
   */
  showSwipeBanner: {
    type: Boolean,
    default: void 0
  },
  /**
   * @description When set `:preventNavigationGestures="true"`, there will be two invisible bars for prevent navigation gestures including swiping back/forward on mobile webkit. For example: Safari mobile.
   * @default `undefined`
   * @example
   * Set preventNavigationGestures="true" to prevent Safari navigation gestures including swiping back/forward.
   * ```js
   * :preventNavigationGestures="true"
   * ```
   */
  preventNavigationGestures: {
    type: Boolean,
    default: void 0
  }
};
function Pe(e = !1) {
  const o = C(e), t = C(o.value ? 0 : void 0);
  return [o, t, {
    beforeEnter() {
      t.value = 1;
    },
    afterEnter() {
      t.value = 0;
    },
    beforeLeave() {
      t.value = 3;
    },
    afterLeave() {
      t.value = 2;
    }
  }];
}
function yo(e, o) {
  const { modelValueLocal: t, onEntering: n, onEnter: u, onLeaving: c, onLeave: i } = o, s = C(t.value), [l, r, m] = Pe(s.value), [f, M, S] = Pe(s.value), V = g(() => typeof e.contentTransition == "string" ? { name: e.contentTransition, appear: !0 } : { appear: !0, ...e.contentTransition }), O = g(() => typeof e.overlayTransition == "string" ? { name: e.overlayTransition, appear: !0 } : { appear: !0, ...e.overlayTransition }), B = g(
    () => (e.hideOverlay || M.value === 2) && r.value === 2
    /* Leave */
  );
  I(
    B,
    (k) => {
      k && (s.value = !1);
    }
  ), I(r, (k) => {
    if (k === 1) {
      if (!s.value)
        return;
      n == null || n();
    } else if (k === 0) {
      if (!s.value)
        return;
      u == null || u();
    } else
      k === 3 ? c == null || c() : k === 2 && (i == null || i());
  });
  async function w() {
    s.value = !0, await x(), l.value = !0, f.value = !0;
  }
  function L() {
    l.value = !1, f.value = !1;
  }
  return {
    visible: s,
    contentVisible: l,
    contentListeners: m,
    contentTransition: V,
    overlayVisible: f,
    overlayListeners: S,
    overlayTransition: O,
    enterTransition: w,
    leaveTransition: L
  };
}
function ho(e, o, t) {
  const { vfmRootEl: n, vfmContentEl: u, visible: c, modelValueLocal: i } = t, s = C();
  function l() {
    c.value && e.escToClose && (i.value = !1);
  }
  function r(f) {
    s.value = f == null ? void 0 : f.target;
  }
  function m() {
    var f;
    s.value === n.value && (e.clickToClose ? i.value = !1 : ((f = u.value) == null || f.focus(), o("clickOutside")));
  }
  return {
    onEsc: l,
    onMouseupRoot: m,
    onMousedown: r
  };
}
function mo(e, o, t) {
  let n = !1;
  const { open: u, close: c } = t, i = C(!1), s = {
    get value() {
      return i.value;
    },
    set value(r) {
      l(r);
    }
  };
  function l(r) {
    (r ? u() : c()) ? (i.value = r, r !== e.modelValue && o("update:modelValue", r)) : (n = !0, o("update:modelValue", !r), x(() => {
      n = !1;
    }));
  }
  return I(() => e.modelValue, (r) => {
    n || (s.value = !!r);
  }), {
    modelValueLocal: s
  };
}
function wo(e, o) {
  if (e.focusTrap === !1)
    return {
      focus() {
      },
      blur() {
      }
    };
  const { focusEl: t } = o, { hasFocus: n, activate: u, deactivate: c } = fo(t, e.focusTrap);
  function i() {
    requestAnimationFrame(() => {
      u();
    });
  }
  function s() {
    n.value && c();
  }
  return { focus: i, blur: s };
}
let Se = !1;
if (typeof window < "u") {
  const e = {
    get passive() {
      Se = !0;
    }
  };
  window.addEventListener("testPassive", null, e), window.removeEventListener("testPassive", null, e);
}
const We = typeof window < "u" && window.navigator && window.navigator.platform && (/iP(ad|hone|od)/.test(window.navigator.platform) || window.navigator.platform === "MacIntel" && window.navigator.maxTouchPoints > 1);
let H = [], le = !1, me = { x: 0, y: 0 }, X = { x: -1, y: -1 }, U, Z, ve = null;
const De = (e, o) => {
  if (!e || e.nodeType !== Node.ELEMENT_NODE)
    return !1;
  const n = window.getComputedStyle(e)[`overflow${o === "y" ? "Y" : "X"}`], u = e[`scroll${o === "y" ? "Height" : "Width"}`], c = e[`client${o === "y" ? "Height" : "Width"}`];
  return ["auto", "scroll"].includes(n) && u > c;
}, Ae = (e, o, t) => {
  const n = e[`scroll${t === "y" ? "Height" : "Width"}`], u = e[`scroll${t === "y" ? "Top" : "Left"}`], c = e[`client${t === "y" ? "Height" : "Width"}`];
  return !(u === 0 && o < 0 || u + c + o >= n && o > 0);
}, bo = (e) => {
  const o = [];
  for (; e; ) {
    if (o.push(e), e.classList.contains("vfm"))
      return o;
    e = e.parentElement;
  }
  return o;
}, To = (e) => {
  const o = bo(e);
  for (const t of o)
    if (De(t, "y") && Ae(t, -me.y, "y") || De(t, "x") && Ae(t, -me.x, "x"))
      return !0;
  return !1;
}, Xe = (e) => H.some(() => To(e)), se = (e) => {
  const o = e || window.event;
  return Xe(o.target) || o.touches.length > 1 ? !0 : (o.preventDefault && o.preventDefault(), !1);
}, So = (e) => {
  if (Z === void 0) {
    const o = !!e && e.reserveScrollBarGap === !0, t = window.innerWidth - document.documentElement.clientWidth;
    if (o && t > 0) {
      const n = parseInt(getComputedStyle(document.body).getPropertyValue("padding-right"), 10);
      Z = document.body.style.paddingRight, document.body.style.paddingRight = `${n + t}px`;
    }
  }
  U === void 0 && (U = document.body.style.overflow, document.body.style.overflow = "hidden");
}, Mo = () => {
  Z !== void 0 && (document.body.style.paddingRight = Z, Z = void 0), U !== void 0 && (document.body.style.overflow = U, U = void 0);
}, go = (e, o) => {
  if (e) {
    const t = e[`scroll${o === "y" ? "Height" : "Width"}`], n = e[`scroll${o === "y" ? "Top" : "Left"}`], u = e[`client${o === "y" ? "Height" : "Width"}`];
    return t - n <= u;
  }
  return !1;
}, Co = (e, o, t) => {
  const n = e.targetTouches[0];
  me = {
    x: n.clientX - X.x,
    y: n.clientY - X.y
  };
  const u = X[t], c = o && o[`scroll${t === "y" ? "Top" : "Left"}`], i = (t === "y" ? n.clientY : n.clientX) - u;
  return Xe(e.target) ? !1 : o && c === 0 && i > 0 || go(o, t) && i < 0 ? se(e) : (e.stopPropagation(), !0);
}, ko = (e, o) => {
  if (!e) {
    console.error(
      "disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices."
    );
    return;
  }
  if (H.some((n) => n.targetElement === e))
    return;
  const t = {
    targetElement: e,
    options: o || {}
  };
  H = [...H, t], We ? (e.ontouchstart = (n) => {
    n.targetTouches.length === 1 && (X = {
      x: n.targetTouches[0].clientX,
      y: n.targetTouches[0].clientY
    });
  }, e.ontouchmove = (n) => {
    if (n.targetTouches.length === 1) {
      if (!ve) {
        const u = Math.abs(X.x - n.targetTouches[0].clientX), c = Math.abs(X.y - n.targetTouches[0].clientY);
        ve = u > c ? "x" : "y";
      }
      Co(n, e, ve);
    }
  }, le || (document.addEventListener("touchmove", se, Se ? { passive: !1 } : void 0), le = !0)) : So(o);
}, Vo = (e) => {
  if (!e) {
    console.error(
      "enableBodyScroll unsuccessful - targetElement must be provided when calling enableBodyScroll on IOS devices."
    );
    return;
  }
  H = H.filter((o) => o.targetElement !== e), We ? (e.ontouchstart = null, e.ontouchmove = null, le && H.length === 0 && (document.removeEventListener("touchmove", se, Se ? { passive: !1 } : void 0), le = !1)) : H.length || Mo();
};
function Bo(e, o) {
  const { lockScrollEl: t, modelValueLocal: n } = o;
  let u;
  I(t, (s) => {
    s && (u = s);
  }, { immediate: !0 }), I(() => e.lockScroll, (s) => {
    s ? i() : c();
  }), we(() => {
    c();
  });
  function c() {
    u && Vo(u);
  }
  function i() {
    n.value && e.lockScroll && u && ko(u, {
      reserveScrollBarGap: e.reserveScrollBarGap,
      allowTouchMove: (s) => {
        for (; s && s !== document.body; ) {
          if (s.getAttribute("vfm-scroll-lock-ignore") !== null)
            return !0;
          s = s.parentElement;
        }
        return !1;
      }
    });
  }
  return {
    enableBodyScroll: c,
    disableBodyScroll: i
  };
}
function Eo(e) {
  const o = C();
  function t(u) {
    var c;
    o.value = (c = e.zIndexFn) == null ? void 0 : c.call(e, { index: u <= -1 ? 0 : u });
  }
  function n() {
    o.value = void 0;
  }
  return {
    zIndex: o,
    refreshZIndex: t,
    resetZIndex: n
  };
}
const pe = {
  beforeMount(e, { value: o }, { transition: t }) {
    e._vov = e.style.visibility === "hidden" ? "" : e.style.visibility, t && o ? t.beforeEnter(e) : z(e, o);
  },
  mounted(e, { value: o }, { transition: t }) {
    t && o && t.enter(e);
  },
  updated(e, { value: o, oldValue: t }, { transition: n }) {
    !o != !t && (n ? o ? (n.beforeEnter(e), z(e, !0), n.enter(e)) : n.leave(e, () => {
      z(e, !1);
    }) : z(e, o));
  },
  beforeUnmount(e, { value: o }) {
    z(e, o);
  }
};
function z(e, o) {
  e.style.visibility = o ? e._vov : "hidden";
}
const Ie = (e) => {
  if (e instanceof MouseEvent) {
    const { clientX: o, clientY: t } = e;
    return { x: o, y: t };
  } else {
    const { clientX: o, clientY: t } = e.targetTouches[0];
    return { x: o, y: t };
  }
};
function Oo(e) {
  if (!e)
    return !1;
  let o = !1;
  const t = {
    get passive() {
      return o = !0, !1;
    }
  };
  return e.addEventListener("x", J, t), e.removeEventListener("x", J), o;
}
function Lo(e, {
  threshold: o = 0,
  onSwipeStart: t,
  onSwipe: n,
  onSwipeEnd: u,
  passive: c = !0
}) {
  const i = ye({ x: 0, y: 0 }), s = ye({ x: 0, y: 0 }), l = g(() => i.x - s.x), r = g(() => i.y - s.y), { max: m, abs: f } = Math, M = g(
    () => m(f(l.value), f(r.value)) >= o
  ), S = C(!1), V = g(() => M.value ? f(l.value) > f(r.value) ? l.value > 0 ? "left" : "right" : r.value > 0 ? "up" : "down" : "none"), O = (p, h) => {
    i.x = p, i.y = h;
  }, B = (p, h) => {
    s.x = p, s.y = h;
  };
  let w, L;
  function k(p) {
    w.capture && !w.passive && p.preventDefault();
    const { x: h, y: R } = Ie(p);
    O(h, R), B(h, R), t == null || t(p), L = [
      $(e, "mousemove", D, w),
      $(e, "touchmove", D, w),
      $(e, "mouseup", a, w),
      $(e, "touchend", a, w),
      $(e, "touchcancel", a, w)
    ];
  }
  function D(p) {
    const { x: h, y: R } = Ie(p);
    B(h, R), !S.value && M.value && (S.value = !0), S.value && (n == null || n(p));
  }
  function a(p) {
    S.value && (u == null || u(p, V.value)), S.value = !1, L.forEach((h) => h());
  }
  let b = [];
  return $e(() => {
    const p = Oo(window == null ? void 0 : window.document);
    c ? w = p ? { passive: !0 } : { capture: !1 } : w = p ? { passive: !1, capture: !0 } : { capture: !0 }, b = [
      $(e, "mousedown", k, w),
      $(e, "touchstart", k, w)
    ];
  }), {
    isSwiping: S,
    direction: V,
    coordsStart: i,
    coordsEnd: s,
    lengthX: l,
    lengthY: r,
    stop: () => {
      b.forEach((p) => p()), L.forEach((p) => p());
    }
  };
}
function Po(e, o) {
  const { vfmContentEl: t, modelValueLocal: n } = o, u = 0.1, c = 300, i = C(), s = g(() => {
    if (!(e.swipeToClose === void 0 || e.swipeToClose === "none"))
      return e.showSwipeBanner ? i.value : t.value;
  }), l = C(0), r = C(!0);
  let m = J, f = !0, M, S = !1;
  const { lengthX: V, lengthY: O, direction: B, isSwiping: w } = Lo(s, {
    threshold: e.threshold,
    onSwipeStart(a) {
      m = $(document, "selectionchange", () => {
        var b;
        r.value = (b = window.getSelection()) == null ? void 0 : b.isCollapsed;
      }), M = (/* @__PURE__ */ new Date()).getTime(), S = D(a == null ? void 0 : a.target);
    },
    onSwipe() {
      var a, b, P, p;
      if (S && r.value && B.value === e.swipeToClose) {
        if (B.value === "up") {
          const h = te(Math.abs(O.value || 0), 0, ((a = s.value) == null ? void 0 : a.offsetHeight) || 0) - (e.threshold || 0);
          l.value = h;
        } else if (B.value === "down") {
          const h = te(Math.abs(O.value || 0), 0, ((b = s.value) == null ? void 0 : b.offsetHeight) || 0) - (e.threshold || 0);
          l.value = -h;
        } else if (B.value === "right") {
          const h = te(Math.abs(V.value || 0), 0, ((P = s.value) == null ? void 0 : P.offsetWidth) || 0) - (e.threshold || 0);
          l.value = -h;
        } else if (B.value === "left") {
          const h = te(Math.abs(V.value || 0), 0, ((p = s.value) == null ? void 0 : p.offsetWidth) || 0) - (e.threshold || 0);
          l.value = h;
        }
      }
    },
    onSwipeEnd(a, b) {
      if (m(), !r.value) {
        r.value = !0;
        return;
      }
      const P = (/* @__PURE__ */ new Date()).getTime(), p = b === e.swipeToClose, h = (() => {
        var Q, _;
        if (b === "up" || b === "down")
          return Math.abs((O == null ? void 0 : O.value) || 0) > u * (((Q = s.value) == null ? void 0 : Q.offsetHeight) || 0);
        if (b === "left" || b === "right")
          return Math.abs((V == null ? void 0 : V.value) || 0) > u * (((_ = s.value) == null ? void 0 : _.offsetWidth) || 0);
      })(), R = P - M <= c;
      if (f && S && p && (h || R)) {
        n.value = !1;
        return;
      }
      l.value = 0;
    }
  }), L = g(() => {
    if (e.swipeToClose === "none")
      return;
    const a = (() => {
      switch (e.swipeToClose) {
        case "up":
        case "down":
          return "translateY";
        case "left":
        case "right":
          return "translateX";
      }
    })();
    return {
      class: { "vfm-bounce-back": !w.value },
      style: { transform: `${a}(${-l.value}px)` }
    };
  });
  I(
    () => r.value,
    (a) => {
      a || (l.value = 0);
    }
  ), I(
    () => n.value,
    (a) => {
      a && (l.value = 0);
    }
  ), I(
    () => l.value,
    (a, b) => {
      switch (e.swipeToClose) {
        case "down":
        case "right":
          f = a < b;
          break;
        case "up":
        case "left":
          f = a > b;
          break;
      }
    }
  );
  function k(a) {
    e.preventNavigationGestures && a.preventDefault();
  }
  function D(a) {
    const b = a == null ? void 0 : a.tagName;
    if (!b || ["INPUT", "TEXTAREA"].includes(b))
      return !1;
    const P = (() => {
      switch (e.swipeToClose) {
        case "up":
          return (a == null ? void 0 : a.scrollTop) + (a == null ? void 0 : a.clientHeight) === (a == null ? void 0 : a.scrollHeight);
        case "left":
          return (a == null ? void 0 : a.scrollLeft) + (a == null ? void 0 : a.clientWidth) === (a == null ? void 0 : a.scrollWidth);
        case "down":
          return (a == null ? void 0 : a.scrollTop) === 0;
        case "right":
          return (a == null ? void 0 : a.scrollLeft) === 0;
        default:
          return !1;
      }
    })();
    return a === s.value ? P : P && D(a == null ? void 0 : a.parentElement);
  }
  return {
    vfmContentEl: t,
    swipeBannerEl: i,
    bindSwipe: L,
    onTouchStartSwipeBanner: k
  };
}
const xe = Symbol("vfm");
let F;
const Do = (e) => F = e, Ao = {
  install: J,
  modals: [],
  openedModals: [],
  openedModalOverlays: [],
  dynamicModals: [],
  modalsContainers: C([]),
  get: () => {
  },
  toggle: () => {
  },
  open: () => {
  },
  close: () => {
  },
  closeAll: () => Promise.allSettled([])
}, Io = () => Fe() && oo(xe, Ao) || F;
function xo() {
  const e = ee([]), o = ee([]), t = ee([]), n = ee([]), u = C([]), c = ne({
    install(i) {
      i.provide(xe, c), i.config.globalProperties.$vfm = c;
    },
    modals: e,
    openedModals: o,
    openedModalOverlays: t,
    dynamicModals: n,
    modalsContainers: u,
    get(i) {
      return e.find((s) => {
        var l, r;
        return ((r = (l = K(s)) == null ? void 0 : l.value.modalId) == null ? void 0 : r.value) === i;
      });
    },
    toggle(i, s) {
      var r;
      const l = c.get(i);
      return (r = K(l)) == null ? void 0 : r.value.toggle(s);
    },
    open(i) {
      return c.toggle(i, !0);
    },
    close(i) {
      return c.toggle(i, !1);
    },
    closeAll() {
      return Promise.allSettled(
        o.reduce((i, s) => {
          const l = K(s), r = l == null ? void 0 : l.value.toggle(!1);
          return r && i.push(r), i;
        }, [])
      );
    }
  });
  return Do(c), c;
}
function K(e) {
  var o;
  return (o = e == null ? void 0 : e.exposed) == null ? void 0 : o.modalExposed;
}
const Ro = be({ inheritAttrs: !1 }), $o = /* @__PURE__ */ be({
  ...Ro,
  __name: "VueFinalModal",
  props: po,
  emits: ["update:modelValue", "beforeOpen", "opened", "beforeClose", "closed", "clickOutside"],
  setup(e, { expose: o, emit: t }) {
    const n = e, u = t, c = He(), i = Fe(), { modals: s, openedModals: l, openedModalOverlays: r } = q(), m = C(), f = C(), { focus: M, blur: S } = wo(n, { focusEl: m }), { zIndex: V, refreshZIndex: O, resetZIndex: B } = Eo(n), { modelValueLocal: w } = mo(n, u, { open: Ke, close: qe }), { enableBodyScroll: L, disableBodyScroll: k } = Bo(n, {
      lockScrollEl: m,
      modelValueLocal: w
    });
    let D = J;
    const {
      visible: a,
      contentVisible: b,
      contentListeners: P,
      contentTransition: p,
      overlayVisible: h,
      overlayListeners: R,
      overlayTransition: Q,
      enterTransition: _,
      leaveTransition: ze
    } = yo(n, {
      modelValueLocal: w,
      onEntering() {
        x(() => {
          k(), M();
        });
      },
      onEnter() {
        u("opened"), D("opened");
      },
      onLeave() {
        Y(l, i), B(), L(), u("closed"), D("closed");
      }
    }), { onEsc: Ye, onMouseupRoot: Ge, onMousedown: Me } = ho(n, u, { vfmRootEl: m, vfmContentEl: f, visible: a, modelValueLocal: w }), {
      swipeBannerEl: Ue,
      bindSwipe: Ze,
      onTouchStartSwipeBanner: ge
    } = Po(n, { vfmContentEl: f, modelValueLocal: w }), Ce = g(() => i ? l.indexOf(i) : -1);
    I([() => n.zIndexFn, Ce], () => {
      a.value && O(Ce.value);
    }), $e(() => {
      fe(s, i);
    }), n.modelValue && (w.value = !0);
    function Ke() {
      let d = !1;
      return u("beforeOpen", { stop: () => d = !0 }), d ? !1 : (fe(l, i), fe(r, i), ie(), _(), !0);
    }
    function qe() {
      let d = !1;
      return u("beforeClose", { stop: () => d = !0 }), d ? !1 : (Y(r, i), ie(), S(), ze(), !0);
    }
    function Je() {
      w.value = !1;
    }
    we(() => {
      L(), Y(s, i), Y(l, i), S(), ie();
    });
    async function ie() {
      await x();
      const d = r.filter((y) => {
        var A;
        const T = K(y);
        return (T == null ? void 0 : T.value.overlayBehavior.value) === "auto" && !((A = T == null ? void 0 : T.value.hideOverlay) != null && A.value);
      });
      d.forEach((y, T) => {
        const A = K(y);
        A != null && A.value && (A.value.overlayVisible.value = T === d.length - 1);
      });
    }
    const Qe = ae(() => n.modalId), ke = ae(() => n.hideOverlay), _e = ae(() => n.overlayBehavior), eo = g(() => ({
      modalId: Qe,
      hideOverlay: ke,
      overlayBehavior: _e,
      overlayVisible: h,
      toggle(d) {
        return new Promise((y) => {
          D = vo((A) => y(A));
          const T = typeof d == "boolean" ? d : !w.value;
          w.value = T;
        });
      }
    }));
    return o({
      modalExposed: eo
    }), (d, y) => (E(), G(to, {
      to: d.teleportTo ? d.teleportTo : void 0,
      disabled: !d.teleportTo
    }, [
      d.displayDirective !== "if" || v(a) ? ue((E(), j("div", W({ key: 0 }, v(c), {
        ref_key: "vfmRootEl",
        ref: m,
        class: ["vfm vfm--fixed vfm--inset", { "vfm--prevent-none": d.background === "interactive" }],
        style: { zIndex: v(V) },
        role: "dialog",
        "aria-modal": "true",
        onKeydown: y[7] || (y[7] = no(() => v(Ye)(), ["esc"])),
        onMouseup: y[8] || (y[8] = Ve(() => v(Ge)(), ["self"])),
        onMousedown: y[9] || (y[9] = Ve((T) => v(Me)(T), ["self"]))
      }), [
        ke.value ? N("", !0) : (E(), G(Be, W({ key: 0 }, v(Q), Ee(v(R))), {
          default: he(() => [
            d.displayDirective !== "if" || v(h) ? ue((E(), j("div", {
              key: 0,
              class: lo(["vfm__overlay vfm--overlay vfm--absolute vfm--inset vfm--prevent-none", d.overlayClass]),
              style: so(d.overlayStyle),
              "aria-hidden": "true"
            }, null, 6)), [
              [ce, d.displayDirective !== "show" || v(h)],
              [v(pe), d.displayDirective !== "visible" || v(h)]
            ]) : N("", !0)
          ]),
          _: 1
        }, 16)),
        ro(Be, W(v(p), Ee(v(P))), {
          default: he(() => [
            d.displayDirective !== "if" || v(b) ? ue((E(), j("div", W({
              key: 0,
              ref_key: "vfmContentEl",
              ref: f,
              class: ["vfm__content vfm--outline-none", [d.contentClass, { "vfm--prevent-auto": d.background === "interactive" }]],
              style: d.contentStyle,
              tabindex: "0"
            }, v(Ze), {
              onMousedown: y[6] || (y[6] = () => v(Me)())
            }), [
              Oe(d.$slots, "default", je(io({ close: Je }))),
              d.showSwipeBanner ? (E(), j("div", {
                key: 0,
                ref_key: "swipeBannerEl",
                ref: Ue,
                class: "vfm-swipe-banner-container",
                onTouchstart: y[2] || (y[2] = (T) => v(ge)(T))
              }, [
                Oe(d.$slots, "swipe-banner", {}, () => [
                  oe("div", {
                    class: "vfm-swipe-banner-back",
                    onTouchstart: y[0] || (y[0] = (T) => d.swipeToClose === "left" && T.preventDefault())
                  }, null, 32),
                  oe("div", {
                    class: "vfm-swipe-banner-forward",
                    onTouchstart: y[1] || (y[1] = (T) => d.swipeToClose === "right" && T.preventDefault())
                  }, null, 32)
                ])
              ], 544)) : !d.showSwipeBanner && d.preventNavigationGestures ? (E(), j("div", {
                key: 1,
                class: "vfm-swipe-banner-container",
                onTouchstart: y[5] || (y[5] = (T) => v(ge)(T))
              }, [
                oe("div", {
                  class: "vfm-swipe-banner-back",
                  onTouchstart: y[3] || (y[3] = (T) => d.swipeToClose === "left" && T.preventDefault())
                }, null, 32),
                oe("div", {
                  class: "vfm-swipe-banner-forward",
                  onTouchstart: y[4] || (y[4] = (T) => d.swipeToClose === "right" && T.preventDefault())
                }, null, 32)
              ], 32)) : N("", !0)
            ], 16)), [
              [ce, d.displayDirective !== "show" || v(b)],
              [v(pe), d.displayDirective !== "visible" || v(b)]
            ]) : N("", !0)
          ]),
          _: 3
        }, 16)
      ], 16)), [
        [ce, d.displayDirective !== "show" || v(a)],
        [v(pe), d.displayDirective !== "visible" || v(a)]
      ]) : N("", !0)
    ], 8, ["to", "disabled"]));
  }
});
function q() {
  const e = Io();
  if (!e)
    throw new Error(
      `[Vue Final Modal]: getActiveVfm was called with no active Vfm. Did you forget to install vfm?
	const vfm = createVfm()
	app.use(vfm)
This will fail in production.`
    );
  return e;
}
function Re(e, o = $o) {
  const { component: t, slots: n, ...u } = e, c = typeof n > "u" ? {} : Object.fromEntries(Ne(n).map(([i, s]) => Te(s) ? [i, s] : re(s) ? [i, {
    ...s,
    component: ne(s.component)
  }] : [i, ne(s)]));
  return {
    ...u,
    component: ne(t || o),
    slots: c
  };
}
function zo(e) {
  const o = ye({
    id: Symbol("useModal"),
    modelValue: !!(e != null && e.defaultModelValue),
    resolveOpened: () => {
    },
    resolveClosed: () => {
    },
    attrs: {},
    ...Re(e)
  });
  co(() => {
    o != null && o.keepAlive || s();
  }), o.modelValue === !0 && (F ? F == null || F.dynamicModals.push(o) : x(() => {
    const l = q();
    l == null || l.dynamicModals.push(o);
  }));
  async function t() {
    let l;
    return F ? l = F : (await x(), l = q()), o.modelValue ? Promise.resolve("[Vue Final Modal] modal is already opened.") : (s(), o.modelValue = !0, l.dynamicModals.push(o), new Promise((r) => {
      o.resolveOpened = () => r("opened");
    }));
  }
  function n() {
    return o.modelValue ? (o.modelValue = !1, new Promise((l) => {
      o.resolveClosed = () => l("closed");
    })) : Promise.resolve("[Vue Final Modal] modal is already closed.");
  }
  function u(l) {
    const { slots: r, ...m } = Re(l, o.component);
    l.defaultModelValue !== void 0 && (o.defaultModelValue = l.defaultModelValue), (l == null ? void 0 : l.keepAlive) !== void 0 && (o.keepAlive = l == null ? void 0 : l.keepAlive), c(o, m), r && Ne(r).forEach(([f, M]) => {
      const S = o.slots[f];
      Te(S) ? o.slots[f] = M : re(S) && re(M) ? c(S, M) : o.slots[f] = M;
    });
  }
  function c(l, r) {
    r.component && (l.component = r.component), r.attrs && i(l.attrs, r.attrs);
  }
  function i(l, r) {
    return Object.entries(r).forEach(([m, f]) => {
      l[m] = f;
    }), l;
  }
  function s() {
    const l = q(), r = l.dynamicModals.indexOf(o);
    r !== -1 && l.dynamicModals.splice(r, 1);
  }
  return {
    options: o,
    open: t,
    close: n,
    patchOptions: u,
    destroy: s
  };
}
function Yo(e) {
  return e;
}
function re(e) {
  return typeof e == "object" && e !== null ? "component" in e : !1;
}
function Fo(e, o) {
  return Object.keys(o).reduce((t, n) => (t[n] = e == null ? void 0 : e[n], t), {});
}
function Ho(e) {
  return {
    "onUpdate:modelValue": (o) => e == null ? void 0 : e("update:modelValue", o),
    onBeforeClose: (o) => e == null ? void 0 : e("beforeClose", o),
    onClosed: () => e == null ? void 0 : e("closed"),
    onBeforeOpen: (o) => e == null ? void 0 : e("beforeOpen", o),
    onOpened: () => e == null ? void 0 : e("opened"),
    /** onClickOutside will only be emitted when clickToClose equal to `false` */
    onClickOutside: () => e == null ? void 0 : e("clickOutside")
  };
}
function Go(e) {
  const { props: o, modalProps: t, emit: n } = e, u = g(() => Fo(o, t)), c = Ho(n), i = He();
  return g(() => ({
    ...u.value,
    ...c,
    ...i
  }));
}
const jo = ["innerHTML"], Uo = /* @__PURE__ */ be({
  __name: "ModalsContainer",
  setup(e) {
    const { modalsContainers: o, dynamicModals: t } = q(), n = Symbol("ModalsContainer"), u = g(() => {
      var s;
      return n === ((s = o.value) == null ? void 0 : s[0]);
    });
    o.value.push(n), we(() => {
      o.value = o.value.filter((s) => s !== n);
    });
    function c(s) {
      var l, r, m;
      (r = (l = t[s]) == null ? void 0 : l.resolveClosed) == null || r.call(l), (m = t[s]) != null && m.keepAlive || t.splice(s, 1);
    }
    function i(s) {
      var l, r;
      (r = (l = t[s]) == null ? void 0 : l.resolveOpened) == null || r.call(l);
    }
    return (s, l) => u.value ? (E(!0), j(ao, { key: 0 }, Le(v(t), (r, m) => (E(), G(de(r.component), W({
      key: r.id
    }, {
      displayDirective: r != null && r.keepAlive ? "show" : void 0,
      ...typeof r.attrs == "object" ? r.attrs : {}
    }, {
      modelValue: r.modelValue,
      "onUpdate:modelValue": (f) => r.modelValue = f,
      onClosed: () => c(m),
      onOpened: () => i(m)
    }), uo({ _: 2 }, [
      Le(r.slots, (f, M) => ({
        name: M,
        fn: he(() => [
          v(Te)(f) ? (E(), j("div", {
            key: 0,
            innerHTML: f
          }, null, 8, jo)) : v(re)(f) ? (E(), G(de(f.component), je(W({ key: 1 }, f.attrs)), null, 16)) : (E(), G(de(f), { key: 2 }))
        ])
      }))
    ]), 1040, ["modelValue", "onUpdate:modelValue", "onClosed", "onOpened"]))), 128)) : N("", !0);
  }
});
export {
  Uo as ModalsContainer,
  $o as VueFinalModal,
  xo as createVfm,
  K as getModalExposed,
  zo as useModal,
  Yo as useModalSlot,
  q as useVfm,
  Go as useVfmAttrs,
  po as vueFinalModalProps
};
