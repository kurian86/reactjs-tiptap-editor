import { a as ft, I as _t, U as gt, S as bt, C as xt, N as ae, b as oe, t as qe, R as Le, m as re, F as wt, H as pt, T as yt, E as C, c as vt, d as kt, e as Ct, O as Nt, f as At, g as Tt, h as St, L as Lt, i as Et, j as Ht, k as zt, D as Mt, P as Rt, l as It, n as Pt, G as jt, o as Bt, p as Ot, q as Dt, r as $t, s as Ft, u as qt, v as nt, w as it, x as at, y as Ee, z as Ut, A as Kt, J as Vt, K as Wt, M as Gt } from "./tiptap-_qvIMDJV.js";
import { u as I, D as Zt, f as Jt, g as Ue, h as N, i as ot, j as Yt, T as le, k as de, m as ue } from "./index-DrJ7ZwCA.js";
import { i as He, T as xe, a as we, B as K, b as pe, g as ze, A as x, c as E, u as Me, j as Qt, k as A, l as Z, m as J, n as Y, o as Q, p as rt, q as Ne, r as Xt, s as Re, P as X, t as ee, v as te, w as Ie, x as en, H as tn, L as nn, C as an, M as on, y as rn, z as Ke, E as he, F as U, G as j, I as sn, J as cn, V as ln, N as Ve, O as ve, Q as We, S as dn, U as un, W as hn, X as P, Y as mn, Z as fn, _ as _n, $ as gn, a0 as bn, a1 as st } from "./RichTextEditor-mDecCUMp.js";
import { D as Lo, d as Eo, e as Ho, K as zo, f as Mo, h as Ro } from "./RichTextEditor-mDecCUMp.js";
import { al as xn, am as wn, an as pn, ao as yn, ap as vn, aq as kn, ar as Cn, as as Nn, at as R, au as An, P as se, T as ct, b as ne, $ as ge, a0 as be, A as Tn, a4 as Sn, av as Ln, aw as En } from "./vendor-CqaRYD3r.js";
import Pe from "tippy.js";
import { Packer as Hn, WidthType as zn } from "docx";
import { DocxSerializer as Mn, defaultNodes as F, defaultMarks as Rn } from "prosemirror-docx";
import { jsxs as m, jsx as o, Fragment as ye } from "react/jsx-runtime";
import * as W from "react";
import In, { useRef as $, useCallback as D, useEffect as T, useMemo as B, Fragment as je, useState as k, forwardRef as Be, useImperativeHandle as Oe } from "react";
import * as v from "@radix-ui/react-select";
import { ChevronDown as De, Check as Pn, ChevronUp as jn, SearchIcon as Bn, LoaderIcon as On, LucideTableProperties as Dn, LucideSheet as $n, LucideImage as Fn, LucideFile as qn, LucideVideo as Un, LucideAudioLines as Kn } from "lucide-react";
import { Slot as Vn } from "@radix-ui/react-slot";
import $e from "scroll-into-view-if-needed";
import { EmojiPicker as V } from "frimousse";
const Fe = In.forwardRef(
  ({ asChild: e, ...t }, n) => {
    var r;
    const i = He[t.icon];
    return /* @__PURE__ */ m(xe, { children: [
      /* @__PURE__ */ o(we, { asChild: !0, children: /* @__PURE__ */ o(
        e ? Vn : K,
        {
          className: "richtext-h-[32px] richtext-min-w-24 richtext-overflow-hidden richtext-px-[5px]  richtext-py-0",
          disabled: t == null ? void 0 : t.disabled,
          ref: n,
          variant: "ghost",
          ...t,
          children: /* @__PURE__ */ m("div", { className: "richtext-flex richtext-h-full richtext-items-center richtext-font-normal", children: [
            (t == null ? void 0 : t.title) && /* @__PURE__ */ o("div", { className: "richtext-grow richtext-truncate richtext-text-left richtext-text-sm", children: t == null ? void 0 : t.title }),
            i && /* @__PURE__ */ o(i, { className: "richtext-ml-1 richtext-size-3 richtext-shrink-0 richtext-text-zinc-500" })
          ] })
        }
      ) }),
      /* @__PURE__ */ o(pe, { children: /* @__PURE__ */ m("div", { className: "richtext-flex richtext-max-w-24 richtext-flex-col richtext-items-center richtext-text-center", children: [
        (t == null ? void 0 : t.tooltip) && /* @__PURE__ */ o("div", { children: t == null ? void 0 : t.tooltip }),
        /* @__PURE__ */ o("div", { className: "richtext-flex", children: !!((r = t == null ? void 0 : t.shortcutKeys) != null && r.length) && /* @__PURE__ */ o("span", { children: ze(t == null ? void 0 : t.shortcutKeys) }) })
      ] }) })
    ] });
  }
), Ka = ft.extend({
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
}), Va = _t.extend({
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
}), Wa = gt.extend({
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
}), Ga = bt.extend({
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
}), Za = xt.extend({
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
function Wn({ action: e, ...t }) {
  return /* @__PURE__ */ o(
    x,
    {
      action: e,
      disabled: t == null ? void 0 : t.disabled,
      icon: t == null ? void 0 : t.icon,
      tooltip: t == null ? void 0 : t.tooltip
    }
  );
}
const Ge = v.Root, Gn = v.Value, Ae = W.forwardRef(({ className: e, children: t, ...n }, i) => /* @__PURE__ */ m(
  v.Trigger,
  {
    ref: i,
    className: E(
      "richtext-flex richtext-h-10 richtext-w-full richtext-items-center richtext-justify-between richtext-rounded-md richtext-border richtext-border-input richtext-bg-background richtext-px-3 richtext-py-2 richtext-text-sm richtext-ring-offset-background placeholder:richtext-text-muted-foreground focus:richtext-outline-none focus:richtext-ring-2 focus:richtext-ring-ring focus:richtext-ring-offset-2 disabled:richtext-cursor-not-allowed disabled:richtext-opacity-50 [&>span]:richtext-line-clamp-1",
      e
    ),
    ...n,
    children: [
      t,
      /* @__PURE__ */ o(v.Icon, { asChild: !0, children: /* @__PURE__ */ o(De, { className: "richtext-h-4 richtext-w-4 richtext-opacity-50" }) })
    ]
  }
));
Ae.displayName = v.Trigger.displayName;
const lt = W.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ o(
  v.ScrollUpButton,
  {
    ref: n,
    className: E(
      "richtext-flex richtext-cursor-default richtext-items-center richtext-justify-center richtext-py-1",
      e
    ),
    ...t,
    children: /* @__PURE__ */ o(jn, { className: "richtext-h-4 richtext-w-4" })
  }
));
lt.displayName = v.ScrollUpButton.displayName;
const dt = W.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ o(
  v.ScrollDownButton,
  {
    ref: n,
    className: E(
      "richtext-flex richtext-cursor-default richtext-items-center richtext-justify-center richtext-py-1",
      e
    ),
    ...t,
    children: /* @__PURE__ */ o(De, { className: "richtext-h-4 richtext-w-4" })
  }
));
dt.displayName = v.ScrollDownButton.displayName;
const Te = W.forwardRef(({ className: e, children: t, position: n = "popper", ...i }, a) => /* @__PURE__ */ o(v.Portal, { children: /* @__PURE__ */ m(
  v.Content,
  {
    ref: a,
    className: E(
      "richtext-relative richtext-z-50 richtext-max-h-60 richtext-overflow-y-auto richtext-min-w-[8rem] richtext-overflow-hidden richtext-rounded-md richtext-border richtext-bg-popover richtext-text-popover-foreground richtext-shadow-md data-[state=open]:richtext-animate-in data-[state=closed]:richtext-animate-out data-[state=closed]:richtext-fade-out-0 data-[state=open]:richtext-fade-in-0 data-[state=closed]:richtext-zoom-out-95 data-[state=open]:richtext-zoom-in-95 data-[side=bottom]:richtext-slide-in-from-top-2 data-[side=left]:richtext-slide-in-from-right-2 data-[side=right]:richtext-slide-in-from-left-2 data-[side=top]:richtext-slide-in-from-bottom-2",
      n === "popper" && "data-[side=bottom]:richtext-translate-y-1 data-[side=left]:richtext--translate-x-1 data-[side=right]:richtext-translate-x-1 data-[side=top]:richtext--translate-y-1",
      e
    ),
    position: n,
    ...i,
    children: [
      /* @__PURE__ */ o(lt, {}),
      /* @__PURE__ */ o(
        v.Viewport,
        {
          className: E(
            "richtext-p-1",
            n === "popper" && "richtext-h-[var(--radix-select-trigger-height)] richtext-w-full richtext-min-w-[var(--radix-select-trigger-width)]"
          ),
          children: t
        }
      ),
      /* @__PURE__ */ o(dt, {})
    ]
  }
) }));
Te.displayName = v.Content.displayName;
const Zn = W.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ o(
  v.Label,
  {
    ref: n,
    className: E("richtext-py-1.5 richtext-pl-8 richtext-pr-2 richtext-text-sm richtext-font-semibold", e),
    ...t
  }
));
Zn.displayName = v.Label.displayName;
const Se = W.forwardRef(({ className: e, children: t, ...n }, i) => /* @__PURE__ */ m(
  v.Item,
  {
    ref: i,
    className: E(
      "richtext-relative richtext-flex richtext-w-full richtext-cursor-default richtext-select-none richtext-items-center richtext-rounded-sm richtext-py-1.5 richtext-pl-8 richtext-pr-2 richtext-text-sm richtext-outline-none focus:richtext-bg-accent focus:richtext-text-accent-foreground data-[disabled]:richtext-pointer-events-none data-[disabled]:richtext-opacity-50",
      e
    ),
    ...n,
    children: [
      /* @__PURE__ */ o("span", { className: "richtext-absolute richtext-left-2 richtext-flex richtext-h-3.5 richtext-w-3.5 richtext-items-center richtext-justify-center", children: /* @__PURE__ */ o(v.ItemIndicator, { children: /* @__PURE__ */ o(Pn, { className: "richtext-h-4 richtext-w-4" }) }) }),
      /* @__PURE__ */ o(v.ItemText, { children: t })
    ]
  }
));
Se.displayName = v.Item.displayName;
const Jn = W.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ o(
  v.Separator,
  {
    ref: n,
    className: E("richtext--mx-1 richtext-my-1 richtext-h-px richtext-bg-muted", e),
    ...t
  }
));
Jn.displayName = v.Separator.displayName;
const Yn = "_wrap_1toeg_1", Qn = "_blockInfoEditable_1toeg_245", Ze = {
  wrap: Yn,
  blockInfoEditable: Qn
}, me = [
  { value: "plaintext", label: "plaintext" },
  { value: "javascript", label: "JavaScript" },
  { value: "typescript", label: "TypeScript" },
  { value: "html", label: "HTML" },
  { value: "css", label: "CSS" },
  { value: "python", label: "Python" },
  { value: "java", label: "Java" },
  { value: "cpp", label: "C++" },
  { value: "go", label: "Go" },
  { value: "rust", label: "Rust" },
  { value: "sql", label: "SQL" },
  { value: "json", label: "JSON" },
  { value: "yaml", label: "YAML" },
  { value: "markdown", label: "Markdown" },
  { value: "bash", label: "Bash" },
  { value: "php", label: "PHP" }
], ke = [2, 4, 8];
function Xn(e) {
  const t = Me(), n = $(null), i = D(() => Qt(ni.name, e == null ? void 0 : e.editor), [e == null ? void 0 : e.edito]), a = $(null), r = e.node.attrs.code || e.node.textContent || "", s = () => {
    r && navigator.clipboard.writeText(r).then(() => {
      console.log("Copy Success");
    }).catch((l) => {
      console.error("Error:", l);
    });
  }, c = () => {
    e.updateAttributes({
      lineNumbers: !e.node.attrs.lineNumbers
    });
  }, u = () => {
    e.updateAttributes({
      wordWrap: !e.node.attrs.wordWrap
    });
  }, d = (l) => {
    const h = { ...l };
    return h.language && !me.some((f) => f.value === h.language) && (h.language = "plaintext", e.updateAttributes({
      language: "plaintext"
    })), h;
  };
  return T(() => {
    if (n.current) {
      const l = d(e.node.attrs);
      a.current = xn(n.current, {
        readOnly: !e.editor.isEditable,
        language: l.language || "plaintext",
        tabSize: l.tabSize ?? 2,
        lineNumbers: l.lineNumbers ?? !0,
        wordWrap: l.wordWrap ?? !1,
        value: r,
        rtl: !1,
        onUpdate(h) {
          e.updateAttributes({ code: h });
        }
      }), a.current.addExtensions(
        wn(),
        pn(),
        yn(),
        vn(),
        kn(),
        Cn(),
        Nn()
      ), e.node.attrs.shouldFocus && setTimeout(() => {
        var h;
        (h = a.current) == null || h.textarea.focus(), e.updateAttributes({
          shouldFocus: !1
        });
      }, 0);
    }
    return () => {
      var l, h;
      (l = a.current) != null && l.remove && ((h = a.current) == null || h.remove());
    };
  }, [n]), T(() => {
    var l, h;
    (l = a.current) != null && l.setOption && ((h = a.current) == null || h.setOptions({
      readOnly: e.editor.isEditable
    }));
  }, [a, e.editor.isEditable]), T(() => {
    var l, h;
    if ((l = a.current) != null && l.setOption) {
      const f = d(e.node.attrs);
      (h = a.current) == null || h.setOptions(f);
    }
  }, [a, e.node.attrs.language, e.node.attrs.lineNumbers, e.node.attrs.wordWrap, e.node.attrs.tabSize, e.node.attrs]), /* @__PURE__ */ o(ae, { className: R(Ze.wrap, "render-wrapper"), children: /* @__PURE__ */ o(
    "div",
    {
      ref: n,
      className: R("richtext-node-container richtext-hover-shadow richtext-select-outline richtext-node-code-block !richtext-my-[10px]", {
        [Ze.blockInfoEditable]: !t
      }),
      children: /* @__PURE__ */ m("div", { className: "richtext-code-block-toolbar", children: [
        /* @__PURE__ */ o("div", { children: /* @__PURE__ */ m(
          Ge,
          {
            defaultValue: e.node.attrs.language,
            disabled: !t,
            onValueChange: (l) => {
              e.updateAttributes({
                language: l
              });
            },
            children: [
              /* @__PURE__ */ o(Ae, { className: "richtext-h-7 richtext-w-[160px] richtext-border-none richtext-text-sm richtext-outline-none hover:richtext-bg-[#5a5d5e4f]", children: /* @__PURE__ */ o(Gn, { placeholder: "Select language" }) }),
              /* @__PURE__ */ o(
                Te,
                {
                  className: "richtext-border-[#3a3f4b] richtext-bg-[#21252b] richtext-text-[#ccc]",
                  onCloseAutoFocus: (l) => l.preventDefault(),
                  children: me == null ? void 0 : me.map(
                    (l) => /* @__PURE__ */ o(
                      Se,
                      {
                        className: "focus:richtext-bg-[#5a5d5e4f] focus:richtext-text-white",
                        value: l.value,
                        children: l.label
                      },
                      l.value
                    )
                  )
                }
              )
            ]
          }
        ) }),
        /* @__PURE__ */ o("div", { className: "toolbar-divider" }),
        /* @__PURE__ */ o(
          "div",
          {
            className: "richtext-flex richtext-size-7 richtext-cursor-pointer richtext-items-center richtext-justify-center richtext-rounded-sm hover:richtext-bg-[#5a5d5e4f]",
            onClick: s,
            children: /* @__PURE__ */ o(
              A,
              {
                className: "richtext-size-4",
                name: "Copy"
              }
            )
          }
        ),
        /* @__PURE__ */ o("div", { className: "toolbar-divider" }),
        /* @__PURE__ */ o(
          "div",
          {
            onClick: c,
            className: R("richtext-flex richtext-size-7 richtext-cursor-pointer richtext-items-center richtext-justify-center richtext-rounded-sm hover:richtext-bg-[#5a5d5e4f]", {
              "richtext-bg-[#5a5d5e4f]": e == null ? void 0 : e.node.attrs.lineNumbers
            }),
            children: /* @__PURE__ */ o(
              A,
              {
                className: "richtext-size-4",
                name: "List"
              }
            )
          }
        ),
        /* @__PURE__ */ o("div", { className: "toolbar-divider" }),
        /* @__PURE__ */ o(
          "div",
          {
            onClick: u,
            className: R("richtext-flex richtext-size-7 richtext-cursor-pointer richtext-items-center richtext-justify-center richtext-rounded-sm hover:richtext-bg-[#5a5d5e4f]", {
              "richtext-bg-[#5a5d5e4f]": e == null ? void 0 : e.node.attrs.wordWrap
            }),
            children: /* @__PURE__ */ o(
              A,
              {
                className: "richtext-size-4",
                name: "WrapText"
              }
            )
          }
        ),
        /* @__PURE__ */ o("div", { className: "toolbar-divider" }),
        /* @__PURE__ */ o("div", { children: /* @__PURE__ */ m(
          Ge,
          {
            defaultValue: e.node.attrs.tabSize,
            disabled: !t,
            onValueChange: (l) => {
              e.updateAttributes({
                tabSize: l
              });
            },
            children: [
              /* @__PURE__ */ o(Ae, { className: "richtext-h-7 richtext-w-[60px] richtext-border-none richtext-text-sm richtext-outline-none hover:richtext-bg-[#5a5d5e4f]", children: /* @__PURE__ */ o(
                A,
                {
                  className: "richtext-size-4",
                  name: "IndentIncrease"
                }
              ) }),
              /* @__PURE__ */ o(
                Te,
                {
                  className: "richtext-border-[#3a3f4b] richtext-bg-[#21252b] richtext-text-[#ccc]",
                  onCloseAutoFocus: (l) => l.preventDefault(),
                  children: ke == null ? void 0 : ke.map((l) => /* @__PURE__ */ o(
                    Se,
                    {
                      className: "focus:richtext-bg-[#5a5d5e4f] focus:richtext-text-white",
                      value: l,
                      children: l
                    },
                    l
                  ))
                }
              )
            ]
          }
        ) }),
        /* @__PURE__ */ o("div", { className: "toolbar-divider" }),
        /* @__PURE__ */ o(
          "div",
          {
            className: "richtext-flex richtext-size-7 richtext-cursor-pointer richtext-items-center richtext-justify-center richtext-rounded-sm hover:richtext-bg-[#5a5d5e4f]",
            onClick: i,
            children: /* @__PURE__ */ o(
              A,
              {
                className: "richtext-size-4",
                name: "Trash2"
              }
            )
          }
        )
      ] })
    }
  ) });
}
const ei = /^`{3}([a-z]+)?\s$/, ti = /^~{3}([a-z]+)?\s$/, ni = oe.create({
  name: "codeBlock",
  group: "block",
  atom: !0,
  content: "text*",
  addOptions() {
    var e;
    return {
      ...(e = this.parent) == null ? void 0 : e.call(this),
      languages: [],
      button: ({ editor: t, t: n }) => ({
        component: Wn,
        componentProps: {
          action: () => t.commands.setCodeBlock({}),
          isActive: () => t.isActive("codeBlock") || !1,
          disabled: !1,
          icon: "Code2",
          tooltip: n("editor.codeblock.tooltip")
        }
      })
    };
  },
  addAttributes() {
    return {
      code: {
        default: "",
        parseHTML: (e) => e.textContent || ""
      },
      language: {
        default: "plaintext"
      },
      lineNumbers: {
        default: !0
      },
      wordWrap: {
        default: !1
      },
      tabSize: {
        default: 2
      },
      shouldFocus: {
        default: !0,
        parseHTML: () => !1,
        renderHTML: !1
      }
    };
  },
  parseHTML() {
    return [
      {
        tag: "pre",
        preserveWhitespace: "full",
        getAttrs: (e) => ({
          code: e.textContent || ""
        })
      },
      {
        tag: "pre code",
        preserveWhitespace: "full",
        getAttrs: (e) => ({
          code: e.textContent || ""
        })
      }
    ];
  },
  renderHTML({ HTMLAttributes: e, node: t }) {
    var i;
    const n = t.attrs.code || ((i = t.content.firstChild) == null ? void 0 : i.text) || "";
    return [
      "pre",
      re(this.options.HTMLAttributes, e),
      ["code", {}, n]
    ];
  },
  addNodeView() {
    return Le(Xn);
  },
  addCommands() {
    return {
      setCodeBlock: (e) => ({ commands: t }) => t.insertContent({
        type: this.name,
        attrs: {
          ...e,
          shouldFocus: !0
        }
      })
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-Alt-c": () => this.editor.commands.setCodeBlock({})
    };
  },
  addInputRules() {
    return [
      qe({
        find: ei,
        type: this.type,
        getAttributes: (e) => ({
          language: e[1]
        })
      }),
      qe({
        find: ti,
        type: this.type,
        getAttributes: (e) => ({
          language: e[1]
        })
      })
    ];
  }
});
function ii(e) {
  var a, r, s;
  const { t, lang: n } = I(), i = B(() => {
    var d;
    const c = (d = e == null ? void 0 : e.items) == null ? void 0 : d.find((l) => l.isActive());
    return c && !c.default ? {
      ...c
    } : {
      title: e.tooltip,
      font: t("editor.fontFamily.default.tooltip"),
      isActive: () => !1,
      disabled: !1,
      action: () => e.editor.chain().focus().unsetFontFamily().run()
    };
  }, [t, n, e]);
  return /* @__PURE__ */ m(Z, { children: [
    /* @__PURE__ */ o(
      J,
      {
        asChild: !0,
        disabled: e == null ? void 0 : e.disabled,
        children: /* @__PURE__ */ o(
          Fe,
          {
            disabled: e == null ? void 0 : e.disabled,
            icon: "MenuDown",
            title: ((a = i == null ? void 0 : i.font) == null ? void 0 : a.length) > 7 ? `${(r = i == null ? void 0 : i.font) == null ? void 0 : r.slice(0, 6)}...` : i == null ? void 0 : i.font,
            tooltip: e == null ? void 0 : e.tooltip
          }
        )
      }
    ),
    /* @__PURE__ */ o(Y, { className: "richtext-w-full", children: (s = e == null ? void 0 : e.items) == null ? void 0 : s.map((c, u) => {
      const d = c.font === t("editor.fontFamily.default.tooltip") ? {} : { fontFamily: c.font };
      return /* @__PURE__ */ m(je, { children: [
        /* @__PURE__ */ o(
          Q,
          {
            checked: (i == null ? void 0 : i.font) === c.font,
            onClick: c.action,
            children: /* @__PURE__ */ o(
              "div",
              {
                className: "richtext-ml-1 richtext-h-full",
                style: d,
                children: c.font
              }
            )
          }
        ),
        c.font === t("editor.fontFamily.default.tooltip") && /* @__PURE__ */ o(rt, {})
      ] }, `font-family-${u}`);
    }) })
  ] });
}
const Ja = wt.extend({
  addOptions() {
    var e;
    return {
      ...(e = this.parent) == null ? void 0 : e.call(this),
      fontFamilyList: Zt,
      button({ editor: t, extension: n, t: i }) {
        var d;
        const { extensions: a = [] } = t.extensionManager ?? [], r = Ne(((d = n == null ? void 0 : n.options) == null ? void 0 : d.fontFamilyList) || []), s = a.find(
          (l) => l.name === "base-kit"
        ), c = r.map((l) => ({
          action: () => {
            t.chain().focus().setFontFamily(l.value).run();
          },
          isActive: () => t.isActive("textStyle", { fontFamily: l.value }) || !1,
          disabled: !t.can().setFontFamily(l.value),
          title: l.name,
          font: l.value
        }));
        s && s.options.textStyle !== !1 && c.unshift({
          action: () => t.chain().focus().unsetFontFamily().run(),
          isActive: () => !1,
          disabled: !1,
          font: i("editor.fontFamily.default.tooltip"),
          title: i("editor.fontFamily.tooltip")
        });
        const u = c.filter((l) => l.disabled).length === c.length;
        return {
          component: ii,
          componentProps: {
            tooltip: i("editor.fontFamily.tooltip"),
            disabled: u,
            items: c,
            editor: t
          }
        };
      }
    };
  }
});
function ai(e) {
  var n;
  const t = B(() => {
    var r;
    const i = (r = e == null ? void 0 : e.items) == null ? void 0 : r.find((s) => s.isActive());
    return i && !i.default ? {
      ...i
    } : {
      title: e.tooltip,
      level: 0,
      isActive: () => !1
    };
  }, [e]);
  return /* @__PURE__ */ m(Z, { children: [
    /* @__PURE__ */ o(
      J,
      {
        asChild: !0,
        disabled: e == null ? void 0 : e.disabled,
        children: /* @__PURE__ */ o(
          Fe,
          {
            disabled: e == null ? void 0 : e.disabled,
            icon: "MenuDown",
            title: t == null ? void 0 : t.title,
            tooltip: e == null ? void 0 : e.tooltip
          }
        )
      }
    ),
    /* @__PURE__ */ o(Y, { className: "richtext-w-full", children: (n = e == null ? void 0 : e.items) == null ? void 0 : n.map((i, a) => {
      var r, s;
      return /* @__PURE__ */ m(je, { children: [
        /* @__PURE__ */ m(
          Q,
          {
            checked: (t == null ? void 0 : t.title) === i.title,
            onClick: i.action,
            children: [
              /* @__PURE__ */ o("div", { className: `heading- richtext-ml-1 richtext-h-full${i.level}`, children: i.title }),
              !!((r = i == null ? void 0 : i.shortcutKeys) != null && r.length) && /* @__PURE__ */ o(Xt, { className: "richtext-pl-4", children: (s = i == null ? void 0 : i.shortcutKeys) == null ? void 0 : s.map((c) => Re(c)).join(" ") })
            ]
          }
        ),
        i.level === 0 && /* @__PURE__ */ o(rt, {})
      ] }, `heading-k-${a}`);
    }) })
  ] });
}
const Ya = pt.extend({
  addOptions() {
    var e;
    return {
      ...(e = this.parent) == null ? void 0 : e.call(this),
      levels: [1, 2, 3, 4, 5, 6],
      button({ editor: t, extension: n, t: i }) {
        var d;
        const { extensions: a = [] } = t.extensionManager ?? [], r = ((d = n.options) == null ? void 0 : d.levels) || [], s = a.find(
          (l) => l.name === "base-kit"
        ), c = r.map((l) => ({
          action: () => t.commands.toggleHeading({ level: l }),
          isActive: () => t.isActive("heading", { level: l }) || !1,
          disabled: !t.can().toggleHeading({ level: l }),
          title: i(`editor.heading.h${l}.tooltip`),
          level: l,
          shortcutKeys: ["alt", "mod", `${l}`]
        }));
        s && s.options.paragraph !== !1 && c.unshift({
          action: () => t.commands.setParagraph(),
          isActive: () => t.isActive("paragraph") || !1,
          disabled: !t.can().setParagraph(),
          level: 0,
          title: i("editor.paragraph.tooltip"),
          shortcutKeys: ["alt", "mod", "0"]
        });
        const u = c.filter((l) => l.disabled).length === c.length;
        return {
          component: ai,
          componentProps: {
            tooltip: i("editor.heading.tooltip"),
            disabled: u,
            items: c,
            editor: t
          }
        };
      }
    };
  }
});
function oi(e) {
  var n;
  const t = B(() => {
    var r;
    const i = (r = e == null ? void 0 : e.items) == null ? void 0 : r.find((s) => s.isActive());
    return i && !i.default ? {
      ...i,
      icon: i.icon ? i.icon : e.icon
    } : {
      title: e == null ? void 0 : e.tooltip,
      icon: e.icon,
      isActive: () => !1
    };
  }, [e]);
  return /* @__PURE__ */ m(X, { modal: !0, children: [
    /* @__PURE__ */ o(
      ee,
      {
        asChild: !0,
        disabled: e == null ? void 0 : e.disabled,
        children: /* @__PURE__ */ o(
          x,
          {
            customClass: "!richtext-w-12 richtext-h-12",
            disabled: e == null ? void 0 : e.disabled,
            icon: e == null ? void 0 : e.icon,
            tooltip: e == null ? void 0 : e.tooltip,
            children: /* @__PURE__ */ o(
              A,
              {
                className: "richtext-ml-1 richtext-size-3 richtext-text-zinc-500",
                name: "MenuDown"
              }
            )
          }
        )
      }
    ),
    /* @__PURE__ */ o(
      te,
      {
        align: "start",
        className: "richtext-flex richtext-w-full richtext-min-w-4 richtext-flex-row richtext-gap-1 !richtext-p-[4px]",
        side: "bottom",
        children: (n = e == null ? void 0 : e.items) == null ? void 0 : n.map((i, a) => {
          var r, s;
          return /* @__PURE__ */ m(xe, { children: [
            /* @__PURE__ */ o(we, { asChild: !0, children: /* @__PURE__ */ o(
              Ie,
              {
                className: "richtext-size-7 richtext-p-1",
                "data-state": t.title === i.title ? "on" : "off",
                onClick: i == null ? void 0 : i.action,
                pressed: t.title === i.title,
                size: "sm",
                children: (i == null ? void 0 : i.icon) && /* @__PURE__ */ o(A, { name: i.icon })
              }
            ) }),
            /* @__PURE__ */ m(pe, { className: "richtext-flex richtext-flex-col richtext-items-center", children: [
              /* @__PURE__ */ o("span", { children: i.title }),
              !!((r = i.shortcutKeys) != null && r.length) && /* @__PURE__ */ o("span", { children: (s = i.shortcutKeys) == null ? void 0 : s.map((c) => Re(c)).join(" ") })
            ] })
          ] }, `text-align-${a}`);
        })
      }
    )
  ] });
}
const Qa = yt.extend({
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
        const a = ((d = n.options) == null ? void 0 : d.alignments) || [], r = {
          left: ["mod", "Shift", "L"],
          center: ["mod", "Shift", "E"],
          right: ["mod", "Shift", "R"],
          justify: ["mod", "Shift", "J"]
        }, s = {
          left: "AlignLeft",
          center: "AlignCenter",
          right: "AlignRight",
          justify: "AlignJustify"
        }, c = a.map((l) => {
          var h, f, _;
          return {
            title: i(`editor.textalign.${l}.tooltip`),
            icon: s[l],
            shortcutKeys: r[l],
            isActive: () => t.isActive({ textAlign: l }) || !1,
            action: () => {
              var S, p;
              return (p = (S = t.commands) == null ? void 0 : S.setTextAlign) == null ? void 0 : p.call(S, l);
            },
            disabled: !((_ = (f = (h = t == null ? void 0 : t.can) == null ? void 0 : h.call(t)) == null ? void 0 : f.setTextAlign) != null && _.call(f, l))
          };
        }), u = c.filter((l) => l.disabled).length === c.length;
        return {
          component: oi,
          componentProps: {
            icon: "AlignJustify",
            tooltip: i("editor.textalign.tooltip"),
            disabled: u,
            items: c
          }
        };
      }
    };
  }
});
function ri(e) {
  var i;
  const { t } = I(), n = B(() => {
    const a = (e.items || []).find((s) => s.isActive());
    return a || {
      title: t("editor.fontSize.default.tooltip"),
      isActive: () => !1
    };
  }, [e]);
  return /* @__PURE__ */ m(Z, { children: [
    /* @__PURE__ */ o(
      J,
      {
        asChild: !0,
        disabled: e == null ? void 0 : e.disabled,
        children: /* @__PURE__ */ o(
          Fe,
          {
            disabled: e == null ? void 0 : e.disabled,
            icon: "MenuDown",
            title: n == null ? void 0 : n.title,
            tooltip: `${e == null ? void 0 : e.tooltip}`
          }
        )
      }
    ),
    /* @__PURE__ */ o(Y, { className: "richtext-max-h-96 richtext-w-32 richtext-overflow-y-auto", children: (i = e == null ? void 0 : e.items) == null ? void 0 : i.map((a, r) => /* @__PURE__ */ o(
      Q,
      {
        checked: n.title === a.title,
        onClick: a.action,
        children: /* @__PURE__ */ o("div", { className: "richtext-ml-1 richtext-h-full", children: a.title })
      },
      `font-size-${r}`
    )) })
  ] });
}
const Xa = C.create({
  name: "fontSize",
  addOptions() {
    var e;
    return {
      ...(e = this.parent) == null ? void 0 : e.call(this),
      types: ["textStyle"],
      fontSizes: [...Jt],
      button({ editor: t, extension: n, t: i }) {
        var u;
        const a = Ne(((u = n.options) == null ? void 0 : u.fontSizes) || Ue), r = Ne([Ue])[0], s = a.map((d) => ({
          title: d.value === r.value ? i("editor.fontSize.default.tooltip") : String(d.name),
          isActive: () => {
            const { fontSize: l } = t.getAttributes("textStyle");
            return d.value === r.value && l === void 0 ? !0 : t.isActive({ fontSize: String(d.value) }) || !1;
          },
          action: () => {
            if (d.value === r.value) {
              t.commands.unsetFontSize();
              return;
            }
            t.commands.setFontSize(String(d.value));
          },
          disabled: !t.can().setFontSize(String(d.value)),
          divider: d.value === r.value || !1,
          default: d.value === r.value || !1
        })), c = s.filter((d) => d.disabled).length === s.length;
        return {
          component: ri,
          componentProps: {
            editor: t,
            tooltip: i("editor.fontSize.tooltip"),
            disabled: c,
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
function si({ fill: e }) {
  return /* @__PURE__ */ o(
    "svg",
    {
      width: "18px",
      height: "18px",
      viewBox: "0 0 240 240",
      version: "1.1",
      xmlns: "http://www.w3.org/2000/svg",
      children: /* @__PURE__ */ o("g", { stroke: "none", strokeWidth: 1, fill: "none", fillRule: "evenodd", children: /* @__PURE__ */ o("g", { transform: "translate(0.000000, 0.500000)", children: /* @__PURE__ */ m("g", { transform: "translate(39.000000, 17.353553)", children: [
        /* @__PURE__ */ o(
          "path",
          {
            d: "M11,201.146447 L167,201.146447 C173.075132,201.146447 178,206.071314 178,212.146447 C178,218.221579 173.075132,223.146447 167,223.146447 L11,223.146447 C4.92486775,223.146447 7.43989126e-16,218.221579 0,212.146447 C-7.43989126e-16,206.071314 4.92486775,201.146447 11,201.146447 Z",
            id: "矩形",
            fill: e || "#DF2A3F",
            fillRule: "evenodd"
          }
        ),
        /* @__PURE__ */ o(
          "path",
          {
            d: "M72.3425855,16.8295583 C75.799482,7.50883712 86.1577877,2.75526801 95.4785089,6.21216449 C100.284516,7.99463061 104.096358,11.7387855 105.968745,16.4968188 L106.112518,16.8745422 L159.385152,161.694068 C161.291848,166.877345 158.635655,172.624903 153.452378,174.531599 C148.358469,176.405421 142.719567,173.872338 140.716873,168.864661 L140.614848,168.598825 L89.211,28.86 L37.3759214,168.623816 C35.4885354,173.712715 29.8981043,176.351047 24.7909589,174.617647 L24.5226307,174.522368 C19.4337312,172.634982 16.7953993,167.044551 18.5287999,161.937406 L18.6240786,161.669077 L72.3425855,16.8295583 Z",
            id: "路径-21",
            fill: "currentColor",
            fillRule: "nonzero"
          }
        ),
        /* @__PURE__ */ o(
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
function ci(e) {
  const [t, n] = k(void 0);
  function i(s) {
    var c;
    (c = e.action) == null || c.call(e, s);
  }
  function a() {
    var s;
    (s = e.action) == null || s.call(e, t);
  }
  const r = D(
    An((s) => {
      n(s);
    }, 350),
    []
  );
  return /* @__PURE__ */ m("div", { className: "richtext-flex richtext-items-center richtext-h-[32px]", children: [
    /* @__PURE__ */ o(x, { tooltip: e == null ? void 0 : e.tooltip, disabled: e == null ? void 0 : e.disabled, action: a, children: /* @__PURE__ */ o("span", { className: "richtext-flex richtext-items-center richtext-justify-center richtext-text-sm", children: /* @__PURE__ */ o(si, { fill: t }) }) }),
    /* @__PURE__ */ o(
      en,
      {
        selectedColor: t,
        setSelectedColor: r,
        onChange: i,
        disabled: e == null ? void 0 : e.disabled,
        colors: e == null ? void 0 : e.colors,
        defaultColor: e == null ? void 0 : e.defaultColor,
        children: /* @__PURE__ */ o(K, { variant: "ghost", size: "icon", className: "r!ichtext-h-[32px] !richtext-w-3", disabled: e == null ? void 0 : e.disabled, children: /* @__PURE__ */ o(A, { className: "!richtext-w-3 !richtext-h-3 richtext-text-zinc-500", name: "MenuDown" }) })
      }
    )
  ] });
}
const eo = vt.extend({
  addOptions() {
    var e;
    return {
      ...(e = this.parent) == null ? void 0 : e.call(this),
      button({ editor: t, t: n, extension: i }) {
        return {
          component: ci,
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
}), to = kt.extend({
  addOptions() {
    var e;
    return {
      ...(e = this.parent) == null ? void 0 : e.call(this),
      multicolor: !0,
      button: ({ editor: t, t: n }) => ({
        component: tn,
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
}), no = Ct.extend({
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
}), io = oe.create({
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
}), ao = Nt.extend({
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
}), oo = At.extend({
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
    return [Tt.configure(this.options.taskItem)];
  }
}), ro = St.extend({
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
function li(e) {
  const [t, n] = k(!1);
  function i(a, r, s) {
    e.action && (e.action({ link: a, text: r, openInNewTab: s }), n(!1));
  }
  return /* @__PURE__ */ m(X, { modal: !0, open: t, onOpenChange: n, children: [
    /* @__PURE__ */ o(ee, { disabled: e == null ? void 0 : e.disabled, asChild: !0, children: /* @__PURE__ */ o(
      x,
      {
        tooltip: e == null ? void 0 : e.tooltip,
        isActive: e == null ? void 0 : e.isActive,
        disabled: e == null ? void 0 : e.disabled,
        children: /* @__PURE__ */ o(A, { name: e == null ? void 0 : e.icon })
      }
    ) }),
    /* @__PURE__ */ o(te, { hideWhenDetached: !0, className: "richtext-w-full", align: "start", side: "bottom", children: /* @__PURE__ */ o(nn, { editor: e.editor, onSetLink: i }) })
  ] });
}
const so = Lt.extend({
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
      re(this.options.HTMLAttributes, e, {
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
        component: li,
        componentProps: {
          editor: t,
          action: (i) => {
            const { link: a, text: r, openInNewTab: s } = i;
            t.chain().extendMarkRange("link").insertContent({
              type: "text",
              text: r,
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
      new se({
        props: {
          handleClick: (e, t) => {
            const { schema: n, doc: i, tr: a } = e.state, r = Et(i.resolve(t), n.marks.link);
            if (!r)
              return !1;
            const s = i.resolve(r.from), c = i.resolve(r.to), u = a.setSelection(new ct(s, c));
            e.dispatch(u);
          }
        }
      })
    ];
  }
}), co = Ht.extend({
  renderHTML() {
    return [
      "div",
      re(this.options.HTMLAttributes, {
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
function di(e) {
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
    action: r = void 0,
    isActive: s = void 0,
    children: c
  } = e, u = He[t];
  return /* @__PURE__ */ m(xe, { children: [
    /* @__PURE__ */ o(we, { asChild: !0, children: /* @__PURE__ */ m(
      Ie,
      {
        size: "sm",
        className: `richtext-w-[32px] richtext-h-[32px] ${i}`,
        disabled: s == null ? void 0 : s(),
        onClick: r,
        children: [
          u && /* @__PURE__ */ o(u, { className: "richtext-w-4 richtext-h-4" }),
          c && /* @__PURE__ */ o(ye, { children: c })
        ]
      }
    ) }),
    n && /* @__PURE__ */ o(pe, { ...a, children: /* @__PURE__ */ m("div", { className: "richtext-flex richtext-flex-col richtext-items-center richtext-text-center richtext-max-w-24", children: [
      /* @__PURE__ */ o("div", { children: n }),
      !!((d = e == null ? void 0 : e.shortcutKeys) != null && d.length) && /* @__PURE__ */ o("span", { children: ze(e == null ? void 0 : e.shortcutKeys) })
    ] }) })
  ] });
}
const ui = ["undo", "redo"], lo = zt.extend({
  addOptions() {
    var e;
    return {
      ...(e = this.parent) == null ? void 0 : e.call(this),
      depth: 100,
      newGroupDelay: 500,
      button: ({ editor: t, t: n }) => ui.map((i) => ({
        component: di,
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
}), hi = Mt.extend({
  content: "(block|columns)+"
  // echo editor is a block editor
}), uo = C.create({
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
}), mi = C.create({
  name: "selection",
  addProseMirrorPlugins() {
    const { editor: e } = this;
    return [
      new se({
        key: new ne("selection"),
        props: {
          decorations(t) {
            return t.selection.empty || e.isFocused === !0 ? null : ge.create(t.doc, [
              be.inline(t.selection.from, t.selection.to, {
                class: "selection"
              })
            ]);
          }
        }
      })
    ];
  }
});
function fi(e) {
  const { t } = I(), n = B(() => [
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
  ], [e.editor, t]), i = B(() => n.findLast((a) => a.isActive()) ?? {
    label: "Empty"
  }, [n]);
  return /* @__PURE__ */ m(Z, { children: [
    /* @__PURE__ */ o(J, { asChild: !0, children: /* @__PURE__ */ m(
      K,
      {
        className: "richtext-flex richtext-h-[32px] richtext-gap-1 richtext-px-1.5",
        variant: "ghost",
        children: [
          /* @__PURE__ */ m("span", { className: "richtext-whitespace-nowrap richtext-text-sm richtext-font-normal", children: [
            " ",
            i == null ? void 0 : i.label
          ] }),
          /* @__PURE__ */ o(De, { className: "richtext-size-4" })
        ]
      }
    ) }),
    /* @__PURE__ */ o(
      Y,
      {
        align: "start",
        className: "richtext-w-full richtext-p-1",
        hideWhenDetached: !0,
        sideOffset: 5,
        children: n.map((a, r) => {
          var c;
          const s = He[a.iconName];
          return /* @__PURE__ */ o(
            Q,
            {
              checked: ((c = a.isActive) == null ? void 0 : c.call(a)) || !1,
              className: "richtext-cursor-pointer",
              onClick: () => a.action(),
              children: /* @__PURE__ */ m("div", { className: "richtext-flex richtext-items-center richtext-gap-2 richtext-px-2", children: [
                /* @__PURE__ */ o(s, { className: "richtext-h3 richtext-w-3" }),
                /* @__PURE__ */ m("span", { children: [
                  " ",
                  a.label
                ] })
              ] })
            },
            `text-bubble-${r}`
          );
        })
      }
    )
  ] });
}
const _i = C.create({
  name: "text-bubble",
  addOptions() {
    var e;
    return {
      ...(e = this.parent) == null ? void 0 : e.call(this),
      toolbar: !1,
      button: () => ({
        component: fi,
        componentProps: {}
      })
    };
  }
});
function Je({ types: e, node: t }) {
  return Array.isArray(e) && e.includes(t.type) || t.type === e;
}
const gi = C.create({
  name: "trailingNode",
  addOptions() {
    return {
      node: "paragraph",
      notAfter: ["paragraph"]
    };
  },
  addProseMirrorPlugins() {
    const e = new ne(this.name), t = Object.entries(this.editor.schema.nodes).map(([, n]) => n).filter((n) => this.options.notAfter.includes(n.name));
    return [
      new se({
        key: e,
        appendTransaction: (n, i, a) => {
          const { doc: r, tr: s, schema: c } = a, u = e.getState(a), d = r.content.size, l = c.nodes[this.options.node];
          if (u)
            return s.insert(d, l.create());
        },
        state: {
          init: (n, i) => {
            const a = i.tr.doc.lastChild;
            return !Je({ node: a, types: t });
          },
          apply: (n, i) => {
            if (!n.docChanged)
              return i;
            const a = n.doc.lastChild;
            return !Je({ node: a, types: t });
          }
        }
      })
    ];
  }
}), ho = C.create({
  name: "base-kit",
  addExtensions() {
    const e = [];
    return this.options.document !== !1 && e.push(hi.configure()), this.options.placeholder !== !1 && e.push(
      Rt.configure({
        placeholder: ({ node: t, pos: n, editor: i }) => {
          var a, r, s, c, u;
          return ((a = t == null ? void 0 : t.type) == null ? void 0 : a.name) === "columns" || ((r = t == null ? void 0 : t.content) == null ? void 0 : r.size) !== 0 ? "" : ((s = t == null ? void 0 : t.type) == null ? void 0 : s.name) === "heading" ? `${N.t(`editor.heading.h${t.attrs.level}.tooltip`)}` : ((c = t == null ? void 0 : t.type) == null ? void 0 : c.name) === "codeBlock" || ((u = t == null ? void 0 : t.type) == null ? void 0 : u.name) === "table" ? "" : i.extensionManager.extensions.some((d) => d.name === "slashCommand") ? N.t("editor.slash") : n === 0 ? N.t("editor.content") : N.t("editor.content");
        },
        ...this.options.placeholder
      })
    ), this.options.focus !== !1 && e.push(
      It.configure({
        className: "focus",
        ...this.options.focus
      })
    ), this.options.text !== !1 && e.push(Pt.configure()), this.options.textBubble !== !1 && e.push(_i.configure()), this.options.gapcursor !== !1 && e.push(jt.configure()), this.options.dropcursor !== !1 && e.push(
      Bt.configure({
        ...this.options.dropcursor,
        width: 2,
        class: "ProseMirror-dropcursor border-black"
      })
    ), this.options.characterCount !== !1 && e.push(Ot.configure(this.options.characterCount)), this.options.paragraph !== !1 && e.push(Dt.configure(this.options.paragraph)), this.options.hardBreak !== !1 && e.push($t.configure(this.options.hardBreak)), this.options.listItem !== !1 && e.push(Ft.configure(this.options.listItem)), this.options.textStyle !== !1 && e.push(qt.configure(this.options.textStyle)), this.options.trailingNode !== !1 && e.push(gi.configure(this.options.trailingNode)), this.options.selection !== !1 && e.push(mi), this.options.multiColumn !== !1 && e.push(an, on), e;
  }
}), mo = C.create({
  name: "subAndSuperScript",
  addOptions() {
    var e;
    return {
      ...(e = this.parent) == null ? void 0 : e.call(this),
      button: ({ editor: t, extension: n, t: i }) => {
        const a = n.options.subscript, r = n.options.superscript, s = {
          component: x,
          componentProps: {
            action: () => t.commands.toggleSubscript(),
            isActive: () => t.isActive("subscript") || !1,
            disabled: !t.can().toggleSubscript(),
            icon: "Subscript",
            tooltip: i("editor.subscript.tooltip")
          }
        }, c = {
          component: x,
          componentProps: {
            action: () => t.commands.toggleSuperscript(),
            isActive: () => t.isActive("superscript") || !1,
            disabled: !t.can().toggleSuperscript(),
            icon: "Superscript",
            tooltip: i("editor.superscript.tooltip")
          }
        }, u = [];
        return a !== !1 && u.push(s), r !== !1 && u.push(c), u;
      }
    };
  },
  addExtensions() {
    const e = [];
    return this.options.subscript !== !1 && e.push(nt.configure(this.options.subscript)), this.options.superscript !== !1 && e.push(it.configure(this.options.superscript)), e;
  }
});
function bi(e) {
  var n;
  const t = B(() => {
    var r;
    const i = (r = e == null ? void 0 : e.items) == null ? void 0 : r.find((s) => s.isActive());
    return i && !i.default ? {
      ...i,
      icon: i != null && i.icon ? i == null ? void 0 : i.icon : e == null ? void 0 : e.icon
    } : {
      title: e.tooltip,
      icon: e.icon,
      isActive: () => !1
    };
  }, [e]);
  return /* @__PURE__ */ m(Z, { children: [
    /* @__PURE__ */ o(
      J,
      {
        asChild: !0,
        disabled: e == null ? void 0 : e.disabled,
        children: /* @__PURE__ */ o(
          x,
          {
            customClass: "!richtext-w-12 richtext-h-12",
            disabled: e == null ? void 0 : e.disabled,
            icon: e == null ? void 0 : e.icon,
            tooltip: e == null ? void 0 : e.tooltip,
            children: /* @__PURE__ */ o(rn, { className: "richtext-size-3 richtext-text-gray-500" })
          }
        )
      }
    ),
    /* @__PURE__ */ o(Y, { className: "w-full", children: (n = e == null ? void 0 : e.items) == null ? void 0 : n.map((i, a) => /* @__PURE__ */ m(
      Q,
      {
        checked: t.title === i.title,
        className: "richtext-flex richtext-items-center richtext-gap-3",
        onClick: i.action,
        children: [
          /* @__PURE__ */ o(A, { name: i == null ? void 0 : i.icon }),
          /* @__PURE__ */ o("span", { className: "richtext-ml-1", children: i.title }),
          !!(i != null && i.shortcutKeys) && /* @__PURE__ */ o("span", { className: "richtext-ml-auto richtext-text-xs richtext-tracking-widest richtext-opacity-60", children: ze(i.shortcutKeys) })
        ]
      },
      `more-mark-${a}`
    )) })
  ] });
}
const fo = C.create({
  name: "moreMark",
  addOptions() {
    var e;
    return {
      ...(e = this.parent) == null ? void 0 : e.call(this),
      button({ editor: t, extension: n, t: i }) {
        const a = n.options.subscript, r = n.options.superscript, s = {
          action: () => t.commands.toggleSubscript(),
          isActive: () => t.isActive("subscript") || !1,
          disabled: !t.can().toggleSubscript(),
          icon: "Subscript",
          title: i("editor.subscript.tooltip"),
          shortcutKeys: ["mod", "."]
        }, c = {
          action: () => t.commands.toggleSuperscript(),
          isActive: () => t.isActive("superscript") || !1,
          disabled: !t.can().toggleSuperscript(),
          icon: "Superscript",
          title: i("editor.superscript.tooltip"),
          shortcutKeys: ["mod", ","]
        }, u = [];
        return a !== !1 && u.push(s), r !== !1 && u.push(c), {
          component: bi,
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
    return this.options.subscript !== !1 && e.push(nt.configure(this.options.subscript)), this.options.superscript !== !1 && e.push(it.configure(this.options.superscript)), e;
  }
}), _o = C.create({
  name: "indent",
  addOptions() {
    var e;
    return {
      ...(e = this.parent) == null ? void 0 : e.call(this),
      types: ["paragraph", "heading", "blockquote"],
      minIndent: he.min,
      maxIndent: he.max,
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
      indent: () => Ke({
        delta: he.more,
        types: this.options.types
      }),
      outdent: () => Ke({
        delta: he.less,
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
function xi(e) {
  return Number.parseFloat(e.replace("%", "")) / 100;
}
function wi(e) {
  const { t } = I(), [n, i] = k("default");
  function a(s) {
    s === "default" ? e.editor.commands.unsetLineHeight() : e.editor.commands.setLineHeight(s), i(s);
  }
  const r = B(() => {
    const u = e.editor.extensionManager.extensions.find(
      (d) => d.name === "lineHeight"
    ).options.lineHeights.map((d) => ({
      label: xi(d),
      value: d
    }));
    return u.unshift({
      label: t("editor.default"),
      value: "default"
    }), u;
  }, [e]);
  return /* @__PURE__ */ m(Z, { children: [
    /* @__PURE__ */ o(
      J,
      {
        asChild: !0,
        disabled: e == null ? void 0 : e.disabled,
        children: /* @__PURE__ */ o(
          x,
          {
            customClass: "!richtext-w-12 richtext-h-12",
            disabled: e == null ? void 0 : e.disabled,
            icon: "LineHeight",
            tooltip: e == null ? void 0 : e.tooltip,
            children: /* @__PURE__ */ o(
              A,
              {
                className: "richtext-ml-1 richtext-size-3 richtext-text-zinc-500",
                name: "MenuDown"
              }
            )
          }
        )
      }
    ),
    /* @__PURE__ */ o(Y, { className: "richtext-min-w-24", children: r == null ? void 0 : r.map((s, c) => /* @__PURE__ */ o(
      Q,
      {
        checked: s.value === n,
        onClick: () => a(s.value),
        children: s.label
      },
      `lineHeight-${c}`
    )) })
  ] });
}
const pi = ["paragraph", "heading", "list_item", "todo_item"];
function yi(e, t) {
  const { selection: n, doc: i } = e;
  if (!n || !i || !(n instanceof ct || n instanceof Tn))
    return e;
  const { from: a, to: r } = n, s = [], c = t && t !== ot ? t : null;
  if (i.nodesBetween(a, r, (u, d) => {
    const l = u.type;
    return pi.includes(l.name) ? ((u.attrs.lineHeight || null) !== c && s.push({
      node: u,
      pos: d,
      nodeType: l
    }), l.name !== "list_item" && l.name !== "todo_item") : !0;
  }), s.length === 0)
    return e;
  for (const u of s) {
    const { node: d, pos: l, nodeType: h } = u;
    let { attrs: f } = d;
    f = {
      ...f,
      lineHeight: c
    }, e = e.setNodeMarkup(l, h, f, d.marks);
  }
  return e;
}
function vi(e) {
  return ({ state: t, dispatch: n }) => {
    const { selection: i } = t;
    let { tr: a } = t;
    return a = a.setSelection(i), a = yi(a, e), a.docChanged ? (n && n(a), !0) : !1;
  };
}
const go = C.create({
  name: "lineHeight",
  addOptions() {
    var e;
    return {
      ...(e = this.parent) == null ? void 0 : e.call(this),
      types: ["paragraph", "heading", "list_item", "todo_item"],
      lineHeights: Yt,
      defaultHeight: ot,
      button({ editor: t, t: n }) {
        return {
          component: wi,
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
      setLineHeight: (e) => vi(e),
      unsetLineHeight: () => ({ commands: e }) => this.options.types.every((t) => e.resetAttributes(t, "lineHeight"))
    };
  }
});
function ki(e, t) {
  var M, H;
  const [n, i] = k(0), [a, r] = k(0), s = $(null), { t: c } = I(), u = $([]);
  Oe(t, () => ({
    onKeyDown: d
  })), T(() => {
    if (!s.current)
      return;
    const g = a * 1e3 + n, b = u.current[g];
    b && b.scrollIntoView({
      behavior: "smooth",
      block: "nearest"
    });
  }, [n, a]);
  function d({ event: g }) {
    return g.key === "ArrowUp" ? (l(), !0) : g.key === "ArrowDown" ? (h(), !0) : g.key === "Enter" ? (f(), !0) : !1;
  }
  function l() {
    var y;
    if (e.items.length === 0)
      return !1;
    let g = n - 1, b = a;
    g < 0 && (b = a - 1, g = ((y = e.items[b]) == null ? void 0 : y.commands.length) - 1 || 0), b < 0 && (b = e.items.length - 1, g = e.items[b].commands.length - 1), i(g), r(b);
  }
  function h() {
    if (e.items.length === 0)
      return !1;
    const g = e.items[a].commands;
    let b = n + 1, y = a;
    g.length - 1 < b && (b = 0, y = a + 1), e.items.length - 1 < y && (y = 0), i(b), r(y);
  }
  function f() {
    if (e.items.length === 0 || a === -1 || n === -1)
      return !1;
    _(a, n);
  }
  function _(g, b) {
    const y = e.items[g].commands[b];
    e.command(y);
  }
  function S(g, b) {
    _(g, b);
  }
  function p(g, b, y) {
    u.current[g * 1e3 + b] = y;
  }
  return /* @__PURE__ */ o(
    "div",
    {
      className: "richtext-mb-8 richtext-max-h-[min(80vh,24rem)] richtext-flex-wrap richtext-overflow-auto richtext-rounded-lg !richtext-border !richtext-border-neutral-200 !richtext-bg-white richtext-p-1 !richtext-text-black richtext-shadow-sm dark:!richtext-border-neutral-800 dark:!richtext-bg-black",
      ref: s,
      children: (M = e == null ? void 0 : e.items) != null && M.length ? /* @__PURE__ */ o("div", { className: "richtext-grid richtext-min-w-48 richtext-grid-cols-1 richtext-gap-0.5", children: (H = e == null ? void 0 : e.items) == null ? void 0 : H.map((g, b) => /* @__PURE__ */ m(je, { children: [
        /* @__PURE__ */ o("div", { className: "richtext-col-[1/-1] richtext-mx-2 richtext-mt-2 richtext-select-none richtext-text-[0.65rem] richtext-font-semibold richtext-uppercase richtext-tracking-wider !richtext-text-neutral-500 first:richtext-mt-0.5", children: g.title }),
        g.commands.map((y, z) => /* @__PURE__ */ m(
          "button",
          {
            onClick: () => S(b, z),
            ref: (L) => p(b, z, L),
            className: E("richtext-flex richtext-items-center richtext-gap-3 richtext-px-2 richtext-py-1.5 richtext-text-sm !richtext-text-neutral-800 dark:!richtext-text-neutral-200 richtext-text-left richtext-w-full richtext-rounded-sm richtext-outline-none richtext-transition-colors !richtext-bg-transparent hover:!richtext-bg-accent ", {
              "slash-command-active": a === b && n === z
            }),
            children: [
              y.iconUrl && /* @__PURE__ */ o(
                "img",
                {
                  alt: "",
                  className: "richtext-size-6",
                  src: y.iconUrl
                }
              ),
              y.iconName && /* @__PURE__ */ o(
                A,
                {
                  className: "!richtext-mr-1 !richtext-text-lg",
                  name: y.iconName
                }
              ),
              y.label
            ]
          },
          `command-${z}`
        ))
      ] }, `slash-${g.title}`)) }) : /* @__PURE__ */ o("div", { className: "richtext-p-3", children: /* @__PURE__ */ o("span", { className: "richtext-text-xs richtext-text-gray-800 dark:richtext-text-gray-100", children: c("editor.slash.empty") }) })
    }
  );
}
const Ci = Be(ki), Ni = {
  setOpen: (e, t) => {
    U(j.UPLOAD_VIDEO(e), t);
  }
};
function Ai(e, t) {
  const n = [
    {
      name: "format",
      title: N.t("editor.slash.format"),
      commands: []
    },
    {
      name: "insert",
      title: N.t("editor.slash.insert"),
      commands: []
    }
  ];
  return e.forEach((i) => {
    i.name.toLowerCase() === "heading" && i.options.levels.forEach((a) => {
      n[0].commands.push({
        name: `heading${a}`,
        label: N.t(`editor.heading.h${a}.tooltip`),
        aliases: [`h${a}`, "bt", `bt${a}`],
        iconName: `Heading${a}`,
        action: ({ editor: r, range: s }) => {
          r.chain().focus().deleteRange(s).setHeading({ level: a }).run();
        }
      });
    }), i.name.toLowerCase() === "bulletlist" && n[0].commands.push({
      name: "bulletList",
      label: N.t("editor.bulletlist.tooltip"),
      aliases: ["ul", "yxlb"],
      iconName: "List",
      action: ({ editor: a, range: r }) => {
        a.chain().focus().deleteRange(r).toggleBulletList().run();
      }
    }), i.name.toLowerCase() === "orderedlist" && n[0].commands.push({
      name: "numberedList",
      label: N.t("editor.orderedlist.tooltip"),
      aliases: ["ol", "yxlb"],
      iconName: "ListOrdered",
      action: ({ editor: a, range: r }) => {
        a.chain().focus().deleteRange(r).toggleOrderedList().run();
      }
    }), i.name.toLowerCase() === "tasklist" && n[0].commands.push({
      name: "taskList",
      label: N.t("editor.tasklist.tooltip"),
      iconName: "ListTodo",
      description: "Task list with todo items",
      aliases: ["todo"],
      action: ({ editor: a, range: r }) => {
        a.chain().focus().deleteRange(r).toggleTaskList().run();
      }
    }), i.name.toLowerCase() === "blockquote" && n[0].commands.push({
      name: "blockquote",
      label: N.t("editor.blockquote.tooltip"),
      description: "插入引入格式",
      aliases: ["yr"],
      iconName: "TextQuote",
      action: ({ editor: a, range: r }) => {
        a.chain().focus().deleteRange(r).setBlockquote().run();
      }
    }), i.name.toLowerCase() === "codeblock" && n[0].commands.push({
      name: "codeBlock",
      label: N.t("editor.codeblock.tooltip"),
      iconName: "Code2",
      description: "Code block with syntax highlighting",
      shouldBeHidden: (a) => a.isActive("columns"),
      action: ({ editor: a, range: r }) => {
        a.chain().focus().deleteRange(r).setCodeBlock().run();
      }
    }), i.name.toLowerCase() === sn.name && n[1].commands.push({
      name: "image",
      label: N.t("editor.image.tooltip"),
      iconName: "ImageUp",
      description: "Insert a image",
      aliases: ["image", "tp", "tupian"],
      shouldBeHidden: (a) => a.isActive("columns"),
      action: ({ editor: a, range: r }) => {
        a.chain().focus().deleteRange(r).run(), cn.setOpen(a.id, !0);
      }
    }), i.name.toLowerCase() === ln.name && n[1].commands.push({
      name: "video",
      label: N.t("editor.video.tooltip"),
      iconName: "Video",
      description: "Insert a video",
      aliases: ["video", "sp", "shipin"],
      shouldBeHidden: (a) => a.isActive("columns"),
      action: ({ editor: a, range: r }) => {
        a.chain().focus().deleteRange(r).run(), Ni.setOpen(a.id, !0);
      }
    }), i.name.toLowerCase() === "table" && n[1].commands.push({
      name: "table",
      label: N.t("editor.table.tooltip"),
      iconName: "Table",
      description: "Insert a table",
      aliases: ["table", "bg", "biaoge", "biao"],
      shouldBeHidden: (a) => a.isActive("columns"),
      action: ({ editor: a, range: r }) => {
        a.chain().focus().deleteRange(r).insertTable({ rows: 3, cols: 3, withHeaderRow: !1 }).run();
      }
    }), i.name.toLowerCase() === "horizontalrule" && n[1].commands.push({
      name: "horizontalRule",
      label: N.t("editor.horizontalrule.tooltip"),
      iconName: "Minus",
      description: "Insert a horizontal divider",
      aliases: ["hr", "fgx", "fg"],
      action: ({ editor: a, range: r }) => {
        a.chain().focus().deleteRange(r).setHorizontalRule().run();
      }
    }), i.name.toLowerCase() === "columns" && n[1].commands.push({
      name: "columns",
      label: N.t("editor.columns.tooltip"),
      iconName: "Columns2",
      description: "Add two column content",
      action: ({ editor: a }) => {
        a.chain().focus().insertColumns({ cols: 2 }).run();
      }
    }), t == null || t(i, n);
  }), n;
}
const q = "slashCommand";
let w;
const bo = C.create({
  name: q,
  priority: 200,
  onCreate() {
    w = Pe("body", {
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
      at({
        editor: this.editor,
        char: "/",
        allowSpaces: !0,
        startOfLine: !0,
        pluginKey: new ne(q),
        allow: ({ state: e, range: t }) => {
          var d, l, h;
          const n = e.doc.resolve(t.from), i = n.depth === 1, a = n.parent.type.name === "paragraph", r = ((d = n.parent.textContent) == null ? void 0 : d.charAt(0)) === "/", s = this.editor.isActive("column"), c = (h = n.parent.textContent) == null ? void 0 : h.slice(
            Math.max(0, (l = n.parent.textContent) == null ? void 0 : l.indexOf("/"))
          ), u = !(c != null && c.endsWith("  "));
          return (i && a && r || s && a && r) && u;
        },
        command: ({ editor: e, range: t, props: n }) => {
          const { view: i } = e;
          n.action({ editor: e, range: t }), i.focus();
        },
        items: ({ query: e, editor: t }) => Ai(t.extensionManager.extensions, this.options.renderGroupItem).map((s) => ({
          ...s,
          commands: s.commands.filter((c) => {
            const u = c.label.toLowerCase().trim(), d = e.toLowerCase().trim();
            if (c.aliases) {
              const l = c.aliases.map((_) => _.toLowerCase().trim()), h = u.match(d), f = l.some((_) => _.match(d));
              return h || f;
            }
            return u.match(d);
          }).filter(
            (c) => c.shouldBeHidden ? !c.shouldBeHidden(this.editor) : !0
          )
        })).filter((s) => s.commands.length > 0).map((s) => ({
          ...s,
          commands: s.commands.map((c) => ({
            ...c,
            isEnabled: !0
          }))
        })),
        render: () => {
          let e, t = null;
          return {
            onStart: (n) => {
              var r;
              e = new Ee(Ci, {
                props: n,
                editor: n.editor
              });
              const { view: i } = n.editor, a = () => {
                if (!n.clientRect)
                  return n.editor.storage[q].rect;
                const s = n.clientRect();
                if (!s)
                  return n.editor.storage[q].rect;
                let c = s.y;
                if (s.top + e.element.offsetHeight + 40 > window.innerHeight) {
                  const u = s.top + e.element.offsetHeight - window.innerHeight + 40;
                  c = s.y - u;
                }
                return new DOMRect(s.x, c, s.width, s.height);
              };
              t = () => {
                w == null || w[0].setProps({
                  getReferenceClientRect: a
                });
              }, (r = i.dom.parentElement) == null || r.addEventListener("scroll", t), w == null || w[0].setProps({
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
                  return n.editor.storage[q].rect;
                const c = n.clientRect();
                return c ? new DOMRect(c.x, c.y, c.width, c.height) : n.editor.storage[q].rect;
              }, r = () => {
                w == null || w[0].setProps({
                  getReferenceClientRect: a
                });
              };
              (s = i.dom.parentElement) == null || s.addEventListener("scroll", r), n.editor.storage[q].rect = n.clientRect ? a() : {
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
function Ti(e, t, n) {
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
function Si(e, t, n) {
  const { doc: i, selection: a } = e;
  return !i || !a || !(a instanceof Sn) || a.forEachCell((r, s) => {
    e = Ti(e, s, n);
  }), e;
}
function Ye(e, t) {
  return ({ tr: n, state: i, dispatch: a }) => {
    const { selection: r } = i;
    return n = n.setSelection(r), n = Si(n, t, e), n.docChanged ? (a == null || a(n), !0) : !1;
  };
}
const Li = C.create({
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
      setTableCellBackground: (e) => Ye(e, this.options),
      unsetTableCellBackground: () => Ye("", this.options)
    };
  }
}), Ei = /(android|bb\d+|meego).+mobile|armv7l|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series[46]0|samsungbrowser.*mobile|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i, Hi = /CrOS/, zi = /android|ipad|playbook|silk/i;
function Qe(e = {}) {
  let t = e.ua || typeof navigator < "u" && navigator.userAgent;
  return t && typeof t == "object" && t.headers && typeof t.headers["user-agent"] == "string" && (t = t.headers["user-agent"]), typeof t != "string" ? !1 : !!(Ei.test(t) && !Hi.test(t) || e.tablet && zi.test(t) || e.tablet && e.featureDetect && navigator && navigator.maxTouchPoints > 1 && t.includes("Macintosh") && t.includes("Safari"));
}
const Xe = (e) => Array.from({ length: e }).map((t, n) => n + 1);
function Mi(e) {
  var l;
  const [t, n] = k(!0), [i, a] = k({
    rows: Qe() ? le : de,
    cols: Qe() ? le : de
  }), [r, s] = k({
    rows: ue,
    cols: ue
  });
  function c(h, f) {
    h === i.rows && a((_) => ({
      ..._,
      rows: Math.min(h + 1, le)
    })), f === i.cols && a((_) => ({
      ..._,
      cols: Math.min(f + 1, le)
    })), s({
      rows: h,
      cols: f
    });
  }
  function u(h, f) {
    e == null || e.createTable({ rows: h, cols: f, withHeaderRow: t }), d();
  }
  function d() {
    n(!1), a({
      rows: de,
      cols: de
    }), s({
      rows: ue,
      cols: ue
    });
  }
  return /* @__PURE__ */ m(X, { modal: !0, children: [
    /* @__PURE__ */ o(ee, { asChild: !0, children: e == null ? void 0 : e.children }),
    /* @__PURE__ */ o(
      te,
      {
        align: "start",
        className: "richtext-w-full !richtext-p-2",
        side: "bottom",
        children: /* @__PURE__ */ m("div", { className: "table-grid-size-editor richtext-p-0", children: [
          /* @__PURE__ */ o("div", { className: "richtext-flex richtext-flex-col richtext-flex-wrap richtext-justify-between richtext-gap-1", children: (l = Xe(i == null ? void 0 : i.rows)) == null ? void 0 : l.map((h) => {
            var f;
            return /* @__PURE__ */ o(
              "div",
              {
                className: "richtext-flex richtext-gap-1",
                children: (f = Xe(i == null ? void 0 : i.cols)) == null ? void 0 : f.map((_) => /* @__PURE__ */ o(
                  "div",
                  {
                    onMouseDown: () => u(h, _),
                    onMouseOver: () => c(h, _),
                    className: `richtext-cursor-pointer richtext-border-border ${_ <= r.cols && h <= r.rows && "tableCellActive !richtext-bg-foreground"}`,
                    children: /* @__PURE__ */ o("div", { className: "richtext-box-border richtext-size-4 richtext-rounded-[2px] !richtext-border richtext-border-solid !richtext-border-border richtext-p-1" })
                  },
                  `c-${_}`
                ))
              },
              `r-${h}`
            );
          }) }),
          /* @__PURE__ */ m("div", { className: "richtext-mt-2 richtext-text-center richtext-text-sm richtext-text-zinc-600", children: [
            r.rows,
            " ",
            "x",
            r.cols
          ] })
        ] })
      }
    )
  ] });
}
function Ri(e) {
  function t(n) {
    e.disabled || e.editor.chain().focus().insertTable({ ...n, withHeaderRow: !1 }).run();
  }
  return /* @__PURE__ */ o(Mi, { createTable: t, children: /* @__PURE__ */ o(
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
const xo = Ut.extend({
  addOptions() {
    var e;
    return {
      ...(e = this.parent) == null ? void 0 : e.call(this),
      resizable: !0,
      lastColumnResizable: !0,
      allowTableNodeSelection: !1,
      button: ({ editor: t, t: n }) => ({
        component: Ri,
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
      Kt.configure(this.options.tableRow),
      Vt.configure(this.options.tableHeader),
      Wt.configure(this.options.tableCell),
      Li.configure(this.options.tableCellBackground)
    ];
  }
}), wo = C.create({
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
      new se({
        key: new ne("format-painter"),
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
                  state: { tr: a, selection: r },
                  dom: s
                } = e;
                s.style.cursor = "", a = a.removeMark(r.from, r.to);
                for (const c of t)
                  c.type.name !== "link" && (a = a.addMark(r.from, r.to, c));
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
function Ii({ editor: e, ...t }) {
  const { t: n } = I(), [i, a] = k(-1), [r, s] = k([]), [c, u] = k(""), [d, l] = k(""), [h, f] = k(!1), [_, S] = k(!1);
  return T(() => {
    h || (u(""), l(""), a(-1), s([]), e.commands.setSearchTerm(""), e.commands.setReplaceTerm(""));
  }, [e, h]), T(() => {
    h && e && e.commands && e.commands.setSearchTerm && e.commands.setSearchTerm(c);
  }, [h, c, e]), T(() => {
    h && e && e.commands && e.commands.setReplaceTerm && e.commands.setReplaceTerm(d);
  }, [h, d, e]), T(() => {
    if (!e)
      return;
    const p = e.extensionManager.extensions.find((H) => H.name === Di.name);
    if (!p)
      return;
    const M = () => {
      if (!h)
        return;
      const H = p ? p.storage.currentIndex : -1, g = p ? p.storage.results : [];
      a((b) => b !== H ? H : b), s((b) => Ln(b, g) ? b : g);
    };
    return Ve(j.SEARCH_REPLCE, M), () => {
      p && Ve(j.SEARCH_REPLCE, M);
    };
  }, [h, e]), /* @__PURE__ */ m(
    X,
    {
      onOpenChange: f,
      open: h,
      children: [
        /* @__PURE__ */ o(
          ee,
          {
            asChild: !0,
            disabled: t == null ? void 0 : t.disabled,
            children: /* @__PURE__ */ o(
              x,
              {
                disabled: t == null ? void 0 : t.disabled,
                isActive: t == null ? void 0 : t.isActive,
                tooltip: t == null ? void 0 : t.tooltip,
                children: /* @__PURE__ */ o(A, { name: t == null ? void 0 : t.icon })
              }
            )
          }
        ),
        /* @__PURE__ */ m(
          te,
          {
            align: "start",
            className: "richtext-w-full",
            hideWhenDetached: !0,
            side: "bottom",
            children: [
              /* @__PURE__ */ m("div", { className: "richtext-mb-[6px] richtext-flex richtext-items-center richtext-justify-between", children: [
                /* @__PURE__ */ o(ve, { children: n("editor.search.dialog.text") }),
                /* @__PURE__ */ o("span", { className: "richtext-font-semibold", children: r.length > 0 ? `${i + 1}/${r.length}` : "0/0" })
              ] }),
              /* @__PURE__ */ m("div", { className: "richtext-mb-[10px] richtext-flex richtext-w-full richtext-max-w-sm richtext-items-center richtext-gap-1.5", children: [
                /* @__PURE__ */ o(
                  We,
                  {
                    autoFocus: !0,
                    className: "richtext-w-full",
                    onChange: (p) => u(p.target.value),
                    placeholder: "Text",
                    required: !0,
                    type: "text",
                    value: c
                  }
                ),
                /* @__PURE__ */ o(
                  K,
                  {
                    className: "richtext-flex-1",
                    disabled: r.length === 0,
                    onClick: e.commands.goToPrevSearchResult,
                    children: /* @__PURE__ */ o(A, { name: "ChevronUp" })
                  }
                ),
                /* @__PURE__ */ o(
                  K,
                  {
                    className: "richtext-flex-1",
                    disabled: r.length === 0,
                    onClick: e.commands.goToNextSearchResult,
                    children: /* @__PURE__ */ o(A, { name: "ChevronDown" })
                  }
                )
              ] }),
              /* @__PURE__ */ o(ve, { className: "richtext-mb-[6px]", children: n("editor.replace.dialog.text") }),
              /* @__PURE__ */ o("div", { className: "richtext-mb-[5px] richtext-flex richtext-w-full richtext-max-w-sm richtext-items-center richtext-gap-1.5", children: /* @__PURE__ */ o("div", { className: "richtext-relative richtext-w-full richtext-max-w-sm richtext-items-center", children: /* @__PURE__ */ o(
                We,
                {
                  className: "richtext-w-80",
                  onChange: (p) => l(p.target.value),
                  placeholder: "Text",
                  required: !0,
                  type: "text",
                  value: d
                }
              ) }) }),
              /* @__PURE__ */ m("div", { className: "richtext-mb-[10px] richtext-flex richtext-items-center richtext-space-x-2", children: [
                /* @__PURE__ */ o(
                  dn,
                  {
                    checked: _,
                    onCheckedChange: (p) => {
                      S(p), e.commands.setCaseSensitive(p);
                    }
                  }
                ),
                /* @__PURE__ */ o(ve, { children: n("editor.replace.caseSensitive") })
              ] }),
              /* @__PURE__ */ m("div", { className: "richtext-flex richtext-items-center richtext-gap-[10px]", children: [
                /* @__PURE__ */ o(
                  K,
                  {
                    className: "richtext-flex-1",
                    disabled: r.length === 0,
                    onClick: e.commands.replace,
                    children: n("editor.replace.dialog.text")
                  }
                ),
                /* @__PURE__ */ o(
                  K,
                  {
                    className: "richtext-flex-1",
                    disabled: r.length === 0,
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
const ie = (e, t) => t(e.tr);
function Pi(e, t, n) {
  return RegExp(t ? e.replace(/[$()*+./?[\\\]^{|}-]/g, String.raw`\$&`) : e, n ? "gu" : "gui");
}
function ji(e, t, n) {
  const i = [];
  let a = [];
  const r = [];
  let s = 0;
  if (!t)
    return { decorationsToReturn: [], results: [] };
  e == null || e.descendants((c, u) => {
    c.isText ? a[s] ? a[s] = {
      text: a[s].text + c.text,
      pos: a[s].pos
    } : a[s] = {
      text: `${c.text}`,
      pos: u
    } : s += 1;
  }), a = a.filter(Boolean);
  for (const { text: c, pos: u } of a) {
    const d = [...c.matchAll(t)];
    for (const l of d) {
      if (l[0] === "")
        break;
      l.index !== void 0 && r.push({
        from: u + l.index,
        to: u + l.index + l[0].length
      });
    }
  }
  for (const c of r)
    i.push(be.inline(c.from, c.to, { class: n }));
  return {
    decorationsToReturn: i,
    results: r
  };
}
function et(e, t, { state: n, dispatch: i }) {
  if (!t[0])
    return;
  const { from: r, to: s } = t[0];
  i && i(n.tr.insertText(e, r, s));
}
function Bi(e, t, n, i) {
  const a = t + 1;
  if (!i[a])
    return null;
  const { from: r, to: s } = i[t], c = s - r - e.length + n, { from: u, to: d } = i[a];
  return i[a] = {
    to: d - c,
    from: u - c
  }, [c, i];
}
function Oi(e, t, { tr: n, dispatch: i }) {
  let a = 0, r = t.slice();
  if (r.length === 0)
    return !1;
  for (let s = 0; s < r.length; s += 1) {
    const { from: c, to: u } = r[s];
    n.insertText(e, c, u);
    const d = Bi(e, s, a, r);
    d && (a = d[0], r = d[1]);
  }
  return i(n), !0;
}
function tt({ view: e, tr: t, searchResults: n, searchResultCurrentClass: i, gotoIndex: a }) {
  const r = n[a];
  if (r) {
    const s = t.setMeta("directDecoration", {
      fromPos: r.from,
      toPos: r.to,
      attrs: { class: i }
    });
    return e == null || e.dispatch(s), setTimeout(() => {
      const c = window.document.querySelector(`.${i}`);
      c && $e(c, { behavior: "smooth", scrollMode: "if-needed" });
    }, 0), !0;
  }
  return !1;
}
const Di = C.create({
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
        component: Ii,
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
      setSearchTerm: (e) => ({ state: t, dispatch: n }) => (this.options.searchTerm = e, this.storage.results = [], this.storage.currentIndex = 0, U(j.SEARCH_REPLCE), ie(t, n), !1),
      setReplaceTerm: (e) => ({ state: t, dispatch: n }) => (this.options.replaceTerm = e, ie(t, n), !1),
      setCaseSensitive: (e) => ({ state: t, dispatch: n }) => (this.options.caseSensitive = e, ie(t, n), !1),
      replace: () => ({ state: e, dispatch: t }) => {
        const { replaceTerm: n } = this.options, { currentIndex: i, results: a } = this.storage, r = a[i];
        return r ? (et(n, [r], { state: e, dispatch: t }), this.storage.results.splice(i, 1)) : (et(n, a, { state: e, dispatch: t }), this.storage.results.shift()), U(j.SEARCH_REPLCE), ie(e, t), !1;
      },
      replaceAll: () => ({ state: e, tr: t, dispatch: n }) => {
        const { replaceTerm: i } = this.options, { results: a } = this.storage;
        return Oi(i, a, { tr: t, dispatch: n }), this.storage.currentIndex = -1, this.storage.results = [], U(j.SEARCH_REPLCE), ie(e, n), !1;
      },
      goToPrevSearchResult: () => ({ view: e, tr: t }) => {
        const { searchResultCurrentClass: n } = this.options, { currentIndex: i, results: a } = this.storage, r = (i + a.length - 1) % a.length;
        return this.storage.currentIndex = r, U(j.SEARCH_REPLCE), tt({
          view: e,
          tr: t,
          searchResults: a,
          searchResultCurrentClass: n,
          gotoIndex: r
        });
      },
      goToNextSearchResult: () => ({ view: e, tr: t }) => {
        const { searchResultCurrentClass: n } = this.options, { currentIndex: i, results: a } = this.storage, r = (i + 1) % a.length;
        return this.storage.currentIndex = r, this.options.onChange && this.options.onChange(), U(j.SEARCH_REPLCE), tt({
          view: e,
          tr: t,
          searchResults: a,
          searchResultCurrentClass: n,
          gotoIndex: r
        });
      }
    };
  },
  addProseMirrorPlugins() {
    const e = this;
    return [
      new se({
        key: new ne("search"),
        state: {
          init() {
            return ge.empty;
          },
          apply(t) {
            const { doc: n, docChanged: i } = t, { searchTerm: a, searchResultClass: r, searchResultCurrentClass: s, disableRegex: c, caseSensitive: u } = e.options;
            if (i || a) {
              const { decorationsToReturn: d, results: l } = ji(
                n,
                Pi(a, c, u),
                r
              );
              if (e.storage.results = l, e.storage.currentIndex > l.length - 1 && (e.storage.currentIndex = 0), U(j.SEARCH_REPLCE), t.getMeta("directDecoration")) {
                const { fromPos: h, toPos: f, attrs: _ } = t.getMeta("directDecoration");
                d.push(be.inline(h, f, _));
              } else
                l.length > 0 && (d[0] = be.inline(l[0].from, l[0].to, {
                  class: s
                }));
              return ge.create(n, d);
            }
            return ge.empty;
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
function $i({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ o(
    V.Root,
    {
      className: E(
        "richtext-bg-popover richtext-text-popover-foreground richtext-isolate richtext-flex richtext-h-full richtext-w-fit richtext-flex-col richtext-overflow-hidden richtext-rounded-md",
        e
      ),
      "data-slot": "emoji-picker",
      ...t
    }
  );
}
function Fi({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ m(
    "div",
    {
      className: E("richtext-flex richtext-h-9 richtext-items-center richtext-gap-2 richtext-border-b richtext-px-3", e),
      "data-slot": "emoji-picker-search-wrapper",
      children: [
        /* @__PURE__ */ o(Bn, { className: "richtext-size-4 richtext-shrink-0 richtext-opacity-50" }),
        /* @__PURE__ */ o(
          V.Search,
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
function qi({ children: e, ...t }) {
  return /* @__PURE__ */ o("div", { ...t, className: "richtext-scroll-my-1 richtext-px-1", "data-slot": "emoji-picker-row", children: e });
}
function Ui({
  emoji: e,
  className: t,
  ...n
}) {
  return /* @__PURE__ */ o(
    "button",
    {
      ...n,
      className: E(
        "data-[active]:richtext-bg-accent richtext-flex richtext-size-7 richtext-items-center richtext-justify-center richtext-rounded-sm richtext-text-base",
        t
      ),
      "data-slot": "emoji-picker-emoji",
      children: e.emoji
    }
  );
}
function Ki({
  category: e,
  ...t
}) {
  return /* @__PURE__ */ o(
    "div",
    {
      ...t,
      className: "richtext-bg-popover richtext-text-muted-foreground richtext-px-3 richtext-pb-2 richtext-pt-3.5 richtext-text-xs richtext-leading-none",
      "data-slot": "emoji-picker-category-header",
      children: e.label
    }
  );
}
function Vi({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ m(
    V.Viewport,
    {
      className: E("richtext-outline-hidden richtext-relative richtext-flex-1", e),
      "data-slot": "emoji-picker-viewport",
      ...t,
      children: [
        /* @__PURE__ */ o(
          V.Loading,
          {
            className: "richtext-absolute richtext-inset-0 richtext-flex richtext-items-center richtext-justify-center richtext-text-muted-foreground",
            "data-slot": "emoji-picker-loading",
            children: /* @__PURE__ */ o(On, { className: "richtext-size-4 richtext-animate-spin" })
          }
        ),
        /* @__PURE__ */ o(
          V.Empty,
          {
            className: "richtext-absolute richtext-inset-0 richtext-flex richtext-items-center richtext-justify-center richtext-text-muted-foreground richtext-text-sm",
            "data-slot": "emoji-picker-empty",
            children: "No emoji found."
          }
        ),
        /* @__PURE__ */ o(
          V.List,
          {
            className: "richtext-select-none richtext-pb-1",
            components: {
              Row: qi,
              Emoji: Ui,
              CategoryHeader: Ki
            },
            "data-slot": "emoji-picker-list"
          }
        )
      ]
    }
  );
}
function Wi({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ o(
    "div",
    {
      className: E(
        "richtext-max-w-(--frimousse-viewport-width) richtext-flex richtext-w-full richtext-min-w-0 richtext-items-center richtext-gap-1 richtext-border-t richtext-p-2",
        e
      ),
      "data-slot": "emoji-picker-footer",
      ...t,
      children: /* @__PURE__ */ o(V.ActiveEmoji, { children: ({ emoji: n }) => n ? /* @__PURE__ */ m(ye, { children: [
        /* @__PURE__ */ o("div", { className: "richtext-flex richtext-size-7 richtext-flex-none richtext-items-center richtext-justify-center richtext-text-lg", children: n.emoji }),
        /* @__PURE__ */ o("span", { className: "richtext-text-secondary-foreground richtext-truncate richtext-text-xs", children: n.label })
      ] }) : /* @__PURE__ */ o("span", { className: "richtext-text-muted-foreground richtext-ml-1.5 richtext-flex richtext-h-7 richtext-items-center richtext-truncate richtext-text-xs", children: "Select an emoji…" }) })
    }
  );
}
function Gi({ onSelectEmoji: e, children: t }) {
  return /* @__PURE__ */ m(X, { modal: !0, children: [
    /* @__PURE__ */ o(ee, { asChild: !0, children: t }),
    /* @__PURE__ */ o(
      te,
      {
        align: "start",
        className: "richtext-size-full richtext-p-2",
        hideWhenDetached: !0,
        side: "bottom",
        children: /* @__PURE__ */ m(
          $i,
          {
            className: "!richtext-h-[342px]",
            onEmojiSelect: ({ emoji: n }) => {
              e(n);
            },
            children: [
              /* @__PURE__ */ o(Fi, {}),
              /* @__PURE__ */ o(Vi, {}),
              /* @__PURE__ */ o(Wi, {})
            ]
          }
        )
      }
    )
  ] });
}
function Zi({ editor: e, icon: t, ...n }) {
  const i = D(
    (a) => {
      const { selection: r } = e.state, { $anchor: s } = r;
      return e.chain().insertContentAt(s.pos, a).run();
    },
    [e]
  );
  return /* @__PURE__ */ o(Gi, { onSelectEmoji: i, children: /* @__PURE__ */ o(
    x,
    {
      icon: t,
      tooltip: n == null ? void 0 : n.tooltip
    }
  ) });
}
const ut = Be((e, t) => {
  const n = $(null), [i, a] = k(0), { t: r } = I(), s = (l) => {
    const h = e.items[l];
    h && e.command(h);
  }, c = () => {
    a((i + e.items.length - 1) % e.items.length);
  }, u = () => {
    a((i + 1) % e.items.length);
  }, d = () => {
    s(i);
  };
  return T(() => a(0), [e.items]), T(() => {
    if (Number.isNaN(i + 1))
      return;
    const l = n.current.querySelector(`span:nth-of-type(${i + 1})`);
    l && $e(l, { behavior: "smooth", scrollMode: "if-needed" });
  }, [i]), Oe(t, () => ({
    onKeyDown: ({ event: l }) => l.key === "ArrowUp" ? (c(), !0) : l.key === "ArrowDown" ? (u(), !0) : l.key === "Enter" ? (d(), !0) : !1
  })), /* @__PURE__ */ o("div", { className: "richtext-max-h-[320px] richtext-w-[200px] richtext-overflow-y-auto richtext-overflow-x-hidden richtext-rounded-sm !richtext-border richtext-bg-popover richtext-p-1 richtext-text-popover-foreground richtext-shadow-md richtext-outline-none", children: /* @__PURE__ */ o("div", { ref: n, children: e.items.length > 0 ? e.items.map((l, h) => /* @__PURE__ */ m(
    "span",
    {
      className: R(" richtext-relative richtext-flex  richtext-cursor-default richtext-select-none richtext-items-center richtext-rounded-sm richtext-px-2 richtext-py-1.5 richtext-text-sm richtext-outline-none richtext-transition-colors hover:richtext-bg-accent focus:richtext-bg-accent  focus:richtext-text-accent-foreground", h === i ? "bg-accent" : ""),
      onClick: () => s(h),
      children: [
        l.fallbackImage ? /* @__PURE__ */ o(
          "img",
          {
            className: "richtext-size-[1em]",
            src: l.fallbackImage
          }
        ) : l.emoji,
        ":",
        l.name,
        ":"
      ]
    },
    `emoji-list-code-${h}`
  )) : /* @__PURE__ */ o("div", { className: "richtext-relative richtext-flex  richtext-cursor-default richtext-select-none richtext-items-center richtext-rounded-sm richtext-px-2 richtext-py-1.5 richtext-text-sm richtext-outline-none richtext-transition-colors", children: /* @__PURE__ */ o("span", { children: r("no_result_found") }) }) }) });
});
ut.displayName = "EmojiList";
const G = {
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
  mermaid: "🧜‍♀️",
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
Object.keys(G).reduce((e, t) => {
  const n = G[t];
  return e[n] = t, e;
}, {});
const Ji = Object.keys(G).map((e) => e);
Object.keys(G).map((e) => G[e]);
function Yi(e) {
  return Ji.filter((t) => t.startsWith(e)).map((t) => ({
    name: t,
    emoji: G[t]
  }));
}
const Qi = 200, Xi = new ne("emoji"), po = oe.create({
  name: "emoji",
  content: "text*",
  priority: Qi,
  addOptions() {
    var e;
    return {
      ...(e = this.parent) == null ? void 0 : e.call(this),
      HTMLAttributes: {},
      suggestion: {
        char: ":",
        pluginKey: Xi,
        command: ({ editor: t, range: n, props: i }) => {
          t.chain().focus().insertContentAt(n, `${i.emoji} `).run();
        }
      },
      button: ({ editor: t, t: n }) => ({
        component: Zi,
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
      at({
        editor: this.editor,
        ...this.options.suggestion
      })
    ];
  }
}).configure({
  suggestion: {
    items: ({ query: e }) => Yi(e),
    render: () => {
      let e, t, n;
      return {
        onStart: (i) => {
          n = i.editor.isEditable, n && (e = new Ee(ut, {
            props: i,
            editor: i.editor
          }), t = Pe("body", {
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
function ea(e) {
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
    } catch (r) {
      console.error(r);
    }
    setTimeout(() => {
      document.body.removeChild(t);
    }, 100);
  });
}
function ta(e) {
  const t = e.getHTML();
  return t ? (ea(t), !0) : !1;
}
const yo = C.create({
  name: "exportPdf",
  addOptions() {
    var e;
    return {
      ...(e = this.parent) == null ? void 0 : e.call(this),
      button: ({ editor: t, t: n }) => ({
        component: x,
        componentProps: {
          action: () => {
            ta(t);
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
function na(e, t) {
  const n = atob(e.split(",")[1]), i = Array.from({ length: n.length });
  for (let r = 0; r < n.length; r++)
    i[r] = n.charCodeAt(r);
  const a = new Uint8Array(i);
  return new Blob([a], { type: t });
}
function ia(e, t) {
  return new File([e], t, { type: e.type });
}
function aa(e) {
  const { toast: t } = un(), { t: n } = I(), [i, a] = k(!1), r = $(null);
  function s() {
    var h;
    (h = r.current) == null || h.click();
  }
  function c(h) {
    const f = h.target.files[0];
    if (f) {
      if (f.size > e.limit) {
        t({
          variant: "destructive",
          title: n("editor.importWord.limitSize")
        });
        return;
      }
      d(f);
    }
  }
  async function u(h) {
    var M;
    const _ = new DOMParser().parseFromString(h, "text/html"), S = _.querySelectorAll("img");
    if (S.length === 0)
      return _.body.innerHTML;
    if (hn(e.editor, "image")) {
      const H = (M = e.editor.extensionManager.extensions.find(
        (g) => g.name === "importWord"
      )) == null ? void 0 : M.options;
      if (H && typeof H.upload == "function") {
        const g = [];
        for (const y of S) {
          const z = y.getAttribute("src"), L = na(z, "image/jpeg"), O = ia(L, "image.jpeg");
          g.push(O);
        }
        const b = await H.upload(g);
        for (const [y, z] of S.entries()) {
          z.setAttribute("src", b[y].src);
          const L = z.parentElement;
          (L == null ? void 0 : L.tagName) === "P" && (L.insertAdjacentElement("beforebegin", z), !L.hasChildNodes() && L.textContent === "" && L.remove());
        }
        return _.body.innerHTML;
      } else
        return console.warn("Image Upload method found, skip image conversion"), _.body.innerHTML;
    } else
      return console.error("Image extension not found, unable to convert image"), _.body.innerHTML;
  }
  async function d(h) {
    a(!0);
    try {
      if (e.convert) {
        const f = await e.convert(h);
        l(f);
      } else {
        const f = await h.arrayBuffer(), { value: _ } = await En.convertToHtml(
          { arrayBuffer: f },
          e == null ? void 0 : e.mammothOptions
        );
        l(_);
      }
    } finally {
      a(!1);
    }
  }
  async function l(h) {
    const f = await u(h);
    e.editor.chain().setContent(f, !0).run();
  }
  return /* @__PURE__ */ m("div", { children: [
    /* @__PURE__ */ o(
      x,
      {
        action: s,
        disabled: e == null ? void 0 : e.disabled,
        icon: e == null ? void 0 : e.icon,
        loading: i,
        tooltip: e == null ? void 0 : e.tooltip
      }
    ),
    /* @__PURE__ */ o(
      "input",
      {
        accept: ".docx",
        onChange: c,
        ref: r,
        type: "file",
        style: {
          display: "none"
        }
      }
    )
  ] });
}
const vo = C.create({
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
        const { convert: a, limit: r, mammothOptions: s } = n.options;
        return {
          component: aa,
          componentProps: {
            editor: t,
            convert: a,
            limit: r,
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
}), oa = typeof window < "u";
function ra(e, t) {
  if (oa) {
    const n = window.URL.createObjectURL(e), i = document.createElement("a");
    return i.href = n, i.download = t, i.click(), window.URL.revokeObjectURL(n), Promise.resolve();
  }
  return console.error("Download is not supported in Node.js"), Promise.resolve();
}
const sa = {
  ...F,
  hardBreak: F.hard_break,
  codeBlock: F.code_block,
  orderedList: F.ordered_list,
  listItem: F.list_item,
  bulletList: F.bullet_list,
  horizontalRule: F.horizontal_rule,
  // Requirement Buffer on browser
  image(e, t) {
    e.renderInline(t), e.closeBlock(t);
  },
  table(e, t) {
    e.table(t, {
      tableOptions: {
        width: {
          size: 100,
          type: zn.PERCENTAGE
        }
      }
    });
  }
}, ca = new Mn(sa, Rn), ko = C.create({
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
            const r = await (await fetch(i)).arrayBuffer();
            return new Uint8Array(r);
          }
        }, n = ca.serialize(e.state.doc, t);
        return Hn.toBlob(n).then((i) => ra(new Blob([i]), "export-document.docx")), !0;
      }
    };
  }
}), la = "_toc_aag8a_1", da = "_visible_aag8a_7", ua = "_list_aag8a_11", ha = "_item_aag8a_16", fe = {
  toc: la,
  visible: da,
  list: ua,
  item: ha
};
function ma(e) {
  const t = [], n = [t];
  return e.forEach((i) => {
    let a = -1, r = n[i.level + a];
    for (; !r; )
      a -= 1, r = n[i.level + a];
    r.push({ ...i, children: n[i.level] = [] });
  }), t;
}
function fa({ editor: e }) {
  const t = Me(), [n, i] = k([]), { t: a } = I(), r = D(() => {
    const s = [], c = e.state.tr;
    e.state.doc.descendants((u, d) => {
      if (u.type.name === "heading") {
        const l = `heading-${s.length + 1}`;
        u.attrs.id !== l && c.setNodeMarkup(d, void 0, {
          ...u.attrs,
          id: l
        }), s.push({
          level: u.attrs.level,
          text: u.textContent,
          id: l
        });
      }
    }), c.setMeta("addToHistory", !1), c.setMeta("preventUpdate", !0), e.view.dispatch(c), i(s), e.eventEmitter && e.eventEmitter.emit("TableOfContents", ma(s));
  }, [e]);
  return T(() => {
    if (e) {
      if (!e.options.editable) {
        r();
        return;
      }
      return e.on("update", r), () => {
        e.off("update", r);
      };
    }
  }, [e, r]), T(() => {
    r();
  }, []), /* @__PURE__ */ o(ae, { className: R("tableOfContent", fe.toc, t && fe.visible), children: t ? /* @__PURE__ */ m("div", { style: { position: "relative" }, children: [
    /* @__PURE__ */ o("p", { className: "text-[20px] richtext-mb-[8px] richtext-font-semibold", children: a("editor.table_of_content") }),
    /* @__PURE__ */ o("ul", { className: fe.list, children: n.map((s, c) => /* @__PURE__ */ o(
      "li",
      {
        className: fe.item,
        style: { paddingLeft: `${s.level - 1}rem` },
        children: /* @__PURE__ */ o("a", { href: `#${s.id}`, children: s.text })
      },
      `table-of-content-${c}`
    )) })
  ] }) : null });
}
function _a(e, ...t) {
  const [n, i] = k(!1);
  return T(() => {
    const a = () => {
      i(e.isActive.apply(e, t));
    };
    return e.on("selectionUpdate", a), e.on("transaction", a), () => {
      e.off("selectionUpdate", a), e.off("transaction", a);
    };
  }, [e, t, i]), n;
}
function ga({ editor: e, icon: t, tooltip: n }) {
  const i = _a(e, wa.name), a = D(() => {
    if (i) {
      e.chain().focus().removeTableOfContents().run();
      return;
    }
    e.chain().focus().setTableOfContents().run();
  }, [e, i]);
  return /* @__PURE__ */ o(
    x,
    {
      action: a,
      isActive: () => i || !1,
      icon: t,
      tooltip: n
    }
  );
}
function ba(e) {
  return e && e.type.name === "title";
}
function xa(e, t) {
  const i = [e.getJSON()], a = [];
  for (; i.length > 0; ) {
    const r = i.shift();
    r.type === t && a.push(r), r.content && r.content.length > 0 && i.push(...r.content);
  }
  return a;
}
const wa = oe.create({
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
        component: ga,
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
    return ["toc", re(e)];
  },
  addNodeView() {
    return Le(fa);
  },
  // @ts-expect-error
  addCommands() {
    return {
      setTableOfContents: () => ({ commands: e, editor: t, view: n }) => {
        if (xa(t, this.name).length > 0) {
          this.options.onHasOneBeforeInsert();
          return;
        }
        const a = n.props.state.doc.content.firstChild;
        if (ba(a)) {
          const r = (a.firstChild && a.firstChild.nodeSize || 0) + 1;
          return e.insertContentAt(r, { type: this.name });
        }
        return e.insertContent({
          type: this.name
        });
      },
      removeTableOfContents: () => ({ state: e, dispatch: t }) => {
        const { tr: n } = e, i = e.schema.nodes.tableOfContents;
        return e.doc.descendants((a, r) => {
          if (a.type === i) {
            const s = r, c = r + a.nodeSize;
            n.delete(s, c);
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
function pa(e) {
  var n;
  const t = B(() => {
    var r;
    const i = (r = e == null ? void 0 : e.items) == null ? void 0 : r.find((s) => s.isActive());
    return i && !i.default ? {
      ...i,
      icon: i.icon ? i.icon : e.icon
    } : {
      title: e == null ? void 0 : e.tooltip,
      icon: e.icon,
      isActive: () => !1
    };
  }, [e]);
  return /* @__PURE__ */ m(X, { modal: !0, children: [
    /* @__PURE__ */ o(
      ee,
      {
        asChild: !0,
        disabled: e == null ? void 0 : e.disabled,
        children: /* @__PURE__ */ o(
          x,
          {
            customClass: "!richtext-w-12 richtext-h-12",
            disabled: e == null ? void 0 : e.disabled,
            icon: e == null ? void 0 : e.icon,
            tooltip: e == null ? void 0 : e.tooltip,
            children: /* @__PURE__ */ o(
              A,
              {
                className: "richtext-ml-1 richtext-size-3 richtext-text-zinc-500",
                name: "MenuDown"
              }
            )
          }
        )
      }
    ),
    /* @__PURE__ */ o(
      te,
      {
        align: "start",
        className: "richtext-flex richtext-w-full richtext-min-w-4 richtext-flex-row richtext-gap-1 !richtext-p-[4px]",
        side: "bottom",
        children: (n = e == null ? void 0 : e.items) == null ? void 0 : n.map((i, a) => {
          var r, s;
          return /* @__PURE__ */ m(xe, { children: [
            /* @__PURE__ */ o(we, { asChild: !0, children: /* @__PURE__ */ o(
              Ie,
              {
                className: "richtext-size-7 richtext-p-1",
                "data-state": t.title === i.title ? "on" : "off",
                onClick: i == null ? void 0 : i.action,
                pressed: t.title === i.title,
                size: "sm",
                children: (i == null ? void 0 : i.icon) && /* @__PURE__ */ o(A, { name: i.icon })
              }
            ) }),
            /* @__PURE__ */ m(pe, { className: "richtext-flex richtext-flex-col richtext-items-center", children: [
              /* @__PURE__ */ o("span", { children: i.title }),
              !!((r = i.shortcutKeys) != null && r.length) && /* @__PURE__ */ o("span", { children: (s = i.shortcutKeys) == null ? void 0 : s.map((c) => Re(c)).join(" ") })
            ] })
          ] }, `text-align-${a}`);
        })
      }
    )
  ] });
}
const Co = C.create({
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
        const a = ((u = n.options) == null ? void 0 : u.directions) || [], r = {
          auto: "TextDirection",
          ltr: "LeftToRight",
          rtl: "RightToLeft"
        }, s = a.map((d) => ({
          title: i(`editor.textDirection.${d}.tooltip`),
          icon: r[d],
          isActive: () => !1,
          action: () => {
            var l, h, f, _;
            if (d === "auto") {
              (h = (l = t.commands) == null ? void 0 : l.unsetTextDirection) == null || h.call(l);
              return;
            }
            (_ = (f = t.commands) == null ? void 0 : f.setTextDirection) == null || _.call(f, d);
          },
          disabled: !1
        })), c = s.filter((d) => d.disabled).length === s.length;
        return {
          component: pa,
          componentProps: {
            icon: "TextDirection",
            tooltip: i("editor.textDirection.tooltip"),
            disabled: c,
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
}), ya = "_listUsers_en3pm_1", va = "_itemUser_en3pm_10", ka = "_selectedUser_en3pm_31", _e = {
  listUsers: ya,
  itemUser: va,
  selectedUser: ka
}, Ca = Be((e, t) => {
  const n = $(null), [i, a] = k(0), r = (d) => {
    const l = e.items[d];
    l && e.command({ id: l, label: l });
  }, s = () => {
    a((i + e.items.length - 1) % e.items.length);
  }, c = () => {
    a((i + 1) % e.items.length);
  }, u = () => {
    r(i);
  };
  return T(() => a(0), [e.items]), T(() => {
    if (Number.isNaN(i + 1))
      return;
    const d = n.current.querySelector(`span:nth-of-type(${i + 1})`);
    d && $e(d, { behavior: "smooth", scrollMode: "if-needed" });
  }, [i]), Oe(t, () => ({
    onKeyDown: ({ event: d }) => d.key === "ArrowUp" ? (s(), !0) : d.key === "ArrowDown" ? (c(), !0) : d.key === "Enter" ? (u(), !0) : !1
  })), /* @__PURE__ */ o("div", { className: R("listUsers", _e.listUsers), children: /* @__PURE__ */ o("div", { ref: n, children: e.items.length > 0 ? e.items.map((d, l) => /* @__PURE__ */ o(
    "span",
    {
      className: R("itemUser", _e.itemUser, l === i ? _e.selectedUser : ""),
      onClick: () => r(l),
      children: d
    },
    l
  )) : /* @__PURE__ */ o("div", { className: R("itemUserEmpty", _e.itemUser), children: "Empty" }) }) });
}), Na = [
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
], Aa = {
  items: async ({ query: e }) => Na.map((n) => n.name).filter((n) => n.toLowerCase().startsWith(e.toLowerCase())),
  render: () => {
    let e, t;
    return {
      onStart: (n) => {
        e = new Ee(Ca, {
          props: n,
          editor: n.editor
        }), t = Pe("body", {
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
}, No = Gt.extend({
  addAttributes() {
    return {
      id: {
        default: "",
        parseHTML: P("id")
      },
      label: {
        default: "",
        parseHTML: P("label")
      }
    };
  }
}).configure({
  HTMLAttributes: {
    class: "mention"
  },
  suggestion: Aa
}), Ta = {
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
function Sa(e) {
  const t = Ta[e], a = new DOMParser().parseFromString(t, "image/svg+xml").documentElement, r = [
    "svg",
    {
      ...Array.from(a.attributes).reduce((s, c) => (s[c.name] = c.value, s), {})
    }
  ];
  return Array.from(a.childNodes).forEach((s) => {
    if (s.nodeType === 1) {
      const c = [
        s.tagName.toLowerCase(),
        Array.from(s.attributes).reduce((u, d) => (u[d.name] = d.value, u), {})
      ];
      s.textContent && c.push(s.textContent), r.push(c);
    }
  }), r;
}
const La = {
  audio: /* @__PURE__ */ o(Kn, {}),
  video: /* @__PURE__ */ o(Un, {}),
  file: /* @__PURE__ */ o(qn, {}),
  image: /* @__PURE__ */ o(Fn, {}),
  pdf: /* @__PURE__ */ o(_n, {}),
  word: /* @__PURE__ */ o(fn, {}),
  excel: /* @__PURE__ */ o($n, {}),
  ppt: /* @__PURE__ */ o(Dn, {})
};
function ht(e, t = !1) {
  const n = mn(e), i = La[n] || /* @__PURE__ */ o(ye, {});
  return t ? Sa(n) : i;
}
const Ea = "_wrap_1x1ms_2", Ce = {
  wrap: Ea
};
function Ha({ editor: e, node: t, updateAttributes: n, deleteNode: i, extension: a }) {
  var z;
  const r = $(null), s = Me(), { hasTrigger: c, fileName: u, fileSize: d, fileExt: l, fileType: h, url: f, error: _ } = t.attrs, [S, p] = k(!1), { t: M } = I(), H = (z = a == null ? void 0 : a.options) == null ? void 0 : z.upload, g = D(() => {
    !s || f || s && r.current.click();
  }, [s, f]), b = D(
    async (L) => {
      const O = L.target.files && L.target.files[0];
      if (!O)
        return;
      const mt = {
        fileName: bn(O.name),
        fileSize: O.size,
        fileType: O.type,
        fileExt: gn(O.name)
      };
      p(!0);
      try {
        const ce = await H(O);
        n({ ...mt, url: ce }), p(!1);
      } catch (ce) {
        n({ error: `File upload fail: ${ce && ce.message}` || "Unknown error" }), p(!1), r.current.value = "";
      }
    },
    [p, n]
  );
  T(() => {
    !f && !c && (g(), n({ hasTrigger: !0 }));
  }, [f, c, g, n]);
  const y = D(() => i(), [e]);
  return s && !f ? /* @__PURE__ */ o(ae, { children: /* @__PURE__ */ m("div", { className: R(Ce.wrap, "render-wrapper"), children: [
    /* @__PURE__ */ o(
      "p",
      {
        onClick: g,
        style: { cursor: "pointer" },
        children: S ? /* @__PURE__ */ o("span", { children: M("editor.attachment.uploading") }) : /* @__PURE__ */ o("span", { children: M("editor.attachment.please_upload") })
      }
    ),
    /* @__PURE__ */ o(
      "input",
      {
        hidden: !0,
        onChange: b,
        ref: r,
        type: "file"
      }
    )
  ] }) }) : f ? /* @__PURE__ */ o(ae, { children: /* @__PURE__ */ m(
    "div",
    {
      className: R(Ce.wrap, "render-wrapper"),
      onClick: g,
      children: [
        /* @__PURE__ */ m("div", { className: "richtext-flex richtext-items-center richtext-gap-[4px]", children: [
          /* @__PURE__ */ o("span", { children: ht(h) }),
          /* @__PURE__ */ m("span", { children: [
            u,
            ".",
            l
          ] }),
          /* @__PURE__ */ m("span", { children: [
            "(",
            st(d),
            ")"
          ] })
        ] }),
        /* @__PURE__ */ o(
          x,
          {
            action: y,
            icon: "Trash2",
            tooltip: M("editor.delete")
          }
        )
      ]
    }
  ) }) : _ !== "null" ? /* @__PURE__ */ o(ae, { children: /* @__PURE__ */ o(
    "div",
    {
      className: R(Ce.wrap, "render-wrapper"),
      onClick: g,
      children: /* @__PURE__ */ o("p", { children: _ })
    }
  ) }) : /* @__PURE__ */ o(ye, {});
}
const Ao = oe.create({
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
      fileExt: r = ""
    } = e || {};
    return [
      "div",
      re(
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
          ht(a, !0)
        ],
        [
          "span",
          { class: "attachment__text" },
          `${n}.${r} (${st(i)})`
        ]
      ] : ["div", { class: "attachment__placeholder" }]
    ];
  },
  addAttributes() {
    return {
      fileName: {
        default: null,
        parseHTML: P("filename")
      },
      fileSize: {
        default: null,
        parseHTML: P("filesize")
      },
      fileType: {
        default: null,
        parseHTML: P("filetype")
      },
      fileExt: {
        default: null,
        parseHTML: P("fileext")
      },
      url: {
        default: null,
        parseHTML: P("url")
      },
      hasTrigger: {
        default: !1,
        parseHTML: (e) => P("hastrigger")(e) === "true"
      },
      error: {
        default: null,
        parseHTML: P("error")
      }
    };
  },
  addCommands() {
    return {
      setAttachment: (e = {}) => ({ chain: t }) => t().insertContent({ type: this.name, attrs: e }).run()
    };
  },
  addNodeView() {
    return Le(Ha);
  }
});
export {
  Ao as Attachment,
  ho as BaseKit,
  ro as Blockquote,
  Ka as Bold,
  no as BulletList,
  io as Clear,
  Za as Code,
  ni as CodeBlock,
  eo as Color,
  an as Column,
  uo as ColumnActionButton,
  Lo as Drawer,
  po as Emoji,
  yo as ExportPdf,
  ko as ExportWord,
  Ja as FontFamily,
  Xa as FontSize,
  wo as FormatPainter,
  Ya as Heading,
  to as Highlight,
  lo as History,
  co as HorizontalRule,
  Eo as Iframe,
  sn as Image,
  Ho as ImageGif,
  vo as ImportWord,
  _o as Indent,
  Va as Italic,
  zo as Katex,
  go as LineHeight,
  so as Link,
  No as Mention,
  Mo as Mermaid,
  fo as MoreMark,
  on as MultiColumn,
  ao as OrderedList,
  Di as SearchAndReplace,
  bo as SlashCommand,
  Ga as Strike,
  mo as SubAndSuperScript,
  xo as Table,
  wa as TableOfContents,
  oo as TaskList,
  Qa as TextAlign,
  Co as TextDirection,
  Ro as Twitter,
  Wa as Underline,
  ln as Video
};
