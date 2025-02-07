var wn = Object.defineProperty;
var pn = (e, t, i) => t in e ? wn(e, t, { enumerable: !0, configurable: !0, writable: !0, value: i }) : e[t] = i;
var oe = (e, t, i) => pn(e, typeof t != "symbol" ? t + "" : t, i);
import { jsxs as m, jsx as r, Fragment as W } from "react/jsx-runtime";
import * as O from "react";
import Fe, { useState as y, useRef as J, useEffect as E, useCallback as M, useMemo as F, forwardRef as ft, useImperativeHandle as xt, Fragment as gt } from "react";
import "@radix-ui/react-select";
import { X as Ai, ChevronRight as vn, Check as Si, Circle as yn, Plus as Li, Bold as kn, LoaderCircle as Cn, Italic as Nn, Underline as Tn, Quote as An, Strikethrough as Sn, Minus as Ln, Eraser as Mn, PaintRoller as In, Redo2 as zn, Undo2 as Rn, ChevronDown as Mi, Subscript as Hn, Superscript as En, Code as On, CodeXml as Pn, Type as Dn, IndentIncrease as Bn, IndentDecrease as $n, List as Fn, ListOrdered as jn, ListTodo as Vn, Link as Un, ImageUp as Wn, Video as qn, Maximize as Gn, Minimize as Kn, Table as Xn, Sparkles as Yn, Pencil as Zn, Unlink as Jn, BetweenHorizonalEnd as Qn, BetweenHorizonalStart as er, BetweenVerticalStart as tr, BetweenVerticalEnd as ir, TableCellsMerge as nr, TableCellsSplit as rr, Trash2 as ar, Trash as or, Replace as ci, ChevronsUpDown as cr, Heading1 as sr, Heading2 as lr, Heading3 as dr, Heading4 as hr, Heading5 as ur, Heading6 as mr, Columns2 as si, Columns3 as fr, Columns4 as xr, GripVertical as gr, Copy as br, Clipboard as _r, PanelLeft as wr, PanelRight as pr, Frame as vr, SmilePlus as yr, SmilePlusIcon as kr, BookMarked as Cr, ZoomIn as Nr, ZoomOut as Tr, Settings as Ar, Eye as Sr, Paperclip as Lr, ChevronUp as Mr, CropIcon as Ir, FlipVertical as zr, FlipHorizontal as Rr, Clock3 as Hr, Laugh as Er, LucideAudioLines as Or, LucideVideo as Pr, LucideFile as Dr, LucideImage as Br, LucideSheet as $r, LucideTableProperties as Fr } from "lucide-react";
import { N as fe, a as ue, m as de, n as jr, R as Oe, B as me, b as Vr, u as Ur, E as Wr, i as qr, D as Gr, d as Kr, c as Xr, e as Yr, I as Zr, U as Jr, S as Qr, C as ea, F as ta, H as ia, T as na, f as K, g as ra, h as aa, j as oa, O as ca, k as sa, l as la, o as da, L as ha, p as ua, q as ma, r as fa, s as xa, t as st, P as ga, v as ba, w as _a, G as wa, x as pa, y as va, z as ya, A as ka, J as Ca, K as Na, M as Ii, Q as zi, V as Ri, W as jt, X as Hi, Y as Ta, Z as Aa, _ as Sa, $ as La, a0 as Ma } from "./tiptap-CfhZKmWB.js";
import { u as P, C as Ia, E as za, l as V, B as Ra, I as lt, V as zt, D as Ha, a as Ea, b as li, c as Ei, d as Oa, e as dt, f as ht, g as Oi, T as Qe, h as et, i as tt } from "./locales-Bxq8mp1I.js";
import { Slot as Vt } from "@radix-ui/react-slot";
import { ao as Pa, ap as se, aq as Pi, ar as bt, g as _t, as as Ut, at as Da, au as Ue, e as Wt, d as _e, av as Di, aw as qt, ax as Ba, P as we, L as $a, a as pe, a4 as je, a5 as We, ay as ut, az as Bi, al as Fa, aA as ja, aB as Va } from "./vendor-Bjf8bpbc.js";
import Gt, { sticky as Ua } from "tippy.js";
import { flushSync as mt } from "react-dom";
import Wa from "react-image-crop";
import * as Rt from "@radix-ui/react-checkbox";
import Kt from "scroll-into-view-if-needed";
import * as ve from "@radix-ui/react-tabs";
import { defaultNodes as Ae, DocxSerializer as qa, defaultMarks as Ga } from "prosemirror-docx";
import { Packer as Ka } from "docx";
import * as ie from "@radix-ui/react-dialog";
import * as qe from "@radix-ui/react-popover";
import * as $i from "@radix-ui/react-label";
import { Resizable as Xa } from "re-resizable";
import { Tweet as Ya } from "react-tweet";
import { TextAlignCenterIcon as Za, TextAlignJustifyIcon as Ja, TextAlignLeftIcon as Qa, TextAlignRightIcon as eo } from "@radix-ui/react-icons";
import { HexColorPicker as to } from "react-colorful";
import * as Fi from "@radix-ui/react-separator";
import * as Ht from "@radix-ui/react-switch";
import * as q from "@radix-ui/react-dropdown-menu";
import * as Ke from "@radix-ui/react-tooltip";
import * as Q from "@radix-ui/react-toast";
import * as ji from "@radix-ui/react-toggle";
let Nt;
function Tt() {
  return Nt === void 0 && (Nt = navigator.platform.includes("Mac")), Nt;
}
function wt(e) {
  return `${e}`.toLowerCase() === "mod" ? Tt() ? "⌘" : "Ctrl" : `${e}`.toLowerCase() === "alt" ? Tt() ? "⌥" : "Alt" : `${e}`.toLowerCase() === "shift" ? Tt() ? "⇧" : "Shift" : e;
}
function pt(e) {
  return e.map(wt).join(" ");
}
function I(...e) {
  return Pa(se(e));
}
const w = Fe.forwardRef(
  (e, t) => {
    const {
      icon: i = void 0,
      // title = undefined,
      tooltip: n = void 0,
      disabled: a = !1,
      customClass: o = "",
      // color = undefined,
      loading: c = void 0,
      shortcutKeys: s = void 0,
      tooltipOptions: l = {},
      action: d = void 0,
      isActive: h = void 0,
      children: f,
      asChild: u = !1,
      upload: x = !1,
      ...g
    } = e, _ = Je[i];
    return /* @__PURE__ */ m(Pe, { children: [
      /* @__PURE__ */ r(De, { asChild: !0, children: /* @__PURE__ */ m(
        u ? Vt : Ze,
        {
          ref: t,
          size: "sm",
          className: I("richtext-w-[32px] richtext-h-[32px]", o),
          disabled: a,
          onClick: d,
          "data-state": h != null && h() ? "on" : "off",
          ...g,
          children: [
            _ && /* @__PURE__ */ r(_, { className: "richtext-w-4 richtext-h-4" }),
            f
          ]
        }
      ) }),
      n && /* @__PURE__ */ r(Ne, { ...l, children: /* @__PURE__ */ m("div", { className: "richtext-flex richtext-flex-col richtext-items-center richtext-text-center richtext-max-w-24", children: [
        /* @__PURE__ */ r("div", { children: n }),
        !!(s != null && s.length) && /* @__PURE__ */ r("span", { children: pt(s) })
      ] }) })
    ] });
  }
), Xt = Fe.forwardRef(
  ({ asChild: e, ...t }, i) => {
    var o;
    const n = Je[t.icon];
    return /* @__PURE__ */ m(Pe, { children: [
      /* @__PURE__ */ r(De, { asChild: !0, children: /* @__PURE__ */ r(
        e ? Vt : U,
        {
          ref: i,
          className: "richtext-h-[32px] richtext-px-[5px] richtext-py-0 richtext-min-w-24  richtext-overflow-hidden",
          variant: "ghost",
          disabled: t == null ? void 0 : t.disabled,
          ...t,
          children: /* @__PURE__ */ m("div", { className: "richtext-flex richtext-items-center richtext-h-full richtext-font-normal", children: [
            (t == null ? void 0 : t.title) && /* @__PURE__ */ r("div", { className: "richtext-flex-grow richtext-text-sm richtext-text-left richtext-truncate", children: t == null ? void 0 : t.title }),
            n && /* @__PURE__ */ r(n, { className: "richtext-flex-shrink-0 richtext-w-3 richtext-h-3 richtext-ml-1 richtext-text-zinc-500" })
          ] })
        }
      ) }),
      /* @__PURE__ */ r(Ne, { children: /* @__PURE__ */ m("div", { className: "richtext-flex richtext-flex-col richtext-items-center richtext-text-center richtext-max-w-24", children: [
        (t == null ? void 0 : t.tooltip) && /* @__PURE__ */ r("div", { children: t == null ? void 0 : t.tooltip }),
        /* @__PURE__ */ r("div", { className: "richtext-flex", children: !!((o = t == null ? void 0 : t.shortcutKeys) != null && o.length) && /* @__PURE__ */ r("span", { children: pt(t == null ? void 0 : t.shortcutKeys) }) })
      ] }) })
    ] });
  }
);
function io(e) {
  return e;
}
function no(e, t, i, n) {
  const a = io, [o, c] = y(a(i)), s = J(o);
  return E(() => {
    const l = () => {
      const d = { ...i, ...e.getAttributes(t) };
      Object.keys(d).forEach((f) => {
        (d[f] === null || d[f] === void 0) && (d[f] = i ? i[f] : null);
      });
      const h = a(d);
      Pi(s.current, h) || (c(h), s.current = h);
    };
    return e.on("selectionUpdate", l), e.on("transaction", l), () => {
      e.off("selectionUpdate", l), e.off("transaction", l);
    };
  }, [e, i, t, a]), o;
}
const vt = ie.Root, yt = ie.Trigger, ro = ie.Portal, Vi = O.forwardRef(({ className: e, ...t }, i) => /* @__PURE__ */ r(
  ie.Overlay,
  {
    ref: i,
    className: I(
      "richtext-fixed richtext-inset-0 richtext-z-50 richtext-bg-black/80 richtext- data-[state=open]:richtext-animate-in data-[state=closed]:richtext-animate-out data-[state=closed]:richtext-fade-out-0 data-[state=open]:richtext-fade-in-0",
      e
    ),
    ...t
  }
));
Vi.displayName = ie.Overlay.displayName;
const Xe = O.forwardRef(({ className: e, children: t, ...i }, n) => /* @__PURE__ */ m(ro, { children: [
  /* @__PURE__ */ r(Vi, {}),
  /* @__PURE__ */ m(
    ie.Content,
    {
      ref: n,
      className: I(
        "richtext-dialog-content richtext-fixed richtext-left-[50%] richtext-top-[50%] richtext-z-50 richtext-grid richtext-w-full richtext-max-w-lg richtext-translate-x-[-50%] richtext-translate-y-[-50%] richtext-gap-4 richtext-border richtext-bg-background richtext-p-6 richtext-shadow-lg richtext-duration-200 data-[state=open]:richtext-animate-in data-[state=closed]:richtext-animate-out data-[state=closed]:richtext-fade-out-0 data-[state=open]:richtext-fade-in-0 data-[state=closed]:richtext-zoom-out-95 data-[state=open]:richtext-zoom-in-95 data-[state=closed]:richtext-slide-out-to-left-1/2 data-[state=closed]:richtext-slide-out-to-top-[48%] data-[state=open]:richtext-slide-in-from-left-1/2 data-[state=open]:richtext-slide-in-from-top-[48%] sm:richtext-rounded-lg",
        e
      ),
      ...i,
      children: [
        t,
        /* @__PURE__ */ m(ie.Close, { className: "richtext-absolute richtext-right-4 richtext-top-4 richtext-rounded-sm richtext-opacity-70 richtext-ring-offset-background richtext-transition-opacity hover:richtext-opacity-100 focus:richtext-outline-none focus:richtext-ring-2 focus:richtext-ring-ring focus:richtext-ring-offset-2 disabled:richtext-pointer-events-none data-[state=open]:richtext-bg-accent data-[state=open]:richtext-text-muted-foreground", children: [
          /* @__PURE__ */ r(Ai, { className: "richtext-h-4 richtext-w-4" }),
          /* @__PURE__ */ r("span", { className: "richtext-sr-only", children: "Close" })
        ] })
      ]
    }
  )
] }));
Xe.displayName = ie.Content.displayName;
function Ui({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ r(
    "div",
    {
      className: I(
        "richtext-flex richtext-flex-col richtext-space-y-1.5 richtext-text-center sm:richtext-text-left",
        e
      ),
      ...t
    }
  );
}
Ui.displayName = "DialogHeader";
function Yt({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ r(
    "div",
    {
      className: I(
        "richtext-flex richtext-flex-col-reverse sm:richtext-flex-row sm:richtext-justify-end sm:richtext-space-x-2",
        e
      ),
      ...t
    }
  );
}
Yt.displayName = "DialogFooter";
const Ye = O.forwardRef(({ className: e, ...t }, i) => /* @__PURE__ */ r(
  ie.Title,
  {
    ref: i,
    className: I(
      "richtext-text-lg richtext-font-semibold richtext-leading-none richtext-tracking-tight",
      e
    ),
    ...t
  }
));
Ye.displayName = ie.Title.displayName;
const ao = O.forwardRef(({ className: e, ...t }, i) => /* @__PURE__ */ r(
  ie.Description,
  {
    ref: i,
    className: I("richtext-text-sm richtext-text-muted-foreground", e),
    ...t
  }
));
ao.displayName = ie.Description.displayName;
const oo = bt(
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
), U = O.forwardRef(
  ({ className: e, variant: t, size: i, asChild: n = !1, ...a }, o) => /* @__PURE__ */ r(
    n ? Vt : "button",
    {
      className: I(oo({ variant: t, size: i, className: e })),
      ref: o,
      ...a
    }
  )
);
U.displayName = "Button";
const ye = q.Root, ke = q.Trigger, di = q.Portal, hi = q.Sub, Et = O.forwardRef(({ className: e, inset: t, children: i, ...n }, a) => /* @__PURE__ */ m(
  q.SubTrigger,
  {
    ref: a,
    className: I(
      "richtext-flex richtext-cursor-default richtext-select-none richtext-items-center richtext-rounded-sm richtext-px-2 richtext-py-1.5 richtext-text-sm richtext-outline-none focus:richtext-bg-accent data-[state=open]:richtext-bg-accent",
      t && "richtext-pl-8",
      e
    ),
    ...n,
    children: [
      i,
      /* @__PURE__ */ r(vn, { className: "richtext-ml-auto richtext-h-4 richtext-w-4" })
    ]
  }
));
Et.displayName = q.SubTrigger.displayName;
const Ot = O.forwardRef(({ className: e, ...t }, i) => /* @__PURE__ */ r(
  q.SubContent,
  {
    ref: i,
    className: I(
      "richtext-z-50 richtext-min-w-[8rem] richtext-overflow-hidden richtext-rounded-md !richtext-border richtext-bg-popover richtext-p-1 richtext-text-popover-foreground richtext-shadow-lg data-[state=open]:richtext-animate-in data-[state=closed]:richtext-animate-out data-[state=closed]:richtext-fade-out-0 data-[state=open]:richtext-fade-in-0 data-[state=closed]:richtext-zoom-out-95 data-[state=open]:richtext-zoom-in-95 data-[side=bottom]:richtext-slide-in-from-top-2 data-[side=left]:richtext-slide-in-from-right-2 data-[side=right]:richtext-slide-in-from-left-2 data-[side=top]:richtext-slide-in-from-bottom-2",
      e
    ),
    ...t
  }
));
Ot.displayName = q.SubContent.displayName;
const xe = O.forwardRef(({ className: e, sideOffset: t = 4, ...i }, n) => /* @__PURE__ */ r(q.Portal, { children: /* @__PURE__ */ r(
  q.Content,
  {
    ref: n,
    sideOffset: t,
    className: I(
      "richtext-z-50 richtext-min-w-[8rem] richtext-overflow-hidden richtext-rounded-md !richtext-border richtext-bg-popover richtext-p-1 richtext-text-popover-foreground richtext-shadow-md data-[state=open]:richtext-animate-in data-[state=closed]:richtext-animate-out data-[state=closed]:richtext-fade-out-0 data-[state=open]:richtext-fade-in-0 data-[state=closed]:richtext-zoom-out-95 data-[state=open]:richtext-zoom-in-95 data-[side=bottom]:richtext-slide-in-from-top-2 data-[side=left]:richtext-slide-in-from-right-2 data-[side=right]:richtext-slide-in-from-left-2 data-[side=top]:richtext-slide-in-from-bottom-2",
      e
    ),
    ...i
  }
) }));
xe.displayName = q.Content.displayName;
const ce = O.forwardRef(({ className: e, inset: t, ...i }, n) => /* @__PURE__ */ r(
  q.Item,
  {
    ref: n,
    className: I(
      "richtext-relative richtext-flex richtext-cursor-default richtext-select-none richtext-items-center richtext-rounded-sm richtext-px-2 richtext-py-1.5 richtext-text-sm richtext-outline-none richtext-transition-colors focus:richtext-bg-accent focus:richtext-text-accent-foreground data-[disabled]:richtext-pointer-events-none data-[disabled]:richtext-opacity-50",
      t && "richtext-pl-8",
      e
    ),
    ...i
  }
));
ce.displayName = q.Item.displayName;
const Ce = O.forwardRef(({ className: e, children: t, checked: i, ...n }, a) => /* @__PURE__ */ m(
  q.CheckboxItem,
  {
    ref: a,
    className: I(
      "richtext-relative richtext-flex richtext-cursor-default richtext-select-none richtext-items-center richtext-rounded-sm richtext-py-1.5 richtext-pl-8 richtext-pr-2 richtext-text-sm richtext-outline-none richtext-transition-colors focus:richtext-bg-accent focus:richtext-text-accent-foreground data-[disabled]:richtext-pointer-events-none data-[disabled]:richtext-opacity-50",
      e
    ),
    checked: i,
    ...n,
    children: [
      /* @__PURE__ */ r("span", { className: "richtext-absolute richtext-left-2 richtext-flex richtext-h-3.5 richtext-w-3.5 richtext-items-center richtext-justify-center", children: /* @__PURE__ */ r(q.ItemIndicator, { children: /* @__PURE__ */ r(Si, { className: "richtext-h-4 richtext-w-4" }) }) }),
      t
    ]
  }
));
Ce.displayName = q.CheckboxItem.displayName;
const co = O.forwardRef(({ className: e, children: t, ...i }, n) => /* @__PURE__ */ m(
  q.RadioItem,
  {
    ref: n,
    className: I(
      "richtext-relative richtext-flex richtext-cursor-default richtext-select-none richtext-items-center richtext-rounded-sm richtext-py-1.5 richtext-pl-8 richtext-pr-2 richtext-text-sm richtext-outline-none richtext-transition-colors focus:richtext-bg-accent focus:richtext-text-accent-foreground data-[disabled]:richtext-pointer-events-none data-[disabled]:richtext-opacity-50",
      e
    ),
    ...i,
    children: [
      /* @__PURE__ */ r("span", { className: "richtext-absolute richtext-left-2 richtext-flex richtext-h-3.5 richtext-w-3.5 richtext-items-center richtext-justify-center", children: /* @__PURE__ */ r(q.ItemIndicator, { children: /* @__PURE__ */ r(yn, { className: "richtext-h-2 richtext-w-2 richtext-fill-current" }) }) }),
      t
    ]
  }
));
co.displayName = q.RadioItem.displayName;
const so = O.forwardRef(({ className: e, inset: t, ...i }, n) => /* @__PURE__ */ r(
  q.Label,
  {
    ref: n,
    className: I(
      "richtext-px-2 richtext-py-1.5 richtext-text-sm richtext-font-semibold",
      t && "richtext-pl-8",
      e
    ),
    ...i
  }
));
so.displayName = q.Label.displayName;
const kt = O.forwardRef(({ className: e, ...t }, i) => /* @__PURE__ */ r(
  q.Separator,
  {
    ref: i,
    className: I("richtext--mx-1 richtext-my-1 richtext-h-px richtext-bg-muted", e),
    ...t
  }
));
kt.displayName = q.Separator.displayName;
function Wi({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ r(
    "span",
    {
      className: I("richtext-ml-auto richtext-text-xs richtext-tracking-widest richtext-opacity-60", e),
      ...t
    }
  );
}
Wi.displayName = "DropdownMenuShortcut";
const Y = O.forwardRef(
  ({ className: e, type: t, ...i }, n) => /* @__PURE__ */ r(
    "input",
    {
      type: t,
      className: I(
        "richtext-flex richtext-h-10 richtext-w-full richtext-rounded-md !richtext-border richtext-border-input richtext-bg-background richtext-px-3 richtext-py-2 richtext-text-sm richtext-ring-offset-background file:richtext-border-0 file:richtext-bg-transparent file:richtext-text-sm file:richtext-font-medium placeholder:richtext-text-muted-foreground focus-visible:richtext-outline-none  disabled:richtext-cursor-not-allowed disabled:richtext-opacity-50",
        e
      ),
      ref: n,
      ...i
    }
  )
);
Y.displayName = "Input";
const lo = bt(
  "richtext-text-sm richtext-font-medium richtext-leading-none peer-disabled:richtext-cursor-not-allowed peer-disabled:richtext-opacity-70"
), te = O.forwardRef(({ className: e, ...t }, i) => /* @__PURE__ */ r(
  $i.Root,
  {
    ref: i,
    className: I(lo(), e),
    ...t
  }
));
te.displayName = $i.Root.displayName;
const re = qe.Root, ae = qe.Trigger, ne = O.forwardRef(({ className: e, align: t = "center", sideOffset: i = 4, ...n }, a) => /* @__PURE__ */ r(qe.Portal, { children: /* @__PURE__ */ r(
  qe.Content,
  {
    ref: a,
    align: t,
    sideOffset: i,
    className: I(
      "richtext-z-50 richtext-w-72 richtext-rounded-md !richtext-border richtext-bg-popover richtext-p-4 richtext-text-popover-foreground richtext-shadow-md richtext-outline-none data-[state=open]:richtext-animate-in data-[state=closed]:richtext-animate-out data-[state=closed]:richtext-fade-out-0 data-[state=open]:richtext-fade-in-0 data-[state=closed]:richtext-zoom-out-95 data-[state=open]:richtext-zoom-in-95 data-[side=bottom]:richtext-slide-in-from-top-2 data-[side=left]:richtext-slide-in-from-right-2 data-[side=right]:richtext-slide-in-from-left-2 data-[side=top]:richtext-slide-in-from-bottom-2",
      e
    ),
    ...n
  }
) }));
ne.displayName = qe.Content.displayName;
const le = O.forwardRef(
  ({ className: e, orientation: t = "horizontal", decorative: i = !0, ...n }, a) => /* @__PURE__ */ r(
    Fi.Root,
    {
      ref: a,
      decorative: i,
      orientation: t,
      className: I(
        "richtext-shrink-0 richtext-bg-border",
        t === "horizontal" ? "richtext-h-[1px] richtext-w-full" : "richtext-h-full richtext-w-[1px]",
        e
      ),
      ...n
    }
  )
);
le.displayName = Fi.Root.displayName;
const Zt = O.forwardRef(({ className: e, ...t }, i) => /* @__PURE__ */ r(
  Ht.Root,
  {
    className: I(
      "richtext-peer richtext-inline-flex richtext-h-6 richtext-w-11 richtext-shrink-0 richtext-cursor-pointer richtext-items-center richtext-rounded-full richtext-border-2 richtext-border-transparent richtext-transition-colors focus-visible:richtext-outline-none focus-visible:richtext-ring-2 focus-visible:richtext-ring-ring focus-visible:richtext-ring-offset-2 focus-visible:richtext-ring-offset-background disabled:richtext-cursor-not-allowed disabled:richtext-opacity-50 data-[state=checked]:richtext-bg-primary data-[state=unchecked]:richtext-bg-input",
      e
    ),
    ...t,
    ref: i,
    children: /* @__PURE__ */ r(
      Ht.Thumb,
      {
        className: I(
          "richtext-pointer-events-none richtext-block richtext-h-5 richtext-w-5 richtext-rounded-full richtext-bg-background richtext-shadow-lg richtext-ring-0 richtext-transition-transform data-[state=checked]:richtext-translate-x-5 data-[state=unchecked]:richtext-translate-x-0"
        )
      }
    )
  }
));
Zt.displayName = Ht.Root.displayName;
const Jt = ve.Root, Ct = O.forwardRef(({ className: e, ...t }, i) => /* @__PURE__ */ r(
  ve.List,
  {
    ref: i,
    className: I(
      "richtext-inline-flex richtext-h-10 richtext-items-center richtext-justify-center richtext-rounded-md richtext-bg-muted richtext-p-1 richtext-text-muted-foreground",
      e
    ),
    ...t
  }
));
Ct.displayName = ve.List.displayName;
const Re = O.forwardRef(({ className: e, ...t }, i) => /* @__PURE__ */ r(
  ve.Trigger,
  {
    ref: i,
    className: I(
      "richtext-inline-flex richtext-items-center richtext-justify-center richtext-whitespace-nowrap richtext-rounded-sm richtext-px-3 richtext-py-1.5 richtext-text-sm richtext-font-medium richtext-ring-offset-background richtext-transition-all focus-visible:richtext-outline-none focus-visible:richtext-ring-2 focus-visible:richtext-ring-ring focus-visible:richtext-ring-offset-2 disabled:richtext-pointer-events-none disabled:richtext-opacity-50 data-[state=active]:richtext-bg-background data-[state=active]:richtext-text-foreground data-[state=active]:richtext-shadow-sm",
      e
    ),
    ...t
  }
));
Re.displayName = ve.Trigger.displayName;
const He = O.forwardRef(({ className: e, ...t }, i) => /* @__PURE__ */ r(
  ve.Content,
  {
    ref: i,
    className: I(
      "richtext-mt-2 richtext-ring-offset-background focus-visible:richtext-outline-none focus-visible:richtext-ring-2 focus-visible:richtext-ring-ring focus-visible:richtext-ring-offset-2",
      e
    ),
    ...t
  }
));
He.displayName = ve.Content.displayName;
const ho = Q.Provider, qi = O.forwardRef(({ className: e, ...t }, i) => /* @__PURE__ */ r(
  Q.Viewport,
  {
    ref: i,
    className: I(
      "richtext-fixed richtext-top-0 richtext-z-[100] richtext-flex richtext-max-h-screen richtext-w-full richtext-flex-col-reverse richtext-p-4 sm:richtext-bottom-0 sm:richtext-right-0 sm:richtext-top-auto sm:richtext-flex-col md:richtext-max-w-[420px]",
      e
    ),
    ...t
  }
));
qi.displayName = Q.Viewport.displayName;
const uo = bt(
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
), Gi = O.forwardRef(({ className: e, variant: t, ...i }, n) => /* @__PURE__ */ r(
  Q.Root,
  {
    ref: n,
    className: I(uo({ variant: t }), e),
    ...i
  }
));
Gi.displayName = Q.Root.displayName;
const mo = O.forwardRef(({ className: e, ...t }, i) => /* @__PURE__ */ r(
  Q.Action,
  {
    ref: i,
    className: I(
      "richtext-inline-flex richtext-h-8 richtext-shrink-0 richtext-items-center richtext-justify-center richtext-rounded-md !richtext-border richtext-bg-transparent richtext-px-3 richtext-text-sm richtext-font-medium richtext-ring-offset-background richtext-transition-colors hover:richtext-bg-secondary focus:richtext-outline-none focus:richtext-ring-2 focus:richtext-ring-ring focus:richtext-ring-offset-2 disabled:richtext-pointer-events-none disabled:richtext-opacity-50 group-[.destructive]:richtext-border-muted/40 group-[.destructive]:hover:richtext-border-destructive/30 group-[.destructive]:hover:richtext-bg-destructive group-[.destructive]:hover:richtext-text-destructive-foreground group-[.destructive]:focus:richtext-ring-destructive",
      e
    ),
    ...t
  }
));
mo.displayName = Q.Action.displayName;
const Ki = O.forwardRef(({ className: e, ...t }, i) => /* @__PURE__ */ r(
  Q.Close,
  {
    ref: i,
    className: I(
      "richtext-absolute richtext-right-2 richtext-top-2 richtext-rounded-md richtext-p-1 richtext-text-foreground/50 richtext-opacity-0 richtext-transition-opacity hover:richtext-text-foreground focus:richtext-opacity-100 focus:richtext-outline-none focus:richtext-ring-2 group-hover:richtext-opacity-100 group-[.destructive]:richtext-text-red-300 group-[.destructive]:hover:richtext-text-red-50 group-[.destructive]:focus:richtext-ring-red-400 group-[.destructive]:focus:richtext-ring-offset-red-600",
      e
    ),
    "toast-close": "",
    ...t,
    children: /* @__PURE__ */ r(Ai, { className: "richtext-h-4 richtext-w-4" })
  }
));
Ki.displayName = Q.Close.displayName;
const Xi = O.forwardRef(({ className: e, ...t }, i) => /* @__PURE__ */ r(
  Q.Title,
  {
    ref: i,
    className: I("richtext-text-sm richtext-font-semibold", e),
    ...t
  }
));
Xi.displayName = Q.Title.displayName;
const Yi = O.forwardRef(({ className: e, ...t }, i) => /* @__PURE__ */ r(
  Q.Description,
  {
    ref: i,
    className: I("richtext-text-sm richtext-opacity-90", e),
    ...t
  }
));
Yi.displayName = Q.Description.displayName;
const fo = bt(
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
), Ze = O.forwardRef(({ className: e, variant: t, size: i, ...n }, a) => /* @__PURE__ */ r(
  ji.Root,
  {
    ref: a,
    className: I(fo({ variant: t, size: i, className: e })),
    ...n
  }
));
Ze.displayName = ji.Root.displayName;
const xo = Ke.Provider, Pe = Ke.Root, De = Ke.Trigger, Ne = O.forwardRef(({ className: e, sideOffset: t = 4, ...i }, n) => /* @__PURE__ */ r(
  Ke.Content,
  {
    ref: n,
    sideOffset: t,
    className: I(
      "richtext-z-50 richtext-overflow-hidden richtext-rounded-md !richtext-border richtext-bg-popover richtext-px-3 richtext-py-1.5 richtext-text-sm richtext-text-popover-foreground richtext-shadow-md richtext-animate-in richtext-fade-in-0 richtext-zoom-in-95 data-[side=bottom]:richtext-slide-in-from-top-2 data-[side=left]:richtext-slide-in-from-right-2 data-[side=right]:richtext-slide-in-from-left-2 data-[side=top]:richtext-slide-in-from-bottom-2",
      e
    ),
    ...i
  }
));
Ne.displayName = Ke.Content.displayName;
const go = 1, bo = 1e6;
let At = 0;
function _o() {
  return At = (At + 1) % Number.MAX_SAFE_INTEGER, At.toString();
}
const St = /* @__PURE__ */ new Map();
function ui(e) {
  if (St.has(e))
    return;
  const t = setTimeout(() => {
    St.delete(e), Ve({
      type: "REMOVE_TOAST",
      toastId: e
    });
  }, bo);
  St.set(e, t);
}
function wo(e, t) {
  switch (t.type) {
    case "ADD_TOAST":
      return {
        ...e,
        toasts: [t.toast, ...e.toasts].slice(0, go)
      };
    case "UPDATE_TOAST":
      return {
        ...e,
        toasts: e.toasts.map(
          (i) => i.id === t.toast.id ? { ...i, ...t.toast } : i
        )
      };
    case "DISMISS_TOAST": {
      const { toastId: i } = t;
      return i ? ui(i) : e.toasts.forEach((n) => {
        ui(n.id);
      }), {
        ...e,
        toasts: e.toasts.map(
          (n) => n.id === i || i === void 0 ? {
            ...n,
            open: !1
          } : n
        )
      };
    }
    case "REMOVE_TOAST":
      return t.toastId === void 0 ? {
        ...e,
        toasts: []
      } : {
        ...e,
        toasts: e.toasts.filter((i) => i.id !== t.toastId)
      };
  }
}
const ot = [];
let ct = { toasts: [] };
function Ve(e) {
  ct = wo(ct, e), ot.forEach((t) => {
    t(ct);
  });
}
function po({ ...e }) {
  const t = _o(), i = (a) => Ve({
    type: "UPDATE_TOAST",
    toast: { ...a, id: t }
  }), n = () => Ve({ type: "DISMISS_TOAST", toastId: t });
  return Ve({
    type: "ADD_TOAST",
    toast: {
      ...e,
      id: t,
      open: !0,
      onOpenChange: (a) => {
        a || n();
      }
    }
  }), {
    id: t,
    dismiss: n,
    update: i
  };
}
function Zi() {
  const [e, t] = O.useState(ct);
  return O.useEffect(() => (ot.push(t), () => {
    const i = ot.indexOf(t);
    i > -1 && ot.splice(i, 1);
  }), [e]), {
    ...e,
    toast: po,
    dismiss: (i) => Ve({ type: "DISMISS_TOAST", toastId: i })
  };
}
const Ji = O.forwardRef(({ className: e, ...t }, i) => /* @__PURE__ */ r(
  Rt.Root,
  {
    ref: i,
    className: I(
      "!richtext-peer !richtext-h-4 !richtext-w-4 !richtext-p-0 !richtext-shrink-0 !richtext-rounded-sm !richtext-border !richtext-border-primary !richtext-ring-offset-background focus-visible:!richtext-outline-none focus-visible:!richtext-ring-2 focus-visible:!richtext-ring-ring focus-visible:!richtext-ring-offset-2 disabled:!richtext-cursor-not-allowed disabled:!richtext-opacity-50 data-[state=checked]:!richtext-bg-primary data-[state=checked]:!richtext-text-primary-foreground",
      e
    ),
    ...t,
    children: /* @__PURE__ */ r(
      Rt.Indicator,
      {
        className: I("!richtext-flex !richtext-p-0 !richtext-items-center !richtext-justify-center !richtext-text-current"),
        children: /* @__PURE__ */ r(Si, { className: "!richtext-h-4 !richtext-w-4" })
      }
    )
  }
));
Ji.displayName = Rt.Root.displayName;
function Td(e) {
  return e = e || /* @__PURE__ */ new Map(), {
    /**
     * A Map of event names to registered handler functions.
     */
    all: e,
    /**
     * Register an event handler for the given type.
     * @param {string|symbol} type Type of event to listen for, or `'*'` for all events
     * @param {Function} handler Function to call in response to given event
     * @memberOf mitt
     */
    on(t, i) {
      const n = e.get(t);
      n ? n.push(i) : e.set(t, [i]);
    },
    /**
     * Remove an event handler for the given type.
     * If `handler` is omitted, all handlers of the given type are removed.
     * @param {string|symbol} type Type of event to unregister `handler` from (`'*'` to remove a wildcard handler)
     * @param {Function} [handler] Handler function to remove
     * @memberOf mitt
     */
    off(t, i) {
      const n = e.get(t);
      n && (i ? n.splice(n.indexOf(i) >>> 0, 1) : e.set(t, []));
    },
    /**
     * Invoke all handlers for the given type.
     * If present, `'*'` handlers are invoked after type-matched handlers.
     *
     * Note: Manually firing '*' handlers is not supported.
     *
     * @param {string|symbol} type The event type to invoke
     * @param {Any} [evt] Any value (object is recommended and powerful), passed to each handler
     * @memberOf mitt
     */
    emit(t, i) {
      let n = e.get(t);
      n && [...n].map((a) => {
        a(i);
      }), n = e.get("*"), n && [...n].map((a) => {
        a(t, i);
      });
    }
  };
}
const vo = { padding: "0 12px 12px" }, yo = ({ width: e, maxWidth: t, height: i, onOk: n, children: a }) => {
  const { t: o } = P(), [c, s] = y({
    width: "",
    height: "",
    maxWidth: ""
  });
  E(() => {
    s({
      width: e,
      height: i,
      maxWidth: t
    });
  }, [i, t, e]);
  function l(d) {
    d.preventDefault(), d.stopPropagation(), n(c);
  }
  return /* @__PURE__ */ m(re, { modal: !0, children: [
    /* @__PURE__ */ r(ae, { asChild: !0, children: a }),
    /* @__PURE__ */ r(ne, { children: /* @__PURE__ */ r("div", { style: vo, children: /* @__PURE__ */ m("form", { className: "richtext-flex richtext-flex-col richtext-gap-2", onSubmit: l, children: [
      /* @__PURE__ */ r(te, { className: "mb-[6px]", children: "Width" }),
      /* @__PURE__ */ r("div", { className: "richtext-flex richtext-w-full richtext-max-w-sm richtext-items-center richtext-gap-1.5", children: /* @__PURE__ */ r("div", { className: "richtext-relative richtext-items-center richtext-w-full richtext-max-w-sm", children: /* @__PURE__ */ r(
        Y,
        {
          type: "number",
          value: c.width,
          required: !0,
          onChange: (d) => s({ ...c, width: d.target.value })
        }
      ) }) }),
      /* @__PURE__ */ r(te, { className: "mb-[6px]", children: "Max Width" }),
      /* @__PURE__ */ r("div", { className: "richtext-flex richtext-w-full richtext-max-w-sm richtext-items-center richtext-gap-1.5", children: /* @__PURE__ */ r("div", { className: "richtext-relative richtext-items-center richtext-w-full richtext-max-w-sm", children: /* @__PURE__ */ r(
        Y,
        {
          type: "number",
          value: c.maxWidth,
          required: !0,
          onChange: (d) => s({ ...c, maxWidth: d.target.value })
        }
      ) }) }),
      /* @__PURE__ */ r(te, { className: "mb-[6px]", children: "Height" }),
      /* @__PURE__ */ r("div", { className: "richtext-flex richtext-w-full richtext-max-w-sm richtext-items-center richtext-gap-1.5", children: /* @__PURE__ */ r("div", { className: "richtext-relative richtext-items-center richtext-w-full richtext-max-w-sm", children: /* @__PURE__ */ r(
        Y,
        {
          type: "number",
          value: c.height,
          required: !0,
          onChange: (d) => s({ ...c, height: d.target.value })
        }
      ) }) }),
      /* @__PURE__ */ r(U, { type: "submit", className: "richtext-self-end richtext-mt-2", children: o("editor.link.dialog.button.apply") })
    ] }) }) })
  ] });
};
function ko(e, t = "{}") {
  try {
    return JSON.stringify(e);
  } catch {
    return t;
  }
}
function ee(e, t = !1) {
  return (i) => {
    const n = e.startsWith("data-") ? e : `data-${e}`;
    let a = decodeURIComponent(i.getAttribute(n));
    if (a == null || typeof a == "string" && a === "null")
      try {
        const s = i.outerHTML.match(/([\s\S])+?="([\s\S])+?"/g);
        s && s.length && (a = (s.map((d) => d.trim()).reduce((d, h) => {
          const f = h.indexOf("="), u = [h.slice(0, f), h.slice(f + 1).slice(1, -1)];
          return d[u[0]] = u[1], d;
        }, {})[e.toLowerCase()] || "").replaceAll("&quot;", '"'));
      } catch (c) {
        console.error("Error getDatasetAttribute ", c.message, i);
      }
    if (t)
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
const Co = "_wrap_5y04w_1", No = "_handlerWrap_5y04w_11", To = "_innerWrap_5y04w_15", Ao = "_emptyWrap_5y04w_23", mi = {
  wrap: Co,
  handlerWrap: No,
  innerWrap: To,
  emptyWrap: Ao
}, Qi = _t(!1);
function Qt() {
  return Ut(Qi);
}
const So = {
  setDisable: (e) => {
    Qi.set(e);
  }
};
function Lo({ editor: e, node: t, updateAttributes: i }) {
  const n = Qt(), { url: a, width: o, height: c } = t.attrs, [s, l] = y("");
  function d() {
    s && e.chain().updateAttributes(Me.name, {
      url: s
    }).setNodeSelection(e.state.selection.from).focus().run();
  }
  const h = M(
    (f) => {
      i({ width: f.width, height: f.height });
    },
    [i]
  );
  return /* @__PURE__ */ m(fe, { children: [
    !a && /* @__PURE__ */ m("div", { className: "richtext-max-w-[600px] richtext-mx-[auto] richtext-my-[12px] richtext-flex richtext-items-center richtext-justify-center richtext-gap-[10px] richtext-p-[10px] richtext-border-[1px] richtext-border-solid richtext-border-[#ccc] richtext-rounded-[12px]", children: [
      /* @__PURE__ */ r(
        Y,
        {
          value: s,
          onInput: (f) => l(f.target.value),
          type: "url",
          className: "richtext-flex-1",
          autoFocus: !0,
          placeholder: "Enter link"
        }
      ),
      /* @__PURE__ */ r(U, { className: "richtext-w-[60px]", onClick: d, children: "OK" })
    ] }),
    a && /* @__PURE__ */ r(
      Xa,
      {
        size: { width: Number.parseInt(o), height: Number.parseInt(c) },
        onResizeStop: (f, u, x, g) => {
          h({
            width: Number.parseInt(o) + g.width,
            height: Number.parseInt(c) + g.height
          });
        },
        children: /* @__PURE__ */ r("div", { className: se(mi.wrap, "render-wrapper"), children: /* @__PURE__ */ r("div", { className: mi.innerWrap, style: { pointerEvents: n ? "none" : "auto" }, children: /* @__PURE__ */ r(
          "iframe",
          {
            src: a,
            className: "richtext-my-[12px] "
          }
        ) }) })
      }
    )
  ] });
}
const Me = ue.create({
  name: "iframe",
  content: "",
  marks: "",
  group: "block",
  selectable: !0,
  atom: !0,
  draggable: !0,
  addOptions() {
    var e;
    return {
      ...(e = this.parent) == null ? void 0 : e.call(this),
      HTMLAttributes: {
        class: "iframe"
      },
      button: ({
        editor: t,
        extension: i,
        t: n
      }) => ({
        component: w,
        componentProps: {
          action: (a) => t.commands.setIframe(a),
          upload: i.options.upload,
          disabled: !t.can().setIframe({}),
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
        parseHTML: ee("width")
      },
      height: {
        default: 300,
        parseHTML: ee("height")
      },
      url: {
        default: null,
        parseHTML: ee("url")
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
  renderHTML({ HTMLAttributes: e }) {
    return ["iframe", de(this.options.HTMLAttributes, e)];
  },
  addCommands() {
    return {
      setIframe: (e) => ({ tr: t, commands: i, chain: n }) => {
        var o, c, s;
        if (((s = (c = (o = t.selection) == null ? void 0 : o.node) == null ? void 0 : c.type) == null ? void 0 : s.name) == this.name)
          return i.updateAttributes(this.name, e);
        const a = e || { url: "" };
        return n().insertContent({
          type: this.name,
          attrs: a
        }).run();
      }
    };
  },
  addInputRules() {
    return [
      jr({
        find: /^\$iframe\$$/,
        type: this.type,
        getAttributes: () => ({ width: "100%" })
      })
    ];
  },
  addNodeView() {
    return Oe(Lo);
  }
});
function ei(e, t) {
  const { state: i } = t, n = i.selection.$anchor;
  let a = !1;
  if (n.depth)
    for (let o = n.depth; o > 0; o--)
      n.node(o).type.name === e && (t.dispatchTransaction && t.dispatchTransaction(i.tr.delete(n.before(o), n.after(o)).scrollIntoView()), a = !0);
  else {
    const o = i.selection.node;
    o && o.type.name === e && (t.chain().deleteSelection().run(), a = !0);
  }
  if (!a) {
    const o = n.pos;
    if (o) {
      const c = i.tr.doc.nodeAt(o);
      c && c.type.name === e && (t.dispatchTransaction && t.dispatchTransaction(i.tr.delete(o, o + c.nodeSize)), a = !0);
    }
  }
  return a;
}
function Mo({ editor: e }) {
  const { t } = P(), { width: i, height: n, url: a } = no(e, Me.name, {
    width: 0,
    height: 0,
    url: "",
    defaultShowPicker: !1
  }), [o, c] = y(!1), [s, l] = y(""), d = M(() => {
    c(!1);
  }, [c]);
  E(() => {
    o && l(a);
  }, [o, a]);
  const h = M(() => {
    e.chain().updateAttributes(Me.name, {
      url: s
    }).setNodeSelection(e.state.selection.from).focus().run(), c(!1);
  }, [e, s, c]), f = M(() => {
    window.open(a, "_blank");
  }, [a]), u = M(() => {
    c(!0);
  }, [c]), x = M(
    (N) => {
      e.chain().updateAttributes(Me.name, N).setNodeSelection(e.state.selection.from).focus().run();
    },
    [e]
  ), g = M(() => e.isActive(Me.name) && !a, [e, a]), _ = M(() => ei(Me.name, e), [e]);
  return /* @__PURE__ */ m(W, { children: [
    /* @__PURE__ */ r(
      me,
      {
        className: "bubble-menu",
        editor: e,
        pluginKey: "iframe-bubble-menu",
        shouldShow: g,
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
        children: /* @__PURE__ */ m("div", { className: "richtext-w-auto richtext-px-3 richtext-py-2 richtext-transition-all !richtext-border richtext-rounded-sm richtext-shadow-sm richtext-pointer-events-auto richtext-select-none richtext-border-neutral-200 dark:richtext-border-neutral-800 richtext-bg-background", children: [
          /* @__PURE__ */ r(
            w,
            {
              action: f,
              icon: "Eye",
              tooltip: "Visit Link"
            }
          ),
          /* @__PURE__ */ r(
            w,
            {
              action: u,
              icon: "Pencil",
              tooltip: "Open Edit Link"
            }
          ),
          /* @__PURE__ */ r(yo, { width: i, height: n, onOk: x, children: /* @__PURE__ */ r(
            w,
            {
              icon: "Settings",
              tooltip: t("editor.settings")
            }
          ) }),
          /* @__PURE__ */ r(
            w,
            {
              action: _,
              icon: "Trash2",
              tooltip: t("editor.delete")
            }
          )
        ] })
      }
    ),
    /* @__PURE__ */ m(
      vt,
      {
        open: o,
        onOpenChange: c,
        children: [
          /* @__PURE__ */ r(yt, {}),
          /* @__PURE__ */ m(Xe, { children: [
            /* @__PURE__ */ r(Ui, { children: /* @__PURE__ */ r(Ye, { children: "Edit Link Iframe" }) }),
            /* @__PURE__ */ r(
              Y,
              {
                value: s,
                onInput: (N) => l(N.target.value),
                type: "url",
                autoFocus: !0,
                placeholder: "Enter link"
              }
            ),
            /* @__PURE__ */ m(Yt, { children: [
              /* @__PURE__ */ r(U, { onClick: d, children: "Cancel" }),
              /* @__PURE__ */ r(U, { onClick: h, children: "OK" })
            ] })
          ] })
        ]
      }
    )
  ] });
}
function Io({ node: e }) {
  var n;
  const t = ((n = e == null ? void 0 : e.attrs) == null ? void 0 : n.src) || "", i = t == null ? void 0 : t.split("/").pop();
  return i ? /* @__PURE__ */ r(fe, { children: /* @__PURE__ */ r("div", { "data-twitter": "", children: /* @__PURE__ */ r(Ya, { id: i }) }) }) : null;
}
function zo(e) {
  function t(i) {
    e.action && e.action(i);
  }
  return /* @__PURE__ */ m(re, { modal: !0, children: [
    /* @__PURE__ */ r(ae, { disabled: e == null ? void 0 : e.disabled, asChild: !0, children: /* @__PURE__ */ r(
      w,
      {
        tooltip: e == null ? void 0 : e.tooltip,
        isActive: e == null ? void 0 : e.isActive,
        disabled: e == null ? void 0 : e.disabled,
        children: /* @__PURE__ */ r(D, { name: e == null ? void 0 : e.icon })
      }
    ) }),
    /* @__PURE__ */ r(ne, { hideWhenDetached: !0, className: "richtext-w-full", align: "start", side: "bottom", children: /* @__PURE__ */ r(en, { editor: e.editor, onSetLink: t }) })
  ] });
}
const Ro = /(https?:\/\/)?(www\.)?x\.com\/(\w{1,15})(\/status\/(\d+))?(\/\S*)?/g, Ho = /^https?:\/\/(www\.)?x\.com\/(\w{1,15})(\/status\/(\d+))?(\/\S*)?$/;
function fi(e) {
  return e.match(Ho);
}
const Pt = ue.create({
  name: "twitter",
  draggable: !0,
  selectable: !0,
  addOptions() {
    return {
      addPasteHandler: !0,
      HTMLAttributes: {},
      inline: !1,
      origin: "",
      button: ({ editor: e, t }) => ({
        component: zo,
        componentProps: {
          action: (i) => {
            e.commands.setTweet({ src: i });
          },
          isActive: () => !1,
          disabled: !1,
          icon: "Twitter",
          tooltip: t("editor.twitter.tooltip"),
          editor: e
        }
      })
    };
  },
  addNodeView() {
    return Oe(Io, { attrs: this.options.HTMLAttributes });
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
      setTweet: (e) => ({ commands: t }) => fi(e.src) ? t.insertContent({
        type: this.name,
        attrs: e
      }) : !1,
      updateTweet: (e) => ({ commands: t }) => fi(e.src) ? t.updateAttributes(this.name, { src: e.src }) : !1
    };
  },
  addPasteRules() {
    return this.options.addPasteHandler ? [
      Vr({
        find: Ro,
        type: this.type,
        getAttributes: (e) => ({ src: e.input })
      })
    ] : [];
  },
  renderHTML({ HTMLAttributes: e }) {
    return ["div", de({ "data-twitter": "" }, e)];
  }
});
function en(e) {
  const { t } = P(), [i, n] = y("");
  E(() => {
    var o;
    if (e != null && e.editor) {
      const { src: c } = (o = e.editor) == null ? void 0 : o.getAttributes(Pt.name);
      c && n(c);
    }
  }, [e == null ? void 0 : e.editor]);
  function a(o) {
    o.preventDefault(), o.stopPropagation(), e == null || e.onSetLink(i);
  }
  return /* @__PURE__ */ r("div", { className: "richtext-p-2 richtext-bg-white !richtext-border richtext-rounded-lg richtext-shadow-sm dark:richtext-bg-black border-neutral-200 dark:richtext-border-neutral-800", children: /* @__PURE__ */ m("form", { className: "richtext-flex richtext-flex-col richtext-gap-2", onSubmit: a, children: [
    /* @__PURE__ */ r(te, { className: "mb-[6px]", children: t("editor.link.dialog.text") }),
    /* @__PURE__ */ r("div", { className: "richtext-flex richtext-w-full richtext-max-w-sm richtext-items-center richtext-gap-1.5 richtext-mb-[10px]", children: /* @__PURE__ */ r("div", { className: "richtext-relative richtext-items-center richtext-w-full richtext-max-w-sm", children: /* @__PURE__ */ r(
      Y,
      {
        type: "text",
        value: i,
        required: !0,
        className: "richtext-w-80",
        placeholder: "Text",
        onChange: (o) => n(o.target.value)
      }
    ) }) }),
    /* @__PURE__ */ r(U, { type: "submit", className: "richtext-self-end richtext-mt-2", children: t("editor.link.dialog.button.apply") })
  ] }) });
}
function Eo({ editor: e, disabled: t }) {
  const [i, n] = y(!1), { t: a } = P(), o = M(({ editor: l }) => l.isActive(Pt.name), []), c = (l) => {
    e.commands.updateTweet({ src: l }), n(!1);
  }, s = M(() => ei(Pt.name, e), [e]);
  return /* @__PURE__ */ r(W, { children: /* @__PURE__ */ r(
    me,
    {
      editor: e,
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
      children: t ? /* @__PURE__ */ r(W, {}) : /* @__PURE__ */ r(W, { children: i ? /* @__PURE__ */ r(
        en,
        {
          onSetLink: c,
          editor: e
        }
      ) : /* @__PURE__ */ r("div", { className: "richtext-flex richtext-items-center richtext-gap-2 richtext-p-2 richtext-bg-white !richtext-border richtext-rounded-lg richtext-shadow-sm dark:richtext-bg-black richtext-border-neutral-200 dark:richtext-border-neutral-800", children: /* @__PURE__ */ m("div", { className: "richtext-flex richtext-flex-nowrap", children: [
        /* @__PURE__ */ r(
          w,
          {
            icon: "Pencil",
            tooltip: a("editor.link.edit.tooltip"),
            action: () => {
              n(!0);
            },
            tooltipOptions: { sideOffset: 15 }
          }
        ),
        /* @__PURE__ */ r(
          w,
          {
            icon: "Trash",
            tooltip: a("editor.delete"),
            action: s,
            tooltipOptions: { sideOffset: 15 }
          }
        )
      ] }) }) })
    }
  ) });
}
function Oo({ editor: e, disabled: t, bubbleMenu: i }) {
  const n = e.extensionManager.extensions.map((o) => o.name), a = () => {
    var o, c, s, l, d, h, f, u, x, g;
    return [
      n.includes("columns") && !((o = i == null ? void 0 : i.columnConfig) != null && o.hidden) ? /* @__PURE__ */ r(Vc, { editor: e }, "columns") : null,
      n.includes("table") && !((c = i == null ? void 0 : i.tableConfig) != null && c.hidden) ? /* @__PURE__ */ r(Hc, { editor: e }, "table") : null,
      n.includes("link") && !((s = i == null ? void 0 : i.linkConfig) != null && s.hidden) ? /* @__PURE__ */ r(Oc, { editor: e, disabled: t }, "link") : null,
      n.includes("image") && !((l = i == null ? void 0 : i.imageConfig) != null && l.hidden) ? /* @__PURE__ */ r($c, { editor: e, disabled: t }, "image") : null,
      n.includes(_n.name) && !((d = i == null ? void 0 : i.imageGifConfig) != null && d.hidden) ? /* @__PURE__ */ r(Fc, { editor: e, disabled: t }, "imageGif") : null,
      n.includes("video") && !((h = i == null ? void 0 : i.videoConfig) != null && h.hidden) ? /* @__PURE__ */ r(jc, { editor: e, disabled: t }, "video") : null,
      n.includes("iframe") && !((f = i == null ? void 0 : i.iframeConfig) != null && f.hidden) ? /* @__PURE__ */ r(Mo, { editor: e, disabled: t }, "iframe") : null,
      n.includes("twitter") && !((u = i == null ? void 0 : i.twitterConfig) != null && u.hidden) ? /* @__PURE__ */ r(Eo, { editor: e, disabled: t }, "twitter") : null,
      (x = i == null ? void 0 : i.floatingMenuConfig) != null && x.hidden ? null : /* @__PURE__ */ r(Lc, { editor: e, disabled: t }, "content"),
      (g = i == null ? void 0 : i.textConfig) != null && g.hidden ? null : /* @__PURE__ */ r(zc, { editor: e, disabled: t }, "text")
    ];
  };
  return i != null && i.render ? i.render({ editor: e, disabled: t || !1, bubbleMenu: i }, a()) : a().filter(Boolean);
}
function xi() {
  return /* @__PURE__ */ r("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", children: /* @__PURE__ */ r("path", { fill: "currentColor", d: "M18 14c0-4-6-10.8-6-10.8s-1.33 1.51-2.73 3.52l8.59 8.59c.09-.42.14-.86.14-1.31m-.88 3.12L12.5 12.5L5.27 5.27L4 6.55l3.32 3.32C6.55 11.32 6 12.79 6 14c0 3.31 2.69 6 6 6c1.52 0 2.9-.57 3.96-1.5l2.63 2.63l1.27-1.27z" }) });
}
function tn(e) {
  const { t } = P(), {
    highlight: i = !1,
    disabled: n = !1,
    selectedColor: a,
    setSelectedColor: o,
    onChange: c,
    colors: s = Ia
  } = e, l = F(() => {
    const x = s, g = [];
    for (let _ = 0; _ < x.length; _ += 10)
      g.push(x.slice(_, _ + 10));
    return g;
  }, [s]), [d, h] = y([]), f = (x) => {
    const g = [...d], _ = g.indexOf(x);
    _ !== -1 && g.splice(_, 1), g.unshift(x), g.length > 10 && g.pop(), h(g);
  };
  function u(x) {
    if (x === void 0) {
      o == null || o(x), c == null || c(x);
      return;
    }
    /^#([\da-f]{3}){1,2}$/i.test(x) && (o == null || o(x), c == null || c(x), f(x));
  }
  return /* @__PURE__ */ m(re, { modal: !0, children: [
    /* @__PURE__ */ r(ae, { className: "!richtext-p-0", disabled: n, asChild: !0, children: e == null ? void 0 : e.children }),
    /* @__PURE__ */ r(ne, { hideWhenDetached: !0, className: "richtext-w-full richtext-h-full richtext-p-2", align: "start", side: "bottom", children: /* @__PURE__ */ m("div", { className: "richtext-flex richtext-flex-col", children: [
      i ? /* @__PURE__ */ m(
        "div",
        {
          className: "richtext-flex richtext-items-center richtext-p-1 richtext-cursor-pointer rd-1 richtext-gap-[4px] hover:richtext-bg-accent",
          onClick: () => u(void 0),
          children: [
            /* @__PURE__ */ r(xi, {}),
            /* @__PURE__ */ r("span", { className: "richtext-ml-1 richtext-text-sm", children: t("editor.nofill") })
          ]
        }
      ) : /* @__PURE__ */ m(
        "div",
        {
          className: "richtext-flex richtext-items-center richtext-p-1 richtext-cursor-pointer rd-1 richtext-gap-[4px] hover:richtext-bg-accent",
          onClick: () => {
            u(void 0);
          },
          children: [
            /* @__PURE__ */ r(xi, {}),
            /* @__PURE__ */ r("span", { className: "richtext-ml-1 richtext-text-sm", children: t("editor.default") })
          ]
        }
      ),
      l.map((x, g) => /* @__PURE__ */ r("span", { className: "richtext-relative richtext-flex richtext-w-full richtext-h-auto richtext-p-0 last:richtext-pb-2", children: x.map((_, N) => /* @__PURE__ */ r(
        "span",
        {
          className: "richtext-w-6 richtext-h-6 richtext-p-0.5 richtext-inline-block richtext-rounded-sm !richtext-border richtext-border-transparent richtext-flex-[0_0_auto] richtext-cursor-pointer hover:richtext-border-border hover:richtext-shadow-sm",
          onClick: () => u(_),
          children: /* @__PURE__ */ r(
            "span",
            {
              style: {
                backgroundColor: _
              },
              className: "richtext-relative richtext-w-[18px] richtext-h-[18px] richtext-block richtext-rounded-[2px] richtext-border-transparent",
              children: _ === a ? /* @__PURE__ */ r(
                "svg",
                {
                  className: "richtext-absolute richtext-block richtext-top-[-1px] richtext-left-[1px] richtext-w-3 richtext-h-3",
                  viewBox: "0 0 18 18",
                  style: {
                    fill: "rgb(255, 255, 255)"
                  },
                  children: /* @__PURE__ */ r("path", { d: "M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z" })
                }
              ) : /* @__PURE__ */ r(
                "svg",
                {
                  viewBox: "0 0 18 18",
                  style: {
                    fill: "rgb(255, 255, 255)",
                    display: "none"
                  },
                  children: /* @__PURE__ */ r("path", { d: "M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z" })
                }
              )
            }
          )
        },
        `sub-color-${N}`
      )) }, g)),
      /* @__PURE__ */ m("div", { children: [
        /* @__PURE__ */ r("div", { className: "richtext-my-1 richtext-text-sm", children: t("editor.recent") }),
        /* @__PURE__ */ r("span", { className: "richtext-relative richtext-flex richtext-w-full richtext-h-auto richtext-p-0 last:richtext-pb-2", children: d == null ? void 0 : d.map((x, g) => /* @__PURE__ */ r(
          "span",
          {
            className: "richtext-w-6 richtext-h-6 richtext-p-0.5 richtext-inline-block richtext-rounded-sm !richtext-border richtext-border-transparent richtext-flex-[0_0_auto] richtext-cursor-pointer hover:richtext-border-border hover:richtext-shadow-sm",
            onClick: () => u(x),
            children: /* @__PURE__ */ r(
              "span",
              {
                className: "richtext-relative richtext-w-[18px] richtext-h-[18px] richtext-block richtext-rounded-[2px] richtext-border-transparent",
                style: {
                  backgroundColor: x
                },
                children: /* @__PURE__ */ r(
                  "svg",
                  {
                    viewBox: "0 0 18 18",
                    style: {
                      fill: "rgb(255, 255, 255)",
                      display: "none"
                    },
                    children: /* @__PURE__ */ r("path", { d: "M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z" })
                  }
                )
              }
            )
          },
          `sub-color-recent-${g}`
        )) })
      ] }),
      /* @__PURE__ */ r(Po, { setColor: u })
    ] }) })
  ] });
}
function Po({ setColor: e }) {
  const [t, i] = y("#000000"), [n, a] = y(!1), { t: o } = P();
  return E(() => () => {
    a(!1);
  }, []), /* @__PURE__ */ m(re, { open: n, children: [
    /* @__PURE__ */ r(ae, { asChild: !0, children: /* @__PURE__ */ m(
      "div",
      {
        onClick: (c) => {
          c.preventDefault(), a(!0);
        },
        className: "richtext-text-sm hover:richtext-cursor-pointer hover:richtext-bg-accent richtext-py-1.5 richtext-px-1.5",
        children: [
          o("editor.color.more"),
          "..."
        ]
      }
    ) }),
    /* @__PURE__ */ m(ne, { children: [
      /* @__PURE__ */ m("div", { className: "richtext-flex richtext-flex-col richtext-items-center richtext-justify-center", children: [
        /* @__PURE__ */ r(to, { color: t, onChange: i }),
        /* @__PURE__ */ r(
          Y,
          {
            className: "richtext-mt-[8px] richtext-w-full",
            type: "text",
            onChange: (c) => {
              c.preventDefault(), i(`#${c.target.value}`);
            },
            value: t.slice(1)
          }
        )
      ] }),
      /* @__PURE__ */ r(le, { className: "richtext-my-[10px]" }),
      /* @__PURE__ */ r(
        U,
        {
          onClick: (c) => {
            c.preventDefault(), e(t), a(!1);
          },
          className: "richtext-w-full",
          children: /* @__PURE__ */ r(Li, { size: 16 })
        }
      )
    ] })
  ] });
}
function Do() {
  const { toasts: e } = Zi();
  return /* @__PURE__ */ m(ho, { children: [
    e.map(({ id: t, title: i, description: n, action: a, ...o }) => /* @__PURE__ */ m(Gi, { ...o, children: [
      /* @__PURE__ */ m("div", { className: "richtext-grid richtext-gap-1", children: [
        i && /* @__PURE__ */ r(Xi, { children: i }),
        n && /* @__PURE__ */ r(Yi, { children: n })
      ] }),
      a,
      /* @__PURE__ */ r(Ki, {})
    ] }, t)),
    /* @__PURE__ */ r(qi, {})
  ] });
}
const Bo = `
.reactjs-tiptap-editor, .richtext-dialog-content {
  button,
  input:where([type=button]),
  input:where([type=reset]),
  input:where([type=submit]) {
    -webkit-appearance: button;
    background-color: transparent;
    background-image: none
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
}

.reactjs-tiptap-editor,
.richtext-dialog-content,
div[data-radix-popper-content-wrapper],
div[data-tippy-root] {
*,
:before,
:after {
  box-sizing: border-box;
  border-width: 0;
  border-style: solid;
  border-color: hsl(var(--richtext-border));
}

background-color: hsl(var(--richtext-background));
color: hsl(var(--richtext-foreground));


html,
:host {
  line-height: 1.5;
  -webkit-text-size-adjust: 100%;
  -moz-tab-size: 4;
  tab-size: 4;
  font-family: ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", Segoe UI Symbol, "Noto Color Emoji";
  font-feature-settings: normal;
  font-variation-settings: normal;
  -webkit-tap-highlight-color: transparent
}

hr {
  height: 0;
  color: inherit;
  border-top-width: 1px
}

a {
  color: inherit;
  text-decoration: inherit
}

b,
strong {
  font-weight: bolder
}

code,
kbd,
samp,
pre {
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace;
  font-feature-settings: normal;
  font-variation-settings: normal;
  font-size: 1em
}

table {
  text-indent: 0;
  border-color: inherit;
  border-collapse: collapse
}

input, textarea {
  border-width: 1px;
}

textarea {
  resize: vertical
}

input::placeholder,
textarea::placeholder {
  opacity: 1;
  color: #9ca3af
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
  vertical-align: middle
}

img,
video {
  max-width: 100%;
  height: auto
}
}
`, $o = _t("light"), Fo = {
  setTheme: (e) => {
    $o.set(e);
  }
}, jo = (e) => typeof e == "number", Vo = (e) => typeof e == "string", Uo = (e) => typeof e == "function";
function Wo(e, t = "px") {
  if (!e)
    return e;
  const i = jo(e) ? String(e) : e, n = Number.parseFloat(i), a = i.match(/[a-z%]+$/i), o = a ? a[0] : t;
  return Number.isNaN(n) ? e : n + o;
}
function nn(e, t) {
  if (!e)
    return !1;
  const { extensions: i = [] } = (e == null ? void 0 : e.extensionManager) ?? {};
  return !!i.find((a) => a.name === t);
}
function Dt(e) {
  return e.map((t) => Vo(t) ? { value: t, name: t } : t);
}
const gi = "data-rc-order", bi = "data-rc-priority", qo = "rc-util-key", Bt = /* @__PURE__ */ new Map();
function Go(e, t) {
  if (!e)
    return !1;
  if (e.contains)
    return e.contains(t);
  let i = t;
  for (; i; ) {
    if (i === e)
      return !0;
    i = i.parentNode;
  }
  return !1;
}
function rn({ mark: e } = {}) {
  return e ? e.startsWith("data-") ? e : `data-${e}` : qo;
}
function ti(e) {
  return e.attachTo ? e.attachTo : document.querySelector("head") || document.body;
}
function Ko(e) {
  return e === "queue" ? "prependQueue" : e ? "prepend" : "append";
}
function an(e) {
  return [...(Bt.get(e) || e).children].filter(
    (t) => t.tagName === "STYLE"
  );
}
function on(e, t = {}) {
  const { csp: i, prepend: n, priority: a = 0 } = t, o = Ko(n), c = o === "prependQueue", s = document.createElement("style");
  s.setAttribute(gi, o), c && a && s.setAttribute(bi, `${a}`), i != null && i.nonce && (s.nonce = i == null ? void 0 : i.nonce), s.innerHTML = e;
  const l = ti(t), { firstChild: d } = l;
  if (n) {
    if (c) {
      const h = an(l).filter((f) => {
        if (!["prepend", "prependQueue"].includes(f.getAttribute(gi)))
          return !1;
        const u = Number(f.getAttribute(bi) || 0);
        return a >= u;
      });
      if (h.length > 0)
        return l.insertBefore(s, h.at(-1).nextSibling), s;
    }
    d.before(s);
  } else
    l.append(s);
  return s;
}
function cn(e, t = {}) {
  const i = ti(t);
  return an(i).find((n) => n.getAttribute(rn(t)) === e);
}
function Xo(e, t = {}) {
  const i = cn(e, t);
  i && i.remove();
}
function Yo(e, t) {
  const i = Bt.get(e);
  if (!i || !Go(document, i)) {
    const n = on("", t), { parentNode: a } = n;
    Bt.set(e, a), n.remove();
  }
}
function Zo(e, t, i = {}) {
  var c, s, l;
  const n = ti(i);
  Yo(n, i);
  const a = cn(t, i);
  if (a)
    return (c = i.csp) != null && c.nonce && a.nonce !== ((s = i.csp) == null ? void 0 : s.nonce) && (a.nonce = (l = i.csp) == null ? void 0 : l.nonce), a.innerHTML !== e && (a.innerHTML = e), a;
  const o = on(e, i);
  return o.setAttribute(rn(i), t), o;
}
function Jo({ editor: e, extensions: t }) {
  const { t: i } = P(), n = F(() => {
    var a, o, c;
    return (c = (o = (a = t == null ? void 0 : t.find((s) => s.name === "base-kit")) == null ? void 0 : a.options) == null ? void 0 : o.characterCount) == null ? void 0 : c.limit;
  }, [t]);
  return n ? /* @__PURE__ */ r("div", { className: "richtext-flex richtext-items-center richtext-justify-between richtext-p-3 richtext-border-t", children: /* @__PURE__ */ r("div", { className: "richtext-flex richtext-flex-col", children: /* @__PURE__ */ r("div", { className: "richtext-flex richtext-justify-end richtext-gap-3 richtext-text-sm", children: /* @__PURE__ */ m("span", { children: [
    e.storage.characterCount.characters(),
    "/",
    n,
    " ",
    i("editor.characters")
  ] }) }) }) }) : /* @__PURE__ */ r("div", { className: "richtext-flex richtext-items-center richtext-justify-between richtext-p-3 richtext-border-t", children: /* @__PURE__ */ r("div", { className: "richtext-flex richtext-flex-col", children: /* @__PURE__ */ r("div", { className: "richtext-flex richtext-justify-end richtext-gap-3 richtext-text-sm", children: /* @__PURE__ */ m("span", { children: [
    e.storage.characterCount.characters(),
    " ",
    i("editor.characters")
  ] }) }) }) });
}
function Qo(e, t) {
  const { content: i, extensions: n, useEditorOptions: a = {} } = e, o = F(() => {
    const h = Da(n, n, "name");
    return [...n.map((u) => {
      const x = n.find((g) => g.name === u.name);
      return x ? u.configure(x.options) : u;
    }), ...h].map((u, x) => u.configure({ sort: x }));
  }, [n]), c = Ue((h) => {
    var u;
    const f = l(h, e.output);
    (u = e == null ? void 0 : e.onChangeContent) == null || u.call(e, f);
  }, za), s = Ur({
    extensions: o,
    content: i,
    onUpdate: ({ editor: h }) => {
      c && c(h);
    },
    ...a
  });
  xt(t, () => ({
    editor: s
  })), E(() => {
    document.documentElement.classList.toggle("dark", e.dark), Fo.setTheme(e.dark ? "dark" : "light");
  }, [e.dark]), E(() => {
    s == null || s.setEditable(!(e != null && e.disabled)), So.setDisable(!(e != null && e.disabled));
  }, [s, e == null ? void 0 : e.disabled]), E(() => ((e == null ? void 0 : e.resetCSS) !== !1 && Zo(Bo, "react-tiptap-reset"), () => {
    Xo("react-tiptap-reset");
  }), [e == null ? void 0 : e.resetCSS]);
  function l(h, f) {
    return e != null && e.removeDefaultWrapper ? f === "html" ? h.isEmpty ? "" : h.getHTML() : f === "json" ? h.isEmpty ? {} : h.getJSON() : f === "text" ? h.isEmpty ? "" : h.getText() : "" : f === "html" ? h.getHTML() : f === "json" ? h.getJSON() : f === "text" ? h.getText() : "";
  }
  E(() => () => {
    var h;
    (h = s == null ? void 0 : s.destroy) == null || h.call(s);
  }, []);
  const d = nn(s, "characterCount");
  return s ? /* @__PURE__ */ m("div", { className: "reactjs-tiptap-editor", children: [
    /* @__PURE__ */ r(xo, { delayDuration: 0, disableHoverableContent: !0, children: /* @__PURE__ */ r("div", { className: "richtext-rounded-[0.5rem] richtext-bg-background richtext-shadow richtext-overflow-hidden richtext-outline richtext-outline-1", children: /* @__PURE__ */ m("div", { className: "richtext-flex richtext-flex-col richtext-w-full richtext-max-h-full", children: [
      !(e != null && e.hideToolbar) && /* @__PURE__ */ r(ec, { editor: s, disabled: !!(e != null && e.disabled), toolbar: e.toolbar }),
      /* @__PURE__ */ r(Wr, { className: `richtext-relative ${(e == null ? void 0 : e.contentClass) || ""}`, editor: s }),
      d && /* @__PURE__ */ r(Jo, { editor: s, extensions: n }),
      !(e != null && e.hideBubble) && /* @__PURE__ */ r(Oo, { bubbleMenu: e == null ? void 0 : e.bubbleMenu, editor: s, disabled: e == null ? void 0 : e.disabled })
    ] }) }) }),
    /* @__PURE__ */ r(Do, {})
  ] }) : /* @__PURE__ */ r(W, {});
}
const Ad = ft(Qo);
function ec({ editor: e, disabled: t, toolbar: i }) {
  const { t: n, lang: a } = P(), o = F(() => {
    const d = [...e.extensionManager.extensions].sort((f, u) => {
      const x = f.options.sort ?? -1, g = u.options.sort ?? -1;
      return x - g;
    });
    let h = [];
    for (const f of d) {
      const {
        button: u,
        divider: x = !1,
        spacer: g = !1,
        toolbar: _ = !0
      } = f.options;
      if (!u || !Uo(u) || !_)
        continue;
      const N = u({
        editor: e,
        extension: f,
        t: n
      });
      if (Array.isArray(N)) {
        const z = N.map((k, b) => ({
          button: k,
          divider: b === N.length - 1 ? x : !1,
          spacer: b === 0 ? g : !1,
          type: f.type,
          name: f.name
        }));
        h = [...h, ...z];
        continue;
      }
      h.push({
        button: N,
        divider: x,
        spacer: g,
        type: f.type,
        name: f.name
      });
    }
    return h;
  }, [e, n, a]), c = (l) => /* @__PURE__ */ r(
    "div",
    {
      className: "richtext-px-1 richtext-py-2 !richtext-border-b",
      style: {
        pointerEvents: t ? "none" : "auto",
        opacity: t ? 0.5 : 1
      },
      children: /* @__PURE__ */ r("div", { className: "richtext-relative richtext-flex richtext-flex-wrap richtext-h-auto richtext-gap-y-1 richtext-gap-x-1", children: l })
    }
  ), s = o.map((l, d) => {
    var f, u;
    const h = l.button.component;
    return /* @__PURE__ */ m("div", { className: "richtext-flex richtext-items-center", children: [
      (l == null ? void 0 : l.spacer) && /* @__PURE__ */ r(le, { orientation: "vertical", className: "!richtext-h-[16px] !richtext-mx-[10px]" }),
      /* @__PURE__ */ r(
        h,
        {
          ...l.button.componentProps,
          disabled: t || ((u = (f = l == null ? void 0 : l.button) == null ? void 0 : f.componentProps) == null ? void 0 : u.disabled)
        }
      ),
      (l == null ? void 0 : l.divider) && /* @__PURE__ */ r(le, { orientation: "vertical", className: "!richtext-h-auto !richtext-mx-2" })
    ] }, `toolbar-item-${d}`);
  });
  return i && (i != null && i.render) ? i.render({ editor: e, disabled: t || !1 }, o, s, c) : c(s);
}
function tc(e) {
  return /* @__PURE__ */ r("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", ...e, children: /* @__PURE__ */ r(
    "path",
    {
      fill: "currentColor",
      d: "M19 12h-2v3h-3v2h5zM7 9h3V7H5v5h2zm14-6H3a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2m0 16H3V5h18z"
    }
  ) });
}
function ic(e) {
  return /* @__PURE__ */ r("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", ...e, children: /* @__PURE__ */ r(
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
function nc() {
  return /* @__PURE__ */ r(
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
      children: /* @__PURE__ */ r(
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
function rc() {
  return /* @__PURE__ */ r(
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
      children: /* @__PURE__ */ r(
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
function ac(e) {
  return /* @__PURE__ */ r("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", ...e, children: /* @__PURE__ */ r(
    "path",
    {
      fill: "currentColor",
      d: "M14 2H6a2 2 0 0 0-2 2v16c0 1.11.89 2 2 2h12c1.11 0 2-.89 2-2V8zm4 18H6V4h7v5h5zm-.65-10l-2.1 9h-1.4l-1.8-6.79l-1.8 6.79h-1.4l-2.2-9h1.5l1.4 6.81l1.8-6.81h1.3l1.8 6.81l1.4-6.81z"
    }
  ) });
}
function D(e) {
  const t = Je[e.name];
  return t ? /* @__PURE__ */ r(t, { onClick: e == null ? void 0 : e.onClick, className: `richtext-w-4 richtext-h-4 ${(e == null ? void 0 : e.className) || ""}` }) : null;
}
function oc(e) {
  return /* @__PURE__ */ r("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", ...e, children: /* @__PURE__ */ r(
    "path",
    {
      fill: "currentColor",
      d: "M21 22H3v-2h18zm0-18H3V2h18zm-11 9.7h4l-2-5.4zM11.2 6h1.7l4.7 12h-2l-.9-2.6H9.4L8.5 18h-2z"
    }
  ) });
}
function sn(e) {
  return /* @__PURE__ */ r(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      xmlnsXlink: "http://www.w3.org/1999/xlink",
      "aria-hidden": "true",
      role: "img",
      width: "1em",
      height: "1em",
      viewBox: "0 0 48 48",
      ...e,
      children: /* @__PURE__ */ r(
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
function cc(e) {
  return /* @__PURE__ */ r("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", ...e, children: /* @__PURE__ */ r("path", { fill: "currentColor", d: "M9 7v10h6v-2h-4V7z" }) });
}
function sc(e) {
  return /* @__PURE__ */ r("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", ...e, children: /* @__PURE__ */ r(
    "path",
    {
      fill: "currentColor",
      d: "M9 7c-1.1 0-2 .9-2 2v8h2V9h2v7h2V9h2v8h2V9a2 2 0 0 0-2-2z"
    }
  ) });
}
function lc(e) {
  return /* @__PURE__ */ r("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", ...e, children: /* @__PURE__ */ r(
    "path",
    {
      fill: "currentColor",
      d: "M11 7c-1.1 0-2 .9-2 2v2a2 2 0 0 0 2 2h2v2H9v2h4c1.11 0 2-.89 2-2v-2a2 2 0 0 0-2-2h-2V9h4V7z"
    }
  ) });
}
function dc() {
  return /* @__PURE__ */ r(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      xmlnsXlink: "http://www.w3.org/1999/xlink",
      "aria-hidden": "true",
      role: "img",
      width: "1em",
      height: "1em",
      viewBox: "0 0 24 24",
      children: /* @__PURE__ */ r(
        "path",
        {
          fill: "currentColor",
          d: "M14 2H6a2 2 0 0 0-2 2v16c0 1.11.89 2 2 2h12c1.11 0 2-.89 2-2V8zm4 18H6V4h7v5h5zm-.65-10l-2.1 9h-1.4l-1.8-6.79l-1.8 6.79h-1.4l-2.2-9h1.5l1.4 6.81l1.8-6.81h1.3l1.8 6.81l1.4-6.81z"
        }
      )
    }
  );
}
function ln() {
  return /* @__PURE__ */ m("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 32 32", children: [
    /* @__PURE__ */ r("path", { fill: "currentColor", d: "M30 18v-2h-6v10h2v-4h3v-2h-3v-2zm-11 8h-4V16h4a3.003 3.003 0 0 1 3 3v4a3.003 3.003 0 0 1-3 3m-2-2h2a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-2zm-6-8H6v10h2v-3h3a2.003 2.003 0 0 0 2-2v-3a2 2 0 0 0-2-2m-3 5v-3h3l.001 3z" }),
    /* @__PURE__ */ r("path", { fill: "currentColor", d: "M22 14v-4a.91.91 0 0 0-.3-.7l-7-7A.9.9 0 0 0 14 2H4a2.006 2.006 0 0 0-2 2v24a2 2 0 0 0 2 2h16v-2H4V4h8v6a2.006 2.006 0 0 0 2 2h6v2Zm-8-4V4.4l5.6 5.6Z" })
  ] });
}
function dn() {
  return /* @__PURE__ */ m(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: "1em",
      height: "1em",
      className: "icon",
      viewBox: "0 0 1024 1024",
      children: [
        /* @__PURE__ */ r(
          "path",
          {
            fill: "currentColor",
            d: "M679.253 402.364 618.77 561.015l-60.348-158.651a30.04 30.04 0 0 0-30.447-18.637 29.76 29.76 0 0 0-30.447 18.637l-60.416 158.651-60.416-158.651a30.515 30.515 0 0 0-38.843-17.272 28.945 28.945 0 0 0-17.954 37.547l88.815 233.267c4.369 11.469 15.7 19.115 28.398 19.115a30.31 30.31 0 0 0 28.468-19.115l62.395-163.908 62.396 163.84c4.437 11.605 15.701 19.183 28.4 19.183a30.31 30.31 0 0 0 28.466-19.115l88.747-233.267a28.945 28.945 0 0 0-17.886-37.547 30.447 30.447 0 0 0-38.912 17.272zm219.478 395.605-51.883-29.218c-28.672-16.18-52.224-3.072-52.224 29.082v.273H643.209a29.833 29.833 0 0 0-30.31 29.354c0 16.18 13.584 29.218 30.31 29.218h151.825c1.092 30.516 24.03 43.077 52.224 27.648l51.063-27.989c29.013-15.906 29.15-42.189.41-58.368"
          }
        ),
        /* @__PURE__ */ r(
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
function hc() {
  return /* @__PURE__ */ r("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", children: /* @__PURE__ */ r("path", { fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M14 4h4a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1m-9 8h4m-2-2v4" }) });
}
function uc() {
  return /* @__PURE__ */ r("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", children: /* @__PURE__ */ r("path", { fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M6 4h4a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1m9 8h4m-2-2v4" }) });
}
function mc() {
  return /* @__PURE__ */ r("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", children: /* @__PURE__ */ r("path", { fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M12 21v-4m0-4V9m0-4V3m-2 18h4M8 5v4h11l2-2l-2-2zm6 8v4H6l-2-2l2-2z" }) });
}
function fc() {
  return /* @__PURE__ */ r("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 20 20", children: /* @__PURE__ */ r("path", { fill: "currentColor", d: "M6.5 3a.75.75 0 0 1 .697.471l3 7.5a.75.75 0 0 1-1.393.557L7.992 9.5H5.008l-.811 2.028a.75.75 0 0 1-1.393-.556l3-7.5A.75.75 0 0 1 6.5 3m0 2.77L5.608 8h1.784zm8.28-1.55a.75.75 0 1 0-1.06 1.06l.72.72h-3.69a.75.75 0 0 0 0 1.5h3.69l-.72.72a.75.75 0 0 0 1.06 1.06l2-2a.75.75 0 0 0 0-1.06zm0 7.5a.75.75 0 1 0-1.06 1.06l.72.72H3.75a.75.75 0 0 0 0 1.5h10.69l-.72.72a.75.75 0 1 0 1.06 1.06l2-2a.75.75 0 0 0 0-1.06z" }) });
}
function xc() {
  return /* @__PURE__ */ r("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 20 20", children: /* @__PURE__ */ r("path", { fill: "currentColor", d: "M13.5 3a.75.75 0 0 0-.697.471l-3 7.5a.75.75 0 0 0 1.393.557l.812-2.028h2.984l.811 2.028a.75.75 0 0 0 1.393-.556l-3-7.5A.75.75 0 0 0 13.5 3m0 2.77L14.392 8h-1.784zM5.22 4.22a.75.75 0 0 1 1.06 1.06L5.56 6h3.69a.75.75 0 0 1 0 1.5H5.56l.72.72a.75.75 0 0 1-1.06 1.06l-2-2a.75.75 0 0 1 0-1.06zm0 7.5a.75.75 0 0 1 1.06 1.06l-.72.72h10.69a.75.75 0 0 1 0 1.5H5.56l.72.72a.75.75 0 1 1-1.06 1.06l-2-2a.75.75 0 0 1 0-1.06z" }) });
}
function gc() {
  return /* @__PURE__ */ r("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", children: /* @__PURE__ */ m("g", { fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", color: "currentColor", children: [
    /* @__PURE__ */ r("path", { d: "M14.86 22h-4.312c-3.291 0-4.937 0-6.08-.798a4.2 4.2 0 0 1-.863-.805c-.855-1.066-.855-2.6-.855-5.67v-2.545c0-2.963 0-4.445.473-5.628c.761-1.903 2.37-3.403 4.41-4.113C8.9 2 10.49 2 13.667 2c1.816 0 2.723 0 3.448.252c1.166.406 2.085 1.263 2.52 2.35c.27.676.27 1.523.27 3.216V10" }),
    /* @__PURE__ */ r("path", { d: "M2.75 12c0-1.84 1.506-3.333 3.364-3.333c.672 0 1.464.116 2.117-.057a1.67 1.67 0 0 0 1.19-1.179c.174-.647.057-1.432.057-2.098C9.478 3.493 10.984 2 12.84 2m.002 16h2.523m-4.949-4.15c-.126-.8-.281-.801-1.61-.85h-1.01c-.557 0-1.009.448-1.009 1v3c0 .552.452 1 1.01 1h1.816c.39 0 .803-.313.803-.7v-1.1c0-.11-.113-.304-.224-.304H9.068M12.842 13h1.261m0 0h1.262m-1.262 0v4.875M21.251 13h-2.523c-.557 0-1.009.448-1.009 1v1.5m0 0V18m0-2.5h2.523" })
  ] }) });
}
function bc() {
  return /* @__PURE__ */ r("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", children: /* @__PURE__ */ r("path", { fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", d: "m3 21l7.548-7.548M21 3l-7.548 7.548m0 0L8 3H3l7.548 10.452m2.904-2.904L21 21h-5l-5.452-7.548", color: "currentColor" }) });
}
const Je = {
  Bold: kn,
  LoaderCircle: Cn,
  Italic: Nn,
  Underline: Tn,
  Quote: An,
  TextQuote: ic,
  Strikethrough: Sn,
  Minus: Ln,
  Eraser: Mn,
  PaintRoller: In,
  Redo2: zn,
  Undo2: Rn,
  AlignCenter: Za,
  AlignJustify: Ja,
  AlignLeft: Qa,
  AlignRight: eo,
  ChevronDown: Mi,
  Subscript: Hn,
  Superscript: En,
  Code: On,
  Code2: Pn,
  Type: Dn,
  IndentIncrease: Bn,
  IndentDecrease: $n,
  List: Fn,
  ListOrdered: jn,
  ListTodo: Vn,
  Link: Un,
  ImageUp: Wn,
  Video: qn,
  Maximize: Gn,
  Minimize: Kn,
  Table: Xn,
  Sparkles: Yn,
  Pencil: Zn,
  Unlink: Jn,
  BetweenHorizonalEnd: Qn,
  BetweenHorizonalStart: er,
  BetweenVerticalStart: tr,
  BetweenVerticalEnd: ir,
  TableCellsMerge: nr,
  TableCellsSplit: rr,
  Trash2: ar,
  Trash: or,
  Replace: ci,
  ChevronsUpDown: cr,
  LineHeight: oc,
  Word: ac,
  Heading1: sr,
  Heading2: lr,
  Heading3: dr,
  Heading4: hr,
  Heading5: ur,
  Heading6: mr,
  Columns2: si,
  Columns3: fr,
  Columns4: xr,
  Plus: Li,
  Grip: gr,
  Copy: br,
  Clipboard: _r,
  PanelLeft: wr,
  PanelRight: pr,
  Columns: si,
  Iframe: vr,
  MenuDown: sn,
  SizeS: lc,
  SizeM: sc,
  SizeL: cc,
  AspectRatio: tc,
  Emoji: yr,
  DeleteColumn: nc,
  DeleteRow: rc,
  SearchAndReplace: ci,
  EmojiIcon: kr,
  ExportPdf: ln,
  ExportWord: dn,
  ImportWord: dc,
  ColumnAddLeft: hc,
  ColumnAddRight: uc,
  BookMarked: Cr,
  ZoomIn: Nr,
  ZoomOut: Tr,
  Settings: Ar,
  Eye: Sr,
  TextDirection: mc,
  LeftToRight: fc,
  RightToLeft: xc,
  Attachment: Lr,
  GifIcon: gc,
  ChevronUp: Mr,
  Crop: Ir,
  Twitter: bc,
  FlipX: zr,
  FlipY: Rr
};
function _c(e) {
  const t = ["size-small", "size-medium", "size-large"], i = [
    "SizeS",
    "SizeM",
    "SizeL"
  ];
  return t.map((n, a) => ({
    type: `image-${n}`,
    component: w,
    componentProps: {
      tooltip: V.t(`editor.${n.replace("-", ".")}.tooltip`),
      icon: i[a],
      action: () => e.commands.updateImage({ width: lt[n] }),
      isActive: () => e.isActive("image", { width: lt[n] })
    }
  }));
}
function wc(e) {
  const t = ["size-small", "size-medium", "size-large"], i = [
    "SizeS",
    "SizeM",
    "SizeL"
  ];
  return t.map((n, a) => ({
    type: `image-${n}`,
    component: w,
    componentProps: {
      tooltip: V.t(`editor.${n.replace("-", ".")}.tooltip`),
      icon: i[a],
      action: () => e.commands.updateImageGif({ width: lt[n] }),
      isActive: () => e.isActive("image", { width: lt[n] })
    }
  }));
}
function pc(e) {
  const t = ["left", "center", "right"], i = {
    left: "AlignLeft",
    center: "AlignCenter",
    right: "AlignRight"
  };
  return t.map((n) => ({
    type: `image-${n}`,
    component: w,
    componentProps: {
      tooltip: V.t(`editor.textalign.${n}.tooltip`),
      icon: i[n],
      action: () => {
        var a, o;
        return (o = (a = e.commands) == null ? void 0 : a.setAlignImage) == null ? void 0 : o.call(a, n);
      },
      isActive: () => e.isActive({ align: n }) || !1,
      disabled: !1
    }
  }));
}
function vc(e) {
  const t = ["left", "center", "right"], i = {
    left: "AlignLeft",
    center: "AlignCenter",
    right: "AlignRight"
  };
  return t.map((n) => ({
    type: `image-${n}`,
    component: w,
    componentProps: {
      tooltip: V.t(`editor.textalign.${n}.tooltip`),
      icon: i[n],
      action: () => {
        var a, o;
        return (o = (a = e.commands) == null ? void 0 : a.setAlignImageGif) == null ? void 0 : o.call(a, n);
      },
      isActive: () => e.isActive({ align: n }) || !1,
      disabled: !1
    }
  }));
}
function yc(e) {
  const t = ["size-small", "size-medium", "size-large"], i = [
    "SizeS",
    "SizeM",
    "SizeL"
  ];
  return t.map((n, a) => ({
    type: `video-${n}`,
    component: w,
    componentProps: {
      tooltip: V.t(`editor.${n.replace("-", ".")}.tooltip`),
      icon: i[a],
      action: () => e.commands.updateVideo({ width: zt[n] }),
      isActive: () => e.isActive("video", { width: zt[n] })
    }
  }));
}
function kc(e) {
  return [
    {
      type: "flipX",
      component: w,
      componentProps: {
        editor: e,
        tooltip: V.t("editor.tooltip.flipX"),
        icon: "FlipX",
        action: () => {
          const t = e.getAttributes("image"), { flipX: i } = t;
          e.chain().focus(void 0, { scrollIntoView: !1 }).updateImage({
            flipX: !i
          }).run();
        }
      }
    },
    {
      type: "flipY",
      component: w,
      componentProps: {
        editor: e,
        tooltip: V.t("editor.tooltip.flipY"),
        icon: "FlipY",
        action: () => {
          const t = e.getAttributes("image"), { flipY: i } = t;
          e.chain().focus(void 0, { scrollIntoView: !1 }).updateImage({
            flipY: !i
          }).run();
        }
      }
    },
    ..._c(e),
    ...pc(e),
    {
      type: "remove",
      component: w,
      componentProps: {
        editor: e,
        tooltip: V.t("editor.remove"),
        icon: "Trash2",
        action: () => {
          const { state: t, dispatch: i } = e.view;
          Wt(t, i);
        }
      }
    }
  ];
}
function Cc(e) {
  return [
    ...wc(e),
    ...vc(e),
    {
      type: "remove",
      component: w,
      componentProps: {
        editor: e,
        tooltip: V.t("editor.remove"),
        icon: "Trash2",
        action: () => {
          const { state: t, dispatch: i } = e.view;
          Wt(t, i);
        }
      }
    }
  ];
}
function Nc(e) {
  return [
    ...yc(e),
    {
      type: "remove",
      component: w,
      componentProps: {
        editor: e,
        tooltip: V.t("editor.remove"),
        icon: "Trash2",
        action: () => {
          const { state: t, dispatch: i } = e.view;
          Wt(t, i);
        }
      }
    }
  ];
}
function Tc(e, t) {
  return Ra.reduce((i, n) => {
    if (n === "divider" && i.length > 0)
      return [...i, {
        type: "divider",
        component: void 0,
        componentProps: {}
      }];
    const a = e.extensionManager.extensions.find((o) => o.name === n);
    return a ? [...i, a.configure().options.button({ editor: e, t, extension: a })] : i;
  }, []);
}
var be = /* @__PURE__ */ ((e) => (e[e.max = 7] = "max", e[e.min = 0] = "min", e[e.more = 1] = "more", e[e.less = -1] = "less", e))(be || {});
function Ac(e, t, i) {
  return e < t ? t : e > i ? i : e;
}
function Sc(e, t, i, n) {
  const { doc: a, selection: o } = e;
  if (!a || !o || !(o instanceof _e || o instanceof Di))
    return e;
  const { from: c, to: s } = o;
  return a.nodesBetween(c, s, (l, d) => {
    const h = l.type;
    return i.includes(h.name) ? (e = $t(e, d, t), !1) : !qr(l.type.name, n.extensionManager.extensions);
  }), e;
}
function $t(e, t, i) {
  if (!e.doc)
    return e;
  const n = e.doc.nodeAt(t);
  if (!n)
    return e;
  const c = Ac((n.attrs.indent || 0) + i, 0, 7);
  if (c === n.attrs.indent)
    return e;
  const s = {
    ...n.attrs,
    indent: c
  };
  return e.setNodeMarkup(t, n.type, s, n.marks);
}
function _i({ delta: e, types: t }) {
  return ({ state: i, dispatch: n, editor: a }) => {
    const { selection: o } = i;
    let { tr: c } = i;
    return c = c.setSelection(o), c = Sc(c, e, t, a), c.docChanged ? (n && n(c), !0) : !1;
  };
}
function Lc(e) {
  var T, C, B;
  const { pluginKey: t = Kr } = e, { t: i } = P(), [n, a] = y(null), [o, c] = y(-1), s = J(null), l = J(null), [d, h] = y(!1), f = e.editor.extensionManager.extensions.some((v) => v.name === "textAlign"), u = e.editor.extensionManager.extensions.some((v) => v.name === "indent"), x = e.editor.extensionManager.extensions.some((v) => v.name === "clear");
  E(() => {
    s.current && !e.editor.isDestroyed && (l.current = Gr({
      editor: e.editor,
      element: s.current,
      pluginKey: "ContentItemMenu",
      tippyOptions: {
        offset: [-2, 16],
        zIndex: 99,
        moveTransition: "transform 0.15s ease-out"
      },
      onNodeChange: A
    }), e.editor.registerPlugin(l.current));
  }, [e.editor, s]);
  function g() {
    const v = e.editor.chain();
    v.setNodeSelection(o).unsetAllMarks(), (n == null ? void 0 : n.type.name) !== "paragraph" && v.setParagraph(), v.run();
  }
  function _() {
    e.editor.chain().focus().setNodeSelection(o).run(), document.execCommand("copy");
  }
  function N() {
    e.editor.commands.setNodeSelection(o);
    const { $anchor: v } = e.editor.state.selection, G = v.node(1) || e.editor.state.selection.node;
    e.editor.chain().setMeta("hideDragHandle", !0).insertContentAt(o + ((n == null ? void 0 : n.nodeSize) || 0), G.toJSON()).run();
  }
  function z(v) {
    e.editor.commands.setTextAlign(v);
  }
  function k() {
    const v = $t(e.editor.state.tr, o, 1);
    v.setMeta("hideDragHandle", !0), e.editor.view.dispatch && e.editor.view.dispatch(v);
  }
  function b() {
    const v = $t(e.editor.state.tr, o, -1);
    e.editor.view.dispatch && e.editor.view.dispatch(v);
  }
  function p() {
    e.editor.chain().setMeta("hideDragHandle", !0).setNodeSelection(o).deleteSelection().run();
  }
  function A(v) {
    v.node && a(v.node), c(v.pos);
  }
  function R() {
    var v;
    if (o !== -1) {
      const G = (n == null ? void 0 : n.nodeSize) || 0, L = o + G, S = (n == null ? void 0 : n.type.name) === "paragraph" && ((v = n == null ? void 0 : n.content) == null ? void 0 : v.size) === 0, j = S ? o + 2 : L + 2;
      e.editor.chain().command(({ dispatch: X, tr: Z, state: Te }) => X ? (S ? Z.insertText("/", o, o + 1) : Z.insert(
        L,
        Te.schema.nodes.paragraph.create(null, [Te.schema.text("/")])
      ), X(Z)) : !0).focus(j).run();
    }
  }
  E(() => (d ? e.editor.commands.setMeta("lockDragHandle", !0) : e.editor.commands.setMeta("lockDragHandle", !1), () => {
    e.editor.commands.setMeta("lockDragHandle", !1);
  }), [d]), E(() => () => {
    l.current && (e.editor.unregisterPlugin(t), l.current = null);
  }, []), E(() => {
    var v;
    (v = e.editor) != null && v.isDestroyed && l.current && (e.editor.unregisterPlugin(t), l.current = null);
  }, [(T = e.editor) == null ? void 0 : T.isDestroyed]);
  const H = (v) => {
    e != null && e.disabled || h(v);
  };
  return /* @__PURE__ */ r(
    "div",
    {
      className: `drag-handle [transition-property:top,_left] richtext-ease-in-out richtext-duration-200 ${e == null ? void 0 : e.className}`,
      style: {
        opacity: e != null && e.disabled ? 0 : 1
      },
      ref: s,
      children: /* @__PURE__ */ m("div", { className: "richtext-flex richtext-items-center richtext-gap-0.5 [transition-property:top,_left] richtext-ease-in-out richtext-duration-200", children: [
        /* @__PURE__ */ r(
          U,
          {
            variant: "ghost",
            size: "icon",
            className: "richtext-w-7 richtext-h-7 richtext-cursor-grab",
            disabled: e == null ? void 0 : e.disabled,
            onClick: R,
            type: "button",
            children: /* @__PURE__ */ r(D, { name: "Plus", className: "richtext-text-lg richtext-text-neutral-600 dark:richtext-text-neutral-200" })
          }
        ),
        /* @__PURE__ */ m(ye, { open: d, onOpenChange: H, children: [
          /* @__PURE__ */ m("div", { className: "richtext-relative richtext-flex richtext-flex-col", children: [
            /* @__PURE__ */ m(Pe, { children: [
              /* @__PURE__ */ r(De, { asChild: !0, disabled: e == null ? void 0 : e.disabled, children: /* @__PURE__ */ r(
                U,
                {
                  variant: "ghost",
                  size: "icon",
                  className: "richtext-w-7 richtext-h-7 richtext-cursor-grab richtext-relative richtext-z-[1]",
                  disabled: e == null ? void 0 : e.disabled,
                  onMouseUp: (v) => {
                    v.preventDefault(), !(e != null && e.disabled) && h(!0);
                  },
                  type: "button",
                  children: /* @__PURE__ */ r(D, { name: "Grip", className: "richtext-text-sm dark:richtext-text-neutral-200 richtext-text-neutral-600" })
                }
              ) }),
              /* @__PURE__ */ r(Ne, { children: i("editor.draghandle.tooltip") })
            ] }),
            /* @__PURE__ */ r(ke, { className: "richtext-absolute richtext-top-0 richtext-left-0 richtext-w-[28px] richtext-h-[28px] richtext-z-0" })
          ] }),
          /* @__PURE__ */ m(xe, { className: "richtext-w-48", align: "start", side: "bottom", sideOffset: 0, children: [
            /* @__PURE__ */ m(
              ce,
              {
                onClick: p,
                className: "richtext-flex richtext-gap-3 focus:richtext-text-red-500 focus:richtext-bg-red-400 hover:richtext-bg-red-400 dark:hover:richtext-text-red-500 richtext-bg-opacity-10 hover:richtext-bg-opacity-20 focus:richtext-bg-opacity-30 dark:hover:richtext-bg-opacity-20",
                children: [
                  /* @__PURE__ */ r(D, { name: "Trash2" }),
                  /* @__PURE__ */ r("span", { children: i("editor.remove") })
                ]
              }
            ),
            x ? /* @__PURE__ */ m(ce, { className: "richtext-flex richtext-gap-3", onClick: g, children: [
              /* @__PURE__ */ r(D, { name: "PaintRoller" }),
              /* @__PURE__ */ r("span", { children: i("editor.clear.tooltip") })
            ] }) : null,
            /* @__PURE__ */ m(ce, { className: "richtext-flex richtext-gap-3", onClick: _, children: [
              /* @__PURE__ */ r(D, { name: "Clipboard" }),
              /* @__PURE__ */ r("span", { children: i("editor.copyToClipboard") })
            ] }),
            /* @__PURE__ */ m(ce, { className: "richtext-flex richtext-gap-3", onClick: N, children: [
              /* @__PURE__ */ r(D, { name: "Copy" }),
              /* @__PURE__ */ r("span", { children: i("editor.copy") })
            ] }),
            f || u ? /* @__PURE__ */ r(kt, {}) : null,
            f ? /* @__PURE__ */ m(hi, { children: [
              /* @__PURE__ */ m(Et, { className: "richtext-flex richtext-gap-3", children: [
                /* @__PURE__ */ r(D, { name: "AlignCenter" }),
                /* @__PURE__ */ r("span", { children: i("editor.textalign.tooltip") })
              ] }),
              /* @__PURE__ */ r(di, { children: /* @__PURE__ */ m(Ot, { children: [
                /* @__PURE__ */ m(ce, { className: "richtext-flex richtext-gap-3", onClick: () => z("left"), children: [
                  /* @__PURE__ */ r(D, { name: "AlignLeft" }),
                  /* @__PURE__ */ r("span", { children: i("editor.textalign.left.tooltip") })
                ] }),
                /* @__PURE__ */ m(ce, { className: "richtext-flex richtext-gap-3", onClick: () => z("center"), children: [
                  /* @__PURE__ */ r(D, { name: "AlignCenter" }),
                  /* @__PURE__ */ r("span", { children: i("editor.textalign.center.tooltip") })
                ] }),
                /* @__PURE__ */ m(ce, { className: "richtext-flex richtext-gap-3", onClick: () => z("right"), children: [
                  /* @__PURE__ */ r(D, { name: "AlignRight" }),
                  /* @__PURE__ */ r("span", { children: i("editor.textalign.right.tooltip") })
                ] })
              ] }) })
            ] }) : null,
            u ? /* @__PURE__ */ m(hi, { children: [
              /* @__PURE__ */ m(Et, { className: "richtext-flex richtext-gap-3", children: [
                /* @__PURE__ */ r(D, { name: "IndentIncrease" }),
                /* @__PURE__ */ r("span", { children: i("editor.indent") })
              ] }),
              /* @__PURE__ */ r(di, { children: /* @__PURE__ */ m(Ot, { children: [
                /* @__PURE__ */ m(
                  ce,
                  {
                    className: "richtext-flex richtext-gap-3",
                    onClick: k,
                    disabled: ((C = n == null ? void 0 : n.attrs) == null ? void 0 : C.indent) >= be.max,
                    children: [
                      /* @__PURE__ */ r(D, { name: "IndentIncrease" }),
                      /* @__PURE__ */ r("span", { children: i("editor.indent.tooltip") })
                    ]
                  }
                ),
                /* @__PURE__ */ m(
                  ce,
                  {
                    className: "richtext-flex richtext-gap-3",
                    onClick: b,
                    disabled: ((B = n == null ? void 0 : n.attrs) == null ? void 0 : B.indent) <= be.min,
                    children: [
                      /* @__PURE__ */ r(D, { name: "IndentDecrease" }),
                      /* @__PURE__ */ r("span", { children: i("editor.outdent.tooltip") })
                    ]
                  }
                )
              ] }) })
            ] }) : null
          ] })
        ] })
      ] })
    }
  );
}
const Mc = {
  maxWidth: "auto",
  zIndex: 20,
  appendTo: "parent",
  moveTransition: "transform 0.1s ease-out"
};
function Ic({ item: e, disabled: t, editor: i }) {
  var a;
  const n = e.component;
  return n ? /* @__PURE__ */ r(
    n,
    {
      ...e.componentProps,
      editor: i,
      disabled: t || ((a = e == null ? void 0 : e.componentProps) == null ? void 0 : a.disabled)
    }
  ) : /* @__PURE__ */ r(W, {});
}
function zc(e) {
  const { t, lang: i } = P(), n = ({ editor: o }) => {
    const { selection: c } = o.view.state, { $from: s, to: l } = c;
    return s.pos === l ? !1 : c instanceof _e;
  }, a = F(() => e.disabled || !(e != null && e.editor) ? [] : Tc(e.editor, t), [e.disabled, e.editor, i, t]);
  return /* @__PURE__ */ r(me, { shouldShow: n, editor: e == null ? void 0 : e.editor, tippyOptions: Mc, children: a != null && a.length ? /* @__PURE__ */ r("div", { className: "richtext-w-auto richtext-px-3 richtext-py-2 richtext-transition-all !richtext-border richtext-rounded-sm richtext-shadow-sm richtext-pointer-events-auto richtext-select-none richtext-border-neutral-200 dark:richtext-border-neutral-800 richtext-bg-background", children: /* @__PURE__ */ r("div", { className: "richtext-flex richtext-items-center richtext-gap-[4px] richtext-flex-nowrap richtext-whitespace-nowrap richtext-h-[26px] richtext-justify-start richtext-relative", children: a == null ? void 0 : a.map((o, c) => (o == null ? void 0 : o.type) === "divider" ? /* @__PURE__ */ r(
    le,
    {
      orientation: "vertical",
      className: "!richtext-mx-1 !richtext-my-2 !richtext-h-[16px]"
    },
    `bubbleMenu-divider-${c}`
  ) : /* @__PURE__ */ r(
    Ic,
    {
      item: o,
      disabled: e.disabled,
      editor: e.editor
    },
    `bubbleMenu-text-${c}`
  )) }) }) : /* @__PURE__ */ r(W, {}) });
}
function Rc({ fill: e }) {
  return /* @__PURE__ */ r(
    "svg",
    {
      width: "18px",
      height: "18px",
      viewBox: "0 0 256 256",
      version: "1.1",
      xmlns: "http://www.w3.org/2000/svg",
      children: /* @__PURE__ */ r("g", { id: "icon/填充色", stroke: "none", strokeWidth: 1, fill: "none", fillRule: "evenodd", children: /* @__PURE__ */ m("g", { id: "icon/背景颜色", children: [
        /* @__PURE__ */ r("g", { id: "编组", fill: "currentColor", children: /* @__PURE__ */ m(
          "g",
          {
            transform: "translate(119.502295, 137.878331) rotate(-135.000000) translate(-119.502295, -137.878331) translate(48.002295, 31.757731)",
            id: "矩形",
            children: [
              /* @__PURE__ */ r(
                "path",
                {
                  d: "M100.946943,60.8084699 L43.7469427,60.8084699 C37.2852111,60.8084699 32.0469427,66.0467383 32.0469427,72.5084699 L32.0469427,118.70847 C32.0469427,125.170201 37.2852111,130.40847 43.7469427,130.40847 L100.946943,130.40847 C107.408674,130.40847 112.646943,125.170201 112.646943,118.70847 L112.646943,72.5084699 C112.646943,66.0467383 107.408674,60.8084699 100.946943,60.8084699 Z M93.646,79.808 L93.646,111.408 L51.046,111.408 L51.046,79.808 L93.646,79.808 Z",
                  fillRule: "nonzero"
                }
              ),
              /* @__PURE__ */ r(
                "path",
                {
                  d: "M87.9366521,16.90916 L87.9194966,68.2000001 C87.9183543,69.4147389 86.9334998,70.399264 85.7187607,70.4 L56.9423078,70.4 C55.7272813,70.4 54.7423078,69.4150264 54.7423078,68.2 L54.7423078,39.4621057 C54.7423078,37.2523513 55.5736632,35.1234748 57.0711706,33.4985176 L76.4832996,12.4342613 C78.9534987,9.75382857 83.1289108,9.5834005 85.8093436,12.0535996 C87.1658473,13.303709 87.9372691,15.0644715 87.9366521,16.90916 Z",
                  fillRule: "evenodd"
                }
              ),
              /* @__PURE__ */ r(
                "path",
                {
                  d: "M131.3,111.241199 L11.7,111.241199 C5.23826843,111.241199 0,116.479467 0,122.941199 L0,200.541199 C0,207.002931 5.23826843,212.241199 11.7,212.241199 L131.3,212.241199 C137.761732,212.241199 143,207.002931 143,200.541199 L143,122.941199 C143,116.479467 137.761732,111.241199 131.3,111.241199 Z M124,130.241 L124,193.241 L19,193.241 L19,130.241 L124,130.241 Z",
                  fillRule: "nonzero"
                }
              )
            ]
          }
        ) }),
        /* @__PURE__ */ r(
          "path",
          {
            d: "M51,218 L205,218 C211.075132,218 216,222.924868 216,229 C216,235.075132 211.075132,240 205,240 L51,240 C44.9248678,240 40,235.075132 40,229 C40,222.924868 44.9248678,218 51,218 Z",
            id: "矩形",
            fill: e || "#FBDE28"
          }
        )
      ] }) })
    }
  );
}
function hn(e) {
  const [t, i] = y(void 0);
  function n(c) {
    var s;
    (s = e.action) == null || s.call(e, c);
  }
  function a() {
    var c;
    (c = e.action) == null || c.call(e, t);
  }
  const o = M(
    qt((c) => {
      i(c);
    }, 350),
    []
  );
  return /* @__PURE__ */ m("div", { className: "richtext-flex richtext-items-center richtext-h-[32px]", children: [
    /* @__PURE__ */ r(
      w,
      {
        tooltip: e == null ? void 0 : e.tooltip,
        disabled: e == null ? void 0 : e.disabled,
        action: a,
        tooltipOptions: e == null ? void 0 : e.tooltipOptions,
        shortcutKeys: e == null ? void 0 : e.shortcutKeys,
        children: /* @__PURE__ */ r("span", { className: "richtext-flex richtext-items-center richtext-justify-center richtext-text-sm", children: /* @__PURE__ */ r(Rc, { fill: t }) })
      }
    ),
    /* @__PURE__ */ r(
      tn,
      {
        selectedColor: t,
        setSelectedColor: o,
        onChange: n,
        highlight: !0,
        disabled: e == null ? void 0 : e.disabled,
        children: /* @__PURE__ */ r(U, { variant: "ghost", size: "icon", className: "!richtext-w-3 !richtext-h-[32px]", disabled: e == null ? void 0 : e.disabled, children: /* @__PURE__ */ r(D, { className: "!richtext-w-3 !richtext-h-3 richtext-text-zinc-500", name: "MenuDown" }) })
      }
    )
  ] });
}
function Hc({ editor: e, disabled: t }) {
  var _, N, z, k, b, p, A, R, H, T, C, B, v, G, L, S, j, X;
  const i = ({ editor: Z }) => Xr(Z.view.state, "table"), { t: n } = P();
  function a() {
    e.chain().focus().addColumnBefore().run();
  }
  function o() {
    e.chain().focus().addColumnAfter().run();
  }
  function c() {
    e.chain().focus().deleteColumn().run();
  }
  function s() {
    e.chain().focus().addRowBefore().run();
  }
  function l() {
    e.chain().focus().addRowAfter().run();
  }
  function d() {
    e.chain().focus().deleteRow().run();
  }
  function h() {
    e.chain().focus().mergeCells().run();
  }
  function f() {
    e == null || e.chain().focus().splitCell().run();
  }
  function u() {
    e.chain().focus().deleteTable().run();
  }
  function x(Z) {
    e.chain().focus().setTableCellBackground(Z).run();
  }
  return /* @__PURE__ */ r(
    me,
    {
      editor: e,
      pluginKey: "table",
      shouldShow: i,
      updateDelay: 0,
      tippyOptions: {
        offset: [0, 8],
        popperOptions: {
          modifiers: [{ name: "flip", enabled: !1 }]
        },
        maxWidth: "auto",
        getReferenceClientRect: () => {
          var oi;
          const {
            view: Z,
            state: {
              selection: { from: Te }
            }
          } = e, he = Z.domAtPos(Te).node;
          if (!he)
            return new DOMRect(-1e3, -1e3, 0, 0);
          const ai = (oi = he == null ? void 0 : he.closest) == null ? void 0 : oi.call(he, ".tableWrapper");
          return ai ? ai.getBoundingClientRect() : new DOMRect(-1e3, -1e3, 0, 0);
        },
        plugins: [Ua],
        sticky: "popper"
      },
      children: t ? /* @__PURE__ */ r(W, {}) : /* @__PURE__ */ m("div", { className: "richtext-min-w-32 richtext-flex richtext-flex-row richtext-h-full richtext-items-center richtext-leading-none richtext-gap-0.5 richtext-p-2 richtext-w-full richtext-bg-background richtext-rounded-lg richtext-shadow-sm !richtext-border richtext-border-border", children: [
        /* @__PURE__ */ r(
          w,
          {
            icon: "BetweenHorizonalEnd",
            tooltip: n("editor.table.menu.insertColumnBefore"),
            action: a,
            "tooltip-options": {
              sideOffset: 15
            },
            disabled: !((N = (_ = e == null ? void 0 : e.can()) == null ? void 0 : _.addColumnBefore) != null && N.call(_))
          }
        ),
        /* @__PURE__ */ r(
          w,
          {
            icon: "BetweenHorizonalStart",
            tooltip: n("editor.table.menu.insertColumnAfter"),
            action: o,
            "tooltip-options": {
              sideOffset: 15
            },
            disabled: !((k = (z = e == null ? void 0 : e.can()) == null ? void 0 : z.addColumnAfter) != null && k.call(z))
          }
        ),
        /* @__PURE__ */ r(
          w,
          {
            icon: "DeleteColumn",
            action: c,
            tooltip: n("editor.table.menu.deleteColumn"),
            "tooltip-options": {
              sideOffset: 15
            },
            disabled: !((p = e == null ? void 0 : (b = e.can()).deleteColumn) != null && p.call(b))
          }
        ),
        /* @__PURE__ */ r(le, { orientation: "vertical", className: "!richtext-mx-1 !richtext-my-2 !richtext-h-[16px]" }),
        /* @__PURE__ */ r(
          w,
          {
            icon: "BetweenVerticalEnd",
            action: s,
            tooltip: n("editor.table.menu.insertRowAbove"),
            "tooltip-options": {
              sideOffset: 15
            },
            disabled: !((R = e == null ? void 0 : (A = e.can()).addRowBefore) != null && R.call(A))
          }
        ),
        /* @__PURE__ */ r(
          w,
          {
            icon: "BetweenVerticalStart",
            action: l,
            tooltip: n("editor.table.menu.insertRowBelow"),
            "tooltip-options": {
              sideOffset: 15
            },
            disabled: !((T = (H = e == null ? void 0 : e.can()) == null ? void 0 : H.addRowAfter) != null && T.call(H))
          }
        ),
        /* @__PURE__ */ r(
          w,
          {
            icon: "DeleteRow",
            action: d,
            tooltip: n("editor.table.menu.deleteRow"),
            "tooltip-options": {
              sideOffset: 15
            },
            disabled: !((B = (C = e == null ? void 0 : e.can()) == null ? void 0 : C.deleteRow) != null && B.call(C))
          }
        ),
        /* @__PURE__ */ r(le, { orientation: "vertical", className: "!richtext-mx-1 !richtext-my-2 !richtext-h-[16px]" }),
        /* @__PURE__ */ r(
          w,
          {
            icon: "TableCellsMerge",
            action: h,
            tooltip: n("editor.table.menu.mergeCells"),
            "tooltip-options": {
              sideOffset: 15
            },
            disabled: !((G = (v = e == null ? void 0 : e.can()) == null ? void 0 : v.mergeCells) != null && G.call(v))
          }
        ),
        /* @__PURE__ */ r(
          w,
          {
            icon: "TableCellsSplit",
            action: f,
            tooltip: n("editor.table.menu.splitCells"),
            "tooltip-options": {
              sideOffset: 15
            },
            disabled: !((S = (L = e == null ? void 0 : e.can()) == null ? void 0 : L.splitCell) != null && S.call(L))
          }
        ),
        /* @__PURE__ */ r(le, { orientation: "vertical", className: "!richtext-mx-1 !richtext-my-2 !richtext-h-[16px]" }),
        /* @__PURE__ */ r(
          hn,
          {
            editor: e,
            tooltip: n("editor.table.menu.setCellsBgColor"),
            action: x,
            tooltipOptions: {
              sideOffset: 15
            }
          }
        ),
        /* @__PURE__ */ r(
          w,
          {
            icon: "Trash2",
            tooltip: n("editor.table.menu.deleteTable"),
            action: u,
            "tooltip-options": {
              sideOffset: 15
            },
            disabled: !((X = (j = e == null ? void 0 : e.can()) == null ? void 0 : j.deleteTable) != null && X.call(j))
          }
        )
      ] })
    }
  );
}
function un(e) {
  const { t } = P(), [i, n] = y({
    text: "",
    link: ""
  }), [a, o] = y(!1);
  E(() => {
    var s;
    if (e != null && e.editor) {
      const { href: l, target: d } = (s = e.editor) == null ? void 0 : s.getAttributes("link"), { from: h, to: f } = e.editor.state.selection, u = e.editor.state.doc.textBetween(h, f, " ");
      n({
        link: l,
        text: u
      }), o(d === "_blank");
    }
  }, [e == null ? void 0 : e.editor]);
  function c(s) {
    s.preventDefault(), s.stopPropagation(), e == null || e.onSetLink(i.link, i.text, a);
  }
  return /* @__PURE__ */ r("div", { className: "richtext-p-2 richtext-bg-white !richtext-border richtext-rounded-lg richtext-shadow-sm dark:richtext-bg-black border-neutral-200 dark:richtext-border-neutral-800", children: /* @__PURE__ */ m("form", { className: "richtext-flex richtext-flex-col richtext-gap-2", onSubmit: c, children: [
    /* @__PURE__ */ r(te, { className: "mb-[6px]", children: t("editor.link.dialog.text") }),
    /* @__PURE__ */ r("div", { className: "richtext-flex richtext-w-full richtext-max-w-sm richtext-items-center richtext-gap-1.5 richtext-mb-[10px]", children: /* @__PURE__ */ r("div", { className: "richtext-relative richtext-items-center richtext-w-full richtext-max-w-sm", children: /* @__PURE__ */ r(
      Y,
      {
        type: "text",
        value: i.text,
        required: !0,
        className: "richtext-w-80",
        placeholder: "Text",
        onChange: (s) => n({ ...i, text: s.target.value })
      }
    ) }) }),
    /* @__PURE__ */ r(te, { className: "mb-[6px]", children: t("editor.link.dialog.link") }),
    /* @__PURE__ */ r("div", { className: "richtext-flex richtext-w-full richtext-max-w-sm richtext-items-center richtext-gap-1.5", children: /* @__PURE__ */ m("div", { className: "richtext-relative richtext-items-center richtext-w-full richtext-max-w-sm", children: [
      /* @__PURE__ */ r(
        Y,
        {
          type: "url",
          value: i.link,
          required: !0,
          className: "richtext-pl-10",
          onChange: (s) => n({ ...i, link: s.target.value })
        }
      ),
      /* @__PURE__ */ r("span", { className: "richtext-absolute richtext-inset-y-0 richtext-flex richtext-items-center richtext-justify-center richtext-px-2 richtext-start-0", children: /* @__PURE__ */ r(D, { className: "richtext-size-5 richtext-text-muted-foreground", name: "Link" }) })
    ] }) }),
    /* @__PURE__ */ m("div", { className: "richtext-flex richtext-items-center richtext-space-x-2", children: [
      /* @__PURE__ */ r(te, { children: t("editor.link.dialog.openInNewTab") }),
      /* @__PURE__ */ r(
        Zt,
        {
          checked: a,
          onCheckedChange: (s) => {
            o(s);
          }
        }
      )
    ] }),
    /* @__PURE__ */ r(U, { type: "submit", className: "richtext-self-end richtext-mt-2", children: t("editor.link.dialog.button.apply") })
  ] }) });
}
function Ec(e) {
  const { t } = P();
  return /* @__PURE__ */ m("div", { className: "richtext-flex richtext-items-center richtext-gap-2 richtext-p-2 richtext-bg-white !richtext-border richtext-rounded-lg richtext-shadow-sm dark:richtext-bg-black richtext-border-neutral-200 dark:richtext-border-neutral-800", children: [
    /* @__PURE__ */ r(
      "a",
      {
        href: e == null ? void 0 : e.link,
        target: "_blank",
        rel: "noopener noreferrer",
        className: "richtext-text-sm richtext-underline richtext-break-all",
        children: Ba(e == null ? void 0 : e.link, {
          length: 50,
          omission: "…"
        })
      }
    ),
    (e == null ? void 0 : e.link) && /* @__PURE__ */ r(le, { orientation: "vertical", className: "!richtext-h-4" }),
    /* @__PURE__ */ m("div", { className: "richtext-flex richtext-flex-nowrap", children: [
      /* @__PURE__ */ r(
        w,
        {
          icon: "Pencil",
          tooltip: t("editor.link.edit.tooltip"),
          action: () => {
            e == null || e.onEdit();
          },
          tooltipOptions: { sideOffset: 15 }
        }
      ),
      /* @__PURE__ */ r(
        w,
        {
          icon: "Unlink",
          tooltip: t("editor.link.unlink.tooltip"),
          action: () => {
            e == null || e.onClear();
          },
          tooltipOptions: { sideOffset: 15 }
        }
      )
    ] })
  ] });
}
function Oc({ editor: e, disabled: t }) {
  const [i, n] = y(!1), a = F(() => {
    const { href: l } = e.getAttributes("link");
    return l;
  }, [e]), o = M(({ editor: l }) => l.isActive("link"), []), c = (l, d, h) => {
    e.chain().extendMarkRange("link").insertContent({
      type: "text",
      text: d,
      marks: [
        {
          type: "link",
          attrs: {
            href: l,
            target: h ? "_blank" : ""
          }
        }
      ]
    }).setLink({ href: l }).focus().run(), n(!1);
  }, s = M(() => {
    e.chain().extendMarkRange("link").unsetLink().focus().run(), n(!1);
  }, [e]);
  return /* @__PURE__ */ r(W, { children: /* @__PURE__ */ r(
    me,
    {
      editor: e,
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
      children: t ? /* @__PURE__ */ r(W, {}) : /* @__PURE__ */ r(W, { children: i ? /* @__PURE__ */ r(un, { onSetLink: c, editor: e }) : /* @__PURE__ */ r(
        Ec,
        {
          editor: e,
          onClear: s,
          onEdit: () => {
            n(!0);
          },
          link: a
        }
      ) })
    }
  ) });
}
const ii = {
  maxWidth: "auto",
  zIndex: 20,
  appendTo: "parent",
  moveTransition: "transform 0.1s ease-out"
};
function ni({ item: e, disabled: t, editor: i }) {
  var a;
  const n = e.component;
  return n ? /* @__PURE__ */ r(gt, { children: e.type === "divider" ? /* @__PURE__ */ r(le, { orientation: "vertical", className: "!richtext-mx-1 !richtext-my-2 !richtext-h-[16px]" }) : /* @__PURE__ */ r(
    n,
    {
      ...e.componentProps,
      editor: i,
      disabled: t || ((a = e == null ? void 0 : e.componentProps) == null ? void 0 : a.disabled)
    }
  ) }) : /* @__PURE__ */ r(W, {});
}
function Pc(e) {
  return e.type.name === "image";
}
function Dc(e) {
  return e.type.name === _n.name;
}
function Bc(e) {
  return e.type.name === "video";
}
function $c(e) {
  const { lang: t } = P(), i = ({ editor: a }) => {
    const { selection: o } = a.view.state, { $from: c, to: s } = o;
    let l = !1;
    return a.view.state.doc.nodesBetween(c.pos, s, (d) => {
      if (Pc(d))
        return l = !0, !1;
    }), l;
  }, n = F(() => e.disabled ? [] : kc(e.editor), [e.disabled, e.editor, t]);
  return /* @__PURE__ */ r(W, { children: /* @__PURE__ */ r(
    me,
    {
      shouldShow: i,
      editor: e == null ? void 0 : e.editor,
      tippyOptions: ii,
      children: n != null && n.length ? /* @__PURE__ */ r("div", { className: "richtext-w-auto richtext-px-3 richtext-py-2 richtext-transition-all !richtext-border richtext-rounded-sm richtext-shadow-sm richtext-pointer-events-auto richtext-select-none richtext-border-neutral-200 dark:richtext-border-neutral-800 richtext-bg-background", children: /* @__PURE__ */ r("div", { className: "richtext-flex richtext-items-center richtext-flex-nowrap richtext-whitespace-nowrap richtext-h-[26px] richtext-justify-start richtext-relative", children: n == null ? void 0 : n.map((a, o) => /* @__PURE__ */ r(
        ni,
        {
          item: a,
          disabled: e.disabled,
          editor: e.editor
        },
        `bubbleMenu-image-${o}`
      )) }) }) : /* @__PURE__ */ r(W, {})
    }
  ) });
}
function Fc(e) {
  const { lang: t } = P(), i = ({ editor: a }) => {
    const { selection: o } = a.view.state, { $from: c, to: s } = o;
    let l = !1;
    return a.view.state.doc.nodesBetween(c.pos, s, (d) => {
      if (Dc(d))
        return l = !0, !1;
    }), l;
  }, n = F(() => e.disabled ? [] : Cc(e.editor), [e.disabled, e.editor, t]);
  return /* @__PURE__ */ r(W, { children: /* @__PURE__ */ r(
    me,
    {
      shouldShow: i,
      editor: e == null ? void 0 : e.editor,
      tippyOptions: ii,
      children: n != null && n.length ? /* @__PURE__ */ r("div", { className: "richtext-w-auto richtext-px-3 richtext-py-2 richtext-transition-all !richtext-border richtext-rounded-sm richtext-shadow-sm richtext-pointer-events-auto richtext-select-none richtext-border-neutral-200 dark:richtext-border-neutral-800 richtext-bg-background", children: /* @__PURE__ */ r("div", { className: "richtext-flex richtext-items-center richtext-flex-nowrap richtext-whitespace-nowrap richtext-h-[26px] richtext-justify-start richtext-relative", children: n == null ? void 0 : n.map((a, o) => /* @__PURE__ */ r(
        ni,
        {
          item: a,
          disabled: e.disabled,
          editor: e.editor
        },
        `bubbleMenu-image-gif-${o}`
      )) }) }) : /* @__PURE__ */ r(W, {})
    }
  ) });
}
function jc(e) {
  const { lang: t } = P(), i = ({ editor: a }) => {
    const { selection: o } = a.view.state, { $from: c, to: s } = o;
    let l = !1;
    return a.view.state.doc.nodesBetween(c.pos, s, (d) => {
      if (Bc(d))
        return l = !0, !1;
    }), l;
  }, n = F(() => e.disabled ? [] : Nc(e.editor), [e.editor, e.disabled, t]);
  return /* @__PURE__ */ r(W, { children: /* @__PURE__ */ r(
    me,
    {
      shouldShow: i,
      editor: e == null ? void 0 : e.editor,
      tippyOptions: ii,
      children: n != null && n.length ? /* @__PURE__ */ r("div", { className: "richtext-w-auto richtext-px-3 richtext-py-2 richtext-transition-all !richtext-border richtext-rounded-sm richtext-shadow-sm richtext-pointer-events-auto richtext-select-none richtext-border-neutral-200 dark:richtext-border-neutral-800 richtext-bg-background", children: /* @__PURE__ */ r("div", { className: "richtext-flex richtext-items-center richtext-flex-nowrap richtext-whitespace-nowrap richtext-h-[26px] richtext-justify-start richtext-relative", children: n == null ? void 0 : n.map((a, o) => /* @__PURE__ */ r(
        ni,
        {
          item: a,
          disabled: e.disabled,
          editor: e.editor
        },
        `bubbleMenu-video-${o}`
      )) }) }) : /* @__PURE__ */ r(W, {})
    }
  ) });
}
function Vc({ editor: e }) {
  const { t } = P(), i = M(() => e.isActive(Ge.name), [e]), n = M(() => ei(Ge.name, e), [e]), a = M(() => e.chain().focus().addColBefore().run(), [e]), o = M(() => e.chain().focus().addColAfter().run(), [e]), c = M(() => e.chain().focus().deleteCol().run(), [e]);
  return /* @__PURE__ */ r(
    me,
    {
      pluginKey: "columns-bubble-menu",
      editor: e,
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
      children: /* @__PURE__ */ m("div", { className: "richtext-w-auto richtext-px-3 richtext-py-2 richtext-transition-all !richtext-border richtext-rounded-sm richtext-shadow-sm richtext-pointer-events-auto richtext-select-none richtext-border-neutral-200 dark:richtext-border-neutral-800 richtext-bg-background", children: [
        /* @__PURE__ */ r(
          w,
          {
            action: a,
            icon: "ColumnAddLeft",
            tooltip: t("editor.table.menu.insertColumnBefore")
          }
        ),
        /* @__PURE__ */ r(
          w,
          {
            action: o,
            icon: "ColumnAddRight",
            tooltip: t("editor.table.menu.insertColumnAfter")
          }
        ),
        /* @__PURE__ */ r(
          w,
          {
            action: c,
            icon: "DeleteColumn",
            tooltip: t("editor.table.menu.deleteColumn")
          }
        ),
        /* @__PURE__ */ r(
          w,
          {
            action: n,
            icon: "Trash2",
            tooltip: t("editor.table.menu.delete_column")
          }
        )
      ] })
    }
  );
}
const Sd = Yr.extend({
  addOptions() {
    var e;
    return {
      ...(e = this.parent) == null ? void 0 : e.call(this),
      button: ({ editor: t, t: i }) => ({
        component: w,
        componentProps: {
          action: () => t.commands.toggleBold(),
          isActive: () => t.isActive("bold") || !1,
          disabled: !t.can().toggleBold(),
          icon: "Bold",
          shortcutKeys: ["mod", "B"],
          tooltip: i("editor.bold.tooltip")
        }
      })
    };
  }
}), Ld = Zr.extend({
  addOptions() {
    var e;
    return {
      ...(e = this.parent) == null ? void 0 : e.call(this),
      button({ editor: t, t: i }) {
        return {
          component: w,
          componentProps: {
            action: () => t.commands.toggleItalic(),
            isActive: () => t.isActive("italic") || !1,
            disabled: !t.can().toggleItalic(),
            shortcutKeys: ["mod", "I"],
            icon: "Italic",
            tooltip: i("editor.italic.tooltip")
          }
        };
      }
    };
  }
}), Md = Jr.extend({
  addOptions() {
    var e;
    return {
      ...(e = this.parent) == null ? void 0 : e.call(this),
      button({ editor: t, t: i }) {
        return {
          component: w,
          componentProps: {
            action: () => t.commands.toggleUnderline(),
            isActive: () => t.isActive("underline") || !1,
            disabled: !t.can().toggleUnderline(),
            icon: "Underline",
            shortcutKeys: ["mod", "U"],
            tooltip: i("editor.underline.tooltip")
          }
        };
      }
    };
  }
}), Id = Qr.extend({
  addOptions() {
    var e;
    return {
      ...(e = this.parent) == null ? void 0 : e.call(this),
      button: ({ editor: t, t: i }) => ({
        component: w,
        componentProps: {
          action: () => t.commands.toggleStrike(),
          isActive: () => t.isActive("strike") || !1,
          disabled: !t.can().toggleStrike(),
          icon: "Strikethrough",
          shortcutKeys: ["shift", "mod", "X"],
          tooltip: i("editor.strike.tooltip")
        }
      })
    };
  }
}), zd = ea.extend({
  addOptions() {
    var e;
    return {
      ...(e = this.parent) == null ? void 0 : e.call(this),
      button: ({ editor: t, t: i }) => ({
        component: w,
        componentProps: {
          action: () => t.commands.toggleCode(),
          isActive: () => t.isActive("code") || !1,
          disabled: !t.can().toggleCode(),
          icon: "Code",
          shortcutKeys: ["mod", "E"],
          tooltip: i("editor.code.tooltip")
        }
      })
    };
  }
});
function Uc(e) {
  var a, o, c;
  const { t, lang: i } = P(), n = F(() => {
    var d;
    const s = (d = e == null ? void 0 : e.items) == null ? void 0 : d.find((h) => h.isActive());
    return s && !s.default ? {
      ...s
    } : {
      title: e.tooltip,
      font: t("editor.fontFamily.default.tooltip"),
      isActive: () => !1,
      disabled: !1,
      action: () => e.editor.chain().focus().unsetFontFamily().run()
    };
  }, [t, i, e]);
  return /* @__PURE__ */ m(ye, { children: [
    /* @__PURE__ */ r(ke, { disabled: e == null ? void 0 : e.disabled, asChild: !0, children: /* @__PURE__ */ r(
      Xt,
      {
        title: ((a = n == null ? void 0 : n.font) == null ? void 0 : a.length) > 7 ? `${(o = n == null ? void 0 : n.font) == null ? void 0 : o.slice(0, 6)}...` : n == null ? void 0 : n.font,
        tooltip: e == null ? void 0 : e.tooltip,
        disabled: e == null ? void 0 : e.disabled,
        icon: "MenuDown"
      }
    ) }),
    /* @__PURE__ */ r(xe, { className: "richtext-w-full", children: (c = e == null ? void 0 : e.items) == null ? void 0 : c.map((s, l) => {
      const d = s.font === t("editor.fontFamily.default.tooltip") ? {} : { fontFamily: s.font };
      return /* @__PURE__ */ m(gt, { children: [
        /* @__PURE__ */ r(Ce, { checked: (n == null ? void 0 : n.font) === s.font, onClick: s.action, children: /* @__PURE__ */ r("div", { className: "richtext-h-full richtext-ml-1", style: d, children: s.font }) }),
        s.font === t("editor.fontFamily.default.tooltip") && /* @__PURE__ */ r(kt, {})
      ] }, `font-family-${l}`);
    }) })
  ] });
}
const Rd = ta.extend({
  addOptions() {
    var e;
    return {
      ...(e = this.parent) == null ? void 0 : e.call(this),
      fontFamilyList: Ha,
      button({ editor: t, extension: i, t: n }) {
        var d;
        const { extensions: a = [] } = t.extensionManager ?? [], o = Dt(((d = i == null ? void 0 : i.options) == null ? void 0 : d.fontFamilyList) || []), c = a.find(
          (h) => h.name === "base-kit"
        ), s = o.map((h) => ({
          action: () => {
            t.chain().focus().setFontFamily(h.value).run();
          },
          isActive: () => t.isActive("textStyle", { fontFamily: h.value }) || !1,
          disabled: !t.can().setFontFamily(h.value),
          title: h.name,
          font: h.value
        }));
        c && c.options.textStyle !== !1 && s.unshift({
          action: () => t.chain().focus().unsetFontFamily().run(),
          isActive: () => !1,
          disabled: !1,
          font: n("editor.fontFamily.default.tooltip"),
          title: n("editor.fontFamily.tooltip")
        });
        const l = s.filter((h) => h.disabled).length === s.length;
        return {
          component: Uc,
          componentProps: {
            tooltip: n("editor.fontFamily.tooltip"),
            disabled: l,
            items: s,
            editor: t
          }
        };
      }
    };
  }
});
function Wc(e) {
  var i;
  const t = F(() => {
    var o;
    const n = (o = e == null ? void 0 : e.items) == null ? void 0 : o.find((c) => c.isActive());
    return n && !n.default ? {
      ...n
    } : {
      title: e.tooltip,
      level: 0,
      isActive: () => !1
    };
  }, [e]);
  return /* @__PURE__ */ m(ye, { children: [
    /* @__PURE__ */ r(ke, { disabled: e == null ? void 0 : e.disabled, asChild: !0, children: /* @__PURE__ */ r(
      Xt,
      {
        title: t == null ? void 0 : t.title,
        tooltip: e == null ? void 0 : e.tooltip,
        disabled: e == null ? void 0 : e.disabled,
        icon: "MenuDown"
      }
    ) }),
    /* @__PURE__ */ r(xe, { className: "richtext-w-full", children: (i = e == null ? void 0 : e.items) == null ? void 0 : i.map((n, a) => {
      var o, c;
      return /* @__PURE__ */ m(gt, { children: [
        /* @__PURE__ */ m(
          Ce,
          {
            checked: (t == null ? void 0 : t.title) === n.title,
            onClick: n.action,
            children: [
              /* @__PURE__ */ r("div", { className: `richtext-ml-1 richtext-h-full heading-${n.level}`, children: n.title }),
              !!((o = n == null ? void 0 : n.shortcutKeys) != null && o.length) && /* @__PURE__ */ r(Wi, { className: "richtext-pl-4", children: (c = n == null ? void 0 : n.shortcutKeys) == null ? void 0 : c.map((s) => wt(s)).join(" ") })
            ]
          }
        ),
        n.level === 0 && /* @__PURE__ */ r(kt, {})
      ] }, `heading-k-${a}`);
    }) })
  ] });
}
const Hd = ia.extend({
  addOptions() {
    var e;
    return {
      ...(e = this.parent) == null ? void 0 : e.call(this),
      levels: [1, 2, 3, 4, 5, 6],
      button({ editor: t, extension: i, t: n }) {
        var d;
        const { extensions: a = [] } = t.extensionManager ?? [], o = ((d = i.options) == null ? void 0 : d.levels) || [], c = a.find(
          (h) => h.name === "base-kit"
        ), s = o.map((h) => ({
          action: () => t.commands.toggleHeading({ level: h }),
          isActive: () => t.isActive("heading", { level: h }) || !1,
          disabled: !t.can().toggleHeading({ level: h }),
          title: n(`editor.heading.h${h}.tooltip`),
          level: h,
          shortcutKeys: ["alt", "mod", `${h}`]
        }));
        c && c.options.paragraph !== !1 && s.unshift({
          action: () => t.commands.setParagraph(),
          isActive: () => t.isActive("paragraph") || !1,
          disabled: !t.can().setParagraph(),
          level: 0,
          title: n("editor.paragraph.tooltip"),
          shortcutKeys: ["alt", "mod", "0"]
        });
        const l = s.filter((h) => h.disabled).length === s.length;
        return {
          component: Wc,
          componentProps: {
            tooltip: n("editor.heading.tooltip"),
            disabled: l,
            items: s,
            editor: t
          }
        };
      }
    };
  }
});
function qc(e) {
  var i;
  const t = F(() => {
    var o;
    const n = (o = e == null ? void 0 : e.items) == null ? void 0 : o.find((c) => c.isActive());
    return n && !n.default ? {
      ...n,
      icon: n.icon ? n.icon : e.icon
    } : {
      title: e == null ? void 0 : e.tooltip,
      icon: e.icon,
      isActive: () => !1
    };
  }, [e]);
  return /* @__PURE__ */ m(re, { modal: !0, children: [
    /* @__PURE__ */ r(ae, { disabled: e == null ? void 0 : e.disabled, asChild: !0, children: /* @__PURE__ */ r(
      w,
      {
        customClass: "!richtext-w-12 richtext-h-12",
        icon: e == null ? void 0 : e.icon,
        tooltip: e == null ? void 0 : e.tooltip,
        disabled: e == null ? void 0 : e.disabled,
        children: /* @__PURE__ */ r(D, { className: "richtext-w-3 richtext-h-3 richtext-ml-1 richtext-text-zinc-500", name: "MenuDown" })
      }
    ) }),
    /* @__PURE__ */ r(
      ne,
      {
        className: "richtext-min-w-4 richtext-w-full !richtext-p-[4px] richtext-flex richtext-flex-row richtext-gap-1",
        align: "start",
        side: "bottom",
        children: (i = e == null ? void 0 : e.items) == null ? void 0 : i.map((n, a) => {
          var o, c;
          return /* @__PURE__ */ m(Pe, { children: [
            /* @__PURE__ */ r(De, { asChild: !0, children: /* @__PURE__ */ r(
              Ze,
              {
                size: "sm",
                onClick: n == null ? void 0 : n.action,
                className: "richtext-p-1 richtext-w-7 richtext-h-7",
                pressed: t.title === n.title,
                "data-state": t.title === n.title ? "on" : "off",
                children: (n == null ? void 0 : n.icon) && /* @__PURE__ */ r(D, { name: n.icon })
              }
            ) }),
            /* @__PURE__ */ m(Ne, { className: "richtext-flex richtext-flex-col richtext-items-center", children: [
              /* @__PURE__ */ r("span", { children: n.title }),
              !!((o = n.shortcutKeys) != null && o.length) && /* @__PURE__ */ r("span", { children: (c = n.shortcutKeys) == null ? void 0 : c.map((s) => wt(s)).join(" ") })
            ] })
          ] }, `text-align-${a}`);
        })
      }
    )
  ] });
}
const Ed = na.extend({
  addOptions() {
    var e;
    return {
      ...(e = this.parent) == null ? void 0 : e.call(this),
      types: ["heading", "paragraph", "list_item", "title"],
      button({
        editor: t,
        extension: i,
        t: n
      }) {
        var d;
        const a = ((d = i.options) == null ? void 0 : d.alignments) || [], o = {
          left: ["mod", "Shift", "L"],
          center: ["mod", "Shift", "E"],
          right: ["mod", "Shift", "R"],
          justify: ["mod", "Shift", "J"]
        }, c = {
          left: "AlignLeft",
          center: "AlignCenter",
          right: "AlignRight",
          justify: "AlignJustify"
        }, s = a.map((h) => {
          var f, u, x;
          return {
            title: n(`editor.textalign.${h}.tooltip`),
            icon: c[h],
            shortcutKeys: o[h],
            isActive: () => t.isActive({ textAlign: h }) || !1,
            action: () => {
              var g, _;
              return (_ = (g = t.commands) == null ? void 0 : g.setTextAlign) == null ? void 0 : _.call(g, h);
            },
            disabled: !((x = (u = (f = t == null ? void 0 : t.can) == null ? void 0 : f.call(t)) == null ? void 0 : u.setTextAlign) != null && x.call(u, h))
          };
        }), l = s.filter((h) => h.disabled).length === s.length;
        return {
          component: qc,
          componentProps: {
            icon: "AlignJustify",
            tooltip: n("editor.textalign.tooltip"),
            disabled: l,
            items: s
          }
        };
      }
    };
  }
});
function Gc(e) {
  var n;
  const { t } = P(), i = F(() => {
    const a = (e.items || []).find((c) => c.isActive());
    return a || {
      title: t("editor.fontSize.default.tooltip"),
      isActive: () => !1
    };
  }, [e]);
  return /* @__PURE__ */ m(ye, { children: [
    /* @__PURE__ */ r(ke, { disabled: e == null ? void 0 : e.disabled, asChild: !0, children: /* @__PURE__ */ r(
      Xt,
      {
        title: i == null ? void 0 : i.title,
        tooltip: `${e == null ? void 0 : e.tooltip}`,
        disabled: e == null ? void 0 : e.disabled,
        icon: "MenuDown"
      }
    ) }),
    /* @__PURE__ */ r(xe, { className: "richtext-w-32 richtext-overflow-y-auto richtext-max-h-96", children: (n = e == null ? void 0 : e.items) == null ? void 0 : n.map((a, o) => /* @__PURE__ */ r(
      Ce,
      {
        checked: i.title === a.title,
        onClick: a.action,
        children: /* @__PURE__ */ r("div", { className: "richtext-h-full richtext-ml-1", children: a.title })
      },
      `font-size-${o}`
    )) })
  ] });
}
const Od = K.create({
  name: "fontSize",
  addOptions() {
    var e;
    return {
      ...(e = this.parent) == null ? void 0 : e.call(this),
      types: ["textStyle"],
      fontSizes: [...Ea],
      button({ editor: t, extension: i, t: n }) {
        var l;
        const a = Dt(((l = i.options) == null ? void 0 : l.fontSizes) || li), o = Dt([li])[0], c = a.map((d) => ({
          title: d.value === o.value ? n("editor.fontSize.default.tooltip") : String(d.name),
          isActive: () => {
            const { fontSize: h } = t.getAttributes("textStyle");
            return d.value === o.value && h === void 0 ? !0 : t.isActive({ fontSize: String(d.value) }) || !1;
          },
          action: () => {
            if (d.value === o.value) {
              t.commands.unsetFontSize();
              return;
            }
            t.commands.setFontSize(String(d.value));
          },
          disabled: !t.can().setFontSize(String(d.value)),
          divider: d.value === o.value || !1,
          default: d.value === o.value || !1
        })), s = c.filter((d) => d.disabled).length === c.length;
        return {
          component: Gc,
          componentProps: {
            editor: t,
            tooltip: n("editor.fontSize.tooltip"),
            disabled: s,
            items: c,
            maxHeight: 280
          }
        };
      }
    };
  },
  addGlobalAttributes() {
    return [
      {
        types: this.options.types,
        attributes: {
          fontSize: {
            default: null,
            parseHTML: (e) => e.style.fontSize.replaceAll(/["']+/g, ""),
            renderHTML: (e) => e.fontSize ? {
              style: `font-size: ${e.fontSize}`
            } : {}
          }
        }
      }
    ];
  },
  addCommands() {
    return {
      setFontSize: (e) => ({ chain: t }) => t().setMark("textStyle", { fontSize: e }).run(),
      unsetFontSize: () => ({ chain: e }) => e().setMark("textStyle", { fontSize: null }).removeEmptyTextStyle().run()
    };
  }
});
function Kc({ fill: e }) {
  return /* @__PURE__ */ r(
    "svg",
    {
      width: "18px",
      height: "18px",
      viewBox: "0 0 240 240",
      version: "1.1",
      xmlns: "http://www.w3.org/2000/svg",
      children: /* @__PURE__ */ r("g", { stroke: "none", strokeWidth: 1, fill: "none", fillRule: "evenodd", children: /* @__PURE__ */ r("g", { transform: "translate(0.000000, 0.500000)", children: /* @__PURE__ */ m("g", { transform: "translate(39.000000, 17.353553)", children: [
        /* @__PURE__ */ r(
          "path",
          {
            d: "M11,201.146447 L167,201.146447 C173.075132,201.146447 178,206.071314 178,212.146447 C178,218.221579 173.075132,223.146447 167,223.146447 L11,223.146447 C4.92486775,223.146447 7.43989126e-16,218.221579 0,212.146447 C-7.43989126e-16,206.071314 4.92486775,201.146447 11,201.146447 Z",
            id: "矩形",
            fill: e || "#DF2A3F",
            fillRule: "evenodd"
          }
        ),
        /* @__PURE__ */ r(
          "path",
          {
            d: "M72.3425855,16.8295583 C75.799482,7.50883712 86.1577877,2.75526801 95.4785089,6.21216449 C100.284516,7.99463061 104.096358,11.7387855 105.968745,16.4968188 L106.112518,16.8745422 L159.385152,161.694068 C161.291848,166.877345 158.635655,172.624903 153.452378,174.531599 C148.358469,176.405421 142.719567,173.872338 140.716873,168.864661 L140.614848,168.598825 L89.211,28.86 L37.3759214,168.623816 C35.4885354,173.712715 29.8981043,176.351047 24.7909589,174.617647 L24.5226307,174.522368 C19.4337312,172.634982 16.7953993,167.044551 18.5287999,161.937406 L18.6240786,161.669077 L72.3425855,16.8295583 Z",
            id: "路径-21",
            fill: "currentColor",
            fillRule: "nonzero"
          }
        ),
        /* @__PURE__ */ r(
          "path",
          {
            d: "M121,103.146447 C126.522847,103.146447 131,107.623599 131,113.146447 C131,118.575687 126.673329,122.994378 121.279905,123.142605 L121,123.146447 L55,123.146447 C49.4771525,123.146447 45,118.669294 45,113.146447 C45,107.717207 49.3266708,103.298515 54.7200952,103.150288 L55,103.146447 L121,103.146447 Z",
            id: "路径-22",
            fill: "currentColor",
            fillRule: "nonzero"
          }
        )
      ] }) }) })
    }
  );
}
function Xc(e) {
  const [t, i] = y(void 0);
  function n(c) {
    var s;
    (s = e.action) == null || s.call(e, c);
  }
  function a() {
    var c;
    (c = e.action) == null || c.call(e, t);
  }
  const o = M(
    qt((c) => {
      i(c);
    }, 350),
    []
  );
  return /* @__PURE__ */ m("div", { className: "richtext-flex richtext-items-center richtext-h-[32px]", children: [
    /* @__PURE__ */ r(w, { tooltip: e == null ? void 0 : e.tooltip, disabled: e == null ? void 0 : e.disabled, action: a, children: /* @__PURE__ */ r("span", { className: "richtext-flex richtext-items-center richtext-justify-center richtext-text-sm", children: /* @__PURE__ */ r(Kc, { fill: t }) }) }),
    /* @__PURE__ */ r(
      tn,
      {
        selectedColor: t,
        setSelectedColor: o,
        onChange: n,
        disabled: e == null ? void 0 : e.disabled,
        colors: e == null ? void 0 : e.colors,
        defaultColor: e == null ? void 0 : e.defaultColor,
        children: /* @__PURE__ */ r(U, { variant: "ghost", size: "icon", className: "r!ichtext-h-[32px] !richtext-w-3", disabled: e == null ? void 0 : e.disabled, children: /* @__PURE__ */ r(D, { className: "!richtext-w-3 !richtext-h-3 richtext-text-zinc-500", name: "MenuDown" }) })
      }
    )
  ] });
}
const Pd = ra.extend({
  addOptions() {
    var e;
    return {
      ...(e = this.parent) == null ? void 0 : e.call(this),
      button({ editor: t, t: i, extension: n }) {
        return {
          component: Xc,
          componentProps: {
            colors: n.options.colors,
            defaultColor: n.options.defaultColor,
            action: (a) => {
              a === void 0 && t.chain().focus().unsetColor().run(), typeof a == "string" && t.chain().focus().setColor(a).run();
            },
            isActive: () => {
              const { color: a } = t.getAttributes("textStyle");
              return a && t.isActive({ color: a }) || !1;
            },
            editor: t,
            disabled: !t.can().setColor(""),
            tooltip: i("editor.color.tooltip")
          }
        };
      }
    };
  }
}), Dd = aa.extend({
  addOptions() {
    var e;
    return {
      ...(e = this.parent) == null ? void 0 : e.call(this),
      multicolor: !0,
      button: ({ editor: t, t: i }) => ({
        component: hn,
        componentProps: {
          action: (n) => {
            typeof n == "string" && t.chain().focus().setHighlight({ color: n }).run(), n === void 0 && t.chain().focus().unsetHighlight().run();
          },
          editor: t,
          isActive: () => t.isActive("highlight") || !1,
          disabled: !t.can().setHighlight(),
          shortcutKeys: ["⇧", "mod", "H"],
          tooltip: i("editor.highlight.tooltip")
        }
      })
    };
  }
}), Bd = oa.extend({
  addOptions() {
    var e;
    return {
      ...(e = this.parent) == null ? void 0 : e.call(this),
      button: ({ editor: t, t: i }) => ({
        component: w,
        componentProps: {
          action: () => t.commands.toggleBulletList(),
          isActive: () => t.isActive("bulletList") || !1,
          disabled: !1,
          shortcutKeys: ["shift", "mod", "8"],
          icon: "List",
          tooltip: i("editor.bulletlist.tooltip")
        }
      })
    };
  }
}), $d = ue.create({
  name: "clear",
  addOptions() {
    var e;
    return {
      ...(e = this.parent) == null ? void 0 : e.call(this),
      button: ({ editor: t, t: i }) => ({
        component: w,
        componentProps: {
          action: () => t.chain().focus().clearNodes().unsetAllMarks().run(),
          disabled: !t.can().chain().focus().clearNodes().unsetAllMarks().run(),
          icon: "Eraser",
          tooltip: i("editor.clear.tooltip")
        }
      })
    };
  }
}), Fd = ca.extend({
  addOptions() {
    var e;
    return {
      ...(e = this.parent) == null ? void 0 : e.call(this),
      button: ({ editor: t, t: i }) => ({
        component: w,
        componentProps: {
          action: () => t.commands.toggleOrderedList(),
          isActive: () => t.isActive("orderedList") || !1,
          disabled: !1,
          icon: "ListOrdered",
          shortcutKeys: ["mod", "shift", "7"],
          tooltip: i("editor.orderedlist.tooltip")
        }
      })
    };
  }
}), jd = sa.extend({
  addOptions() {
    var e;
    return {
      ...(e = this.parent) == null ? void 0 : e.call(this),
      HTMLAttributes: {
        class: "task-list"
      },
      taskItem: {
        HTMLAttributes: {
          class: "task-list-item"
        }
      },
      button: ({ editor: t, t: i }) => ({
        component: w,
        componentProps: {
          action: () => t.commands.toggleTaskList(),
          isActive: () => t.isActive("taskList") || !1,
          disabled: !1,
          icon: "ListTodo",
          shortcutKeys: ["shift", "mod", "9"],
          tooltip: i("editor.tasklist.tooltip")
        }
      })
    };
  },
  addExtensions() {
    return [la.configure(this.options.taskItem)];
  }
}), Vd = da.extend({
  addOptions() {
    var e;
    return {
      ...(e = this.parent) == null ? void 0 : e.call(this),
      HTMLAttributes: {
        class: "blockquote"
      },
      button: ({ editor: t, t: i }) => ({
        component: w,
        componentProps: {
          action: () => t.commands.toggleBlockquote(),
          isActive: () => t.isActive("blockquote") || !1,
          disabled: !t.can().toggleBlockquote(),
          icon: "TextQuote",
          shortcutKeys: ["shift", "mod", "B"],
          tooltip: i("editor.blockquote.tooltip")
        }
      })
    };
  }
});
function Yc(e) {
  const [t, i] = y(!1);
  function n(a, o, c) {
    e.action && (e.action({ link: a, text: o, openInNewTab: c }), i(!1));
  }
  return /* @__PURE__ */ m(re, { modal: !0, open: t, onOpenChange: i, children: [
    /* @__PURE__ */ r(ae, { disabled: e == null ? void 0 : e.disabled, asChild: !0, children: /* @__PURE__ */ r(
      w,
      {
        tooltip: e == null ? void 0 : e.tooltip,
        isActive: e == null ? void 0 : e.isActive,
        disabled: e == null ? void 0 : e.disabled,
        children: /* @__PURE__ */ r(D, { name: e == null ? void 0 : e.icon })
      }
    ) }),
    /* @__PURE__ */ r(ne, { hideWhenDetached: !0, className: "richtext-w-full", align: "start", side: "bottom", children: /* @__PURE__ */ r(un, { editor: e.editor, onSetLink: n }) })
  ] });
}
const Ud = ha.extend({
  inclusive: !1,
  parseHTML() {
    return [
      {
        tag: 'a[href]:not([data-type="button"]):not([href *= "javascript:" i])'
      }
    ];
  },
  renderHTML({ HTMLAttributes: e }) {
    return [
      "a",
      de(this.options.HTMLAttributes, e, {
        class: "link"
      }),
      0
    ];
  },
  addOptions() {
    var e;
    return {
      ...(e = this.parent) == null ? void 0 : e.call(this),
      openOnClick: !0,
      button: ({ editor: t, t: i }) => ({
        component: Yc,
        componentProps: {
          editor: t,
          action: (n) => {
            const { link: a, text: o, openInNewTab: c } = n;
            t.chain().extendMarkRange("link").insertContent({
              type: "text",
              text: o,
              marks: [
                {
                  type: "link",
                  attrs: {
                    href: a,
                    target: c ? "_blank" : ""
                  }
                }
              ]
            }).setLink({ href: a }).focus().run();
          },
          id: "linkk",
          isActive: () => t.isActive("link") || !1,
          disabled: !t.can().setLink({ href: "" }),
          icon: "Link",
          tooltip: i("editor.link.tooltip")
        }
      })
    };
  },
  addProseMirrorPlugins() {
    return [
      new we({
        props: {
          handleClick: (e, t) => {
            const { schema: i, doc: n, tr: a } = e.state, o = ua(n.resolve(t), i.marks.link);
            if (!o)
              return !1;
            const c = n.resolve(o.from), s = n.resolve(o.to), l = a.setSelection(new _e(c, s));
            e.dispatch(l);
          }
        }
      })
    ];
  }
}), Wd = ma.extend({
  renderHTML() {
    return [
      "div",
      de(this.options.HTMLAttributes, {
        "data-type": this.name
      }),
      ["hr"]
    ];
  },
  addOptions() {
    var e;
    return {
      ...(e = this.parent) == null ? void 0 : e.call(this),
      button: ({ editor: t, t: i }) => ({
        component: w,
        componentProps: {
          action: () => t.commands.setHorizontalRule(),
          disabled: !t.can().setHorizontalRule(),
          icon: "Minus",
          shortcutKeys: ["mod", "alt", "S"],
          tooltip: i("editor.horizontalrule.tooltip")
        }
      })
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-Alt-s": () => this.editor.commands.setHorizontalRule()
    };
  }
});
function Zc(e) {
  var d;
  const {
    icon: t = void 0,
    // title = undefined,
    tooltip: i = void 0,
    // disabled = false,
    customClass: n = "",
    // color = undefined,
    // loading = false,
    // shortcutKeys = undefined,
    tooltipOptions: a = {},
    action: o = void 0,
    isActive: c = void 0,
    children: s
  } = e, l = Je[t];
  return /* @__PURE__ */ m(Pe, { children: [
    /* @__PURE__ */ r(De, { asChild: !0, children: /* @__PURE__ */ m(
      Ze,
      {
        size: "sm",
        className: `richtext-w-[32px] richtext-h-[32px] ${n}`,
        disabled: c == null ? void 0 : c(),
        onClick: o,
        children: [
          l && /* @__PURE__ */ r(l, { className: "richtext-w-4 richtext-h-4" }),
          s && /* @__PURE__ */ r(W, { children: s })
        ]
      }
    ) }),
    i && /* @__PURE__ */ r(Ne, { ...a, children: /* @__PURE__ */ m("div", { className: "richtext-flex richtext-flex-col richtext-items-center richtext-text-center richtext-max-w-24", children: [
      /* @__PURE__ */ r("div", { children: i }),
      !!((d = e == null ? void 0 : e.shortcutKeys) != null && d.length) && /* @__PURE__ */ r("span", { children: pt(e == null ? void 0 : e.shortcutKeys) })
    ] }) })
  ] });
}
const Jc = ["undo", "redo"], qd = fa.extend({
  addOptions() {
    var e;
    return {
      ...(e = this.parent) == null ? void 0 : e.call(this),
      depth: 100,
      newGroupDelay: 500,
      button: ({ editor: t, t: i }) => Jc.map((n) => ({
        component: Zc,
        componentProps: {
          action: () => {
            n === "undo" && t.chain().focus().undo().run(), n === "redo" && t.chain().focus().redo().run();
          },
          shortcutKeys: n === "undo" ? ["mod", "Z"] : ["shift", "mod", "Z"],
          disabled: n === "undo" ? !t.can().undo() : !t.can().redo(),
          isActive: () => n === "undo" ? !t.can().undo() : !t.can().redo(),
          icon: n === "undo" ? "Undo2" : "Redo2",
          tooltip: i(`editor.${n}.tooltip`)
        }
      }))
    };
  }
}), Qc = xa.extend({
  content: "(block|columns)+"
  // echo editor is a block editor
});
function es(e, t, i = null) {
  return i ? e.createChecked({ index: t }, i) : e.createAndFill({ index: t });
}
function ts(e) {
  if (e.cached.columnsNodeTypes)
    return e.cached.columnsNodeTypes;
  const t = {
    columns: e.nodes.columns,
    column: e.nodes.column
  };
  return e.cached.columnsNodeTypes = t, t;
}
function is(e, t, i = null) {
  const n = ts(e), a = [];
  for (let o = 0; o < t; o += 1) {
    const c = es(n.column, o, i);
    c && a.push(c);
  }
  return n.columns.createChecked({ cols: t }, a);
}
function Lt({
  state: e,
  dispatch: t,
  type: i
}) {
  const n = st((o) => o.type.name === Ge.name)(e.selection), a = st((o) => o.type.name === ri.name)(e.selection);
  if (t && n && a) {
    const o = n.node, c = a.node.attrs.index, s = o.toJSON();
    let l = c;
    i === "delete" ? (l = c - 1, s.content.splice(c, 1)) : (l = i === "addBefore" ? c : c + 1, s.content.splice(l, 0, {
      type: "column",
      attrs: {
        index: c
      },
      content: [
        {
          type: "paragraph"
        }
      ]
    })), s.attrs.cols = s.content.length, s.content.forEach((u, x) => {
      u.attrs.index = x;
    });
    const d = $a.fromJSON(e.schema, s);
    let h = n.pos;
    d.content.forEach((u, x, g) => {
      g < l && (h += u.nodeSize);
    });
    const f = e.tr.setTime(Date.now());
    f.replaceWith(n.pos, n.pos + n.node.nodeSize, d).setSelection(
      _e.near(f.doc.resolve(h))
    ), t(f);
  }
  return !0;
}
function wi({ state: e, dispatch: t, type: i }) {
  const n = st((o) => o.type.name === Ge.name)(e.selection), a = st((o) => o.type.name === ri.name)(e.selection);
  if (t && n && a) {
    const o = n.node, c = a.node.attrs.index;
    let s = 0;
    i === "before" ? s = (c - 1 + o.attrs.cols) % o.attrs.cols : s = (c + 1) % o.attrs.cols;
    let l = n.pos;
    o.content.forEach((h, f, u) => {
      u < s && (l += h.nodeSize);
    });
    const d = e.tr.setTime(Date.now());
    return d.setSelection(_e.near(d.doc.resolve(l))), t(d), !0;
  }
  return !1;
}
const ns = 200, Ge = ue.create({
  name: "columns",
  group: "block",
  defining: !0,
  isolating: !0,
  allowGapCursor: !1,
  content: "column{1,}",
  priority: ns,
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
        parseHTML: (e) => e.getAttribute("cols")
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
  renderHTML({ HTMLAttributes: e }) {
    return ["div", de(this.options.HTMLAttributes, e), 0];
  },
  addCommands() {
    return {
      insertColumns: (e) => ({ tr: t, dispatch: i, editor: n }) => {
        const a = is(n.schema, e && e.cols || 3);
        if (i) {
          const o = t.selection.anchor + 1;
          t.replaceSelectionWith(a).scrollIntoView().setSelection(_e.near(t.doc.resolve(o)));
        }
        return !0;
      },
      addColBefore: () => ({ dispatch: e, state: t }) => Lt({ dispatch: e, state: t, type: "addBefore" }),
      addColAfter: () => ({ dispatch: e, state: t }) => Lt({ dispatch: e, state: t, type: "addAfter" }),
      deleteCol: () => ({ dispatch: e, state: t }) => Lt({ dispatch: e, state: t, type: "delete" })
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-Alt-G": () => this.editor.commands.insertColumns(),
      Tab: () => wi({
        state: this.editor.state,
        dispatch: this.editor.view.dispatch,
        type: "after"
      }),
      "Shift-Tab": () => wi({
        state: this.editor.state,
        dispatch: this.editor.view.dispatch,
        type: "before"
      })
    };
  }
}), ri = ue.create({
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
        parseHTML: (e) => e.getAttribute("index")
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
  renderHTML({ HTMLAttributes: e }) {
    return ["div", de(this.options.HTMLAttributes, e), 0];
  }
}), Gd = K.create({
  name: "columnActionButton",
  addOptions() {
    var e;
    return {
      ...(e = this.parent) == null ? void 0 : e.call(this),
      button: ({ editor: t, t: i }) => ({
        component: w,
        componentProps: {
          action: () => {
            t.chain().focus().insertColumns({ cols: 2 }).run();
          },
          icon: "Columns",
          tooltip: i("editor.columns.tooltip")
        }
      })
    };
  }
}), rs = K.create({
  name: "selection",
  addProseMirrorPlugins() {
    const { editor: e } = this;
    return [
      new we({
        key: new pe("selection"),
        props: {
          decorations(t) {
            return t.selection.empty || e.isFocused === !0 ? null : je.create(t.doc, [
              We.inline(t.selection.from, t.selection.to, {
                class: "selection"
              })
            ]);
          }
        }
      })
    ];
  }
});
function as(e) {
  const { t } = P(), i = F(() => [
    {
      name: "paragraph",
      label: t("editor.paragraph.tooltip"),
      iconName: "Heading1",
      isActive: () => e.editor.isActive("paragraph") && !e.editor.isActive("orderedList") && !e.editor.isActive("bulletList") && !e.editor.isActive("taskList"),
      action: () => e.editor.chain().focus().clearNodes().run()
    },
    {
      name: "heading1",
      label: t("editor.heading.h1.tooltip"),
      isActive: () => e.editor.isActive("heading", { level: 1 }),
      iconName: "Heading1",
      action: () => e.editor.chain().focus().clearNodes().toggleHeading({ level: 1 }).run()
    },
    {
      name: "heading2",
      label: t("editor.heading.h2.tooltip"),
      isActive: () => e.editor.isActive("heading", { level: 2 }),
      iconName: "Heading2",
      action: () => e.editor.chain().focus().clearNodes().toggleHeading({ level: 2 }).run()
    },
    {
      name: "heading3",
      label: t("editor.heading.h3.tooltip"),
      isActive: () => e.editor.isActive("heading", { level: 3 }),
      iconName: "Heading3",
      action: () => e.editor.chain().focus().clearNodes().toggleHeading({ level: 3 }).run()
    },
    {
      name: "bulletList",
      label: t("editor.bulletlist.tooltip"),
      isActive: () => e.editor.isActive("bulletList"),
      iconName: "List",
      action: () => e.editor.chain().focus().clearNodes().toggleBulletList().run()
    },
    {
      name: "numberedList",
      label: t("editor.orderedlist.tooltip"),
      isActive: () => e.editor.isActive("orderedList"),
      iconName: "ListOrdered",
      action: () => e.editor.chain().focus().clearNodes().toggleOrderedList().run()
    },
    {
      name: "taskList",
      label: t("editor.tasklist.tooltip"),
      isActive: () => e.editor.isActive("taskList"),
      iconName: "ListTodo",
      action: () => e.editor.chain().focus().clearNodes().toggleTaskList().run()
    },
    {
      name: "blockquote",
      label: t("editor.blockquote.tooltip"),
      isActive: () => e.editor.isActive("blockquote"),
      iconName: "TextQuote",
      action: () => e.editor.chain().focus().clearNodes().toggleBlockquote().run()
    }
  ], [e.editor, t]), n = F(() => i.filter((a) => a.isActive()).pop() ?? {
    label: "Empty"
  }, [i]);
  return /* @__PURE__ */ m(ye, { children: [
    /* @__PURE__ */ r(ke, { asChild: !0, children: /* @__PURE__ */ m(U, { variant: "ghost", className: "richtext-h-[32px] richtext-flex richtext-gap-1 richtext-px-1.5", children: [
      /* @__PURE__ */ m("span", { className: "richtext-text-sm richtext-font-normal richtext-whitespace-nowrap", children: [
        " ",
        n == null ? void 0 : n.label
      ] }),
      /* @__PURE__ */ r(Mi, { className: "richtext-w-4 richtext-h-4" })
    ] }) }),
    /* @__PURE__ */ r(xe, { hideWhenDetached: !0, className: "richtext-w-full richtext-p-1", align: "start", sideOffset: 5, children: i.map((a, o) => {
      var s;
      const c = Je[a.iconName];
      return /* @__PURE__ */ r(
        Ce,
        {
          checked: ((s = a.isActive) == null ? void 0 : s.call(a)) || !1,
          onClick: () => a.action(),
          className: "richtext-cursor-pointer",
          children: /* @__PURE__ */ m("div", { className: "richtext-flex richtext-items-center richtext-gap-2 richtext-px-2", children: [
            /* @__PURE__ */ r(c, { className: "richtext-w-3 richtext-h3" }),
            /* @__PURE__ */ m("span", { children: [
              " ",
              a.label
            ] })
          ] })
        },
        `text-bubble-${o}`
      );
    }) })
  ] });
}
const os = K.create({
  name: "text-bubble",
  addOptions() {
    var e;
    return {
      ...(e = this.parent) == null ? void 0 : e.call(this),
      toolbar: !1,
      button: () => ({
        component: as,
        componentProps: {}
      })
    };
  }
});
function pi({ types: e, node: t }) {
  return Array.isArray(e) && e.includes(t.type) || t.type === e;
}
const cs = K.create({
  name: "trailingNode",
  addOptions() {
    return {
      node: "paragraph",
      notAfter: ["paragraph"]
    };
  },
  addProseMirrorPlugins() {
    const e = new pe(this.name), t = Object.entries(this.editor.schema.nodes).map(([, i]) => i).filter((i) => this.options.notAfter.includes(i.name));
    return [
      new we({
        key: e,
        appendTransaction: (i, n, a) => {
          const { doc: o, tr: c, schema: s } = a, l = e.getState(a), d = o.content.size, h = s.nodes[this.options.node];
          if (l)
            return c.insert(d, h.create());
        },
        state: {
          init: (i, n) => {
            const a = n.tr.doc.lastChild;
            return !pi({ node: a, types: t });
          },
          apply: (i, n) => {
            if (!i.docChanged)
              return n;
            const a = i.doc.lastChild;
            return !pi({ node: a, types: t });
          }
        }
      })
    ];
  }
}), Kd = K.create({
  name: "base-kit",
  addExtensions() {
    const e = [];
    return this.options.document !== !1 && e.push(Qc.configure()), this.options.placeholder !== !1 && e.push(
      ga.configure({
        placeholder: ({ node: t, pos: i, editor: n }) => {
          var a, o, c, s;
          return ((a = t == null ? void 0 : t.type) == null ? void 0 : a.name) === "columns" || ((o = t == null ? void 0 : t.content) == null ? void 0 : o.size) !== 0 ? "" : ((c = t == null ? void 0 : t.type) == null ? void 0 : c.name) === "heading" ? `${V.t(`editor.heading.h${t.attrs.level}.tooltip`)}` : ((s = t == null ? void 0 : t.type) == null ? void 0 : s.name) === "table" ? "" : n.extensionManager.extensions.some((l) => l.name === "slashCommand") ? V.t("editor.slash") : i === 0 ? V.t("editor.content") : V.t("editor.content");
        },
        ...this.options.placeholder
      })
    ), this.options.focus !== !1 && e.push(
      ba.configure({
        className: "focus",
        ...this.options.focus
      })
    ), this.options.text !== !1 && e.push(_a.configure()), this.options.textBubble !== !1 && e.push(os.configure()), this.options.gapcursor !== !1 && e.push(wa.configure()), this.options.dropcursor !== !1 && e.push(
      pa.configure({
        ...this.options.dropcursor,
        width: 2,
        class: "ProseMirror-dropcursor border-black"
      })
    ), this.options.characterCount !== !1 && e.push(va.configure(this.options.characterCount)), this.options.paragraph !== !1 && e.push(ya.configure(this.options.paragraph)), this.options.hardBreak !== !1 && e.push(ka.configure(this.options.hardBreak)), this.options.listItem !== !1 && e.push(Ca.configure(this.options.listItem)), this.options.textStyle !== !1 && e.push(Na.configure(this.options.textStyle)), this.options.trailingNode !== !1 && e.push(cs.configure(this.options.trailingNode)), this.options.selection !== !1 && e.push(rs), this.options.multiColumn !== !1 && (e.push(ri), e.push(Ge)), e;
  }
}), Xd = K.create({
  name: "subAndSuperScript",
  addOptions() {
    var e;
    return {
      ...(e = this.parent) == null ? void 0 : e.call(this),
      button: ({ editor: t, extension: i, t: n }) => {
        const a = i.options.subscript, o = i.options.superscript, c = {
          component: w,
          componentProps: {
            action: () => t.commands.toggleSubscript(),
            isActive: () => t.isActive("subscript") || !1,
            disabled: !t.can().toggleSubscript(),
            icon: "Subscript",
            tooltip: n("editor.subscript.tooltip")
          }
        }, s = {
          component: w,
          componentProps: {
            action: () => t.commands.toggleSuperscript(),
            isActive: () => t.isActive("superscript") || !1,
            disabled: !t.can().toggleSuperscript(),
            icon: "Superscript",
            tooltip: n("editor.superscript.tooltip")
          }
        }, l = [];
        return a !== !1 && l.push(c), o !== !1 && l.push(s), l;
      }
    };
  },
  addExtensions() {
    const e = [];
    return this.options.subscript !== !1 && e.push(Ii.configure(this.options.subscript)), this.options.superscript !== !1 && e.push(zi.configure(this.options.superscript)), e;
  }
});
function ss(e) {
  var i;
  const t = F(() => {
    var o;
    const n = (o = e == null ? void 0 : e.items) == null ? void 0 : o.find((c) => c.isActive());
    return n && !n.default ? {
      ...n,
      icon: n != null && n.icon ? n == null ? void 0 : n.icon : e == null ? void 0 : e.icon
    } : {
      title: e.tooltip,
      icon: e.icon,
      isActive: () => !1
    };
  }, [e]);
  return /* @__PURE__ */ m(ye, { children: [
    /* @__PURE__ */ r(ke, { disabled: e == null ? void 0 : e.disabled, asChild: !0, children: /* @__PURE__ */ r(
      w,
      {
        customClass: "!richtext-w-12 richtext-h-12",
        icon: e == null ? void 0 : e.icon,
        tooltip: e == null ? void 0 : e.tooltip,
        disabled: e == null ? void 0 : e.disabled,
        children: /* @__PURE__ */ r(sn, { className: "richtext-w-3 richtext-h-3 richtext-text-gray-500" })
      }
    ) }),
    /* @__PURE__ */ r(xe, { className: "w-full", children: (i = e == null ? void 0 : e.items) == null ? void 0 : i.map((n, a) => /* @__PURE__ */ m(
      Ce,
      {
        checked: t.title === n.title,
        onClick: n.action,
        className: "richtext-flex richtext-items-center richtext-gap-3",
        children: [
          /* @__PURE__ */ r(D, { name: n == null ? void 0 : n.icon }),
          /* @__PURE__ */ r("span", { className: "richtext-ml-1", children: n.title }),
          !!(n != null && n.shortcutKeys) && /* @__PURE__ */ r("span", { className: "richtext-ml-auto richtext-text-xs richtext-tracking-widest richtext-opacity-60", children: pt(n.shortcutKeys) })
        ]
      },
      `more-mark-${a}`
    )) })
  ] });
}
const Yd = K.create({
  name: "moreMark",
  addOptions() {
    var e;
    return {
      ...(e = this.parent) == null ? void 0 : e.call(this),
      button({ editor: t, extension: i, t: n }) {
        const a = i.options.subscript, o = i.options.superscript, c = {
          action: () => t.commands.toggleSubscript(),
          isActive: () => t.isActive("subscript") || !1,
          disabled: !t.can().toggleSubscript(),
          icon: "Subscript",
          title: n("editor.subscript.tooltip"),
          shortcutKeys: ["mod", "."]
        }, s = {
          action: () => t.commands.toggleSuperscript(),
          isActive: () => t.isActive("superscript") || !1,
          disabled: !t.can().toggleSuperscript(),
          icon: "Superscript",
          title: n("editor.superscript.tooltip"),
          shortcutKeys: ["mod", ","]
        }, l = [];
        return a !== !1 && l.push(c), o !== !1 && l.push(s), {
          component: ss,
          componentProps: {
            icon: "Type",
            tooltip: n("editor.moremark"),
            disabled: !t.isEditable,
            items: l
          }
        };
      }
    };
  },
  addExtensions() {
    const e = [];
    return this.options.subscript !== !1 && e.push(Ii.configure(this.options.subscript)), this.options.superscript !== !1 && e.push(zi.configure(this.options.superscript)), e;
  }
}), Zd = K.create({
  name: "indent",
  addOptions() {
    var e;
    return {
      ...(e = this.parent) == null ? void 0 : e.call(this),
      types: ["paragraph", "heading", "blockquote"],
      minIndent: be.min,
      maxIndent: be.max,
      button({ editor: t, t: i }) {
        return [
          {
            component: w,
            componentProps: {
              action: () => {
                t.commands.indent();
              },
              shortcutKeys: ["Tab"],
              icon: "IndentIncrease",
              tooltip: i("editor.indent.tooltip")
            }
          },
          {
            component: w,
            componentProps: {
              action: () => {
                t.commands.outdent();
              },
              shortcutKeys: ["Shift", "Tab"],
              icon: "IndentDecrease",
              tooltip: i("editor.outdent.tooltip")
            }
          }
        ];
      }
    };
  },
  addGlobalAttributes() {
    return [
      {
        types: this.options.types,
        attributes: {
          indent: {
            default: 0,
            parseHTML: (e) => {
              const t = e.dataset.indent;
              return (t ? Number.parseInt(t, 10) : 0) || 0;
            },
            renderHTML: (e) => e.indent ? { "data-indent": e.indent } : {}
          }
        }
      }
    ];
  },
  addCommands() {
    return {
      indent: () => _i({
        delta: be.more,
        types: this.options.types
      }),
      outdent: () => _i({
        delta: be.less,
        types: this.options.types
      })
    };
  },
  addKeyboardShortcuts() {
    return {
      Tab: () => this.editor.commands.indent(),
      "Shift-Tab": () => this.editor.commands.outdent()
    };
  }
});
function ls(e) {
  return Number.parseFloat(e.replace("%", "")) / 100;
}
function ds(e) {
  const { t } = P(), [i, n] = y("default");
  function a(c) {
    c === "default" ? e.editor.commands.unsetLineHeight() : e.editor.commands.setLineHeight(c), n(c);
  }
  const o = F(() => {
    const l = e.editor.extensionManager.extensions.find(
      (d) => d.name === "lineHeight"
    ).options.lineHeights.map((d) => ({
      label: ls(d),
      value: d
    }));
    return l.unshift({
      label: t("editor.default"),
      value: "default"
    }), l;
  }, [e]);
  return /* @__PURE__ */ m(ye, { children: [
    /* @__PURE__ */ r(ke, { disabled: e == null ? void 0 : e.disabled, asChild: !0, children: /* @__PURE__ */ r(
      w,
      {
        customClass: "!richtext-w-12 richtext-h-12",
        icon: "LineHeight",
        tooltip: e == null ? void 0 : e.tooltip,
        disabled: e == null ? void 0 : e.disabled,
        children: /* @__PURE__ */ r(D, { className: "richtext-w-3 richtext-h-3 richtext-ml-1 richtext-text-zinc-500", name: "MenuDown" })
      }
    ) }),
    /* @__PURE__ */ r(xe, { className: "richtext-min-w-24", children: o == null ? void 0 : o.map((c, s) => /* @__PURE__ */ r(
      Ce,
      {
        checked: c.value === i,
        onClick: () => a(c.value),
        children: c.label
      },
      `lineHeight-${s}`
    )) })
  ] });
}
const hs = ["paragraph", "heading", "list_item", "todo_item"];
function us(e, t) {
  const { selection: i, doc: n } = e;
  if (!i || !n || !(i instanceof _e || i instanceof Di))
    return e;
  const { from: a, to: o } = i, c = [], s = t && t !== Ei ? t : null;
  if (n.nodesBetween(a, o, (l, d) => {
    const h = l.type;
    return hs.includes(h.name) ? ((l.attrs.lineHeight || null) !== s && c.push({
      node: l,
      pos: d,
      nodeType: h
    }), h.name !== "list_item" && h.name !== "todo_item") : !0;
  }), c.length === 0)
    return e;
  for (const l of c) {
    const { node: d, pos: h, nodeType: f } = l;
    let { attrs: u } = d;
    u = {
      ...u,
      lineHeight: s
    }, e = e.setNodeMarkup(h, f, u, d.marks);
  }
  return e;
}
function ms(e) {
  return ({ state: t, dispatch: i }) => {
    const { selection: n } = t;
    let { tr: a } = t;
    return a = a.setSelection(n), a = us(a, e), a.docChanged ? (i && i(a), !0) : !1;
  };
}
const Jd = K.create({
  name: "lineHeight",
  addOptions() {
    var e;
    return {
      ...(e = this.parent) == null ? void 0 : e.call(this),
      types: ["paragraph", "heading", "list_item", "todo_item"],
      lineHeights: Oa,
      defaultHeight: Ei,
      button({ editor: t, t: i }) {
        return {
          component: ds,
          componentProps: {
            editor: t,
            tooltip: i("editor.lineheight.tooltip")
          }
        };
      }
    };
  },
  addGlobalAttributes() {
    return [
      {
        types: this.options.types,
        attributes: {
          lineHeight: {
            default: null,
            parseHTML: (e) => e.style.lineHeight || this.options.defaultHeight,
            renderHTML: (e) => e.lineHeight === this.options.defaultHeight || !e.lineHeight ? {} : { style: `line-height: ${e.lineHeight}` }
          }
        }
      }
    ];
  },
  addCommands() {
    return {
      setLineHeight: (e) => ms(e),
      unsetLineHeight: () => ({ commands: e }) => this.options.types.every((t) => e.resetAttributes(t, "lineHeight"))
    };
  }
}), mn = _t(!1);
function fs() {
  return Ut(mn);
}
const Ie = {
  setOpen: (e) => {
    mn.set(e);
  }
}, fn = _t(!1);
function xs() {
  return Ut(fn);
}
const $e = {
  setOpen: (e) => {
    fn.set(e);
  }
};
function gs(e) {
  const t = [
    {
      name: "format",
      title: V.t("editor.slash.format"),
      commands: []
    },
    {
      name: "insert",
      title: V.t("editor.slash.insert"),
      commands: []
    }
  ];
  return e.forEach((i) => {
    i.name.toLowerCase() === "heading" && i.options.levels.forEach((n) => {
      t[0].commands.push({
        name: `heading${n}`,
        label: V.t(`editor.heading.h${n}.tooltip`),
        aliases: [`h${n}`, "bt", `bt${n}`],
        iconName: `Heading${n}`,
        action: ({ editor: a, range: o }) => {
          a.chain().focus().deleteRange(o).setHeading({ level: n }).run();
        }
      });
    }), i.name.toLowerCase() === "bulletlist" && t[0].commands.push({
      name: "bulletList",
      label: V.t("editor.bulletlist.tooltip"),
      aliases: ["ul", "yxlb"],
      iconName: "List",
      action: ({ editor: n, range: a }) => {
        n.chain().focus().deleteRange(a).toggleBulletList().run();
      }
    }), i.name.toLowerCase() === "orderedlist" && t[0].commands.push({
      name: "numberedList",
      label: V.t("editor.orderedlist.tooltip"),
      aliases: ["ol", "yxlb"],
      iconName: "ListOrdered",
      action: ({ editor: n, range: a }) => {
        n.chain().focus().deleteRange(a).toggleOrderedList().run();
      }
    }), i.name.toLowerCase() === "tasklist" && t[0].commands.push({
      name: "taskList",
      label: V.t("editor.tasklist.tooltip"),
      iconName: "ListTodo",
      description: "Task list with todo items",
      aliases: ["todo"],
      action: ({ editor: n, range: a }) => {
        n.chain().focus().deleteRange(a).toggleTaskList().run();
      }
    }), i.name.toLowerCase() === "blockquote" && t[0].commands.push({
      name: "blockquote",
      label: V.t("editor.blockquote.tooltip"),
      description: "插入引入格式",
      aliases: ["yr"],
      iconName: "TextQuote",
      action: ({ editor: n, range: a }) => {
        n.chain().focus().deleteRange(a).setBlockquote().run();
      }
    }), i.name.toLowerCase() === "image" && t[1].commands.push({
      name: "image",
      label: V.t("editor.image.tooltip"),
      iconName: "ImageUp",
      description: "Insert a image",
      aliases: ["image", "tp", "tupian"],
      shouldBeHidden: (n) => n.isActive("columns"),
      action: ({ editor: n, range: a }) => {
        n.chain().focus().deleteRange(a).run(), Ie.setOpen(!0);
      }
    }), i.name.toLowerCase() === "video" && t[1].commands.push({
      name: "video",
      label: V.t("editor.video.tooltip"),
      iconName: "Video",
      description: "Insert a video",
      aliases: ["video", "sp", "shipin"],
      shouldBeHidden: (n) => n.isActive("columns"),
      action: ({ editor: n, range: a }) => {
        n.chain().focus().deleteRange(a).run(), $e.setOpen(!0);
      }
    }), i.name.toLowerCase() === "table" && t[1].commands.push({
      name: "table",
      label: V.t("editor.table.tooltip"),
      iconName: "Table",
      description: "Insert a table",
      aliases: ["table", "bg", "biaoge", "biao"],
      shouldBeHidden: (n) => n.isActive("columns"),
      action: ({ editor: n, range: a }) => {
        n.chain().focus().deleteRange(a).insertTable({ rows: 3, cols: 3, withHeaderRow: !1 }).run();
      }
    }), i.name.toLowerCase() === "horizontalrule" && t[1].commands.push({
      name: "horizontalRule",
      label: V.t("editor.horizontalrule.tooltip"),
      iconName: "Minus",
      description: "Insert a horizontal divider",
      aliases: ["hr", "fgx", "fg"],
      action: ({ editor: n, range: a }) => {
        n.chain().focus().deleteRange(a).setHorizontalRule().run();
      }
    }), i.name.toLowerCase() === "columns" && t[1].commands.push({
      name: "columns",
      label: V.t("editor.columns.tooltip"),
      iconName: "Columns2",
      description: "Add two column content",
      action: ({ editor: n }) => {
        n.chain().focus().insertColumns({ cols: 2 }).run();
      }
    });
  }), t;
}
function bs(e, t) {
  var N, z;
  const [i, n] = y(0), [a, o] = y(0), c = J(null), { t: s } = P(), l = J([]);
  xt(t, () => ({
    onKeyDown: d
  })), E(() => {
    if (!c.current)
      return;
    const k = a * 1e3 + i, b = l.current[k];
    b && b.scrollIntoView({
      behavior: "smooth",
      block: "nearest"
    });
  }, [i, a]);
  function d({ event: k }) {
    return k.key === "ArrowUp" ? (h(), !0) : k.key === "ArrowDown" ? (f(), !0) : k.key === "Enter" ? (u(), !0) : !1;
  }
  function h() {
    var p;
    if (e.items.length === 0)
      return !1;
    let k = i - 1, b = a;
    k < 0 && (b = a - 1, k = ((p = e.items[b]) == null ? void 0 : p.commands.length) - 1 || 0), b < 0 && (b = e.items.length - 1, k = e.items[b].commands.length - 1), n(k), o(b);
  }
  function f() {
    if (e.items.length === 0)
      return !1;
    const k = e.items[a].commands;
    let b = i + 1, p = a;
    k.length - 1 < b && (b = 0, p = a + 1), e.items.length - 1 < p && (p = 0), n(b), o(p);
  }
  function u() {
    if (e.items.length === 0 || a === -1 || i === -1)
      return !1;
    x(a, i);
  }
  function x(k, b) {
    const p = e.items[k].commands[b];
    e.command(p);
  }
  function g(k, b) {
    x(k, b);
  }
  function _(k, b, p) {
    l.current[k * 1e3 + b] = p;
  }
  return /* @__PURE__ */ r(
    "div",
    {
      className: "!richtext-bg-white richtext-rounded-lg dark:!richtext-bg-black richtext-shadow-sm !richtext-border !richtext-border-neutral-200 dark:!richtext-border-neutral-800 !richtext-text-black richtext-max-h-[min(80vh,24rem)] richtext-overflow-auto richtext-flex-wrap richtext-mb-8 richtext-p-1",
      ref: c,
      children: (N = e == null ? void 0 : e.items) != null && N.length ? /* @__PURE__ */ r("div", { className: "richtext-grid richtext-grid-cols-1 richtext-gap-0.5 richtext-min-w-48", children: (z = e == null ? void 0 : e.items) == null ? void 0 : z.map((k, b) => /* @__PURE__ */ m(gt, { children: [
        /* @__PURE__ */ r("div", { className: "!richtext-text-neutral-500 richtext-text-[0.65rem] richtext-col-[1/-1] richtext-mx-2 richtext-mt-2 richtext-font-semibold richtext-tracking-wider richtext-select-none richtext-uppercase first:richtext-mt-0.5", children: k.title }),
        k.commands.map((p, A) => /* @__PURE__ */ m(
          "button",
          {
            className: I("richtext-flex richtext-items-center richtext-gap-3 richtext-px-2 richtext-py-1.5 richtext-text-sm !richtext-text-neutral-800 dark:!richtext-text-neutral-200 richtext-text-left richtext-w-full richtext-rounded-sm richtext-outline-none richtext-transition-colors !richtext-bg-transparent hover:!richtext-bg-accent ", {
              "slash-command-active": a === b && i === A
            }),
            ref: (R) => _(b, A, R),
            onClick: () => g(b, A),
            children: [
              p.iconUrl && /* @__PURE__ */ r("img", { className: "richtext-w-6 richtext-h-6", src: p.iconUrl, alt: "" }),
              p.iconName && /* @__PURE__ */ r(D, { name: p.iconName, className: "!richtext-mr-1 !richtext-text-lg" }),
              p.label
            ]
          },
          `command-${A}`
        ))
      ] }, `slash-${k.title}`)) }) : /* @__PURE__ */ r("div", { className: "richtext-p-3", children: /* @__PURE__ */ r("span", { className: "richtext-text-xs richtext-text-gray-800 dark:richtext-text-gray-100", children: s("editor.slash.empty") }) })
    }
  );
}
const _s = ft(bs), ge = "slashCommand";
let $;
const Qd = K.create({
  name: ge,
  priority: 200,
  onCreate() {
    $ = Gt("body", {
      interactive: !0,
      trigger: "manual",
      placement: "bottom-start",
      theme: "slash-command",
      maxWidth: "16rem",
      offset: [16, 8],
      popperOptions: {
        strategy: "fixed",
        modifiers: [
          {
            name: "flip",
            enabled: !1
          }
        ]
      }
    });
  },
  addProseMirrorPlugins() {
    return [
      Ri({
        editor: this.editor,
        char: "/",
        allowSpaces: !0,
        startOfLine: !0,
        pluginKey: new pe(ge),
        allow: ({ state: e, range: t }) => {
          var d, h, f;
          const i = e.doc.resolve(t.from), n = i.depth === 1, a = i.parent.type.name === "paragraph", o = ((d = i.parent.textContent) == null ? void 0 : d.charAt(0)) === "/", c = this.editor.isActive("column"), s = (f = i.parent.textContent) == null ? void 0 : f.slice(
            Math.max(0, (h = i.parent.textContent) == null ? void 0 : h.indexOf("/"))
          ), l = !(s != null && s.endsWith("  "));
          return (n && a && o || c && a && o) && l;
        },
        command: ({ editor: e, range: t, props: i }) => {
          const { view: n } = e;
          i.action({ editor: e, range: t }), n.focus();
        },
        items: ({ query: e, editor: t }) => gs(t.extensionManager.extensions).map((c) => ({
          ...c,
          commands: c.commands.filter((s) => {
            const l = s.label.toLowerCase().trim(), d = e.toLowerCase().trim();
            if (s.aliases) {
              const h = s.aliases.map((x) => x.toLowerCase().trim()), f = l.match(d), u = h.some((x) => x.match(d));
              return f || u;
            }
            return l.match(d);
          }).filter(
            (s) => s.shouldBeHidden ? !s.shouldBeHidden(this.editor) : !0
          )
        })).filter((c) => c.commands.length > 0).map((c) => ({
          ...c,
          commands: c.commands.map((s) => ({
            ...s,
            isEnabled: !0
          }))
        })),
        render: () => {
          let e, t = null;
          return {
            onStart: (i) => {
              var o;
              e = new jt(_s, {
                props: i,
                editor: i.editor
              });
              const { view: n } = i.editor, a = () => {
                if (!i.clientRect)
                  return i.editor.storage[ge].rect;
                const c = i.clientRect();
                if (!c)
                  return i.editor.storage[ge].rect;
                let s = c.y;
                if (c.top + e.element.offsetHeight + 40 > window.innerHeight) {
                  const l = c.top + e.element.offsetHeight - window.innerHeight + 40;
                  s = c.y - l;
                }
                return new DOMRect(c.x, s, c.width, c.height);
              };
              t = () => {
                $ == null || $[0].setProps({
                  getReferenceClientRect: a
                });
              }, (o = n.dom.parentElement) == null || o.addEventListener("scroll", t), $ == null || $[0].setProps({
                getReferenceClientRect: a,
                appendTo: () => document.body,
                content: e.element
              }), $ == null || $[0].show();
            },
            onUpdate(i) {
              var c;
              e.updateProps(i);
              const { view: n } = i.editor, a = () => {
                if (!i.clientRect)
                  return i.editor.storage[ge].rect;
                const s = i.clientRect();
                return s ? new DOMRect(s.x, s.y, s.width, s.height) : i.editor.storage[ge].rect;
              }, o = () => {
                $ == null || $[0].setProps({
                  getReferenceClientRect: a
                });
              };
              (c = n.dom.parentElement) == null || c.addEventListener("scroll", o), i.editor.storage[ge].rect = i.clientRect ? a() : {
                width: 0,
                height: 0,
                left: 0,
                top: 0,
                right: 0,
                bottom: 0
              }, $ == null || $[0].setProps({
                getReferenceClientRect: a
              });
            },
            onKeyDown(i) {
              var n;
              return i.event.key === "Escape" ? ($ == null || $[0].hide(), !0) : ($ != null && $[0].state.isShown || $ == null || $[0].show(), (n = e.ref) == null ? void 0 : n.onKeyDown(i));
            },
            onExit(i) {
              var n;
              if ($ == null || $[0].hide(), t) {
                const { view: a } = i.editor;
                (n = a.dom.parentElement) == null || n.removeEventListener("scroll", t);
              }
              e.destroy();
            }
          };
        }
      })
    ];
  },
  addStorage() {
    return {
      rect: {
        width: 0,
        height: 0,
        left: 0,
        top: 0,
        right: 0,
        bottom: 0
      }
    };
  }
}), it = {
  TOP_LEFT: "tl",
  TOP_RIGHT: "tr",
  BOTTOM_LEFT: "bl",
  BOTTOM_RIGHT: "br"
};
function ws(e) {
  var H, T;
  const [t, i] = y({
    width: dt,
    height: dt
  }), [n, a] = y({
    width: 0,
    height: 0
  }), [o] = y([
    it.TOP_LEFT,
    it.TOP_RIGHT,
    it.BOTTOM_LEFT,
    it.BOTTOM_RIGHT
  ]), [c, s] = y(!1), [l, d] = y({
    x: 0,
    y: 0,
    w: 0,
    h: 0,
    dir: ""
  }), { align: h, inline: f } = (H = e == null ? void 0 : e.node) == null ? void 0 : H.attrs, u = F(() => {
    var he;
    const { src: C, alt: B, width: v, height: G, flipX: L, flipY: S } = (he = e == null ? void 0 : e.node) == null ? void 0 : he.attrs, j = ut(v) ? `${v}px` : v, X = ut(G) ? `${G}px` : G, Z = [];
    L && Z.push("rotateX(180deg)"), S && Z.push("rotateY(180deg)");
    const Te = Z.join(" ");
    return {
      src: C || void 0,
      alt: B || void 0,
      style: {
        width: j || void 0,
        height: X || void 0,
        transform: Te || "none"
      }
    };
  }, [(T = e == null ? void 0 : e.node) == null ? void 0 : T.attrs]), x = F(() => {
    const {
      style: { width: C }
    } = u;
    return { width: C === "100%" ? C : void 0 };
  }, [u]);
  function g(C) {
    a({
      width: C.target.width,
      height: C.target.height
    });
  }
  function _() {
    const { editor: C, getPos: B } = e;
    C.commands.setNodeSelection(B());
  }
  const N = M(
    Ue(() => {
      const { editor: C } = e, { width: B } = getComputedStyle(C.view.dom);
      i((v) => ({
        ...v,
        width: Number.parseInt(B, 10)
      }));
    }, ht),
    [e == null ? void 0 : e.editor]
  );
  function z(C, B) {
    C.preventDefault(), C.stopPropagation();
    const v = n.width, G = n.height, L = v / G;
    let S = Number(e.node.attrs.width), j = Number(e.node.attrs.height);
    const X = t.width;
    S && !j ? (S = S > X ? X : S, j = Math.round(S / L)) : j && !S ? (S = Math.round(j * L), S = S > X ? X : S) : !S && !j ? (S = v > X ? X : v, j = Math.round(S / L)) : S = S > X ? X : S, mt(() => {
      s(!0), d({
        x: C.clientX,
        y: C.clientY,
        w: S,
        h: j,
        dir: B
      });
    });
  }
  const k = M(
    Ue((C) => {
      if (C.preventDefault(), C.stopPropagation(), !c)
        return;
      const { x: B, w: v, dir: G } = l, L = (C.clientX - B) * (/l/.test(G) ? -1 : 1), S = Bi(v + L, Oi, t.width);
      e.updateAttributes({
        width: S,
        height: null
      });
    }, ht),
    [c, l, t, e.updateAttributes]
  ), b = M(
    (C) => {
      C.preventDefault(), C.stopPropagation(), c && (mt(() => {
        d({
          x: 0,
          y: 0,
          w: 0,
          h: 0,
          dir: ""
        }), s(!1);
      }), _());
    },
    [c, _]
  ), p = M(() => {
    document == null || document.addEventListener("mousemove", k, !0), document == null || document.addEventListener("mouseup", b, !0);
  }, [k, b]), A = M(() => {
    document == null || document.removeEventListener("mousemove", k, !0), document == null || document.removeEventListener("mouseup", b, !0);
  }, [k, b]);
  E(() => (c ? p() : A(), () => {
    A();
  }), [c, p, A]);
  const R = F(() => new ResizeObserver(() => N()), [N]);
  return E(() => (R.observe(e.editor.view.dom), () => {
    R.disconnect();
  }), [e.editor.view.dom, R]), /* @__PURE__ */ r(
    fe,
    {
      className: "image-view",
      style: { ...x, textAlign: h, display: f ? "inline" : "block" },
      as: f ? "span" : "div",
      children: /* @__PURE__ */ m(
        "div",
        {
          draggable: "true",
          "data-drag-handle": !0,
          className: `image-view__body ${e != null && e.selected ? "image-view__body--focused" : ""} ${c ? "image-view__body--resizing" : ""}`,
          style: x,
          children: [
            /* @__PURE__ */ r(
              "img",
              {
                src: u.src,
                alt: u.alt,
                style: u.style,
                height: "auto",
                className: "image-view__body__image block",
                onLoad: g,
                onClick: _
              }
            ),
            (e == null ? void 0 : e.editor.view.editable) && ((e == null ? void 0 : e.selected) || c) && /* @__PURE__ */ r("div", { className: "image-resizer", children: o == null ? void 0 : o.map((C) => /* @__PURE__ */ r(
              "span",
              {
                className: `image-resizer__handler image-resizer__handler--${C}`,
                onMouseDown: (B) => z(B, C)
              },
              `image-dir-${C}`
            )) })
          ]
        }
      )
    }
  );
}
function ps(e) {
  return e.replace(/^.*\/|\..+$/g, "");
}
function vs(e) {
  return e.split(".").pop();
}
function xn(e) {
  return e < 1024 ? `${e} Byte` : e < 1024 * 1024 ? `${(e / 1024).toFixed(2)} KB` : `${(e / 1024 / 1024).toFixed(2)} MB`;
}
function ys(e) {
  return e ? e === "application/pdf" ? "pdf" : e.startsWith("application/") && [".document", "word"].some((t) => e.includes(t)) ? "word" : e.startsWith("application/") && ["presentation"].some((t) => e.includes(t)) ? "excel" : e.startsWith("application/") && ["sheet"].some((t) => e.includes(t)) ? "ppt" : e.startsWith("image") ? "image" : e.startsWith("audio") ? "audio" : e.startsWith("video") ? "video" : "file" : "file";
}
function ks(e) {
  return new Promise((t) => {
    const i = new FileReader();
    i.addEventListener(
      "load",
      () => {
        t({
          alt: e.name,
          src: i.result
        });
      },
      !1
    ), i.readAsDataURL(e);
  });
}
function Cs(e, t) {
  const i = e.split(","), n = i[0].match(/:(.*?);/)[1], a = atob(i[i.length - 1]);
  let o = a.length;
  const c = new Uint8Array(o);
  for (; o--; )
    c[o] = a.charCodeAt(o);
  return new File([c], t, { type: n });
}
function Ns({ editor: e, imageInline: t, onClose: i }) {
  const { t: n } = P(), [a, o] = y(!1), c = Fe.useRef(null), [s, l] = Fe.useState(), [d, h] = Fe.useState(""), f = J(null), [u, x] = y({
    src: "",
    file: null
  });
  function g(b) {
    if (c.current && b.width && b.height) {
      const p = _(c.current, b);
      h(p);
    }
  }
  function _(b, p) {
    const A = document.createElement("canvas"), R = b.naturalWidth / b.width, H = b.naturalHeight / b.height;
    A.width = p.width * R, A.height = p.height * H;
    const T = A.getContext("2d");
    return T && (T.imageSmoothingEnabled = !1, T.drawImage(
      b,
      p.x * R,
      p.y * H,
      p.width * R,
      p.height * H,
      0,
      0,
      p.width * R,
      p.height * H
    )), A.toDataURL("image/png", 1);
  }
  async function N() {
    var b, p;
    try {
      const A = await Cs(d, ((b = u == null ? void 0 : u.file) == null ? void 0 : b.name) || "image.png"), R = (p = e.extensionManager.extensions.find(
        (T) => T.name === "image"
      )) == null ? void 0 : p.options;
      let H = "";
      R.upload ? H = await R.upload(A) : H = URL.createObjectURL(A), e.chain().focus().setImageInline({ src: H, inline: t }).run(), o(!1), x({
        src: "",
        file: null
      }), i();
    } catch (A) {
      console.log("Error cropping image", A);
    }
  }
  function z(b) {
    var p;
    b.preventDefault(), (p = f.current) == null || p.click();
  }
  const k = async (b) => {
    var H;
    const p = (H = b == null ? void 0 : b.target) == null ? void 0 : H.files;
    if (!e || e.isDestroyed || p.length === 0)
      return;
    const A = p[0], R = await ks(A);
    o(!0), x({
      src: R.src,
      file: A
    });
  };
  return /* @__PURE__ */ m(W, { children: [
    /* @__PURE__ */ r(U, { className: "richtext-w-full richtext-mt-1", size: "sm", onClick: z, children: n("editor.image.dialog.tab.uploadCrop") }),
    /* @__PURE__ */ m(vt, { open: a, children: [
      /* @__PURE__ */ r(yt, {}),
      /* @__PURE__ */ m(Xe, { children: [
        /* @__PURE__ */ r(Ye, { children: n("editor.image.dialog.tab.uploadCrop") }),
        /* @__PURE__ */ r("div", { children: u.src && /* @__PURE__ */ r(
          Wa,
          {
            crop: s,
            onChange: (b) => l(b),
            onComplete: (b) => g(b),
            className: "richtext-w-full",
            children: /* @__PURE__ */ r(
              "img",
              {
                ref: c,
                alt: "Crop me",
                src: u.src
              }
            )
          }
        ) }),
        /* @__PURE__ */ m(Yt, { children: [
          /* @__PURE__ */ m(
            U,
            {
              onClick: () => {
                o(!1), x({
                  src: "",
                  file: null
                });
              },
              children: [
                n("editor.imageUpload.cancel"),
                /* @__PURE__ */ r(D, { name: "Trash2", className: "richtext-ml-[4px]" })
              ]
            }
          ),
          /* @__PURE__ */ m(U, { className: "richtext-w-fit", onClick: N, children: [
            n("editor.imageUpload.crop"),
            /* @__PURE__ */ r(D, { name: "Crop", className: "richtext-ml-[4px]" })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ r(
      "input",
      {
        type: "file",
        accept: "image/*",
        ref: f,
        multiple: !0,
        style: {
          display: "none"
        },
        onChange: k
      }
    )
  ] });
}
function Ts(e) {
  const { t } = P(), i = fs(), [n, a] = y(""), o = J(null), [c, s] = y(!1), l = F(() => {
    var x;
    return (x = e.editor.extensionManager.extensions.find(
      (g) => g.name === Hs.name
    )) == null ? void 0 : x.options;
  }, [e.editor]);
  async function d(u) {
    var N;
    const x = (N = u == null ? void 0 : u.target) == null ? void 0 : N.files;
    if (!e.editor || e.editor.isDestroyed || x.length === 0)
      return;
    const g = x[0];
    let _ = "";
    l.upload ? _ = await l.upload(g) : _ = URL.createObjectURL(g), e.editor.chain().focus().setImageInline({ src: _, inline: c }).run(), Ie.setOpen(!1), s(!1);
  }
  function h(u) {
    u.preventDefault(), u.stopPropagation(), e.editor.chain().focus().setImageInline({ src: n, inline: c }).run(), Ie.setOpen(!1), s(!1);
  }
  function f(u) {
    var x;
    u.preventDefault(), (x = o.current) == null || x.click();
  }
  return /* @__PURE__ */ m(vt, { open: i, onOpenChange: Ie.setOpen, children: [
    /* @__PURE__ */ r(yt, { asChild: !0, children: /* @__PURE__ */ r(
      w,
      {
        icon: e.icon,
        action: () => Ie.setOpen(!0),
        tooltip: e.tooltip
      }
    ) }),
    /* @__PURE__ */ m(Xe, { children: [
      /* @__PURE__ */ r(Ye, { children: t("editor.image.dialog.title") }),
      /* @__PURE__ */ m(
        Jt,
        {
          defaultValue: l.resourceImage === "both" || l.resourceImage === "upload" ? "upload" : "link",
          activationMode: "manual",
          children: [
            /* @__PURE__ */ m(Ct, { className: "richtext-grid richtext-w-full richtext-grid-cols-2", children: [
              l.resourceImage === "both" || l.resourceImage === "upload" ? /* @__PURE__ */ r(Re, { value: "upload", children: t("editor.image.dialog.tab.upload") }) : /* @__PURE__ */ r(W, {}),
              l.resourceImage === "both" || l.resourceImage === "link" ? /* @__PURE__ */ r(Re, { value: "link", children: t("editor.image.dialog.tab.url") }) : /* @__PURE__ */ r(W, {})
            ] }),
            /* @__PURE__ */ m("div", { className: "richtext-flex richtext-items-center richtext-gap-[4px] richtext-my-[10px]", children: [
              /* @__PURE__ */ r(
                Ji,
                {
                  checked: c,
                  onCheckedChange: (u) => {
                    s(u);
                  }
                }
              ),
              /* @__PURE__ */ r(te, { children: t("editor.link.dialog.inline") })
            ] }),
            /* @__PURE__ */ m(He, { value: "upload", children: [
              /* @__PURE__ */ m("div", { className: "richtext-flex richtext-items-center richtext-gap-[10px]", children: [
                /* @__PURE__ */ r(U, { className: "richtext-w-full richtext-mt-1", size: "sm", onClick: f, children: t("editor.image.dialog.tab.upload") }),
                /* @__PURE__ */ r(
                  Ns,
                  {
                    editor: e.editor,
                    imageInline: c,
                    onClose: () => Ie.setOpen(!1)
                  }
                )
              ] }),
              /* @__PURE__ */ r(
                "input",
                {
                  type: "file",
                  accept: "image/*",
                  ref: o,
                  multiple: !0,
                  style: {
                    display: "none"
                  },
                  onChange: d
                }
              )
            ] }),
            /* @__PURE__ */ r(He, { value: "link", children: /* @__PURE__ */ r("form", { onSubmit: h, children: /* @__PURE__ */ m("div", { className: "richtext-flex richtext-items-center richtext-gap-2", children: [
              /* @__PURE__ */ r(
                Y,
                {
                  type: "url",
                  autoFocus: !0,
                  value: n,
                  onChange: (u) => a(u.target.value),
                  required: !0,
                  placeholder: t("editor.image.dialog.placeholder")
                }
              ),
              /* @__PURE__ */ r(U, { type: "submit", children: t("editor.image.dialog.button.apply") })
            ] }) }) })
          ]
        }
      )
    ] })
  ] });
}
const ze = new pe("upload-image");
function As() {
  return new we({
    key: ze,
    state: {
      init() {
        return je.empty;
      },
      apply(e, t) {
        t = t.map(e.mapping, e.doc);
        const i = e.getMeta(ze);
        if (i != null && i.add)
          for (const { id: n, pos: a, src: o } of i.add) {
            const c = Ss(o), s = We.widget(a, c, { id: n });
            t = t.add(e.doc, [s]);
          }
        else if (i != null && i.remove)
          for (const n of i.remove)
            t = t.remove(t.find(void 0, void 0, (a) => a.id === n));
        return t;
      }
    },
    props: {
      decorations(e) {
        return this.getState(e);
      }
    }
  });
}
function Ss(e) {
  const t = document.createElement("div"), i = document.createElement("img");
  return i.setAttribute("class", "opacity-50"), i.src = e, i.addEventListener("load", () => {
    t.setAttribute("class", "img-placeholder");
  }), t.append(i), t;
}
function Ls(e, t) {
  var a;
  const n = ze.getState(e).find(void 0, void 0, (o) => o.id === t);
  return n.length > 0 ? (a = n[0]) == null ? void 0 : a.from : null;
}
function Ms({ validateFn: e, onUpload: t, postUpload: i }) {
  return (n, a, o) => {
    for (const c of n) {
      if (e && !e(c))
        continue;
      const s = Date.now().toString(), l = a.state.tr;
      l.selection.empty || l.deleteSelection();
      const d = URL.createObjectURL(c);
      l.setMeta(ze, {
        add: [{ id: s, pos: o, src: d }]
      }), a.dispatch(l), t(c).then(
        async (h) => {
          var z;
          i && typeof h == "string" && (h = await i(h));
          const { schema: f } = a.state;
          let u = Ls(a.state, s);
          if (u === null)
            return;
          const x = typeof h == "object" ? d : h, g = (z = f.nodes.image) == null ? void 0 : z.create({ src: x });
          if (!g)
            return;
          const { doc: _ } = a.state;
          u > _.content.size && (u = _.content.size - 1);
          const N = a.state.tr.replaceWith(u, u, g).setMeta(ze, { remove: [s] });
          a.dispatch(N);
        },
        () => {
          const h = a.state.tr.delete(o, o).setMeta(ze, { remove: [s] });
          a.dispatch(h);
        }
      );
    }
  };
}
function Is(e, t, i) {
  var a;
  const n = [...((a = t.clipboardData) == null ? void 0 : a.files) || []];
  if (n.length > 0) {
    t.preventDefault();
    const o = e.state.selection.from;
    return i(n, e, o + 1), !0;
  }
  return !1;
}
function zs(e, t, i, n) {
  var o;
  const a = [...((o = t.dataTransfer) == null ? void 0 : o.files) || []];
  if (!i && a.length > 0) {
    t.preventDefault();
    const c = e.posAtCoords({
      left: t.clientX,
      top: t.clientY
    });
    if (c)
      return n(a, e, c.pos + 1), !0;
  }
  return !1;
}
const Rs = {
  acceptMimes: ["image/jpeg", "image/gif", "image/png", "image/jpg"],
  maxSize: 1024 * 1024 * 5,
  // 5MB
  resourceImage: "both"
}, Hs = Hi.extend({
  group: "inline",
  inline: !0,
  defining: !0,
  draggable: !0,
  selectable: !0,
  addOptions() {
    var e;
    return {
      ...Rs,
      ...(e = this.parent) == null ? void 0 : e.call(this),
      upload: () => Promise.reject("Image Upload Function"),
      button: ({
        editor: t,
        extension: i,
        t: n
      }) => {
        var a, o;
        return {
          component: Ts,
          componentProps: {
            action: () => {
            },
            upload: i.options.upload,
            /* If setImage is not available(when Image Component is not imported), the button is disabled */
            disabled: !((o = (a = t.can()).setImage) != null && o.call(a, {})),
            icon: "ImageUp",
            tooltip: n("editor.image.tooltip"),
            editor: t
          }
        };
      }
    };
  },
  addAttributes() {
    var e;
    return {
      ...(e = this.parent) == null ? void 0 : e.call(this),
      flipX: {
        default: !1
      },
      flipY: {
        default: !1
      },
      width: {
        default: null,
        parseHTML: (t) => {
          const i = t.style.width || t.getAttribute("width") || null;
          return i ? Number.parseInt(i, 10) : null;
        },
        renderHTML: (t) => ({
          width: t.width
        })
      },
      align: {
        default: "center",
        parseHTML: (t) => t.getAttribute("align"),
        renderHTML: (t) => ({
          align: t.align
        })
      },
      inline: {
        default: !1,
        parseHTML: (t) => !!t.getAttribute("inline"),
        renderHTML: (t) => ({
          inline: t.inline
        })
      }
    };
  },
  addNodeView() {
    return Oe(ws);
  },
  addCommands() {
    var e;
    return {
      ...(e = this.parent) == null ? void 0 : e.call(this),
      setImageInline: (t) => ({ commands: i }) => i.insertContent({
        type: this.name,
        attrs: t
      }),
      updateImage: (t) => ({ commands: i }) => i.updateAttributes(this.name, t),
      setAlignImage: (t) => ({ commands: i }) => i.updateAttributes(this.name, { align: t })
    };
  },
  renderHTML({ HTMLAttributes: e }) {
    const { flipX: t, flipY: i, align: n, inline: a } = e, o = t || i ? `transform: rotateX(${t ? "180" : "0"}deg) rotateY(${i ? "180" : "0"}deg);` : "", c = n ? `text-align: ${n};` : "";
    return [
      a ? "span" : "div",
      {
        style: c,
        class: "image"
      },
      [
        "img",
        de(
          {
            height: "auto",
            style: o
          },
          this.options.HTMLAttributes,
          e
        )
      ]
    ];
  },
  parseHTML() {
    return [
      {
        tag: "span.image img",
        getAttrs: (e) => {
          var o;
          const t = e == null ? void 0 : e.parentElement, i = e == null ? void 0 : e.getAttribute("width"), n = (e == null ? void 0 : e.getAttribute("flipx")) || !1, a = (e == null ? void 0 : e.getAttribute("flipy")) || !1;
          return {
            src: e == null ? void 0 : e.getAttribute("src"),
            alt: e == null ? void 0 : e.getAttribute("alt"),
            caption: e == null ? void 0 : e.getAttribute("caption"),
            width: i ? Number.parseInt(i, 10) : null,
            align: (e == null ? void 0 : e.getAttribute("align")) || ((o = t == null ? void 0 : t.style) == null ? void 0 : o.textAlign) || null,
            inline: (e == null ? void 0 : e.getAttribute("inline")) || !1,
            flipX: n === "true",
            flipY: a === "true"
          };
        }
      },
      {
        tag: "div[class=image]",
        getAttrs: (e) => {
          const t = e.querySelector("img"), i = t == null ? void 0 : t.getAttribute("width"), n = (t == null ? void 0 : t.getAttribute("flipx")) || !1, a = (t == null ? void 0 : t.getAttribute("flipy")) || !1;
          return {
            src: t == null ? void 0 : t.getAttribute("src"),
            alt: t == null ? void 0 : t.getAttribute("alt"),
            caption: t == null ? void 0 : t.getAttribute("caption"),
            width: i ? Number.parseInt(i, 10) : null,
            align: (t == null ? void 0 : t.getAttribute("align")) || e.style.textAlign || null,
            inline: (t == null ? void 0 : t.getAttribute("inline")) || !1,
            flipX: n === "true",
            flipY: a === "true"
          };
        }
      }
    ];
  },
  addProseMirrorPlugins() {
    const t = Ms({
      validateFn: (i) => !(!this.options.acceptMimes.includes(i.type) || i.size > this.options.maxSize),
      onUpload: this.options.upload
      // postUpload: this.options.postUpload,
    });
    return [
      new we({
        props: {
          handlePaste: (i, n) => !n.clipboardData || [...n.clipboardData.files || []].some((o) => o.type === "text/html") ? !1 : Is(i, n, t),
          handleDrop: (i, n, a, o) => (!(n instanceof DragEvent) || !n.dataTransfer || zs(i, n, o, t), !1)
        }
      }),
      As()
    ];
  }
});
function Es(e) {
  return /\.(?:mp4|webm|ogg|mov)$/i.test(e);
}
function Os(e) {
  const { t } = P(), [i, n] = y(""), a = J(null), o = xs(), [c, s] = y(""), l = F(() => {
    var x;
    return (x = e.editor.extensionManager.extensions.find(
      (g) => g.name === Ds.name
    )) == null ? void 0 : x.options;
  }, [e.editor]);
  async function d(u) {
    var N;
    const x = (N = u == null ? void 0 : u.target) == null ? void 0 : N.files;
    if (!e.editor || e.editor.isDestroyed || x.length === 0)
      return;
    const g = x[0];
    let _ = "";
    l.upload ? _ = await l.upload(g) : _ = URL.createObjectURL(g), e.editor.chain().setVideo({
      src: _,
      width: "100%"
    }).focus().run(), $e.setOpen(!1);
  }
  function h(u) {
    u.preventDefault(), u.stopPropagation(), i && (e.editor.chain().setVideo({
      src: i,
      width: "100%"
    }).focus().run(), $e.setOpen(!1));
  }
  function f(u) {
    var x;
    u.preventDefault(), (x = a.current) == null || x.click();
  }
  return /* @__PURE__ */ m(vt, { open: o, onOpenChange: $e.setOpen, children: [
    /* @__PURE__ */ r(yt, { asChild: !0, children: /* @__PURE__ */ r(
      w,
      {
        icon: e.icon,
        action: () => $e.setOpen(!0),
        tooltip: e.tooltip
      }
    ) }),
    /* @__PURE__ */ m(Xe, { children: [
      /* @__PURE__ */ r(Ye, { children: t("editor.video.dialog.title") }),
      /* @__PURE__ */ m(
        Jt,
        {
          defaultValue: (l == null ? void 0 : l.resourceVideo) === "both" || (l == null ? void 0 : l.resourceVideo) === "upload" ? "upload" : "link",
          activationMode: "manual",
          children: [
            /* @__PURE__ */ m(Ct, { className: "richtext-grid richtext-w-full richtext-grid-cols-2", children: [
              ((l == null ? void 0 : l.resourceVideo) === "both" || (l == null ? void 0 : l.resourceVideo) === "upload") && /* @__PURE__ */ r(Re, { value: "upload", children: t("editor.video.dialog.tab.upload") }),
              ((l == null ? void 0 : l.resourceVideo) === "both" || (l == null ? void 0 : l.resourceVideo) === "link") && /* @__PURE__ */ r(Re, { value: "link", children: t("editor.video.dialog.link") })
            ] }),
            /* @__PURE__ */ m(He, { value: "upload", children: [
              /* @__PURE__ */ r("div", { className: "richtext-flex richtext-items-center richtext-gap-[10px]", children: /* @__PURE__ */ r(U, { className: "richtext-w-full richtext-mt-1", size: "sm", onClick: f, children: t("editor.video.dialog.tab.upload") }) }),
              /* @__PURE__ */ r(
                "input",
                {
                  type: "file",
                  accept: "video/*",
                  ref: a,
                  multiple: !0,
                  style: {
                    display: "none"
                  },
                  onChange: d
                }
              )
            ] }),
            /* @__PURE__ */ m(He, { value: "link", children: [
              /* @__PURE__ */ r("form", { onSubmit: h, children: /* @__PURE__ */ m("div", { className: "richtext-flex richtext-items-center richtext-gap-2", children: [
                /* @__PURE__ */ r(
                  Y,
                  {
                    type: "url",
                    autoFocus: !0,
                    value: i,
                    onChange: (u) => {
                      const x = u.target.value;
                      if (!Es(x)) {
                        s("Invalid video URL"), n("");
                        return;
                      }
                      s(""), n(x);
                    },
                    required: !0,
                    placeholder: t("editor.video.dialog.placeholder")
                  }
                ),
                /* @__PURE__ */ r(U, { type: "submit", children: t("editor.video.dialog.button.apply") })
              ] }) }),
              c && /* @__PURE__ */ r("div", { className: "richtext-text-red-500 richtext-my-[5px]", children: c })
            ] })
          ]
        }
      )
    ] })
  ] });
}
function Ps(e) {
  return e = e.replace("https://youtu.be/", "https://www.youtube.com/watch?v=").replace("watch?v=", "embed/"), e = e.replace("https://vimeo.com/", "https://player.vimeo.com/video/"), /^https?:\/\/www.bilibili.com\/video\/.*/i.test(e) && (e = e.replace(/\?.*$/, "").replace("https://www.bilibili.com/video/", "https://player.bilibili.com/player.html?bvid=")), e.includes("drive.google.com") && (e = e.replace("/view", "/preview")), e;
}
const Ds = ue.create({
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
      width: zt["size-medium"],
      HTMLAttributes: {
        class: "iframe-wrapper",
        style: "display: flex;justify-content: center;"
      },
      button: ({ editor: e, t }) => {
        var i, n;
        return {
          component: Os,
          componentProps: {
            action: () => {
            },
            isActive: () => e.isActive("video") || !1,
            /* If setVideo is not available(when Video Component is not imported), the button is disabled */
            disabled: !((n = (i = e.can()).setVideo) != null && n.call(i, {})),
            icon: "Video",
            tooltip: t("editor.video.tooltip"),
            editor: e
          }
        };
      }
    };
  },
  addAttributes() {
    return {
      src: {
        default: null,
        renderHTML: ({ src: e }) => ({
          src: e ? Ps(e) : null
        })
      },
      width: {
        default: this.options.width,
        renderHTML: ({ width: e }) => ({
          width: Wo(e)
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
  renderHTML({ HTMLAttributes: e }) {
    const { width: t = "100%" } = e ?? {}, i = {
      ...e,
      width: "100%",
      height: "100%"
    }, n = `position: relative;overflow: hidden;display: flex;flex: 1;max-width: ${t};`, a = `flex: 1;padding-bottom: ${9 / 16 * 100}%;`, s = ["div", { style: n }, ["div", { style: a }], ["iframe", i]];
    return ["div", {
      ...this.options.HTMLAttributes,
      "data-video": ""
    }, s];
  },
  addCommands() {
    return {
      setVideo: (e) => ({ commands: t }) => t.insertContent({
        type: this.name,
        attrs: e
      }),
      updateVideo: (e) => ({ commands: t }) => t.updateAttributes(this.name, e)
    };
  }
});
function Bs(e, t, i) {
  if (!e.doc)
    return e;
  const n = e.doc.nodeAt(t);
  if (!n || i === n.attrs.backgroundColor)
    return e;
  const a = {
    ...n.attrs,
    backgroundColor: i
  };
  return e.setNodeMarkup(t, n.type, a, n.marks);
}
function $s(e, t, i) {
  const { doc: n, selection: a } = e;
  return !n || !a || !(a instanceof Fa) || a.forEachCell((o, c) => {
    e = Bs(e, c, i);
  }), e;
}
function vi(e, t) {
  return ({ tr: i, state: n, dispatch: a }) => {
    const { selection: o } = n;
    return i = i.setSelection(o), i = $s(i, t, e), i.docChanged ? (a == null || a(i), !0) : !1;
  };
}
const Fs = K.create({
  name: "tableCellBackground",
  addOptions() {
    return {
      types: ["tableCell"],
      HTMLAttributes: {}
    };
  },
  addGlobalAttributes() {
    return [
      {
        types: this.options.types,
        attributes: {
          backgroundColor: {
            parseHTML: (e) => e.style.backgroundColor || "",
            renderHTML: (e) => !e.backgroundColor || e.backgroundColor === "" ? {} : {
              style: `background-color: ${e.backgroundColor}`
            }
          }
        }
      }
    ];
  },
  addCommands() {
    return {
      setTableCellBackground: (e) => vi(e, this.options),
      unsetTableCellBackground: () => vi("", this.options)
    };
  }
}), js = /(android|bb\d+|meego).+mobile|armv7l|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series[46]0|samsungbrowser.*mobile|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i, Vs = /CrOS/, Us = /android|ipad|playbook|silk/i;
function yi(e = {}) {
  let t = e.ua || typeof navigator < "u" && navigator.userAgent;
  return t && typeof t == "object" && t.headers && typeof t.headers["user-agent"] == "string" && (t = t.headers["user-agent"]), typeof t != "string" ? !1 : !!(js.test(t) && !Vs.test(t) || e.tablet && Us.test(t) || e.tablet && e.featureDetect && navigator && navigator.maxTouchPoints > 1 && t.includes("Macintosh") && t.includes("Safari"));
}
const ki = (e) => Array.from({ length: e }).map((t, i) => i + 1);
function Ws(e) {
  var h;
  const [t, i] = y(!0), [n, a] = y({
    rows: yi() ? Qe : et,
    cols: yi() ? Qe : et
  }), [o, c] = y({
    rows: tt,
    cols: tt
  });
  function s(f, u) {
    f === n.rows && a((x) => ({
      ...x,
      rows: Math.min(f + 1, Qe)
    })), u === n.cols && a((x) => ({
      ...x,
      cols: Math.min(u + 1, Qe)
    })), c({
      rows: f,
      cols: u
    });
  }
  function l(f, u) {
    e == null || e.createTable({ rows: f, cols: u, withHeaderRow: t }), d();
  }
  function d() {
    i(!1), a({
      rows: et,
      cols: et
    }), c({
      rows: tt,
      cols: tt
    });
  }
  return /* @__PURE__ */ m(re, { modal: !0, children: [
    /* @__PURE__ */ r(ae, { asChild: !0, children: e == null ? void 0 : e.children }),
    /* @__PURE__ */ r(ne, { className: "richtext-w-full !richtext-p-2", align: "start", side: "bottom", children: /* @__PURE__ */ m("div", { className: "richtext-p-0 table-grid-size-editor", children: [
      /* @__PURE__ */ r("div", { className: "richtext-flex richtext-flex-col richtext-flex-wrap richtext-justify-between richtext-gap-1", children: (h = ki(n == null ? void 0 : n.rows)) == null ? void 0 : h.map((f) => {
        var u;
        return /* @__PURE__ */ r("div", { className: "richtext-flex richtext-gap-1", children: (u = ki(n == null ? void 0 : n.cols)) == null ? void 0 : u.map((x) => /* @__PURE__ */ r(
          "div",
          {
            className: `richtext-cursor-pointer richtext-border-border ${x <= o.cols && f <= o.rows && "!richtext-bg-foreground tableCellActive"}`,
            onMouseOver: () => s(f, x),
            onMouseDown: () => l(f, x),
            children: /* @__PURE__ */ r("div", { className: "richtext-w-4 richtext-h-4 richtext-p-1 !richtext-border richtext-rounded-[2px] richtext-box-border richtext-border-solid !richtext-border-border" })
          },
          `c-${x}`
        )) }, `r-${f}`);
      }) }),
      /* @__PURE__ */ m("div", { className: "richtext-mt-2 richtext-text-sm richtext-text-center richtext-text-zinc-600", children: [
        o.rows,
        " ",
        "x",
        o.cols
      ] })
    ] }) })
  ] });
}
function qs(e) {
  function t(i) {
    e.disabled || e.editor.chain().focus().insertTable({ ...i, withHeaderRow: !1 }).run();
  }
  return /* @__PURE__ */ r(Ws, { createTable: t, children: /* @__PURE__ */ r(
    w,
    {
      icon: e == null ? void 0 : e.icon,
      tooltip: e == null ? void 0 : e.tooltip,
      disabled: e == null ? void 0 : e.disabled,
      color: e == null ? void 0 : e.color,
      action: e == null ? void 0 : e.action,
      isActive: e == null ? void 0 : e.isActive
    }
  ) });
}
const eh = Ta.extend({
  addOptions() {
    var e;
    return {
      ...(e = this.parent) == null ? void 0 : e.call(this),
      resizable: !0,
      lastColumnResizable: !0,
      allowTableNodeSelection: !1,
      button: ({ editor: t, t: i }) => ({
        component: qs,
        componentProps: {
          disabled: t.isActive("table") || !1,
          icon: "Table",
          tooltip: i("editor.table.tooltip"),
          editor: t
        }
      })
    };
  },
  addExtensions() {
    return [
      Aa.configure(this.options.tableRow),
      Sa.configure(this.options.tableHeader),
      La.configure(this.options.tableCell),
      Fs.configure(this.options.tableCellBackground)
    ];
  }
}), th = K.create({
  name: "painter",
  addOptions() {
    var e;
    return {
      ...(e = this.parent) == null ? void 0 : e.call(this),
      button: ({ editor: t, t: i }) => ({
        component: w,
        componentProps: {
          action: () => {
            t.commands.setPainter(t == null ? void 0 : t.state.selection.$head.marks());
          },
          icon: "PaintRoller",
          tooltip: i("editor.format")
        }
      })
    };
  },
  addCommands() {
    return {
      setPainter: (e) => ({
        view: {
          dispatch: t,
          state: { tr: i },
          dom: n
        }
      }) => {
        const c = `url("data:image/svg+xml;utf8,${encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#000" d="M9 22v-6H4V7q0-1.65 1.175-2.825T8 3h12v13h-5v6zM6 10h12V5h-1v4h-2V5h-1v2h-2V5H8q-.825 0-1.412.588T6 7zm0 4h12v-2H6zm0 0v-2z"/></svg>')}"), auto`;
        return n.style.cursor = c, t(i.setMeta("painterAction", { type: "start", marks: e })), !0;
      }
    };
  },
  addProseMirrorPlugins() {
    return [
      new we({
        key: new pe("format-painter"),
        state: {
          init: () => [],
          apply: (e, t) => {
            const i = e.getMeta("painterAction");
            return i && i.type === "start" ? t = i.marks : i && i.type === "end" && (t = []), t;
          }
        },
        props: {
          handleDOMEvents: {
            mousedown(e, t) {
              const i = this.getState(e.state);
              if (!i || i.length === 0)
                return e.dom.style.cursor = "", !1;
              const n = () => {
                document.removeEventListener("mouseup", n);
                let {
                  dispatch: a,
                  state: { tr: o, selection: c },
                  dom: s
                } = e;
                s.style.cursor = "", o = o.removeMark(c.from, c.to);
                for (const l of i)
                  l.type.name !== "link" && (o = o.addMark(c.from, c.to, l));
                a(o.setMeta("painterAction", { type: "end" }));
              };
              return document.addEventListener("mouseup", n), !0;
            }
          }
        }
      })
    ];
  }
});
function Gs({ editor: e, ...t }) {
  const { t: i } = P(), [n, a] = y(-1), [o, c] = y([]), [s, l] = y(""), [d, h] = y(""), [f, u] = y(!1), [x, g] = y(!1);
  return E(() => {
    f || (l(""), h(""), a(-1), c([]), e.commands.setSearchTerm(""), e.commands.setReplaceTerm(""));
  }, [e, f]), E(() => {
    f && e && e.commands && e.commands.setSearchTerm && e.commands.setSearchTerm(s);
  }, [f, s, e]), E(() => {
    f && e && e.commands && e.commands.setReplaceTerm && e.commands.setReplaceTerm(d);
  }, [f, d, e]), E(() => {
    if (!e)
      return;
    const _ = e.extensionManager.extensions.find((z) => z.name === Js.name);
    if (!_)
      return;
    const N = () => {
      if (!f)
        return;
      const z = _ ? _.storage.currentIndex : -1, k = _ ? _.storage.results : [];
      a((b) => b !== z ? z : b), c((b) => Pi(b, k) ? b : k);
    };
    return window.addEventListener(Ft, N), () => {
      _ && window.removeEventListener(Ft, N);
    };
  }, [f, e]), /* @__PURE__ */ m(
    re,
    {
      open: f,
      onOpenChange: u,
      children: [
        /* @__PURE__ */ r(
          ae,
          {
            disabled: t == null ? void 0 : t.disabled,
            asChild: !0,
            children: /* @__PURE__ */ r(
              w,
              {
                tooltip: t == null ? void 0 : t.tooltip,
                isActive: t == null ? void 0 : t.isActive,
                disabled: t == null ? void 0 : t.disabled,
                children: /* @__PURE__ */ r(D, { name: t == null ? void 0 : t.icon })
              }
            )
          }
        ),
        /* @__PURE__ */ m(
          ne,
          {
            hideWhenDetached: !0,
            className: "richtext-w-full",
            align: "start",
            side: "bottom",
            children: [
              /* @__PURE__ */ m("div", { className: "richtext-mb-[6px] richtext-flex richtext-items-center richtext-justify-between", children: [
                /* @__PURE__ */ r(te, { children: i("editor.search.dialog.text") }),
                /* @__PURE__ */ r("span", { className: "richtext-font-semibold", children: o.length ? `${n + 1}/${o.length}` : "0/0" })
              ] }),
              /* @__PURE__ */ m("div", { className: "richtext-flex richtext-w-full richtext-max-w-sm richtext-items-center richtext-gap-1.5 richtext-mb-[10px]", children: [
                /* @__PURE__ */ r(
                  Y,
                  {
                    type: "text",
                    required: !0,
                    className: "richtext-w-full",
                    placeholder: "Text",
                    autoFocus: !0,
                    value: s,
                    onChange: (_) => l(_.target.value)
                  }
                ),
                /* @__PURE__ */ r(U, { disabled: !o.length, className: "richtext-flex-1", onClick: e.commands.goToPrevSearchResult, children: /* @__PURE__ */ r(D, { name: "ChevronUp" }) }),
                /* @__PURE__ */ r(U, { disabled: !o.length, className: "richtext-flex-1", onClick: e.commands.goToNextSearchResult, children: /* @__PURE__ */ r(D, { name: "ChevronDown" }) })
              ] }),
              /* @__PURE__ */ r(te, { className: "richtext-mb-[6px]", children: i("editor.replace.dialog.text") }),
              /* @__PURE__ */ r("div", { className: "richtext-flex richtext-w-full richtext-max-w-sm richtext-items-center richtext-gap-1.5 richtext-mb-[5px]", children: /* @__PURE__ */ r("div", { className: "richtext-relative richtext-items-center richtext-w-full richtext-max-w-sm", children: /* @__PURE__ */ r(
                Y,
                {
                  type: "text",
                  required: !0,
                  className: "richtext-w-80",
                  placeholder: "Text",
                  value: d,
                  onChange: (_) => h(_.target.value)
                }
              ) }) }),
              /* @__PURE__ */ m("div", { className: "richtext-flex richtext-items-center richtext-space-x-2 richtext-mb-[10px]", children: [
                /* @__PURE__ */ r(
                  Zt,
                  {
                    checked: x,
                    onCheckedChange: (_) => {
                      g(_), e.commands.setCaseSensitive(_);
                    }
                  }
                ),
                /* @__PURE__ */ r(te, { children: i("editor.replace.caseSensitive") })
              ] }),
              /* @__PURE__ */ m("div", { className: "richtext-flex richtext-items-center richtext-gap-[10px]", children: [
                /* @__PURE__ */ r(U, { disabled: !o.length, className: "richtext-flex-1", onClick: e.commands.replace, children: i("editor.replace.dialog.text") }),
                /* @__PURE__ */ r(U, { disabled: !o.length, className: "richtext-flex-1", onClick: e.commands.replaceAll, children: i("editor.replaceAll.dialog.text") })
              ] })
            ]
          }
        )
      ]
    }
  );
}
const Be = (e, t) => t(e.tr);
function Ks(e, t, i) {
  return RegExp(t ? e.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&") : e, i ? "gu" : "gui");
}
function Xs(e, t, i) {
  const n = [];
  let a = [];
  const o = [];
  let c = 0;
  if (!t)
    return { decorationsToReturn: [], results: [] };
  e == null || e.descendants((s, l) => {
    s.isText ? a[c] ? a[c] = {
      text: a[c].text + s.text,
      pos: a[c].pos
    } : a[c] = {
      text: `${s.text}`,
      pos: l
    } : c += 1;
  }), a = a.filter(Boolean);
  for (let s = 0; s < a.length; s += 1) {
    const { text: l, pos: d } = a[s], h = [...l.matchAll(t)];
    for (let f = 0; f < h.length; f += 1) {
      const u = h[f];
      if (u[0] === "")
        break;
      u.index !== void 0 && o.push({
        from: d + u.index,
        to: d + u.index + u[0].length
      });
    }
  }
  for (let s = 0; s < o.length; s += 1) {
    const l = o[s];
    n.push(We.inline(l.from, l.to, { class: i }));
  }
  return {
    decorationsToReturn: n,
    results: o
  };
}
function Ci(e, t, { state: i, dispatch: n }) {
  if (!t[0])
    return;
  const { from: o, to: c } = t[0];
  n && n(i.tr.insertText(e, o, c));
}
function Ys(e, t, i, n) {
  const a = t + 1;
  if (!n[a])
    return null;
  const { from: o, to: c } = n[t], s = c - o - e.length + i, { from: l, to: d } = n[a];
  return n[a] = {
    to: d - s,
    from: l - s
  }, [s, n];
}
function Zs(e, t, { tr: i, dispatch: n }) {
  let a = 0, o = t.slice();
  if (!o.length)
    return !1;
  for (let c = 0; c < o.length; c += 1) {
    const { from: s, to: l } = o[c];
    i.insertText(e, s, l);
    const d = Ys(e, c, a, o);
    d && (a = d[0], o = d[1]);
  }
  return n(i), !0;
}
function Ni({ view: e, tr: t, searchResults: i, searchResultCurrentClass: n, gotoIndex: a }) {
  const o = i[a];
  if (o) {
    const c = t.setMeta("directDecoration", {
      fromPos: o.from,
      toPos: o.to,
      attrs: { class: n }
    });
    return e == null || e.dispatch(c), setTimeout(() => {
      const s = window.document.querySelector(`.${n}`);
      s && Kt(s, { behavior: "smooth", scrollMode: "if-needed" });
    }, 0), !0;
  }
  return !1;
}
const Ft = "ON_SEARCH_RESULTS", Se = new CustomEvent(Ft), Js = K.create({
  name: "search",
  addOptions() {
    var e;
    return {
      ...(e = this.parent) == null ? void 0 : e.call(this),
      searchTerm: "",
      replaceTerm: "",
      results: [],
      currentIndex: 0,
      searchResultClass: "search-result",
      searchResultCurrentClass: "search-result-current",
      caseSensitive: !1,
      disableRegex: !1,
      onChange: () => {
      },
      button: ({ editor: t, t: i }) => ({
        component: Gs,
        componentProps: {
          action: () => {
          },
          icon: "SearchAndReplace",
          tooltip: i("editor.searchAndReplace.tooltip"),
          isActive: () => !1,
          disabled: !1,
          editor: t
        }
      })
    };
  },
  addStorage() {
    return {
      results: [],
      currentIndex: -1
    };
  },
  addCommands() {
    return {
      setSearchTerm: (e) => ({ state: t, dispatch: i }) => (this.options.searchTerm = e, this.storage.results = [], this.storage.currentIndex = 0, window.dispatchEvent(Se), Be(t, i), !1),
      setReplaceTerm: (e) => ({ state: t, dispatch: i }) => (this.options.replaceTerm = e, Be(t, i), !1),
      setCaseSensitive: (e) => ({ state: t, dispatch: i }) => (this.options.caseSensitive = e, Be(t, i), !1),
      replace: () => ({ state: e, dispatch: t }) => {
        const { replaceTerm: i } = this.options, { currentIndex: n, results: a } = this.storage, o = a[n];
        return o ? (Ci(i, [o], { state: e, dispatch: t }), this.storage.results.splice(n, 1)) : (Ci(i, a, { state: e, dispatch: t }), this.storage.results.shift()), window.dispatchEvent(Se), Be(e, t), !1;
      },
      replaceAll: () => ({ state: e, tr: t, dispatch: i }) => {
        const { replaceTerm: n } = this.options, { results: a } = this.storage;
        return Zs(n, a, { tr: t, dispatch: i }), this.storage.currentIndex = -1, this.storage.results = [], window.dispatchEvent(Se), Be(e, i), !1;
      },
      goToPrevSearchResult: () => ({ view: e, tr: t }) => {
        const { searchResultCurrentClass: i } = this.options, { currentIndex: n, results: a } = this.storage, o = (n + a.length - 1) % a.length;
        return this.storage.currentIndex = o, window.dispatchEvent(Se), Ni({
          view: e,
          tr: t,
          searchResults: a,
          searchResultCurrentClass: i,
          gotoIndex: o
        });
      },
      goToNextSearchResult: () => ({ view: e, tr: t }) => {
        const { searchResultCurrentClass: i } = this.options, { currentIndex: n, results: a } = this.storage, o = (n + 1) % a.length;
        return this.storage.currentIndex = o, this.options.onChange && this.options.onChange(), window.dispatchEvent(Se), Ni({
          view: e,
          tr: t,
          searchResults: a,
          searchResultCurrentClass: i,
          gotoIndex: o
        });
      }
    };
  },
  addProseMirrorPlugins() {
    const e = this;
    return [
      new we({
        key: new pe("search"),
        state: {
          init() {
            return je.empty;
          },
          apply(t) {
            const { doc: i, docChanged: n } = t, { searchTerm: a, searchResultClass: o, searchResultCurrentClass: c, disableRegex: s, caseSensitive: l } = e.options;
            if (n || a) {
              const { decorationsToReturn: d, results: h } = Xs(
                i,
                Ks(a, s, l),
                o
              );
              if (e.storage.results = h, e.storage.currentIndex > h.length - 1 && (e.storage.currentIndex = 0), window.dispatchEvent(Se), t.getMeta("directDecoration")) {
                const { fromPos: f, toPos: u, attrs: x } = t.getMeta("directDecoration");
                d.push(We.inline(f, u, x));
              } else
                h.length && (d[0] = We.inline(h[0].from, h[0].to, {
                  class: c
                }));
              return je.create(i, d);
            }
            return je.empty;
          }
        },
        props: {
          decorations(t) {
            return this.getState(t);
          }
        }
      })
    ];
  }
}), Ee = {
  100: "💯",
  1234: "🔢",
  grinning: "😀",
  smiley: "😃",
  smile: "😄",
  grin: "😁",
  laughing: "😆",
  satisfied: "😆",
  sweat_smile: "😅",
  rofl: "🤣",
  joy: "😂",
  slightly_smiling_face: "🙂",
  upside_down_face: "🙃",
  wink: "😉",
  blush: "😊",
  innocent: "😇",
  smiling_face_with_three_hearts: "🥰",
  heart_eyes: "😍",
  star_struck: "🤩",
  kissing_heart: "😘",
  kissing: "😗",
  relaxed: "☺️",
  kissing_closed_eyes: "😚",
  kissing_smiling_eyes: "😙",
  smiling_face_with_tear: "🥲",
  yum: "😋",
  stuck_out_tongue: "😛",
  stuck_out_tongue_winking_eye: "😜",
  zany_face: "🤪",
  stuck_out_tongue_closed_eyes: "😝",
  money_mouth_face: "🤑",
  hugs: "🤗",
  hand_over_mouth: "🤭",
  shushing_face: "🤫",
  thinking: "🤔",
  zipper_mouth_face: "🤐",
  raised_eyebrow: "🤨",
  neutral_face: "😐",
  expressionless: "😑",
  no_mouth: "😶",
  smirk: "😏",
  unamused: "😒",
  roll_eyes: "🙄",
  grimacing: "😬",
  lying_face: "🤥",
  relieved: "😌",
  pensive: "😔",
  sleepy: "😪",
  drooling_face: "🤤",
  sleeping: "😴",
  mask: "😷",
  face_with_thermometer: "🤒",
  face_with_head_bandage: "🤕",
  nauseated_face: "🤢",
  vomiting_face: "🤮",
  sneezing_face: "🤧",
  hot_face: "🥵",
  cold_face: "🥶",
  woozy_face: "🥴",
  dizzy_face: "😵",
  exploding_head: "🤯",
  cowboy_hat_face: "🤠",
  partying_face: "🥳",
  disguised_face: "🥸",
  sunglasses: "😎",
  nerd_face: "🤓",
  monocle_face: "🧐",
  confused: "😕",
  worried: "😟",
  slightly_frowning_face: "🙁",
  frowning_face: "☹️",
  open_mouth: "😮",
  hushed: "😯",
  astonished: "😲",
  flushed: "😳",
  pleading_face: "🥺",
  frowning: "😦",
  anguished: "😧",
  fearful: "😨",
  cold_sweat: "😰",
  disappointed_relieved: "😥",
  cry: "😢",
  sob: "😭",
  scream: "😱",
  confounded: "😖",
  persevere: "😣",
  disappointed: "😞",
  sweat: "😓",
  weary: "😩",
  tired_face: "😫",
  yawning_face: "🥱",
  triumph: "😤",
  rage: "😡",
  pout: "😡",
  angry: "😠",
  cursing_face: "🤬",
  smiling_imp: "😈",
  imp: "👿",
  skull: "💀",
  skull_and_crossbones: "☠️",
  hankey: "💩",
  poop: "💩",
  shit: "💩",
  clown_face: "🤡",
  japanese_ogre: "👹",
  japanese_goblin: "👺",
  ghost: "👻",
  alien: "👽",
  space_invader: "👾",
  robot: "🤖",
  smiley_cat: "😺",
  smile_cat: "😸",
  joy_cat: "😹",
  heart_eyes_cat: "😻",
  smirk_cat: "😼",
  kissing_cat: "😽",
  scream_cat: "🙀",
  crying_cat_face: "😿",
  pouting_cat: "😾",
  see_no_evil: "🙈",
  hear_no_evil: "🙉",
  speak_no_evil: "🙊",
  kiss: "💋",
  love_letter: "💌",
  cupid: "💘",
  gift_heart: "💝",
  sparkling_heart: "💖",
  heartpulse: "💗",
  heartbeat: "💓",
  revolving_hearts: "💞",
  two_hearts: "💕",
  heart_decoration: "💟",
  heavy_heart_exclamation: "❣️",
  broken_heart: "💔",
  heart: "❤️",
  orange_heart: "🧡",
  yellow_heart: "💛",
  green_heart: "💚",
  blue_heart: "💙",
  purple_heart: "💜",
  brown_heart: "🤎",
  black_heart: "🖤",
  white_heart: "🤍",
  anger: "💢",
  boom: "💥",
  collision: "💥",
  dizzy: "💫",
  sweat_drops: "💦",
  dash: "💨",
  hole: "🕳️",
  bomb: "💣",
  speech_balloon: "💬",
  eye_speech_bubble: "👁️‍🗨️",
  left_speech_bubble: "🗨️",
  right_anger_bubble: "🗯️",
  thought_balloon: "💭",
  zzz: "💤",
  wave: "👋",
  raised_back_of_hand: "🤚",
  raised_hand_with_fingers_splayed: "🖐️",
  hand: "✋",
  raised_hand: "✋",
  vulcan_salute: "🖖",
  ok_hand: "👌",
  pinched_fingers: "🤌",
  pinching_hand: "🤏",
  v: "✌️",
  crossed_fingers: "🤞",
  love_you_gesture: "🤟",
  metal: "🤘",
  call_me_hand: "🤙",
  point_left: "👈",
  point_right: "👉",
  point_up_2: "👆",
  middle_finger: "🖕",
  fu: "🖕",
  point_down: "👇",
  point_up: "☝️",
  "+1": "👍",
  thumbsup: "👍",
  "-1": "👎",
  thumbsdown: "👎",
  fist_raised: "✊",
  fist: "✊",
  fist_oncoming: "👊",
  facepunch: "👊",
  punch: "👊",
  fist_left: "🤛",
  fist_right: "🤜",
  clap: "👏",
  raised_hands: "🙌",
  open_hands: "👐",
  palms_up_together: "🤲",
  handshake: "🤝",
  pray: "🙏",
  writing_hand: "✍️",
  nail_care: "💅",
  selfie: "🤳",
  muscle: "💪",
  mechanical_arm: "🦾",
  mechanical_leg: "🦿",
  leg: "🦵",
  foot: "🦶",
  ear: "👂",
  ear_with_hearing_aid: "🦻",
  nose: "👃",
  brain: "🧠",
  anatomical_heart: "🫀",
  lungs: "🫁",
  tooth: "🦷",
  bone: "🦴",
  eyes: "👀",
  eye: "👁️",
  tongue: "👅",
  lips: "👄",
  baby: "👶",
  child: "🧒",
  boy: "👦",
  girl: "👧",
  adult: "🧑",
  blond_haired_person: "👱",
  man: "👨",
  bearded_person: "🧔",
  red_haired_man: "👨‍🦰",
  curly_haired_man: "👨‍🦱",
  white_haired_man: "👨‍🦳",
  bald_man: "👨‍🦲",
  woman: "👩",
  red_haired_woman: "👩‍🦰",
  person_red_hair: "🧑‍🦰",
  curly_haired_woman: "👩‍🦱",
  person_curly_hair: "🧑‍🦱",
  white_haired_woman: "👩‍🦳",
  person_white_hair: "🧑‍🦳",
  bald_woman: "👩‍🦲",
  person_bald: "🧑‍🦲",
  blond_haired_woman: "👱‍♀️",
  blonde_woman: "👱‍♀️",
  blond_haired_man: "👱‍♂️",
  older_adult: "🧓",
  older_man: "👴",
  older_woman: "👵",
  frowning_person: "🙍",
  frowning_man: "🙍‍♂️",
  frowning_woman: "🙍‍♀️",
  pouting_face: "🙎",
  pouting_man: "🙎‍♂️",
  pouting_woman: "🙎‍♀️",
  no_good: "🙅",
  no_good_man: "🙅‍♂️",
  ng_man: "🙅‍♂️",
  no_good_woman: "🙅‍♀️",
  ng_woman: "🙅‍♀️",
  ok_person: "🙆",
  ok_man: "🙆‍♂️",
  ok_woman: "🙆‍♀️",
  tipping_hand_person: "💁",
  information_desk_person: "💁",
  tipping_hand_man: "💁‍♂️",
  sassy_man: "💁‍♂️",
  tipping_hand_woman: "💁‍♀️",
  sassy_woman: "💁‍♀️",
  raising_hand: "🙋",
  raising_hand_man: "🙋‍♂️",
  raising_hand_woman: "🙋‍♀️",
  deaf_person: "🧏",
  deaf_man: "🧏‍♂️",
  deaf_woman: "🧏‍♀️",
  bow: "🙇",
  bowing_man: "🙇‍♂️",
  bowing_woman: "🙇‍♀️",
  facepalm: "🤦",
  man_facepalming: "🤦‍♂️",
  woman_facepalming: "🤦‍♀️",
  shrug: "🤷",
  man_shrugging: "🤷‍♂️",
  woman_shrugging: "🤷‍♀️",
  health_worker: "🧑‍⚕️",
  man_health_worker: "👨‍⚕️",
  woman_health_worker: "👩‍⚕️",
  student: "🧑‍🎓",
  man_student: "👨‍🎓",
  woman_student: "👩‍🎓",
  teacher: "🧑‍🏫",
  man_teacher: "👨‍🏫",
  woman_teacher: "👩‍🏫",
  judge: "🧑‍⚖️",
  man_judge: "👨‍⚖️",
  woman_judge: "👩‍⚖️",
  farmer: "🧑‍🌾",
  man_farmer: "👨‍🌾",
  woman_farmer: "👩‍🌾",
  cook: "🧑‍🍳",
  man_cook: "👨‍🍳",
  woman_cook: "👩‍🍳",
  mechanic: "🧑‍🔧",
  man_mechanic: "👨‍🔧",
  woman_mechanic: "👩‍🔧",
  factory_worker: "🧑‍🏭",
  man_factory_worker: "👨‍🏭",
  woman_factory_worker: "👩‍🏭",
  office_worker: "🧑‍💼",
  man_office_worker: "👨‍💼",
  woman_office_worker: "👩‍💼",
  scientist: "🧑‍🔬",
  man_scientist: "👨‍🔬",
  woman_scientist: "👩‍🔬",
  technologist: "🧑‍💻",
  man_technologist: "👨‍💻",
  woman_technologist: "👩‍💻",
  singer: "🧑‍🎤",
  man_singer: "👨‍🎤",
  woman_singer: "👩‍🎤",
  artist: "🧑‍🎨",
  man_artist: "👨‍🎨",
  woman_artist: "👩‍🎨",
  pilot: "🧑‍✈️",
  man_pilot: "👨‍✈️",
  woman_pilot: "👩‍✈️",
  astronaut: "🧑‍🚀",
  man_astronaut: "👨‍🚀",
  woman_astronaut: "👩‍🚀",
  firefighter: "🧑‍🚒",
  man_firefighter: "👨‍🚒",
  woman_firefighter: "👩‍🚒",
  police_officer: "👮",
  cop: "👮",
  policeman: "👮‍♂️",
  policewoman: "👮‍♀️",
  detective: "🕵️",
  male_detective: "🕵️‍♂️",
  female_detective: "🕵️‍♀️",
  guard: "💂",
  guardsman: "💂‍♂️",
  guardswoman: "💂‍♀️",
  ninja: "🥷",
  construction_worker: "👷",
  construction_worker_man: "👷‍♂️",
  construction_worker_woman: "👷‍♀️",
  prince: "🤴",
  princess: "👸",
  person_with_turban: "👳",
  man_with_turban: "👳‍♂️",
  woman_with_turban: "👳‍♀️",
  man_with_gua_pi_mao: "👲",
  woman_with_headscarf: "🧕",
  person_in_tuxedo: "🤵",
  man_in_tuxedo: "🤵‍♂️",
  woman_in_tuxedo: "🤵‍♀️",
  person_with_veil: "👰",
  man_with_veil: "👰‍♂️",
  woman_with_veil: "👰‍♀️",
  bride_with_veil: "👰‍♀️",
  pregnant_woman: "🤰",
  breast_feeding: "🤱",
  woman_feeding_baby: "👩‍🍼",
  man_feeding_baby: "👨‍🍼",
  person_feeding_baby: "🧑‍🍼",
  angel: "👼",
  santa: "🎅",
  mrs_claus: "🤶",
  mx_claus: "🧑‍🎄",
  superhero: "🦸",
  superhero_man: "🦸‍♂️",
  superhero_woman: "🦸‍♀️",
  supervillain: "🦹",
  supervillain_man: "🦹‍♂️",
  supervillain_woman: "🦹‍♀️",
  mage: "🧙",
  mage_man: "🧙‍♂️",
  mage_woman: "🧙‍♀️",
  fairy: "🧚",
  fairy_man: "🧚‍♂️",
  fairy_woman: "🧚‍♀️",
  vampire: "🧛",
  vampire_man: "🧛‍♂️",
  vampire_woman: "🧛‍♀️",
  merperson: "🧜",
  merman: "🧜‍♂️",
  elf: "🧝",
  elf_man: "🧝‍♂️",
  elf_woman: "🧝‍♀️",
  genie: "🧞",
  genie_man: "🧞‍♂️",
  genie_woman: "🧞‍♀️",
  zombie: "🧟",
  zombie_man: "🧟‍♂️",
  zombie_woman: "🧟‍♀️",
  massage: "💆",
  massage_man: "💆‍♂️",
  massage_woman: "💆‍♀️",
  haircut: "💇",
  haircut_man: "💇‍♂️",
  haircut_woman: "💇‍♀️",
  walking: "🚶",
  walking_man: "🚶‍♂️",
  walking_woman: "🚶‍♀️",
  standing_person: "🧍",
  standing_man: "🧍‍♂️",
  standing_woman: "🧍‍♀️",
  kneeling_person: "🧎",
  kneeling_man: "🧎‍♂️",
  kneeling_woman: "🧎‍♀️",
  person_with_probing_cane: "🧑‍🦯",
  man_with_probing_cane: "👨‍🦯",
  woman_with_probing_cane: "👩‍🦯",
  person_in_motorized_wheelchair: "🧑‍🦼",
  man_in_motorized_wheelchair: "👨‍🦼",
  woman_in_motorized_wheelchair: "👩‍🦼",
  person_in_manual_wheelchair: "🧑‍🦽",
  man_in_manual_wheelchair: "👨‍🦽",
  woman_in_manual_wheelchair: "👩‍🦽",
  runner: "🏃",
  running: "🏃",
  running_man: "🏃‍♂️",
  running_woman: "🏃‍♀️",
  woman_dancing: "💃",
  dancer: "💃",
  man_dancing: "🕺",
  business_suit_levitating: "🕴️",
  dancers: "👯",
  dancing_men: "👯‍♂️",
  dancing_women: "👯‍♀️",
  sauna_person: "🧖",
  sauna_man: "🧖‍♂️",
  sauna_woman: "🧖‍♀️",
  climbing: "🧗",
  climbing_man: "🧗‍♂️",
  climbing_woman: "🧗‍♀️",
  person_fencing: "🤺",
  horse_racing: "🏇",
  skier: "⛷️",
  snowboarder: "🏂",
  golfing: "🏌️",
  golfing_man: "🏌️‍♂️",
  golfing_woman: "🏌️‍♀️",
  surfer: "🏄",
  surfing_man: "🏄‍♂️",
  surfing_woman: "🏄‍♀️",
  rowboat: "🚣",
  rowing_man: "🚣‍♂️",
  rowing_woman: "🚣‍♀️",
  swimmer: "🏊",
  swimming_man: "🏊‍♂️",
  swimming_woman: "🏊‍♀️",
  bouncing_ball_person: "⛹️",
  bouncing_ball_man: "⛹️‍♂️",
  basketball_man: "⛹️‍♂️",
  bouncing_ball_woman: "⛹️‍♀️",
  basketball_woman: "⛹️‍♀️",
  weight_lifting: "🏋️",
  weight_lifting_man: "🏋️‍♂️",
  weight_lifting_woman: "🏋️‍♀️",
  bicyclist: "🚴",
  biking_man: "🚴‍♂️",
  biking_woman: "🚴‍♀️",
  mountain_bicyclist: "🚵",
  mountain_biking_man: "🚵‍♂️",
  mountain_biking_woman: "🚵‍♀️",
  cartwheeling: "🤸",
  man_cartwheeling: "🤸‍♂️",
  woman_cartwheeling: "🤸‍♀️",
  wrestling: "🤼",
  men_wrestling: "🤼‍♂️",
  women_wrestling: "🤼‍♀️",
  water_polo: "🤽",
  man_playing_water_polo: "🤽‍♂️",
  woman_playing_water_polo: "🤽‍♀️",
  handball_person: "🤾",
  man_playing_handball: "🤾‍♂️",
  woman_playing_handball: "🤾‍♀️",
  juggling_person: "🤹",
  man_juggling: "🤹‍♂️",
  woman_juggling: "🤹‍♀️",
  lotus_position: "🧘",
  lotus_position_man: "🧘‍♂️",
  lotus_position_woman: "🧘‍♀️",
  bath: "🛀",
  sleeping_bed: "🛌",
  people_holding_hands: "🧑‍🤝‍🧑",
  two_women_holding_hands: "👭",
  couple: "👫",
  two_men_holding_hands: "👬",
  couplekiss: "💏",
  couplekiss_man_woman: "👩‍❤️‍💋‍👨",
  couplekiss_man_man: "👨‍❤️‍💋‍👨",
  couplekiss_woman_woman: "👩‍❤️‍💋‍👩",
  couple_with_heart: "💑",
  couple_with_heart_woman_man: "👩‍❤️‍👨",
  couple_with_heart_man_man: "👨‍❤️‍👨",
  couple_with_heart_woman_woman: "👩‍❤️‍👩",
  family: "👪",
  family_man_woman_boy: "👨‍👩‍👦",
  family_man_woman_girl: "👨‍👩‍👧",
  family_man_woman_girl_boy: "👨‍👩‍👧‍👦",
  family_man_woman_boy_boy: "👨‍👩‍👦‍👦",
  family_man_woman_girl_girl: "👨‍👩‍👧‍👧",
  family_man_man_boy: "👨‍👨‍👦",
  family_man_man_girl: "👨‍👨‍👧",
  family_man_man_girl_boy: "👨‍👨‍👧‍👦",
  family_man_man_boy_boy: "👨‍👨‍👦‍👦",
  family_man_man_girl_girl: "👨‍👨‍👧‍👧",
  family_woman_woman_boy: "👩‍👩‍👦",
  family_woman_woman_girl: "👩‍👩‍👧",
  family_woman_woman_girl_boy: "👩‍👩‍👧‍👦",
  family_woman_woman_boy_boy: "👩‍👩‍👦‍👦",
  family_woman_woman_girl_girl: "👩‍👩‍👧‍👧",
  family_man_boy: "👨‍👦",
  family_man_boy_boy: "👨‍👦‍👦",
  family_man_girl: "👨‍👧",
  family_man_girl_boy: "👨‍👧‍👦",
  family_man_girl_girl: "👨‍👧‍👧",
  family_woman_boy: "👩‍👦",
  family_woman_boy_boy: "👩‍👦‍👦",
  family_woman_girl: "👩‍👧",
  family_woman_girl_boy: "👩‍👧‍👦",
  family_woman_girl_girl: "👩‍👧‍👧",
  speaking_head: "🗣️",
  bust_in_silhouette: "👤",
  busts_in_silhouette: "👥",
  people_hugging: "🫂",
  footprints: "👣",
  monkey_face: "🐵",
  monkey: "🐒",
  gorilla: "🦍",
  orangutan: "🦧",
  dog: "🐶",
  dog2: "🐕",
  guide_dog: "🦮",
  service_dog: "🐕‍🦺",
  poodle: "🐩",
  wolf: "🐺",
  fox_face: "🦊",
  raccoon: "🦝",
  cat: "🐱",
  cat2: "🐈",
  black_cat: "🐈‍⬛",
  lion: "🦁",
  tiger: "🐯",
  tiger2: "🐅",
  leopard: "🐆",
  horse: "🐴",
  racehorse: "🐎",
  unicorn: "🦄",
  zebra: "🦓",
  deer: "🦌",
  bison: "🦬",
  cow: "🐮",
  ox: "🐂",
  water_buffalo: "🐃",
  cow2: "🐄",
  pig: "🐷",
  pig2: "🐖",
  boar: "🐗",
  pig_nose: "🐽",
  ram: "🐏",
  sheep: "🐑",
  goat: "🐐",
  dromedary_camel: "🐪",
  camel: "🐫",
  llama: "🦙",
  giraffe: "🦒",
  elephant: "🐘",
  mammoth: "🦣",
  rhinoceros: "🦏",
  hippopotamus: "🦛",
  mouse: "🐭",
  mouse2: "🐁",
  rat: "🐀",
  hamster: "🐹",
  rabbit: "🐰",
  rabbit2: "🐇",
  chipmunk: "🐿️",
  beaver: "🦫",
  hedgehog: "🦔",
  bat: "🦇",
  bear: "🐻",
  polar_bear: "🐻‍❄️",
  koala: "🐨",
  panda_face: "🐼",
  sloth: "🦥",
  otter: "🦦",
  skunk: "🦨",
  kangaroo: "🦘",
  badger: "🦡",
  feet: "🐾",
  paw_prints: "🐾",
  turkey: "🦃",
  chicken: "🐔",
  rooster: "🐓",
  hatching_chick: "🐣",
  baby_chick: "🐤",
  hatched_chick: "🐥",
  bird: "🐦",
  penguin: "🐧",
  dove: "🕊️",
  eagle: "🦅",
  duck: "🦆",
  swan: "🦢",
  owl: "🦉",
  dodo: "🦤",
  feather: "🪶",
  flamingo: "🦩",
  peacock: "🦚",
  parrot: "🦜",
  frog: "🐸",
  crocodile: "🐊",
  turtle: "🐢",
  lizard: "🦎",
  snake: "🐍",
  dragon_face: "🐲",
  dragon: "🐉",
  sauropod: "🦕",
  "t-rex": "🦖",
  whale: "🐳",
  whale2: "🐋",
  dolphin: "🐬",
  flipper: "🐬",
  seal: "🦭",
  fish: "🐟",
  tropical_fish: "🐠",
  blowfish: "🐡",
  shark: "🦈",
  octopus: "🐙",
  shell: "🐚",
  snail: "🐌",
  butterfly: "🦋",
  bug: "🐛",
  ant: "🐜",
  bee: "🐝",
  honeybee: "🐝",
  beetle: "🪲",
  lady_beetle: "🐞",
  cricket: "🦗",
  cockroach: "🪳",
  spider: "🕷️",
  spider_web: "🕸️",
  scorpion: "🦂",
  mosquito: "🦟",
  fly: "🪰",
  worm: "🪱",
  microbe: "🦠",
  bouquet: "💐",
  cherry_blossom: "🌸",
  white_flower: "💮",
  rosette: "🏵️",
  rose: "🌹",
  wilted_flower: "🥀",
  hibiscus: "🌺",
  sunflower: "🌻",
  blossom: "🌼",
  tulip: "🌷",
  seedling: "🌱",
  potted_plant: "🪴",
  evergreen_tree: "🌲",
  deciduous_tree: "🌳",
  palm_tree: "🌴",
  cactus: "🌵",
  ear_of_rice: "🌾",
  herb: "🌿",
  shamrock: "☘️",
  four_leaf_clover: "🍀",
  maple_leaf: "🍁",
  fallen_leaf: "🍂",
  leaves: "🍃",
  grapes: "🍇",
  melon: "🍈",
  watermelon: "🍉",
  tangerine: "🍊",
  orange: "🍊",
  mandarin: "🍊",
  lemon: "🍋",
  banana: "🍌",
  pineapple: "🍍",
  mango: "🥭",
  apple: "🍎",
  green_apple: "🍏",
  pear: "🍐",
  peach: "🍑",
  cherries: "🍒",
  strawberry: "🍓",
  blueberries: "🫐",
  kiwi_fruit: "🥝",
  tomato: "🍅",
  olive: "🫒",
  coconut: "🥥",
  avocado: "🥑",
  eggplant: "🍆",
  potato: "🥔",
  carrot: "🥕",
  corn: "🌽",
  hot_pepper: "🌶️",
  bell_pepper: "🫑",
  cucumber: "🥒",
  leafy_green: "🥬",
  broccoli: "🥦",
  garlic: "🧄",
  onion: "🧅",
  mushroom: "🍄",
  peanuts: "🥜",
  chestnut: "🌰",
  bread: "🍞",
  croissant: "🥐",
  baguette_bread: "🥖",
  flatbread: "🫓",
  pretzel: "🥨",
  bagel: "🥯",
  pancakes: "🥞",
  waffle: "🧇",
  cheese: "🧀",
  meat_on_bone: "🍖",
  poultry_leg: "🍗",
  cut_of_meat: "🥩",
  bacon: "🥓",
  hamburger: "🍔",
  fries: "🍟",
  pizza: "🍕",
  hotdog: "🌭",
  sandwich: "🥪",
  taco: "🌮",
  burrito: "🌯",
  tamale: "🫔",
  stuffed_flatbread: "🥙",
  falafel: "🧆",
  egg: "🥚",
  fried_egg: "🍳",
  shallow_pan_of_food: "🥘",
  stew: "🍲",
  fondue: "🫕",
  bowl_with_spoon: "🥣",
  green_salad: "🥗",
  popcorn: "🍿",
  butter: "🧈",
  salt: "🧂",
  canned_food: "🥫",
  bento: "🍱",
  rice_cracker: "🍘",
  rice_ball: "🍙",
  rice: "🍚",
  curry: "🍛",
  ramen: "🍜",
  spaghetti: "🍝",
  sweet_potato: "🍠",
  oden: "🍢",
  sushi: "🍣",
  fried_shrimp: "🍤",
  fish_cake: "🍥",
  moon_cake: "🥮",
  dango: "🍡",
  dumpling: "🥟",
  fortune_cookie: "🥠",
  takeout_box: "🥡",
  crab: "🦀",
  lobster: "🦞",
  shrimp: "🦐",
  squid: "🦑",
  oyster: "🦪",
  icecream: "🍦",
  shaved_ice: "🍧",
  ice_cream: "🍨",
  doughnut: "🍩",
  cookie: "🍪",
  birthday: "🎂",
  cake: "🍰",
  cupcake: "🧁",
  pie: "🥧",
  chocolate_bar: "🍫",
  candy: "🍬",
  lollipop: "🍭",
  custard: "🍮",
  honey_pot: "🍯",
  baby_bottle: "🍼",
  milk_glass: "🥛",
  coffee: "☕",
  teapot: "🫖",
  tea: "🍵",
  sake: "🍶",
  champagne: "🍾",
  wine_glass: "🍷",
  cocktail: "🍸",
  tropical_drink: "🍹",
  beer: "🍺",
  beers: "🍻",
  clinking_glasses: "🥂",
  tumbler_glass: "🥃",
  cup_with_straw: "🥤",
  bubble_tea: "🧋",
  beverage_box: "🧃",
  mate: "🧉",
  ice_cube: "🧊",
  chopsticks: "🥢",
  plate_with_cutlery: "🍽️",
  fork_and_knife: "🍴",
  spoon: "🥄",
  hocho: "🔪",
  knife: "🔪",
  amphora: "🏺",
  earth_africa: "🌍",
  earth_americas: "🌎",
  earth_asia: "🌏",
  globe_with_meridians: "🌐",
  world_map: "🗺️",
  japan: "🗾",
  compass: "🧭",
  mountain_snow: "🏔️",
  mountain: "⛰️",
  volcano: "🌋",
  mount_fuji: "🗻",
  camping: "🏕️",
  beach_umbrella: "🏖️",
  desert: "🏜️",
  desert_island: "🏝️",
  national_park: "🏞️",
  stadium: "🏟️",
  classical_building: "🏛️",
  building_construction: "🏗️",
  bricks: "🧱",
  rock: "🪨",
  wood: "🪵",
  hut: "🛖",
  houses: "🏘️",
  derelict_house: "🏚️",
  house: "🏠",
  house_with_garden: "🏡",
  office: "🏢",
  post_office: "🏣",
  european_post_office: "🏤",
  hospital: "🏥",
  bank: "🏦",
  hotel: "🏨",
  love_hotel: "🏩",
  convenience_store: "🏪",
  school: "🏫",
  department_store: "🏬",
  factory: "🏭",
  japanese_castle: "🏯",
  european_castle: "🏰",
  wedding: "💒",
  tokyo_tower: "🗼",
  statue_of_liberty: "🗽",
  church: "⛪",
  mosque: "🕌",
  hindu_temple: "🛕",
  synagogue: "🕍",
  shinto_shrine: "⛩️",
  kaaba: "🕋",
  fountain: "⛲",
  tent: "⛺",
  foggy: "🌁",
  night_with_stars: "🌃",
  cityscape: "🏙️",
  sunrise_over_mountains: "🌄",
  sunrise: "🌅",
  city_sunset: "🌆",
  city_sunrise: "🌇",
  bridge_at_night: "🌉",
  hotsprings: "♨️",
  carousel_horse: "🎠",
  ferris_wheel: "🎡",
  roller_coaster: "🎢",
  barber: "💈",
  circus_tent: "🎪",
  steam_locomotive: "🚂",
  railway_car: "🚃",
  bullettrain_side: "🚄",
  bullettrain_front: "🚅",
  train2: "🚆",
  metro: "🚇",
  light_rail: "🚈",
  station: "🚉",
  tram: "🚊",
  monorail: "🚝",
  mountain_railway: "🚞",
  train: "🚋",
  bus: "🚌",
  oncoming_bus: "🚍",
  trolleybus: "🚎",
  minibus: "🚐",
  ambulance: "🚑",
  fire_engine: "🚒",
  police_car: "🚓",
  oncoming_police_car: "🚔",
  taxi: "🚕",
  oncoming_taxi: "🚖",
  car: "🚗",
  red_car: "🚗",
  oncoming_automobile: "🚘",
  blue_car: "🚙",
  pickup_truck: "🛻",
  truck: "🚚",
  articulated_lorry: "🚛",
  tractor: "🚜",
  racing_car: "🏎️",
  motorcycle: "🏍️",
  motor_scooter: "🛵",
  manual_wheelchair: "🦽",
  motorized_wheelchair: "🦼",
  auto_rickshaw: "🛺",
  bike: "🚲",
  kick_scooter: "🛴",
  skateboard: "🛹",
  roller_skate: "🛼",
  busstop: "🚏",
  motorway: "🛣️",
  railway_track: "🛤️",
  oil_drum: "🛢️",
  fuelpump: "⛽",
  rotating_light: "🚨",
  traffic_light: "🚥",
  vertical_traffic_light: "🚦",
  stop_sign: "🛑",
  construction: "🚧",
  anchor: "⚓",
  boat: "⛵",
  sailboat: "⛵",
  canoe: "🛶",
  speedboat: "🚤",
  passenger_ship: "🛳️",
  ferry: "⛴️",
  motor_boat: "🛥️",
  ship: "🚢",
  airplane: "✈️",
  small_airplane: "🛩️",
  flight_departure: "🛫",
  flight_arrival: "🛬",
  parachute: "🪂",
  seat: "💺",
  helicopter: "🚁",
  suspension_railway: "🚟",
  mountain_cableway: "🚠",
  aerial_tramway: "🚡",
  artificial_satellite: "🛰️",
  rocket: "🚀",
  flying_saucer: "🛸",
  bellhop_bell: "🛎️",
  luggage: "🧳",
  hourglass: "⌛",
  hourglass_flowing_sand: "⏳",
  watch: "⌚",
  alarm_clock: "⏰",
  stopwatch: "⏱️",
  timer_clock: "⏲️",
  mantelpiece_clock: "🕰️",
  clock12: "🕛",
  clock1230: "🕧",
  clock1: "🕐",
  clock130: "🕜",
  clock2: "🕑",
  clock230: "🕝",
  clock3: "🕒",
  clock330: "🕞",
  clock4: "🕓",
  clock430: "🕟",
  clock5: "🕔",
  clock530: "🕠",
  clock6: "🕕",
  clock630: "🕡",
  clock7: "🕖",
  clock730: "🕢",
  clock8: "🕗",
  clock830: "🕣",
  clock9: "🕘",
  clock930: "🕤",
  clock10: "🕙",
  clock1030: "🕥",
  clock11: "🕚",
  clock1130: "🕦",
  new_moon: "🌑",
  waxing_crescent_moon: "🌒",
  first_quarter_moon: "🌓",
  moon: "🌔",
  waxing_gibbous_moon: "🌔",
  full_moon: "🌕",
  waning_gibbous_moon: "🌖",
  last_quarter_moon: "🌗",
  waning_crescent_moon: "🌘",
  crescent_moon: "🌙",
  new_moon_with_face: "🌚",
  first_quarter_moon_with_face: "🌛",
  last_quarter_moon_with_face: "🌜",
  thermometer: "🌡️",
  sunny: "☀️",
  full_moon_with_face: "🌝",
  sun_with_face: "🌞",
  ringed_planet: "🪐",
  star: "⭐",
  star2: "🌟",
  stars: "🌠",
  milky_way: "🌌",
  cloud: "☁️",
  partly_sunny: "⛅",
  cloud_with_lightning_and_rain: "⛈️",
  sun_behind_small_cloud: "🌤️",
  sun_behind_large_cloud: "🌥️",
  sun_behind_rain_cloud: "🌦️",
  cloud_with_rain: "🌧️",
  cloud_with_snow: "🌨️",
  cloud_with_lightning: "🌩️",
  tornado: "🌪️",
  fog: "🌫️",
  wind_face: "🌬️",
  cyclone: "🌀",
  rainbow: "🌈",
  closed_umbrella: "🌂",
  open_umbrella: "☂️",
  umbrella: "☔",
  parasol_on_ground: "⛱️",
  zap: "⚡",
  snowflake: "❄️",
  snowman_with_snow: "☃️",
  snowman: "⛄",
  comet: "☄️",
  fire: "🔥",
  droplet: "💧",
  ocean: "🌊",
  jack_o_lantern: "🎃",
  christmas_tree: "🎄",
  fireworks: "🎆",
  sparkler: "🎇",
  firecracker: "🧨",
  sparkles: "✨",
  balloon: "🎈",
  tada: "🎉",
  confetti_ball: "🎊",
  tanabata_tree: "🎋",
  bamboo: "🎍",
  dolls: "🎎",
  flags: "🎏",
  wind_chime: "🎐",
  rice_scene: "🎑",
  red_envelope: "🧧",
  ribbon: "🎀",
  gift: "🎁",
  reminder_ribbon: "🎗️",
  tickets: "🎟️",
  ticket: "🎫",
  medal_military: "🎖️",
  trophy: "🏆",
  medal_sports: "🏅",
  "1st_place_medal": "🥇",
  "2nd_place_medal": "🥈",
  "3rd_place_medal": "🥉",
  soccer: "⚽",
  baseball: "⚾",
  softball: "🥎",
  basketball: "🏀",
  volleyball: "🏐",
  football: "🏈",
  rugby_football: "🏉",
  tennis: "🎾",
  flying_disc: "🥏",
  bowling: "🎳",
  cricket_game: "🏏",
  field_hockey: "🏑",
  ice_hockey: "🏒",
  lacrosse: "🥍",
  ping_pong: "🏓",
  badminton: "🏸",
  boxing_glove: "🥊",
  martial_arts_uniform: "🥋",
  goal_net: "🥅",
  golf: "⛳",
  ice_skate: "⛸️",
  fishing_pole_and_fish: "🎣",
  diving_mask: "🤿",
  running_shirt_with_sash: "🎽",
  ski: "🎿",
  sled: "🛷",
  curling_stone: "🥌",
  dart: "🎯",
  yo_yo: "🪀",
  kite: "🪁",
  "8ball": "🎱",
  crystal_ball: "🔮",
  magic_wand: "🪄",
  nazar_amulet: "🧿",
  video_game: "🎮",
  joystick: "🕹️",
  slot_machine: "🎰",
  game_die: "🎲",
  jigsaw: "🧩",
  teddy_bear: "🧸",
  pinata: "🪅",
  nesting_dolls: "🪆",
  spades: "♠️",
  hearts: "♥️",
  diamonds: "♦️",
  clubs: "♣️",
  chess_pawn: "♟️",
  black_joker: "🃏",
  mahjong: "🀄",
  flower_playing_cards: "🎴",
  performing_arts: "🎭",
  framed_picture: "🖼️",
  art: "🎨",
  thread: "🧵",
  sewing_needle: "🪡",
  yarn: "🧶",
  knot: "🪢",
  eyeglasses: "👓",
  dark_sunglasses: "🕶️",
  goggles: "🥽",
  lab_coat: "🥼",
  safety_vest: "🦺",
  necktie: "👔",
  shirt: "👕",
  tshirt: "👕",
  jeans: "👖",
  scarf: "🧣",
  gloves: "🧤",
  coat: "🧥",
  socks: "🧦",
  dress: "👗",
  kimono: "👘",
  sari: "🥻",
  one_piece_swimsuit: "🩱",
  swim_brief: "🩲",
  shorts: "🩳",
  bikini: "👙",
  womans_clothes: "👚",
  purse: "👛",
  handbag: "👜",
  pouch: "👝",
  shopping: "🛍️",
  school_satchel: "🎒",
  thong_sandal: "🩴",
  mans_shoe: "👞",
  shoe: "👞",
  athletic_shoe: "👟",
  hiking_boot: "🥾",
  flat_shoe: "🥿",
  high_heel: "👠",
  sandal: "👡",
  ballet_shoes: "🩰",
  boot: "👢",
  crown: "👑",
  womans_hat: "👒",
  tophat: "🎩",
  mortar_board: "🎓",
  billed_cap: "🧢",
  military_helmet: "🪖",
  rescue_worker_helmet: "⛑️",
  prayer_beads: "📿",
  lipstick: "💄",
  ring: "💍",
  gem: "💎",
  mute: "🔇",
  speaker: "🔈",
  sound: "🔉",
  loud_sound: "🔊",
  loudspeaker: "📢",
  mega: "📣",
  postal_horn: "📯",
  bell: "🔔",
  no_bell: "🔕",
  musical_score: "🎼",
  musical_note: "🎵",
  notes: "🎶",
  studio_microphone: "🎙️",
  level_slider: "🎚️",
  control_knobs: "🎛️",
  microphone: "🎤",
  headphones: "🎧",
  radio: "📻",
  saxophone: "🎷",
  accordion: "🪗",
  guitar: "🎸",
  musical_keyboard: "🎹",
  trumpet: "🎺",
  violin: "🎻",
  banjo: "🪕",
  drum: "🥁",
  long_drum: "🪘",
  iphone: "📱",
  calling: "📲",
  phone: "☎️",
  telephone: "☎️",
  telephone_receiver: "📞",
  pager: "📟",
  fax: "📠",
  battery: "🔋",
  electric_plug: "🔌",
  computer: "💻",
  desktop_computer: "🖥️",
  printer: "🖨️",
  keyboard: "⌨️",
  computer_mouse: "🖱️",
  trackball: "🖲️",
  minidisc: "💽",
  floppy_disk: "💾",
  cd: "💿",
  dvd: "📀",
  abacus: "🧮",
  movie_camera: "🎥",
  film_strip: "🎞️",
  film_projector: "📽️",
  clapper: "🎬",
  tv: "📺",
  camera: "📷",
  camera_flash: "📸",
  video_camera: "📹",
  vhs: "📼",
  mag: "🔍",
  mag_right: "🔎",
  candle: "🕯️",
  bulb: "💡",
  flashlight: "🔦",
  izakaya_lantern: "🏮",
  lantern: "🏮",
  diya_lamp: "🪔",
  notebook_with_decorative_cover: "📔",
  closed_book: "📕",
  book: "📖",
  open_book: "📖",
  green_book: "📗",
  blue_book: "📘",
  orange_book: "📙",
  books: "📚",
  notebook: "📓",
  ledger: "📒",
  page_with_curl: "📃",
  scroll: "📜",
  page_facing_up: "📄",
  newspaper: "📰",
  newspaper_roll: "🗞️",
  bookmark_tabs: "📑",
  bookmark: "🔖",
  label: "🏷️",
  moneybag: "💰",
  coin: "🪙",
  yen: "💴",
  dollar: "💵",
  euro: "💶",
  pound: "💷",
  money_with_wings: "💸",
  credit_card: "💳",
  receipt: "🧾",
  chart: "💹",
  envelope: "✉️",
  email: "📧",
  "e-mail": "📧",
  incoming_envelope: "📨",
  envelope_with_arrow: "📩",
  outbox_tray: "📤",
  inbox_tray: "📥",
  package: "📦",
  mailbox: "📫",
  mailbox_closed: "📪",
  mailbox_with_mail: "📬",
  mailbox_with_no_mail: "📭",
  postbox: "📮",
  ballot_box: "🗳️",
  pencil2: "✏️",
  black_nib: "✒️",
  fountain_pen: "🖋️",
  pen: "🖊️",
  paintbrush: "🖌️",
  crayon: "🖍️",
  memo: "📝",
  pencil: "📝",
  briefcase: "💼",
  file_folder: "📁",
  open_file_folder: "📂",
  card_index_dividers: "🗂️",
  date: "📅",
  calendar: "📆",
  spiral_notepad: "🗒️",
  spiral_calendar: "🗓️",
  card_index: "📇",
  chart_with_upwards_trend: "📈",
  chart_with_downwards_trend: "📉",
  bar_chart: "📊",
  clipboard: "📋",
  pushpin: "📌",
  round_pushpin: "📍",
  paperclip: "📎",
  paperclips: "🖇️",
  straight_ruler: "📏",
  triangular_ruler: "📐",
  scissors: "✂️",
  card_file_box: "🗃️",
  file_cabinet: "🗄️",
  wastebasket: "🗑️",
  lock: "🔒",
  unlock: "🔓",
  lock_with_ink_pen: "🔏",
  closed_lock_with_key: "🔐",
  key: "🔑",
  old_key: "🗝️",
  hammer: "🔨",
  axe: "🪓",
  pick: "⛏️",
  hammer_and_pick: "⚒️",
  hammer_and_wrench: "🛠️",
  dagger: "🗡️",
  crossed_swords: "⚔️",
  gun: "🔫",
  boomerang: "🪃",
  bow_and_arrow: "🏹",
  shield: "🛡️",
  carpentry_saw: "🪚",
  wrench: "🔧",
  screwdriver: "🪛",
  nut_and_bolt: "🔩",
  gear: "⚙️",
  clamp: "🗜️",
  balance_scale: "⚖️",
  probing_cane: "🦯",
  link: "🔗",
  chains: "⛓️",
  hook: "🪝",
  toolbox: "🧰",
  magnet: "🧲",
  ladder: "🪜",
  alembic: "⚗️",
  test_tube: "🧪",
  petri_dish: "🧫",
  dna: "🧬",
  microscope: "🔬",
  telescope: "🔭",
  satellite: "📡",
  syringe: "💉",
  drop_of_blood: "🩸",
  pill: "💊",
  adhesive_bandage: "🩹",
  stethoscope: "🩺",
  door: "🚪",
  elevator: "🛗",
  mirror: "🪞",
  window: "🪟",
  bed: "🛏️",
  couch_and_lamp: "🛋️",
  chair: "🪑",
  toilet: "🚽",
  plunger: "🪠",
  shower: "🚿",
  bathtub: "🛁",
  mouse_trap: "🪤",
  razor: "🪒",
  lotion_bottle: "🧴",
  safety_pin: "🧷",
  broom: "🧹",
  basket: "🧺",
  roll_of_paper: "🧻",
  bucket: "🪣",
  soap: "🧼",
  toothbrush: "🪥",
  sponge: "🧽",
  fire_extinguisher: "🧯",
  shopping_cart: "🛒",
  smoking: "🚬",
  coffin: "⚰️",
  headstone: "🪦",
  funeral_urn: "⚱️",
  moyai: "🗿",
  placard: "🪧",
  atm: "🏧",
  put_litter_in_its_place: "🚮",
  potable_water: "🚰",
  wheelchair: "♿",
  mens: "🚹",
  womens: "🚺",
  restroom: "🚻",
  baby_symbol: "🚼",
  wc: "🚾",
  passport_control: "🛂",
  customs: "🛃",
  baggage_claim: "🛄",
  left_luggage: "🛅",
  warning: "⚠️",
  children_crossing: "🚸",
  no_entry: "⛔",
  no_entry_sign: "🚫",
  no_bicycles: "🚳",
  no_smoking: "🚭",
  do_not_litter: "🚯",
  "non-potable_water": "🚱",
  no_pedestrians: "🚷",
  no_mobile_phones: "📵",
  underage: "🔞",
  radioactive: "☢️",
  biohazard: "☣️",
  arrow_up: "⬆️",
  arrow_upper_right: "↗️",
  arrow_right: "➡️",
  arrow_lower_right: "↘️",
  arrow_down: "⬇️",
  arrow_lower_left: "↙️",
  arrow_left: "⬅️",
  arrow_upper_left: "↖️",
  arrow_up_down: "↕️",
  left_right_arrow: "↔️",
  leftwards_arrow_with_hook: "↩️",
  arrow_right_hook: "↪️",
  arrow_heading_up: "⤴️",
  arrow_heading_down: "⤵️",
  arrows_clockwise: "🔃",
  arrows_counterclockwise: "🔄",
  back: "🔙",
  end: "🔚",
  on: "🔛",
  soon: "🔜",
  top: "🔝",
  place_of_worship: "🛐",
  atom_symbol: "⚛️",
  om: "🕉️",
  star_of_david: "✡️",
  wheel_of_dharma: "☸️",
  yin_yang: "☯️",
  latin_cross: "✝️",
  orthodox_cross: "☦️",
  star_and_crescent: "☪️",
  peace_symbol: "☮️",
  menorah: "🕎",
  six_pointed_star: "🔯",
  aries: "♈",
  taurus: "♉",
  gemini: "♊",
  cancer: "♋",
  leo: "♌",
  virgo: "♍",
  libra: "♎",
  scorpius: "♏",
  sagittarius: "♐",
  capricorn: "♑",
  aquarius: "♒",
  pisces: "♓",
  ophiuchus: "⛎",
  twisted_rightwards_arrows: "🔀",
  repeat: "🔁",
  repeat_one: "🔂",
  arrow_forward: "▶️",
  fast_forward: "⏩",
  next_track_button: "⏭️",
  play_or_pause_button: "⏯️",
  arrow_backward: "◀️",
  rewind: "⏪",
  previous_track_button: "⏮️",
  arrow_up_small: "🔼",
  arrow_double_up: "⏫",
  arrow_down_small: "🔽",
  arrow_double_down: "⏬",
  pause_button: "⏸️",
  stop_button: "⏹️",
  record_button: "⏺️",
  eject_button: "⏏️",
  cinema: "🎦",
  low_brightness: "🔅",
  high_brightness: "🔆",
  signal_strength: "📶",
  vibration_mode: "📳",
  mobile_phone_off: "📴",
  female_sign: "♀️",
  male_sign: "♂️",
  transgender_symbol: "⚧️",
  heavy_multiplication_x: "✖️",
  heavy_plus_sign: "➕",
  heavy_minus_sign: "➖",
  heavy_division_sign: "➗",
  infinity: "♾️",
  bangbang: "‼️",
  interrobang: "⁉️",
  question: "❓",
  grey_question: "❔",
  grey_exclamation: "❕",
  exclamation: "❗",
  heavy_exclamation_mark: "❗",
  wavy_dash: "〰️",
  currency_exchange: "💱",
  heavy_dollar_sign: "💲",
  medical_symbol: "⚕️",
  recycle: "♻️",
  fleur_de_lis: "⚜️",
  trident: "🔱",
  name_badge: "📛",
  beginner: "🔰",
  o: "⭕",
  white_check_mark: "✅",
  ballot_box_with_check: "☑️",
  heavy_check_mark: "✔️",
  x: "❌",
  negative_squared_cross_mark: "❎",
  curly_loop: "➰",
  loop: "➿",
  part_alternation_mark: "〽️",
  eight_spoked_asterisk: "✳️",
  eight_pointed_black_star: "✴️",
  sparkle: "❇️",
  copyright: "©️",
  registered: "®️",
  tm: "™️",
  hash: "#️⃣",
  asterisk: "*️⃣",
  zero: "0️⃣",
  one: "1️⃣",
  two: "2️⃣",
  three: "3️⃣",
  four: "4️⃣",
  five: "5️⃣",
  six: "6️⃣",
  seven: "7️⃣",
  eight: "8️⃣",
  nine: "9️⃣",
  keycap_ten: "🔟",
  capital_abcd: "🔠",
  abcd: "🔡",
  symbols: "🔣",
  abc: "🔤",
  a: "🅰️",
  ab: "🆎",
  b: "🅱️",
  cl: "🆑",
  cool: "🆒",
  free: "🆓",
  information_source: "ℹ️",
  id: "🆔",
  m: "Ⓜ️",
  new: "🆕",
  ng: "🆖",
  o2: "🅾️",
  ok: "🆗",
  parking: "🅿️",
  sos: "🆘",
  up: "🆙",
  vs: "🆚",
  koko: "🈁",
  sa: "🈂️",
  ideograph_advantage: "🉐",
  accept: "🉑",
  congratulations: "㊗️",
  secret: "㊙️",
  u6e80: "🈵",
  red_circle: "🔴",
  orange_circle: "🟠",
  yellow_circle: "🟡",
  green_circle: "🟢",
  large_blue_circle: "🔵",
  purple_circle: "🟣",
  brown_circle: "🟤",
  black_circle: "⚫",
  white_circle: "⚪",
  red_square: "🟥",
  orange_square: "🟧",
  yellow_square: "🟨",
  green_square: "🟩",
  blue_square: "🟦",
  purple_square: "🟪",
  brown_square: "🟫",
  black_large_square: "⬛",
  white_large_square: "⬜",
  black_medium_square: "◼️",
  white_medium_square: "◻️",
  black_medium_small_square: "◾",
  white_medium_small_square: "◽",
  black_small_square: "▪️",
  white_small_square: "▫️",
  large_orange_diamond: "🔶",
  large_blue_diamond: "🔷",
  small_orange_diamond: "🔸",
  small_blue_diamond: "🔹",
  small_red_triangle: "🔺",
  small_red_triangle_down: "🔻",
  diamond_shape_with_a_dot_inside: "💠",
  radio_button: "🔘",
  white_square_button: "🔳",
  black_square_button: "🔲",
  checkered_flag: "🏁",
  triangular_flag_on_post: "🚩",
  crossed_flags: "🎌",
  black_flag: "🏴",
  white_flag: "🏳️",
  rainbow_flag: "🏳️‍🌈",
  transgender_flag: "🏳️‍⚧️",
  pirate_flag: "🏴‍☠️",
  ascension_island: "🇦🇨",
  andorra: "🇦🇩",
  united_arab_emirates: "🇦🇪",
  afghanistan: "🇦🇫",
  antigua_barbuda: "🇦🇬",
  anguilla: "🇦🇮",
  albania: "🇦🇱",
  armenia: "🇦🇲",
  angola: "🇦🇴",
  antarctica: "🇦🇶",
  argentina: "🇦🇷",
  american_samoa: "🇦🇸",
  austria: "🇦🇹",
  australia: "🇦🇺",
  aruba: "🇦🇼",
  aland_islands: "🇦🇽",
  azerbaijan: "🇦🇿",
  bosnia_herzegovina: "🇧🇦",
  barbados: "🇧🇧",
  bangladesh: "🇧🇩",
  belgium: "🇧🇪",
  burkina_faso: "🇧🇫",
  bulgaria: "🇧🇬",
  bahrain: "🇧🇭",
  burundi: "🇧🇮",
  benin: "🇧🇯",
  st_barthelemy: "🇧🇱",
  bermuda: "🇧🇲",
  brunei: "🇧🇳",
  bolivia: "🇧🇴",
  caribbean_netherlands: "🇧🇶",
  brazil: "🇧🇷",
  bahamas: "🇧🇸",
  bhutan: "🇧🇹",
  bouvet_island: "🇧🇻",
  botswana: "🇧🇼",
  belarus: "🇧🇾",
  belize: "🇧🇿",
  canada: "🇨🇦",
  cocos_islands: "🇨🇨",
  congo_kinshasa: "🇨🇩",
  central_african_republic: "🇨🇫",
  congo_brazzaville: "🇨🇬",
  switzerland: "🇨🇭",
  cote_divoire: "🇨🇮",
  cook_islands: "🇨🇰",
  chile: "🇨🇱",
  cameroon: "🇨🇲",
  cn: "🇨🇳",
  colombia: "🇨🇴",
  clipperton_island: "🇨🇵",
  costa_rica: "🇨🇷",
  cuba: "🇨🇺",
  cape_verde: "🇨🇻",
  curacao: "🇨🇼",
  christmas_island: "🇨🇽",
  cyprus: "🇨🇾",
  czech_republic: "🇨🇿",
  de: "🇩🇪",
  diego_garcia: "🇩🇬",
  djibouti: "🇩🇯",
  denmark: "🇩🇰",
  dominica: "🇩🇲",
  dominican_republic: "🇩🇴",
  algeria: "🇩🇿",
  ceuta_melilla: "🇪🇦",
  ecuador: "🇪🇨",
  estonia: "🇪🇪",
  egypt: "🇪🇬",
  western_sahara: "🇪🇭",
  eritrea: "🇪🇷",
  es: "🇪🇸",
  ethiopia: "🇪🇹",
  eu: "🇪🇺",
  european_union: "🇪🇺",
  finland: "🇫🇮",
  fiji: "🇫🇯",
  falkland_islands: "🇫🇰",
  micronesia: "🇫🇲",
  faroe_islands: "🇫🇴",
  fr: "🇫🇷",
  gabon: "🇬🇦",
  gb: "🇬🇧",
  uk: "🇬🇧",
  grenada: "🇬🇩",
  georgia: "🇬🇪",
  french_guiana: "🇬🇫",
  guernsey: "🇬🇬",
  ghana: "🇬🇭",
  gibraltar: "🇬🇮",
  greenland: "🇬🇱",
  gambia: "🇬🇲",
  guinea: "🇬🇳",
  guadeloupe: "🇬🇵",
  equatorial_guinea: "🇬🇶",
  greece: "🇬🇷",
  south_georgia_south_sandwich_islands: "🇬🇸",
  guatemala: "🇬🇹",
  guam: "🇬🇺",
  guinea_bissau: "🇬🇼",
  guyana: "🇬🇾",
  hong_kong: "🇭🇰",
  heard_mcdonald_islands: "🇭🇲",
  honduras: "🇭🇳",
  croatia: "🇭🇷",
  haiti: "🇭🇹",
  hungary: "🇭🇺",
  canary_islands: "🇮🇨",
  indonesia: "🇮🇩",
  ireland: "🇮🇪",
  israel: "🇮🇱",
  isle_of_man: "🇮🇲",
  india: "🇮🇳",
  british_indian_ocean_territory: "🇮🇴",
  iraq: "🇮🇶",
  iran: "🇮🇷",
  iceland: "🇮🇸",
  it: "🇮🇹",
  jersey: "🇯🇪",
  jamaica: "🇯🇲",
  jordan: "🇯🇴",
  jp: "🇯🇵",
  kenya: "🇰🇪",
  kyrgyzstan: "🇰🇬",
  cambodia: "🇰🇭",
  kiribati: "🇰🇮",
  comoros: "🇰🇲",
  st_kitts_nevis: "🇰🇳",
  north_korea: "🇰🇵",
  kr: "🇰🇷",
  kuwait: "🇰🇼",
  cayman_islands: "🇰🇾",
  kazakhstan: "🇰🇿",
  laos: "🇱🇦",
  lebanon: "🇱🇧",
  st_lucia: "🇱🇨",
  liechtenstein: "🇱🇮",
  sri_lanka: "🇱🇰",
  liberia: "🇱🇷",
  lesotho: "🇱🇸",
  lithuania: "🇱🇹",
  luxembourg: "🇱🇺",
  latvia: "🇱🇻",
  libya: "🇱🇾",
  morocco: "🇲🇦",
  monaco: "🇲🇨",
  moldova: "🇲🇩",
  montenegro: "🇲🇪",
  st_martin: "🇲🇫",
  madagascar: "🇲🇬",
  marshall_islands: "🇲🇭",
  macedonia: "🇲🇰",
  mali: "🇲🇱",
  myanmar: "🇲🇲",
  mongolia: "🇲🇳",
  macau: "🇲🇴",
  northern_mariana_islands: "🇲🇵",
  martinique: "🇲🇶",
  mauritania: "🇲🇷",
  montserrat: "🇲🇸",
  malta: "🇲🇹",
  mauritius: "🇲🇺",
  maldives: "🇲🇻",
  malawi: "🇲🇼",
  mexico: "🇲🇽",
  malaysia: "🇲🇾",
  mozambique: "🇲🇿",
  namibia: "🇳🇦",
  new_caledonia: "🇳🇨",
  niger: "🇳🇪",
  norfolk_island: "🇳🇫",
  nigeria: "🇳🇬",
  nicaragua: "🇳🇮",
  netherlands: "🇳🇱",
  norway: "🇳🇴",
  nepal: "🇳🇵",
  nauru: "🇳🇷",
  niue: "🇳🇺",
  new_zealand: "🇳🇿",
  oman: "🇴🇲",
  panama: "🇵🇦",
  peru: "🇵🇪",
  french_polynesia: "🇵🇫",
  papua_new_guinea: "🇵🇬",
  philippines: "🇵🇭",
  pakistan: "🇵🇰",
  poland: "🇵🇱",
  st_pierre_miquelon: "🇵🇲",
  pitcairn_islands: "🇵🇳",
  puerto_rico: "🇵🇷",
  palestinian_territories: "🇵🇸",
  portugal: "🇵🇹",
  palau: "🇵🇼",
  paraguay: "🇵🇾",
  qatar: "🇶🇦",
  reunion: "🇷🇪",
  romania: "🇷🇴",
  serbia: "🇷🇸",
  ru: "🇷🇺",
  rwanda: "🇷🇼",
  saudi_arabia: "🇸🇦",
  solomon_islands: "🇸🇧",
  seychelles: "🇸🇨",
  sudan: "🇸🇩",
  sweden: "🇸🇪",
  singapore: "🇸🇬",
  st_helena: "🇸🇭",
  slovenia: "🇸🇮",
  svalbard_jan_mayen: "🇸🇯",
  slovakia: "🇸🇰",
  sierra_leone: "🇸🇱",
  san_marino: "🇸🇲",
  senegal: "🇸🇳",
  somalia: "🇸🇴",
  suriname: "🇸🇷",
  south_sudan: "🇸🇸",
  sao_tome_principe: "🇸🇹",
  el_salvador: "🇸🇻",
  sint_maarten: "🇸🇽",
  syria: "🇸🇾",
  swaziland: "🇸🇿",
  tristan_da_cunha: "🇹🇦",
  turks_caicos_islands: "🇹🇨",
  chad: "🇹🇩",
  french_southern_territories: "🇹🇫",
  togo: "🇹🇬",
  thailand: "🇹🇭",
  tajikistan: "🇹🇯",
  tokelau: "🇹🇰",
  timor_leste: "🇹🇱",
  turkmenistan: "🇹🇲",
  tunisia: "🇹🇳",
  tonga: "🇹🇴",
  tr: "🇹🇷",
  trinidad_tobago: "🇹🇹",
  tuvalu: "🇹🇻",
  taiwan: "🇹🇼",
  tanzania: "🇹🇿",
  ukraine: "🇺🇦",
  uganda: "🇺🇬",
  us_outlying_islands: "🇺🇲",
  united_nations: "🇺🇳",
  us: "🇺🇸",
  uruguay: "🇺🇾",
  uzbekistan: "🇺🇿",
  vatican_city: "🇻🇦",
  st_vincent_grenadines: "🇻🇨",
  venezuela: "🇻🇪",
  british_virgin_islands: "🇻🇬",
  us_virgin_islands: "🇻🇮",
  vietnam: "🇻🇳",
  vanuatu: "🇻🇺",
  wallis_futuna: "🇼🇫",
  samoa: "🇼🇸",
  kosovo: "🇽🇰",
  yemen: "🇾🇪",
  mayotte: "🇾🇹",
  south_africa: "🇿🇦",
  zambia: "🇿🇲",
  zimbabwe: "🇿🇼",
  england: "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
  scotland: "🏴󠁧󠁢󠁳󠁣󠁴󠁿",
  wales: "🏴󠁧󠁢󠁷󠁬󠁳󠁿"
};
Object.keys(Ee).reduce((e, t) => {
  const i = Ee[t];
  return e[i] = t, e;
}, {});
const Qs = Object.keys(Ee).map((e) => e);
Object.keys(Ee).map((e) => Ee[e]);
function el(e) {
  return Qs.filter((t) => t.startsWith(e)).map((t) => ({
    name: t,
    emoji: Ee[t]
  }));
}
const gn = ft((e, t) => {
  const i = J(), [n, a] = y(0), { t: o } = P(), c = (h) => {
    const f = e.items[h];
    f && e.command(f);
  }, s = () => {
    a((n + e.items.length - 1) % e.items.length);
  }, l = () => {
    a((n + 1) % e.items.length);
  }, d = () => {
    c(n);
  };
  return E(() => a(0), [e.items]), E(() => {
    if (Number.isNaN(n + 1))
      return;
    const h = i.current.querySelector(`span:nth-of-type(${n + 1})`);
    h && Kt(h, { behavior: "smooth", scrollMode: "if-needed" });
  }, [n]), xt(t, () => ({
    onKeyDown: ({ event: h }) => h.key === "ArrowUp" ? (s(), !0) : h.key === "ArrowDown" ? (l(), !0) : h.key === "Enter" ? (d(), !0) : !1
  })), /* @__PURE__ */ r("div", { className: "richtext-w-[200px] richtext-max-h-[320px] richtext-overflow-x-hidden richtext-overflow-y-auto richtext-rounded-sm !richtext-border richtext-bg-popover richtext-p-1 richtext-text-popover-foreground richtext-shadow-md richtext-outline-none", children: /* @__PURE__ */ r("div", { ref: i, children: e.items.length ? e.items.map((h, f) => /* @__PURE__ */ m(
    "span",
    {
      className: se(" richtext-flex richtext-relative  richtext-cursor-default richtext-select-none richtext-items-center richtext-rounded-sm richtext-px-2 richtext-py-1.5 richtext-text-sm richtext-outline-none richtext-transition-colors focus:richtext-bg-accent focus:richtext-text-accent-foreground  hover:richtext-bg-accent", f === n ? "bg-accent" : ""),
      onClick: () => c(f),
      children: [
        h.fallbackImage ? /* @__PURE__ */ r("img", { src: h.fallbackImage, className: "richtext-w-[1em] richtext-h-[1em]" }) : h.emoji,
        ":",
        h.name,
        ":"
      ]
    },
    `emoji-list-code-${f}`
  )) : /* @__PURE__ */ r("div", { className: "richtext-flex richtext-relative  richtext-cursor-default richtext-select-none richtext-items-center richtext-rounded-sm richtext-px-2 richtext-py-1.5 richtext-text-sm richtext-outline-none richtext-transition-colors", children: /* @__PURE__ */ r("span", { children: o("no_result_found") }) }) }) });
});
gn.displayName = "EmojiList";
const tl = [
  "😀",
  "😃",
  "😄",
  "😁",
  "😆",
  "😅",
  "😂",
  "🤣",
  "🥲",
  "😊",
  "😇",
  "🙂",
  "🙃",
  "😉",
  "😌",
  "😍",
  "🥰",
  "😘",
  "😗",
  "😙",
  "😚",
  "😋",
  "😛",
  "😝",
  "😜",
  "🤪",
  "🤨",
  "🧐",
  "🤓",
  "😎",
  "🥸",
  "🤩",
  "🥳",
  "😏",
  "😒",
  "😞",
  "😔",
  "😟",
  "😕",
  "🙁",
  "😣",
  "😖",
  "😫",
  "😩",
  "🥺",
  "😢",
  "😭",
  "😤",
  "😠",
  "😡",
  "🤬",
  "🤯",
  "😳",
  "🥵",
  "🥶",
  "😱",
  "😨",
  "😰",
  "😥",
  "😓",
  "🤗",
  "🤔",
  "🤭",
  "🤫",
  "🤥",
  "😶",
  "😐",
  "😑",
  "😬",
  "🙄",
  "😯",
  "😦",
  "😧",
  "😮",
  "😲",
  "🥱",
  "😴",
  "🤤",
  "😪",
  "😵",
  "🤐",
  "🥴",
  "🤢",
  "🤮",
  "🤧",
  "😷",
  "🤒",
  "🤕",
  "🤑",
  "🤠",
  "😈",
  "👿",
  "👹",
  "👺",
  "🤡",
  "💩",
  "👻",
  "💀",
  "☠️",
  "👽",
  "👾",
  "🤖",
  "🎃",
  "😺",
  "😸",
  "😹",
  "😻",
  "😼",
  "😽",
  "🙀",
  "😿",
  "😾",
  "👋",
  "🤚",
  "🖐",
  "✋",
  "🖖",
  "👌",
  "🤌",
  "🤏",
  "✌️",
  "🤞",
  "🤟",
  "🤘",
  "🤙",
  "👈",
  "👉",
  "👆",
  "🖕",
  "👇",
  "☝️",
  "👍",
  "👎",
  "✊",
  "👊",
  "🤛",
  "🤜",
  "👏",
  "🙌",
  "👐",
  "🤲",
  "🤝",
  "🙏",
  "✍️",
  "💅",
  "🤳",
  "💪",
  "🦾",
  "🦵",
  "🦿",
  "🦶",
  "👣",
  "👂",
  "🦻",
  "👃",
  "🫀",
  "🫁",
  "🧠",
  "🦷",
  "🦴",
  "👀",
  "👁",
  "👅",
  "👄",
  "💋",
  "🩸",
  "💋",
  "💌",
  "💘",
  "💝",
  "💖",
  "💗",
  "💓",
  "💞",
  "💕",
  "💟",
  "❣️",
  "❣",
  "💔",
  "❤️‍🔥",
  "❤‍🔥",
  "❤️‍🩹",
  "❤‍🩹",
  "❤️",
  "❤",
  "🧡",
  "💛",
  "💚",
  "💙",
  "💜",
  "🤎",
  "🖤",
  "🤍",
  "💯",
  "💢",
  "💥",
  "💫",
  "💦",
  "💨",
  "🕳️",
  "🕳",
  "💣",
  "💬",
  "👁️‍🗨️",
  "👁‍🗨️",
  "👁️‍🗨",
  "👁‍🗨",
  "🗨️",
  "🗨",
  "🗯️",
  "🗯",
  "💭",
  "💤"
], il = [
  "🏧",
  "🚮",
  "🚰",
  "♿",
  "🚹",
  "🚺",
  "🚻",
  "🚼",
  "🚾",
  "🛂",
  "🛃",
  "🛄",
  "🛅",
  "⚠️",
  "⚠",
  "🚸",
  "⛔",
  "🚫",
  "🚳",
  "🚭",
  "🚯",
  "🚱",
  "🚷",
  "📵",
  "🔞",
  "☢️",
  "☢",
  "☣️",
  "☣",
  "⬆️",
  "⬆",
  "↗️",
  "↗",
  "➡️",
  "➡",
  "↘️",
  "↘",
  "⬇️",
  "⬇",
  "↙️",
  "↙",
  "⬅️",
  "⬅",
  "↖️",
  "↖",
  "↕️",
  "↕",
  "↔️",
  "↔",
  "↩️",
  "↩",
  "↪️",
  "↪",
  "⤴️",
  "⤴",
  "⤵️",
  "⤵",
  "🔃",
  "🔄",
  "🔙",
  "🔚",
  "🔛",
  "🔜",
  "🔝",
  "🛐",
  "⚛️",
  "⚛",
  "🕉️",
  "🕉",
  "✡️",
  "✡",
  "☸️",
  "☸",
  "☯️",
  "☯",
  "✝️",
  "✝",
  "☦️",
  "☦",
  "☪️",
  "☪",
  "☮️",
  "☮",
  "🕎",
  "🔯",
  "♈",
  "♉",
  "♊",
  "♋",
  "♌",
  "♍",
  "♎",
  "♏",
  "♐",
  "♑",
  "♒",
  "♓",
  "⛎",
  "🔀",
  "🔁",
  "🔂",
  "▶️",
  "▶",
  "⏩",
  "⏭️",
  "⏭",
  "⏯️",
  "⏯",
  "◀️",
  "◀",
  "⏪",
  "⏮️",
  "⏮",
  "🔼",
  "⏫",
  "🔽",
  "⏬",
  "⏸️",
  "⏸",
  "⏹️",
  "⏹",
  "⏺️",
  "⏺",
  "⏏️",
  "⏏",
  "🎦",
  "🔅",
  "🔆",
  "📶",
  "📳",
  "📴",
  "♀️",
  "♀",
  "♂️",
  "♂",
  "⚧️",
  "⚧",
  "✖️",
  "✖",
  "➕",
  "➖",
  "➗",
  "♾️",
  "♾",
  "‼️",
  "‼",
  "⁉️",
  "⁉",
  "❓",
  "❔",
  "❕",
  "❗",
  "〰️",
  "〰",
  "💱",
  "💲",
  "⚕️",
  "⚕",
  "♻️",
  "♻",
  "⚜️",
  "⚜",
  "🔱",
  "📛",
  "🔰",
  "⭕",
  "✅",
  "☑️",
  "☑",
  "✔️",
  "✔",
  "❌",
  "❎",
  "➰",
  "➿",
  "〽️",
  "〽",
  "✳️",
  "✳",
  "✴️",
  "✴",
  "❇️",
  "❇",
  "©️",
  "©",
  "®️",
  "®",
  "™️",
  "™",
  "#️⃣",
  "#⃣",
  "*️⃣",
  "*⃣",
  "0️⃣",
  "0⃣",
  "1️⃣",
  "1⃣",
  "2️⃣",
  "2⃣",
  "3️⃣",
  "3⃣",
  "4️⃣",
  "4⃣",
  "5️⃣",
  "5⃣",
  "6️⃣",
  "6⃣",
  "7️⃣",
  "7⃣",
  "8️⃣",
  "8⃣",
  "9️⃣",
  "9⃣",
  "🔟",
  "🔠",
  "🔡",
  "🔢",
  "🔣",
  "🔤",
  "🅰️",
  "🅰",
  "🆎",
  "🅱️",
  "🅱",
  "🆑",
  "🆒",
  "🆓",
  "ℹ️",
  "ℹ",
  "🆔",
  "Ⓜ️",
  "Ⓜ",
  "🆕",
  "🆖",
  "🅾️",
  "🅾",
  "🆗",
  "🅿️",
  "🅿",
  "🆘",
  "🆙",
  "🆚",
  "🈁",
  "🈂️",
  "🈂",
  "🈷️",
  "🈷",
  "🈶",
  "🈯",
  "🉐",
  "🈹",
  "🈚",
  "🈲",
  "🉑",
  "🈸",
  "🈴",
  "🈳",
  "㊗️",
  "㊗",
  "㊙️",
  "㊙",
  "🈺",
  "🈵",
  "🔴",
  "🟠",
  "🟡",
  "🟢",
  "🔵",
  "🟣",
  "🟤",
  "⚫",
  "⚪",
  "🟥",
  "🟧",
  "🟨",
  "🟩",
  "🟦",
  "🟪",
  "🟫",
  "⬛",
  "⬜",
  "◼️",
  "◼",
  "◻️",
  "◻",
  "◾",
  "◽",
  "▪️",
  "▪",
  "▫️",
  "▫",
  "🔶",
  "🔷",
  "🔸",
  "🔹",
  "🔺",
  "🔻",
  "💠",
  "🔘",
  "🔳",
  "🔲"
], nl = [
  "👓",
  "🕶️",
  "🕶",
  "🥽",
  "🥼",
  "🦺",
  "👔",
  "👕",
  "👖",
  "🧣",
  "🧤",
  "🧥",
  "🧦",
  "👗",
  "👘",
  "🥻",
  "🩱",
  "🩲",
  "🩳",
  "👙",
  "👚",
  "👛",
  "👜",
  "👝",
  "🛍️",
  "🛍",
  "🎒",
  "🩴",
  "👞",
  "👟",
  "🥾",
  "🥿",
  "👠",
  "👡",
  "🩰",
  "👢",
  "👑",
  "👒",
  "🎩",
  "🎓",
  "🧢",
  "🪖",
  "⛑️",
  "⛑",
  "📿",
  "💄",
  "💍",
  "💎",
  "🔇",
  "🔈",
  "🔉",
  "🔊",
  "📢",
  "📣",
  "📯",
  "🔔",
  "🔕",
  "🎼",
  "🎵",
  "🎶",
  "🎙️",
  "🎙",
  "🎚️",
  "🎚",
  "🎛️",
  "🎛",
  "🎤",
  "🎧",
  "📻",
  "🎷",
  "🪗",
  "🎸",
  "🎹",
  "🎺",
  "🎻",
  "🪕",
  "🥁",
  "🪘",
  "📱",
  "📲",
  "☎️",
  "☎",
  "📞",
  "📟",
  "📠",
  "🔋",
  "🔌",
  "💻",
  "🖥️",
  "🖥",
  "🖨️",
  "🖨",
  "⌨️",
  "⌨",
  "🖱️",
  "🖱",
  "🖲️",
  "🖲",
  "💽",
  "💾",
  "💿",
  "📀",
  "🧮",
  "🎥",
  "🎞️",
  "🎞",
  "📽️",
  "📽",
  "🎬",
  "📺",
  "📷",
  "📸",
  "📹",
  "📼",
  "🔍",
  "🔎",
  "🕯️",
  "🕯",
  "💡",
  "🔦",
  "🏮",
  "🪔",
  "📔",
  "📕",
  "📖",
  "📗",
  "📘",
  "📙",
  "📚",
  "📓",
  "📒",
  "📃",
  "📜",
  "📄",
  "📰",
  "🗞️",
  "🗞",
  "📑",
  "🔖",
  "🏷️",
  "🏷",
  "💰",
  "🪙",
  "💴",
  "💵",
  "💶",
  "💷",
  "💸",
  "💳",
  "🧾",
  "💹",
  "✉️",
  "✉",
  "📧",
  "📨",
  "📩",
  "📤",
  "📥",
  "📦",
  "📫",
  "📪",
  "📬",
  "📭",
  "📮",
  "🗳️",
  "🗳",
  "✏️",
  "✏",
  "✒️",
  "✒",
  "🖋️",
  "🖋",
  "🖊️",
  "🖊",
  "🖌️",
  "🖌",
  "🖍️",
  "🖍",
  "📝",
  "💼",
  "📁",
  "📂",
  "🗂️",
  "🗂",
  "📅",
  "📆",
  "🗒️",
  "🗒",
  "🗓️",
  "🗓",
  "📇",
  "📈",
  "📉",
  "📊",
  "📋",
  "📌",
  "📍",
  "📎",
  "🖇️",
  "🖇",
  "📏",
  "📐",
  "✂️",
  "✂",
  "🗃️",
  "🗃",
  "🗄️",
  "🗄",
  "🗑️",
  "🗑",
  "🔒",
  "🔓",
  "🔏",
  "🔐",
  "🔑",
  "🗝️",
  "🗝",
  "🔨",
  "🪓",
  "⛏️",
  "⛏",
  "⚒️",
  "⚒",
  "🛠️",
  "🛠",
  "🗡️",
  "🗡",
  "⚔️",
  "⚔",
  "🔫",
  "🪃",
  "🏹",
  "🛡️",
  "🛡",
  "🪚",
  "🔧",
  "🪛",
  "🔩",
  "⚙️",
  "⚙",
  "🗜️",
  "🗜",
  "⚖️",
  "⚖",
  "🦯",
  "🔗",
  "⛓️",
  "⛓",
  "🪝",
  "🧰",
  "🧲",
  "🪜",
  "⚗️",
  "⚗",
  "🧪",
  "🧫",
  "🧬",
  "🔬",
  "🔭",
  "📡",
  "💉",
  "🩸",
  "💊",
  "🩹",
  "🩺",
  "🚪",
  "🛗",
  "🪞",
  "🪟",
  "🛏️",
  "🛏",
  "🛋️",
  "🛋",
  "🪑",
  "🚽",
  "🪠",
  "🚿",
  "🛁",
  "🪤",
  "🪒",
  "🧴",
  "🧷",
  "🧹",
  "🧺",
  "🧻",
  "🪣",
  "🧼",
  "🪥",
  "🧽",
  "🧯",
  "🛒",
  "🚬",
  "⚰️",
  "⚰",
  "🪦",
  "⚱️",
  "⚱",
  "🗿",
  "🪧"
], rl = [
  "🎃",
  "🎄",
  "🎆",
  "🎇",
  "🧨",
  "✨",
  "🎈",
  "🎉",
  "🎊",
  "🎋",
  "🎍",
  "🎎",
  "🎏",
  "🎐",
  "🎑",
  "🧧",
  "🎀",
  "🎁",
  "🎗️",
  "🎗",
  "🎟️",
  "🎟",
  "🎫",
  "🎖️",
  "🎖",
  "🏆",
  "🏅",
  "🥇",
  "🥈",
  "🥉",
  "⚽",
  "⚾",
  "🥎",
  "🏀",
  "🏐",
  "🏈",
  "🏉",
  "🎾",
  "🥏",
  "🎳",
  "🏏",
  "🏑",
  "🏒",
  "🥍",
  "🏓",
  "🏸",
  "🥊",
  "🥋",
  "🥅",
  "⛳",
  "⛸️",
  "⛸",
  "🎣",
  "🤿",
  "🎽",
  "🎿",
  "🛷",
  "🥌",
  "🎯",
  "🪀",
  "🪁",
  "🎱",
  "🔮",
  "🪄",
  "🧿",
  "🎮",
  "🕹️",
  "🕹",
  "🎰",
  "🎲",
  "🧩",
  "🧸",
  "🪅",
  "🪆",
  "♠️",
  "♠",
  "♥️",
  "♥",
  "♦️",
  "♦",
  "♣️",
  "♣",
  "♟️",
  "♟",
  "🃏",
  "🀄",
  "🎴",
  "🎭",
  "🖼️",
  "🖼",
  "🎨",
  "🧵",
  "🪡",
  "🧶",
  "🪢"
], al = [
  "🌍",
  "🌎",
  "🌏",
  "🌐",
  "🗺️",
  "🗺",
  "🗾",
  "🧭",
  "🏔️",
  "🏔",
  "⛰️",
  "⛰",
  "🌋",
  "🗻",
  "🏕️",
  "🏕",
  "🏖️",
  "🏖",
  "🏜️",
  "🏜",
  "🏝️",
  "🏝",
  "🏞️",
  "🏞",
  "🏟️",
  "🏟",
  "🏛️",
  "🏛",
  "🏗️",
  "🏗",
  "🧱",
  "🪨",
  "🪵",
  "🛖",
  "🏘️",
  "🏘",
  "🏚️",
  "🏚",
  "🏠",
  "🏡",
  "🏢",
  "🏣",
  "🏤",
  "🏥",
  "🏦",
  "🏨",
  "🏩",
  "🏪",
  "🏫",
  "🏬",
  "🏭",
  "🏯",
  "🏰",
  "💒",
  "🗼",
  "🗽",
  "⛪",
  "🕌",
  "🛕",
  "🕍",
  "⛩️",
  "⛩",
  "🕋",
  "⛲",
  "⛺",
  "🌁",
  "🌃",
  "🏙️",
  "🏙",
  "🌄",
  "🌅",
  "🌆",
  "🌇",
  "🌉",
  "♨️",
  "♨",
  "🎠",
  "🎡",
  "🎢",
  "💈",
  "🎪",
  "🚂",
  "🚃",
  "🚄",
  "🚅",
  "🚆",
  "🚇",
  "🚈",
  "🚉",
  "🚊",
  "🚝",
  "🚞",
  "🚋",
  "🚌",
  "🚍",
  "🚎",
  "🚐",
  "🚑",
  "🚒",
  "🚓",
  "🚔",
  "🚕",
  "🚖",
  "🚗",
  "🚘",
  "🚙",
  "🛻",
  "🚚",
  "🚛",
  "🚜",
  "🏎️",
  "🏎",
  "🏍️",
  "🏍",
  "🛵",
  "🦽",
  "🦼",
  "🛺",
  "🚲",
  "🛴",
  "🛹",
  "🛼",
  "🚏",
  "🛣️",
  "🛣",
  "🛤️",
  "🛤",
  "🛢️",
  "🛢",
  "⛽",
  "🚨",
  "🚥",
  "🚦",
  "🛑",
  "🚧",
  "⚓",
  "⛵",
  "🛶",
  "🚤",
  "🛳️",
  "🛳",
  "⛴️",
  "⛴",
  "🛥️",
  "🛥",
  "🚢",
  "✈️",
  "✈",
  "🛩️",
  "🛩",
  "🛫",
  "🛬",
  "🪂",
  "💺",
  "🚁",
  "🚟",
  "🚠",
  "🚡",
  "🛰️",
  "🛰",
  "🚀",
  "🛸",
  "🛎️",
  "🛎",
  "🧳",
  "⌛",
  "⏳",
  "⌚",
  "⏰",
  "⏱️",
  "⏱",
  "⏲️",
  "⏲",
  "🕰️",
  "🕰",
  "🕛",
  "🕧",
  "🕐",
  "🕜",
  "🕑",
  "🕝",
  "🕒",
  "🕞",
  "🕓",
  "🕟",
  "🕔",
  "🕠",
  "🕕",
  "🕡",
  "🕖",
  "🕢",
  "🕗",
  "🕣",
  "🕘",
  "🕤",
  "🕙",
  "🕥",
  "🕚",
  "🕦",
  "🌑",
  "🌒",
  "🌓",
  "🌔",
  "🌕",
  "🌖",
  "🌗",
  "🌘",
  "🌙",
  "🌚",
  "🌛",
  "🌜",
  "🌡️",
  "🌡",
  "☀️",
  "☀",
  "🌝",
  "🌞",
  "🪐",
  "⭐",
  "🌟",
  "🌠",
  "🌌",
  "☁️",
  "☁",
  "⛅",
  "⛈️",
  "⛈",
  "🌤️",
  "🌤",
  "🌥️",
  "🌥",
  "🌦️",
  "🌦",
  "🌧️",
  "🌧",
  "🌨️",
  "🌨",
  "🌩️",
  "🌩",
  "🌪️",
  "🌪",
  "🌫️",
  "🌫",
  "🌬️",
  "🌬",
  "🌀",
  "🌈",
  "🌂",
  "☂️",
  "☂",
  "☔",
  "⛱️",
  "⛱",
  "⚡",
  "❄️",
  "❄",
  "☃️",
  "☃",
  "⛄",
  "☄️",
  "☄",
  "🔥",
  "💧",
  "🌊"
], ol = [
  "🏁",
  "🚩",
  "🎌",
  "🏴",
  "🏳️",
  "🏳",
  "🏳️‍🌈",
  "🏳‍🌈",
  "🏳️‍⚧️",
  "🏳‍⚧️",
  "🏳️‍⚧",
  "🏳‍⚧",
  "🏴‍☠️",
  "🏴‍☠",
  "🇦🇨",
  "🇦🇩",
  "🇦🇪",
  "🇦🇫",
  "🇦🇬",
  "🇦🇮",
  "🇦🇱",
  "🇦🇲",
  "🇦🇴",
  "🇦🇶",
  "🇦🇷",
  "🇦🇸",
  "🇦🇹",
  "🇦🇺",
  "🇦🇼",
  "🇦🇽",
  "🇦🇿",
  "🇧🇦",
  "🇧🇧",
  "🇧🇩",
  "🇧🇪",
  "🇧🇫",
  "🇧🇬",
  "🇧🇭",
  "🇧🇮",
  "🇧🇯",
  "🇧🇱",
  "🇧🇲",
  "🇧🇳",
  "🇧🇴",
  "🇧🇶",
  "🇧🇷",
  "🇧🇸",
  "🇧🇹",
  "🇧🇻",
  "🇧🇼",
  "🇧🇾",
  "🇧🇿",
  "🇨🇦",
  "🇨🇨",
  "🇨🇩",
  "🇨🇫",
  "🇨🇬",
  "🇨🇭",
  "🇨🇮",
  "🇨🇰",
  "🇨🇱",
  "🇨🇲",
  "🇨🇳",
  "🇨🇴",
  "🇨🇵",
  "🇨🇷",
  "🇨🇺",
  "🇨🇻",
  "🇨🇼",
  "🇨🇽",
  "🇨🇾",
  "🇨🇿",
  "🇩🇪",
  "🇩🇬",
  "🇩🇯",
  "🇩🇰",
  "🇩🇲",
  "🇩🇴",
  "🇩🇿",
  "🇪🇦",
  "🇪🇨",
  "🇪🇪",
  "🇪🇬",
  "🇪🇭",
  "🇪🇷",
  "🇪🇸",
  "🇪🇹",
  "🇪🇺",
  "🇫🇮",
  "🇫🇯",
  "🇫🇰",
  "🇫🇲",
  "🇫🇴",
  "🇫🇷",
  "🇬🇦",
  "🇬🇧",
  "🇬🇩",
  "🇬🇪",
  "🇬🇫",
  "🇬🇬",
  "🇬🇭",
  "🇬🇮",
  "🇬🇱",
  "🇬🇲",
  "🇬🇳",
  "🇬🇵",
  "🇬🇶",
  "🇬🇷",
  "🇬🇸",
  "🇬🇹",
  "🇬🇺",
  "🇬🇼",
  "🇬🇾",
  "🇭🇰",
  "🇭🇲",
  "🇭🇳",
  "🇭🇷",
  "🇭🇹",
  "🇭🇺",
  "🇮🇨",
  "🇮🇩",
  "🇮🇪",
  "🇮🇱",
  "🇮🇲",
  "🇮🇳",
  "🇮🇴",
  "🇮🇶",
  "🇮🇷",
  "🇮🇸",
  "🇮🇹",
  "🇯🇪",
  "🇯🇲",
  "🇯🇴",
  "🇯🇵",
  "🇰🇪",
  "🇰🇬",
  "🇰🇭",
  "🇰🇮",
  "🇰🇲",
  "🇰🇳",
  "🇰🇵",
  "🇰🇷",
  "🇰🇼",
  "🇰🇾",
  "🇰🇿",
  "🇱🇦",
  "🇱🇧",
  "🇱🇨",
  "🇱🇮",
  "🇱🇰",
  "🇱🇷",
  "🇱🇸",
  "🇱🇹",
  "🇱🇺",
  "🇱🇻",
  "🇱🇾",
  "🇲🇦",
  "🇲🇨",
  "🇲🇩",
  "🇲🇪",
  "🇲🇫",
  "🇲🇬",
  "🇲🇭",
  "🇲🇰",
  "🇲🇱",
  "🇲🇲",
  "🇲🇳",
  "🇲🇴",
  "🇲🇵",
  "🇲🇶",
  "🇲🇷",
  "🇲🇸",
  "🇲🇹",
  "🇲🇺",
  "🇲🇻",
  "🇲🇼",
  "🇲🇽",
  "🇲🇾",
  "🇲🇿",
  "🇳🇦",
  "🇳🇨",
  "🇳🇪",
  "🇳🇫",
  "🇳🇬",
  "🇳🇮",
  "🇳🇱",
  "🇳🇴",
  "🇳🇵",
  "🇳🇷",
  "🇳🇺",
  "🇳🇿",
  "🇴🇲",
  "🇵🇦",
  "🇵🇪",
  "🇵🇫",
  "🇵🇬",
  "🇵🇭",
  "🇵🇰",
  "🇵🇱",
  "🇵🇲",
  "🇵🇳",
  "🇵🇷",
  "🇵🇸",
  "🇵🇹",
  "🇵🇼",
  "🇵🇾",
  "🇶🇦",
  "🇷🇪",
  "🇷🇴",
  "🇷🇸",
  "🇷🇺",
  "🇷🇼",
  "🇸🇦",
  "🇸🇧",
  "🇸🇨",
  "🇸🇩",
  "🇸🇪",
  "🇸🇬",
  "🇸🇭",
  "🇸🇮",
  "🇸🇯",
  "🇸🇰",
  "🇸🇱",
  "🇸🇲",
  "🇸🇳",
  "🇸🇴",
  "🇸🇷",
  "🇸🇸",
  "🇸🇹",
  "🇸🇻",
  "🇸🇽",
  "🇸🇾",
  "🇸🇿",
  "🇹🇦",
  "🇹🇨",
  "🇹🇩",
  "🇹🇫",
  "🇹🇬",
  "🇹🇭",
  "🇹🇯",
  "🇹🇰",
  "🇹🇱",
  "🇹🇲",
  "🇹🇳",
  "🇹🇴",
  "🇹🇷",
  "🇹🇹",
  "🇹🇻",
  "🇹🇼",
  "🇹🇿",
  "🇺🇦",
  "🇺🇬",
  "🇺🇲",
  "🇺🇳",
  "🇺🇸",
  "🇺🇾",
  "🇺🇿",
  "🇻🇦",
  "🇻🇨",
  "🇻🇪",
  "🇻🇬",
  "🇻🇮",
  "🇻🇳",
  "🇻🇺",
  "🇼🇫",
  "🇼🇸",
  "🇽🇰",
  "🇾🇪",
  "🇾🇹",
  "🇿🇦",
  "🇿🇲",
  "🇿🇼",
  "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
  "🏴󠁧󠁢󠁳󠁣󠁴󠁿",
  "🏴󠁧󠁢󠁷󠁬󠁳󠁿"
], cl = [
  "🐵",
  "🐒",
  "🦍",
  "🦧",
  "🐶",
  "🐕",
  "🦮",
  "🐕‍🦺",
  "🐩",
  "🐺",
  "🦊",
  "🦝",
  "🐱",
  "🐈",
  "🐈‍⬛",
  "🦁",
  "🐯",
  "🐅",
  "🐆",
  "🐴",
  "🐎",
  "🦄",
  "🦓",
  "🦌",
  "🦬",
  "🐮",
  "🐂",
  "🐃",
  "🐄",
  "🐷",
  "🐖",
  "🐗",
  "🐽",
  "🐏",
  "🐑",
  "🐐",
  "🐪",
  "🐫",
  "🦙",
  "🦒",
  "🐘",
  "🦣",
  "🦏",
  "🦛",
  "🐭",
  "🐁",
  "🐀",
  "🐹",
  "🐰",
  "🐇",
  "🐿️",
  "🐿",
  "🦫",
  "🦔",
  "🦇",
  "🐻",
  "🐻‍❄️",
  "🐻‍❄",
  "🐨",
  "🐼",
  "🦥",
  "🦦",
  "🦨",
  "🦘",
  "🦡",
  "🐾",
  "🦃",
  "🐔",
  "🐓",
  "🐣",
  "🐤",
  "🐥",
  "🐦",
  "🐧",
  "🕊️",
  "🕊",
  "🦅",
  "🦆",
  "🦢",
  "🦉",
  "🦤",
  "🪶",
  "🦩",
  "🦚",
  "🦜",
  "🐸",
  "🐊",
  "🐢",
  "🦎",
  "🐍",
  "🐲",
  "🐉",
  "🦕",
  "🦖",
  "🐳",
  "🐋",
  "🐬",
  "🦭",
  "🐟",
  "🐠",
  "🐡",
  "🦈",
  "🐙",
  "🐚",
  "🐌",
  "🦋",
  "🐛",
  "🐜",
  "🐝",
  "🪲",
  "🐞",
  "🦗",
  "🪳",
  "🕷️",
  "🕷",
  "🕸️",
  "🕸",
  "🦂",
  "🦟",
  "🪰",
  "🪱",
  "🦠",
  "💐",
  "🌸",
  "💮",
  "🏵️",
  "🏵",
  "🌹",
  "🥀",
  "🌺",
  "🌻",
  "🌼",
  "🌷",
  "🌱",
  "🪴",
  "🌲",
  "🌳",
  "🌴",
  "🌵",
  "🌾",
  "🌿",
  "☘️",
  "☘",
  "🍀",
  "🍁",
  "🍂",
  "🍃"
], sl = [
  "🍇",
  "🍈",
  "🍉",
  "🍊",
  "🍋",
  "🍌",
  "🍍",
  "🥭",
  "🍎",
  "🍏",
  "🍐",
  "🍑",
  "🍒",
  "🍓",
  "🫐",
  "🥝",
  "🍅",
  "🫒",
  "🥥",
  "🥑",
  "🍆",
  "🥔",
  "🥕",
  "🌽",
  "🌶️",
  "🌶",
  "🫑",
  "🥒",
  "🥬",
  "🥦",
  "🧄",
  "🧅",
  "🍄",
  "🥜",
  "🌰",
  "🍞",
  "🥐",
  "🥖",
  "🫓",
  "🥨",
  "🥯",
  "🥞",
  "🧇",
  "🧀",
  "🍖",
  "🍗",
  "🥩",
  "🥓",
  "🍔",
  "🍟",
  "🍕",
  "🌭",
  "🥪",
  "🌮",
  "🌯",
  "🫔",
  "🥙",
  "🧆",
  "🥚",
  "🍳",
  "🥘",
  "🍲",
  "🫕",
  "🥣",
  "🥗",
  "🍿",
  "🧈",
  "🧂",
  "🥫",
  "🍱",
  "🍘",
  "🍙",
  "🍚",
  "🍛",
  "🍜",
  "🍝",
  "🍠",
  "🍢",
  "🍣",
  "🍤",
  "🍥",
  "🥮",
  "🍡",
  "🥟",
  "🥠",
  "🥡",
  "🦀",
  "🦞",
  "🦐",
  "🦑",
  "🦪",
  "🍦",
  "🍧",
  "🍨",
  "🍩",
  "🍪",
  "🎂",
  "🍰",
  "🧁",
  "🥧",
  "🍫",
  "🍬",
  "🍭",
  "🍮",
  "🍯",
  "🍼",
  "🥛",
  "☕",
  "🫖",
  "🍵",
  "🍶",
  "🍾",
  "🍷",
  "🍸",
  "🍹",
  "🍺",
  "🍻",
  "🥂",
  "🥃",
  "🥤",
  "🧋",
  "🧃",
  "🧉",
  "🧊",
  "🥢",
  "🍽️",
  "🍽",
  "🍴",
  "🥄",
  "🔪",
  "🏺"
];
function ll() {
  return /* @__PURE__ */ r(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      width: "1em",
      height: "1em",
      children: /* @__PURE__ */ r(
        "path",
        {
          d: "M12 0C5.373 0 0 5.372 0 12c0 6.627 5.373 12 12 12 6.628 0 12-5.373 12-12 0-6.628-5.372-12-12-12m9.949 11H17.05c.224-2.527 1.232-4.773 1.968-6.113A9.966 9.966 0 0 1 21.949 11M13 11V2.051a9.945 9.945 0 0 1 4.432 1.564c-.858 1.491-2.156 4.22-2.392 7.385H13zm-2 0H8.961c-.238-3.165-1.536-5.894-2.393-7.385A9.95 9.95 0 0 1 11 2.051V11zm0 2v8.949a9.937 9.937 0 0 1-4.432-1.564c.857-1.492 2.155-4.221 2.393-7.385H11zm4.04 0c.236 3.164 1.534 5.893 2.392 7.385A9.92 9.92 0 0 1 13 21.949V13h2.04zM4.982 4.887C5.718 6.227 6.726 8.473 6.951 11h-4.9a9.977 9.977 0 0 1 2.931-6.113M2.051 13h4.9c-.226 2.527-1.233 4.771-1.969 6.113A9.972 9.972 0 0 1 2.051 13m16.967 6.113c-.735-1.342-1.744-3.586-1.968-6.113h4.899a9.961 9.961 0 0 1-2.931 6.113",
          fill: "currentColor"
        }
      )
    }
  );
}
function dl() {
  return /* @__PURE__ */ m(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      width: "1em",
      height: "1em",
      children: [
        /* @__PURE__ */ r(
          "path",
          {
            d: "M15.5 8a1.5 1.5 0 1 0 .001 3.001A1.5 1.5 0 0 0 15.5 8M8.5 8a1.5 1.5 0 1 0 .001 3.001A1.5 1.5 0 0 0 8.5 8",
            fill: "currentColor"
          }
        ),
        /* @__PURE__ */ r(
          "path",
          {
            d: "M18.933 0h-.027c-.97 0-2.138.787-3.018 1.497-1.274-.374-2.612-.51-3.887-.51-1.285 0-2.616.133-3.874.517C7.245.79 6.069 0 5.093 0h-.027C3.352 0 .07 2.67.002 7.026c-.039 2.479.276 4.238 1.04 5.013.254.258.882.677 1.295.882.191 3.177.922 5.238 2.536 6.38.897.637 2.187.949 3.2 1.102C8.04 20.6 8 20.795 8 21c0 1.773 2.35 3 4 3 1.648 0 4-1.227 4-3 0-.201-.038-.393-.072-.586 2.573-.385 5.435-1.877 5.925-7.587.396-.22.887-.568 1.104-.788.763-.774 1.079-2.534 1.04-5.013C23.929 2.67 20.646 0 18.933 0M3.223 9.135c-.237.281-.837 1.155-.884 1.238-.15-.41-.368-1.349-.337-3.291.051-3.281 2.478-4.972 3.091-5.031.256.015.731.27 1.265.646-1.11 1.171-2.275 2.915-2.352 5.125-.133.546-.398.858-.783 1.313M12 22c-.901 0-1.954-.693-2-1 0-.654.475-1.236 1-1.602V20a1 1 0 1 0 2 0v-.602c.524.365 1 .947 1 1.602-.046.307-1.099 1-2 1m3-3.48v.02a4.752 4.752 0 0 0-1.262-1.02c1.092-.516 2.239-1.334 2.239-2.217 0-1.842-1.781-2.195-3.977-2.195-2.196 0-3.978.354-3.978 2.195 0 .883 1.148 1.701 2.238 2.217A4.8 4.8 0 0 0 9 18.539v-.025c-1-.076-2.182-.281-2.973-.842-1.301-.92-1.838-3.045-1.853-6.478l.023-.041c.496-.826 1.49-1.45 1.804-3.102 0-2.047 1.357-3.631 2.362-4.522C9.37 3.178 10.555 3 11.948 3c1.447 0 2.685.192 3.733.57 1 .9 2.316 2.465 2.316 4.48.313 1.651 1.307 2.275 1.803 3.102.035.058.068.117.102.178-.059 5.967-1.949 7.01-4.902 7.19m6.628-8.202c-.037-.065-.074-.13-.113-.195a7.587 7.587 0 0 0-.739-.987c-.385-.455-.648-.768-.782-1.313-.076-2.209-1.241-3.954-2.353-5.124.531-.376 1.004-.63 1.261-.647.636.071 3.044 1.764 3.096 5.031.027 1.81-.347 3.218-.37 3.235",
            fill: "currentColor"
          }
        )
      ]
    }
  );
}
function hl() {
  return /* @__PURE__ */ r(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      width: "1em",
      height: "1em",
      children: /* @__PURE__ */ r(
        "path",
        {
          d: "M0 0l6.084 24H8L1.916 0zM21 5h-4l-1-4H4l3 12h3l1 4h13L21 5zM6.563 3h7.875l2 8H8.563l-2-8zm8.832 10l-2.856 1.904L12.063 13h3.332zM19 13l-1.5-6h1.938l2 8H16l3-2z",
          fill: "currentColor"
        }
      )
    }
  );
}
function ul() {
  return /* @__PURE__ */ r(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      width: "1em",
      height: "1em",
      children: /* @__PURE__ */ r(
        "path",
        {
          d: "M17 4.978c-1.838 0-2.876.396-3.68.934.513-1.172 1.768-2.934 4.68-2.934a1 1 0 0 0 0-2c-2.921 0-4.629 1.365-5.547 2.512-.064.078-.119.162-.18.244C11.73 1.838 10.798.023 9.207.023 8.579.022 7.85.306 7 .978 5.027 2.54 5.329 3.902 6.492 4.999 3.609 5.222 0 7.352 0 12.969c0 4.582 4.961 11.009 9 11.009 1.975 0 2.371-.486 3-1 .629.514 1.025 1 3 1 4.039 0 9-6.418 9-11 0-5.953-4.055-8-7-8M8.242 2.546c.641-.508.943-.523.965-.523.426.169.975 1.405 1.357 3.055-1.527-.629-2.741-1.352-2.98-1.846.059-.112.241-.356.658-.686M15 21.978c-1.08 0-1.21-.109-1.559-.402l-.176-.146c-.367-.302-.816-.452-1.266-.452s-.898.15-1.266.452l-.176.146c-.347.292-.477.402-1.557.402-2.813 0-7-5.389-7-9.009 0-5.823 4.488-5.991 5-5.991 1.939 0 2.484.471 3.387 1.251l.323.276a1.995 1.995 0 0 0 2.58 0l.323-.276c.902-.78 1.447-1.251 3.387-1.251.512 0 5 .168 5 6 0 3.617-4.187 9-7 9",
          fill: "currentColor"
        }
      )
    }
  );
}
function ml() {
  return /* @__PURE__ */ m(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      width: "1em",
      height: "1em",
      children: [
        /* @__PURE__ */ r(
          "path",
          {
            d: "M12 0a9 9 0 0 0-5 16.482V21s2.035 3 5 3 5-3 5-3v-4.518A9 9 0 0 0 12 0zm0 2c3.86 0 7 3.141 7 7s-3.14 7-7 7-7-3.141-7-7 3.14-7 7-7zM9 17.477c.94.332 1.946.523 3 .523s2.06-.19 3-.523v.834c-.91.436-1.925.689-3 .689a6.924 6.924 0 0 1-3-.69v-.833zm.236 3.07A8.854 8.854 0 0 0 12 21c.965 0 1.888-.167 2.758-.451C14.155 21.173 13.153 22 12 22c-1.102 0-2.117-.789-2.764-1.453z",
            fill: "currentColor"
          }
        ),
        /* @__PURE__ */ r(
          "path",
          {
            d: "M14.745 12.449h-.004c-.852-.024-1.188-.858-1.577-1.824-.421-1.061-.703-1.561-1.182-1.566h-.009c-.481 0-.783.497-1.235 1.537-.436.982-.801 1.811-1.636 1.791l-.276-.043c-.565-.171-.853-.691-1.284-1.794-.125-.313-.202-.632-.27-.913-.051-.213-.127-.53-.195-.634C7.067 9.004 7.039 9 6.99 9A1 1 0 0 1 7 7h.01c1.662.017 2.015 1.373 2.198 2.134.486-.981 1.304-2.058 2.797-2.075 1.531.018 2.28 1.153 2.731 2.141l.002-.008C14.944 8.424 15.327 7 16.979 7h.032A1 1 0 1 1 17 9h-.011c-.149.076-.256.474-.319.709a6.484 6.484 0 0 1-.311.951c-.429.973-.79 1.789-1.614 1.789",
            fill: "currentColor"
          }
        )
      ]
    }
  );
}
function fl() {
  return /* @__PURE__ */ r(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      width: "1em",
      height: "1em",
      children: /* @__PURE__ */ r(
        "path",
        {
          d: "M0 0h11v2H0zM4 11h3V6h4V4H0v2h4zM15.5 17c1.381 0 2.5-1.116 2.5-2.493s-1.119-2.493-2.5-2.493S13 13.13 13 14.507 14.119 17 15.5 17m0-2.986c.276 0 .5.222.5.493 0 .272-.224.493-.5.493s-.5-.221-.5-.493.224-.493.5-.493M21.5 19.014c-1.381 0-2.5 1.116-2.5 2.493S20.119 24 21.5 24s2.5-1.116 2.5-2.493-1.119-2.493-2.5-2.493m0 2.986a.497.497 0 0 1-.5-.493c0-.271.224-.493.5-.493s.5.222.5.493a.497.497 0 0 1-.5.493M22 13l-9 9 1.513 1.5 8.99-9.009zM17 11c2.209 0 4-1.119 4-2.5V2s.985-.161 1.498.949C23.01 4.055 23 6 23 6s1-1.119 1-3.135C24-.02 21 0 21 0h-2v6.347A5.853 5.853 0 0 0 17 6c-2.209 0-4 1.119-4 2.5s1.791 2.5 4 2.5M10.297 20.482l-1.475-1.585a47.54 47.54 0 0 1-1.442 1.129c-.307-.288-.989-1.016-2.045-2.183.902-.836 1.479-1.466 1.729-1.892s.376-.871.376-1.336c0-.592-.273-1.178-.818-1.759-.546-.581-1.329-.871-2.349-.871-1.008 0-1.79.293-2.344.879-.556.587-.832 1.181-.832 1.784 0 .813.419 1.748 1.256 2.805-.847.614-1.444 1.208-1.794 1.784a3.465 3.465 0 0 0-.523 1.833c0 .857.308 1.56.924 2.107.616.549 1.423.823 2.42.823 1.173 0 2.444-.379 3.813-1.137L8.235 24h2.819l-2.09-2.383 1.333-1.135zm-6.736-6.389a1.02 1.02 0 0 1 .73-.286c.31 0 .559.085.747.254a.849.849 0 0 1 .283.659c0 .518-.419 1.112-1.257 1.784-.536-.651-.805-1.231-.805-1.742a.901.901 0 0 1 .302-.669M3.74 22c-.427 0-.778-.116-1.057-.349-.279-.232-.418-.487-.418-.766 0-.594.509-1.288 1.527-2.083.968 1.134 1.717 1.946 2.248 2.438-.921.507-1.686.76-2.3.76",
          fill: "currentColor"
        }
      )
    }
  );
}
function xl() {
  return /* @__PURE__ */ m(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      width: "1em",
      height: "1em",
      children: [
        /* @__PURE__ */ r(
          "path",
          {
            d: "M6.5 12C5.122 12 4 13.121 4 14.5S5.122 17 6.5 17 9 15.879 9 14.5 7.878 12 6.5 12m0 3c-.275 0-.5-.225-.5-.5s.225-.5.5-.5.5.225.5.5-.225.5-.5.5M17.5 12c-1.378 0-2.5 1.121-2.5 2.5s1.122 2.5 2.5 2.5 2.5-1.121 2.5-2.5-1.122-2.5-2.5-2.5m0 3c-.275 0-.5-.225-.5-.5s.225-.5.5-.5.5.225.5.5-.225.5-.5.5",
            fill: "currentColor"
          }
        ),
        /* @__PURE__ */ r(
          "path",
          {
            d: "M22.482 9.494l-1.039-.346L21.4 9h.6c.552 0 1-.439 1-.992 0-.006-.003-.008-.003-.008H23c0-1-.889-2-1.984-2h-.642l-.731-1.717C19.262 3.012 18.091 2 16.764 2H7.236C5.909 2 4.738 3.012 4.357 4.283L3.626 6h-.642C1.889 6 1 7 1 8h.003S1 8.002 1 8.008C1 8.561 1.448 9 2 9h.6l-.043.148-1.039.346a2.001 2.001 0 0 0-1.359 2.097l.751 7.508a1 1 0 0 0 .994.901H3v1c0 1.103.896 2 2 2h2c1.104 0 2-.897 2-2v-1h6v1c0 1.103.896 2 2 2h2c1.104 0 2-.897 2-2v-1h1.096a.999.999 0 0 0 .994-.901l.751-7.508a2.001 2.001 0 0 0-1.359-2.097M6.273 4.857C6.402 4.43 6.788 4 7.236 4h9.527c.448 0 .834.43.963.857L19.313 9H4.688l1.585-4.143zM7 21H5v-1h2v1zm12 0h-2v-1h2v1zm2.189-3H2.811l-.662-6.607L3 11h18l.852.393L21.189 18z",
            fill: "currentColor"
          }
        )
      ]
    }
  );
}
function gl(e, t = null) {
  if (typeof window > "u")
    throw new Error();
  const i = localStorage.getItem(e);
  if (!i)
    return t;
  try {
    return JSON.parse(i);
  } catch {
    return i;
  }
}
function bl(e, t) {
  window.localStorage.setItem(e, `${t}`);
}
class Mt {
  constructor(t, i) {
    oe(this, "key");
    oe(this, "value");
    oe(this, "prev");
    oe(this, "next");
    this.key = t, this.value = i, this.prev = null, this.next = null;
  }
}
class _l {
  constructor(t) {
    oe(this, "capacity");
    oe(this, "usedCapacity");
    oe(this, "head");
    oe(this, "tail");
    oe(this, "store");
    this.capacity = t || 20, this.usedCapacity = 0, this.store = {}, this.head = new Mt("fakeHeadNode", "fakeHeadNode"), this.tail = new Mt("fakeTailNode", "fakeTailNode"), this.head.next = this.tail, this.tail.prev = this.head;
  }
  removeNode(t) {
    t.prev.next = t.next, t.next.prev = t.prev;
  }
  addToHead(t) {
    t.prev = this.head, t.next = this.head.next, this.head.next.prev = t, this.head.next = t;
  }
  moveToHead(t) {
    this.removeNode(t), this.addToHead(t);
  }
  removeTail() {
    const t = this.tail.prev;
    return this.removeNode(t), t;
  }
  get(t) {
    if (t in this.store) {
      const i = this.store[t];
      return this.moveToHead(i), i.value;
    }
    return -1;
  }
  put(t, i) {
    if (t in this.store) {
      const n = this.store[t];
      n.value = i, this.moveToHead(n);
    } else {
      const n = new Mt(t, i);
      if (this.addToHead(n), this.store[t] = n, this.usedCapacity += 1, this.usedCapacity > this.capacity) {
        const a = this.removeTail();
        delete this.store[a.key], this.usedCapacity -= 1;
      }
    }
  }
  keys() {
    const t = [];
    let i = this.head;
    for (; i; )
      t.push(i.key), i = i.next;
    return t.slice(1, -1);
  }
  values() {
    const t = [];
    let i = this.head;
    for (; i; )
      t.push(i.value), i = i.next;
    return t.slice(1, -1);
  }
  toJSON() {
    return this.store;
  }
}
function wl(e, t) {
  const i = new _l(t);
  return {
    syncFromStorage() {
      (gl(e) || []).slice().reverse().forEach((o) => {
        i.put(o, o);
      });
    },
    syncToStorage() {
      bl(e, ko(i.keys()));
    },
    put(a) {
      i.put(a, a), this.syncToStorage();
    },
    get(a) {
      return a ? i.get(a) : i.keys();
    }
  };
}
const Le = wl("EMOJI_PICKER", 20), Ti = [
  {
    title: "Smileys & People",
    data: tl,
    icon: Er
  },
  {
    title: "Animals & Nature",
    data: cl,
    icon: dl
  },
  {
    title: "Food & Drink",
    data: sl,
    icon: ul
  },
  {
    title: "Activity",
    data: rl,
    icon: ll
  },
  {
    title: "Travel & Places",
    data: al,
    icon: xl
  },
  {
    title: "Object",
    data: nl,
    icon: ml
  },
  {
    title: "Symbol",
    data: il,
    icon: fl
  },
  {
    title: "Flags",
    data: ol,
    icon: hl
  }
], pl = ["😀", "😃", "😄", "😁", "😆", "😅", "😂", "🤣"];
function vl({ onSelectEmoji: e, children: t }) {
  const [i, n] = y([]), { t: a } = P(), o = F(
    () => i.length ? [{ title: "Frequently used", icon: Hr, data: i }, ...Ti] : Ti,
    [i]
  ), c = M(
    (s) => {
      Le.put(s), n(Le.get()), e && e(s);
    },
    [e]
  );
  return E(() => {
    Le.syncFromStorage();
    const s = Le.get();
    s != null && s.length || pl.forEach((d) => {
      Le.put(d);
    });
    const l = Le.get();
    n(l);
  }, []), /* @__PURE__ */ m(re, { modal: !0, children: [
    /* @__PURE__ */ r(ae, { asChild: !0, children: t }),
    /* @__PURE__ */ r(ne, { hideWhenDetached: !0, className: "richtext-w-full richtext-h-full richtext-p-2", align: "start", side: "bottom", children: /* @__PURE__ */ m(Jt, { defaultValue: "Frequently used", children: [
      /* @__PURE__ */ r(Ct, { className: "richtext-flex richtext-items-center richtext-gap-[4px]", children: o.map((s) => /* @__PURE__ */ r(
        Re,
        {
          value: s.title,
          className: "!richtext-p-[6px] richtext-bg-accent hover:richtext-text-accent-foreground",
          children: s.icon && /* @__PURE__ */ r(s.icon, { size: 16 })
        },
        `emoji-picker-title-${s.title}`
      )) }),
      o.map((s) => /* @__PURE__ */ m(
        He,
        {
          value: s.title,
          children: [
            /* @__PURE__ */ r("p", { className: "richtext-mb-[6px] richtext-font-semibold", children: a(s.title) }),
            /* @__PURE__ */ r("div", { className: "richtext-max-h-[280px] richtext-overflow-y-auto", children: /* @__PURE__ */ r("div", { className: "richtext-grid richtext-grid-cols-8 richtext-gap-1 ", children: (s.data || []).map((l) => /* @__PURE__ */ r(
              "div",
              {
                onClick: () => c(l),
                className: "richtext-text-center richtext-cursor-pointer",
                children: l
              },
              `emoji-picker-${l}`
            )) }) })
          ]
        },
        `emoji-picker-content-${s.title}`
      ))
    ] }) })
  ] });
}
function yl({ editor: e, icon: t, ...i }) {
  const n = M(
    (a) => {
      const { selection: o } = e.state, { $anchor: c } = o;
      return e.chain().insertContentAt(c.pos, a).run();
    },
    [e]
  );
  return /* @__PURE__ */ r(vl, { onSelectEmoji: n, children: /* @__PURE__ */ r(
    w,
    {
      tooltip: i == null ? void 0 : i.tooltip,
      icon: t
    }
  ) });
}
const kl = 200, Cl = new pe("emoji"), ih = ue.create({
  name: "emoji",
  content: "text*",
  priority: kl,
  addOptions() {
    var e;
    return {
      ...(e = this.parent) == null ? void 0 : e.call(this),
      HTMLAttributes: {},
      suggestion: {
        char: ":",
        pluginKey: Cl,
        command: ({ editor: t, range: i, props: n }) => {
          t.chain().focus().insertContentAt(i, `${n.emoji} `).run();
        }
      },
      button: ({ editor: t, t: i }) => ({
        component: yl,
        componentProps: {
          editor: t,
          action: () => {
          },
          isActive: () => !1,
          disabled: !1,
          icon: "EmojiIcon",
          tooltip: i("editor.emoji.tooltip")
        }
      })
    };
  },
  addCommands() {
    return {
      setEmoji: (e) => ({ commands: t }) => t.insertContent(`${e.emoji} `)
    };
  },
  addProseMirrorPlugins() {
    return [
      Ri({
        editor: this.editor,
        ...this.options.suggestion
      })
    ];
  }
}).configure({
  suggestion: {
    items: ({ query: e }) => el(e),
    render: () => {
      let e, t, i;
      return {
        onStart: (n) => {
          i = n.editor.isEditable, i && (e = new jt(gn, {
            props: n,
            editor: n.editor
          }), t = Gt("body", {
            getReferenceClientRect: n.clientRect,
            appendTo: () => document.body,
            content: e.element,
            showOnCreate: !0,
            interactive: !0,
            trigger: "manual",
            placement: "bottom-start"
          }));
        },
        onUpdate(n) {
          i && (e.updateProps(n), t[0].setProps({
            getReferenceClientRect: n.clientRect
          }));
        },
        onKeyDown(n) {
          var a;
          if (i)
            return n.event.key === "Escape" ? (t[0].hide(), !0) : (a = e.ref) == null ? void 0 : a.onKeyDown(n);
        },
        onExit() {
          i && (t[0].destroy(), e.destroy());
        }
      };
    }
  }
});
function Nl(e) {
  const t = document.createElement("iframe");
  t.setAttribute("style", "position: absolute; width: 0; height: 0; top: 0; left: 0;"), document.body.appendChild(t), t.textContent = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <title>Echo Editor</title>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
    </head>
    <body class="is-print">
      <div class="tiptap ProseMirror" translate="no" aria-expanded="false">
          ${e}
      </div>
    </body>
    </html>
  `;
  const i = t.contentWindow, n = t.contentDocument || t.contentWindow && t.contentWindow.document, a = document.createElement("link");
  a.rel = "stylesheet", a.href = "https://cdn.jsdelivr.net/npm/reactjs-tiptap-editor@latest/lib/style.css", n.head.appendChild(a), n && (n.open(), n.write(e), n.close()), i && (t.onload = function() {
    try {
      setTimeout(() => {
        i.focus();
        try {
          i.document.execCommand("print", !1) || i.print();
        } catch {
          i.print();
        }
        i.close();
      }, 10);
    } catch (o) {
      console.error(o);
    }
    setTimeout(() => {
      document.body.removeChild(t);
    }, 100);
  });
}
function Tl(e) {
  const t = e.getHTML();
  return t ? (Nl(t), !0) : !1;
}
const nh = K.create({
  name: "exportPdf",
  addOptions() {
    var e;
    return {
      ...(e = this.parent) == null ? void 0 : e.call(this),
      button: ({ editor: t, t: i }) => ({
        component: w,
        componentProps: {
          action: () => {
            Tl(t);
          },
          icon: "ExportPdf",
          tooltip: i("editor.exportPdf.tooltip"),
          isActive: () => !1,
          disabled: !1
        }
      })
    };
  }
});
function Al(e, t) {
  const i = atob(e.split(",")[1]), n = Array.from({ length: i.length });
  for (let o = 0; o < i.length; o++)
    n[o] = i.charCodeAt(o);
  const a = new Uint8Array(n);
  return new Blob([a], { type: t });
}
function Sl(e, t) {
  return new File([e], t, { type: e.type });
}
function Ll(e) {
  const { toast: t } = Zi(), { t: i } = P(), [n, a] = y(!1), o = J(null);
  function c() {
    var f;
    (f = o.current) == null || f.click();
  }
  function s(f) {
    const u = f.target.files[0];
    if (u) {
      if (u.size > e.limit) {
        t({
          variant: "destructive",
          title: i("editor.importWord.limitSize")
        });
        return;
      }
      d(u);
    }
  }
  async function l(f) {
    var N;
    const x = new DOMParser().parseFromString(f, "text/html"), g = x.querySelectorAll("img");
    if (!g.length)
      return x.body.innerHTML;
    if (nn(e.editor, "image")) {
      const z = (N = e.editor.extensionManager.extensions.find(
        (k) => k.name === "importWord"
      )) == null ? void 0 : N.options;
      if (z && typeof z.upload == "function") {
        const k = [];
        for (const p of g) {
          const A = p.getAttribute("src"), R = Al(A, "image/jpeg"), H = Sl(R, "image.jpeg");
          k.push(H);
        }
        const b = await z.upload(k);
        for (let p = 0; p < g.length; p++) {
          const A = g[p];
          A.setAttribute("src", b[p].src);
          const R = A.parentElement;
          (R == null ? void 0 : R.tagName) === "P" && (R.insertAdjacentElement("beforebegin", A), !R.hasChildNodes() && R.textContent === "" && R.remove());
        }
        return x.body.innerHTML;
      } else
        return console.warn("Image Upload method found, skip image conversion"), x.body.innerHTML;
    } else
      return console.error("Image extension not found, unable to convert image"), x.body.innerHTML;
  }
  async function d(f) {
    a(!0);
    try {
      if (e.convert) {
        const u = await e.convert(f);
        h(u);
      } else {
        const u = await f.arrayBuffer(), { value: x } = await ja.convertToHtml(
          { arrayBuffer: u },
          e == null ? void 0 : e.mammothOptions
        );
        h(x);
      }
    } finally {
      a(!1);
    }
  }
  async function h(f) {
    const u = await l(f);
    e.editor.chain().setContent(u, !0).run();
  }
  return /* @__PURE__ */ m("div", { children: [
    /* @__PURE__ */ r(w, { loading: n, disabled: e == null ? void 0 : e.disabled, icon: e == null ? void 0 : e.icon, tooltip: e == null ? void 0 : e.tooltip, action: c }),
    /* @__PURE__ */ r(
      "input",
      {
        type: "file",
        accept: ".docx",
        ref: o,
        style: {
          display: "none"
        },
        onChange: s
      }
    )
  ] });
}
const rh = K.create({
  name: "importWord",
  addOptions() {
    var e;
    return {
      ...(e = this.parent) == null ? void 0 : e.call(this),
      upload: void 0,
      convert: void 0,
      limit: 1024 * 1024 * 10,
      // 10 MB
      button: ({ editor: t, extension: i, t: n }) => {
        const { convert: a, limit: o, mammothOptions: c } = i.options;
        return {
          component: Ll,
          componentProps: {
            editor: t,
            convert: a,
            limit: o,
            mammothOptions: c,
            action: () => t.commands.setHorizontalRule(),
            disabled: !t.can().setHorizontalRule(),
            icon: "Word",
            shortcutKeys: ["alt", "mod", "S"],
            tooltip: n("editor.importWord.tooltip")
          }
        };
      }
    };
  }
}), Ml = typeof window < "u";
function Il(e, t) {
  if (Ml) {
    const i = window.URL.createObjectURL(e), n = document.createElement("a");
    return n.href = i, n.download = t, n.click(), window.URL.revokeObjectURL(i), Promise.resolve();
  }
  return console.error("Download is not supported in Node.js"), Promise.resolve();
}
const zl = {
  ...Ae,
  hardBreak: Ae.hard_break,
  orderedList: Ae.ordered_list,
  listItem: Ae.list_item,
  bulletList: Ae.bullet_list,
  horizontalRule: Ae.horizontal_rule,
  // Requirement Buffer on browser
  image(e, t) {
    e.renderInline(t), e.closeBlock(t);
  }
}, Rl = new qa(zl, Ga), ah = K.create({
  name: "exportWord",
  addOptions() {
    var e;
    return {
      ...(e = this.parent) == null ? void 0 : e.call(this),
      button: ({ editor: t, t: i }) => ({
        component: w,
        componentProps: {
          icon: "ExportWord",
          action: () => {
            t == null || t.commands.exportToWord();
          },
          tooltip: i("editor.exportWord.tooltip"),
          isActive: () => !1,
          disabled: !1
        }
      })
    };
  },
  // @ts-expect-error
  addCommands() {
    return {
      exportToWord: () => async ({ editor: e }) => {
        const t = {
          getImageBuffer: async (n) => {
            const o = await (await fetch(n)).arrayBuffer();
            return new Uint8Array(o);
          }
        }, i = Rl.serialize(e.state.doc, t);
        return Ka.toBlob(i).then((n) => Il(new Blob([n]), "export-document.docx")), !0;
      }
    };
  }
}), Hl = "_toc_aag8a_1", El = "_visible_aag8a_7", Ol = "_list_aag8a_11", Pl = "_item_aag8a_16", nt = {
  toc: Hl,
  visible: El,
  list: Ol,
  item: Pl,
  "item--3": "_item--3_aag8a_19",
  "item--4": "_item--4_aag8a_22",
  "item--5": "_item--5_aag8a_25",
  "item--6": "_item--6_aag8a_28"
};
function Dl(e) {
  const t = [], i = [t];
  return e.forEach((n) => {
    let a = -1, o = i[n.level + a];
    for (; !o; )
      a -= 1, o = i[n.level + a];
    o.push({ ...n, children: i[n.level] = [] });
  }), t;
}
function Bl({ editor: e }) {
  const t = Qt(), [i, n] = y([]), { t: a } = P(), o = M(() => {
    const c = [], s = e.state.tr;
    e.state.doc.descendants((l, d) => {
      if (l.type.name === "heading") {
        const h = `heading-${c.length + 1}`;
        l.attrs.id !== h && s.setNodeMarkup(d, void 0, {
          ...l.attrs,
          id: h
        }), c.push({
          level: l.attrs.level,
          text: l.textContent,
          id: h
        });
      }
    }), s.setMeta("addToHistory", !1), s.setMeta("preventUpdate", !0), e.view.dispatch(s), n(c), e.eventEmitter && e.eventEmitter.emit("TableOfContents", Dl(c));
  }, [e]);
  return E(() => {
    if (e) {
      if (!e.options.editable) {
        o();
        return;
      }
      return e.on("update", o), () => {
        e.off("update", o);
      };
    }
  }, [e, o]), E(() => {
    o();
  }, []), /* @__PURE__ */ r(fe, { className: se("tableOfContent", nt.toc, t && nt.visible), children: t ? /* @__PURE__ */ m("div", { style: { position: "relative" }, children: [
    /* @__PURE__ */ r("p", { className: "richtext-mb-[8px] text-[20px] richtext-font-semibold", children: a("editor.table_of_content") }),
    /* @__PURE__ */ r("ul", { className: nt.list, children: i.map((c, s) => /* @__PURE__ */ r("li", { className: nt.item, style: { paddingLeft: `${c.level - 1}rem` }, children: /* @__PURE__ */ r("a", { href: `#${c.id}`, children: c.text }) }, `table-of-content-${s}`)) })
  ] }) : null });
}
function $l(e) {
  return e && e.type.name === "title";
}
function Fl(e, t) {
  const n = [e.getJSON()], a = [];
  for (; n.length; ) {
    const o = n.shift();
    o.type === t && a.push(o), o.content && o.content.length && n.push(...o.content);
  }
  return a;
}
function jl(e, ...t) {
  const [i, n] = y(!1);
  return E(() => {
    const a = () => {
      n(e.isActive.apply(e, t));
    };
    return e.on("selectionUpdate", a), e.on("transaction", a), () => {
      e.off("selectionUpdate", a), e.off("transaction", a);
    };
  }, [e, t, n]), i;
}
function Vl({ editor: e, icon: t, tooltip: i }) {
  const n = jl(e, Ul.name), a = M(() => {
    if (n) {
      e.chain().focus().removeTableOfContents().run();
      return;
    }
    e.chain().focus().setTableOfContents().run();
  }, [e, n]);
  return /* @__PURE__ */ r(
    w,
    {
      action: a,
      isActive: () => n || !1,
      icon: t,
      tooltip: i
    }
  );
}
const Ul = ue.create({
  name: "tableOfContents",
  group: "block",
  atom: !0,
  addOptions() {
    var e;
    return {
      ...(e = this.parent) == null ? void 0 : e.call(this),
      onHasOneBeforeInsert: () => {
      },
      resizable: !0,
      lastColumnResizable: !0,
      allowTableNodeSelection: !1,
      button: ({ editor: t, t: i }) => ({
        component: Vl,
        componentProps: {
          disabled: !1,
          icon: "BookMarked",
          tooltip: i("editor.table.tooltip"),
          editor: t
        }
      })
    };
  },
  parseHTML() {
    return [
      {
        tag: "toc"
      }
    ];
  },
  renderHTML({ HTMLAttributes: e }) {
    return ["toc", de(e)];
  },
  addNodeView() {
    return Oe(Bl);
  },
  // @ts-expect-error
  addCommands() {
    return {
      setTableOfContents: () => ({ commands: e, editor: t, view: i }) => {
        if (Fl(t, this.name).length) {
          this.options.onHasOneBeforeInsert();
          return;
        }
        const a = i.props.state.doc.content.firstChild;
        if ($l(a)) {
          const o = (a.firstChild && a.firstChild.nodeSize || 0) + 1;
          return e.insertContentAt(o, { type: this.name });
        }
        return e.insertContent({
          type: this.name
        });
      },
      removeTableOfContents: () => ({ state: e, dispatch: t }) => {
        const { tr: i } = e, n = e.schema.nodes.tableOfContents;
        return e.doc.descendants((a, o) => {
          if (a.type === n) {
            const c = o, s = o + a.nodeSize;
            i.delete(c, s);
          }
        }), i.docChanged ? (t(i), !0) : !1;
      }
    };
  },
  addGlobalAttributes() {
    return [
      {
        types: ["heading"],
        attributes: {
          id: {
            default: null
          }
        }
      }
    ];
  }
});
function Wl(e) {
  var i;
  const t = F(() => {
    var o;
    const n = (o = e == null ? void 0 : e.items) == null ? void 0 : o.find((c) => c.isActive());
    return n && !n.default ? {
      ...n,
      icon: n.icon ? n.icon : e.icon
    } : {
      title: e == null ? void 0 : e.tooltip,
      icon: e.icon,
      isActive: () => !1
    };
  }, [e]);
  return /* @__PURE__ */ m(re, { modal: !0, children: [
    /* @__PURE__ */ r(ae, { disabled: e == null ? void 0 : e.disabled, asChild: !0, children: /* @__PURE__ */ r(
      w,
      {
        customClass: "!richtext-w-12 richtext-h-12",
        icon: e == null ? void 0 : e.icon,
        tooltip: e == null ? void 0 : e.tooltip,
        disabled: e == null ? void 0 : e.disabled,
        children: /* @__PURE__ */ r(D, { className: "richtext-w-3 richtext-h-3 richtext-ml-1 richtext-text-zinc-500", name: "MenuDown" })
      }
    ) }),
    /* @__PURE__ */ r(
      ne,
      {
        className: "richtext-min-w-4 richtext-w-full !richtext-p-[4px] richtext-flex richtext-flex-row richtext-gap-1",
        align: "start",
        side: "bottom",
        children: (i = e == null ? void 0 : e.items) == null ? void 0 : i.map((n, a) => {
          var o, c;
          return /* @__PURE__ */ m(Pe, { children: [
            /* @__PURE__ */ r(De, { asChild: !0, children: /* @__PURE__ */ r(
              Ze,
              {
                size: "sm",
                onClick: n == null ? void 0 : n.action,
                className: "richtext-p-1 richtext-w-7 richtext-h-7",
                pressed: t.title === n.title,
                "data-state": t.title === n.title ? "on" : "off",
                children: (n == null ? void 0 : n.icon) && /* @__PURE__ */ r(D, { name: n.icon })
              }
            ) }),
            /* @__PURE__ */ m(Ne, { className: "richtext-flex richtext-flex-col richtext-items-center", children: [
              /* @__PURE__ */ r("span", { children: n.title }),
              !!((o = n.shortcutKeys) != null && o.length) && /* @__PURE__ */ r("span", { children: (c = n.shortcutKeys) == null ? void 0 : c.map((s) => wt(s)).join(" ") })
            ] })
          ] }, `text-align-${a}`);
        })
      }
    )
  ] });
}
const oh = K.create({
  name: "text-direction",
  addOptions() {
    var e;
    return {
      ...(e = this.parent) == null ? void 0 : e.call(this),
      types: ["heading", "paragraph"],
      directions: ["auto", "ltr", "rtl"],
      defaultDirection: "auto",
      button({
        editor: t,
        extension: i,
        t: n
      }) {
        var l;
        const a = ((l = i.options) == null ? void 0 : l.directions) || [], o = {
          auto: "TextDirection",
          ltr: "LeftToRight",
          rtl: "RightToLeft"
        }, c = a.map((d) => ({
          title: n(`editor.textDirection.${d}.tooltip`),
          icon: o[d],
          isActive: () => !1,
          action: () => {
            var h, f, u, x;
            if (d === "auto") {
              (f = (h = t.commands) == null ? void 0 : h.unsetTextDirection) == null || f.call(h);
              return;
            }
            (x = (u = t.commands) == null ? void 0 : u.setTextDirection) == null || x.call(u, d);
          },
          disabled: !1
        })), s = c.filter((d) => d.disabled).length === c.length;
        return {
          component: Wl,
          componentProps: {
            icon: "TextDirection",
            tooltip: n("editor.textDirection.tooltip"),
            disabled: s,
            items: c
          }
        };
      }
    };
  },
  addGlobalAttributes() {
    return [
      {
        types: this.options.types,
        attributes: {
          dir: {
            default: this.options.defaultDirection,
            parseHTML: (e) => e.attributes.dir && this.options.directions.includes(e.attributes.dir) ? e.attributes.dir.value : this.options.defaultDirection,
            renderHTML: (e) => ({ dir: e.dir })
          }
        }
      }
    ];
  },
  // @ts-expect-error
  addCommands() {
    return {
      setTextDirection: (e) => ({ commands: t }) => this.options.directions.includes(e) ? this.options.types.every((i) => t.updateAttributes(i, { dir: e })) : !1,
      unsetTextDirection: () => ({ commands: e }) => this.options.types.every((t) => e.resetAttributes(t, "dir"))
    };
  }
}), ql = "_listUsers_en3pm_1", Gl = "_itemUser_en3pm_10", Kl = "_selectedUser_en3pm_31", rt = {
  listUsers: ql,
  itemUser: Gl,
  selectedUser: Kl
}, Xl = ft((e, t) => {
  const i = J(), [n, a] = y(0), o = (d) => {
    const h = e.items[d];
    h && e.command({ id: h, label: h });
  }, c = () => {
    a((n + e.items.length - 1) % e.items.length);
  }, s = () => {
    a((n + 1) % e.items.length);
  }, l = () => {
    o(n);
  };
  return E(() => a(0), [e.items]), E(() => {
    if (Number.isNaN(n + 1))
      return;
    const d = i.current.querySelector(`span:nth-of-type(${n + 1})`);
    d && Kt(d, { behavior: "smooth", scrollMode: "if-needed" });
  }, [n]), xt(t, () => ({
    onKeyDown: ({ event: d }) => d.key === "ArrowUp" ? (c(), !0) : d.key === "ArrowDown" ? (s(), !0) : d.key === "Enter" ? (l(), !0) : !1
  })), /* @__PURE__ */ r("div", { className: se("listUsers", rt.listUsers), children: /* @__PURE__ */ r("div", { ref: i, children: e.items.length ? e.items.map((d, h) => /* @__PURE__ */ r(
    "span",
    {
      className: se("itemUser", rt.itemUser, h === n ? rt.selectedUser : ""),
      onClick: () => o(h),
      children: d
    },
    h
  )) : /* @__PURE__ */ r("div", { className: se("itemUserEmpty", rt.itemUser), children: "Empty" }) }) });
}), Yl = [
  {
    id: "1",
    name: "John Doe"
  },
  {
    id: "2",
    name: "Jane Doe"
  },
  {
    id: "3",
    name: "Alice"
  },
  {
    id: "4",
    name: "Bob"
  }
], Zl = {
  items: async ({ query: e }) => Yl.map((i) => i.name).filter((i) => i.toLowerCase().startsWith(e.toLowerCase())),
  render: () => {
    let e, t;
    return {
      onStart: (i) => {
        e = new jt(Xl, {
          props: i,
          editor: i.editor
        }), t = Gt("body", {
          getReferenceClientRect: i.clientRect,
          appendTo: () => document.body,
          content: e.element,
          showOnCreate: !0,
          interactive: !0,
          trigger: "manual",
          placement: "bottom-start"
        });
      },
      onUpdate(i) {
        e.updateProps(i), t[0].setProps({
          getReferenceClientRect: i.clientRect
        });
      },
      onKeyDown(i) {
        var n;
        return i.event.key === "Escape" ? (t[0].hide(), !0) : (n = e.ref) == null ? void 0 : n.onKeyDown(i);
      },
      onExit() {
        t[0].destroy(), e.destroy();
      }
    };
  }
}, ch = Ma.extend({
  addAttributes() {
    return {
      id: {
        default: "",
        parseHTML: ee("id")
      },
      label: {
        default: "",
        parseHTML: ee("label")
      }
    };
  }
}).configure({
  HTMLAttributes: {
    class: "mention"
  },
  suggestion: Zl
});
function Jl(e) {
  const t = Va.renderToStaticMarkup(e), a = new DOMParser().parseFromString(t, "image/svg+xml").documentElement, o = [
    "svg",
    {
      ...Array.from(a.attributes).reduce((c, s) => (c[s.name] = s.value, c), {})
    }
  ];
  return Array.from(a.childNodes).forEach((c) => {
    if (c.nodeType === 1) {
      const s = [
        c.tagName.toLowerCase(),
        Array.from(c.attributes).reduce((l, d) => (l[d.name] = d.value, l), {})
      ];
      c.textContent && s.push(c.textContent), o.push(s);
    }
  }), o;
}
const Ql = {
  audio: /* @__PURE__ */ r(Or, {}),
  video: /* @__PURE__ */ r(Pr, {}),
  file: /* @__PURE__ */ r(Dr, {}),
  image: /* @__PURE__ */ r(Br, {}),
  pdf: /* @__PURE__ */ r(ln, {}),
  word: /* @__PURE__ */ r(dn, {}),
  excel: /* @__PURE__ */ r($r, {}),
  ppt: /* @__PURE__ */ r(Fr, {})
};
function bn(e, t = !1) {
  const i = ys(e), n = Ql[i] || /* @__PURE__ */ r(W, {});
  return t ? Jl(n) : n;
}
const ed = "_attachment_1x1ms_1", td = "_wrap_1x1ms_2", It = {
  attachment: ed,
  wrap: td
};
function id({ editor: e, node: t, updateAttributes: i, deleteNode: n, extension: a }) {
  var A;
  const o = J(), c = Qt(), { hasTrigger: s, fileName: l, fileSize: d, fileExt: h, fileType: f, url: u, error: x } = t.attrs, [g, _] = y(!1), { t: N } = P(), z = (A = a == null ? void 0 : a.options) == null ? void 0 : A.upload, k = M(() => {
    !c || u || c && o.current.click();
  }, [c, u]), b = M(
    async (R) => {
      const H = R.target.files && R.target.files[0];
      if (!H)
        return;
      const T = {
        fileName: ps(H.name),
        fileSize: H.size,
        fileType: H.type,
        fileExt: vs(H.name)
      };
      _(!0);
      try {
        const C = await z(H);
        i({ ...T, url: C }), _(!1);
      } catch (C) {
        i({ error: `File upload fail: ${C && C.message}` || "Unknown error" }), _(!1), o.current.value = "";
      }
    },
    [_, i]
  );
  E(() => {
    !u && !s && (k(), i({ hasTrigger: !0 }));
  }, [u, s, k, i]);
  const p = M(() => n(), [e]);
  return c && !u ? /* @__PURE__ */ r(fe, { children: /* @__PURE__ */ m("div", { className: se(It.wrap, "render-wrapper"), children: [
    /* @__PURE__ */ r("p", { style: { cursor: "pointer" }, onClick: k, children: g ? /* @__PURE__ */ r("span", { children: N("editor.attachment.uploading") }) : /* @__PURE__ */ r("span", { children: N("editor.attachment.please_upload") }) }),
    /* @__PURE__ */ r("input", { ref: o, type: "file", hidden: !0, onChange: b })
  ] }) }) : u ? /* @__PURE__ */ r(fe, { children: /* @__PURE__ */ m("div", { className: se(It.wrap, "render-wrapper"), onClick: k, children: [
    /* @__PURE__ */ m("div", { className: "richtext-flex richtext-items-center richtext-gap-[4px]", children: [
      /* @__PURE__ */ r("span", { children: bn(f) }),
      /* @__PURE__ */ m("span", { children: [
        l,
        ".",
        h
      ] }),
      /* @__PURE__ */ m("span", { children: [
        "(",
        xn(d),
        ")"
      ] })
    ] }),
    /* @__PURE__ */ r(
      w,
      {
        icon: "Trash2",
        action: p,
        tooltip: N("editor.delete")
      }
    )
  ] }) }) : x !== "null" ? /* @__PURE__ */ r(fe, { children: /* @__PURE__ */ r("div", { className: se(It.wrap, "render-wrapper"), onClick: k, children: /* @__PURE__ */ r("p", { children: x }) }) }) : /* @__PURE__ */ r(W, {});
}
const sh = ue.create({
  name: "attachment",
  content: "",
  marks: "",
  group: "block",
  selectable: !0,
  atom: !0,
  draggable: !0,
  addOptions() {
    var e;
    return {
      ...(e = this.parent) == null ? void 0 : e.call(this),
      HTMLAttributes: {
        class: "attachment"
      },
      button: ({ editor: t, t: i }) => ({
        component: w,
        componentProps: {
          action: () => t.chain().focus().setAttachment().run(),
          isActive: () => !1,
          disabled: !1,
          icon: "Attachment",
          tooltip: i("editor.attachment.tooltip")
        }
      })
    };
  },
  parseHTML() {
    return [{ tag: "div[class=attachment]" }];
  },
  renderHTML({ HTMLAttributes: e }) {
    const {
      url: t = "",
      fileName: i = "",
      fileSize: n = "",
      fileType: a = "",
      fileExt: o = ""
    } = e || {};
    return [
      "div",
      de(
        // @ts-expect-error
        this.options.HTMLAttributes || {},
        e || {}
      ),
      t ? [
        "a",
        { href: t || "#" },
        [
          "span",
          { class: "attachment__icon" },
          bn(a, !0)
        ],
        [
          "span",
          { class: "attachment__text" },
          `${i}.${o} (${xn(n)})`
        ]
      ] : ["div", { class: "attachment__placeholder" }]
    ];
  },
  addAttributes() {
    return {
      fileName: {
        default: null,
        parseHTML: ee("filename")
      },
      fileSize: {
        default: null,
        parseHTML: ee("filesize")
      },
      fileType: {
        default: null,
        parseHTML: ee("filetype")
      },
      fileExt: {
        default: null,
        parseHTML: ee("fileext")
      },
      url: {
        default: null,
        parseHTML: ee("url")
      },
      hasTrigger: {
        default: !1,
        parseHTML: (e) => ee("hastrigger")(e) === "true"
      },
      error: {
        default: null,
        parseHTML: ee("error")
      }
    };
  },
  addCommands() {
    return {
      setAttachment: (e = {}) => ({ chain: t }) => t().insertContent({ type: this.name, attrs: e }).run()
    };
  },
  addNodeView() {
    return Oe(id);
  }
}), at = {
  TOP_LEFT: "tl",
  TOP_RIGHT: "tr",
  BOTTOM_LEFT: "bl",
  BOTTOM_RIGHT: "br"
};
function nd(e) {
  var R, H;
  const [t, i] = y({
    width: dt,
    height: dt
  }), [n, a] = y({
    width: 0,
    height: 0
  }), [o] = y([
    at.TOP_LEFT,
    at.TOP_RIGHT,
    at.BOTTOM_LEFT,
    at.BOTTOM_RIGHT
  ]), [c, s] = y(!1), [l, d] = y({
    x: 0,
    y: 0,
    w: 0,
    h: 0,
    dir: ""
  }), { align: h } = (R = e == null ? void 0 : e.node) == null ? void 0 : R.attrs, f = F(() => {
    var S;
    const { src: T, alt: C, width: B, height: v } = (S = e == null ? void 0 : e.node) == null ? void 0 : S.attrs, G = ut(B) ? `${B}px` : B, L = ut(v) ? `${v}px` : v;
    return {
      src: T || void 0,
      alt: C || void 0,
      style: {
        width: G || void 0,
        height: L || void 0
      }
    };
  }, [(H = e == null ? void 0 : e.node) == null ? void 0 : H.attrs]), u = F(() => {
    const {
      style: { width: T }
    } = f;
    return { width: T === "100%" ? T : void 0 };
  }, [f]);
  function x(T) {
    a({
      width: T.target.width,
      height: T.target.height
    });
  }
  function g() {
    const { editor: T, getPos: C } = e;
    T.commands.setNodeSelection(C());
  }
  const _ = M(
    Ue(() => {
      const { editor: T } = e, { width: C } = getComputedStyle(T.view.dom);
      i((B) => ({
        ...B,
        width: Number.parseInt(C, 10)
      }));
    }, ht),
    [e == null ? void 0 : e.editor]
  );
  function N(T, C) {
    T.preventDefault(), T.stopPropagation();
    const B = n.width, v = n.height, G = B / v;
    let L = Number(e.node.attrs.width), S = Number(e.node.attrs.height);
    const j = t.width;
    L && !S ? (L = L > j ? j : L, S = Math.round(L / G)) : S && !L ? (L = Math.round(S * G), L = L > j ? j : L) : !L && !S ? (L = B > j ? j : B, S = Math.round(L / G)) : L = L > j ? j : L, mt(() => {
      s(!0), d({
        x: T.clientX,
        y: T.clientY,
        w: L,
        h: S,
        dir: C
      });
    });
  }
  const z = M(
    Ue((T) => {
      if (T.preventDefault(), T.stopPropagation(), !c)
        return;
      const { x: C, w: B, dir: v } = l, G = (T.clientX - C) * (/l/.test(v) ? -1 : 1), L = Bi(B + G, Oi, t.width);
      e.updateAttributes({
        width: L,
        height: null
      });
    }, ht),
    [c, l, t, e.updateAttributes]
  ), k = M(
    (T) => {
      T.preventDefault(), T.stopPropagation(), c && (mt(() => {
        d({
          x: 0,
          y: 0,
          w: 0,
          h: 0,
          dir: ""
        }), s(!1);
      }), g());
    },
    [c, g]
  ), b = M(() => {
    document == null || document.addEventListener("mousemove", z, !0), document == null || document.addEventListener("mouseup", k, !0);
  }, [z, k]), p = M(() => {
    document == null || document.removeEventListener("mousemove", z, !0), document == null || document.removeEventListener("mouseup", k, !0);
  }, [z, k]);
  E(() => (c ? b() : p(), () => {
    p();
  }), [c, b, p]);
  const A = F(() => new ResizeObserver(() => _()), [_]);
  return E(() => (A.observe(e.editor.view.dom), () => {
    A.disconnect();
  }), [e.editor.view.dom, A]), /* @__PURE__ */ r(fe, { className: "image-view", style: { ...u, width: "100%", textAlign: h }, children: /* @__PURE__ */ m(
    "div",
    {
      draggable: "true",
      "data-drag-handle": !0,
      className: `image-view__body ${e != null && e.selected ? "image-view__body--focused" : ""} ${c ? "image-view__body--resizing" : ""}`,
      style: u,
      children: [
        /* @__PURE__ */ r(
          "img",
          {
            src: f.src,
            alt: f.alt,
            style: f.style,
            height: "auto",
            className: "image-view__body__image block",
            onLoad: x,
            onClick: g
          }
        ),
        (e == null ? void 0 : e.editor.view.editable) && ((e == null ? void 0 : e.selected) || c) && /* @__PURE__ */ r("div", { className: "image-resizer", children: o == null ? void 0 : o.map((T) => /* @__PURE__ */ r(
          "span",
          {
            className: `image-resizer__handler image-resizer__handler--${T}`,
            onMouseDown: (C) => N(C, T)
          },
          `image-dir-${T}`
        )) })
      ]
    }
  ) });
}
function rd({ selectImage: e, giphyApiKey: t, children: i }) {
  const [n, a] = y([]), [o] = y(15), c = J(null), s = (d, h = "search") => {
    if (!t)
      return;
    const u = `${h === "search" ? `https://api.giphy.com/v1/gifs/search?q=${d}` : `https://api.giphy.com/v1/gifs/trending?q=${d}`}&limit=${o}&api_key=${t}`;
    fetch(u).then((x) => x.json()).then((x) => {
      a(x.data);
    }).catch((x) => {
      console.log(x);
    });
  };
  E(() => {
    s("", "trend");
  }, []);
  const l = M(
    qt((d) => {
      if (!d.target.value) {
        s("", "trend");
        return;
      }
      s(d.target.value);
    }, 350),
    // Adjust the debounce delay as needed
    []
  );
  return /* @__PURE__ */ m(re, { modal: !0, children: [
    /* @__PURE__ */ r(ae, { asChild: !0, children: i }),
    /* @__PURE__ */ r(ne, { hideWhenDetached: !0, className: "richtext-w-full richtext-h-full richtext-p-2", align: "start", side: "bottom", children: t ? /* @__PURE__ */ m(W, { children: [
      /* @__PURE__ */ r("div", { className: "richtext-w-full richtext-mb-[10px]", children: /* @__PURE__ */ r(
        Y,
        {
          ref: c,
          type: "text",
          placeholder: "Search GIF",
          onChange: l
        }
      ) }),
      /* @__PURE__ */ r("div", { className: "richtext-max-h-[280px] richtext-overflow-y-auto", children: /* @__PURE__ */ r("div", { className: "richtext-grid richtext-grid-cols-2 richtext-gap-1 ", children: n != null && n.length ? n == null ? void 0 : n.map((d) => /* @__PURE__ */ r(
        "img",
        {
          alt: "giphy",
          className: "richtext-text-center richtext-cursor-pointer",
          onClick: (h) => e(d),
          height: d.images.fixed_width_downsampled.height,
          width: d.images.fixed_width_downsampled.width,
          src: d.images.fixed_width_downsampled.url
        },
        `giphy-${d.id}`
      )) : /* @__PURE__ */ r("p", { children: "No GIFs found" }) }) })
    ] }) : /* @__PURE__ */ r("div", { children: /* @__PURE__ */ r("p", { children: "Missing Giphy API Key" }) }) })
  ] });
}
function ad({ editor: e, icon: t, giphyApiKey: i, ...n }) {
  return /* @__PURE__ */ r(
    rd,
    {
      selectImage: (o) => {
        const { url: c } = o.images.original;
        e.chain().focus().setImageGif({ src: c }).run();
      },
      giphyApiKey: i,
      children: /* @__PURE__ */ r(
        w,
        {
          tooltip: n == null ? void 0 : n.tooltip,
          icon: t
        }
      )
    }
  );
}
const _n = Hi.extend({
  name: "imageGif",
  addOptions() {
    var e;
    return {
      ...(e = this.parent) == null ? void 0 : e.call(this),
      inline: !1,
      content: "",
      marks: "",
      group: "block",
      GIPHY_API_KEY: "",
      draggable: !1,
      selectable: !0,
      atom: !0,
      button: ({ editor: t, extension: i, t: n }) => {
        var o;
        const a = ((o = i == null ? void 0 : i.options) == null ? void 0 : o.GIPHY_API_KEY) || "";
        return {
          component: ad,
          componentProps: {
            editor: t,
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
    var e;
    return {
      ...(e = this.parent) == null ? void 0 : e.call(this),
      width: {
        default: null,
        parseHTML: (t) => {
          const i = t.style.width || t.getAttribute("width") || "10";
          return i === void 0 ? null : Number.parseInt(`${i}`, 10);
        },
        renderHTML: (t) => ({
          width: t.width
        })
      },
      align: {
        default: "center",
        parseHTML: (t) => t.getAttribute("align"),
        renderHTML: (t) => ({
          align: t.align
        })
      }
    };
  },
  addNodeView() {
    return Oe(nd);
  },
  addCommands() {
    var e;
    return {
      ...(e = this.parent) == null ? void 0 : e.call(this),
      setImageGif: (t) => ({ commands: i }) => i.insertContent({
        type: this.name,
        attrs: t
      }),
      updateImageGif: (t) => ({ commands: i }) => i.updateAttributes(this.name, t),
      setAlignImageGif: (t) => ({ commands: i }) => i.updateAttributes(this.name, { align: t })
    };
  },
  renderHTML({ HTMLAttributes: e }) {
    const { align: t } = e;
    return [
      "div",
      // Parent element
      {
        style: t ? `text-align: ${t};` : "",
        class: "imageGIf"
      },
      [
        "img",
        de(
          // Always render the `height="auto"`
          {
            height: "auto"
          },
          this.options.HTMLAttributes,
          e
        )
      ]
    ];
  },
  parseHTML() {
    return [
      {
        tag: "div[class=imageGIf]",
        getAttrs: (e) => {
          const t = e.querySelector("img"), i = t == null ? void 0 : t.getAttribute("width");
          return {
            src: t == null ? void 0 : t.getAttribute("src"),
            alt: t == null ? void 0 : t.getAttribute("alt"),
            title: t == null ? void 0 : t.getAttribute("title"),
            width: i ? Number.parseInt(i, 10) : null,
            align: (t == null ? void 0 : t.getAttribute("align")) || e.style.textAlign || null
          };
        }
      }
    ];
  }
});
export {
  Ul as A,
  Sd as B,
  zd as C,
  oh as D,
  ih as E,
  Rd as F,
  ch as G,
  Hd as H,
  Ld as I,
  sh as J,
  _n as K,
  Ud as L,
  Yd as M,
  Pt as N,
  Fd as O,
  Ad as R,
  Id as S,
  Ed as T,
  Md as U,
  Ds as V,
  Od as a,
  Pd as b,
  Dd as c,
  Bd as d,
  $d as e,
  jd as f,
  Vd as g,
  Wd as h,
  qd as i,
  Kd as j,
  Xd as k,
  Zd as l,
  Td as m,
  Jd as n,
  Qd as o,
  Hs as p,
  eh as q,
  th as r,
  ri as s,
  Ge as t,
  Gd as u,
  Me as v,
  Js as w,
  nh as x,
  rh as y,
  ah as z
};
