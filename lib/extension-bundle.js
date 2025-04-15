import { a as tt, I as nt, U as it, S as at, C as ot, F as rt, H as st, T as lt, E as k, b as ct, c as dt, d as ut, N as me, O as ht, e as mt, f as _t, g as ft, L as gt, h as bt, m as _e, i as xt, j as wt, D as pt, P as yt, k as vt, l as kt, G as Ct, n as At, o as Tt, p as Nt, q as Lt, r as St, s as Et, t as qe, u as Ue, v as Ke, R as ve, w as Ht, x as zt, y as Mt, z as Rt, A as de, J as Ve, M as Pt } from "./tiptap-B-aFGwLp.js";
import { al as It, P as ne, T as We, b as V, $ as ue, a0 as he, A as jt, a4 as Ot, am as Dt, an as j, ao as Bt } from "./vendor-CPA5z-E-.js";
import { jsxs as m, jsx as r, Fragment as fe } from "react/jsx-runtime";
import $t, { useMemo as P, Fragment as ke, useState as v, useCallback as F, forwardRef as Ce, useRef as U, useImperativeHandle as Ae, useEffect as S } from "react";
import { ChevronDown as Ft, SearchIcon as qt, LoaderIcon as Ut, LucideTableProperties as Kt, LucideSheet as Vt, LucideImage as Wt, LucideFile as Gt, LucideVideo as Zt, LucideAudioLines as Jt } from "lucide-react";
import { i as Te, T as ge, a as be, B, b as xe, g as Ne, A as x, D as W, c as G, d as Z, e as J, f as Ge, h as ye, j as Yt, k as Le, P as Y, l as Q, I as H, m as X, n as Se, C as Qt, H as Xt, L as en, o as tn, M as nn, p as an, q as Me, r as ae, s as ee, t as D, E as R, u as on, v as rn, V as sn, w as Re, x as we, y as Pe, S as ln, z as cn, F as dn, G as Ze, J as M, K as un, N as hn, O as mn, Q as _n, U as fn, W as Je } from "./RichTextEditor-Du9yCsKC.js";
import { _ as Za, X as Ja, Y as Ya, Z as Qa } from "./RichTextEditor-Du9yCsKC.js";
import { u as z, D as gn, f as bn, g as Ie, h as C, i as Ye, j as xn, T as oe, k as re, m as se } from "./index-B4_PjjMY.js";
import { Slot as wn } from "@radix-ui/react-slot";
import Ee from "tippy.js";
import He from "scroll-into-view-if-needed";
import { EmojiPicker as $ } from "frimousse";
import { Packer as pn, WidthType as yn } from "docx";
import { DocxSerializer as vn, defaultNodes as q, defaultMarks as kn } from "prosemirror-docx";
const ze = $t.forwardRef(
  ({ asChild: e, ...t }, n) => {
    var o;
    const i = Te[t.icon];
    return /* @__PURE__ */ m(ge, { children: [
      /* @__PURE__ */ r(be, { asChild: !0, children: /* @__PURE__ */ r(
        e ? wn : B,
        {
          className: "richtext-h-[32px] richtext-min-w-24 richtext-overflow-hidden richtext-px-[5px]  richtext-py-0",
          disabled: t == null ? void 0 : t.disabled,
          ref: n,
          variant: "ghost",
          ...t,
          children: /* @__PURE__ */ m("div", { className: "richtext-flex richtext-h-full richtext-items-center richtext-font-normal", children: [
            (t == null ? void 0 : t.title) && /* @__PURE__ */ r("div", { className: "richtext-grow richtext-truncate richtext-text-left richtext-text-sm", children: t == null ? void 0 : t.title }),
            i && /* @__PURE__ */ r(i, { className: "richtext-ml-1 richtext-size-3 richtext-shrink-0 richtext-text-zinc-500" })
          ] })
        }
      ) }),
      /* @__PURE__ */ r(xe, { children: /* @__PURE__ */ m("div", { className: "richtext-flex richtext-max-w-24 richtext-flex-col richtext-items-center richtext-text-center", children: [
        (t == null ? void 0 : t.tooltip) && /* @__PURE__ */ r("div", { children: t == null ? void 0 : t.tooltip }),
        /* @__PURE__ */ r("div", { className: "richtext-flex", children: !!((o = t == null ? void 0 : t.shortcutKeys) != null && o.length) && /* @__PURE__ */ r("span", { children: Ne(t == null ? void 0 : t.shortcutKeys) }) })
      ] }) })
    ] });
  }
), ha = tt.extend({
  addOptions() {
    var e;
    return {
      ...(e = this.parent) == null ? void 0 : e.call(this),
      button: ({ editor: t, t: n }) => ({
        component: x,
        componentProps: {
          action: () => t.commands.toggleBold(),
          isActive: () => t.isActive("bold") || !1,
          disabled: !t.can().toggleBold(),
          icon: "Bold",
          shortcutKeys: ["mod", "B"],
          tooltip: n("editor.bold.tooltip")
        }
      })
    };
  }
}), ma = nt.extend({
  addOptions() {
    var e;
    return {
      ...(e = this.parent) == null ? void 0 : e.call(this),
      button({ editor: t, t: n }) {
        return {
          component: x,
          componentProps: {
            action: () => t.commands.toggleItalic(),
            isActive: () => t.isActive("italic") || !1,
            disabled: !t.can().toggleItalic(),
            shortcutKeys: ["mod", "I"],
            icon: "Italic",
            tooltip: n("editor.italic.tooltip")
          }
        };
      }
    };
  }
}), _a = it.extend({
  addOptions() {
    var e;
    return {
      ...(e = this.parent) == null ? void 0 : e.call(this),
      button({ editor: t, t: n }) {
        return {
          component: x,
          componentProps: {
            action: () => t.commands.toggleUnderline(),
            isActive: () => t.isActive("underline") || !1,
            disabled: !t.can().toggleUnderline(),
            icon: "Underline",
            shortcutKeys: ["mod", "U"],
            tooltip: n("editor.underline.tooltip")
          }
        };
      }
    };
  }
}), fa = at.extend({
  addOptions() {
    var e;
    return {
      ...(e = this.parent) == null ? void 0 : e.call(this),
      button: ({ editor: t, t: n }) => ({
        component: x,
        componentProps: {
          action: () => t.commands.toggleStrike(),
          isActive: () => t.isActive("strike") || !1,
          disabled: !t.can().toggleStrike(),
          icon: "Strikethrough",
          shortcutKeys: ["shift", "mod", "S"],
          tooltip: n("editor.strike.tooltip")
        }
      })
    };
  }
}), ga = ot.extend({
  addOptions() {
    var e;
    return {
      ...(e = this.parent) == null ? void 0 : e.call(this),
      button: ({ editor: t, t: n }) => ({
        component: x,
        componentProps: {
          action: () => t.commands.toggleCode(),
          isActive: () => t.isActive("code") || !1,
          disabled: !t.can().toggleCode(),
          icon: "Code",
          shortcutKeys: ["mod", "E"],
          tooltip: n("editor.code.tooltip")
        }
      })
    };
  }
});
function Cn(e) {
  var a, o, s;
  const { t, lang: n } = z(), i = P(() => {
    var d;
    const l = (d = e == null ? void 0 : e.items) == null ? void 0 : d.find((c) => c.isActive());
    return l && !l.default ? {
      ...l
    } : {
      title: e.tooltip,
      font: t("editor.fontFamily.default.tooltip"),
      isActive: () => !1,
      disabled: !1,
      action: () => e.editor.chain().focus().unsetFontFamily().run()
    };
  }, [t, n, e]);
  return /* @__PURE__ */ m(W, { children: [
    /* @__PURE__ */ r(
      G,
      {
        asChild: !0,
        disabled: e == null ? void 0 : e.disabled,
        children: /* @__PURE__ */ r(
          ze,
          {
            disabled: e == null ? void 0 : e.disabled,
            icon: "MenuDown",
            title: ((a = i == null ? void 0 : i.font) == null ? void 0 : a.length) > 7 ? `${(o = i == null ? void 0 : i.font) == null ? void 0 : o.slice(0, 6)}...` : i == null ? void 0 : i.font,
            tooltip: e == null ? void 0 : e.tooltip
          }
        )
      }
    ),
    /* @__PURE__ */ r(Z, { className: "richtext-w-full", children: (s = e == null ? void 0 : e.items) == null ? void 0 : s.map((l, u) => {
      const d = l.font === t("editor.fontFamily.default.tooltip") ? {} : { fontFamily: l.font };
      return /* @__PURE__ */ m(ke, { children: [
        /* @__PURE__ */ r(
          J,
          {
            checked: (i == null ? void 0 : i.font) === l.font,
            onClick: l.action,
            children: /* @__PURE__ */ r(
              "div",
              {
                className: "richtext-ml-1 richtext-h-full",
                style: d,
                children: l.font
              }
            )
          }
        ),
        l.font === t("editor.fontFamily.default.tooltip") && /* @__PURE__ */ r(Ge, {})
      ] }, `font-family-${u}`);
    }) })
  ] });
}
const ba = rt.extend({
  addOptions() {
    var e;
    return {
      ...(e = this.parent) == null ? void 0 : e.call(this),
      fontFamilyList: gn,
      button({ editor: t, extension: n, t: i }) {
        var d;
        const { extensions: a = [] } = t.extensionManager ?? [], o = ye(((d = n == null ? void 0 : n.options) == null ? void 0 : d.fontFamilyList) || []), s = a.find(
          (c) => c.name === "base-kit"
        ), l = o.map((c) => ({
          action: () => {
            t.chain().focus().setFontFamily(c.value).run();
          },
          isActive: () => t.isActive("textStyle", { fontFamily: c.value }) || !1,
          disabled: !t.can().setFontFamily(c.value),
          title: c.name,
          font: c.value
        }));
        s && s.options.textStyle !== !1 && l.unshift({
          action: () => t.chain().focus().unsetFontFamily().run(),
          isActive: () => !1,
          disabled: !1,
          font: i("editor.fontFamily.default.tooltip"),
          title: i("editor.fontFamily.tooltip")
        });
        const u = l.filter((c) => c.disabled).length === l.length;
        return {
          component: Cn,
          componentProps: {
            tooltip: i("editor.fontFamily.tooltip"),
            disabled: u,
            items: l,
            editor: t
          }
        };
      }
    };
  }
});
function An(e) {
  var n;
  const t = P(() => {
    var o;
    const i = (o = e == null ? void 0 : e.items) == null ? void 0 : o.find((s) => s.isActive());
    return i && !i.default ? {
      ...i
    } : {
      title: e.tooltip,
      level: 0,
      isActive: () => !1
    };
  }, [e]);
  return /* @__PURE__ */ m(W, { children: [
    /* @__PURE__ */ r(
      G,
      {
        asChild: !0,
        disabled: e == null ? void 0 : e.disabled,
        children: /* @__PURE__ */ r(
          ze,
          {
            disabled: e == null ? void 0 : e.disabled,
            icon: "MenuDown",
            title: t == null ? void 0 : t.title,
            tooltip: e == null ? void 0 : e.tooltip
          }
        )
      }
    ),
    /* @__PURE__ */ r(Z, { className: "richtext-w-full", children: (n = e == null ? void 0 : e.items) == null ? void 0 : n.map((i, a) => {
      var o, s;
      return /* @__PURE__ */ m(ke, { children: [
        /* @__PURE__ */ m(
          J,
          {
            checked: (t == null ? void 0 : t.title) === i.title,
            onClick: i.action,
            children: [
              /* @__PURE__ */ r("div", { className: `heading- richtext-ml-1 richtext-h-full${i.level}`, children: i.title }),
              !!((o = i == null ? void 0 : i.shortcutKeys) != null && o.length) && /* @__PURE__ */ r(Yt, { className: "richtext-pl-4", children: (s = i == null ? void 0 : i.shortcutKeys) == null ? void 0 : s.map((l) => Le(l)).join(" ") })
            ]
          }
        ),
        i.level === 0 && /* @__PURE__ */ r(Ge, {})
      ] }, `heading-k-${a}`);
    }) })
  ] });
}
const xa = st.extend({
  addOptions() {
    var e;
    return {
      ...(e = this.parent) == null ? void 0 : e.call(this),
      levels: [1, 2, 3, 4, 5, 6],
      button({ editor: t, extension: n, t: i }) {
        var d;
        const { extensions: a = [] } = t.extensionManager ?? [], o = ((d = n.options) == null ? void 0 : d.levels) || [], s = a.find(
          (c) => c.name === "base-kit"
        ), l = o.map((c) => ({
          action: () => t.commands.toggleHeading({ level: c }),
          isActive: () => t.isActive("heading", { level: c }) || !1,
          disabled: !t.can().toggleHeading({ level: c }),
          title: i(`editor.heading.h${c}.tooltip`),
          level: c,
          shortcutKeys: ["alt", "mod", `${c}`]
        }));
        s && s.options.paragraph !== !1 && l.unshift({
          action: () => t.commands.setParagraph(),
          isActive: () => t.isActive("paragraph") || !1,
          disabled: !t.can().setParagraph(),
          level: 0,
          title: i("editor.paragraph.tooltip"),
          shortcutKeys: ["alt", "mod", "0"]
        });
        const u = l.filter((c) => c.disabled).length === l.length;
        return {
          component: An,
          componentProps: {
            tooltip: i("editor.heading.tooltip"),
            disabled: u,
            items: l,
            editor: t
          }
        };
      }
    };
  }
});
function Tn(e) {
  var n;
  const t = P(() => {
    var o;
    const i = (o = e == null ? void 0 : e.items) == null ? void 0 : o.find((s) => s.isActive());
    return i && !i.default ? {
      ...i,
      icon: i.icon ? i.icon : e.icon
    } : {
      title: e == null ? void 0 : e.tooltip,
      icon: e.icon,
      isActive: () => !1
    };
  }, [e]);
  return /* @__PURE__ */ m(Y, { modal: !0, children: [
    /* @__PURE__ */ r(
      Q,
      {
        asChild: !0,
        disabled: e == null ? void 0 : e.disabled,
        children: /* @__PURE__ */ r(
          x,
          {
            customClass: "!richtext-w-12 richtext-h-12",
            disabled: e == null ? void 0 : e.disabled,
            icon: e == null ? void 0 : e.icon,
            tooltip: e == null ? void 0 : e.tooltip,
            children: /* @__PURE__ */ r(
              H,
              {
                className: "richtext-ml-1 richtext-size-3 richtext-text-zinc-500",
                name: "MenuDown"
              }
            )
          }
        )
      }
    ),
    /* @__PURE__ */ r(
      X,
      {
        align: "start",
        className: "richtext-flex richtext-w-full richtext-min-w-4 richtext-flex-row richtext-gap-1 !richtext-p-[4px]",
        side: "bottom",
        children: (n = e == null ? void 0 : e.items) == null ? void 0 : n.map((i, a) => {
          var o, s;
          return /* @__PURE__ */ m(ge, { children: [
            /* @__PURE__ */ r(be, { asChild: !0, children: /* @__PURE__ */ r(
              Se,
              {
                className: "richtext-size-7 richtext-p-1",
                "data-state": t.title === i.title ? "on" : "off",
                onClick: i == null ? void 0 : i.action,
                pressed: t.title === i.title,
                size: "sm",
                children: (i == null ? void 0 : i.icon) && /* @__PURE__ */ r(H, { name: i.icon })
              }
            ) }),
            /* @__PURE__ */ m(xe, { className: "richtext-flex richtext-flex-col richtext-items-center", children: [
              /* @__PURE__ */ r("span", { children: i.title }),
              !!((o = i.shortcutKeys) != null && o.length) && /* @__PURE__ */ r("span", { children: (s = i.shortcutKeys) == null ? void 0 : s.map((l) => Le(l)).join(" ") })
            ] })
          ] }, `text-align-${a}`);
        })
      }
    )
  ] });
}
const wa = lt.extend({
  addOptions() {
    var e;
    return {
      ...(e = this.parent) == null ? void 0 : e.call(this),
      types: ["heading", "paragraph", "list_item", "title"],
      button({
        editor: t,
        extension: n,
        t: i
      }) {
        var d;
        const a = ((d = n.options) == null ? void 0 : d.alignments) || [], o = {
          left: ["mod", "Shift", "L"],
          center: ["mod", "Shift", "E"],
          right: ["mod", "Shift", "R"],
          justify: ["mod", "Shift", "J"]
        }, s = {
          left: "AlignLeft",
          center: "AlignCenter",
          right: "AlignRight",
          justify: "AlignJustify"
        }, l = a.map((c) => {
          var h, _, f;
          return {
            title: i(`editor.textalign.${c}.tooltip`),
            icon: s[c],
            shortcutKeys: o[c],
            isActive: () => t.isActive({ textAlign: c }) || !1,
            action: () => {
              var A, p;
              return (p = (A = t.commands) == null ? void 0 : A.setTextAlign) == null ? void 0 : p.call(A, c);
            },
            disabled: !((f = (_ = (h = t == null ? void 0 : t.can) == null ? void 0 : h.call(t)) == null ? void 0 : _.setTextAlign) != null && f.call(_, c))
          };
        }), u = l.filter((c) => c.disabled).length === l.length;
        return {
          component: Tn,
          componentProps: {
            icon: "AlignJustify",
            tooltip: i("editor.textalign.tooltip"),
            disabled: u,
            items: l
          }
        };
      }
    };
  }
});
function Nn(e) {
  var i;
  const { t } = z(), n = P(() => {
    const a = (e.items || []).find((s) => s.isActive());
    return a || {
      title: t("editor.fontSize.default.tooltip"),
      isActive: () => !1
    };
  }, [e]);
  return /* @__PURE__ */ m(W, { children: [
    /* @__PURE__ */ r(
      G,
      {
        asChild: !0,
        disabled: e == null ? void 0 : e.disabled,
        children: /* @__PURE__ */ r(
          ze,
          {
            disabled: e == null ? void 0 : e.disabled,
            icon: "MenuDown",
            title: n == null ? void 0 : n.title,
            tooltip: `${e == null ? void 0 : e.tooltip}`
          }
        )
      }
    ),
    /* @__PURE__ */ r(Z, { className: "richtext-max-h-96 richtext-w-32 richtext-overflow-y-auto", children: (i = e == null ? void 0 : e.items) == null ? void 0 : i.map((a, o) => /* @__PURE__ */ r(
      J,
      {
        checked: n.title === a.title,
        onClick: a.action,
        children: /* @__PURE__ */ r("div", { className: "richtext-ml-1 richtext-h-full", children: a.title })
      },
      `font-size-${o}`
    )) })
  ] });
}
const pa = k.create({
  name: "fontSize",
  addOptions() {
    var e;
    return {
      ...(e = this.parent) == null ? void 0 : e.call(this),
      types: ["textStyle"],
      fontSizes: [...bn],
      button({ editor: t, extension: n, t: i }) {
        var u;
        const a = ye(((u = n.options) == null ? void 0 : u.fontSizes) || Ie), o = ye([Ie])[0], s = a.map((d) => ({
          title: d.value === o.value ? i("editor.fontSize.default.tooltip") : String(d.name),
          isActive: () => {
            const { fontSize: c } = t.getAttributes("textStyle");
            return d.value === o.value && c === void 0 ? !0 : t.isActive({ fontSize: String(d.value) }) || !1;
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
        })), l = s.filter((d) => d.disabled).length === s.length;
        return {
          component: Nn,
          componentProps: {
            editor: t,
            tooltip: i("editor.fontSize.tooltip"),
            disabled: l,
            items: s,
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
function Ln({ fill: e }) {
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
function Sn(e) {
  const [t, n] = v(void 0);
  function i(s) {
    var l;
    (l = e.action) == null || l.call(e, s);
  }
  function a() {
    var s;
    (s = e.action) == null || s.call(e, t);
  }
  const o = F(
    It((s) => {
      n(s);
    }, 350),
    []
  );
  return /* @__PURE__ */ m("div", { className: "richtext-flex richtext-items-center richtext-h-[32px]", children: [
    /* @__PURE__ */ r(x, { tooltip: e == null ? void 0 : e.tooltip, disabled: e == null ? void 0 : e.disabled, action: a, children: /* @__PURE__ */ r("span", { className: "richtext-flex richtext-items-center richtext-justify-center richtext-text-sm", children: /* @__PURE__ */ r(Ln, { fill: t }) }) }),
    /* @__PURE__ */ r(
      Qt,
      {
        selectedColor: t,
        setSelectedColor: o,
        onChange: i,
        disabled: e == null ? void 0 : e.disabled,
        colors: e == null ? void 0 : e.colors,
        defaultColor: e == null ? void 0 : e.defaultColor,
        children: /* @__PURE__ */ r(B, { variant: "ghost", size: "icon", className: "r!ichtext-h-[32px] !richtext-w-3", disabled: e == null ? void 0 : e.disabled, children: /* @__PURE__ */ r(H, { className: "!richtext-w-3 !richtext-h-3 richtext-text-zinc-500", name: "MenuDown" }) })
      }
    )
  ] });
}
const ya = ct.extend({
  addOptions() {
    var e;
    return {
      ...(e = this.parent) == null ? void 0 : e.call(this),
      button({ editor: t, t: n, extension: i }) {
        return {
          component: Sn,
          componentProps: {
            colors: i.options.colors,
            defaultColor: i.options.defaultColor,
            action: (a) => {
              a === void 0 && t.chain().focus().unsetColor().run(), typeof a == "string" && t.chain().focus().setColor(a).run();
            },
            isActive: () => {
              const { color: a } = t.getAttributes("textStyle");
              return a && t.isActive({ color: a }) || !1;
            },
            editor: t,
            disabled: !t.can().setColor(""),
            tooltip: n("editor.color.tooltip")
          }
        };
      }
    };
  }
}), va = dt.extend({
  addOptions() {
    var e;
    return {
      ...(e = this.parent) == null ? void 0 : e.call(this),
      multicolor: !0,
      button: ({ editor: t, t: n }) => ({
        component: Xt,
        componentProps: {
          action: (i) => {
            typeof i == "string" && t.chain().focus().setHighlight({ color: i }).run(), i === void 0 && t.chain().focus().unsetHighlight().run();
          },
          editor: t,
          isActive: () => t.isActive("highlight") || !1,
          disabled: !t.can().setHighlight(),
          shortcutKeys: ["⇧", "mod", "H"],
          tooltip: n("editor.highlight.tooltip")
        }
      })
    };
  }
}), ka = ut.extend({
  addOptions() {
    var e;
    return {
      ...(e = this.parent) == null ? void 0 : e.call(this),
      button: ({ editor: t, t: n }) => ({
        component: x,
        componentProps: {
          action: () => t.commands.toggleBulletList(),
          isActive: () => t.isActive("bulletList") || !1,
          disabled: !1,
          shortcutKeys: ["shift", "mod", "8"],
          icon: "List",
          tooltip: n("editor.bulletlist.tooltip")
        }
      })
    };
  }
}), Ca = me.create({
  name: "clear",
  addOptions() {
    var e;
    return {
      ...(e = this.parent) == null ? void 0 : e.call(this),
      button: ({ editor: t, t: n }) => ({
        component: x,
        componentProps: {
          action: () => t.chain().focus().clearNodes().unsetAllMarks().run(),
          disabled: !t.can().chain().focus().clearNodes().unsetAllMarks().run(),
          icon: "Eraser",
          tooltip: n("editor.clear.tooltip")
        }
      })
    };
  }
}), Aa = ht.extend({
  addOptions() {
    var e;
    return {
      ...(e = this.parent) == null ? void 0 : e.call(this),
      button: ({ editor: t, t: n }) => ({
        component: x,
        componentProps: {
          action: () => t.commands.toggleOrderedList(),
          isActive: () => t.isActive("orderedList") || !1,
          disabled: !1,
          icon: "ListOrdered",
          shortcutKeys: ["mod", "shift", "7"],
          tooltip: n("editor.orderedlist.tooltip")
        }
      })
    };
  }
}), Ta = mt.extend({
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
      button: ({ editor: t, t: n }) => ({
        component: x,
        componentProps: {
          action: () => t.commands.toggleTaskList(),
          isActive: () => t.isActive("taskList") || !1,
          disabled: !1,
          icon: "ListTodo",
          shortcutKeys: ["shift", "mod", "9"],
          tooltip: n("editor.tasklist.tooltip")
        }
      })
    };
  },
  addExtensions() {
    return [_t.configure(this.options.taskItem)];
  }
}), Na = ft.extend({
  addOptions() {
    var e;
    return {
      ...(e = this.parent) == null ? void 0 : e.call(this),
      HTMLAttributes: {
        class: "blockquote"
      },
      button: ({ editor: t, t: n }) => ({
        component: x,
        componentProps: {
          action: () => t.commands.toggleBlockquote(),
          isActive: () => t.isActive("blockquote") || !1,
          disabled: !t.can().toggleBlockquote(),
          icon: "TextQuote",
          shortcutKeys: ["shift", "mod", "B"],
          tooltip: n("editor.blockquote.tooltip")
        }
      })
    };
  }
});
function En(e) {
  const [t, n] = v(!1);
  function i(a, o, s) {
    e.action && (e.action({ link: a, text: o, openInNewTab: s }), n(!1));
  }
  return /* @__PURE__ */ m(Y, { modal: !0, open: t, onOpenChange: n, children: [
    /* @__PURE__ */ r(Q, { disabled: e == null ? void 0 : e.disabled, asChild: !0, children: /* @__PURE__ */ r(
      x,
      {
        tooltip: e == null ? void 0 : e.tooltip,
        isActive: e == null ? void 0 : e.isActive,
        disabled: e == null ? void 0 : e.disabled,
        children: /* @__PURE__ */ r(H, { name: e == null ? void 0 : e.icon })
      }
    ) }),
    /* @__PURE__ */ r(X, { hideWhenDetached: !0, className: "richtext-w-full", align: "start", side: "bottom", children: /* @__PURE__ */ r(en, { editor: e.editor, onSetLink: i }) })
  ] });
}
const La = gt.extend({
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
      _e(this.options.HTMLAttributes, e, {
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
      button: ({ editor: t, t: n }) => ({
        component: En,
        componentProps: {
          editor: t,
          action: (i) => {
            const { link: a, text: o, openInNewTab: s } = i;
            t.chain().extendMarkRange("link").insertContent({
              type: "text",
              text: o,
              marks: [
                {
                  type: "link",
                  attrs: {
                    href: a,
                    target: s ? "_blank" : ""
                  }
                }
              ]
            }).setLink({ href: a }).focus().run();
          },
          id: "linkk",
          isActive: () => t.isActive("link") || !1,
          disabled: !t.can().setLink({ href: "" }),
          icon: "Link",
          tooltip: n("editor.link.tooltip")
        }
      })
    };
  },
  addProseMirrorPlugins() {
    return [
      new ne({
        props: {
          handleClick: (e, t) => {
            const { schema: n, doc: i, tr: a } = e.state, o = bt(i.resolve(t), n.marks.link);
            if (!o)
              return !1;
            const s = i.resolve(o.from), l = i.resolve(o.to), u = a.setSelection(new We(s, l));
            e.dispatch(u);
          }
        }
      })
    ];
  }
}), Sa = xt.extend({
  renderHTML() {
    return [
      "div",
      _e(this.options.HTMLAttributes, {
        "data-type": this.name
      }),
      ["hr"]
    ];
  },
  addOptions() {
    var e;
    return {
      ...(e = this.parent) == null ? void 0 : e.call(this),
      button: ({ editor: t, t: n }) => ({
        component: x,
        componentProps: {
          action: () => t.commands.setHorizontalRule(),
          disabled: !t.can().setHorizontalRule(),
          icon: "Minus",
          shortcutKeys: ["mod", "alt", "S"],
          tooltip: n("editor.horizontalrule.tooltip")
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
function Hn(e) {
  var d;
  const {
    icon: t = void 0,
    // title = undefined,
    tooltip: n = void 0,
    // disabled = false,
    customClass: i = "",
    // color = undefined,
    // loading = false,
    // shortcutKeys = undefined,
    tooltipOptions: a = {},
    action: o = void 0,
    isActive: s = void 0,
    children: l
  } = e, u = Te[t];
  return /* @__PURE__ */ m(ge, { children: [
    /* @__PURE__ */ r(be, { asChild: !0, children: /* @__PURE__ */ m(
      Se,
      {
        size: "sm",
        className: `richtext-w-[32px] richtext-h-[32px] ${i}`,
        disabled: s == null ? void 0 : s(),
        onClick: o,
        children: [
          u && /* @__PURE__ */ r(u, { className: "richtext-w-4 richtext-h-4" }),
          l && /* @__PURE__ */ r(fe, { children: l })
        ]
      }
    ) }),
    n && /* @__PURE__ */ r(xe, { ...a, children: /* @__PURE__ */ m("div", { className: "richtext-flex richtext-flex-col richtext-items-center richtext-text-center richtext-max-w-24", children: [
      /* @__PURE__ */ r("div", { children: n }),
      !!((d = e == null ? void 0 : e.shortcutKeys) != null && d.length) && /* @__PURE__ */ r("span", { children: Ne(e == null ? void 0 : e.shortcutKeys) })
    ] }) })
  ] });
}
const zn = ["undo", "redo"], Ea = wt.extend({
  addOptions() {
    var e;
    return {
      ...(e = this.parent) == null ? void 0 : e.call(this),
      depth: 100,
      newGroupDelay: 500,
      button: ({ editor: t, t: n }) => zn.map((i) => ({
        component: Hn,
        componentProps: {
          action: () => {
            i === "undo" && t.chain().focus().undo().run(), i === "redo" && t.chain().focus().redo().run();
          },
          shortcutKeys: i === "undo" ? ["mod", "Z"] : ["shift", "mod", "Z"],
          disabled: i === "undo" ? !t.can().undo() : !t.can().redo(),
          isActive: () => i === "undo" ? !t.can().undo() : !t.can().redo(),
          icon: i === "undo" ? "Undo2" : "Redo2",
          tooltip: n(`editor.${i}.tooltip`)
        }
      }))
    };
  }
}), Mn = pt.extend({
  content: "(block|columns)+"
  // echo editor is a block editor
}), Ha = k.create({
  name: "columnActionButton",
  addOptions() {
    var e;
    return {
      ...(e = this.parent) == null ? void 0 : e.call(this),
      button: ({ editor: t, t: n }) => ({
        component: x,
        componentProps: {
          action: () => {
            t.chain().focus().insertColumns({ cols: 2 }).run();
          },
          icon: "Columns",
          tooltip: n("editor.columns.tooltip")
        }
      })
    };
  }
}), Rn = k.create({
  name: "selection",
  addProseMirrorPlugins() {
    const { editor: e } = this;
    return [
      new ne({
        key: new V("selection"),
        props: {
          decorations(t) {
            return t.selection.empty || e.isFocused === !0 ? null : ue.create(t.doc, [
              he.inline(t.selection.from, t.selection.to, {
                class: "selection"
              })
            ]);
          }
        }
      })
    ];
  }
});
function Pn(e) {
  const { t } = z(), n = P(() => [
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
  ], [e.editor, t]), i = P(() => n.findLast((a) => a.isActive()) ?? {
    label: "Empty"
  }, [n]);
  return /* @__PURE__ */ m(W, { children: [
    /* @__PURE__ */ r(G, { asChild: !0, children: /* @__PURE__ */ m(
      B,
      {
        className: "richtext-flex richtext-h-[32px] richtext-gap-1 richtext-px-1.5",
        variant: "ghost",
        children: [
          /* @__PURE__ */ m("span", { className: "richtext-whitespace-nowrap richtext-text-sm richtext-font-normal", children: [
            " ",
            i == null ? void 0 : i.label
          ] }),
          /* @__PURE__ */ r(Ft, { className: "richtext-size-4" })
        ]
      }
    ) }),
    /* @__PURE__ */ r(
      Z,
      {
        align: "start",
        className: "richtext-w-full richtext-p-1",
        hideWhenDetached: !0,
        sideOffset: 5,
        children: n.map((a, o) => {
          var l;
          const s = Te[a.iconName];
          return /* @__PURE__ */ r(
            J,
            {
              checked: ((l = a.isActive) == null ? void 0 : l.call(a)) || !1,
              className: "richtext-cursor-pointer",
              onClick: () => a.action(),
              children: /* @__PURE__ */ m("div", { className: "richtext-flex richtext-items-center richtext-gap-2 richtext-px-2", children: [
                /* @__PURE__ */ r(s, { className: "richtext-h3 richtext-w-3" }),
                /* @__PURE__ */ m("span", { children: [
                  " ",
                  a.label
                ] })
              ] })
            },
            `text-bubble-${o}`
          );
        })
      }
    )
  ] });
}
const In = k.create({
  name: "text-bubble",
  addOptions() {
    var e;
    return {
      ...(e = this.parent) == null ? void 0 : e.call(this),
      toolbar: !1,
      button: () => ({
        component: Pn,
        componentProps: {}
      })
    };
  }
});
function je({ types: e, node: t }) {
  return Array.isArray(e) && e.includes(t.type) || t.type === e;
}
const jn = k.create({
  name: "trailingNode",
  addOptions() {
    return {
      node: "paragraph",
      notAfter: ["paragraph"]
    };
  },
  addProseMirrorPlugins() {
    const e = new V(this.name), t = Object.entries(this.editor.schema.nodes).map(([, n]) => n).filter((n) => this.options.notAfter.includes(n.name));
    return [
      new ne({
        key: e,
        appendTransaction: (n, i, a) => {
          const { doc: o, tr: s, schema: l } = a, u = e.getState(a), d = o.content.size, c = l.nodes[this.options.node];
          if (u)
            return s.insert(d, c.create());
        },
        state: {
          init: (n, i) => {
            const a = i.tr.doc.lastChild;
            return !je({ node: a, types: t });
          },
          apply: (n, i) => {
            if (!n.docChanged)
              return i;
            const a = n.doc.lastChild;
            return !je({ node: a, types: t });
          }
        }
      })
    ];
  }
}), za = k.create({
  name: "base-kit",
  addExtensions() {
    const e = [];
    return this.options.document !== !1 && e.push(Mn.configure()), this.options.placeholder !== !1 && e.push(
      yt.configure({
        placeholder: ({ node: t, pos: n, editor: i }) => {
          var a, o, s, l;
          return ((a = t == null ? void 0 : t.type) == null ? void 0 : a.name) === "columns" || ((o = t == null ? void 0 : t.content) == null ? void 0 : o.size) !== 0 ? "" : ((s = t == null ? void 0 : t.type) == null ? void 0 : s.name) === "heading" ? `${C.t(`editor.heading.h${t.attrs.level}.tooltip`)}` : ((l = t == null ? void 0 : t.type) == null ? void 0 : l.name) === "table" ? "" : i.extensionManager.extensions.some((u) => u.name === "slashCommand") ? C.t("editor.slash") : n === 0 ? C.t("editor.content") : C.t("editor.content");
        },
        ...this.options.placeholder
      })
    ), this.options.focus !== !1 && e.push(
      vt.configure({
        className: "focus",
        ...this.options.focus
      })
    ), this.options.text !== !1 && e.push(kt.configure()), this.options.textBubble !== !1 && e.push(In.configure()), this.options.gapcursor !== !1 && e.push(Ct.configure()), this.options.dropcursor !== !1 && e.push(
      At.configure({
        ...this.options.dropcursor,
        width: 2,
        class: "ProseMirror-dropcursor border-black"
      })
    ), this.options.characterCount !== !1 && e.push(Tt.configure(this.options.characterCount)), this.options.paragraph !== !1 && e.push(Nt.configure(this.options.paragraph)), this.options.hardBreak !== !1 && e.push(Lt.configure(this.options.hardBreak)), this.options.listItem !== !1 && e.push(St.configure(this.options.listItem)), this.options.textStyle !== !1 && e.push(Et.configure(this.options.textStyle)), this.options.trailingNode !== !1 && e.push(jn.configure(this.options.trailingNode)), this.options.selection !== !1 && e.push(Rn), this.options.multiColumn !== !1 && e.push(tn, nn), e;
  }
}), Ma = k.create({
  name: "subAndSuperScript",
  addOptions() {
    var e;
    return {
      ...(e = this.parent) == null ? void 0 : e.call(this),
      button: ({ editor: t, extension: n, t: i }) => {
        const a = n.options.subscript, o = n.options.superscript, s = {
          component: x,
          componentProps: {
            action: () => t.commands.toggleSubscript(),
            isActive: () => t.isActive("subscript") || !1,
            disabled: !t.can().toggleSubscript(),
            icon: "Subscript",
            tooltip: i("editor.subscript.tooltip")
          }
        }, l = {
          component: x,
          componentProps: {
            action: () => t.commands.toggleSuperscript(),
            isActive: () => t.isActive("superscript") || !1,
            disabled: !t.can().toggleSuperscript(),
            icon: "Superscript",
            tooltip: i("editor.superscript.tooltip")
          }
        }, u = [];
        return a !== !1 && u.push(s), o !== !1 && u.push(l), u;
      }
    };
  },
  addExtensions() {
    const e = [];
    return this.options.subscript !== !1 && e.push(qe.configure(this.options.subscript)), this.options.superscript !== !1 && e.push(Ue.configure(this.options.superscript)), e;
  }
});
function On(e) {
  var n;
  const t = P(() => {
    var o;
    const i = (o = e == null ? void 0 : e.items) == null ? void 0 : o.find((s) => s.isActive());
    return i && !i.default ? {
      ...i,
      icon: i != null && i.icon ? i == null ? void 0 : i.icon : e == null ? void 0 : e.icon
    } : {
      title: e.tooltip,
      icon: e.icon,
      isActive: () => !1
    };
  }, [e]);
  return /* @__PURE__ */ m(W, { children: [
    /* @__PURE__ */ r(
      G,
      {
        asChild: !0,
        disabled: e == null ? void 0 : e.disabled,
        children: /* @__PURE__ */ r(
          x,
          {
            customClass: "!richtext-w-12 richtext-h-12",
            disabled: e == null ? void 0 : e.disabled,
            icon: e == null ? void 0 : e.icon,
            tooltip: e == null ? void 0 : e.tooltip,
            children: /* @__PURE__ */ r(an, { className: "richtext-size-3 richtext-text-gray-500" })
          }
        )
      }
    ),
    /* @__PURE__ */ r(Z, { className: "w-full", children: (n = e == null ? void 0 : e.items) == null ? void 0 : n.map((i, a) => /* @__PURE__ */ m(
      J,
      {
        checked: t.title === i.title,
        className: "richtext-flex richtext-items-center richtext-gap-3",
        onClick: i.action,
        children: [
          /* @__PURE__ */ r(H, { name: i == null ? void 0 : i.icon }),
          /* @__PURE__ */ r("span", { className: "richtext-ml-1", children: i.title }),
          !!(i != null && i.shortcutKeys) && /* @__PURE__ */ r("span", { className: "richtext-ml-auto richtext-text-xs richtext-tracking-widest richtext-opacity-60", children: Ne(i.shortcutKeys) })
        ]
      },
      `more-mark-${a}`
    )) })
  ] });
}
const Ra = k.create({
  name: "moreMark",
  addOptions() {
    var e;
    return {
      ...(e = this.parent) == null ? void 0 : e.call(this),
      button({ editor: t, extension: n, t: i }) {
        const a = n.options.subscript, o = n.options.superscript, s = {
          action: () => t.commands.toggleSubscript(),
          isActive: () => t.isActive("subscript") || !1,
          disabled: !t.can().toggleSubscript(),
          icon: "Subscript",
          title: i("editor.subscript.tooltip"),
          shortcutKeys: ["mod", "."]
        }, l = {
          action: () => t.commands.toggleSuperscript(),
          isActive: () => t.isActive("superscript") || !1,
          disabled: !t.can().toggleSuperscript(),
          icon: "Superscript",
          title: i("editor.superscript.tooltip"),
          shortcutKeys: ["mod", ","]
        }, u = [];
        return a !== !1 && u.push(s), o !== !1 && u.push(l), {
          component: On,
          componentProps: {
            icon: "Type",
            tooltip: i("editor.moremark"),
            disabled: !t.isEditable,
            items: u
          }
        };
      }
    };
  },
  addExtensions() {
    const e = [];
    return this.options.subscript !== !1 && e.push(qe.configure(this.options.subscript)), this.options.superscript !== !1 && e.push(Ue.configure(this.options.superscript)), e;
  }
}), Pa = k.create({
  name: "indent",
  addOptions() {
    var e;
    return {
      ...(e = this.parent) == null ? void 0 : e.call(this),
      types: ["paragraph", "heading", "blockquote"],
      minIndent: ae.min,
      maxIndent: ae.max,
      button({ editor: t, t: n }) {
        return [
          {
            component: x,
            componentProps: {
              action: () => {
                t.commands.indent();
              },
              shortcutKeys: ["Tab"],
              icon: "IndentIncrease",
              tooltip: n("editor.indent.tooltip")
            }
          },
          {
            component: x,
            componentProps: {
              action: () => {
                t.commands.outdent();
              },
              shortcutKeys: ["Shift", "Tab"],
              icon: "IndentDecrease",
              tooltip: n("editor.outdent.tooltip")
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
      indent: () => Me({
        delta: ae.more,
        types: this.options.types
      }),
      outdent: () => Me({
        delta: ae.less,
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
function Dn(e) {
  return Number.parseFloat(e.replace("%", "")) / 100;
}
function Bn(e) {
  const { t } = z(), [n, i] = v("default");
  function a(s) {
    s === "default" ? e.editor.commands.unsetLineHeight() : e.editor.commands.setLineHeight(s), i(s);
  }
  const o = P(() => {
    const u = e.editor.extensionManager.extensions.find(
      (d) => d.name === "lineHeight"
    ).options.lineHeights.map((d) => ({
      label: Dn(d),
      value: d
    }));
    return u.unshift({
      label: t("editor.default"),
      value: "default"
    }), u;
  }, [e]);
  return /* @__PURE__ */ m(W, { children: [
    /* @__PURE__ */ r(
      G,
      {
        asChild: !0,
        disabled: e == null ? void 0 : e.disabled,
        children: /* @__PURE__ */ r(
          x,
          {
            customClass: "!richtext-w-12 richtext-h-12",
            disabled: e == null ? void 0 : e.disabled,
            icon: "LineHeight",
            tooltip: e == null ? void 0 : e.tooltip,
            children: /* @__PURE__ */ r(
              H,
              {
                className: "richtext-ml-1 richtext-size-3 richtext-text-zinc-500",
                name: "MenuDown"
              }
            )
          }
        )
      }
    ),
    /* @__PURE__ */ r(Z, { className: "richtext-min-w-24", children: o == null ? void 0 : o.map((s, l) => /* @__PURE__ */ r(
      J,
      {
        checked: s.value === n,
        onClick: () => a(s.value),
        children: s.label
      },
      `lineHeight-${l}`
    )) })
  ] });
}
const $n = ["paragraph", "heading", "list_item", "todo_item"];
function Fn(e, t) {
  const { selection: n, doc: i } = e;
  if (!n || !i || !(n instanceof We || n instanceof jt))
    return e;
  const { from: a, to: o } = n, s = [], l = t && t !== Ye ? t : null;
  if (i.nodesBetween(a, o, (u, d) => {
    const c = u.type;
    return $n.includes(c.name) ? ((u.attrs.lineHeight || null) !== l && s.push({
      node: u,
      pos: d,
      nodeType: c
    }), c.name !== "list_item" && c.name !== "todo_item") : !0;
  }), s.length === 0)
    return e;
  for (const u of s) {
    const { node: d, pos: c, nodeType: h } = u;
    let { attrs: _ } = d;
    _ = {
      ..._,
      lineHeight: l
    }, e = e.setNodeMarkup(c, h, _, d.marks);
  }
  return e;
}
function qn(e) {
  return ({ state: t, dispatch: n }) => {
    const { selection: i } = t;
    let { tr: a } = t;
    return a = a.setSelection(i), a = Fn(a, e), a.docChanged ? (n && n(a), !0) : !1;
  };
}
const Ia = k.create({
  name: "lineHeight",
  addOptions() {
    var e;
    return {
      ...(e = this.parent) == null ? void 0 : e.call(this),
      types: ["paragraph", "heading", "list_item", "todo_item"],
      lineHeights: xn,
      defaultHeight: Ye,
      button({ editor: t, t: n }) {
        return {
          component: Bn,
          componentProps: {
            editor: t,
            tooltip: n("editor.lineheight.tooltip")
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
      setLineHeight: (e) => qn(e),
      unsetLineHeight: () => ({ commands: e }) => this.options.types.every((t) => e.resetAttributes(t, "lineHeight"))
    };
  }
});
function Un(e, t) {
  var E, N;
  const [n, i] = v(0), [a, o] = v(0), s = U(null), { t: l } = z(), u = U([]);
  Ae(t, () => ({
    onKeyDown: d
  })), S(() => {
    if (!s.current)
      return;
    const g = a * 1e3 + n, b = u.current[g];
    b && b.scrollIntoView({
      behavior: "smooth",
      block: "nearest"
    });
  }, [n, a]);
  function d({ event: g }) {
    return g.key === "ArrowUp" ? (c(), !0) : g.key === "ArrowDown" ? (h(), !0) : g.key === "Enter" ? (_(), !0) : !1;
  }
  function c() {
    var y;
    if (e.items.length === 0)
      return !1;
    let g = n - 1, b = a;
    g < 0 && (b = a - 1, g = ((y = e.items[b]) == null ? void 0 : y.commands.length) - 1 || 0), b < 0 && (b = e.items.length - 1, g = e.items[b].commands.length - 1), i(g), o(b);
  }
  function h() {
    if (e.items.length === 0)
      return !1;
    const g = e.items[a].commands;
    let b = n + 1, y = a;
    g.length - 1 < b && (b = 0, y = a + 1), e.items.length - 1 < y && (y = 0), i(b), o(y);
  }
  function _() {
    if (e.items.length === 0 || a === -1 || n === -1)
      return !1;
    f(a, n);
  }
  function f(g, b) {
    const y = e.items[g].commands[b];
    e.command(y);
  }
  function A(g, b) {
    f(g, b);
  }
  function p(g, b, y) {
    u.current[g * 1e3 + b] = y;
  }
  return /* @__PURE__ */ r(
    "div",
    {
      className: "richtext-mb-8 richtext-max-h-[min(80vh,24rem)] richtext-flex-wrap richtext-overflow-auto richtext-rounded-lg !richtext-border !richtext-border-neutral-200 !richtext-bg-white richtext-p-1 !richtext-text-black richtext-shadow-sm dark:!richtext-border-neutral-800 dark:!richtext-bg-black",
      ref: s,
      children: (E = e == null ? void 0 : e.items) != null && E.length ? /* @__PURE__ */ r("div", { className: "richtext-grid richtext-min-w-48 richtext-grid-cols-1 richtext-gap-0.5", children: (N = e == null ? void 0 : e.items) == null ? void 0 : N.map((g, b) => /* @__PURE__ */ m(ke, { children: [
        /* @__PURE__ */ r("div", { className: "richtext-col-[1/-1] richtext-mx-2 richtext-mt-2 richtext-select-none richtext-text-[0.65rem] richtext-font-semibold richtext-uppercase richtext-tracking-wider !richtext-text-neutral-500 first:richtext-mt-0.5", children: g.title }),
        g.commands.map((y, L) => /* @__PURE__ */ m(
          "button",
          {
            onClick: () => A(b, L),
            ref: (T) => p(b, L, T),
            className: ee("richtext-flex richtext-items-center richtext-gap-3 richtext-px-2 richtext-py-1.5 richtext-text-sm !richtext-text-neutral-800 dark:!richtext-text-neutral-200 richtext-text-left richtext-w-full richtext-rounded-sm richtext-outline-none richtext-transition-colors !richtext-bg-transparent hover:!richtext-bg-accent ", {
              "slash-command-active": a === b && n === L
            }),
            children: [
              y.iconUrl && /* @__PURE__ */ r(
                "img",
                {
                  alt: "",
                  className: "richtext-size-6",
                  src: y.iconUrl
                }
              ),
              y.iconName && /* @__PURE__ */ r(
                H,
                {
                  className: "!richtext-mr-1 !richtext-text-lg",
                  name: y.iconName
                }
              ),
              y.label
            ]
          },
          `command-${L}`
        ))
      ] }, `slash-${g.title}`)) }) : /* @__PURE__ */ r("div", { className: "richtext-p-3", children: /* @__PURE__ */ r("span", { className: "richtext-text-xs richtext-text-gray-800 dark:richtext-text-gray-100", children: l("editor.slash.empty") }) })
    }
  );
}
const Kn = Ce(Un), Vn = {
  setOpen: (e, t) => {
    D(R.UPLOAD_VIDEO(e), t);
  }
};
function Wn(e, t) {
  const n = [
    {
      name: "format",
      title: C.t("editor.slash.format"),
      commands: []
    },
    {
      name: "insert",
      title: C.t("editor.slash.insert"),
      commands: []
    }
  ];
  return e.forEach((i) => {
    i.name.toLowerCase() === "heading" && i.options.levels.forEach((a) => {
      n[0].commands.push({
        name: `heading${a}`,
        label: C.t(`editor.heading.h${a}.tooltip`),
        aliases: [`h${a}`, "bt", `bt${a}`],
        iconName: `Heading${a}`,
        action: ({ editor: o, range: s }) => {
          o.chain().focus().deleteRange(s).setHeading({ level: a }).run();
        }
      });
    }), i.name.toLowerCase() === "bulletlist" && n[0].commands.push({
      name: "bulletList",
      label: C.t("editor.bulletlist.tooltip"),
      aliases: ["ul", "yxlb"],
      iconName: "List",
      action: ({ editor: a, range: o }) => {
        a.chain().focus().deleteRange(o).toggleBulletList().run();
      }
    }), i.name.toLowerCase() === "orderedlist" && n[0].commands.push({
      name: "numberedList",
      label: C.t("editor.orderedlist.tooltip"),
      aliases: ["ol", "yxlb"],
      iconName: "ListOrdered",
      action: ({ editor: a, range: o }) => {
        a.chain().focus().deleteRange(o).toggleOrderedList().run();
      }
    }), i.name.toLowerCase() === "tasklist" && n[0].commands.push({
      name: "taskList",
      label: C.t("editor.tasklist.tooltip"),
      iconName: "ListTodo",
      description: "Task list with todo items",
      aliases: ["todo"],
      action: ({ editor: a, range: o }) => {
        a.chain().focus().deleteRange(o).toggleTaskList().run();
      }
    }), i.name.toLowerCase() === "blockquote" && n[0].commands.push({
      name: "blockquote",
      label: C.t("editor.blockquote.tooltip"),
      description: "插入引入格式",
      aliases: ["yr"],
      iconName: "TextQuote",
      action: ({ editor: a, range: o }) => {
        a.chain().focus().deleteRange(o).setBlockquote().run();
      }
    }), i.name.toLowerCase() === on.name && n[1].commands.push({
      name: "image",
      label: C.t("editor.image.tooltip"),
      iconName: "ImageUp",
      description: "Insert a image",
      aliases: ["image", "tp", "tupian"],
      shouldBeHidden: (a) => a.isActive("columns"),
      action: ({ editor: a, range: o }) => {
        a.chain().focus().deleteRange(o).run(), rn.setOpen(a.id, !0);
      }
    }), i.name.toLowerCase() === sn.name && n[1].commands.push({
      name: "video",
      label: C.t("editor.video.tooltip"),
      iconName: "Video",
      description: "Insert a video",
      aliases: ["video", "sp", "shipin"],
      shouldBeHidden: (a) => a.isActive("columns"),
      action: ({ editor: a, range: o }) => {
        a.chain().focus().deleteRange(o).run(), Vn.setOpen(a.id, !0);
      }
    }), i.name.toLowerCase() === "table" && n[1].commands.push({
      name: "table",
      label: C.t("editor.table.tooltip"),
      iconName: "Table",
      description: "Insert a table",
      aliases: ["table", "bg", "biaoge", "biao"],
      shouldBeHidden: (a) => a.isActive("columns"),
      action: ({ editor: a, range: o }) => {
        a.chain().focus().deleteRange(o).insertTable({ rows: 3, cols: 3, withHeaderRow: !1 }).run();
      }
    }), i.name.toLowerCase() === "horizontalrule" && n[1].commands.push({
      name: "horizontalRule",
      label: C.t("editor.horizontalrule.tooltip"),
      iconName: "Minus",
      description: "Insert a horizontal divider",
      aliases: ["hr", "fgx", "fg"],
      action: ({ editor: a, range: o }) => {
        a.chain().focus().deleteRange(o).setHorizontalRule().run();
      }
    }), i.name.toLowerCase() === "columns" && n[1].commands.push({
      name: "columns",
      label: C.t("editor.columns.tooltip"),
      iconName: "Columns2",
      description: "Add two column content",
      action: ({ editor: a }) => {
        a.chain().focus().insertColumns({ cols: 2 }).run();
      }
    }), t == null || t(i, n);
  }), n;
}
const O = "slashCommand";
let w;
const ja = k.create({
  name: O,
  priority: 200,
  onCreate() {
    w = Ee("body", {
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
      Ke({
        editor: this.editor,
        char: "/",
        allowSpaces: !0,
        startOfLine: !0,
        pluginKey: new V(O),
        allow: ({ state: e, range: t }) => {
          var d, c, h;
          const n = e.doc.resolve(t.from), i = n.depth === 1, a = n.parent.type.name === "paragraph", o = ((d = n.parent.textContent) == null ? void 0 : d.charAt(0)) === "/", s = this.editor.isActive("column"), l = (h = n.parent.textContent) == null ? void 0 : h.slice(
            Math.max(0, (c = n.parent.textContent) == null ? void 0 : c.indexOf("/"))
          ), u = !(l != null && l.endsWith("  "));
          return (i && a && o || s && a && o) && u;
        },
        command: ({ editor: e, range: t, props: n }) => {
          const { view: i } = e;
          n.action({ editor: e, range: t }), i.focus();
        },
        items: ({ query: e, editor: t }) => Wn(t.extensionManager.extensions, this.options.renderGroupItem).map((s) => ({
          ...s,
          commands: s.commands.filter((l) => {
            const u = l.label.toLowerCase().trim(), d = e.toLowerCase().trim();
            if (l.aliases) {
              const c = l.aliases.map((f) => f.toLowerCase().trim()), h = u.match(d), _ = c.some((f) => f.match(d));
              return h || _;
            }
            return u.match(d);
          }).filter(
            (l) => l.shouldBeHidden ? !l.shouldBeHidden(this.editor) : !0
          )
        })).filter((s) => s.commands.length > 0).map((s) => ({
          ...s,
          commands: s.commands.map((l) => ({
            ...l,
            isEnabled: !0
          }))
        })),
        render: () => {
          let e, t = null;
          return {
            onStart: (n) => {
              var o;
              e = new ve(Kn, {
                props: n,
                editor: n.editor
              });
              const { view: i } = n.editor, a = () => {
                if (!n.clientRect)
                  return n.editor.storage[O].rect;
                const s = n.clientRect();
                if (!s)
                  return n.editor.storage[O].rect;
                let l = s.y;
                if (s.top + e.element.offsetHeight + 40 > window.innerHeight) {
                  const u = s.top + e.element.offsetHeight - window.innerHeight + 40;
                  l = s.y - u;
                }
                return new DOMRect(s.x, l, s.width, s.height);
              };
              t = () => {
                w == null || w[0].setProps({
                  getReferenceClientRect: a
                });
              }, (o = i.dom.parentElement) == null || o.addEventListener("scroll", t), w == null || w[0].setProps({
                getReferenceClientRect: a,
                appendTo: () => document.body,
                content: e.element
              }), w == null || w[0].show();
            },
            onUpdate(n) {
              var s;
              e.updateProps(n);
              const { view: i } = n.editor, a = () => {
                if (!n.clientRect)
                  return n.editor.storage[O].rect;
                const l = n.clientRect();
                return l ? new DOMRect(l.x, l.y, l.width, l.height) : n.editor.storage[O].rect;
              }, o = () => {
                w == null || w[0].setProps({
                  getReferenceClientRect: a
                });
              };
              (s = i.dom.parentElement) == null || s.addEventListener("scroll", o), n.editor.storage[O].rect = n.clientRect ? a() : {
                width: 0,
                height: 0,
                left: 0,
                top: 0,
                right: 0,
                bottom: 0
              }, w == null || w[0].setProps({
                getReferenceClientRect: a
              });
            },
            onKeyDown(n) {
              var i;
              return n.event.key === "Escape" ? (w == null || w[0].hide(), !0) : (w != null && w[0].state.isShown || w == null || w[0].show(), (i = e.ref) == null ? void 0 : i.onKeyDown(n));
            },
            onExit(n) {
              var i;
              if (w == null || w[0].hide(), t) {
                const { view: a } = n.editor;
                (i = a.dom.parentElement) == null || i.removeEventListener("scroll", t);
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
});
function Gn(e, t, n) {
  if (!e.doc)
    return e;
  const i = e.doc.nodeAt(t);
  if (!i || n === i.attrs.backgroundColor)
    return e;
  const a = {
    ...i.attrs,
    backgroundColor: n
  };
  return e.setNodeMarkup(t, i.type, a, i.marks);
}
function Zn(e, t, n) {
  const { doc: i, selection: a } = e;
  return !i || !a || !(a instanceof Ot) || a.forEachCell((o, s) => {
    e = Gn(e, s, n);
  }), e;
}
function Oe(e, t) {
  return ({ tr: n, state: i, dispatch: a }) => {
    const { selection: o } = i;
    return n = n.setSelection(o), n = Zn(n, t, e), n.docChanged ? (a == null || a(n), !0) : !1;
  };
}
const Jn = k.create({
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
      setTableCellBackground: (e) => Oe(e, this.options),
      unsetTableCellBackground: () => Oe("", this.options)
    };
  }
}), Yn = /(android|bb\d+|meego).+mobile|armv7l|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series[46]0|samsungbrowser.*mobile|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i, Qn = /CrOS/, Xn = /android|ipad|playbook|silk/i;
function De(e = {}) {
  let t = e.ua || typeof navigator < "u" && navigator.userAgent;
  return t && typeof t == "object" && t.headers && typeof t.headers["user-agent"] == "string" && (t = t.headers["user-agent"]), typeof t != "string" ? !1 : !!(Yn.test(t) && !Qn.test(t) || e.tablet && Xn.test(t) || e.tablet && e.featureDetect && navigator && navigator.maxTouchPoints > 1 && t.includes("Macintosh") && t.includes("Safari"));
}
const Be = (e) => Array.from({ length: e }).map((t, n) => n + 1);
function ei(e) {
  var c;
  const [t, n] = v(!0), [i, a] = v({
    rows: De() ? oe : re,
    cols: De() ? oe : re
  }), [o, s] = v({
    rows: se,
    cols: se
  });
  function l(h, _) {
    h === i.rows && a((f) => ({
      ...f,
      rows: Math.min(h + 1, oe)
    })), _ === i.cols && a((f) => ({
      ...f,
      cols: Math.min(_ + 1, oe)
    })), s({
      rows: h,
      cols: _
    });
  }
  function u(h, _) {
    e == null || e.createTable({ rows: h, cols: _, withHeaderRow: t }), d();
  }
  function d() {
    n(!1), a({
      rows: re,
      cols: re
    }), s({
      rows: se,
      cols: se
    });
  }
  return /* @__PURE__ */ m(Y, { modal: !0, children: [
    /* @__PURE__ */ r(Q, { asChild: !0, children: e == null ? void 0 : e.children }),
    /* @__PURE__ */ r(
      X,
      {
        align: "start",
        className: "richtext-w-full !richtext-p-2",
        side: "bottom",
        children: /* @__PURE__ */ m("div", { className: "table-grid-size-editor richtext-p-0", children: [
          /* @__PURE__ */ r("div", { className: "richtext-flex richtext-flex-col richtext-flex-wrap richtext-justify-between richtext-gap-1", children: (c = Be(i == null ? void 0 : i.rows)) == null ? void 0 : c.map((h) => {
            var _;
            return /* @__PURE__ */ r(
              "div",
              {
                className: "richtext-flex richtext-gap-1",
                children: (_ = Be(i == null ? void 0 : i.cols)) == null ? void 0 : _.map((f) => /* @__PURE__ */ r(
                  "div",
                  {
                    onMouseDown: () => u(h, f),
                    onMouseOver: () => l(h, f),
                    className: `richtext-cursor-pointer richtext-border-border ${f <= o.cols && h <= o.rows && "tableCellActive !richtext-bg-foreground"}`,
                    children: /* @__PURE__ */ r("div", { className: "richtext-box-border richtext-size-4 richtext-rounded-[2px] !richtext-border richtext-border-solid !richtext-border-border richtext-p-1" })
                  },
                  `c-${f}`
                ))
              },
              `r-${h}`
            );
          }) }),
          /* @__PURE__ */ m("div", { className: "richtext-mt-2 richtext-text-center richtext-text-sm richtext-text-zinc-600", children: [
            o.rows,
            " ",
            "x",
            o.cols
          ] })
        ] })
      }
    )
  ] });
}
function ti(e) {
  function t(n) {
    e.disabled || e.editor.chain().focus().insertTable({ ...n, withHeaderRow: !1 }).run();
  }
  return /* @__PURE__ */ r(ei, { createTable: t, children: /* @__PURE__ */ r(
    x,
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
const Oa = Ht.extend({
  addOptions() {
    var e;
    return {
      ...(e = this.parent) == null ? void 0 : e.call(this),
      resizable: !0,
      lastColumnResizable: !0,
      allowTableNodeSelection: !1,
      button: ({ editor: t, t: n }) => ({
        component: ti,
        componentProps: {
          disabled: t.isActive("table") || !1,
          icon: "Table",
          tooltip: n("editor.table.tooltip"),
          editor: t
        }
      })
    };
  },
  addExtensions() {
    return [
      zt.configure(this.options.tableRow),
      Mt.configure(this.options.tableHeader),
      Rt.configure(this.options.tableCell),
      Jn.configure(this.options.tableCellBackground)
    ];
  }
}), Da = k.create({
  name: "painter",
  addOptions() {
    var e;
    return {
      ...(e = this.parent) == null ? void 0 : e.call(this),
      button: ({ editor: t, t: n }) => ({
        component: x,
        componentProps: {
          action: () => {
            t.commands.setPainter(t == null ? void 0 : t.state.selection.$head.marks());
          },
          icon: "PaintRoller",
          tooltip: n("editor.format")
        }
      })
    };
  },
  addCommands() {
    return {
      setPainter: (e) => ({
        view: {
          dispatch: t,
          state: { tr: n },
          dom: i
        }
      }) => {
        const s = `url("data:image/svg+xml;utf8,${encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#000" d="M9 22v-6H4V7q0-1.65 1.175-2.825T8 3h12v13h-5v6zM6 10h12V5h-1v4h-2V5h-1v2h-2V5H8q-.825 0-1.412.588T6 7zm0 4h12v-2H6zm0 0v-2z"/></svg>')}"), auto`;
        return i.style.cursor = s, t(n.setMeta("painterAction", { type: "start", marks: e })), !0;
      }
    };
  },
  addProseMirrorPlugins() {
    return [
      new ne({
        key: new V("format-painter"),
        state: {
          init: () => [],
          apply: (e, t) => {
            const n = e.getMeta("painterAction");
            return n && n.type === "start" ? t = n.marks : n && n.type === "end" && (t = []), t;
          }
        },
        props: {
          handleDOMEvents: {
            mousedown(e) {
              const t = this.getState(e.state);
              if (!t || t.length === 0)
                return e.dom.style.cursor = "", !1;
              const n = () => {
                document.removeEventListener("mouseup", n);
                let {
                  dispatch: i,
                  state: { tr: a, selection: o },
                  dom: s
                } = e;
                s.style.cursor = "", a = a.removeMark(o.from, o.to);
                for (const l of t)
                  l.type.name !== "link" && (a = a.addMark(o.from, o.to, l));
                i(a.setMeta("painterAction", { type: "end" }));
              };
              return document.addEventListener("mouseup", n), !0;
            }
          }
        }
      })
    ];
  }
});
function ni({ editor: e, ...t }) {
  const { t: n } = z(), [i, a] = v(-1), [o, s] = v([]), [l, u] = v(""), [d, c] = v(""), [h, _] = v(!1), [f, A] = v(!1);
  return S(() => {
    h || (u(""), c(""), a(-1), s([]), e.commands.setSearchTerm(""), e.commands.setReplaceTerm(""));
  }, [e, h]), S(() => {
    h && e && e.commands && e.commands.setSearchTerm && e.commands.setSearchTerm(l);
  }, [h, l, e]), S(() => {
    h && e && e.commands && e.commands.setReplaceTerm && e.commands.setReplaceTerm(d);
  }, [h, d, e]), S(() => {
    if (!e)
      return;
    const p = e.extensionManager.extensions.find((N) => N.name === si.name);
    if (!p)
      return;
    const E = () => {
      if (!h)
        return;
      const N = p ? p.storage.currentIndex : -1, g = p ? p.storage.results : [];
      a((b) => b !== N ? N : b), s((b) => Dt(b, g) ? b : g);
    };
    return Re(R.SEARCH_REPLCE, E), () => {
      p && Re(R.SEARCH_REPLCE, E);
    };
  }, [h, e]), /* @__PURE__ */ m(
    Y,
    {
      onOpenChange: _,
      open: h,
      children: [
        /* @__PURE__ */ r(
          Q,
          {
            asChild: !0,
            disabled: t == null ? void 0 : t.disabled,
            children: /* @__PURE__ */ r(
              x,
              {
                disabled: t == null ? void 0 : t.disabled,
                isActive: t == null ? void 0 : t.isActive,
                tooltip: t == null ? void 0 : t.tooltip,
                children: /* @__PURE__ */ r(H, { name: t == null ? void 0 : t.icon })
              }
            )
          }
        ),
        /* @__PURE__ */ m(
          X,
          {
            align: "start",
            className: "richtext-w-full",
            hideWhenDetached: !0,
            side: "bottom",
            children: [
              /* @__PURE__ */ m("div", { className: "richtext-mb-[6px] richtext-flex richtext-items-center richtext-justify-between", children: [
                /* @__PURE__ */ r(we, { children: n("editor.search.dialog.text") }),
                /* @__PURE__ */ r("span", { className: "richtext-font-semibold", children: o.length > 0 ? `${i + 1}/${o.length}` : "0/0" })
              ] }),
              /* @__PURE__ */ m("div", { className: "richtext-mb-[10px] richtext-flex richtext-w-full richtext-max-w-sm richtext-items-center richtext-gap-1.5", children: [
                /* @__PURE__ */ r(
                  Pe,
                  {
                    autoFocus: !0,
                    className: "richtext-w-full",
                    onChange: (p) => u(p.target.value),
                    placeholder: "Text",
                    required: !0,
                    type: "text",
                    value: l
                  }
                ),
                /* @__PURE__ */ r(
                  B,
                  {
                    className: "richtext-flex-1",
                    disabled: o.length === 0,
                    onClick: e.commands.goToPrevSearchResult,
                    children: /* @__PURE__ */ r(H, { name: "ChevronUp" })
                  }
                ),
                /* @__PURE__ */ r(
                  B,
                  {
                    className: "richtext-flex-1",
                    disabled: o.length === 0,
                    onClick: e.commands.goToNextSearchResult,
                    children: /* @__PURE__ */ r(H, { name: "ChevronDown" })
                  }
                )
              ] }),
              /* @__PURE__ */ r(we, { className: "richtext-mb-[6px]", children: n("editor.replace.dialog.text") }),
              /* @__PURE__ */ r("div", { className: "richtext-mb-[5px] richtext-flex richtext-w-full richtext-max-w-sm richtext-items-center richtext-gap-1.5", children: /* @__PURE__ */ r("div", { className: "richtext-relative richtext-w-full richtext-max-w-sm richtext-items-center", children: /* @__PURE__ */ r(
                Pe,
                {
                  className: "richtext-w-80",
                  onChange: (p) => c(p.target.value),
                  placeholder: "Text",
                  required: !0,
                  type: "text",
                  value: d
                }
              ) }) }),
              /* @__PURE__ */ m("div", { className: "richtext-mb-[10px] richtext-flex richtext-items-center richtext-space-x-2", children: [
                /* @__PURE__ */ r(
                  ln,
                  {
                    checked: f,
                    onCheckedChange: (p) => {
                      A(p), e.commands.setCaseSensitive(p);
                    }
                  }
                ),
                /* @__PURE__ */ r(we, { children: n("editor.replace.caseSensitive") })
              ] }),
              /* @__PURE__ */ m("div", { className: "richtext-flex richtext-items-center richtext-gap-[10px]", children: [
                /* @__PURE__ */ r(
                  B,
                  {
                    className: "richtext-flex-1",
                    disabled: o.length === 0,
                    onClick: e.commands.replace,
                    children: n("editor.replace.dialog.text")
                  }
                ),
                /* @__PURE__ */ r(
                  B,
                  {
                    className: "richtext-flex-1",
                    disabled: o.length === 0,
                    onClick: e.commands.replaceAll,
                    children: n("editor.replaceAll.dialog.text")
                  }
                )
              ] })
            ]
          }
        )
      ]
    }
  );
}
const te = (e, t) => t(e.tr);
function ii(e, t, n) {
  return RegExp(t ? e.replace(/[$()*+./?[\\\]^{|}-]/g, String.raw`\$&`) : e, n ? "gu" : "gui");
}
function ai(e, t, n) {
  const i = [];
  let a = [];
  const o = [];
  let s = 0;
  if (!t)
    return { decorationsToReturn: [], results: [] };
  e == null || e.descendants((l, u) => {
    l.isText ? a[s] ? a[s] = {
      text: a[s].text + l.text,
      pos: a[s].pos
    } : a[s] = {
      text: `${l.text}`,
      pos: u
    } : s += 1;
  }), a = a.filter(Boolean);
  for (const { text: l, pos: u } of a) {
    const d = [...l.matchAll(t)];
    for (const c of d) {
      if (c[0] === "")
        break;
      c.index !== void 0 && o.push({
        from: u + c.index,
        to: u + c.index + c[0].length
      });
    }
  }
  for (const l of o)
    i.push(he.inline(l.from, l.to, { class: n }));
  return {
    decorationsToReturn: i,
    results: o
  };
}
function $e(e, t, { state: n, dispatch: i }) {
  if (!t[0])
    return;
  const { from: o, to: s } = t[0];
  i && i(n.tr.insertText(e, o, s));
}
function oi(e, t, n, i) {
  const a = t + 1;
  if (!i[a])
    return null;
  const { from: o, to: s } = i[t], l = s - o - e.length + n, { from: u, to: d } = i[a];
  return i[a] = {
    to: d - l,
    from: u - l
  }, [l, i];
}
function ri(e, t, { tr: n, dispatch: i }) {
  let a = 0, o = t.slice();
  if (o.length === 0)
    return !1;
  for (let s = 0; s < o.length; s += 1) {
    const { from: l, to: u } = o[s];
    n.insertText(e, l, u);
    const d = oi(e, s, a, o);
    d && (a = d[0], o = d[1]);
  }
  return i(n), !0;
}
function Fe({ view: e, tr: t, searchResults: n, searchResultCurrentClass: i, gotoIndex: a }) {
  const o = n[a];
  if (o) {
    const s = t.setMeta("directDecoration", {
      fromPos: o.from,
      toPos: o.to,
      attrs: { class: i }
    });
    return e == null || e.dispatch(s), setTimeout(() => {
      const l = window.document.querySelector(`.${i}`);
      l && He(l, { behavior: "smooth", scrollMode: "if-needed" });
    }, 0), !0;
  }
  return !1;
}
const si = k.create({
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
      button: ({ editor: t, t: n }) => ({
        component: ni,
        componentProps: {
          action: () => {
          },
          icon: "SearchAndReplace",
          tooltip: n("editor.searchAndReplace.tooltip"),
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
      setSearchTerm: (e) => ({ state: t, dispatch: n }) => (this.options.searchTerm = e, this.storage.results = [], this.storage.currentIndex = 0, D(R.SEARCH_REPLCE), te(t, n), !1),
      setReplaceTerm: (e) => ({ state: t, dispatch: n }) => (this.options.replaceTerm = e, te(t, n), !1),
      setCaseSensitive: (e) => ({ state: t, dispatch: n }) => (this.options.caseSensitive = e, te(t, n), !1),
      replace: () => ({ state: e, dispatch: t }) => {
        const { replaceTerm: n } = this.options, { currentIndex: i, results: a } = this.storage, o = a[i];
        return o ? ($e(n, [o], { state: e, dispatch: t }), this.storage.results.splice(i, 1)) : ($e(n, a, { state: e, dispatch: t }), this.storage.results.shift()), D(R.SEARCH_REPLCE), te(e, t), !1;
      },
      replaceAll: () => ({ state: e, tr: t, dispatch: n }) => {
        const { replaceTerm: i } = this.options, { results: a } = this.storage;
        return ri(i, a, { tr: t, dispatch: n }), this.storage.currentIndex = -1, this.storage.results = [], D(R.SEARCH_REPLCE), te(e, n), !1;
      },
      goToPrevSearchResult: () => ({ view: e, tr: t }) => {
        const { searchResultCurrentClass: n } = this.options, { currentIndex: i, results: a } = this.storage, o = (i + a.length - 1) % a.length;
        return this.storage.currentIndex = o, D(R.SEARCH_REPLCE), Fe({
          view: e,
          tr: t,
          searchResults: a,
          searchResultCurrentClass: n,
          gotoIndex: o
        });
      },
      goToNextSearchResult: () => ({ view: e, tr: t }) => {
        const { searchResultCurrentClass: n } = this.options, { currentIndex: i, results: a } = this.storage, o = (i + 1) % a.length;
        return this.storage.currentIndex = o, this.options.onChange && this.options.onChange(), D(R.SEARCH_REPLCE), Fe({
          view: e,
          tr: t,
          searchResults: a,
          searchResultCurrentClass: n,
          gotoIndex: o
        });
      }
    };
  },
  addProseMirrorPlugins() {
    const e = this;
    return [
      new ne({
        key: new V("search"),
        state: {
          init() {
            return ue.empty;
          },
          apply(t) {
            const { doc: n, docChanged: i } = t, { searchTerm: a, searchResultClass: o, searchResultCurrentClass: s, disableRegex: l, caseSensitive: u } = e.options;
            if (i || a) {
              const { decorationsToReturn: d, results: c } = ai(
                n,
                ii(a, l, u),
                o
              );
              if (e.storage.results = c, e.storage.currentIndex > c.length - 1 && (e.storage.currentIndex = 0), D(R.SEARCH_REPLCE), t.getMeta("directDecoration")) {
                const { fromPos: h, toPos: _, attrs: f } = t.getMeta("directDecoration");
                d.push(he.inline(h, _, f));
              } else
                c.length > 0 && (d[0] = he.inline(c[0].from, c[0].to, {
                  class: s
                }));
              return ue.create(n, d);
            }
            return ue.empty;
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
});
function li({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ r(
    $.Root,
    {
      className: ee(
        "richtext-bg-popover richtext-text-popover-foreground richtext-isolate richtext-flex richtext-h-full richtext-w-fit richtext-flex-col richtext-overflow-hidden richtext-rounded-md",
        e
      ),
      "data-slot": "emoji-picker",
      ...t
    }
  );
}
function ci({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ m(
    "div",
    {
      className: ee("richtext-flex richtext-h-9 richtext-items-center richtext-gap-2 richtext-border-b richtext-px-3", e),
      "data-slot": "emoji-picker-search-wrapper",
      children: [
        /* @__PURE__ */ r(qt, { className: "richtext-size-4 richtext-shrink-0 richtext-opacity-50" }),
        /* @__PURE__ */ r(
          $.Search,
          {
            className: "richtext-outline-hidden placeholder:richtext-text-muted-foreground richtext-flex richtext-h-10 richtext-w-full richtext-rounded-md richtext-bg-transparent richtext-py-3 richtext-text-sm disabled:richtext-cursor-not-allowed disabled:richtext-opacity-50",
            "data-slot": "emoji-picker-search",
            ...t
          }
        )
      ]
    }
  );
}
function di({ children: e, ...t }) {
  return /* @__PURE__ */ r("div", { ...t, className: "richtext-scroll-my-1 richtext-px-1", "data-slot": "emoji-picker-row", children: e });
}
function ui({
  emoji: e,
  className: t,
  ...n
}) {
  return /* @__PURE__ */ r(
    "button",
    {
      ...n,
      className: ee(
        "data-[active]:richtext-bg-accent richtext-flex richtext-size-7 richtext-items-center richtext-justify-center richtext-rounded-sm richtext-text-base",
        t
      ),
      "data-slot": "emoji-picker-emoji",
      children: e.emoji
    }
  );
}
function hi({
  category: e,
  ...t
}) {
  return /* @__PURE__ */ r(
    "div",
    {
      ...t,
      className: "richtext-bg-popover richtext-text-muted-foreground richtext-px-3 richtext-pb-2 richtext-pt-3.5 richtext-text-xs richtext-leading-none",
      "data-slot": "emoji-picker-category-header",
      children: e.label
    }
  );
}
function mi({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ m(
    $.Viewport,
    {
      className: ee("richtext-outline-hidden richtext-relative richtext-flex-1", e),
      "data-slot": "emoji-picker-viewport",
      ...t,
      children: [
        /* @__PURE__ */ r(
          $.Loading,
          {
            className: "richtext-absolute richtext-inset-0 richtext-flex richtext-items-center richtext-justify-center richtext-text-muted-foreground",
            "data-slot": "emoji-picker-loading",
            children: /* @__PURE__ */ r(Ut, { className: "richtext-size-4 richtext-animate-spin" })
          }
        ),
        /* @__PURE__ */ r(
          $.Empty,
          {
            className: "richtext-absolute richtext-inset-0 richtext-flex richtext-items-center richtext-justify-center richtext-text-muted-foreground richtext-text-sm",
            "data-slot": "emoji-picker-empty",
            children: "No emoji found."
          }
        ),
        /* @__PURE__ */ r(
          $.List,
          {
            className: "richtext-select-none richtext-pb-1",
            components: {
              Row: di,
              Emoji: ui,
              CategoryHeader: hi
            },
            "data-slot": "emoji-picker-list"
          }
        )
      ]
    }
  );
}
function _i({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ r(
    "div",
    {
      className: ee(
        "richtext-max-w-(--frimousse-viewport-width) richtext-flex richtext-w-full richtext-min-w-0 richtext-items-center richtext-gap-1 richtext-border-t richtext-p-2",
        e
      ),
      "data-slot": "emoji-picker-footer",
      ...t,
      children: /* @__PURE__ */ r($.ActiveEmoji, { children: ({ emoji: n }) => n ? /* @__PURE__ */ m(fe, { children: [
        /* @__PURE__ */ r("div", { className: "richtext-flex richtext-size-7 richtext-flex-none richtext-items-center richtext-justify-center richtext-text-lg", children: n.emoji }),
        /* @__PURE__ */ r("span", { className: "richtext-text-secondary-foreground richtext-truncate richtext-text-xs", children: n.label })
      ] }) : /* @__PURE__ */ r("span", { className: "richtext-text-muted-foreground richtext-ml-1.5 richtext-flex richtext-h-7 richtext-items-center richtext-truncate richtext-text-xs", children: "Select an emoji…" }) })
    }
  );
}
function fi({ onSelectEmoji: e, children: t }) {
  return /* @__PURE__ */ m(Y, { modal: !0, children: [
    /* @__PURE__ */ r(Q, { asChild: !0, children: t }),
    /* @__PURE__ */ r(
      X,
      {
        align: "start",
        className: "richtext-size-full richtext-p-2",
        hideWhenDetached: !0,
        side: "bottom",
        children: /* @__PURE__ */ m(
          li,
          {
            className: "!richtext-h-[342px]",
            onEmojiSelect: ({ emoji: n }) => {
              e(n);
            },
            children: [
              /* @__PURE__ */ r(ci, {}),
              /* @__PURE__ */ r(mi, {}),
              /* @__PURE__ */ r(_i, {})
            ]
          }
        )
      }
    )
  ] });
}
function gi({ editor: e, icon: t, ...n }) {
  const i = F(
    (a) => {
      const { selection: o } = e.state, { $anchor: s } = o;
      return e.chain().insertContentAt(s.pos, a).run();
    },
    [e]
  );
  return /* @__PURE__ */ r(fi, { onSelectEmoji: i, children: /* @__PURE__ */ r(
    x,
    {
      icon: t,
      tooltip: n == null ? void 0 : n.tooltip
    }
  ) });
}
const Qe = Ce((e, t) => {
  const n = U(null), [i, a] = v(0), { t: o } = z(), s = (c) => {
    const h = e.items[c];
    h && e.command(h);
  }, l = () => {
    a((i + e.items.length - 1) % e.items.length);
  }, u = () => {
    a((i + 1) % e.items.length);
  }, d = () => {
    s(i);
  };
  return S(() => a(0), [e.items]), S(() => {
    if (Number.isNaN(i + 1))
      return;
    const c = n.current.querySelector(`span:nth-of-type(${i + 1})`);
    c && He(c, { behavior: "smooth", scrollMode: "if-needed" });
  }, [i]), Ae(t, () => ({
    onKeyDown: ({ event: c }) => c.key === "ArrowUp" ? (l(), !0) : c.key === "ArrowDown" ? (u(), !0) : c.key === "Enter" ? (d(), !0) : !1
  })), /* @__PURE__ */ r("div", { className: "richtext-max-h-[320px] richtext-w-[200px] richtext-overflow-y-auto richtext-overflow-x-hidden richtext-rounded-sm !richtext-border richtext-bg-popover richtext-p-1 richtext-text-popover-foreground richtext-shadow-md richtext-outline-none", children: /* @__PURE__ */ r("div", { ref: n, children: e.items.length > 0 ? e.items.map((c, h) => /* @__PURE__ */ m(
    "span",
    {
      className: j(" richtext-relative richtext-flex  richtext-cursor-default richtext-select-none richtext-items-center richtext-rounded-sm richtext-px-2 richtext-py-1.5 richtext-text-sm richtext-outline-none richtext-transition-colors hover:richtext-bg-accent focus:richtext-bg-accent  focus:richtext-text-accent-foreground", h === i ? "bg-accent" : ""),
      onClick: () => s(h),
      children: [
        c.fallbackImage ? /* @__PURE__ */ r(
          "img",
          {
            className: "richtext-size-[1em]",
            src: c.fallbackImage
          }
        ) : c.emoji,
        ":",
        c.name,
        ":"
      ]
    },
    `emoji-list-code-${h}`
  )) : /* @__PURE__ */ r("div", { className: "richtext-relative richtext-flex  richtext-cursor-default richtext-select-none richtext-items-center richtext-rounded-sm richtext-px-2 richtext-py-1.5 richtext-text-sm richtext-outline-none richtext-transition-colors", children: /* @__PURE__ */ r("span", { children: o("no_result_found") }) }) }) });
});
Qe.displayName = "EmojiList";
const K = {
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
Object.keys(K).reduce((e, t) => {
  const n = K[t];
  return e[n] = t, e;
}, {});
const bi = Object.keys(K).map((e) => e);
Object.keys(K).map((e) => K[e]);
function xi(e) {
  return bi.filter((t) => t.startsWith(e)).map((t) => ({
    name: t,
    emoji: K[t]
  }));
}
const wi = 200, pi = new V("emoji"), Ba = me.create({
  name: "emoji",
  content: "text*",
  priority: wi,
  addOptions() {
    var e;
    return {
      ...(e = this.parent) == null ? void 0 : e.call(this),
      HTMLAttributes: {},
      suggestion: {
        char: ":",
        pluginKey: pi,
        command: ({ editor: t, range: n, props: i }) => {
          t.chain().focus().insertContentAt(n, `${i.emoji} `).run();
        }
      },
      button: ({ editor: t, t: n }) => ({
        component: gi,
        componentProps: {
          editor: t,
          action: () => {
          },
          isActive: () => !1,
          disabled: !1,
          icon: "EmojiIcon",
          tooltip: n("editor.emoji.tooltip")
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
      Ke({
        editor: this.editor,
        ...this.options.suggestion
      })
    ];
  }
}).configure({
  suggestion: {
    items: ({ query: e }) => xi(e),
    render: () => {
      let e, t, n;
      return {
        onStart: (i) => {
          n = i.editor.isEditable, n && (e = new ve(Qe, {
            props: i,
            editor: i.editor
          }), t = Ee("body", {
            getReferenceClientRect: i.clientRect,
            appendTo: () => document.body,
            content: e.element,
            showOnCreate: !0,
            interactive: !0,
            trigger: "manual",
            placement: "bottom-start"
          }));
        },
        onUpdate(i) {
          n && (e.updateProps(i), t[0].setProps({
            getReferenceClientRect: i.clientRect
          }));
        },
        onKeyDown(i) {
          var a;
          if (n)
            return i.event.key === "Escape" ? (t[0].hide(), !0) : (a = e.ref) == null ? void 0 : a.onKeyDown(i);
        },
        onExit() {
          n && (t[0].destroy(), e.destroy());
        }
      };
    }
  }
});
function yi(e) {
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
  const n = t.contentWindow, i = t.contentDocument || t.contentWindow && t.contentWindow.document, a = document.createElement("link");
  a.rel = "stylesheet", a.href = "https://cdn.jsdelivr.net/npm/reactjs-tiptap-editor@latest/lib/style.css", i.head.appendChild(a), i && (i.open(), i.write(e), i.close()), n && t.addEventListener("load", function() {
    try {
      setTimeout(() => {
        n.focus();
        try {
          n.document.execCommand("print", !1) || n.print();
        } catch {
          n.print();
        }
        n.close();
      }, 10);
    } catch (o) {
      console.error(o);
    }
    setTimeout(() => {
      document.body.removeChild(t);
    }, 100);
  });
}
function vi(e) {
  const t = e.getHTML();
  return t ? (yi(t), !0) : !1;
}
const $a = k.create({
  name: "exportPdf",
  addOptions() {
    var e;
    return {
      ...(e = this.parent) == null ? void 0 : e.call(this),
      button: ({ editor: t, t: n }) => ({
        component: x,
        componentProps: {
          action: () => {
            vi(t);
          },
          icon: "ExportPdf",
          tooltip: n("editor.exportPdf.tooltip"),
          isActive: () => !1,
          disabled: !1
        }
      })
    };
  }
});
function ki(e, t) {
  const n = atob(e.split(",")[1]), i = Array.from({ length: n.length });
  for (let o = 0; o < n.length; o++)
    i[o] = n.charCodeAt(o);
  const a = new Uint8Array(i);
  return new Blob([a], { type: t });
}
function Ci(e, t) {
  return new File([e], t, { type: e.type });
}
function Ai(e) {
  const { toast: t } = cn(), { t: n } = z(), [i, a] = v(!1), o = U(null);
  function s() {
    var h;
    (h = o.current) == null || h.click();
  }
  function l(h) {
    const _ = h.target.files[0];
    if (_) {
      if (_.size > e.limit) {
        t({
          variant: "destructive",
          title: n("editor.importWord.limitSize")
        });
        return;
      }
      d(_);
    }
  }
  async function u(h) {
    var E;
    const f = new DOMParser().parseFromString(h, "text/html"), A = f.querySelectorAll("img");
    if (A.length === 0)
      return f.body.innerHTML;
    if (dn(e.editor, "image")) {
      const N = (E = e.editor.extensionManager.extensions.find(
        (g) => g.name === "importWord"
      )) == null ? void 0 : E.options;
      if (N && typeof N.upload == "function") {
        const g = [];
        for (const y of A) {
          const L = y.getAttribute("src"), T = ki(L, "image/jpeg"), I = Ci(T, "image.jpeg");
          g.push(I);
        }
        const b = await N.upload(g);
        for (const [y, L] of A.entries()) {
          L.setAttribute("src", b[y].src);
          const T = L.parentElement;
          (T == null ? void 0 : T.tagName) === "P" && (T.insertAdjacentElement("beforebegin", L), !T.hasChildNodes() && T.textContent === "" && T.remove());
        }
        return f.body.innerHTML;
      } else
        return console.warn("Image Upload method found, skip image conversion"), f.body.innerHTML;
    } else
      return console.error("Image extension not found, unable to convert image"), f.body.innerHTML;
  }
  async function d(h) {
    a(!0);
    try {
      if (e.convert) {
        const _ = await e.convert(h);
        c(_);
      } else {
        const _ = await h.arrayBuffer(), { value: f } = await Bt.convertToHtml(
          { arrayBuffer: _ },
          e == null ? void 0 : e.mammothOptions
        );
        c(f);
      }
    } finally {
      a(!1);
    }
  }
  async function c(h) {
    const _ = await u(h);
    e.editor.chain().setContent(_, !0).run();
  }
  return /* @__PURE__ */ m("div", { children: [
    /* @__PURE__ */ r(
      x,
      {
        action: s,
        disabled: e == null ? void 0 : e.disabled,
        icon: e == null ? void 0 : e.icon,
        loading: i,
        tooltip: e == null ? void 0 : e.tooltip
      }
    ),
    /* @__PURE__ */ r(
      "input",
      {
        accept: ".docx",
        onChange: l,
        ref: o,
        type: "file",
        style: {
          display: "none"
        }
      }
    )
  ] });
}
const Fa = k.create({
  name: "importWord",
  addOptions() {
    var e;
    return {
      ...(e = this.parent) == null ? void 0 : e.call(this),
      upload: void 0,
      convert: void 0,
      limit: 1024 * 1024 * 10,
      // 10 MB
      button: ({ editor: t, extension: n, t: i }) => {
        const { convert: a, limit: o, mammothOptions: s } = n.options;
        return {
          component: Ai,
          componentProps: {
            editor: t,
            convert: a,
            limit: o,
            mammothOptions: s,
            action: () => t.commands.setHorizontalRule(),
            disabled: !t.can().setHorizontalRule(),
            icon: "Word",
            shortcutKeys: ["alt", "mod", "S"],
            tooltip: i("editor.importWord.tooltip")
          }
        };
      }
    };
  }
}), Ti = typeof window < "u";
function Ni(e, t) {
  if (Ti) {
    const n = window.URL.createObjectURL(e), i = document.createElement("a");
    return i.href = n, i.download = t, i.click(), window.URL.revokeObjectURL(n), Promise.resolve();
  }
  return console.error("Download is not supported in Node.js"), Promise.resolve();
}
const Li = {
  ...q,
  hardBreak: q.hard_break,
  orderedList: q.ordered_list,
  listItem: q.list_item,
  bulletList: q.bullet_list,
  horizontalRule: q.horizontal_rule,
  // Requirement Buffer on browser
  image(e, t) {
    e.renderInline(t), e.closeBlock(t);
  },
  table(e, t) {
    e.table(t, {
      tableOptions: {
        width: {
          size: 100,
          type: yn.PERCENTAGE
        }
      }
    });
  }
}, Si = new vn(Li, kn), qa = k.create({
  name: "exportWord",
  addOptions() {
    var e;
    return {
      ...(e = this.parent) == null ? void 0 : e.call(this),
      button: ({ editor: t, t: n }) => ({
        component: x,
        componentProps: {
          icon: "ExportWord",
          action: () => {
            t == null || t.commands.exportToWord();
          },
          tooltip: n("editor.exportWord.tooltip"),
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
          getImageBuffer: async (i) => {
            const o = await (await fetch(i)).arrayBuffer();
            return new Uint8Array(o);
          }
        }, n = Si.serialize(e.state.doc, t);
        return pn.toBlob(n).then((i) => Ni(new Blob([i]), "export-document.docx")), !0;
      }
    };
  }
}), Ei = "_toc_aag8a_1", Hi = "_visible_aag8a_7", zi = "_list_aag8a_11", Mi = "_item_aag8a_16", le = {
  toc: Ei,
  visible: Hi,
  list: zi,
  item: Mi
};
function Ri(e) {
  const t = [], n = [t];
  return e.forEach((i) => {
    let a = -1, o = n[i.level + a];
    for (; !o; )
      a -= 1, o = n[i.level + a];
    o.push({ ...i, children: n[i.level] = [] });
  }), t;
}
function Pi({ editor: e }) {
  const t = Ze(), [n, i] = v([]), { t: a } = z(), o = F(() => {
    const s = [], l = e.state.tr;
    e.state.doc.descendants((u, d) => {
      if (u.type.name === "heading") {
        const c = `heading-${s.length + 1}`;
        u.attrs.id !== c && l.setNodeMarkup(d, void 0, {
          ...u.attrs,
          id: c
        }), s.push({
          level: u.attrs.level,
          text: u.textContent,
          id: c
        });
      }
    }), l.setMeta("addToHistory", !1), l.setMeta("preventUpdate", !0), e.view.dispatch(l), i(s), e.eventEmitter && e.eventEmitter.emit("TableOfContents", Ri(s));
  }, [e]);
  return S(() => {
    if (e) {
      if (!e.options.editable) {
        o();
        return;
      }
      return e.on("update", o), () => {
        e.off("update", o);
      };
    }
  }, [e, o]), S(() => {
    o();
  }, []), /* @__PURE__ */ r(de, { className: j("tableOfContent", le.toc, t && le.visible), children: t ? /* @__PURE__ */ m("div", { style: { position: "relative" }, children: [
    /* @__PURE__ */ r("p", { className: "text-[20px] richtext-mb-[8px] richtext-font-semibold", children: a("editor.table_of_content") }),
    /* @__PURE__ */ r("ul", { className: le.list, children: n.map((s, l) => /* @__PURE__ */ r(
      "li",
      {
        className: le.item,
        style: { paddingLeft: `${s.level - 1}rem` },
        children: /* @__PURE__ */ r("a", { href: `#${s.id}`, children: s.text })
      },
      `table-of-content-${l}`
    )) })
  ] }) : null });
}
function Ii(e, ...t) {
  const [n, i] = v(!1);
  return S(() => {
    const a = () => {
      i(e.isActive.apply(e, t));
    };
    return e.on("selectionUpdate", a), e.on("transaction", a), () => {
      e.off("selectionUpdate", a), e.off("transaction", a);
    };
  }, [e, t, i]), n;
}
function ji({ editor: e, icon: t, tooltip: n }) {
  const i = Ii(e, Bi.name), a = F(() => {
    if (i) {
      e.chain().focus().removeTableOfContents().run();
      return;
    }
    e.chain().focus().setTableOfContents().run();
  }, [e, i]);
  return /* @__PURE__ */ r(
    x,
    {
      action: a,
      isActive: () => i || !1,
      icon: t,
      tooltip: n
    }
  );
}
function Oi(e) {
  return e && e.type.name === "title";
}
function Di(e, t) {
  const i = [e.getJSON()], a = [];
  for (; i.length > 0; ) {
    const o = i.shift();
    o.type === t && a.push(o), o.content && o.content.length > 0 && i.push(...o.content);
  }
  return a;
}
const Bi = me.create({
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
      button: ({ editor: t, t: n }) => ({
        component: ji,
        componentProps: {
          disabled: !1,
          icon: "BookMarked",
          tooltip: n("editor.table.tooltip"),
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
    return ["toc", _e(e)];
  },
  addNodeView() {
    return Ve(Pi);
  },
  // @ts-expect-error
  addCommands() {
    return {
      setTableOfContents: () => ({ commands: e, editor: t, view: n }) => {
        if (Di(t, this.name).length > 0) {
          this.options.onHasOneBeforeInsert();
          return;
        }
        const a = n.props.state.doc.content.firstChild;
        if (Oi(a)) {
          const o = (a.firstChild && a.firstChild.nodeSize || 0) + 1;
          return e.insertContentAt(o, { type: this.name });
        }
        return e.insertContent({
          type: this.name
        });
      },
      removeTableOfContents: () => ({ state: e, dispatch: t }) => {
        const { tr: n } = e, i = e.schema.nodes.tableOfContents;
        return e.doc.descendants((a, o) => {
          if (a.type === i) {
            const s = o, l = o + a.nodeSize;
            n.delete(s, l);
          }
        }), n.docChanged ? (t(n), !0) : !1;
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
function $i(e) {
  var n;
  const t = P(() => {
    var o;
    const i = (o = e == null ? void 0 : e.items) == null ? void 0 : o.find((s) => s.isActive());
    return i && !i.default ? {
      ...i,
      icon: i.icon ? i.icon : e.icon
    } : {
      title: e == null ? void 0 : e.tooltip,
      icon: e.icon,
      isActive: () => !1
    };
  }, [e]);
  return /* @__PURE__ */ m(Y, { modal: !0, children: [
    /* @__PURE__ */ r(
      Q,
      {
        asChild: !0,
        disabled: e == null ? void 0 : e.disabled,
        children: /* @__PURE__ */ r(
          x,
          {
            customClass: "!richtext-w-12 richtext-h-12",
            disabled: e == null ? void 0 : e.disabled,
            icon: e == null ? void 0 : e.icon,
            tooltip: e == null ? void 0 : e.tooltip,
            children: /* @__PURE__ */ r(
              H,
              {
                className: "richtext-ml-1 richtext-size-3 richtext-text-zinc-500",
                name: "MenuDown"
              }
            )
          }
        )
      }
    ),
    /* @__PURE__ */ r(
      X,
      {
        align: "start",
        className: "richtext-flex richtext-w-full richtext-min-w-4 richtext-flex-row richtext-gap-1 !richtext-p-[4px]",
        side: "bottom",
        children: (n = e == null ? void 0 : e.items) == null ? void 0 : n.map((i, a) => {
          var o, s;
          return /* @__PURE__ */ m(ge, { children: [
            /* @__PURE__ */ r(be, { asChild: !0, children: /* @__PURE__ */ r(
              Se,
              {
                className: "richtext-size-7 richtext-p-1",
                "data-state": t.title === i.title ? "on" : "off",
                onClick: i == null ? void 0 : i.action,
                pressed: t.title === i.title,
                size: "sm",
                children: (i == null ? void 0 : i.icon) && /* @__PURE__ */ r(H, { name: i.icon })
              }
            ) }),
            /* @__PURE__ */ m(xe, { className: "richtext-flex richtext-flex-col richtext-items-center", children: [
              /* @__PURE__ */ r("span", { children: i.title }),
              !!((o = i.shortcutKeys) != null && o.length) && /* @__PURE__ */ r("span", { children: (s = i.shortcutKeys) == null ? void 0 : s.map((l) => Le(l)).join(" ") })
            ] })
          ] }, `text-align-${a}`);
        })
      }
    )
  ] });
}
const Ua = k.create({
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
        extension: n,
        t: i
      }) {
        var u;
        const a = ((u = n.options) == null ? void 0 : u.directions) || [], o = {
          auto: "TextDirection",
          ltr: "LeftToRight",
          rtl: "RightToLeft"
        }, s = a.map((d) => ({
          title: i(`editor.textDirection.${d}.tooltip`),
          icon: o[d],
          isActive: () => !1,
          action: () => {
            var c, h, _, f;
            if (d === "auto") {
              (h = (c = t.commands) == null ? void 0 : c.unsetTextDirection) == null || h.call(c);
              return;
            }
            (f = (_ = t.commands) == null ? void 0 : _.setTextDirection) == null || f.call(_, d);
          },
          disabled: !1
        })), l = s.filter((d) => d.disabled).length === s.length;
        return {
          component: $i,
          componentProps: {
            icon: "TextDirection",
            tooltip: i("editor.textDirection.tooltip"),
            disabled: l,
            items: s
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
      setTextDirection: (e) => ({ commands: t }) => this.options.directions.includes(e) ? this.options.types.every((n) => t.updateAttributes(n, { dir: e })) : !1,
      unsetTextDirection: () => ({ commands: e }) => this.options.types.every((t) => e.resetAttributes(t, "dir"))
    };
  }
}), Fi = "_listUsers_en3pm_1", qi = "_itemUser_en3pm_10", Ui = "_selectedUser_en3pm_31", ce = {
  listUsers: Fi,
  itemUser: qi,
  selectedUser: Ui
}, Ki = Ce((e, t) => {
  const n = U(null), [i, a] = v(0), o = (d) => {
    const c = e.items[d];
    c && e.command({ id: c, label: c });
  }, s = () => {
    a((i + e.items.length - 1) % e.items.length);
  }, l = () => {
    a((i + 1) % e.items.length);
  }, u = () => {
    o(i);
  };
  return S(() => a(0), [e.items]), S(() => {
    if (Number.isNaN(i + 1))
      return;
    const d = n.current.querySelector(`span:nth-of-type(${i + 1})`);
    d && He(d, { behavior: "smooth", scrollMode: "if-needed" });
  }, [i]), Ae(t, () => ({
    onKeyDown: ({ event: d }) => d.key === "ArrowUp" ? (s(), !0) : d.key === "ArrowDown" ? (l(), !0) : d.key === "Enter" ? (u(), !0) : !1
  })), /* @__PURE__ */ r("div", { className: j("listUsers", ce.listUsers), children: /* @__PURE__ */ r("div", { ref: n, children: e.items.length > 0 ? e.items.map((d, c) => /* @__PURE__ */ r(
    "span",
    {
      className: j("itemUser", ce.itemUser, c === i ? ce.selectedUser : ""),
      onClick: () => o(c),
      children: d
    },
    c
  )) : /* @__PURE__ */ r("div", { className: j("itemUserEmpty", ce.itemUser), children: "Empty" }) }) });
}), Vi = [
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
], Wi = {
  items: async ({ query: e }) => Vi.map((n) => n.name).filter((n) => n.toLowerCase().startsWith(e.toLowerCase())),
  render: () => {
    let e, t;
    return {
      onStart: (n) => {
        e = new ve(Ki, {
          props: n,
          editor: n.editor
        }), t = Ee("body", {
          getReferenceClientRect: n.clientRect,
          appendTo: () => document.body,
          content: e.element,
          showOnCreate: !0,
          interactive: !0,
          trigger: "manual",
          placement: "bottom-start"
        });
      },
      onUpdate(n) {
        e.updateProps(n), t[0].setProps({
          getReferenceClientRect: n.clientRect
        });
      },
      onKeyDown(n) {
        var i;
        return n.event.key === "Escape" ? (t[0].hide(), !0) : (i = e.ref) == null ? void 0 : i.onKeyDown(n);
      },
      onExit() {
        t[0].destroy(), e.destroy();
      }
    };
  }
}, Ka = Pt.extend({
  addAttributes() {
    return {
      id: {
        default: "",
        parseHTML: M("id")
      },
      label: {
        default: "",
        parseHTML: M("label")
      }
    };
  }
}).configure({
  HTMLAttributes: {
    class: "mention"
  },
  suggestion: Wi
}), Gi = {
  audio: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-audio-lines"><path d="M2 10v3"/><path d="M6 6v11"/><path d="M10 3v18"/><path d="M14 8v7"/><path d="M18 5v13"/><path d="M22 10v3"/></svg>',
  video: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-video"><path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5"/><rect x="2" y="6" width="14" height="12" rx="2"/></svg>',
  file: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-file"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/></svg>',
  image: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-image"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/></svg>',
  pdf: `<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 32 32">
      <path fill="currentColor" d="M30 18v-2h-6v10h2v-4h3v-2h-3v-2zm-11 8h-4V16h4a3.003 3.003 0 0 1 3 3v4a3.003 3.003 0 0 1-3 3m-2-2h2a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-2zm-6-8H6v10h2v-3h3a2.003 2.003 0 0 0 2-2v-3a2 2 0 0 0-2-2m-3 5v-3h3l.001 3z"></path>
      <path fill="currentColor" d="M22 14v-4a.91.91 0 0 0-.3-.7l-7-7A.9.9 0 0 0 14 2H4a2.006 2.006 0 0 0-2 2v24a2 2 0 0 0 2 2h16v-2H4V4h8v6a2.006 2.006 0 0 0 2 2h6v2Zm-8-4V4.4l5.6 5.6Z"></path>
    </svg>`,
  word: `<svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      className="icon"
      viewBox="0 0 1024 1024"
    >
      <path
        fill="currentColor"
        d="M679.253 402.364 618.77 561.015l-60.348-158.651a30.04 30.04 0 0 0-30.447-18.637 29.76 29.76 0 0 0-30.447 18.637l-60.416 158.651-60.416-158.651a30.515 30.515 0 0 0-38.843-17.272 28.945 28.945 0 0 0-17.954 37.547l88.815 233.267c4.369 11.469 15.7 19.115 28.398 19.115a30.31 30.31 0 0 0 28.468-19.115l62.395-163.908 62.396 163.84c4.437 11.605 15.701 19.183 28.4 19.183a30.31 30.31 0 0 0 28.466-19.115l88.747-233.267a28.945 28.945 0 0 0-17.886-37.547 30.447 30.447 0 0 0-38.912 17.272zm219.478 395.605-51.883-29.218c-28.672-16.18-52.224-3.072-52.224 29.082v.273H643.209a29.833 29.833 0 0 0-30.31 29.354c0 16.18 13.584 29.218 30.31 29.218h151.825c1.092 30.516 24.03 43.077 52.224 27.648l51.063-27.989c29.013-15.906 29.15-42.189.41-58.368"
      />
      <path
        fill="currentColor"
        d="m810.667 913.135-.478.068H201.796c-19.865 0-36.727-11.673-36.727-25.6v-618.36h154.965c51.268 0 92.911-39.39 92.911-87.858v-87.86H810.19c19.797 0 36.522 11.742 36.522 25.669V739.26h61.987V119.262c0-46.421-44.169-84.241-98.51-84.241H328.364l-225.28 194.56v658.09c0 46.285 44.236 84.105 98.713 84.105H810.19c43.759 0 80.554-24.713 93.32-58.573h-92.842zM350.89 94.89v86.562c0 16.11-13.858 29.286-30.925 29.286H216.815L350.959 94.891z"
      />
    </svg>`,
  excel: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-sheet"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><line x1="3" x2="21" y1="9" y2="9"/><line x1="3" x2="21" y1="15" y2="15"/><line x1="9" x2="9" y1="9" y2="21"/><line x1="15" x2="15" y1="9" y2="21"/></svg>',
  ppt: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-table-properties"><path d="M15 3v18"/><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M21 9H3"/><path d="M21 15H3"/></svg>'
};
function Zi(e) {
  const t = Gi[e], a = new DOMParser().parseFromString(t, "image/svg+xml").documentElement, o = [
    "svg",
    {
      ...Array.from(a.attributes).reduce((s, l) => (s[l.name] = l.value, s), {})
    }
  ];
  return Array.from(a.childNodes).forEach((s) => {
    if (s.nodeType === 1) {
      const l = [
        s.tagName.toLowerCase(),
        Array.from(s.attributes).reduce((u, d) => (u[d.name] = d.value, u), {})
      ];
      s.textContent && l.push(s.textContent), o.push(l);
    }
  }), o;
}
const Ji = {
  audio: /* @__PURE__ */ r(Jt, {}),
  video: /* @__PURE__ */ r(Zt, {}),
  file: /* @__PURE__ */ r(Gt, {}),
  image: /* @__PURE__ */ r(Wt, {}),
  pdf: /* @__PURE__ */ r(mn, {}),
  word: /* @__PURE__ */ r(hn, {}),
  excel: /* @__PURE__ */ r(Vt, {}),
  ppt: /* @__PURE__ */ r(Kt, {})
};
function Xe(e, t = !1) {
  const n = un(e), i = Ji[n] || /* @__PURE__ */ r(fe, {});
  return t ? Zi(n) : i;
}
const Yi = "_wrap_1x1ms_2", pe = {
  wrap: Yi
};
function Qi({ editor: e, node: t, updateAttributes: n, deleteNode: i, extension: a }) {
  var L;
  const o = U(null), s = Ze(), { hasTrigger: l, fileName: u, fileSize: d, fileExt: c, fileType: h, url: _, error: f } = t.attrs, [A, p] = v(!1), { t: E } = z(), N = (L = a == null ? void 0 : a.options) == null ? void 0 : L.upload, g = F(() => {
    !s || _ || s && o.current.click();
  }, [s, _]), b = F(
    async (T) => {
      const I = T.target.files && T.target.files[0];
      if (!I)
        return;
      const et = {
        fileName: fn(I.name),
        fileSize: I.size,
        fileType: I.type,
        fileExt: _n(I.name)
      };
      p(!0);
      try {
        const ie = await N(I);
        n({ ...et, url: ie }), p(!1);
      } catch (ie) {
        n({ error: `File upload fail: ${ie && ie.message}` || "Unknown error" }), p(!1), o.current.value = "";
      }
    },
    [p, n]
  );
  S(() => {
    !_ && !l && (g(), n({ hasTrigger: !0 }));
  }, [_, l, g, n]);
  const y = F(() => i(), [e]);
  return s && !_ ? /* @__PURE__ */ r(de, { children: /* @__PURE__ */ m("div", { className: j(pe.wrap, "render-wrapper"), children: [
    /* @__PURE__ */ r(
      "p",
      {
        onClick: g,
        style: { cursor: "pointer" },
        children: A ? /* @__PURE__ */ r("span", { children: E("editor.attachment.uploading") }) : /* @__PURE__ */ r("span", { children: E("editor.attachment.please_upload") })
      }
    ),
    /* @__PURE__ */ r(
      "input",
      {
        hidden: !0,
        onChange: b,
        ref: o,
        type: "file"
      }
    )
  ] }) }) : _ ? /* @__PURE__ */ r(de, { children: /* @__PURE__ */ m(
    "div",
    {
      className: j(pe.wrap, "render-wrapper"),
      onClick: g,
      children: [
        /* @__PURE__ */ m("div", { className: "richtext-flex richtext-items-center richtext-gap-[4px]", children: [
          /* @__PURE__ */ r("span", { children: Xe(h) }),
          /* @__PURE__ */ m("span", { children: [
            u,
            ".",
            c
          ] }),
          /* @__PURE__ */ m("span", { children: [
            "(",
            Je(d),
            ")"
          ] })
        ] }),
        /* @__PURE__ */ r(
          x,
          {
            action: y,
            icon: "Trash2",
            tooltip: E("editor.delete")
          }
        )
      ]
    }
  ) }) : f !== "null" ? /* @__PURE__ */ r(de, { children: /* @__PURE__ */ r(
    "div",
    {
      className: j(pe.wrap, "render-wrapper"),
      onClick: g,
      children: /* @__PURE__ */ r("p", { children: f })
    }
  ) }) : /* @__PURE__ */ r(fe, {});
}
const Va = me.create({
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
      button: ({ editor: t, t: n }) => ({
        component: x,
        componentProps: {
          action: () => t.chain().focus().setAttachment().run(),
          isActive: () => !1,
          disabled: !1,
          icon: "Attachment",
          tooltip: n("editor.attachment.tooltip")
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
      fileName: n = "",
      fileSize: i = "",
      fileType: a = "",
      fileExt: o = ""
    } = e || {};
    return [
      "div",
      _e(
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
          Xe(a, !0)
        ],
        [
          "span",
          { class: "attachment__text" },
          `${n}.${o} (${Je(i)})`
        ]
      ] : ["div", { class: "attachment__placeholder" }]
    ];
  },
  addAttributes() {
    return {
      fileName: {
        default: null,
        parseHTML: M("filename")
      },
      fileSize: {
        default: null,
        parseHTML: M("filesize")
      },
      fileType: {
        default: null,
        parseHTML: M("filetype")
      },
      fileExt: {
        default: null,
        parseHTML: M("fileext")
      },
      url: {
        default: null,
        parseHTML: M("url")
      },
      hasTrigger: {
        default: !1,
        parseHTML: (e) => M("hastrigger")(e) === "true"
      },
      error: {
        default: null,
        parseHTML: M("error")
      }
    };
  },
  addCommands() {
    return {
      setAttachment: (e = {}) => ({ chain: t }) => t().insertContent({ type: this.name, attrs: e }).run()
    };
  },
  addNodeView() {
    return Ve(Qi);
  }
});
export {
  Va as Attachment,
  za as BaseKit,
  Na as Blockquote,
  ha as Bold,
  ka as BulletList,
  Ca as Clear,
  ga as Code,
  ya as Color,
  tn as Column,
  Ha as ColumnActionButton,
  Za as Drawer,
  Ba as Emoji,
  $a as ExportPdf,
  qa as ExportWord,
  ba as FontFamily,
  pa as FontSize,
  Da as FormatPainter,
  xa as Heading,
  va as Highlight,
  Ea as History,
  Sa as HorizontalRule,
  Ja as Iframe,
  on as Image,
  Ya as ImageGif,
  Fa as ImportWord,
  Pa as Indent,
  ma as Italic,
  Ia as LineHeight,
  La as Link,
  Ka as Mention,
  Ra as MoreMark,
  nn as MultiColumn,
  Aa as OrderedList,
  si as SearchAndReplace,
  ja as SlashCommand,
  fa as Strike,
  Ma as SubAndSuperScript,
  Oa as Table,
  Bi as TableOfContents,
  Ta as TaskList,
  wa as TextAlign,
  Ua as TextDirection,
  Qa as Twitter,
  _a as Underline,
  sn as Video
};
