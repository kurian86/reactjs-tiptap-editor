var ui = Object.defineProperty;
var mi = (t, e, r) => e in t ? ui(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r;
var Xt = (t, e, r) => mi(t, typeof e != "symbol" ? e + "" : e, r);
import { jsxs as g, jsx as i, Fragment as V } from "react/jsx-runtime";
import * as W from "react";
import Ht, { createContext as xi, useContext as fi, useSyncExternalStore as gi, useRef as J, useCallback as H, useState as S, useEffect as B, useMemo as U, Fragment as Pe, memo as pi, forwardRef as wi, useId as vi, useImperativeHandle as bi, useLayoutEffect as yi } from "react";
import { Q as re, b as yt, m as st, V as Ci, N as gt, W as de, R as pt, X as Re, Y as ie, Z as Ti, B as tt, _ as Ni, $ as ki, a0 as Si } from "./tiptap-_qvIMDJV.js";
import { u as q, I as xt, n as ft, o as he, V as Ce, p as Mi, C as Ai, h as Z, B as Li, q as ne, E as Ii } from "./index-DrJ7ZwCA.js";
import * as br from "@radix-ui/react-separator";
import { ax as Ei, at as oe, ak as zi, ay as ue, au as Oe, T as Wt, N as Pi, A as Ri, az as ae, aA as ht, aB as yr, b as He, P as De, a0 as Oi, $ as Hi, av as Cr, aC as me, aD as Di, aE as _i, H as Ft, aF as Bi, aG as $i, S as Vi, aH as Wi, aI as Fi } from "./vendor-CqaRYD3r.js";
import * as et from "@radix-ui/react-toast";
import { ChevronRight as Ui, Check as Tr, Circle as Gi, X as Nr, WrapText as qi, PencilRuler as ji, FlipHorizontal as Xi, FlipVertical as Yi, CropIcon as Ki, ChevronUp as Zi, Paperclip as Ji, Eye as Qi, Settings as tn, ZoomOut as en, ZoomIn as rn, BookMarked as nn, Sigma as on, SmilePlusIcon as an, Replace as Ze, SmilePlus as cn, Frame as sn, Columns2 as Je, PanelRight as ln, PanelLeft as dn, Clipboard as hn, Copy as un, GripVertical as mn, Plus as kr, Columns4 as xn, Columns3 as fn, Heading6 as gn, Heading5 as pn, Heading4 as wn, Heading3 as vn, Heading2 as bn, Heading1 as yn, ChevronsUpDown as Cn, Trash as Tn, Trash2 as Sr, TableCellsSplit as Nn, TableCellsMerge as kn, BetweenVerticalEnd as Sn, BetweenVerticalStart as Mn, BetweenHorizonalStart as An, BetweenHorizonalEnd as Ln, Unlink as In, Pencil as Mr, Sparkles as En, Table as zn, Minimize as Pn, Maximize as Rn, Video as On, ImageUp as Hn, Link as Dn, ListTodo as _n, ListOrdered as Bn, List as $n, IndentDecrease as Vn, IndentIncrease as Wn, Type as Fn, CodeXml as Un, Code as Gn, Superscript as qn, Subscript as jn, ChevronDown as Xn, Undo2 as Yn, Redo2 as Kn, PaintRoller as Zn, Eraser as Jn, Minus as Qn, Strikethrough as to, Quote as eo, Underline as ro, Italic as io, LoaderCircle as no, Bold as oo, HelpCircle as Ar } from "lucide-react";
import * as Ut from "@radix-ui/react-tooltip";
import { Color4 as j, Editor as Lr, makeDropdownToolbar as Ir } from "easydrawer";
import { Slot as Er } from "@radix-ui/react-slot";
import * as zr from "@radix-ui/react-toggle";
import { TextAlignRightIcon as ao, TextAlignLeftIcon as co, TextAlignJustifyIcon as so, TextAlignCenterIcon as lo } from "@radix-ui/react-icons";
import * as it from "@radix-ui/react-dialog";
import * as _t from "@radix-ui/react-popover";
import * as Pr from "@radix-ui/react-label";
import { Resizable as Rr } from "re-resizable";
import _e from "katex";
import ce from "mermaid";
import ho, { sticky as uo } from "tippy.js";
import { HexColorPicker as mo } from "react-colorful";
import * as Te from "@radix-ui/react-switch";
import * as Ct from "@radix-ui/react-tabs";
import xo from "react-image-crop";
import * as Ne from "@radix-ui/react-checkbox";
import * as X from "@radix-ui/react-dropdown-menu";
function P(...t) {
  return Ei(oe(t));
}
let ge;
function pe() {
  return ge === void 0 && (ge = navigator.platform.includes("Mac")), ge;
}
function fo(t) {
  return `${t}`.toLowerCase() === "mod" ? pe() ? "⌘" : "Ctrl" : `${t}`.toLowerCase() === "alt" ? pe() ? "⌥" : "Alt" : `${t}`.toLowerCase() === "shift" ? pe() ? "⇧" : "Shift" : t;
}
function go(t) {
  return t.map(fo).join(" ");
}
const O = Ht.forwardRef(
  (t, e) => {
    const {
      icon: r = void 0,
      // title = undefined,
      tooltip: n = void 0,
      disabled: a = !1,
      customClass: o = "",
      // color = undefined,
      loading: c = void 0,
      shortcutKeys: l = void 0,
      tooltipOptions: s = {},
      action: h = void 0,
      isActive: d = void 0,
      children: u,
      asChild: m = !1,
      upload: x = !1,
      ...w
    } = t, p = Kr[r];
    return /* @__PURE__ */ g(jr, { children: [
      /* @__PURE__ */ i(Xr, { asChild: !0, children: /* @__PURE__ */ g(
        m ? Er : qr,
        {
          "data-state": d != null && d() ? "on" : "off",
          onClick: h,
          ref: e,
          size: "sm",
          className: P("richtext-w-[32px] richtext-h-[32px]", o),
          disabled: a,
          ...w,
          children: [
            p && /* @__PURE__ */ i(p, { className: "richtext-size-4" }),
            u
          ]
        }
      ) }),
      n && /* @__PURE__ */ i(We, { ...s, children: /* @__PURE__ */ g("div", { className: "richtext-flex richtext-max-w-24 richtext-flex-col richtext-items-center richtext-text-center", children: [
        /* @__PURE__ */ i("div", { children: n }),
        !!(l != null && l.length) && /* @__PURE__ */ i("span", { children: go(l) })
      ] }) })
    ] });
  }
);
function xe(t) {
  function e() {
    const o = J(t), c = H(() => o.current, []), l = J(/* @__PURE__ */ new Set()), s = H((d) => {
      o.current = { ...o.current, ...d }, l.current.forEach((u) => u());
    }, []), h = H((d) => (l.current.add(d), () => l.current.delete(d)), []);
    return {
      get: c,
      set: s,
      subscribe: h
    };
  }
  const r = xi(null);
  function n({ children: o }) {
    return /* @__PURE__ */ i(r.Provider, { value: e(), children: o });
  }
  function a(o) {
    const c = fi(r);
    if (!c)
      throw new Error("Store not found");
    return [gi(
      c.subscribe,
      () => o(c.get()),
      () => o(t)
    ), c.set];
  }
  return {
    Provider: n,
    useStore: a
  };
}
xe({
  value: !1
});
xe({
  value: !1
});
const { Provider: po, useStore: Or } = xe({
  value: !1
}), { Provider: wo, useStore: Hr } = xe({
  value: "light"
});
zi("0");
function se(t, e) {
  return window.addEventListener(t, e), () => {
    window.removeEventListener(t, e);
  };
}
function Be(t, e) {
  window.dispatchEvent(
    new CustomEvent(t, {
      detail: e
    })
  );
}
const bt = {
  UPLOAD_IMAGE: (t) => `UPLOAD_IMAGE-${t}`,
  UPLOAD_VIDEO: (t) => `UPLOAD_VIDEO-${t}`,
  EDIT: (t) => `EDIT-${t}`,
  UPDATE_THEME: (t) => `UPDATE_THEME-${t}`,
  SEARCH_REPLCE: "SEARCH_REPLACE"
};
function vo() {
  const [t] = Or((e) => e.value);
  return t;
}
const bo = {
  setDisable: (t, e) => {
    Be(bt.EDIT(t), e);
  }
};
function Gt(t, e) {
  const { state: r } = e, n = r.selection.$anchor;
  let a = !1;
  if (n.depth)
    for (let o = n.depth; o > 0; o--)
      n.node(o).type.name === t && (e.dispatchTransaction && e.dispatchTransaction(r.tr.delete(n.before(o), n.after(o)).scrollIntoView()), a = !0);
  else {
    const o = r.selection.node;
    o && o.type.name === t && (e.chain().deleteSelection().run(), a = !0);
  }
  if (!a) {
    const o = n.pos;
    if (o) {
      const c = r.tr.doc.nodeAt(o);
      c && c.type.name === t && (e.dispatchTransaction && e.dispatchTransaction(r.tr.delete(o, o + c.nodeSize)), a = !0);
    }
  }
  return a;
}
function $e(t, e, r) {
  return t < e ? e : t > r ? r : t;
}
const yo = (t) => typeof t == "number", Co = (t) => typeof t == "string", To = (t) => typeof t == "function";
function No(t, e = "px") {
  if (!t)
    return t;
  const r = yo(t) ? String(t) : t, n = Number.parseFloat(r), a = r.match(/[%a-z]+$/i), o = a ? a[0] : e;
  return Number.isNaN(n) ? t : n + o;
}
function ko(t, e) {
  if (!t)
    return !1;
  const { extensions: r = [] } = (t == null ? void 0 : t.extensionManager) ?? {};
  return !!r.find((a) => a.name === e);
}
function Sl(t) {
  return t.map((e) => Co(e) ? { value: e, name: e } : e);
}
const So = ue(
  "richtext-inline-flex richtext-items-center richtext-justify-center richtext-whitespace-nowrap richtext-rounded-md richtext-text-sm richtext-font-medium richtext-ring-offset-background richtext-transition-colors focus-visible:richtext-outline-none focus-visible:richtext-ring-2 focus-visible:richtext-ring-ring focus-visible:richtext-ring-offset-2 disabled:richtext-pointer-events-none disabled:richtext-opacity-50",
  {
    variants: {
      variant: {
        default: "!richtext-bg-primary !richtext-text-primary-foreground hover:!richtext-bg-primary/90",
        destructive: "richtext-bg-destructive richtext-text-destructive-foreground hover:richtext-bg-destructive/90",
        outline: "richtext-border richtext-border-input richtext-bg-background hover:richtext-bg-accent hover:richtext-text-accent-foreground",
        secondary: "richtext-bg-secondary richtext-text-secondary-foreground hover:richtext-bg-secondary/80",
        ghost: "hover:richtext-bg-accent hover:richtext-text-accent-foreground",
        link: "richtext-text-primary richtext-underline-offset-4 hover:richtext-underline"
      },
      size: {
        default: "richtext-h-10 richtext-px-4 richtext-py-2",
        sm: "richtext-h-9 richtext-rounded-md richtext-px-3",
        lg: "richtext-h-11 richtext-rounded-md richtext-px-8",
        icon: "richtext-h-10 richtext-w-10"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
), G = W.forwardRef(
  ({ className: t, variant: e, size: r, asChild: n = !1, ...a }, o) => /* @__PURE__ */ i(
    n ? Er : "button",
    {
      className: P(So({ variant: e, size: r, className: t })),
      ref: o,
      ...a
    }
  )
);
G.displayName = "Button";
const Mo = X.Root, Ao = X.Trigger, Qe = X.Portal, tr = X.Sub, ke = W.forwardRef(({ className: t, inset: e, children: r, ...n }, a) => /* @__PURE__ */ g(
  X.SubTrigger,
  {
    ref: a,
    className: P(
      "richtext-flex richtext-cursor-default richtext-select-none richtext-items-center richtext-rounded-sm richtext-px-2 richtext-py-1.5 richtext-text-sm richtext-outline-none focus:richtext-bg-accent data-[state=open]:richtext-bg-accent",
      e && "richtext-pl-8",
      t
    ),
    ...n,
    children: [
      r,
      /* @__PURE__ */ i(Ui, { className: "richtext-ml-auto richtext-h-4 richtext-w-4" })
    ]
  }
));
ke.displayName = X.SubTrigger.displayName;
const Se = W.forwardRef(({ className: t, ...e }, r) => /* @__PURE__ */ i(
  X.SubContent,
  {
    ref: r,
    className: P(
      "richtext-z-50 richtext-min-w-[8rem] richtext-overflow-hidden richtext-rounded-md !richtext-border richtext-bg-popover richtext-p-1 richtext-text-popover-foreground richtext-shadow-lg data-[state=open]:richtext-animate-in data-[state=closed]:richtext-animate-out data-[state=closed]:richtext-fade-out-0 data-[state=open]:richtext-fade-in-0 data-[state=closed]:richtext-zoom-out-95 data-[state=open]:richtext-zoom-in-95 data-[side=bottom]:richtext-slide-in-from-top-2 data-[side=left]:richtext-slide-in-from-right-2 data-[side=right]:richtext-slide-in-from-left-2 data-[side=top]:richtext-slide-in-from-bottom-2",
      t
    ),
    ...e
  }
));
Se.displayName = X.SubContent.displayName;
const Dr = W.forwardRef(({ className: t, sideOffset: e = 4, ...r }, n) => /* @__PURE__ */ i(X.Portal, { children: /* @__PURE__ */ i(
  X.Content,
  {
    ref: n,
    sideOffset: e,
    className: P(
      "richtext-z-50 richtext-min-w-[8rem] richtext-overflow-hidden richtext-rounded-md !richtext-border richtext-bg-popover richtext-p-1 richtext-text-popover-foreground richtext-shadow-md data-[state=open]:richtext-animate-in data-[state=closed]:richtext-animate-out data-[state=closed]:richtext-fade-out-0 data-[state=open]:richtext-fade-in-0 data-[state=closed]:richtext-zoom-out-95 data-[state=open]:richtext-zoom-in-95 data-[side=bottom]:richtext-slide-in-from-top-2 data-[side=left]:richtext-slide-in-from-right-2 data-[side=right]:richtext-slide-in-from-left-2 data-[side=top]:richtext-slide-in-from-bottom-2",
      t
    ),
    ...r
  }
) }));
Dr.displayName = X.Content.displayName;
const ot = W.forwardRef(({ className: t, inset: e, ...r }, n) => /* @__PURE__ */ i(
  X.Item,
  {
    ref: n,
    className: P(
      "richtext-relative richtext-flex richtext-cursor-default richtext-select-none richtext-items-center richtext-rounded-sm richtext-px-2 richtext-py-1.5 richtext-text-sm richtext-outline-none richtext-transition-colors focus:richtext-bg-accent focus:richtext-text-accent-foreground data-[disabled]:richtext-pointer-events-none data-[disabled]:richtext-opacity-50",
      e && "richtext-pl-8",
      t
    ),
    ...r
  }
));
ot.displayName = X.Item.displayName;
const Lo = W.forwardRef(({ className: t, children: e, checked: r, ...n }, a) => /* @__PURE__ */ g(
  X.CheckboxItem,
  {
    ref: a,
    className: P(
      "richtext-relative richtext-flex richtext-cursor-default richtext-select-none richtext-items-center richtext-rounded-sm richtext-py-1.5 richtext-pl-8 richtext-pr-2 richtext-text-sm richtext-outline-none richtext-transition-colors focus:richtext-bg-accent focus:richtext-text-accent-foreground data-[disabled]:richtext-pointer-events-none data-[disabled]:richtext-opacity-50",
      t
    ),
    checked: r,
    ...n,
    children: [
      /* @__PURE__ */ i("span", { className: "richtext-absolute richtext-left-2 richtext-flex richtext-h-3.5 richtext-w-3.5 richtext-items-center richtext-justify-center", children: /* @__PURE__ */ i(X.ItemIndicator, { children: /* @__PURE__ */ i(Tr, { className: "richtext-h-4 richtext-w-4" }) }) }),
      e
    ]
  }
));
Lo.displayName = X.CheckboxItem.displayName;
const Io = W.forwardRef(({ className: t, children: e, ...r }, n) => /* @__PURE__ */ g(
  X.RadioItem,
  {
    ref: n,
    className: P(
      "richtext-relative richtext-flex richtext-cursor-default richtext-select-none richtext-items-center richtext-rounded-sm richtext-py-1.5 richtext-pl-8 richtext-pr-2 richtext-text-sm richtext-outline-none richtext-transition-colors focus:richtext-bg-accent focus:richtext-text-accent-foreground data-[disabled]:richtext-pointer-events-none data-[disabled]:richtext-opacity-50",
      t
    ),
    ...r,
    children: [
      /* @__PURE__ */ i("span", { className: "richtext-absolute richtext-left-2 richtext-flex richtext-h-3.5 richtext-w-3.5 richtext-items-center richtext-justify-center", children: /* @__PURE__ */ i(X.ItemIndicator, { children: /* @__PURE__ */ i(Gi, { className: "richtext-h-2 richtext-w-2 richtext-fill-current" }) }) }),
      e
    ]
  }
));
Io.displayName = X.RadioItem.displayName;
const Eo = W.forwardRef(({ className: t, inset: e, ...r }, n) => /* @__PURE__ */ i(
  X.Label,
  {
    ref: n,
    className: P(
      "richtext-px-2 richtext-py-1.5 richtext-text-sm richtext-font-semibold",
      e && "richtext-pl-8",
      t
    ),
    ...r
  }
));
Eo.displayName = X.Label.displayName;
const _r = W.forwardRef(({ className: t, ...e }, r) => /* @__PURE__ */ i(
  X.Separator,
  {
    ref: r,
    className: P("richtext--mx-1 richtext-my-1 richtext-h-px richtext-bg-muted", t),
    ...e
  }
));
_r.displayName = X.Separator.displayName;
function zo({
  className: t,
  ...e
}) {
  return /* @__PURE__ */ i(
    "span",
    {
      className: P("richtext-ml-auto richtext-text-xs richtext-tracking-widest richtext-opacity-60", t),
      ...e
    }
  );
}
zo.displayName = "DropdownMenuShortcut";
const Q = W.forwardRef(
  ({ className: t, type: e, ...r }, n) => /* @__PURE__ */ i(
    "input",
    {
      type: e,
      className: P(
        "richtext-flex richtext-h-10 richtext-w-full richtext-rounded-md !richtext-border richtext-border-input richtext-bg-background richtext-px-3 richtext-py-2 richtext-text-sm richtext-ring-offset-background file:richtext-border-0 file:richtext-bg-transparent file:richtext-text-sm file:richtext-font-medium placeholder:richtext-text-muted-foreground focus-visible:richtext-outline-none  disabled:richtext-cursor-not-allowed disabled:richtext-opacity-50",
        t
      ),
      ref: n,
      ...r
    }
  )
);
Q.displayName = "Input";
const Po = ue(
  "richtext-text-sm richtext-font-medium richtext-leading-none peer-disabled:richtext-cursor-not-allowed peer-disabled:richtext-opacity-70"
), ct = W.forwardRef(({ className: t, ...e }, r) => /* @__PURE__ */ i(
  Pr.Root,
  {
    ref: r,
    className: P(Po(), t),
    ...e
  }
));
ct.displayName = Pr.Root.displayName;
const It = _t.Root, Et = _t.Trigger, Tt = W.forwardRef(({ className: t, align: e = "center", sideOffset: r = 4, ...n }, a) => /* @__PURE__ */ i(_t.Portal, { children: /* @__PURE__ */ i(
  _t.Content,
  {
    ref: a,
    align: e,
    sideOffset: r,
    className: P(
      "richtext-z-50 richtext-w-72 richtext-rounded-md !richtext-border richtext-bg-popover richtext-p-4 richtext-text-popover-foreground richtext-shadow-md richtext-outline-none data-[state=open]:richtext-animate-in data-[state=closed]:richtext-animate-out data-[state=closed]:richtext-fade-out-0 data-[state=open]:richtext-fade-in-0 data-[state=closed]:richtext-zoom-out-95 data-[state=open]:richtext-zoom-in-95 data-[side=bottom]:richtext-slide-in-from-top-2 data-[side=left]:richtext-slide-in-from-right-2 data-[side=right]:richtext-slide-in-from-left-2 data-[side=top]:richtext-slide-in-from-bottom-2",
      t
    ),
    ...n
  }
) }));
Tt.displayName = _t.Content.displayName;
const rt = W.forwardRef(
  ({ className: t, orientation: e = "horizontal", decorative: r = !0, ...n }, a) => /* @__PURE__ */ i(
    br.Root,
    {
      ref: a,
      decorative: r,
      orientation: e,
      className: P(
        "richtext-shrink-0 richtext-bg-border",
        e === "horizontal" ? "richtext-h-[1px] richtext-w-full" : "richtext-h-full richtext-w-[1px]",
        t
      ),
      ...n
    }
  )
);
rt.displayName = br.Root.displayName;
const Br = W.forwardRef(({ className: t, ...e }, r) => /* @__PURE__ */ i(
  Te.Root,
  {
    className: P(
      "richtext-peer richtext-inline-flex richtext-h-6 richtext-w-11 richtext-shrink-0 richtext-cursor-pointer richtext-items-center richtext-rounded-full richtext-border-2 richtext-border-transparent richtext-transition-colors focus-visible:richtext-outline-none focus-visible:richtext-ring-2 focus-visible:richtext-ring-ring focus-visible:richtext-ring-offset-2 focus-visible:richtext-ring-offset-background disabled:richtext-cursor-not-allowed disabled:richtext-opacity-50 data-[state=checked]:richtext-bg-primary data-[state=unchecked]:richtext-bg-input",
      t
    ),
    ...e,
    ref: r,
    children: /* @__PURE__ */ i(
      Te.Thumb,
      {
        className: P(
          "richtext-pointer-events-none richtext-block richtext-h-5 richtext-w-5 richtext-rounded-full richtext-bg-background richtext-shadow-lg richtext-ring-0 richtext-transition-transform data-[state=checked]:richtext-translate-x-5 data-[state=unchecked]:richtext-translate-x-0"
        )
      }
    )
  }
));
Br.displayName = Te.Root.displayName;
const $r = Ct.Root, Ve = W.forwardRef(({ className: t, ...e }, r) => /* @__PURE__ */ i(
  Ct.List,
  {
    ref: r,
    className: P(
      "richtext-inline-flex richtext-h-10 richtext-items-center richtext-justify-center richtext-rounded-md richtext-bg-muted richtext-p-1 richtext-text-muted-foreground",
      t
    ),
    ...e
  }
));
Ve.displayName = Ct.List.displayName;
const Bt = W.forwardRef(({ className: t, ...e }, r) => /* @__PURE__ */ i(
  Ct.Trigger,
  {
    ref: r,
    className: P(
      "richtext-inline-flex richtext-items-center richtext-justify-center richtext-whitespace-nowrap richtext-rounded-sm richtext-px-3 richtext-py-1.5 richtext-text-sm richtext-font-medium richtext-ring-offset-background richtext-transition-all focus-visible:richtext-outline-none focus-visible:richtext-ring-2 focus-visible:richtext-ring-ring focus-visible:richtext-ring-offset-2 disabled:richtext-pointer-events-none disabled:richtext-opacity-50 data-[state=active]:richtext-bg-background data-[state=active]:richtext-text-foreground data-[state=active]:richtext-shadow-sm",
      t
    ),
    ...e
  }
));
Bt.displayName = Ct.Trigger.displayName;
const $t = W.forwardRef(({ className: t, ...e }, r) => /* @__PURE__ */ i(
  Ct.Content,
  {
    ref: r,
    className: P(
      "richtext-mt-2 richtext-ring-offset-background focus-visible:richtext-outline-none focus-visible:richtext-ring-2 focus-visible:richtext-ring-ring focus-visible:richtext-ring-offset-2",
      t
    ),
    ...e
  }
));
$t.displayName = Ct.Content.displayName;
const Ro = et.Provider, Vr = W.forwardRef(({ className: t, ...e }, r) => /* @__PURE__ */ i(
  et.Viewport,
  {
    ref: r,
    className: P(
      "richtext-fixed richtext-top-0 richtext-z-[100] richtext-flex richtext-max-h-screen richtext-w-full richtext-flex-col-reverse richtext-p-4 sm:richtext-bottom-0 sm:richtext-right-0 sm:richtext-top-auto sm:richtext-flex-col md:richtext-max-w-[420px]",
      t
    ),
    ...e
  }
));
Vr.displayName = et.Viewport.displayName;
const Oo = ue(
  "richtext-group richtext-pointer-events-auto richtext-relative richtext-flex richtext-w-full richtext-items-center richtext-justify-between richtext-space-x-4 richtext-overflow-hidden richtext-rounded-md !richtext-border richtext-p-6 richtext-pr-8 richtext-shadow-lg richtext-transition-all data-[swipe=cancel]:richtext-translate-x-0 data-[swipe=end]:richtext-translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:richtext-translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:richtext-transition-none data-[state=open]:richtext-animate-in data-[state=closed]:richtext-animate-out data-[swipe=end]:richtext-animate-out data-[state=closed]:richtext-fade-out-80 data-[state=closed]:richtext-slide-out-to-right-full data-[state=open]:richtext-slide-in-from-top-full data-[state=open]:sm:richtext-slide-in-from-bottom-full",
  {
    variants: {
      variant: {
        default: "richtext-border richtext-bg-background richtext-text-foreground",
        destructive: "richtext-destructive richtext-group richtext-border-destructive richtext-bg-destructive richtext-text-destructive-foreground"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
), Wr = W.forwardRef(({ className: t, variant: e, ...r }, n) => /* @__PURE__ */ i(
  et.Root,
  {
    ref: n,
    className: P(Oo({ variant: e }), t),
    ...r
  }
));
Wr.displayName = et.Root.displayName;
const Ho = W.forwardRef(({ className: t, ...e }, r) => /* @__PURE__ */ i(
  et.Action,
  {
    ref: r,
    className: P(
      "richtext-inline-flex richtext-h-8 richtext-shrink-0 richtext-items-center richtext-justify-center richtext-rounded-md !richtext-border richtext-bg-transparent richtext-px-3 richtext-text-sm richtext-font-medium richtext-ring-offset-background richtext-transition-colors hover:richtext-bg-secondary focus:richtext-outline-none focus:richtext-ring-2 focus:richtext-ring-ring focus:richtext-ring-offset-2 disabled:richtext-pointer-events-none disabled:richtext-opacity-50 group-[.destructive]:richtext-border-muted/40 group-[.destructive]:hover:richtext-border-destructive/30 group-[.destructive]:hover:richtext-bg-destructive group-[.destructive]:hover:richtext-text-destructive-foreground group-[.destructive]:focus:richtext-ring-destructive",
      t
    ),
    ...e
  }
));
Ho.displayName = et.Action.displayName;
const Fr = W.forwardRef(({ className: t, ...e }, r) => /* @__PURE__ */ i(
  et.Close,
  {
    ref: r,
    className: P(
      "richtext-absolute richtext-right-2 richtext-top-2 richtext-rounded-md richtext-p-1 richtext-text-foreground/50 richtext-opacity-0 richtext-transition-opacity hover:richtext-text-foreground focus:richtext-opacity-100 focus:richtext-outline-none focus:richtext-ring-2 group-hover:richtext-opacity-100 group-[.destructive]:richtext-text-red-300 group-[.destructive]:hover:richtext-text-red-50 group-[.destructive]:focus:richtext-ring-red-400 group-[.destructive]:focus:richtext-ring-offset-red-600",
      t
    ),
    "toast-close": "",
    ...e,
    children: /* @__PURE__ */ i(Nr, { className: "richtext-h-4 richtext-w-4" })
  }
));
Fr.displayName = et.Close.displayName;
const Ur = W.forwardRef(({ className: t, ...e }, r) => /* @__PURE__ */ i(
  et.Title,
  {
    ref: r,
    className: P("richtext-text-sm richtext-font-semibold", t),
    ...e
  }
));
Ur.displayName = et.Title.displayName;
const Gr = W.forwardRef(({ className: t, ...e }, r) => /* @__PURE__ */ i(
  et.Description,
  {
    ref: r,
    className: P("richtext-text-sm richtext-opacity-90", t),
    ...e
  }
));
Gr.displayName = et.Description.displayName;
const Do = ue(
  "richtext-inline-flex richtext-items-center richtext-justify-center richtext-rounded-md richtext-text-sm richtext-font-medium richtext-ring-offset-background richtext-transition-colors hover:richtext-bg-muted hover:richtext-text-muted-foreground focus-visible:richtext-outline-none focus-visible:richtext-ring-2 focus-visible:richtext-ring-ring focus-visible:richtext-ring-offset-2 disabled:richtext-pointer-events-none disabled:richtext-opacity-50 data-[state=on]:richtext-bg-accent data-[state=on]:richtext-text-accent-foreground",
  {
    variants: {
      variant: {
        default: "richtext-bg-transparent",
        outline: "richtext-border richtext-border-input richtext-bg-transparent hover:richtext-bg-accent hover:richtext-text-accent-foreground"
      },
      size: {
        default: "richtext-h-10 richtext-px-3",
        sm: "richtext-h-9 richtext-px-2",
        lg: "richtext-h-11 richtext-px-5"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
), qr = W.forwardRef(({ className: t, variant: e, size: r, ...n }, a) => /* @__PURE__ */ i(
  zr.Root,
  {
    ref: a,
    className: P(Do({ variant: e, size: r, className: t })),
    ...n
  }
));
qr.displayName = zr.Root.displayName;
const _o = Ut.Provider, jr = Ut.Root, Xr = Ut.Trigger, We = W.forwardRef(({ className: t, sideOffset: e = 4, ...r }, n) => /* @__PURE__ */ i(
  Ut.Content,
  {
    ref: n,
    sideOffset: e,
    className: P(
      "richtext-z-50 richtext-overflow-hidden richtext-rounded-md !richtext-border richtext-bg-popover richtext-px-3 richtext-py-1.5 richtext-text-sm richtext-text-popover-foreground richtext-shadow-md richtext-animate-in richtext-fade-in-0 richtext-zoom-in-95 data-[side=bottom]:richtext-slide-in-from-top-2 data-[side=left]:richtext-slide-in-from-right-2 data-[side=right]:richtext-slide-in-from-left-2 data-[side=top]:richtext-slide-in-from-bottom-2",
      t
    ),
    ...r
  }
));
We.displayName = Ut.Content.displayName;
const Bo = 1, $o = 1e6;
let we = 0;
function Vo() {
  return we = (we + 1) % Number.MAX_SAFE_INTEGER, we.toString();
}
const ve = /* @__PURE__ */ new Map();
function er(t) {
  if (ve.has(t))
    return;
  const e = setTimeout(() => {
    ve.delete(t), Dt({
      type: "REMOVE_TOAST",
      toastId: t
    });
  }, $o);
  ve.set(t, e);
}
function Wo(t, e) {
  switch (e.type) {
    case "ADD_TOAST":
      return {
        ...t,
        toasts: [e.toast, ...t.toasts].slice(0, Bo)
      };
    case "UPDATE_TOAST":
      return {
        ...t,
        toasts: t.toasts.map(
          (r) => r.id === e.toast.id ? { ...r, ...e.toast } : r
        )
      };
    case "DISMISS_TOAST": {
      const { toastId: r } = e;
      return r ? er(r) : t.toasts.forEach((n) => {
        er(n.id);
      }), {
        ...t,
        toasts: t.toasts.map(
          (n) => n.id === r || r === void 0 ? {
            ...n,
            open: !1
          } : n
        )
      };
    }
    case "REMOVE_TOAST":
      return e.toastId === void 0 ? {
        ...t,
        toasts: []
      } : {
        ...t,
        toasts: t.toasts.filter((r) => r.id !== e.toastId)
      };
  }
}
const te = [];
let ee = { toasts: [] };
function Dt(t) {
  ee = Wo(ee, t), te.forEach((e) => {
    e(ee);
  });
}
function Fo({ ...t }) {
  const e = Vo(), r = (a) => Dt({
    type: "UPDATE_TOAST",
    toast: { ...a, id: e }
  }), n = () => Dt({ type: "DISMISS_TOAST", toastId: e });
  return Dt({
    type: "ADD_TOAST",
    toast: {
      ...t,
      id: e,
      open: !0,
      onOpenChange: (a) => {
        a || n();
      }
    }
  }), {
    id: e,
    dismiss: n,
    update: r
  };
}
function Uo() {
  const [t, e] = W.useState(ee);
  return W.useEffect(() => (te.push(e), () => {
    const r = te.indexOf(e);
    r > -1 && te.splice(r, 1);
  }), [t]), {
    ...t,
    toast: Fo,
    dismiss: (r) => Dt({ type: "DISMISS_TOAST", toastId: r })
  };
}
const Yr = W.forwardRef(({ className: t, ...e }, r) => /* @__PURE__ */ i(
  Ne.Root,
  {
    ref: r,
    className: P(
      "!richtext-peer !richtext-h-4 !richtext-w-4 !richtext-p-0 !richtext-shrink-0 !richtext-rounded-sm !richtext-border !richtext-border-primary !richtext-ring-offset-background focus-visible:!richtext-outline-none focus-visible:!richtext-ring-2 focus-visible:!richtext-ring-ring focus-visible:!richtext-ring-offset-2 disabled:!richtext-cursor-not-allowed disabled:!richtext-opacity-50 data-[state=checked]:!richtext-bg-primary data-[state=checked]:!richtext-text-primary-foreground",
      t
    ),
    ...e,
    children: /* @__PURE__ */ i(
      Ne.Indicator,
      {
        className: P("!richtext-flex !richtext-p-0 !richtext-items-center !richtext-justify-center !richtext-text-current"),
        children: /* @__PURE__ */ i(Tr, { className: "!richtext-h-4 !richtext-w-4" })
      }
    )
  }
));
Yr.displayName = Ne.Root.displayName;
function Go(t) {
  return /* @__PURE__ */ i("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", ...t, children: /* @__PURE__ */ i(
    "path",
    {
      fill: "currentColor",
      d: "M19 12h-2v3h-3v2h5zM7 9h3V7H5v5h2zm14-6H3a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2m0 16H3V5h18z"
    }
  ) });
}
function qo(t) {
  return /* @__PURE__ */ i("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", ...t, children: /* @__PURE__ */ i(
    "path",
    {
      fill: "none",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M6 15h15m0 4H6m9-8h6m0-4h-6M9 9h1a1 1 0 1 1-1 1V7.5a2 2 0 0 1 2-2M3 9h1a1 1 0 1 1-1 1V7.5a2 2 0 0 1 2-2"
    }
  ) });
}
function jo() {
  return /* @__PURE__ */ i(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      xmlnsXlink: "http://www.w3.org/1999/xlink",
      "aria-hidden": "true",
      role: "img",
      className: "richtext-w-4 richtext-h-4",
      width: "1em",
      height: "1em",
      viewBox: "0 0 24 24",
      children: /* @__PURE__ */ i(
        "path",
        {
          fill: "none",
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: "1.5",
          d: "M5.5 3c1.404 0 2.107 0 2.611.38c.219.164.406.375.552.62C9 4.568 9 5.358 9 6.938v10.125c0 1.58 0 2.37-.337 2.937a2.1 2.1 0 0 1-.552.621c-.504.38-1.207.38-2.611.38s-2.107 0-2.611-.38a2.1 2.1 0 0 1-.552-.62C2 19.432 2 18.642 2 17.062V6.938c0-1.58 0-2.37.337-2.938a2.1 2.1 0 0 1 .552-.62C3.393 3 4.096 3 5.5 3M20 11.938v5.124c0 1.58 0 2.37-.337 2.938a2.1 2.1 0 0 1-.552.62c-.504.38-1.207.38-2.611.38s-2.107 0-2.611-.38a2.1 2.1 0 0 1-.552-.62C13 19.433 13 18.642 13 17.063V6.938c0-1.58 0-2.37.337-2.938M22 9l-6-6m6 0l-6 6",
          color: "currentColor"
        }
      )
    }
  );
}
function Xo() {
  return /* @__PURE__ */ i(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      xmlnsXlink: "http://www.w3.org/1999/xlink",
      "aria-hidden": "true",
      role: "img",
      className: "richtext-w-4 richtext-h-4",
      width: "1em",
      height: "1em",
      viewBox: "0 0 24 24",
      children: /* @__PURE__ */ i(
        "path",
        {
          fill: "none",
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: "1.5",
          d: "M21 18.5c0 1.404 0 2.107-.38 2.611a2.1 2.1 0 0 1-.62.552c-.567.337-1.358.337-2.937.337H6.938c-1.58 0-2.37 0-2.938-.337a2.1 2.1 0 0 1-.62-.552C3 20.607 3 19.904 3 18.5s0-2.107.38-2.611c.163-.218.374-.406.62-.552C4.567 15 5.357 15 6.938 15h10.125c1.58 0 2.37 0 2.937.337c.246.146.457.334.62.552c.38.504.38 1.207.38 2.611M12.063 4H6.937C5.358 4 4.568 4 4 4.337a2.1 2.1 0 0 0-.62.552C3 5.393 3 6.096 3 7.5s0 2.107.38 2.611c.163.218.374.406.62.552C4.567 11 5.357 11 6.938 11h10.125c1.58 0 2.37 0 2.937-.337M21 8l-6-6m6 0l-6 6",
          color: "currentColor"
        }
      )
    }
  );
}
function Yo(t) {
  return /* @__PURE__ */ i("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", ...t, children: /* @__PURE__ */ i(
    "path",
    {
      fill: "currentColor",
      d: "M14 2H6a2 2 0 0 0-2 2v16c0 1.11.89 2 2 2h12c1.11 0 2-.89 2-2V8zm4 18H6V4h7v5h5zm-.65-10l-2.1 9h-1.4l-1.8-6.79l-1.8 6.79h-1.4l-2.2-9h1.5l1.4 6.81l1.8-6.81h1.3l1.8 6.81l1.4-6.81z"
    }
  ) });
}
function K(t) {
  const e = Kr[t.name];
  return e ? /* @__PURE__ */ i(e, { onClick: t == null ? void 0 : t.onClick, className: `richtext-w-4 richtext-h-4 ${(t == null ? void 0 : t.className) || ""}` }) : null;
}
function Ko(t) {
  return /* @__PURE__ */ i("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", ...t, children: /* @__PURE__ */ i(
    "path",
    {
      fill: "currentColor",
      d: "M21 22H3v-2h18zm0-18H3V2h18zm-11 9.7h4l-2-5.4zM11.2 6h1.7l4.7 12h-2l-.9-2.6H9.4L8.5 18h-2z"
    }
  ) });
}
function Zo(t) {
  return /* @__PURE__ */ i(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      xmlnsXlink: "http://www.w3.org/1999/xlink",
      "aria-hidden": "true",
      role: "img",
      width: "1em",
      height: "1em",
      viewBox: "0 0 48 48",
      ...t,
      children: /* @__PURE__ */ i(
        "path",
        {
          fill: "currentColor",
          stroke: "currentColor",
          strokeLinejoin: "round",
          strokeWidth: 4,
          d: "M36 19L24 31L12 19z"
        }
      )
    }
  );
}
function Jo(t) {
  return /* @__PURE__ */ i("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", ...t, children: /* @__PURE__ */ i("path", { fill: "currentColor", d: "M9 7v10h6v-2h-4V7z" }) });
}
function Qo(t) {
  return /* @__PURE__ */ i("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", ...t, children: /* @__PURE__ */ i(
    "path",
    {
      fill: "currentColor",
      d: "M9 7c-1.1 0-2 .9-2 2v8h2V9h2v7h2V9h2v8h2V9a2 2 0 0 0-2-2z"
    }
  ) });
}
function ta(t) {
  return /* @__PURE__ */ i("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", ...t, children: /* @__PURE__ */ i(
    "path",
    {
      fill: "currentColor",
      d: "M11 7c-1.1 0-2 .9-2 2v2a2 2 0 0 0 2 2h2v2H9v2h4c1.11 0 2-.89 2-2v-2a2 2 0 0 0-2-2h-2V9h4V7z"
    }
  ) });
}
function ea() {
  return /* @__PURE__ */ i("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", children: /* @__PURE__ */ i("path", { fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M14 4h4a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1m-9 8h4m-2-2v4" }) });
}
function ra() {
  return /* @__PURE__ */ i("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", children: /* @__PURE__ */ i("path", { fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M6 4h4a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1m9 8h4m-2-2v4" }) });
}
function ia() {
  return /* @__PURE__ */ i("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", children: /* @__PURE__ */ i("path", { fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M12 21v-4m0-4V9m0-4V3m-2 18h4M8 5v4h11l2-2l-2-2zm6 8v4H6l-2-2l2-2z" }) });
}
function na() {
  return /* @__PURE__ */ i("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", children: /* @__PURE__ */ i("path", { fill: "currentColor", d: "M23.943 19.806a.2.2 0 0 0-.168-.034c-1.26-1.855-2.873-3.61-4.419-5.315l-.252-.284c-.001-.073-.067-.12-.134-.15l-.084-.084c-.05-.1-.169-.167-.286-.1c-.47.234-.907.585-1.327.919c-.554.434-1.109.87-1.63 1.354a5 5 0 0 0-.588.618c-.084.117-.017.217.084.267c-.37.368-.74.736-1.109 1.12a.2.2 0 0 0-.05.134c0 .05.033.1.067.117l.655.502v.016c.924.92 2.554 2.173 4.285 3.527c.251.201.52.402.773.602c.117.134.234.285.335.418c.05.066.169.084.236.033c.033.034.084.067.118.1a.24.24 0 0 0 .1.034a.15.15 0 0 0 .135-.066a.24.24 0 0 0 .033-.1c.017 0 .017.016.034.016a.2.2 0 0 0 .134-.05l3.058-3.327c.12-.116.014-.267 0-.267m-7.628-.134l-1.546-1.17l-.15-.1c-.035-.017-.068-.05-.102-.067l-.117-.1c.66-.66 1.33-1.308 2-1.956c-.488.484-1.463 1.906-1.261 2.373c.002 0 .018.042.067.084zm4.1 3.126l-1.277-.97a27 27 0 0 0-1.58-1.504c.69.518 1.277.97 1.361 1.053c.673.585.638.485 1.093.87l.554.4c-.074.103-.151.148-.151.151m.336.25l-.034-.016a1 1 0 0 0 .152-.117zM.588 3.476c.033.217.084.435.117.636c.201 1.103.403 2.106.772 2.858l.152.568c.05.217.134.485.219.552a67 67 0 0 0 3.578 2.942a.18.18 0 0 0 .219 0s0 .016.016.016a.15.15 0 0 0 .118.05a.2.2 0 0 0 .134-.05c1.798-1.989 3.142-3.627 4.1-4.998c.068-.066.084-.167.084-.25c.067-.067.118-.151.185-.201c.067-.067.067-.184 0-.235l-.017-.016c0-.033-.017-.084-.05-.1c-.42-.401-.722-.685-1.042-.986a94 94 0 0 1-2.352-2.273c-.017-.017-.034-.034-.067-.034c-.336-.117-1.025-.234-1.882-.385c-1.277-.216-3.008-.517-4.57-.986c0 0-.101 0-.118.017l-.05.05C.05.714.022.707 0 .718c.017.1.017.167.05.284c0 .033.068.301.068.334zm7.19 4.78l-.033.034a.036.036 0 0 1 .033-.034M6.553 2.238c.101.1.521.502.622.585c-.437-.2-1.529-.702-2.034-.869c.505.1 1.194.201 1.412.284M.79 1.403c.252.434.454 1.939.655 3.41c-.118-.469-.201-.936-.302-1.372C.992 2.673.84 1.988.638 1.386c.124 0 .152.021.152.017m-.286-.369c0-.016 0-.033-.017-.033c.085 0 .135.017.202.05c0 .006-.145-.017-.185-.017m23.17-.217c.017-.066-.336-.367-.219-.384c.253-.017.253-.401 0-.401c-.335.017-.688.1-1.008.15c-.587.117-1.192.234-1.78.367a80 80 0 0 0-3.949.937c-.403.117-.857.2-1.243.401c-.135.067-.118.2-.05.284c-.034.017-.051.017-.085.034c-.117.017-.218.034-.335.05c-.102.017-.152.1-.135.2c0 .017.017.05.017.067c-.706.936-1.496 1.923-2.353 2.976c-.84.969-1.73 1.989-2.62 3.042c-2.84 3.31-6.05 7.07-9.594 10.38a.16.16 0 0 0 0 .234c.016.016.033.033.05.033c-.05.05-.101.085-.152.134q-.05.05-.05.1a.4.4 0 0 0-.067.084c-.067.067-.067.184.017.234c.067.066.185.066.235-.017c.017-.017.017-.033.033-.033a.265.265 0 0 1 .37 0c.202.217.404.435.588.618l-.42-.35c-.067-.067-.184-.05-.234.016c-.068.066-.051.184.016.234l4.469 3.727c.034.034.067.034.118.034a.15.15 0 0 0 .117-.05l.101-.1c.017.016.05.016.067.016c.05 0 .084-.016.118-.05c6.049-6.05 10.922-10.614 16.5-14.693c.05-.033.067-.1.067-.15c.067 0 .118-.05.15-.117c1.026-3.125 1.228-5.9 1.295-7.27c0-.059.016-.038.016-.068c.017-.033.017-.05.017-.05a.98.98 0 0 0-.067-.619m-10.82 4.915c.268-.301.537-.619.806-.903c-1.73 2.273-4.603 5.767-8.67 9.929c2.773-3.059 5.562-6.218 7.864-9.026M5.14 23.466c-.016-.017-.016-.017 0-.017zm2.504-2.156c.135-.15.27-.284.42-.434c0 0 0 .016.017.016c-.224.198-.433.418-.437.418m.69-.668c.099-.1.14-.173.284-.318c.992-1.02 2.017-2.04 3.059-3.076l.016-.016c.252-.2.555-.418.824-.619a228 228 0 0 0-4.184 4.029M14.852 3.91c-.554.719-1.176 1.671-1.697 2.423c-1.646 2.374-6.94 8.174-7.057 8.274a1190 1190 0 0 1-4.839 4.597l-.1.1c-.085-.1-.085-.25.016-.334C8.652 11.966 13.19 6.133 15.021 3.576c-.05.116-.084.216-.168.334zm2.906 3.427c-.671-.386-.99-.987-.806-1.572l.05-.2a.8.8 0 0 1 .085-.167a1.9 1.9 0 0 1 .756-.703c.016 0 .033 0 .05-.016c-.017-.034-.017-.084-.017-.134c.017-.1.085-.167.202-.167c.202 0 .824.184 1.059.384c.067.05.134.117.202.184c.084.1.218.268.285.401c.034.017.067.184.118.268c.033.134.067.284.05.418c-.017.016 0 .116-.017.116a1.6 1.6 0 0 1-.218.619c-.03.03.006.012-.05.067a1.2 1.2 0 0 1-.32.334a1.49 1.49 0 0 1-1.26.234a2 2 0 0 0-.169-.066m4.37 1.403c0 .017-.017.05 0 .067c-.034 0-.05.017-.085.034a110 110 0 0 0-3.915 3.025c1.11-.986 2.218-1.989 3.378-2.975c.336-.301.571-.686.638-1.12l.168-1.003v-.033c.085-.201.404-.118.353.1c-.004-.001-.173.795-.537 1.905" }) });
}
function oa() {
  return /* @__PURE__ */ g("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 32 32", children: [
    /* @__PURE__ */ i("path", { fill: "currentColor", d: "M30 18v-2h-6v10h2v-4h3v-2h-3v-2zm-11 8h-4V16h4a3.003 3.003 0 0 1 3 3v4a3.003 3.003 0 0 1-3 3m-2-2h2a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-2zm-6-8H6v10h2v-3h3a2.003 2.003 0 0 0 2-2v-3a2 2 0 0 0-2-2m-3 5v-3h3l.001 3z" }),
    /* @__PURE__ */ i("path", { fill: "currentColor", d: "M22 14v-4a.91.91 0 0 0-.3-.7l-7-7A.9.9 0 0 0 14 2H4a2.006 2.006 0 0 0-2 2v24a2 2 0 0 0 2 2h16v-2H4V4h8v6a2.006 2.006 0 0 0 2 2h6v2Zm-8-4V4.4l5.6 5.6Z" })
  ] });
}
function aa() {
  return /* @__PURE__ */ g(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: "1em",
      height: "1em",
      className: "icon",
      viewBox: "0 0 1024 1024",
      children: [
        /* @__PURE__ */ i(
          "path",
          {
            fill: "currentColor",
            d: "M679.253 402.364 618.77 561.015l-60.348-158.651a30.04 30.04 0 0 0-30.447-18.637 29.76 29.76 0 0 0-30.447 18.637l-60.416 158.651-60.416-158.651a30.515 30.515 0 0 0-38.843-17.272 28.945 28.945 0 0 0-17.954 37.547l88.815 233.267c4.369 11.469 15.7 19.115 28.398 19.115a30.31 30.31 0 0 0 28.468-19.115l62.395-163.908 62.396 163.84c4.437 11.605 15.701 19.183 28.4 19.183a30.31 30.31 0 0 0 28.466-19.115l88.747-233.267a28.945 28.945 0 0 0-17.886-37.547 30.447 30.447 0 0 0-38.912 17.272zm219.478 395.605-51.883-29.218c-28.672-16.18-52.224-3.072-52.224 29.082v.273H643.209a29.833 29.833 0 0 0-30.31 29.354c0 16.18 13.584 29.218 30.31 29.218h151.825c1.092 30.516 24.03 43.077 52.224 27.648l51.063-27.989c29.013-15.906 29.15-42.189.41-58.368"
          }
        ),
        /* @__PURE__ */ i(
          "path",
          {
            fill: "currentColor",
            d: "m810.667 913.135-.478.068H201.796c-19.865 0-36.727-11.673-36.727-25.6v-618.36h154.965c51.268 0 92.911-39.39 92.911-87.858v-87.86H810.19c19.797 0 36.522 11.742 36.522 25.669V739.26h61.987V119.262c0-46.421-44.169-84.241-98.51-84.241H328.364l-225.28 194.56v658.09c0 46.285 44.236 84.105 98.713 84.105H810.19c43.759 0 80.554-24.713 93.32-58.573h-92.842zM350.89 94.89v86.562c0 16.11-13.858 29.286-30.925 29.286H216.815L350.959 94.891z"
          }
        )
      ]
    }
  );
}
function ca() {
  return /* @__PURE__ */ i("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", children: /* @__PURE__ */ g("g", { fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", color: "currentColor", children: [
    /* @__PURE__ */ i("path", { d: "M14.86 22h-4.312c-3.291 0-4.937 0-6.08-.798a4.2 4.2 0 0 1-.863-.805c-.855-1.066-.855-2.6-.855-5.67v-2.545c0-2.963 0-4.445.473-5.628c.761-1.903 2.37-3.403 4.41-4.113C8.9 2 10.49 2 13.667 2c1.816 0 2.723 0 3.448.252c1.166.406 2.085 1.263 2.52 2.35c.27.676.27 1.523.27 3.216V10" }),
    /* @__PURE__ */ i("path", { d: "M2.75 12c0-1.84 1.506-3.333 3.364-3.333c.672 0 1.464.116 2.117-.057a1.67 1.67 0 0 0 1.19-1.179c.174-.647.057-1.432.057-2.098C9.478 3.493 10.984 2 12.84 2m.002 16h2.523m-4.949-4.15c-.126-.8-.281-.801-1.61-.85h-1.01c-.557 0-1.009.448-1.009 1v3c0 .552.452 1 1.01 1h1.816c.39 0 .803-.313.803-.7v-1.1c0-.11-.113-.304-.224-.304H9.068M12.842 13h1.261m0 0h1.262m-1.262 0v4.875M21.251 13h-2.523c-.557 0-1.009.448-1.009 1v1.5m0 0V18m0-2.5h2.523" })
  ] }) });
}
function sa() {
  return /* @__PURE__ */ i("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 20 20", children: /* @__PURE__ */ i("path", { fill: "currentColor", d: "M6.5 3a.75.75 0 0 1 .697.471l3 7.5a.75.75 0 0 1-1.393.557L7.992 9.5H5.008l-.811 2.028a.75.75 0 0 1-1.393-.556l3-7.5A.75.75 0 0 1 6.5 3m0 2.77L5.608 8h1.784zm8.28-1.55a.75.75 0 1 0-1.06 1.06l.72.72h-3.69a.75.75 0 0 0 0 1.5h3.69l-.72.72a.75.75 0 0 0 1.06 1.06l2-2a.75.75 0 0 0 0-1.06zm0 7.5a.75.75 0 1 0-1.06 1.06l.72.72H3.75a.75.75 0 0 0 0 1.5h10.69l-.72.72a.75.75 0 1 0 1.06 1.06l2-2a.75.75 0 0 0 0-1.06z" }) });
}
function la() {
  return /* @__PURE__ */ i("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 48 48", children: /* @__PURE__ */ g("g", { fill: "none", stroke: "currentColor", strokeWidth: "4", children: [
    /* @__PURE__ */ i("circle", { cx: "10", cy: "24", r: "4" }),
    /* @__PURE__ */ i("circle", { cx: "38", cy: "10", r: "4" }),
    /* @__PURE__ */ i("circle", { cx: "38", cy: "24", r: "4" }),
    /* @__PURE__ */ i("circle", { cx: "38", cy: "38", r: "4" }),
    /* @__PURE__ */ i("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M34 38H22V10h12M14 24h20" })
  ] }) });
}
function da() {
  return /* @__PURE__ */ i("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 20 20", children: /* @__PURE__ */ i("path", { fill: "currentColor", d: "M13.5 3a.75.75 0 0 0-.697.471l-3 7.5a.75.75 0 0 0 1.393.557l.812-2.028h2.984l.811 2.028a.75.75 0 0 0 1.393-.556l-3-7.5A.75.75 0 0 0 13.5 3m0 2.77L14.392 8h-1.784zM5.22 4.22a.75.75 0 0 1 1.06 1.06L5.56 6h3.69a.75.75 0 0 1 0 1.5H5.56l.72.72a.75.75 0 0 1-1.06 1.06l-2-2a.75.75 0 0 1 0-1.06zm0 7.5a.75.75 0 0 1 1.06 1.06l-.72.72h10.69a.75.75 0 0 1 0 1.5H5.56l.72.72a.75.75 0 1 1-1.06 1.06l-2-2a.75.75 0 0 1 0-1.06z" }) });
}
function ha() {
  return /* @__PURE__ */ i("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", children: /* @__PURE__ */ i("path", { fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", d: "m3 21l7.548-7.548M21 3l-7.548 7.548m0 0L8 3H3l7.548 10.452m2.904-2.904L21 21h-5l-5.452-7.548", color: "currentColor" }) });
}
function ua() {
  return /* @__PURE__ */ i(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      xmlnsXlink: "http://www.w3.org/1999/xlink",
      "aria-hidden": "true",
      role: "img",
      width: "1em",
      height: "1em",
      viewBox: "0 0 24 24",
      children: /* @__PURE__ */ i(
        "path",
        {
          fill: "currentColor",
          d: "M14 2H6a2 2 0 0 0-2 2v16c0 1.11.89 2 2 2h12c1.11 0 2-.89 2-2V8zm4 18H6V4h7v5h5zm-.65-10l-2.1 9h-1.4l-1.8-6.79l-1.8 6.79h-1.4l-2.2-9h1.5l1.4 6.81l1.8-6.81h1.3l1.8 6.81l1.4-6.81z"
        }
      )
    }
  );
}
const Kr = {
  Bold: oo,
  LoaderCircle: no,
  Italic: io,
  Underline: ro,
  Quote: eo,
  TextQuote: qo,
  Strikethrough: to,
  Minus: Qn,
  Eraser: Jn,
  PaintRoller: Zn,
  Redo2: Kn,
  Undo2: Yn,
  AlignCenter: lo,
  AlignJustify: so,
  AlignLeft: co,
  AlignRight: ao,
  ChevronDown: Xn,
  Subscript: jn,
  Superscript: qn,
  Code: Gn,
  Code2: Un,
  Type: Fn,
  IndentIncrease: Wn,
  IndentDecrease: Vn,
  List: $n,
  ListOrdered: Bn,
  ListTodo: _n,
  Link: Dn,
  ImageUp: Hn,
  Video: On,
  Maximize: Rn,
  Minimize: Pn,
  Table: zn,
  Sparkles: En,
  Pencil: Mr,
  Unlink: In,
  BetweenHorizonalEnd: Ln,
  BetweenHorizonalStart: An,
  BetweenVerticalStart: Mn,
  BetweenVerticalEnd: Sn,
  TableCellsMerge: kn,
  TableCellsSplit: Nn,
  Trash2: Sr,
  Trash: Tn,
  Replace: Ze,
  ChevronsUpDown: Cn,
  LineHeight: Ko,
  Word: Yo,
  Heading1: yn,
  Heading2: bn,
  Heading3: vn,
  Heading4: wn,
  Heading5: pn,
  Heading6: gn,
  Columns2: Je,
  Columns3: fn,
  Columns4: xn,
  Plus: kr,
  Grip: mn,
  Copy: un,
  Clipboard: hn,
  PanelLeft: dn,
  PanelRight: ln,
  Columns: Je,
  Iframe: sn,
  MenuDown: Zo,
  SizeS: ta,
  SizeM: Qo,
  SizeL: Jo,
  AspectRatio: Go,
  Emoji: cn,
  DeleteColumn: jo,
  DeleteRow: Xo,
  SearchAndReplace: Ze,
  EmojiIcon: an,
  KatexIcon: on,
  ExportPdf: oa,
  ExportWord: aa,
  ImportWord: ua,
  ColumnAddLeft: ea,
  ColumnAddRight: ra,
  BookMarked: nn,
  Excalidraw: na,
  ZoomIn: rn,
  ZoomOut: en,
  Settings: tn,
  Eye: Qi,
  TextDirection: ia,
  LeftToRight: sa,
  RightToLeft: da,
  Attachment: Ji,
  GifIcon: ca,
  ChevronUp: Zi,
  Crop: Ki,
  Mermaid: la,
  Twitter: ha,
  FlipX: Yi,
  FlipY: Xi,
  PencilRuler: ji,
  WrapText: qi
};
function ma({ fill: t }) {
  return /* @__PURE__ */ i(
    "svg",
    {
      width: "18px",
      height: "18px",
      viewBox: "0 0 256 256",
      version: "1.1",
      xmlns: "http://www.w3.org/2000/svg",
      children: /* @__PURE__ */ i("g", { id: "icon/填充色", stroke: "none", strokeWidth: 1, fill: "none", fillRule: "evenodd", children: /* @__PURE__ */ g("g", { id: "icon/背景颜色", children: [
        /* @__PURE__ */ i("g", { id: "编组", fill: "currentColor", children: /* @__PURE__ */ g(
          "g",
          {
            transform: "translate(119.502295, 137.878331) rotate(-135.000000) translate(-119.502295, -137.878331) translate(48.002295, 31.757731)",
            id: "矩形",
            children: [
              /* @__PURE__ */ i(
                "path",
                {
                  d: "M100.946943,60.8084699 L43.7469427,60.8084699 C37.2852111,60.8084699 32.0469427,66.0467383 32.0469427,72.5084699 L32.0469427,118.70847 C32.0469427,125.170201 37.2852111,130.40847 43.7469427,130.40847 L100.946943,130.40847 C107.408674,130.40847 112.646943,125.170201 112.646943,118.70847 L112.646943,72.5084699 C112.646943,66.0467383 107.408674,60.8084699 100.946943,60.8084699 Z M93.646,79.808 L93.646,111.408 L51.046,111.408 L51.046,79.808 L93.646,79.808 Z",
                  fillRule: "nonzero"
                }
              ),
              /* @__PURE__ */ i(
                "path",
                {
                  d: "M87.9366521,16.90916 L87.9194966,68.2000001 C87.9183543,69.4147389 86.9334998,70.399264 85.7187607,70.4 L56.9423078,70.4 C55.7272813,70.4 54.7423078,69.4150264 54.7423078,68.2 L54.7423078,39.4621057 C54.7423078,37.2523513 55.5736632,35.1234748 57.0711706,33.4985176 L76.4832996,12.4342613 C78.9534987,9.75382857 83.1289108,9.5834005 85.8093436,12.0535996 C87.1658473,13.303709 87.9372691,15.0644715 87.9366521,16.90916 Z",
                  fillRule: "evenodd"
                }
              ),
              /* @__PURE__ */ i(
                "path",
                {
                  d: "M131.3,111.241199 L11.7,111.241199 C5.23826843,111.241199 0,116.479467 0,122.941199 L0,200.541199 C0,207.002931 5.23826843,212.241199 11.7,212.241199 L131.3,212.241199 C137.761732,212.241199 143,207.002931 143,200.541199 L143,122.941199 C143,116.479467 137.761732,111.241199 131.3,111.241199 Z M124,130.241 L124,193.241 L19,193.241 L19,130.241 L124,130.241 Z",
                  fillRule: "nonzero"
                }
              )
            ]
          }
        ) }),
        /* @__PURE__ */ i(
          "path",
          {
            d: "M51,218 L205,218 C211.075132,218 216,222.924868 216,229 C216,235.075132 211.075132,240 205,240 L51,240 C44.9248678,240 40,235.075132 40,229 C40,222.924868 44.9248678,218 51,218 Z",
            id: "矩形",
            fill: t || "#FBDE28"
          }
        )
      ] }) })
    }
  );
}
function xa(t) {
  const [e, r] = S(void 0);
  function n(c) {
    var l;
    (l = t.action) == null || l.call(t, c);
  }
  function a() {
    var c;
    (c = t.action) == null || c.call(t, e);
  }
  const o = H(
    Oe((c) => {
      r(c);
    }, 350),
    []
  );
  return /* @__PURE__ */ g("div", { className: "richtext-flex richtext-items-center richtext-h-[32px]", children: [
    /* @__PURE__ */ i(
      O,
      {
        tooltip: t == null ? void 0 : t.tooltip,
        disabled: t == null ? void 0 : t.disabled,
        action: a,
        tooltipOptions: t == null ? void 0 : t.tooltipOptions,
        shortcutKeys: t == null ? void 0 : t.shortcutKeys,
        children: /* @__PURE__ */ i("span", { className: "richtext-flex richtext-items-center richtext-justify-center richtext-text-sm", children: /* @__PURE__ */ i(ma, { fill: e }) })
      }
    ),
    /* @__PURE__ */ i(
      ps,
      {
        selectedColor: e,
        setSelectedColor: o,
        onChange: n,
        highlight: !0,
        disabled: t == null ? void 0 : t.disabled,
        children: /* @__PURE__ */ i(G, { variant: "ghost", size: "icon", className: "!richtext-w-3 !richtext-h-[32px]", disabled: t == null ? void 0 : t.disabled, children: /* @__PURE__ */ i(K, { className: "!richtext-w-3 !richtext-h-3 richtext-text-zinc-500", name: "MenuDown" }) })
      }
    )
  ] });
}
function fa(t) {
  const { t: e } = q(), [r, n] = S({
    text: "",
    link: ""
  }), [a, o] = S(!1);
  B(() => {
    var l;
    if (t != null && t.editor) {
      const { href: s, target: h } = (l = t.editor) == null ? void 0 : l.getAttributes("link"), { from: d, to: u } = t.editor.state.selection, m = t.editor.state.doc.textBetween(d, u, " ");
      n({
        link: s,
        text: m
      }), o(h === "_blank");
    }
  }, [t == null ? void 0 : t.editor]);
  function c(l) {
    l.preventDefault(), l.stopPropagation(), t == null || t.onSetLink(r.link, r.text, a);
  }
  return /* @__PURE__ */ i("div", { className: "border-neutral-200 richtext-rounded-lg !richtext-border richtext-bg-white richtext-p-2 richtext-shadow-sm dark:richtext-border-neutral-800 dark:richtext-bg-black", children: /* @__PURE__ */ g(
    "form",
    {
      className: "richtext-flex richtext-flex-col richtext-gap-2",
      onSubmit: c,
      children: [
        /* @__PURE__ */ i(ct, { className: "mb-[6px]", children: e("editor.link.dialog.text") }),
        /* @__PURE__ */ i("div", { className: "richtext-mb-[10px] richtext-flex richtext-w-full richtext-max-w-sm richtext-items-center richtext-gap-1.5", children: /* @__PURE__ */ i("div", { className: "richtext-relative richtext-w-full richtext-max-w-sm richtext-items-center", children: /* @__PURE__ */ i(
          Q,
          {
            className: "richtext-w-80",
            onChange: (l) => n({ ...r, text: l.target.value }),
            placeholder: "Text",
            required: !0,
            type: "text",
            value: r.text
          }
        ) }) }),
        /* @__PURE__ */ i(ct, { className: "mb-[6px]", children: e("editor.link.dialog.link") }),
        /* @__PURE__ */ i("div", { className: "richtext-flex richtext-w-full richtext-max-w-sm richtext-items-center richtext-gap-1.5", children: /* @__PURE__ */ g("div", { className: "richtext-relative richtext-w-full richtext-max-w-sm richtext-items-center", children: [
          /* @__PURE__ */ i(
            Q,
            {
              className: "richtext-pl-10",
              onChange: (l) => n({ ...r, link: l.target.value }),
              required: !0,
              type: "url",
              value: r.link
            }
          ),
          /* @__PURE__ */ i("span", { className: "richtext-absolute richtext-inset-y-0 richtext-start-0 richtext-flex richtext-items-center richtext-justify-center richtext-px-2", children: /* @__PURE__ */ i(
            K,
            {
              className: "richtext-size-5 richtext-text-muted-foreground",
              name: "Link"
            }
          ) })
        ] }) }),
        /* @__PURE__ */ g("div", { className: "richtext-flex richtext-items-center richtext-space-x-2", children: [
          /* @__PURE__ */ i(ct, { children: e("editor.link.dialog.openInNewTab") }),
          /* @__PURE__ */ i(
            Br,
            {
              checked: a,
              onCheckedChange: (l) => {
                o(l);
              }
            }
          )
        ] }),
        /* @__PURE__ */ i(
          G,
          {
            className: "richtext-mt-2 richtext-self-end",
            type: "submit",
            children: e("editor.link.dialog.button.apply")
          }
        )
      ]
    }
  ) });
}
function ga(t, e, r = null) {
  return r ? t.createChecked({ index: e }, r) : t.createAndFill({ index: e });
}
function pa(t) {
  if (t.cached.columnsNodeTypes)
    return t.cached.columnsNodeTypes;
  const e = {
    columns: t.nodes.columns,
    column: t.nodes.column
  };
  return t.cached.columnsNodeTypes = e, e;
}
function wa(t, e, r = null) {
  const n = pa(t), a = [];
  for (let o = 0; o < e; o += 1) {
    const c = ga(n.column, o, r);
    c && a.push(c);
  }
  return n.columns.createChecked({ cols: e }, a);
}
function be({
  state: t,
  dispatch: e,
  type: r
}) {
  const n = re((o) => o.type.name === le.name)(t.selection), a = re((o) => o.type.name === Zr.name)(t.selection);
  if (e && n && a) {
    const o = n.node, c = a.node.attrs.index, l = o.toJSON();
    let s = c;
    r === "delete" ? (s = c - 1, l.content.splice(c, 1)) : (s = r === "addBefore" ? c : c + 1, l.content.splice(s, 0, {
      type: "column",
      attrs: {
        index: c
      },
      content: [
        {
          type: "paragraph"
        }
      ]
    })), l.attrs.cols = l.content.length, l.content.forEach((m, x) => {
      m.attrs.index = x;
    });
    const h = Pi.fromJSON(t.schema, l);
    let d = n.pos;
    h.content.forEach((m, x, w) => {
      w < s && (d += m.nodeSize);
    });
    const u = t.tr.setTime(Date.now());
    u.replaceWith(n.pos, n.pos + n.node.nodeSize, h).setSelection(
      Wt.near(u.doc.resolve(d))
    ), e(u);
  }
  return !0;
}
function rr({ state: t, dispatch: e, type: r }) {
  const n = re((o) => o.type.name === le.name)(t.selection), a = re((o) => o.type.name === Zr.name)(t.selection);
  if (e && n && a) {
    const o = n.node, c = a.node.attrs.index;
    let l = 0;
    r === "before" ? l = (c - 1 + o.attrs.cols) % o.attrs.cols : l = (c + 1) % o.attrs.cols;
    let s = n.pos;
    o.content.forEach((d, u, m) => {
      m < l && (s += d.nodeSize);
    });
    const h = t.tr.setTime(Date.now());
    return h.setSelection(Wt.near(h.doc.resolve(s))), e(h), !0;
  }
  return !1;
}
const va = 200, le = yt.create({
  name: "columns",
  group: "block",
  defining: !0,
  isolating: !0,
  allowGapCursor: !1,
  content: "column{1,}",
  priority: va,
  addOptions() {
    return {
      HTMLAttributes: {
        class: "columns"
      }
    };
  },
  addAttributes() {
    return {
      cols: {
        default: 2,
        parseHTML: (t) => t.getAttribute("cols")
      }
    };
  },
  parseHTML() {
    return [
      {
        tag: "div[class=grid]"
      }
    ];
  },
  renderHTML({ HTMLAttributes: t }) {
    return ["div", st(this.options.HTMLAttributes, t), 0];
  },
  addCommands() {
    return {
      insertColumns: (t) => ({ tr: e, dispatch: r, editor: n }) => {
        const a = wa(n.schema, t && t.cols || 3);
        if (r) {
          const o = e.selection.anchor + 1;
          e.replaceSelectionWith(a).scrollIntoView().setSelection(Wt.near(e.doc.resolve(o)));
        }
        return !0;
      },
      addColBefore: () => ({ dispatch: t, state: e }) => be({ dispatch: t, state: e, type: "addBefore" }),
      addColAfter: () => ({ dispatch: t, state: e }) => be({ dispatch: t, state: e, type: "addAfter" }),
      deleteCol: () => ({ dispatch: t, state: e }) => be({ dispatch: t, state: e, type: "delete" })
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-Alt-G": () => this.editor.commands.insertColumns(),
      Tab: () => rr({
        state: this.editor.state,
        dispatch: this.editor.view.dispatch,
        type: "after"
      }),
      "Shift-Tab": () => rr({
        state: this.editor.state,
        dispatch: this.editor.view.dispatch,
        type: "before"
      })
    };
  }
}), Zr = yt.create({
  name: "column",
  content: "block+",
  isolating: !0,
  addOptions() {
    return {
      HTMLAttributes: {
        class: "column"
      }
    };
  },
  addAttributes() {
    return {
      index: {
        default: 0,
        parseHTML: (t) => t.getAttribute("index")
      }
    };
  },
  parseHTML() {
    return [
      {
        tag: "div[class=column]"
      }
    ];
  },
  renderHTML({ HTMLAttributes: t }) {
    return ["div", st(this.options.HTMLAttributes, t), 0];
  }
});
var Me = /* @__PURE__ */ ((t) => (t[t.max = 7] = "max", t[t.min = 0] = "min", t[t.more = 1] = "more", t[t.less = -1] = "less", t))(Me || {});
function ba(t, e, r) {
  return t < e ? e : t > r ? r : t;
}
function ya(t, e, r, n) {
  const { doc: a, selection: o } = t;
  if (!a || !o || !(o instanceof Wt || o instanceof Ri))
    return t;
  const { from: c, to: l } = o;
  return a.nodesBetween(c, l, (s, h) => {
    const d = s.type;
    return r.includes(d.name) ? (t = Ae(t, h, e), !1) : !Ci(s.type.name, n.extensionManager.extensions);
  }), t;
}
function Ae(t, e, r) {
  if (!t.doc)
    return t;
  const n = t.doc.nodeAt(e);
  if (!n)
    return t;
  const c = ba((n.attrs.indent || 0) + r, 0, 7);
  if (c === n.attrs.indent)
    return t;
  const l = {
    ...n.attrs,
    indent: c
  };
  return t.setNodeMarkup(e, n.type, l, n.marks);
}
function Ml({ delta: t, types: e }) {
  return ({ state: r, dispatch: n, editor: a }) => {
    const { selection: o } = r;
    let { tr: c } = r;
    return c = c.setSelection(o), c = ya(c, t, e, a), c.docChanged ? (n && n(c), !0) : !1;
  };
}
const Ca = {
  setOpen: (t, e) => {
    Be(bt.UPLOAD_IMAGE(t), e);
  }
}, ut = it.Root, mt = it.Trigger, Ta = it.Portal, Jr = W.forwardRef(({ className: t, ...e }, r) => /* @__PURE__ */ i(
  it.Overlay,
  {
    ref: r,
    className: P(
      "richtext-fixed richtext-inset-0 richtext-z-50 richtext-bg-black/80 richtext- data-[state=open]:richtext-animate-in data-[state=closed]:richtext-animate-out data-[state=closed]:richtext-fade-out-0 data-[state=open]:richtext-fade-in-0",
      t
    ),
    ...e
  }
));
Jr.displayName = it.Overlay.displayName;
const lt = W.forwardRef(({ className: t, children: e, ...r }, n) => /* @__PURE__ */ g(Ta, { children: [
  /* @__PURE__ */ i(Jr, {}),
  /* @__PURE__ */ g(
    it.Content,
    {
      ref: n,
      className: P(
        "richtext-dialog-content richtext-fixed richtext-left-[50%] richtext-top-[50%] richtext-z-50 richtext-grid richtext-w-full richtext-max-w-lg richtext-translate-x-[-50%] richtext-translate-y-[-50%] richtext-gap-4 richtext-border richtext-bg-background richtext-p-6 richtext-shadow-lg richtext-duration-200 data-[state=open]:richtext-animate-in data-[state=closed]:richtext-animate-out data-[state=closed]:richtext-fade-out-0 data-[state=open]:richtext-fade-in-0 data-[state=closed]:richtext-zoom-out-95 data-[state=open]:richtext-zoom-in-95 data-[state=closed]:richtext-slide-out-to-left-1/2 data-[state=closed]:richtext-slide-out-to-top-[48%] data-[state=open]:richtext-slide-in-from-left-1/2 data-[state=open]:richtext-slide-in-from-top-[48%] sm:richtext-rounded-lg",
        t
      ),
      ...r,
      children: [
        e,
        /* @__PURE__ */ g(it.Close, { className: "richtext-absolute richtext-right-4 richtext-top-4 richtext-rounded-sm richtext-opacity-70 richtext-ring-offset-background richtext-transition-opacity hover:richtext-opacity-100 focus:richtext-outline-none focus:richtext-ring-2 focus:richtext-ring-ring focus:richtext-ring-offset-2 disabled:richtext-pointer-events-none data-[state=open]:richtext-bg-accent data-[state=open]:richtext-text-muted-foreground", children: [
          /* @__PURE__ */ i(Nr, { className: "richtext-h-4 richtext-w-4" }),
          /* @__PURE__ */ i("span", { className: "richtext-sr-only", children: "Close" })
        ] })
      ]
    }
  )
] }));
lt.displayName = it.Content.displayName;
function Qr({
  className: t,
  ...e
}) {
  return /* @__PURE__ */ i(
    "div",
    {
      className: P(
        "richtext-flex richtext-flex-col richtext-space-y-1.5 richtext-text-center sm:richtext-text-left",
        t
      ),
      ...e
    }
  );
}
Qr.displayName = "DialogHeader";
function wt({
  className: t,
  ...e
}) {
  return /* @__PURE__ */ i(
    "div",
    {
      className: P(
        "richtext-flex richtext-flex-col-reverse sm:richtext-flex-row sm:richtext-justify-end sm:richtext-space-x-2",
        t
      ),
      ...e
    }
  );
}
wt.displayName = "DialogFooter";
const dt = W.forwardRef(({ className: t, ...e }, r) => /* @__PURE__ */ i(
  it.Title,
  {
    ref: r,
    className: P(
      "richtext-text-lg richtext-font-semibold richtext-leading-none richtext-tracking-tight",
      t
    ),
    ...e
  }
));
dt.displayName = it.Title.displayName;
const Na = W.forwardRef(({ className: t, ...e }, r) => /* @__PURE__ */ i(
  it.Description,
  {
    ref: r,
    className: P("richtext-text-sm richtext-text-muted-foreground", t),
    ...e
  }
));
Na.displayName = it.Description.displayName;
function Al(t) {
  return t.replace(/^.*\/|\..+$/g, "");
}
function Ll(t) {
  return t.split(".").pop();
}
function Il(t) {
  return t < 1024 ? `${t} Byte` : t < 1024 * 1024 ? `${(t / 1024).toFixed(2)} KB` : `${(t / 1024 / 1024).toFixed(2)} MB`;
}
function El(t) {
  return t ? t === "application/pdf" ? "pdf" : t.startsWith("application/") && [".document", "word"].some((e) => t.includes(e)) ? "word" : t.startsWith("application/") && ["presentation"].some((e) => t.includes(e)) ? "excel" : t.startsWith("application/") && ["sheet"].some((e) => t.includes(e)) ? "ppt" : t.startsWith("image") ? "image" : t.startsWith("audio") ? "audio" : t.startsWith("video") ? "video" : "file" : "file";
}
function ka(t) {
  return new Promise((e) => {
    const r = new FileReader();
    r.addEventListener(
      "load",
      () => {
        e({
          alt: t.name,
          src: r.result
        });
      },
      !1
    ), r.readAsDataURL(t);
  });
}
function qt(t, e) {
  const r = t.split(","), n = r[0].match(/:(.*?);/)[1], a = atob(r[r.length - 1]);
  let o = a.length;
  const c = new Uint8Array(o);
  for (; o--; )
    c[o] = a.charCodeAt(o);
  return new File([c], e, { type: n });
}
function Sa({ editor: t, imageInline: e, onClose: r }) {
  const { t: n } = q(), [a, o] = S(!1), c = Ht.useRef(null), [l, s] = Ht.useState(), [h, d] = Ht.useState(""), u = J(null), [m, x] = S({
    src: "",
    file: null
  });
  function w(v) {
    if (c.current && v.width && v.height) {
      const y = p(c.current, v);
      d(y);
    }
  }
  function p(v, y) {
    const C = document.createElement("canvas"), M = v.naturalWidth / v.width, L = v.naturalHeight / v.height;
    C.width = y.width * M, C.height = y.height * L;
    const N = C.getContext("2d");
    return N && (N.imageSmoothingEnabled = !1, N.drawImage(
      v,
      y.x * M,
      y.y * L,
      y.width * M,
      y.height * L,
      0,
      0,
      y.width * M,
      y.height * L
    )), C.toDataURL("image/png", 1);
  }
  async function f() {
    var v, y;
    try {
      const C = qt(h, ((v = m == null ? void 0 : m.file) == null ? void 0 : v.name) || "image.png"), M = (y = t.extensionManager.extensions.find(
        (N) => N.name === Vt.name
      )) == null ? void 0 : y.options;
      let L = "";
      M.upload ? L = await M.upload(C) : L = URL.createObjectURL(C), t.chain().focus().setImageInline({ src: L, inline: e }).run(), o(!1), x({
        src: "",
        file: null
      }), r();
    } catch (C) {
      console.log("Error cropping image", C);
    }
  }
  function I(v) {
    var y;
    v.preventDefault(), (y = u.current) == null || y.click();
  }
  const T = async (v) => {
    var L;
    const y = (L = v == null ? void 0 : v.target) == null ? void 0 : L.files;
    if (!t || t.isDestroyed || y.length === 0)
      return;
    const C = y[0], M = await ka(C);
    o(!0), x({
      src: M.src,
      file: C
    });
  };
  return /* @__PURE__ */ g(V, { children: [
    /* @__PURE__ */ i(
      G,
      {
        className: "richtext-mt-1 richtext-w-full",
        onClick: I,
        size: "sm",
        children: n("editor.image.dialog.tab.uploadCrop")
      }
    ),
    /* @__PURE__ */ g(ut, { open: a, children: [
      /* @__PURE__ */ i(mt, {}),
      /* @__PURE__ */ g(lt, { children: [
        /* @__PURE__ */ i(dt, { children: n("editor.image.dialog.tab.uploadCrop") }),
        /* @__PURE__ */ i("div", { children: m.src && /* @__PURE__ */ i(
          xo,
          {
            className: "richtext-w-full",
            crop: l,
            onChange: (v) => s(v),
            onComplete: (v) => w(v),
            children: /* @__PURE__ */ i(
              "img",
              {
                alt: "Crop me",
                ref: c,
                src: m.src
              }
            )
          }
        ) }),
        /* @__PURE__ */ g(wt, { children: [
          /* @__PURE__ */ g(
            G,
            {
              onClick: () => {
                o(!1), x({
                  src: "",
                  file: null
                });
              },
              children: [
                n("editor.imageUpload.cancel"),
                /* @__PURE__ */ i(
                  K,
                  {
                    className: "richtext-ml-[4px]",
                    name: "Trash2"
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ g(
            G,
            {
              className: "richtext-w-fit",
              onClick: f,
              children: [
                n("editor.imageUpload.crop"),
                /* @__PURE__ */ i(
                  K,
                  {
                    className: "richtext-ml-[4px]",
                    name: "Crop"
                  }
                )
              ]
            }
          )
        ] })
      ] })
    ] }),
    /* @__PURE__ */ i(
      "input",
      {
        accept: "image/*",
        multiple: !0,
        onChange: T,
        ref: u,
        type: "file",
        style: {
          display: "none"
        }
      }
    )
  ] });
}
function Ma(t) {
  var w;
  const { t: e } = q(), [r, n] = S(!1), a = (p) => {
    n(p.detail);
  }, [o, c] = S(""), l = J(null), [s, h] = S(((w = t.editor.extensionManager.extensions.find(
    (p) => p.name === Vt.name
  )) == null ? void 0 : w.options.defaultInline) || !1), d = U(() => {
    var f;
    return (f = t.editor.extensionManager.extensions.find(
      (I) => I.name === Vt.name
    )) == null ? void 0 : f.options;
  }, [t.editor]);
  B(() => {
    const p = se(bt.UPLOAD_IMAGE(t.editor.id), a);
    return () => {
      p();
    };
  }, []);
  async function u(p) {
    var v;
    const f = (v = p == null ? void 0 : p.target) == null ? void 0 : v.files;
    if (!t.editor || t.editor.isDestroyed || f.length === 0)
      return;
    const I = f[0];
    let T = "";
    d.upload ? T = await d.upload(I) : T = URL.createObjectURL(I), t.editor.chain().focus().setImageInline({ src: T, inline: s }).run(), n(!1), h(!1);
  }
  function m(p) {
    p.preventDefault(), p.stopPropagation(), t.editor.chain().focus().setImageInline({ src: o, inline: s }).run(), n(!1), h(!1), c("");
  }
  function x(p) {
    var f;
    p.preventDefault(), (f = l.current) == null || f.click();
  }
  return /* @__PURE__ */ g(
    ut,
    {
      onOpenChange: n,
      open: r,
      children: [
        /* @__PURE__ */ i(mt, { asChild: !0, children: /* @__PURE__ */ i(
          O,
          {
            action: () => n(!0),
            icon: t.icon,
            tooltip: t.tooltip
          }
        ) }),
        /* @__PURE__ */ g(lt, { children: [
          /* @__PURE__ */ i(dt, { children: e("editor.image.dialog.title") }),
          /* @__PURE__ */ g(
            $r,
            {
              activationMode: "manual",
              defaultValue: d.resourceImage === "both" || d.resourceImage === "upload" ? "upload" : "link",
              children: [
                /* @__PURE__ */ g(Ve, { className: "richtext-grid richtext-w-full richtext-grid-cols-2", children: [
                  d.resourceImage === "both" || d.resourceImage === "upload" ? /* @__PURE__ */ i(Bt, { value: "upload", children: e("editor.image.dialog.tab.upload") }) : /* @__PURE__ */ i(V, {}),
                  d.resourceImage === "both" || d.resourceImage === "link" ? /* @__PURE__ */ i(Bt, { value: "link", children: e("editor.image.dialog.tab.url") }) : /* @__PURE__ */ i(V, {})
                ] }),
                /* @__PURE__ */ g("div", { className: "richtext-my-[10px] richtext-flex richtext-items-center richtext-gap-[4px]", children: [
                  /* @__PURE__ */ i(
                    Yr,
                    {
                      checked: s,
                      onCheckedChange: (p) => {
                        h(p);
                      }
                    }
                  ),
                  /* @__PURE__ */ i(ct, { children: e("editor.link.dialog.inline") })
                ] }),
                /* @__PURE__ */ g($t, { value: "upload", children: [
                  /* @__PURE__ */ g("div", { className: "richtext-flex richtext-items-center richtext-gap-[10px]", children: [
                    /* @__PURE__ */ i(
                      G,
                      {
                        className: "richtext-mt-1 richtext-w-full",
                        onClick: x,
                        size: "sm",
                        children: e("editor.image.dialog.tab.upload")
                      }
                    ),
                    /* @__PURE__ */ i(
                      Sa,
                      {
                        editor: t.editor,
                        imageInline: s,
                        onClose: () => Ca.setOpen(t.editor.id, !1)
                      }
                    )
                  ] }),
                  /* @__PURE__ */ i(
                    "input",
                    {
                      accept: "image/*",
                      multiple: !0,
                      onChange: u,
                      ref: l,
                      type: "file",
                      style: {
                        display: "none"
                      }
                    }
                  )
                ] }),
                /* @__PURE__ */ i($t, { value: "link", children: /* @__PURE__ */ i("form", { onSubmit: m, children: /* @__PURE__ */ g("div", { className: "richtext-flex richtext-items-center richtext-gap-2", children: [
                  /* @__PURE__ */ i(
                    Q,
                    {
                      autoFocus: !0,
                      onChange: (p) => c(p.target.value),
                      placeholder: e("editor.image.dialog.placeholder"),
                      required: !0,
                      type: "url",
                      value: o
                    }
                  ),
                  /* @__PURE__ */ i(G, { type: "submit", children: e("editor.image.dialog.button.apply") })
                ] }) }) })
              ]
            }
          )
        ] })
      ]
    }
  );
}
const Yt = {
  TOP_LEFT: "tl",
  TOP_RIGHT: "tr",
  BOTTOM_LEFT: "bl",
  BOTTOM_RIGHT: "br"
};
function Aa(t) {
  var L, N;
  const [e, r] = S({
    width: xt,
    height: xt
  }), [n, a] = S({
    width: 0,
    height: 0
  }), [o] = S([
    Yt.TOP_LEFT,
    Yt.TOP_RIGHT,
    Yt.BOTTOM_LEFT,
    Yt.BOTTOM_RIGHT
  ]), [c, l] = S(!1), [s, h] = S({
    x: 0,
    y: 0,
    w: 0,
    h: 0,
    dir: ""
  }), { align: d, inline: u } = (L = t == null ? void 0 : t.node) == null ? void 0 : L.attrs, m = U(() => {
    var nt;
    const { src: E, alt: b, width: k, height: _, flipX: D, flipY: R } = (nt = t == null ? void 0 : t.node) == null ? void 0 : nt.attrs, A = ae(k) ? `${k}px` : k, $ = ae(_) ? `${_}px` : _, F = [];
    D && F.push("rotateX(180deg)"), R && F.push("rotateY(180deg)");
    const Y = F.join(" ");
    return {
      src: E || void 0,
      alt: b || void 0,
      style: {
        width: A || void 0,
        height: $ || void 0,
        transform: Y || "none"
      }
    };
  }, [(N = t == null ? void 0 : t.node) == null ? void 0 : N.attrs]), x = U(() => {
    const {
      style: { width: E }
    } = m;
    return { width: E === "100%" ? E : void 0 };
  }, [m]);
  function w(E) {
    a({
      width: E.target.width,
      height: E.target.height
    });
  }
  function p() {
    const { editor: E, getPos: b } = t;
    E.commands.setNodeSelection(b());
  }
  const f = H(
    ht(() => {
      const { editor: E } = t, { width: b } = getComputedStyle(E.view.dom);
      r((k) => ({
        ...k,
        width: Number.parseInt(b, 10)
      }));
    }, ft),
    [t == null ? void 0 : t.editor]
  );
  function I(E, b) {
    E.preventDefault(), E.stopPropagation();
    const k = n.width, _ = n.height, D = k / _;
    let R = Number(t.node.attrs.width), A = Number(t.node.attrs.height);
    const $ = e.width;
    R && !A ? (R = R > $ ? $ : R, A = Math.round(R / D)) : A && !R ? (R = Math.round(A * D), R = R > $ ? $ : R) : !R && !A ? (R = k > $ ? $ : k, A = Math.round(R / D)) : R = R > $ ? $ : R, l(!0), h({
      x: E.clientX,
      y: E.clientY,
      w: R,
      h: A,
      dir: b
    });
  }
  const T = H(
    ht((E) => {
      if (E.preventDefault(), E.stopPropagation(), !c)
        return;
      const { x: b, w: k, dir: _ } = s, D = (E.clientX - b) * (/l/.test(_) ? -1 : 1), R = yr(k + D, he, e.width);
      t.updateAttributes({
        width: R,
        height: null
      });
    }, ft),
    [c, s, e, t.updateAttributes]
  ), v = H(
    (E) => {
      E.preventDefault(), E.stopPropagation(), c && (h({
        x: 0,
        y: 0,
        w: 0,
        h: 0,
        dir: ""
      }), l(!1), p());
    },
    [c, p]
  ), y = H(() => {
    document == null || document.addEventListener("mousemove", T, !0), document == null || document.addEventListener("mouseup", v, !0);
  }, [T, v]), C = H(() => {
    document == null || document.removeEventListener("mousemove", T, !0), document == null || document.removeEventListener("mouseup", v, !0);
  }, [T, v]);
  B(() => (c ? y() : C(), () => {
    C();
  }), [c, y, C]);
  const M = U(() => new ResizeObserver(() => f()), [f]);
  return B(() => (M.observe(t.editor.view.dom), () => {
    M.disconnect();
  }), [t.editor.view.dom, M]), /* @__PURE__ */ i(
    gt,
    {
      as: u ? "span" : "div",
      className: "image-view",
      style: { ...x, textAlign: d, display: u ? "inline" : "block" },
      children: /* @__PURE__ */ g(
        "div",
        {
          "data-drag-handle": !0,
          draggable: "true",
          style: x,
          className: `image-view__body ${t != null && t.selected ? "image-view__body--focused" : ""} ${c ? "image-view__body--resizing" : ""}`,
          children: [
            /* @__PURE__ */ i(
              "img",
              {
                alt: m.alt,
                className: "image-view__body__image block",
                height: "auto",
                onClick: p,
                onLoad: w,
                src: m.src,
                style: m.style
              }
            ),
            (t == null ? void 0 : t.editor.view.editable) && ((t == null ? void 0 : t.selected) || c) && /* @__PURE__ */ i("div", { className: "image-resizer", children: o == null ? void 0 : o.map((E) => /* @__PURE__ */ i(
              "span",
              {
                className: `image-resizer__handler image-resizer__handler--${E}`,
                onMouseDown: (b) => I(b, E)
              },
              `image-dir-${E}`
            )) })
          ]
        }
      )
    }
  );
}
const At = new He("upload-image");
function La() {
  return new De({
    key: At,
    state: {
      init() {
        return Hi.empty;
      },
      apply(t, e) {
        e = e.map(t.mapping, t.doc);
        const r = t.getMeta(At);
        if (r != null && r.add)
          for (const { id: n, pos: a, src: o } of r.add) {
            const c = Ia(o), l = Oi.widget(a, c, { id: n });
            e = e.add(t.doc, [l]);
          }
        else if (r != null && r.remove)
          for (const n of r.remove)
            e = e.remove(e.find(void 0, void 0, (a) => a.id === n));
        return e;
      }
    },
    props: {
      decorations(t) {
        return this.getState(t);
      }
    }
  });
}
function Ia(t) {
  const e = document.createElement("div"), r = document.createElement("img");
  return r.setAttribute("class", "opacity-50"), r.src = t, r.addEventListener("load", () => {
    e.setAttribute("class", "img-placeholder");
  }), e.append(r), e;
}
function Ea(t, e) {
  var a;
  const n = At.getState(t).find(void 0, void 0, (o) => o.id === e);
  return n.length > 0 ? (a = n[0]) == null ? void 0 : a.from : null;
}
function za({ validateFn: t, onUpload: e, postUpload: r, defaultInline: n = !1 }) {
  return (a, o, c) => {
    for (const l of a) {
      if (t && !t(l))
        continue;
      const s = Date.now().toString(), h = o.state.tr;
      h.selection.empty || h.deleteSelection();
      const d = URL.createObjectURL(l);
      h.setMeta(At, {
        add: [{ id: s, pos: c, src: d }]
      }), o.dispatch(h), e(l).then(
        async (u) => {
          var T;
          r && typeof u == "string" && (u = await r(u));
          const { schema: m } = o.state;
          let x = Ea(o.state, s);
          if (x === null)
            return;
          const w = typeof u == "object" ? d : u, p = (T = m.nodes.image) == null ? void 0 : T.create({
            src: w,
            inline: n
          });
          if (!p)
            return;
          const { doc: f } = o.state;
          x > f.content.size && (x = f.content.size - 1);
          const I = o.state.tr.replaceWith(x, x, p).setMeta(At, { remove: [s] });
          o.dispatch(I);
        },
        () => {
          const u = o.state.tr.delete(c, c).setMeta(At, { remove: [s] });
          o.dispatch(u);
        }
      );
    }
  };
}
function Pa(t, e, r) {
  var a;
  const n = [...((a = e.clipboardData) == null ? void 0 : a.files) || []];
  if (n.length > 0) {
    e.preventDefault();
    const o = t.state.selection.from;
    return r(n, t, o + 1), !0;
  }
  return !1;
}
function Ra(t, e, r, n) {
  var o;
  const a = [...((o = e.dataTransfer) == null ? void 0 : o.files) || []];
  if (!r && a.length > 0) {
    e.preventDefault();
    const c = t.posAtCoords({
      left: e.clientX,
      top: e.clientY
    });
    if (c)
      return n(a, t, c.pos + 1), !0;
  }
  return !1;
}
const Oa = {
  acceptMimes: ["image/jpeg", "image/gif", "image/png", "image/jpg"],
  maxSize: 1024 * 1024 * 5,
  // 5MB
  resourceImage: "both",
  defaultInline: !1
}, Vt = de.extend({
  group: "inline",
  inline: !0,
  defining: !0,
  draggable: !0,
  selectable: !0,
  addOptions() {
    var t;
    return {
      ...Oa,
      ...(t = this.parent) == null ? void 0 : t.call(this),
      upload: () => Promise.reject("Image Upload Function"),
      button: ({
        editor: e,
        extension: r,
        t: n
      }) => {
        var a, o;
        return {
          component: Ma,
          componentProps: {
            action: () => !0,
            upload: r.options.upload,
            /* If setImage is not available(when Image Component is not imported), the button is disabled */
            disabled: !((o = (a = e.can()).setImage) != null && o.call(a, {})),
            icon: "ImageUp",
            tooltip: n("editor.image.tooltip"),
            editor: e
          }
        };
      }
    };
  },
  addAttributes() {
    var t;
    return {
      ...(t = this.parent) == null ? void 0 : t.call(this),
      flipX: {
        default: !1
      },
      flipY: {
        default: !1
      },
      width: {
        default: null,
        parseHTML: (e) => {
          const r = e.style.width || e.getAttribute("width") || null;
          return r ? Number.parseInt(r, 10) : null;
        },
        renderHTML: (e) => ({
          width: e.width
        })
      },
      align: {
        default: "center",
        parseHTML: (e) => e.getAttribute("align"),
        renderHTML: (e) => ({
          align: e.align
        })
      },
      inline: {
        default: !1,
        parseHTML: (e) => !!e.getAttribute("inline"),
        renderHTML: (e) => ({
          inline: e.inline
        })
      }
    };
  },
  addNodeView() {
    return pt(Aa);
  },
  addCommands() {
    var t;
    return {
      ...(t = this.parent) == null ? void 0 : t.call(this),
      setImageInline: (e) => ({ commands: r }) => r.insertContent({
        type: this.name,
        attrs: {
          ...e,
          inline: e.inline ?? this.options.defaultInline
        }
      }),
      updateImage: (e) => ({ commands: r }) => r.updateAttributes(this.name, e),
      setAlignImage: (e) => ({ commands: r }) => r.updateAttributes(this.name, { align: e })
    };
  },
  renderHTML({ HTMLAttributes: t }) {
    const { flipX: e, flipY: r, align: n, inline: a } = t, o = e || r ? `transform: rotateX(${e ? "180" : "0"}deg) rotateY(${r ? "180" : "0"}deg);` : "", c = n ? `text-align: ${n};` : "";
    return [
      a ? "span" : "div",
      {
        style: c,
        class: "image"
      },
      [
        "img",
        st(
          {
            height: "auto",
            style: o
          },
          this.options.HTMLAttributes,
          t
        )
      ]
    ];
  },
  parseHTML() {
    return [
      {
        tag: "span.image img",
        getAttrs: (t) => {
          var o;
          const e = t == null ? void 0 : t.parentElement, r = t == null ? void 0 : t.getAttribute("width"), n = (t == null ? void 0 : t.getAttribute("flipx")) || !1, a = (t == null ? void 0 : t.getAttribute("flipy")) || !1;
          return {
            src: t == null ? void 0 : t.getAttribute("src"),
            alt: t == null ? void 0 : t.getAttribute("alt"),
            caption: t == null ? void 0 : t.getAttribute("caption"),
            width: r ? Number.parseInt(r, 10) : null,
            align: (t == null ? void 0 : t.getAttribute("align")) || ((o = e == null ? void 0 : e.style) == null ? void 0 : o.textAlign) || null,
            inline: (t == null ? void 0 : t.getAttribute("inline")) || !1,
            flipX: n === "true",
            flipY: a === "true"
          };
        }
      },
      {
        tag: "div[class=image]",
        getAttrs: (t) => {
          const e = t.querySelector("img"), r = e == null ? void 0 : e.getAttribute("width"), n = (e == null ? void 0 : e.getAttribute("flipx")) || !1, a = (e == null ? void 0 : e.getAttribute("flipy")) || !1;
          return {
            src: e == null ? void 0 : e.getAttribute("src"),
            alt: e == null ? void 0 : e.getAttribute("alt"),
            caption: e == null ? void 0 : e.getAttribute("caption"),
            width: r ? Number.parseInt(r, 10) : null,
            align: (e == null ? void 0 : e.getAttribute("align")) || t.style.textAlign || null,
            inline: (e == null ? void 0 : e.getAttribute("inline")) || !1,
            flipX: n === "true",
            flipY: a === "true"
          };
        }
      }
    ];
  },
  addProseMirrorPlugins() {
    const e = za({
      validateFn: (r) => !(!this.options.acceptMimes.includes(r.type) || r.size > this.options.maxSize),
      onUpload: this.options.upload,
      // postUpload: this.options.postUpload,
      defaultInline: this.options.defaultInline
    });
    return [
      new De({
        props: {
          handlePaste: (r, n) => !n.clipboardData || [...n.clipboardData.files || []].some((o) => o.type === "text/html") ? !1 : Pa(r, n, e),
          handleDrop: (r, n, a, o) => (!(n instanceof DragEvent) || !n.dataTransfer || Ra(r, n, o, e), !1)
        }
      }),
      La()
    ];
  }
});
function Ha(t) {
  return /\.(?:mp4|webm|ogg|mov)$/i.test(t);
}
function Da(t) {
  const { t: e } = q(), [r, n] = S(""), a = J(null), [o, c] = S(""), [l, s] = S(!1), h = (w) => {
    s(w.detail);
  };
  B(() => {
    const w = se(bt.UPLOAD_VIDEO(t.editor.id), h);
    return () => {
      w();
    };
  }, []);
  const d = U(() => {
    var p;
    return (p = t.editor.extensionManager.extensions.find(
      (f) => f.name === ti.name
    )) == null ? void 0 : p.options;
  }, [t.editor]);
  async function u(w) {
    var T;
    const p = (T = w == null ? void 0 : w.target) == null ? void 0 : T.files;
    if (!t.editor || t.editor.isDestroyed || p.length === 0)
      return;
    const f = p[0];
    let I = "";
    d.upload ? I = await d.upload(f) : I = URL.createObjectURL(f), t.editor.chain().focus().setVideo({
      src: I,
      width: "100%"
    }).run(), s(!1);
  }
  function m(w) {
    w.preventDefault(), w.stopPropagation(), r && (t.editor.chain().focus().setVideo({
      src: r,
      width: "100%"
    }).run(), s(!1));
  }
  function x(w) {
    var p;
    w.preventDefault(), (p = a.current) == null || p.click();
  }
  return /* @__PURE__ */ g(
    ut,
    {
      onOpenChange: s,
      open: l,
      children: [
        /* @__PURE__ */ i(mt, { asChild: !0, children: /* @__PURE__ */ i(
          O,
          {
            action: () => s(!0),
            icon: t.icon,
            tooltip: t.tooltip
          }
        ) }),
        /* @__PURE__ */ g(lt, { children: [
          /* @__PURE__ */ i(dt, { children: e("editor.video.dialog.title") }),
          /* @__PURE__ */ g(
            $r,
            {
              activationMode: "manual",
              defaultValue: (d == null ? void 0 : d.resourceVideo) === "both" || (d == null ? void 0 : d.resourceVideo) === "upload" ? "upload" : "link",
              children: [
                /* @__PURE__ */ g(Ve, { className: "richtext-grid richtext-w-full richtext-grid-cols-2", children: [
                  ((d == null ? void 0 : d.resourceVideo) === "both" || (d == null ? void 0 : d.resourceVideo) === "upload") && /* @__PURE__ */ i(Bt, { value: "upload", children: e("editor.video.dialog.tab.upload") }),
                  ((d == null ? void 0 : d.resourceVideo) === "both" || (d == null ? void 0 : d.resourceVideo) === "link") && /* @__PURE__ */ i(Bt, { value: "link", children: e("editor.video.dialog.link") })
                ] }),
                /* @__PURE__ */ g($t, { value: "upload", children: [
                  /* @__PURE__ */ i("div", { className: "richtext-flex richtext-items-center richtext-gap-[10px]", children: /* @__PURE__ */ i(
                    G,
                    {
                      className: "richtext-mt-1 richtext-w-full",
                      onClick: x,
                      size: "sm",
                      children: e("editor.video.dialog.tab.upload")
                    }
                  ) }),
                  /* @__PURE__ */ i(
                    "input",
                    {
                      accept: "video/*",
                      multiple: !0,
                      onChange: u,
                      ref: a,
                      type: "file",
                      style: {
                        display: "none"
                      }
                    }
                  )
                ] }),
                /* @__PURE__ */ g($t, { value: "link", children: [
                  /* @__PURE__ */ i("form", { onSubmit: m, children: /* @__PURE__ */ g("div", { className: "richtext-flex richtext-items-center richtext-gap-2", children: [
                    /* @__PURE__ */ i(
                      Q,
                      {
                        autoFocus: !0,
                        placeholder: e("editor.video.dialog.placeholder"),
                        required: !0,
                        type: "url",
                        value: r,
                        onChange: (w) => {
                          const p = w.target.value;
                          if (!Ha(p)) {
                            c("Invalid video URL"), n("");
                            return;
                          }
                          c(""), n(p);
                        }
                      }
                    ),
                    /* @__PURE__ */ i(G, { type: "submit", children: e("editor.video.dialog.button.apply") })
                  ] }) }),
                  o && /* @__PURE__ */ i("div", { className: "richtext-my-[5px] richtext-text-red-500", children: o })
                ] })
              ]
            }
          )
        ] })
      ]
    }
  );
}
function _a(t) {
  return t = t.replace("https://youtu.be/", "https://www.youtube.com/watch?v=").replace("watch?v=", "embed/"), t = t.replace("https://vimeo.com/", "https://player.vimeo.com/video/"), /^https?:\/\/www.bilibili.com\/video\/.*/i.test(t) && (t = t.replace(/\?.*$/, "").replace("https://www.bilibili.com/video/", "https://player.bilibili.com/player.html?bvid=")), t.includes("drive.google.com") && (t = t.replace("/view", "/preview")), t;
}
const ti = yt.create({
  name: "video",
  group: "block",
  atom: !0,
  draggable: !0,
  addOptions() {
    return {
      divider: !1,
      spacer: !1,
      allowFullscreen: !0,
      upload: void 0,
      frameborder: !1,
      resourceVideo: "both",
      width: Ce["size-medium"],
      HTMLAttributes: {
        class: "iframe-wrapper",
        style: "display: flex;justify-content: center;"
      },
      button: ({ editor: t, t: e }) => {
        var r, n;
        return {
          component: Da,
          componentProps: {
            action: () => {
            },
            isActive: () => t.isActive("video") || !1,
            /* If setVideo is not available(when Video Component is not imported), the button is disabled */
            disabled: !((n = (r = t.can()).setVideo) != null && n.call(r, {})),
            icon: "Video",
            tooltip: e("editor.video.tooltip"),
            editor: t
          }
        };
      }
    };
  },
  addAttributes() {
    return {
      src: {
        default: null,
        renderHTML: ({ src: t }) => ({
          src: t ? _a(t) : null
        })
      },
      width: {
        default: this.options.width,
        renderHTML: ({ width: t }) => ({
          width: No(t)
        })
      },
      frameborder: {
        default: this.options.frameborder ? 1 : 0,
        parseHTML: () => this.options.frameborder ? 1 : 0
      },
      allowfullscreen: {
        default: this.options.allowFullscreen,
        parseHTML: () => this.options.allowFullscreen
      }
    };
  },
  parseHTML() {
    return [
      {
        tag: "div[data-video] iframe"
      }
    ];
  },
  renderHTML({ HTMLAttributes: t }) {
    const { width: e = "100%" } = t ?? {}, r = {
      ...t,
      width: "100%",
      height: "100%"
    }, n = `position: relative;overflow: hidden;display: flex;flex: 1;max-width: ${e};`, a = `flex: 1;padding-bottom: ${9 / 16 * 100}%;`, l = ["div", { style: n }, ["div", { style: a }], ["iframe", r]];
    return ["div", {
      ...this.options.HTMLAttributes,
      "data-video": ""
    }, l];
  },
  addCommands() {
    return {
      setVideo: (t) => ({ commands: e }) => e.insertContent({
        type: this.name,
        attrs: t
      }),
      updateVideo: (t) => ({ commands: e }) => e.updateAttributes(this.name, t)
    };
  }
}), Ba = "_wrap_5y04w_1", $a = "_innerWrap_5y04w_15", ir = {
  wrap: Ba,
  innerWrap: $a
};
function Va({ editor: t, node: e, updateAttributes: r }) {
  const n = vo(), { url: a, width: o, height: c } = e.attrs, [l, s] = S("");
  function h() {
    l && t.chain().updateAttributes(kt.name, {
      url: l
    }).setNodeSelection(t.state.selection.from).focus().run();
  }
  const d = H(
    (u) => {
      r({ width: u.width, height: u.height });
    },
    [r]
  );
  return /* @__PURE__ */ g(gt, { children: [
    !a && /* @__PURE__ */ g("div", { className: "richtext-mx-auto richtext-my-[12px] richtext-flex richtext-max-w-[600px] richtext-items-center richtext-justify-center richtext-gap-[10px] richtext-rounded-[12px] richtext-border richtext-border-solid richtext-border-[#ccc] richtext-p-[10px]", children: [
      /* @__PURE__ */ i(
        Q,
        {
          autoFocus: !0,
          className: "richtext-flex-1",
          onInput: (u) => s(u.target.value),
          placeholder: "Enter link",
          type: "url",
          value: l
        }
      ),
      /* @__PURE__ */ i(
        G,
        {
          className: "richtext-w-[60px]",
          onClick: h,
          children: "OK"
        }
      )
    ] }),
    a && /* @__PURE__ */ i(
      Rr,
      {
        size: { width: Number.parseInt(o), height: Number.parseInt(c) },
        onResizeStop: (u, m, x, w) => {
          d({
            width: Number.parseInt(o) + w.width,
            height: Number.parseInt(c) + w.height
          });
        },
        children: /* @__PURE__ */ i("div", { className: oe(ir.wrap, "render-wrapper"), children: /* @__PURE__ */ i(
          "div",
          {
            className: ir.innerWrap,
            style: { pointerEvents: n ? "none" : "auto" },
            children: /* @__PURE__ */ i(
              "iframe",
              {
                className: "richtext-my-[12px] ",
                src: a
              }
            )
          }
        ) })
      }
    )
  ] });
}
function Wa(t) {
  try {
    return JSON.stringify(t);
  } catch {
    return JSON.stringify({});
  }
}
function Lt(t, e = !1) {
  return (r) => {
    const n = t.startsWith("data-") ? t : `data-${t}`;
    let a = decodeURIComponent(r.getAttribute(n));
    if (a == null || typeof a == "string" && a === "null")
      try {
        const l = r.outerHTML.match(/([\S\s])+?="([\S\s])+?"/g);
        l && l.length > 0 && (a = (l.map((h) => h.trim()).reduce((h, d) => {
          const u = d.indexOf("="), m = [d.slice(0, u), d.slice(u + 1).slice(1, -1)];
          return h[m[0]] = m[1], h;
        }, {})[t.toLowerCase()] || "").replaceAll("&quot;", '"'));
      } catch (c) {
        console.error("Error getDatasetAttribute ", c.message, r);
      }
    if (e)
      try {
        return JSON.parse(a);
      } catch {
        return {};
      }
    if (a.includes("%") || a.includes("auto"))
      return a;
    const o = Number.parseInt(a);
    return o !== o ? a : o;
  };
}
function Fa(t) {
  const { attrs: e } = t;
  return Object.keys(e).reduce((r, n) => {
    const a = e[n];
    if (a == null)
      return r;
    let o = "";
    return typeof a == "object" ? o = Wa(a) : o = a, r[n] = o, r;
  }, /* @__PURE__ */ Object.create(null));
}
const kt = yt.create({
  name: "iframe",
  content: "",
  marks: "",
  group: "block",
  selectable: !0,
  atom: !0,
  draggable: !0,
  addOptions() {
    var t;
    return {
      ...(t = this.parent) == null ? void 0 : t.call(this),
      HTMLAttributes: {
        class: "iframe"
      },
      button: ({
        editor: e,
        extension: r,
        t: n
      }) => ({
        component: O,
        componentProps: {
          action: (a) => e.commands.setIframe(a),
          upload: r.options.upload,
          disabled: !e.can().setIframe({}),
          icon: "Iframe",
          tooltip: n("editor.iframe.tooltip")
        }
      })
    };
  },
  addAttributes() {
    return {
      width: {
        default: 600,
        parseHTML: Lt("width")
      },
      height: {
        default: 300,
        parseHTML: Lt("height")
      },
      url: {
        default: null,
        parseHTML: Lt("url")
      },
      defaultShowPicker: {
        default: !1
      },
      frameborder: {
        default: 0
      },
      allowfullscreen: {
        default: this.options.allowFullscreen,
        parseHTML: () => this.options.allowFullscreen
      }
    };
  },
  parseHTML() {
    return [
      {
        tag: "iframe"
      }
    ];
  },
  renderHTML({ HTMLAttributes: t }) {
    return ["iframe", st(this.options.HTMLAttributes, t)];
  },
  addCommands() {
    return {
      setIframe: (t) => ({ tr: e, commands: r, chain: n }) => {
        var o, c, l;
        if (((l = (c = (o = e.selection) == null ? void 0 : o.node) == null ? void 0 : c.type) == null ? void 0 : l.name) == this.name)
          return r.updateAttributes(this.name, t);
        const a = t || { url: "" };
        return n().insertContent({
          type: this.name,
          attrs: a
        }).run();
      }
    };
  },
  addInputRules() {
    return [
      Re({
        find: /^\$iframe\$$/,
        type: this.type,
        getAttributes: () => ({ width: "100%" })
      })
    ];
  },
  addNodeView() {
    return pt(Va);
  }
}), jt = W.forwardRef(
  ({ className: t, ...e }, r) => /* @__PURE__ */ i(
    "textarea",
    {
      className: P(
        "richtext-flex richtext-min-h-[80px] richtext-w-full richtext-rounded-md !richtext-border richtext-border-input richtext-bg-background richtext-px-3 richtext-py-2 richtext-text-sm richtext-ring-offset-background placeholder:richtext-text-muted-foreground focus-visible:richtext-outline-none focus-visible:richtext-ring-2 focus-visible:richtext-ring-ring focus-visible:richtext-ring-offset-2 disabled:richtext-cursor-not-allowed disabled:richtext-opacity-50",
        t
      ),
      ref: r,
      ...e
    }
  )
);
jt.displayName = "Textarea";
function Ua(t) {
  return t;
}
function zt(t, e, r, n) {
  const a = Ua, [o, c] = S(a(r)), l = J(o);
  return B(() => {
    const s = () => {
      const h = { ...r, ...t.getAttributes(e) };
      Object.keys(h).forEach((u) => {
        (h[u] === null || h[u] === void 0) && (h[u] = r ? r[u] : null);
      });
      const d = a(h);
      Cr(l.current, d) || (c(d), l.current = d);
    };
    return t.on("selectionUpdate", s), t.on("transaction", s), () => {
      t.off("selectionUpdate", s), t.off("transaction", s);
    };
  }, [t, r, e, a]), o;
}
function Ga({ editor: t, ...e }) {
  const { t: r } = q(), n = zt(t, Mt.name, {
    text: "",
    defaultShowPicker: !1
  }), { text: a, defaultShowPicker: o } = n, [c, l] = S(""), s = H(() => {
    t.chain().focus().setKatex({ text: c }).run(), l("");
  }, [t, c]);
  B(() => {
    o && t.chain().updateAttributes(Mt.name, { defaultShowPicker: !1 }).focus().run();
  }, [t, o]);
  const h = U(() => {
    try {
      return _e.renderToString(`${c}`);
    } catch {
      return c;
    }
  }, [c]), d = U(
    () => `${c}`.trim() ? /* @__PURE__ */ i(
      "span",
      {
        contentEditable: !1,
        dangerouslySetInnerHTML: { __html: h || "" }
      }
    ) : null,
    [c, h]
  );
  return /* @__PURE__ */ g(It, { modal: !0, children: [
    /* @__PURE__ */ i(Et, { asChild: !0, children: /* @__PURE__ */ i(
      O,
      {
        icon: e == null ? void 0 : e.icon,
        tooltip: e == null ? void 0 : e.tooltip
      }
    ) }),
    /* @__PURE__ */ g(
      Tt,
      {
        align: "start",
        className: "richtext-size-full richtext-p-2",
        hideWhenDetached: !0,
        side: "bottom",
        children: [
          /* @__PURE__ */ i(ct, { className: "richtext-mb-[6px]", children: r("editor.formula.dialog.text") }),
          /* @__PURE__ */ i("div", { className: "richtext-mb-[16px] richtext-flex richtext-w-full richtext-max-w-sm richtext-items-center richtext-gap-1.5", children: /* @__PURE__ */ i("div", { className: "richtext-relative richtext-w-full richtext-max-w-sm", children: /* @__PURE__ */ i(
            jt,
            {
              autoFocus: !0,
              className: "richtext-w-full",
              defaultValue: a,
              onChange: (u) => l(u.target.value),
              placeholder: "Text",
              required: !0,
              rows: 3,
              value: c
            }
          ) }) }),
          d && /* @__PURE__ */ i("div", { className: "richtext-my-[10px] richtext-max-w-[286px] richtext-overflow-auto richtext-whitespace-nowrap richtext-rounded-[6px] !richtext-border richtext-p-[10px]", children: d }),
          /* @__PURE__ */ g("div", { className: "richtext-flex richtext-items-center richtext-justify-between richtext-gap-[6px]", children: [
            /* @__PURE__ */ i(
              G,
              {
                className: "richtext-flex-1",
                onClick: s,
                children: "Submit"
              }
            ),
            /* @__PURE__ */ i(
              "a",
              {
                href: "https://katex.org/docs/supported",
                rel: "noreferrer noopener",
                target: "_blank",
                children: /* @__PURE__ */ i(Ar, { size: 16 })
              }
            )
          ] })
        ]
      }
    )
  ] });
}
function qa() {
  const [t] = Hr((e) => e.value);
  return t;
}
const ja = {
  setTheme: (t, e) => {
    Be(bt.UPDATE_THEME(t), e);
  }
};
function Xa(t, e = 1) {
  let r = 0, n = 0, a = 0;
  if (t.startsWith("rgb")) {
    const o = t.replace(/\s/g, "").match(/rgb\((.*)\)$/)[1].split(",");
    r = +o[0], n = +o[1], a = +o[2];
  } else if (t.startsWith("#")) {
    let o = t.replace("#", "");
    o.length === 3 && (o = `${o[0]}${o[0]}${o[1]}${o[1]}${o[2]}${o[2]}`), r = Number.parseInt(o.substring(0, 2), 16), n = Number.parseInt(o.substring(2, 4), 16), a = Number.parseInt(o.substring(4, 6), 16);
  } else
    return t;
  return e > 1 && e <= 100 && (e = e / 100), `rgba(${r},${n},${a},${e})`;
}
function Ya({ node: t }) {
  const e = qa(), { text: r } = t.attrs, n = U(() => {
    const c = "rgb(254, 242, 237)";
    return e === "dark" ? Xa(c, 0.75) : c;
  }, [e]), a = U(() => {
    try {
      return _e.renderToString(`${r}`);
    } catch {
      return r;
    }
  }, [r]), o = U(
    () => r.trim() ? /* @__PURE__ */ i("span", { contentEditable: !1, dangerouslySetInnerHTML: { __html: a } }) : /* @__PURE__ */ i("span", { contentEditable: !1, children: "Not enter a formula" }),
    [r, a]
  );
  return /* @__PURE__ */ i(
    gt,
    {
      style: {
        display: "inline-block",
        backgroundColor: n
      },
      as: "span",
      children: o
    }
  );
}
function Ka(t) {
  return (e) => e.getAttribute(t);
}
const Mt = yt.create({
  name: "katex",
  group: "inline",
  inline: !0,
  defining: !0,
  draggable: !0,
  selectable: !0,
  addOptions() {
    return {
      HTMLAttributes: {
        class: "katex"
      },
      button: ({ editor: t, t: e }) => ({
        component: Ga,
        componentProps: {
          editor: t,
          action: () => !0,
          isActive: () => !1,
          disabled: !1,
          icon: "KatexIcon",
          tooltip: e("editor.katex.tooltip")
        }
      })
    };
  },
  addAttributes() {
    return {
      text: {
        default: "",
        parseHTML: Ka("text")
      },
      defaultShowPicker: {
        default: !1
      }
    };
  },
  parseHTML() {
    return [{ tag: "span.katex" }];
  },
  renderHTML({ HTMLAttributes: t }) {
    return ["span", st(this.options && this.options.HTMLAttributes || {}, t)];
  },
  addCommands() {
    return {
      setKatex: (t) => ({ commands: e }) => e.insertContent({
        type: this.name,
        attrs: t
      })
    };
  },
  addInputRules() {
    return [
      Re({
        find: /^\$katex\$$/,
        type: this.type,
        getAttributes: () => ({ defaultShowPicker: !0 })
      })
    ];
  },
  addNodeView() {
    return pt(Ya);
  }
});
function Za({ selectImage: t, giphyApiKey: e, children: r }) {
  const [n, a] = S([]), [o] = S(15), c = J(null), l = (h, d = "search") => {
    if (!e)
      return;
    const m = `${d === "search" ? `https://api.giphy.com/v1/gifs/search?q=${h}` : `https://api.giphy.com/v1/gifs/trending?q=${h}`}&limit=${o}&api_key=${e}`;
    fetch(m).then((x) => x.json()).then((x) => {
      a(x.data);
    }).catch((x) => {
      console.log(x);
    });
  };
  B(() => {
    l("", "trend");
  }, []);
  const s = H(
    Oe((h) => {
      if (!h.target.value) {
        l("", "trend");
        return;
      }
      l(h.target.value);
    }, 350),
    // Adjust the debounce delay as needed
    []
  );
  return /* @__PURE__ */ g(It, { modal: !0, children: [
    /* @__PURE__ */ i(Et, { asChild: !0, children: r }),
    /* @__PURE__ */ i(
      Tt,
      {
        align: "start",
        className: "richtext-size-full richtext-p-2",
        hideWhenDetached: !0,
        side: "bottom",
        children: e ? /* @__PURE__ */ g(V, { children: [
          /* @__PURE__ */ i("div", { className: "richtext-mb-[10px] richtext-w-full", children: /* @__PURE__ */ i(
            Q,
            {
              onChange: s,
              placeholder: "Search GIF",
              ref: c,
              type: "text"
            }
          ) }),
          /* @__PURE__ */ i("div", { className: "richtext-max-h-[280px] richtext-overflow-y-auto", children: /* @__PURE__ */ i("div", { className: "richtext-grid richtext-grid-cols-2 richtext-gap-1 ", children: n != null && n.length ? n == null ? void 0 : n.map((h) => /* @__PURE__ */ i(
            "img",
            {
              alt: "giphy",
              className: "richtext-cursor-pointer richtext-text-center",
              height: h.images.fixed_width_downsampled.height,
              onClick: () => t(h),
              src: h.images.fixed_width_downsampled.url,
              width: h.images.fixed_width_downsampled.width
            },
            `giphy-${h.id}`
          )) : /* @__PURE__ */ i("p", { children: "No GIFs found" }) }) })
        ] }) : /* @__PURE__ */ i("div", { children: /* @__PURE__ */ i("p", { children: "Missing Giphy API Key" }) })
      }
    )
  ] });
}
function Ja({ editor: t, icon: e, giphyApiKey: r, ...n }) {
  return /* @__PURE__ */ i(
    Za,
    {
      giphyApiKey: r,
      selectImage: (o) => {
        const { url: c } = o.images.original;
        t.chain().focus().setImageGif({ src: c }).run();
      },
      children: /* @__PURE__ */ i(
        O,
        {
          icon: e,
          tooltip: n == null ? void 0 : n.tooltip
        }
      )
    }
  );
}
const Kt = {
  TOP_LEFT: "tl",
  TOP_RIGHT: "tr",
  BOTTOM_LEFT: "bl",
  BOTTOM_RIGHT: "br"
};
function Qa(t) {
  var M, L;
  const [e, r] = S({
    width: xt,
    height: xt
  }), [n, a] = S({
    width: 0,
    height: 0
  }), [o] = S([
    Kt.TOP_LEFT,
    Kt.TOP_RIGHT,
    Kt.BOTTOM_LEFT,
    Kt.BOTTOM_RIGHT
  ]), [c, l] = S(!1), [s, h] = S({
    x: 0,
    y: 0,
    w: 0,
    h: 0,
    dir: ""
  }), { align: d } = (M = t == null ? void 0 : t.node) == null ? void 0 : M.attrs, u = U(() => {
    var R;
    const { src: N, alt: E, width: b, height: k } = (R = t == null ? void 0 : t.node) == null ? void 0 : R.attrs, _ = ae(b) ? `${b}px` : b, D = ae(k) ? `${k}px` : k;
    return {
      src: N || void 0,
      alt: E || void 0,
      style: {
        width: _ || void 0,
        height: D || void 0
      }
    };
  }, [(L = t == null ? void 0 : t.node) == null ? void 0 : L.attrs]), m = U(() => {
    const {
      style: { width: N }
    } = u;
    return { width: N === "100%" ? N : void 0 };
  }, [u]);
  function x(N) {
    a({
      width: N.target.width,
      height: N.target.height
    });
  }
  function w() {
    const { editor: N, getPos: E } = t;
    N.commands.setNodeSelection(E());
  }
  const p = H(
    ht(() => {
      const { editor: N } = t, { width: E } = getComputedStyle(N.view.dom);
      r((b) => ({
        ...b,
        width: Number.parseInt(E, 10)
      }));
    }, ft),
    [t == null ? void 0 : t.editor]
  );
  function f(N, E) {
    N.preventDefault(), N.stopPropagation();
    const b = n.width, k = n.height, _ = b / k;
    let D = Number(t.node.attrs.width), R = Number(t.node.attrs.height);
    const A = e.width;
    D && !R ? (D = D > A ? A : D, R = Math.round(D / _)) : R && !D ? (D = Math.round(R * _), D = D > A ? A : D) : !D && !R ? (D = b > A ? A : b, R = Math.round(D / _)) : D = D > A ? A : D, l(!0), h({
      x: N.clientX,
      y: N.clientY,
      w: D,
      h: R,
      dir: E
    });
  }
  const I = H(
    ht((N) => {
      if (N.preventDefault(), N.stopPropagation(), !c)
        return;
      const { x: E, w: b, dir: k } = s, _ = (N.clientX - E) * (/l/.test(k) ? -1 : 1), D = yr(b + _, he, e.width);
      t.updateAttributes({
        width: D,
        height: null
      });
    }, ft),
    [c, s, e, t.updateAttributes]
  ), T = H(
    (N) => {
      N.preventDefault(), N.stopPropagation(), c && (h({
        x: 0,
        y: 0,
        w: 0,
        h: 0,
        dir: ""
      }), l(!1), w());
    },
    [c, w]
  ), v = H(() => {
    document == null || document.addEventListener("mousemove", I, !0), document == null || document.addEventListener("mouseup", T, !0);
  }, [I, T]), y = H(() => {
    document == null || document.removeEventListener("mousemove", I, !0), document == null || document.removeEventListener("mouseup", T, !0);
  }, [I, T]);
  B(() => (c ? v() : y(), () => {
    y();
  }), [c, v, y]);
  const C = U(() => new ResizeObserver(() => p()), [p]);
  return B(() => (C.observe(t.editor.view.dom), () => {
    C.disconnect();
  }), [t.editor.view.dom, C]), /* @__PURE__ */ i(
    gt,
    {
      className: "image-view",
      style: { ...m, width: "100%", textAlign: d },
      children: /* @__PURE__ */ g(
        "div",
        {
          "data-drag-handle": !0,
          draggable: "true",
          style: m,
          className: `image-view__body ${t != null && t.selected ? "image-view__body--focused" : ""} ${c ? "image-view__body--resizing" : ""}`,
          children: [
            /* @__PURE__ */ i(
              "img",
              {
                alt: u.alt,
                className: "image-view__body__image block",
                height: "auto",
                onClick: w,
                onLoad: x,
                src: u.src,
                style: u.style
              }
            ),
            (t == null ? void 0 : t.editor.view.editable) && ((t == null ? void 0 : t.selected) || c) && /* @__PURE__ */ i("div", { className: "image-resizer", children: o == null ? void 0 : o.map((N) => /* @__PURE__ */ i(
              "span",
              {
                className: `image-resizer__handler image-resizer__handler--${N}`,
                onMouseDown: (E) => f(E, N)
              },
              `image-dir-${N}`
            )) })
          ]
        }
      )
    }
  );
}
const ei = de.extend({
  name: "imageGif",
  addOptions() {
    var t;
    return {
      ...(t = this.parent) == null ? void 0 : t.call(this),
      inline: !1,
      content: "",
      marks: "",
      group: "block",
      GIPHY_API_KEY: "",
      draggable: !1,
      selectable: !0,
      atom: !0,
      button: ({ editor: e, extension: r, t: n }) => {
        var o;
        const a = ((o = r == null ? void 0 : r.options) == null ? void 0 : o.GIPHY_API_KEY) || "";
        return {
          component: Ja,
          componentProps: {
            editor: e,
            action: () => {
            },
            isActive: () => !1,
            disabled: !1,
            icon: "GifIcon",
            tooltip: n("editor.imageGif.tooltip"),
            giphyApiKey: a
          }
        };
      }
    };
  },
  addAttributes() {
    var t;
    return {
      ...(t = this.parent) == null ? void 0 : t.call(this),
      width: {
        default: null,
        parseHTML: (e) => {
          const r = e.style.width || e.getAttribute("width") || "10";
          return r === void 0 ? null : Number.parseInt(`${r}`, 10);
        },
        renderHTML: (e) => ({
          width: e.width
        })
      },
      align: {
        default: "center",
        parseHTML: (e) => e.getAttribute("align"),
        renderHTML: (e) => ({
          align: e.align
        })
      }
    };
  },
  addNodeView() {
    return pt(Qa);
  },
  addCommands() {
    var t;
    return {
      ...(t = this.parent) == null ? void 0 : t.call(this),
      setImageGif: (e) => ({ commands: r }) => r.insertContent({
        type: this.name,
        attrs: e
      }),
      updateImageGif: (e) => ({ commands: r }) => r.updateAttributes(this.name, e),
      setAlignImageGif: (e) => ({ commands: r }) => r.updateAttributes(this.name, { align: e })
    };
  },
  renderHTML({ HTMLAttributes: t }) {
    const { align: e } = t;
    return [
      "div",
      // Parent element
      {
        style: e ? `text-align: ${e};` : "",
        class: "imageGIf"
      },
      [
        "img",
        st(
          // Always render the `height="auto"`
          {
            height: "auto"
          },
          this.options.HTMLAttributes,
          t
        )
      ]
    ];
  },
  parseHTML() {
    return [
      {
        tag: "div[class=imageGIf]",
        getAttrs: (t) => {
          const e = t.querySelector("img"), r = e == null ? void 0 : e.getAttribute("width");
          return {
            src: e == null ? void 0 : e.getAttribute("src"),
            alt: e == null ? void 0 : e.getAttribute("alt"),
            title: e == null ? void 0 : e.getAttribute("title"),
            width: r ? Number.parseInt(r, 10) : null,
            align: (e == null ? void 0 : e.getAttribute("align")) || t.style.textAlign || null
          };
        }
      }
    ];
  }
});
function fe(t = 8) {
  return Math.random().toString(36).substring(2, t + 2);
}
const nr = `graph TB
a-->b`, tc = ({ editor: t, upload: e }) => {
  const [r, n] = S(nr), [a, o] = S(""), [c, l] = S(!1), s = J(null), h = async (m) => {
    try {
      const { svg: x } = await ce.render("mermaid-svg", m);
      o(x);
    } catch {
      o("");
    }
  }, d = () => {
    ce.initialize({
      darkMode: !1,
      startOnLoad: !1,
      // fontFamily:'',
      fontSize: 12,
      theme: "base"
    }), h(r);
  };
  return B(() => {
    c && d();
  }, [c]), B(() => {
    c && h(r);
  }, [r]), /* @__PURE__ */ g(
    ut,
    {
      onOpenChange: l,
      open: c,
      children: [
        /* @__PURE__ */ i(mt, { asChild: !0, children: /* @__PURE__ */ i(
          O,
          {
            action: () => l(!0),
            icon: "Mermaid",
            tooltip: "Mermaid"
          }
        ) }),
        /* @__PURE__ */ g(lt, { className: "richtext-z-[99999] !richtext-max-w-[1300px]", children: [
          /* @__PURE__ */ i(dt, { children: "Mermaid" }),
          /* @__PURE__ */ i("div", { style: { height: "100%", borderWidth: 1 }, children: /* @__PURE__ */ g("div", { className: "richtext-flex richtext-gap-[10px] richtext-rounded-[10px] richtext-p-[10px]", children: [
            /* @__PURE__ */ i(
              jt,
              {
                autoFocus: !0,
                className: "richtext-flex-1",
                defaultValue: nr,
                onChange: (m) => n(m.target.value),
                placeholder: "Text",
                required: !0,
                rows: 10,
                value: r,
                style: {
                  color: "hsl(var(--richtext-foreground))"
                }
              }
            ),
            /* @__PURE__ */ i(
              "div",
              {
                className: "richtext-flex richtext-flex-1 richtext-items-center richtext-justify-center richtext-rounded-[10px] richtext-p-[10px]",
                dangerouslySetInnerHTML: { __html: a },
                ref: s,
                style: { height: "100%", borderWidth: 1, minHeight: 500, background: "#fff" }
              }
            )
          ] }) }),
          /* @__PURE__ */ i(wt, { children: /* @__PURE__ */ i(
            G,
            {
              onClick: async () => {
                if (r !== "") {
                  if (r) {
                    const m = s.current.querySelector("svg"), { width: x, height: w } = m.getBoundingClientRect(), p = `mermaid-${fe()}.svg`;
                    let f = me(m.outerHTML);
                    if (e) {
                      const I = qt(f, p);
                      f = await e(I);
                    }
                    t == null || t.chain().focus().setMermaid(
                      {
                        type: "mermaid",
                        src: f,
                        alt: encodeURIComponent(r),
                        width: x,
                        height: w
                      },
                      !!r
                    ).run();
                  }
                  l(!1);
                }
              },
              type: "button",
              children: "Save changes"
            }
          ) })
        ] })
      ]
    }
  );
}, Zt = {
  TOP_LEFT: "tl",
  TOP_RIGHT: "tr",
  BOTTOM_LEFT: "bl",
  BOTTOM_RIGHT: "br"
};
function ec({ editor: t, node: e, updateAttributes: r, getPos: n, selected: a }) {
  const [o, c] = S({
    width: xt,
    height: xt
  }), [l, s] = S({
    width: 0,
    height: 0
  }), [h] = S([
    Zt.TOP_LEFT,
    Zt.TOP_RIGHT,
    Zt.BOTTOM_LEFT,
    Zt.BOTTOM_RIGHT
  ]), [d, u] = S(!1), [m, x] = S({
    x: 0,
    y: 0,
    w: 0,
    h: 0,
    dir: ""
  }), { align: w } = e == null ? void 0 : e.attrs, p = U(() => {
    const { src: b, alt: k, width: _, height: D } = e == null ? void 0 : e.attrs, R = ie(_) ? `${_}px` : _, A = ie(D) ? `${D}px` : D;
    return {
      src: b || void 0,
      alt: k || void 0,
      style: {
        width: R || void 0,
        height: A || void 0
      }
    };
  }, [e == null ? void 0 : e.attrs]), f = U(() => {
    const {
      style: { width: b }
    } = p;
    return { width: b === "100%" ? b : void 0 };
  }, [p]);
  function I(b) {
    s({
      width: b.target.width,
      height: b.target.height
    });
  }
  function T() {
    t.commands.setNodeSelection(n());
  }
  const v = H(
    ht(() => {
      const { width: b } = getComputedStyle(t.view.dom);
      c((k) => ({
        ...k,
        width: Number.parseInt(b, 10)
      }));
    }, ft),
    [t]
  );
  function y(b, k) {
    b.preventDefault(), b.stopPropagation();
    const _ = l.width, D = l.height, R = _ / D;
    let A = Number(e.attrs.width), $ = Number(e.attrs.height);
    const F = o.width;
    A && !$ ? (A = A > F ? F : A, $ = Math.round(A / R)) : $ && !A ? (A = Math.round($ * R), A = A > F ? F : A) : !A && !$ ? (A = _ > F ? F : _, $ = Math.round(A / R)) : A = A > F ? F : A, u(!0), x({
      x: b.clientX,
      y: b.clientY,
      w: A,
      h: $,
      dir: k
    });
  }
  const C = H(
    ht((b) => {
      if (b.preventDefault(), b.stopPropagation(), !d)
        return;
      const { x: k, w: _, dir: D } = m, R = (b.clientX - k) * (/l/.test(D) ? -1 : 1), { width: A, height: $ } = e == null ? void 0 : e.attrs, F = A / $, Y = $e(_ + R, he, o.width), nt = Math.round(Y / F);
      r({
        width: Y,
        height: nt
      });
    }, ft),
    [d, m, o, r, e == null ? void 0 : e.attrs]
  ), M = H(
    (b) => {
      b.preventDefault(), b.stopPropagation(), d && (x({
        x: 0,
        y: 0,
        w: 0,
        h: 0,
        dir: ""
      }), u(!1), T());
    },
    [d, T]
  ), L = H(() => {
    document == null || document.addEventListener("mousemove", C, !0), document == null || document.addEventListener("mouseup", M, !0);
  }, [C, M]), N = H(() => {
    document == null || document.removeEventListener("mousemove", C, !0), document == null || document.removeEventListener("mouseup", M, !0);
  }, [C, M]);
  B(() => (d ? L() : N(), () => {
    N();
  }), [d, L, N]);
  const E = U(() => new ResizeObserver(() => v()), [v]);
  return B(() => (E.observe(t.view.dom), () => {
    E.disconnect();
  }), [t.view.dom, E]), /* @__PURE__ */ i(
    gt,
    {
      className: "image-view",
      style: { ...f, width: "100%", textAlign: w },
      children: /* @__PURE__ */ g(
        "div",
        {
          "data-drag-handle": !0,
          draggable: "true",
          style: { ...f, background: "#fff" },
          className: `image-view__body ${a ? "image-view__body--focused" : ""} ${d ? "image-view__body--resizing" : ""}`,
          children: [
            /* @__PURE__ */ i(
              "img",
              {
                alt: p.alt,
                className: "image-view__body__image block",
                height: "auto",
                onClick: T,
                onLoad: I,
                src: p.src,
                style: p.style
              }
            ),
            t.view.editable && (a || d) && /* @__PURE__ */ i("div", { className: "image-resizer", children: h == null ? void 0 : h.map((b) => /* @__PURE__ */ i(
              "span",
              {
                className: `image-resizer__handler image-resizer__handler--${b}`,
                onMouseDown: (k) => y(k, b)
              },
              `image-dir-${b}`
            )) })
          ]
        }
      )
    }
  );
}
const or = de.extend({
  name: "mermaid",
  addOptions() {
    var t;
    return {
      ...(t = this.parent) == null ? void 0 : t.call(this),
      inline: !1,
      content: "",
      marks: "",
      group: "block",
      draggable: !1,
      selectable: !0,
      atom: !0,
      HTMLAttributes: {
        class: "mermaid"
      },
      button: ({ editor: e, t: r, extension: n }) => {
        var a;
        return {
          component: tc,
          componentProps: {
            action: () => !0,
            isActive: () => !1,
            disabled: !1,
            editor: e,
            icon: "Mermaid",
            tooltip: r("editor.mermaid.tooltip"),
            upload: (a = n == null ? void 0 : n.options) == null ? void 0 : a.upload
          }
        };
      }
    };
  },
  addAttributes() {
    var t;
    return {
      ...(t = this.parent) == null ? void 0 : t.call(this),
      width: {
        default: null,
        parseHTML: (e) => {
          const r = e.querySelector("img"), n = r == null ? void 0 : r.getAttribute("width");
          return n ? Number.parseInt(n, 10) : 320;
        },
        renderHTML: (e) => ({
          width: e.width
        })
      },
      height: {
        default: null,
        parseHTML: (e) => {
          const r = e.querySelector("img"), n = r == null ? void 0 : r.getAttribute("height");
          return n ? Number.parseInt(n, 10) : 212;
        },
        renderHTML: (e) => ({
          height: e.height
        })
      },
      align: {
        default: "center",
        parseHTML: (e) => e.getAttribute("align"),
        renderHTML: (e) => ({
          align: e.align
        })
      }
    };
  },
  addNodeView() {
    return pt(ec);
  },
  // @ts-ignore
  addCommands() {
    return {
      setMermaid: (t, e) => ({ commands: r, editor: n }) => e ? r.insertContent({
        type: this.name,
        attrs: t
      }) : r.insertContentAt(n.state.selection.anchor, {
        type: this.name,
        attrs: t
      }),
      setAlignImageMermaid: (t) => ({ commands: e }) => e.updateAttributes(this.name, { align: t })
    };
  },
  renderHTML({ HTMLAttributes: t }) {
    const { align: e } = t;
    return [
      "div",
      // Parent element
      {
        style: e ? `text-align: ${e};` : "",
        class: "imageMermaid"
      },
      [
        "img",
        st(
          // @ts-ignore
          this.options.HTMLAttributes,
          t
        )
      ]
    ];
  },
  parseHTML() {
    return [
      {
        tag: "div[class=imageMermaid]",
        getAttrs: (t) => {
          const e = t.querySelector("img"), r = e == null ? void 0 : e.getAttribute("width"), n = e == null ? void 0 : e.getAttribute("height");
          return {
            src: e == null ? void 0 : e.getAttribute("src"),
            alt: e == null ? void 0 : e.getAttribute("alt"),
            width: r ? Number.parseInt(r, 10) : null,
            height: n ? Number.parseInt(n, 10) : null,
            align: (e == null ? void 0 : e.getAttribute("align")) || t.style.textAlign || null
          };
        }
      }
    ];
  }
});
function rc({ node: t }) {
  var n;
  const e = ((n = t == null ? void 0 : t.attrs) == null ? void 0 : n.src) || "", r = e == null ? void 0 : e.split("/").pop();
  return r ? /* @__PURE__ */ i(gt, { children: /* @__PURE__ */ i("div", { "data-twitter": "", children: /* @__PURE__ */ i(Di, { id: r }) }) }) : null;
}
function ri(t) {
  const { t: e } = q(), [r, n] = S("");
  B(() => {
    var o;
    if (t != null && t.editor) {
      const { src: c } = (o = t.editor) == null ? void 0 : o.getAttributes(Le.name);
      c && n(c);
    }
  }, [t == null ? void 0 : t.editor]);
  function a(o) {
    o.preventDefault(), o.stopPropagation(), t == null || t.onSetLink(r);
  }
  return /* @__PURE__ */ i("div", { className: "border-neutral-200 richtext-rounded-lg !richtext-border richtext-bg-white richtext-p-2 richtext-shadow-sm dark:richtext-border-neutral-800 dark:richtext-bg-black", children: /* @__PURE__ */ g(
    "form",
    {
      className: "richtext-flex richtext-flex-col richtext-gap-2",
      onSubmit: a,
      children: [
        /* @__PURE__ */ i(ct, { className: "mb-[6px]", children: e("editor.link.dialog.text") }),
        /* @__PURE__ */ i("div", { className: "richtext-mb-[10px] richtext-flex richtext-w-full richtext-max-w-sm richtext-items-center richtext-gap-1.5", children: /* @__PURE__ */ i("div", { className: "richtext-relative richtext-w-full richtext-max-w-sm richtext-items-center", children: /* @__PURE__ */ i(
          Q,
          {
            className: "richtext-w-80",
            onChange: (o) => n(o.target.value),
            placeholder: "Text",
            required: !0,
            type: "text",
            value: r
          }
        ) }) }),
        /* @__PURE__ */ i(
          G,
          {
            className: "richtext-mt-2 richtext-self-end",
            type: "submit",
            children: e("editor.link.dialog.button.apply")
          }
        )
      ]
    }
  ) });
}
function ic(t) {
  function e(r) {
    t.action && t.action(r);
  }
  return /* @__PURE__ */ g(It, { modal: !0, children: [
    /* @__PURE__ */ i(Et, { disabled: t == null ? void 0 : t.disabled, asChild: !0, children: /* @__PURE__ */ i(
      O,
      {
        tooltip: t == null ? void 0 : t.tooltip,
        isActive: t == null ? void 0 : t.isActive,
        disabled: t == null ? void 0 : t.disabled,
        children: /* @__PURE__ */ i(K, { name: t == null ? void 0 : t.icon })
      }
    ) }),
    /* @__PURE__ */ i(Tt, { hideWhenDetached: !0, className: "richtext-w-full", align: "start", side: "bottom", children: /* @__PURE__ */ i(ri, { editor: t.editor, onSetLink: e }) })
  ] });
}
const nc = /(https?:\/\/)?(www\.)?x\.com\/(\w{1,15})(\/status\/(\d+))?(\/\S*)?/g, oc = /^https?:\/\/(www\.)?x\.com\/(\w{1,15})(\/status\/(\d+))?(\/\S*)?$/;
function ar(t) {
  return t.match(oc);
}
const Le = yt.create({
  name: "twitter",
  draggable: !0,
  selectable: !0,
  addOptions() {
    return {
      addPasteHandler: !0,
      HTMLAttributes: {},
      inline: !1,
      origin: "",
      button: ({ editor: t, t: e }) => ({
        component: ic,
        componentProps: {
          action: (r) => {
            t.commands.setTweet({ src: r });
          },
          isActive: () => !1,
          disabled: !1,
          icon: "Twitter",
          tooltip: e("editor.twitter.tooltip"),
          editor: t
        }
      })
    };
  },
  addNodeView() {
    return pt(rc, { attrs: this.options.HTMLAttributes });
  },
  inline() {
    return this.options.inline;
  },
  group() {
    return this.options.inline ? "inline" : "block";
  },
  addAttributes() {
    return {
      src: {
        default: null
      }
    };
  },
  parseHTML() {
    return [
      {
        tag: "div[data-twitter]"
      }
    ];
  },
  addCommands() {
    return {
      setTweet: (t) => ({ commands: e }) => ar(t.src) ? e.insertContent({
        type: this.name,
        attrs: t
      }) : !1,
      updateTweet: (t) => ({ commands: e }) => ar(t.src) ? e.updateAttributes(this.name, { src: t.src }) : !1
    };
  },
  addPasteRules() {
    return this.options.addPasteHandler ? [
      Ti({
        find: nc,
        type: this.type,
        getAttributes: (t) => ({ src: t.input })
      })
    ] : [];
  },
  renderHTML({ HTMLAttributes: t }) {
    return ["div", st({ "data-twitter": "" }, t)];
  }
}), ac = "_wrapper_rraz2_1", cc = "_tool_rraz2_17", sc = "_active_rraz2_37", lc = "_pen_rraz2_41", dc = "_line_rraz2_48", hc = "_options_rraz2_56", uc = "_colorWrap_rraz2_66", mc = "_color_rraz2_66", xc = "_colorActive_rraz2_83", z = {
  wrapper: ac,
  tool: cc,
  active: sc,
  pen: lc,
  line: dc,
  options: hc,
  colorWrap: uc,
  color: mc,
  colorActive: xc
};
function fc(t) {
  return /* @__PURE__ */ i(
    "svg",
    {
      height: "1em",
      viewBox: "0 0 24 24",
      width: "1em",
      xmlns: "http://www.w3.org/2000/svg",
      ...t,
      children: /* @__PURE__ */ i(
        "path",
        {
          color: "currentColor",
          d: "M2 9.2v3.6M12.8 2H9.2M7.5 20H9M20 7.5V9M2.133 4.699c.155-.727.415-1.274.854-1.712c.426-.426.954-.684 1.652-.84m15.228 2.552c-.155-.727-.415-1.274-.854-1.712c-.417-.417-.932-.673-1.608-.83M4.64 19.853c-.698-.156-1.226-.414-1.652-.84c-.43-.43-.69-.965-.845-1.673m11.638 3.626c-1.812.125-3.607-8.326-2.374-9.559s9.684.561 9.559 2.373c-.087 1.187-2.095 1.656-2.037 2.711c.018.309.408.59 1.188 1.154c.543.39 1.096.77 1.629 1.175a.66.66 0 0 1 .234.687a3.35 3.35 0 0 1-2.472 2.473a.66.66 0 0 1-.688-.235c-.404-.533-.784-1.086-1.175-1.628c-.563-.78-.844-1.17-1.153-1.188c-1.055-.059-1.524 1.95-2.71 2.037",
          fill: "none",
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: "1.5"
        }
      )
    }
  );
}
function gc(t) {
  return /* @__PURE__ */ i(
    "svg",
    {
      height: "1em",
      viewBox: "0 0 24 24",
      width: "1em",
      xmlns: "http://www.w3.org/2000/svg",
      ...t,
      children: /* @__PURE__ */ i(
        "path",
        {
          d: "M20.06 18a4 4 0 0 1-.2-.89c-.67.7-1.48 1.05-2.41 1.05c-.83 0-1.52-.24-2.05-.71c-.53-.45-.8-1.06-.8-1.79c0-.88.33-1.56 1-2.05s1.61-.73 2.83-.73h1.4v-.64q0-.735-.45-1.17c-.3-.29-.75-.43-1.33-.43c-.52 0-.95.12-1.3.36c-.35.25-.52.54-.52.89h-1.46c0-.43.15-.84.45-1.24c.28-.4.71-.71 1.22-.94c.51-.21 1.06-.35 1.69-.35c.98 0 1.74.24 2.29.73s.84 1.16.86 2.02V16c0 .8.1 1.42.3 1.88V18zm-2.4-1.12c.45 0 .88-.11 1.29-.32c.4-.21.7-.49.88-.83v-1.57H18.7c-1.77 0-2.66.47-2.66 1.41c0 .43.15.73.46.96c.3.23.68.35 1.16.35m-12.2-3.17h4.07L7.5 8.29zM6.64 6h1.72l4.71 12h-1.93l-.97-2.57H4.82L3.86 18H1.93z",
          fill: "currentColor"
        }
      )
    }
  );
}
function pc(t) {
  return /* @__PURE__ */ i(
    "svg",
    {
      height: "1em",
      viewBox: "0 0 24 24",
      width: "1em",
      xmlns: "http://www.w3.org/2000/svg",
      ...t,
      children: /* @__PURE__ */ i(
        "path",
        {
          d: "M3 21v-4.25L16.2 3.575q.3-.275.663-.425t.762-.15t.775.15t.65.45L20.425 5q.3.275.438.65T21 6.4q0 .4-.137.763t-.438.662L7.25 21zM17.6 7.8L19 6.4L17.6 5l-1.4 1.4z",
          fill: "currentColor"
        }
      )
    }
  );
}
function wc(t) {
  return /* @__PURE__ */ i(
    "svg",
    {
      height: "1em",
      viewBox: "0 0 256 256",
      width: "1em",
      xmlns: "http://www.w3.org/2000/svg",
      ...t,
      children: /* @__PURE__ */ i(
        "path",
        {
          d: "M253.66 106.34a8 8 0 0 0-11.32 0L192 156.69L107.31 72l50.35-50.34a8 8 0 1 0-11.32-11.32L96 60.69a16 16 0 0 0-2.82 18.81L72 100.69a16 16 0 0 0 0 22.62l4.69 4.69l-58.35 58.34a8 8 0 0 0 3.13 13.25l72 24A7.9 7.9 0 0 0 96 224a8 8 0 0 0 5.66-2.34L136 187.31l4.69 4.69a16 16 0 0 0 22.62 0l21.19-21.18a16 16 0 0 0 18.81-2.82l50.35-50.34a8 8 0 0 0 0-11.32M93.84 206.85l-55-18.35L88 139.31L124.69 176ZM152 180.69L83.31 112L104 91.31L172.69 160Z",
          fill: "currentColor"
        }
      )
    }
  );
}
function vc(t) {
  return /* @__PURE__ */ g(
    "svg",
    {
      height: "1em",
      viewBox: "0 0 16 16",
      width: "1em",
      xmlns: "http://www.w3.org/2000/svg",
      ...t,
      children: [
        /* @__PURE__ */ i(
          "path",
          {
            d: "m2.648 9.937l7.29-7.288a2.21 2.21 0 0 1 3.124 0l2.29 2.288a2.21 2.21 0 0 1 0 3.126L10.413 13H12.5a.5.5 0 0 1 0 1H4.501a2.2 2.2 0 0 1-1.563-.647l.707-.707c.227.226.535.354.856.354h4.005a1.2 1.2 0 0 0 .848-.354l1.292-1.293l-4-4l-3.29 3.291a1.21 1.21 0 0 0 0 1.712l.29.29l-.708.707l-.29-.29a2.21 2.21 0 0 1 0-3.126M8 6h6.89a1.2 1.2 0 0 0-.246-.356L14 5H9zm2-2h3l-.645-.644a1.21 1.21 0 0 0-1.71 0zm4.89 3H7.708l1 1H14l.644-.644A1.2 1.2 0 0 0 14.891 7zM9.708 9l1.646 1.646L13 9z",
            fill: "currentColor"
          }
        ),
        /* @__PURE__ */ i(
          "path",
          {
            d: "M14 11.5a.5.5 0 1 1-1 0a.5.5 0 0 1 1 0m1.5-.5a.5.5 0 1 0 0-1a.5.5 0 0 0 0 1m-1 2a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1z",
            fill: "currentColor"
          }
        )
      ]
    }
  );
}
function bc(t) {
  return /* @__PURE__ */ i(
    "svg",
    {
      height: "1em",
      viewBox: "0 0 24 24",
      width: "1em",
      xmlns: "http://www.w3.org/2000/svg",
      ...t,
      children: /* @__PURE__ */ i(
        "path",
        {
          d: "M3 3h18v18H3zm2 2v14h14V5z",
          fill: "currentColor"
        }
      )
    }
  );
}
function yc(t) {
  return /* @__PURE__ */ i(
    "svg",
    {
      height: "1em",
      viewBox: "0 0 24 24",
      width: "1em",
      xmlns: "http://www.w3.org/2000/svg",
      ...t,
      children: /* @__PURE__ */ i(
        "path",
        {
          d: "M2 20V4h20v16zm2-2h16V6H4zm0 0V6z",
          fill: "currentColor"
        }
      )
    }
  );
}
function Cc(t) {
  return /* @__PURE__ */ i(
    "svg",
    {
      height: "1em",
      viewBox: "0 0 24 24",
      width: "1em",
      xmlns: "http://www.w3.org/2000/svg",
      ...t,
      children: /* @__PURE__ */ i(
        "path",
        {
          d: "M12 22q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22m0-2q3.35 0 5.675-2.325T20 12t-2.325-5.675T12 4T6.325 6.325T4 12t2.325 5.675T12 20m0-8",
          fill: "currentColor"
        }
      )
    }
  );
}
function Tc(t) {
  return /* @__PURE__ */ i(
    "svg",
    {
      height: "1em",
      viewBox: "0 0 24 24",
      width: "1em",
      xmlns: "http://www.w3.org/2000/svg",
      ...t,
      children: /* @__PURE__ */ i(
        "path",
        {
          d: "M10.363 3.591L2.257 17.125a1.914 1.914 0 0 0 1.636 2.871h16.214a1.914 1.914 0 0 0 1.636-2.87L13.637 3.59a1.914 1.914 0 0 0-3.274 0z",
          fill: "none",
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: "2"
        }
      )
    }
  );
}
function Nc(t) {
  return /* @__PURE__ */ i(
    "svg",
    {
      height: "1em",
      viewBox: "0 0 24 24",
      width: "1em",
      xmlns: "http://www.w3.org/2000/svg",
      ...t,
      children: /* @__PURE__ */ i(
        "path",
        {
          d: "m6.8 21l-5.2-9l5.2-9h10.4l5.2 9l-5.2 9zm1.15-2h8.1l4.025-7l-4.025-7h-8.1L3.9 12zM12 12",
          fill: "currentColor"
        }
      )
    }
  );
}
function kc(t) {
  return /* @__PURE__ */ i(
    "svg",
    {
      height: "1em",
      viewBox: "0 0 24 24",
      width: "1em",
      xmlns: "http://www.w3.org/2000/svg",
      ...t,
      children: /* @__PURE__ */ g(
        "g",
        {
          fill: "none",
          fillRule: "evenodd",
          children: [
            /* @__PURE__ */ i("path", { d: "m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z" }),
            /* @__PURE__ */ i(
              "path",
              {
                d: "M10.586 2.807a2 2 0 0 1 2.828 0l7.778 7.779a2 2 0 0 1 0 2.828l-7.778 7.778a2 2 0 0 1-2.828 0l-7.778-7.778a2 2 0 0 1 0-2.828zM12 4.222L4.222 12L12 19.778L19.778 12z",
                fill: "currentColor"
              }
            )
          ]
        }
      )
    }
  );
}
function Sc(t) {
  return /* @__PURE__ */ i(
    "svg",
    {
      height: "1em",
      viewBox: "0 0 24 24",
      width: "1em",
      xmlns: "http://www.w3.org/2000/svg",
      ...t,
      children: /* @__PURE__ */ i(
        "path",
        {
          d: "M16.01 11H4v2h12.01v3L20 12l-3.99-4z",
          fill: "currentColor"
        }
      )
    }
  );
}
function Mc(t) {
  return /* @__PURE__ */ i(
    "svg",
    {
      height: "1em",
      viewBox: "0 0 24 24",
      width: "1em",
      xmlns: "http://www.w3.org/2000/svg",
      ...t,
      children: /* @__PURE__ */ i(
        "path",
        {
          clipRule: "evenodd",
          d: "M7.53 3.47a.75.75 0 0 1 0 1.06L5.81 6.25H15a5.75 5.75 0 0 1 0 11.5H8a.75.75 0 0 1 0-1.5h7a4.25 4.25 0 0 0 0-8.5H5.81l1.72 1.72a.75.75 0 1 1-1.06 1.06l-3-3a.75.75 0 0 1 0-1.06l3-3a.75.75 0 0 1 1.06 0",
          fill: "currentColor",
          fillRule: "evenodd"
        }
      )
    }
  );
}
function Ac(t) {
  return /* @__PURE__ */ i(
    "svg",
    {
      height: "1em",
      viewBox: "0 0 24 24",
      width: "1em",
      xmlns: "http://www.w3.org/2000/svg",
      ...t,
      children: /* @__PURE__ */ i(
        "path",
        {
          clipRule: "evenodd",
          d: "M16.47 3.47a.75.75 0 0 1 1.06 0l3 3a.75.75 0 0 1 0 1.06l-3 3a.75.75 0 1 1-1.06-1.06l1.72-1.72H9a4.25 4.25 0 0 0 0 8.5h7a.75.75 0 0 1 0 1.5H9a5.75 5.75 0 0 1 0-11.5h9.19l-1.72-1.72a.75.75 0 0 1 0-1.06",
          fill: "currentColor",
          fillRule: "evenodd"
        }
      )
    }
  );
}
function Lc(t) {
  return /* @__PURE__ */ i(
    "svg",
    {
      height: "1em",
      viewBox: "0 0 24 24",
      width: "1em",
      xmlns: "http://www.w3.org/2000/svg",
      ...t,
      children: /* @__PURE__ */ i(
        "path",
        {
          d: "M7 21q-.825 0-1.412-.587T5 19V6H4V4h5V3h6v1h5v2h-1v13q0 .825-.587 1.413T17 21zm2-4h2V8H9zm4 0h2V8h-2z",
          fill: "currentColor"
        }
      )
    }
  );
}
function Ic(t) {
  return /* @__PURE__ */ i(
    "svg",
    {
      height: "1em",
      viewBox: "0 0 256 256",
      width: "1em",
      xmlns: "http://www.w3.org/2000/svg",
      ...t,
      children: /* @__PURE__ */ i(
        "path",
        {
          d: "M211.81 83.79a28 28 0 0 1-33.12 4.83l-90.07 90.07a28 28 0 1 1-44.43-6.48a28 28 0 0 1 33.12-4.83l90.07-90.07a28 28 0 1 1 44.43 6.48",
          fill: "currentColor"
        }
      )
    }
  );
}
function Ec(t) {
  return /* @__PURE__ */ i(
    "svg",
    {
      height: "1em",
      viewBox: "0 0 24 24",
      width: "1em",
      xmlns: "http://www.w3.org/2000/svg",
      ...t,
      children: /* @__PURE__ */ i(
        "path",
        {
          d: "M12 20.325q-.35 0-.712-.125t-.638-.4l-1.725-1.575q-2.65-2.425-4.788-4.812T2 8.15Q2 5.8 3.575 4.225T7.5 2.65q1.325 0 2.5.562t2 1.538q.825-.975 2-1.537t2.5-.563q2.35 0 3.925 1.575T22 8.15q0 2.875-2.125 5.275T15.05 18.25l-1.7 1.55q-.275.275-.637.4t-.713.125M11.05 6.75q-.725-1.025-1.55-1.563t-2-.537q-1.5 0-2.5 1t-1 2.5q0 1.3.925 2.763t2.213 2.837t2.65 2.575T12 18.3q.85-.775 2.213-1.975t2.65-2.575t2.212-2.837T20 8.15q0-1.5-1-2.5t-2.5-1q-1.175 0-2 .538T12.95 6.75q-.175.25-.425.375T12 7.25t-.525-.125t-.425-.375m.95 4.725",
          fill: "currentColor"
        }
      )
    }
  );
}
function zc(t) {
  return /* @__PURE__ */ i(
    "svg",
    {
      height: "1em",
      viewBox: "0 0 24 24",
      width: "1em",
      xmlns: "http://www.w3.org/2000/svg",
      ...t,
      children: /* @__PURE__ */ i(
        "path",
        {
          d: "m7.625 6.4l2.8-3.625q.3-.4.713-.587T12 2t.863.188t.712.587l2.8 3.625l4.25 1.425q.65.2 1.025.738t.375 1.187q0 .3-.088.6t-.287.575l-2.75 3.9l.1 4.1q.025.875-.575 1.475t-1.4.6q-.05 0-.55-.075L12 19.675l-4.475 1.25q-.125.05-.275.063T6.975 21q-.8 0-1.4-.6T5 18.925l.1-4.125l-2.725-3.875q-.2-.275-.288-.575T2 9.75q0-.625.363-1.162t1.012-.763zM8.85 8.125L4 9.725L7.1 14.2L7 18.975l5-1.375l5 1.4l-.1-4.8L20 9.775l-4.85-1.65L12 4zM12 11.5",
          fill: "currentColor"
        }
      )
    }
  );
}
function Pc(t) {
  return /* @__PURE__ */ i(
    "svg",
    {
      height: "1em",
      viewBox: "0 0 24 24",
      width: "1em",
      xmlns: "http://www.w3.org/2000/svg",
      ...t,
      children: /* @__PURE__ */ i(
        "path",
        {
          d: "M12.01 6c2.61 0 4.89 1.86 5.4 4.43l.3 1.5l1.52.11c1.56.11 2.78 1.41 2.78 2.96c0 1.65-1.35 3-3 3h-13c-2.21 0-4-1.79-4-4c0-2.05 1.53-3.76 3.56-3.97l1.07-.11l.5-.95A5.46 5.46 0 0 1 12.01 6m0-2C9.12 4 6.6 5.64 5.35 8.04C2.35 8.36.01 10.91.01 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5c0-2.64-2.05-4.78-4.64-4.96C18.68 6.59 15.65 4 12.01 4",
          fill: "currentColor"
        }
      )
    }
  );
}
function Rc(t) {
  return /* @__PURE__ */ i(
    "svg",
    {
      height: "1em",
      viewBox: "0 0 24 24",
      width: "1em",
      xmlns: "http://www.w3.org/2000/svg",
      ...t,
      children: /* @__PURE__ */ i(
        "path",
        {
          d: "M5.586 6.45A2 2 0 0 1 7.509 5h11.84a2 2 0 0 1 1.923 2.55l-2.858 10A2 2 0 0 1 16.491 19H4.651a2 2 0 0 1-1.923-2.55z",
          fill: "none",
          stroke: "currentColor",
          strokeWidth: "2"
        }
      )
    }
  );
}
const Oc = [
  j.blackHighlight,
  j.ofRGBA(166 / 255, 81 / 255, 167 / 255, 0.3),
  j.ofRGBA(247 / 255, 78 / 255, 158 / 255, 0.3),
  j.ofRGBA(166 / 255, 83 / 255, 88 / 255, 0.3),
  j.ofRGBA(246 / 255, 130 / 255, 28 / 255, 0.3),
  j.ofRGBA(166 / 255, 198 / 255, 0, 0.3),
  j.ofRGBA(98 / 255, 186 / 255, 70 / 255, 0.3)
], cr = [
  j.black,
  j.fromHex("#007AFF"),
  j.fromHex("#A651A7"),
  j.fromHex("#F74E9E"),
  j.fromHex("#FF5358"),
  j.fromHex("#F6821C"),
  j.fromHex("#FFC600"),
  j.fromHex("#62BA46"),
  j.fromHex("#E6BFE8"),
  j.fromHex("#FEA3D2"),
  j.fromHex("#FFA0A3"),
  j.fromHex("#FBC276"),
  j.fromHex("#FFFB85"),
  j.fromHex("#AADC99")
];
function Hc({ onChange: t }) {
  const [e, r] = S(j.blackHighlight);
  return /* @__PURE__ */ i("div", { className: z.colorWrap, children: Oc.map((n, a) => /* @__PURE__ */ i(
    "button",
    {
      style: { backgroundColor: n.toHexString() },
      className: P(z.color, {
        [z.colorActive]: e.toHexString() === n.toHexString()
      }),
      onClick: () => {
        r(n), t(n);
      }
    },
    a
  )) });
}
function Ie({ onChange: t }) {
  const [e, r] = S(j.black);
  return /* @__PURE__ */ g(V, { children: [
    /* @__PURE__ */ i("div", { className: z.colorWrap, children: cr.slice(0, 7).map((n, a) => /* @__PURE__ */ i(
      "button",
      {
        style: { backgroundColor: n.toHexString() },
        className: P(z.color, {
          [z.colorActive]: e.toHexString() === n.toHexString()
        }),
        onClick: () => {
          r(n), t(n);
        }
      },
      a
    )) }),
    /* @__PURE__ */ i("div", { className: z.colorWrap, children: cr.slice(7).map((n, a) => /* @__PURE__ */ i(
      "button",
      {
        style: { backgroundColor: n.toHexString() },
        className: P(z.color, {
          [z.colorActive]: e.toHexString() === n.toHexString()
        }),
        onClick: () => {
          r(n), t(n);
        }
      },
      a
    )) })
  ] });
}
function Dc({ setColorPen: t, setThicknessPen: e }) {
  const [r, n] = S(2);
  return /* @__PURE__ */ g("div", { className: z.options, children: [
    /* @__PURE__ */ i("div", { children: /* @__PURE__ */ i(
      Ie,
      {
        onChange: (a) => t(a)
      }
    ) }),
    /* @__PURE__ */ i("div", { className: z.line }),
    /* @__PURE__ */ i("div", { children: /* @__PURE__ */ i(
      "input",
      {
        max: 10,
        min: 1,
        step: 0.1,
        type: "range",
        value: r,
        onChange: (a) => {
          e(Number.parseFloat(a.target.value)), n(Number.parseFloat(a.target.value));
        }
      }
    ) })
  ] });
}
function _c({ setColorHighlight: t }) {
  return /* @__PURE__ */ i("div", { className: z.options, children: /* @__PURE__ */ i(
    Hc,
    {
      onChange: (e) => t(e)
    }
  ) });
}
function Bc({
  changeColorShape: t,
  changeBorderColorShape: e,
  onThicknessChange: r
}) {
  return /* @__PURE__ */ g("div", { className: z.options, children: [
    /* @__PURE__ */ i("div", { children: /* @__PURE__ */ i(
      Ie,
      {
        onChange: (n) => t(n)
      }
    ) }),
    /* @__PURE__ */ i("div", { className: z.line }),
    /* @__PURE__ */ i("div", { children: /* @__PURE__ */ i(
      Ie,
      {
        onChange: (n) => e(n)
      }
    ) }),
    /* @__PURE__ */ i("div", { className: z.line }),
    /* @__PURE__ */ i("div", { children: /* @__PURE__ */ i(
      "input",
      {
        defaultValue: 0,
        max: 20,
        min: 0,
        step: 1,
        type: "range",
        onChange: (n) => {
          r(Number.parseFloat(n.target.value));
        }
      }
    ) })
  ] });
}
function ii(t) {
  const {
    setColorPen: e,
    refEditor: r,
    setThicknessPen: n,
    setColorHighlight: a,
    changeBorderColorShape: o,
    onUndo: c,
    changeColorShape: l,
    changeShape: s,
    onThicknessChange: h,
    onRedo: d,
    onClear: u
  } = t, [m, x] = S(null), [w, p] = S(
    0
    /* square */
  );
  return /* @__PURE__ */ i(V, { children: /* @__PURE__ */ g(
    "div",
    {
      className: z.wrapper,
      children: [
        /* @__PURE__ */ g("div", { className: z.pen, children: [
          /* @__PURE__ */ i(
            "button",
            {
              className: P(z.tool, {
                [z.active]: m === "select"
              }),
              onClick: () => {
                const f = r.current.toolController.getPrimaryTools();
                if (m === "select") {
                  x(null), f[0].setEnabled(!1);
                  return;
                }
                x("select"), f[0].setEnabled(!0);
              },
              children: /* @__PURE__ */ i(fc, {})
            }
          ),
          /* @__PURE__ */ i("div", { className: z.line }),
          /* @__PURE__ */ i(
            "button",
            {
              className: P(z.tool, {
                [z.active]: m === "text"
              }),
              onClick: () => {
                const f = r.current.toolController.getPrimaryTools();
                if (r.current.toolController.setToolEnabled(f[1]), m === "text") {
                  f[1].setEnabled(!1), x(null);
                  return;
                }
                x("text"), f[1].setEnabled(!0);
              },
              children: /* @__PURE__ */ i(gc, {})
            }
          ),
          /* @__PURE__ */ i("div", { className: z.line }),
          /* @__PURE__ */ i(
            "button",
            {
              className: P(z.tool, {
                [z.active]: m === "pencil"
              }),
              onClick: () => {
                const f = r.current.toolController.getPrimaryTools();
                if (m === "pencil") {
                  x(null), f[2].setEnabled(!1);
                  return;
                }
                x("pencil"), f[2].setEnabled(!0);
              },
              children: /* @__PURE__ */ i(pc, {})
            }
          ),
          /* @__PURE__ */ i(
            "button",
            {
              className: P(z.tool, {
                [z.active]: m === "highlighter"
              }),
              onClick: () => {
                const f = r.current.toolController.getPrimaryTools();
                if (m === "highlighter") {
                  x(null), f[3].setEnabled(!1);
                  return;
                }
                x("highlighter"), f[3].setEnabled(!0);
              },
              children: /* @__PURE__ */ i(wc, {})
            }
          ),
          /* @__PURE__ */ i("div", { className: z.line }),
          /* @__PURE__ */ i(
            "button",
            {
              className: P(z.tool, {
                [z.active]: m === "eraser"
              }),
              onClick: () => {
                const f = r.current.toolController.getPrimaryTools();
                if (m === "eraser") {
                  x(null), f[4].setEnabled(!1);
                  return;
                }
                x("eraser"), f[4].setEnabled(!0);
              },
              children: /* @__PURE__ */ i(vc, {})
            }
          ),
          /* @__PURE__ */ i("div", { className: z.line }),
          /* @__PURE__ */ i(
            "button",
            {
              className: P(z.tool, {
                [z.active]: m === "shapes" && w === 0
                /* square */
              }),
              onClick: () => {
                const f = r.current.toolController.getPrimaryTools();
                r.current.toolController.setToolEnabled(f[5]), x("shapes"), f[5].setEnabled(!0), s(
                  0
                  /* square */
                ), p(
                  0
                  /* square */
                );
              },
              children: /* @__PURE__ */ i(bc, {})
            }
          ),
          /* @__PURE__ */ i(
            "button",
            {
              className: P(z.tool, {
                [z.active]: m === "shapes" && w === 1
                /* rectangle */
              }),
              onClick: () => {
                const f = r.current.toolController.getPrimaryTools();
                r.current.toolController.setToolEnabled(f[5]), x("shapes"), f[5].setEnabled(!0), s(
                  1
                  /* rectangle */
                ), p(
                  1
                  /* rectangle */
                );
              },
              children: /* @__PURE__ */ i(yc, {})
            }
          ),
          /* @__PURE__ */ i(
            "button",
            {
              className: P(z.tool, {
                [z.active]: m === "shapes" && w === 2
                /* circle */
              }),
              onClick: () => {
                const f = r.current.toolController.getPrimaryTools();
                r.current.toolController.setToolEnabled(f[5]), x("shapes"), f[5].setEnabled(!0), s(
                  2
                  /* circle */
                ), p(
                  2
                  /* circle */
                );
              },
              children: /* @__PURE__ */ i(Cc, {})
            }
          ),
          /* @__PURE__ */ i(
            "button",
            {
              className: P(z.tool, {
                [z.active]: m === "shapes" && w === 3
                /* triangle */
              }),
              onClick: () => {
                const f = r.current.toolController.getPrimaryTools();
                r.current.toolController.setToolEnabled(f[5]), x("shapes"), f[5].setEnabled(!0), s(
                  3
                  /* triangle */
                ), p(
                  3
                  /* triangle */
                );
              },
              children: /* @__PURE__ */ i(Tc, {})
            }
          ),
          /* @__PURE__ */ i(
            "button",
            {
              className: P(z.tool, {
                [z.active]: m === "shapes" && w === 4
                /* hexagonal */
              }),
              onClick: () => {
                const f = r.current.toolController.getPrimaryTools();
                r.current.toolController.setToolEnabled(f[5]), x("shapes"), f[5].setEnabled(!0), s(
                  4
                  /* hexagonal */
                ), p(
                  4
                  /* hexagonal */
                );
              },
              children: /* @__PURE__ */ i(Nc, {})
            }
          ),
          /* @__PURE__ */ i(
            "button",
            {
              className: P(z.tool, {
                [z.active]: m === "shapes" && w === 5
                /* diamond */
              }),
              onClick: () => {
                const f = r.current.toolController.getPrimaryTools();
                r.current.toolController.setToolEnabled(f[5]), x("shapes"), f[5].setEnabled(!0), s(
                  5
                  /* diamond */
                ), p(
                  5
                  /* diamond */
                );
              },
              children: /* @__PURE__ */ i(kc, {})
            }
          ),
          /* @__PURE__ */ i(
            "button",
            {
              className: P(z.tool, {
                [z.active]: m === "shapes" && w === 6
                /* arrow */
              }),
              onClick: () => {
                const f = r.current.toolController.getPrimaryTools();
                r.current.toolController.setToolEnabled(f[5]), x("shapes"), f[5].setEnabled(!0), s(
                  6
                  /* arrow */
                ), p(
                  6
                  /* arrow */
                );
              },
              children: /* @__PURE__ */ i(Sc, {})
            }
          ),
          /* @__PURE__ */ i(
            "button",
            {
              className: P(z.tool, {
                [z.active]: m === "shapes" && w === 7
                /* line */
              }),
              onClick: () => {
                const f = r.current.toolController.getPrimaryTools();
                r.current.toolController.setToolEnabled(f[5]), x("shapes"), f[5].setEnabled(!0), s(
                  7
                  /* line */
                ), p(
                  7
                  /* line */
                );
              },
              children: /* @__PURE__ */ i(Ic, {})
            }
          ),
          /* @__PURE__ */ i(
            "button",
            {
              className: P(z.tool, {
                [z.active]: m === "shapes" && w === 8
                /* heart */
              }),
              onClick: () => {
                const f = r.current.toolController.getPrimaryTools();
                r.current.toolController.setToolEnabled(f[5]), x("shapes"), f[5].setEnabled(!0), s(
                  8
                  /* heart */
                ), p(
                  8
                  /* heart */
                );
              },
              children: /* @__PURE__ */ i(Ec, {})
            }
          ),
          /* @__PURE__ */ i(
            "button",
            {
              className: P(z.tool, {
                [z.active]: m === "shapes" && w === 9
                /* star */
              }),
              onClick: () => {
                const f = r.current.toolController.getPrimaryTools();
                r.current.toolController.setToolEnabled(f[5]), x("shapes"), f[5].setEnabled(!0), s(
                  9
                  /* star */
                ), p(
                  9
                  /* star */
                );
              },
              children: /* @__PURE__ */ i(zc, {})
            }
          ),
          /* @__PURE__ */ i(
            "button",
            {
              className: P(z.tool, {
                [z.active]: m === "shapes" && w === 10
                /* cloud */
              }),
              onClick: () => {
                const f = r.current.toolController.getPrimaryTools();
                r.current.toolController.setToolEnabled(f[5]), x("shapes"), f[5].setEnabled(!0), s(
                  10
                  /* cloud */
                ), p(
                  10
                  /* cloud */
                );
              },
              children: /* @__PURE__ */ i(Pc, {})
            }
          ),
          /* @__PURE__ */ i(
            "button",
            {
              className: P(z.tool, {
                [z.active]: m === "shapes" && w === 11
                /* parallelogram */
              }),
              onClick: () => {
                const f = r.current.toolController.getPrimaryTools();
                r.current.toolController.setToolEnabled(f[5]), x("shapes"), f[5].setEnabled(!0), s(
                  11
                  /* parallelogram */
                ), p(
                  11
                  /* parallelogram */
                );
              },
              children: /* @__PURE__ */ i(Rc, {})
            }
          ),
          /* @__PURE__ */ i("div", { className: z.line }),
          /* @__PURE__ */ i(
            "button",
            {
              className: P(z.tool),
              onClick: c,
              children: /* @__PURE__ */ i(Mc, {})
            }
          ),
          /* @__PURE__ */ i(
            "button",
            {
              className: P(z.tool),
              onClick: d,
              children: /* @__PURE__ */ i(Ac, {})
            }
          ),
          /* @__PURE__ */ i(
            "button",
            {
              className: P(z.tool),
              onClick: u,
              children: /* @__PURE__ */ i(Lc, {})
            }
          )
        ] }),
        /* @__PURE__ */ g("div", { className: z.optionsWrap, children: [
          m === "pencil" && /* @__PURE__ */ i(
            Dc,
            {
              setColorPen: e,
              setThicknessPen: n
            }
          ),
          m === "highlighter" && /* @__PURE__ */ i(_c, { setColorHighlight: a }),
          m === "shapes" && /* @__PURE__ */ i(
            Bc,
            {
              changeBorderColorShape: o,
              changeColorShape: l,
              changeShape: s,
              onThicknessChange: h
            }
          )
        ] })
      ]
    }
  ) });
}
let Pt = !1;
const $c = ({ editor: t, upload: e }) => {
  const [r, n] = S(!1), a = J(null), o = J(null), c = () => {
    (async () => {
      const v = document.querySelector("#easydrawer");
      v && (a.current = new Lr(v, {
        wheelEventsEnabled: !1,
        disableZoom: !0
      }), o.current = Ir(a.current), o.current.addDefaultToolWidgets());
    })();
  };
  B(() => {
    r && setTimeout(() => {
      c();
    }, 200);
  }, [r]);
  const l = async () => {
    if (a.current) {
      const T = a.current.toSVG(), v = T.outerHTML, y = `drawer-${fe()}.svg`;
      let C = me(T.outerHTML);
      if (e) {
        const M = qt(C, y);
        C = await e(M);
      }
      t == null || t.chain().focus().setDrawer(
        {
          type: "drawer",
          src: C,
          alt: encodeURIComponent(v),
          width: 426,
          height: 212
        },
        !!v
      ).run();
    }
    n(!1);
  }, s = (T) => {
    const v = a.current.toolController.getPrimaryTools()[2], y = o.current.getWidgetById("pen-1");
    v && y && (v.setColor(T), y.serializeState());
  }, h = (T) => {
    const v = a.current.toolController.getPrimaryTools()[2], y = o.current.getWidgetById("pen-1");
    v && y && (v.setThickness(T), y.serializeState());
  }, d = (T) => {
    const v = a.current.toolController.getPrimaryTools()[3], y = o.current.getWidgetById("pen-2");
    v && y && (v.setColor(T), y.serializeState());
  }, u = (T) => {
    const v = o.current.getWidgetById("shape");
    v && v.setShapeType(T);
  }, m = (T) => {
    const v = a.current.toolController.getPrimaryTools()[5], y = o.current.getWidgetById("shape");
    v && y && (v.setColor(T), y.serializeState());
  }, x = (T) => {
    const v = a.current.toolController.getPrimaryTools()[5], y = o.current.getWidgetById("shape");
    v && y && (v.setThickness(T), y.serializeState());
  }, w = (T) => {
    const v = a.current.toolController.getPrimaryTools()[5], y = o.current.getWidgetById("shape");
    v && y && (v.setBorderColor(T), y.serializeState());
  }, p = () => {
    if (Pt) {
      for (; a.current.history.redoStackSize > 0; )
        a.current.history.redo();
      Pt = !1;
      return;
    }
    a.current.history.undo();
  };
  return /* @__PURE__ */ g(
    ut,
    {
      onOpenChange: n,
      open: r,
      children: [
        /* @__PURE__ */ i(mt, { asChild: !0, children: /* @__PURE__ */ i(
          O,
          {
            action: () => n(!0),
            icon: "PencilRuler",
            tooltip: "Drawer"
          }
        ) }),
        /* @__PURE__ */ g(lt, { className: "richtext-z-[99999] !richtext-max-w-[1300px]", children: [
          /* @__PURE__ */ i(dt, { children: "Drawer" }),
          /* @__PURE__ */ g("div", { style: { height: "600px", width: "100%", borderWidth: 1, background: "white", position: "relative" }, children: [
            /* @__PURE__ */ i(
              "div",
              {
                className: "richtext-size-full",
                id: "easydrawer"
              }
            ),
            /* @__PURE__ */ i(
              ii,
              {
                changeBorderColorShape: w,
                changeColorShape: m,
                changeShape: u,
                onClear: () => {
                  if (!Pt) {
                    for (; a.current.history.undoStackSize > 0; )
                      p();
                    Pt = !0;
                  }
                },
                onRedo: () => {
                  Pt || a.current.history.redo();
                },
                onThicknessChange: x,
                onUndo: p,
                refEditor: a,
                setColorHighlight: d,
                setColorPen: s,
                setThicknessPen: h
              }
            )
          ] }),
          /* @__PURE__ */ i(wt, { children: /* @__PURE__ */ i(
            G,
            {
              onClick: l,
              type: "button",
              children: "Save changes"
            }
          ) })
        ] })
      ]
    }
  );
}, Jt = {
  TOP_LEFT: "tl",
  TOP_RIGHT: "tr",
  BOTTOM_LEFT: "bl",
  BOTTOM_RIGHT: "br"
};
function Vc({ editor: t, node: e, updateAttributes: r, getPos: n, selected: a }) {
  const [o, c] = S({
    width: xt,
    height: xt
  }), [l, s] = S({
    width: 0,
    height: 0
  }), [h] = S([
    Jt.TOP_LEFT,
    Jt.TOP_RIGHT,
    Jt.BOTTOM_LEFT,
    Jt.BOTTOM_RIGHT
  ]), [d, u] = S(!1), [m, x] = S({
    x: 0,
    y: 0,
    w: 0,
    h: 0,
    dir: ""
  }), { align: w } = e == null ? void 0 : e.attrs, p = U(() => {
    const { src: b, alt: k, width: _, height: D } = e == null ? void 0 : e.attrs, R = ie(_) ? `${_}px` : _, A = ie(D) ? `${D}px` : D;
    return {
      src: b || void 0,
      alt: k || void 0,
      style: {
        width: R || void 0,
        height: A || void 0
      }
    };
  }, [e == null ? void 0 : e.attrs]), f = U(() => {
    const {
      style: { width: b }
    } = p;
    return { width: b === "100%" ? b : void 0 };
  }, [p]);
  function I(b) {
    s({
      width: b.target.width,
      height: b.target.height
    });
  }
  function T() {
    t.commands.setNodeSelection(n());
  }
  const v = H(
    ht(() => {
      const { width: b } = getComputedStyle(t.view.dom);
      c((k) => ({
        ...k,
        width: Number.parseInt(b, 10)
      }));
    }, ft),
    [t]
  );
  function y(b, k) {
    b.preventDefault(), b.stopPropagation();
    const _ = l.width, D = l.height, R = _ / D;
    let A = Number(e.attrs.width), $ = Number(e.attrs.height);
    const F = o.width;
    A && !$ ? (A = A > F ? F : A, $ = Math.round(A / R)) : $ && !A ? (A = Math.round($ * R), A = A > F ? F : A) : !A && !$ ? (A = _ > F ? F : _, $ = Math.round(A / R)) : A = A > F ? F : A, u(!0), x({
      x: b.clientX,
      y: b.clientY,
      w: A,
      h: $,
      dir: k
    });
  }
  const C = H(
    ht((b) => {
      if (b.preventDefault(), b.stopPropagation(), !d)
        return;
      const { x: k, w: _, dir: D } = m, R = (b.clientX - k) * (/l/.test(D) ? -1 : 1), { width: A, height: $ } = e == null ? void 0 : e.attrs, F = A / $, Y = $e(_ + R, he, o.width), nt = Math.round(Y / F);
      r({
        width: Y,
        height: nt
      });
    }, ft),
    [d, m, o, r, e == null ? void 0 : e.attrs]
  ), M = H(
    (b) => {
      b.preventDefault(), b.stopPropagation(), d && (x({
        x: 0,
        y: 0,
        w: 0,
        h: 0,
        dir: ""
      }), u(!1), T());
    },
    [d, T]
  ), L = H(() => {
    document == null || document.addEventListener("mousemove", C, !0), document == null || document.addEventListener("mouseup", M, !0);
  }, [C, M]), N = H(() => {
    document == null || document.removeEventListener("mousemove", C, !0), document == null || document.removeEventListener("mouseup", M, !0);
  }, [C, M]);
  B(() => (d ? L() : N(), () => {
    N();
  }), [d, L, N]);
  const E = U(() => new ResizeObserver(() => v()), [v]);
  return B(() => (E.observe(t.view.dom), () => {
    E.disconnect();
  }), [t.view.dom, E]), /* @__PURE__ */ i(
    gt,
    {
      className: "image-view",
      style: { ...f, width: "100%", textAlign: w },
      children: /* @__PURE__ */ g(
        "div",
        {
          "data-drag-handle": !0,
          draggable: "true",
          style: { ...f, background: "#fff" },
          className: `image-view__body ${a ? "image-view__body--focused" : ""} ${d ? "image-view__body--resizing" : ""}`,
          children: [
            /* @__PURE__ */ i(
              "img",
              {
                alt: p.alt,
                className: "image-view__body__image block",
                height: "auto",
                onClick: T,
                onLoad: I,
                src: p.src,
                style: p.style
              }
            ),
            t.view.editable && (a || d) && /* @__PURE__ */ i("div", { className: "image-resizer", children: h == null ? void 0 : h.map((b) => /* @__PURE__ */ i(
              "span",
              {
                className: `image-resizer__handler image-resizer__handler--${b}`,
                onMouseDown: (k) => y(k, b)
              },
              `image-dir-${b}`
            )) })
          ]
        }
      )
    }
  );
}
const sr = de.extend({
  name: "drawer",
  addOptions() {
    var t;
    return {
      ...(t = this.parent) == null ? void 0 : t.call(this),
      inline: !1,
      content: "",
      marks: "",
      group: "block",
      draggable: !1,
      selectable: !0,
      atom: !0,
      HTMLAttributes: {
        class: "drawer"
      },
      button: ({ editor: e, t: r, extension: n }) => {
        var a;
        return {
          component: $c,
          componentProps: {
            action: () => !0,
            isActive: () => !1,
            disabled: !1,
            editor: e,
            icon: "PencilRuler",
            tooltip: r("editor.drawer.tooltip"),
            upload: (a = n == null ? void 0 : n.options) == null ? void 0 : a.upload
          }
        };
      }
    };
  },
  addAttributes() {
    var t;
    return {
      ...(t = this.parent) == null ? void 0 : t.call(this),
      width: {
        default: null,
        parseHTML: (e) => {
          const r = e.querySelector("img"), n = r == null ? void 0 : r.getAttribute("width");
          return n ? Number.parseInt(n, 10) : 320;
        },
        renderHTML: (e) => ({
          width: e.width
        })
      },
      height: {
        default: null,
        parseHTML: (e) => {
          const r = e.querySelector("img"), n = r == null ? void 0 : r.getAttribute("height");
          return n ? Number.parseInt(n, 10) : 212;
        },
        renderHTML: (e) => ({
          height: e.height
        })
      },
      align: {
        default: "center",
        parseHTML: (e) => e.getAttribute("align"),
        renderHTML: (e) => ({
          align: e.align
        })
      }
    };
  },
  addNodeView() {
    return pt(Vc);
  },
  // @ts-ignore
  addCommands() {
    return {
      setDrawer: (t, e) => ({ commands: r, editor: n }) => e ? r.insertContent({
        type: this.name,
        attrs: t
      }) : r.insertContentAt(n.state.selection.anchor, {
        type: this.name,
        attrs: t
      }),
      setAlignImageDrawer: (t) => ({ commands: e }) => e.updateAttributes(this.name, { align: t })
    };
  },
  renderHTML({ HTMLAttributes: t }) {
    const { align: e } = t;
    return [
      "div",
      // Parent element
      {
        style: e ? `text-align: ${e};` : "",
        class: "imageDrawer"
      },
      [
        "img",
        st(
          // @ts-ignore
          this.options.HTMLAttributes,
          t
        )
      ]
    ];
  },
  parseHTML() {
    return [
      {
        tag: "div[class=imageDrawer]",
        getAttrs: (t) => {
          const e = t.querySelector("img"), r = e == null ? void 0 : e.getAttribute("width"), n = e == null ? void 0 : e.getAttribute("height");
          return {
            src: e == null ? void 0 : e.getAttribute("src"),
            alt: e == null ? void 0 : e.getAttribute("alt"),
            width: r ? Number.parseInt(r, 10) : null,
            height: n ? Number.parseInt(n, 10) : null,
            align: (e == null ? void 0 : e.getAttribute("align")) || t.style.textAlign || null
          };
        }
      }
    ];
  }
});
let Rt = !1;
function Wc({ editor: t, attrs: e, extension: r }) {
  const [n, a] = S(!1), o = J(null), c = J(null), { alt: l, align: s } = e, h = r == null ? void 0 : r.options.upload, d = () => {
    (async () => {
      const L = document.querySelector("#easydrawer");
      L && (o.current = new Lr(L, {
        wheelEventsEnabled: !1,
        disableZoom: !0
      }), c.current = Ir(o.current), c.current.addDefaultToolWidgets(), o.current.loadFromSVG(decodeURIComponent(l)));
    })();
  };
  B(() => {
    n && setTimeout(() => {
      d();
    }, 200);
  }, [n]);
  const u = async () => {
    if (o.current) {
      const M = o.current.toSVG(), L = M.outerHTML, N = `drawer-${fe()}.svg`;
      let E = me(M.outerHTML);
      if (h) {
        const b = qt(E, N);
        E = await h(b);
      }
      t == null || t.chain().focus().setDrawer(
        {
          type: "drawer",
          src: E,
          alt: encodeURIComponent(L),
          width: 426,
          height: 212
        },
        !!L
      ).run(), t == null || t.commands.setAlignImageDrawer(s);
    }
    a(!1);
  }, m = (M) => {
    const L = o.current.toolController.getPrimaryTools()[2], N = c.current.getWidgetById("pen-1");
    L && N && (L.setColor(M), N.serializeState());
  }, x = (M) => {
    const L = o.current.toolController.getPrimaryTools()[2], N = c.current.getWidgetById("pen-1");
    L && N && (L.setThickness(M), N.serializeState());
  }, w = (M) => {
    const L = o.current.toolController.getPrimaryTools()[3], N = c.current.getWidgetById("pen-2");
    L && N && (L.setColor(M), N.serializeState());
  }, p = (M) => {
    const L = c.current.getWidgetById("shape");
    L && L.setShapeType(M);
  }, f = (M) => {
    const L = o.current.toolController.getPrimaryTools()[5], N = c.current.getWidgetById("shape");
    L && N && (L.setColor(M), N.serializeState());
  }, I = (M) => {
    const L = o.current.toolController.getPrimaryTools()[5], N = c.current.getWidgetById("shape");
    L && N && (L.setThickness(M), N.serializeState());
  }, T = (M) => {
    const L = o.current.toolController.getPrimaryTools()[5], N = c.current.getWidgetById("shape");
    L && N && (L.setBorderColor(M), N.serializeState());
  }, v = () => {
    if (Rt) {
      for (; o.current.history.redoStackSize > 0; )
        o.current.history.redo();
      Rt = !1;
      return;
    }
    o.current.history.undo();
  };
  return /* @__PURE__ */ g(
    ut,
    {
      onOpenChange: a,
      open: n,
      children: [
        /* @__PURE__ */ i(mt, { asChild: !0, children: /* @__PURE__ */ i(
          O,
          {
            action: () => a(!0),
            icon: "Pencil",
            tooltip: "Edit Drawer"
          }
        ) }),
        /* @__PURE__ */ g(lt, { className: "richtext-z-[99999] !richtext-max-w-[1300px]", children: [
          /* @__PURE__ */ i(dt, { children: "Edit Drawer" }),
          /* @__PURE__ */ g("div", { style: { height: "100%", borderWidth: 1, background: "white", position: "relative" }, children: [
            /* @__PURE__ */ i(
              "div",
              {
                className: "richtext-size-full",
                id: "easydrawer"
              }
            ),
            /* @__PURE__ */ i(
              ii,
              {
                changeBorderColorShape: T,
                changeColorShape: f,
                changeShape: p,
                onClear: () => {
                  if (!Rt) {
                    for (; o.current.history.undoStackSize > 0; )
                      v();
                    Rt = !0;
                  }
                },
                onRedo: () => {
                  Rt || o.current.history.redo();
                },
                onThicknessChange: I,
                onUndo: v,
                refEditor: o,
                setColorHighlight: w,
                setColorPen: m,
                setThicknessPen: x
              }
            )
          ] }),
          /* @__PURE__ */ i(wt, { children: /* @__PURE__ */ i(
            G,
            {
              onClick: u,
              type: "button",
              children: "Save changes"
            }
          ) })
        ] })
      ]
    }
  );
}
function ni(t, e) {
  const [r, n] = S(void 0);
  return B(() => {
    const a = () => {
      const o = t.extensionManager.extensions.find((c) => c.name === e);
      o && n(o);
    };
    return t.on("selectionUpdate", a), t.on("transaction", a), () => {
      t.off("selectionUpdate", a), t.off("transaction", a);
    };
  }, [t, e]), r;
}
const Fc = {
  maxWidth: "auto",
  zIndex: 20,
  appendTo: "parent",
  moveTransition: "transform 0.1s ease-out"
};
function Uc({ item: t, disabled: e, editor: r }) {
  var a;
  const n = t.component;
  return n ? /* @__PURE__ */ i(Pe, { children: t.type === "divider" ? /* @__PURE__ */ i(
    rt,
    {
      className: "!richtext-mx-1 !richtext-my-2 !richtext-h-[16px]",
      orientation: "vertical"
    }
  ) : /* @__PURE__ */ i(
    n,
    {
      ...t.componentProps,
      disabled: e || ((a = t == null ? void 0 : t.componentProps) == null ? void 0 : a.disabled),
      editor: r
    }
  ) }) : /* @__PURE__ */ i(V, {});
}
function Gc(t) {
  return t.type.name === "drawer";
}
function qc(t) {
  const { lang: e } = q(), r = zt(t.editor, sr.name), n = ni(t.editor, sr.name), a = ({ editor: c }) => {
    const { selection: l } = c.view.state, { $from: s, to: h } = l;
    let d = !1;
    return c.view.state.doc.nodesBetween(s.pos, h, (u) => {
      if (Gc(u))
        return d = !0, !1;
    }), d;
  }, o = U(() => t.disabled ? [] : Is(t.editor), [t.disabled, t.editor, e]);
  return /* @__PURE__ */ i(V, { children: /* @__PURE__ */ i(
    tt,
    {
      editor: t == null ? void 0 : t.editor,
      shouldShow: a,
      tippyOptions: Fc,
      children: o != null && o.length ? /* @__PURE__ */ i("div", { className: "richtext-pointer-events-auto richtext-w-auto richtext-select-none richtext-rounded-sm !richtext-border richtext-border-neutral-200 richtext-bg-background richtext-px-3 richtext-py-2 richtext-shadow-sm richtext-transition-all dark:richtext-border-neutral-800", children: /* @__PURE__ */ i("div", { className: "richtext-relative richtext-flex richtext-h-[26px] richtext-flex-nowrap richtext-items-center richtext-justify-start richtext-whitespace-nowrap", children: o == null ? void 0 : o.map((c, l) => c.type === "edit" && (r != null && r.src) ? /* @__PURE__ */ i(
        Wc,
        {
          attrs: r,
          editor: t.editor,
          extension: n
        },
        `bubbleMenu-drawer-${l}`
      ) : /* @__PURE__ */ i(
        Uc,
        {
          disabled: t.disabled,
          editor: t.editor,
          item: c
        },
        `bubbleMenu-drawer-${l}`
      )) }) }) : /* @__PURE__ */ i(V, {})
    }
  ) });
}
const jc = { padding: "0 12px 12px" }, oi = ({ width: t, maxWidth: e, height: r, onOk: n, children: a }) => {
  const { t: o } = q(), [c, l] = S({
    width: "",
    height: "",
    maxWidth: ""
  });
  B(() => {
    l({
      width: t,
      height: r,
      maxWidth: e
    });
  }, [r, e, t]);
  function s(h) {
    h.preventDefault(), h.stopPropagation(), n(c);
  }
  return /* @__PURE__ */ g(It, { modal: !0, children: [
    /* @__PURE__ */ i(Et, { asChild: !0, children: a }),
    /* @__PURE__ */ i(Tt, { children: /* @__PURE__ */ i("div", { style: jc, children: /* @__PURE__ */ g("form", { className: "richtext-flex richtext-flex-col richtext-gap-2", onSubmit: s, children: [
      /* @__PURE__ */ i(ct, { className: "mb-[6px]", children: "Width" }),
      /* @__PURE__ */ i("div", { className: "richtext-flex richtext-w-full richtext-max-w-sm richtext-items-center richtext-gap-1.5", children: /* @__PURE__ */ i("div", { className: "richtext-relative richtext-items-center richtext-w-full richtext-max-w-sm", children: /* @__PURE__ */ i(
        Q,
        {
          type: "number",
          value: c.width,
          required: !0,
          onChange: (h) => l({ ...c, width: h.target.value })
        }
      ) }) }),
      /* @__PURE__ */ i(ct, { className: "mb-[6px]", children: "Max Width" }),
      /* @__PURE__ */ i("div", { className: "richtext-flex richtext-w-full richtext-max-w-sm richtext-items-center richtext-gap-1.5", children: /* @__PURE__ */ i("div", { className: "richtext-relative richtext-items-center richtext-w-full richtext-max-w-sm", children: /* @__PURE__ */ i(
        Q,
        {
          type: "number",
          value: c.maxWidth,
          required: !0,
          onChange: (h) => l({ ...c, maxWidth: h.target.value })
        }
      ) }) }),
      /* @__PURE__ */ i(ct, { className: "mb-[6px]", children: "Height" }),
      /* @__PURE__ */ i("div", { className: "richtext-flex richtext-w-full richtext-max-w-sm richtext-items-center richtext-gap-1.5", children: /* @__PURE__ */ i("div", { className: "richtext-relative richtext-items-center richtext-w-full richtext-max-w-sm", children: /* @__PURE__ */ i(
        Q,
        {
          type: "number",
          value: c.height,
          required: !0,
          onChange: (h) => l({ ...c, height: h.target.value })
        }
      ) }) }),
      /* @__PURE__ */ i(G, { type: "submit", className: "richtext-self-end richtext-mt-2", children: o("editor.link.dialog.button.apply") })
    ] }) }) })
  ] });
};
let ye;
function Fe() {
  try {
    return ye || (ye = Mi()), ye;
  } catch {
    throw new Error("Error EventEmitter");
  }
}
const Ee = "OPEN_EXCALIDRAW_SETTING_MODAL";
function Xc(t, e) {
  Fe().on(t, e);
}
function Yc(t, e) {
  Fe().off(t, e);
}
function Kc(t) {
  Fe().emit(Ee, t);
}
const Zc = ({ editor: t }) => {
  const [e, r] = S(null), [n, a] = S({}), [o, c] = S({ elements: [], appState: { isLoading: !1 }, files: null }), [l, s] = S(!1), [h, d] = S(!0), [u, m] = S(null), x = H(
    (I) => {
      I && import("@excalidraw/excalidraw").then((T) => {
        r(T.Excalidraw);
      }).catch(m).finally(() => d(!1));
    },
    [d]
  ), w = H((I) => {
    setTimeout(() => {
      I.refresh();
    });
  }, []), p = H((I, T, v) => {
    a({
      elements: I,
      appState: { isLoading: !1 },
      files: v
    });
  }, []), f = H(() => {
    if (!e) {
      s(!1);
      return;
    }
    t.chain().focus().setExcalidraw({ data: n }).run(), s(!1);
  }, [e, t, n, s]);
  return B(() => {
    const I = (T) => {
      s(!0), T && c(T.data);
    };
    return Xc(Ee, I), () => {
      Yc(Ee, I);
    };
  }, [t, s]), /* @__PURE__ */ g(
    ut,
    {
      onOpenChange: s,
      open: l,
      children: [
        /* @__PURE__ */ i(mt, { asChild: !0, children: /* @__PURE__ */ i(
          O,
          {
            action: () => s(!0),
            icon: "Excalidraw",
            tooltip: "Excalidraw"
          }
        ) }),
        /* @__PURE__ */ g(lt, { className: "richtext-z-[99999] !richtext-max-w-[1300px]", children: [
          /* @__PURE__ */ i(dt, { children: "Excalidraw" }),
          /* @__PURE__ */ g("div", { style: { height: "100%", borderWidth: 1 }, children: [
            h && /* @__PURE__ */ i("p", { children: "Loading..." }),
            u && /* @__PURE__ */ i("p", { children: u && u.message || "Error" }),
            /* @__PURE__ */ i(
              "div",
              {
                ref: x,
                style: { width: "100%", height: 600 },
                children: !h && !u && e ? /* @__PURE__ */ i(
                  e,
                  {
                    initialData: o,
                    langCode: "en",
                    onChange: p,
                    ref: w
                  }
                ) : null
              }
            )
          ] }),
          /* @__PURE__ */ i(wt, { children: /* @__PURE__ */ i(
            G,
            {
              onClick: f,
              type: "button",
              children: "Save changes"
            }
          ) })
        ] })
      ]
    }
  );
}, Jc = "_wrap_15k3c_1", Qc = "_renderWrap_15k3c_7", ts = "_title_15k3c_14", es = "_handlerWrap_15k3c_30", Ot = {
  wrap: Jc,
  renderWrap: Qc,
  title: ts,
  handlerWrap: es
}, rs = 10, is = 200, lr = 15, dr = { width: "100%", height: "100%", maxWidth: "100%" };
function ns({ editor: t, node: e, updateAttributes: r }) {
  const n = J(null), a = t.isActive(St.name), { data: o, width: c, height: l } = e.attrs, [s, h] = S(null), [d, u] = S(!0), [m, x] = S(null), [w, p] = S(!1), [f, I] = S(100), T = H(
    (C) => {
      C && p(!0);
    },
    [p]
  ), v = H((C) => () => {
    I(
      (M) => $e(C === "minus" ? M - lr : M + lr, rs, is)
    );
  }, []);
  B(() => {
    let C = !1;
    return import("@excalidraw/excalidraw").then((M) => {
      C || (n.current = M.exportToSvg);
    }).catch((M) => !C && x(M)).finally(() => !C && u(!1)), () => {
      C = !0;
    };
  }, [u, o]), B(() => {
    let C = !1;
    return (async () => {
      if (C || d || m || !w || !o)
        return;
      const L = await n.current(o);
      C || (L.setAttribute("width", "100%"), L.setAttribute("height", "100%"), L.setAttribute("display", "block"), h(L));
    })(), () => {
      C = !0;
    };
  }, [o, d, m, w]);
  const y = (C) => {
    r({ width: C.width, height: C.height });
  };
  return /* @__PURE__ */ i(gt, { className: oe(Ot.wrap, a && Ot.isActive), children: /* @__PURE__ */ i(_i, { onChange: T, children: /* @__PURE__ */ i(
    Rr,
    {
      size: { width: Number.parseInt(c), height: Number.parseInt(l) },
      onResizeStop: (C, M, L, N) => {
        y({
          width: Number.parseInt(c) + N.width,
          height: Number.parseInt(l) + N.height
        });
      },
      children: /* @__PURE__ */ g(
        "div",
        {
          className: oe(Ot.renderWrap, "render-wrapper"),
          style: { ...dr, overflow: "hidden" },
          children: [
            m && /* @__PURE__ */ i("div", { style: dr, children: /* @__PURE__ */ i("p", { children: m.message || m }) }),
            d && /* @__PURE__ */ i("p", { children: "Loading..." }),
            !d && !m && w && /* @__PURE__ */ i(
              "div",
              {
                dangerouslySetInnerHTML: { __html: (s == null ? void 0 : s.outerHTML) ?? "" },
                style: {
                  height: "100%",
                  maxHeight: "100%",
                  padding: 24,
                  overflow: "hidden",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  transform: `scale(${f / 100})`,
                  transition: "all ease-in-out .3s"
                }
              }
            ),
            /* @__PURE__ */ i("div", { className: Ot.title }),
            /* @__PURE__ */ g("div", { className: Ot.handlerWrap, children: [
              /* @__PURE__ */ i(
                O,
                {
                  action: v("minus"),
                  icon: "ZoomOut",
                  tooltip: "Zoom Out"
                }
              ),
              /* @__PURE__ */ i(
                O,
                {
                  action: v("plus"),
                  icon: "ZoomIn",
                  tooltip: "Zoom In"
                }
              )
            ] })
          ]
        }
      )
    }
  ) }) });
}
const os = Ht.memo(ns, (t, e) => !!Cr(t.node.attrs, e.node.attrs)), hr = { elements: [] }, St = yt.create({
  name: "excalidraw",
  group: "block",
  selectable: !0,
  atom: !0,
  draggable: !0,
  inline: !1,
  addAttributes() {
    return {
      defaultShowPicker: {
        default: !1
      },
      createUser: {
        default: null
      },
      width: {
        default: "100%",
        parseHTML: Lt("width")
      },
      height: {
        default: 240,
        parseHTML: Lt("height")
      },
      data: {
        default: hr,
        parseHTML: Lt("data", !0)
      }
    };
  },
  addOptions() {
    var t;
    return {
      ...(t = this.parent) == null ? void 0 : t.call(this),
      HTMLAttributes: {
        class: "excalidraw"
      },
      button: ({ editor: e }) => ({
        component: Zc,
        componentProps: {
          editor: e
        }
      })
    };
  },
  parseHTML() {
    return [
      {
        tag: "div[class=excalidraw]"
      }
    ];
  },
  renderHTML({ HTMLAttributes: t, node: e }) {
    return ["div", st(this.options.HTMLAttributes, t, Fa(e))];
  },
  addCommands() {
    return {
      setExcalidraw: (t) => ({ tr: e, commands: r, chain: n }) => {
        var a, o, c;
        return t = t || {}, t.data = t.data || hr, ((c = (o = (a = e.selection) == null ? void 0 : a.node) == null ? void 0 : o.type) == null ? void 0 : c.name) == this.name ? r.updateAttributes(this.name, t) : n().insertContent({
          type: this.name,
          attrs: t
        }).run();
      }
    };
  },
  addNodeView() {
    return pt(os);
  },
  addInputRules() {
    return [
      Re({
        find: /^\$excalidraw\$$/,
        type: this.type,
        getAttributes: () => ({ width: "100%" })
      })
    ];
  }
}), vt = /* @__PURE__ */ new Map();
function as(t) {
  const e = t.options.element;
  vt.has("width") || vt.set("width", e.clientWidth), vt.has("width") && vt.get("width") <= 0 && vt.set("width", e.clientWidth);
  const r = { attributes: !0, childList: !0, subtree: !0 }, n = function() {
    vt.set("width", e.clientWidth);
  }, a = new MutationObserver(n);
  return a.observe(e, r), t.on("destroy", () => {
    a.disconnect();
  }), { width: vt.get("width") };
}
function cs({ editor: t }) {
  const { t: e } = q(), { width: r } = as(t), n = zt(t, St.name, {
    defaultShowPicker: !1,
    createUser: "",
    width: 0,
    height: 0
  }), { defaultShowPicker: a, createUser: o, width: c, height: l } = n, s = H(
    (m) => {
      t.chain().updateAttributes(St.name, m).setNodeSelection(t.state.selection.from).focus().run();
    },
    [t]
  ), h = H(() => {
    Kc(n);
  }, [t, n]), d = H(() => t.isActive(St.name), [t]), u = H(() => Gt(St.name, t), [t]);
  return B(() => {
    a && (h(), t.chain().updateAttributes(St.name, { defaultShowPicker: !1 }).focus().run());
  }, [o, a, t, h]), /* @__PURE__ */ i(
    tt,
    {
      className: "bubble-menu",
      editor: t,
      pluginKey: "excalidraw-bubble-menu",
      shouldShow: d,
      tippyOptions: {
        popperOptions: {
          modifiers: [{ name: "flip", enabled: !1 }]
        },
        placement: "bottom-start",
        offset: [-2, 16],
        zIndex: 9999
        // onHidden: () => {
        //   toggleVisible(false)
        // },
      },
      children: /* @__PURE__ */ g("div", { className: "richtext-w-auto richtext-px-3 richtext-py-2 richtext-transition-all !richtext-border richtext-rounded-sm richtext-shadow-sm richtext-pointer-events-auto richtext-select-none richtext-border-neutral-200 dark:richtext-border-neutral-800 richtext-bg-background", children: [
        /* @__PURE__ */ i(
          O,
          {
            icon: "Pencil",
            action: h,
            tooltip: e("editor.edit")
          }
        ),
        /* @__PURE__ */ i(oi, { width: c, maxWidth: r, height: l, onOk: s, children: /* @__PURE__ */ i(
          O,
          {
            icon: "Settings",
            tooltip: e("editor.settings")
          }
        ) }),
        /* @__PURE__ */ i(
          O,
          {
            icon: "Trash2",
            action: u,
            tooltip: e("editor.delete")
          }
        )
      ] })
    }
  );
}
function ss({ editor: t }) {
  const { t: e } = q(), { width: r, height: n, url: a } = zt(t, kt.name, {
    width: 0,
    height: 0,
    url: "",
    defaultShowPicker: !1
  }), [o, c] = S(!1), [l, s] = S(""), h = H(() => {
    c(!1);
  }, [c]);
  B(() => {
    o && s(a);
  }, [o, a]);
  const d = H(() => {
    t.chain().updateAttributes(kt.name, {
      url: l
    }).setNodeSelection(t.state.selection.from).focus().run(), c(!1);
  }, [t, l, c]), u = H(() => {
    window.open(a, "_blank");
  }, [a]), m = H(() => {
    c(!0);
  }, [c]), x = H(
    (f) => {
      t.chain().updateAttributes(kt.name, f).setNodeSelection(t.state.selection.from).focus().run();
    },
    [t]
  ), w = H(() => t.isActive(kt.name) && !a, [t, a]), p = H(() => Gt(kt.name, t), [t]);
  return /* @__PURE__ */ g(V, { children: [
    /* @__PURE__ */ i(
      tt,
      {
        className: "bubble-menu",
        editor: t,
        pluginKey: "iframe-bubble-menu",
        shouldShow: w,
        tippyOptions: {
          popperOptions: {
            modifiers: [{ name: "flip", enabled: !1 }]
          },
          placement: "bottom-start",
          offset: [-2, 16],
          zIndex: 9999
          // onHidden: () => {
          //   toggleVisible(false)
          // },
        },
        children: /* @__PURE__ */ g("div", { className: "richtext-w-auto richtext-px-3 richtext-py-2 richtext-transition-all !richtext-border richtext-rounded-sm richtext-shadow-sm richtext-pointer-events-auto richtext-select-none richtext-border-neutral-200 dark:richtext-border-neutral-800 richtext-bg-background", children: [
          /* @__PURE__ */ i(
            O,
            {
              action: u,
              icon: "Eye",
              tooltip: "Visit Link"
            }
          ),
          /* @__PURE__ */ i(
            O,
            {
              action: m,
              icon: "Pencil",
              tooltip: "Open Edit Link"
            }
          ),
          /* @__PURE__ */ i(oi, { width: r, height: n, onOk: x, children: /* @__PURE__ */ i(
            O,
            {
              icon: "Settings",
              tooltip: e("editor.settings")
            }
          ) }),
          /* @__PURE__ */ i(
            O,
            {
              action: p,
              icon: "Trash2",
              tooltip: e("editor.delete")
            }
          )
        ] })
      }
    ),
    /* @__PURE__ */ g(
      ut,
      {
        open: o,
        onOpenChange: c,
        children: [
          /* @__PURE__ */ i(mt, {}),
          /* @__PURE__ */ g(lt, { children: [
            /* @__PURE__ */ i(Qr, { children: /* @__PURE__ */ i(dt, { children: "Edit Link Iframe" }) }),
            /* @__PURE__ */ i(
              Q,
              {
                value: l,
                onInput: (f) => s(f.target.value),
                type: "url",
                autoFocus: !0,
                placeholder: "Enter link"
              }
            ),
            /* @__PURE__ */ g(wt, { children: [
              /* @__PURE__ */ i(G, { onClick: h, children: "Cancel" }),
              /* @__PURE__ */ i(G, { onClick: d, children: "OK" })
            ] })
          ] })
        ]
      }
    )
  ] });
}
function ls({ editor: t, ...e }) {
  const r = zt(t, Mt.name, {
    text: "",
    defaultShowPicker: !1
  }), { text: n, defaultShowPicker: a } = r, [o, c] = S(""), [l, s] = S(!1), h = H(() => t.isActive(Mt.name), [t]), d = H(() => Gt(Mt.name, t), [t]), u = H(() => {
    t.chain().focus().setKatex({ text: o }).run(), s(!1);
  }, [t, o]);
  B(() => {
    a && (s(!0), t.chain().updateAttributes(Mt.name, { defaultShowPicker: !1 }).focus().run());
  }, [t, a, s]), B(() => {
    l && c(n || "");
  }, [l]);
  const m = U(() => {
    try {
      return _e.renderToString(`${o}`);
    } catch {
      return o;
    }
  }, [o]), x = U(
    () => `${o}`.trim() ? /* @__PURE__ */ i("span", { contentEditable: !1, dangerouslySetInnerHTML: { __html: m || "" } }) : null,
    [o, m]
  );
  return /* @__PURE__ */ i(
    tt,
    {
      editor: t,
      pluginKey: "Katex-bubble-menu",
      shouldShow: h,
      tippyOptions: {
        popperOptions: {
          modifiers: [{ name: "flip", enabled: !1 }]
        },
        placement: "bottom-start",
        offset: [-2, 16],
        zIndex: 9999,
        onHidden: () => {
          s(!1);
        }
      },
      children: e != null && e.disabled ? /* @__PURE__ */ i(V, {}) : /* @__PURE__ */ i("div", { className: "richtext-p-2 richtext-bg-white !richtext-border richtext-rounded-lg richtext-shadow-sm dark:richtext-bg-black richtext-border-neutral-200 dark:richtext-border-neutral-800", children: l ? /* @__PURE__ */ g(V, { children: [
        /* @__PURE__ */ i(
          jt,
          {
            value: o,
            onChange: (w) => c(w.target.value),
            autoFocus: !0,
            placeholder: "Formula text",
            rows: 3,
            defaultValue: n,
            style: { marginBottom: 8 }
          }
        ),
        x && /* @__PURE__ */ i("div", { className: "richtext-my-[10px] richtext-p-[10px] richtext-rounded-[6px] !richtext-border-[1px] richtext-whitespace-nowrap richtext-overflow-auto", children: x }),
        /* @__PURE__ */ g("div", { className: "richtext-flex richtext-items-center richtext-justify-between richtext-gap-[6px]", children: [
          /* @__PURE__ */ i(G, { onClick: u, className: "richtext-flex-1", children: "Submit" }),
          /* @__PURE__ */ i("a", { href: "https://katex.org/docs/supported", target: "_blank", rel: "noreferrer noopener", children: /* @__PURE__ */ i(Ar, { size: 16 }) })
        ] })
      ] }) : /* @__PURE__ */ g("div", { className: "richtext-flex richtext-items-center richtext-justify-center richtext-gap-[6px]", children: [
        /* @__PURE__ */ i(O, { tooltip: "Edit", action: () => s(!l), children: /* @__PURE__ */ i(Mr, { size: 16 }) }),
        /* @__PURE__ */ i(O, { tooltip: "Delete", action: d, children: /* @__PURE__ */ i(Sr, { size: 16 }) })
      ] }) })
    }
  );
}
const ur = `graph TB
a-->b`, ds = ({ editor: t, attrs: e, extension: r }) => {
  const { alt: n, align: a } = e, [o, c] = S(decodeURIComponent(n ?? ur)), [l, s] = S(""), [h, d] = S(!1), u = J(null), m = r == null ? void 0 : r.options.upload, x = async (f) => {
    try {
      const { svg: I } = await ce.render("mermaid-svg", f);
      s(I);
    } catch {
      s("");
    }
  }, w = () => {
    ce.initialize({
      darkMode: !1,
      startOnLoad: !1,
      // fontFamily:'',
      fontSize: 12,
      theme: "base"
    }), x(o);
  };
  return B(() => {
    h && w();
  }, [h]), B(() => {
    h && x(o);
  }, [o]), /* @__PURE__ */ g(
    ut,
    {
      onOpenChange: d,
      open: h,
      children: [
        /* @__PURE__ */ i(mt, { asChild: !0, children: /* @__PURE__ */ i(
          O,
          {
            action: () => d(!0),
            icon: "Pencil",
            tooltip: "Edit Mermaid"
          }
        ) }),
        /* @__PURE__ */ g(lt, { className: "richtext-z-[99999] !richtext-max-w-[1300px]", children: [
          /* @__PURE__ */ i(dt, { children: "Edit Mermaid" }),
          /* @__PURE__ */ i("div", { style: { height: "100%", border: "1px solid hsl(var(--border))" }, children: /* @__PURE__ */ g("div", { className: "richtext-flex richtext-gap-[10px] richtext-rounded-[10px] richtext-p-[10px]", children: [
            /* @__PURE__ */ i(
              jt,
              {
                autoFocus: !0,
                className: "richtext-flex-1",
                defaultValue: ur,
                onChange: (f) => c(f.target.value),
                placeholder: "Text",
                required: !0,
                rows: 10,
                value: o,
                style: {
                  color: "hsl(var(--richtext-foreground))"
                }
              }
            ),
            /* @__PURE__ */ i(
              "div",
              {
                className: "richtext-flex richtext-flex-1 richtext-items-center richtext-justify-center richtext-rounded-[10px] richtext-p-[10px]",
                dangerouslySetInnerHTML: { __html: l },
                ref: u,
                style: { height: "100%", border: "1px solid hsl(var(--border))", minHeight: 500, background: "#fff" }
              }
            )
          ] }) }),
          /* @__PURE__ */ i(wt, { children: /* @__PURE__ */ i(
            G,
            {
              onClick: async () => {
                if (o !== "") {
                  if (o) {
                    const f = u.current.querySelector("svg"), { width: I, height: T } = f.getBoundingClientRect(), v = `mermaid-${fe()}.svg`;
                    let y = me(f.outerHTML);
                    if (m) {
                      const C = qt(y, v);
                      y = await m(C);
                    }
                    t == null || t.chain().focus().setMermaid(
                      {
                        type: "mermaid",
                        src: y,
                        alt: encodeURIComponent(o),
                        width: I,
                        height: T
                      },
                      !!o
                    ).run(), t == null || t.commands.setAlignImageMermaid(a);
                  }
                  d(!1);
                }
              },
              type: "button",
              children: "Save changes"
            }
          ) })
        ] })
      ]
    }
  );
}, hs = {
  maxWidth: "auto",
  zIndex: 20,
  appendTo: "parent",
  moveTransition: "transform 0.1s ease-out"
};
function us({ item: t, disabled: e, editor: r }) {
  var a;
  const n = t.component;
  return n ? /* @__PURE__ */ i(Pe, { children: t.type === "divider" ? /* @__PURE__ */ i(
    rt,
    {
      className: "!richtext-mx-1 !richtext-my-2 !richtext-h-[16px]",
      orientation: "vertical"
    }
  ) : /* @__PURE__ */ i(
    n,
    {
      ...t.componentProps,
      disabled: e || ((a = t == null ? void 0 : t.componentProps) == null ? void 0 : a.disabled),
      editor: r
    }
  ) }) : /* @__PURE__ */ i(V, {});
}
function ms(t) {
  return t.type.name === "mermaid";
}
function xs(t) {
  const { lang: e } = q(), r = zt(t.editor, or.name), n = ni(t.editor, or.name), a = ({ editor: c }) => {
    const { selection: l } = c.view.state, { $from: s, to: h } = l;
    let d = !1;
    return c.view.state.doc.nodesBetween(s.pos, h, (u) => {
      if (ms(u))
        return d = !0, !1;
    }), d;
  }, o = U(() => t.disabled ? [] : Ls(t.editor), [t.disabled, t.editor, e]);
  return /* @__PURE__ */ i(V, { children: /* @__PURE__ */ i(
    tt,
    {
      editor: t == null ? void 0 : t.editor,
      shouldShow: a,
      tippyOptions: hs,
      children: o != null && o.length ? /* @__PURE__ */ i("div", { className: "richtext-pointer-events-auto richtext-w-auto richtext-select-none richtext-rounded-sm !richtext-border richtext-border-neutral-200 richtext-bg-background richtext-px-3 richtext-py-2 richtext-shadow-sm richtext-transition-all dark:richtext-border-neutral-800", children: /* @__PURE__ */ i("div", { className: "richtext-relative richtext-flex richtext-h-[26px] richtext-flex-nowrap richtext-items-center richtext-justify-start richtext-whitespace-nowrap", children: o == null ? void 0 : o.map((c, l) => c.type === "edit" && (r != null && r.src) ? /* @__PURE__ */ i(
        ds,
        {
          attrs: r,
          editor: t.editor,
          extension: n
        },
        `bubbleMenu-mermaid-${l}`
      ) : /* @__PURE__ */ i(
        us,
        {
          disabled: t.disabled,
          editor: t.editor,
          item: c
        },
        `bubbleMenu-mermaid-${l}`
      )) }) }) : /* @__PURE__ */ i(V, {})
    }
  ) });
}
function fs({ editor: t, disabled: e }) {
  const [r, n] = S(!1), { t: a } = q(), o = H(({ editor: s }) => s.isActive(Le.name), []), c = (s) => {
    t.commands.updateTweet({ src: s }), n(!1);
  }, l = H(() => Gt(Le.name, t), [t]);
  return /* @__PURE__ */ i(V, { children: /* @__PURE__ */ i(
    tt,
    {
      editor: t,
      shouldShow: o,
      tippyOptions: {
        popperOptions: {
          modifiers: [{ name: "flip", enabled: !1 }]
        },
        placement: "bottom-start",
        offset: [-2, 16],
        zIndex: 9999,
        onHidden: () => {
          n(!1);
        }
      },
      children: e ? /* @__PURE__ */ i(V, {}) : /* @__PURE__ */ i(V, { children: r ? /* @__PURE__ */ i(
        ri,
        {
          editor: t,
          onSetLink: c
        }
      ) : /* @__PURE__ */ i("div", { className: "richtext-flex richtext-items-center richtext-gap-2 richtext-rounded-lg !richtext-border richtext-border-neutral-200 richtext-bg-white richtext-p-2 richtext-shadow-sm dark:richtext-border-neutral-800 dark:richtext-bg-black", children: /* @__PURE__ */ g("div", { className: "richtext-flex richtext-flex-nowrap", children: [
        /* @__PURE__ */ i(
          O,
          {
            icon: "Pencil",
            tooltip: a("editor.link.edit.tooltip"),
            tooltipOptions: { sideOffset: 15 },
            action: () => {
              n(!0);
            }
          }
        ),
        /* @__PURE__ */ i(
          O,
          {
            action: l,
            icon: "Trash",
            tooltip: a("editor.delete"),
            tooltipOptions: { sideOffset: 15 }
          }
        )
      ] }) }) })
    }
  ) });
}
function gs({ editor: t, disabled: e, bubbleMenu: r }) {
  const n = t.extensionManager.extensions.map((o) => o.name), a = () => {
    var o, c, l, s, h, d, u, m, x, w, p, f, I, T, v;
    return [
      n.includes("columns") && !((o = r == null ? void 0 : r.columnConfig) != null && o.hidden) ? /* @__PURE__ */ i(
        Ks,
        {
          editor: t
        },
        "columns"
      ) : null,
      n.includes("table") && !((c = r == null ? void 0 : r.tableConfig) != null && c.hidden) ? /* @__PURE__ */ i(
        Vs,
        {
          editor: t,
          actions: (l = r == null ? void 0 : r.tableConfig) == null ? void 0 : l.actions
        },
        "table"
      ) : null,
      n.includes("link") && !((s = r == null ? void 0 : r.linkConfig) != null && s.hidden) ? /* @__PURE__ */ i(
        Fs,
        {
          disabled: e,
          editor: t
        },
        "link"
      ) : null,
      n.includes(Vt.name) && !((h = r == null ? void 0 : r.imageConfig) != null && h.hidden) ? /* @__PURE__ */ i(
        js,
        {
          disabled: e,
          editor: t
        },
        "image"
      ) : null,
      n.includes(ei.name) && !((d = r == null ? void 0 : r.imageGifConfig) != null && d.hidden) ? /* @__PURE__ */ i(
        Xs,
        {
          disabled: e,
          editor: t
        },
        "imageGif"
      ) : null,
      n.includes("video") && !((u = r == null ? void 0 : r.videoConfig) != null && u.hidden) ? /* @__PURE__ */ i(
        Ys,
        {
          disabled: e,
          editor: t
        },
        "video"
      ) : null,
      n.includes("katex") && !((m = r == null ? void 0 : r.katexConfig) != null && m.hidden) ? /* @__PURE__ */ i(
        ls,
        {
          disabled: e,
          editor: t
        },
        "katex"
      ) : null,
      n.includes("excalidraw") && !((x = r == null ? void 0 : r.excalidrawConfig) != null && x.hidden) ? /* @__PURE__ */ i(
        cs,
        {
          disabled: e,
          editor: t
        },
        "excalidraw"
      ) : null,
      n.includes("mermaid") && !((w = r == null ? void 0 : r.mermaidConfig) != null && w.hidden) ? /* @__PURE__ */ i(
        xs,
        {
          disabled: e,
          editor: t
        },
        "mermaid"
      ) : null,
      n.includes("iframe") && !((p = r == null ? void 0 : r.iframeConfig) != null && p.hidden) ? /* @__PURE__ */ i(
        ss,
        {
          disabled: e,
          editor: t
        },
        "iframe"
      ) : null,
      n.includes("twitter") && !((f = r == null ? void 0 : r.twitterConfig) != null && f.hidden) ? /* @__PURE__ */ i(
        fs,
        {
          disabled: e,
          editor: t
        },
        "twitter"
      ) : null,
      (I = r == null ? void 0 : r.floatingMenuConfig) != null && I.hidden ? null : /* @__PURE__ */ i(
        Ds,
        {
          disabled: e,
          editor: t
        },
        "content"
      ),
      (T = r == null ? void 0 : r.textConfig) != null && T.hidden ? null : /* @__PURE__ */ i(
        $s,
        {
          disabled: e,
          editor: t
        },
        "text"
      ),
      n.includes("drawer") && !((v = r == null ? void 0 : r.drawerConfig) != null && v.hidden) ? /* @__PURE__ */ i(
        qc,
        {
          disabled: e,
          editor: t
        },
        "drawer"
      ) : null
    ];
  };
  return r != null && r.render ? r.render({ editor: t, disabled: e || !1, bubbleMenu: r }, a()) : a().filter(Boolean);
}
function mr() {
  return /* @__PURE__ */ i("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", children: /* @__PURE__ */ i("path", { fill: "currentColor", d: "M18 14c0-4-6-10.8-6-10.8s-1.33 1.51-2.73 3.52l8.59 8.59c.09-.42.14-.86.14-1.31m-.88 3.12L12.5 12.5L5.27 5.27L4 6.55l3.32 3.32C6.55 11.32 6 12.79 6 14c0 3.31 2.69 6 6 6c1.52 0 2.9-.57 3.96-1.5l2.63 2.63l1.27-1.27z" }) });
}
function ps(t) {
  const { t: e } = q(), {
    highlight: r = !1,
    disabled: n = !1,
    selectedColor: a,
    setSelectedColor: o,
    onChange: c,
    colors: l = Ai
  } = t, s = U(() => {
    const x = l, w = [];
    for (let p = 0; p < x.length; p += 10)
      w.push(x.slice(p, p + 10));
    return w;
  }, [l]), [h, d] = S([]), u = (x) => {
    const w = [...h], p = w.indexOf(x);
    p !== -1 && w.splice(p, 1), w.unshift(x), w.length > 10 && w.pop(), d(w);
  };
  function m(x) {
    if (x === void 0) {
      o == null || o(x), c == null || c(x);
      return;
    }
    /^#([\da-f]{3}){1,2}$/i.test(x) && (o == null || o(x), c == null || c(x), u(x));
  }
  return /* @__PURE__ */ g(It, { modal: !0, children: [
    /* @__PURE__ */ i(
      Et,
      {
        asChild: !0,
        className: "!richtext-p-0",
        disabled: n,
        children: t == null ? void 0 : t.children
      }
    ),
    /* @__PURE__ */ i(
      Tt,
      {
        align: "start",
        className: "richtext-size-full richtext-p-2",
        hideWhenDetached: !0,
        side: "bottom",
        children: /* @__PURE__ */ g("div", { className: "richtext-flex richtext-flex-col", children: [
          r ? /* @__PURE__ */ g(
            "div",
            {
              className: "rd-1 richtext-flex richtext-cursor-pointer richtext-items-center richtext-gap-[4px] richtext-p-1 hover:richtext-bg-accent",
              onClick: () => m(void 0),
              children: [
                /* @__PURE__ */ i(mr, {}),
                /* @__PURE__ */ i("span", { className: "richtext-ml-1 richtext-text-sm", children: e("editor.nofill") })
              ]
            }
          ) : /* @__PURE__ */ g(
            "div",
            {
              className: "rd-1 richtext-flex richtext-cursor-pointer richtext-items-center richtext-gap-[4px] richtext-p-1 hover:richtext-bg-accent",
              onClick: () => {
                m(void 0);
              },
              children: [
                /* @__PURE__ */ i(mr, {}),
                /* @__PURE__ */ i("span", { className: "richtext-ml-1 richtext-text-sm", children: e("editor.default") })
              ]
            }
          ),
          s.map((x, w) => /* @__PURE__ */ i(
            "span",
            {
              className: "richtext-relative richtext-flex richtext-h-auto richtext-w-full richtext-p-0 last:richtext-pb-2",
              children: x.map((p, f) => /* @__PURE__ */ i(
                "span",
                {
                  className: "richtext-inline-block richtext-size-6 richtext-flex-[0_0_auto] richtext-cursor-pointer richtext-rounded-sm !richtext-border richtext-border-transparent richtext-p-0.5 hover:richtext-border-border hover:richtext-shadow-sm",
                  onClick: () => m(p),
                  children: /* @__PURE__ */ i(
                    "span",
                    {
                      className: "richtext-relative richtext-block richtext-size-[18px] richtext-rounded-[2px] richtext-border-transparent",
                      style: {
                        backgroundColor: p
                      },
                      children: p === a ? /* @__PURE__ */ i(
                        "svg",
                        {
                          className: "richtext-absolute -richtext-top-px richtext-left-px richtext-block richtext-size-3",
                          viewBox: "0 0 18 18",
                          style: {
                            fill: "rgb(255, 255, 255)"
                          },
                          children: /* @__PURE__ */ i("path", { d: "M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z" })
                        }
                      ) : /* @__PURE__ */ i(
                        "svg",
                        {
                          viewBox: "0 0 18 18",
                          style: {
                            fill: "rgb(255, 255, 255)",
                            display: "none"
                          },
                          children: /* @__PURE__ */ i("path", { d: "M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z" })
                        }
                      )
                    }
                  )
                },
                `sub-color-${f}`
              ))
            },
            w
          )),
          /* @__PURE__ */ g("div", { children: [
            /* @__PURE__ */ i("div", { className: "richtext-my-1 richtext-text-sm", children: e("editor.recent") }),
            /* @__PURE__ */ i("span", { className: "richtext-relative richtext-flex richtext-h-auto richtext-w-full richtext-p-0 last:richtext-pb-2", children: h == null ? void 0 : h.map((x, w) => /* @__PURE__ */ i(
              "span",
              {
                className: "richtext-inline-block richtext-size-6 richtext-flex-[0_0_auto] richtext-cursor-pointer richtext-rounded-sm !richtext-border richtext-border-transparent richtext-p-0.5 hover:richtext-border-border hover:richtext-shadow-sm",
                onClick: () => m(x),
                children: /* @__PURE__ */ i(
                  "span",
                  {
                    className: "richtext-relative richtext-block richtext-size-[18px] richtext-rounded-[2px] richtext-border-transparent",
                    style: {
                      backgroundColor: x
                    },
                    children: /* @__PURE__ */ i(
                      "svg",
                      {
                        viewBox: "0 0 18 18",
                        style: {
                          fill: "rgb(255, 255, 255)",
                          display: "none"
                        },
                        children: /* @__PURE__ */ i("path", { d: "M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z" })
                      }
                    )
                  }
                )
              },
              `sub-color-recent-${w}`
            )) })
          ] }),
          /* @__PURE__ */ i(ws, { setColor: m })
        ] })
      }
    )
  ] });
}
function ws({ setColor: t }) {
  const [e, r] = S("#000000"), [n, a] = S(!1), { t: o } = q();
  return B(() => () => {
    a(!1);
  }, []), /* @__PURE__ */ g(It, { open: n, children: [
    /* @__PURE__ */ i(Et, { asChild: !0, children: /* @__PURE__ */ g(
      "div",
      {
        className: "richtext-p-1.5 richtext-text-sm hover:richtext-cursor-pointer hover:richtext-bg-accent",
        onClick: (c) => {
          c.preventDefault(), a(!0);
        },
        children: [
          o("editor.color.more"),
          "..."
        ]
      }
    ) }),
    /* @__PURE__ */ g(Tt, { children: [
      /* @__PURE__ */ g("div", { className: "richtext-flex richtext-flex-col richtext-items-center richtext-justify-center", children: [
        /* @__PURE__ */ i(
          mo,
          {
            color: e,
            onChange: r
          }
        ),
        /* @__PURE__ */ i(
          Q,
          {
            className: "richtext-mt-[8px] richtext-w-full",
            type: "text",
            value: e.slice(1),
            onChange: (c) => {
              c.preventDefault(), r(`#${c.target.value}`);
            }
          }
        )
      ] }),
      /* @__PURE__ */ i(rt, { className: "richtext-my-[10px]" }),
      /* @__PURE__ */ i(
        G,
        {
          className: "richtext-w-full",
          onClick: (c) => {
            c.preventDefault(), t(e), a(!1);
          },
          children: /* @__PURE__ */ i(kr, { size: 16 })
        }
      )
    ] })
  ] });
}
function vs({ editor: t, disabled: e, toolbar: r }) {
  const { t: n, lang: a } = q(), o = U(() => {
    const h = [...t.extensionManager.extensions].sort((u, m) => {
      const x = u.options.sort ?? -1, w = m.options.sort ?? -1;
      return x - w;
    });
    let d = [];
    for (const u of h) {
      const {
        button: m,
        divider: x = !1,
        spacer: w = !1,
        toolbar: p = !0
      } = u.options;
      if (!m || !To(m) || !p)
        continue;
      const f = m({
        editor: t,
        extension: u,
        t: n
      });
      if (Array.isArray(f)) {
        const I = f.map((T, v) => ({
          button: T,
          divider: v === f.length - 1 ? x : !1,
          spacer: v === 0 ? w : !1,
          type: u.type,
          name: u.name
        }));
        d = [...d, ...I];
        continue;
      }
      d.push({
        button: f,
        divider: x,
        spacer: w,
        type: u.type,
        name: u.name
      });
    }
    return d;
  }, [t, n, a]), c = (s) => /* @__PURE__ */ i(
    "div",
    {
      className: "richtext-px-1 richtext-py-2 !richtext-border-b",
      style: {
        pointerEvents: e ? "none" : "auto",
        opacity: e ? 0.5 : 1
      },
      children: /* @__PURE__ */ i("div", { className: "richtext-relative richtext-flex richtext-flex-wrap richtext-h-auto richtext-gap-y-1 richtext-gap-x-1", children: s })
    }
  ), l = o.map((s, h) => {
    var u, m;
    const d = s.button.component;
    return /* @__PURE__ */ g("div", { className: "richtext-flex richtext-items-center", children: [
      (s == null ? void 0 : s.spacer) && /* @__PURE__ */ i(rt, { orientation: "vertical", className: "!richtext-h-[16px] !richtext-mx-[10px]" }),
      /* @__PURE__ */ i(
        d,
        {
          ...s.button.componentProps,
          disabled: e || ((m = (u = s == null ? void 0 : s.button) == null ? void 0 : u.componentProps) == null ? void 0 : m.disabled)
        }
      ),
      (s == null ? void 0 : s.divider) && /* @__PURE__ */ i(rt, { orientation: "vertical", className: "!richtext-h-auto !richtext-mx-2" })
    ] }, `toolbar-item-${h}`);
  });
  return r && (r != null && r.render) ? r.render({ editor: t, disabled: e || !1 }, o, l, c) : c(l);
}
function bs(t) {
  const e = ["size-small", "size-medium", "size-large"], r = [
    "SizeS",
    "SizeM",
    "SizeL"
  ];
  return e.map((n, a) => ({
    type: `image-${n}`,
    component: O,
    componentProps: {
      tooltip: Z.t(`editor.${n.replace("-", ".")}.tooltip`),
      icon: r[a],
      action: () => t.commands.updateImage({ width: ne[n] }),
      isActive: () => t.isActive("image", { width: ne[n] })
    }
  }));
}
function ys(t) {
  const e = ["size-small", "size-medium", "size-large"], r = [
    "SizeS",
    "SizeM",
    "SizeL"
  ];
  return e.map((n, a) => ({
    type: `image-${n}`,
    component: O,
    componentProps: {
      tooltip: Z.t(`editor.${n.replace("-", ".")}.tooltip`),
      icon: r[a],
      action: () => t.commands.updateImageGif({ width: ne[n] }),
      isActive: () => t.isActive("image", { width: ne[n] })
    }
  }));
}
function Cs(t) {
  const e = ["left", "center", "right"], r = {
    left: "AlignLeft",
    center: "AlignCenter",
    right: "AlignRight"
  };
  return e.map((n) => ({
    type: `image-${n}`,
    component: O,
    componentProps: {
      tooltip: Z.t(`editor.textalign.${n}.tooltip`),
      icon: r[n],
      action: () => {
        var a, o;
        return (o = (a = t.commands) == null ? void 0 : a.setAlignImage) == null ? void 0 : o.call(a, n);
      },
      isActive: () => t.isActive({ align: n }) || !1,
      disabled: !1
    }
  }));
}
function Ts(t) {
  const e = ["left", "center", "right"], r = {
    left: "AlignLeft",
    center: "AlignCenter",
    right: "AlignRight"
  };
  return e.map((n) => ({
    type: `image-${n}`,
    component: O,
    componentProps: {
      tooltip: Z.t(`editor.textalign.${n}.tooltip`),
      icon: r[n],
      action: () => {
        var a, o;
        return (o = (a = t.commands) == null ? void 0 : a.setAlignImageGif) == null ? void 0 : o.call(a, n);
      },
      isActive: () => t.isActive({ align: n }) || !1,
      disabled: !1
    }
  }));
}
function Ns(t) {
  const e = ["left", "center", "right"], r = {
    left: "AlignLeft",
    center: "AlignCenter",
    right: "AlignRight"
  };
  return e.map((n) => ({
    type: `image-${n}`,
    component: O,
    componentProps: {
      tooltip: Z.t(`editor.textalign.${n}.tooltip`),
      icon: r[n],
      action: () => {
        var a, o;
        return (o = (a = t.commands) == null ? void 0 : a.setAlignImageMermaid) == null ? void 0 : o.call(a, n);
      },
      isActive: () => t.isActive({ align: n }) || !1,
      disabled: !1
    }
  }));
}
function ks(t) {
  const e = ["left", "center", "right"], r = {
    left: "AlignLeft",
    center: "AlignCenter",
    right: "AlignRight"
  };
  return e.map((n) => ({
    type: `image-${n}`,
    component: O,
    componentProps: {
      tooltip: Z.t(`editor.textalign.${n}.tooltip`),
      icon: r[n],
      action: () => {
        var a, o;
        return (o = (a = t.commands) == null ? void 0 : a.setAlignImageDrawer) == null ? void 0 : o.call(a, n);
      },
      isActive: () => t.isActive({ align: n }) || !1,
      disabled: !1
    }
  }));
}
function Ss(t) {
  const e = ["size-small", "size-medium", "size-large"], r = [
    "SizeS",
    "SizeM",
    "SizeL"
  ];
  return e.map((n, a) => ({
    type: `video-${n}`,
    component: O,
    componentProps: {
      tooltip: Z.t(`editor.${n.replace("-", ".")}.tooltip`),
      icon: r[a],
      action: () => t.commands.updateVideo({ width: Ce[n] }),
      isActive: () => t.isActive("video", { width: Ce[n] })
    }
  }));
}
function Ms(t) {
  return [
    {
      type: "flipX",
      component: O,
      componentProps: {
        editor: t,
        tooltip: Z.t("editor.tooltip.flipX"),
        icon: "FlipX",
        action: () => {
          const e = t.getAttributes("image"), { flipX: r } = e;
          t.chain().focus(void 0, { scrollIntoView: !1 }).updateImage({
            flipX: !r
          }).run();
        }
      }
    },
    {
      type: "flipY",
      component: O,
      componentProps: {
        editor: t,
        tooltip: Z.t("editor.tooltip.flipY"),
        icon: "FlipY",
        action: () => {
          const e = t.getAttributes("image"), { flipY: r } = e;
          t.chain().focus(void 0, { scrollIntoView: !1 }).updateImage({
            flipY: !r
          }).run();
        }
      }
    },
    ...bs(t),
    ...Cs(t),
    {
      type: "remove",
      component: O,
      componentProps: {
        editor: t,
        tooltip: Z.t("editor.remove"),
        icon: "Trash2",
        action: () => {
          const { state: e, dispatch: r } = t.view;
          Ft(e, r);
        }
      }
    }
  ];
}
function As(t) {
  return [
    ...ys(t),
    ...Ts(t),
    {
      type: "remove",
      component: O,
      componentProps: {
        editor: t,
        tooltip: Z.t("editor.remove"),
        icon: "Trash2",
        action: () => {
          const { state: e, dispatch: r } = t.view;
          Ft(e, r);
        }
      }
    }
  ];
}
function Ls(t) {
  return [
    ...Ns(t),
    {
      type: "edit",
      component: O,
      componentProps: {
        editor: t,
        tooltip: Z.t("editor.edit"),
        icon: "Pencil",
        action: () => !0
      }
    },
    {
      type: "remove",
      component: O,
      componentProps: {
        editor: t,
        tooltip: Z.t("editor.remove"),
        icon: "Trash2",
        action: () => {
          const { state: e, dispatch: r } = t.view;
          Ft(e, r);
        }
      }
    }
  ];
}
function Is(t) {
  return [
    ...ks(t),
    {
      type: "edit",
      component: O,
      componentProps: {
        editor: t,
        tooltip: Z.t("editor.edit"),
        icon: "Pencil",
        action: () => (console.log("AAA"), !0)
      }
    },
    {
      type: "remove",
      component: O,
      componentProps: {
        editor: t,
        tooltip: Z.t("editor.remove"),
        icon: "Trash2",
        action: () => {
          const { state: e, dispatch: r } = t.view;
          Ft(e, r);
        }
      }
    }
  ];
}
function Es(t) {
  return [
    ...Ss(t),
    {
      type: "remove",
      component: O,
      componentProps: {
        editor: t,
        tooltip: Z.t("editor.remove"),
        icon: "Trash2",
        action: () => {
          const { state: e, dispatch: r } = t.view;
          Ft(e, r);
        }
      }
    }
  ];
}
function zs(t, e) {
  return Li.reduce((r, n) => {
    if (n === "divider" && r.length > 0)
      return [...r, {
        type: "divider",
        component: void 0,
        componentProps: {}
      }];
    const a = t.extensionManager.extensions.find((o) => o.name === n);
    return a ? [...r, a.configure().options.button({ editor: t, t: e, extension: a })] : r;
  }, []);
}
function Ue(t, e, r) {
  const n = [], a = t.node(0);
  r = typeof r == "number" && r >= 0 ? r : t.sameParent(e) ? Math.max(0, t.sharedDepth(e.pos) - 1) : t.sharedDepth(e.pos);
  const o = new Bi(t, e, r), c = o.depth === 0 ? 0 : a.resolve(o.start).posAtIndex(0);
  return o.parent.forEach((l, s) => {
    const h = c + s, d = h + l.nodeSize;
    if (h < o.start || h >= o.end) return;
    const u = new $i(a.resolve(h), a.resolve(d));
    n.push(u);
  }), n;
}
class Ge {
  constructor(e, r) {
    Xt(this, "anchor");
    Xt(this, "head");
    this.anchor = e, this.head = r;
  }
  map(e) {
    return new Ge(e.map(this.anchor), e.map(this.head));
  }
  resolve(e) {
    const r = e.resolve(this.anchor), n = e.resolve(this.head);
    return new at(r, n);
  }
}
class at extends Vi {
  constructor(r, n, a, o = 1) {
    const { doc: c } = r, l = r === n, s = r.pos === c.content.size && n.pos === c.content.size, h = l && !s ? c.resolve(n.pos + (o > 0 ? 1 : -1)) : n, d = l && s ? c.resolve(r.pos - (o > 0 ? 1 : -1)) : r, u = Ue(d.min(h), d.max(h), a);
    super(
      h.pos >= r.pos ? u[0].$from : u[u.length - 1].$to,
      h.pos >= r.pos ? u[u.length - 1].$to : u[0].$from,
      u
    );
    Xt(this, "depth");
    this.depth = a;
  }
  get $to() {
    return this.ranges[this.ranges.length - 1].$to;
  }
  eq(r) {
    return r instanceof at && r.$from.pos === this.$from.pos && r.$to.pos === this.$to.pos;
  }
  map(r, n) {
    const a = r.resolve(n.map(this.anchor)), o = r.resolve(n.map(this.head));
    return new at(a, o);
  }
  toJSON() {
    return { type: "nodeRange", anchor: this.anchor, head: this.head };
  }
  get isForwards() {
    return this.head >= this.anchor;
  }
  get isBackwards() {
    return !this.isForwards;
  }
  extendBackwards() {
    const { doc: r } = this.$from;
    if (this.isForwards && this.ranges.length > 1) {
      const o = this.ranges.slice(0, -1), c = o[0].$from, l = o[o.length - 1].$to;
      return new at(c, l, this.depth);
    }
    const n = this.ranges[0], a = r.resolve(Math.max(0, n.$from.pos - 1));
    return new at(this.$anchor, a, this.depth);
  }
  extendForwards() {
    const { doc: r } = this.$from;
    if (this.isBackwards && this.ranges.length > 1) {
      const o = this.ranges.slice(1), c = o[0].$from, l = o[o.length - 1].$to;
      return new at(l, c, this.depth);
    }
    const n = this.ranges[this.ranges.length - 1], a = r.resolve(Math.min(r.content.size, n.$to.pos + 1));
    return new at(this.$anchor, a, this.depth);
  }
  static fromJSON(r, n) {
    return new at(r.resolve(n.anchor), r.resolve(n.head));
  }
  static create(r, n, a, o, c = 1) {
    return new this(r.resolve(n), r.resolve(a), o, c);
  }
  getBookmark() {
    return new Ge(this.anchor, this.head);
  }
}
function Ps(t) {
  const e = t.cloneNode(!0), r = [t, ...Array.from(t.getElementsByTagName("*"))], n = [e, ...Array.from(e.getElementsByTagName("*"))];
  return r.forEach((a, o) => {
    n[o].style.cssText = function(c) {
      let l = "";
      const s = getComputedStyle(c);
      for (let h = 0; h < s.length; h += 1)
        l += `${s[h]}:${s.getPropertyValue(s[h])};`;
      return l;
    }(a);
  }), e;
}
function Qt(t, e) {
  return window.getComputedStyle(t)[e];
}
function Rs(t = 0, e = 0, r = 0) {
  return Math.min(Math.max(t, e), r);
}
function xr(t) {
  t.parentNode !== null && t.parentNode !== void 0 && t.parentNode.removeChild(t);
}
function ai(t) {
  const { x: e, y: r, direction: n, editor: a } = t;
  let o = null, c = null, l = null, s = e;
  for (; c === null && s < window.innerWidth && s > 0; ) {
    const h = document.elementsFromPoint(s, r), d = h.findIndex((m) => m.classList.contains("ProseMirror")), u = h.slice(0, d);
    if (u.length > 0) {
      const m = u[0];
      if (o = m, l = a.view.posAtDOM(m, 0), l >= 0) {
        c = a.state.doc.nodeAt(Math.max(l - 1, 0)), (c === null || c.isText) && (c = a.state.doc.nodeAt(Math.max(l - 1, 0))), c || (c = a.state.doc.nodeAt(Math.max(l, 0)));
        break;
      }
    }
    n === "left" ? s -= 1 : s += 1;
  }
  return {
    resultElement: o,
    resultNode: c,
    pos: l !== null ? l : null
  };
}
function Os(t, e) {
  const { doc: r } = e.view.state, n = ai({ editor: e, x: t.clientX, y: t.clientY, direction: "right" });
  if (!n.resultNode || n.pos === null) return [];
  const a = t.clientX, o = function(d, u, m) {
    const x = Number.parseInt(Qt(d.dom, "paddingLeft"), 10), w = Number.parseInt(Qt(d.dom, "paddingRight"), 10), p = Number.parseInt(Qt(d.dom, "borderLeftWidth"), 10), f = Number.parseInt(Qt(d.dom, "borderLeftWidth"), 10), I = d.dom.getBoundingClientRect();
    return {
      left: Rs(
        u,
        I.left + x + p,
        I.right - w - f
      ),
      top: m
    };
  }(e.view, a, t.clientY), c = e.view.posAtCoords(o);
  if (!c) return [];
  const { pos: l } = c;
  if (!r.resolve(l).parent) return [];
  const s = r.resolve(n.pos), h = r.resolve(n.pos + 1);
  return Ue(s, h, 0);
}
function fr(t, e) {
  const r = t.resolve(e), { depth: n } = r;
  return n === 0 ? e : r.pos - r.parentOffset - 1;
}
function gr(t, e) {
  const r = t.nodeAt(e), n = t.resolve(e);
  let { depth: a } = n, o = r;
  for (; a > 0; ) {
    const c = n.node(a);
    a -= 1, a === 0 && (o = c);
  }
  return o;
}
function pr(t, e) {
  let r = e;
  for (; r && r.parentNode && r.parentNode !== t.dom; ) r = r.parentNode;
  return r;
}
const ci = new He("dragHandle");
function Hs({
  pluginKey: t = ci,
  element: e,
  editor: r,
  tippyOptions: n,
  onNodeChange: a
}) {
  const o = document.createElement("div");
  let c = null, l = !1, s = null, h = -1;
  return e.addEventListener("dragstart", (d) => {
    const { view: u } = r;
    if (!d.dataTransfer) return;
    const { empty: m, $from: x, $to: w } = u.state.selection, p = Os(d, r), f = Ue(x, w, 0), I = f.some((E) => p.find((b) => b.$from === E.$from && b.$to === E.$to)), T = m || !I ? p : f;
    if (T.length === 0) return;
    const { tr: v } = u.state, y = document.createElement("div"), C = T[0].$from.pos, M = T[T.length - 1].$to.pos, L = at.create(u.state.doc, C, M), N = L.content();
    T.forEach((E) => {
      const b = Ps(u.nodeDOM(E.$from.pos));
      y.append(b);
    }), y.style.position = "absolute", y.style.top = "-10000px", document.body.append(y), d.dataTransfer.clearData(), d.dataTransfer.setDragImage(y, 0, 0), u.dragging = { slice: N, move: !0 }, v.setSelection(L), u.dispatch(v), document.addEventListener("drop", () => xr(y), { once: !0 }), setTimeout(() => {
      e && (e.style.pointerEvents = "none");
    }, 0);
  }), e.addEventListener("dragend", () => {
    e && (e.style.pointerEvents = "auto");
  }), new De({
    key: typeof t == "string" ? new He(t) : t,
    state: {
      init: () => ({ locked: !1 }),
      apply(d, u) {
        const m = d.getMeta("lockDragHandle"), x = d.getMeta("hideDragHandle");
        if (m !== void 0 && (l = m), x && c)
          return c.hide(), l = !1, s = null, h = -1, a == null || a({ editor: r, node: null, pos: -1 }), u;
        if (d.docChanged && h !== -1 && e && c) {
          const w = d.mapping.map(h);
          w !== h && (h = w);
        }
        return u;
      }
    },
    view: (d) => {
      return u(), m(r.view.dom), c = ho(d.dom, {
        ...x(),
        ...n
      }), {
        update(y, C) {
          if (!w(e, c) || (e.draggable = !l, !p(y, C)))
            return;
          const M = f(y);
          M && I(y, M);
        },
        destroy() {
          v();
        }
      };
      function u() {
        e.draggable = !0, e.style.pointerEvents = "auto";
      }
      function m(y) {
        var C;
        (C = y.parentElement) == null || C.appendChild(o), o.appendChild(e), Object.assign(o.style, {
          pointerEvents: "none",
          position: "absolute",
          top: "0",
          left: "0"
        });
      }
      function x() {
        return {
          getReferenceClientRect: null,
          interactive: !0,
          trigger: "manual",
          placement: "left-start",
          hideOnClick: !1,
          duration: 100,
          zIndex: 10,
          appendTo: o,
          content: e,
          popperOptions: {
            modifiers: [
              { name: "flip", enabled: !1 },
              {
                name: "preventOverflow",
                options: {
                  rootBoundary: "document",
                  mainAxis: !1
                }
              }
            ]
          }
        };
      }
      function w(y, C) {
        return y && C;
      }
      function p(y, C) {
        return !y.state.doc.eq(C.doc) && h !== -1;
      }
      function f(y) {
        let C = y.nodeDOM(h);
        return C = pr(y, C), C === y.dom || (C == null ? void 0 : C.nodeType) !== 1 ? null : C;
      }
      function I(y, C) {
        const M = y.posAtDOM(C, 0), L = gr(r.state.doc, M);
        if (L === s)
          return;
        const N = fr(r.state.doc, M);
        s = L, h = N, a == null || a({
          editor: r,
          node: s,
          pos: h
        }), T(C);
      }
      function T(y) {
        c.setProps({
          getReferenceClientRect: () => y.getBoundingClientRect()
        }), c.show();
      }
      function v() {
        c == null || c.destroy(), e && xr(o);
      }
    },
    props: {
      handleDOMEvents: {
        mouseleave: (d, u) => {
          if (l || !m(u)) return !1;
          return x(), w(), !1;
          function m(p) {
            return p.target && !o.contains(p.relatedTarget);
          }
          function x() {
            c == null || c.hide();
          }
          function w() {
            s = null, h = -1, a == null || a({
              editor: r,
              node: null,
              pos: -1
            });
          }
        },
        mousemove: Oe((d, u) => {
          if (!e || !c || l)
            return !1;
          const m = ai({
            x: u.clientX,
            y: u.clientY,
            direction: "right",
            editor: r
          });
          if (!m.resultElement || m.resultElement === d.dom)
            return !1;
          const x = pr(d, m.resultElement);
          if (x === d.dom || (x == null ? void 0 : x.nodeType) !== 1)
            return !1;
          const w = d.posAtDOM(x, 0), p = gr(r.state.doc, w);
          if (p === s)
            return !1;
          const f = fr(r.state.doc, w);
          return s = p, h = f, a == null || a({
            editor: r,
            node: s,
            pos: h
          }), c.setProps({
            getReferenceClientRect: () => x.getBoundingClientRect()
          }), c.show(), !1;
        }, 100)
      }
    }
  });
}
function Ds(t) {
  var N, E, b;
  const { pluginKey: e = ci } = t, { t: r } = q(), [n, a] = S(null), [o, c] = S(-1), l = J(null), s = J(null), [h, d] = S(!1), u = t.editor.extensionManager.extensions.some((k) => k.name === "textAlign"), m = t.editor.extensionManager.extensions.some((k) => k.name === "indent"), x = t.editor.extensionManager.extensions.some((k) => k.name === "clear");
  B(() => {
    l.current && !t.editor.isDestroyed && (s.current = Hs({
      editor: t.editor,
      element: l.current,
      pluginKey: "ContentItemMenu",
      tippyOptions: {
        offset: [-2, 16],
        zIndex: 99,
        moveTransition: "transform 0.15s ease-out"
      },
      onNodeChange: C
    }), t.editor.registerPlugin(s.current));
  }, [t.editor, l]);
  function w() {
    const k = t.editor.chain();
    k.setNodeSelection(o).unsetAllMarks(), (n == null ? void 0 : n.type.name) !== "paragraph" && k.setParagraph(), k.run();
  }
  function p() {
    t.editor.chain().focus().setNodeSelection(o).run(), document.execCommand("copy");
  }
  function f() {
    t.editor.commands.setNodeSelection(o);
    const { $anchor: k } = t.editor.state.selection, _ = k.node(1) || t.editor.state.selection.node;
    t.editor.chain().setMeta("hideDragHandle", !0).insertContentAt(o + ((n == null ? void 0 : n.nodeSize) || 0), _.toJSON()).run();
  }
  function I(k) {
    t.editor.commands.setTextAlign(k);
  }
  function T() {
    const k = Ae(t.editor.state.tr, o, 1);
    k.setMeta("hideDragHandle", !0), t.editor.view.dispatch && t.editor.view.dispatch(k);
  }
  function v() {
    const k = Ae(t.editor.state.tr, o, -1);
    t.editor.view.dispatch && t.editor.view.dispatch(k);
  }
  function y() {
    t.editor.chain().setMeta("hideDragHandle", !0).setNodeSelection(o).deleteSelection().run();
  }
  function C(k) {
    k.node && a(k.node), c(k.pos);
  }
  function M() {
    var k;
    if (o !== -1) {
      const _ = (n == null ? void 0 : n.nodeSize) || 0, D = o + _, R = (n == null ? void 0 : n.type.name) === "paragraph" && ((k = n == null ? void 0 : n.content) == null ? void 0 : k.size) === 0, A = R ? o + 2 : D + 2;
      t.editor.chain().command(({ dispatch: $, tr: F, state: Y }) => $ ? (R ? F.insertText("/", o, o + 1) : F.insert(
        D,
        Y.schema.nodes.paragraph.create(null, [Y.schema.text("/")])
      ), $(F)) : !0).focus(A).run();
    }
  }
  B(() => (h ? t.editor.commands.setMeta("lockDragHandle", !0) : t.editor.commands.setMeta("lockDragHandle", !1), () => {
    t.editor.commands.setMeta("lockDragHandle", !1);
  }), [h]), B(() => () => {
    s.current && (t.editor.unregisterPlugin(e), s.current = null);
  }, []), B(() => {
    var k;
    (k = t.editor) != null && k.isDestroyed && s.current && (t.editor.unregisterPlugin(e), s.current = null);
  }, [(N = t.editor) == null ? void 0 : N.isDestroyed]);
  const L = (k) => {
    t != null && t.disabled || d(k);
  };
  return /* @__PURE__ */ i(
    "div",
    {
      ref: l,
      className: `drag-handle richtext-duration-200 richtext-ease-in-out [transition-property:top,_left] ${t == null ? void 0 : t.className}`,
      style: {
        opacity: t != null && t.disabled ? 0 : 1
      },
      children: /* @__PURE__ */ g("div", { className: "richtext-flex richtext-items-center richtext-gap-0.5 richtext-duration-200 richtext-ease-in-out [transition-property:top,_left]", children: [
        /* @__PURE__ */ i(
          G,
          {
            className: "!richtext-size-7 richtext-cursor-grab",
            disabled: t == null ? void 0 : t.disabled,
            onClick: M,
            size: "icon",
            type: "button",
            variant: "ghost",
            children: /* @__PURE__ */ i(
              K,
              {
                className: "richtext-text-lg richtext-text-neutral-600 dark:richtext-text-neutral-200",
                name: "Plus"
              }
            )
          }
        ),
        /* @__PURE__ */ g(
          Mo,
          {
            onOpenChange: L,
            open: h,
            children: [
              /* @__PURE__ */ g("div", { className: "richtext-relative richtext-flex richtext-flex-col", children: [
                /* @__PURE__ */ g(jr, { children: [
                  /* @__PURE__ */ i(
                    Xr,
                    {
                      asChild: !0,
                      disabled: t == null ? void 0 : t.disabled,
                      children: /* @__PURE__ */ i(
                        G,
                        {
                          className: "richtext-relative richtext-z-[1] !richtext-size-7 richtext-cursor-grab",
                          disabled: t == null ? void 0 : t.disabled,
                          size: "icon",
                          type: "button",
                          variant: "ghost",
                          onMouseUp: (k) => {
                            k.preventDefault(), !(t != null && t.disabled) && d(!0);
                          },
                          children: /* @__PURE__ */ i(
                            K,
                            {
                              className: "richtext-text-sm richtext-text-neutral-600 dark:richtext-text-neutral-200",
                              name: "Grip"
                            }
                          )
                        }
                      )
                    }
                  ),
                  /* @__PURE__ */ i(We, { children: r("editor.draghandle.tooltip") })
                ] }),
                /* @__PURE__ */ i(Ao, { className: "richtext-absolute richtext-left-0 richtext-top-0 richtext-z-0 richtext-size-[28px]" })
              ] }),
              /* @__PURE__ */ g(
                Dr,
                {
                  align: "start",
                  className: "richtext-w-48",
                  side: "bottom",
                  sideOffset: 0,
                  children: [
                    /* @__PURE__ */ g(
                      ot,
                      {
                        className: "richtext-flex richtext-gap-3 richtext-bg-opacity-10 hover:richtext-bg-red-400 hover:richtext-bg-opacity-20 focus:richtext-bg-red-400 focus:richtext-bg-opacity-30 focus:richtext-text-red-500 dark:hover:richtext-bg-opacity-20 dark:hover:richtext-text-red-500",
                        onClick: y,
                        children: [
                          /* @__PURE__ */ i(K, { name: "Trash2" }),
                          /* @__PURE__ */ i("span", { children: r("editor.remove") })
                        ]
                      }
                    ),
                    x ? /* @__PURE__ */ g(
                      ot,
                      {
                        className: "richtext-flex richtext-gap-3",
                        onClick: w,
                        children: [
                          /* @__PURE__ */ i(K, { name: "PaintRoller" }),
                          /* @__PURE__ */ i("span", { children: r("editor.clear.tooltip") })
                        ]
                      }
                    ) : null,
                    /* @__PURE__ */ g(
                      ot,
                      {
                        className: "richtext-flex richtext-gap-3",
                        onClick: p,
                        children: [
                          /* @__PURE__ */ i(K, { name: "Clipboard" }),
                          /* @__PURE__ */ i("span", { children: r("editor.copyToClipboard") })
                        ]
                      }
                    ),
                    /* @__PURE__ */ g(
                      ot,
                      {
                        className: "richtext-flex richtext-gap-3",
                        onClick: f,
                        children: [
                          /* @__PURE__ */ i(K, { name: "Copy" }),
                          /* @__PURE__ */ i("span", { children: r("editor.copy") })
                        ]
                      }
                    ),
                    u || m ? /* @__PURE__ */ i(_r, {}) : null,
                    u ? /* @__PURE__ */ g(tr, { children: [
                      /* @__PURE__ */ g(ke, { className: "richtext-flex richtext-gap-3", children: [
                        /* @__PURE__ */ i(K, { name: "AlignCenter" }),
                        /* @__PURE__ */ i("span", { children: r("editor.textalign.tooltip") })
                      ] }),
                      /* @__PURE__ */ i(Qe, { children: /* @__PURE__ */ g(Se, { children: [
                        /* @__PURE__ */ g(
                          ot,
                          {
                            className: "richtext-flex richtext-gap-3",
                            onClick: () => I("left"),
                            children: [
                              /* @__PURE__ */ i(K, { name: "AlignLeft" }),
                              /* @__PURE__ */ i("span", { children: r("editor.textalign.left.tooltip") })
                            ]
                          }
                        ),
                        /* @__PURE__ */ g(
                          ot,
                          {
                            className: "richtext-flex richtext-gap-3",
                            onClick: () => I("center"),
                            children: [
                              /* @__PURE__ */ i(K, { name: "AlignCenter" }),
                              /* @__PURE__ */ i("span", { children: r("editor.textalign.center.tooltip") })
                            ]
                          }
                        ),
                        /* @__PURE__ */ g(
                          ot,
                          {
                            className: "richtext-flex richtext-gap-3",
                            onClick: () => I("right"),
                            children: [
                              /* @__PURE__ */ i(K, { name: "AlignRight" }),
                              /* @__PURE__ */ i("span", { children: r("editor.textalign.right.tooltip") })
                            ]
                          }
                        )
                      ] }) })
                    ] }) : null,
                    m ? /* @__PURE__ */ g(tr, { children: [
                      /* @__PURE__ */ g(ke, { className: "richtext-flex richtext-gap-3", children: [
                        /* @__PURE__ */ i(K, { name: "IndentIncrease" }),
                        /* @__PURE__ */ i("span", { children: r("editor.indent") })
                      ] }),
                      /* @__PURE__ */ i(Qe, { children: /* @__PURE__ */ g(Se, { children: [
                        /* @__PURE__ */ g(
                          ot,
                          {
                            className: "richtext-flex richtext-gap-3",
                            disabled: ((E = n == null ? void 0 : n.attrs) == null ? void 0 : E.indent) >= Me.max,
                            onClick: T,
                            children: [
                              /* @__PURE__ */ i(K, { name: "IndentIncrease" }),
                              /* @__PURE__ */ i("span", { children: r("editor.indent.tooltip") })
                            ]
                          }
                        ),
                        /* @__PURE__ */ g(
                          ot,
                          {
                            className: "richtext-flex richtext-gap-3",
                            disabled: ((b = n == null ? void 0 : n.attrs) == null ? void 0 : b.indent) <= Me.min,
                            onClick: v,
                            children: [
                              /* @__PURE__ */ i(K, { name: "IndentDecrease" }),
                              /* @__PURE__ */ i("span", { children: r("editor.outdent.tooltip") })
                            ]
                          }
                        )
                      ] }) })
                    ] }) : null
                  ]
                }
              )
            ]
          }
        )
      ] })
    }
  );
}
const _s = {
  maxWidth: "auto",
  zIndex: 20,
  appendTo: "parent",
  moveTransition: "transform 0.1s ease-out"
};
function Bs({ item: t, disabled: e, editor: r }) {
  var a;
  const n = t.component;
  return n ? /* @__PURE__ */ i(
    n,
    {
      ...t.componentProps,
      disabled: e || ((a = t == null ? void 0 : t.componentProps) == null ? void 0 : a.disabled),
      editor: r
    }
  ) : /* @__PURE__ */ i(V, {});
}
function $s(t) {
  const { t: e, lang: r } = q(), n = ({ editor: o }) => {
    const { selection: c } = o.view.state, { $from: l, to: s } = c;
    return l.pos === s ? !1 : c instanceof Wt;
  }, a = U(() => t.disabled || !(t != null && t.editor) ? [] : zs(t.editor, e), [t.disabled, t.editor, r, e]);
  return /* @__PURE__ */ i(
    tt,
    {
      editor: t == null ? void 0 : t.editor,
      shouldShow: n,
      tippyOptions: _s,
      children: a != null && a.length ? /* @__PURE__ */ i("div", { className: "richtext-pointer-events-auto richtext-w-auto richtext-select-none richtext-rounded-sm !richtext-border richtext-border-neutral-200 richtext-bg-background richtext-px-3 richtext-py-2 richtext-shadow-sm richtext-transition-all dark:richtext-border-neutral-800", children: /* @__PURE__ */ i("div", { className: "richtext-relative richtext-flex richtext-h-[26px] richtext-flex-nowrap richtext-items-center richtext-justify-start richtext-gap-[4px] richtext-whitespace-nowrap", children: a == null ? void 0 : a.map((o, c) => (o == null ? void 0 : o.type) === "divider" ? /* @__PURE__ */ i(
        rt,
        {
          className: "!richtext-mx-1 !richtext-my-2 !richtext-h-[16px]",
          orientation: "vertical"
        },
        `bubbleMenu-divider-${c}`
      ) : /* @__PURE__ */ i(
        Bs,
        {
          disabled: t.disabled,
          editor: t.editor,
          item: o
        },
        `bubbleMenu-text-${c}`
      )) }) }) : /* @__PURE__ */ i(V, {})
    }
  );
}
function Vs({ editor: t, disabled: e, actions: r }) {
  var f, I, T, v, y, C, M, L, N, E, b, k, _, D, R, A, $, F;
  const n = ({ editor: Y }) => Ni(Y.view.state, "table"), { t: a } = q();
  function o() {
    t.chain().focus().addColumnBefore().run();
  }
  function c() {
    t.chain().focus().addColumnAfter().run();
  }
  function l() {
    t.chain().focus().deleteColumn().run();
  }
  function s() {
    t.chain().focus().addRowBefore().run();
  }
  function h() {
    t.chain().focus().addRowAfter().run();
  }
  function d() {
    t.chain().focus().deleteRow().run();
  }
  function u() {
    t.chain().focus().mergeCells().run();
  }
  function m() {
    t == null || t.chain().focus().splitCell().run();
  }
  function x() {
    t.chain().focus().deleteTable().run();
  }
  function w(Y) {
    t.chain().focus().setTableCellBackground(Y).run();
  }
  return /* @__PURE__ */ i(
    tt,
    {
      editor: t,
      pluginKey: "table",
      shouldShow: n,
      updateDelay: 0,
      tippyOptions: {
        offset: [0, 8],
        popperOptions: {
          modifiers: [{ name: "flip", enabled: !1 }]
        },
        maxWidth: "auto",
        getReferenceClientRect: () => {
          var Ke;
          const {
            view: Y,
            state: {
              selection: { from: nt }
            }
          } = t, Nt = Y.domAtPos(nt).node;
          if (!Nt)
            return new DOMRect(-1e3, -1e3, 0, 0);
          const Ye = (Ke = Nt == null ? void 0 : Nt.closest) == null ? void 0 : Ke.call(Nt, ".tableWrapper");
          return Ye ? Ye.getBoundingClientRect() : new DOMRect(-1e3, -1e3, 0, 0);
        },
        plugins: [uo],
        sticky: "popper"
      },
      children: e ? /* @__PURE__ */ i(V, {}) : /* @__PURE__ */ g("div", { className: "richtext-flex richtext-size-full richtext-min-w-32 richtext-flex-row richtext-items-center richtext-gap-0.5 richtext-rounded-lg !richtext-border richtext-border-border richtext-bg-background richtext-p-2 richtext-leading-none richtext-shadow-sm", children: [
        /* @__PURE__ */ i(
          O,
          {
            action: o,
            disabled: !((I = (f = t == null ? void 0 : t.can()) == null ? void 0 : f.addColumnBefore) != null && I.call(f)),
            icon: "BetweenHorizonalEnd",
            tooltip: a("editor.table.menu.insertColumnBefore"),
            "tooltip-options": {
              sideOffset: 15
            }
          }
        ),
        /* @__PURE__ */ i(
          O,
          {
            action: c,
            disabled: !((v = (T = t == null ? void 0 : t.can()) == null ? void 0 : T.addColumnAfter) != null && v.call(T)),
            icon: "BetweenHorizonalStart",
            tooltip: a("editor.table.menu.insertColumnAfter"),
            "tooltip-options": {
              sideOffset: 15
            }
          }
        ),
        /* @__PURE__ */ i(
          O,
          {
            action: l,
            disabled: !((C = t == null ? void 0 : (y = t.can()).deleteColumn) != null && C.call(y)),
            icon: "DeleteColumn",
            tooltip: a("editor.table.menu.deleteColumn"),
            "tooltip-options": {
              sideOffset: 15
            }
          }
        ),
        /* @__PURE__ */ i(
          rt,
          {
            className: "!richtext-mx-1 !richtext-my-2 !richtext-h-[16px]",
            orientation: "vertical"
          }
        ),
        /* @__PURE__ */ i(
          O,
          {
            action: s,
            disabled: !((L = t == null ? void 0 : (M = t.can()).addRowBefore) != null && L.call(M)),
            icon: "BetweenVerticalEnd",
            tooltip: a("editor.table.menu.insertRowAbove"),
            "tooltip-options": {
              sideOffset: 15
            }
          }
        ),
        /* @__PURE__ */ i(
          O,
          {
            action: h,
            disabled: !((E = (N = t == null ? void 0 : t.can()) == null ? void 0 : N.addRowAfter) != null && E.call(N)),
            icon: "BetweenVerticalStart",
            tooltip: a("editor.table.menu.insertRowBelow"),
            "tooltip-options": {
              sideOffset: 15
            }
          }
        ),
        /* @__PURE__ */ i(
          O,
          {
            action: d,
            disabled: !((k = (b = t == null ? void 0 : t.can()) == null ? void 0 : b.deleteRow) != null && k.call(b)),
            icon: "DeleteRow",
            tooltip: a("editor.table.menu.deleteRow"),
            "tooltip-options": {
              sideOffset: 15
            }
          }
        ),
        /* @__PURE__ */ i(
          rt,
          {
            className: "!richtext-mx-1 !richtext-my-2 !richtext-h-[16px]",
            orientation: "vertical"
          }
        ),
        /* @__PURE__ */ i(
          O,
          {
            action: u,
            disabled: !((D = (_ = t == null ? void 0 : t.can()) == null ? void 0 : _.mergeCells) != null && D.call(_)),
            icon: "TableCellsMerge",
            tooltip: a("editor.table.menu.mergeCells"),
            "tooltip-options": {
              sideOffset: 15
            }
          }
        ),
        /* @__PURE__ */ i(
          O,
          {
            action: m,
            disabled: !((A = (R = t == null ? void 0 : t.can()) == null ? void 0 : R.splitCell) != null && A.call(R)),
            icon: "TableCellsSplit",
            tooltip: a("editor.table.menu.splitCells"),
            "tooltip-options": {
              sideOffset: 15
            }
          }
        ),
        /* @__PURE__ */ i(
          rt,
          {
            className: "!richtext-mx-1 !richtext-my-2 !richtext-h-[16px]",
            orientation: "vertical"
          }
        ),
        /* @__PURE__ */ i(
          xa,
          {
            action: w,
            editor: t,
            tooltip: a("editor.table.menu.setCellsBgColor"),
            tooltipOptions: {
              sideOffset: 15
            }
          }
        ),
        /* @__PURE__ */ i(
          O,
          {
            action: x,
            disabled: !((F = ($ = t == null ? void 0 : t.can()) == null ? void 0 : $.deleteTable) != null && F.call($)),
            icon: "Trash2",
            tooltip: a("editor.table.menu.deleteTable"),
            "tooltip-options": {
              sideOffset: 15
            }
          }
        ),
        r && r.map((Y, nt) => /* @__PURE__ */ i(
          O,
          {
            ...Y
          },
          nt
        ))
      ] })
    }
  );
}
function Ws(t) {
  const { t: e } = q();
  return /* @__PURE__ */ g("div", { className: "richtext-flex richtext-items-center richtext-gap-2 richtext-p-2 richtext-bg-white !richtext-border richtext-rounded-lg richtext-shadow-sm dark:richtext-bg-black richtext-border-neutral-200 dark:richtext-border-neutral-800", children: [
    /* @__PURE__ */ i(
      "a",
      {
        href: t == null ? void 0 : t.link,
        target: "_blank",
        rel: "noopener noreferrer",
        className: "richtext-text-sm richtext-underline richtext-break-all",
        children: Wi(t == null ? void 0 : t.link, {
          length: 50,
          omission: "…"
        })
      }
    ),
    (t == null ? void 0 : t.link) && /* @__PURE__ */ i(rt, { orientation: "vertical", className: "!richtext-h-4" }),
    /* @__PURE__ */ g("div", { className: "richtext-flex richtext-flex-nowrap", children: [
      /* @__PURE__ */ i(
        O,
        {
          icon: "Pencil",
          tooltip: e("editor.link.edit.tooltip"),
          action: () => {
            t == null || t.onEdit();
          },
          tooltipOptions: { sideOffset: 15 }
        }
      ),
      /* @__PURE__ */ i(
        O,
        {
          icon: "Unlink",
          tooltip: e("editor.link.unlink.tooltip"),
          action: () => {
            t == null || t.onClear();
          },
          tooltipOptions: { sideOffset: 15 }
        }
      )
    ] })
  ] });
}
function Fs({ editor: t, disabled: e }) {
  const [r, n] = S(!1), a = U(() => {
    const { href: s } = t.getAttributes("link");
    return s;
  }, [t]), o = H(({ editor: s }) => s.isActive("link"), []), c = (s, h, d) => {
    t.chain().extendMarkRange("link").insertContent({
      type: "text",
      text: h,
      marks: [
        {
          type: "link",
          attrs: {
            href: s,
            target: d ? "_blank" : ""
          }
        }
      ]
    }).setLink({ href: s }).focus().run(), n(!1);
  }, l = H(() => {
    t.chain().extendMarkRange("link").unsetLink().focus().run(), n(!1);
  }, [t]);
  return /* @__PURE__ */ i(V, { children: /* @__PURE__ */ i(
    tt,
    {
      editor: t,
      shouldShow: o,
      tippyOptions: {
        popperOptions: {
          modifiers: [{ name: "flip", enabled: !1 }]
        },
        placement: "bottom-start",
        offset: [-2, 16],
        zIndex: 9999,
        onHidden: () => {
          n(!1);
        }
      },
      children: e ? /* @__PURE__ */ i(V, {}) : /* @__PURE__ */ i(V, { children: r ? /* @__PURE__ */ i(fa, { onSetLink: c, editor: t }) : /* @__PURE__ */ i(
        Ws,
        {
          editor: t,
          onClear: l,
          onEdit: () => {
            n(!0);
          },
          link: a
        }
      ) })
    }
  ) });
}
const qe = {
  maxWidth: "auto",
  zIndex: 20,
  appendTo: "parent",
  moveTransition: "transform 0.1s ease-out"
};
function je({ item: t, disabled: e, editor: r }) {
  var a;
  const n = t.component;
  return n ? /* @__PURE__ */ i(Pe, { children: t.type === "divider" ? /* @__PURE__ */ i(
    rt,
    {
      className: "!richtext-mx-1 !richtext-my-2 !richtext-h-[16px]",
      orientation: "vertical"
    }
  ) : /* @__PURE__ */ i(
    n,
    {
      ...t.componentProps,
      disabled: e || ((a = t == null ? void 0 : t.componentProps) == null ? void 0 : a.disabled),
      editor: r
    }
  ) }) : /* @__PURE__ */ i(V, {});
}
function Us(t) {
  return t.type.name === Vt.name;
}
function Gs(t) {
  return t.type.name === ei.name;
}
function qs(t) {
  return t.type.name === ti.name;
}
function js(t) {
  const { lang: e } = q(), r = ({ editor: a }) => {
    const { selection: o } = a.view.state, { $from: c, to: l } = o;
    let s = !1;
    return a.view.state.doc.nodesBetween(c.pos, l, (h) => {
      if (Us(h))
        return s = !0, !1;
    }), s;
  }, n = U(() => t.disabled ? [] : Ms(t.editor), [t.disabled, t.editor, e]);
  return /* @__PURE__ */ i(V, { children: /* @__PURE__ */ i(
    tt,
    {
      editor: t == null ? void 0 : t.editor,
      shouldShow: r,
      tippyOptions: qe,
      children: n != null && n.length ? /* @__PURE__ */ i("div", { className: "richtext-pointer-events-auto richtext-w-auto richtext-select-none richtext-rounded-sm !richtext-border richtext-border-neutral-200 richtext-bg-background richtext-px-3 richtext-py-2 richtext-shadow-sm richtext-transition-all dark:richtext-border-neutral-800", children: /* @__PURE__ */ i("div", { className: "richtext-relative richtext-flex richtext-h-[26px] richtext-flex-nowrap richtext-items-center richtext-justify-start richtext-whitespace-nowrap", children: n == null ? void 0 : n.map((a, o) => /* @__PURE__ */ i(
        je,
        {
          disabled: t.disabled,
          editor: t.editor,
          item: a
        },
        `bubbleMenu-image-${o}`
      )) }) }) : /* @__PURE__ */ i(V, {})
    }
  ) });
}
function Xs(t) {
  const { lang: e } = q(), r = ({ editor: a }) => {
    const { selection: o } = a.view.state, { $from: c, to: l } = o;
    let s = !1;
    return a.view.state.doc.nodesBetween(c.pos, l, (h) => {
      if (Gs(h))
        return s = !0, !1;
    }), s;
  }, n = U(() => t.disabled ? [] : As(t.editor), [t.disabled, t.editor, e]);
  return /* @__PURE__ */ i(V, { children: /* @__PURE__ */ i(
    tt,
    {
      editor: t == null ? void 0 : t.editor,
      shouldShow: r,
      tippyOptions: qe,
      children: n != null && n.length ? /* @__PURE__ */ i("div", { className: "richtext-pointer-events-auto richtext-w-auto richtext-select-none richtext-rounded-sm !richtext-border richtext-border-neutral-200 richtext-bg-background richtext-px-3 richtext-py-2 richtext-shadow-sm richtext-transition-all dark:richtext-border-neutral-800", children: /* @__PURE__ */ i("div", { className: "richtext-relative richtext-flex richtext-h-[26px] richtext-flex-nowrap richtext-items-center richtext-justify-start richtext-whitespace-nowrap", children: n == null ? void 0 : n.map((a, o) => /* @__PURE__ */ i(
        je,
        {
          disabled: t.disabled,
          editor: t.editor,
          item: a
        },
        `bubbleMenu-image-gif-${o}`
      )) }) }) : /* @__PURE__ */ i(V, {})
    }
  ) });
}
function Ys(t) {
  const { lang: e } = q(), r = ({ editor: a }) => {
    const { selection: o } = a.view.state, { $from: c, to: l } = o;
    let s = !1;
    return a.view.state.doc.nodesBetween(c.pos, l, (h) => {
      if (qs(h))
        return s = !0, !1;
    }), s;
  }, n = U(() => t.disabled ? [] : Es(t.editor), [t.editor, t.disabled, e]);
  return /* @__PURE__ */ i(V, { children: /* @__PURE__ */ i(
    tt,
    {
      editor: t == null ? void 0 : t.editor,
      shouldShow: r,
      tippyOptions: qe,
      children: n != null && n.length ? /* @__PURE__ */ i("div", { className: "richtext-pointer-events-auto richtext-w-auto richtext-select-none richtext-rounded-sm !richtext-border richtext-border-neutral-200 richtext-bg-background richtext-px-3 richtext-py-2 richtext-shadow-sm richtext-transition-all dark:richtext-border-neutral-800", children: /* @__PURE__ */ i("div", { className: "richtext-relative richtext-flex richtext-h-[26px] richtext-flex-nowrap richtext-items-center richtext-justify-start richtext-whitespace-nowrap", children: n == null ? void 0 : n.map((a, o) => /* @__PURE__ */ i(
        je,
        {
          disabled: t.disabled,
          editor: t.editor,
          item: a
        },
        `bubbleMenu-video-${o}`
      )) }) }) : /* @__PURE__ */ i(V, {})
    }
  ) });
}
function Ks({ editor: t }) {
  const { t: e } = q(), r = H(() => t.isActive(le.name), [t]), n = H(() => Gt(le.name, t), [t]), a = H(() => t.chain().focus().addColBefore().run(), [t]), o = H(() => t.chain().focus().addColAfter().run(), [t]), c = H(() => t.chain().focus().deleteCol().run(), [t]);
  return /* @__PURE__ */ i(
    tt,
    {
      pluginKey: "columns-bubble-menu",
      editor: t,
      shouldShow: r,
      tippyOptions: {
        popperOptions: {
          modifiers: [{ name: "flip", enabled: !1 }]
        },
        placement: "bottom-start",
        offset: [-2, 16],
        zIndex: 9999
        // onHidden: () => {
        //   toggleVisible(false)
        // },
      },
      children: /* @__PURE__ */ g("div", { className: "richtext-w-auto richtext-px-3 richtext-py-2 richtext-transition-all !richtext-border richtext-rounded-sm richtext-shadow-sm richtext-pointer-events-auto richtext-select-none richtext-border-neutral-200 dark:richtext-border-neutral-800 richtext-bg-background", children: [
        /* @__PURE__ */ i(
          O,
          {
            action: a,
            icon: "ColumnAddLeft",
            tooltip: e("editor.table.menu.insertColumnBefore")
          }
        ),
        /* @__PURE__ */ i(
          O,
          {
            action: o,
            icon: "ColumnAddRight",
            tooltip: e("editor.table.menu.insertColumnAfter")
          }
        ),
        /* @__PURE__ */ i(
          O,
          {
            action: c,
            icon: "DeleteColumn",
            tooltip: e("editor.table.menu.deleteColumn")
          }
        ),
        /* @__PURE__ */ i(
          O,
          {
            action: n,
            icon: "Trash2",
            tooltip: e("editor.table.menu.delete_column")
          }
        )
      ] })
    }
  );
}
function Zs({ editor: t, extensions: e }) {
  const { t: r } = q(), n = U(() => {
    var a, o, c;
    return (c = (o = (a = e == null ? void 0 : e.find((l) => l.name === "base-kit")) == null ? void 0 : a.options) == null ? void 0 : o.characterCount) == null ? void 0 : c.limit;
  }, [e]);
  return n ? /* @__PURE__ */ i("div", { className: "richtext-flex richtext-items-center richtext-justify-between richtext-p-3 richtext-border-t", children: /* @__PURE__ */ i("div", { className: "richtext-flex richtext-flex-col", children: /* @__PURE__ */ i("div", { className: "richtext-flex richtext-justify-end richtext-gap-3 richtext-text-sm", children: /* @__PURE__ */ g("span", { children: [
    t.storage.characterCount.characters(),
    "/",
    n,
    " ",
    r("editor.characters")
  ] }) }) }) }) : /* @__PURE__ */ i("div", { className: "richtext-flex richtext-items-center richtext-justify-between richtext-p-3 richtext-border-t", children: /* @__PURE__ */ i("div", { className: "richtext-flex richtext-flex-col", children: /* @__PURE__ */ i("div", { className: "richtext-flex richtext-justify-end richtext-gap-3 richtext-text-sm", children: /* @__PURE__ */ g("span", { children: [
    t.storage.characterCount.characters(),
    " ",
    r("editor.characters")
  ] }) }) }) });
}
function Js() {
  const { toasts: t } = Uo();
  return /* @__PURE__ */ g(Ro, { children: [
    t.map(({ id: e, title: r, description: n, action: a, ...o }) => /* @__PURE__ */ g(
      Wr,
      {
        ...o,
        children: [
          /* @__PURE__ */ g("div", { className: "richtext-grid richtext-gap-1", children: [
            r && /* @__PURE__ */ i(Ur, { children: r }),
            n && /* @__PURE__ */ i(Gr, { children: n })
          ] }),
          a,
          /* @__PURE__ */ i(Fr, {})
        ]
      },
      e
    )),
    /* @__PURE__ */ i(Vr, {})
  ] });
}
const Qs = `
.reactjs-tiptap-editor, 
.richtext-dialog-content {
  button,
  input:where([type=button]),
  input:where([type=reset]),
  input:where([type=submit]) {
    -webkit-appearance: button;
    background-color: transparent;
    background-image: none;
  }

  input,
  optgroup,
  select,
  textarea {
    font-family: inherit;
    font-feature-settings: inherit;
    font-variation-settings: inherit;
    font-size: 100%;
    font-weight: inherit;
    line-height: inherit;
    letter-spacing: inherit;
    color: inherit;
  }

  button {
    font-family: inherit;
    font-feature-settings: inherit;
    font-variation-settings: inherit;
    font-size: 100%;
    font-weight: inherit;
    line-height: inherit;
    letter-spacing: inherit;
    color: inherit;
  }

  *,
  ::before,
  ::after {
    box-sizing: border-box;
    border-width: 0;
    border-style: solid;
    border-color: hsl(var(--richtext-border));
  }

  background-color: hsl(var(--richtext-background));
  color: hsl(var(--richtext-foreground));

  hr {
    height: 0;
    color: inherit;
    border-top-width: 1px;
  }

  a {
    color: inherit;
    text-decoration: inherit;
  }

  b,
  strong {
    font-weight: bolder;
  }

  code,
  kbd,
  samp,
  pre {
    font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace;
    font-feature-settings: normal;
    font-variation-settings: normal;
    font-size: 1em;
  }

  table {
    text-indent: 0;
    border-color: inherit;
    border-collapse: collapse;
  }

  input, textarea {
    border-width: 1px;
  }

  textarea {
    resize: vertical;
  }

  input::placeholder,
  textarea::placeholder {
    opacity: 1;
    color: #9ca3af;
  }

  button, input, textarea {
    cursor: pointer;
    color: inherit;
  }

  img,
  svg,
  video,
  canvas,
  audio,
  iframe,
  embed,
  object {
    display: block;
    vertical-align: middle;
  }

  img,
  video {
    max-width: 100%;
    height: auto;
  }
}

div[data-radix-popper-content-wrapper],
div[data-tippy-root] {
  *,
  ::before,
  ::after {
    box-sizing: border-box;
    border-width: 0;
    border-style: solid;
    border-color: hsl(var(--richtext-border));
  }

  background-color: hsl(var(--richtext-background));
  color: hsl(var(--richtext-foreground));

  button, input, textarea {
    cursor: pointer;
    color: inherit;
  }
}
`, tl = pi(({ children: t, id: e }) => {
  const [, r] = Or((c) => c.value), [, n] = Hr((c) => c.value), a = (c) => {
    r({
      value: c.detail
    });
  }, o = (c) => {
    n({
      value: c.detail
    });
  };
  return B(() => {
    const c = se(bt.EDIT(e), a), l = se(bt.UPDATE_THEME(e), o);
    return () => {
      c(), l();
    };
  }, []), /* @__PURE__ */ i(V, { children: t });
});
function el({ children: t, id: e }) {
  return /* @__PURE__ */ i(po, { children: /* @__PURE__ */ i(wo, { children: /* @__PURE__ */ i(tl, { id: e, children: t }) }) });
}
const wr = "data-rc-order", vr = "data-rc-priority", rl = "rc-util-key", ze = /* @__PURE__ */ new Map();
function il(t, e) {
  if (!t)
    return !1;
  if (t.contains)
    return t.contains(e);
  let r = e;
  for (; r; ) {
    if (r === t)
      return !0;
    r = r.parentNode;
  }
  return !1;
}
function si({ mark: t } = {}) {
  return t ? t.startsWith("data-") ? t : `data-${t}` : rl;
}
function Xe(t) {
  return t.attachTo ? t.attachTo : document.querySelector("head") || document.body;
}
function nl(t) {
  return t === "queue" ? "prependQueue" : t ? "prepend" : "append";
}
function li(t) {
  return [...(ze.get(t) || t).children].filter(
    (e) => e.tagName === "STYLE"
  );
}
function di(t, e = {}) {
  const { csp: r, prepend: n, priority: a = 0 } = e, o = nl(n), c = o === "prependQueue", l = document.createElement("style");
  l.setAttribute(wr, o), c && a && l.setAttribute(vr, `${a}`), r != null && r.nonce && (l.nonce = r == null ? void 0 : r.nonce), l.innerHTML = t;
  const s = Xe(e), { firstChild: h } = s;
  if (n) {
    if (c) {
      const d = li(s).filter((u) => {
        if (!["prepend", "prependQueue"].includes(u.getAttribute(wr)))
          return !1;
        const m = Number(u.getAttribute(vr) || 0);
        return a >= m;
      });
      if (d.length > 0)
        return s.insertBefore(l, d.at(-1).nextSibling), l;
    }
    h.before(l);
  } else
    s.append(l);
  return l;
}
function hi(t, e = {}) {
  const r = Xe(e);
  return li(r).find((n) => n.getAttribute(si(e)) === t);
}
function ol(t, e = {}) {
  const r = hi(t, e);
  r && r.remove();
}
function al(t, e) {
  const r = ze.get(t);
  if (!r || !il(document, r)) {
    const n = di("", e), { parentNode: a } = n;
    ze.set(t, a), n.remove();
  }
}
function cl(t, e, r = {}) {
  var c, l, s;
  const n = Xe(r);
  al(n, r);
  const a = hi(e, r);
  if (a)
    return (c = r.csp) != null && c.nonce && a.nonce !== ((l = r.csp) == null ? void 0 : l.nonce) && (a.nonce = (s = r.csp) == null ? void 0 : s.nonce), a.innerHTML !== t && (a.innerHTML = t), a;
  const o = di(t, r);
  return o.setAttribute(si(r), e), o;
}
function sl(t, e) {
  const { content: r, extensions: n, useEditorOptions: a = {} } = t, o = vi(), c = U(() => {
    const u = Fi(n, n, "name");
    return [...n.map((x) => {
      const w = n.find((p) => p.name === x.name);
      return w ? x.configure(w.options) : x;
    }), ...u].map((x, w) => x.configure({ sort: w }));
  }, [n]), l = ht((u) => {
    var x;
    const m = h(u, t.output);
    (x = t == null ? void 0 : t.onChangeContent) == null || x.call(t, m);
  }, Ii), s = ki({
    extensions: c,
    content: r,
    onUpdate: ({ editor: u }) => {
      l && l(u);
    },
    ...a
  });
  bi(e, () => ({
    editor: s
  })), B(() => {
    document.documentElement.classList.toggle("dark", t.dark), ja.setTheme(o, t.dark ? "dark" : "light");
  }, [t.dark]), B(() => {
    s == null || s.setEditable(!(t != null && t.disabled)), bo.setDisable(o, !(t != null && t.disabled));
  }, [s, t == null ? void 0 : t.disabled]), B(() => ((t == null ? void 0 : t.resetCSS) !== !1 && cl(Qs, "react-tiptap-reset"), () => {
    ol("react-tiptap-reset");
  }), [t == null ? void 0 : t.resetCSS]);
  function h(u, m) {
    return t != null && t.removeDefaultWrapper ? m === "html" ? u.isEmpty ? "" : u.getHTML() : m === "json" ? u.isEmpty ? {} : u.getJSON() : m === "text" ? u.isEmpty ? "" : u.getText() : "" : m === "html" ? u.getHTML() : m === "json" ? u.getJSON() : m === "text" ? u.getText() : "";
  }
  yi(() => {
    s && (s.id = o);
  }, [o, s]), B(() => () => {
    var u;
    (u = s == null ? void 0 : s.destroy) == null || u.call(s);
  }, []);
  const d = ko(s, "characterCount");
  return s ? /* @__PURE__ */ g("div", { className: "reactjs-tiptap-editor", children: [
    /* @__PURE__ */ i(
      el,
      {
        id: o,
        children: /* @__PURE__ */ i(
          _o,
          {
            delayDuration: 0,
            disableHoverableContent: !0,
            children: /* @__PURE__ */ i("div", { className: "richtext-overflow-hidden richtext-rounded-[0.5rem] richtext-bg-background richtext-shadow richtext-outline richtext-outline-1", children: /* @__PURE__ */ g("div", { className: "richtext-flex richtext-max-h-full richtext-w-full richtext-flex-col", children: [
              !(t != null && t.hideToolbar) && /* @__PURE__ */ i(
                vs,
                {
                  disabled: !!(t != null && t.disabled),
                  editor: s,
                  toolbar: t.toolbar
                }
              ),
              /* @__PURE__ */ i(
                Si,
                {
                  className: `richtext-relative ${(t == null ? void 0 : t.contentClass) || ""}`,
                  editor: s
                }
              ),
              d && /* @__PURE__ */ i(
                Zs,
                {
                  editor: s,
                  extensions: n
                }
              ),
              !(t != null && t.hideBubble) && /* @__PURE__ */ i(
                gs,
                {
                  bubbleMenu: t == null ? void 0 : t.bubbleMenu,
                  disabled: t == null ? void 0 : t.disabled,
                  editor: s
                }
              )
            ] }) })
          }
        )
      }
    ),
    /* @__PURE__ */ i(Js, {})
  ] }) : /* @__PURE__ */ i(V, {});
}
const zl = wi(sl);
export {
  Ll as $,
  O as A,
  G as B,
  Zr as C,
  sr as D,
  Me as E,
  Be as F,
  bt as G,
  xa as H,
  Vt as I,
  Ca as J,
  Mt as K,
  fa as L,
  le as M,
  se as N,
  ct as O,
  It as P,
  Q,
  zl as R,
  Br as S,
  jr as T,
  Uo as U,
  ti as V,
  ko as W,
  Lt as X,
  El as Y,
  aa as Z,
  oa as _,
  Xr as a,
  Al as a0,
  Il as a1,
  We as b,
  P as c,
  kt as d,
  ei as e,
  or as f,
  go as g,
  Le as h,
  Kr as i,
  Gt as j,
  K as k,
  Mo as l,
  Ao as m,
  Dr as n,
  Lo as o,
  _r as p,
  Sl as q,
  zo as r,
  fo as s,
  Et as t,
  vo as u,
  Tt as v,
  qr as w,
  ps as x,
  Zo as y,
  Ml as z
};
