var _i = Object.defineProperty;
var $i = (t, e, i) => e in t ? _i(t, e, { enumerable: !0, configurable: !0, writable: !0, value: i }) : t[e] = i;
var Ot = (t, e, i) => $i(t, typeof e != "symbol" ? e + "" : e, i);
import { jsxs as g, jsx as n, Fragment as V } from "react/jsx-runtime";
import * as _ from "react";
import Wt, { useState as E, useCallback as O, useEffect as W, createContext as Vi, useContext as Wi, useSyncExternalStore as Fi, useRef as Q, useMemo as q, Fragment as Ze, memo as Ui, forwardRef as Gi, useId as qi, useImperativeHandle as ji, useLayoutEffect as Xi } from "react";
import { K as Gt, N as Mt, m as dt, Q as Yi, A as It, V as fe, J as Et, W as Zi, X as Ki, Y as ze, B as ot, Z as Ji, _ as Qi, $ as tn } from "./tiptap-B-aFGwLp.js";
import { u as j, I as pt, n as wt, o as ge, V as oe, C as en, h as K, B as nn, p as qt, E as rn } from "./index-B4_PjjMY.js";
import * as Ke from "@radix-ui/react-separator";
import { ap as on, an as Je, aq as Zt, al as pe, T as zt, N as cn, A as an, ak as sn, ar as jt, as as st, at as Qe, b as we, P as ve, a0 as ln, $ as dn, au as hn, av as ti, am as un, H as Kt, aw as mn, ax as xn, S as fn, ay as gn, az as pn } from "./vendor-CPA5z-E-.js";
import * as tt from "@radix-ui/react-toast";
import { ChevronRight as wn, Check as ei, Circle as vn, X as ii, WrapText as bn, PencilRuler as yn, FlipHorizontal as Cn, FlipVertical as Tn, CropIcon as Nn, ChevronUp as kn, Paperclip as Sn, Eye as An, Settings as Ln, ZoomOut as Mn, ZoomIn as In, BookMarked as En, SmilePlusIcon as zn, Replace as Re, SmilePlus as Rn, Frame as Pn, Columns2 as Pe, PanelRight as Dn, PanelLeft as Hn, Clipboard as On, Copy as Bn, GripVertical as _n, Plus as ni, Columns4 as $n, Columns3 as Vn, Heading6 as Wn, Heading5 as Fn, Heading4 as Un, Heading3 as Gn, Heading2 as qn, Heading1 as jn, ChevronsUpDown as Xn, Trash as Yn, Trash2 as Zn, TableCellsSplit as Kn, TableCellsMerge as Jn, BetweenVerticalEnd as Qn, BetweenVerticalStart as tr, BetweenHorizonalStart as er, BetweenHorizonalEnd as ir, Unlink as nr, Pencil as rr, Sparkles as or, Table as cr, Minimize as ar, Maximize as sr, Video as lr, ImageUp as dr, Link as hr, ListTodo as ur, ListOrdered as mr, List as xr, IndentDecrease as fr, IndentIncrease as gr, Type as pr, CodeXml as wr, Code as vr, Superscript as br, Subscript as yr, ChevronDown as Cr, Undo2 as Tr, Redo2 as Nr, PaintRoller as kr, Eraser as Sr, Minus as Ar, Strikethrough as Lr, Quote as Mr, Underline as Ir, Italic as Er, LoaderCircle as zr, Bold as Rr } from "lucide-react";
import * as Rt from "@radix-ui/react-tooltip";
import { Color4 as F, Editor as ri, makeDropdownToolbar as oi } from "easydrawer";
import { Slot as ci } from "@radix-ui/react-slot";
import * as ai from "@radix-ui/react-toggle";
import { TextAlignRightIcon as Pr, TextAlignLeftIcon as Dr, TextAlignJustifyIcon as Hr, TextAlignCenterIcon as Or } from "@radix-ui/react-icons";
import * as et from "@radix-ui/react-dialog";
import * as kt from "@radix-ui/react-popover";
import * as si from "@radix-ui/react-label";
import { Resizable as Br } from "re-resizable";
import _r, { sticky as $r } from "tippy.js";
import { HexColorPicker as Vr } from "react-colorful";
import * as ce from "@radix-ui/react-switch";
import * as ht from "@radix-ui/react-tabs";
import Wr from "react-image-crop";
import * as ae from "@radix-ui/react-checkbox";
import * as U from "@radix-ui/react-dropdown-menu";
function S(...t) {
  return on(Je(t));
}
let Qt;
function te() {
  return Qt === void 0 && (Qt = navigator.platform.includes("Mac")), Qt;
}
function Fr(t) {
  return `${t}`.toLowerCase() === "mod" ? te() ? "⌘" : "Ctrl" : `${t}`.toLowerCase() === "alt" ? te() ? "⌥" : "Alt" : `${t}`.toLowerCase() === "shift" ? te() ? "⇧" : "Shift" : t;
}
function Ur(t) {
  return t.map(Fr).join(" ");
}
const D = Wt.forwardRef(
  (t, e) => {
    const {
      icon: i = void 0,
      // title = undefined,
      tooltip: r = void 0,
      disabled: o = !1,
      customClass: c = "",
      // color = undefined,
      loading: a = void 0,
      shortcutKeys: l = void 0,
      tooltipOptions: s = {},
      action: d = void 0,
      isActive: h = void 0,
      children: u,
      asChild: m = !1,
      upload: x = !1,
      ...w
    } = t, p = Ci[i];
    return /* @__PURE__ */ g(vi, { children: [
      /* @__PURE__ */ n(bi, { asChild: !0, children: /* @__PURE__ */ g(
        m ? ci : wi,
        {
          "data-state": h != null && h() ? "on" : "off",
          onClick: d,
          ref: e,
          size: "sm",
          className: S("richtext-w-[32px] richtext-h-[32px]", c),
          disabled: o,
          ...w,
          children: [
            p && /* @__PURE__ */ n(p, { className: "richtext-size-4" }),
            u
          ]
        }
      ) }),
      r && /* @__PURE__ */ n(ye, { ...s, children: /* @__PURE__ */ g("div", { className: "richtext-flex richtext-max-w-24 richtext-flex-col richtext-items-center richtext-text-center", children: [
        /* @__PURE__ */ n("div", { children: r }),
        !!(l != null && l.length) && /* @__PURE__ */ n("span", { children: Ur(l) })
      ] }) })
    ] });
  }
);
function Gr(t, e, i) {
  return t < e ? e : t > i ? i : t;
}
const qr = (t) => typeof t == "number", jr = (t) => typeof t == "string", Xr = (t) => typeof t == "function";
function Yr(t, e = "px") {
  if (!t)
    return t;
  const i = qr(t) ? String(t) : t, r = Number.parseFloat(i), o = i.match(/[%a-z]+$/i), c = o ? o[0] : e;
  return Number.isNaN(r) ? t : r + c;
}
function Zr(t, e) {
  if (!t)
    return !1;
  const { extensions: i = [] } = (t == null ? void 0 : t.extensionManager) ?? {};
  return !!i.find((o) => o.name === e);
}
function Ns(t) {
  return t.map((e) => jr(e) ? { value: e, name: e } : e);
}
const Kr = Zt(
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
), X = _.forwardRef(
  ({ className: t, variant: e, size: i, asChild: r = !1, ...o }, c) => /* @__PURE__ */ n(
    r ? ci : "button",
    {
      className: S(Kr({ variant: e, size: i, className: t })),
      ref: c,
      ...o
    }
  )
);
X.displayName = "Button";
const Jr = U.Root, Qr = U.Trigger, De = U.Portal, He = U.Sub, se = _.forwardRef(({ className: t, inset: e, children: i, ...r }, o) => /* @__PURE__ */ g(
  U.SubTrigger,
  {
    ref: o,
    className: S(
      "richtext-flex richtext-cursor-default richtext-select-none richtext-items-center richtext-rounded-sm richtext-px-2 richtext-py-1.5 richtext-text-sm richtext-outline-none focus:richtext-bg-accent data-[state=open]:richtext-bg-accent",
      e && "richtext-pl-8",
      t
    ),
    ...r,
    children: [
      i,
      /* @__PURE__ */ n(wn, { className: "richtext-ml-auto richtext-h-4 richtext-w-4" })
    ]
  }
));
se.displayName = U.SubTrigger.displayName;
const le = _.forwardRef(({ className: t, ...e }, i) => /* @__PURE__ */ n(
  U.SubContent,
  {
    ref: i,
    className: S(
      "richtext-z-50 richtext-min-w-[8rem] richtext-overflow-hidden richtext-rounded-md !richtext-border richtext-bg-popover richtext-p-1 richtext-text-popover-foreground richtext-shadow-lg data-[state=open]:richtext-animate-in data-[state=closed]:richtext-animate-out data-[state=closed]:richtext-fade-out-0 data-[state=open]:richtext-fade-in-0 data-[state=closed]:richtext-zoom-out-95 data-[state=open]:richtext-zoom-in-95 data-[side=bottom]:richtext-slide-in-from-top-2 data-[side=left]:richtext-slide-in-from-right-2 data-[side=right]:richtext-slide-in-from-left-2 data-[side=top]:richtext-slide-in-from-bottom-2",
      t
    ),
    ...e
  }
));
le.displayName = U.SubContent.displayName;
const li = _.forwardRef(({ className: t, sideOffset: e = 4, ...i }, r) => /* @__PURE__ */ n(U.Portal, { children: /* @__PURE__ */ n(
  U.Content,
  {
    ref: r,
    sideOffset: e,
    className: S(
      "richtext-z-50 richtext-min-w-[8rem] richtext-overflow-hidden richtext-rounded-md !richtext-border richtext-bg-popover richtext-p-1 richtext-text-popover-foreground richtext-shadow-md data-[state=open]:richtext-animate-in data-[state=closed]:richtext-animate-out data-[state=closed]:richtext-fade-out-0 data-[state=open]:richtext-fade-in-0 data-[state=closed]:richtext-zoom-out-95 data-[state=open]:richtext-zoom-in-95 data-[side=bottom]:richtext-slide-in-from-top-2 data-[side=left]:richtext-slide-in-from-right-2 data-[side=right]:richtext-slide-in-from-left-2 data-[side=top]:richtext-slide-in-from-bottom-2",
      t
    ),
    ...i
  }
) }));
li.displayName = U.Content.displayName;
const nt = _.forwardRef(({ className: t, inset: e, ...i }, r) => /* @__PURE__ */ n(
  U.Item,
  {
    ref: r,
    className: S(
      "richtext-relative richtext-flex richtext-cursor-default richtext-select-none richtext-items-center richtext-rounded-sm richtext-px-2 richtext-py-1.5 richtext-text-sm richtext-outline-none richtext-transition-colors focus:richtext-bg-accent focus:richtext-text-accent-foreground data-[disabled]:richtext-pointer-events-none data-[disabled]:richtext-opacity-50",
      e && "richtext-pl-8",
      t
    ),
    ...i
  }
));
nt.displayName = U.Item.displayName;
const to = _.forwardRef(({ className: t, children: e, checked: i, ...r }, o) => /* @__PURE__ */ g(
  U.CheckboxItem,
  {
    ref: o,
    className: S(
      "richtext-relative richtext-flex richtext-cursor-default richtext-select-none richtext-items-center richtext-rounded-sm richtext-py-1.5 richtext-pl-8 richtext-pr-2 richtext-text-sm richtext-outline-none richtext-transition-colors focus:richtext-bg-accent focus:richtext-text-accent-foreground data-[disabled]:richtext-pointer-events-none data-[disabled]:richtext-opacity-50",
      t
    ),
    checked: i,
    ...r,
    children: [
      /* @__PURE__ */ n("span", { className: "richtext-absolute richtext-left-2 richtext-flex richtext-h-3.5 richtext-w-3.5 richtext-items-center richtext-justify-center", children: /* @__PURE__ */ n(U.ItemIndicator, { children: /* @__PURE__ */ n(ei, { className: "richtext-h-4 richtext-w-4" }) }) }),
      e
    ]
  }
));
to.displayName = U.CheckboxItem.displayName;
const eo = _.forwardRef(({ className: t, children: e, ...i }, r) => /* @__PURE__ */ g(
  U.RadioItem,
  {
    ref: r,
    className: S(
      "richtext-relative richtext-flex richtext-cursor-default richtext-select-none richtext-items-center richtext-rounded-sm richtext-py-1.5 richtext-pl-8 richtext-pr-2 richtext-text-sm richtext-outline-none richtext-transition-colors focus:richtext-bg-accent focus:richtext-text-accent-foreground data-[disabled]:richtext-pointer-events-none data-[disabled]:richtext-opacity-50",
      t
    ),
    ...i,
    children: [
      /* @__PURE__ */ n("span", { className: "richtext-absolute richtext-left-2 richtext-flex richtext-h-3.5 richtext-w-3.5 richtext-items-center richtext-justify-center", children: /* @__PURE__ */ n(U.ItemIndicator, { children: /* @__PURE__ */ n(vn, { className: "richtext-h-2 richtext-w-2 richtext-fill-current" }) }) }),
      e
    ]
  }
));
eo.displayName = U.RadioItem.displayName;
const io = _.forwardRef(({ className: t, inset: e, ...i }, r) => /* @__PURE__ */ n(
  U.Label,
  {
    ref: r,
    className: S(
      "richtext-px-2 richtext-py-1.5 richtext-text-sm richtext-font-semibold",
      e && "richtext-pl-8",
      t
    ),
    ...i
  }
));
io.displayName = U.Label.displayName;
const di = _.forwardRef(({ className: t, ...e }, i) => /* @__PURE__ */ n(
  U.Separator,
  {
    ref: i,
    className: S("richtext--mx-1 richtext-my-1 richtext-h-px richtext-bg-muted", t),
    ...e
  }
));
di.displayName = U.Separator.displayName;
function no({
  className: t,
  ...e
}) {
  return /* @__PURE__ */ n(
    "span",
    {
      className: S("richtext-ml-auto richtext-text-xs richtext-tracking-widest richtext-opacity-60", t),
      ...e
    }
  );
}
no.displayName = "DropdownMenuShortcut";
const J = _.forwardRef(
  ({ className: t, type: e, ...i }, r) => /* @__PURE__ */ n(
    "input",
    {
      type: e,
      className: S(
        "richtext-flex richtext-h-10 richtext-w-full richtext-rounded-md !richtext-border richtext-border-input richtext-bg-background richtext-px-3 richtext-py-2 richtext-text-sm richtext-ring-offset-background file:richtext-border-0 file:richtext-bg-transparent file:richtext-text-sm file:richtext-font-medium placeholder:richtext-text-muted-foreground focus-visible:richtext-outline-none  disabled:richtext-cursor-not-allowed disabled:richtext-opacity-50",
        t
      ),
      ref: r,
      ...i
    }
  )
);
J.displayName = "Input";
const ro = Zt(
  "richtext-text-sm richtext-font-medium richtext-leading-none peer-disabled:richtext-cursor-not-allowed peer-disabled:richtext-opacity-70"
), ct = _.forwardRef(({ className: t, ...e }, i) => /* @__PURE__ */ n(
  si.Root,
  {
    ref: i,
    className: S(ro(), t),
    ...e
  }
));
ct.displayName = si.Root.displayName;
const Pt = kt.Root, Dt = kt.Trigger, vt = _.forwardRef(({ className: t, align: e = "center", sideOffset: i = 4, ...r }, o) => /* @__PURE__ */ n(kt.Portal, { children: /* @__PURE__ */ n(
  kt.Content,
  {
    ref: o,
    align: e,
    sideOffset: i,
    className: S(
      "richtext-z-50 richtext-w-72 richtext-rounded-md !richtext-border richtext-bg-popover richtext-p-4 richtext-text-popover-foreground richtext-shadow-md richtext-outline-none data-[state=open]:richtext-animate-in data-[state=closed]:richtext-animate-out data-[state=closed]:richtext-fade-out-0 data-[state=open]:richtext-fade-in-0 data-[state=closed]:richtext-zoom-out-95 data-[state=open]:richtext-zoom-in-95 data-[side=bottom]:richtext-slide-in-from-top-2 data-[side=left]:richtext-slide-in-from-right-2 data-[side=right]:richtext-slide-in-from-left-2 data-[side=top]:richtext-slide-in-from-bottom-2",
      t
    ),
    ...r
  }
) }));
vt.displayName = kt.Content.displayName;
const it = _.forwardRef(
  ({ className: t, orientation: e = "horizontal", decorative: i = !0, ...r }, o) => /* @__PURE__ */ n(
    Ke.Root,
    {
      ref: o,
      decorative: i,
      orientation: e,
      className: S(
        "richtext-shrink-0 richtext-bg-border",
        e === "horizontal" ? "richtext-h-[1px] richtext-w-full" : "richtext-h-full richtext-w-[1px]",
        t
      ),
      ...r
    }
  )
);
it.displayName = Ke.Root.displayName;
const hi = _.forwardRef(({ className: t, ...e }, i) => /* @__PURE__ */ n(
  ce.Root,
  {
    className: S(
      "richtext-peer richtext-inline-flex richtext-h-6 richtext-w-11 richtext-shrink-0 richtext-cursor-pointer richtext-items-center richtext-rounded-full richtext-border-2 richtext-border-transparent richtext-transition-colors focus-visible:richtext-outline-none focus-visible:richtext-ring-2 focus-visible:richtext-ring-ring focus-visible:richtext-ring-offset-2 focus-visible:richtext-ring-offset-background disabled:richtext-cursor-not-allowed disabled:richtext-opacity-50 data-[state=checked]:richtext-bg-primary data-[state=unchecked]:richtext-bg-input",
      t
    ),
    ...e,
    ref: i,
    children: /* @__PURE__ */ n(
      ce.Thumb,
      {
        className: S(
          "richtext-pointer-events-none richtext-block richtext-h-5 richtext-w-5 richtext-rounded-full richtext-bg-background richtext-shadow-lg richtext-ring-0 richtext-transition-transform data-[state=checked]:richtext-translate-x-5 data-[state=unchecked]:richtext-translate-x-0"
        )
      }
    )
  }
));
hi.displayName = ce.Root.displayName;
const ui = ht.Root, be = _.forwardRef(({ className: t, ...e }, i) => /* @__PURE__ */ n(
  ht.List,
  {
    ref: i,
    className: S(
      "richtext-inline-flex richtext-h-10 richtext-items-center richtext-justify-center richtext-rounded-md richtext-bg-muted richtext-p-1 richtext-text-muted-foreground",
      t
    ),
    ...e
  }
));
be.displayName = ht.List.displayName;
const St = _.forwardRef(({ className: t, ...e }, i) => /* @__PURE__ */ n(
  ht.Trigger,
  {
    ref: i,
    className: S(
      "richtext-inline-flex richtext-items-center richtext-justify-center richtext-whitespace-nowrap richtext-rounded-sm richtext-px-3 richtext-py-1.5 richtext-text-sm richtext-font-medium richtext-ring-offset-background richtext-transition-all focus-visible:richtext-outline-none focus-visible:richtext-ring-2 focus-visible:richtext-ring-ring focus-visible:richtext-ring-offset-2 disabled:richtext-pointer-events-none disabled:richtext-opacity-50 data-[state=active]:richtext-bg-background data-[state=active]:richtext-text-foreground data-[state=active]:richtext-shadow-sm",
      t
    ),
    ...e
  }
));
St.displayName = ht.Trigger.displayName;
const At = _.forwardRef(({ className: t, ...e }, i) => /* @__PURE__ */ n(
  ht.Content,
  {
    ref: i,
    className: S(
      "richtext-mt-2 richtext-ring-offset-background focus-visible:richtext-outline-none focus-visible:richtext-ring-2 focus-visible:richtext-ring-ring focus-visible:richtext-ring-offset-2",
      t
    ),
    ...e
  }
));
At.displayName = ht.Content.displayName;
const oo = tt.Provider, mi = _.forwardRef(({ className: t, ...e }, i) => /* @__PURE__ */ n(
  tt.Viewport,
  {
    ref: i,
    className: S(
      "richtext-fixed richtext-top-0 richtext-z-[100] richtext-flex richtext-max-h-screen richtext-w-full richtext-flex-col-reverse richtext-p-4 sm:richtext-bottom-0 sm:richtext-right-0 sm:richtext-top-auto sm:richtext-flex-col md:richtext-max-w-[420px]",
      t
    ),
    ...e
  }
));
mi.displayName = tt.Viewport.displayName;
const co = Zt(
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
), xi = _.forwardRef(({ className: t, variant: e, ...i }, r) => /* @__PURE__ */ n(
  tt.Root,
  {
    ref: r,
    className: S(co({ variant: e }), t),
    ...i
  }
));
xi.displayName = tt.Root.displayName;
const ao = _.forwardRef(({ className: t, ...e }, i) => /* @__PURE__ */ n(
  tt.Action,
  {
    ref: i,
    className: S(
      "richtext-inline-flex richtext-h-8 richtext-shrink-0 richtext-items-center richtext-justify-center richtext-rounded-md !richtext-border richtext-bg-transparent richtext-px-3 richtext-text-sm richtext-font-medium richtext-ring-offset-background richtext-transition-colors hover:richtext-bg-secondary focus:richtext-outline-none focus:richtext-ring-2 focus:richtext-ring-ring focus:richtext-ring-offset-2 disabled:richtext-pointer-events-none disabled:richtext-opacity-50 group-[.destructive]:richtext-border-muted/40 group-[.destructive]:hover:richtext-border-destructive/30 group-[.destructive]:hover:richtext-bg-destructive group-[.destructive]:hover:richtext-text-destructive-foreground group-[.destructive]:focus:richtext-ring-destructive",
      t
    ),
    ...e
  }
));
ao.displayName = tt.Action.displayName;
const fi = _.forwardRef(({ className: t, ...e }, i) => /* @__PURE__ */ n(
  tt.Close,
  {
    ref: i,
    className: S(
      "richtext-absolute richtext-right-2 richtext-top-2 richtext-rounded-md richtext-p-1 richtext-text-foreground/50 richtext-opacity-0 richtext-transition-opacity hover:richtext-text-foreground focus:richtext-opacity-100 focus:richtext-outline-none focus:richtext-ring-2 group-hover:richtext-opacity-100 group-[.destructive]:richtext-text-red-300 group-[.destructive]:hover:richtext-text-red-50 group-[.destructive]:focus:richtext-ring-red-400 group-[.destructive]:focus:richtext-ring-offset-red-600",
      t
    ),
    "toast-close": "",
    ...e,
    children: /* @__PURE__ */ n(ii, { className: "richtext-h-4 richtext-w-4" })
  }
));
fi.displayName = tt.Close.displayName;
const gi = _.forwardRef(({ className: t, ...e }, i) => /* @__PURE__ */ n(
  tt.Title,
  {
    ref: i,
    className: S("richtext-text-sm richtext-font-semibold", t),
    ...e
  }
));
gi.displayName = tt.Title.displayName;
const pi = _.forwardRef(({ className: t, ...e }, i) => /* @__PURE__ */ n(
  tt.Description,
  {
    ref: i,
    className: S("richtext-text-sm richtext-opacity-90", t),
    ...e
  }
));
pi.displayName = tt.Description.displayName;
const so = Zt(
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
), wi = _.forwardRef(({ className: t, variant: e, size: i, ...r }, o) => /* @__PURE__ */ n(
  ai.Root,
  {
    ref: o,
    className: S(so({ variant: e, size: i, className: t })),
    ...r
  }
));
wi.displayName = ai.Root.displayName;
const lo = Rt.Provider, vi = Rt.Root, bi = Rt.Trigger, ye = _.forwardRef(({ className: t, sideOffset: e = 4, ...i }, r) => /* @__PURE__ */ n(
  Rt.Content,
  {
    ref: r,
    sideOffset: e,
    className: S(
      "richtext-z-50 richtext-overflow-hidden richtext-rounded-md !richtext-border richtext-bg-popover richtext-px-3 richtext-py-1.5 richtext-text-sm richtext-text-popover-foreground richtext-shadow-md richtext-animate-in richtext-fade-in-0 richtext-zoom-in-95 data-[side=bottom]:richtext-slide-in-from-top-2 data-[side=left]:richtext-slide-in-from-right-2 data-[side=right]:richtext-slide-in-from-left-2 data-[side=top]:richtext-slide-in-from-bottom-2",
      t
    ),
    ...i
  }
));
ye.displayName = Rt.Content.displayName;
const ho = 1, uo = 1e6;
let ee = 0;
function mo() {
  return ee = (ee + 1) % Number.MAX_SAFE_INTEGER, ee.toString();
}
const ie = /* @__PURE__ */ new Map();
function Oe(t) {
  if (ie.has(t))
    return;
  const e = setTimeout(() => {
    ie.delete(t), Nt({
      type: "REMOVE_TOAST",
      toastId: t
    });
  }, uo);
  ie.set(t, e);
}
function xo(t, e) {
  switch (e.type) {
    case "ADD_TOAST":
      return {
        ...t,
        toasts: [e.toast, ...t.toasts].slice(0, ho)
      };
    case "UPDATE_TOAST":
      return {
        ...t,
        toasts: t.toasts.map(
          (i) => i.id === e.toast.id ? { ...i, ...e.toast } : i
        )
      };
    case "DISMISS_TOAST": {
      const { toastId: i } = e;
      return i ? Oe(i) : t.toasts.forEach((r) => {
        Oe(r.id);
      }), {
        ...t,
        toasts: t.toasts.map(
          (r) => r.id === i || i === void 0 ? {
            ...r,
            open: !1
          } : r
        )
      };
    }
    case "REMOVE_TOAST":
      return e.toastId === void 0 ? {
        ...t,
        toasts: []
      } : {
        ...t,
        toasts: t.toasts.filter((i) => i.id !== e.toastId)
      };
  }
}
const Ft = [];
let Ut = { toasts: [] };
function Nt(t) {
  Ut = xo(Ut, t), Ft.forEach((e) => {
    e(Ut);
  });
}
function fo({ ...t }) {
  const e = mo(), i = (o) => Nt({
    type: "UPDATE_TOAST",
    toast: { ...o, id: e }
  }), r = () => Nt({ type: "DISMISS_TOAST", toastId: e });
  return Nt({
    type: "ADD_TOAST",
    toast: {
      ...t,
      id: e,
      open: !0,
      onOpenChange: (o) => {
        o || r();
      }
    }
  }), {
    id: e,
    dismiss: r,
    update: i
  };
}
function go() {
  const [t, e] = _.useState(Ut);
  return _.useEffect(() => (Ft.push(e), () => {
    const i = Ft.indexOf(e);
    i > -1 && Ft.splice(i, 1);
  }), [t]), {
    ...t,
    toast: fo,
    dismiss: (i) => Nt({ type: "DISMISS_TOAST", toastId: i })
  };
}
const yi = _.forwardRef(({ className: t, ...e }, i) => /* @__PURE__ */ n(
  ae.Root,
  {
    ref: i,
    className: S(
      "!richtext-peer !richtext-h-4 !richtext-w-4 !richtext-p-0 !richtext-shrink-0 !richtext-rounded-sm !richtext-border !richtext-border-primary !richtext-ring-offset-background focus-visible:!richtext-outline-none focus-visible:!richtext-ring-2 focus-visible:!richtext-ring-ring focus-visible:!richtext-ring-offset-2 disabled:!richtext-cursor-not-allowed disabled:!richtext-opacity-50 data-[state=checked]:!richtext-bg-primary data-[state=checked]:!richtext-text-primary-foreground",
      t
    ),
    ...e,
    children: /* @__PURE__ */ n(
      ae.Indicator,
      {
        className: S("!richtext-flex !richtext-p-0 !richtext-items-center !richtext-justify-center !richtext-text-current"),
        children: /* @__PURE__ */ n(ei, { className: "!richtext-h-4 !richtext-w-4" })
      }
    )
  }
));
yi.displayName = ae.Root.displayName;
function po(t) {
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", ...t, children: /* @__PURE__ */ n(
    "path",
    {
      fill: "currentColor",
      d: "M19 12h-2v3h-3v2h5zM7 9h3V7H5v5h2zm14-6H3a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2m0 16H3V5h18z"
    }
  ) });
}
function wo(t) {
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", ...t, children: /* @__PURE__ */ n(
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
function vo() {
  return /* @__PURE__ */ n(
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
      children: /* @__PURE__ */ n(
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
function bo() {
  return /* @__PURE__ */ n(
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
      children: /* @__PURE__ */ n(
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
function yo(t) {
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", ...t, children: /* @__PURE__ */ n(
    "path",
    {
      fill: "currentColor",
      d: "M14 2H6a2 2 0 0 0-2 2v16c0 1.11.89 2 2 2h12c1.11 0 2-.89 2-2V8zm4 18H6V4h7v5h5zm-.65-10l-2.1 9h-1.4l-1.8-6.79l-1.8 6.79h-1.4l-2.2-9h1.5l1.4 6.81l1.8-6.81h1.3l1.8 6.81l1.4-6.81z"
    }
  ) });
}
function Y(t) {
  const e = Ci[t.name];
  return e ? /* @__PURE__ */ n(e, { onClick: t == null ? void 0 : t.onClick, className: `richtext-w-4 richtext-h-4 ${(t == null ? void 0 : t.className) || ""}` }) : null;
}
function Co(t) {
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", ...t, children: /* @__PURE__ */ n(
    "path",
    {
      fill: "currentColor",
      d: "M21 22H3v-2h18zm0-18H3V2h18zm-11 9.7h4l-2-5.4zM11.2 6h1.7l4.7 12h-2l-.9-2.6H9.4L8.5 18h-2z"
    }
  ) });
}
function To(t) {
  return /* @__PURE__ */ n(
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
      children: /* @__PURE__ */ n(
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
function No(t) {
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", ...t, children: /* @__PURE__ */ n("path", { fill: "currentColor", d: "M9 7v10h6v-2h-4V7z" }) });
}
function ko(t) {
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", ...t, children: /* @__PURE__ */ n(
    "path",
    {
      fill: "currentColor",
      d: "M9 7c-1.1 0-2 .9-2 2v8h2V9h2v7h2V9h2v8h2V9a2 2 0 0 0-2-2z"
    }
  ) });
}
function So(t) {
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", ...t, children: /* @__PURE__ */ n(
    "path",
    {
      fill: "currentColor",
      d: "M11 7c-1.1 0-2 .9-2 2v2a2 2 0 0 0 2 2h2v2H9v2h4c1.11 0 2-.89 2-2v-2a2 2 0 0 0-2-2h-2V9h4V7z"
    }
  ) });
}
function Ao() {
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", children: /* @__PURE__ */ n("path", { fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M14 4h4a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1m-9 8h4m-2-2v4" }) });
}
function Lo() {
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", children: /* @__PURE__ */ n("path", { fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M6 4h4a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1m9 8h4m-2-2v4" }) });
}
function Mo() {
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", children: /* @__PURE__ */ n("path", { fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M12 21v-4m0-4V9m0-4V3m-2 18h4M8 5v4h11l2-2l-2-2zm6 8v4H6l-2-2l2-2z" }) });
}
function Io() {
  return /* @__PURE__ */ g("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 32 32", children: [
    /* @__PURE__ */ n("path", { fill: "currentColor", d: "M30 18v-2h-6v10h2v-4h3v-2h-3v-2zm-11 8h-4V16h4a3.003 3.003 0 0 1 3 3v4a3.003 3.003 0 0 1-3 3m-2-2h2a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-2zm-6-8H6v10h2v-3h3a2.003 2.003 0 0 0 2-2v-3a2 2 0 0 0-2-2m-3 5v-3h3l.001 3z" }),
    /* @__PURE__ */ n("path", { fill: "currentColor", d: "M22 14v-4a.91.91 0 0 0-.3-.7l-7-7A.9.9 0 0 0 14 2H4a2.006 2.006 0 0 0-2 2v24a2 2 0 0 0 2 2h16v-2H4V4h8v6a2.006 2.006 0 0 0 2 2h6v2Zm-8-4V4.4l5.6 5.6Z" })
  ] });
}
function Eo() {
  return /* @__PURE__ */ g(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: "1em",
      height: "1em",
      className: "icon",
      viewBox: "0 0 1024 1024",
      children: [
        /* @__PURE__ */ n(
          "path",
          {
            fill: "currentColor",
            d: "M679.253 402.364 618.77 561.015l-60.348-158.651a30.04 30.04 0 0 0-30.447-18.637 29.76 29.76 0 0 0-30.447 18.637l-60.416 158.651-60.416-158.651a30.515 30.515 0 0 0-38.843-17.272 28.945 28.945 0 0 0-17.954 37.547l88.815 233.267c4.369 11.469 15.7 19.115 28.398 19.115a30.31 30.31 0 0 0 28.468-19.115l62.395-163.908 62.396 163.84c4.437 11.605 15.701 19.183 28.4 19.183a30.31 30.31 0 0 0 28.466-19.115l88.747-233.267a28.945 28.945 0 0 0-17.886-37.547 30.447 30.447 0 0 0-38.912 17.272zm219.478 395.605-51.883-29.218c-28.672-16.18-52.224-3.072-52.224 29.082v.273H643.209a29.833 29.833 0 0 0-30.31 29.354c0 16.18 13.584 29.218 30.31 29.218h151.825c1.092 30.516 24.03 43.077 52.224 27.648l51.063-27.989c29.013-15.906 29.15-42.189.41-58.368"
          }
        ),
        /* @__PURE__ */ n(
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
function zo() {
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", children: /* @__PURE__ */ g("g", { fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", color: "currentColor", children: [
    /* @__PURE__ */ n("path", { d: "M14.86 22h-4.312c-3.291 0-4.937 0-6.08-.798a4.2 4.2 0 0 1-.863-.805c-.855-1.066-.855-2.6-.855-5.67v-2.545c0-2.963 0-4.445.473-5.628c.761-1.903 2.37-3.403 4.41-4.113C8.9 2 10.49 2 13.667 2c1.816 0 2.723 0 3.448.252c1.166.406 2.085 1.263 2.52 2.35c.27.676.27 1.523.27 3.216V10" }),
    /* @__PURE__ */ n("path", { d: "M2.75 12c0-1.84 1.506-3.333 3.364-3.333c.672 0 1.464.116 2.117-.057a1.67 1.67 0 0 0 1.19-1.179c.174-.647.057-1.432.057-2.098C9.478 3.493 10.984 2 12.84 2m.002 16h2.523m-4.949-4.15c-.126-.8-.281-.801-1.61-.85h-1.01c-.557 0-1.009.448-1.009 1v3c0 .552.452 1 1.01 1h1.816c.39 0 .803-.313.803-.7v-1.1c0-.11-.113-.304-.224-.304H9.068M12.842 13h1.261m0 0h1.262m-1.262 0v4.875M21.251 13h-2.523c-.557 0-1.009.448-1.009 1v1.5m0 0V18m0-2.5h2.523" })
  ] }) });
}
function Ro() {
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 20 20", children: /* @__PURE__ */ n("path", { fill: "currentColor", d: "M6.5 3a.75.75 0 0 1 .697.471l3 7.5a.75.75 0 0 1-1.393.557L7.992 9.5H5.008l-.811 2.028a.75.75 0 0 1-1.393-.556l3-7.5A.75.75 0 0 1 6.5 3m0 2.77L5.608 8h1.784zm8.28-1.55a.75.75 0 1 0-1.06 1.06l.72.72h-3.69a.75.75 0 0 0 0 1.5h3.69l-.72.72a.75.75 0 0 0 1.06 1.06l2-2a.75.75 0 0 0 0-1.06zm0 7.5a.75.75 0 1 0-1.06 1.06l.72.72H3.75a.75.75 0 0 0 0 1.5h10.69l-.72.72a.75.75 0 1 0 1.06 1.06l2-2a.75.75 0 0 0 0-1.06z" }) });
}
function Po() {
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 20 20", children: /* @__PURE__ */ n("path", { fill: "currentColor", d: "M13.5 3a.75.75 0 0 0-.697.471l-3 7.5a.75.75 0 0 0 1.393.557l.812-2.028h2.984l.811 2.028a.75.75 0 0 0 1.393-.556l-3-7.5A.75.75 0 0 0 13.5 3m0 2.77L14.392 8h-1.784zM5.22 4.22a.75.75 0 0 1 1.06 1.06L5.56 6h3.69a.75.75 0 0 1 0 1.5H5.56l.72.72a.75.75 0 0 1-1.06 1.06l-2-2a.75.75 0 0 1 0-1.06zm0 7.5a.75.75 0 0 1 1.06 1.06l-.72.72h10.69a.75.75 0 0 1 0 1.5H5.56l.72.72a.75.75 0 1 1-1.06 1.06l-2-2a.75.75 0 0 1 0-1.06z" }) });
}
function Do() {
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", children: /* @__PURE__ */ n("path", { fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", d: "m3 21l7.548-7.548M21 3l-7.548 7.548m0 0L8 3H3l7.548 10.452m2.904-2.904L21 21h-5l-5.452-7.548", color: "currentColor" }) });
}
function Ho() {
  return /* @__PURE__ */ n(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      xmlnsXlink: "http://www.w3.org/1999/xlink",
      "aria-hidden": "true",
      role: "img",
      width: "1em",
      height: "1em",
      viewBox: "0 0 24 24",
      children: /* @__PURE__ */ n(
        "path",
        {
          fill: "currentColor",
          d: "M14 2H6a2 2 0 0 0-2 2v16c0 1.11.89 2 2 2h12c1.11 0 2-.89 2-2V8zm4 18H6V4h7v5h5zm-.65-10l-2.1 9h-1.4l-1.8-6.79l-1.8 6.79h-1.4l-2.2-9h1.5l1.4 6.81l1.8-6.81h1.3l1.8 6.81l1.4-6.81z"
        }
      )
    }
  );
}
const Ci = {
  Bold: Rr,
  LoaderCircle: zr,
  Italic: Er,
  Underline: Ir,
  Quote: Mr,
  TextQuote: wo,
  Strikethrough: Lr,
  Minus: Ar,
  Eraser: Sr,
  PaintRoller: kr,
  Redo2: Nr,
  Undo2: Tr,
  AlignCenter: Or,
  AlignJustify: Hr,
  AlignLeft: Dr,
  AlignRight: Pr,
  ChevronDown: Cr,
  Subscript: yr,
  Superscript: br,
  Code: vr,
  Code2: wr,
  Type: pr,
  IndentIncrease: gr,
  IndentDecrease: fr,
  List: xr,
  ListOrdered: mr,
  ListTodo: ur,
  Link: hr,
  ImageUp: dr,
  Video: lr,
  Maximize: sr,
  Minimize: ar,
  Table: cr,
  Sparkles: or,
  Pencil: rr,
  Unlink: nr,
  BetweenHorizonalEnd: ir,
  BetweenHorizonalStart: er,
  BetweenVerticalStart: tr,
  BetweenVerticalEnd: Qn,
  TableCellsMerge: Jn,
  TableCellsSplit: Kn,
  Trash2: Zn,
  Trash: Yn,
  Replace: Re,
  ChevronsUpDown: Xn,
  LineHeight: Co,
  Word: yo,
  Heading1: jn,
  Heading2: qn,
  Heading3: Gn,
  Heading4: Un,
  Heading5: Fn,
  Heading6: Wn,
  Columns2: Pe,
  Columns3: Vn,
  Columns4: $n,
  Plus: ni,
  Grip: _n,
  Copy: Bn,
  Clipboard: On,
  PanelLeft: Hn,
  PanelRight: Dn,
  Columns: Pe,
  Iframe: Pn,
  MenuDown: To,
  SizeS: So,
  SizeM: ko,
  SizeL: No,
  AspectRatio: po,
  Emoji: Rn,
  DeleteColumn: vo,
  DeleteRow: bo,
  SearchAndReplace: Re,
  EmojiIcon: zn,
  ExportPdf: Io,
  ExportWord: Eo,
  ImportWord: Ho,
  ColumnAddLeft: Ao,
  ColumnAddRight: Lo,
  BookMarked: En,
  ZoomIn: In,
  ZoomOut: Mn,
  Settings: Ln,
  Eye: An,
  TextDirection: Mo,
  LeftToRight: Ro,
  RightToLeft: Po,
  Attachment: Sn,
  GifIcon: zo,
  ChevronUp: kn,
  Crop: Nn,
  Twitter: Do,
  FlipX: Tn,
  FlipY: Cn,
  PencilRuler: yn,
  WrapText: bn
};
function Oo({ fill: t }) {
  return /* @__PURE__ */ n(
    "svg",
    {
      width: "18px",
      height: "18px",
      viewBox: "0 0 256 256",
      version: "1.1",
      xmlns: "http://www.w3.org/2000/svg",
      children: /* @__PURE__ */ n("g", { id: "icon/填充色", stroke: "none", strokeWidth: 1, fill: "none", fillRule: "evenodd", children: /* @__PURE__ */ g("g", { id: "icon/背景颜色", children: [
        /* @__PURE__ */ n("g", { id: "编组", fill: "currentColor", children: /* @__PURE__ */ g(
          "g",
          {
            transform: "translate(119.502295, 137.878331) rotate(-135.000000) translate(-119.502295, -137.878331) translate(48.002295, 31.757731)",
            id: "矩形",
            children: [
              /* @__PURE__ */ n(
                "path",
                {
                  d: "M100.946943,60.8084699 L43.7469427,60.8084699 C37.2852111,60.8084699 32.0469427,66.0467383 32.0469427,72.5084699 L32.0469427,118.70847 C32.0469427,125.170201 37.2852111,130.40847 43.7469427,130.40847 L100.946943,130.40847 C107.408674,130.40847 112.646943,125.170201 112.646943,118.70847 L112.646943,72.5084699 C112.646943,66.0467383 107.408674,60.8084699 100.946943,60.8084699 Z M93.646,79.808 L93.646,111.408 L51.046,111.408 L51.046,79.808 L93.646,79.808 Z",
                  fillRule: "nonzero"
                }
              ),
              /* @__PURE__ */ n(
                "path",
                {
                  d: "M87.9366521,16.90916 L87.9194966,68.2000001 C87.9183543,69.4147389 86.9334998,70.399264 85.7187607,70.4 L56.9423078,70.4 C55.7272813,70.4 54.7423078,69.4150264 54.7423078,68.2 L54.7423078,39.4621057 C54.7423078,37.2523513 55.5736632,35.1234748 57.0711706,33.4985176 L76.4832996,12.4342613 C78.9534987,9.75382857 83.1289108,9.5834005 85.8093436,12.0535996 C87.1658473,13.303709 87.9372691,15.0644715 87.9366521,16.90916 Z",
                  fillRule: "evenodd"
                }
              ),
              /* @__PURE__ */ n(
                "path",
                {
                  d: "M131.3,111.241199 L11.7,111.241199 C5.23826843,111.241199 0,116.479467 0,122.941199 L0,200.541199 C0,207.002931 5.23826843,212.241199 11.7,212.241199 L131.3,212.241199 C137.761732,212.241199 143,207.002931 143,200.541199 L143,122.941199 C143,116.479467 137.761732,111.241199 131.3,111.241199 Z M124,130.241 L124,193.241 L19,193.241 L19,130.241 L124,130.241 Z",
                  fillRule: "nonzero"
                }
              )
            ]
          }
        ) }),
        /* @__PURE__ */ n(
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
function Bo(t) {
  const [e, i] = E(void 0);
  function r(a) {
    var l;
    (l = t.action) == null || l.call(t, a);
  }
  function o() {
    var a;
    (a = t.action) == null || a.call(t, e);
  }
  const c = O(
    pe((a) => {
      i(a);
    }, 350),
    []
  );
  return /* @__PURE__ */ g("div", { className: "richtext-flex richtext-items-center richtext-h-[32px]", children: [
    /* @__PURE__ */ n(
      D,
      {
        tooltip: t == null ? void 0 : t.tooltip,
        disabled: t == null ? void 0 : t.disabled,
        action: o,
        tooltipOptions: t == null ? void 0 : t.tooltipOptions,
        shortcutKeys: t == null ? void 0 : t.shortcutKeys,
        children: /* @__PURE__ */ n("span", { className: "richtext-flex richtext-items-center richtext-justify-center richtext-text-sm", children: /* @__PURE__ */ n(Oo, { fill: e }) })
      }
    ),
    /* @__PURE__ */ n(
      wa,
      {
        selectedColor: e,
        setSelectedColor: c,
        onChange: r,
        highlight: !0,
        disabled: t == null ? void 0 : t.disabled,
        children: /* @__PURE__ */ n(X, { variant: "ghost", size: "icon", className: "!richtext-w-3 !richtext-h-[32px]", disabled: t == null ? void 0 : t.disabled, children: /* @__PURE__ */ n(Y, { className: "!richtext-w-3 !richtext-h-3 richtext-text-zinc-500", name: "MenuDown" }) })
      }
    )
  ] });
}
function _o(t) {
  const { t: e } = j(), [i, r] = E({
    text: "",
    link: ""
  }), [o, c] = E(!1);
  W(() => {
    var l;
    if (t != null && t.editor) {
      const { href: s, target: d } = (l = t.editor) == null ? void 0 : l.getAttributes("link"), { from: h, to: u } = t.editor.state.selection, m = t.editor.state.doc.textBetween(h, u, " ");
      r({
        link: s,
        text: m
      }), c(d === "_blank");
    }
  }, [t == null ? void 0 : t.editor]);
  function a(l) {
    l.preventDefault(), l.stopPropagation(), t == null || t.onSetLink(i.link, i.text, o);
  }
  return /* @__PURE__ */ n("div", { className: "border-neutral-200 richtext-rounded-lg !richtext-border richtext-bg-white richtext-p-2 richtext-shadow-sm dark:richtext-border-neutral-800 dark:richtext-bg-black", children: /* @__PURE__ */ g(
    "form",
    {
      className: "richtext-flex richtext-flex-col richtext-gap-2",
      onSubmit: a,
      children: [
        /* @__PURE__ */ n(ct, { className: "mb-[6px]", children: e("editor.link.dialog.text") }),
        /* @__PURE__ */ n("div", { className: "richtext-mb-[10px] richtext-flex richtext-w-full richtext-max-w-sm richtext-items-center richtext-gap-1.5", children: /* @__PURE__ */ n("div", { className: "richtext-relative richtext-w-full richtext-max-w-sm richtext-items-center", children: /* @__PURE__ */ n(
          J,
          {
            className: "richtext-w-80",
            onChange: (l) => r({ ...i, text: l.target.value }),
            placeholder: "Text",
            required: !0,
            type: "text",
            value: i.text
          }
        ) }) }),
        /* @__PURE__ */ n(ct, { className: "mb-[6px]", children: e("editor.link.dialog.link") }),
        /* @__PURE__ */ n("div", { className: "richtext-flex richtext-w-full richtext-max-w-sm richtext-items-center richtext-gap-1.5", children: /* @__PURE__ */ g("div", { className: "richtext-relative richtext-w-full richtext-max-w-sm richtext-items-center", children: [
          /* @__PURE__ */ n(
            J,
            {
              className: "richtext-pl-10",
              onChange: (l) => r({ ...i, link: l.target.value }),
              required: !0,
              type: "url",
              value: i.link
            }
          ),
          /* @__PURE__ */ n("span", { className: "richtext-absolute richtext-inset-y-0 richtext-start-0 richtext-flex richtext-items-center richtext-justify-center richtext-px-2", children: /* @__PURE__ */ n(
            Y,
            {
              className: "richtext-size-5 richtext-text-muted-foreground",
              name: "Link"
            }
          ) })
        ] }) }),
        /* @__PURE__ */ g("div", { className: "richtext-flex richtext-items-center richtext-space-x-2", children: [
          /* @__PURE__ */ n(ct, { children: e("editor.link.dialog.openInNewTab") }),
          /* @__PURE__ */ n(
            hi,
            {
              checked: o,
              onCheckedChange: (l) => {
                c(l);
              }
            }
          )
        ] }),
        /* @__PURE__ */ n(
          X,
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
function $o(t, e, i = null) {
  return i ? t.createChecked({ index: e }, i) : t.createAndFill({ index: e });
}
function Vo(t) {
  if (t.cached.columnsNodeTypes)
    return t.cached.columnsNodeTypes;
  const e = {
    columns: t.nodes.columns,
    column: t.nodes.column
  };
  return t.cached.columnsNodeTypes = e, e;
}
function Wo(t, e, i = null) {
  const r = Vo(t), o = [];
  for (let c = 0; c < e; c += 1) {
    const a = $o(r.column, c, i);
    a && o.push(a);
  }
  return r.columns.createChecked({ cols: e }, o);
}
function ne({
  state: t,
  dispatch: e,
  type: i
}) {
  const r = Gt((c) => c.type.name === Xt.name)(t.selection), o = Gt((c) => c.type.name === Ti.name)(t.selection);
  if (e && r && o) {
    const c = r.node, a = o.node.attrs.index, l = c.toJSON();
    let s = a;
    i === "delete" ? (s = a - 1, l.content.splice(a, 1)) : (s = i === "addBefore" ? a : a + 1, l.content.splice(s, 0, {
      type: "column",
      attrs: {
        index: a
      },
      content: [
        {
          type: "paragraph"
        }
      ]
    })), l.attrs.cols = l.content.length, l.content.forEach((m, x) => {
      m.attrs.index = x;
    });
    const d = cn.fromJSON(t.schema, l);
    let h = r.pos;
    d.content.forEach((m, x, w) => {
      w < s && (h += m.nodeSize);
    });
    const u = t.tr.setTime(Date.now());
    u.replaceWith(r.pos, r.pos + r.node.nodeSize, d).setSelection(
      zt.near(u.doc.resolve(h))
    ), e(u);
  }
  return !0;
}
function Be({ state: t, dispatch: e, type: i }) {
  const r = Gt((c) => c.type.name === Xt.name)(t.selection), o = Gt((c) => c.type.name === Ti.name)(t.selection);
  if (e && r && o) {
    const c = r.node, a = o.node.attrs.index;
    let l = 0;
    i === "before" ? l = (a - 1 + c.attrs.cols) % c.attrs.cols : l = (a + 1) % c.attrs.cols;
    let s = r.pos;
    c.content.forEach((h, u, m) => {
      m < l && (s += h.nodeSize);
    });
    const d = t.tr.setTime(Date.now());
    return d.setSelection(zt.near(d.doc.resolve(s))), e(d), !0;
  }
  return !1;
}
const Fo = 200, Xt = Mt.create({
  name: "columns",
  group: "block",
  defining: !0,
  isolating: !0,
  allowGapCursor: !1,
  content: "column{1,}",
  priority: Fo,
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
    return ["div", dt(this.options.HTMLAttributes, t), 0];
  },
  addCommands() {
    return {
      insertColumns: (t) => ({ tr: e, dispatch: i, editor: r }) => {
        const o = Wo(r.schema, t && t.cols || 3);
        if (i) {
          const c = e.selection.anchor + 1;
          e.replaceSelectionWith(o).scrollIntoView().setSelection(zt.near(e.doc.resolve(c)));
        }
        return !0;
      },
      addColBefore: () => ({ dispatch: t, state: e }) => ne({ dispatch: t, state: e, type: "addBefore" }),
      addColAfter: () => ({ dispatch: t, state: e }) => ne({ dispatch: t, state: e, type: "addAfter" }),
      deleteCol: () => ({ dispatch: t, state: e }) => ne({ dispatch: t, state: e, type: "delete" })
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-Alt-G": () => this.editor.commands.insertColumns(),
      Tab: () => Be({
        state: this.editor.state,
        dispatch: this.editor.view.dispatch,
        type: "after"
      }),
      "Shift-Tab": () => Be({
        state: this.editor.state,
        dispatch: this.editor.view.dispatch,
        type: "before"
      })
    };
  }
}), Ti = Mt.create({
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
    return ["div", dt(this.options.HTMLAttributes, t), 0];
  }
});
var de = /* @__PURE__ */ ((t) => (t[t.max = 7] = "max", t[t.min = 0] = "min", t[t.more = 1] = "more", t[t.less = -1] = "less", t))(de || {});
function Uo(t, e, i) {
  return t < e ? e : t > i ? i : t;
}
function Go(t, e, i, r) {
  const { doc: o, selection: c } = t;
  if (!o || !c || !(c instanceof zt || c instanceof an))
    return t;
  const { from: a, to: l } = c;
  return o.nodesBetween(a, l, (s, d) => {
    const h = s.type;
    return i.includes(h.name) ? (t = he(t, d, e), !1) : !Yi(s.type.name, r.extensionManager.extensions);
  }), t;
}
function he(t, e, i) {
  if (!t.doc)
    return t;
  const r = t.doc.nodeAt(e);
  if (!r)
    return t;
  const a = Uo((r.attrs.indent || 0) + i, 0, 7);
  if (a === r.attrs.indent)
    return t;
  const l = {
    ...r.attrs,
    indent: a
  };
  return t.setNodeMarkup(e, r.type, l, r.marks);
}
function ks({ delta: t, types: e }) {
  return ({ state: i, dispatch: r, editor: o }) => {
    const { selection: c } = i;
    let { tr: a } = i;
    return a = a.setSelection(c), a = Go(a, t, e, o), a.docChanged ? (r && r(a), !0) : !1;
  };
}
function Jt(t) {
  function e() {
    const c = Q(t), a = O(() => c.current, []), l = Q(/* @__PURE__ */ new Set()), s = O((h) => {
      c.current = { ...c.current, ...h }, l.current.forEach((u) => u());
    }, []), d = O((h) => (l.current.add(h), () => l.current.delete(h)), []);
    return {
      get: a,
      set: s,
      subscribe: d
    };
  }
  const i = Vi(null);
  function r({ children: c }) {
    return /* @__PURE__ */ n(i.Provider, { value: e(), children: c });
  }
  function o(c) {
    const a = Wi(i);
    if (!a)
      throw new Error("Store not found");
    return [Fi(
      a.subscribe,
      () => c(a.get()),
      () => c(t)
    ), a.set];
  }
  return {
    Provider: r,
    useStore: o
  };
}
Jt({
  value: !1
});
Jt({
  value: !1
});
const { Provider: qo, useStore: Ni } = Jt({
  value: !1
}), { Provider: jo, useStore: Xo } = Jt({
  value: "light"
});
sn("0");
function Yt(t, e) {
  return window.addEventListener(t, e), () => {
    window.removeEventListener(t, e);
  };
}
function Ce(t, e) {
  window.dispatchEvent(
    new CustomEvent(t, {
      detail: e
    })
  );
}
const lt = {
  UPLOAD_IMAGE: (t) => `UPLOAD_IMAGE-${t}`,
  UPLOAD_VIDEO: (t) => `UPLOAD_VIDEO-${t}`,
  EDIT: (t) => `EDIT-${t}`,
  UPDATE_THEME: (t) => `UPDATE_THEME-${t}`,
  SEARCH_REPLCE: "SEARCH_REPLACE"
}, Yo = {
  setOpen: (t, e) => {
    Ce(lt.UPLOAD_IMAGE(t), e);
  }
}, bt = et.Root, yt = et.Trigger, Zo = et.Portal, ki = _.forwardRef(({ className: t, ...e }, i) => /* @__PURE__ */ n(
  et.Overlay,
  {
    ref: i,
    className: S(
      "richtext-fixed richtext-inset-0 richtext-z-50 richtext-bg-black/80 richtext- data-[state=open]:richtext-animate-in data-[state=closed]:richtext-animate-out data-[state=closed]:richtext-fade-out-0 data-[state=open]:richtext-fade-in-0",
      t
    ),
    ...e
  }
));
ki.displayName = et.Overlay.displayName;
const ut = _.forwardRef(({ className: t, children: e, ...i }, r) => /* @__PURE__ */ g(Zo, { children: [
  /* @__PURE__ */ n(ki, {}),
  /* @__PURE__ */ g(
    et.Content,
    {
      ref: r,
      className: S(
        "richtext-dialog-content richtext-fixed richtext-left-[50%] richtext-top-[50%] richtext-z-50 richtext-grid richtext-w-full richtext-max-w-lg richtext-translate-x-[-50%] richtext-translate-y-[-50%] richtext-gap-4 richtext-border richtext-bg-background richtext-p-6 richtext-shadow-lg richtext-duration-200 data-[state=open]:richtext-animate-in data-[state=closed]:richtext-animate-out data-[state=closed]:richtext-fade-out-0 data-[state=open]:richtext-fade-in-0 data-[state=closed]:richtext-zoom-out-95 data-[state=open]:richtext-zoom-in-95 data-[state=closed]:richtext-slide-out-to-left-1/2 data-[state=closed]:richtext-slide-out-to-top-[48%] data-[state=open]:richtext-slide-in-from-left-1/2 data-[state=open]:richtext-slide-in-from-top-[48%] sm:richtext-rounded-lg",
        t
      ),
      ...i,
      children: [
        e,
        /* @__PURE__ */ g(et.Close, { className: "richtext-absolute richtext-right-4 richtext-top-4 richtext-rounded-sm richtext-opacity-70 richtext-ring-offset-background richtext-transition-opacity hover:richtext-opacity-100 focus:richtext-outline-none focus:richtext-ring-2 focus:richtext-ring-ring focus:richtext-ring-offset-2 disabled:richtext-pointer-events-none data-[state=open]:richtext-bg-accent data-[state=open]:richtext-text-muted-foreground", children: [
          /* @__PURE__ */ n(ii, { className: "richtext-h-4 richtext-w-4" }),
          /* @__PURE__ */ n("span", { className: "richtext-sr-only", children: "Close" })
        ] })
      ]
    }
  )
] }));
ut.displayName = et.Content.displayName;
function Si({
  className: t,
  ...e
}) {
  return /* @__PURE__ */ n(
    "div",
    {
      className: S(
        "richtext-flex richtext-flex-col richtext-space-y-1.5 richtext-text-center sm:richtext-text-left",
        t
      ),
      ...e
    }
  );
}
Si.displayName = "DialogHeader";
function Ht({
  className: t,
  ...e
}) {
  return /* @__PURE__ */ n(
    "div",
    {
      className: S(
        "richtext-flex richtext-flex-col-reverse sm:richtext-flex-row sm:richtext-justify-end sm:richtext-space-x-2",
        t
      ),
      ...e
    }
  );
}
Ht.displayName = "DialogFooter";
const mt = _.forwardRef(({ className: t, ...e }, i) => /* @__PURE__ */ n(
  et.Title,
  {
    ref: i,
    className: S(
      "richtext-text-lg richtext-font-semibold richtext-leading-none richtext-tracking-tight",
      t
    ),
    ...e
  }
));
mt.displayName = et.Title.displayName;
const Ko = _.forwardRef(({ className: t, ...e }, i) => /* @__PURE__ */ n(
  et.Description,
  {
    ref: i,
    className: S("richtext-text-sm richtext-text-muted-foreground", t),
    ...e
  }
));
Ko.displayName = et.Description.displayName;
function Ss(t) {
  return t.replace(/^.*\/|\..+$/g, "");
}
function As(t) {
  return t.split(".").pop();
}
function Ls(t) {
  return t < 1024 ? `${t} Byte` : t < 1024 * 1024 ? `${(t / 1024).toFixed(2)} KB` : `${(t / 1024 / 1024).toFixed(2)} MB`;
}
function Ms(t) {
  return t ? t === "application/pdf" ? "pdf" : t.startsWith("application/") && [".document", "word"].some((e) => t.includes(e)) ? "word" : t.startsWith("application/") && ["presentation"].some((e) => t.includes(e)) ? "excel" : t.startsWith("application/") && ["sheet"].some((e) => t.includes(e)) ? "ppt" : t.startsWith("image") ? "image" : t.startsWith("audio") ? "audio" : t.startsWith("video") ? "video" : "file" : "file";
}
function Jo(t) {
  return new Promise((e) => {
    const i = new FileReader();
    i.addEventListener(
      "load",
      () => {
        e({
          alt: t.name,
          src: i.result
        });
      },
      !1
    ), i.readAsDataURL(t);
  });
}
function Te(t, e) {
  const i = t.split(","), r = i[0].match(/:(.*?);/)[1], o = atob(i[i.length - 1]);
  let c = o.length;
  const a = new Uint8Array(c);
  for (; c--; )
    a[c] = o.charCodeAt(c);
  return new File([a], e, { type: r });
}
function Qo({ editor: t, imageInline: e, onClose: i }) {
  const { t: r } = j(), [o, c] = E(!1), a = Wt.useRef(null), [l, s] = Wt.useState(), [d, h] = Wt.useState(""), u = Q(null), [m, x] = E({
    src: "",
    file: null
  });
  function w(v) {
    if (a.current && v.width && v.height) {
      const b = p(a.current, v);
      h(b);
    }
  }
  function p(v, b) {
    const M = document.createElement("canvas"), I = v.naturalWidth / v.width, A = v.naturalHeight / v.height;
    M.width = b.width * I, M.height = b.height * A;
    const y = M.getContext("2d");
    return y && (y.imageSmoothingEnabled = !1, y.drawImage(
      v,
      b.x * I,
      b.y * A,
      b.width * I,
      b.height * A,
      0,
      0,
      b.width * I,
      b.height * A
    )), M.toDataURL("image/png", 1);
  }
  async function f() {
    var v, b;
    try {
      const M = Te(d, ((v = m == null ? void 0 : m.file) == null ? void 0 : v.name) || "image.png"), I = (b = t.extensionManager.extensions.find(
        (y) => y.name === Lt.name
      )) == null ? void 0 : b.options;
      let A = "";
      I.upload ? A = await I.upload(M) : A = URL.createObjectURL(M), t.chain().focus().setImageInline({ src: A, inline: e }).run(), c(!1), x({
        src: "",
        file: null
      }), i();
    } catch (M) {
      console.log("Error cropping image", M);
    }
  }
  function H(v) {
    var b;
    v.preventDefault(), (b = u.current) == null || b.click();
  }
  const N = async (v) => {
    var A;
    const b = (A = v == null ? void 0 : v.target) == null ? void 0 : A.files;
    if (!t || t.isDestroyed || b.length === 0)
      return;
    const M = b[0], I = await Jo(M);
    c(!0), x({
      src: I.src,
      file: M
    });
  };
  return /* @__PURE__ */ g(V, { children: [
    /* @__PURE__ */ n(
      X,
      {
        className: "richtext-mt-1 richtext-w-full",
        onClick: H,
        size: "sm",
        children: r("editor.image.dialog.tab.uploadCrop")
      }
    ),
    /* @__PURE__ */ g(bt, { open: o, children: [
      /* @__PURE__ */ n(yt, {}),
      /* @__PURE__ */ g(ut, { children: [
        /* @__PURE__ */ n(mt, { children: r("editor.image.dialog.tab.uploadCrop") }),
        /* @__PURE__ */ n("div", { children: m.src && /* @__PURE__ */ n(
          Wr,
          {
            className: "richtext-w-full",
            crop: l,
            onChange: (v) => s(v),
            onComplete: (v) => w(v),
            children: /* @__PURE__ */ n(
              "img",
              {
                alt: "Crop me",
                ref: a,
                src: m.src
              }
            )
          }
        ) }),
        /* @__PURE__ */ g(Ht, { children: [
          /* @__PURE__ */ g(
            X,
            {
              onClick: () => {
                c(!1), x({
                  src: "",
                  file: null
                });
              },
              children: [
                r("editor.imageUpload.cancel"),
                /* @__PURE__ */ n(
                  Y,
                  {
                    className: "richtext-ml-[4px]",
                    name: "Trash2"
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ g(
            X,
            {
              className: "richtext-w-fit",
              onClick: f,
              children: [
                r("editor.imageUpload.crop"),
                /* @__PURE__ */ n(
                  Y,
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
    /* @__PURE__ */ n(
      "input",
      {
        accept: "image/*",
        multiple: !0,
        onChange: N,
        ref: u,
        type: "file",
        style: {
          display: "none"
        }
      }
    )
  ] });
}
function tc(t) {
  var w;
  const { t: e } = j(), [i, r] = E(!1), o = (p) => {
    r(p.detail);
  }, [c, a] = E(""), l = Q(null), [s, d] = E(((w = t.editor.extensionManager.extensions.find(
    (p) => p.name === Lt.name
  )) == null ? void 0 : w.options.defaultInline) || !1), h = q(() => {
    var f;
    return (f = t.editor.extensionManager.extensions.find(
      (H) => H.name === Lt.name
    )) == null ? void 0 : f.options;
  }, [t.editor]);
  W(() => {
    const p = Yt(lt.UPLOAD_IMAGE(t.editor.id), o);
    return () => {
      p();
    };
  }, []);
  async function u(p) {
    var v;
    const f = (v = p == null ? void 0 : p.target) == null ? void 0 : v.files;
    if (!t.editor || t.editor.isDestroyed || f.length === 0)
      return;
    const H = f[0];
    let N = "";
    h.upload ? N = await h.upload(H) : N = URL.createObjectURL(H), t.editor.chain().focus().setImageInline({ src: N, inline: s }).run(), r(!1), d(!1);
  }
  function m(p) {
    p.preventDefault(), p.stopPropagation(), t.editor.chain().focus().setImageInline({ src: c, inline: s }).run(), r(!1), d(!1), a("");
  }
  function x(p) {
    var f;
    p.preventDefault(), (f = l.current) == null || f.click();
  }
  return /* @__PURE__ */ g(
    bt,
    {
      onOpenChange: r,
      open: i,
      children: [
        /* @__PURE__ */ n(yt, { asChild: !0, children: /* @__PURE__ */ n(
          D,
          {
            action: () => r(!0),
            icon: t.icon,
            tooltip: t.tooltip
          }
        ) }),
        /* @__PURE__ */ g(ut, { children: [
          /* @__PURE__ */ n(mt, { children: e("editor.image.dialog.title") }),
          /* @__PURE__ */ g(
            ui,
            {
              activationMode: "manual",
              defaultValue: h.resourceImage === "both" || h.resourceImage === "upload" ? "upload" : "link",
              children: [
                /* @__PURE__ */ g(be, { className: "richtext-grid richtext-w-full richtext-grid-cols-2", children: [
                  h.resourceImage === "both" || h.resourceImage === "upload" ? /* @__PURE__ */ n(St, { value: "upload", children: e("editor.image.dialog.tab.upload") }) : /* @__PURE__ */ n(V, {}),
                  h.resourceImage === "both" || h.resourceImage === "link" ? /* @__PURE__ */ n(St, { value: "link", children: e("editor.image.dialog.tab.url") }) : /* @__PURE__ */ n(V, {})
                ] }),
                /* @__PURE__ */ g("div", { className: "richtext-my-[10px] richtext-flex richtext-items-center richtext-gap-[4px]", children: [
                  /* @__PURE__ */ n(
                    yi,
                    {
                      checked: s,
                      onCheckedChange: (p) => {
                        d(p);
                      }
                    }
                  ),
                  /* @__PURE__ */ n(ct, { children: e("editor.link.dialog.inline") })
                ] }),
                /* @__PURE__ */ g(At, { value: "upload", children: [
                  /* @__PURE__ */ g("div", { className: "richtext-flex richtext-items-center richtext-gap-[10px]", children: [
                    /* @__PURE__ */ n(
                      X,
                      {
                        className: "richtext-mt-1 richtext-w-full",
                        onClick: x,
                        size: "sm",
                        children: e("editor.image.dialog.tab.upload")
                      }
                    ),
                    /* @__PURE__ */ n(
                      Qo,
                      {
                        editor: t.editor,
                        imageInline: s,
                        onClose: () => Yo.setOpen(t.editor.id, !1)
                      }
                    )
                  ] }),
                  /* @__PURE__ */ n(
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
                /* @__PURE__ */ n(At, { value: "link", children: /* @__PURE__ */ n("form", { onSubmit: m, children: /* @__PURE__ */ g("div", { className: "richtext-flex richtext-items-center richtext-gap-2", children: [
                  /* @__PURE__ */ n(
                    J,
                    {
                      autoFocus: !0,
                      onChange: (p) => a(p.target.value),
                      placeholder: e("editor.image.dialog.placeholder"),
                      required: !0,
                      type: "url",
                      value: c
                    }
                  ),
                  /* @__PURE__ */ n(X, { type: "submit", children: e("editor.image.dialog.button.apply") })
                ] }) }) })
              ]
            }
          )
        ] })
      ]
    }
  );
}
const Bt = {
  TOP_LEFT: "tl",
  TOP_RIGHT: "tr",
  BOTTOM_LEFT: "bl",
  BOTTOM_RIGHT: "br"
};
function ec(t) {
  var A, y;
  const [e, i] = E({
    width: pt,
    height: pt
  }), [r, o] = E({
    width: 0,
    height: 0
  }), [c] = E([
    Bt.TOP_LEFT,
    Bt.TOP_RIGHT,
    Bt.BOTTOM_LEFT,
    Bt.BOTTOM_RIGHT
  ]), [a, l] = E(!1), [s, d] = E({
    x: 0,
    y: 0,
    w: 0,
    h: 0,
    dir: ""
  }), { align: h, inline: u } = (A = t == null ? void 0 : t.node) == null ? void 0 : A.attrs, m = q(() => {
    var at;
    const { src: L, alt: T, width: C, height: B, flipX: P, flipY: z } = (at = t == null ? void 0 : t.node) == null ? void 0 : at.attrs, R = jt(C) ? `${C}px` : C, $ = jt(B) ? `${B}px` : B, G = [];
    P && G.push("rotateX(180deg)"), z && G.push("rotateY(180deg)");
    const Z = G.join(" ");
    return {
      src: L || void 0,
      alt: T || void 0,
      style: {
        width: R || void 0,
        height: $ || void 0,
        transform: Z || "none"
      }
    };
  }, [(y = t == null ? void 0 : t.node) == null ? void 0 : y.attrs]), x = q(() => {
    const {
      style: { width: L }
    } = m;
    return { width: L === "100%" ? L : void 0 };
  }, [m]);
  function w(L) {
    o({
      width: L.target.width,
      height: L.target.height
    });
  }
  function p() {
    const { editor: L, getPos: T } = t;
    L.commands.setNodeSelection(T());
  }
  const f = O(
    st(() => {
      const { editor: L } = t, { width: T } = getComputedStyle(L.view.dom);
      i((C) => ({
        ...C,
        width: Number.parseInt(T, 10)
      }));
    }, wt),
    [t == null ? void 0 : t.editor]
  );
  function H(L, T) {
    L.preventDefault(), L.stopPropagation();
    const C = r.width, B = r.height, P = C / B;
    let z = Number(t.node.attrs.width), R = Number(t.node.attrs.height);
    const $ = e.width;
    z && !R ? (z = z > $ ? $ : z, R = Math.round(z / P)) : R && !z ? (z = Math.round(R * P), z = z > $ ? $ : z) : !z && !R ? (z = C > $ ? $ : C, R = Math.round(z / P)) : z = z > $ ? $ : z, l(!0), d({
      x: L.clientX,
      y: L.clientY,
      w: z,
      h: R,
      dir: T
    });
  }
  const N = O(
    st((L) => {
      if (L.preventDefault(), L.stopPropagation(), !a)
        return;
      const { x: T, w: C, dir: B } = s, P = (L.clientX - T) * (/l/.test(B) ? -1 : 1), z = Qe(C + P, ge, e.width);
      t.updateAttributes({
        width: z,
        height: null
      });
    }, wt),
    [a, s, e, t.updateAttributes]
  ), v = O(
    (L) => {
      L.preventDefault(), L.stopPropagation(), a && (d({
        x: 0,
        y: 0,
        w: 0,
        h: 0,
        dir: ""
      }), l(!1), p());
    },
    [a, p]
  ), b = O(() => {
    document == null || document.addEventListener("mousemove", N, !0), document == null || document.addEventListener("mouseup", v, !0);
  }, [N, v]), M = O(() => {
    document == null || document.removeEventListener("mousemove", N, !0), document == null || document.removeEventListener("mouseup", v, !0);
  }, [N, v]);
  W(() => (a ? b() : M(), () => {
    M();
  }), [a, b, M]);
  const I = q(() => new ResizeObserver(() => f()), [f]);
  return W(() => (I.observe(t.editor.view.dom), () => {
    I.disconnect();
  }), [t.editor.view.dom, I]), /* @__PURE__ */ n(
    It,
    {
      as: u ? "span" : "div",
      className: "image-view",
      style: { ...x, textAlign: h, display: u ? "inline" : "block" },
      children: /* @__PURE__ */ g(
        "div",
        {
          "data-drag-handle": !0,
          draggable: "true",
          style: x,
          className: `image-view__body ${t != null && t.selected ? "image-view__body--focused" : ""} ${a ? "image-view__body--resizing" : ""}`,
          children: [
            /* @__PURE__ */ n(
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
            (t == null ? void 0 : t.editor.view.editable) && ((t == null ? void 0 : t.selected) || a) && /* @__PURE__ */ n("div", { className: "image-resizer", children: c == null ? void 0 : c.map((L) => /* @__PURE__ */ n(
              "span",
              {
                className: `image-resizer__handler image-resizer__handler--${L}`,
                onMouseDown: (T) => H(T, L)
              },
              `image-dir-${L}`
            )) })
          ]
        }
      )
    }
  );
}
const gt = new we("upload-image");
function ic() {
  return new ve({
    key: gt,
    state: {
      init() {
        return dn.empty;
      },
      apply(t, e) {
        e = e.map(t.mapping, t.doc);
        const i = t.getMeta(gt);
        if (i != null && i.add)
          for (const { id: r, pos: o, src: c } of i.add) {
            const a = nc(c), l = ln.widget(o, a, { id: r });
            e = e.add(t.doc, [l]);
          }
        else if (i != null && i.remove)
          for (const r of i.remove)
            e = e.remove(e.find(void 0, void 0, (o) => o.id === r));
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
function nc(t) {
  const e = document.createElement("div"), i = document.createElement("img");
  return i.setAttribute("class", "opacity-50"), i.src = t, i.addEventListener("load", () => {
    e.setAttribute("class", "img-placeholder");
  }), e.append(i), e;
}
function rc(t, e) {
  var o;
  const r = gt.getState(t).find(void 0, void 0, (c) => c.id === e);
  return r.length > 0 ? (o = r[0]) == null ? void 0 : o.from : null;
}
function oc({ validateFn: t, onUpload: e, postUpload: i, defaultInline: r = !1 }) {
  return (o, c, a) => {
    for (const l of o) {
      if (t && !t(l))
        continue;
      const s = Date.now().toString(), d = c.state.tr;
      d.selection.empty || d.deleteSelection();
      const h = URL.createObjectURL(l);
      d.setMeta(gt, {
        add: [{ id: s, pos: a, src: h }]
      }), c.dispatch(d), e(l).then(
        async (u) => {
          var N;
          i && typeof u == "string" && (u = await i(u));
          const { schema: m } = c.state;
          let x = rc(c.state, s);
          if (x === null)
            return;
          const w = typeof u == "object" ? h : u, p = (N = m.nodes.image) == null ? void 0 : N.create({
            src: w,
            inline: r
          });
          if (!p)
            return;
          const { doc: f } = c.state;
          x > f.content.size && (x = f.content.size - 1);
          const H = c.state.tr.replaceWith(x, x, p).setMeta(gt, { remove: [s] });
          c.dispatch(H);
        },
        () => {
          const u = c.state.tr.delete(a, a).setMeta(gt, { remove: [s] });
          c.dispatch(u);
        }
      );
    }
  };
}
function cc(t, e, i) {
  var o;
  const r = [...((o = e.clipboardData) == null ? void 0 : o.files) || []];
  if (r.length > 0) {
    e.preventDefault();
    const c = t.state.selection.from;
    return i(r, t, c + 1), !0;
  }
  return !1;
}
function ac(t, e, i, r) {
  var c;
  const o = [...((c = e.dataTransfer) == null ? void 0 : c.files) || []];
  if (!i && o.length > 0) {
    e.preventDefault();
    const a = t.posAtCoords({
      left: e.clientX,
      top: e.clientY
    });
    if (a)
      return r(o, t, a.pos + 1), !0;
  }
  return !1;
}
const sc = {
  acceptMimes: ["image/jpeg", "image/gif", "image/png", "image/jpg"],
  maxSize: 1024 * 1024 * 5,
  // 5MB
  resourceImage: "both",
  defaultInline: !1
}, Lt = fe.extend({
  group: "inline",
  inline: !0,
  defining: !0,
  draggable: !0,
  selectable: !0,
  addOptions() {
    var t;
    return {
      ...sc,
      ...(t = this.parent) == null ? void 0 : t.call(this),
      upload: () => Promise.reject("Image Upload Function"),
      button: ({
        editor: e,
        extension: i,
        t: r
      }) => {
        var o, c;
        return {
          component: tc,
          componentProps: {
            action: () => !0,
            upload: i.options.upload,
            /* If setImage is not available(when Image Component is not imported), the button is disabled */
            disabled: !((c = (o = e.can()).setImage) != null && c.call(o, {})),
            icon: "ImageUp",
            tooltip: r("editor.image.tooltip"),
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
          const i = e.style.width || e.getAttribute("width") || null;
          return i ? Number.parseInt(i, 10) : null;
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
    return Et(ec);
  },
  addCommands() {
    var t;
    return {
      ...(t = this.parent) == null ? void 0 : t.call(this),
      setImageInline: (e) => ({ commands: i }) => i.insertContent({
        type: this.name,
        attrs: {
          ...e,
          inline: e.inline ?? this.options.defaultInline
        }
      }),
      updateImage: (e) => ({ commands: i }) => i.updateAttributes(this.name, e),
      setAlignImage: (e) => ({ commands: i }) => i.updateAttributes(this.name, { align: e })
    };
  },
  renderHTML({ HTMLAttributes: t }) {
    const { flipX: e, flipY: i, align: r, inline: o } = t, c = e || i ? `transform: rotateX(${e ? "180" : "0"}deg) rotateY(${i ? "180" : "0"}deg);` : "", a = r ? `text-align: ${r};` : "";
    return [
      o ? "span" : "div",
      {
        style: a,
        class: "image"
      },
      [
        "img",
        dt(
          {
            height: "auto",
            style: c
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
          var c;
          const e = t == null ? void 0 : t.parentElement, i = t == null ? void 0 : t.getAttribute("width"), r = (t == null ? void 0 : t.getAttribute("flipx")) || !1, o = (t == null ? void 0 : t.getAttribute("flipy")) || !1;
          return {
            src: t == null ? void 0 : t.getAttribute("src"),
            alt: t == null ? void 0 : t.getAttribute("alt"),
            caption: t == null ? void 0 : t.getAttribute("caption"),
            width: i ? Number.parseInt(i, 10) : null,
            align: (t == null ? void 0 : t.getAttribute("align")) || ((c = e == null ? void 0 : e.style) == null ? void 0 : c.textAlign) || null,
            inline: (t == null ? void 0 : t.getAttribute("inline")) || !1,
            flipX: r === "true",
            flipY: o === "true"
          };
        }
      },
      {
        tag: "div[class=image]",
        getAttrs: (t) => {
          const e = t.querySelector("img"), i = e == null ? void 0 : e.getAttribute("width"), r = (e == null ? void 0 : e.getAttribute("flipx")) || !1, o = (e == null ? void 0 : e.getAttribute("flipy")) || !1;
          return {
            src: e == null ? void 0 : e.getAttribute("src"),
            alt: e == null ? void 0 : e.getAttribute("alt"),
            caption: e == null ? void 0 : e.getAttribute("caption"),
            width: i ? Number.parseInt(i, 10) : null,
            align: (e == null ? void 0 : e.getAttribute("align")) || t.style.textAlign || null,
            inline: (e == null ? void 0 : e.getAttribute("inline")) || !1,
            flipX: r === "true",
            flipY: o === "true"
          };
        }
      }
    ];
  },
  addProseMirrorPlugins() {
    const e = oc({
      validateFn: (i) => !(!this.options.acceptMimes.includes(i.type) || i.size > this.options.maxSize),
      onUpload: this.options.upload,
      // postUpload: this.options.postUpload,
      defaultInline: this.options.defaultInline
    });
    return [
      new ve({
        props: {
          handlePaste: (i, r) => !r.clipboardData || [...r.clipboardData.files || []].some((c) => c.type === "text/html") ? !1 : cc(i, r, e),
          handleDrop: (i, r, o, c) => (!(r instanceof DragEvent) || !r.dataTransfer || ac(i, r, c, e), !1)
        }
      }),
      ic()
    ];
  }
});
function lc(t) {
  return /\.(?:mp4|webm|ogg|mov)$/i.test(t);
}
function dc(t) {
  const { t: e } = j(), [i, r] = E(""), o = Q(null), [c, a] = E(""), [l, s] = E(!1), d = (w) => {
    s(w.detail);
  };
  W(() => {
    const w = Yt(lt.UPLOAD_VIDEO(t.editor.id), d);
    return () => {
      w();
    };
  }, []);
  const h = q(() => {
    var p;
    return (p = t.editor.extensionManager.extensions.find(
      (f) => f.name === Ai.name
    )) == null ? void 0 : p.options;
  }, [t.editor]);
  async function u(w) {
    var N;
    const p = (N = w == null ? void 0 : w.target) == null ? void 0 : N.files;
    if (!t.editor || t.editor.isDestroyed || p.length === 0)
      return;
    const f = p[0];
    let H = "";
    h.upload ? H = await h.upload(f) : H = URL.createObjectURL(f), t.editor.chain().focus().setVideo({
      src: H,
      width: "100%"
    }).run(), s(!1);
  }
  function m(w) {
    w.preventDefault(), w.stopPropagation(), i && (t.editor.chain().focus().setVideo({
      src: i,
      width: "100%"
    }).run(), s(!1));
  }
  function x(w) {
    var p;
    w.preventDefault(), (p = o.current) == null || p.click();
  }
  return /* @__PURE__ */ g(
    bt,
    {
      onOpenChange: s,
      open: l,
      children: [
        /* @__PURE__ */ n(yt, { asChild: !0, children: /* @__PURE__ */ n(
          D,
          {
            action: () => s(!0),
            icon: t.icon,
            tooltip: t.tooltip
          }
        ) }),
        /* @__PURE__ */ g(ut, { children: [
          /* @__PURE__ */ n(mt, { children: e("editor.video.dialog.title") }),
          /* @__PURE__ */ g(
            ui,
            {
              activationMode: "manual",
              defaultValue: (h == null ? void 0 : h.resourceVideo) === "both" || (h == null ? void 0 : h.resourceVideo) === "upload" ? "upload" : "link",
              children: [
                /* @__PURE__ */ g(be, { className: "richtext-grid richtext-w-full richtext-grid-cols-2", children: [
                  ((h == null ? void 0 : h.resourceVideo) === "both" || (h == null ? void 0 : h.resourceVideo) === "upload") && /* @__PURE__ */ n(St, { value: "upload", children: e("editor.video.dialog.tab.upload") }),
                  ((h == null ? void 0 : h.resourceVideo) === "both" || (h == null ? void 0 : h.resourceVideo) === "link") && /* @__PURE__ */ n(St, { value: "link", children: e("editor.video.dialog.link") })
                ] }),
                /* @__PURE__ */ g(At, { value: "upload", children: [
                  /* @__PURE__ */ n("div", { className: "richtext-flex richtext-items-center richtext-gap-[10px]", children: /* @__PURE__ */ n(
                    X,
                    {
                      className: "richtext-mt-1 richtext-w-full",
                      onClick: x,
                      size: "sm",
                      children: e("editor.video.dialog.tab.upload")
                    }
                  ) }),
                  /* @__PURE__ */ n(
                    "input",
                    {
                      accept: "video/*",
                      multiple: !0,
                      onChange: u,
                      ref: o,
                      type: "file",
                      style: {
                        display: "none"
                      }
                    }
                  )
                ] }),
                /* @__PURE__ */ g(At, { value: "link", children: [
                  /* @__PURE__ */ n("form", { onSubmit: m, children: /* @__PURE__ */ g("div", { className: "richtext-flex richtext-items-center richtext-gap-2", children: [
                    /* @__PURE__ */ n(
                      J,
                      {
                        autoFocus: !0,
                        placeholder: e("editor.video.dialog.placeholder"),
                        required: !0,
                        type: "url",
                        value: i,
                        onChange: (w) => {
                          const p = w.target.value;
                          if (!lc(p)) {
                            a("Invalid video URL"), r("");
                            return;
                          }
                          a(""), r(p);
                        }
                      }
                    ),
                    /* @__PURE__ */ n(X, { type: "submit", children: e("editor.video.dialog.button.apply") })
                  ] }) }),
                  c && /* @__PURE__ */ n("div", { className: "richtext-my-[5px] richtext-text-red-500", children: c })
                ] })
              ]
            }
          )
        ] })
      ]
    }
  );
}
function hc(t) {
  return t = t.replace("https://youtu.be/", "https://www.youtube.com/watch?v=").replace("watch?v=", "embed/"), t = t.replace("https://vimeo.com/", "https://player.vimeo.com/video/"), /^https?:\/\/www.bilibili.com\/video\/.*/i.test(t) && (t = t.replace(/\?.*$/, "").replace("https://www.bilibili.com/video/", "https://player.bilibili.com/player.html?bvid=")), t.includes("drive.google.com") && (t = t.replace("/view", "/preview")), t;
}
const Ai = Mt.create({
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
      width: oe["size-medium"],
      HTMLAttributes: {
        class: "iframe-wrapper",
        style: "display: flex;justify-content: center;"
      },
      button: ({ editor: t, t: e }) => {
        var i, r;
        return {
          component: dc,
          componentProps: {
            action: () => {
            },
            isActive: () => t.isActive("video") || !1,
            /* If setVideo is not available(when Video Component is not imported), the button is disabled */
            disabled: !((r = (i = t.can()).setVideo) != null && r.call(i, {})),
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
          src: t ? hc(t) : null
        })
      },
      width: {
        default: this.options.width,
        renderHTML: ({ width: t }) => ({
          width: Yr(t)
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
    const { width: e = "100%" } = t ?? {}, i = {
      ...t,
      width: "100%",
      height: "100%"
    }, r = `position: relative;overflow: hidden;display: flex;flex: 1;max-width: ${e};`, o = `flex: 1;padding-bottom: ${9 / 16 * 100}%;`, l = ["div", { style: r }, ["div", { style: o }], ["iframe", i]];
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
});
function uc() {
  const [t] = Ni((e) => e.value);
  return t;
}
const mc = {
  setDisable: (t, e) => {
    Ce(lt.EDIT(t), e);
  }
}, xc = "_wrap_5y04w_1", fc = "_innerWrap_5y04w_15", _e = {
  wrap: xc,
  innerWrap: fc
};
function gc({ editor: t, node: e, updateAttributes: i }) {
  const r = uc(), { url: o, width: c, height: a } = e.attrs, [l, s] = E("");
  function d() {
    l && t.chain().updateAttributes(ft.name, {
      url: l
    }).setNodeSelection(t.state.selection.from).focus().run();
  }
  const h = O(
    (u) => {
      i({ width: u.width, height: u.height });
    },
    [i]
  );
  return /* @__PURE__ */ g(It, { children: [
    !o && /* @__PURE__ */ g("div", { className: "richtext-mx-auto richtext-my-[12px] richtext-flex richtext-max-w-[600px] richtext-items-center richtext-justify-center richtext-gap-[10px] richtext-rounded-[12px] richtext-border richtext-border-solid richtext-border-[#ccc] richtext-p-[10px]", children: [
      /* @__PURE__ */ n(
        J,
        {
          autoFocus: !0,
          className: "richtext-flex-1",
          onInput: (u) => s(u.target.value),
          placeholder: "Enter link",
          type: "url",
          value: l
        }
      ),
      /* @__PURE__ */ n(
        X,
        {
          className: "richtext-w-[60px]",
          onClick: d,
          children: "OK"
        }
      )
    ] }),
    o && /* @__PURE__ */ n(
      Br,
      {
        size: { width: Number.parseInt(c), height: Number.parseInt(a) },
        onResizeStop: (u, m, x, w) => {
          h({
            width: Number.parseInt(c) + w.width,
            height: Number.parseInt(a) + w.height
          });
        },
        children: /* @__PURE__ */ n("div", { className: Je(_e.wrap, "render-wrapper"), children: /* @__PURE__ */ n(
          "div",
          {
            className: _e.innerWrap,
            style: { pointerEvents: r ? "none" : "auto" },
            children: /* @__PURE__ */ n(
              "iframe",
              {
                className: "richtext-my-[12px] ",
                src: o
              }
            )
          }
        ) })
      }
    )
  ] });
}
function re(t, e = !1) {
  return (i) => {
    const r = t.startsWith("data-") ? t : `data-${t}`;
    let o = decodeURIComponent(i.getAttribute(r));
    if (o == null || typeof o == "string" && o === "null")
      try {
        const l = i.outerHTML.match(/([\S\s])+?="([\S\s])+?"/g);
        l && l.length > 0 && (o = (l.map((d) => d.trim()).reduce((d, h) => {
          const u = h.indexOf("="), m = [h.slice(0, u), h.slice(u + 1).slice(1, -1)];
          return d[m[0]] = m[1], d;
        }, {})[t.toLowerCase()] || "").replaceAll("&quot;", '"'));
      } catch (a) {
        console.error("Error getDatasetAttribute ", a.message, i);
      }
    if (e)
      try {
        return JSON.parse(o);
      } catch {
        return {};
      }
    if (o.includes("%") || o.includes("auto"))
      return o;
    const c = Number.parseInt(o);
    return c !== c ? o : c;
  };
}
const ft = Mt.create({
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
        extension: i,
        t: r
      }) => ({
        component: D,
        componentProps: {
          action: (o) => e.commands.setIframe(o),
          upload: i.options.upload,
          disabled: !e.can().setIframe({}),
          icon: "Iframe",
          tooltip: r("editor.iframe.tooltip")
        }
      })
    };
  },
  addAttributes() {
    return {
      width: {
        default: 600,
        parseHTML: re("width")
      },
      height: {
        default: 300,
        parseHTML: re("height")
      },
      url: {
        default: null,
        parseHTML: re("url")
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
    return ["iframe", dt(this.options.HTMLAttributes, t)];
  },
  addCommands() {
    return {
      setIframe: (t) => ({ tr: e, commands: i, chain: r }) => {
        var c, a, l;
        if (((l = (a = (c = e.selection) == null ? void 0 : c.node) == null ? void 0 : a.type) == null ? void 0 : l.name) == this.name)
          return i.updateAttributes(this.name, t);
        const o = t || { url: "" };
        return r().insertContent({
          type: this.name,
          attrs: o
        }).run();
      }
    };
  },
  addInputRules() {
    return [
      Zi({
        find: /^\$iframe\$$/,
        type: this.type,
        getAttributes: () => ({ width: "100%" })
      })
    ];
  },
  addNodeView() {
    return Et(gc);
  }
});
function pc({ selectImage: t, giphyApiKey: e, children: i }) {
  const [r, o] = E([]), [c] = E(15), a = Q(null), l = (d, h = "search") => {
    if (!e)
      return;
    const m = `${h === "search" ? `https://api.giphy.com/v1/gifs/search?q=${d}` : `https://api.giphy.com/v1/gifs/trending?q=${d}`}&limit=${c}&api_key=${e}`;
    fetch(m).then((x) => x.json()).then((x) => {
      o(x.data);
    }).catch((x) => {
      console.log(x);
    });
  };
  W(() => {
    l("", "trend");
  }, []);
  const s = O(
    pe((d) => {
      if (!d.target.value) {
        l("", "trend");
        return;
      }
      l(d.target.value);
    }, 350),
    // Adjust the debounce delay as needed
    []
  );
  return /* @__PURE__ */ g(Pt, { modal: !0, children: [
    /* @__PURE__ */ n(Dt, { asChild: !0, children: i }),
    /* @__PURE__ */ n(
      vt,
      {
        align: "start",
        className: "richtext-size-full richtext-p-2",
        hideWhenDetached: !0,
        side: "bottom",
        children: e ? /* @__PURE__ */ g(V, { children: [
          /* @__PURE__ */ n("div", { className: "richtext-mb-[10px] richtext-w-full", children: /* @__PURE__ */ n(
            J,
            {
              onChange: s,
              placeholder: "Search GIF",
              ref: a,
              type: "text"
            }
          ) }),
          /* @__PURE__ */ n("div", { className: "richtext-max-h-[280px] richtext-overflow-y-auto", children: /* @__PURE__ */ n("div", { className: "richtext-grid richtext-grid-cols-2 richtext-gap-1 ", children: r != null && r.length ? r == null ? void 0 : r.map((d) => /* @__PURE__ */ n(
            "img",
            {
              alt: "giphy",
              className: "richtext-cursor-pointer richtext-text-center",
              height: d.images.fixed_width_downsampled.height,
              onClick: () => t(d),
              src: d.images.fixed_width_downsampled.url,
              width: d.images.fixed_width_downsampled.width
            },
            `giphy-${d.id}`
          )) : /* @__PURE__ */ n("p", { children: "No GIFs found" }) }) })
        ] }) : /* @__PURE__ */ n("div", { children: /* @__PURE__ */ n("p", { children: "Missing Giphy API Key" }) })
      }
    )
  ] });
}
function wc({ editor: t, icon: e, giphyApiKey: i, ...r }) {
  return /* @__PURE__ */ n(
    pc,
    {
      giphyApiKey: i,
      selectImage: (c) => {
        const { url: a } = c.images.original;
        t.chain().focus().setImageGif({ src: a }).run();
      },
      children: /* @__PURE__ */ n(
        D,
        {
          icon: e,
          tooltip: r == null ? void 0 : r.tooltip
        }
      )
    }
  );
}
const _t = {
  TOP_LEFT: "tl",
  TOP_RIGHT: "tr",
  BOTTOM_LEFT: "bl",
  BOTTOM_RIGHT: "br"
};
function vc(t) {
  var I, A;
  const [e, i] = E({
    width: pt,
    height: pt
  }), [r, o] = E({
    width: 0,
    height: 0
  }), [c] = E([
    _t.TOP_LEFT,
    _t.TOP_RIGHT,
    _t.BOTTOM_LEFT,
    _t.BOTTOM_RIGHT
  ]), [a, l] = E(!1), [s, d] = E({
    x: 0,
    y: 0,
    w: 0,
    h: 0,
    dir: ""
  }), { align: h } = (I = t == null ? void 0 : t.node) == null ? void 0 : I.attrs, u = q(() => {
    var z;
    const { src: y, alt: L, width: T, height: C } = (z = t == null ? void 0 : t.node) == null ? void 0 : z.attrs, B = jt(T) ? `${T}px` : T, P = jt(C) ? `${C}px` : C;
    return {
      src: y || void 0,
      alt: L || void 0,
      style: {
        width: B || void 0,
        height: P || void 0
      }
    };
  }, [(A = t == null ? void 0 : t.node) == null ? void 0 : A.attrs]), m = q(() => {
    const {
      style: { width: y }
    } = u;
    return { width: y === "100%" ? y : void 0 };
  }, [u]);
  function x(y) {
    o({
      width: y.target.width,
      height: y.target.height
    });
  }
  function w() {
    const { editor: y, getPos: L } = t;
    y.commands.setNodeSelection(L());
  }
  const p = O(
    st(() => {
      const { editor: y } = t, { width: L } = getComputedStyle(y.view.dom);
      i((T) => ({
        ...T,
        width: Number.parseInt(L, 10)
      }));
    }, wt),
    [t == null ? void 0 : t.editor]
  );
  function f(y, L) {
    y.preventDefault(), y.stopPropagation();
    const T = r.width, C = r.height, B = T / C;
    let P = Number(t.node.attrs.width), z = Number(t.node.attrs.height);
    const R = e.width;
    P && !z ? (P = P > R ? R : P, z = Math.round(P / B)) : z && !P ? (P = Math.round(z * B), P = P > R ? R : P) : !P && !z ? (P = T > R ? R : T, z = Math.round(P / B)) : P = P > R ? R : P, l(!0), d({
      x: y.clientX,
      y: y.clientY,
      w: P,
      h: z,
      dir: L
    });
  }
  const H = O(
    st((y) => {
      if (y.preventDefault(), y.stopPropagation(), !a)
        return;
      const { x: L, w: T, dir: C } = s, B = (y.clientX - L) * (/l/.test(C) ? -1 : 1), P = Qe(T + B, ge, e.width);
      t.updateAttributes({
        width: P,
        height: null
      });
    }, wt),
    [a, s, e, t.updateAttributes]
  ), N = O(
    (y) => {
      y.preventDefault(), y.stopPropagation(), a && (d({
        x: 0,
        y: 0,
        w: 0,
        h: 0,
        dir: ""
      }), l(!1), w());
    },
    [a, w]
  ), v = O(() => {
    document == null || document.addEventListener("mousemove", H, !0), document == null || document.addEventListener("mouseup", N, !0);
  }, [H, N]), b = O(() => {
    document == null || document.removeEventListener("mousemove", H, !0), document == null || document.removeEventListener("mouseup", N, !0);
  }, [H, N]);
  W(() => (a ? v() : b(), () => {
    b();
  }), [a, v, b]);
  const M = q(() => new ResizeObserver(() => p()), [p]);
  return W(() => (M.observe(t.editor.view.dom), () => {
    M.disconnect();
  }), [t.editor.view.dom, M]), /* @__PURE__ */ n(
    It,
    {
      className: "image-view",
      style: { ...m, width: "100%", textAlign: h },
      children: /* @__PURE__ */ g(
        "div",
        {
          "data-drag-handle": !0,
          draggable: "true",
          style: m,
          className: `image-view__body ${t != null && t.selected ? "image-view__body--focused" : ""} ${a ? "image-view__body--resizing" : ""}`,
          children: [
            /* @__PURE__ */ n(
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
            (t == null ? void 0 : t.editor.view.editable) && ((t == null ? void 0 : t.selected) || a) && /* @__PURE__ */ n("div", { className: "image-resizer", children: c == null ? void 0 : c.map((y) => /* @__PURE__ */ n(
              "span",
              {
                className: `image-resizer__handler image-resizer__handler--${y}`,
                onMouseDown: (L) => f(L, y)
              },
              `image-dir-${y}`
            )) })
          ]
        }
      )
    }
  );
}
const Li = fe.extend({
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
      button: ({ editor: e, extension: i, t: r }) => {
        var c;
        const o = ((c = i == null ? void 0 : i.options) == null ? void 0 : c.GIPHY_API_KEY) || "";
        return {
          component: wc,
          componentProps: {
            editor: e,
            action: () => {
            },
            isActive: () => !1,
            disabled: !1,
            icon: "GifIcon",
            tooltip: r("editor.imageGif.tooltip"),
            giphyApiKey: o
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
          const i = e.style.width || e.getAttribute("width") || "10";
          return i === void 0 ? null : Number.parseInt(`${i}`, 10);
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
    return Et(vc);
  },
  addCommands() {
    var t;
    return {
      ...(t = this.parent) == null ? void 0 : t.call(this),
      setImageGif: (e) => ({ commands: i }) => i.insertContent({
        type: this.name,
        attrs: e
      }),
      updateImageGif: (e) => ({ commands: i }) => i.updateAttributes(this.name, e),
      setAlignImageGif: (e) => ({ commands: i }) => i.updateAttributes(this.name, { align: e })
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
        dt(
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
          const e = t.querySelector("img"), i = e == null ? void 0 : e.getAttribute("width");
          return {
            src: e == null ? void 0 : e.getAttribute("src"),
            alt: e == null ? void 0 : e.getAttribute("alt"),
            title: e == null ? void 0 : e.getAttribute("title"),
            width: i ? Number.parseInt(i, 10) : null,
            align: (e == null ? void 0 : e.getAttribute("align")) || t.style.textAlign || null
          };
        }
      }
    ];
  }
});
function bc({ node: t }) {
  var r;
  const e = ((r = t == null ? void 0 : t.attrs) == null ? void 0 : r.src) || "", i = e == null ? void 0 : e.split("/").pop();
  return i ? /* @__PURE__ */ n(It, { children: /* @__PURE__ */ n("div", { "data-twitter": "", children: /* @__PURE__ */ n(hn, { id: i }) }) }) : null;
}
function Mi(t) {
  const { t: e } = j(), [i, r] = E("");
  W(() => {
    var c;
    if (t != null && t.editor) {
      const { src: a } = (c = t.editor) == null ? void 0 : c.getAttributes(ue.name);
      a && r(a);
    }
  }, [t == null ? void 0 : t.editor]);
  function o(c) {
    c.preventDefault(), c.stopPropagation(), t == null || t.onSetLink(i);
  }
  return /* @__PURE__ */ n("div", { className: "border-neutral-200 richtext-rounded-lg !richtext-border richtext-bg-white richtext-p-2 richtext-shadow-sm dark:richtext-border-neutral-800 dark:richtext-bg-black", children: /* @__PURE__ */ g(
    "form",
    {
      className: "richtext-flex richtext-flex-col richtext-gap-2",
      onSubmit: o,
      children: [
        /* @__PURE__ */ n(ct, { className: "mb-[6px]", children: e("editor.link.dialog.text") }),
        /* @__PURE__ */ n("div", { className: "richtext-mb-[10px] richtext-flex richtext-w-full richtext-max-w-sm richtext-items-center richtext-gap-1.5", children: /* @__PURE__ */ n("div", { className: "richtext-relative richtext-w-full richtext-max-w-sm richtext-items-center", children: /* @__PURE__ */ n(
          J,
          {
            className: "richtext-w-80",
            onChange: (c) => r(c.target.value),
            placeholder: "Text",
            required: !0,
            type: "text",
            value: i
          }
        ) }) }),
        /* @__PURE__ */ n(
          X,
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
function yc(t) {
  function e(i) {
    t.action && t.action(i);
  }
  return /* @__PURE__ */ g(Pt, { modal: !0, children: [
    /* @__PURE__ */ n(Dt, { disabled: t == null ? void 0 : t.disabled, asChild: !0, children: /* @__PURE__ */ n(
      D,
      {
        tooltip: t == null ? void 0 : t.tooltip,
        isActive: t == null ? void 0 : t.isActive,
        disabled: t == null ? void 0 : t.disabled,
        children: /* @__PURE__ */ n(Y, { name: t == null ? void 0 : t.icon })
      }
    ) }),
    /* @__PURE__ */ n(vt, { hideWhenDetached: !0, className: "richtext-w-full", align: "start", side: "bottom", children: /* @__PURE__ */ n(Mi, { editor: t.editor, onSetLink: e }) })
  ] });
}
const Cc = /(https?:\/\/)?(www\.)?x\.com\/(\w{1,15})(\/status\/(\d+))?(\/\S*)?/g, Tc = /^https?:\/\/(www\.)?x\.com\/(\w{1,15})(\/status\/(\d+))?(\/\S*)?$/;
function $e(t) {
  return t.match(Tc);
}
const ue = Mt.create({
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
        component: yc,
        componentProps: {
          action: (i) => {
            t.commands.setTweet({ src: i });
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
    return Et(bc, { attrs: this.options.HTMLAttributes });
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
      setTweet: (t) => ({ commands: e }) => $e(t.src) ? e.insertContent({
        type: this.name,
        attrs: t
      }) : !1,
      updateTweet: (t) => ({ commands: e }) => $e(t.src) ? e.updateAttributes(this.name, { src: t.src }) : !1
    };
  },
  addPasteRules() {
    return this.options.addPasteHandler ? [
      Ki({
        find: Cc,
        type: this.type,
        getAttributes: (t) => ({ src: t.input })
      })
    ] : [];
  },
  renderHTML({ HTMLAttributes: t }) {
    return ["div", dt({ "data-twitter": "" }, t)];
  }
}), Nc = "_wrapper_rraz2_1", kc = "_tool_rraz2_17", Sc = "_active_rraz2_37", Ac = "_pen_rraz2_41", Lc = "_line_rraz2_48", Mc = "_options_rraz2_56", Ic = "_colorWrap_rraz2_66", Ec = "_color_rraz2_66", zc = "_colorActive_rraz2_83", k = {
  wrapper: Nc,
  tool: kc,
  active: Sc,
  pen: Ac,
  line: Lc,
  options: Mc,
  colorWrap: Ic,
  color: Ec,
  colorActive: zc
};
function Rc(t) {
  return /* @__PURE__ */ n(
    "svg",
    {
      height: "1em",
      viewBox: "0 0 24 24",
      width: "1em",
      xmlns: "http://www.w3.org/2000/svg",
      ...t,
      children: /* @__PURE__ */ n(
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
function Pc(t) {
  return /* @__PURE__ */ n(
    "svg",
    {
      height: "1em",
      viewBox: "0 0 24 24",
      width: "1em",
      xmlns: "http://www.w3.org/2000/svg",
      ...t,
      children: /* @__PURE__ */ n(
        "path",
        {
          d: "M20.06 18a4 4 0 0 1-.2-.89c-.67.7-1.48 1.05-2.41 1.05c-.83 0-1.52-.24-2.05-.71c-.53-.45-.8-1.06-.8-1.79c0-.88.33-1.56 1-2.05s1.61-.73 2.83-.73h1.4v-.64q0-.735-.45-1.17c-.3-.29-.75-.43-1.33-.43c-.52 0-.95.12-1.3.36c-.35.25-.52.54-.52.89h-1.46c0-.43.15-.84.45-1.24c.28-.4.71-.71 1.22-.94c.51-.21 1.06-.35 1.69-.35c.98 0 1.74.24 2.29.73s.84 1.16.86 2.02V16c0 .8.1 1.42.3 1.88V18zm-2.4-1.12c.45 0 .88-.11 1.29-.32c.4-.21.7-.49.88-.83v-1.57H18.7c-1.77 0-2.66.47-2.66 1.41c0 .43.15.73.46.96c.3.23.68.35 1.16.35m-12.2-3.17h4.07L7.5 8.29zM6.64 6h1.72l4.71 12h-1.93l-.97-2.57H4.82L3.86 18H1.93z",
          fill: "currentColor"
        }
      )
    }
  );
}
function Dc(t) {
  return /* @__PURE__ */ n(
    "svg",
    {
      height: "1em",
      viewBox: "0 0 24 24",
      width: "1em",
      xmlns: "http://www.w3.org/2000/svg",
      ...t,
      children: /* @__PURE__ */ n(
        "path",
        {
          d: "M3 21v-4.25L16.2 3.575q.3-.275.663-.425t.762-.15t.775.15t.65.45L20.425 5q.3.275.438.65T21 6.4q0 .4-.137.763t-.438.662L7.25 21zM17.6 7.8L19 6.4L17.6 5l-1.4 1.4z",
          fill: "currentColor"
        }
      )
    }
  );
}
function Hc(t) {
  return /* @__PURE__ */ n(
    "svg",
    {
      height: "1em",
      viewBox: "0 0 256 256",
      width: "1em",
      xmlns: "http://www.w3.org/2000/svg",
      ...t,
      children: /* @__PURE__ */ n(
        "path",
        {
          d: "M253.66 106.34a8 8 0 0 0-11.32 0L192 156.69L107.31 72l50.35-50.34a8 8 0 1 0-11.32-11.32L96 60.69a16 16 0 0 0-2.82 18.81L72 100.69a16 16 0 0 0 0 22.62l4.69 4.69l-58.35 58.34a8 8 0 0 0 3.13 13.25l72 24A7.9 7.9 0 0 0 96 224a8 8 0 0 0 5.66-2.34L136 187.31l4.69 4.69a16 16 0 0 0 22.62 0l21.19-21.18a16 16 0 0 0 18.81-2.82l50.35-50.34a8 8 0 0 0 0-11.32M93.84 206.85l-55-18.35L88 139.31L124.69 176ZM152 180.69L83.31 112L104 91.31L172.69 160Z",
          fill: "currentColor"
        }
      )
    }
  );
}
function Oc(t) {
  return /* @__PURE__ */ g(
    "svg",
    {
      height: "1em",
      viewBox: "0 0 16 16",
      width: "1em",
      xmlns: "http://www.w3.org/2000/svg",
      ...t,
      children: [
        /* @__PURE__ */ n(
          "path",
          {
            d: "m2.648 9.937l7.29-7.288a2.21 2.21 0 0 1 3.124 0l2.29 2.288a2.21 2.21 0 0 1 0 3.126L10.413 13H12.5a.5.5 0 0 1 0 1H4.501a2.2 2.2 0 0 1-1.563-.647l.707-.707c.227.226.535.354.856.354h4.005a1.2 1.2 0 0 0 .848-.354l1.292-1.293l-4-4l-3.29 3.291a1.21 1.21 0 0 0 0 1.712l.29.29l-.708.707l-.29-.29a2.21 2.21 0 0 1 0-3.126M8 6h6.89a1.2 1.2 0 0 0-.246-.356L14 5H9zm2-2h3l-.645-.644a1.21 1.21 0 0 0-1.71 0zm4.89 3H7.708l1 1H14l.644-.644A1.2 1.2 0 0 0 14.891 7zM9.708 9l1.646 1.646L13 9z",
            fill: "currentColor"
          }
        ),
        /* @__PURE__ */ n(
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
function Bc(t) {
  return /* @__PURE__ */ n(
    "svg",
    {
      height: "1em",
      viewBox: "0 0 24 24",
      width: "1em",
      xmlns: "http://www.w3.org/2000/svg",
      ...t,
      children: /* @__PURE__ */ n(
        "path",
        {
          d: "M3 3h18v18H3zm2 2v14h14V5z",
          fill: "currentColor"
        }
      )
    }
  );
}
function _c(t) {
  return /* @__PURE__ */ n(
    "svg",
    {
      height: "1em",
      viewBox: "0 0 24 24",
      width: "1em",
      xmlns: "http://www.w3.org/2000/svg",
      ...t,
      children: /* @__PURE__ */ n(
        "path",
        {
          d: "M2 20V4h20v16zm2-2h16V6H4zm0 0V6z",
          fill: "currentColor"
        }
      )
    }
  );
}
function $c(t) {
  return /* @__PURE__ */ n(
    "svg",
    {
      height: "1em",
      viewBox: "0 0 24 24",
      width: "1em",
      xmlns: "http://www.w3.org/2000/svg",
      ...t,
      children: /* @__PURE__ */ n(
        "path",
        {
          d: "M12 22q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22m0-2q3.35 0 5.675-2.325T20 12t-2.325-5.675T12 4T6.325 6.325T4 12t2.325 5.675T12 20m0-8",
          fill: "currentColor"
        }
      )
    }
  );
}
function Vc(t) {
  return /* @__PURE__ */ n(
    "svg",
    {
      height: "1em",
      viewBox: "0 0 24 24",
      width: "1em",
      xmlns: "http://www.w3.org/2000/svg",
      ...t,
      children: /* @__PURE__ */ n(
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
function Wc(t) {
  return /* @__PURE__ */ n(
    "svg",
    {
      height: "1em",
      viewBox: "0 0 24 24",
      width: "1em",
      xmlns: "http://www.w3.org/2000/svg",
      ...t,
      children: /* @__PURE__ */ n(
        "path",
        {
          d: "m6.8 21l-5.2-9l5.2-9h10.4l5.2 9l-5.2 9zm1.15-2h8.1l4.025-7l-4.025-7h-8.1L3.9 12zM12 12",
          fill: "currentColor"
        }
      )
    }
  );
}
function Fc(t) {
  return /* @__PURE__ */ n(
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
            /* @__PURE__ */ n("path", { d: "m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z" }),
            /* @__PURE__ */ n(
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
function Uc(t) {
  return /* @__PURE__ */ n(
    "svg",
    {
      height: "1em",
      viewBox: "0 0 24 24",
      width: "1em",
      xmlns: "http://www.w3.org/2000/svg",
      ...t,
      children: /* @__PURE__ */ n(
        "path",
        {
          d: "M16.01 11H4v2h12.01v3L20 12l-3.99-4z",
          fill: "currentColor"
        }
      )
    }
  );
}
function Gc(t) {
  return /* @__PURE__ */ n(
    "svg",
    {
      height: "1em",
      viewBox: "0 0 24 24",
      width: "1em",
      xmlns: "http://www.w3.org/2000/svg",
      ...t,
      children: /* @__PURE__ */ n(
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
function qc(t) {
  return /* @__PURE__ */ n(
    "svg",
    {
      height: "1em",
      viewBox: "0 0 24 24",
      width: "1em",
      xmlns: "http://www.w3.org/2000/svg",
      ...t,
      children: /* @__PURE__ */ n(
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
function jc(t) {
  return /* @__PURE__ */ n(
    "svg",
    {
      height: "1em",
      viewBox: "0 0 24 24",
      width: "1em",
      xmlns: "http://www.w3.org/2000/svg",
      ...t,
      children: /* @__PURE__ */ n(
        "path",
        {
          d: "M7 21q-.825 0-1.412-.587T5 19V6H4V4h5V3h6v1h5v2h-1v13q0 .825-.587 1.413T17 21zm2-4h2V8H9zm4 0h2V8h-2z",
          fill: "currentColor"
        }
      )
    }
  );
}
function Xc(t) {
  return /* @__PURE__ */ n(
    "svg",
    {
      height: "1em",
      viewBox: "0 0 256 256",
      width: "1em",
      xmlns: "http://www.w3.org/2000/svg",
      ...t,
      children: /* @__PURE__ */ n(
        "path",
        {
          d: "M211.81 83.79a28 28 0 0 1-33.12 4.83l-90.07 90.07a28 28 0 1 1-44.43-6.48a28 28 0 0 1 33.12-4.83l90.07-90.07a28 28 0 1 1 44.43 6.48",
          fill: "currentColor"
        }
      )
    }
  );
}
function Yc(t) {
  return /* @__PURE__ */ n(
    "svg",
    {
      height: "1em",
      viewBox: "0 0 24 24",
      width: "1em",
      xmlns: "http://www.w3.org/2000/svg",
      ...t,
      children: /* @__PURE__ */ n(
        "path",
        {
          d: "M12 20.325q-.35 0-.712-.125t-.638-.4l-1.725-1.575q-2.65-2.425-4.788-4.812T2 8.15Q2 5.8 3.575 4.225T7.5 2.65q1.325 0 2.5.562t2 1.538q.825-.975 2-1.537t2.5-.563q2.35 0 3.925 1.575T22 8.15q0 2.875-2.125 5.275T15.05 18.25l-1.7 1.55q-.275.275-.637.4t-.713.125M11.05 6.75q-.725-1.025-1.55-1.563t-2-.537q-1.5 0-2.5 1t-1 2.5q0 1.3.925 2.763t2.213 2.837t2.65 2.575T12 18.3q.85-.775 2.213-1.975t2.65-2.575t2.212-2.837T20 8.15q0-1.5-1-2.5t-2.5-1q-1.175 0-2 .538T12.95 6.75q-.175.25-.425.375T12 7.25t-.525-.125t-.425-.375m.95 4.725",
          fill: "currentColor"
        }
      )
    }
  );
}
function Zc(t) {
  return /* @__PURE__ */ n(
    "svg",
    {
      height: "1em",
      viewBox: "0 0 24 24",
      width: "1em",
      xmlns: "http://www.w3.org/2000/svg",
      ...t,
      children: /* @__PURE__ */ n(
        "path",
        {
          d: "m7.625 6.4l2.8-3.625q.3-.4.713-.587T12 2t.863.188t.712.587l2.8 3.625l4.25 1.425q.65.2 1.025.738t.375 1.187q0 .3-.088.6t-.287.575l-2.75 3.9l.1 4.1q.025.875-.575 1.475t-1.4.6q-.05 0-.55-.075L12 19.675l-4.475 1.25q-.125.05-.275.063T6.975 21q-.8 0-1.4-.6T5 18.925l.1-4.125l-2.725-3.875q-.2-.275-.288-.575T2 9.75q0-.625.363-1.162t1.012-.763zM8.85 8.125L4 9.725L7.1 14.2L7 18.975l5-1.375l5 1.4l-.1-4.8L20 9.775l-4.85-1.65L12 4zM12 11.5",
          fill: "currentColor"
        }
      )
    }
  );
}
function Kc(t) {
  return /* @__PURE__ */ n(
    "svg",
    {
      height: "1em",
      viewBox: "0 0 24 24",
      width: "1em",
      xmlns: "http://www.w3.org/2000/svg",
      ...t,
      children: /* @__PURE__ */ n(
        "path",
        {
          d: "M12.01 6c2.61 0 4.89 1.86 5.4 4.43l.3 1.5l1.52.11c1.56.11 2.78 1.41 2.78 2.96c0 1.65-1.35 3-3 3h-13c-2.21 0-4-1.79-4-4c0-2.05 1.53-3.76 3.56-3.97l1.07-.11l.5-.95A5.46 5.46 0 0 1 12.01 6m0-2C9.12 4 6.6 5.64 5.35 8.04C2.35 8.36.01 10.91.01 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5c0-2.64-2.05-4.78-4.64-4.96C18.68 6.59 15.65 4 12.01 4",
          fill: "currentColor"
        }
      )
    }
  );
}
function Jc(t) {
  return /* @__PURE__ */ n(
    "svg",
    {
      height: "1em",
      viewBox: "0 0 24 24",
      width: "1em",
      xmlns: "http://www.w3.org/2000/svg",
      ...t,
      children: /* @__PURE__ */ n(
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
const Qc = [
  F.blackHighlight,
  F.ofRGBA(166 / 255, 81 / 255, 167 / 255, 0.3),
  F.ofRGBA(247 / 255, 78 / 255, 158 / 255, 0.3),
  F.ofRGBA(166 / 255, 83 / 255, 88 / 255, 0.3),
  F.ofRGBA(246 / 255, 130 / 255, 28 / 255, 0.3),
  F.ofRGBA(166 / 255, 198 / 255, 0, 0.3),
  F.ofRGBA(98 / 255, 186 / 255, 70 / 255, 0.3)
], Ve = [
  F.black,
  F.fromHex("#007AFF"),
  F.fromHex("#A651A7"),
  F.fromHex("#F74E9E"),
  F.fromHex("#FF5358"),
  F.fromHex("#F6821C"),
  F.fromHex("#FFC600"),
  F.fromHex("#62BA46"),
  F.fromHex("#E6BFE8"),
  F.fromHex("#FEA3D2"),
  F.fromHex("#FFA0A3"),
  F.fromHex("#FBC276"),
  F.fromHex("#FFFB85"),
  F.fromHex("#AADC99")
];
function ta({ onChange: t }) {
  const [e, i] = E(F.blackHighlight);
  return /* @__PURE__ */ n("div", { className: k.colorWrap, children: Qc.map((r, o) => /* @__PURE__ */ n(
    "button",
    {
      style: { backgroundColor: r.toHexString() },
      className: S(k.color, {
        [k.colorActive]: e.toHexString() === r.toHexString()
      }),
      onClick: () => {
        i(r), t(r);
      }
    },
    o
  )) });
}
function me({ onChange: t }) {
  const [e, i] = E(F.black);
  return /* @__PURE__ */ g(V, { children: [
    /* @__PURE__ */ n("div", { className: k.colorWrap, children: Ve.slice(0, 7).map((r, o) => /* @__PURE__ */ n(
      "button",
      {
        style: { backgroundColor: r.toHexString() },
        className: S(k.color, {
          [k.colorActive]: e.toHexString() === r.toHexString()
        }),
        onClick: () => {
          i(r), t(r);
        }
      },
      o
    )) }),
    /* @__PURE__ */ n("div", { className: k.colorWrap, children: Ve.slice(7).map((r, o) => /* @__PURE__ */ n(
      "button",
      {
        style: { backgroundColor: r.toHexString() },
        className: S(k.color, {
          [k.colorActive]: e.toHexString() === r.toHexString()
        }),
        onClick: () => {
          i(r), t(r);
        }
      },
      o
    )) })
  ] });
}
function ea({ setColorPen: t, setThicknessPen: e }) {
  const [i, r] = E(2);
  return /* @__PURE__ */ g("div", { className: k.options, children: [
    /* @__PURE__ */ n("div", { children: /* @__PURE__ */ n(
      me,
      {
        onChange: (o) => t(o)
      }
    ) }),
    /* @__PURE__ */ n("div", { className: k.line }),
    /* @__PURE__ */ n("div", { children: /* @__PURE__ */ n(
      "input",
      {
        max: 10,
        min: 1,
        step: 0.1,
        type: "range",
        value: i,
        onChange: (o) => {
          e(Number.parseFloat(o.target.value)), r(Number.parseFloat(o.target.value));
        }
      }
    ) })
  ] });
}
function ia({ setColorHighlight: t }) {
  return /* @__PURE__ */ n("div", { className: k.options, children: /* @__PURE__ */ n(
    ta,
    {
      onChange: (e) => t(e)
    }
  ) });
}
function na({
  changeColorShape: t,
  changeBorderColorShape: e,
  onThicknessChange: i
}) {
  return /* @__PURE__ */ g("div", { className: k.options, children: [
    /* @__PURE__ */ n("div", { children: /* @__PURE__ */ n(
      me,
      {
        onChange: (r) => t(r)
      }
    ) }),
    /* @__PURE__ */ n("div", { className: k.line }),
    /* @__PURE__ */ n("div", { children: /* @__PURE__ */ n(
      me,
      {
        onChange: (r) => e(r)
      }
    ) }),
    /* @__PURE__ */ n("div", { className: k.line }),
    /* @__PURE__ */ n("div", { children: /* @__PURE__ */ n(
      "input",
      {
        defaultValue: 0,
        max: 20,
        min: 0,
        step: 1,
        type: "range",
        onChange: (r) => {
          i(Number.parseFloat(r.target.value));
        }
      }
    ) })
  ] });
}
function Ii(t) {
  const {
    setColorPen: e,
    refEditor: i,
    setThicknessPen: r,
    setColorHighlight: o,
    changeBorderColorShape: c,
    onUndo: a,
    changeColorShape: l,
    changeShape: s,
    onThicknessChange: d,
    onRedo: h,
    onClear: u
  } = t, [m, x] = E(null), [w, p] = E(
    0
    /* square */
  );
  return /* @__PURE__ */ n(V, { children: /* @__PURE__ */ g(
    "div",
    {
      className: k.wrapper,
      children: [
        /* @__PURE__ */ g("div", { className: k.pen, children: [
          /* @__PURE__ */ n(
            "button",
            {
              className: S(k.tool, {
                [k.active]: m === "select"
              }),
              onClick: () => {
                const f = i.current.toolController.getPrimaryTools();
                if (m === "select") {
                  x(null), f[0].setEnabled(!1);
                  return;
                }
                x("select"), f[0].setEnabled(!0);
              },
              children: /* @__PURE__ */ n(Rc, {})
            }
          ),
          /* @__PURE__ */ n("div", { className: k.line }),
          /* @__PURE__ */ n(
            "button",
            {
              className: S(k.tool, {
                [k.active]: m === "text"
              }),
              onClick: () => {
                const f = i.current.toolController.getPrimaryTools();
                if (i.current.toolController.setToolEnabled(f[1]), m === "text") {
                  f[1].setEnabled(!1), x(null);
                  return;
                }
                x("text"), f[1].setEnabled(!0);
              },
              children: /* @__PURE__ */ n(Pc, {})
            }
          ),
          /* @__PURE__ */ n("div", { className: k.line }),
          /* @__PURE__ */ n(
            "button",
            {
              className: S(k.tool, {
                [k.active]: m === "pencil"
              }),
              onClick: () => {
                const f = i.current.toolController.getPrimaryTools();
                if (m === "pencil") {
                  x(null), f[2].setEnabled(!1);
                  return;
                }
                x("pencil"), f[2].setEnabled(!0);
              },
              children: /* @__PURE__ */ n(Dc, {})
            }
          ),
          /* @__PURE__ */ n(
            "button",
            {
              className: S(k.tool, {
                [k.active]: m === "highlighter"
              }),
              onClick: () => {
                const f = i.current.toolController.getPrimaryTools();
                if (m === "highlighter") {
                  x(null), f[3].setEnabled(!1);
                  return;
                }
                x("highlighter"), f[3].setEnabled(!0);
              },
              children: /* @__PURE__ */ n(Hc, {})
            }
          ),
          /* @__PURE__ */ n("div", { className: k.line }),
          /* @__PURE__ */ n(
            "button",
            {
              className: S(k.tool, {
                [k.active]: m === "eraser"
              }),
              onClick: () => {
                const f = i.current.toolController.getPrimaryTools();
                if (m === "eraser") {
                  x(null), f[4].setEnabled(!1);
                  return;
                }
                x("eraser"), f[4].setEnabled(!0);
              },
              children: /* @__PURE__ */ n(Oc, {})
            }
          ),
          /* @__PURE__ */ n("div", { className: k.line }),
          /* @__PURE__ */ n(
            "button",
            {
              className: S(k.tool, {
                [k.active]: m === "shapes" && w === 0
                /* square */
              }),
              onClick: () => {
                const f = i.current.toolController.getPrimaryTools();
                i.current.toolController.setToolEnabled(f[5]), x("shapes"), f[5].setEnabled(!0), s(
                  0
                  /* square */
                ), p(
                  0
                  /* square */
                );
              },
              children: /* @__PURE__ */ n(Bc, {})
            }
          ),
          /* @__PURE__ */ n(
            "button",
            {
              className: S(k.tool, {
                [k.active]: m === "shapes" && w === 1
                /* rectangle */
              }),
              onClick: () => {
                const f = i.current.toolController.getPrimaryTools();
                i.current.toolController.setToolEnabled(f[5]), x("shapes"), f[5].setEnabled(!0), s(
                  1
                  /* rectangle */
                ), p(
                  1
                  /* rectangle */
                );
              },
              children: /* @__PURE__ */ n(_c, {})
            }
          ),
          /* @__PURE__ */ n(
            "button",
            {
              className: S(k.tool, {
                [k.active]: m === "shapes" && w === 2
                /* circle */
              }),
              onClick: () => {
                const f = i.current.toolController.getPrimaryTools();
                i.current.toolController.setToolEnabled(f[5]), x("shapes"), f[5].setEnabled(!0), s(
                  2
                  /* circle */
                ), p(
                  2
                  /* circle */
                );
              },
              children: /* @__PURE__ */ n($c, {})
            }
          ),
          /* @__PURE__ */ n(
            "button",
            {
              className: S(k.tool, {
                [k.active]: m === "shapes" && w === 3
                /* triangle */
              }),
              onClick: () => {
                const f = i.current.toolController.getPrimaryTools();
                i.current.toolController.setToolEnabled(f[5]), x("shapes"), f[5].setEnabled(!0), s(
                  3
                  /* triangle */
                ), p(
                  3
                  /* triangle */
                );
              },
              children: /* @__PURE__ */ n(Vc, {})
            }
          ),
          /* @__PURE__ */ n(
            "button",
            {
              className: S(k.tool, {
                [k.active]: m === "shapes" && w === 4
                /* hexagonal */
              }),
              onClick: () => {
                const f = i.current.toolController.getPrimaryTools();
                i.current.toolController.setToolEnabled(f[5]), x("shapes"), f[5].setEnabled(!0), s(
                  4
                  /* hexagonal */
                ), p(
                  4
                  /* hexagonal */
                );
              },
              children: /* @__PURE__ */ n(Wc, {})
            }
          ),
          /* @__PURE__ */ n(
            "button",
            {
              className: S(k.tool, {
                [k.active]: m === "shapes" && w === 5
                /* diamond */
              }),
              onClick: () => {
                const f = i.current.toolController.getPrimaryTools();
                i.current.toolController.setToolEnabled(f[5]), x("shapes"), f[5].setEnabled(!0), s(
                  5
                  /* diamond */
                ), p(
                  5
                  /* diamond */
                );
              },
              children: /* @__PURE__ */ n(Fc, {})
            }
          ),
          /* @__PURE__ */ n(
            "button",
            {
              className: S(k.tool, {
                [k.active]: m === "shapes" && w === 6
                /* arrow */
              }),
              onClick: () => {
                const f = i.current.toolController.getPrimaryTools();
                i.current.toolController.setToolEnabled(f[5]), x("shapes"), f[5].setEnabled(!0), s(
                  6
                  /* arrow */
                ), p(
                  6
                  /* arrow */
                );
              },
              children: /* @__PURE__ */ n(Uc, {})
            }
          ),
          /* @__PURE__ */ n(
            "button",
            {
              className: S(k.tool, {
                [k.active]: m === "shapes" && w === 7
                /* line */
              }),
              onClick: () => {
                const f = i.current.toolController.getPrimaryTools();
                i.current.toolController.setToolEnabled(f[5]), x("shapes"), f[5].setEnabled(!0), s(
                  7
                  /* line */
                ), p(
                  7
                  /* line */
                );
              },
              children: /* @__PURE__ */ n(Xc, {})
            }
          ),
          /* @__PURE__ */ n(
            "button",
            {
              className: S(k.tool, {
                [k.active]: m === "shapes" && w === 8
                /* heart */
              }),
              onClick: () => {
                const f = i.current.toolController.getPrimaryTools();
                i.current.toolController.setToolEnabled(f[5]), x("shapes"), f[5].setEnabled(!0), s(
                  8
                  /* heart */
                ), p(
                  8
                  /* heart */
                );
              },
              children: /* @__PURE__ */ n(Yc, {})
            }
          ),
          /* @__PURE__ */ n(
            "button",
            {
              className: S(k.tool, {
                [k.active]: m === "shapes" && w === 9
                /* star */
              }),
              onClick: () => {
                const f = i.current.toolController.getPrimaryTools();
                i.current.toolController.setToolEnabled(f[5]), x("shapes"), f[5].setEnabled(!0), s(
                  9
                  /* star */
                ), p(
                  9
                  /* star */
                );
              },
              children: /* @__PURE__ */ n(Zc, {})
            }
          ),
          /* @__PURE__ */ n(
            "button",
            {
              className: S(k.tool, {
                [k.active]: m === "shapes" && w === 10
                /* cloud */
              }),
              onClick: () => {
                const f = i.current.toolController.getPrimaryTools();
                i.current.toolController.setToolEnabled(f[5]), x("shapes"), f[5].setEnabled(!0), s(
                  10
                  /* cloud */
                ), p(
                  10
                  /* cloud */
                );
              },
              children: /* @__PURE__ */ n(Kc, {})
            }
          ),
          /* @__PURE__ */ n(
            "button",
            {
              className: S(k.tool, {
                [k.active]: m === "shapes" && w === 11
                /* parallelogram */
              }),
              onClick: () => {
                const f = i.current.toolController.getPrimaryTools();
                i.current.toolController.setToolEnabled(f[5]), x("shapes"), f[5].setEnabled(!0), s(
                  11
                  /* parallelogram */
                ), p(
                  11
                  /* parallelogram */
                );
              },
              children: /* @__PURE__ */ n(Jc, {})
            }
          ),
          /* @__PURE__ */ n("div", { className: k.line }),
          /* @__PURE__ */ n(
            "button",
            {
              className: S(k.tool),
              onClick: a,
              children: /* @__PURE__ */ n(Gc, {})
            }
          ),
          /* @__PURE__ */ n(
            "button",
            {
              className: S(k.tool),
              onClick: h,
              children: /* @__PURE__ */ n(qc, {})
            }
          ),
          /* @__PURE__ */ n(
            "button",
            {
              className: S(k.tool),
              onClick: u,
              children: /* @__PURE__ */ n(jc, {})
            }
          )
        ] }),
        /* @__PURE__ */ g("div", { className: k.optionsWrap, children: [
          m === "pencil" && /* @__PURE__ */ n(
            ea,
            {
              setColorPen: e,
              setThicknessPen: r
            }
          ),
          m === "highlighter" && /* @__PURE__ */ n(ia, { setColorHighlight: o }),
          m === "shapes" && /* @__PURE__ */ n(
            na,
            {
              changeBorderColorShape: c,
              changeColorShape: l,
              changeShape: s,
              onThicknessChange: d
            }
          )
        ] })
      ]
    }
  ) });
}
function Ei(t = 8) {
  return Math.random().toString(36).substring(2, t + 2);
}
let Ct = !1;
const ra = ({ editor: t, upload: e }) => {
  const [i, r] = E(!1), o = Q(null), c = Q(null), a = () => {
    (async () => {
      const v = document.querySelector("#easydrawer");
      v && (o.current = new ri(v, {
        wheelEventsEnabled: !1,
        disableZoom: !0
      }), c.current = oi(o.current), c.current.addDefaultToolWidgets());
    })();
  };
  W(() => {
    i && setTimeout(() => {
      a();
    }, 200);
  }, [i]);
  const l = async () => {
    if (o.current) {
      const N = o.current.toSVG(), v = N.outerHTML, b = `drawer-${Ei()}.svg`;
      let M = ti(N.outerHTML);
      if (e) {
        const I = Te(M, b);
        M = await e(I);
      }
      t == null || t.chain().focus().setDrawer(
        {
          type: "drawer",
          src: M,
          alt: encodeURIComponent(v),
          width: 426,
          height: 212
        },
        !!v
      ).run();
    }
    r(!1);
  }, s = (N) => {
    const v = o.current.toolController.getPrimaryTools()[2], b = c.current.getWidgetById("pen-1");
    v && b && (v.setColor(N), b.serializeState());
  }, d = (N) => {
    const v = o.current.toolController.getPrimaryTools()[2], b = c.current.getWidgetById("pen-1");
    v && b && (v.setThickness(N), b.serializeState());
  }, h = (N) => {
    const v = o.current.toolController.getPrimaryTools()[3], b = c.current.getWidgetById("pen-2");
    v && b && (v.setColor(N), b.serializeState());
  }, u = (N) => {
    const v = c.current.getWidgetById("shape");
    v && v.setShapeType(N);
  }, m = (N) => {
    const v = o.current.toolController.getPrimaryTools()[5], b = c.current.getWidgetById("shape");
    v && b && (v.setColor(N), b.serializeState());
  }, x = (N) => {
    const v = o.current.toolController.getPrimaryTools()[5], b = c.current.getWidgetById("shape");
    v && b && (v.setThickness(N), b.serializeState());
  }, w = (N) => {
    const v = o.current.toolController.getPrimaryTools()[5], b = c.current.getWidgetById("shape");
    v && b && (v.setBorderColor(N), b.serializeState());
  }, p = () => {
    if (Ct) {
      for (; o.current.history.redoStackSize > 0; )
        o.current.history.redo();
      Ct = !1;
      return;
    }
    o.current.history.undo();
  };
  return /* @__PURE__ */ g(
    bt,
    {
      onOpenChange: r,
      open: i,
      children: [
        /* @__PURE__ */ n(yt, { asChild: !0, children: /* @__PURE__ */ n(
          D,
          {
            action: () => r(!0),
            icon: "PencilRuler",
            tooltip: "Drawer"
          }
        ) }),
        /* @__PURE__ */ g(ut, { className: "richtext-z-[99999] !richtext-max-w-[1300px]", children: [
          /* @__PURE__ */ n(mt, { children: "Drawer" }),
          /* @__PURE__ */ g("div", { style: { height: "600px", width: "100%", borderWidth: 1, background: "white", position: "relative" }, children: [
            /* @__PURE__ */ n(
              "div",
              {
                className: "richtext-size-full",
                id: "easydrawer"
              }
            ),
            /* @__PURE__ */ n(
              Ii,
              {
                changeBorderColorShape: w,
                changeColorShape: m,
                changeShape: u,
                onClear: () => {
                  if (!Ct) {
                    for (; o.current.history.undoStackSize > 0; )
                      p();
                    Ct = !0;
                  }
                },
                onRedo: () => {
                  Ct || o.current.history.redo();
                },
                onThicknessChange: x,
                onUndo: p,
                refEditor: o,
                setColorHighlight: h,
                setColorPen: s,
                setThicknessPen: d
              }
            )
          ] }),
          /* @__PURE__ */ n(Ht, { children: /* @__PURE__ */ n(
            X,
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
}, $t = {
  TOP_LEFT: "tl",
  TOP_RIGHT: "tr",
  BOTTOM_LEFT: "bl",
  BOTTOM_RIGHT: "br"
};
function oa({ editor: t, node: e, updateAttributes: i, getPos: r, selected: o }) {
  const [c, a] = E({
    width: pt,
    height: pt
  }), [l, s] = E({
    width: 0,
    height: 0
  }), [d] = E([
    $t.TOP_LEFT,
    $t.TOP_RIGHT,
    $t.BOTTOM_LEFT,
    $t.BOTTOM_RIGHT
  ]), [h, u] = E(!1), [m, x] = E({
    x: 0,
    y: 0,
    w: 0,
    h: 0,
    dir: ""
  }), { align: w } = e == null ? void 0 : e.attrs, p = q(() => {
    const { src: T, alt: C, width: B, height: P } = e == null ? void 0 : e.attrs, z = ze(B) ? `${B}px` : B, R = ze(P) ? `${P}px` : P;
    return {
      src: T || void 0,
      alt: C || void 0,
      style: {
        width: z || void 0,
        height: R || void 0
      }
    };
  }, [e == null ? void 0 : e.attrs]), f = q(() => {
    const {
      style: { width: T }
    } = p;
    return { width: T === "100%" ? T : void 0 };
  }, [p]);
  function H(T) {
    s({
      width: T.target.width,
      height: T.target.height
    });
  }
  function N() {
    t.commands.setNodeSelection(r());
  }
  const v = O(
    st(() => {
      const { width: T } = getComputedStyle(t.view.dom);
      a((C) => ({
        ...C,
        width: Number.parseInt(T, 10)
      }));
    }, wt),
    [t]
  );
  function b(T, C) {
    T.preventDefault(), T.stopPropagation();
    const B = l.width, P = l.height, z = B / P;
    let R = Number(e.attrs.width), $ = Number(e.attrs.height);
    const G = c.width;
    R && !$ ? (R = R > G ? G : R, $ = Math.round(R / z)) : $ && !R ? (R = Math.round($ * z), R = R > G ? G : R) : !R && !$ ? (R = B > G ? G : B, $ = Math.round(R / z)) : R = R > G ? G : R, u(!0), x({
      x: T.clientX,
      y: T.clientY,
      w: R,
      h: $,
      dir: C
    });
  }
  const M = O(
    st((T) => {
      if (T.preventDefault(), T.stopPropagation(), !h)
        return;
      const { x: C, w: B, dir: P } = m, z = (T.clientX - C) * (/l/.test(P) ? -1 : 1), { width: R, height: $ } = e == null ? void 0 : e.attrs, G = R / $, Z = Gr(B + z, ge, c.width), at = Math.round(Z / G);
      i({
        width: Z,
        height: at
      });
    }, wt),
    [h, m, c, i, e == null ? void 0 : e.attrs]
  ), I = O(
    (T) => {
      T.preventDefault(), T.stopPropagation(), h && (x({
        x: 0,
        y: 0,
        w: 0,
        h: 0,
        dir: ""
      }), u(!1), N());
    },
    [h, N]
  ), A = O(() => {
    document == null || document.addEventListener("mousemove", M, !0), document == null || document.addEventListener("mouseup", I, !0);
  }, [M, I]), y = O(() => {
    document == null || document.removeEventListener("mousemove", M, !0), document == null || document.removeEventListener("mouseup", I, !0);
  }, [M, I]);
  W(() => (h ? A() : y(), () => {
    y();
  }), [h, A, y]);
  const L = q(() => new ResizeObserver(() => v()), [v]);
  return W(() => (L.observe(t.view.dom), () => {
    L.disconnect();
  }), [t.view.dom, L]), /* @__PURE__ */ n(
    It,
    {
      className: "image-view",
      style: { ...f, width: "100%", textAlign: w },
      children: /* @__PURE__ */ g(
        "div",
        {
          "data-drag-handle": !0,
          draggable: "true",
          style: { ...f, background: "#fff" },
          className: `image-view__body ${o ? "image-view__body--focused" : ""} ${h ? "image-view__body--resizing" : ""}`,
          children: [
            /* @__PURE__ */ n(
              "img",
              {
                alt: p.alt,
                className: "image-view__body__image block",
                height: "auto",
                onClick: N,
                onLoad: H,
                src: p.src,
                style: p.style
              }
            ),
            t.view.editable && (o || h) && /* @__PURE__ */ n("div", { className: "image-resizer", children: d == null ? void 0 : d.map((T) => /* @__PURE__ */ n(
              "span",
              {
                className: `image-resizer__handler image-resizer__handler--${T}`,
                onMouseDown: (C) => b(C, T)
              },
              `image-dir-${T}`
            )) })
          ]
        }
      )
    }
  );
}
const We = fe.extend({
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
      button: ({ editor: e, t: i, extension: r }) => {
        var o;
        return {
          component: ra,
          componentProps: {
            action: () => !0,
            isActive: () => !1,
            disabled: !1,
            editor: e,
            icon: "PencilRuler",
            tooltip: i("editor.drawer.tooltip"),
            upload: (o = r == null ? void 0 : r.options) == null ? void 0 : o.upload
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
          const i = e.querySelector("img"), r = i == null ? void 0 : i.getAttribute("width");
          return r ? Number.parseInt(r, 10) : 320;
        },
        renderHTML: (e) => ({
          width: e.width
        })
      },
      height: {
        default: null,
        parseHTML: (e) => {
          const i = e.querySelector("img"), r = i == null ? void 0 : i.getAttribute("height");
          return r ? Number.parseInt(r, 10) : 212;
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
    return Et(oa);
  },
  // @ts-ignore
  addCommands() {
    return {
      setDrawer: (t, e) => ({ commands: i, editor: r }) => e ? i.insertContent({
        type: this.name,
        attrs: t
      }) : i.insertContentAt(r.state.selection.anchor, {
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
        dt(
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
          const e = t.querySelector("img"), i = e == null ? void 0 : e.getAttribute("width"), r = e == null ? void 0 : e.getAttribute("height");
          return {
            src: e == null ? void 0 : e.getAttribute("src"),
            alt: e == null ? void 0 : e.getAttribute("alt"),
            width: i ? Number.parseInt(i, 10) : null,
            height: r ? Number.parseInt(r, 10) : null,
            align: (e == null ? void 0 : e.getAttribute("align")) || t.style.textAlign || null
          };
        }
      }
    ];
  }
});
let Tt = !1;
function ca({ editor: t, attrs: e, extension: i }) {
  const [r, o] = E(!1), c = Q(null), a = Q(null), { alt: l, align: s } = e, d = i == null ? void 0 : i.options.upload, h = () => {
    (async () => {
      const A = document.querySelector("#easydrawer");
      A && (c.current = new ri(A, {
        wheelEventsEnabled: !1,
        disableZoom: !0
      }), a.current = oi(c.current), a.current.addDefaultToolWidgets(), c.current.loadFromSVG(decodeURIComponent(l)));
    })();
  };
  W(() => {
    r && setTimeout(() => {
      h();
    }, 200);
  }, [r]);
  const u = async () => {
    if (c.current) {
      const I = c.current.toSVG(), A = I.outerHTML, y = `drawer-${Ei()}.svg`;
      let L = ti(I.outerHTML);
      if (d) {
        const T = Te(L, y);
        L = await d(T);
      }
      t == null || t.chain().focus().setDrawer(
        {
          type: "drawer",
          src: L,
          alt: encodeURIComponent(A),
          width: 426,
          height: 212
        },
        !!A
      ).run(), t == null || t.commands.setAlignImageDrawer(s);
    }
    o(!1);
  }, m = (I) => {
    const A = c.current.toolController.getPrimaryTools()[2], y = a.current.getWidgetById("pen-1");
    A && y && (A.setColor(I), y.serializeState());
  }, x = (I) => {
    const A = c.current.toolController.getPrimaryTools()[2], y = a.current.getWidgetById("pen-1");
    A && y && (A.setThickness(I), y.serializeState());
  }, w = (I) => {
    const A = c.current.toolController.getPrimaryTools()[3], y = a.current.getWidgetById("pen-2");
    A && y && (A.setColor(I), y.serializeState());
  }, p = (I) => {
    const A = a.current.getWidgetById("shape");
    A && A.setShapeType(I);
  }, f = (I) => {
    const A = c.current.toolController.getPrimaryTools()[5], y = a.current.getWidgetById("shape");
    A && y && (A.setColor(I), y.serializeState());
  }, H = (I) => {
    const A = c.current.toolController.getPrimaryTools()[5], y = a.current.getWidgetById("shape");
    A && y && (A.setThickness(I), y.serializeState());
  }, N = (I) => {
    const A = c.current.toolController.getPrimaryTools()[5], y = a.current.getWidgetById("shape");
    A && y && (A.setBorderColor(I), y.serializeState());
  }, v = () => {
    if (Tt) {
      for (; c.current.history.redoStackSize > 0; )
        c.current.history.redo();
      Tt = !1;
      return;
    }
    c.current.history.undo();
  };
  return /* @__PURE__ */ g(
    bt,
    {
      onOpenChange: o,
      open: r,
      children: [
        /* @__PURE__ */ n(yt, { asChild: !0, children: /* @__PURE__ */ n(
          D,
          {
            action: () => o(!0),
            icon: "Pencil",
            tooltip: "Edit Drawer"
          }
        ) }),
        /* @__PURE__ */ g(ut, { className: "richtext-z-[99999] !richtext-max-w-[1300px]", children: [
          /* @__PURE__ */ n(mt, { children: "Edit Drawer" }),
          /* @__PURE__ */ g("div", { style: { height: "100%", borderWidth: 1, background: "white", position: "relative" }, children: [
            /* @__PURE__ */ n(
              "div",
              {
                className: "richtext-size-full",
                id: "easydrawer"
              }
            ),
            /* @__PURE__ */ n(
              Ii,
              {
                changeBorderColorShape: N,
                changeColorShape: f,
                changeShape: p,
                onClear: () => {
                  if (!Tt) {
                    for (; c.current.history.undoStackSize > 0; )
                      v();
                    Tt = !0;
                  }
                },
                onRedo: () => {
                  Tt || c.current.history.redo();
                },
                onThicknessChange: H,
                onUndo: v,
                refEditor: c,
                setColorHighlight: w,
                setColorPen: m,
                setThicknessPen: x
              }
            )
          ] }),
          /* @__PURE__ */ n(Ht, { children: /* @__PURE__ */ n(
            X,
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
function aa(t) {
  return t;
}
function zi(t, e, i, r) {
  const o = aa, [c, a] = E(o(i)), l = Q(c);
  return W(() => {
    const s = () => {
      const d = { ...i, ...t.getAttributes(e) };
      Object.keys(d).forEach((u) => {
        (d[u] === null || d[u] === void 0) && (d[u] = i ? i[u] : null);
      });
      const h = o(d);
      un(l.current, h) || (a(h), l.current = h);
    };
    return t.on("selectionUpdate", s), t.on("transaction", s), () => {
      t.off("selectionUpdate", s), t.off("transaction", s);
    };
  }, [t, i, e, o]), c;
}
function sa(t, e) {
  const [i, r] = E(void 0);
  return W(() => {
    const o = () => {
      const c = t.extensionManager.extensions.find((a) => a.name === e);
      c && r(c);
    };
    return t.on("selectionUpdate", o), t.on("transaction", o), () => {
      t.off("selectionUpdate", o), t.off("transaction", o);
    };
  }, [t, e]), i;
}
const la = {
  maxWidth: "auto",
  zIndex: 20,
  appendTo: "parent",
  moveTransition: "transform 0.1s ease-out"
};
function da({ item: t, disabled: e, editor: i }) {
  var o;
  const r = t.component;
  return r ? /* @__PURE__ */ n(Ze, { children: t.type === "divider" ? /* @__PURE__ */ n(
    it,
    {
      className: "!richtext-mx-1 !richtext-my-2 !richtext-h-[16px]",
      orientation: "vertical"
    }
  ) : /* @__PURE__ */ n(
    r,
    {
      ...t.componentProps,
      disabled: e || ((o = t == null ? void 0 : t.componentProps) == null ? void 0 : o.disabled),
      editor: i
    }
  ) }) : /* @__PURE__ */ n(V, {});
}
function ha(t) {
  return t.type.name === "drawer";
}
function ua(t) {
  const { lang: e } = j(), i = zi(t.editor, We.name), r = sa(t.editor, We.name), o = ({ editor: a }) => {
    const { selection: l } = a.view.state, { $from: s, to: d } = l;
    let h = !1;
    return a.view.state.doc.nodesBetween(s.pos, d, (u) => {
      if (ha(u))
        return h = !0, !1;
    }), h;
  }, c = q(() => t.disabled ? [] : Ma(t.editor), [t.disabled, t.editor, e]);
  return /* @__PURE__ */ n(V, { children: /* @__PURE__ */ n(
    ot,
    {
      editor: t == null ? void 0 : t.editor,
      shouldShow: o,
      tippyOptions: la,
      children: c != null && c.length ? /* @__PURE__ */ n("div", { className: "richtext-pointer-events-auto richtext-w-auto richtext-select-none richtext-rounded-sm !richtext-border richtext-border-neutral-200 richtext-bg-background richtext-px-3 richtext-py-2 richtext-shadow-sm richtext-transition-all dark:richtext-border-neutral-800", children: /* @__PURE__ */ n("div", { className: "richtext-relative richtext-flex richtext-h-[26px] richtext-flex-nowrap richtext-items-center richtext-justify-start richtext-whitespace-nowrap", children: c == null ? void 0 : c.map((a, l) => a.type === "edit" && (i != null && i.src) ? /* @__PURE__ */ n(
        ca,
        {
          attrs: i,
          editor: t.editor,
          extension: r
        },
        `bubbleMenu-drawer-${l}`
      ) : /* @__PURE__ */ n(
        da,
        {
          disabled: t.disabled,
          editor: t.editor,
          item: a
        },
        `bubbleMenu-drawer-${l}`
      )) }) }) : /* @__PURE__ */ n(V, {})
    }
  ) });
}
const ma = { padding: "0 12px 12px" }, xa = ({ width: t, maxWidth: e, height: i, onOk: r, children: o }) => {
  const { t: c } = j(), [a, l] = E({
    width: "",
    height: "",
    maxWidth: ""
  });
  W(() => {
    l({
      width: t,
      height: i,
      maxWidth: e
    });
  }, [i, e, t]);
  function s(d) {
    d.preventDefault(), d.stopPropagation(), r(a);
  }
  return /* @__PURE__ */ g(Pt, { modal: !0, children: [
    /* @__PURE__ */ n(Dt, { asChild: !0, children: o }),
    /* @__PURE__ */ n(vt, { children: /* @__PURE__ */ n("div", { style: ma, children: /* @__PURE__ */ g("form", { className: "richtext-flex richtext-flex-col richtext-gap-2", onSubmit: s, children: [
      /* @__PURE__ */ n(ct, { className: "mb-[6px]", children: "Width" }),
      /* @__PURE__ */ n("div", { className: "richtext-flex richtext-w-full richtext-max-w-sm richtext-items-center richtext-gap-1.5", children: /* @__PURE__ */ n("div", { className: "richtext-relative richtext-items-center richtext-w-full richtext-max-w-sm", children: /* @__PURE__ */ n(
        J,
        {
          type: "number",
          value: a.width,
          required: !0,
          onChange: (d) => l({ ...a, width: d.target.value })
        }
      ) }) }),
      /* @__PURE__ */ n(ct, { className: "mb-[6px]", children: "Max Width" }),
      /* @__PURE__ */ n("div", { className: "richtext-flex richtext-w-full richtext-max-w-sm richtext-items-center richtext-gap-1.5", children: /* @__PURE__ */ n("div", { className: "richtext-relative richtext-items-center richtext-w-full richtext-max-w-sm", children: /* @__PURE__ */ n(
        J,
        {
          type: "number",
          value: a.maxWidth,
          required: !0,
          onChange: (d) => l({ ...a, maxWidth: d.target.value })
        }
      ) }) }),
      /* @__PURE__ */ n(ct, { className: "mb-[6px]", children: "Height" }),
      /* @__PURE__ */ n("div", { className: "richtext-flex richtext-w-full richtext-max-w-sm richtext-items-center richtext-gap-1.5", children: /* @__PURE__ */ n("div", { className: "richtext-relative richtext-items-center richtext-w-full richtext-max-w-sm", children: /* @__PURE__ */ n(
        J,
        {
          type: "number",
          value: a.height,
          required: !0,
          onChange: (d) => l({ ...a, height: d.target.value })
        }
      ) }) }),
      /* @__PURE__ */ n(X, { type: "submit", className: "richtext-self-end richtext-mt-2", children: c("editor.link.dialog.button.apply") })
    ] }) }) })
  ] });
};
function Ne(t, e) {
  const { state: i } = e, r = i.selection.$anchor;
  let o = !1;
  if (r.depth)
    for (let c = r.depth; c > 0; c--)
      r.node(c).type.name === t && (e.dispatchTransaction && e.dispatchTransaction(i.tr.delete(r.before(c), r.after(c)).scrollIntoView()), o = !0);
  else {
    const c = i.selection.node;
    c && c.type.name === t && (e.chain().deleteSelection().run(), o = !0);
  }
  if (!o) {
    const c = r.pos;
    if (c) {
      const a = i.tr.doc.nodeAt(c);
      a && a.type.name === t && (e.dispatchTransaction && e.dispatchTransaction(i.tr.delete(c, c + a.nodeSize)), o = !0);
    }
  }
  return o;
}
function fa({ editor: t }) {
  const { t: e } = j(), { width: i, height: r, url: o } = zi(t, ft.name, {
    width: 0,
    height: 0,
    url: "",
    defaultShowPicker: !1
  }), [c, a] = E(!1), [l, s] = E(""), d = O(() => {
    a(!1);
  }, [a]);
  W(() => {
    c && s(o);
  }, [c, o]);
  const h = O(() => {
    t.chain().updateAttributes(ft.name, {
      url: l
    }).setNodeSelection(t.state.selection.from).focus().run(), a(!1);
  }, [t, l, a]), u = O(() => {
    window.open(o, "_blank");
  }, [o]), m = O(() => {
    a(!0);
  }, [a]), x = O(
    (f) => {
      t.chain().updateAttributes(ft.name, f).setNodeSelection(t.state.selection.from).focus().run();
    },
    [t]
  ), w = O(() => t.isActive(ft.name) && !o, [t, o]), p = O(() => Ne(ft.name, t), [t]);
  return /* @__PURE__ */ g(V, { children: [
    /* @__PURE__ */ n(
      ot,
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
          /* @__PURE__ */ n(
            D,
            {
              action: u,
              icon: "Eye",
              tooltip: "Visit Link"
            }
          ),
          /* @__PURE__ */ n(
            D,
            {
              action: m,
              icon: "Pencil",
              tooltip: "Open Edit Link"
            }
          ),
          /* @__PURE__ */ n(xa, { width: i, height: r, onOk: x, children: /* @__PURE__ */ n(
            D,
            {
              icon: "Settings",
              tooltip: e("editor.settings")
            }
          ) }),
          /* @__PURE__ */ n(
            D,
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
      bt,
      {
        open: c,
        onOpenChange: a,
        children: [
          /* @__PURE__ */ n(yt, {}),
          /* @__PURE__ */ g(ut, { children: [
            /* @__PURE__ */ n(Si, { children: /* @__PURE__ */ n(mt, { children: "Edit Link Iframe" }) }),
            /* @__PURE__ */ n(
              J,
              {
                value: l,
                onInput: (f) => s(f.target.value),
                type: "url",
                autoFocus: !0,
                placeholder: "Enter link"
              }
            ),
            /* @__PURE__ */ g(Ht, { children: [
              /* @__PURE__ */ n(X, { onClick: d, children: "Cancel" }),
              /* @__PURE__ */ n(X, { onClick: h, children: "OK" })
            ] })
          ] })
        ]
      }
    )
  ] });
}
function ga({ editor: t, disabled: e }) {
  const [i, r] = E(!1), { t: o } = j(), c = O(({ editor: s }) => s.isActive(ue.name), []), a = (s) => {
    t.commands.updateTweet({ src: s }), r(!1);
  }, l = O(() => Ne(ue.name, t), [t]);
  return /* @__PURE__ */ n(V, { children: /* @__PURE__ */ n(
    ot,
    {
      editor: t,
      shouldShow: c,
      tippyOptions: {
        popperOptions: {
          modifiers: [{ name: "flip", enabled: !1 }]
        },
        placement: "bottom-start",
        offset: [-2, 16],
        zIndex: 9999,
        onHidden: () => {
          r(!1);
        }
      },
      children: e ? /* @__PURE__ */ n(V, {}) : /* @__PURE__ */ n(V, { children: i ? /* @__PURE__ */ n(
        Mi,
        {
          editor: t,
          onSetLink: a
        }
      ) : /* @__PURE__ */ n("div", { className: "richtext-flex richtext-items-center richtext-gap-2 richtext-rounded-lg !richtext-border richtext-border-neutral-200 richtext-bg-white richtext-p-2 richtext-shadow-sm dark:richtext-border-neutral-800 dark:richtext-bg-black", children: /* @__PURE__ */ g("div", { className: "richtext-flex richtext-flex-nowrap", children: [
        /* @__PURE__ */ n(
          D,
          {
            icon: "Pencil",
            tooltip: o("editor.link.edit.tooltip"),
            tooltipOptions: { sideOffset: 15 },
            action: () => {
              r(!0);
            }
          }
        ),
        /* @__PURE__ */ n(
          D,
          {
            action: l,
            icon: "Trash",
            tooltip: o("editor.delete"),
            tooltipOptions: { sideOffset: 15 }
          }
        )
      ] }) }) })
    }
  ) });
}
function pa({ editor: t, disabled: e, bubbleMenu: i }) {
  const r = t.extensionManager.extensions.map((c) => c.name), o = () => {
    var c, a, l, s, d, h, u, m, x, w, p, f;
    return [
      r.includes("columns") && !((c = i == null ? void 0 : i.columnConfig) != null && c.hidden) ? /* @__PURE__ */ n(Ya, { editor: t }, "columns") : null,
      r.includes("table") && !((a = i == null ? void 0 : i.tableConfig) != null && a.hidden) ? /* @__PURE__ */ n($a, { editor: t, actions: (l = i == null ? void 0 : i.tableConfig) == null ? void 0 : l.actions }, "table") : null,
      r.includes("link") && !((s = i == null ? void 0 : i.linkConfig) != null && s.hidden) ? /* @__PURE__ */ n(Wa, { disabled: e, editor: t }, "link") : null,
      r.includes(Lt.name) && !((d = i == null ? void 0 : i.imageConfig) != null && d.hidden) ? /* @__PURE__ */ n(qa, { disabled: e, editor: t }, "image") : null,
      r.includes(Li.name) && !((h = i == null ? void 0 : i.imageGifConfig) != null && h.hidden) ? /* @__PURE__ */ n(ja, { disabled: e, editor: t }, "imageGif") : null,
      r.includes("video") && !((u = i == null ? void 0 : i.videoConfig) != null && u.hidden) ? /* @__PURE__ */ n(Xa, { disabled: e, editor: t }, "video") : null,
      r.includes("iframe") && !((m = i == null ? void 0 : i.iframeConfig) != null && m.hidden) ? /* @__PURE__ */ n(fa, { disabled: e, editor: t }, "iframe") : null,
      r.includes("twitter") && !((x = i == null ? void 0 : i.twitterConfig) != null && x.hidden) ? /* @__PURE__ */ n(ga, { disabled: e, editor: t }, "twitter") : null,
      (w = i == null ? void 0 : i.floatingMenuConfig) != null && w.hidden ? null : /* @__PURE__ */ n(Ha, { disabled: e, editor: t }, "content"),
      (p = i == null ? void 0 : i.textConfig) != null && p.hidden ? null : /* @__PURE__ */ n(_a, { disabled: e, editor: t }, "text"),
      r.includes("drawer") && !((f = i == null ? void 0 : i.drawerConfig) != null && f.hidden) ? /* @__PURE__ */ n(ua, { disabled: e, editor: t }, "drawer") : null
    ];
  };
  return i != null && i.render ? i.render({ editor: t, disabled: e || !1, bubbleMenu: i }, o()) : o().filter(Boolean);
}
function Fe() {
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", children: /* @__PURE__ */ n("path", { fill: "currentColor", d: "M18 14c0-4-6-10.8-6-10.8s-1.33 1.51-2.73 3.52l8.59 8.59c.09-.42.14-.86.14-1.31m-.88 3.12L12.5 12.5L5.27 5.27L4 6.55l3.32 3.32C6.55 11.32 6 12.79 6 14c0 3.31 2.69 6 6 6c1.52 0 2.9-.57 3.96-1.5l2.63 2.63l1.27-1.27z" }) });
}
function wa(t) {
  const { t: e } = j(), {
    highlight: i = !1,
    disabled: r = !1,
    selectedColor: o,
    setSelectedColor: c,
    onChange: a,
    colors: l = en
  } = t, s = q(() => {
    const x = l, w = [];
    for (let p = 0; p < x.length; p += 10)
      w.push(x.slice(p, p + 10));
    return w;
  }, [l]), [d, h] = E([]), u = (x) => {
    const w = [...d], p = w.indexOf(x);
    p !== -1 && w.splice(p, 1), w.unshift(x), w.length > 10 && w.pop(), h(w);
  };
  function m(x) {
    if (x === void 0) {
      c == null || c(x), a == null || a(x);
      return;
    }
    /^#([\da-f]{3}){1,2}$/i.test(x) && (c == null || c(x), a == null || a(x), u(x));
  }
  return /* @__PURE__ */ g(Pt, { modal: !0, children: [
    /* @__PURE__ */ n(
      Dt,
      {
        asChild: !0,
        className: "!richtext-p-0",
        disabled: r,
        children: t == null ? void 0 : t.children
      }
    ),
    /* @__PURE__ */ n(
      vt,
      {
        align: "start",
        className: "richtext-size-full richtext-p-2",
        hideWhenDetached: !0,
        side: "bottom",
        children: /* @__PURE__ */ g("div", { className: "richtext-flex richtext-flex-col", children: [
          i ? /* @__PURE__ */ g(
            "div",
            {
              className: "rd-1 richtext-flex richtext-cursor-pointer richtext-items-center richtext-gap-[4px] richtext-p-1 hover:richtext-bg-accent",
              onClick: () => m(void 0),
              children: [
                /* @__PURE__ */ n(Fe, {}),
                /* @__PURE__ */ n("span", { className: "richtext-ml-1 richtext-text-sm", children: e("editor.nofill") })
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
                /* @__PURE__ */ n(Fe, {}),
                /* @__PURE__ */ n("span", { className: "richtext-ml-1 richtext-text-sm", children: e("editor.default") })
              ]
            }
          ),
          s.map((x, w) => /* @__PURE__ */ n(
            "span",
            {
              className: "richtext-relative richtext-flex richtext-h-auto richtext-w-full richtext-p-0 last:richtext-pb-2",
              children: x.map((p, f) => /* @__PURE__ */ n(
                "span",
                {
                  className: "richtext-inline-block richtext-size-6 richtext-flex-[0_0_auto] richtext-cursor-pointer richtext-rounded-sm !richtext-border richtext-border-transparent richtext-p-0.5 hover:richtext-border-border hover:richtext-shadow-sm",
                  onClick: () => m(p),
                  children: /* @__PURE__ */ n(
                    "span",
                    {
                      className: "richtext-relative richtext-block richtext-size-[18px] richtext-rounded-[2px] richtext-border-transparent",
                      style: {
                        backgroundColor: p
                      },
                      children: p === o ? /* @__PURE__ */ n(
                        "svg",
                        {
                          className: "richtext-absolute -richtext-top-px richtext-left-px richtext-block richtext-size-3",
                          viewBox: "0 0 18 18",
                          style: {
                            fill: "rgb(255, 255, 255)"
                          },
                          children: /* @__PURE__ */ n("path", { d: "M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z" })
                        }
                      ) : /* @__PURE__ */ n(
                        "svg",
                        {
                          viewBox: "0 0 18 18",
                          style: {
                            fill: "rgb(255, 255, 255)",
                            display: "none"
                          },
                          children: /* @__PURE__ */ n("path", { d: "M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z" })
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
            /* @__PURE__ */ n("div", { className: "richtext-my-1 richtext-text-sm", children: e("editor.recent") }),
            /* @__PURE__ */ n("span", { className: "richtext-relative richtext-flex richtext-h-auto richtext-w-full richtext-p-0 last:richtext-pb-2", children: d == null ? void 0 : d.map((x, w) => /* @__PURE__ */ n(
              "span",
              {
                className: "richtext-inline-block richtext-size-6 richtext-flex-[0_0_auto] richtext-cursor-pointer richtext-rounded-sm !richtext-border richtext-border-transparent richtext-p-0.5 hover:richtext-border-border hover:richtext-shadow-sm",
                onClick: () => m(x),
                children: /* @__PURE__ */ n(
                  "span",
                  {
                    className: "richtext-relative richtext-block richtext-size-[18px] richtext-rounded-[2px] richtext-border-transparent",
                    style: {
                      backgroundColor: x
                    },
                    children: /* @__PURE__ */ n(
                      "svg",
                      {
                        viewBox: "0 0 18 18",
                        style: {
                          fill: "rgb(255, 255, 255)",
                          display: "none"
                        },
                        children: /* @__PURE__ */ n("path", { d: "M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z" })
                      }
                    )
                  }
                )
              },
              `sub-color-recent-${w}`
            )) })
          ] }),
          /* @__PURE__ */ n(va, { setColor: m })
        ] })
      }
    )
  ] });
}
function va({ setColor: t }) {
  const [e, i] = E("#000000"), [r, o] = E(!1), { t: c } = j();
  return W(() => () => {
    o(!1);
  }, []), /* @__PURE__ */ g(Pt, { open: r, children: [
    /* @__PURE__ */ n(Dt, { asChild: !0, children: /* @__PURE__ */ g(
      "div",
      {
        className: "richtext-p-1.5 richtext-text-sm hover:richtext-cursor-pointer hover:richtext-bg-accent",
        onClick: (a) => {
          a.preventDefault(), o(!0);
        },
        children: [
          c("editor.color.more"),
          "..."
        ]
      }
    ) }),
    /* @__PURE__ */ g(vt, { children: [
      /* @__PURE__ */ g("div", { className: "richtext-flex richtext-flex-col richtext-items-center richtext-justify-center", children: [
        /* @__PURE__ */ n(
          Vr,
          {
            color: e,
            onChange: i
          }
        ),
        /* @__PURE__ */ n(
          J,
          {
            className: "richtext-mt-[8px] richtext-w-full",
            type: "text",
            value: e.slice(1),
            onChange: (a) => {
              a.preventDefault(), i(`#${a.target.value}`);
            }
          }
        )
      ] }),
      /* @__PURE__ */ n(it, { className: "richtext-my-[10px]" }),
      /* @__PURE__ */ n(
        X,
        {
          className: "richtext-w-full",
          onClick: (a) => {
            a.preventDefault(), t(e), o(!1);
          },
          children: /* @__PURE__ */ n(ni, { size: 16 })
        }
      )
    ] })
  ] });
}
function ba({ editor: t, disabled: e, toolbar: i }) {
  const { t: r, lang: o } = j(), c = q(() => {
    const d = [...t.extensionManager.extensions].sort((u, m) => {
      const x = u.options.sort ?? -1, w = m.options.sort ?? -1;
      return x - w;
    });
    let h = [];
    for (const u of d) {
      const {
        button: m,
        divider: x = !1,
        spacer: w = !1,
        toolbar: p = !0
      } = u.options;
      if (!m || !Xr(m) || !p)
        continue;
      const f = m({
        editor: t,
        extension: u,
        t: r
      });
      if (Array.isArray(f)) {
        const H = f.map((N, v) => ({
          button: N,
          divider: v === f.length - 1 ? x : !1,
          spacer: v === 0 ? w : !1,
          type: u.type,
          name: u.name
        }));
        h = [...h, ...H];
        continue;
      }
      h.push({
        button: f,
        divider: x,
        spacer: w,
        type: u.type,
        name: u.name
      });
    }
    return h;
  }, [t, r, o]), a = (s) => /* @__PURE__ */ n(
    "div",
    {
      className: "richtext-px-1 richtext-py-2 !richtext-border-b",
      style: {
        pointerEvents: e ? "none" : "auto",
        opacity: e ? 0.5 : 1
      },
      children: /* @__PURE__ */ n("div", { className: "richtext-relative richtext-flex richtext-flex-wrap richtext-h-auto richtext-gap-y-1 richtext-gap-x-1", children: s })
    }
  ), l = c.map((s, d) => {
    var u, m;
    const h = s.button.component;
    return /* @__PURE__ */ g("div", { className: "richtext-flex richtext-items-center", children: [
      (s == null ? void 0 : s.spacer) && /* @__PURE__ */ n(it, { orientation: "vertical", className: "!richtext-h-[16px] !richtext-mx-[10px]" }),
      /* @__PURE__ */ n(
        h,
        {
          ...s.button.componentProps,
          disabled: e || ((m = (u = s == null ? void 0 : s.button) == null ? void 0 : u.componentProps) == null ? void 0 : m.disabled)
        }
      ),
      (s == null ? void 0 : s.divider) && /* @__PURE__ */ n(it, { orientation: "vertical", className: "!richtext-h-auto !richtext-mx-2" })
    ] }, `toolbar-item-${d}`);
  });
  return i && (i != null && i.render) ? i.render({ editor: t, disabled: e || !1 }, c, l, a) : a(l);
}
function ya(t) {
  const e = ["size-small", "size-medium", "size-large"], i = [
    "SizeS",
    "SizeM",
    "SizeL"
  ];
  return e.map((r, o) => ({
    type: `image-${r}`,
    component: D,
    componentProps: {
      tooltip: K.t(`editor.${r.replace("-", ".")}.tooltip`),
      icon: i[o],
      action: () => t.commands.updateImage({ width: qt[r] }),
      isActive: () => t.isActive("image", { width: qt[r] })
    }
  }));
}
function Ca(t) {
  const e = ["size-small", "size-medium", "size-large"], i = [
    "SizeS",
    "SizeM",
    "SizeL"
  ];
  return e.map((r, o) => ({
    type: `image-${r}`,
    component: D,
    componentProps: {
      tooltip: K.t(`editor.${r.replace("-", ".")}.tooltip`),
      icon: i[o],
      action: () => t.commands.updateImageGif({ width: qt[r] }),
      isActive: () => t.isActive("image", { width: qt[r] })
    }
  }));
}
function Ta(t) {
  const e = ["left", "center", "right"], i = {
    left: "AlignLeft",
    center: "AlignCenter",
    right: "AlignRight"
  };
  return e.map((r) => ({
    type: `image-${r}`,
    component: D,
    componentProps: {
      tooltip: K.t(`editor.textalign.${r}.tooltip`),
      icon: i[r],
      action: () => {
        var o, c;
        return (c = (o = t.commands) == null ? void 0 : o.setAlignImage) == null ? void 0 : c.call(o, r);
      },
      isActive: () => t.isActive({ align: r }) || !1,
      disabled: !1
    }
  }));
}
function Na(t) {
  const e = ["left", "center", "right"], i = {
    left: "AlignLeft",
    center: "AlignCenter",
    right: "AlignRight"
  };
  return e.map((r) => ({
    type: `image-${r}`,
    component: D,
    componentProps: {
      tooltip: K.t(`editor.textalign.${r}.tooltip`),
      icon: i[r],
      action: () => {
        var o, c;
        return (c = (o = t.commands) == null ? void 0 : o.setAlignImageGif) == null ? void 0 : c.call(o, r);
      },
      isActive: () => t.isActive({ align: r }) || !1,
      disabled: !1
    }
  }));
}
function ka(t) {
  const e = ["left", "center", "right"], i = {
    left: "AlignLeft",
    center: "AlignCenter",
    right: "AlignRight"
  };
  return e.map((r) => ({
    type: `image-${r}`,
    component: D,
    componentProps: {
      tooltip: K.t(`editor.textalign.${r}.tooltip`),
      icon: i[r],
      action: () => {
        var o, c;
        return (c = (o = t.commands) == null ? void 0 : o.setAlignImageDrawer) == null ? void 0 : c.call(o, r);
      },
      isActive: () => t.isActive({ align: r }) || !1,
      disabled: !1
    }
  }));
}
function Sa(t) {
  const e = ["size-small", "size-medium", "size-large"], i = [
    "SizeS",
    "SizeM",
    "SizeL"
  ];
  return e.map((r, o) => ({
    type: `video-${r}`,
    component: D,
    componentProps: {
      tooltip: K.t(`editor.${r.replace("-", ".")}.tooltip`),
      icon: i[o],
      action: () => t.commands.updateVideo({ width: oe[r] }),
      isActive: () => t.isActive("video", { width: oe[r] })
    }
  }));
}
function Aa(t) {
  return [
    {
      type: "flipX",
      component: D,
      componentProps: {
        editor: t,
        tooltip: K.t("editor.tooltip.flipX"),
        icon: "FlipX",
        action: () => {
          const e = t.getAttributes("image"), { flipX: i } = e;
          t.chain().focus(void 0, { scrollIntoView: !1 }).updateImage({
            flipX: !i
          }).run();
        }
      }
    },
    {
      type: "flipY",
      component: D,
      componentProps: {
        editor: t,
        tooltip: K.t("editor.tooltip.flipY"),
        icon: "FlipY",
        action: () => {
          const e = t.getAttributes("image"), { flipY: i } = e;
          t.chain().focus(void 0, { scrollIntoView: !1 }).updateImage({
            flipY: !i
          }).run();
        }
      }
    },
    ...ya(t),
    ...Ta(t),
    {
      type: "remove",
      component: D,
      componentProps: {
        editor: t,
        tooltip: K.t("editor.remove"),
        icon: "Trash2",
        action: () => {
          const { state: e, dispatch: i } = t.view;
          Kt(e, i);
        }
      }
    }
  ];
}
function La(t) {
  return [
    ...Ca(t),
    ...Na(t),
    {
      type: "remove",
      component: D,
      componentProps: {
        editor: t,
        tooltip: K.t("editor.remove"),
        icon: "Trash2",
        action: () => {
          const { state: e, dispatch: i } = t.view;
          Kt(e, i);
        }
      }
    }
  ];
}
function Ma(t) {
  return [
    ...ka(t),
    {
      type: "edit",
      component: D,
      componentProps: {
        editor: t,
        tooltip: K.t("editor.edit"),
        icon: "Pencil",
        action: () => (console.log("AAA"), !0)
      }
    },
    {
      type: "remove",
      component: D,
      componentProps: {
        editor: t,
        tooltip: K.t("editor.remove"),
        icon: "Trash2",
        action: () => {
          const { state: e, dispatch: i } = t.view;
          Kt(e, i);
        }
      }
    }
  ];
}
function Ia(t) {
  return [
    ...Sa(t),
    {
      type: "remove",
      component: D,
      componentProps: {
        editor: t,
        tooltip: K.t("editor.remove"),
        icon: "Trash2",
        action: () => {
          const { state: e, dispatch: i } = t.view;
          Kt(e, i);
        }
      }
    }
  ];
}
function Ea(t, e) {
  return nn.reduce((i, r) => {
    if (r === "divider" && i.length > 0)
      return [...i, {
        type: "divider",
        component: void 0,
        componentProps: {}
      }];
    const o = t.extensionManager.extensions.find((c) => c.name === r);
    return o ? [...i, o.configure().options.button({ editor: t, t: e, extension: o })] : i;
  }, []);
}
function ke(t, e, i) {
  const r = [], o = t.node(0);
  i = typeof i == "number" && i >= 0 ? i : t.sameParent(e) ? Math.max(0, t.sharedDepth(e.pos) - 1) : t.sharedDepth(e.pos);
  const c = new mn(t, e, i), a = c.depth === 0 ? 0 : o.resolve(c.start).posAtIndex(0);
  return c.parent.forEach((l, s) => {
    const d = a + s, h = d + l.nodeSize;
    if (d < c.start || d >= c.end) return;
    const u = new xn(o.resolve(d), o.resolve(h));
    r.push(u);
  }), r;
}
class Se {
  constructor(e, i) {
    Ot(this, "anchor");
    Ot(this, "head");
    this.anchor = e, this.head = i;
  }
  map(e) {
    return new Se(e.map(this.anchor), e.map(this.head));
  }
  resolve(e) {
    const i = e.resolve(this.anchor), r = e.resolve(this.head);
    return new rt(i, r);
  }
}
class rt extends fn {
  constructor(i, r, o, c = 1) {
    const { doc: a } = i, l = i === r, s = i.pos === a.content.size && r.pos === a.content.size, d = l && !s ? a.resolve(r.pos + (c > 0 ? 1 : -1)) : r, h = l && s ? a.resolve(i.pos - (c > 0 ? 1 : -1)) : i, u = ke(h.min(d), h.max(d), o);
    super(
      d.pos >= i.pos ? u[0].$from : u[u.length - 1].$to,
      d.pos >= i.pos ? u[u.length - 1].$to : u[0].$from,
      u
    );
    Ot(this, "depth");
    this.depth = o;
  }
  get $to() {
    return this.ranges[this.ranges.length - 1].$to;
  }
  eq(i) {
    return i instanceof rt && i.$from.pos === this.$from.pos && i.$to.pos === this.$to.pos;
  }
  map(i, r) {
    const o = i.resolve(r.map(this.anchor)), c = i.resolve(r.map(this.head));
    return new rt(o, c);
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
    const { doc: i } = this.$from;
    if (this.isForwards && this.ranges.length > 1) {
      const c = this.ranges.slice(0, -1), a = c[0].$from, l = c[c.length - 1].$to;
      return new rt(a, l, this.depth);
    }
    const r = this.ranges[0], o = i.resolve(Math.max(0, r.$from.pos - 1));
    return new rt(this.$anchor, o, this.depth);
  }
  extendForwards() {
    const { doc: i } = this.$from;
    if (this.isBackwards && this.ranges.length > 1) {
      const c = this.ranges.slice(1), a = c[0].$from, l = c[c.length - 1].$to;
      return new rt(l, a, this.depth);
    }
    const r = this.ranges[this.ranges.length - 1], o = i.resolve(Math.min(i.content.size, r.$to.pos + 1));
    return new rt(this.$anchor, o, this.depth);
  }
  static fromJSON(i, r) {
    return new rt(i.resolve(r.anchor), i.resolve(r.head));
  }
  static create(i, r, o, c, a = 1) {
    return new this(i.resolve(r), i.resolve(o), c, a);
  }
  getBookmark() {
    return new Se(this.anchor, this.head);
  }
}
function za(t) {
  const e = t.cloneNode(!0), i = [t, ...Array.from(t.getElementsByTagName("*"))], r = [e, ...Array.from(e.getElementsByTagName("*"))];
  return i.forEach((o, c) => {
    r[c].style.cssText = function(a) {
      let l = "";
      const s = getComputedStyle(a);
      for (let d = 0; d < s.length; d += 1)
        l += `${s[d]}:${s.getPropertyValue(s[d])};`;
      return l;
    }(o);
  }), e;
}
function Vt(t, e) {
  return window.getComputedStyle(t)[e];
}
function Ra(t = 0, e = 0, i = 0) {
  return Math.min(Math.max(t, e), i);
}
function Ue(t) {
  t.parentNode !== null && t.parentNode !== void 0 && t.parentNode.removeChild(t);
}
function Ri(t) {
  const { x: e, y: i, direction: r, editor: o } = t;
  let c = null, a = null, l = null, s = e;
  for (; a === null && s < window.innerWidth && s > 0; ) {
    const d = document.elementsFromPoint(s, i), h = d.findIndex((m) => m.classList.contains("ProseMirror")), u = d.slice(0, h);
    if (u.length > 0) {
      const m = u[0];
      if (c = m, l = o.view.posAtDOM(m, 0), l >= 0) {
        a = o.state.doc.nodeAt(Math.max(l - 1, 0)), (a === null || a.isText) && (a = o.state.doc.nodeAt(Math.max(l - 1, 0))), a || (a = o.state.doc.nodeAt(Math.max(l, 0)));
        break;
      }
    }
    r === "left" ? s -= 1 : s += 1;
  }
  return {
    resultElement: c,
    resultNode: a,
    pos: l !== null ? l : null
  };
}
function Pa(t, e) {
  const { doc: i } = e.view.state, r = Ri({ editor: e, x: t.clientX, y: t.clientY, direction: "right" });
  if (!r.resultNode || r.pos === null) return [];
  const o = t.clientX, c = function(h, u, m) {
    const x = Number.parseInt(Vt(h.dom, "paddingLeft"), 10), w = Number.parseInt(Vt(h.dom, "paddingRight"), 10), p = Number.parseInt(Vt(h.dom, "borderLeftWidth"), 10), f = Number.parseInt(Vt(h.dom, "borderLeftWidth"), 10), H = h.dom.getBoundingClientRect();
    return {
      left: Ra(
        u,
        H.left + x + p,
        H.right - w - f
      ),
      top: m
    };
  }(e.view, o, t.clientY), a = e.view.posAtCoords(c);
  if (!a) return [];
  const { pos: l } = a;
  if (!i.resolve(l).parent) return [];
  const s = i.resolve(r.pos), d = i.resolve(r.pos + 1);
  return ke(s, d, 0);
}
function Ge(t, e) {
  const i = t.resolve(e), { depth: r } = i;
  return r === 0 ? e : i.pos - i.parentOffset - 1;
}
function qe(t, e) {
  const i = t.nodeAt(e), r = t.resolve(e);
  let { depth: o } = r, c = i;
  for (; o > 0; ) {
    const a = r.node(o);
    o -= 1, o === 0 && (c = a);
  }
  return c;
}
function je(t, e) {
  let i = e;
  for (; i && i.parentNode && i.parentNode !== t.dom; ) i = i.parentNode;
  return i;
}
const Pi = new we("dragHandle");
function Da({
  pluginKey: t = Pi,
  element: e,
  editor: i,
  tippyOptions: r,
  onNodeChange: o
}) {
  const c = document.createElement("div");
  let a = null, l = !1, s = null, d = -1;
  return e.addEventListener("dragstart", (h) => {
    const { view: u } = i;
    if (!h.dataTransfer) return;
    const { empty: m, $from: x, $to: w } = u.state.selection, p = Pa(h, i), f = ke(x, w, 0), H = f.some((L) => p.find((T) => T.$from === L.$from && T.$to === L.$to)), N = m || !H ? p : f;
    if (N.length === 0) return;
    const { tr: v } = u.state, b = document.createElement("div"), M = N[0].$from.pos, I = N[N.length - 1].$to.pos, A = rt.create(u.state.doc, M, I), y = A.content();
    N.forEach((L) => {
      const T = za(u.nodeDOM(L.$from.pos));
      b.append(T);
    }), b.style.position = "absolute", b.style.top = "-10000px", document.body.append(b), h.dataTransfer.clearData(), h.dataTransfer.setDragImage(b, 0, 0), u.dragging = { slice: y, move: !0 }, v.setSelection(A), u.dispatch(v), document.addEventListener("drop", () => Ue(b), { once: !0 }), setTimeout(() => {
      e && (e.style.pointerEvents = "none");
    }, 0);
  }), e.addEventListener("dragend", () => {
    e && (e.style.pointerEvents = "auto");
  }), new ve({
    key: typeof t == "string" ? new we(t) : t,
    state: {
      init: () => ({ locked: !1 }),
      apply(h, u) {
        const m = h.getMeta("lockDragHandle"), x = h.getMeta("hideDragHandle");
        if (m !== void 0 && (l = m), x && a)
          return a.hide(), l = !1, s = null, d = -1, o == null || o({ editor: i, node: null, pos: -1 }), u;
        if (h.docChanged && d !== -1 && e && a) {
          const w = h.mapping.map(d);
          w !== d && (d = w);
        }
        return u;
      }
    },
    view: (h) => {
      return u(), m(i.view.dom), a = _r(h.dom, {
        ...x(),
        ...r
      }), {
        update(b, M) {
          if (!w(e, a) || (e.draggable = !l, !p(b, M)))
            return;
          const I = f(b);
          I && H(b, I);
        },
        destroy() {
          v();
        }
      };
      function u() {
        e.draggable = !0, e.style.pointerEvents = "auto";
      }
      function m(b) {
        var M;
        (M = b.parentElement) == null || M.appendChild(c), c.appendChild(e), Object.assign(c.style, {
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
          appendTo: c,
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
      function w(b, M) {
        return b && M;
      }
      function p(b, M) {
        return !b.state.doc.eq(M.doc) && d !== -1;
      }
      function f(b) {
        let M = b.nodeDOM(d);
        return M = je(b, M), M === b.dom || (M == null ? void 0 : M.nodeType) !== 1 ? null : M;
      }
      function H(b, M) {
        const I = b.posAtDOM(M, 0), A = qe(i.state.doc, I);
        if (A === s)
          return;
        const y = Ge(i.state.doc, I);
        s = A, d = y, o == null || o({
          editor: i,
          node: s,
          pos: d
        }), N(M);
      }
      function N(b) {
        a.setProps({
          getReferenceClientRect: () => b.getBoundingClientRect()
        }), a.show();
      }
      function v() {
        a == null || a.destroy(), e && Ue(c);
      }
    },
    props: {
      handleDOMEvents: {
        mouseleave: (h, u) => {
          if (l || !m(u)) return !1;
          return x(), w(), !1;
          function m(p) {
            return p.target && !c.contains(p.relatedTarget);
          }
          function x() {
            a == null || a.hide();
          }
          function w() {
            s = null, d = -1, o == null || o({
              editor: i,
              node: null,
              pos: -1
            });
          }
        },
        mousemove: pe((h, u) => {
          if (!e || !a || l)
            return !1;
          const m = Ri({
            x: u.clientX,
            y: u.clientY,
            direction: "right",
            editor: i
          });
          if (!m.resultElement || m.resultElement === h.dom)
            return !1;
          const x = je(h, m.resultElement);
          if (x === h.dom || (x == null ? void 0 : x.nodeType) !== 1)
            return !1;
          const w = h.posAtDOM(x, 0), p = qe(i.state.doc, w);
          if (p === s)
            return !1;
          const f = Ge(i.state.doc, w);
          return s = p, d = f, o == null || o({
            editor: i,
            node: s,
            pos: d
          }), a.setProps({
            getReferenceClientRect: () => x.getBoundingClientRect()
          }), a.show(), !1;
        }, 100)
      }
    }
  });
}
function Ha(t) {
  var y, L, T;
  const { pluginKey: e = Pi } = t, { t: i } = j(), [r, o] = E(null), [c, a] = E(-1), l = Q(null), s = Q(null), [d, h] = E(!1), u = t.editor.extensionManager.extensions.some((C) => C.name === "textAlign"), m = t.editor.extensionManager.extensions.some((C) => C.name === "indent"), x = t.editor.extensionManager.extensions.some((C) => C.name === "clear");
  W(() => {
    l.current && !t.editor.isDestroyed && (s.current = Da({
      editor: t.editor,
      element: l.current,
      pluginKey: "ContentItemMenu",
      tippyOptions: {
        offset: [-2, 16],
        zIndex: 99,
        moveTransition: "transform 0.15s ease-out"
      },
      onNodeChange: M
    }), t.editor.registerPlugin(s.current));
  }, [t.editor, l]);
  function w() {
    const C = t.editor.chain();
    C.setNodeSelection(c).unsetAllMarks(), (r == null ? void 0 : r.type.name) !== "paragraph" && C.setParagraph(), C.run();
  }
  function p() {
    t.editor.chain().focus().setNodeSelection(c).run(), document.execCommand("copy");
  }
  function f() {
    t.editor.commands.setNodeSelection(c);
    const { $anchor: C } = t.editor.state.selection, B = C.node(1) || t.editor.state.selection.node;
    t.editor.chain().setMeta("hideDragHandle", !0).insertContentAt(c + ((r == null ? void 0 : r.nodeSize) || 0), B.toJSON()).run();
  }
  function H(C) {
    t.editor.commands.setTextAlign(C);
  }
  function N() {
    const C = he(t.editor.state.tr, c, 1);
    C.setMeta("hideDragHandle", !0), t.editor.view.dispatch && t.editor.view.dispatch(C);
  }
  function v() {
    const C = he(t.editor.state.tr, c, -1);
    t.editor.view.dispatch && t.editor.view.dispatch(C);
  }
  function b() {
    t.editor.chain().setMeta("hideDragHandle", !0).setNodeSelection(c).deleteSelection().run();
  }
  function M(C) {
    C.node && o(C.node), a(C.pos);
  }
  function I() {
    var C;
    if (c !== -1) {
      const B = (r == null ? void 0 : r.nodeSize) || 0, P = c + B, z = (r == null ? void 0 : r.type.name) === "paragraph" && ((C = r == null ? void 0 : r.content) == null ? void 0 : C.size) === 0, R = z ? c + 2 : P + 2;
      t.editor.chain().command(({ dispatch: $, tr: G, state: Z }) => $ ? (z ? G.insertText("/", c, c + 1) : G.insert(
        P,
        Z.schema.nodes.paragraph.create(null, [Z.schema.text("/")])
      ), $(G)) : !0).focus(R).run();
    }
  }
  W(() => (d ? t.editor.commands.setMeta("lockDragHandle", !0) : t.editor.commands.setMeta("lockDragHandle", !1), () => {
    t.editor.commands.setMeta("lockDragHandle", !1);
  }), [d]), W(() => () => {
    s.current && (t.editor.unregisterPlugin(e), s.current = null);
  }, []), W(() => {
    var C;
    (C = t.editor) != null && C.isDestroyed && s.current && (t.editor.unregisterPlugin(e), s.current = null);
  }, [(y = t.editor) == null ? void 0 : y.isDestroyed]);
  const A = (C) => {
    t != null && t.disabled || h(C);
  };
  return /* @__PURE__ */ n(
    "div",
    {
      ref: l,
      className: `drag-handle richtext-duration-200 richtext-ease-in-out [transition-property:top,_left] ${t == null ? void 0 : t.className}`,
      style: {
        opacity: t != null && t.disabled ? 0 : 1
      },
      children: /* @__PURE__ */ g("div", { className: "richtext-flex richtext-items-center richtext-gap-0.5 richtext-duration-200 richtext-ease-in-out [transition-property:top,_left]", children: [
        /* @__PURE__ */ n(
          X,
          {
            className: "!richtext-size-7 richtext-cursor-grab",
            disabled: t == null ? void 0 : t.disabled,
            onClick: I,
            size: "icon",
            type: "button",
            variant: "ghost",
            children: /* @__PURE__ */ n(
              Y,
              {
                className: "richtext-text-lg richtext-text-neutral-600 dark:richtext-text-neutral-200",
                name: "Plus"
              }
            )
          }
        ),
        /* @__PURE__ */ g(
          Jr,
          {
            onOpenChange: A,
            open: d,
            children: [
              /* @__PURE__ */ g("div", { className: "richtext-relative richtext-flex richtext-flex-col", children: [
                /* @__PURE__ */ g(vi, { children: [
                  /* @__PURE__ */ n(
                    bi,
                    {
                      asChild: !0,
                      disabled: t == null ? void 0 : t.disabled,
                      children: /* @__PURE__ */ n(
                        X,
                        {
                          className: "richtext-relative richtext-z-[1] !richtext-size-7 richtext-cursor-grab",
                          disabled: t == null ? void 0 : t.disabled,
                          size: "icon",
                          type: "button",
                          variant: "ghost",
                          onMouseUp: (C) => {
                            C.preventDefault(), !(t != null && t.disabled) && h(!0);
                          },
                          children: /* @__PURE__ */ n(
                            Y,
                            {
                              className: "richtext-text-sm richtext-text-neutral-600 dark:richtext-text-neutral-200",
                              name: "Grip"
                            }
                          )
                        }
                      )
                    }
                  ),
                  /* @__PURE__ */ n(ye, { children: i("editor.draghandle.tooltip") })
                ] }),
                /* @__PURE__ */ n(Qr, { className: "richtext-absolute richtext-left-0 richtext-top-0 richtext-z-0 richtext-size-[28px]" })
              ] }),
              /* @__PURE__ */ g(
                li,
                {
                  align: "start",
                  className: "richtext-w-48",
                  side: "bottom",
                  sideOffset: 0,
                  children: [
                    /* @__PURE__ */ g(
                      nt,
                      {
                        className: "richtext-flex richtext-gap-3 richtext-bg-opacity-10 hover:richtext-bg-red-400 hover:richtext-bg-opacity-20 focus:richtext-bg-red-400 focus:richtext-bg-opacity-30 focus:richtext-text-red-500 dark:hover:richtext-bg-opacity-20 dark:hover:richtext-text-red-500",
                        onClick: b,
                        children: [
                          /* @__PURE__ */ n(Y, { name: "Trash2" }),
                          /* @__PURE__ */ n("span", { children: i("editor.remove") })
                        ]
                      }
                    ),
                    x ? /* @__PURE__ */ g(
                      nt,
                      {
                        className: "richtext-flex richtext-gap-3",
                        onClick: w,
                        children: [
                          /* @__PURE__ */ n(Y, { name: "PaintRoller" }),
                          /* @__PURE__ */ n("span", { children: i("editor.clear.tooltip") })
                        ]
                      }
                    ) : null,
                    /* @__PURE__ */ g(
                      nt,
                      {
                        className: "richtext-flex richtext-gap-3",
                        onClick: p,
                        children: [
                          /* @__PURE__ */ n(Y, { name: "Clipboard" }),
                          /* @__PURE__ */ n("span", { children: i("editor.copyToClipboard") })
                        ]
                      }
                    ),
                    /* @__PURE__ */ g(
                      nt,
                      {
                        className: "richtext-flex richtext-gap-3",
                        onClick: f,
                        children: [
                          /* @__PURE__ */ n(Y, { name: "Copy" }),
                          /* @__PURE__ */ n("span", { children: i("editor.copy") })
                        ]
                      }
                    ),
                    u || m ? /* @__PURE__ */ n(di, {}) : null,
                    u ? /* @__PURE__ */ g(He, { children: [
                      /* @__PURE__ */ g(se, { className: "richtext-flex richtext-gap-3", children: [
                        /* @__PURE__ */ n(Y, { name: "AlignCenter" }),
                        /* @__PURE__ */ n("span", { children: i("editor.textalign.tooltip") })
                      ] }),
                      /* @__PURE__ */ n(De, { children: /* @__PURE__ */ g(le, { children: [
                        /* @__PURE__ */ g(
                          nt,
                          {
                            className: "richtext-flex richtext-gap-3",
                            onClick: () => H("left"),
                            children: [
                              /* @__PURE__ */ n(Y, { name: "AlignLeft" }),
                              /* @__PURE__ */ n("span", { children: i("editor.textalign.left.tooltip") })
                            ]
                          }
                        ),
                        /* @__PURE__ */ g(
                          nt,
                          {
                            className: "richtext-flex richtext-gap-3",
                            onClick: () => H("center"),
                            children: [
                              /* @__PURE__ */ n(Y, { name: "AlignCenter" }),
                              /* @__PURE__ */ n("span", { children: i("editor.textalign.center.tooltip") })
                            ]
                          }
                        ),
                        /* @__PURE__ */ g(
                          nt,
                          {
                            className: "richtext-flex richtext-gap-3",
                            onClick: () => H("right"),
                            children: [
                              /* @__PURE__ */ n(Y, { name: "AlignRight" }),
                              /* @__PURE__ */ n("span", { children: i("editor.textalign.right.tooltip") })
                            ]
                          }
                        )
                      ] }) })
                    ] }) : null,
                    m ? /* @__PURE__ */ g(He, { children: [
                      /* @__PURE__ */ g(se, { className: "richtext-flex richtext-gap-3", children: [
                        /* @__PURE__ */ n(Y, { name: "IndentIncrease" }),
                        /* @__PURE__ */ n("span", { children: i("editor.indent") })
                      ] }),
                      /* @__PURE__ */ n(De, { children: /* @__PURE__ */ g(le, { children: [
                        /* @__PURE__ */ g(
                          nt,
                          {
                            className: "richtext-flex richtext-gap-3",
                            disabled: ((L = r == null ? void 0 : r.attrs) == null ? void 0 : L.indent) >= de.max,
                            onClick: N,
                            children: [
                              /* @__PURE__ */ n(Y, { name: "IndentIncrease" }),
                              /* @__PURE__ */ n("span", { children: i("editor.indent.tooltip") })
                            ]
                          }
                        ),
                        /* @__PURE__ */ g(
                          nt,
                          {
                            className: "richtext-flex richtext-gap-3",
                            disabled: ((T = r == null ? void 0 : r.attrs) == null ? void 0 : T.indent) <= de.min,
                            onClick: v,
                            children: [
                              /* @__PURE__ */ n(Y, { name: "IndentDecrease" }),
                              /* @__PURE__ */ n("span", { children: i("editor.outdent.tooltip") })
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
const Oa = {
  maxWidth: "auto",
  zIndex: 20,
  appendTo: "parent",
  moveTransition: "transform 0.1s ease-out"
};
function Ba({ item: t, disabled: e, editor: i }) {
  var o;
  const r = t.component;
  return r ? /* @__PURE__ */ n(
    r,
    {
      ...t.componentProps,
      disabled: e || ((o = t == null ? void 0 : t.componentProps) == null ? void 0 : o.disabled),
      editor: i
    }
  ) : /* @__PURE__ */ n(V, {});
}
function _a(t) {
  const { t: e, lang: i } = j(), r = ({ editor: c }) => {
    const { selection: a } = c.view.state, { $from: l, to: s } = a;
    return l.pos === s ? !1 : a instanceof zt;
  }, o = q(() => t.disabled || !(t != null && t.editor) ? [] : Ea(t.editor, e), [t.disabled, t.editor, i, e]);
  return /* @__PURE__ */ n(
    ot,
    {
      editor: t == null ? void 0 : t.editor,
      shouldShow: r,
      tippyOptions: Oa,
      children: o != null && o.length ? /* @__PURE__ */ n("div", { className: "richtext-pointer-events-auto richtext-w-auto richtext-select-none richtext-rounded-sm !richtext-border richtext-border-neutral-200 richtext-bg-background richtext-px-3 richtext-py-2 richtext-shadow-sm richtext-transition-all dark:richtext-border-neutral-800", children: /* @__PURE__ */ n("div", { className: "richtext-relative richtext-flex richtext-h-[26px] richtext-flex-nowrap richtext-items-center richtext-justify-start richtext-gap-[4px] richtext-whitespace-nowrap", children: o == null ? void 0 : o.map((c, a) => (c == null ? void 0 : c.type) === "divider" ? /* @__PURE__ */ n(
        it,
        {
          className: "!richtext-mx-1 !richtext-my-2 !richtext-h-[16px]",
          orientation: "vertical"
        },
        `bubbleMenu-divider-${a}`
      ) : /* @__PURE__ */ n(
        Ba,
        {
          disabled: t.disabled,
          editor: t.editor,
          item: c
        },
        `bubbleMenu-text-${a}`
      )) }) }) : /* @__PURE__ */ n(V, {})
    }
  );
}
function $a({ editor: t, disabled: e, actions: i }) {
  var f, H, N, v, b, M, I, A, y, L, T, C, B, P, z, R, $, G;
  const r = ({ editor: Z }) => Ji(Z.view.state, "table"), { t: o } = j();
  function c() {
    t.chain().focus().addColumnBefore().run();
  }
  function a() {
    t.chain().focus().addColumnAfter().run();
  }
  function l() {
    t.chain().focus().deleteColumn().run();
  }
  function s() {
    t.chain().focus().addRowBefore().run();
  }
  function d() {
    t.chain().focus().addRowAfter().run();
  }
  function h() {
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
  function w(Z) {
    t.chain().focus().setTableCellBackground(Z).run();
  }
  return /* @__PURE__ */ n(
    ot,
    {
      editor: t,
      pluginKey: "table",
      shouldShow: r,
      updateDelay: 0,
      tippyOptions: {
        offset: [0, 8],
        popperOptions: {
          modifiers: [{ name: "flip", enabled: !1 }]
        },
        maxWidth: "auto",
        getReferenceClientRect: () => {
          var Ee;
          const {
            view: Z,
            state: {
              selection: { from: at }
            }
          } = t, xt = Z.domAtPos(at).node;
          if (!xt)
            return new DOMRect(-1e3, -1e3, 0, 0);
          const Ie = (Ee = xt == null ? void 0 : xt.closest) == null ? void 0 : Ee.call(xt, ".tableWrapper");
          return Ie ? Ie.getBoundingClientRect() : new DOMRect(-1e3, -1e3, 0, 0);
        },
        plugins: [$r],
        sticky: "popper"
      },
      children: e ? /* @__PURE__ */ n(V, {}) : /* @__PURE__ */ g("div", { className: "richtext-flex richtext-size-full richtext-min-w-32 richtext-flex-row richtext-items-center richtext-gap-0.5 richtext-rounded-lg !richtext-border richtext-border-border richtext-bg-background richtext-p-2 richtext-leading-none richtext-shadow-sm", children: [
        /* @__PURE__ */ n(
          D,
          {
            action: c,
            disabled: !((H = (f = t == null ? void 0 : t.can()) == null ? void 0 : f.addColumnBefore) != null && H.call(f)),
            icon: "BetweenHorizonalEnd",
            tooltip: o("editor.table.menu.insertColumnBefore"),
            "tooltip-options": {
              sideOffset: 15
            }
          }
        ),
        /* @__PURE__ */ n(
          D,
          {
            action: a,
            disabled: !((v = (N = t == null ? void 0 : t.can()) == null ? void 0 : N.addColumnAfter) != null && v.call(N)),
            icon: "BetweenHorizonalStart",
            tooltip: o("editor.table.menu.insertColumnAfter"),
            "tooltip-options": {
              sideOffset: 15
            }
          }
        ),
        /* @__PURE__ */ n(
          D,
          {
            action: l,
            disabled: !((M = t == null ? void 0 : (b = t.can()).deleteColumn) != null && M.call(b)),
            icon: "DeleteColumn",
            tooltip: o("editor.table.menu.deleteColumn"),
            "tooltip-options": {
              sideOffset: 15
            }
          }
        ),
        /* @__PURE__ */ n(
          it,
          {
            className: "!richtext-mx-1 !richtext-my-2 !richtext-h-[16px]",
            orientation: "vertical"
          }
        ),
        /* @__PURE__ */ n(
          D,
          {
            action: s,
            disabled: !((A = t == null ? void 0 : (I = t.can()).addRowBefore) != null && A.call(I)),
            icon: "BetweenVerticalEnd",
            tooltip: o("editor.table.menu.insertRowAbove"),
            "tooltip-options": {
              sideOffset: 15
            }
          }
        ),
        /* @__PURE__ */ n(
          D,
          {
            action: d,
            disabled: !((L = (y = t == null ? void 0 : t.can()) == null ? void 0 : y.addRowAfter) != null && L.call(y)),
            icon: "BetweenVerticalStart",
            tooltip: o("editor.table.menu.insertRowBelow"),
            "tooltip-options": {
              sideOffset: 15
            }
          }
        ),
        /* @__PURE__ */ n(
          D,
          {
            action: h,
            disabled: !((C = (T = t == null ? void 0 : t.can()) == null ? void 0 : T.deleteRow) != null && C.call(T)),
            icon: "DeleteRow",
            tooltip: o("editor.table.menu.deleteRow"),
            "tooltip-options": {
              sideOffset: 15
            }
          }
        ),
        /* @__PURE__ */ n(
          it,
          {
            className: "!richtext-mx-1 !richtext-my-2 !richtext-h-[16px]",
            orientation: "vertical"
          }
        ),
        /* @__PURE__ */ n(
          D,
          {
            action: u,
            disabled: !((P = (B = t == null ? void 0 : t.can()) == null ? void 0 : B.mergeCells) != null && P.call(B)),
            icon: "TableCellsMerge",
            tooltip: o("editor.table.menu.mergeCells"),
            "tooltip-options": {
              sideOffset: 15
            }
          }
        ),
        /* @__PURE__ */ n(
          D,
          {
            action: m,
            disabled: !((R = (z = t == null ? void 0 : t.can()) == null ? void 0 : z.splitCell) != null && R.call(z)),
            icon: "TableCellsSplit",
            tooltip: o("editor.table.menu.splitCells"),
            "tooltip-options": {
              sideOffset: 15
            }
          }
        ),
        /* @__PURE__ */ n(
          it,
          {
            className: "!richtext-mx-1 !richtext-my-2 !richtext-h-[16px]",
            orientation: "vertical"
          }
        ),
        /* @__PURE__ */ n(
          Bo,
          {
            action: w,
            editor: t,
            tooltip: o("editor.table.menu.setCellsBgColor"),
            tooltipOptions: {
              sideOffset: 15
            }
          }
        ),
        /* @__PURE__ */ n(
          D,
          {
            action: x,
            disabled: !((G = ($ = t == null ? void 0 : t.can()) == null ? void 0 : $.deleteTable) != null && G.call($)),
            icon: "Trash2",
            tooltip: o("editor.table.menu.deleteTable"),
            "tooltip-options": {
              sideOffset: 15
            }
          }
        ),
        i && i.map((Z, at) => /* @__PURE__ */ n(
          D,
          {
            ...Z
          },
          at
        ))
      ] })
    }
  );
}
function Va(t) {
  const { t: e } = j();
  return /* @__PURE__ */ g("div", { className: "richtext-flex richtext-items-center richtext-gap-2 richtext-p-2 richtext-bg-white !richtext-border richtext-rounded-lg richtext-shadow-sm dark:richtext-bg-black richtext-border-neutral-200 dark:richtext-border-neutral-800", children: [
    /* @__PURE__ */ n(
      "a",
      {
        href: t == null ? void 0 : t.link,
        target: "_blank",
        rel: "noopener noreferrer",
        className: "richtext-text-sm richtext-underline richtext-break-all",
        children: gn(t == null ? void 0 : t.link, {
          length: 50,
          omission: "…"
        })
      }
    ),
    (t == null ? void 0 : t.link) && /* @__PURE__ */ n(it, { orientation: "vertical", className: "!richtext-h-4" }),
    /* @__PURE__ */ g("div", { className: "richtext-flex richtext-flex-nowrap", children: [
      /* @__PURE__ */ n(
        D,
        {
          icon: "Pencil",
          tooltip: e("editor.link.edit.tooltip"),
          action: () => {
            t == null || t.onEdit();
          },
          tooltipOptions: { sideOffset: 15 }
        }
      ),
      /* @__PURE__ */ n(
        D,
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
function Wa({ editor: t, disabled: e }) {
  const [i, r] = E(!1), o = q(() => {
    const { href: s } = t.getAttributes("link");
    return s;
  }, [t]), c = O(({ editor: s }) => s.isActive("link"), []), a = (s, d, h) => {
    t.chain().extendMarkRange("link").insertContent({
      type: "text",
      text: d,
      marks: [
        {
          type: "link",
          attrs: {
            href: s,
            target: h ? "_blank" : ""
          }
        }
      ]
    }).setLink({ href: s }).focus().run(), r(!1);
  }, l = O(() => {
    t.chain().extendMarkRange("link").unsetLink().focus().run(), r(!1);
  }, [t]);
  return /* @__PURE__ */ n(V, { children: /* @__PURE__ */ n(
    ot,
    {
      editor: t,
      shouldShow: c,
      tippyOptions: {
        popperOptions: {
          modifiers: [{ name: "flip", enabled: !1 }]
        },
        placement: "bottom-start",
        offset: [-2, 16],
        zIndex: 9999,
        onHidden: () => {
          r(!1);
        }
      },
      children: e ? /* @__PURE__ */ n(V, {}) : /* @__PURE__ */ n(V, { children: i ? /* @__PURE__ */ n(_o, { onSetLink: a, editor: t }) : /* @__PURE__ */ n(
        Va,
        {
          editor: t,
          onClear: l,
          onEdit: () => {
            r(!0);
          },
          link: o
        }
      ) })
    }
  ) });
}
const Ae = {
  maxWidth: "auto",
  zIndex: 20,
  appendTo: "parent",
  moveTransition: "transform 0.1s ease-out"
};
function Le({ item: t, disabled: e, editor: i }) {
  var o;
  const r = t.component;
  return r ? /* @__PURE__ */ n(Ze, { children: t.type === "divider" ? /* @__PURE__ */ n(
    it,
    {
      className: "!richtext-mx-1 !richtext-my-2 !richtext-h-[16px]",
      orientation: "vertical"
    }
  ) : /* @__PURE__ */ n(
    r,
    {
      ...t.componentProps,
      disabled: e || ((o = t == null ? void 0 : t.componentProps) == null ? void 0 : o.disabled),
      editor: i
    }
  ) }) : /* @__PURE__ */ n(V, {});
}
function Fa(t) {
  return t.type.name === Lt.name;
}
function Ua(t) {
  return t.type.name === Li.name;
}
function Ga(t) {
  return t.type.name === Ai.name;
}
function qa(t) {
  const { lang: e } = j(), i = ({ editor: o }) => {
    const { selection: c } = o.view.state, { $from: a, to: l } = c;
    let s = !1;
    return o.view.state.doc.nodesBetween(a.pos, l, (d) => {
      if (Fa(d))
        return s = !0, !1;
    }), s;
  }, r = q(() => t.disabled ? [] : Aa(t.editor), [t.disabled, t.editor, e]);
  return /* @__PURE__ */ n(V, { children: /* @__PURE__ */ n(
    ot,
    {
      editor: t == null ? void 0 : t.editor,
      shouldShow: i,
      tippyOptions: Ae,
      children: r != null && r.length ? /* @__PURE__ */ n("div", { className: "richtext-pointer-events-auto richtext-w-auto richtext-select-none richtext-rounded-sm !richtext-border richtext-border-neutral-200 richtext-bg-background richtext-px-3 richtext-py-2 richtext-shadow-sm richtext-transition-all dark:richtext-border-neutral-800", children: /* @__PURE__ */ n("div", { className: "richtext-relative richtext-flex richtext-h-[26px] richtext-flex-nowrap richtext-items-center richtext-justify-start richtext-whitespace-nowrap", children: r == null ? void 0 : r.map((o, c) => /* @__PURE__ */ n(
        Le,
        {
          disabled: t.disabled,
          editor: t.editor,
          item: o
        },
        `bubbleMenu-image-${c}`
      )) }) }) : /* @__PURE__ */ n(V, {})
    }
  ) });
}
function ja(t) {
  const { lang: e } = j(), i = ({ editor: o }) => {
    const { selection: c } = o.view.state, { $from: a, to: l } = c;
    let s = !1;
    return o.view.state.doc.nodesBetween(a.pos, l, (d) => {
      if (Ua(d))
        return s = !0, !1;
    }), s;
  }, r = q(() => t.disabled ? [] : La(t.editor), [t.disabled, t.editor, e]);
  return /* @__PURE__ */ n(V, { children: /* @__PURE__ */ n(
    ot,
    {
      editor: t == null ? void 0 : t.editor,
      shouldShow: i,
      tippyOptions: Ae,
      children: r != null && r.length ? /* @__PURE__ */ n("div", { className: "richtext-pointer-events-auto richtext-w-auto richtext-select-none richtext-rounded-sm !richtext-border richtext-border-neutral-200 richtext-bg-background richtext-px-3 richtext-py-2 richtext-shadow-sm richtext-transition-all dark:richtext-border-neutral-800", children: /* @__PURE__ */ n("div", { className: "richtext-relative richtext-flex richtext-h-[26px] richtext-flex-nowrap richtext-items-center richtext-justify-start richtext-whitespace-nowrap", children: r == null ? void 0 : r.map((o, c) => /* @__PURE__ */ n(
        Le,
        {
          disabled: t.disabled,
          editor: t.editor,
          item: o
        },
        `bubbleMenu-image-gif-${c}`
      )) }) }) : /* @__PURE__ */ n(V, {})
    }
  ) });
}
function Xa(t) {
  const { lang: e } = j(), i = ({ editor: o }) => {
    const { selection: c } = o.view.state, { $from: a, to: l } = c;
    let s = !1;
    return o.view.state.doc.nodesBetween(a.pos, l, (d) => {
      if (Ga(d))
        return s = !0, !1;
    }), s;
  }, r = q(() => t.disabled ? [] : Ia(t.editor), [t.editor, t.disabled, e]);
  return /* @__PURE__ */ n(V, { children: /* @__PURE__ */ n(
    ot,
    {
      editor: t == null ? void 0 : t.editor,
      shouldShow: i,
      tippyOptions: Ae,
      children: r != null && r.length ? /* @__PURE__ */ n("div", { className: "richtext-pointer-events-auto richtext-w-auto richtext-select-none richtext-rounded-sm !richtext-border richtext-border-neutral-200 richtext-bg-background richtext-px-3 richtext-py-2 richtext-shadow-sm richtext-transition-all dark:richtext-border-neutral-800", children: /* @__PURE__ */ n("div", { className: "richtext-relative richtext-flex richtext-h-[26px] richtext-flex-nowrap richtext-items-center richtext-justify-start richtext-whitespace-nowrap", children: r == null ? void 0 : r.map((o, c) => /* @__PURE__ */ n(
        Le,
        {
          disabled: t.disabled,
          editor: t.editor,
          item: o
        },
        `bubbleMenu-video-${c}`
      )) }) }) : /* @__PURE__ */ n(V, {})
    }
  ) });
}
function Ya({ editor: t }) {
  const { t: e } = j(), i = O(() => t.isActive(Xt.name), [t]), r = O(() => Ne(Xt.name, t), [t]), o = O(() => t.chain().focus().addColBefore().run(), [t]), c = O(() => t.chain().focus().addColAfter().run(), [t]), a = O(() => t.chain().focus().deleteCol().run(), [t]);
  return /* @__PURE__ */ n(
    ot,
    {
      pluginKey: "columns-bubble-menu",
      editor: t,
      shouldShow: i,
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
        /* @__PURE__ */ n(
          D,
          {
            action: o,
            icon: "ColumnAddLeft",
            tooltip: e("editor.table.menu.insertColumnBefore")
          }
        ),
        /* @__PURE__ */ n(
          D,
          {
            action: c,
            icon: "ColumnAddRight",
            tooltip: e("editor.table.menu.insertColumnAfter")
          }
        ),
        /* @__PURE__ */ n(
          D,
          {
            action: a,
            icon: "DeleteColumn",
            tooltip: e("editor.table.menu.deleteColumn")
          }
        ),
        /* @__PURE__ */ n(
          D,
          {
            action: r,
            icon: "Trash2",
            tooltip: e("editor.table.menu.delete_column")
          }
        )
      ] })
    }
  );
}
function Za({ editor: t, extensions: e }) {
  const { t: i } = j(), r = q(() => {
    var o, c, a;
    return (a = (c = (o = e == null ? void 0 : e.find((l) => l.name === "base-kit")) == null ? void 0 : o.options) == null ? void 0 : c.characterCount) == null ? void 0 : a.limit;
  }, [e]);
  return r ? /* @__PURE__ */ n("div", { className: "richtext-flex richtext-items-center richtext-justify-between richtext-p-3 richtext-border-t", children: /* @__PURE__ */ n("div", { className: "richtext-flex richtext-flex-col", children: /* @__PURE__ */ n("div", { className: "richtext-flex richtext-justify-end richtext-gap-3 richtext-text-sm", children: /* @__PURE__ */ g("span", { children: [
    t.storage.characterCount.characters(),
    "/",
    r,
    " ",
    i("editor.characters")
  ] }) }) }) }) : /* @__PURE__ */ n("div", { className: "richtext-flex richtext-items-center richtext-justify-between richtext-p-3 richtext-border-t", children: /* @__PURE__ */ n("div", { className: "richtext-flex richtext-flex-col", children: /* @__PURE__ */ n("div", { className: "richtext-flex richtext-justify-end richtext-gap-3 richtext-text-sm", children: /* @__PURE__ */ g("span", { children: [
    t.storage.characterCount.characters(),
    " ",
    i("editor.characters")
  ] }) }) }) });
}
function Ka() {
  const { toasts: t } = go();
  return /* @__PURE__ */ g(oo, { children: [
    t.map(({ id: e, title: i, description: r, action: o, ...c }) => /* @__PURE__ */ g(
      xi,
      {
        ...c,
        children: [
          /* @__PURE__ */ g("div", { className: "richtext-grid richtext-gap-1", children: [
            i && /* @__PURE__ */ n(gi, { children: i }),
            r && /* @__PURE__ */ n(pi, { children: r })
          ] }),
          o,
          /* @__PURE__ */ n(fi, {})
        ]
      },
      e
    )),
    /* @__PURE__ */ n(mi, {})
  ] });
}
const Ja = `
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
  select {
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

  input {
    border-width: 1px;
  }


  input::placeholder {
    opacity: 1;
    color: #9ca3af;
  }

  button, input {
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

  button, input {
    cursor: pointer;
    color: inherit;
  }
}
`, Qa = Ui(({ children: t, id: e }) => {
  const [, i] = Ni((a) => a.value), [, r] = Xo((a) => a.value), o = (a) => {
    i({
      value: a.detail
    });
  }, c = (a) => {
    r({
      value: a.detail
    });
  };
  return W(() => {
    const a = Yt(lt.EDIT(e), o), l = Yt(lt.UPDATE_THEME(e), c);
    return () => {
      a(), l();
    };
  }, []), /* @__PURE__ */ n(V, { children: t });
});
function ts({ children: t, id: e }) {
  return /* @__PURE__ */ n(qo, { children: /* @__PURE__ */ n(jo, { children: /* @__PURE__ */ n(Qa, { id: e, children: t }) }) });
}
const es = {
  setTheme: (t, e) => {
    Ce(lt.UPDATE_THEME(t), e);
  }
}, Xe = "data-rc-order", Ye = "data-rc-priority", is = "rc-util-key", xe = /* @__PURE__ */ new Map();
function ns(t, e) {
  if (!t)
    return !1;
  if (t.contains)
    return t.contains(e);
  let i = e;
  for (; i; ) {
    if (i === t)
      return !0;
    i = i.parentNode;
  }
  return !1;
}
function Di({ mark: t } = {}) {
  return t ? t.startsWith("data-") ? t : `data-${t}` : is;
}
function Me(t) {
  return t.attachTo ? t.attachTo : document.querySelector("head") || document.body;
}
function rs(t) {
  return t === "queue" ? "prependQueue" : t ? "prepend" : "append";
}
function Hi(t) {
  return [...(xe.get(t) || t).children].filter(
    (e) => e.tagName === "STYLE"
  );
}
function Oi(t, e = {}) {
  const { csp: i, prepend: r, priority: o = 0 } = e, c = rs(r), a = c === "prependQueue", l = document.createElement("style");
  l.setAttribute(Xe, c), a && o && l.setAttribute(Ye, `${o}`), i != null && i.nonce && (l.nonce = i == null ? void 0 : i.nonce), l.innerHTML = t;
  const s = Me(e), { firstChild: d } = s;
  if (r) {
    if (a) {
      const h = Hi(s).filter((u) => {
        if (!["prepend", "prependQueue"].includes(u.getAttribute(Xe)))
          return !1;
        const m = Number(u.getAttribute(Ye) || 0);
        return o >= m;
      });
      if (h.length > 0)
        return s.insertBefore(l, h.at(-1).nextSibling), l;
    }
    d.before(l);
  } else
    s.append(l);
  return l;
}
function Bi(t, e = {}) {
  const i = Me(e);
  return Hi(i).find((r) => r.getAttribute(Di(e)) === t);
}
function os(t, e = {}) {
  const i = Bi(t, e);
  i && i.remove();
}
function cs(t, e) {
  const i = xe.get(t);
  if (!i || !ns(document, i)) {
    const r = Oi("", e), { parentNode: o } = r;
    xe.set(t, o), r.remove();
  }
}
function as(t, e, i = {}) {
  var a, l, s;
  const r = Me(i);
  cs(r, i);
  const o = Bi(e, i);
  if (o)
    return (a = i.csp) != null && a.nonce && o.nonce !== ((l = i.csp) == null ? void 0 : l.nonce) && (o.nonce = (s = i.csp) == null ? void 0 : s.nonce), o.innerHTML !== t && (o.innerHTML = t), o;
  const c = Oi(t, i);
  return c.setAttribute(Di(i), e), c;
}
function ss(t, e) {
  const { content: i, extensions: r, useEditorOptions: o = {} } = t, c = qi(), a = q(() => {
    const u = pn(r, r, "name");
    return [...r.map((x) => {
      const w = r.find((p) => p.name === x.name);
      return w ? x.configure(w.options) : x;
    }), ...u].map((x, w) => x.configure({ sort: w }));
  }, [r]), l = st((u) => {
    var x;
    const m = d(u, t.output);
    (x = t == null ? void 0 : t.onChangeContent) == null || x.call(t, m);
  }, rn), s = Qi({
    extensions: a,
    content: i,
    onUpdate: ({ editor: u }) => {
      l && l(u);
    },
    ...o
  });
  ji(e, () => ({
    editor: s
  })), W(() => {
    document.documentElement.classList.toggle("dark", t.dark), es.setTheme(c, t.dark ? "dark" : "light");
  }, [t.dark]), W(() => {
    s == null || s.setEditable(!(t != null && t.disabled)), mc.setDisable(c, !(t != null && t.disabled));
  }, [s, t == null ? void 0 : t.disabled]), W(() => ((t == null ? void 0 : t.resetCSS) !== !1 && as(Ja, "react-tiptap-reset"), () => {
    os("react-tiptap-reset");
  }), [t == null ? void 0 : t.resetCSS]);
  function d(u, m) {
    return t != null && t.removeDefaultWrapper ? m === "html" ? u.isEmpty ? "" : u.getHTML() : m === "json" ? u.isEmpty ? {} : u.getJSON() : m === "text" ? u.isEmpty ? "" : u.getText() : "" : m === "html" ? u.getHTML() : m === "json" ? u.getJSON() : m === "text" ? u.getText() : "";
  }
  Xi(() => {
    s && (s.id = c);
  }, [c, s]), W(() => () => {
    var u;
    (u = s == null ? void 0 : s.destroy) == null || u.call(s);
  }, []);
  const h = Zr(s, "characterCount");
  return s ? /* @__PURE__ */ g("div", { className: "reactjs-tiptap-editor", children: [
    /* @__PURE__ */ n(
      ts,
      {
        id: c,
        children: /* @__PURE__ */ n(
          lo,
          {
            delayDuration: 0,
            disableHoverableContent: !0,
            children: /* @__PURE__ */ n("div", { className: "richtext-overflow-hidden richtext-rounded-[0.5rem] richtext-bg-background richtext-shadow richtext-outline richtext-outline-1", children: /* @__PURE__ */ g("div", { className: "richtext-flex richtext-max-h-full richtext-w-full richtext-flex-col", children: [
              !(t != null && t.hideToolbar) && /* @__PURE__ */ n(
                ba,
                {
                  disabled: !!(t != null && t.disabled),
                  editor: s,
                  toolbar: t.toolbar
                }
              ),
              /* @__PURE__ */ n(
                tn,
                {
                  className: `richtext-relative ${(t == null ? void 0 : t.contentClass) || ""}`,
                  editor: s
                }
              ),
              h && /* @__PURE__ */ n(
                Za,
                {
                  editor: s,
                  extensions: r
                }
              ),
              !(t != null && t.hideBubble) && /* @__PURE__ */ n(
                pa,
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
    /* @__PURE__ */ n(Ka, {})
  ] }) : /* @__PURE__ */ n(V, {});
}
const Is = Gi(ss);
export {
  D as A,
  X as B,
  wa as C,
  Jr as D,
  lt as E,
  Zr as F,
  uc as G,
  Bo as H,
  Y as I,
  re as J,
  Ms as K,
  _o as L,
  Xt as M,
  Eo as N,
  Io as O,
  Pt as P,
  As as Q,
  Is as R,
  hi as S,
  vi as T,
  Ss as U,
  Ai as V,
  Ls as W,
  ft as X,
  Li as Y,
  ue as Z,
  We as _,
  bi as a,
  ye as b,
  Qr as c,
  li as d,
  to as e,
  di as f,
  Ur as g,
  Ns as h,
  Ci as i,
  no as j,
  Fr as k,
  Dt as l,
  vt as m,
  wi as n,
  Ti as o,
  To as p,
  ks as q,
  de as r,
  S as s,
  Ce as t,
  Lt as u,
  Yo as v,
  Yt as w,
  ct as x,
  J as y,
  go as z
};
