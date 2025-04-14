var ti = Object.defineProperty;
var ei = (t, e, r) => e in t ? ti(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r;
var Wt = (t, e, r) => ei(t, typeof e != "symbol" ? e + "" : e, r);
import { jsxs as g, jsx as i, Fragment as V } from "react/jsx-runtime";
import * as W from "react";
import Xt, { createContext as ri, useContext as ii, useSyncExternalStore as ni, useRef as J, useCallback as D, useState as M, useEffect as $, useMemo as U, Fragment as Me, memo as oi, forwardRef as ai, useId as ci, useImperativeHandle as si, useLayoutEffect as li } from "react";
import { Q as Zt, b as St, m as lt, V as di, N as pt, W as ne, R as wt, X as sr, Y as Jt, Z as hi, B as it, _ as ui, $ as mi, a0 as xi } from "./tiptap-DvyEUAwu.js";
import { u as X, I as ut, n as mt, o as oe, V as pe, C as fi, h as Z, B as gi, p as Qt, E as pi } from "./index-DPZo7c9P.js";
import * as lr from "@radix-ui/react-separator";
import { ax as wi, at as dr, ak as vi, ay as ae, au as Ae, T as Ot, N as bi, A as yi, az as te, aA as st, aB as hr, b as Le, P as Ie, a0 as Ci, $ as Ti, av as Ni, aC as ce, aD as ki, H as Dt, aE as Si, aF as Mi, S as Ai, aG as Li, aH as Ii } from "./vendor-Kj2xpPeb.js";
import * as tt from "@radix-ui/react-toast";
import { ChevronRight as Ei, Check as ur, Circle as zi, X as mr, WrapText as Ri, PencilRuler as Pi, FlipHorizontal as Hi, FlipVertical as Oi, CropIcon as Di, ChevronUp as _i, Paperclip as Bi, Eye as $i, Settings as Vi, ZoomOut as Wi, ZoomIn as Fi, BookMarked as Ui, Sigma as Gi, SmilePlusIcon as qi, Replace as We, SmilePlus as ji, Frame as Xi, Columns2 as Fe, PanelRight as Yi, PanelLeft as Ki, Clipboard as Zi, Copy as Ji, GripVertical as Qi, Plus as xr, Columns4 as tn, Columns3 as en, Heading6 as rn, Heading5 as nn, Heading4 as on, Heading3 as an, Heading2 as cn, Heading1 as sn, ChevronsUpDown as ln, Trash as dn, Trash2 as fr, TableCellsSplit as hn, TableCellsMerge as un, BetweenVerticalEnd as mn, BetweenVerticalStart as xn, BetweenHorizonalStart as fn, BetweenHorizonalEnd as gn, Unlink as pn, Pencil as gr, Sparkles as wn, Table as vn, Minimize as bn, Maximize as yn, Video as Cn, ImageUp as Tn, Link as Nn, ListTodo as kn, ListOrdered as Sn, List as Mn, IndentDecrease as An, IndentIncrease as Ln, Type as In, CodeXml as En, Code as zn, Superscript as Rn, Subscript as Pn, ChevronDown as Hn, Undo2 as On, Redo2 as Dn, PaintRoller as _n, Eraser as Bn, Minus as $n, Strikethrough as Vn, Quote as Wn, Underline as Fn, Italic as Un, LoaderCircle as Gn, Bold as qn, HelpCircle as pr } from "lucide-react";
import * as _t from "@radix-ui/react-tooltip";
import { Color4 as q, Editor as wr, makeDropdownToolbar as vr } from "easydrawer";
import { Slot as br } from "@radix-ui/react-slot";
import * as yr from "@radix-ui/react-toggle";
import { TextAlignRightIcon as jn, TextAlignLeftIcon as Xn, TextAlignJustifyIcon as Yn, TextAlignCenterIcon as Kn } from "@radix-ui/react-icons";
import * as rt from "@radix-ui/react-dialog";
import * as zt from "@radix-ui/react-popover";
import * as Cr from "@radix-ui/react-label";
import { Resizable as Zn } from "re-resizable";
import Ee from "katex";
import ee from "mermaid";
import Jn, { sticky as Qn } from "tippy.js";
import { HexColorPicker as to } from "react-colorful";
import * as we from "@radix-ui/react-switch";
import * as vt from "@radix-ui/react-tabs";
import eo from "react-image-crop";
import * as ve from "@radix-ui/react-checkbox";
import * as j from "@radix-ui/react-dropdown-menu";
function E(...t) {
  return wi(dr(t));
}
let he;
function ue() {
  return he === void 0 && (he = navigator.platform.includes("Mac")), he;
}
function ro(t) {
  return `${t}`.toLowerCase() === "mod" ? ue() ? "⌘" : "Ctrl" : `${t}`.toLowerCase() === "alt" ? ue() ? "⌥" : "Alt" : `${t}`.toLowerCase() === "shift" ? ue() ? "⇧" : "Shift" : t;
}
function io(t) {
  return t.map(ro).join(" ");
}
const O = Xt.forwardRef(
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
      action: d = void 0,
      isActive: h = void 0,
      children: u,
      asChild: m = !1,
      upload: x = !1,
      ...w
    } = t, p = Br[r];
    return /* @__PURE__ */ g(Or, { children: [
      /* @__PURE__ */ i(Dr, { asChild: !0, children: /* @__PURE__ */ g(
        m ? br : Hr,
        {
          "data-state": h != null && h() ? "on" : "off",
          onClick: d,
          ref: e,
          size: "sm",
          className: E("richtext-w-[32px] richtext-h-[32px]", o),
          disabled: a,
          ...w,
          children: [
            p && /* @__PURE__ */ i(p, { className: "richtext-size-4" }),
            u
          ]
        }
      ) }),
      n && /* @__PURE__ */ i(Pe, { ...s, children: /* @__PURE__ */ g("div", { className: "richtext-flex richtext-max-w-24 richtext-flex-col richtext-items-center richtext-text-center", children: [
        /* @__PURE__ */ i("div", { children: n }),
        !!(l != null && l.length) && /* @__PURE__ */ i("span", { children: io(l) })
      ] }) })
    ] });
  }
);
function se(t) {
  function e() {
    const o = J(t), c = D(() => o.current, []), l = J(/* @__PURE__ */ new Set()), s = D((h) => {
      o.current = { ...o.current, ...h }, l.current.forEach((u) => u());
    }, []), d = D((h) => (l.current.add(h), () => l.current.delete(h)), []);
    return {
      get: c,
      set: s,
      subscribe: d
    };
  }
  const r = ri(null);
  function n({ children: o }) {
    return /* @__PURE__ */ i(r.Provider, { value: e(), children: o });
  }
  function a(o) {
    const c = ii(r);
    if (!c)
      throw new Error("Store not found");
    return [ni(
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
se({
  value: !1
});
se({
  value: !1
});
const { Provider: no, useStore: Tr } = se({
  value: !1
}), { Provider: oo, useStore: Nr } = se({
  value: "light"
});
vi("0");
function re(t, e) {
  return window.addEventListener(t, e), () => {
    window.removeEventListener(t, e);
  };
}
function ze(t, e) {
  window.dispatchEvent(
    new CustomEvent(t, {
      detail: e
    })
  );
}
const gt = {
  UPLOAD_IMAGE: (t) => `UPLOAD_IMAGE-${t}`,
  UPLOAD_VIDEO: (t) => `UPLOAD_VIDEO-${t}`,
  EDIT: (t) => `EDIT-${t}`,
  UPDATE_THEME: (t) => `UPDATE_THEME-${t}`,
  SEARCH_REPLCE: "SEARCH_REPLACE"
};
function ao() {
  const [t] = Tr((e) => e.value);
  return t;
}
const co = {
  setDisable: (t, e) => {
    ze(gt.EDIT(t), e);
  }
};
function le(t, e) {
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
function kr(t, e, r) {
  return t < e ? e : t > r ? r : t;
}
const so = (t) => typeof t == "number", lo = (t) => typeof t == "string", ho = (t) => typeof t == "function";
function uo(t, e = "px") {
  if (!t)
    return t;
  const r = so(t) ? String(t) : t, n = Number.parseFloat(r), a = r.match(/[%a-z]+$/i), o = a ? a[0] : e;
  return Number.isNaN(n) ? t : n + o;
}
function mo(t, e) {
  if (!t)
    return !1;
  const { extensions: r = [] } = (t == null ? void 0 : t.extensionManager) ?? {};
  return !!r.find((a) => a.name === e);
}
function Js(t) {
  return t.map((e) => lo(e) ? { value: e, name: e } : e);
}
const xo = ae(
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
    n ? br : "button",
    {
      className: E(xo({ variant: e, size: r, className: t })),
      ref: o,
      ...a
    }
  )
);
G.displayName = "Button";
const fo = j.Root, go = j.Trigger, Ue = j.Portal, Ge = j.Sub, be = W.forwardRef(({ className: t, inset: e, children: r, ...n }, a) => /* @__PURE__ */ g(
  j.SubTrigger,
  {
    ref: a,
    className: E(
      "richtext-flex richtext-cursor-default richtext-select-none richtext-items-center richtext-rounded-sm richtext-px-2 richtext-py-1.5 richtext-text-sm richtext-outline-none focus:richtext-bg-accent data-[state=open]:richtext-bg-accent",
      e && "richtext-pl-8",
      t
    ),
    ...n,
    children: [
      r,
      /* @__PURE__ */ i(Ei, { className: "richtext-ml-auto richtext-h-4 richtext-w-4" })
    ]
  }
));
be.displayName = j.SubTrigger.displayName;
const ye = W.forwardRef(({ className: t, ...e }, r) => /* @__PURE__ */ i(
  j.SubContent,
  {
    ref: r,
    className: E(
      "richtext-z-50 richtext-min-w-[8rem] richtext-overflow-hidden richtext-rounded-md !richtext-border richtext-bg-popover richtext-p-1 richtext-text-popover-foreground richtext-shadow-lg data-[state=open]:richtext-animate-in data-[state=closed]:richtext-animate-out data-[state=closed]:richtext-fade-out-0 data-[state=open]:richtext-fade-in-0 data-[state=closed]:richtext-zoom-out-95 data-[state=open]:richtext-zoom-in-95 data-[side=bottom]:richtext-slide-in-from-top-2 data-[side=left]:richtext-slide-in-from-right-2 data-[side=right]:richtext-slide-in-from-left-2 data-[side=top]:richtext-slide-in-from-bottom-2",
      t
    ),
    ...e
  }
));
ye.displayName = j.SubContent.displayName;
const Sr = W.forwardRef(({ className: t, sideOffset: e = 4, ...r }, n) => /* @__PURE__ */ i(j.Portal, { children: /* @__PURE__ */ i(
  j.Content,
  {
    ref: n,
    sideOffset: e,
    className: E(
      "richtext-z-50 richtext-min-w-[8rem] richtext-overflow-hidden richtext-rounded-md !richtext-border richtext-bg-popover richtext-p-1 richtext-text-popover-foreground richtext-shadow-md data-[state=open]:richtext-animate-in data-[state=closed]:richtext-animate-out data-[state=closed]:richtext-fade-out-0 data-[state=open]:richtext-fade-in-0 data-[state=closed]:richtext-zoom-out-95 data-[state=open]:richtext-zoom-in-95 data-[side=bottom]:richtext-slide-in-from-top-2 data-[side=left]:richtext-slide-in-from-right-2 data-[side=right]:richtext-slide-in-from-left-2 data-[side=top]:richtext-slide-in-from-bottom-2",
      t
    ),
    ...r
  }
) }));
Sr.displayName = j.Content.displayName;
const ot = W.forwardRef(({ className: t, inset: e, ...r }, n) => /* @__PURE__ */ i(
  j.Item,
  {
    ref: n,
    className: E(
      "richtext-relative richtext-flex richtext-cursor-default richtext-select-none richtext-items-center richtext-rounded-sm richtext-px-2 richtext-py-1.5 richtext-text-sm richtext-outline-none richtext-transition-colors focus:richtext-bg-accent focus:richtext-text-accent-foreground data-[disabled]:richtext-pointer-events-none data-[disabled]:richtext-opacity-50",
      e && "richtext-pl-8",
      t
    ),
    ...r
  }
));
ot.displayName = j.Item.displayName;
const po = W.forwardRef(({ className: t, children: e, checked: r, ...n }, a) => /* @__PURE__ */ g(
  j.CheckboxItem,
  {
    ref: a,
    className: E(
      "richtext-relative richtext-flex richtext-cursor-default richtext-select-none richtext-items-center richtext-rounded-sm richtext-py-1.5 richtext-pl-8 richtext-pr-2 richtext-text-sm richtext-outline-none richtext-transition-colors focus:richtext-bg-accent focus:richtext-text-accent-foreground data-[disabled]:richtext-pointer-events-none data-[disabled]:richtext-opacity-50",
      t
    ),
    checked: r,
    ...n,
    children: [
      /* @__PURE__ */ i("span", { className: "richtext-absolute richtext-left-2 richtext-flex richtext-h-3.5 richtext-w-3.5 richtext-items-center richtext-justify-center", children: /* @__PURE__ */ i(j.ItemIndicator, { children: /* @__PURE__ */ i(ur, { className: "richtext-h-4 richtext-w-4" }) }) }),
      e
    ]
  }
));
po.displayName = j.CheckboxItem.displayName;
const wo = W.forwardRef(({ className: t, children: e, ...r }, n) => /* @__PURE__ */ g(
  j.RadioItem,
  {
    ref: n,
    className: E(
      "richtext-relative richtext-flex richtext-cursor-default richtext-select-none richtext-items-center richtext-rounded-sm richtext-py-1.5 richtext-pl-8 richtext-pr-2 richtext-text-sm richtext-outline-none richtext-transition-colors focus:richtext-bg-accent focus:richtext-text-accent-foreground data-[disabled]:richtext-pointer-events-none data-[disabled]:richtext-opacity-50",
      t
    ),
    ...r,
    children: [
      /* @__PURE__ */ i("span", { className: "richtext-absolute richtext-left-2 richtext-flex richtext-h-3.5 richtext-w-3.5 richtext-items-center richtext-justify-center", children: /* @__PURE__ */ i(j.ItemIndicator, { children: /* @__PURE__ */ i(zi, { className: "richtext-h-2 richtext-w-2 richtext-fill-current" }) }) }),
      e
    ]
  }
));
wo.displayName = j.RadioItem.displayName;
const vo = W.forwardRef(({ className: t, inset: e, ...r }, n) => /* @__PURE__ */ i(
  j.Label,
  {
    ref: n,
    className: E(
      "richtext-px-2 richtext-py-1.5 richtext-text-sm richtext-font-semibold",
      e && "richtext-pl-8",
      t
    ),
    ...r
  }
));
vo.displayName = j.Label.displayName;
const Mr = W.forwardRef(({ className: t, ...e }, r) => /* @__PURE__ */ i(
  j.Separator,
  {
    ref: r,
    className: E("richtext--mx-1 richtext-my-1 richtext-h-px richtext-bg-muted", t),
    ...e
  }
));
Mr.displayName = j.Separator.displayName;
function bo({
  className: t,
  ...e
}) {
  return /* @__PURE__ */ i(
    "span",
    {
      className: E("richtext-ml-auto richtext-text-xs richtext-tracking-widest richtext-opacity-60", t),
      ...e
    }
  );
}
bo.displayName = "DropdownMenuShortcut";
const Q = W.forwardRef(
  ({ className: t, type: e, ...r }, n) => /* @__PURE__ */ i(
    "input",
    {
      type: e,
      className: E(
        "richtext-flex richtext-h-10 richtext-w-full richtext-rounded-md !richtext-border richtext-border-input richtext-bg-background richtext-px-3 richtext-py-2 richtext-text-sm richtext-ring-offset-background file:richtext-border-0 file:richtext-bg-transparent file:richtext-text-sm file:richtext-font-medium placeholder:richtext-text-muted-foreground focus-visible:richtext-outline-none  disabled:richtext-cursor-not-allowed disabled:richtext-opacity-50",
        t
      ),
      ref: n,
      ...r
    }
  )
);
Q.displayName = "Input";
const yo = ae(
  "richtext-text-sm richtext-font-medium richtext-leading-none peer-disabled:richtext-cursor-not-allowed peer-disabled:richtext-opacity-70"
), ct = W.forwardRef(({ className: t, ...e }, r) => /* @__PURE__ */ i(
  Cr.Root,
  {
    ref: r,
    className: E(yo(), t),
    ...e
  }
));
ct.displayName = Cr.Root.displayName;
const Mt = zt.Root, At = zt.Trigger, bt = W.forwardRef(({ className: t, align: e = "center", sideOffset: r = 4, ...n }, a) => /* @__PURE__ */ i(zt.Portal, { children: /* @__PURE__ */ i(
  zt.Content,
  {
    ref: a,
    align: e,
    sideOffset: r,
    className: E(
      "richtext-z-50 richtext-w-72 richtext-rounded-md !richtext-border richtext-bg-popover richtext-p-4 richtext-text-popover-foreground richtext-shadow-md richtext-outline-none data-[state=open]:richtext-animate-in data-[state=closed]:richtext-animate-out data-[state=closed]:richtext-fade-out-0 data-[state=open]:richtext-fade-in-0 data-[state=closed]:richtext-zoom-out-95 data-[state=open]:richtext-zoom-in-95 data-[side=bottom]:richtext-slide-in-from-top-2 data-[side=left]:richtext-slide-in-from-right-2 data-[side=right]:richtext-slide-in-from-left-2 data-[side=top]:richtext-slide-in-from-bottom-2",
      t
    ),
    ...n
  }
) }));
bt.displayName = zt.Content.displayName;
const et = W.forwardRef(
  ({ className: t, orientation: e = "horizontal", decorative: r = !0, ...n }, a) => /* @__PURE__ */ i(
    lr.Root,
    {
      ref: a,
      decorative: r,
      orientation: e,
      className: E(
        "richtext-shrink-0 richtext-bg-border",
        e === "horizontal" ? "richtext-h-[1px] richtext-w-full" : "richtext-h-full richtext-w-[1px]",
        t
      ),
      ...n
    }
  )
);
et.displayName = lr.Root.displayName;
const Ar = W.forwardRef(({ className: t, ...e }, r) => /* @__PURE__ */ i(
  we.Root,
  {
    className: E(
      "richtext-peer richtext-inline-flex richtext-h-6 richtext-w-11 richtext-shrink-0 richtext-cursor-pointer richtext-items-center richtext-rounded-full richtext-border-2 richtext-border-transparent richtext-transition-colors focus-visible:richtext-outline-none focus-visible:richtext-ring-2 focus-visible:richtext-ring-ring focus-visible:richtext-ring-offset-2 focus-visible:richtext-ring-offset-background disabled:richtext-cursor-not-allowed disabled:richtext-opacity-50 data-[state=checked]:richtext-bg-primary data-[state=unchecked]:richtext-bg-input",
      t
    ),
    ...e,
    ref: r,
    children: /* @__PURE__ */ i(
      we.Thumb,
      {
        className: E(
          "richtext-pointer-events-none richtext-block richtext-h-5 richtext-w-5 richtext-rounded-full richtext-bg-background richtext-shadow-lg richtext-ring-0 richtext-transition-transform data-[state=checked]:richtext-translate-x-5 data-[state=unchecked]:richtext-translate-x-0"
        )
      }
    )
  }
));
Ar.displayName = we.Root.displayName;
const Lr = vt.Root, Re = W.forwardRef(({ className: t, ...e }, r) => /* @__PURE__ */ i(
  vt.List,
  {
    ref: r,
    className: E(
      "richtext-inline-flex richtext-h-10 richtext-items-center richtext-justify-center richtext-rounded-md richtext-bg-muted richtext-p-1 richtext-text-muted-foreground",
      t
    ),
    ...e
  }
));
Re.displayName = vt.List.displayName;
const Rt = W.forwardRef(({ className: t, ...e }, r) => /* @__PURE__ */ i(
  vt.Trigger,
  {
    ref: r,
    className: E(
      "richtext-inline-flex richtext-items-center richtext-justify-center richtext-whitespace-nowrap richtext-rounded-sm richtext-px-3 richtext-py-1.5 richtext-text-sm richtext-font-medium richtext-ring-offset-background richtext-transition-all focus-visible:richtext-outline-none focus-visible:richtext-ring-2 focus-visible:richtext-ring-ring focus-visible:richtext-ring-offset-2 disabled:richtext-pointer-events-none disabled:richtext-opacity-50 data-[state=active]:richtext-bg-background data-[state=active]:richtext-text-foreground data-[state=active]:richtext-shadow-sm",
      t
    ),
    ...e
  }
));
Rt.displayName = vt.Trigger.displayName;
const Pt = W.forwardRef(({ className: t, ...e }, r) => /* @__PURE__ */ i(
  vt.Content,
  {
    ref: r,
    className: E(
      "richtext-mt-2 richtext-ring-offset-background focus-visible:richtext-outline-none focus-visible:richtext-ring-2 focus-visible:richtext-ring-ring focus-visible:richtext-ring-offset-2",
      t
    ),
    ...e
  }
));
Pt.displayName = vt.Content.displayName;
const Co = tt.Provider, Ir = W.forwardRef(({ className: t, ...e }, r) => /* @__PURE__ */ i(
  tt.Viewport,
  {
    ref: r,
    className: E(
      "richtext-fixed richtext-top-0 richtext-z-[100] richtext-flex richtext-max-h-screen richtext-w-full richtext-flex-col-reverse richtext-p-4 sm:richtext-bottom-0 sm:richtext-right-0 sm:richtext-top-auto sm:richtext-flex-col md:richtext-max-w-[420px]",
      t
    ),
    ...e
  }
));
Ir.displayName = tt.Viewport.displayName;
const To = ae(
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
), Er = W.forwardRef(({ className: t, variant: e, ...r }, n) => /* @__PURE__ */ i(
  tt.Root,
  {
    ref: n,
    className: E(To({ variant: e }), t),
    ...r
  }
));
Er.displayName = tt.Root.displayName;
const No = W.forwardRef(({ className: t, ...e }, r) => /* @__PURE__ */ i(
  tt.Action,
  {
    ref: r,
    className: E(
      "richtext-inline-flex richtext-h-8 richtext-shrink-0 richtext-items-center richtext-justify-center richtext-rounded-md !richtext-border richtext-bg-transparent richtext-px-3 richtext-text-sm richtext-font-medium richtext-ring-offset-background richtext-transition-colors hover:richtext-bg-secondary focus:richtext-outline-none focus:richtext-ring-2 focus:richtext-ring-ring focus:richtext-ring-offset-2 disabled:richtext-pointer-events-none disabled:richtext-opacity-50 group-[.destructive]:richtext-border-muted/40 group-[.destructive]:hover:richtext-border-destructive/30 group-[.destructive]:hover:richtext-bg-destructive group-[.destructive]:hover:richtext-text-destructive-foreground group-[.destructive]:focus:richtext-ring-destructive",
      t
    ),
    ...e
  }
));
No.displayName = tt.Action.displayName;
const zr = W.forwardRef(({ className: t, ...e }, r) => /* @__PURE__ */ i(
  tt.Close,
  {
    ref: r,
    className: E(
      "richtext-absolute richtext-right-2 richtext-top-2 richtext-rounded-md richtext-p-1 richtext-text-foreground/50 richtext-opacity-0 richtext-transition-opacity hover:richtext-text-foreground focus:richtext-opacity-100 focus:richtext-outline-none focus:richtext-ring-2 group-hover:richtext-opacity-100 group-[.destructive]:richtext-text-red-300 group-[.destructive]:hover:richtext-text-red-50 group-[.destructive]:focus:richtext-ring-red-400 group-[.destructive]:focus:richtext-ring-offset-red-600",
      t
    ),
    "toast-close": "",
    ...e,
    children: /* @__PURE__ */ i(mr, { className: "richtext-h-4 richtext-w-4" })
  }
));
zr.displayName = tt.Close.displayName;
const Rr = W.forwardRef(({ className: t, ...e }, r) => /* @__PURE__ */ i(
  tt.Title,
  {
    ref: r,
    className: E("richtext-text-sm richtext-font-semibold", t),
    ...e
  }
));
Rr.displayName = tt.Title.displayName;
const Pr = W.forwardRef(({ className: t, ...e }, r) => /* @__PURE__ */ i(
  tt.Description,
  {
    ref: r,
    className: E("richtext-text-sm richtext-opacity-90", t),
    ...e
  }
));
Pr.displayName = tt.Description.displayName;
const ko = ae(
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
), Hr = W.forwardRef(({ className: t, variant: e, size: r, ...n }, a) => /* @__PURE__ */ i(
  yr.Root,
  {
    ref: a,
    className: E(ko({ variant: e, size: r, className: t })),
    ...n
  }
));
Hr.displayName = yr.Root.displayName;
const So = _t.Provider, Or = _t.Root, Dr = _t.Trigger, Pe = W.forwardRef(({ className: t, sideOffset: e = 4, ...r }, n) => /* @__PURE__ */ i(
  _t.Content,
  {
    ref: n,
    sideOffset: e,
    className: E(
      "richtext-z-50 richtext-overflow-hidden richtext-rounded-md !richtext-border richtext-bg-popover richtext-px-3 richtext-py-1.5 richtext-text-sm richtext-text-popover-foreground richtext-shadow-md richtext-animate-in richtext-fade-in-0 richtext-zoom-in-95 data-[side=bottom]:richtext-slide-in-from-top-2 data-[side=left]:richtext-slide-in-from-right-2 data-[side=right]:richtext-slide-in-from-left-2 data-[side=top]:richtext-slide-in-from-bottom-2",
      t
    ),
    ...r
  }
));
Pe.displayName = _t.Content.displayName;
const Mo = 1, Ao = 1e6;
let me = 0;
function Lo() {
  return me = (me + 1) % Number.MAX_SAFE_INTEGER, me.toString();
}
const xe = /* @__PURE__ */ new Map();
function qe(t) {
  if (xe.has(t))
    return;
  const e = setTimeout(() => {
    xe.delete(t), Et({
      type: "REMOVE_TOAST",
      toastId: t
    });
  }, Ao);
  xe.set(t, e);
}
function Io(t, e) {
  switch (e.type) {
    case "ADD_TOAST":
      return {
        ...t,
        toasts: [e.toast, ...t.toasts].slice(0, Mo)
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
      return r ? qe(r) : t.toasts.forEach((n) => {
        qe(n.id);
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
const Yt = [];
let Kt = { toasts: [] };
function Et(t) {
  Kt = Io(Kt, t), Yt.forEach((e) => {
    e(Kt);
  });
}
function Eo({ ...t }) {
  const e = Lo(), r = (a) => Et({
    type: "UPDATE_TOAST",
    toast: { ...a, id: e }
  }), n = () => Et({ type: "DISMISS_TOAST", toastId: e });
  return Et({
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
function zo() {
  const [t, e] = W.useState(Kt);
  return W.useEffect(() => (Yt.push(e), () => {
    const r = Yt.indexOf(e);
    r > -1 && Yt.splice(r, 1);
  }), [t]), {
    ...t,
    toast: Eo,
    dismiss: (r) => Et({ type: "DISMISS_TOAST", toastId: r })
  };
}
const _r = W.forwardRef(({ className: t, ...e }, r) => /* @__PURE__ */ i(
  ve.Root,
  {
    ref: r,
    className: E(
      "!richtext-peer !richtext-h-4 !richtext-w-4 !richtext-p-0 !richtext-shrink-0 !richtext-rounded-sm !richtext-border !richtext-border-primary !richtext-ring-offset-background focus-visible:!richtext-outline-none focus-visible:!richtext-ring-2 focus-visible:!richtext-ring-ring focus-visible:!richtext-ring-offset-2 disabled:!richtext-cursor-not-allowed disabled:!richtext-opacity-50 data-[state=checked]:!richtext-bg-primary data-[state=checked]:!richtext-text-primary-foreground",
      t
    ),
    ...e,
    children: /* @__PURE__ */ i(
      ve.Indicator,
      {
        className: E("!richtext-flex !richtext-p-0 !richtext-items-center !richtext-justify-center !richtext-text-current"),
        children: /* @__PURE__ */ i(ur, { className: "!richtext-h-4 !richtext-w-4" })
      }
    )
  }
));
_r.displayName = ve.Root.displayName;
function Ro(t) {
  return /* @__PURE__ */ i("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", ...t, children: /* @__PURE__ */ i(
    "path",
    {
      fill: "currentColor",
      d: "M19 12h-2v3h-3v2h5zM7 9h3V7H5v5h2zm14-6H3a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2m0 16H3V5h18z"
    }
  ) });
}
function Po(t) {
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
function Ho() {
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
function Oo() {
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
function Do(t) {
  return /* @__PURE__ */ i("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", ...t, children: /* @__PURE__ */ i(
    "path",
    {
      fill: "currentColor",
      d: "M14 2H6a2 2 0 0 0-2 2v16c0 1.11.89 2 2 2h12c1.11 0 2-.89 2-2V8zm4 18H6V4h7v5h5zm-.65-10l-2.1 9h-1.4l-1.8-6.79l-1.8 6.79h-1.4l-2.2-9h1.5l1.4 6.81l1.8-6.81h1.3l1.8 6.81l1.4-6.81z"
    }
  ) });
}
function K(t) {
  const e = Br[t.name];
  return e ? /* @__PURE__ */ i(e, { onClick: t == null ? void 0 : t.onClick, className: `richtext-w-4 richtext-h-4 ${(t == null ? void 0 : t.className) || ""}` }) : null;
}
function _o(t) {
  return /* @__PURE__ */ i("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", ...t, children: /* @__PURE__ */ i(
    "path",
    {
      fill: "currentColor",
      d: "M21 22H3v-2h18zm0-18H3V2h18zm-11 9.7h4l-2-5.4zM11.2 6h1.7l4.7 12h-2l-.9-2.6H9.4L8.5 18h-2z"
    }
  ) });
}
function Bo(t) {
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
function $o(t) {
  return /* @__PURE__ */ i("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", ...t, children: /* @__PURE__ */ i("path", { fill: "currentColor", d: "M9 7v10h6v-2h-4V7z" }) });
}
function Vo(t) {
  return /* @__PURE__ */ i("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", ...t, children: /* @__PURE__ */ i(
    "path",
    {
      fill: "currentColor",
      d: "M9 7c-1.1 0-2 .9-2 2v8h2V9h2v7h2V9h2v8h2V9a2 2 0 0 0-2-2z"
    }
  ) });
}
function Wo(t) {
  return /* @__PURE__ */ i("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", ...t, children: /* @__PURE__ */ i(
    "path",
    {
      fill: "currentColor",
      d: "M11 7c-1.1 0-2 .9-2 2v2a2 2 0 0 0 2 2h2v2H9v2h4c1.11 0 2-.89 2-2v-2a2 2 0 0 0-2-2h-2V9h4V7z"
    }
  ) });
}
function Fo() {
  return /* @__PURE__ */ i("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", children: /* @__PURE__ */ i("path", { fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M14 4h4a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1m-9 8h4m-2-2v4" }) });
}
function Uo() {
  return /* @__PURE__ */ i("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", children: /* @__PURE__ */ i("path", { fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M6 4h4a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1m9 8h4m-2-2v4" }) });
}
function Go() {
  return /* @__PURE__ */ i("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", children: /* @__PURE__ */ i("path", { fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M12 21v-4m0-4V9m0-4V3m-2 18h4M8 5v4h11l2-2l-2-2zm6 8v4H6l-2-2l2-2z" }) });
}
function qo() {
  return /* @__PURE__ */ g("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 32 32", children: [
    /* @__PURE__ */ i("path", { fill: "currentColor", d: "M30 18v-2h-6v10h2v-4h3v-2h-3v-2zm-11 8h-4V16h4a3.003 3.003 0 0 1 3 3v4a3.003 3.003 0 0 1-3 3m-2-2h2a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-2zm-6-8H6v10h2v-3h3a2.003 2.003 0 0 0 2-2v-3a2 2 0 0 0-2-2m-3 5v-3h3l.001 3z" }),
    /* @__PURE__ */ i("path", { fill: "currentColor", d: "M22 14v-4a.91.91 0 0 0-.3-.7l-7-7A.9.9 0 0 0 14 2H4a2.006 2.006 0 0 0-2 2v24a2 2 0 0 0 2 2h16v-2H4V4h8v6a2.006 2.006 0 0 0 2 2h6v2Zm-8-4V4.4l5.6 5.6Z" })
  ] });
}
function jo() {
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
function Xo() {
  return /* @__PURE__ */ i("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", children: /* @__PURE__ */ g("g", { fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", color: "currentColor", children: [
    /* @__PURE__ */ i("path", { d: "M14.86 22h-4.312c-3.291 0-4.937 0-6.08-.798a4.2 4.2 0 0 1-.863-.805c-.855-1.066-.855-2.6-.855-5.67v-2.545c0-2.963 0-4.445.473-5.628c.761-1.903 2.37-3.403 4.41-4.113C8.9 2 10.49 2 13.667 2c1.816 0 2.723 0 3.448.252c1.166.406 2.085 1.263 2.52 2.35c.27.676.27 1.523.27 3.216V10" }),
    /* @__PURE__ */ i("path", { d: "M2.75 12c0-1.84 1.506-3.333 3.364-3.333c.672 0 1.464.116 2.117-.057a1.67 1.67 0 0 0 1.19-1.179c.174-.647.057-1.432.057-2.098C9.478 3.493 10.984 2 12.84 2m.002 16h2.523m-4.949-4.15c-.126-.8-.281-.801-1.61-.85h-1.01c-.557 0-1.009.448-1.009 1v3c0 .552.452 1 1.01 1h1.816c.39 0 .803-.313.803-.7v-1.1c0-.11-.113-.304-.224-.304H9.068M12.842 13h1.261m0 0h1.262m-1.262 0v4.875M21.251 13h-2.523c-.557 0-1.009.448-1.009 1v1.5m0 0V18m0-2.5h2.523" })
  ] }) });
}
function Yo() {
  return /* @__PURE__ */ i("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 20 20", children: /* @__PURE__ */ i("path", { fill: "currentColor", d: "M6.5 3a.75.75 0 0 1 .697.471l3 7.5a.75.75 0 0 1-1.393.557L7.992 9.5H5.008l-.811 2.028a.75.75 0 0 1-1.393-.556l3-7.5A.75.75 0 0 1 6.5 3m0 2.77L5.608 8h1.784zm8.28-1.55a.75.75 0 1 0-1.06 1.06l.72.72h-3.69a.75.75 0 0 0 0 1.5h3.69l-.72.72a.75.75 0 0 0 1.06 1.06l2-2a.75.75 0 0 0 0-1.06zm0 7.5a.75.75 0 1 0-1.06 1.06l.72.72H3.75a.75.75 0 0 0 0 1.5h10.69l-.72.72a.75.75 0 1 0 1.06 1.06l2-2a.75.75 0 0 0 0-1.06z" }) });
}
function Ko() {
  return /* @__PURE__ */ i("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 48 48", children: /* @__PURE__ */ g("g", { fill: "none", stroke: "currentColor", strokeWidth: "4", children: [
    /* @__PURE__ */ i("circle", { cx: "10", cy: "24", r: "4" }),
    /* @__PURE__ */ i("circle", { cx: "38", cy: "10", r: "4" }),
    /* @__PURE__ */ i("circle", { cx: "38", cy: "24", r: "4" }),
    /* @__PURE__ */ i("circle", { cx: "38", cy: "38", r: "4" }),
    /* @__PURE__ */ i("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M34 38H22V10h12M14 24h20" })
  ] }) });
}
function Zo() {
  return /* @__PURE__ */ i("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 20 20", children: /* @__PURE__ */ i("path", { fill: "currentColor", d: "M13.5 3a.75.75 0 0 0-.697.471l-3 7.5a.75.75 0 0 0 1.393.557l.812-2.028h2.984l.811 2.028a.75.75 0 0 0 1.393-.556l-3-7.5A.75.75 0 0 0 13.5 3m0 2.77L14.392 8h-1.784zM5.22 4.22a.75.75 0 0 1 1.06 1.06L5.56 6h3.69a.75.75 0 0 1 0 1.5H5.56l.72.72a.75.75 0 0 1-1.06 1.06l-2-2a.75.75 0 0 1 0-1.06zm0 7.5a.75.75 0 0 1 1.06 1.06l-.72.72h10.69a.75.75 0 0 1 0 1.5H5.56l.72.72a.75.75 0 1 1-1.06 1.06l-2-2a.75.75 0 0 1 0-1.06z" }) });
}
function Jo() {
  return /* @__PURE__ */ i("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", children: /* @__PURE__ */ i("path", { fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", d: "m3 21l7.548-7.548M21 3l-7.548 7.548m0 0L8 3H3l7.548 10.452m2.904-2.904L21 21h-5l-5.452-7.548", color: "currentColor" }) });
}
function Qo() {
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
const Br = {
  Bold: qn,
  LoaderCircle: Gn,
  Italic: Un,
  Underline: Fn,
  Quote: Wn,
  TextQuote: Po,
  Strikethrough: Vn,
  Minus: $n,
  Eraser: Bn,
  PaintRoller: _n,
  Redo2: Dn,
  Undo2: On,
  AlignCenter: Kn,
  AlignJustify: Yn,
  AlignLeft: Xn,
  AlignRight: jn,
  ChevronDown: Hn,
  Subscript: Pn,
  Superscript: Rn,
  Code: zn,
  Code2: En,
  Type: In,
  IndentIncrease: Ln,
  IndentDecrease: An,
  List: Mn,
  ListOrdered: Sn,
  ListTodo: kn,
  Link: Nn,
  ImageUp: Tn,
  Video: Cn,
  Maximize: yn,
  Minimize: bn,
  Table: vn,
  Sparkles: wn,
  Pencil: gr,
  Unlink: pn,
  BetweenHorizonalEnd: gn,
  BetweenHorizonalStart: fn,
  BetweenVerticalStart: xn,
  BetweenVerticalEnd: mn,
  TableCellsMerge: un,
  TableCellsSplit: hn,
  Trash2: fr,
  Trash: dn,
  Replace: We,
  ChevronsUpDown: ln,
  LineHeight: _o,
  Word: Do,
  Heading1: sn,
  Heading2: cn,
  Heading3: an,
  Heading4: on,
  Heading5: nn,
  Heading6: rn,
  Columns2: Fe,
  Columns3: en,
  Columns4: tn,
  Plus: xr,
  Grip: Qi,
  Copy: Ji,
  Clipboard: Zi,
  PanelLeft: Ki,
  PanelRight: Yi,
  Columns: Fe,
  Iframe: Xi,
  MenuDown: Bo,
  SizeS: Wo,
  SizeM: Vo,
  SizeL: $o,
  AspectRatio: Ro,
  Emoji: ji,
  DeleteColumn: Ho,
  DeleteRow: Oo,
  SearchAndReplace: We,
  EmojiIcon: qi,
  KatexIcon: Gi,
  ExportPdf: qo,
  ExportWord: jo,
  ImportWord: Qo,
  ColumnAddLeft: Fo,
  ColumnAddRight: Uo,
  BookMarked: Ui,
  ZoomIn: Fi,
  ZoomOut: Wi,
  Settings: Vi,
  Eye: $i,
  TextDirection: Go,
  LeftToRight: Yo,
  RightToLeft: Zo,
  Attachment: Bi,
  GifIcon: Xo,
  ChevronUp: _i,
  Crop: Di,
  Mermaid: Ko,
  Twitter: Jo,
  FlipX: Oi,
  FlipY: Hi,
  PencilRuler: Pi,
  WrapText: Ri
};
function ta({ fill: t }) {
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
function ea(t) {
  const [e, r] = M(void 0);
  function n(c) {
    var l;
    (l = t.action) == null || l.call(t, c);
  }
  function a() {
    var c;
    (c = t.action) == null || c.call(t, e);
  }
  const o = D(
    Ae((c) => {
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
        children: /* @__PURE__ */ i("span", { className: "richtext-flex richtext-items-center richtext-justify-center richtext-text-sm", children: /* @__PURE__ */ i(ta, { fill: e }) })
      }
    ),
    /* @__PURE__ */ i(
      Fc,
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
function ra(t) {
  const { t: e } = X(), [r, n] = M({
    text: "",
    link: ""
  }), [a, o] = M(!1);
  $(() => {
    var l;
    if (t != null && t.editor) {
      const { href: s, target: d } = (l = t.editor) == null ? void 0 : l.getAttributes("link"), { from: h, to: u } = t.editor.state.selection, m = t.editor.state.doc.textBetween(h, u, " ");
      n({
        link: s,
        text: m
      }), o(d === "_blank");
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
            Ar,
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
function ia(t, e, r = null) {
  return r ? t.createChecked({ index: e }, r) : t.createAndFill({ index: e });
}
function na(t) {
  if (t.cached.columnsNodeTypes)
    return t.cached.columnsNodeTypes;
  const e = {
    columns: t.nodes.columns,
    column: t.nodes.column
  };
  return t.cached.columnsNodeTypes = e, e;
}
function oa(t, e, r = null) {
  const n = na(t), a = [];
  for (let o = 0; o < e; o += 1) {
    const c = ia(n.column, o, r);
    c && a.push(c);
  }
  return n.columns.createChecked({ cols: e }, a);
}
function fe({
  state: t,
  dispatch: e,
  type: r
}) {
  const n = Zt((o) => o.type.name === ie.name)(t.selection), a = Zt((o) => o.type.name === $r.name)(t.selection);
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
    const d = bi.fromJSON(t.schema, l);
    let h = n.pos;
    d.content.forEach((m, x, w) => {
      w < s && (h += m.nodeSize);
    });
    const u = t.tr.setTime(Date.now());
    u.replaceWith(n.pos, n.pos + n.node.nodeSize, d).setSelection(
      Ot.near(u.doc.resolve(h))
    ), e(u);
  }
  return !0;
}
function je({ state: t, dispatch: e, type: r }) {
  const n = Zt((o) => o.type.name === ie.name)(t.selection), a = Zt((o) => o.type.name === $r.name)(t.selection);
  if (e && n && a) {
    const o = n.node, c = a.node.attrs.index;
    let l = 0;
    r === "before" ? l = (c - 1 + o.attrs.cols) % o.attrs.cols : l = (c + 1) % o.attrs.cols;
    let s = n.pos;
    o.content.forEach((h, u, m) => {
      m < l && (s += h.nodeSize);
    });
    const d = t.tr.setTime(Date.now());
    return d.setSelection(Ot.near(d.doc.resolve(s))), e(d), !0;
  }
  return !1;
}
const aa = 200, ie = St.create({
  name: "columns",
  group: "block",
  defining: !0,
  isolating: !0,
  allowGapCursor: !1,
  content: "column{1,}",
  priority: aa,
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
    return ["div", lt(this.options.HTMLAttributes, t), 0];
  },
  addCommands() {
    return {
      insertColumns: (t) => ({ tr: e, dispatch: r, editor: n }) => {
        const a = oa(n.schema, t && t.cols || 3);
        if (r) {
          const o = e.selection.anchor + 1;
          e.replaceSelectionWith(a).scrollIntoView().setSelection(Ot.near(e.doc.resolve(o)));
        }
        return !0;
      },
      addColBefore: () => ({ dispatch: t, state: e }) => fe({ dispatch: t, state: e, type: "addBefore" }),
      addColAfter: () => ({ dispatch: t, state: e }) => fe({ dispatch: t, state: e, type: "addAfter" }),
      deleteCol: () => ({ dispatch: t, state: e }) => fe({ dispatch: t, state: e, type: "delete" })
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-Alt-G": () => this.editor.commands.insertColumns(),
      Tab: () => je({
        state: this.editor.state,
        dispatch: this.editor.view.dispatch,
        type: "after"
      }),
      "Shift-Tab": () => je({
        state: this.editor.state,
        dispatch: this.editor.view.dispatch,
        type: "before"
      })
    };
  }
}), $r = St.create({
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
    return ["div", lt(this.options.HTMLAttributes, t), 0];
  }
});
var Ce = /* @__PURE__ */ ((t) => (t[t.max = 7] = "max", t[t.min = 0] = "min", t[t.more = 1] = "more", t[t.less = -1] = "less", t))(Ce || {});
function ca(t, e, r) {
  return t < e ? e : t > r ? r : t;
}
function sa(t, e, r, n) {
  const { doc: a, selection: o } = t;
  if (!a || !o || !(o instanceof Ot || o instanceof yi))
    return t;
  const { from: c, to: l } = o;
  return a.nodesBetween(c, l, (s, d) => {
    const h = s.type;
    return r.includes(h.name) ? (t = Te(t, d, e), !1) : !di(s.type.name, n.extensionManager.extensions);
  }), t;
}
function Te(t, e, r) {
  if (!t.doc)
    return t;
  const n = t.doc.nodeAt(e);
  if (!n)
    return t;
  const c = ca((n.attrs.indent || 0) + r, 0, 7);
  if (c === n.attrs.indent)
    return t;
  const l = {
    ...n.attrs,
    indent: c
  };
  return t.setNodeMarkup(e, n.type, l, n.marks);
}
function Qs({ delta: t, types: e }) {
  return ({ state: r, dispatch: n, editor: a }) => {
    const { selection: o } = r;
    let { tr: c } = r;
    return c = c.setSelection(o), c = sa(c, t, e, a), c.docChanged ? (n && n(c), !0) : !1;
  };
}
const la = {
  setOpen: (t, e) => {
    ze(gt.UPLOAD_IMAGE(t), e);
  }
}, xt = rt.Root, ft = rt.Trigger, da = rt.Portal, Vr = W.forwardRef(({ className: t, ...e }, r) => /* @__PURE__ */ i(
  rt.Overlay,
  {
    ref: r,
    className: E(
      "richtext-fixed richtext-inset-0 richtext-z-50 richtext-bg-black/80 richtext- data-[state=open]:richtext-animate-in data-[state=closed]:richtext-animate-out data-[state=closed]:richtext-fade-out-0 data-[state=open]:richtext-fade-in-0",
      t
    ),
    ...e
  }
));
Vr.displayName = rt.Overlay.displayName;
const dt = W.forwardRef(({ className: t, children: e, ...r }, n) => /* @__PURE__ */ g(da, { children: [
  /* @__PURE__ */ i(Vr, {}),
  /* @__PURE__ */ g(
    rt.Content,
    {
      ref: n,
      className: E(
        "richtext-dialog-content richtext-fixed richtext-left-[50%] richtext-top-[50%] richtext-z-50 richtext-grid richtext-w-full richtext-max-w-lg richtext-translate-x-[-50%] richtext-translate-y-[-50%] richtext-gap-4 richtext-border richtext-bg-background richtext-p-6 richtext-shadow-lg richtext-duration-200 data-[state=open]:richtext-animate-in data-[state=closed]:richtext-animate-out data-[state=closed]:richtext-fade-out-0 data-[state=open]:richtext-fade-in-0 data-[state=closed]:richtext-zoom-out-95 data-[state=open]:richtext-zoom-in-95 data-[state=closed]:richtext-slide-out-to-left-1/2 data-[state=closed]:richtext-slide-out-to-top-[48%] data-[state=open]:richtext-slide-in-from-left-1/2 data-[state=open]:richtext-slide-in-from-top-[48%] sm:richtext-rounded-lg",
        t
      ),
      ...r,
      children: [
        e,
        /* @__PURE__ */ g(rt.Close, { className: "richtext-absolute richtext-right-4 richtext-top-4 richtext-rounded-sm richtext-opacity-70 richtext-ring-offset-background richtext-transition-opacity hover:richtext-opacity-100 focus:richtext-outline-none focus:richtext-ring-2 focus:richtext-ring-ring focus:richtext-ring-offset-2 disabled:richtext-pointer-events-none data-[state=open]:richtext-bg-accent data-[state=open]:richtext-text-muted-foreground", children: [
          /* @__PURE__ */ i(mr, { className: "richtext-h-4 richtext-w-4" }),
          /* @__PURE__ */ i("span", { className: "richtext-sr-only", children: "Close" })
        ] })
      ]
    }
  )
] }));
dt.displayName = rt.Content.displayName;
function Wr({
  className: t,
  ...e
}) {
  return /* @__PURE__ */ i(
    "div",
    {
      className: E(
        "richtext-flex richtext-flex-col richtext-space-y-1.5 richtext-text-center sm:richtext-text-left",
        t
      ),
      ...e
    }
  );
}
Wr.displayName = "DialogHeader";
function yt({
  className: t,
  ...e
}) {
  return /* @__PURE__ */ i(
    "div",
    {
      className: E(
        "richtext-flex richtext-flex-col-reverse sm:richtext-flex-row sm:richtext-justify-end sm:richtext-space-x-2",
        t
      ),
      ...e
    }
  );
}
yt.displayName = "DialogFooter";
const ht = W.forwardRef(({ className: t, ...e }, r) => /* @__PURE__ */ i(
  rt.Title,
  {
    ref: r,
    className: E(
      "richtext-text-lg richtext-font-semibold richtext-leading-none richtext-tracking-tight",
      t
    ),
    ...e
  }
));
ht.displayName = rt.Title.displayName;
const ha = W.forwardRef(({ className: t, ...e }, r) => /* @__PURE__ */ i(
  rt.Description,
  {
    ref: r,
    className: E("richtext-text-sm richtext-text-muted-foreground", t),
    ...e
  }
));
ha.displayName = rt.Description.displayName;
function tl(t) {
  return t.replace(/^.*\/|\..+$/g, "");
}
function el(t) {
  return t.split(".").pop();
}
function rl(t) {
  return t < 1024 ? `${t} Byte` : t < 1024 * 1024 ? `${(t / 1024).toFixed(2)} KB` : `${(t / 1024 / 1024).toFixed(2)} MB`;
}
function il(t) {
  return t ? t === "application/pdf" ? "pdf" : t.startsWith("application/") && [".document", "word"].some((e) => t.includes(e)) ? "word" : t.startsWith("application/") && ["presentation"].some((e) => t.includes(e)) ? "excel" : t.startsWith("application/") && ["sheet"].some((e) => t.includes(e)) ? "ppt" : t.startsWith("image") ? "image" : t.startsWith("audio") ? "audio" : t.startsWith("video") ? "video" : "file" : "file";
}
function ua(t) {
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
function Bt(t, e) {
  const r = t.split(","), n = r[0].match(/:(.*?);/)[1], a = atob(r[r.length - 1]);
  let o = a.length;
  const c = new Uint8Array(o);
  for (; o--; )
    c[o] = a.charCodeAt(o);
  return new File([c], e, { type: n });
}
function ma({ editor: t, imageInline: e, onClose: r }) {
  const { t: n } = X(), [a, o] = M(!1), c = Xt.useRef(null), [l, s] = Xt.useState(), [d, h] = Xt.useState(""), u = J(null), [m, x] = M({
    src: "",
    file: null
  });
  function w(y) {
    if (c.current && y.width && y.height) {
      const b = p(c.current, y);
      h(b);
    }
  }
  function p(y, b) {
    const S = document.createElement("canvas"), z = y.naturalWidth / y.width, L = y.naturalHeight / y.height;
    S.width = b.width * z, S.height = b.height * L;
    const C = S.getContext("2d");
    return C && (C.imageSmoothingEnabled = !1, C.drawImage(
      y,
      b.x * z,
      b.y * L,
      b.width * z,
      b.height * L,
      0,
      0,
      b.width * z,
      b.height * L
    )), S.toDataURL("image/png", 1);
  }
  async function f() {
    var y, b;
    try {
      const S = Bt(d, ((y = m == null ? void 0 : m.file) == null ? void 0 : y.name) || "image.png"), z = (b = t.extensionManager.extensions.find(
        (C) => C.name === Ht.name
      )) == null ? void 0 : b.options;
      let L = "";
      z.upload ? L = await z.upload(S) : L = URL.createObjectURL(S), t.chain().focus().setImageInline({ src: L, inline: e }).run(), o(!1), x({
        src: "",
        file: null
      }), r();
    } catch (S) {
      console.log("Error cropping image", S);
    }
  }
  function P(y) {
    var b;
    y.preventDefault(), (b = u.current) == null || b.click();
  }
  const N = async (y) => {
    var L;
    const b = (L = y == null ? void 0 : y.target) == null ? void 0 : L.files;
    if (!t || t.isDestroyed || b.length === 0)
      return;
    const S = b[0], z = await ua(S);
    o(!0), x({
      src: z.src,
      file: S
    });
  };
  return /* @__PURE__ */ g(V, { children: [
    /* @__PURE__ */ i(
      G,
      {
        className: "richtext-mt-1 richtext-w-full",
        onClick: P,
        size: "sm",
        children: n("editor.image.dialog.tab.uploadCrop")
      }
    ),
    /* @__PURE__ */ g(xt, { open: a, children: [
      /* @__PURE__ */ i(ft, {}),
      /* @__PURE__ */ g(dt, { children: [
        /* @__PURE__ */ i(ht, { children: n("editor.image.dialog.tab.uploadCrop") }),
        /* @__PURE__ */ i("div", { children: m.src && /* @__PURE__ */ i(
          eo,
          {
            className: "richtext-w-full",
            crop: l,
            onChange: (y) => s(y),
            onComplete: (y) => w(y),
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
        /* @__PURE__ */ g(yt, { children: [
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
function xa(t) {
  var w;
  const { t: e } = X(), [r, n] = M(!1), a = (p) => {
    n(p.detail);
  }, [o, c] = M(""), l = J(null), [s, d] = M(((w = t.editor.extensionManager.extensions.find(
    (p) => p.name === Ht.name
  )) == null ? void 0 : w.options.defaultInline) || !1), h = U(() => {
    var f;
    return (f = t.editor.extensionManager.extensions.find(
      (P) => P.name === Ht.name
    )) == null ? void 0 : f.options;
  }, [t.editor]);
  $(() => {
    const p = re(gt.UPLOAD_IMAGE(t.editor.id), a);
    return () => {
      p();
    };
  }, []);
  async function u(p) {
    var y;
    const f = (y = p == null ? void 0 : p.target) == null ? void 0 : y.files;
    if (!t.editor || t.editor.isDestroyed || f.length === 0)
      return;
    const P = f[0];
    let N = "";
    h.upload ? N = await h.upload(P) : N = URL.createObjectURL(P), t.editor.chain().focus().setImageInline({ src: N, inline: s }).run(), n(!1), d(!1);
  }
  function m(p) {
    p.preventDefault(), p.stopPropagation(), t.editor.chain().focus().setImageInline({ src: o, inline: s }).run(), n(!1), d(!1), c("");
  }
  function x(p) {
    var f;
    p.preventDefault(), (f = l.current) == null || f.click();
  }
  return /* @__PURE__ */ g(
    xt,
    {
      onOpenChange: n,
      open: r,
      children: [
        /* @__PURE__ */ i(ft, { asChild: !0, children: /* @__PURE__ */ i(
          O,
          {
            action: () => n(!0),
            icon: t.icon,
            tooltip: t.tooltip
          }
        ) }),
        /* @__PURE__ */ g(dt, { children: [
          /* @__PURE__ */ i(ht, { children: e("editor.image.dialog.title") }),
          /* @__PURE__ */ g(
            Lr,
            {
              activationMode: "manual",
              defaultValue: h.resourceImage === "both" || h.resourceImage === "upload" ? "upload" : "link",
              children: [
                /* @__PURE__ */ g(Re, { className: "richtext-grid richtext-w-full richtext-grid-cols-2", children: [
                  h.resourceImage === "both" || h.resourceImage === "upload" ? /* @__PURE__ */ i(Rt, { value: "upload", children: e("editor.image.dialog.tab.upload") }) : /* @__PURE__ */ i(V, {}),
                  h.resourceImage === "both" || h.resourceImage === "link" ? /* @__PURE__ */ i(Rt, { value: "link", children: e("editor.image.dialog.tab.url") }) : /* @__PURE__ */ i(V, {})
                ] }),
                /* @__PURE__ */ g("div", { className: "richtext-my-[10px] richtext-flex richtext-items-center richtext-gap-[4px]", children: [
                  /* @__PURE__ */ i(
                    _r,
                    {
                      checked: s,
                      onCheckedChange: (p) => {
                        d(p);
                      }
                    }
                  ),
                  /* @__PURE__ */ i(ct, { children: e("editor.link.dialog.inline") })
                ] }),
                /* @__PURE__ */ g(Pt, { value: "upload", children: [
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
                      ma,
                      {
                        editor: t.editor,
                        imageInline: s,
                        onClose: () => la.setOpen(t.editor.id, !1)
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
                /* @__PURE__ */ i(Pt, { value: "link", children: /* @__PURE__ */ i("form", { onSubmit: m, children: /* @__PURE__ */ g("div", { className: "richtext-flex richtext-items-center richtext-gap-2", children: [
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
const Ft = {
  TOP_LEFT: "tl",
  TOP_RIGHT: "tr",
  BOTTOM_LEFT: "bl",
  BOTTOM_RIGHT: "br"
};
function fa(t) {
  var L, C;
  const [e, r] = M({
    width: ut,
    height: ut
  }), [n, a] = M({
    width: 0,
    height: 0
  }), [o] = M([
    Ft.TOP_LEFT,
    Ft.TOP_RIGHT,
    Ft.BOTTOM_LEFT,
    Ft.BOTTOM_RIGHT
  ]), [c, l] = M(!1), [s, d] = M({
    x: 0,
    y: 0,
    w: 0,
    h: 0,
    dir: ""
  }), { align: h, inline: u } = (L = t == null ? void 0 : t.node) == null ? void 0 : L.attrs, m = U(() => {
    var nt;
    const { src: A, alt: v, width: T, height: _, flipX: H, flipY: R } = (nt = t == null ? void 0 : t.node) == null ? void 0 : nt.attrs, k = te(T) ? `${T}px` : T, B = te(_) ? `${_}px` : _, F = [];
    H && F.push("rotateX(180deg)"), R && F.push("rotateY(180deg)");
    const Y = F.join(" ");
    return {
      src: A || void 0,
      alt: v || void 0,
      style: {
        width: k || void 0,
        height: B || void 0,
        transform: Y || "none"
      }
    };
  }, [(C = t == null ? void 0 : t.node) == null ? void 0 : C.attrs]), x = U(() => {
    const {
      style: { width: A }
    } = m;
    return { width: A === "100%" ? A : void 0 };
  }, [m]);
  function w(A) {
    a({
      width: A.target.width,
      height: A.target.height
    });
  }
  function p() {
    const { editor: A, getPos: v } = t;
    A.commands.setNodeSelection(v());
  }
  const f = D(
    st(() => {
      const { editor: A } = t, { width: v } = getComputedStyle(A.view.dom);
      r((T) => ({
        ...T,
        width: Number.parseInt(v, 10)
      }));
    }, mt),
    [t == null ? void 0 : t.editor]
  );
  function P(A, v) {
    A.preventDefault(), A.stopPropagation();
    const T = n.width, _ = n.height, H = T / _;
    let R = Number(t.node.attrs.width), k = Number(t.node.attrs.height);
    const B = e.width;
    R && !k ? (R = R > B ? B : R, k = Math.round(R / H)) : k && !R ? (R = Math.round(k * H), R = R > B ? B : R) : !R && !k ? (R = T > B ? B : T, k = Math.round(R / H)) : R = R > B ? B : R, l(!0), d({
      x: A.clientX,
      y: A.clientY,
      w: R,
      h: k,
      dir: v
    });
  }
  const N = D(
    st((A) => {
      if (A.preventDefault(), A.stopPropagation(), !c)
        return;
      const { x: v, w: T, dir: _ } = s, H = (A.clientX - v) * (/l/.test(_) ? -1 : 1), R = hr(T + H, oe, e.width);
      t.updateAttributes({
        width: R,
        height: null
      });
    }, mt),
    [c, s, e, t.updateAttributes]
  ), y = D(
    (A) => {
      A.preventDefault(), A.stopPropagation(), c && (d({
        x: 0,
        y: 0,
        w: 0,
        h: 0,
        dir: ""
      }), l(!1), p());
    },
    [c, p]
  ), b = D(() => {
    document == null || document.addEventListener("mousemove", N, !0), document == null || document.addEventListener("mouseup", y, !0);
  }, [N, y]), S = D(() => {
    document == null || document.removeEventListener("mousemove", N, !0), document == null || document.removeEventListener("mouseup", y, !0);
  }, [N, y]);
  $(() => (c ? b() : S(), () => {
    S();
  }), [c, b, S]);
  const z = U(() => new ResizeObserver(() => f()), [f]);
  return $(() => (z.observe(t.editor.view.dom), () => {
    z.disconnect();
  }), [t.editor.view.dom, z]), /* @__PURE__ */ i(
    pt,
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
            (t == null ? void 0 : t.editor.view.editable) && ((t == null ? void 0 : t.selected) || c) && /* @__PURE__ */ i("div", { className: "image-resizer", children: o == null ? void 0 : o.map((A) => /* @__PURE__ */ i(
              "span",
              {
                className: `image-resizer__handler image-resizer__handler--${A}`,
                onMouseDown: (v) => P(v, A)
              },
              `image-dir-${A}`
            )) })
          ]
        }
      )
    }
  );
}
const kt = new Le("upload-image");
function ga() {
  return new Ie({
    key: kt,
    state: {
      init() {
        return Ti.empty;
      },
      apply(t, e) {
        e = e.map(t.mapping, t.doc);
        const r = t.getMeta(kt);
        if (r != null && r.add)
          for (const { id: n, pos: a, src: o } of r.add) {
            const c = pa(o), l = Ci.widget(a, c, { id: n });
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
function pa(t) {
  const e = document.createElement("div"), r = document.createElement("img");
  return r.setAttribute("class", "opacity-50"), r.src = t, r.addEventListener("load", () => {
    e.setAttribute("class", "img-placeholder");
  }), e.append(r), e;
}
function wa(t, e) {
  var a;
  const n = kt.getState(t).find(void 0, void 0, (o) => o.id === e);
  return n.length > 0 ? (a = n[0]) == null ? void 0 : a.from : null;
}
function va({ validateFn: t, onUpload: e, postUpload: r, defaultInline: n = !1 }) {
  return (a, o, c) => {
    for (const l of a) {
      if (t && !t(l))
        continue;
      const s = Date.now().toString(), d = o.state.tr;
      d.selection.empty || d.deleteSelection();
      const h = URL.createObjectURL(l);
      d.setMeta(kt, {
        add: [{ id: s, pos: c, src: h }]
      }), o.dispatch(d), e(l).then(
        async (u) => {
          var N;
          r && typeof u == "string" && (u = await r(u));
          const { schema: m } = o.state;
          let x = wa(o.state, s);
          if (x === null)
            return;
          const w = typeof u == "object" ? h : u, p = (N = m.nodes.image) == null ? void 0 : N.create({
            src: w,
            inline: n
          });
          if (!p)
            return;
          const { doc: f } = o.state;
          x > f.content.size && (x = f.content.size - 1);
          const P = o.state.tr.replaceWith(x, x, p).setMeta(kt, { remove: [s] });
          o.dispatch(P);
        },
        () => {
          const u = o.state.tr.delete(c, c).setMeta(kt, { remove: [s] });
          o.dispatch(u);
        }
      );
    }
  };
}
function ba(t, e, r) {
  var a;
  const n = [...((a = e.clipboardData) == null ? void 0 : a.files) || []];
  if (n.length > 0) {
    e.preventDefault();
    const o = t.state.selection.from;
    return r(n, t, o + 1), !0;
  }
  return !1;
}
function ya(t, e, r, n) {
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
const Ca = {
  acceptMimes: ["image/jpeg", "image/gif", "image/png", "image/jpg"],
  maxSize: 1024 * 1024 * 5,
  // 5MB
  resourceImage: "both",
  defaultInline: !1
}, Ht = ne.extend({
  group: "inline",
  inline: !0,
  defining: !0,
  draggable: !0,
  selectable: !0,
  addOptions() {
    var t;
    return {
      ...Ca,
      ...(t = this.parent) == null ? void 0 : t.call(this),
      upload: () => Promise.reject("Image Upload Function"),
      button: ({
        editor: e,
        extension: r,
        t: n
      }) => {
        var a, o;
        return {
          component: xa,
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
    return wt(fa);
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
        lt(
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
    const e = va({
      validateFn: (r) => !(!this.options.acceptMimes.includes(r.type) || r.size > this.options.maxSize),
      onUpload: this.options.upload,
      // postUpload: this.options.postUpload,
      defaultInline: this.options.defaultInline
    });
    return [
      new Ie({
        props: {
          handlePaste: (r, n) => !n.clipboardData || [...n.clipboardData.files || []].some((o) => o.type === "text/html") ? !1 : ba(r, n, e),
          handleDrop: (r, n, a, o) => (!(n instanceof DragEvent) || !n.dataTransfer || ya(r, n, o, e), !1)
        }
      }),
      ga()
    ];
  }
});
function Ta(t) {
  return /\.(?:mp4|webm|ogg|mov)$/i.test(t);
}
function Na(t) {
  const { t: e } = X(), [r, n] = M(""), a = J(null), [o, c] = M(""), [l, s] = M(!1), d = (w) => {
    s(w.detail);
  };
  $(() => {
    const w = re(gt.UPLOAD_VIDEO(t.editor.id), d);
    return () => {
      w();
    };
  }, []);
  const h = U(() => {
    var p;
    return (p = t.editor.extensionManager.extensions.find(
      (f) => f.name === Fr.name
    )) == null ? void 0 : p.options;
  }, [t.editor]);
  async function u(w) {
    var N;
    const p = (N = w == null ? void 0 : w.target) == null ? void 0 : N.files;
    if (!t.editor || t.editor.isDestroyed || p.length === 0)
      return;
    const f = p[0];
    let P = "";
    h.upload ? P = await h.upload(f) : P = URL.createObjectURL(f), t.editor.chain().focus().setVideo({
      src: P,
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
    xt,
    {
      onOpenChange: s,
      open: l,
      children: [
        /* @__PURE__ */ i(ft, { asChild: !0, children: /* @__PURE__ */ i(
          O,
          {
            action: () => s(!0),
            icon: t.icon,
            tooltip: t.tooltip
          }
        ) }),
        /* @__PURE__ */ g(dt, { children: [
          /* @__PURE__ */ i(ht, { children: e("editor.video.dialog.title") }),
          /* @__PURE__ */ g(
            Lr,
            {
              activationMode: "manual",
              defaultValue: (h == null ? void 0 : h.resourceVideo) === "both" || (h == null ? void 0 : h.resourceVideo) === "upload" ? "upload" : "link",
              children: [
                /* @__PURE__ */ g(Re, { className: "richtext-grid richtext-w-full richtext-grid-cols-2", children: [
                  ((h == null ? void 0 : h.resourceVideo) === "both" || (h == null ? void 0 : h.resourceVideo) === "upload") && /* @__PURE__ */ i(Rt, { value: "upload", children: e("editor.video.dialog.tab.upload") }),
                  ((h == null ? void 0 : h.resourceVideo) === "both" || (h == null ? void 0 : h.resourceVideo) === "link") && /* @__PURE__ */ i(Rt, { value: "link", children: e("editor.video.dialog.link") })
                ] }),
                /* @__PURE__ */ g(Pt, { value: "upload", children: [
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
                /* @__PURE__ */ g(Pt, { value: "link", children: [
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
                          if (!Ta(p)) {
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
function ka(t) {
  return t = t.replace("https://youtu.be/", "https://www.youtube.com/watch?v=").replace("watch?v=", "embed/"), t = t.replace("https://vimeo.com/", "https://player.vimeo.com/video/"), /^https?:\/\/www.bilibili.com\/video\/.*/i.test(t) && (t = t.replace(/\?.*$/, "").replace("https://www.bilibili.com/video/", "https://player.bilibili.com/player.html?bvid=")), t.includes("drive.google.com") && (t = t.replace("/view", "/preview")), t;
}
const Fr = St.create({
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
      width: pe["size-medium"],
      HTMLAttributes: {
        class: "iframe-wrapper",
        style: "display: flex;justify-content: center;"
      },
      button: ({ editor: t, t: e }) => {
        var r, n;
        return {
          component: Na,
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
          src: t ? ka(t) : null
        })
      },
      width: {
        default: this.options.width,
        renderHTML: ({ width: t }) => ({
          width: uo(t)
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
}), Sa = "_wrap_5y04w_1", Ma = "_innerWrap_5y04w_15", Xe = {
  wrap: Sa,
  innerWrap: Ma
};
function Aa({ editor: t, node: e, updateAttributes: r }) {
  const n = ao(), { url: a, width: o, height: c } = e.attrs, [l, s] = M("");
  function d() {
    l && t.chain().updateAttributes(Tt.name, {
      url: l
    }).setNodeSelection(t.state.selection.from).focus().run();
  }
  const h = D(
    (u) => {
      r({ width: u.width, height: u.height });
    },
    [r]
  );
  return /* @__PURE__ */ g(pt, { children: [
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
          onClick: d,
          children: "OK"
        }
      )
    ] }),
    a && /* @__PURE__ */ i(
      Zn,
      {
        size: { width: Number.parseInt(o), height: Number.parseInt(c) },
        onResizeStop: (u, m, x, w) => {
          h({
            width: Number.parseInt(o) + w.width,
            height: Number.parseInt(c) + w.height
          });
        },
        children: /* @__PURE__ */ i("div", { className: dr(Xe.wrap, "render-wrapper"), children: /* @__PURE__ */ i(
          "div",
          {
            className: Xe.innerWrap,
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
function ge(t, e = !1) {
  return (r) => {
    const n = t.startsWith("data-") ? t : `data-${t}`;
    let a = decodeURIComponent(r.getAttribute(n));
    if (a == null || typeof a == "string" && a === "null")
      try {
        const l = r.outerHTML.match(/([\S\s])+?="([\S\s])+?"/g);
        l && l.length > 0 && (a = (l.map((d) => d.trim()).reduce((d, h) => {
          const u = h.indexOf("="), m = [h.slice(0, u), h.slice(u + 1).slice(1, -1)];
          return d[m[0]] = m[1], d;
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
const Tt = St.create({
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
        parseHTML: ge("width")
      },
      height: {
        default: 300,
        parseHTML: ge("height")
      },
      url: {
        default: null,
        parseHTML: ge("url")
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
    return ["iframe", lt(this.options.HTMLAttributes, t)];
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
      sr({
        find: /^\$iframe\$$/,
        type: this.type,
        getAttributes: () => ({ width: "100%" })
      })
    ];
  },
  addNodeView() {
    return wt(Aa);
  }
}), $t = W.forwardRef(
  ({ className: t, ...e }, r) => /* @__PURE__ */ i(
    "textarea",
    {
      className: E(
        "richtext-flex richtext-min-h-[80px] richtext-w-full richtext-rounded-md !richtext-border richtext-border-input richtext-bg-background richtext-px-3 richtext-py-2 richtext-text-sm richtext-ring-offset-background placeholder:richtext-text-muted-foreground focus-visible:richtext-outline-none focus-visible:richtext-ring-2 focus-visible:richtext-ring-ring focus-visible:richtext-ring-offset-2 disabled:richtext-cursor-not-allowed disabled:richtext-opacity-50",
        t
      ),
      ref: r,
      ...e
    }
  )
);
$t.displayName = "Textarea";
function La(t) {
  return t;
}
function Vt(t, e, r, n) {
  const a = La, [o, c] = M(a(r)), l = J(o);
  return $(() => {
    const s = () => {
      const d = { ...r, ...t.getAttributes(e) };
      Object.keys(d).forEach((u) => {
        (d[u] === null || d[u] === void 0) && (d[u] = r ? r[u] : null);
      });
      const h = a(d);
      Ni(l.current, h) || (c(h), l.current = h);
    };
    return t.on("selectionUpdate", s), t.on("transaction", s), () => {
      t.off("selectionUpdate", s), t.off("transaction", s);
    };
  }, [t, r, e, a]), o;
}
function Ia({ editor: t, ...e }) {
  const { t: r } = X(), n = Vt(t, Nt.name, {
    text: "",
    defaultShowPicker: !1
  }), { text: a, defaultShowPicker: o } = n, [c, l] = M(""), s = D(() => {
    t.chain().focus().setKatex({ text: c }).run(), l("");
  }, [t, c]);
  $(() => {
    o && t.chain().updateAttributes(Nt.name, { defaultShowPicker: !1 }).focus().run();
  }, [t, o]);
  const d = U(() => {
    try {
      return Ee.renderToString(`${c}`);
    } catch {
      return c;
    }
  }, [c]), h = U(
    () => `${c}`.trim() ? /* @__PURE__ */ i(
      "span",
      {
        contentEditable: !1,
        dangerouslySetInnerHTML: { __html: d || "" }
      }
    ) : null,
    [c, d]
  );
  return /* @__PURE__ */ g(Mt, { modal: !0, children: [
    /* @__PURE__ */ i(At, { asChild: !0, children: /* @__PURE__ */ i(
      O,
      {
        icon: e == null ? void 0 : e.icon,
        tooltip: e == null ? void 0 : e.tooltip
      }
    ) }),
    /* @__PURE__ */ g(
      bt,
      {
        align: "start",
        className: "richtext-size-full richtext-p-2",
        hideWhenDetached: !0,
        side: "bottom",
        children: [
          /* @__PURE__ */ i(ct, { className: "richtext-mb-[6px]", children: r("editor.formula.dialog.text") }),
          /* @__PURE__ */ i("div", { className: "richtext-mb-[16px] richtext-flex richtext-w-full richtext-max-w-sm richtext-items-center richtext-gap-1.5", children: /* @__PURE__ */ i("div", { className: "richtext-relative richtext-w-full richtext-max-w-sm", children: /* @__PURE__ */ i(
            $t,
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
          h && /* @__PURE__ */ i("div", { className: "richtext-my-[10px] richtext-max-w-[286px] richtext-overflow-auto richtext-whitespace-nowrap richtext-rounded-[6px] !richtext-border richtext-p-[10px]", children: h }),
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
                children: /* @__PURE__ */ i(pr, { size: 16 })
              }
            )
          ] })
        ]
      }
    )
  ] });
}
function Ea() {
  const [t] = Nr((e) => e.value);
  return t;
}
const za = {
  setTheme: (t, e) => {
    ze(gt.UPDATE_THEME(t), e);
  }
};
function Ra(t, e = 1) {
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
function Pa({ node: t }) {
  const e = Ea(), { text: r } = t.attrs, n = U(() => {
    const c = "rgb(254, 242, 237)";
    return e === "dark" ? Ra(c, 0.75) : c;
  }, [e]), a = U(() => {
    try {
      return Ee.renderToString(`${r}`);
    } catch {
      return r;
    }
  }, [r]), o = U(
    () => r.trim() ? /* @__PURE__ */ i("span", { contentEditable: !1, dangerouslySetInnerHTML: { __html: a } }) : /* @__PURE__ */ i("span", { contentEditable: !1, children: "Not enter a formula" }),
    [r, a]
  );
  return /* @__PURE__ */ i(
    pt,
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
function Ha(t) {
  return (e) => e.getAttribute(t);
}
const Nt = St.create({
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
        component: Ia,
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
        parseHTML: Ha("text")
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
    return ["span", lt(this.options && this.options.HTMLAttributes || {}, t)];
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
      sr({
        find: /^\$katex\$$/,
        type: this.type,
        getAttributes: () => ({ defaultShowPicker: !0 })
      })
    ];
  },
  addNodeView() {
    return wt(Pa);
  }
});
function Oa({ selectImage: t, giphyApiKey: e, children: r }) {
  const [n, a] = M([]), [o] = M(15), c = J(null), l = (d, h = "search") => {
    if (!e)
      return;
    const m = `${h === "search" ? `https://api.giphy.com/v1/gifs/search?q=${d}` : `https://api.giphy.com/v1/gifs/trending?q=${d}`}&limit=${o}&api_key=${e}`;
    fetch(m).then((x) => x.json()).then((x) => {
      a(x.data);
    }).catch((x) => {
      console.log(x);
    });
  };
  $(() => {
    l("", "trend");
  }, []);
  const s = D(
    Ae((d) => {
      if (!d.target.value) {
        l("", "trend");
        return;
      }
      l(d.target.value);
    }, 350),
    // Adjust the debounce delay as needed
    []
  );
  return /* @__PURE__ */ g(Mt, { modal: !0, children: [
    /* @__PURE__ */ i(At, { asChild: !0, children: r }),
    /* @__PURE__ */ i(
      bt,
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
          /* @__PURE__ */ i("div", { className: "richtext-max-h-[280px] richtext-overflow-y-auto", children: /* @__PURE__ */ i("div", { className: "richtext-grid richtext-grid-cols-2 richtext-gap-1 ", children: n != null && n.length ? n == null ? void 0 : n.map((d) => /* @__PURE__ */ i(
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
          )) : /* @__PURE__ */ i("p", { children: "No GIFs found" }) }) })
        ] }) : /* @__PURE__ */ i("div", { children: /* @__PURE__ */ i("p", { children: "Missing Giphy API Key" }) })
      }
    )
  ] });
}
function Da({ editor: t, icon: e, giphyApiKey: r, ...n }) {
  return /* @__PURE__ */ i(
    Oa,
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
const Ut = {
  TOP_LEFT: "tl",
  TOP_RIGHT: "tr",
  BOTTOM_LEFT: "bl",
  BOTTOM_RIGHT: "br"
};
function _a(t) {
  var z, L;
  const [e, r] = M({
    width: ut,
    height: ut
  }), [n, a] = M({
    width: 0,
    height: 0
  }), [o] = M([
    Ut.TOP_LEFT,
    Ut.TOP_RIGHT,
    Ut.BOTTOM_LEFT,
    Ut.BOTTOM_RIGHT
  ]), [c, l] = M(!1), [s, d] = M({
    x: 0,
    y: 0,
    w: 0,
    h: 0,
    dir: ""
  }), { align: h } = (z = t == null ? void 0 : t.node) == null ? void 0 : z.attrs, u = U(() => {
    var R;
    const { src: C, alt: A, width: v, height: T } = (R = t == null ? void 0 : t.node) == null ? void 0 : R.attrs, _ = te(v) ? `${v}px` : v, H = te(T) ? `${T}px` : T;
    return {
      src: C || void 0,
      alt: A || void 0,
      style: {
        width: _ || void 0,
        height: H || void 0
      }
    };
  }, [(L = t == null ? void 0 : t.node) == null ? void 0 : L.attrs]), m = U(() => {
    const {
      style: { width: C }
    } = u;
    return { width: C === "100%" ? C : void 0 };
  }, [u]);
  function x(C) {
    a({
      width: C.target.width,
      height: C.target.height
    });
  }
  function w() {
    const { editor: C, getPos: A } = t;
    C.commands.setNodeSelection(A());
  }
  const p = D(
    st(() => {
      const { editor: C } = t, { width: A } = getComputedStyle(C.view.dom);
      r((v) => ({
        ...v,
        width: Number.parseInt(A, 10)
      }));
    }, mt),
    [t == null ? void 0 : t.editor]
  );
  function f(C, A) {
    C.preventDefault(), C.stopPropagation();
    const v = n.width, T = n.height, _ = v / T;
    let H = Number(t.node.attrs.width), R = Number(t.node.attrs.height);
    const k = e.width;
    H && !R ? (H = H > k ? k : H, R = Math.round(H / _)) : R && !H ? (H = Math.round(R * _), H = H > k ? k : H) : !H && !R ? (H = v > k ? k : v, R = Math.round(H / _)) : H = H > k ? k : H, l(!0), d({
      x: C.clientX,
      y: C.clientY,
      w: H,
      h: R,
      dir: A
    });
  }
  const P = D(
    st((C) => {
      if (C.preventDefault(), C.stopPropagation(), !c)
        return;
      const { x: A, w: v, dir: T } = s, _ = (C.clientX - A) * (/l/.test(T) ? -1 : 1), H = hr(v + _, oe, e.width);
      t.updateAttributes({
        width: H,
        height: null
      });
    }, mt),
    [c, s, e, t.updateAttributes]
  ), N = D(
    (C) => {
      C.preventDefault(), C.stopPropagation(), c && (d({
        x: 0,
        y: 0,
        w: 0,
        h: 0,
        dir: ""
      }), l(!1), w());
    },
    [c, w]
  ), y = D(() => {
    document == null || document.addEventListener("mousemove", P, !0), document == null || document.addEventListener("mouseup", N, !0);
  }, [P, N]), b = D(() => {
    document == null || document.removeEventListener("mousemove", P, !0), document == null || document.removeEventListener("mouseup", N, !0);
  }, [P, N]);
  $(() => (c ? y() : b(), () => {
    b();
  }), [c, y, b]);
  const S = U(() => new ResizeObserver(() => p()), [p]);
  return $(() => (S.observe(t.editor.view.dom), () => {
    S.disconnect();
  }), [t.editor.view.dom, S]), /* @__PURE__ */ i(
    pt,
    {
      className: "image-view",
      style: { ...m, width: "100%", textAlign: h },
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
            (t == null ? void 0 : t.editor.view.editable) && ((t == null ? void 0 : t.selected) || c) && /* @__PURE__ */ i("div", { className: "image-resizer", children: o == null ? void 0 : o.map((C) => /* @__PURE__ */ i(
              "span",
              {
                className: `image-resizer__handler image-resizer__handler--${C}`,
                onMouseDown: (A) => f(A, C)
              },
              `image-dir-${C}`
            )) })
          ]
        }
      )
    }
  );
}
const Ur = ne.extend({
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
          component: Da,
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
    return wt(_a);
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
        lt(
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
function de(t = 8) {
  return Math.random().toString(36).substring(2, t + 2);
}
const Ye = `graph TB
a-->b`, Ba = ({ editor: t, upload: e }) => {
  const [r, n] = M(Ye), [a, o] = M(""), [c, l] = M(!1), s = J(null), d = async (m) => {
    try {
      const { svg: x } = await ee.render("mermaid-svg", m);
      o(x);
    } catch {
      o("");
    }
  }, h = () => {
    ee.initialize({
      darkMode: !1,
      startOnLoad: !1,
      // fontFamily:'',
      fontSize: 12,
      theme: "base"
    }), d(r);
  };
  return $(() => {
    c && h();
  }, [c]), $(() => {
    c && d(r);
  }, [r]), /* @__PURE__ */ g(
    xt,
    {
      onOpenChange: l,
      open: c,
      children: [
        /* @__PURE__ */ i(ft, { asChild: !0, children: /* @__PURE__ */ i(
          O,
          {
            action: () => l(!0),
            icon: "Mermaid",
            tooltip: "Mermaid"
          }
        ) }),
        /* @__PURE__ */ g(dt, { className: "richtext-z-[99999] !richtext-max-w-[1300px]", children: [
          /* @__PURE__ */ i(ht, { children: "Mermaid" }),
          /* @__PURE__ */ i("div", { style: { height: "100%", borderWidth: 1 }, children: /* @__PURE__ */ g("div", { className: "richtext-flex richtext-gap-[10px] richtext-rounded-[10px] richtext-p-[10px]", children: [
            /* @__PURE__ */ i(
              $t,
              {
                autoFocus: !0,
                className: "richtext-flex-1",
                defaultValue: Ye,
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
          /* @__PURE__ */ i(yt, { children: /* @__PURE__ */ i(
            G,
            {
              onClick: async () => {
                if (r !== "") {
                  if (r) {
                    const m = s.current.querySelector("svg"), { width: x, height: w } = m.getBoundingClientRect(), p = `mermaid-${de()}.svg`;
                    let f = ce(m.outerHTML);
                    if (e) {
                      const P = Bt(f, p);
                      f = await e(P);
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
}, Gt = {
  TOP_LEFT: "tl",
  TOP_RIGHT: "tr",
  BOTTOM_LEFT: "bl",
  BOTTOM_RIGHT: "br"
};
function $a({ editor: t, node: e, updateAttributes: r, getPos: n, selected: a }) {
  const [o, c] = M({
    width: ut,
    height: ut
  }), [l, s] = M({
    width: 0,
    height: 0
  }), [d] = M([
    Gt.TOP_LEFT,
    Gt.TOP_RIGHT,
    Gt.BOTTOM_LEFT,
    Gt.BOTTOM_RIGHT
  ]), [h, u] = M(!1), [m, x] = M({
    x: 0,
    y: 0,
    w: 0,
    h: 0,
    dir: ""
  }), { align: w } = e == null ? void 0 : e.attrs, p = U(() => {
    const { src: v, alt: T, width: _, height: H } = e == null ? void 0 : e.attrs, R = Jt(_) ? `${_}px` : _, k = Jt(H) ? `${H}px` : H;
    return {
      src: v || void 0,
      alt: T || void 0,
      style: {
        width: R || void 0,
        height: k || void 0
      }
    };
  }, [e == null ? void 0 : e.attrs]), f = U(() => {
    const {
      style: { width: v }
    } = p;
    return { width: v === "100%" ? v : void 0 };
  }, [p]);
  function P(v) {
    s({
      width: v.target.width,
      height: v.target.height
    });
  }
  function N() {
    t.commands.setNodeSelection(n());
  }
  const y = D(
    st(() => {
      const { width: v } = getComputedStyle(t.view.dom);
      c((T) => ({
        ...T,
        width: Number.parseInt(v, 10)
      }));
    }, mt),
    [t]
  );
  function b(v, T) {
    v.preventDefault(), v.stopPropagation();
    const _ = l.width, H = l.height, R = _ / H;
    let k = Number(e.attrs.width), B = Number(e.attrs.height);
    const F = o.width;
    k && !B ? (k = k > F ? F : k, B = Math.round(k / R)) : B && !k ? (k = Math.round(B * R), k = k > F ? F : k) : !k && !B ? (k = _ > F ? F : _, B = Math.round(k / R)) : k = k > F ? F : k, u(!0), x({
      x: v.clientX,
      y: v.clientY,
      w: k,
      h: B,
      dir: T
    });
  }
  const S = D(
    st((v) => {
      if (v.preventDefault(), v.stopPropagation(), !h)
        return;
      const { x: T, w: _, dir: H } = m, R = (v.clientX - T) * (/l/.test(H) ? -1 : 1), { width: k, height: B } = e == null ? void 0 : e.attrs, F = k / B, Y = kr(_ + R, oe, o.width), nt = Math.round(Y / F);
      r({
        width: Y,
        height: nt
      });
    }, mt),
    [h, m, o, r, e == null ? void 0 : e.attrs]
  ), z = D(
    (v) => {
      v.preventDefault(), v.stopPropagation(), h && (x({
        x: 0,
        y: 0,
        w: 0,
        h: 0,
        dir: ""
      }), u(!1), N());
    },
    [h, N]
  ), L = D(() => {
    document == null || document.addEventListener("mousemove", S, !0), document == null || document.addEventListener("mouseup", z, !0);
  }, [S, z]), C = D(() => {
    document == null || document.removeEventListener("mousemove", S, !0), document == null || document.removeEventListener("mouseup", z, !0);
  }, [S, z]);
  $(() => (h ? L() : C(), () => {
    C();
  }), [h, L, C]);
  const A = U(() => new ResizeObserver(() => y()), [y]);
  return $(() => (A.observe(t.view.dom), () => {
    A.disconnect();
  }), [t.view.dom, A]), /* @__PURE__ */ i(
    pt,
    {
      className: "image-view",
      style: { ...f, width: "100%", textAlign: w },
      children: /* @__PURE__ */ g(
        "div",
        {
          "data-drag-handle": !0,
          draggable: "true",
          style: { ...f, background: "#fff" },
          className: `image-view__body ${a ? "image-view__body--focused" : ""} ${h ? "image-view__body--resizing" : ""}`,
          children: [
            /* @__PURE__ */ i(
              "img",
              {
                alt: p.alt,
                className: "image-view__body__image block",
                height: "auto",
                onClick: N,
                onLoad: P,
                src: p.src,
                style: p.style
              }
            ),
            t.view.editable && (a || h) && /* @__PURE__ */ i("div", { className: "image-resizer", children: d == null ? void 0 : d.map((v) => /* @__PURE__ */ i(
              "span",
              {
                className: `image-resizer__handler image-resizer__handler--${v}`,
                onMouseDown: (T) => b(T, v)
              },
              `image-dir-${v}`
            )) })
          ]
        }
      )
    }
  );
}
const Ke = ne.extend({
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
          component: Ba,
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
    return wt($a);
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
        lt(
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
function Va({ node: t }) {
  var n;
  const e = ((n = t == null ? void 0 : t.attrs) == null ? void 0 : n.src) || "", r = e == null ? void 0 : e.split("/").pop();
  return r ? /* @__PURE__ */ i(pt, { children: /* @__PURE__ */ i("div", { "data-twitter": "", children: /* @__PURE__ */ i(ki, { id: r }) }) }) : null;
}
function Gr(t) {
  const { t: e } = X(), [r, n] = M("");
  $(() => {
    var o;
    if (t != null && t.editor) {
      const { src: c } = (o = t.editor) == null ? void 0 : o.getAttributes(Ne.name);
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
function Wa(t) {
  function e(r) {
    t.action && t.action(r);
  }
  return /* @__PURE__ */ g(Mt, { modal: !0, children: [
    /* @__PURE__ */ i(At, { disabled: t == null ? void 0 : t.disabled, asChild: !0, children: /* @__PURE__ */ i(
      O,
      {
        tooltip: t == null ? void 0 : t.tooltip,
        isActive: t == null ? void 0 : t.isActive,
        disabled: t == null ? void 0 : t.disabled,
        children: /* @__PURE__ */ i(K, { name: t == null ? void 0 : t.icon })
      }
    ) }),
    /* @__PURE__ */ i(bt, { hideWhenDetached: !0, className: "richtext-w-full", align: "start", side: "bottom", children: /* @__PURE__ */ i(Gr, { editor: t.editor, onSetLink: e }) })
  ] });
}
const Fa = /(https?:\/\/)?(www\.)?x\.com\/(\w{1,15})(\/status\/(\d+))?(\/\S*)?/g, Ua = /^https?:\/\/(www\.)?x\.com\/(\w{1,15})(\/status\/(\d+))?(\/\S*)?$/;
function Ze(t) {
  return t.match(Ua);
}
const Ne = St.create({
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
        component: Wa,
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
    return wt(Va, { attrs: this.options.HTMLAttributes });
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
      setTweet: (t) => ({ commands: e }) => Ze(t.src) ? e.insertContent({
        type: this.name,
        attrs: t
      }) : !1,
      updateTweet: (t) => ({ commands: e }) => Ze(t.src) ? e.updateAttributes(this.name, { src: t.src }) : !1
    };
  },
  addPasteRules() {
    return this.options.addPasteHandler ? [
      hi({
        find: Fa,
        type: this.type,
        getAttributes: (t) => ({ src: t.input })
      })
    ] : [];
  },
  renderHTML({ HTMLAttributes: t }) {
    return ["div", lt({ "data-twitter": "" }, t)];
  }
}), Ga = "_wrapper_rraz2_1", qa = "_tool_rraz2_17", ja = "_active_rraz2_37", Xa = "_pen_rraz2_41", Ya = "_line_rraz2_48", Ka = "_options_rraz2_56", Za = "_colorWrap_rraz2_66", Ja = "_color_rraz2_66", Qa = "_colorActive_rraz2_83", I = {
  wrapper: Ga,
  tool: qa,
  active: ja,
  pen: Xa,
  line: Ya,
  options: Ka,
  colorWrap: Za,
  color: Ja,
  colorActive: Qa
};
function tc(t) {
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
function ec(t) {
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
function rc(t) {
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
function ic(t) {
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
function nc(t) {
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
function oc(t) {
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
function ac(t) {
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
function cc(t) {
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
function sc(t) {
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
function lc(t) {
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
function dc(t) {
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
function hc(t) {
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
function uc(t) {
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
function mc(t) {
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
function xc(t) {
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
function fc(t) {
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
          d: "M12 20.325q-.35 0-.712-.125t-.638-.4l-1.725-1.575q-2.65-2.425-4.788-4.812T2 8.15Q2 5.8 3.575 4.225T7.5 2.65q1.325 0 2.5.562t2 1.538q.825-.975 2-1.537t2.5-.563q2.35 0 3.925 1.575T22 8.15q0 2.875-2.125 5.275T15.05 18.25l-1.7 1.55q-.275.275-.637.4t-.713.125M11.05 6.75q-.725-1.025-1.55-1.563t-2-.537q-1.5 0-2.5 1t-1 2.5q0 1.3.925 2.763t2.213 2.837t2.65 2.575T12 18.3q.85-.775 2.213-1.975t2.65-2.575t2.212-2.837T20 8.15q0-1.5-1-2.5t-2.5-1q-1.175 0-2 .538T12.95 6.75q-.175.25-.425.375T12 7.25t-.525-.125t-.425-.375m.95 4.725",
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
          d: "m7.625 6.4l2.8-3.625q.3-.4.713-.587T12 2t.863.188t.712.587l2.8 3.625l4.25 1.425q.65.2 1.025.738t.375 1.187q0 .3-.088.6t-.287.575l-2.75 3.9l.1 4.1q.025.875-.575 1.475t-1.4.6q-.05 0-.55-.075L12 19.675l-4.475 1.25q-.125.05-.275.063T6.975 21q-.8 0-1.4-.6T5 18.925l.1-4.125l-2.725-3.875q-.2-.275-.288-.575T2 9.75q0-.625.363-1.162t1.012-.763zM8.85 8.125L4 9.725L7.1 14.2L7 18.975l5-1.375l5 1.4l-.1-4.8L20 9.775l-4.85-1.65L12 4zM12 11.5",
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
function vc(t) {
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
const bc = [
  q.blackHighlight,
  q.ofRGBA(166 / 255, 81 / 255, 167 / 255, 0.3),
  q.ofRGBA(247 / 255, 78 / 255, 158 / 255, 0.3),
  q.ofRGBA(166 / 255, 83 / 255, 88 / 255, 0.3),
  q.ofRGBA(246 / 255, 130 / 255, 28 / 255, 0.3),
  q.ofRGBA(166 / 255, 198 / 255, 0, 0.3),
  q.ofRGBA(98 / 255, 186 / 255, 70 / 255, 0.3)
], Je = [
  q.black,
  q.fromHex("#007AFF"),
  q.fromHex("#A651A7"),
  q.fromHex("#F74E9E"),
  q.fromHex("#FF5358"),
  q.fromHex("#F6821C"),
  q.fromHex("#FFC600"),
  q.fromHex("#62BA46"),
  q.fromHex("#E6BFE8"),
  q.fromHex("#FEA3D2"),
  q.fromHex("#FFA0A3"),
  q.fromHex("#FBC276"),
  q.fromHex("#FFFB85"),
  q.fromHex("#AADC99")
];
function yc({ onChange: t }) {
  const [e, r] = M(q.blackHighlight);
  return /* @__PURE__ */ i("div", { className: I.colorWrap, children: bc.map((n, a) => /* @__PURE__ */ i(
    "button",
    {
      style: { backgroundColor: n.toHexString() },
      className: E(I.color, {
        [I.colorActive]: e.toHexString() === n.toHexString()
      }),
      onClick: () => {
        r(n), t(n);
      }
    },
    a
  )) });
}
function ke({ onChange: t }) {
  const [e, r] = M(q.black);
  return /* @__PURE__ */ g(V, { children: [
    /* @__PURE__ */ i("div", { className: I.colorWrap, children: Je.slice(0, 7).map((n, a) => /* @__PURE__ */ i(
      "button",
      {
        style: { backgroundColor: n.toHexString() },
        className: E(I.color, {
          [I.colorActive]: e.toHexString() === n.toHexString()
        }),
        onClick: () => {
          r(n), t(n);
        }
      },
      a
    )) }),
    /* @__PURE__ */ i("div", { className: I.colorWrap, children: Je.slice(7).map((n, a) => /* @__PURE__ */ i(
      "button",
      {
        style: { backgroundColor: n.toHexString() },
        className: E(I.color, {
          [I.colorActive]: e.toHexString() === n.toHexString()
        }),
        onClick: () => {
          r(n), t(n);
        }
      },
      a
    )) })
  ] });
}
function Cc({ setColorPen: t, setThicknessPen: e }) {
  const [r, n] = M(2);
  return /* @__PURE__ */ g("div", { className: I.options, children: [
    /* @__PURE__ */ i("div", { children: /* @__PURE__ */ i(
      ke,
      {
        onChange: (a) => t(a)
      }
    ) }),
    /* @__PURE__ */ i("div", { className: I.line }),
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
function Tc({ setColorHighlight: t }) {
  return /* @__PURE__ */ i("div", { className: I.options, children: /* @__PURE__ */ i(
    yc,
    {
      onChange: (e) => t(e)
    }
  ) });
}
function Nc({
  changeColorShape: t,
  changeBorderColorShape: e,
  onThicknessChange: r
}) {
  return /* @__PURE__ */ g("div", { className: I.options, children: [
    /* @__PURE__ */ i("div", { children: /* @__PURE__ */ i(
      ke,
      {
        onChange: (n) => t(n)
      }
    ) }),
    /* @__PURE__ */ i("div", { className: I.line }),
    /* @__PURE__ */ i("div", { children: /* @__PURE__ */ i(
      ke,
      {
        onChange: (n) => e(n)
      }
    ) }),
    /* @__PURE__ */ i("div", { className: I.line }),
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
function qr(t) {
  const {
    setColorPen: e,
    refEditor: r,
    setThicknessPen: n,
    setColorHighlight: a,
    changeBorderColorShape: o,
    onUndo: c,
    changeColorShape: l,
    changeShape: s,
    onThicknessChange: d,
    onRedo: h,
    onClear: u
  } = t, [m, x] = M(null), [w, p] = M(
    0
    /* square */
  );
  return /* @__PURE__ */ i(V, { children: /* @__PURE__ */ g(
    "div",
    {
      className: I.wrapper,
      children: [
        /* @__PURE__ */ g("div", { className: I.pen, children: [
          /* @__PURE__ */ i(
            "button",
            {
              className: E(I.tool, {
                [I.active]: m === "select"
              }),
              onClick: () => {
                const f = r.current.toolController.getPrimaryTools();
                if (m === "select") {
                  x(null), f[0].setEnabled(!1);
                  return;
                }
                x("select"), f[0].setEnabled(!0);
              },
              children: /* @__PURE__ */ i(tc, {})
            }
          ),
          /* @__PURE__ */ i("div", { className: I.line }),
          /* @__PURE__ */ i(
            "button",
            {
              className: E(I.tool, {
                [I.active]: m === "text"
              }),
              onClick: () => {
                const f = r.current.toolController.getPrimaryTools();
                if (r.current.toolController.setToolEnabled(f[1]), m === "text") {
                  f[1].setEnabled(!1), x(null);
                  return;
                }
                x("text"), f[1].setEnabled(!0);
              },
              children: /* @__PURE__ */ i(ec, {})
            }
          ),
          /* @__PURE__ */ i("div", { className: I.line }),
          /* @__PURE__ */ i(
            "button",
            {
              className: E(I.tool, {
                [I.active]: m === "pencil"
              }),
              onClick: () => {
                const f = r.current.toolController.getPrimaryTools();
                if (m === "pencil") {
                  x(null), f[2].setEnabled(!1);
                  return;
                }
                x("pencil"), f[2].setEnabled(!0);
              },
              children: /* @__PURE__ */ i(rc, {})
            }
          ),
          /* @__PURE__ */ i(
            "button",
            {
              className: E(I.tool, {
                [I.active]: m === "highlighter"
              }),
              onClick: () => {
                const f = r.current.toolController.getPrimaryTools();
                if (m === "highlighter") {
                  x(null), f[3].setEnabled(!1);
                  return;
                }
                x("highlighter"), f[3].setEnabled(!0);
              },
              children: /* @__PURE__ */ i(ic, {})
            }
          ),
          /* @__PURE__ */ i("div", { className: I.line }),
          /* @__PURE__ */ i(
            "button",
            {
              className: E(I.tool, {
                [I.active]: m === "eraser"
              }),
              onClick: () => {
                const f = r.current.toolController.getPrimaryTools();
                if (m === "eraser") {
                  x(null), f[4].setEnabled(!1);
                  return;
                }
                x("eraser"), f[4].setEnabled(!0);
              },
              children: /* @__PURE__ */ i(nc, {})
            }
          ),
          /* @__PURE__ */ i("div", { className: I.line }),
          /* @__PURE__ */ i(
            "button",
            {
              className: E(I.tool, {
                [I.active]: m === "shapes" && w === 0
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
              children: /* @__PURE__ */ i(oc, {})
            }
          ),
          /* @__PURE__ */ i(
            "button",
            {
              className: E(I.tool, {
                [I.active]: m === "shapes" && w === 1
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
              children: /* @__PURE__ */ i(ac, {})
            }
          ),
          /* @__PURE__ */ i(
            "button",
            {
              className: E(I.tool, {
                [I.active]: m === "shapes" && w === 2
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
              children: /* @__PURE__ */ i(cc, {})
            }
          ),
          /* @__PURE__ */ i(
            "button",
            {
              className: E(I.tool, {
                [I.active]: m === "shapes" && w === 3
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
              children: /* @__PURE__ */ i(sc, {})
            }
          ),
          /* @__PURE__ */ i(
            "button",
            {
              className: E(I.tool, {
                [I.active]: m === "shapes" && w === 4
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
              children: /* @__PURE__ */ i(lc, {})
            }
          ),
          /* @__PURE__ */ i(
            "button",
            {
              className: E(I.tool, {
                [I.active]: m === "shapes" && w === 5
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
              children: /* @__PURE__ */ i(dc, {})
            }
          ),
          /* @__PURE__ */ i(
            "button",
            {
              className: E(I.tool, {
                [I.active]: m === "shapes" && w === 6
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
              children: /* @__PURE__ */ i(hc, {})
            }
          ),
          /* @__PURE__ */ i(
            "button",
            {
              className: E(I.tool, {
                [I.active]: m === "shapes" && w === 7
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
              children: /* @__PURE__ */ i(fc, {})
            }
          ),
          /* @__PURE__ */ i(
            "button",
            {
              className: E(I.tool, {
                [I.active]: m === "shapes" && w === 8
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
              children: /* @__PURE__ */ i(gc, {})
            }
          ),
          /* @__PURE__ */ i(
            "button",
            {
              className: E(I.tool, {
                [I.active]: m === "shapes" && w === 9
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
              children: /* @__PURE__ */ i(pc, {})
            }
          ),
          /* @__PURE__ */ i(
            "button",
            {
              className: E(I.tool, {
                [I.active]: m === "shapes" && w === 10
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
              children: /* @__PURE__ */ i(wc, {})
            }
          ),
          /* @__PURE__ */ i(
            "button",
            {
              className: E(I.tool, {
                [I.active]: m === "shapes" && w === 11
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
              children: /* @__PURE__ */ i(vc, {})
            }
          ),
          /* @__PURE__ */ i("div", { className: I.line }),
          /* @__PURE__ */ i(
            "button",
            {
              className: E(I.tool),
              onClick: c,
              children: /* @__PURE__ */ i(uc, {})
            }
          ),
          /* @__PURE__ */ i(
            "button",
            {
              className: E(I.tool),
              onClick: h,
              children: /* @__PURE__ */ i(mc, {})
            }
          ),
          /* @__PURE__ */ i(
            "button",
            {
              className: E(I.tool),
              onClick: u,
              children: /* @__PURE__ */ i(xc, {})
            }
          )
        ] }),
        /* @__PURE__ */ g("div", { className: I.optionsWrap, children: [
          m === "pencil" && /* @__PURE__ */ i(
            Cc,
            {
              setColorPen: e,
              setThicknessPen: n
            }
          ),
          m === "highlighter" && /* @__PURE__ */ i(Tc, { setColorHighlight: a }),
          m === "shapes" && /* @__PURE__ */ i(
            Nc,
            {
              changeBorderColorShape: o,
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
let Lt = !1;
const kc = ({ editor: t, upload: e }) => {
  const [r, n] = M(!1), a = J(null), o = J(null), c = () => {
    (async () => {
      const y = document.querySelector("#easydrawer");
      y && (a.current = new wr(y, {
        wheelEventsEnabled: !1,
        disableZoom: !0
      }), o.current = vr(a.current), o.current.addDefaultToolWidgets());
    })();
  };
  $(() => {
    r && setTimeout(() => {
      c();
    }, 200);
  }, [r]);
  const l = async () => {
    if (a.current) {
      const N = a.current.toSVG(), y = N.outerHTML, b = `drawer-${de()}.svg`;
      let S = ce(N.outerHTML);
      if (e) {
        const z = Bt(S, b);
        S = await e(z);
      }
      t == null || t.chain().focus().setDrawer(
        {
          type: "drawer",
          src: S,
          alt: encodeURIComponent(y),
          width: 426,
          height: 212
        },
        !!y
      ).run();
    }
    n(!1);
  }, s = (N) => {
    const y = a.current.toolController.getPrimaryTools()[2], b = o.current.getWidgetById("pen-1");
    y && b && (y.setColor(N), b.serializeState());
  }, d = (N) => {
    const y = a.current.toolController.getPrimaryTools()[2], b = o.current.getWidgetById("pen-1");
    y && b && (y.setThickness(N), b.serializeState());
  }, h = (N) => {
    const y = a.current.toolController.getPrimaryTools()[3], b = o.current.getWidgetById("pen-2");
    y && b && (y.setColor(N), b.serializeState());
  }, u = (N) => {
    const y = o.current.getWidgetById("shape");
    y && y.setShapeType(N);
  }, m = (N) => {
    const y = a.current.toolController.getPrimaryTools()[5], b = o.current.getWidgetById("shape");
    y && b && (y.setColor(N), b.serializeState());
  }, x = (N) => {
    const y = a.current.toolController.getPrimaryTools()[5], b = o.current.getWidgetById("shape");
    y && b && (y.setThickness(N), b.serializeState());
  }, w = (N) => {
    const y = a.current.toolController.getPrimaryTools()[5], b = o.current.getWidgetById("shape");
    y && b && (y.setBorderColor(N), b.serializeState());
  }, p = () => {
    if (Lt) {
      for (; a.current.history.redoStackSize > 0; )
        a.current.history.redo();
      Lt = !1;
      return;
    }
    a.current.history.undo();
  };
  return /* @__PURE__ */ g(
    xt,
    {
      onOpenChange: n,
      open: r,
      children: [
        /* @__PURE__ */ i(ft, { asChild: !0, children: /* @__PURE__ */ i(
          O,
          {
            action: () => n(!0),
            icon: "PencilRuler",
            tooltip: "Drawer"
          }
        ) }),
        /* @__PURE__ */ g(dt, { className: "richtext-z-[99999] !richtext-max-w-[1300px]", children: [
          /* @__PURE__ */ i(ht, { children: "Drawer" }),
          /* @__PURE__ */ g("div", { style: { height: "600px", width: "100%", borderWidth: 1, background: "white", position: "relative" }, children: [
            /* @__PURE__ */ i(
              "div",
              {
                className: "richtext-size-full",
                id: "easydrawer"
              }
            ),
            /* @__PURE__ */ i(
              qr,
              {
                changeBorderColorShape: w,
                changeColorShape: m,
                changeShape: u,
                onClear: () => {
                  if (!Lt) {
                    for (; a.current.history.undoStackSize > 0; )
                      p();
                    Lt = !0;
                  }
                },
                onRedo: () => {
                  Lt || a.current.history.redo();
                },
                onThicknessChange: x,
                onUndo: p,
                refEditor: a,
                setColorHighlight: h,
                setColorPen: s,
                setThicknessPen: d
              }
            )
          ] }),
          /* @__PURE__ */ i(yt, { children: /* @__PURE__ */ i(
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
}, qt = {
  TOP_LEFT: "tl",
  TOP_RIGHT: "tr",
  BOTTOM_LEFT: "bl",
  BOTTOM_RIGHT: "br"
};
function Sc({ editor: t, node: e, updateAttributes: r, getPos: n, selected: a }) {
  const [o, c] = M({
    width: ut,
    height: ut
  }), [l, s] = M({
    width: 0,
    height: 0
  }), [d] = M([
    qt.TOP_LEFT,
    qt.TOP_RIGHT,
    qt.BOTTOM_LEFT,
    qt.BOTTOM_RIGHT
  ]), [h, u] = M(!1), [m, x] = M({
    x: 0,
    y: 0,
    w: 0,
    h: 0,
    dir: ""
  }), { align: w } = e == null ? void 0 : e.attrs, p = U(() => {
    const { src: v, alt: T, width: _, height: H } = e == null ? void 0 : e.attrs, R = Jt(_) ? `${_}px` : _, k = Jt(H) ? `${H}px` : H;
    return {
      src: v || void 0,
      alt: T || void 0,
      style: {
        width: R || void 0,
        height: k || void 0
      }
    };
  }, [e == null ? void 0 : e.attrs]), f = U(() => {
    const {
      style: { width: v }
    } = p;
    return { width: v === "100%" ? v : void 0 };
  }, [p]);
  function P(v) {
    s({
      width: v.target.width,
      height: v.target.height
    });
  }
  function N() {
    t.commands.setNodeSelection(n());
  }
  const y = D(
    st(() => {
      const { width: v } = getComputedStyle(t.view.dom);
      c((T) => ({
        ...T,
        width: Number.parseInt(v, 10)
      }));
    }, mt),
    [t]
  );
  function b(v, T) {
    v.preventDefault(), v.stopPropagation();
    const _ = l.width, H = l.height, R = _ / H;
    let k = Number(e.attrs.width), B = Number(e.attrs.height);
    const F = o.width;
    k && !B ? (k = k > F ? F : k, B = Math.round(k / R)) : B && !k ? (k = Math.round(B * R), k = k > F ? F : k) : !k && !B ? (k = _ > F ? F : _, B = Math.round(k / R)) : k = k > F ? F : k, u(!0), x({
      x: v.clientX,
      y: v.clientY,
      w: k,
      h: B,
      dir: T
    });
  }
  const S = D(
    st((v) => {
      if (v.preventDefault(), v.stopPropagation(), !h)
        return;
      const { x: T, w: _, dir: H } = m, R = (v.clientX - T) * (/l/.test(H) ? -1 : 1), { width: k, height: B } = e == null ? void 0 : e.attrs, F = k / B, Y = kr(_ + R, oe, o.width), nt = Math.round(Y / F);
      r({
        width: Y,
        height: nt
      });
    }, mt),
    [h, m, o, r, e == null ? void 0 : e.attrs]
  ), z = D(
    (v) => {
      v.preventDefault(), v.stopPropagation(), h && (x({
        x: 0,
        y: 0,
        w: 0,
        h: 0,
        dir: ""
      }), u(!1), N());
    },
    [h, N]
  ), L = D(() => {
    document == null || document.addEventListener("mousemove", S, !0), document == null || document.addEventListener("mouseup", z, !0);
  }, [S, z]), C = D(() => {
    document == null || document.removeEventListener("mousemove", S, !0), document == null || document.removeEventListener("mouseup", z, !0);
  }, [S, z]);
  $(() => (h ? L() : C(), () => {
    C();
  }), [h, L, C]);
  const A = U(() => new ResizeObserver(() => y()), [y]);
  return $(() => (A.observe(t.view.dom), () => {
    A.disconnect();
  }), [t.view.dom, A]), /* @__PURE__ */ i(
    pt,
    {
      className: "image-view",
      style: { ...f, width: "100%", textAlign: w },
      children: /* @__PURE__ */ g(
        "div",
        {
          "data-drag-handle": !0,
          draggable: "true",
          style: { ...f, background: "#fff" },
          className: `image-view__body ${a ? "image-view__body--focused" : ""} ${h ? "image-view__body--resizing" : ""}`,
          children: [
            /* @__PURE__ */ i(
              "img",
              {
                alt: p.alt,
                className: "image-view__body__image block",
                height: "auto",
                onClick: N,
                onLoad: P,
                src: p.src,
                style: p.style
              }
            ),
            t.view.editable && (a || h) && /* @__PURE__ */ i("div", { className: "image-resizer", children: d == null ? void 0 : d.map((v) => /* @__PURE__ */ i(
              "span",
              {
                className: `image-resizer__handler image-resizer__handler--${v}`,
                onMouseDown: (T) => b(T, v)
              },
              `image-dir-${v}`
            )) })
          ]
        }
      )
    }
  );
}
const Qe = ne.extend({
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
          component: kc,
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
    return wt(Sc);
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
        lt(
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
let It = !1;
function Mc({ editor: t, attrs: e, extension: r }) {
  const [n, a] = M(!1), o = J(null), c = J(null), { alt: l, align: s } = e, d = r == null ? void 0 : r.options.upload, h = () => {
    (async () => {
      const L = document.querySelector("#easydrawer");
      L && (o.current = new wr(L, {
        wheelEventsEnabled: !1,
        disableZoom: !0
      }), c.current = vr(o.current), c.current.addDefaultToolWidgets(), o.current.loadFromSVG(decodeURIComponent(l)));
    })();
  };
  $(() => {
    n && setTimeout(() => {
      h();
    }, 200);
  }, [n]);
  const u = async () => {
    if (o.current) {
      const z = o.current.toSVG(), L = z.outerHTML, C = `drawer-${de()}.svg`;
      let A = ce(z.outerHTML);
      if (d) {
        const v = Bt(A, C);
        A = await d(v);
      }
      t == null || t.chain().focus().setDrawer(
        {
          type: "drawer",
          src: A,
          alt: encodeURIComponent(L),
          width: 426,
          height: 212
        },
        !!L
      ).run(), t == null || t.commands.setAlignImageDrawer(s);
    }
    a(!1);
  }, m = (z) => {
    const L = o.current.toolController.getPrimaryTools()[2], C = c.current.getWidgetById("pen-1");
    L && C && (L.setColor(z), C.serializeState());
  }, x = (z) => {
    const L = o.current.toolController.getPrimaryTools()[2], C = c.current.getWidgetById("pen-1");
    L && C && (L.setThickness(z), C.serializeState());
  }, w = (z) => {
    const L = o.current.toolController.getPrimaryTools()[3], C = c.current.getWidgetById("pen-2");
    L && C && (L.setColor(z), C.serializeState());
  }, p = (z) => {
    const L = c.current.getWidgetById("shape");
    L && L.setShapeType(z);
  }, f = (z) => {
    const L = o.current.toolController.getPrimaryTools()[5], C = c.current.getWidgetById("shape");
    L && C && (L.setColor(z), C.serializeState());
  }, P = (z) => {
    const L = o.current.toolController.getPrimaryTools()[5], C = c.current.getWidgetById("shape");
    L && C && (L.setThickness(z), C.serializeState());
  }, N = (z) => {
    const L = o.current.toolController.getPrimaryTools()[5], C = c.current.getWidgetById("shape");
    L && C && (L.setBorderColor(z), C.serializeState());
  }, y = () => {
    if (It) {
      for (; o.current.history.redoStackSize > 0; )
        o.current.history.redo();
      It = !1;
      return;
    }
    o.current.history.undo();
  };
  return /* @__PURE__ */ g(
    xt,
    {
      onOpenChange: a,
      open: n,
      children: [
        /* @__PURE__ */ i(ft, { asChild: !0, children: /* @__PURE__ */ i(
          O,
          {
            action: () => a(!0),
            icon: "Pencil",
            tooltip: "Edit Drawer"
          }
        ) }),
        /* @__PURE__ */ g(dt, { className: "richtext-z-[99999] !richtext-max-w-[1300px]", children: [
          /* @__PURE__ */ i(ht, { children: "Edit Drawer" }),
          /* @__PURE__ */ g("div", { style: { height: "100%", borderWidth: 1, background: "white", position: "relative" }, children: [
            /* @__PURE__ */ i(
              "div",
              {
                className: "richtext-size-full",
                id: "easydrawer"
              }
            ),
            /* @__PURE__ */ i(
              qr,
              {
                changeBorderColorShape: N,
                changeColorShape: f,
                changeShape: p,
                onClear: () => {
                  if (!It) {
                    for (; o.current.history.undoStackSize > 0; )
                      y();
                    It = !0;
                  }
                },
                onRedo: () => {
                  It || o.current.history.redo();
                },
                onThicknessChange: P,
                onUndo: y,
                refEditor: o,
                setColorHighlight: w,
                setColorPen: m,
                setThicknessPen: x
              }
            )
          ] }),
          /* @__PURE__ */ i(yt, { children: /* @__PURE__ */ i(
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
function jr(t, e) {
  const [r, n] = M(void 0);
  return $(() => {
    const a = () => {
      const o = t.extensionManager.extensions.find((c) => c.name === e);
      o && n(o);
    };
    return t.on("selectionUpdate", a), t.on("transaction", a), () => {
      t.off("selectionUpdate", a), t.off("transaction", a);
    };
  }, [t, e]), r;
}
const Ac = {
  maxWidth: "auto",
  zIndex: 20,
  appendTo: "parent",
  moveTransition: "transform 0.1s ease-out"
};
function Lc({ item: t, disabled: e, editor: r }) {
  var a;
  const n = t.component;
  return n ? /* @__PURE__ */ i(Me, { children: t.type === "divider" ? /* @__PURE__ */ i(
    et,
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
function Ic(t) {
  return t.type.name === "drawer";
}
function Ec(t) {
  const { lang: e } = X(), r = Vt(t.editor, Qe.name), n = jr(t.editor, Qe.name), a = ({ editor: c }) => {
    const { selection: l } = c.view.state, { $from: s, to: d } = l;
    let h = !1;
    return c.view.state.doc.nodesBetween(s.pos, d, (u) => {
      if (Ic(u))
        return h = !0, !1;
    }), h;
  }, o = U(() => t.disabled ? [] : rs(t.editor), [t.disabled, t.editor, e]);
  return /* @__PURE__ */ i(V, { children: /* @__PURE__ */ i(
    it,
    {
      editor: t == null ? void 0 : t.editor,
      shouldShow: a,
      tippyOptions: Ac,
      children: o != null && o.length ? /* @__PURE__ */ i("div", { className: "richtext-pointer-events-auto richtext-w-auto richtext-select-none richtext-rounded-sm !richtext-border richtext-border-neutral-200 richtext-bg-background richtext-px-3 richtext-py-2 richtext-shadow-sm richtext-transition-all dark:richtext-border-neutral-800", children: /* @__PURE__ */ i("div", { className: "richtext-relative richtext-flex richtext-h-[26px] richtext-flex-nowrap richtext-items-center richtext-justify-start richtext-whitespace-nowrap", children: o == null ? void 0 : o.map((c, l) => c.type === "edit" && (r != null && r.src) ? /* @__PURE__ */ i(
        Mc,
        {
          attrs: r,
          editor: t.editor,
          extension: n
        },
        `bubbleMenu-drawer-${l}`
      ) : /* @__PURE__ */ i(
        Lc,
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
const zc = { padding: "0 12px 12px" }, Rc = ({ width: t, maxWidth: e, height: r, onOk: n, children: a }) => {
  const { t: o } = X(), [c, l] = M({
    width: "",
    height: "",
    maxWidth: ""
  });
  $(() => {
    l({
      width: t,
      height: r,
      maxWidth: e
    });
  }, [r, e, t]);
  function s(d) {
    d.preventDefault(), d.stopPropagation(), n(c);
  }
  return /* @__PURE__ */ g(Mt, { modal: !0, children: [
    /* @__PURE__ */ i(At, { asChild: !0, children: a }),
    /* @__PURE__ */ i(bt, { children: /* @__PURE__ */ i("div", { style: zc, children: /* @__PURE__ */ g("form", { className: "richtext-flex richtext-flex-col richtext-gap-2", onSubmit: s, children: [
      /* @__PURE__ */ i(ct, { className: "mb-[6px]", children: "Width" }),
      /* @__PURE__ */ i("div", { className: "richtext-flex richtext-w-full richtext-max-w-sm richtext-items-center richtext-gap-1.5", children: /* @__PURE__ */ i("div", { className: "richtext-relative richtext-items-center richtext-w-full richtext-max-w-sm", children: /* @__PURE__ */ i(
        Q,
        {
          type: "number",
          value: c.width,
          required: !0,
          onChange: (d) => l({ ...c, width: d.target.value })
        }
      ) }) }),
      /* @__PURE__ */ i(ct, { className: "mb-[6px]", children: "Max Width" }),
      /* @__PURE__ */ i("div", { className: "richtext-flex richtext-w-full richtext-max-w-sm richtext-items-center richtext-gap-1.5", children: /* @__PURE__ */ i("div", { className: "richtext-relative richtext-items-center richtext-w-full richtext-max-w-sm", children: /* @__PURE__ */ i(
        Q,
        {
          type: "number",
          value: c.maxWidth,
          required: !0,
          onChange: (d) => l({ ...c, maxWidth: d.target.value })
        }
      ) }) }),
      /* @__PURE__ */ i(ct, { className: "mb-[6px]", children: "Height" }),
      /* @__PURE__ */ i("div", { className: "richtext-flex richtext-w-full richtext-max-w-sm richtext-items-center richtext-gap-1.5", children: /* @__PURE__ */ i("div", { className: "richtext-relative richtext-items-center richtext-w-full richtext-max-w-sm", children: /* @__PURE__ */ i(
        Q,
        {
          type: "number",
          value: c.height,
          required: !0,
          onChange: (d) => l({ ...c, height: d.target.value })
        }
      ) }) }),
      /* @__PURE__ */ i(G, { type: "submit", className: "richtext-self-end richtext-mt-2", children: o("editor.link.dialog.button.apply") })
    ] }) }) })
  ] });
};
function Pc({ editor: t }) {
  const { t: e } = X(), { width: r, height: n, url: a } = Vt(t, Tt.name, {
    width: 0,
    height: 0,
    url: "",
    defaultShowPicker: !1
  }), [o, c] = M(!1), [l, s] = M(""), d = D(() => {
    c(!1);
  }, [c]);
  $(() => {
    o && s(a);
  }, [o, a]);
  const h = D(() => {
    t.chain().updateAttributes(Tt.name, {
      url: l
    }).setNodeSelection(t.state.selection.from).focus().run(), c(!1);
  }, [t, l, c]), u = D(() => {
    window.open(a, "_blank");
  }, [a]), m = D(() => {
    c(!0);
  }, [c]), x = D(
    (f) => {
      t.chain().updateAttributes(Tt.name, f).setNodeSelection(t.state.selection.from).focus().run();
    },
    [t]
  ), w = D(() => t.isActive(Tt.name) && !a, [t, a]), p = D(() => le(Tt.name, t), [t]);
  return /* @__PURE__ */ g(V, { children: [
    /* @__PURE__ */ i(
      it,
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
          /* @__PURE__ */ i(Rc, { width: r, height: n, onOk: x, children: /* @__PURE__ */ i(
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
      xt,
      {
        open: o,
        onOpenChange: c,
        children: [
          /* @__PURE__ */ i(ft, {}),
          /* @__PURE__ */ g(dt, { children: [
            /* @__PURE__ */ i(Wr, { children: /* @__PURE__ */ i(ht, { children: "Edit Link Iframe" }) }),
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
            /* @__PURE__ */ g(yt, { children: [
              /* @__PURE__ */ i(G, { onClick: d, children: "Cancel" }),
              /* @__PURE__ */ i(G, { onClick: h, children: "OK" })
            ] })
          ] })
        ]
      }
    )
  ] });
}
function Hc({ editor: t, ...e }) {
  const r = Vt(t, Nt.name, {
    text: "",
    defaultShowPicker: !1
  }), { text: n, defaultShowPicker: a } = r, [o, c] = M(""), [l, s] = M(!1), d = D(() => t.isActive(Nt.name), [t]), h = D(() => le(Nt.name, t), [t]), u = D(() => {
    t.chain().focus().setKatex({ text: o }).run(), s(!1);
  }, [t, o]);
  $(() => {
    a && (s(!0), t.chain().updateAttributes(Nt.name, { defaultShowPicker: !1 }).focus().run());
  }, [t, a, s]), $(() => {
    l && c(n || "");
  }, [l]);
  const m = U(() => {
    try {
      return Ee.renderToString(`${o}`);
    } catch {
      return o;
    }
  }, [o]), x = U(
    () => `${o}`.trim() ? /* @__PURE__ */ i("span", { contentEditable: !1, dangerouslySetInnerHTML: { __html: m || "" } }) : null,
    [o, m]
  );
  return /* @__PURE__ */ i(
    it,
    {
      editor: t,
      pluginKey: "Katex-bubble-menu",
      shouldShow: d,
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
          $t,
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
          /* @__PURE__ */ i("a", { href: "https://katex.org/docs/supported", target: "_blank", rel: "noreferrer noopener", children: /* @__PURE__ */ i(pr, { size: 16 }) })
        ] })
      ] }) : /* @__PURE__ */ g("div", { className: "richtext-flex richtext-items-center richtext-justify-center richtext-gap-[6px]", children: [
        /* @__PURE__ */ i(O, { tooltip: "Edit", action: () => s(!l), children: /* @__PURE__ */ i(gr, { size: 16 }) }),
        /* @__PURE__ */ i(O, { tooltip: "Delete", action: h, children: /* @__PURE__ */ i(fr, { size: 16 }) })
      ] }) })
    }
  );
}
const tr = `graph TB
a-->b`, Oc = ({ editor: t, attrs: e, extension: r }) => {
  const { alt: n, align: a } = e, [o, c] = M(decodeURIComponent(n ?? tr)), [l, s] = M(""), [d, h] = M(!1), u = J(null), m = r == null ? void 0 : r.options.upload, x = async (f) => {
    try {
      const { svg: P } = await ee.render("mermaid-svg", f);
      s(P);
    } catch {
      s("");
    }
  }, w = () => {
    ee.initialize({
      darkMode: !1,
      startOnLoad: !1,
      // fontFamily:'',
      fontSize: 12,
      theme: "base"
    }), x(o);
  };
  return $(() => {
    d && w();
  }, [d]), $(() => {
    d && x(o);
  }, [o]), /* @__PURE__ */ g(
    xt,
    {
      onOpenChange: h,
      open: d,
      children: [
        /* @__PURE__ */ i(ft, { asChild: !0, children: /* @__PURE__ */ i(
          O,
          {
            action: () => h(!0),
            icon: "Pencil",
            tooltip: "Edit Mermaid"
          }
        ) }),
        /* @__PURE__ */ g(dt, { className: "richtext-z-[99999] !richtext-max-w-[1300px]", children: [
          /* @__PURE__ */ i(ht, { children: "Edit Mermaid" }),
          /* @__PURE__ */ i("div", { style: { height: "100%", border: "1px solid hsl(var(--border))" }, children: /* @__PURE__ */ g("div", { className: "richtext-flex richtext-gap-[10px] richtext-rounded-[10px] richtext-p-[10px]", children: [
            /* @__PURE__ */ i(
              $t,
              {
                autoFocus: !0,
                className: "richtext-flex-1",
                defaultValue: tr,
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
          /* @__PURE__ */ i(yt, { children: /* @__PURE__ */ i(
            G,
            {
              onClick: async () => {
                if (o !== "") {
                  if (o) {
                    const f = u.current.querySelector("svg"), { width: P, height: N } = f.getBoundingClientRect(), y = `mermaid-${de()}.svg`;
                    let b = ce(f.outerHTML);
                    if (m) {
                      const S = Bt(b, y);
                      b = await m(S);
                    }
                    t == null || t.chain().focus().setMermaid(
                      {
                        type: "mermaid",
                        src: b,
                        alt: encodeURIComponent(o),
                        width: P,
                        height: N
                      },
                      !!o
                    ).run(), t == null || t.commands.setAlignImageMermaid(a);
                  }
                  h(!1);
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
}, Dc = {
  maxWidth: "auto",
  zIndex: 20,
  appendTo: "parent",
  moveTransition: "transform 0.1s ease-out"
};
function _c({ item: t, disabled: e, editor: r }) {
  var a;
  const n = t.component;
  return n ? /* @__PURE__ */ i(Me, { children: t.type === "divider" ? /* @__PURE__ */ i(
    et,
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
function Bc(t) {
  return t.type.name === "mermaid";
}
function $c(t) {
  const { lang: e } = X(), r = Vt(t.editor, Ke.name), n = jr(t.editor, Ke.name), a = ({ editor: c }) => {
    const { selection: l } = c.view.state, { $from: s, to: d } = l;
    let h = !1;
    return c.view.state.doc.nodesBetween(s.pos, d, (u) => {
      if (Bc(u))
        return h = !0, !1;
    }), h;
  }, o = U(() => t.disabled ? [] : es(t.editor), [t.disabled, t.editor, e]);
  return /* @__PURE__ */ i(V, { children: /* @__PURE__ */ i(
    it,
    {
      editor: t == null ? void 0 : t.editor,
      shouldShow: a,
      tippyOptions: Dc,
      children: o != null && o.length ? /* @__PURE__ */ i("div", { className: "richtext-pointer-events-auto richtext-w-auto richtext-select-none richtext-rounded-sm !richtext-border richtext-border-neutral-200 richtext-bg-background richtext-px-3 richtext-py-2 richtext-shadow-sm richtext-transition-all dark:richtext-border-neutral-800", children: /* @__PURE__ */ i("div", { className: "richtext-relative richtext-flex richtext-h-[26px] richtext-flex-nowrap richtext-items-center richtext-justify-start richtext-whitespace-nowrap", children: o == null ? void 0 : o.map((c, l) => c.type === "edit" && (r != null && r.src) ? /* @__PURE__ */ i(
        Oc,
        {
          attrs: r,
          editor: t.editor,
          extension: n
        },
        `bubbleMenu-mermaid-${l}`
      ) : /* @__PURE__ */ i(
        _c,
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
function Vc({ editor: t, disabled: e }) {
  const [r, n] = M(!1), { t: a } = X(), o = D(({ editor: s }) => s.isActive(Ne.name), []), c = (s) => {
    t.commands.updateTweet({ src: s }), n(!1);
  }, l = D(() => le(Ne.name, t), [t]);
  return /* @__PURE__ */ i(V, { children: /* @__PURE__ */ i(
    it,
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
        Gr,
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
function Wc({ editor: t, disabled: e, bubbleMenu: r }) {
  const n = t.extensionManager.extensions.map((o) => o.name), a = () => {
    var o, c, l, s, d, h, u, m, x, w, p, f, P, N;
    return [
      n.includes("columns") && !((o = r == null ? void 0 : r.columnConfig) != null && o.hidden) ? /* @__PURE__ */ i(
        Cs,
        {
          editor: t
        },
        "columns"
      ) : null,
      n.includes("table") && !((c = r == null ? void 0 : r.tableConfig) != null && c.hidden) ? /* @__PURE__ */ i(
        ms,
        {
          editor: t,
          actions: (l = r == null ? void 0 : r.tableConfig) == null ? void 0 : l.actions
        },
        "table"
      ) : null,
      n.includes("link") && !((s = r == null ? void 0 : r.linkConfig) != null && s.hidden) ? /* @__PURE__ */ i(
        fs,
        {
          disabled: e,
          editor: t
        },
        "link"
      ) : null,
      n.includes(Ht.name) && !((d = r == null ? void 0 : r.imageConfig) != null && d.hidden) ? /* @__PURE__ */ i(
        vs,
        {
          disabled: e,
          editor: t
        },
        "image"
      ) : null,
      n.includes(Ur.name) && !((h = r == null ? void 0 : r.imageGifConfig) != null && h.hidden) ? /* @__PURE__ */ i(
        bs,
        {
          disabled: e,
          editor: t
        },
        "imageGif"
      ) : null,
      n.includes("video") && !((u = r == null ? void 0 : r.videoConfig) != null && u.hidden) ? /* @__PURE__ */ i(
        ys,
        {
          disabled: e,
          editor: t
        },
        "video"
      ) : null,
      n.includes("katex") && !((m = r == null ? void 0 : r.katexConfig) != null && m.hidden) ? /* @__PURE__ */ i(
        Hc,
        {
          disabled: e,
          editor: t
        },
        "katex"
      ) : null,
      n.includes("mermaid") && !((x = r == null ? void 0 : r.mermaidConfig) != null && x.hidden) ? /* @__PURE__ */ i(
        $c,
        {
          disabled: e,
          editor: t
        },
        "mermaid"
      ) : null,
      n.includes("iframe") && !((w = r == null ? void 0 : r.iframeConfig) != null && w.hidden) ? /* @__PURE__ */ i(
        Pc,
        {
          disabled: e,
          editor: t
        },
        "iframe"
      ) : null,
      n.includes("twitter") && !((p = r == null ? void 0 : r.twitterConfig) != null && p.hidden) ? /* @__PURE__ */ i(
        Vc,
        {
          disabled: e,
          editor: t
        },
        "twitter"
      ) : null,
      (f = r == null ? void 0 : r.floatingMenuConfig) != null && f.hidden ? null : /* @__PURE__ */ i(
        ls,
        {
          disabled: e,
          editor: t
        },
        "content"
      ),
      (P = r == null ? void 0 : r.textConfig) != null && P.hidden ? null : /* @__PURE__ */ i(
        us,
        {
          disabled: e,
          editor: t
        },
        "text"
      ),
      n.includes("drawer") && !((N = r == null ? void 0 : r.drawerConfig) != null && N.hidden) ? /* @__PURE__ */ i(
        Ec,
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
function er() {
  return /* @__PURE__ */ i("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", children: /* @__PURE__ */ i("path", { fill: "currentColor", d: "M18 14c0-4-6-10.8-6-10.8s-1.33 1.51-2.73 3.52l8.59 8.59c.09-.42.14-.86.14-1.31m-.88 3.12L12.5 12.5L5.27 5.27L4 6.55l3.32 3.32C6.55 11.32 6 12.79 6 14c0 3.31 2.69 6 6 6c1.52 0 2.9-.57 3.96-1.5l2.63 2.63l1.27-1.27z" }) });
}
function Fc(t) {
  const { t: e } = X(), {
    highlight: r = !1,
    disabled: n = !1,
    selectedColor: a,
    setSelectedColor: o,
    onChange: c,
    colors: l = fi
  } = t, s = U(() => {
    const x = l, w = [];
    for (let p = 0; p < x.length; p += 10)
      w.push(x.slice(p, p + 10));
    return w;
  }, [l]), [d, h] = M([]), u = (x) => {
    const w = [...d], p = w.indexOf(x);
    p !== -1 && w.splice(p, 1), w.unshift(x), w.length > 10 && w.pop(), h(w);
  };
  function m(x) {
    if (x === void 0) {
      o == null || o(x), c == null || c(x);
      return;
    }
    /^#([\da-f]{3}){1,2}$/i.test(x) && (o == null || o(x), c == null || c(x), u(x));
  }
  return /* @__PURE__ */ g(Mt, { modal: !0, children: [
    /* @__PURE__ */ i(
      At,
      {
        asChild: !0,
        className: "!richtext-p-0",
        disabled: n,
        children: t == null ? void 0 : t.children
      }
    ),
    /* @__PURE__ */ i(
      bt,
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
                /* @__PURE__ */ i(er, {}),
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
                /* @__PURE__ */ i(er, {}),
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
            /* @__PURE__ */ i("span", { className: "richtext-relative richtext-flex richtext-h-auto richtext-w-full richtext-p-0 last:richtext-pb-2", children: d == null ? void 0 : d.map((x, w) => /* @__PURE__ */ i(
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
          /* @__PURE__ */ i(Uc, { setColor: m })
        ] })
      }
    )
  ] });
}
function Uc({ setColor: t }) {
  const [e, r] = M("#000000"), [n, a] = M(!1), { t: o } = X();
  return $(() => () => {
    a(!1);
  }, []), /* @__PURE__ */ g(Mt, { open: n, children: [
    /* @__PURE__ */ i(At, { asChild: !0, children: /* @__PURE__ */ g(
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
    /* @__PURE__ */ g(bt, { children: [
      /* @__PURE__ */ g("div", { className: "richtext-flex richtext-flex-col richtext-items-center richtext-justify-center", children: [
        /* @__PURE__ */ i(
          to,
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
      /* @__PURE__ */ i(et, { className: "richtext-my-[10px]" }),
      /* @__PURE__ */ i(
        G,
        {
          className: "richtext-w-full",
          onClick: (c) => {
            c.preventDefault(), t(e), a(!1);
          },
          children: /* @__PURE__ */ i(xr, { size: 16 })
        }
      )
    ] })
  ] });
}
function Gc({ editor: t, disabled: e, toolbar: r }) {
  const { t: n, lang: a } = X(), o = U(() => {
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
      if (!m || !ho(m) || !p)
        continue;
      const f = m({
        editor: t,
        extension: u,
        t: n
      });
      if (Array.isArray(f)) {
        const P = f.map((N, y) => ({
          button: N,
          divider: y === f.length - 1 ? x : !1,
          spacer: y === 0 ? w : !1,
          type: u.type,
          name: u.name
        }));
        h = [...h, ...P];
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
  ), l = o.map((s, d) => {
    var u, m;
    const h = s.button.component;
    return /* @__PURE__ */ g("div", { className: "richtext-flex richtext-items-center", children: [
      (s == null ? void 0 : s.spacer) && /* @__PURE__ */ i(et, { orientation: "vertical", className: "!richtext-h-[16px] !richtext-mx-[10px]" }),
      /* @__PURE__ */ i(
        h,
        {
          ...s.button.componentProps,
          disabled: e || ((m = (u = s == null ? void 0 : s.button) == null ? void 0 : u.componentProps) == null ? void 0 : m.disabled)
        }
      ),
      (s == null ? void 0 : s.divider) && /* @__PURE__ */ i(et, { orientation: "vertical", className: "!richtext-h-auto !richtext-mx-2" })
    ] }, `toolbar-item-${d}`);
  });
  return r && (r != null && r.render) ? r.render({ editor: t, disabled: e || !1 }, o, l, c) : c(l);
}
function qc(t) {
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
      action: () => t.commands.updateImage({ width: Qt[n] }),
      isActive: () => t.isActive("image", { width: Qt[n] })
    }
  }));
}
function jc(t) {
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
      action: () => t.commands.updateImageGif({ width: Qt[n] }),
      isActive: () => t.isActive("image", { width: Qt[n] })
    }
  }));
}
function Xc(t) {
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
function Yc(t) {
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
function Kc(t) {
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
function Zc(t) {
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
function Jc(t) {
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
      action: () => t.commands.updateVideo({ width: pe[n] }),
      isActive: () => t.isActive("video", { width: pe[n] })
    }
  }));
}
function Qc(t) {
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
    ...qc(t),
    ...Xc(t),
    {
      type: "remove",
      component: O,
      componentProps: {
        editor: t,
        tooltip: Z.t("editor.remove"),
        icon: "Trash2",
        action: () => {
          const { state: e, dispatch: r } = t.view;
          Dt(e, r);
        }
      }
    }
  ];
}
function ts(t) {
  return [
    ...jc(t),
    ...Yc(t),
    {
      type: "remove",
      component: O,
      componentProps: {
        editor: t,
        tooltip: Z.t("editor.remove"),
        icon: "Trash2",
        action: () => {
          const { state: e, dispatch: r } = t.view;
          Dt(e, r);
        }
      }
    }
  ];
}
function es(t) {
  return [
    ...Kc(t),
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
          Dt(e, r);
        }
      }
    }
  ];
}
function rs(t) {
  return [
    ...Zc(t),
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
          Dt(e, r);
        }
      }
    }
  ];
}
function is(t) {
  return [
    ...Jc(t),
    {
      type: "remove",
      component: O,
      componentProps: {
        editor: t,
        tooltip: Z.t("editor.remove"),
        icon: "Trash2",
        action: () => {
          const { state: e, dispatch: r } = t.view;
          Dt(e, r);
        }
      }
    }
  ];
}
function ns(t, e) {
  return gi.reduce((r, n) => {
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
function He(t, e, r) {
  const n = [], a = t.node(0);
  r = typeof r == "number" && r >= 0 ? r : t.sameParent(e) ? Math.max(0, t.sharedDepth(e.pos) - 1) : t.sharedDepth(e.pos);
  const o = new Si(t, e, r), c = o.depth === 0 ? 0 : a.resolve(o.start).posAtIndex(0);
  return o.parent.forEach((l, s) => {
    const d = c + s, h = d + l.nodeSize;
    if (d < o.start || d >= o.end) return;
    const u = new Mi(a.resolve(d), a.resolve(h));
    n.push(u);
  }), n;
}
class Oe {
  constructor(e, r) {
    Wt(this, "anchor");
    Wt(this, "head");
    this.anchor = e, this.head = r;
  }
  map(e) {
    return new Oe(e.map(this.anchor), e.map(this.head));
  }
  resolve(e) {
    const r = e.resolve(this.anchor), n = e.resolve(this.head);
    return new at(r, n);
  }
}
class at extends Ai {
  constructor(r, n, a, o = 1) {
    const { doc: c } = r, l = r === n, s = r.pos === c.content.size && n.pos === c.content.size, d = l && !s ? c.resolve(n.pos + (o > 0 ? 1 : -1)) : n, h = l && s ? c.resolve(r.pos - (o > 0 ? 1 : -1)) : r, u = He(h.min(d), h.max(d), a);
    super(
      d.pos >= r.pos ? u[0].$from : u[u.length - 1].$to,
      d.pos >= r.pos ? u[u.length - 1].$to : u[0].$from,
      u
    );
    Wt(this, "depth");
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
    return new Oe(this.anchor, this.head);
  }
}
function os(t) {
  const e = t.cloneNode(!0), r = [t, ...Array.from(t.getElementsByTagName("*"))], n = [e, ...Array.from(e.getElementsByTagName("*"))];
  return r.forEach((a, o) => {
    n[o].style.cssText = function(c) {
      let l = "";
      const s = getComputedStyle(c);
      for (let d = 0; d < s.length; d += 1)
        l += `${s[d]}:${s.getPropertyValue(s[d])};`;
      return l;
    }(a);
  }), e;
}
function jt(t, e) {
  return window.getComputedStyle(t)[e];
}
function as(t = 0, e = 0, r = 0) {
  return Math.min(Math.max(t, e), r);
}
function rr(t) {
  t.parentNode !== null && t.parentNode !== void 0 && t.parentNode.removeChild(t);
}
function Xr(t) {
  const { x: e, y: r, direction: n, editor: a } = t;
  let o = null, c = null, l = null, s = e;
  for (; c === null && s < window.innerWidth && s > 0; ) {
    const d = document.elementsFromPoint(s, r), h = d.findIndex((m) => m.classList.contains("ProseMirror")), u = d.slice(0, h);
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
function cs(t, e) {
  const { doc: r } = e.view.state, n = Xr({ editor: e, x: t.clientX, y: t.clientY, direction: "right" });
  if (!n.resultNode || n.pos === null) return [];
  const a = t.clientX, o = function(h, u, m) {
    const x = Number.parseInt(jt(h.dom, "paddingLeft"), 10), w = Number.parseInt(jt(h.dom, "paddingRight"), 10), p = Number.parseInt(jt(h.dom, "borderLeftWidth"), 10), f = Number.parseInt(jt(h.dom, "borderLeftWidth"), 10), P = h.dom.getBoundingClientRect();
    return {
      left: as(
        u,
        P.left + x + p,
        P.right - w - f
      ),
      top: m
    };
  }(e.view, a, t.clientY), c = e.view.posAtCoords(o);
  if (!c) return [];
  const { pos: l } = c;
  if (!r.resolve(l).parent) return [];
  const s = r.resolve(n.pos), d = r.resolve(n.pos + 1);
  return He(s, d, 0);
}
function ir(t, e) {
  const r = t.resolve(e), { depth: n } = r;
  return n === 0 ? e : r.pos - r.parentOffset - 1;
}
function nr(t, e) {
  const r = t.nodeAt(e), n = t.resolve(e);
  let { depth: a } = n, o = r;
  for (; a > 0; ) {
    const c = n.node(a);
    a -= 1, a === 0 && (o = c);
  }
  return o;
}
function or(t, e) {
  let r = e;
  for (; r && r.parentNode && r.parentNode !== t.dom; ) r = r.parentNode;
  return r;
}
const Yr = new Le("dragHandle");
function ss({
  pluginKey: t = Yr,
  element: e,
  editor: r,
  tippyOptions: n,
  onNodeChange: a
}) {
  const o = document.createElement("div");
  let c = null, l = !1, s = null, d = -1;
  return e.addEventListener("dragstart", (h) => {
    const { view: u } = r;
    if (!h.dataTransfer) return;
    const { empty: m, $from: x, $to: w } = u.state.selection, p = cs(h, r), f = He(x, w, 0), P = f.some((A) => p.find((v) => v.$from === A.$from && v.$to === A.$to)), N = m || !P ? p : f;
    if (N.length === 0) return;
    const { tr: y } = u.state, b = document.createElement("div"), S = N[0].$from.pos, z = N[N.length - 1].$to.pos, L = at.create(u.state.doc, S, z), C = L.content();
    N.forEach((A) => {
      const v = os(u.nodeDOM(A.$from.pos));
      b.append(v);
    }), b.style.position = "absolute", b.style.top = "-10000px", document.body.append(b), h.dataTransfer.clearData(), h.dataTransfer.setDragImage(b, 0, 0), u.dragging = { slice: C, move: !0 }, y.setSelection(L), u.dispatch(y), document.addEventListener("drop", () => rr(b), { once: !0 }), setTimeout(() => {
      e && (e.style.pointerEvents = "none");
    }, 0);
  }), e.addEventListener("dragend", () => {
    e && (e.style.pointerEvents = "auto");
  }), new Ie({
    key: typeof t == "string" ? new Le(t) : t,
    state: {
      init: () => ({ locked: !1 }),
      apply(h, u) {
        const m = h.getMeta("lockDragHandle"), x = h.getMeta("hideDragHandle");
        if (m !== void 0 && (l = m), x && c)
          return c.hide(), l = !1, s = null, d = -1, a == null || a({ editor: r, node: null, pos: -1 }), u;
        if (h.docChanged && d !== -1 && e && c) {
          const w = h.mapping.map(d);
          w !== d && (d = w);
        }
        return u;
      }
    },
    view: (h) => {
      return u(), m(r.view.dom), c = Jn(h.dom, {
        ...x(),
        ...n
      }), {
        update(b, S) {
          if (!w(e, c) || (e.draggable = !l, !p(b, S)))
            return;
          const z = f(b);
          z && P(b, z);
        },
        destroy() {
          y();
        }
      };
      function u() {
        e.draggable = !0, e.style.pointerEvents = "auto";
      }
      function m(b) {
        var S;
        (S = b.parentElement) == null || S.appendChild(o), o.appendChild(e), Object.assign(o.style, {
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
      function w(b, S) {
        return b && S;
      }
      function p(b, S) {
        return !b.state.doc.eq(S.doc) && d !== -1;
      }
      function f(b) {
        let S = b.nodeDOM(d);
        return S = or(b, S), S === b.dom || (S == null ? void 0 : S.nodeType) !== 1 ? null : S;
      }
      function P(b, S) {
        const z = b.posAtDOM(S, 0), L = nr(r.state.doc, z);
        if (L === s)
          return;
        const C = ir(r.state.doc, z);
        s = L, d = C, a == null || a({
          editor: r,
          node: s,
          pos: d
        }), N(S);
      }
      function N(b) {
        c.setProps({
          getReferenceClientRect: () => b.getBoundingClientRect()
        }), c.show();
      }
      function y() {
        c == null || c.destroy(), e && rr(o);
      }
    },
    props: {
      handleDOMEvents: {
        mouseleave: (h, u) => {
          if (l || !m(u)) return !1;
          return x(), w(), !1;
          function m(p) {
            return p.target && !o.contains(p.relatedTarget);
          }
          function x() {
            c == null || c.hide();
          }
          function w() {
            s = null, d = -1, a == null || a({
              editor: r,
              node: null,
              pos: -1
            });
          }
        },
        mousemove: Ae((h, u) => {
          if (!e || !c || l)
            return !1;
          const m = Xr({
            x: u.clientX,
            y: u.clientY,
            direction: "right",
            editor: r
          });
          if (!m.resultElement || m.resultElement === h.dom)
            return !1;
          const x = or(h, m.resultElement);
          if (x === h.dom || (x == null ? void 0 : x.nodeType) !== 1)
            return !1;
          const w = h.posAtDOM(x, 0), p = nr(r.state.doc, w);
          if (p === s)
            return !1;
          const f = ir(r.state.doc, w);
          return s = p, d = f, a == null || a({
            editor: r,
            node: s,
            pos: d
          }), c.setProps({
            getReferenceClientRect: () => x.getBoundingClientRect()
          }), c.show(), !1;
        }, 100)
      }
    }
  });
}
function ls(t) {
  var C, A, v;
  const { pluginKey: e = Yr } = t, { t: r } = X(), [n, a] = M(null), [o, c] = M(-1), l = J(null), s = J(null), [d, h] = M(!1), u = t.editor.extensionManager.extensions.some((T) => T.name === "textAlign"), m = t.editor.extensionManager.extensions.some((T) => T.name === "indent"), x = t.editor.extensionManager.extensions.some((T) => T.name === "clear");
  $(() => {
    l.current && !t.editor.isDestroyed && (s.current = ss({
      editor: t.editor,
      element: l.current,
      pluginKey: "ContentItemMenu",
      tippyOptions: {
        offset: [-2, 16],
        zIndex: 99,
        moveTransition: "transform 0.15s ease-out"
      },
      onNodeChange: S
    }), t.editor.registerPlugin(s.current));
  }, [t.editor, l]);
  function w() {
    const T = t.editor.chain();
    T.setNodeSelection(o).unsetAllMarks(), (n == null ? void 0 : n.type.name) !== "paragraph" && T.setParagraph(), T.run();
  }
  function p() {
    t.editor.chain().focus().setNodeSelection(o).run(), document.execCommand("copy");
  }
  function f() {
    t.editor.commands.setNodeSelection(o);
    const { $anchor: T } = t.editor.state.selection, _ = T.node(1) || t.editor.state.selection.node;
    t.editor.chain().setMeta("hideDragHandle", !0).insertContentAt(o + ((n == null ? void 0 : n.nodeSize) || 0), _.toJSON()).run();
  }
  function P(T) {
    t.editor.commands.setTextAlign(T);
  }
  function N() {
    const T = Te(t.editor.state.tr, o, 1);
    T.setMeta("hideDragHandle", !0), t.editor.view.dispatch && t.editor.view.dispatch(T);
  }
  function y() {
    const T = Te(t.editor.state.tr, o, -1);
    t.editor.view.dispatch && t.editor.view.dispatch(T);
  }
  function b() {
    t.editor.chain().setMeta("hideDragHandle", !0).setNodeSelection(o).deleteSelection().run();
  }
  function S(T) {
    T.node && a(T.node), c(T.pos);
  }
  function z() {
    var T;
    if (o !== -1) {
      const _ = (n == null ? void 0 : n.nodeSize) || 0, H = o + _, R = (n == null ? void 0 : n.type.name) === "paragraph" && ((T = n == null ? void 0 : n.content) == null ? void 0 : T.size) === 0, k = R ? o + 2 : H + 2;
      t.editor.chain().command(({ dispatch: B, tr: F, state: Y }) => B ? (R ? F.insertText("/", o, o + 1) : F.insert(
        H,
        Y.schema.nodes.paragraph.create(null, [Y.schema.text("/")])
      ), B(F)) : !0).focus(k).run();
    }
  }
  $(() => (d ? t.editor.commands.setMeta("lockDragHandle", !0) : t.editor.commands.setMeta("lockDragHandle", !1), () => {
    t.editor.commands.setMeta("lockDragHandle", !1);
  }), [d]), $(() => () => {
    s.current && (t.editor.unregisterPlugin(e), s.current = null);
  }, []), $(() => {
    var T;
    (T = t.editor) != null && T.isDestroyed && s.current && (t.editor.unregisterPlugin(e), s.current = null);
  }, [(C = t.editor) == null ? void 0 : C.isDestroyed]);
  const L = (T) => {
    t != null && t.disabled || h(T);
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
            onClick: z,
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
          fo,
          {
            onOpenChange: L,
            open: d,
            children: [
              /* @__PURE__ */ g("div", { className: "richtext-relative richtext-flex richtext-flex-col", children: [
                /* @__PURE__ */ g(Or, { children: [
                  /* @__PURE__ */ i(
                    Dr,
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
                          onMouseUp: (T) => {
                            T.preventDefault(), !(t != null && t.disabled) && h(!0);
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
                  /* @__PURE__ */ i(Pe, { children: r("editor.draghandle.tooltip") })
                ] }),
                /* @__PURE__ */ i(go, { className: "richtext-absolute richtext-left-0 richtext-top-0 richtext-z-0 richtext-size-[28px]" })
              ] }),
              /* @__PURE__ */ g(
                Sr,
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
                        onClick: b,
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
                    u || m ? /* @__PURE__ */ i(Mr, {}) : null,
                    u ? /* @__PURE__ */ g(Ge, { children: [
                      /* @__PURE__ */ g(be, { className: "richtext-flex richtext-gap-3", children: [
                        /* @__PURE__ */ i(K, { name: "AlignCenter" }),
                        /* @__PURE__ */ i("span", { children: r("editor.textalign.tooltip") })
                      ] }),
                      /* @__PURE__ */ i(Ue, { children: /* @__PURE__ */ g(ye, { children: [
                        /* @__PURE__ */ g(
                          ot,
                          {
                            className: "richtext-flex richtext-gap-3",
                            onClick: () => P("left"),
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
                            onClick: () => P("center"),
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
                            onClick: () => P("right"),
                            children: [
                              /* @__PURE__ */ i(K, { name: "AlignRight" }),
                              /* @__PURE__ */ i("span", { children: r("editor.textalign.right.tooltip") })
                            ]
                          }
                        )
                      ] }) })
                    ] }) : null,
                    m ? /* @__PURE__ */ g(Ge, { children: [
                      /* @__PURE__ */ g(be, { className: "richtext-flex richtext-gap-3", children: [
                        /* @__PURE__ */ i(K, { name: "IndentIncrease" }),
                        /* @__PURE__ */ i("span", { children: r("editor.indent") })
                      ] }),
                      /* @__PURE__ */ i(Ue, { children: /* @__PURE__ */ g(ye, { children: [
                        /* @__PURE__ */ g(
                          ot,
                          {
                            className: "richtext-flex richtext-gap-3",
                            disabled: ((A = n == null ? void 0 : n.attrs) == null ? void 0 : A.indent) >= Ce.max,
                            onClick: N,
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
                            disabled: ((v = n == null ? void 0 : n.attrs) == null ? void 0 : v.indent) <= Ce.min,
                            onClick: y,
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
const ds = {
  maxWidth: "auto",
  zIndex: 20,
  appendTo: "parent",
  moveTransition: "transform 0.1s ease-out"
};
function hs({ item: t, disabled: e, editor: r }) {
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
function us(t) {
  const { t: e, lang: r } = X(), n = ({ editor: o }) => {
    const { selection: c } = o.view.state, { $from: l, to: s } = c;
    return l.pos === s ? !1 : c instanceof Ot;
  }, a = U(() => t.disabled || !(t != null && t.editor) ? [] : ns(t.editor, e), [t.disabled, t.editor, r, e]);
  return /* @__PURE__ */ i(
    it,
    {
      editor: t == null ? void 0 : t.editor,
      shouldShow: n,
      tippyOptions: ds,
      children: a != null && a.length ? /* @__PURE__ */ i("div", { className: "richtext-pointer-events-auto richtext-w-auto richtext-select-none richtext-rounded-sm !richtext-border richtext-border-neutral-200 richtext-bg-background richtext-px-3 richtext-py-2 richtext-shadow-sm richtext-transition-all dark:richtext-border-neutral-800", children: /* @__PURE__ */ i("div", { className: "richtext-relative richtext-flex richtext-h-[26px] richtext-flex-nowrap richtext-items-center richtext-justify-start richtext-gap-[4px] richtext-whitespace-nowrap", children: a == null ? void 0 : a.map((o, c) => (o == null ? void 0 : o.type) === "divider" ? /* @__PURE__ */ i(
        et,
        {
          className: "!richtext-mx-1 !richtext-my-2 !richtext-h-[16px]",
          orientation: "vertical"
        },
        `bubbleMenu-divider-${c}`
      ) : /* @__PURE__ */ i(
        hs,
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
function ms({ editor: t, disabled: e, actions: r }) {
  var f, P, N, y, b, S, z, L, C, A, v, T, _, H, R, k, B, F;
  const n = ({ editor: Y }) => ui(Y.view.state, "table"), { t: a } = X();
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
  function w(Y) {
    t.chain().focus().setTableCellBackground(Y).run();
  }
  return /* @__PURE__ */ i(
    it,
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
          var Ve;
          const {
            view: Y,
            state: {
              selection: { from: nt }
            }
          } = t, Ct = Y.domAtPos(nt).node;
          if (!Ct)
            return new DOMRect(-1e3, -1e3, 0, 0);
          const $e = (Ve = Ct == null ? void 0 : Ct.closest) == null ? void 0 : Ve.call(Ct, ".tableWrapper");
          return $e ? $e.getBoundingClientRect() : new DOMRect(-1e3, -1e3, 0, 0);
        },
        plugins: [Qn],
        sticky: "popper"
      },
      children: e ? /* @__PURE__ */ i(V, {}) : /* @__PURE__ */ g("div", { className: "richtext-flex richtext-size-full richtext-min-w-32 richtext-flex-row richtext-items-center richtext-gap-0.5 richtext-rounded-lg !richtext-border richtext-border-border richtext-bg-background richtext-p-2 richtext-leading-none richtext-shadow-sm", children: [
        /* @__PURE__ */ i(
          O,
          {
            action: o,
            disabled: !((P = (f = t == null ? void 0 : t.can()) == null ? void 0 : f.addColumnBefore) != null && P.call(f)),
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
            disabled: !((y = (N = t == null ? void 0 : t.can()) == null ? void 0 : N.addColumnAfter) != null && y.call(N)),
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
            disabled: !((S = t == null ? void 0 : (b = t.can()).deleteColumn) != null && S.call(b)),
            icon: "DeleteColumn",
            tooltip: a("editor.table.menu.deleteColumn"),
            "tooltip-options": {
              sideOffset: 15
            }
          }
        ),
        /* @__PURE__ */ i(
          et,
          {
            className: "!richtext-mx-1 !richtext-my-2 !richtext-h-[16px]",
            orientation: "vertical"
          }
        ),
        /* @__PURE__ */ i(
          O,
          {
            action: s,
            disabled: !((L = t == null ? void 0 : (z = t.can()).addRowBefore) != null && L.call(z)),
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
            action: d,
            disabled: !((A = (C = t == null ? void 0 : t.can()) == null ? void 0 : C.addRowAfter) != null && A.call(C)),
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
            action: h,
            disabled: !((T = (v = t == null ? void 0 : t.can()) == null ? void 0 : v.deleteRow) != null && T.call(v)),
            icon: "DeleteRow",
            tooltip: a("editor.table.menu.deleteRow"),
            "tooltip-options": {
              sideOffset: 15
            }
          }
        ),
        /* @__PURE__ */ i(
          et,
          {
            className: "!richtext-mx-1 !richtext-my-2 !richtext-h-[16px]",
            orientation: "vertical"
          }
        ),
        /* @__PURE__ */ i(
          O,
          {
            action: u,
            disabled: !((H = (_ = t == null ? void 0 : t.can()) == null ? void 0 : _.mergeCells) != null && H.call(_)),
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
            disabled: !((k = (R = t == null ? void 0 : t.can()) == null ? void 0 : R.splitCell) != null && k.call(R)),
            icon: "TableCellsSplit",
            tooltip: a("editor.table.menu.splitCells"),
            "tooltip-options": {
              sideOffset: 15
            }
          }
        ),
        /* @__PURE__ */ i(
          et,
          {
            className: "!richtext-mx-1 !richtext-my-2 !richtext-h-[16px]",
            orientation: "vertical"
          }
        ),
        /* @__PURE__ */ i(
          ea,
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
            disabled: !((F = (B = t == null ? void 0 : t.can()) == null ? void 0 : B.deleteTable) != null && F.call(B)),
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
function xs(t) {
  const { t: e } = X();
  return /* @__PURE__ */ g("div", { className: "richtext-flex richtext-items-center richtext-gap-2 richtext-p-2 richtext-bg-white !richtext-border richtext-rounded-lg richtext-shadow-sm dark:richtext-bg-black richtext-border-neutral-200 dark:richtext-border-neutral-800", children: [
    /* @__PURE__ */ i(
      "a",
      {
        href: t == null ? void 0 : t.link,
        target: "_blank",
        rel: "noopener noreferrer",
        className: "richtext-text-sm richtext-underline richtext-break-all",
        children: Li(t == null ? void 0 : t.link, {
          length: 50,
          omission: "…"
        })
      }
    ),
    (t == null ? void 0 : t.link) && /* @__PURE__ */ i(et, { orientation: "vertical", className: "!richtext-h-4" }),
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
function fs({ editor: t, disabled: e }) {
  const [r, n] = M(!1), a = U(() => {
    const { href: s } = t.getAttributes("link");
    return s;
  }, [t]), o = D(({ editor: s }) => s.isActive("link"), []), c = (s, d, h) => {
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
    }).setLink({ href: s }).focus().run(), n(!1);
  }, l = D(() => {
    t.chain().extendMarkRange("link").unsetLink().focus().run(), n(!1);
  }, [t]);
  return /* @__PURE__ */ i(V, { children: /* @__PURE__ */ i(
    it,
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
      children: e ? /* @__PURE__ */ i(V, {}) : /* @__PURE__ */ i(V, { children: r ? /* @__PURE__ */ i(ra, { onSetLink: c, editor: t }) : /* @__PURE__ */ i(
        xs,
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
const De = {
  maxWidth: "auto",
  zIndex: 20,
  appendTo: "parent",
  moveTransition: "transform 0.1s ease-out"
};
function _e({ item: t, disabled: e, editor: r }) {
  var a;
  const n = t.component;
  return n ? /* @__PURE__ */ i(Me, { children: t.type === "divider" ? /* @__PURE__ */ i(
    et,
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
function gs(t) {
  return t.type.name === Ht.name;
}
function ps(t) {
  return t.type.name === Ur.name;
}
function ws(t) {
  return t.type.name === Fr.name;
}
function vs(t) {
  const { lang: e } = X(), r = ({ editor: a }) => {
    const { selection: o } = a.view.state, { $from: c, to: l } = o;
    let s = !1;
    return a.view.state.doc.nodesBetween(c.pos, l, (d) => {
      if (gs(d))
        return s = !0, !1;
    }), s;
  }, n = U(() => t.disabled ? [] : Qc(t.editor), [t.disabled, t.editor, e]);
  return /* @__PURE__ */ i(V, { children: /* @__PURE__ */ i(
    it,
    {
      editor: t == null ? void 0 : t.editor,
      shouldShow: r,
      tippyOptions: De,
      children: n != null && n.length ? /* @__PURE__ */ i("div", { className: "richtext-pointer-events-auto richtext-w-auto richtext-select-none richtext-rounded-sm !richtext-border richtext-border-neutral-200 richtext-bg-background richtext-px-3 richtext-py-2 richtext-shadow-sm richtext-transition-all dark:richtext-border-neutral-800", children: /* @__PURE__ */ i("div", { className: "richtext-relative richtext-flex richtext-h-[26px] richtext-flex-nowrap richtext-items-center richtext-justify-start richtext-whitespace-nowrap", children: n == null ? void 0 : n.map((a, o) => /* @__PURE__ */ i(
        _e,
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
function bs(t) {
  const { lang: e } = X(), r = ({ editor: a }) => {
    const { selection: o } = a.view.state, { $from: c, to: l } = o;
    let s = !1;
    return a.view.state.doc.nodesBetween(c.pos, l, (d) => {
      if (ps(d))
        return s = !0, !1;
    }), s;
  }, n = U(() => t.disabled ? [] : ts(t.editor), [t.disabled, t.editor, e]);
  return /* @__PURE__ */ i(V, { children: /* @__PURE__ */ i(
    it,
    {
      editor: t == null ? void 0 : t.editor,
      shouldShow: r,
      tippyOptions: De,
      children: n != null && n.length ? /* @__PURE__ */ i("div", { className: "richtext-pointer-events-auto richtext-w-auto richtext-select-none richtext-rounded-sm !richtext-border richtext-border-neutral-200 richtext-bg-background richtext-px-3 richtext-py-2 richtext-shadow-sm richtext-transition-all dark:richtext-border-neutral-800", children: /* @__PURE__ */ i("div", { className: "richtext-relative richtext-flex richtext-h-[26px] richtext-flex-nowrap richtext-items-center richtext-justify-start richtext-whitespace-nowrap", children: n == null ? void 0 : n.map((a, o) => /* @__PURE__ */ i(
        _e,
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
function ys(t) {
  const { lang: e } = X(), r = ({ editor: a }) => {
    const { selection: o } = a.view.state, { $from: c, to: l } = o;
    let s = !1;
    return a.view.state.doc.nodesBetween(c.pos, l, (d) => {
      if (ws(d))
        return s = !0, !1;
    }), s;
  }, n = U(() => t.disabled ? [] : is(t.editor), [t.editor, t.disabled, e]);
  return /* @__PURE__ */ i(V, { children: /* @__PURE__ */ i(
    it,
    {
      editor: t == null ? void 0 : t.editor,
      shouldShow: r,
      tippyOptions: De,
      children: n != null && n.length ? /* @__PURE__ */ i("div", { className: "richtext-pointer-events-auto richtext-w-auto richtext-select-none richtext-rounded-sm !richtext-border richtext-border-neutral-200 richtext-bg-background richtext-px-3 richtext-py-2 richtext-shadow-sm richtext-transition-all dark:richtext-border-neutral-800", children: /* @__PURE__ */ i("div", { className: "richtext-relative richtext-flex richtext-h-[26px] richtext-flex-nowrap richtext-items-center richtext-justify-start richtext-whitespace-nowrap", children: n == null ? void 0 : n.map((a, o) => /* @__PURE__ */ i(
        _e,
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
function Cs({ editor: t }) {
  const { t: e } = X(), r = D(() => t.isActive(ie.name), [t]), n = D(() => le(ie.name, t), [t]), a = D(() => t.chain().focus().addColBefore().run(), [t]), o = D(() => t.chain().focus().addColAfter().run(), [t]), c = D(() => t.chain().focus().deleteCol().run(), [t]);
  return /* @__PURE__ */ i(
    it,
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
function Ts({ editor: t, extensions: e }) {
  const { t: r } = X(), n = U(() => {
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
function Ns() {
  const { toasts: t } = zo();
  return /* @__PURE__ */ g(Co, { children: [
    t.map(({ id: e, title: r, description: n, action: a, ...o }) => /* @__PURE__ */ g(
      Er,
      {
        ...o,
        children: [
          /* @__PURE__ */ g("div", { className: "richtext-grid richtext-gap-1", children: [
            r && /* @__PURE__ */ i(Rr, { children: r }),
            n && /* @__PURE__ */ i(Pr, { children: n })
          ] }),
          a,
          /* @__PURE__ */ i(zr, {})
        ]
      },
      e
    )),
    /* @__PURE__ */ i(Ir, {})
  ] });
}
const ks = `
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
`, Ss = oi(({ children: t, id: e }) => {
  const [, r] = Tr((c) => c.value), [, n] = Nr((c) => c.value), a = (c) => {
    r({
      value: c.detail
    });
  }, o = (c) => {
    n({
      value: c.detail
    });
  };
  return $(() => {
    const c = re(gt.EDIT(e), a), l = re(gt.UPDATE_THEME(e), o);
    return () => {
      c(), l();
    };
  }, []), /* @__PURE__ */ i(V, { children: t });
});
function Ms({ children: t, id: e }) {
  return /* @__PURE__ */ i(no, { children: /* @__PURE__ */ i(oo, { children: /* @__PURE__ */ i(Ss, { id: e, children: t }) }) });
}
const ar = "data-rc-order", cr = "data-rc-priority", As = "rc-util-key", Se = /* @__PURE__ */ new Map();
function Ls(t, e) {
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
function Kr({ mark: t } = {}) {
  return t ? t.startsWith("data-") ? t : `data-${t}` : As;
}
function Be(t) {
  return t.attachTo ? t.attachTo : document.querySelector("head") || document.body;
}
function Is(t) {
  return t === "queue" ? "prependQueue" : t ? "prepend" : "append";
}
function Zr(t) {
  return [...(Se.get(t) || t).children].filter(
    (e) => e.tagName === "STYLE"
  );
}
function Jr(t, e = {}) {
  const { csp: r, prepend: n, priority: a = 0 } = e, o = Is(n), c = o === "prependQueue", l = document.createElement("style");
  l.setAttribute(ar, o), c && a && l.setAttribute(cr, `${a}`), r != null && r.nonce && (l.nonce = r == null ? void 0 : r.nonce), l.innerHTML = t;
  const s = Be(e), { firstChild: d } = s;
  if (n) {
    if (c) {
      const h = Zr(s).filter((u) => {
        if (!["prepend", "prependQueue"].includes(u.getAttribute(ar)))
          return !1;
        const m = Number(u.getAttribute(cr) || 0);
        return a >= m;
      });
      if (h.length > 0)
        return s.insertBefore(l, h.at(-1).nextSibling), l;
    }
    d.before(l);
  } else
    s.append(l);
  return l;
}
function Qr(t, e = {}) {
  const r = Be(e);
  return Zr(r).find((n) => n.getAttribute(Kr(e)) === t);
}
function Es(t, e = {}) {
  const r = Qr(t, e);
  r && r.remove();
}
function zs(t, e) {
  const r = Se.get(t);
  if (!r || !Ls(document, r)) {
    const n = Jr("", e), { parentNode: a } = n;
    Se.set(t, a), n.remove();
  }
}
function Rs(t, e, r = {}) {
  var c, l, s;
  const n = Be(r);
  zs(n, r);
  const a = Qr(e, r);
  if (a)
    return (c = r.csp) != null && c.nonce && a.nonce !== ((l = r.csp) == null ? void 0 : l.nonce) && (a.nonce = (s = r.csp) == null ? void 0 : s.nonce), a.innerHTML !== t && (a.innerHTML = t), a;
  const o = Jr(t, r);
  return o.setAttribute(Kr(r), e), o;
}
function Ps(t, e) {
  const { content: r, extensions: n, useEditorOptions: a = {} } = t, o = ci(), c = U(() => {
    const u = Ii(n, n, "name");
    return [...n.map((x) => {
      const w = n.find((p) => p.name === x.name);
      return w ? x.configure(w.options) : x;
    }), ...u].map((x, w) => x.configure({ sort: w }));
  }, [n]), l = st((u) => {
    var x;
    const m = d(u, t.output);
    (x = t == null ? void 0 : t.onChangeContent) == null || x.call(t, m);
  }, pi), s = mi({
    extensions: c,
    content: r,
    onUpdate: ({ editor: u }) => {
      l && l(u);
    },
    ...a
  });
  si(e, () => ({
    editor: s
  })), $(() => {
    document.documentElement.classList.toggle("dark", t.dark), za.setTheme(o, t.dark ? "dark" : "light");
  }, [t.dark]), $(() => {
    s == null || s.setEditable(!(t != null && t.disabled)), co.setDisable(o, !(t != null && t.disabled));
  }, [s, t == null ? void 0 : t.disabled]), $(() => ((t == null ? void 0 : t.resetCSS) !== !1 && Rs(ks, "react-tiptap-reset"), () => {
    Es("react-tiptap-reset");
  }), [t == null ? void 0 : t.resetCSS]);
  function d(u, m) {
    return t != null && t.removeDefaultWrapper ? m === "html" ? u.isEmpty ? "" : u.getHTML() : m === "json" ? u.isEmpty ? {} : u.getJSON() : m === "text" ? u.isEmpty ? "" : u.getText() : "" : m === "html" ? u.getHTML() : m === "json" ? u.getJSON() : m === "text" ? u.getText() : "";
  }
  li(() => {
    s && (s.id = o);
  }, [o, s]), $(() => () => {
    var u;
    (u = s == null ? void 0 : s.destroy) == null || u.call(s);
  }, []);
  const h = mo(s, "characterCount");
  return s ? /* @__PURE__ */ g("div", { className: "reactjs-tiptap-editor", children: [
    /* @__PURE__ */ i(
      Ms,
      {
        id: o,
        children: /* @__PURE__ */ i(
          So,
          {
            delayDuration: 0,
            disableHoverableContent: !0,
            children: /* @__PURE__ */ i("div", { className: "richtext-overflow-hidden richtext-rounded-[0.5rem] richtext-bg-background richtext-shadow richtext-outline richtext-outline-1", children: /* @__PURE__ */ g("div", { className: "richtext-flex richtext-max-h-full richtext-w-full richtext-flex-col", children: [
              !(t != null && t.hideToolbar) && /* @__PURE__ */ i(
                Gc,
                {
                  disabled: !!(t != null && t.disabled),
                  editor: s,
                  toolbar: t.toolbar
                }
              ),
              /* @__PURE__ */ i(
                xi,
                {
                  className: `richtext-relative ${(t == null ? void 0 : t.contentClass) || ""}`,
                  editor: s
                }
              ),
              h && /* @__PURE__ */ i(
                Ts,
                {
                  editor: s,
                  extensions: n
                }
              ),
              !(t != null && t.hideBubble) && /* @__PURE__ */ i(
                Wc,
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
    /* @__PURE__ */ i(Ns, {})
  ] }) : /* @__PURE__ */ i(V, {});
}
const nl = ai(Ps);
export {
  el as $,
  O as A,
  G as B,
  $r as C,
  Qe as D,
  Ce as E,
  ze as F,
  gt as G,
  ea as H,
  Ht as I,
  la as J,
  Nt as K,
  ra as L,
  ie as M,
  re as N,
  ct as O,
  Mt as P,
  Q,
  nl as R,
  Ar as S,
  Or as T,
  zo as U,
  Fr as V,
  mo as W,
  ge as X,
  il as Y,
  jo as Z,
  qo as _,
  Dr as a,
  tl as a0,
  rl as a1,
  Pe as b,
  E as c,
  Tt as d,
  Ur as e,
  Ke as f,
  io as g,
  Ne as h,
  Br as i,
  le as j,
  K as k,
  fo as l,
  go as m,
  Sr as n,
  po as o,
  Mr as p,
  Js as q,
  bo as r,
  ro as s,
  At as t,
  ao as u,
  bt as v,
  Hr as w,
  Fc as x,
  Bo as y,
  Qs as z
};
