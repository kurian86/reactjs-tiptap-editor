import Je from "tippy.js";
import { E as Ye, a as Xe, P as H, b as $, S as Z, k as Qe, T as D, D as Ze, c as we, F as V, N as tn, d as xt, w as en, e as nn, f as rn, g as dt, h as tt, s as sn, i as Zt, j as on, l as an, m as ln, n as cn, o as dn, A as un, p as pn, q as hn, r as fn, t as mn, u as gn, v as yn, x as vn, y as Ee, z as bn, B as Mn, C as Sn, G as kn, H as wn, I as En, J as Tn, K as Ft, R as Cn, L as xn, M as An, O as On, Q as te, U as Ln, V as Te, W as _n, X as Pn, Y as Rn, Z as Hn, _ as In, $ as pt, a0 as zt, a1 as $n, a2 as Dn, a3 as Nn, a4 as Ce, a5 as Bn, a6 as ee, a7 as jn, a8 as ne, a9 as re, aa as Fn, ab as se, ac as zn, ad as Vn, ae as Wn, af as Kn, ag as Un, ah as qn, ai as Gn } from "./vendor-CPA5z-E-.js";
import L, { useRef as Jn, useState as Vt, useDebugValue as xe, useEffect as Wt, forwardRef as Yn, useLayoutEffect as Xn, useContext as Ae, createContext as Oe } from "react";
import Qn, { flushSync as Zn } from "react-dom";
function gt(e) {
  const { state: t, transaction: n } = e;
  let { selection: r } = n, { doc: s } = n, { storedMarks: o } = n;
  return {
    ...t,
    apply: t.apply.bind(t),
    applyTransaction: t.applyTransaction.bind(t),
    plugins: t.plugins,
    schema: t.schema,
    reconfigure: t.reconfigure.bind(t),
    toJSON: t.toJSON.bind(t),
    get storedMarks() {
      return o;
    },
    get selection() {
      return r;
    },
    get doc() {
      return s;
    },
    get tr() {
      return r = n.selection, s = n.doc, o = n.storedMarks, n;
    }
  };
}
class yt {
  constructor(t) {
    this.editor = t.editor, this.rawCommands = this.editor.extensionManager.commands, this.customState = t.state;
  }
  get hasCustomState() {
    return !!this.customState;
  }
  get state() {
    return this.customState || this.editor.state;
  }
  get commands() {
    const { rawCommands: t, editor: n, state: r } = this, { view: s } = n, { tr: o } = r, i = this.buildProps(o);
    return Object.fromEntries(Object.entries(t).map(([a, c]) => [a, (...u) => {
      const d = c(...u)(i);
      return !o.getMeta("preventDispatch") && !this.hasCustomState && s.dispatch(o), d;
    }]));
  }
  get chain() {
    return () => this.createChain();
  }
  get can() {
    return () => this.createCan();
  }
  createChain(t, n = !0) {
    const { rawCommands: r, editor: s, state: o } = this, { view: i } = s, a = [], c = !!t, l = t || o.tr, u = () => (!c && n && !l.getMeta("preventDispatch") && !this.hasCustomState && i.dispatch(l), a.every((p) => p === !0)), d = {
      ...Object.fromEntries(Object.entries(r).map(([p, h]) => [p, (...f) => {
        const g = this.buildProps(l, n), y = h(...f)(g);
        return a.push(y), d;
      }])),
      run: u
    };
    return d;
  }
  createCan(t) {
    const { rawCommands: n, state: r } = this, s = !1, o = t || r.tr, i = this.buildProps(o, s);
    return {
      ...Object.fromEntries(Object.entries(n).map(([c, l]) => [c, (...u) => l(...u)({ ...i, dispatch: void 0 })])),
      chain: () => this.createChain(o, s)
    };
  }
  buildProps(t, n = !0) {
    const { rawCommands: r, editor: s, state: o } = this, { view: i } = s, a = {
      tr: t,
      editor: s,
      view: i,
      state: gt({
        state: o,
        transaction: t
      }),
      dispatch: n ? () => {
      } : void 0,
      chain: () => this.createChain(t, n),
      can: () => this.createCan(t),
      get commands() {
        return Object.fromEntries(Object.entries(r).map(([c, l]) => [c, (...u) => l(...u)(a)]));
      }
    };
    return a;
  }
}
class tr {
  constructor() {
    this.callbacks = {};
  }
  on(t, n) {
    return this.callbacks[t] || (this.callbacks[t] = []), this.callbacks[t].push(n), this;
  }
  emit(t, ...n) {
    const r = this.callbacks[t];
    return r && r.forEach((s) => s.apply(this, n)), this;
  }
  off(t, n) {
    const r = this.callbacks[t];
    return r && (n ? this.callbacks[t] = r.filter((s) => s !== n) : delete this.callbacks[t]), this;
  }
  once(t, n) {
    const r = (...s) => {
      this.off(t, r), n.apply(this, s);
    };
    return this.on(t, r);
  }
  removeAllListeners() {
    this.callbacks = {};
  }
}
function S(e, t, n) {
  return e.config[t] === void 0 && e.parent ? S(e.parent, t, n) : typeof e.config[t] == "function" ? e.config[t].bind({
    ...n,
    parent: e.parent ? S(e.parent, t, n) : null
  }) : e.config[t];
}
function vt(e) {
  const t = e.filter((s) => s.type === "extension"), n = e.filter((s) => s.type === "node"), r = e.filter((s) => s.type === "mark");
  return {
    baseExtensions: t,
    nodeExtensions: n,
    markExtensions: r
  };
}
function Le(e) {
  const t = [], { nodeExtensions: n, markExtensions: r } = vt(e), s = [...n, ...r], o = {
    default: null,
    rendered: !0,
    renderHTML: null,
    parseHTML: null,
    keepOnSplit: !0,
    isRequired: !1
  };
  return e.forEach((i) => {
    const a = {
      name: i.name,
      options: i.options,
      storage: i.storage,
      extensions: s
    }, c = S(i, "addGlobalAttributes", a);
    if (!c)
      return;
    c().forEach((u) => {
      u.types.forEach((d) => {
        Object.entries(u.attributes).forEach(([p, h]) => {
          t.push({
            type: d,
            name: p,
            attribute: {
              ...o,
              ...h
            }
          });
        });
      });
    });
  }), s.forEach((i) => {
    const a = {
      name: i.name,
      options: i.options,
      storage: i.storage
    }, c = S(i, "addAttributes", a);
    if (!c)
      return;
    const l = c();
    Object.entries(l).forEach(([u, d]) => {
      const p = {
        ...o,
        ...d
      };
      typeof (p == null ? void 0 : p.default) == "function" && (p.default = p.default()), p != null && p.isRequired && (p == null ? void 0 : p.default) === void 0 && delete p.default, t.push({
        type: i.name,
        name: u,
        attribute: p
      });
    });
  }), t;
}
function R(e, t) {
  if (typeof e == "string") {
    if (!t.nodes[e])
      throw Error(`There is no node type named '${e}'. Maybe you forgot to add the extension?`);
    return t.nodes[e];
  }
  return e;
}
function C(...e) {
  return e.filter((t) => !!t).reduce((t, n) => {
    const r = { ...t };
    return Object.entries(n).forEach(([s, o]) => {
      if (!r[s]) {
        r[s] = o;
        return;
      }
      if (s === "class") {
        const a = o ? String(o).split(" ") : [], c = r[s] ? r[s].split(" ") : [], l = a.filter((u) => !c.includes(u));
        r[s] = [...c, ...l].join(" ");
      } else if (s === "style") {
        const a = o ? o.split(";").map((u) => u.trim()).filter(Boolean) : [], c = r[s] ? r[s].split(";").map((u) => u.trim()).filter(Boolean) : [], l = /* @__PURE__ */ new Map();
        c.forEach((u) => {
          const [d, p] = u.split(":").map((h) => h.trim());
          l.set(d, p);
        }), a.forEach((u) => {
          const [d, p] = u.split(":").map((h) => h.trim());
          l.set(d, p);
        }), r[s] = Array.from(l.entries()).map(([u, d]) => `${u}: ${d}`).join("; ");
      } else
        r[s] = o;
    }), r;
  }, {});
}
function ht(e, t) {
  return t.filter((n) => n.type === e.type.name).filter((n) => n.attribute.rendered).map((n) => n.attribute.renderHTML ? n.attribute.renderHTML(e.attrs) || {} : {
    [n.name]: e.attrs[n.name]
  }).reduce((n, r) => C(n, r), {});
}
function _e(e) {
  return typeof e == "function";
}
function E(e, t = void 0, ...n) {
  return _e(e) ? t ? e.bind(t)(...n) : e(...n) : e;
}
function er(e = {}) {
  return Object.keys(e).length === 0 && e.constructor === Object;
}
function nr(e) {
  return typeof e != "string" ? e : e.match(/^[+-]?(?:\d*\.)?\d+$/) ? Number(e) : e === "true" ? !0 : e === "false" ? !1 : e;
}
function oe(e, t) {
  return "style" in e ? e : {
    ...e,
    getAttrs: (n) => {
      const r = e.getAttrs ? e.getAttrs(n) : e.attrs;
      if (r === !1)
        return !1;
      const s = t.reduce((o, i) => {
        const a = i.attribute.parseHTML ? i.attribute.parseHTML(n) : nr(n.getAttribute(i.name));
        return a == null ? o : {
          ...o,
          [i.name]: a
        };
      }, {});
      return { ...r, ...s };
    }
  };
}
function ie(e) {
  return Object.fromEntries(
    // @ts-ignore
    Object.entries(e).filter(([t, n]) => t === "attrs" && er(n) ? !1 : n != null)
  );
}
function rr(e, t) {
  var n;
  const r = Le(e), { nodeExtensions: s, markExtensions: o } = vt(e), i = (n = s.find((l) => S(l, "topNode"))) === null || n === void 0 ? void 0 : n.name, a = Object.fromEntries(s.map((l) => {
    const u = r.filter((y) => y.type === l.name), d = {
      name: l.name,
      options: l.options,
      storage: l.storage,
      editor: t
    }, p = e.reduce((y, M) => {
      const v = S(M, "extendNodeSchema", d);
      return {
        ...y,
        ...v ? v(l) : {}
      };
    }, {}), h = ie({
      ...p,
      content: E(S(l, "content", d)),
      marks: E(S(l, "marks", d)),
      group: E(S(l, "group", d)),
      inline: E(S(l, "inline", d)),
      atom: E(S(l, "atom", d)),
      selectable: E(S(l, "selectable", d)),
      draggable: E(S(l, "draggable", d)),
      code: E(S(l, "code", d)),
      whitespace: E(S(l, "whitespace", d)),
      linebreakReplacement: E(S(l, "linebreakReplacement", d)),
      defining: E(S(l, "defining", d)),
      isolating: E(S(l, "isolating", d)),
      attrs: Object.fromEntries(u.map((y) => {
        var M;
        return [y.name, { default: (M = y == null ? void 0 : y.attribute) === null || M === void 0 ? void 0 : M.default }];
      }))
    }), m = E(S(l, "parseHTML", d));
    m && (h.parseDOM = m.map((y) => oe(y, u)));
    const f = S(l, "renderHTML", d);
    f && (h.toDOM = (y) => f({
      node: y,
      HTMLAttributes: ht(y, u)
    }));
    const g = S(l, "renderText", d);
    return g && (h.toText = g), [l.name, h];
  })), c = Object.fromEntries(o.map((l) => {
    const u = r.filter((g) => g.type === l.name), d = {
      name: l.name,
      options: l.options,
      storage: l.storage,
      editor: t
    }, p = e.reduce((g, y) => {
      const M = S(y, "extendMarkSchema", d);
      return {
        ...g,
        ...M ? M(l) : {}
      };
    }, {}), h = ie({
      ...p,
      inclusive: E(S(l, "inclusive", d)),
      excludes: E(S(l, "excludes", d)),
      group: E(S(l, "group", d)),
      spanning: E(S(l, "spanning", d)),
      code: E(S(l, "code", d)),
      attrs: Object.fromEntries(u.map((g) => {
        var y;
        return [g.name, { default: (y = g == null ? void 0 : g.attribute) === null || y === void 0 ? void 0 : y.default }];
      }))
    }), m = E(S(l, "parseHTML", d));
    m && (h.parseDOM = m.map((g) => oe(g, u)));
    const f = S(l, "renderHTML", d);
    return f && (h.toDOM = (g) => f({
      mark: g,
      HTMLAttributes: ht(g, u)
    })), [l.name, h];
  }));
  return new we({
    topNode: i,
    nodes: a,
    marks: c
  });
}
function At(e, t) {
  return t.nodes[e] || t.marks[e] || null;
}
function ae(e, t) {
  return Array.isArray(t) ? t.some((n) => (typeof n == "string" ? n : n.name) === e.name) : t;
}
function Kt(e, t) {
  const n = Ze.fromSchema(t).serializeFragment(e), s = document.implementation.createHTMLDocument().createElement("div");
  return s.appendChild(n), s.innerHTML;
}
const sr = (e, t = 500) => {
  let n = "";
  const r = e.parentOffset;
  return e.parent.nodesBetween(Math.max(0, r - t), r, (s, o, i, a) => {
    var c, l;
    const u = ((l = (c = s.type.spec).toText) === null || l === void 0 ? void 0 : l.call(c, {
      node: s,
      pos: o,
      parent: i,
      index: a
    })) || s.textContent || "%leaf%";
    n += s.isAtom && !s.isText ? u : u.slice(0, Math.max(0, r - o));
  }), n;
};
function Ut(e) {
  return Object.prototype.toString.call(e) === "[object RegExp]";
}
class bt {
  constructor(t) {
    this.find = t.find, this.handler = t.handler;
  }
}
const or = (e, t) => {
  if (Ut(t))
    return t.exec(e);
  const n = t(e);
  if (!n)
    return null;
  const r = [n.text];
  return r.index = n.index, r.input = e, r.data = n.data, n.replaceWith && (n.text.includes(n.replaceWith) || console.warn('[tiptap warn]: "inputRuleMatch.replaceWith" must be part of "inputRuleMatch.text".'), r.push(n.replaceWith)), r;
};
function ot(e) {
  var t;
  const { editor: n, from: r, to: s, text: o, rules: i, plugin: a } = e, { view: c } = n;
  if (c.composing)
    return !1;
  const l = c.state.doc.resolve(r);
  if (
    // check for code node
    l.parent.type.spec.code || !((t = l.nodeBefore || l.nodeAfter) === null || t === void 0) && t.marks.find((p) => p.type.spec.code)
  )
    return !1;
  let u = !1;
  const d = sr(l) + o;
  return i.forEach((p) => {
    if (u)
      return;
    const h = or(d, p.find);
    if (!h)
      return;
    const m = c.state.tr, f = gt({
      state: c.state,
      transaction: m
    }), g = {
      from: r - (h[0].length - o.length),
      to: s
    }, { commands: y, chain: M, can: v } = new yt({
      editor: n,
      state: f
    });
    p.handler({
      state: f,
      range: g,
      match: h,
      commands: y,
      chain: M,
      can: v
    }) === null || !m.steps.length || (m.setMeta(a, {
      transform: m,
      from: r,
      to: s,
      text: o
    }), c.dispatch(m), u = !0);
  }), u;
}
function ir(e) {
  const { editor: t, rules: n } = e, r = new H({
    state: {
      init() {
        return null;
      },
      apply(s, o, i) {
        const a = s.getMeta(r);
        if (a)
          return a;
        const c = s.getMeta("applyInputRules");
        return !!c && setTimeout(() => {
          let { text: u } = c;
          typeof u == "string" ? u = u : u = Kt(V.from(u), i.schema);
          const { from: d } = c, p = d + u.length;
          ot({
            editor: t,
            from: d,
            to: p,
            text: u,
            rules: n,
            plugin: r
          });
        }), s.selectionSet || s.docChanged ? null : o;
      }
    },
    props: {
      handleTextInput(s, o, i, a) {
        return ot({
          editor: t,
          from: o,
          to: i,
          text: a,
          rules: n,
          plugin: r
        });
      },
      handleDOMEvents: {
        compositionend: (s) => (setTimeout(() => {
          const { $cursor: o } = s.state.selection;
          o && ot({
            editor: t,
            from: o.pos,
            to: o.pos,
            text: "",
            rules: n,
            plugin: r
          });
        }), !1)
      },
      // add support for input rules to trigger on enter
      // this is useful for example for code blocks
      handleKeyDown(s, o) {
        if (o.key !== "Enter")
          return !1;
        const { $cursor: i } = s.state.selection;
        return i ? ot({
          editor: t,
          from: i.pos,
          to: i.pos,
          text: `
`,
          rules: n,
          plugin: r
        }) : !1;
      }
    },
    // @ts-ignore
    isInputRules: !0
  });
  return r;
}
function ar(e) {
  return Object.prototype.toString.call(e).slice(8, -1);
}
function it(e) {
  return ar(e) !== "Object" ? !1 : e.constructor === Object && Object.getPrototypeOf(e) === Object.prototype;
}
function Mt(e, t) {
  const n = { ...e };
  return it(e) && it(t) && Object.keys(t).forEach((r) => {
    it(t[r]) && it(e[r]) ? n[r] = Mt(e[r], t[r]) : n[r] = t[r];
  }), n;
}
class N {
  constructor(t = {}) {
    this.type = "mark", this.name = "mark", this.parent = null, this.child = null, this.config = {
      name: this.name,
      defaultOptions: {}
    }, this.config = {
      ...this.config,
      ...t
    }, this.name = this.config.name, t.defaultOptions && Object.keys(t.defaultOptions).length > 0 && console.warn(`[tiptap warn]: BREAKING CHANGE: "defaultOptions" is deprecated. Please use "addOptions" instead. Found in extension: "${this.name}".`), this.options = this.config.defaultOptions, this.config.addOptions && (this.options = E(S(this, "addOptions", {
      name: this.name
    }))), this.storage = E(S(this, "addStorage", {
      name: this.name,
      options: this.options
    })) || {};
  }
  static create(t = {}) {
    return new N(t);
  }
  configure(t = {}) {
    const n = this.extend({
      ...this.config,
      addOptions: () => Mt(this.options, t)
    });
    return n.name = this.name, n.parent = this.parent, n;
  }
  extend(t = {}) {
    const n = new N(t);
    return n.parent = this, this.child = n, n.name = t.name ? t.name : n.parent.name, t.defaultOptions && Object.keys(t.defaultOptions).length > 0 && console.warn(`[tiptap warn]: BREAKING CHANGE: "defaultOptions" is deprecated. Please use "addOptions" instead. Found in extension: "${n.name}".`), n.options = E(S(n, "addOptions", {
      name: n.name
    })), n.storage = E(S(n, "addStorage", {
      name: n.name,
      options: n.options
    })), n;
  }
  static handleExit({ editor: t, mark: n }) {
    const { tr: r } = t.state, s = t.state.selection.$from;
    if (s.pos === s.end()) {
      const i = s.marks();
      if (!!!i.find((l) => (l == null ? void 0 : l.type.name) === n.name))
        return !1;
      const c = i.find((l) => (l == null ? void 0 : l.type.name) === n.name);
      return c && r.removeStoredMark(c), r.insertText(" ", s.pos), t.view.dispatch(r), !0;
    }
    return !1;
  }
}
function lr(e) {
  return typeof e == "number";
}
class Pe {
  constructor(t) {
    this.find = t.find, this.handler = t.handler;
  }
}
const cr = (e, t, n) => {
  if (Ut(t))
    return [...e.matchAll(t)];
  const r = t(e, n);
  return r ? r.map((s) => {
    const o = [s.text];
    return o.index = s.index, o.input = e, o.data = s.data, s.replaceWith && (s.text.includes(s.replaceWith) || console.warn('[tiptap warn]: "pasteRuleMatch.replaceWith" must be part of "pasteRuleMatch.text".'), o.push(s.replaceWith)), o;
  }) : [];
};
function dr(e) {
  const { editor: t, state: n, from: r, to: s, rule: o, pasteEvent: i, dropEvent: a } = e, { commands: c, chain: l, can: u } = new yt({
    editor: t,
    state: n
  }), d = [];
  return n.doc.nodesBetween(r, s, (h, m) => {
    if (!h.isTextblock || h.type.spec.code)
      return;
    const f = Math.max(r, m), g = Math.min(s, m + h.content.size), y = h.textBetween(f - m, g - m, void 0, "￼");
    cr(y, o.find, i).forEach((v) => {
      if (v.index === void 0)
        return;
      const b = f + v.index + 1, w = b + v[0].length, k = {
        from: n.tr.mapping.map(b),
        to: n.tr.mapping.map(w)
      }, T = o.handler({
        state: n,
        range: k,
        match: v,
        commands: c,
        chain: l,
        can: u,
        pasteEvent: i,
        dropEvent: a
      });
      d.push(T);
    });
  }), d.every((h) => h !== null);
}
let at = null;
const ur = (e) => {
  var t;
  const n = new ClipboardEvent("paste", {
    clipboardData: new DataTransfer()
  });
  return (t = n.clipboardData) === null || t === void 0 || t.setData("text/html", e), n;
};
function pr(e) {
  const { editor: t, rules: n } = e;
  let r = null, s = !1, o = !1, i = typeof ClipboardEvent < "u" ? new ClipboardEvent("paste") : null, a;
  try {
    a = typeof DragEvent < "u" ? new DragEvent("drop") : null;
  } catch {
    a = null;
  }
  const c = ({ state: u, from: d, to: p, rule: h, pasteEvt: m }) => {
    const f = u.tr, g = gt({
      state: u,
      transaction: f
    });
    if (!(!dr({
      editor: t,
      state: g,
      from: Math.max(d - 1, 0),
      to: p.b - 1,
      rule: h,
      pasteEvent: m,
      dropEvent: a
    }) || !f.steps.length)) {
      try {
        a = typeof DragEvent < "u" ? new DragEvent("drop") : null;
      } catch {
        a = null;
      }
      return i = typeof ClipboardEvent < "u" ? new ClipboardEvent("paste") : null, f;
    }
  };
  return n.map((u) => new H({
    // we register a global drag handler to track the current drag source element
    view(d) {
      const p = (m) => {
        var f;
        r = !((f = d.dom.parentElement) === null || f === void 0) && f.contains(m.target) ? d.dom.parentElement : null, r && (at = t);
      }, h = () => {
        at && (at = null);
      };
      return window.addEventListener("dragstart", p), window.addEventListener("dragend", h), {
        destroy() {
          window.removeEventListener("dragstart", p), window.removeEventListener("dragend", h);
        }
      };
    },
    props: {
      handleDOMEvents: {
        drop: (d, p) => {
          if (o = r === d.dom.parentElement, a = p, !o) {
            const h = at;
            h && setTimeout(() => {
              const m = h.state.selection;
              m && h.commands.deleteRange({ from: m.from, to: m.to });
            }, 10);
          }
          return !1;
        },
        paste: (d, p) => {
          var h;
          const m = (h = p.clipboardData) === null || h === void 0 ? void 0 : h.getData("text/html");
          return i = p, s = !!(m != null && m.includes("data-pm-slice")), !1;
        }
      }
    },
    appendTransaction: (d, p, h) => {
      const m = d[0], f = m.getMeta("uiEvent") === "paste" && !s, g = m.getMeta("uiEvent") === "drop" && !o, y = m.getMeta("applyPasteRules"), M = !!y;
      if (!f && !g && !M)
        return;
      if (M) {
        let { text: w } = y;
        typeof w == "string" ? w = w : w = Kt(V.from(w), h.schema);
        const { from: k } = y, T = k + w.length, x = ur(w);
        return c({
          rule: u,
          state: h,
          from: k,
          to: { b: T },
          pasteEvt: x
        });
      }
      const v = p.doc.content.findDiffStart(h.doc.content), b = p.doc.content.findDiffEnd(h.doc.content);
      if (!(!lr(v) || !b || v === b.b))
        return c({
          rule: u,
          state: h,
          from: v,
          to: b,
          pasteEvt: i
        });
    }
  }));
}
function hr(e) {
  const t = e.filter((n, r) => e.indexOf(n) !== r);
  return Array.from(new Set(t));
}
class Q {
  constructor(t, n) {
    this.splittableMarks = [], this.editor = n, this.extensions = Q.resolve(t), this.schema = rr(this.extensions, n), this.setupExtensions();
  }
  /**
   * Returns a flattened and sorted extension list while
   * also checking for duplicated extensions and warns the user.
   * @param extensions An array of Tiptap extensions
   * @returns An flattened and sorted array of Tiptap extensions
   */
  static resolve(t) {
    const n = Q.sort(Q.flatten(t)), r = hr(n.map((s) => s.name));
    return r.length && console.warn(`[tiptap warn]: Duplicate extension names found: [${r.map((s) => `'${s}'`).join(", ")}]. This can lead to issues.`), n;
  }
  /**
   * Create a flattened array of extensions by traversing the `addExtensions` field.
   * @param extensions An array of Tiptap extensions
   * @returns A flattened array of Tiptap extensions
   */
  static flatten(t) {
    return t.map((n) => {
      const r = {
        name: n.name,
        options: n.options,
        storage: n.storage
      }, s = S(n, "addExtensions", r);
      return s ? [n, ...this.flatten(s())] : n;
    }).flat(10);
  }
  /**
   * Sort extensions by priority.
   * @param extensions An array of Tiptap extensions
   * @returns A sorted array of Tiptap extensions by priority
   */
  static sort(t) {
    return t.sort((r, s) => {
      const o = S(r, "priority") || 100, i = S(s, "priority") || 100;
      return o > i ? -1 : o < i ? 1 : 0;
    });
  }
  /**
   * Get all commands from the extensions.
   * @returns An object with all commands where the key is the command name and the value is the command function
   */
  get commands() {
    return this.extensions.reduce((t, n) => {
      const r = {
        name: n.name,
        options: n.options,
        storage: n.storage,
        editor: this.editor,
        type: At(n.name, this.schema)
      }, s = S(n, "addCommands", r);
      return s ? {
        ...t,
        ...s()
      } : t;
    }, {});
  }
  /**
   * Get all registered Prosemirror plugins from the extensions.
   * @returns An array of Prosemirror plugins
   */
  get plugins() {
    const { editor: t } = this, n = Q.sort([...this.extensions].reverse()), r = [], s = [], o = n.map((i) => {
      const a = {
        name: i.name,
        options: i.options,
        storage: i.storage,
        editor: t,
        type: At(i.name, this.schema)
      }, c = [], l = S(i, "addKeyboardShortcuts", a);
      let u = {};
      if (i.type === "mark" && S(i, "exitable", a) && (u.ArrowRight = () => N.handleExit({ editor: t, mark: i })), l) {
        const f = Object.fromEntries(Object.entries(l()).map(([g, y]) => [g, () => y({ editor: t })]));
        u = { ...u, ...f };
      }
      const d = Qe(u);
      c.push(d);
      const p = S(i, "addInputRules", a);
      ae(i, t.options.enableInputRules) && p && r.push(...p());
      const h = S(i, "addPasteRules", a);
      ae(i, t.options.enablePasteRules) && h && s.push(...h());
      const m = S(i, "addProseMirrorPlugins", a);
      if (m) {
        const f = m();
        c.push(...f);
      }
      return c;
    }).flat();
    return [
      ir({
        editor: t,
        rules: r
      }),
      ...pr({
        editor: t,
        rules: s
      }),
      ...o
    ];
  }
  /**
   * Get all attributes from the extensions.
   * @returns An array of attributes
   */
  get attributes() {
    return Le(this.extensions);
  }
  /**
   * Get all node views from the extensions.
   * @returns An object with all node views where the key is the node name and the value is the node view function
   */
  get nodeViews() {
    const { editor: t } = this, { nodeExtensions: n } = vt(this.extensions);
    return Object.fromEntries(n.filter((r) => !!S(r, "addNodeView")).map((r) => {
      const s = this.attributes.filter((c) => c.type === r.name), o = {
        name: r.name,
        options: r.options,
        storage: r.storage,
        editor: t,
        type: R(r.name, this.schema)
      }, i = S(r, "addNodeView", o);
      if (!i)
        return [];
      const a = (c, l, u, d, p) => {
        const h = ht(c, s);
        return i()({
          // pass-through
          node: c,
          view: l,
          getPos: u,
          decorations: d,
          innerDecorations: p,
          // tiptap-specific
          editor: t,
          extension: r,
          HTMLAttributes: h
        });
      };
      return [r.name, a];
    }));
  }
  /**
   * Go through all extensions, create extension storages & setup marks
   * & bind editor event listener.
   */
  setupExtensions() {
    this.extensions.forEach((t) => {
      var n;
      this.editor.extensionStorage[t.name] = t.storage;
      const r = {
        name: t.name,
        options: t.options,
        storage: t.storage,
        editor: this.editor,
        type: At(t.name, this.schema)
      };
      t.type === "mark" && (!((n = E(S(t, "keepOnSplit", r))) !== null && n !== void 0) || n) && this.splittableMarks.push(t.name);
      const s = S(t, "onBeforeCreate", r), o = S(t, "onCreate", r), i = S(t, "onUpdate", r), a = S(t, "onSelectionUpdate", r), c = S(t, "onTransaction", r), l = S(t, "onFocus", r), u = S(t, "onBlur", r), d = S(t, "onDestroy", r);
      s && this.editor.on("beforeCreate", s), o && this.editor.on("create", o), i && this.editor.on("update", i), a && this.editor.on("selectionUpdate", a), c && this.editor.on("transaction", c), l && this.editor.on("focus", l), u && this.editor.on("blur", u), d && this.editor.on("destroy", d);
    });
  }
}
class _ {
  constructor(t = {}) {
    this.type = "extension", this.name = "extension", this.parent = null, this.child = null, this.config = {
      name: this.name,
      defaultOptions: {}
    }, this.config = {
      ...this.config,
      ...t
    }, this.name = this.config.name, t.defaultOptions && Object.keys(t.defaultOptions).length > 0 && console.warn(`[tiptap warn]: BREAKING CHANGE: "defaultOptions" is deprecated. Please use "addOptions" instead. Found in extension: "${this.name}".`), this.options = this.config.defaultOptions, this.config.addOptions && (this.options = E(S(this, "addOptions", {
      name: this.name
    }))), this.storage = E(S(this, "addStorage", {
      name: this.name,
      options: this.options
    })) || {};
  }
  static create(t = {}) {
    return new _(t);
  }
  configure(t = {}) {
    const n = this.extend({
      ...this.config,
      addOptions: () => Mt(this.options, t)
    });
    return n.name = this.name, n.parent = this.parent, n;
  }
  extend(t = {}) {
    const n = new _({ ...this.config, ...t });
    return n.parent = this, this.child = n, n.name = t.name ? t.name : n.parent.name, t.defaultOptions && Object.keys(t.defaultOptions).length > 0 && console.warn(`[tiptap warn]: BREAKING CHANGE: "defaultOptions" is deprecated. Please use "addOptions" instead. Found in extension: "${n.name}".`), n.options = E(S(n, "addOptions", {
      name: n.name
    })), n.storage = E(S(n, "addStorage", {
      name: n.name,
      options: n.options
    })), n;
  }
}
function Re(e, t, n) {
  const { from: r, to: s } = t, { blockSeparator: o = `

`, textSerializers: i = {} } = n || {};
  let a = "";
  return e.nodesBetween(r, s, (c, l, u, d) => {
    var p;
    c.isBlock && l > r && (a += o);
    const h = i == null ? void 0 : i[c.type.name];
    if (h)
      return u && (a += h({
        node: c,
        pos: l,
        parent: u,
        index: d,
        range: t
      })), !1;
    c.isText && (a += (p = c == null ? void 0 : c.text) === null || p === void 0 ? void 0 : p.slice(Math.max(r, l) - l, s - l));
  }), a;
}
function He(e) {
  return Object.fromEntries(Object.entries(e.nodes).filter(([, t]) => t.spec.toText).map(([t, n]) => [t, n.spec.toText]));
}
const fr = _.create({
  name: "clipboardTextSerializer",
  addOptions() {
    return {
      blockSeparator: void 0
    };
  },
  addProseMirrorPlugins() {
    return [
      new H({
        key: new $("clipboardTextSerializer"),
        props: {
          clipboardTextSerializer: () => {
            const { editor: e } = this, { state: t, schema: n } = e, { doc: r, selection: s } = t, { ranges: o } = s, i = Math.min(...o.map((u) => u.$from.pos)), a = Math.max(...o.map((u) => u.$to.pos)), c = He(n);
            return Re(r, { from: i, to: a }, {
              ...this.options.blockSeparator !== void 0 ? { blockSeparator: this.options.blockSeparator } : {},
              textSerializers: c
            });
          }
        }
      })
    ];
  }
}), mr = () => ({ editor: e, view: t }) => (requestAnimationFrame(() => {
  var n;
  e.isDestroyed || (t.dom.blur(), (n = window == null ? void 0 : window.getSelection()) === null || n === void 0 || n.removeAllRanges());
}), !0), gr = (e = !1) => ({ commands: t }) => t.setContent("", e), yr = () => ({ state: e, tr: t, dispatch: n }) => {
  const { selection: r } = t, { ranges: s } = r;
  return n && s.forEach(({ $from: o, $to: i }) => {
    e.doc.nodesBetween(o.pos, i.pos, (a, c) => {
      if (a.type.isText)
        return;
      const { doc: l, mapping: u } = t, d = l.resolve(u.map(c)), p = l.resolve(u.map(c + a.nodeSize)), h = d.blockRange(p);
      if (!h)
        return;
      const m = Tn(h);
      if (a.type.isTextblock) {
        const { defaultType: f } = d.parent.contentMatchAt(d.index());
        t.setNodeMarkup(h.start, f);
      }
      (m || m === 0) && t.lift(h, m);
    });
  }), !0;
}, vr = (e) => (t) => e(t), br = () => ({ state: e, dispatch: t }) => En(e, t), Mr = (e, t) => ({ editor: n, tr: r }) => {
  const { state: s } = n, o = s.doc.slice(e.from, e.to);
  r.deleteRange(e.from, e.to);
  const i = r.mapping.map(t);
  return r.insert(i, o.content), r.setSelection(new D(r.doc.resolve(i - 1))), !0;
}, Sr = () => ({ tr: e, dispatch: t }) => {
  const { selection: n } = e, r = n.$anchor.node();
  if (r.content.size > 0)
    return !1;
  const s = e.selection.$anchor;
  for (let o = s.depth; o > 0; o -= 1)
    if (s.node(o).type === r.type) {
      if (t) {
        const a = s.before(o), c = s.after(o);
        e.delete(a, c).scrollIntoView();
      }
      return !0;
    }
  return !1;
}, kr = (e) => ({ tr: t, state: n, dispatch: r }) => {
  const s = R(e, n.schema), o = t.selection.$anchor;
  for (let i = o.depth; i > 0; i -= 1)
    if (o.node(i).type === s) {
      if (r) {
        const c = o.before(i), l = o.after(i);
        t.delete(c, l).scrollIntoView();
      }
      return !0;
    }
  return !1;
}, wr = (e) => ({ tr: t, dispatch: n }) => {
  const { from: r, to: s } = e;
  return n && t.delete(r, s), !0;
}, Er = () => ({ state: e, dispatch: t }) => wn(e, t), Tr = () => ({ commands: e }) => e.keyboardShortcut("Enter"), Cr = () => ({ state: e, dispatch: t }) => kn(e, t);
function ft(e, t, n = { strict: !0 }) {
  const r = Object.keys(t);
  return r.length ? r.every((s) => n.strict ? t[s] === e[s] : Ut(t[s]) ? t[s].test(e[s]) : t[s] === e[s]) : !0;
}
function Ie(e, t, n = {}) {
  return e.find((r) => r.type === t && ft(
    // Only check equality for the attributes that are provided
    Object.fromEntries(Object.keys(n).map((s) => [s, r.attrs[s]])),
    n
  ));
}
function le(e, t, n = {}) {
  return !!Ie(e, t, n);
}
function qt(e, t, n) {
  var r;
  if (!e || !t)
    return;
  let s = e.parent.childAfter(e.parentOffset);
  if ((!s.node || !s.node.marks.some((u) => u.type === t)) && (s = e.parent.childBefore(e.parentOffset)), !s.node || !s.node.marks.some((u) => u.type === t) || (n = n || ((r = s.node.marks[0]) === null || r === void 0 ? void 0 : r.attrs), !Ie([...s.node.marks], t, n)))
    return;
  let i = s.index, a = e.start() + s.offset, c = i + 1, l = a + s.node.nodeSize;
  for (; i > 0 && le([...e.parent.child(i - 1).marks], t, n); )
    i -= 1, a -= e.parent.child(i).nodeSize;
  for (; c < e.parent.childCount && le([...e.parent.child(c).marks], t, n); )
    l += e.parent.child(c).nodeSize, c += 1;
  return {
    from: a,
    to: l
  };
}
function K(e, t) {
  if (typeof e == "string") {
    if (!t.marks[e])
      throw Error(`There is no mark type named '${e}'. Maybe you forgot to add the extension?`);
    return t.marks[e];
  }
  return e;
}
const xr = (e, t = {}) => ({ tr: n, state: r, dispatch: s }) => {
  const o = K(e, r.schema), { doc: i, selection: a } = n, { $from: c, from: l, to: u } = a;
  if (s) {
    const d = qt(c, o, t);
    if (d && d.from <= l && d.to >= u) {
      const p = D.create(i, d.from, d.to);
      n.setSelection(p);
    }
  }
  return !0;
}, Ar = (e) => (t) => {
  const n = typeof e == "function" ? e(t) : e;
  for (let r = 0; r < n.length; r += 1)
    if (n[r](t))
      return !0;
  return !1;
};
function Gt(e) {
  return e instanceof D;
}
function F(e = 0, t = 0, n = 0) {
  return Math.min(Math.max(e, t), n);
}
function $e(e, t = null) {
  if (!t)
    return null;
  const n = Z.atStart(e), r = Z.atEnd(e);
  if (t === "start" || t === !0)
    return n;
  if (t === "end")
    return r;
  const s = n.from, o = r.to;
  return t === "all" ? D.create(e, F(0, s, o), F(e.content.size, s, o)) : D.create(e, F(t, s, o), F(t, s, o));
}
function De() {
  return navigator.platform === "Android" || /android/i.test(navigator.userAgent);
}
function St() {
  return [
    "iPad Simulator",
    "iPhone Simulator",
    "iPod Simulator",
    "iPad",
    "iPhone",
    "iPod"
  ].includes(navigator.platform) || navigator.userAgent.includes("Mac") && "ontouchend" in document;
}
const Or = (e = null, t = {}) => ({ editor: n, view: r, tr: s, dispatch: o }) => {
  t = {
    scrollIntoView: !0,
    ...t
  };
  const i = () => {
    (St() || De()) && r.dom.focus(), requestAnimationFrame(() => {
      n.isDestroyed || (r.focus(), t != null && t.scrollIntoView && n.commands.scrollIntoView());
    });
  };
  if (r.hasFocus() && e === null || e === !1)
    return !0;
  if (o && e === null && !Gt(n.state.selection))
    return i(), !0;
  const a = $e(s.doc, e) || n.state.selection, c = n.state.selection.eq(a);
  return o && (c || s.setSelection(a), c && s.storedMarks && s.setStoredMarks(s.storedMarks), i()), !0;
}, Lr = (e, t) => (n) => e.every((r, s) => t(r, { ...n, index: s })), _r = (e, t) => ({ tr: n, commands: r }) => r.insertContentAt({ from: n.selection.from, to: n.selection.to }, e, t), Ne = (e) => {
  const t = e.childNodes;
  for (let n = t.length - 1; n >= 0; n -= 1) {
    const r = t[n];
    r.nodeType === 3 && r.nodeValue && /^(\n\s\s|\n)$/.test(r.nodeValue) ? e.removeChild(r) : r.nodeType === 1 && Ne(r);
  }
  return e;
};
function lt(e) {
  const t = `<body>${e}</body>`, n = new window.DOMParser().parseFromString(t, "text/html").body;
  return Ne(n);
}
function mt(e, t, n) {
  if (e instanceof tn || e instanceof V)
    return e;
  n = {
    slice: !0,
    parseOptions: {},
    ...n
  };
  const r = typeof e == "object" && e !== null, s = typeof e == "string";
  if (r)
    try {
      if (Array.isArray(e) && e.length > 0)
        return V.fromArray(e.map((a) => t.nodeFromJSON(a)));
      const i = t.nodeFromJSON(e);
      return n.errorOnInvalidContent && i.check(), i;
    } catch (o) {
      if (n.errorOnInvalidContent)
        throw new Error("[tiptap error]: Invalid JSON content", { cause: o });
      return console.warn("[tiptap warn]: Invalid content.", "Passed value:", e, "Error:", o), mt("", t, n);
    }
  if (s) {
    if (n.errorOnInvalidContent) {
      let i = !1, a = "";
      const c = new we({
        topNode: t.spec.topNode,
        marks: t.spec.marks,
        // Prosemirror's schemas are executed such that: the last to execute, matches last
        // This means that we can add a catch-all node at the end of the schema to catch any content that we don't know how to handle
        nodes: t.spec.nodes.append({
          __tiptap__private__unknown__catch__all__node: {
            content: "inline*",
            group: "block",
            parseDOM: [
              {
                tag: "*",
                getAttrs: (l) => (i = !0, a = typeof l == "string" ? l : l.outerHTML, null)
              }
            ]
          }
        })
      });
      if (n.slice ? xt.fromSchema(c).parseSlice(lt(e), n.parseOptions) : xt.fromSchema(c).parse(lt(e), n.parseOptions), n.errorOnInvalidContent && i)
        throw new Error("[tiptap error]: Invalid HTML content", { cause: new Error(`Invalid element found: ${a}`) });
    }
    const o = xt.fromSchema(t);
    return n.slice ? o.parseSlice(lt(e), n.parseOptions).content : o.parse(lt(e), n.parseOptions);
  }
  return mt("", t, n);
}
function Pr(e, t, n) {
  const r = e.steps.length - 1;
  if (r < t)
    return;
  const s = e.steps[r];
  if (!(s instanceof Cn || s instanceof xn))
    return;
  const o = e.mapping.maps[r];
  let i = 0;
  o.forEach((a, c, l, u) => {
    i === 0 && (i = u);
  }), e.setSelection(Z.near(e.doc.resolve(i), n));
}
const Rr = (e) => !("type" in e), Hr = (e, t, n) => ({ tr: r, dispatch: s, editor: o }) => {
  var i;
  if (s) {
    n = {
      parseOptions: o.options.parseOptions,
      updateSelection: !0,
      applyInputRules: !1,
      applyPasteRules: !1,
      ...n
    };
    let a;
    try {
      a = mt(t, o.schema, {
        parseOptions: {
          preserveWhitespace: "full",
          ...n.parseOptions
        },
        errorOnInvalidContent: (i = n.errorOnInvalidContent) !== null && i !== void 0 ? i : o.options.enableContentCheck
      });
    } catch (m) {
      return o.emit("contentError", {
        editor: o,
        error: m,
        disableCollaboration: () => {
          o.storage.collaboration && (o.storage.collaboration.isDisabled = !0);
        }
      }), !1;
    }
    let { from: c, to: l } = typeof e == "number" ? { from: e, to: e } : { from: e.from, to: e.to }, u = !0, d = !0;
    if ((Rr(a) ? a : [a]).forEach((m) => {
      m.check(), u = u ? m.isText && m.marks.length === 0 : !1, d = d ? m.isBlock : !1;
    }), c === l && d) {
      const { parent: m } = r.doc.resolve(c);
      m.isTextblock && !m.type.spec.code && !m.childCount && (c -= 1, l += 1);
    }
    let h;
    if (u) {
      if (Array.isArray(t))
        h = t.map((m) => m.text || "").join("");
      else if (t instanceof V) {
        let m = "";
        t.forEach((f) => {
          f.text && (m += f.text);
        }), h = m;
      } else typeof t == "object" && t && t.text ? h = t.text : h = t;
      r.insertText(h, c, l);
    } else
      h = a, r.replaceWith(c, l, h);
    n.updateSelection && Pr(r, r.steps.length - 1, -1), n.applyInputRules && r.setMeta("applyInputRules", { from: c, text: h }), n.applyPasteRules && r.setMeta("applyPasteRules", { from: c, text: h });
  }
  return !0;
}, Ir = () => ({ state: e, dispatch: t }) => gn(e, t), $r = () => ({ state: e, dispatch: t }) => Mn(e, t), Dr = () => ({ state: e, dispatch: t }) => Sn(e, t), Nr = () => ({ state: e, dispatch: t }) => bn(e, t), Br = () => ({ state: e, dispatch: t, tr: n }) => {
  try {
    const r = Ee(e.doc, e.selection.$from.pos, -1);
    return r == null ? !1 : (n.join(r, 2), t && t(n), !0);
  } catch {
    return !1;
  }
}, jr = () => ({ state: e, dispatch: t, tr: n }) => {
  try {
    const r = Ee(e.doc, e.selection.$from.pos, 1);
    return r == null ? !1 : (n.join(r, 2), t && t(n), !0);
  } catch {
    return !1;
  }
}, Fr = () => ({ state: e, dispatch: t }) => vn(e, t), zr = () => ({ state: e, dispatch: t }) => yn(e, t);
function Be() {
  return typeof navigator < "u" ? /Mac/.test(navigator.platform) : !1;
}
function Vr(e) {
  const t = e.split(/-(?!$)/);
  let n = t[t.length - 1];
  n === "Space" && (n = " ");
  let r, s, o, i;
  for (let a = 0; a < t.length - 1; a += 1) {
    const c = t[a];
    if (/^(cmd|meta|m)$/i.test(c))
      i = !0;
    else if (/^a(lt)?$/i.test(c))
      r = !0;
    else if (/^(c|ctrl|control)$/i.test(c))
      s = !0;
    else if (/^s(hift)?$/i.test(c))
      o = !0;
    else if (/^mod$/i.test(c))
      St() || Be() ? i = !0 : s = !0;
    else
      throw new Error(`Unrecognized modifier name: ${c}`);
  }
  return r && (n = `Alt-${n}`), s && (n = `Ctrl-${n}`), i && (n = `Meta-${n}`), o && (n = `Shift-${n}`), n;
}
const Wr = (e) => ({ editor: t, view: n, tr: r, dispatch: s }) => {
  const o = Vr(e).split(/-(?!$)/), i = o.find((l) => !["Alt", "Ctrl", "Meta", "Shift"].includes(l)), a = new KeyboardEvent("keydown", {
    key: i === "Space" ? " " : i,
    altKey: o.includes("Alt"),
    ctrlKey: o.includes("Ctrl"),
    metaKey: o.includes("Meta"),
    shiftKey: o.includes("Shift"),
    bubbles: !0,
    cancelable: !0
  }), c = t.captureTransaction(() => {
    n.someProp("handleKeyDown", (l) => l(n, a));
  });
  return c == null || c.steps.forEach((l) => {
    const u = l.map(r.mapping);
    u && s && r.maybeStep(u);
  }), !0;
};
function st(e, t, n = {}) {
  const { from: r, to: s, empty: o } = e.selection, i = t ? R(t, e.schema) : null, a = [];
  e.doc.nodesBetween(r, s, (d, p) => {
    if (d.isText)
      return;
    const h = Math.max(r, p), m = Math.min(s, p + d.nodeSize);
    a.push({
      node: d,
      from: h,
      to: m
    });
  });
  const c = s - r, l = a.filter((d) => i ? i.name === d.node.type.name : !0).filter((d) => ft(d.node.attrs, n, { strict: !1 }));
  return o ? !!l.length : l.reduce((d, p) => d + p.to - p.from, 0) >= c;
}
const Kr = (e, t = {}) => ({ state: n, dispatch: r }) => {
  const s = R(e, n.schema);
  return st(n, s, t) ? mn(n, r) : !1;
}, Ur = () => ({ state: e, dispatch: t }) => fn(e, t), qr = (e) => ({ state: t, dispatch: n }) => {
  const r = R(e, t.schema);
  return hn(r)(t, n);
}, Gr = () => ({ state: e, dispatch: t }) => pn(e, t);
function kt(e, t) {
  return t.nodes[e] ? "node" : t.marks[e] ? "mark" : null;
}
function ce(e, t) {
  const n = typeof t == "string" ? [t] : t;
  return Object.keys(e).reduce((r, s) => (n.includes(s) || (r[s] = e[s]), r), {});
}
const Jr = (e, t) => ({ tr: n, state: r, dispatch: s }) => {
  let o = null, i = null;
  const a = kt(typeof e == "string" ? e : e.name, r.schema);
  return a ? (a === "node" && (o = R(e, r.schema)), a === "mark" && (i = K(e, r.schema)), s && n.selection.ranges.forEach((c) => {
    r.doc.nodesBetween(c.$from.pos, c.$to.pos, (l, u) => {
      o && o === l.type && n.setNodeMarkup(u, void 0, ce(l.attrs, t)), i && l.marks.length && l.marks.forEach((d) => {
        i === d.type && n.addMark(u, u + l.nodeSize, i.create(ce(d.attrs, t)));
      });
    });
  }), !0) : !1;
}, Yr = () => ({ tr: e, dispatch: t }) => (t && e.scrollIntoView(), !0), Xr = () => ({ tr: e, dispatch: t }) => {
  if (t) {
    const n = new un(e.doc);
    e.setSelection(n);
  }
  return !0;
}, Qr = () => ({ state: e, dispatch: t }) => dn(e, t), Zr = () => ({ state: e, dispatch: t }) => cn(e, t), ts = () => ({ state: e, dispatch: t }) => ln(e, t), es = () => ({ state: e, dispatch: t }) => an(e, t), ns = () => ({ state: e, dispatch: t }) => on(e, t);
function It(e, t, n = {}, r = {}) {
  return mt(e, t, {
    slice: !1,
    parseOptions: n,
    errorOnInvalidContent: r.errorOnInvalidContent
  });
}
const rs = (e, t = !1, n = {}, r = {}) => ({ editor: s, tr: o, dispatch: i, commands: a }) => {
  var c, l;
  const { doc: u } = o;
  if (n.preserveWhitespace !== "full") {
    const d = It(e, s.schema, n, {
      errorOnInvalidContent: (c = r.errorOnInvalidContent) !== null && c !== void 0 ? c : s.options.enableContentCheck
    });
    return i && o.replaceWith(0, u.content.size, d).setMeta("preventUpdate", !t), !0;
  }
  return i && o.setMeta("preventUpdate", !t), a.insertContentAt({ from: 0, to: u.content.size }, e, {
    parseOptions: n,
    errorOnInvalidContent: (l = r.errorOnInvalidContent) !== null && l !== void 0 ? l : s.options.enableContentCheck
  });
};
function je(e, t) {
  const n = K(t, e.schema), { from: r, to: s, empty: o } = e.selection, i = [];
  o ? (e.storedMarks && i.push(...e.storedMarks), i.push(...e.selection.$head.marks())) : e.doc.nodesBetween(r, s, (c) => {
    i.push(...c.marks);
  });
  const a = i.find((c) => c.type.name === n.name);
  return a ? { ...a.attrs } : {};
}
function ss(e, t) {
  const n = new On(e);
  return t.forEach((r) => {
    r.steps.forEach((s) => {
      n.step(s);
    });
  }), n;
}
function os(e) {
  for (let t = 0; t < e.edgeCount; t += 1) {
    const { type: n } = e.edge(t);
    if (n.isTextblock && !n.hasRequiredAttrs())
      return n;
  }
  return null;
}
function is(e, t, n) {
  const r = [];
  return e.nodesBetween(t.from, t.to, (s, o) => {
    n(s) && r.push({
      node: s,
      pos: o
    });
  }), r;
}
function Fe(e, t) {
  for (let n = e.depth; n > 0; n -= 1) {
    const r = e.node(n);
    if (t(r))
      return {
        pos: n > 0 ? e.before(n) : 0,
        start: e.start(n),
        depth: n,
        node: r
      };
  }
}
function Jt(e) {
  return (t) => Fe(t.$from, e);
}
function as(e, t) {
  const n = {
    from: 0,
    to: e.content.size
  };
  return Re(e, n, t);
}
function ls(e, t) {
  const n = R(t, e.schema), { from: r, to: s } = e.selection, o = [];
  e.doc.nodesBetween(r, s, (a) => {
    o.push(a);
  });
  const i = o.reverse().find((a) => a.type.name === n.name);
  return i ? { ...i.attrs } : {};
}
function ze(e, t) {
  const n = kt(typeof t == "string" ? t : t.name, e.schema);
  return n === "node" ? ls(e, t) : n === "mark" ? je(e, t) : {};
}
function cs(e, t = JSON.stringify) {
  const n = {};
  return e.filter((r) => {
    const s = t(r);
    return Object.prototype.hasOwnProperty.call(n, s) ? !1 : n[s] = !0;
  });
}
function ds(e) {
  const t = cs(e);
  return t.length === 1 ? t : t.filter((n, r) => !t.filter((o, i) => i !== r).some((o) => n.oldRange.from >= o.oldRange.from && n.oldRange.to <= o.oldRange.to && n.newRange.from >= o.newRange.from && n.newRange.to <= o.newRange.to));
}
function us(e) {
  const { mapping: t, steps: n } = e, r = [];
  return t.maps.forEach((s, o) => {
    const i = [];
    if (s.ranges.length)
      s.forEach((a, c) => {
        i.push({ from: a, to: c });
      });
    else {
      const { from: a, to: c } = n[o];
      if (a === void 0 || c === void 0)
        return;
      i.push({ from: a, to: c });
    }
    i.forEach(({ from: a, to: c }) => {
      const l = t.slice(o).map(a, -1), u = t.slice(o).map(c), d = t.invert().map(l, -1), p = t.invert().map(u);
      r.push({
        oldRange: {
          from: d,
          to: p
        },
        newRange: {
          from: l,
          to: u
        }
      });
    });
  }), ds(r);
}
function Yt(e, t, n) {
  const r = [];
  return e === t ? n.resolve(e).marks().forEach((s) => {
    const o = n.resolve(e), i = qt(o, s.type);
    i && r.push({
      mark: s,
      ...i
    });
  }) : n.nodesBetween(e, t, (s, o) => {
    !s || (s == null ? void 0 : s.nodeSize) === void 0 || r.push(...s.marks.map((i) => ({
      from: o,
      to: o + s.nodeSize,
      mark: i
    })));
  }), r;
}
function ut(e, t, n) {
  return Object.fromEntries(Object.entries(n).filter(([r]) => {
    const s = e.find((o) => o.type === t && o.name === r);
    return s ? s.attribute.keepOnSplit : !1;
  }));
}
function $t(e, t, n = {}) {
  const { empty: r, ranges: s } = e.selection, o = t ? K(t, e.schema) : null;
  if (r)
    return !!(e.storedMarks || e.selection.$from.marks()).filter((d) => o ? o.name === d.type.name : !0).find((d) => ft(d.attrs, n, { strict: !1 }));
  let i = 0;
  const a = [];
  if (s.forEach(({ $from: d, $to: p }) => {
    const h = d.pos, m = p.pos;
    e.doc.nodesBetween(h, m, (f, g) => {
      if (!f.isText && !f.marks.length)
        return;
      const y = Math.max(h, g), M = Math.min(m, g + f.nodeSize), v = M - y;
      i += v, a.push(...f.marks.map((b) => ({
        mark: b,
        from: y,
        to: M
      })));
    });
  }), i === 0)
    return !1;
  const c = a.filter((d) => o ? o.name === d.mark.type.name : !0).filter((d) => ft(d.mark.attrs, n, { strict: !1 })).reduce((d, p) => d + p.to - p.from, 0), l = a.filter((d) => o ? d.mark.type !== o && d.mark.type.excludes(o) : !0).reduce((d, p) => d + p.to - p.from, 0);
  return (c > 0 ? c + l : c) >= i;
}
function ps(e, t, n = {}) {
  if (!t)
    return st(e, null, n) || $t(e, null, n);
  const r = kt(t, e.schema);
  return r === "node" ? st(e, t, n) : r === "mark" ? $t(e, t, n) : !1;
}
function de(e, t) {
  const { nodeExtensions: n } = vt(t), r = n.find((i) => i.name === e);
  if (!r)
    return !1;
  const s = {
    name: r.name,
    options: r.options,
    storage: r.storage
  }, o = E(S(r, "group", s));
  return typeof o != "string" ? !1 : o.split(" ").includes("list");
}
function wt(e, { checkChildren: t = !0, ignoreWhitespace: n = !1 } = {}) {
  var r;
  if (n) {
    if (e.type.name === "hardBreak")
      return !0;
    if (e.isText)
      return /^\s*$/m.test((r = e.text) !== null && r !== void 0 ? r : "");
  }
  if (e.isText)
    return !e.text;
  if (e.isAtom || e.isLeaf)
    return !1;
  if (e.content.childCount === 0)
    return !0;
  if (t) {
    let s = !0;
    return e.content.forEach((o) => {
      s !== !1 && (wt(o, { ignoreWhitespace: n, checkChildren: t }) || (s = !1));
    }), s;
  }
  return !1;
}
function Ve(e) {
  return e instanceof tt;
}
function hs(e, t, n) {
  const s = e.state.doc.content.size, o = F(t, 0, s), i = F(n, 0, s), a = e.coordsAtPos(o), c = e.coordsAtPos(i, -1), l = Math.min(a.top, c.top), u = Math.max(a.bottom, c.bottom), d = Math.min(a.left, c.left), p = Math.max(a.right, c.right), h = p - d, m = u - l, y = {
    top: l,
    bottom: u,
    left: d,
    right: p,
    width: h,
    height: m,
    x: d,
    y: l
  };
  return {
    ...y,
    toJSON: () => y
  };
}
function fs(e, t, n) {
  var r;
  const { selection: s } = t;
  let o = null;
  if (Gt(s) && (o = s.$cursor), o) {
    const a = (r = e.storedMarks) !== null && r !== void 0 ? r : o.marks();
    return !!n.isInSet(a) || !a.some((c) => c.type.excludes(n));
  }
  const { ranges: i } = s;
  return i.some(({ $from: a, $to: c }) => {
    let l = a.depth === 0 ? e.doc.inlineContent && e.doc.type.allowsMarkType(n) : !1;
    return e.doc.nodesBetween(a.pos, c.pos, (u, d, p) => {
      if (l)
        return !1;
      if (u.isInline) {
        const h = !p || p.type.allowsMarkType(n), m = !!n.isInSet(u.marks) || !u.marks.some((f) => f.type.excludes(n));
        l = h && m;
      }
      return !l;
    }), l;
  });
}
const ms = (e, t = {}) => ({ tr: n, state: r, dispatch: s }) => {
  const { selection: o } = n, { empty: i, ranges: a } = o, c = K(e, r.schema);
  if (s)
    if (i) {
      const l = je(r, c);
      n.addStoredMark(c.create({
        ...l,
        ...t
      }));
    } else
      a.forEach((l) => {
        const u = l.$from.pos, d = l.$to.pos;
        r.doc.nodesBetween(u, d, (p, h) => {
          const m = Math.max(h, u), f = Math.min(h + p.nodeSize, d);
          p.marks.find((y) => y.type === c) ? p.marks.forEach((y) => {
            c === y.type && n.addMark(m, f, c.create({
              ...y.attrs,
              ...t
            }));
          }) : n.addMark(m, f, c.create(t));
        });
      });
  return fs(r, n, c);
}, gs = (e, t) => ({ tr: n }) => (n.setMeta(e, t), !0), ys = (e, t = {}) => ({ state: n, dispatch: r, chain: s }) => {
  const o = R(e, n.schema);
  let i;
  return n.selection.$anchor.sameParent(n.selection.$head) && (i = n.selection.$anchor.parent.attrs), o.isTextblock ? s().command(({ commands: a }) => Zt(o, { ...i, ...t })(n) ? !0 : a.clearNodes()).command(({ state: a }) => Zt(o, { ...i, ...t })(a, r)).run() : (console.warn('[tiptap warn]: Currently "setNode()" only supports text block nodes.'), !1);
}, vs = (e) => ({ tr: t, dispatch: n }) => {
  if (n) {
    const { doc: r } = t, s = F(e, 0, r.content.size), o = tt.create(r, s);
    t.setSelection(o);
  }
  return !0;
}, bs = (e) => ({ tr: t, dispatch: n }) => {
  if (n) {
    const { doc: r } = t, { from: s, to: o } = typeof e == "number" ? { from: e, to: e } : e, i = D.atStart(r).from, a = D.atEnd(r).to, c = F(s, i, a), l = F(o, i, a), u = D.create(r, c, l);
    t.setSelection(u);
  }
  return !0;
}, Ms = (e) => ({ state: t, dispatch: n }) => {
  const r = R(e, t.schema);
  return sn(r)(t, n);
};
function ue(e, t) {
  const n = e.storedMarks || e.selection.$to.parentOffset && e.selection.$from.marks();
  if (n) {
    const r = n.filter((s) => t == null ? void 0 : t.includes(s.type.name));
    e.tr.ensureMarks(r);
  }
}
const Ss = ({ keepMarks: e = !0 } = {}) => ({ tr: t, state: n, dispatch: r, editor: s }) => {
  const { selection: o, doc: i } = t, { $from: a, $to: c } = o, l = s.extensionManager.attributes, u = ut(l, a.node().type.name, a.node().attrs);
  if (o instanceof tt && o.node.isBlock)
    return !a.parentOffset || !dt(i, a.pos) ? !1 : (r && (e && ue(n, s.extensionManager.splittableMarks), t.split(a.pos).scrollIntoView()), !0);
  if (!a.parent.isBlock)
    return !1;
  const d = c.parentOffset === c.parent.content.size, p = a.depth === 0 ? void 0 : os(a.node(-1).contentMatchAt(a.indexAfter(-1)));
  let h = d && p ? [
    {
      type: p,
      attrs: u
    }
  ] : void 0, m = dt(t.doc, t.mapping.map(a.pos), 1, h);
  if (!h && !m && dt(t.doc, t.mapping.map(a.pos), 1, p ? [{ type: p }] : void 0) && (m = !0, h = p ? [
    {
      type: p,
      attrs: u
    }
  ] : void 0), r) {
    if (m && (o instanceof D && t.deleteSelection(), t.split(t.mapping.map(a.pos), 1, h), p && !d && !a.parentOffset && a.parent.type !== p)) {
      const f = t.mapping.map(a.before()), g = t.doc.resolve(f);
      a.node(-1).canReplaceWith(g.index(), g.index() + 1, p) && t.setNodeMarkup(t.mapping.map(a.before()), p);
    }
    e && ue(n, s.extensionManager.splittableMarks), t.scrollIntoView();
  }
  return m;
}, ks = (e, t = {}) => ({ tr: n, state: r, dispatch: s, editor: o }) => {
  var i;
  const a = R(e, r.schema), { $from: c, $to: l } = r.selection, u = r.selection.node;
  if (u && u.isBlock || c.depth < 2 || !c.sameParent(l))
    return !1;
  const d = c.node(-1);
  if (d.type !== a)
    return !1;
  const p = o.extensionManager.attributes;
  if (c.parent.content.size === 0 && c.node(-1).childCount === c.indexAfter(-1)) {
    if (c.depth === 2 || c.node(-3).type !== a || c.index(-2) !== c.node(-2).childCount - 1)
      return !1;
    if (s) {
      let y = V.empty;
      const M = c.index(-1) ? 1 : c.index(-2) ? 2 : 3;
      for (let x = c.depth - M; x >= c.depth - 3; x -= 1)
        y = V.from(c.node(x).copy(y));
      const v = c.indexAfter(-1) < c.node(-2).childCount ? 1 : c.indexAfter(-2) < c.node(-3).childCount ? 2 : 3, b = {
        ...ut(p, c.node().type.name, c.node().attrs),
        ...t
      }, w = ((i = a.contentMatch.defaultType) === null || i === void 0 ? void 0 : i.createAndFill(b)) || void 0;
      y = y.append(V.from(a.createAndFill(null, w) || void 0));
      const k = c.before(c.depth - (M - 1));
      n.replace(k, c.after(-v), new rn(y, 4 - M, 0));
      let T = -1;
      n.doc.nodesBetween(k, n.doc.content.size, (x, O) => {
        if (T > -1)
          return !1;
        x.isTextblock && x.content.size === 0 && (T = O + 1);
      }), T > -1 && n.setSelection(D.near(n.doc.resolve(T))), n.scrollIntoView();
    }
    return !0;
  }
  const h = l.pos === c.end() ? d.contentMatchAt(0).defaultType : null, m = {
    ...ut(p, d.type.name, d.attrs),
    ...t
  }, f = {
    ...ut(p, c.node().type.name, c.node().attrs),
    ...t
  };
  n.delete(c.pos, l.pos);
  const g = h ? [
    { type: a, attrs: m },
    { type: h, attrs: f }
  ] : [{ type: a, attrs: m }];
  if (!dt(n.doc, c.pos, 2))
    return !1;
  if (s) {
    const { selection: y, storedMarks: M } = r, { splittableMarks: v } = o.extensionManager, b = M || y.$to.parentOffset && y.$from.marks();
    if (n.split(c.pos, 2, g).scrollIntoView(), !b || !s)
      return !0;
    const w = b.filter((k) => v.includes(k.type.name));
    n.ensureMarks(w);
  }
  return !0;
}, Ot = (e, t) => {
  const n = Jt((i) => i.type === t)(e.selection);
  if (!n)
    return !0;
  const r = e.doc.resolve(Math.max(0, n.pos - 1)).before(n.depth);
  if (r === void 0)
    return !0;
  const s = e.doc.nodeAt(r);
  return n.node.type === (s == null ? void 0 : s.type) && Ft(e.doc, n.pos) && e.join(n.pos), !0;
}, Lt = (e, t) => {
  const n = Jt((i) => i.type === t)(e.selection);
  if (!n)
    return !0;
  const r = e.doc.resolve(n.start).after(n.depth);
  if (r === void 0)
    return !0;
  const s = e.doc.nodeAt(r);
  return n.node.type === (s == null ? void 0 : s.type) && Ft(e.doc, r) && e.join(r), !0;
}, ws = (e, t, n, r = {}) => ({ editor: s, tr: o, state: i, dispatch: a, chain: c, commands: l, can: u }) => {
  const { extensions: d, splittableMarks: p } = s.extensionManager, h = R(e, i.schema), m = R(t, i.schema), { selection: f, storedMarks: g } = i, { $from: y, $to: M } = f, v = y.blockRange(M), b = g || f.$to.parentOffset && f.$from.marks();
  if (!v)
    return !1;
  const w = Jt((k) => de(k.type.name, d))(f);
  if (v.depth >= 1 && w && v.depth - w.depth <= 1) {
    if (w.node.type === h)
      return l.liftListItem(m);
    if (de(w.node.type.name, d) && h.validContent(w.node.content) && a)
      return c().command(() => (o.setNodeMarkup(w.pos, h), !0)).command(() => Ot(o, h)).command(() => Lt(o, h)).run();
  }
  return !n || !b || !a ? c().command(() => u().wrapInList(h, r) ? !0 : l.clearNodes()).wrapInList(h, r).command(() => Ot(o, h)).command(() => Lt(o, h)).run() : c().command(() => {
    const k = u().wrapInList(h, r), T = b.filter((x) => p.includes(x.type.name));
    return o.ensureMarks(T), k ? !0 : l.clearNodes();
  }).wrapInList(h, r).command(() => Ot(o, h)).command(() => Lt(o, h)).run();
}, Es = (e, t = {}, n = {}) => ({ state: r, commands: s }) => {
  const { extendEmptyMarkRange: o = !1 } = n, i = K(e, r.schema);
  return $t(r, i, t) ? s.unsetMark(i, { extendEmptyMarkRange: o }) : s.setMark(i, t);
}, Ts = (e, t, n = {}) => ({ state: r, commands: s }) => {
  const o = R(e, r.schema), i = R(t, r.schema), a = st(r, o, n);
  let c;
  return r.selection.$anchor.sameParent(r.selection.$head) && (c = r.selection.$anchor.parent.attrs), a ? s.setNode(i, c) : s.setNode(o, { ...c, ...n });
}, Cs = (e, t = {}) => ({ state: n, commands: r }) => {
  const s = R(e, n.schema);
  return st(n, s, t) ? r.lift(s) : r.wrapIn(s, t);
}, xs = () => ({ state: e, dispatch: t }) => {
  const n = e.plugins;
  for (let r = 0; r < n.length; r += 1) {
    const s = n[r];
    let o;
    if (s.spec.isInputRules && (o = s.getState(e))) {
      if (t) {
        const i = e.tr, a = o.transform;
        for (let c = a.steps.length - 1; c >= 0; c -= 1)
          i.step(a.steps[c].invert(a.docs[c]));
        if (o.text) {
          const c = i.doc.resolve(o.from).marks();
          i.replaceWith(o.from, o.to, e.schema.text(o.text, c));
        } else
          i.delete(o.from, o.to);
      }
      return !0;
    }
  }
  return !1;
}, As = () => ({ tr: e, dispatch: t }) => {
  const { selection: n } = e, { empty: r, ranges: s } = n;
  return r || t && s.forEach((o) => {
    e.removeMark(o.$from.pos, o.$to.pos);
  }), !0;
}, Os = (e, t = {}) => ({ tr: n, state: r, dispatch: s }) => {
  var o;
  const { extendEmptyMarkRange: i = !1 } = t, { selection: a } = n, c = K(e, r.schema), { $from: l, empty: u, ranges: d } = a;
  if (!s)
    return !0;
  if (u && i) {
    let { from: p, to: h } = a;
    const m = (o = l.marks().find((g) => g.type === c)) === null || o === void 0 ? void 0 : o.attrs, f = qt(l, c, m);
    f && (p = f.from, h = f.to), n.removeMark(p, h, c);
  } else
    d.forEach((p) => {
      n.removeMark(p.$from.pos, p.$to.pos, c);
    });
  return n.removeStoredMark(c), !0;
}, Ls = (e, t = {}) => ({ tr: n, state: r, dispatch: s }) => {
  let o = null, i = null;
  const a = kt(typeof e == "string" ? e : e.name, r.schema);
  return a ? (a === "node" && (o = R(e, r.schema)), a === "mark" && (i = K(e, r.schema)), s && n.selection.ranges.forEach((c) => {
    const l = c.$from.pos, u = c.$to.pos;
    let d, p, h, m;
    n.selection.empty ? r.doc.nodesBetween(l, u, (f, g) => {
      o && o === f.type && (h = Math.max(g, l), m = Math.min(g + f.nodeSize, u), d = g, p = f);
    }) : r.doc.nodesBetween(l, u, (f, g) => {
      g < l && o && o === f.type && (h = Math.max(g, l), m = Math.min(g + f.nodeSize, u), d = g, p = f), g >= l && g <= u && (o && o === f.type && n.setNodeMarkup(g, void 0, {
        ...f.attrs,
        ...t
      }), i && f.marks.length && f.marks.forEach((y) => {
        if (i === y.type) {
          const M = Math.max(g, l), v = Math.min(g + f.nodeSize, u);
          n.addMark(M, v, i.create({
            ...y.attrs,
            ...t
          }));
        }
      }));
    }), p && (d !== void 0 && n.setNodeMarkup(d, void 0, {
      ...p.attrs,
      ...t
    }), i && p.marks.length && p.marks.forEach((f) => {
      i === f.type && n.addMark(h, m, i.create({
        ...f.attrs,
        ...t
      }));
    }));
  }), !0) : !1;
}, _s = (e, t = {}) => ({ state: n, dispatch: r }) => {
  const s = R(e, n.schema);
  return nn(s, t)(n, r);
}, Ps = (e, t = {}) => ({ state: n, dispatch: r }) => {
  const s = R(e, n.schema);
  return en(s, t)(n, r);
};
var Rs = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  blur: mr,
  clearContent: gr,
  clearNodes: yr,
  command: vr,
  createParagraphNear: br,
  cut: Mr,
  deleteCurrentNode: Sr,
  deleteNode: kr,
  deleteRange: wr,
  deleteSelection: Er,
  enter: Tr,
  exitCode: Cr,
  extendMarkRange: xr,
  first: Ar,
  focus: Or,
  forEach: Lr,
  insertContent: _r,
  insertContentAt: Hr,
  joinBackward: Dr,
  joinDown: $r,
  joinForward: Nr,
  joinItemBackward: Br,
  joinItemForward: jr,
  joinTextblockBackward: Fr,
  joinTextblockForward: zr,
  joinUp: Ir,
  keyboardShortcut: Wr,
  lift: Kr,
  liftEmptyBlock: Ur,
  liftListItem: qr,
  newlineInCode: Gr,
  resetAttributes: Jr,
  scrollIntoView: Yr,
  selectAll: Xr,
  selectNodeBackward: Qr,
  selectNodeForward: Zr,
  selectParentNode: ts,
  selectTextblockEnd: es,
  selectTextblockStart: ns,
  setContent: rs,
  setMark: ms,
  setMeta: gs,
  setNode: ys,
  setNodeSelection: vs,
  setTextSelection: bs,
  sinkListItem: Ms,
  splitBlock: Ss,
  splitListItem: ks,
  toggleList: ws,
  toggleMark: Es,
  toggleNode: Ts,
  toggleWrap: Cs,
  undoInputRule: xs,
  unsetAllMarks: As,
  unsetMark: Os,
  updateAttributes: Ls,
  wrapIn: _s,
  wrapInList: Ps
});
const Hs = _.create({
  name: "commands",
  addCommands() {
    return {
      ...Rs
    };
  }
}), Is = _.create({
  name: "drop",
  addProseMirrorPlugins() {
    return [
      new H({
        key: new $("tiptapDrop"),
        props: {
          handleDrop: (e, t, n, r) => {
            this.editor.emit("drop", {
              editor: this.editor,
              event: t,
              slice: n,
              moved: r
            });
          }
        }
      })
    ];
  }
}), $s = _.create({
  name: "editable",
  addProseMirrorPlugins() {
    return [
      new H({
        key: new $("editable"),
        props: {
          editable: () => this.editor.options.editable
        }
      })
    ];
  }
}), Ds = new $("focusEvents"), Ns = _.create({
  name: "focusEvents",
  addProseMirrorPlugins() {
    const { editor: e } = this;
    return [
      new H({
        key: Ds,
        props: {
          handleDOMEvents: {
            focus: (t, n) => {
              e.isFocused = !0;
              const r = e.state.tr.setMeta("focus", { event: n }).setMeta("addToHistory", !1);
              return t.dispatch(r), !1;
            },
            blur: (t, n) => {
              e.isFocused = !1;
              const r = e.state.tr.setMeta("blur", { event: n }).setMeta("addToHistory", !1);
              return t.dispatch(r), !1;
            }
          }
        }
      })
    ];
  }
}), Bs = _.create({
  name: "keymap",
  addKeyboardShortcuts() {
    const e = () => this.editor.commands.first(({ commands: i }) => [
      () => i.undoInputRule(),
      // maybe convert first text block node to default node
      () => i.command(({ tr: a }) => {
        const { selection: c, doc: l } = a, { empty: u, $anchor: d } = c, { pos: p, parent: h } = d, m = d.parent.isTextblock && p > 0 ? a.doc.resolve(p - 1) : d, f = m.parent.type.spec.isolating, g = d.pos - d.parentOffset, y = f && m.parent.childCount === 1 ? g === d.pos : Z.atStart(l).from === p;
        return !u || !h.type.isTextblock || h.textContent.length || !y || y && d.parent.type.name === "paragraph" ? !1 : i.clearNodes();
      }),
      () => i.deleteSelection(),
      () => i.joinBackward(),
      () => i.selectNodeBackward()
    ]), t = () => this.editor.commands.first(({ commands: i }) => [
      () => i.deleteSelection(),
      () => i.deleteCurrentNode(),
      () => i.joinForward(),
      () => i.selectNodeForward()
    ]), r = {
      Enter: () => this.editor.commands.first(({ commands: i }) => [
        () => i.newlineInCode(),
        () => i.createParagraphNear(),
        () => i.liftEmptyBlock(),
        () => i.splitBlock()
      ]),
      "Mod-Enter": () => this.editor.commands.exitCode(),
      Backspace: e,
      "Mod-Backspace": e,
      "Shift-Backspace": e,
      Delete: t,
      "Mod-Delete": t,
      "Mod-a": () => this.editor.commands.selectAll()
    }, s = {
      ...r
    }, o = {
      ...r,
      "Ctrl-h": e,
      "Alt-Backspace": e,
      "Ctrl-d": t,
      "Ctrl-Alt-Backspace": t,
      "Alt-Delete": t,
      "Alt-d": t,
      "Ctrl-a": () => this.editor.commands.selectTextblockStart(),
      "Ctrl-e": () => this.editor.commands.selectTextblockEnd()
    };
    return St() || Be() ? o : s;
  },
  addProseMirrorPlugins() {
    return [
      // With this plugin we check if the whole document was selected and deleted.
      // In this case we will additionally call `clearNodes()` to convert e.g. a heading
      // to a paragraph if necessary.
      // This is an alternative to ProseMirror's `AllSelection`, which doesn’t work well
      // with many other commands.
      new H({
        key: new $("clearDocument"),
        appendTransaction: (e, t, n) => {
          if (e.some((f) => f.getMeta("composition")))
            return;
          const r = e.some((f) => f.docChanged) && !t.doc.eq(n.doc), s = e.some((f) => f.getMeta("preventClearDocument"));
          if (!r || s)
            return;
          const { empty: o, from: i, to: a } = t.selection, c = Z.atStart(t.doc).from, l = Z.atEnd(t.doc).to;
          if (o || !(i === c && a === l) || !wt(n.doc))
            return;
          const p = n.tr, h = gt({
            state: n,
            transaction: p
          }), { commands: m } = new yt({
            editor: this.editor,
            state: h
          });
          if (m.clearNodes(), !!p.steps.length)
            return p;
        }
      })
    ];
  }
}), js = _.create({
  name: "paste",
  addProseMirrorPlugins() {
    return [
      new H({
        key: new $("tiptapPaste"),
        props: {
          handlePaste: (e, t, n) => {
            this.editor.emit("paste", {
              editor: this.editor,
              event: t,
              slice: n
            });
          }
        }
      })
    ];
  }
}), Fs = _.create({
  name: "tabindex",
  addProseMirrorPlugins() {
    return [
      new H({
        key: new $("tabindex"),
        props: {
          attributes: () => this.editor.isEditable ? { tabindex: "0" } : {}
        }
      })
    ];
  }
});
class q {
  get name() {
    return this.node.type.name;
  }
  constructor(t, n, r = !1, s = null) {
    this.currentNode = null, this.actualDepth = null, this.isBlock = r, this.resolvedPos = t, this.editor = n, this.currentNode = s;
  }
  get node() {
    return this.currentNode || this.resolvedPos.node();
  }
  get element() {
    return this.editor.view.domAtPos(this.pos).node;
  }
  get depth() {
    var t;
    return (t = this.actualDepth) !== null && t !== void 0 ? t : this.resolvedPos.depth;
  }
  get pos() {
    return this.resolvedPos.pos;
  }
  get content() {
    return this.node.content;
  }
  set content(t) {
    let n = this.from, r = this.to;
    if (this.isBlock) {
      if (this.content.size === 0) {
        console.error(`You can’t set content on a block node. Tried to set content on ${this.name} at ${this.pos}`);
        return;
      }
      n = this.from + 1, r = this.to - 1;
    }
    this.editor.commands.insertContentAt({ from: n, to: r }, t);
  }
  get attributes() {
    return this.node.attrs;
  }
  get textContent() {
    return this.node.textContent;
  }
  get size() {
    return this.node.nodeSize;
  }
  get from() {
    return this.isBlock ? this.pos : this.resolvedPos.start(this.resolvedPos.depth);
  }
  get range() {
    return {
      from: this.from,
      to: this.to
    };
  }
  get to() {
    return this.isBlock ? this.pos + this.size : this.resolvedPos.end(this.resolvedPos.depth) + (this.node.isText ? 0 : 1);
  }
  get parent() {
    if (this.depth === 0)
      return null;
    const t = this.resolvedPos.start(this.resolvedPos.depth - 1), n = this.resolvedPos.doc.resolve(t);
    return new q(n, this.editor);
  }
  get before() {
    let t = this.resolvedPos.doc.resolve(this.from - (this.isBlock ? 1 : 2));
    return t.depth !== this.depth && (t = this.resolvedPos.doc.resolve(this.from - 3)), new q(t, this.editor);
  }
  get after() {
    let t = this.resolvedPos.doc.resolve(this.to + (this.isBlock ? 2 : 1));
    return t.depth !== this.depth && (t = this.resolvedPos.doc.resolve(this.to + 3)), new q(t, this.editor);
  }
  get children() {
    const t = [];
    return this.node.content.forEach((n, r) => {
      const s = n.isBlock && !n.isTextblock, o = n.isAtom && !n.isText, i = this.pos + r + (o ? 0 : 1), a = this.resolvedPos.doc.resolve(i);
      if (!s && a.depth <= this.depth)
        return;
      const c = new q(a, this.editor, s, s ? n : null);
      s && (c.actualDepth = this.depth + 1), t.push(new q(a, this.editor, s, s ? n : null));
    }), t;
  }
  get firstChild() {
    return this.children[0] || null;
  }
  get lastChild() {
    const t = this.children;
    return t[t.length - 1] || null;
  }
  closest(t, n = {}) {
    let r = null, s = this.parent;
    for (; s && !r; ) {
      if (s.node.type.name === t)
        if (Object.keys(n).length > 0) {
          const o = s.node.attrs, i = Object.keys(n);
          for (let a = 0; a < i.length; a += 1) {
            const c = i[a];
            if (o[c] !== n[c])
              break;
          }
        } else
          r = s;
      s = s.parent;
    }
    return r;
  }
  querySelector(t, n = {}) {
    return this.querySelectorAll(t, n, !0)[0] || null;
  }
  querySelectorAll(t, n = {}, r = !1) {
    let s = [];
    if (!this.children || this.children.length === 0)
      return s;
    const o = Object.keys(n);
    return this.children.forEach((i) => {
      r && s.length > 0 || (i.node.type.name === t && o.every((c) => n[c] === i.node.attrs[c]) && s.push(i), !(r && s.length > 0) && (s = s.concat(i.querySelectorAll(t, n, r))));
    }), s;
  }
  setAttribute(t) {
    const { tr: n } = this.editor.state;
    n.setNodeMarkup(this.from, void 0, {
      ...this.node.attrs,
      ...t
    }), this.editor.view.dispatch(n);
  }
}
const zs = `.ProseMirror {
  position: relative;
}

.ProseMirror {
  word-wrap: break-word;
  white-space: pre-wrap;
  white-space: break-spaces;
  -webkit-font-variant-ligatures: none;
  font-variant-ligatures: none;
  font-feature-settings: "liga" 0; /* the above doesn't seem to work in Edge */
}

.ProseMirror [contenteditable="false"] {
  white-space: normal;
}

.ProseMirror [contenteditable="false"] [contenteditable="true"] {
  white-space: pre-wrap;
}

.ProseMirror pre {
  white-space: pre-wrap;
}

img.ProseMirror-separator {
  display: inline !important;
  border: none !important;
  margin: 0 !important;
  width: 0 !important;
  height: 0 !important;
}

.ProseMirror-gapcursor {
  display: none;
  pointer-events: none;
  position: absolute;
  margin: 0;
}

.ProseMirror-gapcursor:after {
  content: "";
  display: block;
  position: absolute;
  top: -2px;
  width: 20px;
  border-top: 1px solid black;
  animation: ProseMirror-cursor-blink 1.1s steps(2, start) infinite;
}

@keyframes ProseMirror-cursor-blink {
  to {
    visibility: hidden;
  }
}

.ProseMirror-hideselection *::selection {
  background: transparent;
}

.ProseMirror-hideselection *::-moz-selection {
  background: transparent;
}

.ProseMirror-hideselection * {
  caret-color: transparent;
}

.ProseMirror-focused .ProseMirror-gapcursor {
  display: block;
}

.tippy-box[data-animation=fade][data-state=hidden] {
  opacity: 0
}`;
function Vs(e, t, n) {
  const r = document.querySelector("style[data-tiptap-style]");
  if (r !== null)
    return r;
  const s = document.createElement("style");
  return t && s.setAttribute("nonce", t), s.setAttribute("data-tiptap-style", ""), s.innerHTML = e, document.getElementsByTagName("head")[0].appendChild(s), s;
}
class Ws extends tr {
  constructor(t = {}) {
    super(), this.isFocused = !1, this.isInitialized = !1, this.extensionStorage = {}, this.options = {
      element: document.createElement("div"),
      content: "",
      injectCSS: !0,
      injectNonce: void 0,
      extensions: [],
      autofocus: !1,
      editable: !0,
      editorProps: {},
      parseOptions: {},
      coreExtensionOptions: {},
      enableInputRules: !0,
      enablePasteRules: !0,
      enableCoreExtensions: !0,
      enableContentCheck: !1,
      onBeforeCreate: () => null,
      onCreate: () => null,
      onUpdate: () => null,
      onSelectionUpdate: () => null,
      onTransaction: () => null,
      onFocus: () => null,
      onBlur: () => null,
      onDestroy: () => null,
      onContentError: ({ error: n }) => {
        throw n;
      },
      onPaste: () => null,
      onDrop: () => null
    }, this.isCapturingTransaction = !1, this.capturedTransaction = null, this.setOptions(t), this.createExtensionManager(), this.createCommandManager(), this.createSchema(), this.on("beforeCreate", this.options.onBeforeCreate), this.emit("beforeCreate", { editor: this }), this.on("contentError", this.options.onContentError), this.createView(), this.injectCSS(), this.on("create", this.options.onCreate), this.on("update", this.options.onUpdate), this.on("selectionUpdate", this.options.onSelectionUpdate), this.on("transaction", this.options.onTransaction), this.on("focus", this.options.onFocus), this.on("blur", this.options.onBlur), this.on("destroy", this.options.onDestroy), this.on("drop", ({ event: n, slice: r, moved: s }) => this.options.onDrop(n, r, s)), this.on("paste", ({ event: n, slice: r }) => this.options.onPaste(n, r)), window.setTimeout(() => {
      this.isDestroyed || (this.commands.focus(this.options.autofocus), this.emit("create", { editor: this }), this.isInitialized = !0);
    }, 0);
  }
  /**
   * Returns the editor storage.
   */
  get storage() {
    return this.extensionStorage;
  }
  /**
   * An object of all registered commands.
   */
  get commands() {
    return this.commandManager.commands;
  }
  /**
   * Create a command chain to call multiple commands at once.
   */
  chain() {
    return this.commandManager.chain();
  }
  /**
   * Check if a command or a command chain can be executed. Without executing it.
   */
  can() {
    return this.commandManager.can();
  }
  /**
   * Inject CSS styles.
   */
  injectCSS() {
    this.options.injectCSS && document && (this.css = Vs(zs, this.options.injectNonce));
  }
  /**
   * Update editor options.
   *
   * @param options A list of options
   */
  setOptions(t = {}) {
    this.options = {
      ...this.options,
      ...t
    }, !(!this.view || !this.state || this.isDestroyed) && (this.options.editorProps && this.view.setProps(this.options.editorProps), this.view.updateState(this.state));
  }
  /**
   * Update editable state of the editor.
   */
  setEditable(t, n = !0) {
    this.setOptions({ editable: t }), n && this.emit("update", { editor: this, transaction: this.state.tr });
  }
  /**
   * Returns whether the editor is editable.
   */
  get isEditable() {
    return this.options.editable && this.view && this.view.editable;
  }
  /**
   * Returns the editor state.
   */
  get state() {
    return this.view.state;
  }
  /**
   * Register a ProseMirror plugin.
   *
   * @param plugin A ProseMirror plugin
   * @param handlePlugins Control how to merge the plugin into the existing plugins.
   * @returns The new editor state
   */
  registerPlugin(t, n) {
    const r = _e(n) ? n(t, [...this.state.plugins]) : [...this.state.plugins, t], s = this.state.reconfigure({ plugins: r });
    return this.view.updateState(s), s;
  }
  /**
   * Unregister a ProseMirror plugin.
   *
   * @param nameOrPluginKeyToRemove The plugins name
   * @returns The new editor state or undefined if the editor is destroyed
   */
  unregisterPlugin(t) {
    if (this.isDestroyed)
      return;
    const n = this.state.plugins;
    let r = n;
    if ([].concat(t).forEach((o) => {
      const i = typeof o == "string" ? `${o}$` : o.key;
      r = n.filter((a) => !a.key.startsWith(i));
    }), n.length === r.length)
      return;
    const s = this.state.reconfigure({
      plugins: r
    });
    return this.view.updateState(s), s;
  }
  /**
   * Creates an extension manager.
   */
  createExtensionManager() {
    var t, n;
    const s = [...this.options.enableCoreExtensions ? [
      $s,
      fr.configure({
        blockSeparator: (n = (t = this.options.coreExtensionOptions) === null || t === void 0 ? void 0 : t.clipboardTextSerializer) === null || n === void 0 ? void 0 : n.blockSeparator
      }),
      Hs,
      Ns,
      Bs,
      Fs,
      Is,
      js
    ].filter((o) => typeof this.options.enableCoreExtensions == "object" ? this.options.enableCoreExtensions[o.name] !== !1 : !0) : [], ...this.options.extensions].filter((o) => ["extension", "node", "mark"].includes(o == null ? void 0 : o.type));
    this.extensionManager = new Q(s, this);
  }
  /**
   * Creates an command manager.
   */
  createCommandManager() {
    this.commandManager = new yt({
      editor: this
    });
  }
  /**
   * Creates a ProseMirror schema.
   */
  createSchema() {
    this.schema = this.extensionManager.schema;
  }
  /**
   * Creates a ProseMirror view.
   */
  createView() {
    var t;
    let n;
    try {
      n = It(this.options.content, this.schema, this.options.parseOptions, { errorOnInvalidContent: this.options.enableContentCheck });
    } catch (i) {
      if (!(i instanceof Error) || !["[tiptap error]: Invalid JSON content", "[tiptap error]: Invalid HTML content"].includes(i.message))
        throw i;
      this.emit("contentError", {
        editor: this,
        error: i,
        disableCollaboration: () => {
          this.storage.collaboration && (this.storage.collaboration.isDisabled = !0), this.options.extensions = this.options.extensions.filter((a) => a.name !== "collaboration"), this.createExtensionManager();
        }
      }), n = It(this.options.content, this.schema, this.options.parseOptions, { errorOnInvalidContent: !1 });
    }
    const r = $e(n, this.options.autofocus);
    this.view = new Ye(this.options.element, {
      ...this.options.editorProps,
      attributes: {
        // add `role="textbox"` to the editor element
        role: "textbox",
        ...(t = this.options.editorProps) === null || t === void 0 ? void 0 : t.attributes
      },
      dispatchTransaction: this.dispatchTransaction.bind(this),
      state: Xe.create({
        doc: n,
        selection: r || void 0
      })
    });
    const s = this.state.reconfigure({
      plugins: this.extensionManager.plugins
    });
    this.view.updateState(s), this.createNodeViews(), this.prependClass();
    const o = this.view.dom;
    o.editor = this;
  }
  /**
   * Creates all node views.
   */
  createNodeViews() {
    this.view.isDestroyed || this.view.setProps({
      nodeViews: this.extensionManager.nodeViews
    });
  }
  /**
   * Prepend class name to element.
   */
  prependClass() {
    this.view.dom.className = `tiptap ${this.view.dom.className}`;
  }
  captureTransaction(t) {
    this.isCapturingTransaction = !0, t(), this.isCapturingTransaction = !1;
    const n = this.capturedTransaction;
    return this.capturedTransaction = null, n;
  }
  /**
   * The callback over which to send transactions (state updates) produced by the view.
   *
   * @param transaction An editor state transaction
   */
  dispatchTransaction(t) {
    if (this.view.isDestroyed)
      return;
    if (this.isCapturingTransaction) {
      if (!this.capturedTransaction) {
        this.capturedTransaction = t;
        return;
      }
      t.steps.forEach((i) => {
        var a;
        return (a = this.capturedTransaction) === null || a === void 0 ? void 0 : a.step(i);
      });
      return;
    }
    const n = this.state.apply(t), r = !this.state.selection.eq(n.selection);
    this.emit("beforeTransaction", {
      editor: this,
      transaction: t,
      nextState: n
    }), this.view.updateState(n), this.emit("transaction", {
      editor: this,
      transaction: t
    }), r && this.emit("selectionUpdate", {
      editor: this,
      transaction: t
    });
    const s = t.getMeta("focus"), o = t.getMeta("blur");
    s && this.emit("focus", {
      editor: this,
      event: s.event,
      transaction: t
    }), o && this.emit("blur", {
      editor: this,
      event: o.event,
      transaction: t
    }), !(!t.docChanged || t.getMeta("preventUpdate")) && this.emit("update", {
      editor: this,
      transaction: t
    });
  }
  /**
   * Get attributes of the currently selected node or mark.
   */
  getAttributes(t) {
    return ze(this.state, t);
  }
  isActive(t, n) {
    const r = typeof t == "string" ? t : null, s = typeof t == "string" ? n : t;
    return ps(this.state, r, s);
  }
  /**
   * Get the document as JSON.
   */
  getJSON() {
    return this.state.doc.toJSON();
  }
  /**
   * Get the document as HTML.
   */
  getHTML() {
    return Kt(this.state.doc.content, this.schema);
  }
  /**
   * Get the document as text.
   */
  getText(t) {
    const { blockSeparator: n = `

`, textSerializers: r = {} } = t || {};
    return as(this.state.doc, {
      blockSeparator: n,
      textSerializers: {
        ...He(this.schema),
        ...r
      }
    });
  }
  /**
   * Check if there is no content.
   */
  get isEmpty() {
    return wt(this.state.doc);
  }
  /**
   * Get the number of characters for the current document.
   *
   * @deprecated
   */
  getCharacterCount() {
    return console.warn('[tiptap warn]: "editor.getCharacterCount()" is deprecated. Please use "editor.storage.characterCount.characters()" instead.'), this.state.doc.content.size - 2;
  }
  /**
   * Destroy the editor.
   */
  destroy() {
    if (this.emit("destroy"), this.view) {
      const t = this.view.dom;
      t && t.editor && delete t.editor, this.view.destroy();
    }
    this.removeAllListeners();
  }
  /**
   * Check if the editor is already destroyed.
   */
  get isDestroyed() {
    var t;
    return !(!((t = this.view) === null || t === void 0) && t.docView);
  }
  $node(t, n) {
    var r;
    return ((r = this.$doc) === null || r === void 0 ? void 0 : r.querySelector(t, n)) || null;
  }
  $nodes(t, n) {
    var r;
    return ((r = this.$doc) === null || r === void 0 ? void 0 : r.querySelectorAll(t, n)) || null;
  }
  $pos(t) {
    const n = this.state.doc.resolve(t);
    return new q(n, this);
  }
  get $doc() {
    return this.$pos(0);
  }
}
function G(e) {
  return new bt({
    find: e.find,
    handler: ({ state: t, range: n, match: r }) => {
      const s = E(e.getAttributes, void 0, r);
      if (s === !1 || s === null)
        return null;
      const { tr: o } = t, i = r[r.length - 1], a = r[0];
      if (i) {
        const c = a.search(/\S/), l = n.from + a.indexOf(i), u = l + i.length;
        if (Yt(n.from, n.to, t.doc).filter((h) => h.mark.type.excluded.find((f) => f === e.type && f !== h.mark.type)).filter((h) => h.to > l).length)
          return null;
        u < n.to && o.delete(u, n.to), l > n.from && o.delete(n.from + c, l);
        const p = n.from + c + i.length;
        o.addMark(n.from + c, p, e.type.create(s || {})), o.removeStoredMark(e.type);
      }
    }
  });
}
function We(e) {
  return new bt({
    find: e.find,
    handler: ({ state: t, range: n, match: r }) => {
      const s = E(e.getAttributes, void 0, r) || {}, { tr: o } = t, i = n.from;
      let a = n.to;
      const c = e.type.create(s);
      if (r[1]) {
        const l = r[0].lastIndexOf(r[1]);
        let u = i + l;
        u > a ? u = a : a = u + r[1].length;
        const d = r[0][r[0].length - 1];
        o.insertText(d, i + r[0].length - 1), o.replaceWith(u, a, c);
      } else if (r[0]) {
        const l = e.type.isInline ? i : i - 1;
        o.insert(l, e.type.create(s)).delete(o.mapping.map(i), o.mapping.map(a));
      }
      o.scrollIntoView();
    }
  });
}
function Ks(e) {
  return new bt({
    find: e.find,
    handler: ({ state: t, range: n, match: r }) => {
      const s = t.doc.resolve(n.from), o = E(e.getAttributes, void 0, r) || {};
      if (!s.node(-1).canReplaceWith(s.index(-1), s.indexAfter(-1), e.type))
        return null;
      t.tr.delete(n.from, n.to).setBlockType(n.from, n.from, e.type, o);
    }
  });
}
function et(e) {
  return new bt({
    find: e.find,
    handler: ({ state: t, range: n, match: r, chain: s }) => {
      const o = E(e.getAttributes, void 0, r) || {}, i = t.tr.delete(n.from, n.to), c = i.doc.resolve(n.from).blockRange(), l = c && An(c, e.type, o);
      if (!l)
        return null;
      if (i.wrap(c, l), e.keepMarks && e.editor) {
        const { selection: d, storedMarks: p } = t, { splittableMarks: h } = e.editor.extensionManager, m = p || d.$to.parentOffset && d.$from.marks();
        if (m) {
          const f = m.filter((g) => h.includes(g.type.name));
          i.ensureMarks(f);
        }
      }
      if (e.keepAttributes) {
        const d = e.type.name === "bulletList" || e.type.name === "orderedList" ? "listItem" : "taskList";
        s().updateAttributes(d, o).run();
      }
      const u = i.doc.resolve(n.from - 1).nodeBefore;
      u && u.type === e.type && Ft(i.doc, n.from - 1) && (!e.joinPredicate || e.joinPredicate(r, u)) && i.join(n.from - 1);
    }
  });
}
class P {
  constructor(t = {}) {
    this.type = "node", this.name = "node", this.parent = null, this.child = null, this.config = {
      name: this.name,
      defaultOptions: {}
    }, this.config = {
      ...this.config,
      ...t
    }, this.name = this.config.name, t.defaultOptions && Object.keys(t.defaultOptions).length > 0 && console.warn(`[tiptap warn]: BREAKING CHANGE: "defaultOptions" is deprecated. Please use "addOptions" instead. Found in extension: "${this.name}".`), this.options = this.config.defaultOptions, this.config.addOptions && (this.options = E(S(this, "addOptions", {
      name: this.name
    }))), this.storage = E(S(this, "addStorage", {
      name: this.name,
      options: this.options
    })) || {};
  }
  static create(t = {}) {
    return new P(t);
  }
  configure(t = {}) {
    const n = this.extend({
      ...this.config,
      addOptions: () => Mt(this.options, t)
    });
    return n.name = this.name, n.parent = this.parent, n;
  }
  extend(t = {}) {
    const n = new P(t);
    return n.parent = this, this.child = n, n.name = t.name ? t.name : n.parent.name, t.defaultOptions && Object.keys(t.defaultOptions).length > 0 && console.warn(`[tiptap warn]: BREAKING CHANGE: "defaultOptions" is deprecated. Please use "addOptions" instead. Found in extension: "${n.name}".`), n.options = E(S(n, "addOptions", {
      name: n.name
    })), n.storage = E(S(n, "addStorage", {
      name: n.name,
      options: n.options
    })), n;
  }
}
class Us {
  constructor(t, n, r) {
    this.isDragging = !1, this.component = t, this.editor = n.editor, this.options = {
      stopEvent: null,
      ignoreMutation: null,
      ...r
    }, this.extension = n.extension, this.node = n.node, this.decorations = n.decorations, this.innerDecorations = n.innerDecorations, this.view = n.view, this.HTMLAttributes = n.HTMLAttributes, this.getPos = n.getPos, this.mount();
  }
  mount() {
  }
  get dom() {
    return this.editor.view.dom;
  }
  get contentDOM() {
    return null;
  }
  onDragStart(t) {
    var n, r, s, o, i, a, c;
    const { view: l } = this.editor, u = t.target, d = u.nodeType === 3 ? (n = u.parentElement) === null || n === void 0 ? void 0 : n.closest("[data-drag-handle]") : u.closest("[data-drag-handle]");
    if (!this.dom || !((r = this.contentDOM) === null || r === void 0) && r.contains(u) || !d)
      return;
    let p = 0, h = 0;
    if (this.dom !== d) {
      const M = this.dom.getBoundingClientRect(), v = d.getBoundingClientRect(), b = (s = t.offsetX) !== null && s !== void 0 ? s : (o = t.nativeEvent) === null || o === void 0 ? void 0 : o.offsetX, w = (i = t.offsetY) !== null && i !== void 0 ? i : (a = t.nativeEvent) === null || a === void 0 ? void 0 : a.offsetY;
      p = v.x - M.x + b, h = v.y - M.y + w;
    }
    const m = this.dom.cloneNode(!0);
    (c = t.dataTransfer) === null || c === void 0 || c.setDragImage(m, p, h);
    const f = this.getPos();
    if (typeof f != "number")
      return;
    const g = tt.create(l.state.doc, f), y = l.state.tr.setSelection(g);
    l.dispatch(y);
  }
  stopEvent(t) {
    var n;
    if (!this.dom)
      return !1;
    if (typeof this.options.stopEvent == "function")
      return this.options.stopEvent({ event: t });
    const r = t.target;
    if (!(this.dom.contains(r) && !(!((n = this.contentDOM) === null || n === void 0) && n.contains(r))))
      return !1;
    const o = t.type.startsWith("drag"), i = t.type === "drop";
    if ((["INPUT", "BUTTON", "SELECT", "TEXTAREA"].includes(r.tagName) || r.isContentEditable) && !i && !o)
      return !0;
    const { isEditable: c } = this.editor, { isDragging: l } = this, u = !!this.node.type.spec.draggable, d = tt.isSelectable(this.node), p = t.type === "copy", h = t.type === "paste", m = t.type === "cut", f = t.type === "mousedown";
    if (!u && d && o && t.target === this.dom && t.preventDefault(), u && o && !l && t.target === this.dom)
      return t.preventDefault(), !1;
    if (u && c && !l && f) {
      const g = r.closest("[data-drag-handle]");
      g && (this.dom === g || this.dom.contains(g)) && (this.isDragging = !0, document.addEventListener("dragend", () => {
        this.isDragging = !1;
      }, { once: !0 }), document.addEventListener("drop", () => {
        this.isDragging = !1;
      }, { once: !0 }), document.addEventListener("mouseup", () => {
        this.isDragging = !1;
      }, { once: !0 }));
    }
    return !(l || i || p || h || m || f && d);
  }
  /**
   * Called when a DOM [mutation](https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver) or a selection change happens within the view.
   * @return `false` if the editor should re-read the selection or re-parse the range around the mutation
   * @return `true` if it can safely be ignored.
   */
  ignoreMutation(t) {
    return !this.dom || !this.contentDOM ? !0 : typeof this.options.ignoreMutation == "function" ? this.options.ignoreMutation({ mutation: t }) : this.node.isLeaf || this.node.isAtom ? !0 : t.type === "selection" || this.dom.contains(t.target) && t.type === "childList" && (St() || De()) && this.editor.isFocused && [
      ...Array.from(t.addedNodes),
      ...Array.from(t.removedNodes)
    ].every((r) => r.isContentEditable) ? !1 : this.contentDOM === t.target && t.type === "attributes" ? !0 : !this.contentDOM.contains(t.target);
  }
  /**
   * Update the attributes of the prosemirror node.
   */
  updateAttributes(t) {
    this.editor.commands.command(({ tr: n }) => {
      const r = this.getPos();
      return typeof r != "number" ? !1 : (n.setNodeMarkup(r, void 0, {
        ...this.node.attrs,
        ...t
      }), !0);
    });
  }
  /**
   * Delete the node.
   */
  deleteNode() {
    const t = this.getPos();
    if (typeof t != "number")
      return;
    const n = t + this.node.nodeSize;
    this.editor.commands.deleteRange({ from: t, to: n });
  }
}
function W(e) {
  return new Pe({
    find: e.find,
    handler: ({ state: t, range: n, match: r, pasteEvent: s }) => {
      const o = E(e.getAttributes, void 0, r, s);
      if (o === !1 || o === null)
        return null;
      const { tr: i } = t, a = r[r.length - 1], c = r[0];
      let l = n.to;
      if (a) {
        const u = c.search(/\S/), d = n.from + c.indexOf(a), p = d + a.length;
        if (Yt(n.from, n.to, t.doc).filter((m) => m.mark.type.excluded.find((g) => g === e.type && g !== m.mark.type)).filter((m) => m.to > d).length)
          return null;
        p < n.to && i.delete(p, n.to), d > n.from && i.delete(n.from + u, d), l = n.from + u + a.length, i.addMark(n.from + u, l, e.type.create(o || {})), i.removeStoredMark(e.type);
      }
    }
  });
}
function qs(e) {
  return e.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&");
}
function ri(e) {
  return new Pe({
    find: e.find,
    handler({ match: t, chain: n, range: r, pasteEvent: s }) {
      const o = E(e.getAttributes, void 0, t, s), i = E(e.getContent, void 0, o);
      if (o === !1 || o === null)
        return null;
      const a = { type: e.type.name, attrs: o };
      i && (a.content = i), t.input && n().deleteRange(r).insertContentAt(r.from, a);
    }
  });
}
class Gs {
  constructor({ editor: t, element: n, view: r, tippyOptions: s = {}, updateDelay: o = 250, shouldShow: i }) {
    this.preventHide = !1, this.shouldShow = ({ view: a, state: c, from: l, to: u }) => {
      const { doc: d, selection: p } = c, { empty: h } = p, m = !d.textBetween(l, u).length && Gt(c.selection), f = this.element.contains(document.activeElement);
      return !(!(a.hasFocus() || f) || h || m || !this.editor.isEditable);
    }, this.mousedownHandler = () => {
      this.preventHide = !0;
    }, this.dragstartHandler = () => {
      this.hide();
    }, this.focusHandler = () => {
      setTimeout(() => this.update(this.editor.view));
    }, this.blurHandler = ({ event: a }) => {
      var c;
      if (this.preventHide) {
        this.preventHide = !1;
        return;
      }
      a != null && a.relatedTarget && (!((c = this.element.parentNode) === null || c === void 0) && c.contains(a.relatedTarget)) || (a == null ? void 0 : a.relatedTarget) !== this.editor.view.dom && this.hide();
    }, this.tippyBlurHandler = (a) => {
      this.blurHandler({ event: a });
    }, this.handleDebouncedUpdate = (a, c) => {
      const l = !(c != null && c.selection.eq(a.state.selection)), u = !(c != null && c.doc.eq(a.state.doc));
      !l && !u || (this.updateDebounceTimer && clearTimeout(this.updateDebounceTimer), this.updateDebounceTimer = window.setTimeout(() => {
        this.updateHandler(a, l, u, c);
      }, this.updateDelay));
    }, this.updateHandler = (a, c, l, u) => {
      var d, p, h;
      const { state: m, composing: f } = a, { selection: g } = m;
      if (f || !c && !l)
        return;
      this.createTooltip();
      const { ranges: M } = g, v = Math.min(...M.map((k) => k.$from.pos)), b = Math.max(...M.map((k) => k.$to.pos));
      if (!((d = this.shouldShow) === null || d === void 0 ? void 0 : d.call(this, {
        editor: this.editor,
        element: this.element,
        view: a,
        state: m,
        oldState: u,
        from: v,
        to: b
      }))) {
        this.hide();
        return;
      }
      (p = this.tippy) === null || p === void 0 || p.setProps({
        getReferenceClientRect: ((h = this.tippyOptions) === null || h === void 0 ? void 0 : h.getReferenceClientRect) || (() => {
          if (Ve(m.selection)) {
            let k = a.nodeDOM(v);
            if (k) {
              const T = k.dataset.nodeViewWrapper ? k : k.querySelector("[data-node-view-wrapper]");
              if (T && (k = T.firstChild), k)
                return k.getBoundingClientRect();
            }
          }
          return hs(a, v, b);
        })
      }), this.show();
    }, this.editor = t, this.element = n, this.view = r, this.updateDelay = o, i && (this.shouldShow = i), this.element.addEventListener("mousedown", this.mousedownHandler, { capture: !0 }), this.view.dom.addEventListener("dragstart", this.dragstartHandler), this.editor.on("focus", this.focusHandler), this.editor.on("blur", this.blurHandler), this.tippyOptions = s, this.element.remove(), this.element.style.visibility = "visible";
  }
  createTooltip() {
    const { element: t } = this.editor.options, n = !!t.parentElement;
    this.tippy || !n || (this.tippy = Je(t, {
      duration: 0,
      getReferenceClientRect: null,
      content: this.element,
      interactive: !0,
      trigger: "manual",
      placement: "top",
      hideOnClick: "toggle",
      ...this.tippyOptions
    }), this.tippy.popper.firstChild && this.tippy.popper.firstChild.addEventListener("blur", this.tippyBlurHandler));
  }
  update(t, n) {
    const { state: r } = t, s = r.selection.from !== r.selection.to;
    if (this.updateDelay > 0 && s) {
      this.handleDebouncedUpdate(t, n);
      return;
    }
    const o = !(n != null && n.selection.eq(t.state.selection)), i = !(n != null && n.doc.eq(t.state.doc));
    this.updateHandler(t, o, i, n);
  }
  show() {
    var t;
    (t = this.tippy) === null || t === void 0 || t.show();
  }
  hide() {
    var t;
    (t = this.tippy) === null || t === void 0 || t.hide();
  }
  destroy() {
    var t, n;
    !((t = this.tippy) === null || t === void 0) && t.popper.firstChild && this.tippy.popper.firstChild.removeEventListener("blur", this.tippyBlurHandler), (n = this.tippy) === null || n === void 0 || n.destroy(), this.element.removeEventListener("mousedown", this.mousedownHandler, { capture: !0 }), this.view.dom.removeEventListener("dragstart", this.dragstartHandler), this.editor.off("focus", this.focusHandler), this.editor.off("blur", this.blurHandler);
  }
}
const Ke = (e) => new H({
  key: typeof e.pluginKey == "string" ? new $(e.pluginKey) : e.pluginKey,
  view: (t) => new Gs({ view: t, ...e })
});
_.create({
  name: "bubbleMenu",
  addOptions() {
    return {
      element: null,
      tippyOptions: {},
      pluginKey: "bubbleMenu",
      updateDelay: void 0,
      shouldShow: null
    };
  },
  addProseMirrorPlugins() {
    return this.options.element ? [
      Ke({
        pluginKey: this.options.pluginKey,
        editor: this.editor,
        element: this.options.element,
        tippyOptions: this.options.tippyOptions,
        updateDelay: this.options.updateDelay,
        shouldShow: this.options.shouldShow
      })
    ] : [];
  }
});
function Js(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Dt = { exports: {} }, _t = {};
/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var pe;
function Ys() {
  if (pe) return _t;
  pe = 1;
  var e = L;
  function t(d, p) {
    return d === p && (d !== 0 || 1 / d === 1 / p) || d !== d && p !== p;
  }
  var n = typeof Object.is == "function" ? Object.is : t, r = e.useState, s = e.useEffect, o = e.useLayoutEffect, i = e.useDebugValue;
  function a(d, p) {
    var h = p(), m = r({ inst: { value: h, getSnapshot: p } }), f = m[0].inst, g = m[1];
    return o(function() {
      f.value = h, f.getSnapshot = p, c(f) && g({ inst: f });
    }, [d, h, p]), s(function() {
      return c(f) && g({ inst: f }), d(function() {
        c(f) && g({ inst: f });
      });
    }, [d]), i(h), h;
  }
  function c(d) {
    var p = d.getSnapshot;
    d = d.value;
    try {
      var h = p();
      return !n(d, h);
    } catch {
      return !0;
    }
  }
  function l(d, p) {
    return p();
  }
  var u = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? l : a;
  return _t.useSyncExternalStore = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : u, _t;
}
var Pt = {};
/**
 * @license React
 * use-sync-external-store-shim.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var he;
function Xs() {
  return he || (he = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var e = L, t = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function n(v) {
      {
        for (var b = arguments.length, w = new Array(b > 1 ? b - 1 : 0), k = 1; k < b; k++)
          w[k - 1] = arguments[k];
        r("error", v, w);
      }
    }
    function r(v, b, w) {
      {
        var k = t.ReactDebugCurrentFrame, T = k.getStackAddendum();
        T !== "" && (b += "%s", w = w.concat([T]));
        var x = w.map(function(O) {
          return String(O);
        });
        x.unshift("Warning: " + b), Function.prototype.apply.call(console[v], console, x);
      }
    }
    function s(v, b) {
      return v === b && (v !== 0 || 1 / v === 1 / b) || v !== v && b !== b;
    }
    var o = typeof Object.is == "function" ? Object.is : s, i = e.useState, a = e.useEffect, c = e.useLayoutEffect, l = e.useDebugValue, u = !1, d = !1;
    function p(v, b, w) {
      u || e.startTransition !== void 0 && (u = !0, n("You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release."));
      var k = b();
      if (!d) {
        var T = b();
        o(k, T) || (n("The result of getSnapshot should be cached to avoid an infinite loop"), d = !0);
      }
      var x = i({
        inst: {
          value: k,
          getSnapshot: b
        }
      }), O = x[0].inst, A = x[1];
      return c(function() {
        O.value = k, O.getSnapshot = b, h(O) && A({
          inst: O
        });
      }, [v, k, b]), a(function() {
        h(O) && A({
          inst: O
        });
        var I = function() {
          h(O) && A({
            inst: O
          });
        };
        return v(I);
      }, [v]), l(k), k;
    }
    function h(v) {
      var b = v.getSnapshot, w = v.value;
      try {
        var k = b();
        return !o(w, k);
      } catch {
        return !0;
      }
    }
    function m(v, b, w) {
      return b();
    }
    var f = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", g = !f, y = g ? m : p, M = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : y;
    Pt.useSyncExternalStore = M, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), Pt;
}
process.env.NODE_ENV === "production" ? Dt.exports = Ys() : Dt.exports = Xs();
var Et = Dt.exports;
const Qs = (...e) => (t) => {
  e.forEach((n) => {
    typeof n == "function" ? n(t) : n && (n.current = t);
  });
}, Zs = ({ contentComponent: e }) => {
  const t = Et.useSyncExternalStore(e.subscribe, e.getSnapshot, e.getServerSnapshot);
  return L.createElement(L.Fragment, null, Object.values(t));
};
function to() {
  const e = /* @__PURE__ */ new Set();
  let t = {};
  return {
    /**
     * Subscribe to the editor instance's changes.
     */
    subscribe(n) {
      return e.add(n), () => {
        e.delete(n);
      };
    },
    getSnapshot() {
      return t;
    },
    getServerSnapshot() {
      return t;
    },
    /**
     * Adds a new NodeView Renderer to the editor.
     */
    setRenderer(n, r) {
      t = {
        ...t,
        [n]: Qn.createPortal(r.reactElement, r.element, n)
      }, e.forEach((s) => s());
    },
    /**
     * Removes a NodeView Renderer from the editor.
     */
    removeRenderer(n) {
      const r = { ...t };
      delete r[n], t = r, e.forEach((s) => s());
    }
  };
}
class eo extends L.Component {
  constructor(t) {
    var n;
    super(t), this.editorContentRef = L.createRef(), this.initialized = !1, this.state = {
      hasContentComponentInitialized: !!(!((n = t.editor) === null || n === void 0) && n.contentComponent)
    };
  }
  componentDidMount() {
    this.init();
  }
  componentDidUpdate() {
    this.init();
  }
  init() {
    const t = this.props.editor;
    if (t && !t.isDestroyed && t.options.element) {
      if (t.contentComponent)
        return;
      const n = this.editorContentRef.current;
      n.append(...t.options.element.childNodes), t.setOptions({
        element: n
      }), t.contentComponent = to(), this.state.hasContentComponentInitialized || (this.unsubscribeToContentComponent = t.contentComponent.subscribe(() => {
        this.setState((r) => r.hasContentComponentInitialized ? r : {
          hasContentComponentInitialized: !0
        }), this.unsubscribeToContentComponent && this.unsubscribeToContentComponent();
      })), t.createNodeViews(), this.initialized = !0;
    }
  }
  componentWillUnmount() {
    const t = this.props.editor;
    if (!t || (this.initialized = !1, t.isDestroyed || t.view.setProps({
      nodeViews: {}
    }), this.unsubscribeToContentComponent && this.unsubscribeToContentComponent(), t.contentComponent = null, !t.options.element.firstChild))
      return;
    const n = document.createElement("div");
    n.append(...t.options.element.childNodes), t.setOptions({
      element: n
    });
  }
  render() {
    const { editor: t, innerRef: n, ...r } = this.props;
    return L.createElement(
      L.Fragment,
      null,
      L.createElement("div", { ref: Qs(n, this.editorContentRef), ...r }),
      (t == null ? void 0 : t.contentComponent) && L.createElement(Zs, { contentComponent: t.contentComponent })
    );
  }
}
const no = Yn((e, t) => {
  const n = L.useMemo(() => Math.floor(Math.random() * 4294967295).toString(), [e.editor]);
  return L.createElement(eo, {
    key: n,
    innerRef: t,
    ...e
  });
}), si = L.memo(no);
var ro = function e(t, n) {
  if (t === n) return !0;
  if (t && n && typeof t == "object" && typeof n == "object") {
    if (t.constructor !== n.constructor) return !1;
    var r, s, o;
    if (Array.isArray(t)) {
      if (r = t.length, r != n.length) return !1;
      for (s = r; s-- !== 0; )
        if (!e(t[s], n[s])) return !1;
      return !0;
    }
    if (t instanceof Map && n instanceof Map) {
      if (t.size !== n.size) return !1;
      for (s of t.entries())
        if (!n.has(s[0])) return !1;
      for (s of t.entries())
        if (!e(s[1], n.get(s[0]))) return !1;
      return !0;
    }
    if (t instanceof Set && n instanceof Set) {
      if (t.size !== n.size) return !1;
      for (s of t.entries())
        if (!n.has(s[0])) return !1;
      return !0;
    }
    if (ArrayBuffer.isView(t) && ArrayBuffer.isView(n)) {
      if (r = t.length, r != n.length) return !1;
      for (s = r; s-- !== 0; )
        if (t[s] !== n[s]) return !1;
      return !0;
    }
    if (t.constructor === RegExp) return t.source === n.source && t.flags === n.flags;
    if (t.valueOf !== Object.prototype.valueOf) return t.valueOf() === n.valueOf();
    if (t.toString !== Object.prototype.toString) return t.toString() === n.toString();
    if (o = Object.keys(t), r = o.length, r !== Object.keys(n).length) return !1;
    for (s = r; s-- !== 0; )
      if (!Object.prototype.hasOwnProperty.call(n, o[s])) return !1;
    for (s = r; s-- !== 0; ) {
      var i = o[s];
      if (!(i === "_owner" && t.$$typeof) && !e(t[i], n[i]))
        return !1;
    }
    return !0;
  }
  return t !== t && n !== n;
}, so = /* @__PURE__ */ Js(ro), Nt = { exports: {} }, Rt = {};
/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var fe;
function oo() {
  if (fe) return Rt;
  fe = 1;
  var e = L, t = Et;
  function n(l, u) {
    return l === u && (l !== 0 || 1 / l === 1 / u) || l !== l && u !== u;
  }
  var r = typeof Object.is == "function" ? Object.is : n, s = t.useSyncExternalStore, o = e.useRef, i = e.useEffect, a = e.useMemo, c = e.useDebugValue;
  return Rt.useSyncExternalStoreWithSelector = function(l, u, d, p, h) {
    var m = o(null);
    if (m.current === null) {
      var f = { hasValue: !1, value: null };
      m.current = f;
    } else f = m.current;
    m = a(function() {
      function y(k) {
        if (!M) {
          if (M = !0, v = k, k = p(k), h !== void 0 && f.hasValue) {
            var T = f.value;
            if (h(T, k)) return b = T;
          }
          return b = k;
        }
        if (T = b, r(v, k)) return T;
        var x = p(k);
        return h !== void 0 && h(T, x) ? T : (v = k, b = x);
      }
      var M = !1, v, b, w = d === void 0 ? null : d;
      return [function() {
        return y(u());
      }, w === null ? void 0 : function() {
        return y(w());
      }];
    }, [u, d, p, h]);
    var g = s(l, m[0], m[1]);
    return i(function() {
      f.hasValue = !0, f.value = g;
    }, [g]), c(g), g;
  }, Rt;
}
var Ht = {};
/**
 * @license React
 * use-sync-external-store-shim/with-selector.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var me;
function io() {
  return me || (me = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var e = L, t = Et;
    function n(u, d) {
      return u === d && (u !== 0 || 1 / u === 1 / d) || u !== u && d !== d;
    }
    var r = typeof Object.is == "function" ? Object.is : n, s = t.useSyncExternalStore, o = e.useRef, i = e.useEffect, a = e.useMemo, c = e.useDebugValue;
    function l(u, d, p, h, m) {
      var f = o(null), g;
      f.current === null ? (g = {
        hasValue: !1,
        value: null
      }, f.current = g) : g = f.current;
      var y = a(function() {
        var w = !1, k, T, x = function(B) {
          if (!w) {
            w = !0, k = B;
            var J = h(B);
            if (m !== void 0 && g.hasValue) {
              var Y = g.value;
              if (m(Y, J))
                return T = Y, Y;
            }
            return T = J, J;
          }
          var nt = k, j = T;
          if (r(nt, B))
            return j;
          var z = h(B);
          return m !== void 0 && m(j, z) ? j : (k = B, T = z, z);
        }, O = p === void 0 ? null : p, A = function() {
          return x(d());
        }, I = O === null ? void 0 : function() {
          return x(O());
        };
        return [A, I];
      }, [d, p, h, m]), M = y[0], v = y[1], b = s(u, M, v);
      return i(function() {
        g.hasValue = !0, g.value = b;
      }, [b]), c(b), b;
    }
    Ht.useSyncExternalStoreWithSelector = l, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), Ht;
}
process.env.NODE_ENV === "production" ? Nt.exports = oo() : Nt.exports = io();
var ao = Nt.exports;
const lo = typeof window < "u" ? Xn : Wt;
class co {
  constructor(t) {
    this.transactionNumber = 0, this.lastTransactionNumber = 0, this.subscribers = /* @__PURE__ */ new Set(), this.editor = t, this.lastSnapshot = { editor: t, transactionNumber: 0 }, this.getSnapshot = this.getSnapshot.bind(this), this.getServerSnapshot = this.getServerSnapshot.bind(this), this.watch = this.watch.bind(this), this.subscribe = this.subscribe.bind(this);
  }
  /**
   * Get the current editor instance.
   */
  getSnapshot() {
    return this.transactionNumber === this.lastTransactionNumber ? this.lastSnapshot : (this.lastTransactionNumber = this.transactionNumber, this.lastSnapshot = { editor: this.editor, transactionNumber: this.transactionNumber }, this.lastSnapshot);
  }
  /**
   * Always disable the editor on the server-side.
   */
  getServerSnapshot() {
    return { editor: null, transactionNumber: 0 };
  }
  /**
   * Subscribe to the editor instance's changes.
   */
  subscribe(t) {
    return this.subscribers.add(t), () => {
      this.subscribers.delete(t);
    };
  }
  /**
   * Watch the editor instance for changes.
   */
  watch(t) {
    if (this.editor = t, this.editor) {
      const n = () => {
        this.transactionNumber += 1, this.subscribers.forEach((s) => s());
      }, r = this.editor;
      return r.on("transaction", n), () => {
        r.off("transaction", n);
      };
    }
  }
}
function uo(e) {
  var t;
  const [n] = Vt(() => new co(e.editor)), r = ao.useSyncExternalStoreWithSelector(n.subscribe, n.getSnapshot, n.getServerSnapshot, e.selector, (t = e.equalityFn) !== null && t !== void 0 ? t : so);
  return lo(() => n.watch(e.editor), [e.editor, n]), xe(r), r;
}
const ge = process.env.NODE_ENV !== "production", Bt = typeof window > "u", po = Bt || !!(typeof window < "u" && window.next);
class Xt {
  constructor(t) {
    this.editor = null, this.subscriptions = /* @__PURE__ */ new Set(), this.isComponentMounted = !1, this.previousDeps = null, this.instanceId = "", this.options = t, this.subscriptions = /* @__PURE__ */ new Set(), this.setEditor(this.getInitialEditor()), this.scheduleDestroy(), this.getEditor = this.getEditor.bind(this), this.getServerSnapshot = this.getServerSnapshot.bind(this), this.subscribe = this.subscribe.bind(this), this.refreshEditorInstance = this.refreshEditorInstance.bind(this), this.scheduleDestroy = this.scheduleDestroy.bind(this), this.onRender = this.onRender.bind(this), this.createEditor = this.createEditor.bind(this);
  }
  setEditor(t) {
    this.editor = t, this.instanceId = Math.random().toString(36).slice(2, 9), this.subscriptions.forEach((n) => n());
  }
  getInitialEditor() {
    if (this.options.current.immediatelyRender === void 0)
      return Bt || po ? (ge && console.warn("Tiptap Error: SSR has been detected, please set `immediatelyRender` explicitly to `false` to avoid hydration mismatches."), null) : this.createEditor();
    if (this.options.current.immediatelyRender && Bt && ge)
      throw new Error("Tiptap Error: SSR has been detected, and `immediatelyRender` has been set to `true` this is an unsupported configuration that may result in errors, explicitly set `immediatelyRender` to `false` to avoid hydration mismatches.");
    return this.options.current.immediatelyRender ? this.createEditor() : null;
  }
  /**
   * Create a new editor instance. And attach event listeners.
   */
  createEditor() {
    const t = {
      ...this.options.current,
      // Always call the most recent version of the callback function by default
      onBeforeCreate: (...r) => {
        var s, o;
        return (o = (s = this.options.current).onBeforeCreate) === null || o === void 0 ? void 0 : o.call(s, ...r);
      },
      onBlur: (...r) => {
        var s, o;
        return (o = (s = this.options.current).onBlur) === null || o === void 0 ? void 0 : o.call(s, ...r);
      },
      onCreate: (...r) => {
        var s, o;
        return (o = (s = this.options.current).onCreate) === null || o === void 0 ? void 0 : o.call(s, ...r);
      },
      onDestroy: (...r) => {
        var s, o;
        return (o = (s = this.options.current).onDestroy) === null || o === void 0 ? void 0 : o.call(s, ...r);
      },
      onFocus: (...r) => {
        var s, o;
        return (o = (s = this.options.current).onFocus) === null || o === void 0 ? void 0 : o.call(s, ...r);
      },
      onSelectionUpdate: (...r) => {
        var s, o;
        return (o = (s = this.options.current).onSelectionUpdate) === null || o === void 0 ? void 0 : o.call(s, ...r);
      },
      onTransaction: (...r) => {
        var s, o;
        return (o = (s = this.options.current).onTransaction) === null || o === void 0 ? void 0 : o.call(s, ...r);
      },
      onUpdate: (...r) => {
        var s, o;
        return (o = (s = this.options.current).onUpdate) === null || o === void 0 ? void 0 : o.call(s, ...r);
      },
      onContentError: (...r) => {
        var s, o;
        return (o = (s = this.options.current).onContentError) === null || o === void 0 ? void 0 : o.call(s, ...r);
      },
      onDrop: (...r) => {
        var s, o;
        return (o = (s = this.options.current).onDrop) === null || o === void 0 ? void 0 : o.call(s, ...r);
      },
      onPaste: (...r) => {
        var s, o;
        return (o = (s = this.options.current).onPaste) === null || o === void 0 ? void 0 : o.call(s, ...r);
      }
    };
    return new Ws(t);
  }
  /**
   * Get the current editor instance.
   */
  getEditor() {
    return this.editor;
  }
  /**
   * Always disable the editor on the server-side.
   */
  getServerSnapshot() {
    return null;
  }
  /**
   * Subscribe to the editor instance's changes.
   */
  subscribe(t) {
    return this.subscriptions.add(t), () => {
      this.subscriptions.delete(t);
    };
  }
  static compareOptions(t, n) {
    return Object.keys(t).every((r) => ["onCreate", "onBeforeCreate", "onDestroy", "onUpdate", "onTransaction", "onFocus", "onBlur", "onSelectionUpdate", "onContentError", "onDrop", "onPaste"].includes(r) ? !0 : r === "extensions" && t.extensions && n.extensions ? t.extensions.length !== n.extensions.length ? !1 : t.extensions.every((s, o) => {
      var i;
      return s === ((i = n.extensions) === null || i === void 0 ? void 0 : i[o]);
    }) : t[r] === n[r]);
  }
  /**
   * On each render, we will create, update, or destroy the editor instance.
   * @param deps The dependencies to watch for changes
   * @returns A cleanup function
   */
  onRender(t) {
    return () => (this.isComponentMounted = !0, clearTimeout(this.scheduledDestructionTimeout), this.editor && !this.editor.isDestroyed && t.length === 0 ? Xt.compareOptions(this.options.current, this.editor.options) || this.editor.setOptions({
      ...this.options.current,
      editable: this.editor.isEditable
    }) : this.refreshEditorInstance(t), () => {
      this.isComponentMounted = !1, this.scheduleDestroy();
    });
  }
  /**
   * Recreate the editor instance if the dependencies have changed.
   */
  refreshEditorInstance(t) {
    if (this.editor && !this.editor.isDestroyed) {
      if (this.previousDeps === null) {
        this.previousDeps = t;
        return;
      }
      if (this.previousDeps.length === t.length && this.previousDeps.every((r, s) => r === t[s]))
        return;
    }
    this.editor && !this.editor.isDestroyed && this.editor.destroy(), this.setEditor(this.createEditor()), this.previousDeps = t;
  }
  /**
   * Schedule the destruction of the editor instance.
   * This will only destroy the editor if it was not mounted on the next tick.
   * This is to avoid destroying the editor instance when it's actually still mounted.
   */
  scheduleDestroy() {
    const t = this.instanceId, n = this.editor;
    this.scheduledDestructionTimeout = setTimeout(() => {
      if (this.isComponentMounted && this.instanceId === t) {
        n && n.setOptions(this.options.current);
        return;
      }
      n && !n.isDestroyed && (n.destroy(), this.instanceId === t && this.setEditor(null));
    }, 1);
  }
}
function oi(e = {}, t = []) {
  const n = Jn(e);
  n.current = e;
  const [r] = Vt(() => new Xt(n)), s = Et.useSyncExternalStore(r.subscribe, r.getEditor, r.getServerSnapshot);
  return xe(s), Wt(r.onRender(t)), uo({
    editor: s,
    selector: ({ transactionNumber: o }) => e.shouldRerenderOnTransaction === !1 ? null : e.immediatelyRender && o === 0 ? 0 : o + 1
  }), s;
}
const Ue = Oe({
  editor: null
});
Ue.Consumer;
const ho = () => Ae(Ue), ii = (e) => {
  const [t, n] = Vt(null), { editor: r } = ho();
  return Wt(() => {
    var s;
    if (!t || !((s = e.editor) === null || s === void 0) && s.isDestroyed || r != null && r.isDestroyed)
      return;
    const { pluginKey: o = "bubbleMenu", editor: i, tippyOptions: a = {}, updateDelay: c, shouldShow: l = null } = e, u = i || r;
    if (!u) {
      console.warn("BubbleMenu component is not rendered inside of an editor component or does not have editor prop.");
      return;
    }
    const d = Ke({
      updateDelay: c,
      editor: u,
      element: t,
      pluginKey: o,
      shouldShow: l,
      tippyOptions: a
    });
    return u.registerPlugin(d), () => {
      u.unregisterPlugin(o);
    };
  }, [e.editor, r, t]), L.createElement("div", { ref: n, className: e.className, style: { visibility: "hidden" } }, e.children);
}, qe = Oe({
  onDragStart: void 0
}), fo = () => Ae(qe), ai = L.forwardRef((e, t) => {
  const { onDragStart: n } = fo(), r = e.as || "div";
  return (
    // @ts-ignore
    L.createElement(r, { ...e, ref: t, "data-node-view-wrapper": "", onDragStart: n, style: {
      whiteSpace: "normal",
      ...e.style
    } })
  );
});
function mo(e) {
  return !!(typeof e == "function" && e.prototype && e.prototype.isReactComponent);
}
function go(e) {
  var t;
  return typeof e == "object" && ((t = e.$$typeof) === null || t === void 0 ? void 0 : t.toString()) === "Symbol(react.forward_ref)";
}
class yo {
  /**
   * Immediately creates element and renders the provided React component.
   */
  constructor(t, { editor: n, props: r = {}, as: s = "div", className: o = "" }) {
    this.ref = null, this.id = Math.floor(Math.random() * 4294967295).toString(), this.component = t, this.editor = n, this.props = r, this.element = document.createElement(s), this.element.classList.add("react-renderer"), o && this.element.classList.add(...o.split(" ")), this.editor.isInitialized ? Zn(() => {
      this.render();
    }) : this.render();
  }
  /**
   * Render the React component.
   */
  render() {
    var t;
    const n = this.component, r = this.props, s = this.editor;
    (mo(n) || go(n)) && (r.ref = (o) => {
      this.ref = o;
    }), this.reactElement = L.createElement(n, { ...r }), (t = s == null ? void 0 : s.contentComponent) === null || t === void 0 || t.setRenderer(this.id, this);
  }
  /**
   * Re-renders the React component with new props.
   */
  updateProps(t = {}) {
    this.props = {
      ...this.props,
      ...t
    }, this.render();
  }
  /**
   * Destroy the React component.
   */
  destroy() {
    var t;
    const n = this.editor;
    (t = n == null ? void 0 : n.contentComponent) === null || t === void 0 || t.removeRenderer(this.id);
  }
  /**
   * Update the attributes of the element that holds the React component.
   */
  updateAttributes(t) {
    Object.keys(t).forEach((n) => {
      this.element.setAttribute(n, t[n]);
    });
  }
}
class vo extends Us {
  /**
   * Setup the React component.
   * Called on initialization.
   */
  mount() {
    const t = {
      editor: this.editor,
      node: this.node,
      decorations: this.decorations,
      innerDecorations: this.innerDecorations,
      view: this.view,
      selected: !1,
      extension: this.extension,
      HTMLAttributes: this.HTMLAttributes,
      getPos: () => this.getPos(),
      updateAttributes: (l = {}) => this.updateAttributes(l),
      deleteNode: () => this.deleteNode()
    };
    if (!this.component.displayName) {
      const l = (u) => u.charAt(0).toUpperCase() + u.substring(1);
      this.component.displayName = l(this.extension.name);
    }
    const s = { onDragStart: this.onDragStart.bind(this), nodeViewContentRef: (l) => {
      l && this.contentDOMElement && l.firstChild !== this.contentDOMElement && l.appendChild(this.contentDOMElement);
    } }, o = this.component, i = L.memo((l) => L.createElement(qe.Provider, { value: s }, L.createElement(o, l)));
    i.displayName = "ReactNodeView", this.node.isLeaf ? this.contentDOMElement = null : this.options.contentDOMElementTag ? this.contentDOMElement = document.createElement(this.options.contentDOMElementTag) : this.contentDOMElement = document.createElement(this.node.isInline ? "span" : "div"), this.contentDOMElement && (this.contentDOMElement.dataset.nodeViewContentReact = "", this.contentDOMElement.style.whiteSpace = "inherit");
    let a = this.node.isInline ? "span" : "div";
    this.options.as && (a = this.options.as);
    const { className: c = "" } = this.options;
    this.handleSelectionUpdate = this.handleSelectionUpdate.bind(this), this.renderer = new yo(i, {
      editor: this.editor,
      props: t,
      as: a,
      className: `node-${this.node.type.name} ${c}`.trim()
    }), this.editor.on("selectionUpdate", this.handleSelectionUpdate), this.updateElementAttributes();
  }
  /**
   * Return the DOM element.
   * This is the element that will be used to display the node view.
   */
  get dom() {
    var t;
    if (this.renderer.element.firstElementChild && !(!((t = this.renderer.element.firstElementChild) === null || t === void 0) && t.hasAttribute("data-node-view-wrapper")))
      throw Error("Please use the NodeViewWrapper component for your node view.");
    return this.renderer.element;
  }
  /**
   * Return the content DOM element.
   * This is the element that will be used to display the rich-text content of the node.
   */
  get contentDOM() {
    return this.node.isLeaf ? null : this.contentDOMElement;
  }
  /**
   * On editor selection update, check if the node is selected.
   * If it is, call `selectNode`, otherwise call `deselectNode`.
   */
  handleSelectionUpdate() {
    const { from: t, to: n } = this.editor.state.selection, r = this.getPos();
    if (typeof r == "number")
      if (t <= r && n >= r + this.node.nodeSize) {
        if (this.renderer.props.selected)
          return;
        this.selectNode();
      } else {
        if (!this.renderer.props.selected)
          return;
        this.deselectNode();
      }
  }
  /**
   * On update, update the React component.
   * To prevent unnecessary updates, the `update` option can be used.
   */
  update(t, n, r) {
    const s = (o) => {
      this.renderer.updateProps(o), typeof this.options.attrs == "function" && this.updateElementAttributes();
    };
    if (t.type !== this.node.type)
      return !1;
    if (typeof this.options.update == "function") {
      const o = this.node, i = this.decorations, a = this.innerDecorations;
      return this.node = t, this.decorations = n, this.innerDecorations = r, this.options.update({
        oldNode: o,
        oldDecorations: i,
        newNode: t,
        newDecorations: n,
        oldInnerDecorations: a,
        innerDecorations: r,
        updateProps: () => s({ node: t, decorations: n, innerDecorations: r })
      });
    }
    return t === this.node && this.decorations === n && this.innerDecorations === r || (this.node = t, this.decorations = n, this.innerDecorations = r, s({ node: t, decorations: n, innerDecorations: r })), !0;
  }
  /**
   * Select the node.
   * Add the `selected` prop and the `ProseMirror-selectednode` class.
   */
  selectNode() {
    this.renderer.updateProps({
      selected: !0
    }), this.renderer.element.classList.add("ProseMirror-selectednode");
  }
  /**
   * Deselect the node.
   * Remove the `selected` prop and the `ProseMirror-selectednode` class.
   */
  deselectNode() {
    this.renderer.updateProps({
      selected: !1
    }), this.renderer.element.classList.remove("ProseMirror-selectednode");
  }
  /**
   * Destroy the React component instance.
   */
  destroy() {
    this.renderer.destroy(), this.editor.off("selectionUpdate", this.handleSelectionUpdate), this.contentDOMElement = null;
  }
  /**
   * Update the attributes of the top-level element that holds the React component.
   * Applying the attributes defined in the `attrs` option.
   */
  updateElementAttributes() {
    if (this.options.attrs) {
      let t = {};
      if (typeof this.options.attrs == "function") {
        const n = this.editor.extensionManager.attributes, r = ht(this.node, n);
        t = this.options.attrs({ node: this.node, HTMLAttributes: r });
      } else
        t = this.options.attrs;
      this.renderer.updateAttributes(t);
    }
  }
}
function li(e, t) {
  return (n) => n.editor.contentComponent ? new vo(e, n, t) : {};
}
const bo = /(?:^|\s)(\*\*(?!\s+\*\*)((?:[^*]+))\*\*(?!\s+\*\*))$/, Mo = /(?:^|\s)(\*\*(?!\s+\*\*)((?:[^*]+))\*\*(?!\s+\*\*))/g, So = /(?:^|\s)(__(?!\s+__)((?:[^_]+))__(?!\s+__))$/, ko = /(?:^|\s)(__(?!\s+__)((?:[^_]+))__(?!\s+__))/g, ci = N.create({
  name: "bold",
  addOptions() {
    return {
      HTMLAttributes: {}
    };
  },
  parseHTML() {
    return [
      {
        tag: "strong"
      },
      {
        tag: "b",
        getAttrs: (e) => e.style.fontWeight !== "normal" && null
      },
      {
        style: "font-weight=400",
        clearMark: (e) => e.type.name === this.name
      },
      {
        style: "font-weight",
        getAttrs: (e) => /^(bold(er)?|[5-9]\d{2,})$/.test(e) && null
      }
    ];
  },
  renderHTML({ HTMLAttributes: e }) {
    return ["strong", C(this.options.HTMLAttributes, e), 0];
  },
  addCommands() {
    return {
      setBold: () => ({ commands: e }) => e.setMark(this.name),
      toggleBold: () => ({ commands: e }) => e.toggleMark(this.name),
      unsetBold: () => ({ commands: e }) => e.unsetMark(this.name)
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-b": () => this.editor.commands.toggleBold(),
      "Mod-B": () => this.editor.commands.toggleBold()
    };
  },
  addInputRules() {
    return [
      G({
        find: bo,
        type: this.type
      }),
      G({
        find: So,
        type: this.type
      })
    ];
  },
  addPasteRules() {
    return [
      W({
        find: Mo,
        type: this.type
      }),
      W({
        find: ko,
        type: this.type
      })
    ];
  }
}), wo = /(?:^|\s)(\*(?!\s+\*)((?:[^*]+))\*(?!\s+\*))$/, Eo = /(?:^|\s)(\*(?!\s+\*)((?:[^*]+))\*(?!\s+\*))/g, To = /(?:^|\s)(_(?!\s+_)((?:[^_]+))_(?!\s+_))$/, Co = /(?:^|\s)(_(?!\s+_)((?:[^_]+))_(?!\s+_))/g, di = N.create({
  name: "italic",
  addOptions() {
    return {
      HTMLAttributes: {}
    };
  },
  parseHTML() {
    return [
      {
        tag: "em"
      },
      {
        tag: "i",
        getAttrs: (e) => e.style.fontStyle !== "normal" && null
      },
      {
        style: "font-style=normal",
        clearMark: (e) => e.type.name === this.name
      },
      {
        style: "font-style=italic"
      }
    ];
  },
  renderHTML({ HTMLAttributes: e }) {
    return ["em", C(this.options.HTMLAttributes, e), 0];
  },
  addCommands() {
    return {
      setItalic: () => ({ commands: e }) => e.setMark(this.name),
      toggleItalic: () => ({ commands: e }) => e.toggleMark(this.name),
      unsetItalic: () => ({ commands: e }) => e.unsetMark(this.name)
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-i": () => this.editor.commands.toggleItalic(),
      "Mod-I": () => this.editor.commands.toggleItalic()
    };
  },
  addInputRules() {
    return [
      G({
        find: wo,
        type: this.type
      }),
      G({
        find: To,
        type: this.type
      })
    ];
  },
  addPasteRules() {
    return [
      W({
        find: Eo,
        type: this.type
      }),
      W({
        find: Co,
        type: this.type
      })
    ];
  }
}), ui = N.create({
  name: "underline",
  addOptions() {
    return {
      HTMLAttributes: {}
    };
  },
  parseHTML() {
    return [
      {
        tag: "u"
      },
      {
        style: "text-decoration",
        consuming: !1,
        getAttrs: (e) => e.includes("underline") ? {} : !1
      }
    ];
  },
  renderHTML({ HTMLAttributes: e }) {
    return ["u", C(this.options.HTMLAttributes, e), 0];
  },
  addCommands() {
    return {
      setUnderline: () => ({ commands: e }) => e.setMark(this.name),
      toggleUnderline: () => ({ commands: e }) => e.toggleMark(this.name),
      unsetUnderline: () => ({ commands: e }) => e.unsetMark(this.name)
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-u": () => this.editor.commands.toggleUnderline(),
      "Mod-U": () => this.editor.commands.toggleUnderline()
    };
  }
}), xo = /(?:^|\s)(~~(?!\s+~~)((?:[^~]+))~~(?!\s+~~))$/, Ao = /(?:^|\s)(~~(?!\s+~~)((?:[^~]+))~~(?!\s+~~))/g, pi = N.create({
  name: "strike",
  addOptions() {
    return {
      HTMLAttributes: {}
    };
  },
  parseHTML() {
    return [
      {
        tag: "s"
      },
      {
        tag: "del"
      },
      {
        tag: "strike"
      },
      {
        style: "text-decoration",
        consuming: !1,
        getAttrs: (e) => e.includes("line-through") ? {} : !1
      }
    ];
  },
  renderHTML({ HTMLAttributes: e }) {
    return ["s", C(this.options.HTMLAttributes, e), 0];
  },
  addCommands() {
    return {
      setStrike: () => ({ commands: e }) => e.setMark(this.name),
      toggleStrike: () => ({ commands: e }) => e.toggleMark(this.name),
      unsetStrike: () => ({ commands: e }) => e.unsetMark(this.name)
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-Shift-s": () => this.editor.commands.toggleStrike()
    };
  },
  addInputRules() {
    return [
      G({
        find: xo,
        type: this.type
      })
    ];
  },
  addPasteRules() {
    return [
      W({
        find: Ao,
        type: this.type
      })
    ];
  }
}), Oo = /(^|[^`])`([^`]+)`(?!`)/, Lo = /(^|[^`])`([^`]+)`(?!`)/g, hi = N.create({
  name: "code",
  addOptions() {
    return {
      HTMLAttributes: {}
    };
  },
  excludes: "_",
  code: !0,
  exitable: !0,
  parseHTML() {
    return [
      { tag: "code" }
    ];
  },
  renderHTML({ HTMLAttributes: e }) {
    return ["code", C(this.options.HTMLAttributes, e), 0];
  },
  addCommands() {
    return {
      setCode: () => ({ commands: e }) => e.setMark(this.name),
      toggleCode: () => ({ commands: e }) => e.toggleMark(this.name),
      unsetCode: () => ({ commands: e }) => e.unsetMark(this.name)
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-e": () => this.editor.commands.toggleCode()
    };
  },
  addInputRules() {
    return [
      G({
        find: Oo,
        type: this.type
      })
    ];
  },
  addPasteRules() {
    return [
      W({
        find: Lo,
        type: this.type
      })
    ];
  }
}), _o = (e) => {
  if (!e.children.length)
    return;
  const t = e.querySelectorAll("span");
  t && t.forEach((n) => {
    var r, s;
    const o = n.getAttribute("style"), i = (s = (r = n.parentElement) === null || r === void 0 ? void 0 : r.closest("span")) === null || s === void 0 ? void 0 : s.getAttribute("style");
    n.setAttribute("style", `${i};${o}`);
  });
}, fi = N.create({
  name: "textStyle",
  priority: 101,
  addOptions() {
    return {
      HTMLAttributes: {},
      mergeNestedSpanStyles: !1
    };
  },
  parseHTML() {
    return [
      {
        tag: "span",
        getAttrs: (e) => e.hasAttribute("style") ? (this.options.mergeNestedSpanStyles && _o(e), {}) : !1
      }
    ];
  },
  renderHTML({ HTMLAttributes: e }) {
    return ["span", C(this.options.HTMLAttributes, e), 0];
  },
  addCommands() {
    return {
      removeEmptyTextStyle: () => ({ tr: e }) => {
        const { selection: t } = e;
        return e.doc.nodesBetween(t.from, t.to, (n, r) => {
          if (n.isTextblock)
            return !0;
          n.marks.filter((s) => s.type === this.type).some((s) => Object.values(s.attrs).some((o) => !!o)) || e.removeMark(r, r + n.nodeSize, this.type);
        }), !0;
      }
    };
  }
}), mi = _.create({
  name: "fontFamily",
  addOptions() {
    return {
      types: ["textStyle"]
    };
  },
  addGlobalAttributes() {
    return [
      {
        types: this.options.types,
        attributes: {
          fontFamily: {
            default: null,
            parseHTML: (e) => e.style.fontFamily,
            renderHTML: (e) => e.fontFamily ? {
              style: `font-family: ${e.fontFamily}`
            } : {}
          }
        }
      }
    ];
  },
  addCommands() {
    return {
      setFontFamily: (e) => ({ chain: t }) => t().setMark("textStyle", { fontFamily: e }).run(),
      unsetFontFamily: () => ({ chain: e }) => e().setMark("textStyle", { fontFamily: null }).removeEmptyTextStyle().run()
    };
  }
}), gi = P.create({
  name: "heading",
  addOptions() {
    return {
      levels: [1, 2, 3, 4, 5, 6],
      HTMLAttributes: {}
    };
  },
  content: "inline*",
  group: "block",
  defining: !0,
  addAttributes() {
    return {
      level: {
        default: 1,
        rendered: !1
      }
    };
  },
  parseHTML() {
    return this.options.levels.map((e) => ({
      tag: `h${e}`,
      attrs: { level: e }
    }));
  },
  renderHTML({ node: e, HTMLAttributes: t }) {
    return [`h${this.options.levels.includes(e.attrs.level) ? e.attrs.level : this.options.levels[0]}`, C(this.options.HTMLAttributes, t), 0];
  },
  addCommands() {
    return {
      setHeading: (e) => ({ commands: t }) => this.options.levels.includes(e.level) ? t.setNode(this.name, e) : !1,
      toggleHeading: (e) => ({ commands: t }) => this.options.levels.includes(e.level) ? t.toggleNode(this.name, "paragraph", e) : !1
    };
  },
  addKeyboardShortcuts() {
    return this.options.levels.reduce((e, t) => ({
      ...e,
      [`Mod-Alt-${t}`]: () => this.editor.commands.toggleHeading({ level: t })
    }), {});
  },
  addInputRules() {
    return this.options.levels.map((e) => Ks({
      find: new RegExp(`^(#{${Math.min(...this.options.levels)},${e}})\\s$`),
      type: this.type,
      getAttributes: {
        level: e
      }
    }));
  }
}), yi = _.create({
  name: "textAlign",
  addOptions() {
    return {
      types: [],
      alignments: ["left", "center", "right", "justify"],
      defaultAlignment: null
    };
  },
  addGlobalAttributes() {
    return [
      {
        types: this.options.types,
        attributes: {
          textAlign: {
            default: this.options.defaultAlignment,
            parseHTML: (e) => {
              const t = e.style.textAlign;
              return this.options.alignments.includes(t) ? t : this.options.defaultAlignment;
            },
            renderHTML: (e) => e.textAlign ? { style: `text-align: ${e.textAlign}` } : {}
          }
        }
      }
    ];
  },
  addCommands() {
    return {
      setTextAlign: (e) => ({ commands: t }) => this.options.alignments.includes(e) ? this.options.types.map((n) => t.updateAttributes(n, { textAlign: e })).every((n) => n) : !1,
      unsetTextAlign: () => ({ commands: e }) => this.options.types.map((t) => e.resetAttributes(t, "textAlign")).every((t) => t)
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-Shift-l": () => this.editor.commands.setTextAlign("left"),
      "Mod-Shift-e": () => this.editor.commands.setTextAlign("center"),
      "Mod-Shift-r": () => this.editor.commands.setTextAlign("right"),
      "Mod-Shift-j": () => this.editor.commands.setTextAlign("justify")
    };
  }
}), vi = _.create({
  name: "color",
  addOptions() {
    return {
      types: ["textStyle"]
    };
  },
  addGlobalAttributes() {
    return [
      {
        types: this.options.types,
        attributes: {
          color: {
            default: null,
            parseHTML: (e) => {
              var t;
              return (t = e.style.color) === null || t === void 0 ? void 0 : t.replace(/['"]+/g, "");
            },
            renderHTML: (e) => e.color ? {
              style: `color: ${e.color}`
            } : {}
          }
        }
      }
    ];
  },
  addCommands() {
    return {
      setColor: (e) => ({ chain: t }) => t().setMark("textStyle", { color: e }).run(),
      unsetColor: () => ({ chain: e }) => e().setMark("textStyle", { color: null }).removeEmptyTextStyle().run()
    };
  }
}), Po = /(?:^|\s)(==(?!\s+==)((?:[^=]+))==(?!\s+==))$/, Ro = /(?:^|\s)(==(?!\s+==)((?:[^=]+))==(?!\s+==))/g, bi = N.create({
  name: "highlight",
  addOptions() {
    return {
      multicolor: !1,
      HTMLAttributes: {}
    };
  },
  addAttributes() {
    return this.options.multicolor ? {
      color: {
        default: null,
        parseHTML: (e) => e.getAttribute("data-color") || e.style.backgroundColor,
        renderHTML: (e) => e.color ? {
          "data-color": e.color,
          style: `background-color: ${e.color}; color: inherit`
        } : {}
      }
    } : {};
  },
  parseHTML() {
    return [
      {
        tag: "mark"
      }
    ];
  },
  renderHTML({ HTMLAttributes: e }) {
    return ["mark", C(this.options.HTMLAttributes, e), 0];
  },
  addCommands() {
    return {
      setHighlight: (e) => ({ commands: t }) => t.setMark(this.name, e),
      toggleHighlight: (e) => ({ commands: t }) => t.toggleMark(this.name, e),
      unsetHighlight: () => ({ commands: e }) => e.unsetMark(this.name)
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-Shift-h": () => this.editor.commands.toggleHighlight()
    };
  },
  addInputRules() {
    return [
      G({
        find: Po,
        type: this.type
      })
    ];
  },
  addPasteRules() {
    return [
      W({
        find: Ro,
        type: this.type
      })
    ];
  }
}), Ho = "listItem", ye = "textStyle", ve = /^\s*([-+*])\s$/, Mi = P.create({
  name: "bulletList",
  addOptions() {
    return {
      itemTypeName: "listItem",
      HTMLAttributes: {},
      keepMarks: !1,
      keepAttributes: !1
    };
  },
  group: "block list",
  content() {
    return `${this.options.itemTypeName}+`;
  },
  parseHTML() {
    return [
      { tag: "ul" }
    ];
  },
  renderHTML({ HTMLAttributes: e }) {
    return ["ul", C(this.options.HTMLAttributes, e), 0];
  },
  addCommands() {
    return {
      toggleBulletList: () => ({ commands: e, chain: t }) => this.options.keepAttributes ? t().toggleList(this.name, this.options.itemTypeName, this.options.keepMarks).updateAttributes(Ho, this.editor.getAttributes(ye)).run() : e.toggleList(this.name, this.options.itemTypeName, this.options.keepMarks)
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-Shift-8": () => this.editor.commands.toggleBulletList()
    };
  },
  addInputRules() {
    let e = et({
      find: ve,
      type: this.type
    });
    return (this.options.keepMarks || this.options.keepAttributes) && (e = et({
      find: ve,
      type: this.type,
      keepMarks: this.options.keepMarks,
      keepAttributes: this.options.keepAttributes,
      getAttributes: () => this.editor.getAttributes(ye),
      editor: this.editor
    })), [
      e
    ];
  }
}), Io = "listItem", be = "textStyle", Me = /^(\d+)\.\s$/, Si = P.create({
  name: "orderedList",
  addOptions() {
    return {
      itemTypeName: "listItem",
      HTMLAttributes: {},
      keepMarks: !1,
      keepAttributes: !1
    };
  },
  group: "block list",
  content() {
    return `${this.options.itemTypeName}+`;
  },
  addAttributes() {
    return {
      start: {
        default: 1,
        parseHTML: (e) => e.hasAttribute("start") ? parseInt(e.getAttribute("start") || "", 10) : 1
      },
      type: {
        default: null,
        parseHTML: (e) => e.getAttribute("type")
      }
    };
  },
  parseHTML() {
    return [
      {
        tag: "ol"
      }
    ];
  },
  renderHTML({ HTMLAttributes: e }) {
    const { start: t, ...n } = e;
    return t === 1 ? ["ol", C(this.options.HTMLAttributes, n), 0] : ["ol", C(this.options.HTMLAttributes, e), 0];
  },
  addCommands() {
    return {
      toggleOrderedList: () => ({ commands: e, chain: t }) => this.options.keepAttributes ? t().toggleList(this.name, this.options.itemTypeName, this.options.keepMarks).updateAttributes(Io, this.editor.getAttributes(be)).run() : e.toggleList(this.name, this.options.itemTypeName, this.options.keepMarks)
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-Shift-7": () => this.editor.commands.toggleOrderedList()
    };
  },
  addInputRules() {
    let e = et({
      find: Me,
      type: this.type,
      getAttributes: (t) => ({ start: +t[1] }),
      joinPredicate: (t, n) => n.childCount + n.attrs.start === +t[1]
    });
    return (this.options.keepMarks || this.options.keepAttributes) && (e = et({
      find: Me,
      type: this.type,
      keepMarks: this.options.keepMarks,
      keepAttributes: this.options.keepAttributes,
      getAttributes: (t) => ({ start: +t[1], ...this.editor.getAttributes(be) }),
      joinPredicate: (t, n) => n.childCount + n.attrs.start === +t[1],
      editor: this.editor
    })), [
      e
    ];
  }
}), $o = /^\s*(\[([( |x])?\])\s$/, ki = P.create({
  name: "taskItem",
  addOptions() {
    return {
      nested: !1,
      HTMLAttributes: {},
      taskListTypeName: "taskList"
    };
  },
  content() {
    return this.options.nested ? "paragraph block*" : "paragraph+";
  },
  defining: !0,
  addAttributes() {
    return {
      checked: {
        default: !1,
        keepOnSplit: !1,
        parseHTML: (e) => {
          const t = e.getAttribute("data-checked");
          return t === "" || t === "true";
        },
        renderHTML: (e) => ({
          "data-checked": e.checked
        })
      }
    };
  },
  parseHTML() {
    return [
      {
        tag: `li[data-type="${this.name}"]`,
        priority: 51
      }
    ];
  },
  renderHTML({ node: e, HTMLAttributes: t }) {
    return [
      "li",
      C(this.options.HTMLAttributes, t, {
        "data-type": this.name
      }),
      [
        "label",
        [
          "input",
          {
            type: "checkbox",
            checked: e.attrs.checked ? "checked" : null
          }
        ],
        ["span"]
      ],
      ["div", 0]
    ];
  },
  addKeyboardShortcuts() {
    const e = {
      Enter: () => this.editor.commands.splitListItem(this.name),
      "Shift-Tab": () => this.editor.commands.liftListItem(this.name)
    };
    return this.options.nested ? {
      ...e,
      Tab: () => this.editor.commands.sinkListItem(this.name)
    } : e;
  },
  addNodeView() {
    return ({ node: e, HTMLAttributes: t, getPos: n, editor: r }) => {
      const s = document.createElement("li"), o = document.createElement("label"), i = document.createElement("span"), a = document.createElement("input"), c = document.createElement("div");
      return o.contentEditable = "false", a.type = "checkbox", a.addEventListener("mousedown", (l) => l.preventDefault()), a.addEventListener("change", (l) => {
        if (!r.isEditable && !this.options.onReadOnlyChecked) {
          a.checked = !a.checked;
          return;
        }
        const { checked: u } = l.target;
        r.isEditable && typeof n == "function" && r.chain().focus(void 0, { scrollIntoView: !1 }).command(({ tr: d }) => {
          const p = n();
          if (typeof p != "number")
            return !1;
          const h = d.doc.nodeAt(p);
          return d.setNodeMarkup(p, void 0, {
            ...h == null ? void 0 : h.attrs,
            checked: u
          }), !0;
        }).run(), !r.isEditable && this.options.onReadOnlyChecked && (this.options.onReadOnlyChecked(e, u) || (a.checked = !a.checked));
      }), Object.entries(this.options.HTMLAttributes).forEach(([l, u]) => {
        s.setAttribute(l, u);
      }), s.dataset.checked = e.attrs.checked, a.checked = e.attrs.checked, o.append(a, i), s.append(o, c), Object.entries(t).forEach(([l, u]) => {
        s.setAttribute(l, u);
      }), {
        dom: s,
        contentDOM: c,
        update: (l) => l.type !== this.type ? !1 : (s.dataset.checked = l.attrs.checked, a.checked = l.attrs.checked, !0)
      };
    };
  },
  addInputRules() {
    return [
      et({
        find: $o,
        type: this.type,
        getAttributes: (e) => ({
          checked: e[e.length - 1] === "x"
        })
      })
    ];
  }
}), wi = P.create({
  name: "taskList",
  addOptions() {
    return {
      itemTypeName: "taskItem",
      HTMLAttributes: {}
    };
  },
  group: "block list",
  content() {
    return `${this.options.itemTypeName}+`;
  },
  parseHTML() {
    return [
      {
        tag: `ul[data-type="${this.name}"]`,
        priority: 51
      }
    ];
  },
  renderHTML({ HTMLAttributes: e }) {
    return ["ul", C(this.options.HTMLAttributes, e, { "data-type": this.name }), 0];
  },
  addCommands() {
    return {
      toggleTaskList: () => ({ commands: e }) => e.toggleList(this.name, this.options.itemTypeName)
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-Shift-9": () => this.editor.commands.toggleTaskList()
    };
  }
}), Do = /^\s*>\s$/, Ei = P.create({
  name: "blockquote",
  addOptions() {
    return {
      HTMLAttributes: {}
    };
  },
  content: "block+",
  group: "block",
  defining: !0,
  parseHTML() {
    return [
      { tag: "blockquote" }
    ];
  },
  renderHTML({ HTMLAttributes: e }) {
    return ["blockquote", C(this.options.HTMLAttributes, e), 0];
  },
  addCommands() {
    return {
      setBlockquote: () => ({ commands: e }) => e.wrapIn(this.name),
      toggleBlockquote: () => ({ commands: e }) => e.toggleWrap(this.name),
      unsetBlockquote: () => ({ commands: e }) => e.lift(this.name)
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-Shift-b": () => this.editor.commands.toggleBlockquote()
    };
  },
  addInputRules() {
    return [
      et({
        find: Do,
        type: this.type
      })
    ];
  }
});
function No(e) {
  return e.length === 1 ? e[0].isLink : e.length === 3 && e[1].isLink ? ["()", "[]"].includes(e[0].value + e[2].value) : !1;
}
function Bo(e) {
  return new H({
    key: new $("autolink"),
    appendTransaction: (t, n, r) => {
      const s = t.some((l) => l.docChanged) && !n.doc.eq(r.doc), o = t.some((l) => l.getMeta("preventAutolink"));
      if (!s || o)
        return;
      const { tr: i } = r, a = ss(n.doc, [...t]);
      if (us(a).forEach(({ newRange: l }) => {
        const u = is(r.doc, l, (h) => h.isTextblock);
        let d, p;
        if (u.length > 1 ? (d = u[0], p = r.doc.textBetween(d.pos, d.pos + d.node.nodeSize, void 0, " ")) : u.length && r.doc.textBetween(l.from, l.to, " ", " ").endsWith(" ") && (d = u[0], p = r.doc.textBetween(d.pos, l.to, void 0, " ")), d && p) {
          const h = p.split(" ").filter((y) => y !== "");
          if (h.length <= 0)
            return !1;
          const m = h[h.length - 1], f = d.pos + p.lastIndexOf(m);
          if (!m)
            return !1;
          const g = Ln(m).map((y) => y.toObject(e.defaultProtocol));
          if (!No(g))
            return !1;
          g.filter((y) => y.isLink).map((y) => ({
            ...y,
            from: f + y.start + 1,
            to: f + y.end + 1
          })).filter((y) => r.schema.marks.code ? !r.doc.rangeHasMark(y.from, y.to, r.schema.marks.code) : !0).filter((y) => e.validate(y.value)).filter((y) => e.shouldAutoLink(y.value)).forEach((y) => {
            Yt(y.from, y.to, r.doc).some((M) => M.mark.type === e.type) || i.addMark(y.from, y.to, e.type.create({
              href: y.href
            }));
          });
        }
      }), !!i.steps.length)
        return i;
    }
  });
}
function jo(e) {
  return new H({
    key: new $("handleClickLink"),
    props: {
      handleClick: (t, n, r) => {
        var s, o;
        if (r.button !== 0 || !t.editable)
          return !1;
        let i = r.target;
        const a = [];
        for (; i.nodeName !== "DIV"; )
          a.push(i), i = i.parentNode;
        if (!a.find((p) => p.nodeName === "A"))
          return !1;
        const c = ze(t.state, e.type.name), l = r.target, u = (s = l == null ? void 0 : l.href) !== null && s !== void 0 ? s : c.href, d = (o = l == null ? void 0 : l.target) !== null && o !== void 0 ? o : c.target;
        return l && u ? (window.open(u, d), !0) : !1;
      }
    }
  });
}
function Fo(e) {
  return new H({
    key: new $("handlePasteLink"),
    props: {
      handlePaste: (t, n, r) => {
        const { state: s } = t, { selection: o } = s, { empty: i } = o;
        if (i)
          return !1;
        let a = "";
        r.content.forEach((l) => {
          a += l.textContent;
        });
        const c = Te(a, { defaultProtocol: e.defaultProtocol }).find((l) => l.isLink && l.value === a);
        return !a || !c ? !1 : e.editor.commands.setMark(e.type, {
          href: c.href
        });
      }
    }
  });
}
const zo = /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g;
function U(e, t) {
  const n = [
    "http",
    "https",
    "ftp",
    "ftps",
    "mailto",
    "tel",
    "callto",
    "sms",
    "cid",
    "xmpp"
  ];
  return t && t.forEach((r) => {
    const s = typeof r == "string" ? r : r.scheme;
    s && n.push(s);
  }), !e || e.replace(zo, "").match(new RegExp(
    // eslint-disable-next-line no-useless-escape
    `^(?:(?:${n.join("|")}):|[^a-z]|[a-z0-9+.-]+(?:[^a-z+.-:]|$))`,
    "i"
  ));
}
const Ti = N.create({
  name: "link",
  priority: 1e3,
  keepOnSplit: !1,
  exitable: !0,
  onCreate() {
    this.options.validate && !this.options.shouldAutoLink && (this.options.shouldAutoLink = this.options.validate, console.warn("The `validate` option is deprecated. Rename to the `shouldAutoLink` option instead.")), this.options.protocols.forEach((e) => {
      if (typeof e == "string") {
        te(e);
        return;
      }
      te(e.scheme, e.optionalSlashes);
    });
  },
  onDestroy() {
    _n();
  },
  inclusive() {
    return this.options.autolink;
  },
  addOptions() {
    return {
      openOnClick: !0,
      linkOnPaste: !0,
      autolink: !0,
      protocols: [],
      defaultProtocol: "http",
      HTMLAttributes: {
        target: "_blank",
        rel: "noopener noreferrer nofollow",
        class: null
      },
      isAllowedUri: (e, t) => !!U(e, t.protocols),
      validate: (e) => !!e,
      shouldAutoLink: (e) => !!e
    };
  },
  addAttributes() {
    return {
      href: {
        default: null,
        parseHTML(e) {
          return e.getAttribute("href");
        }
      },
      target: {
        default: this.options.HTMLAttributes.target
      },
      rel: {
        default: this.options.HTMLAttributes.rel
      },
      class: {
        default: this.options.HTMLAttributes.class
      }
    };
  },
  parseHTML() {
    return [
      {
        tag: "a[href]",
        getAttrs: (e) => {
          const t = e.getAttribute("href");
          return !t || !this.options.isAllowedUri(t, {
            defaultValidate: (n) => !!U(n, this.options.protocols),
            protocols: this.options.protocols,
            defaultProtocol: this.options.defaultProtocol
          }) ? !1 : null;
        }
      }
    ];
  },
  renderHTML({ HTMLAttributes: e }) {
    return this.options.isAllowedUri(e.href, {
      defaultValidate: (t) => !!U(t, this.options.protocols),
      protocols: this.options.protocols,
      defaultProtocol: this.options.defaultProtocol
    }) ? ["a", C(this.options.HTMLAttributes, e), 0] : [
      "a",
      C(this.options.HTMLAttributes, { ...e, href: "" }),
      0
    ];
  },
  addCommands() {
    return {
      setLink: (e) => ({ chain: t }) => {
        const { href: n } = e;
        return this.options.isAllowedUri(n, {
          defaultValidate: (r) => !!U(r, this.options.protocols),
          protocols: this.options.protocols,
          defaultProtocol: this.options.defaultProtocol
        }) ? t().setMark(this.name, e).setMeta("preventAutolink", !0).run() : !1;
      },
      toggleLink: (e) => ({ chain: t }) => {
        const { href: n } = e;
        return this.options.isAllowedUri(n, {
          defaultValidate: (r) => !!U(r, this.options.protocols),
          protocols: this.options.protocols,
          defaultProtocol: this.options.defaultProtocol
        }) ? t().toggleMark(this.name, e, { extendEmptyMarkRange: !0 }).setMeta("preventAutolink", !0).run() : !1;
      },
      unsetLink: () => ({ chain: e }) => e().unsetMark(this.name, { extendEmptyMarkRange: !0 }).setMeta("preventAutolink", !0).run()
    };
  },
  addPasteRules() {
    return [
      W({
        find: (e) => {
          const t = [];
          if (e) {
            const { protocols: n, defaultProtocol: r } = this.options, s = Te(e).filter((o) => o.isLink && this.options.isAllowedUri(o.value, {
              defaultValidate: (i) => !!U(i, n),
              protocols: n,
              defaultProtocol: r
            }));
            s.length && s.forEach((o) => t.push({
              text: o.value,
              data: {
                href: o.href
              },
              index: o.start
            }));
          }
          return t;
        },
        type: this.type,
        getAttributes: (e) => {
          var t;
          return {
            href: (t = e.data) === null || t === void 0 ? void 0 : t.href
          };
        }
      })
    ];
  },
  addProseMirrorPlugins() {
    const e = [], { protocols: t, defaultProtocol: n } = this.options;
    return this.options.autolink && e.push(Bo({
      type: this.type,
      defaultProtocol: this.options.defaultProtocol,
      validate: (r) => this.options.isAllowedUri(r, {
        defaultValidate: (s) => !!U(s, t),
        protocols: t,
        defaultProtocol: n
      }),
      shouldAutoLink: this.options.shouldAutoLink
    })), this.options.openOnClick === !0 && e.push(jo({
      type: this.type
    })), this.options.linkOnPaste && e.push(Fo({
      editor: this.editor,
      defaultProtocol: this.options.defaultProtocol,
      type: this.type
    })), e;
  }
}), Ci = P.create({
  name: "horizontalRule",
  addOptions() {
    return {
      HTMLAttributes: {}
    };
  },
  group: "block",
  parseHTML() {
    return [{ tag: "hr" }];
  },
  renderHTML({ HTMLAttributes: e }) {
    return ["hr", C(this.options.HTMLAttributes, e)];
  },
  addCommands() {
    return {
      setHorizontalRule: () => ({ chain: e, state: t }) => {
        const { selection: n } = t, { $from: r, $to: s } = n, o = e();
        return r.parentOffset === 0 ? o.insertContentAt({
          from: Math.max(r.pos - 1, 0),
          to: s.pos
        }, {
          type: this.name
        }) : Ve(n) ? o.insertContentAt(s.pos, {
          type: this.name
        }) : o.insertContent({ type: this.name }), o.command(({ tr: i, dispatch: a }) => {
          var c;
          if (a) {
            const { $to: l } = i.selection, u = l.end();
            if (l.nodeAfter)
              l.nodeAfter.isTextblock ? i.setSelection(D.create(i.doc, l.pos + 1)) : l.nodeAfter.isBlock ? i.setSelection(tt.create(i.doc, l.pos)) : i.setSelection(D.create(i.doc, l.pos));
            else {
              const d = (c = l.parent.type.contentMatch.defaultType) === null || c === void 0 ? void 0 : c.create();
              d && (i.insert(u, d), i.setSelection(D.create(i.doc, u + 1)));
            }
            i.scrollIntoView();
          }
          return !0;
        }).run();
      }
    };
  },
  addInputRules() {
    return [
      We({
        find: /^(?:---|—-|___\s|\*\*\*\s)$/,
        type: this.type
      })
    ];
  }
}), xi = _.create({
  name: "history",
  addOptions() {
    return {
      depth: 100,
      newGroupDelay: 500
    };
  },
  addCommands() {
    return {
      undo: () => ({ state: e, dispatch: t }) => Hn(e, t),
      redo: () => ({ state: e, dispatch: t }) => Rn(e, t)
    };
  },
  addProseMirrorPlugins() {
    return [
      Pn(this.options)
    ];
  },
  addKeyboardShortcuts() {
    return {
      "Mod-z": () => this.editor.commands.undo(),
      "Shift-Mod-z": () => this.editor.commands.redo(),
      "Mod-y": () => this.editor.commands.redo(),
      // Russian keyboard layouts
      "Mod-я": () => this.editor.commands.undo(),
      "Shift-Mod-я": () => this.editor.commands.redo()
    };
  }
}), Ai = _.create({
  name: "characterCount",
  addOptions() {
    return {
      limit: null,
      mode: "textSize",
      textCounter: (e) => e.length,
      wordCounter: (e) => e.split(" ").filter((t) => t !== "").length
    };
  },
  addStorage() {
    return {
      characters: () => 0,
      words: () => 0
    };
  },
  onBeforeCreate() {
    this.storage.characters = (e) => {
      const t = (e == null ? void 0 : e.node) || this.editor.state.doc;
      if (((e == null ? void 0 : e.mode) || this.options.mode) === "textSize") {
        const r = t.textBetween(0, t.content.size, void 0, " ");
        return this.options.textCounter(r);
      }
      return t.nodeSize;
    }, this.storage.words = (e) => {
      const t = (e == null ? void 0 : e.node) || this.editor.state.doc, n = t.textBetween(0, t.content.size, " ", " ");
      return this.options.wordCounter(n);
    };
  },
  addProseMirrorPlugins() {
    let e = !1;
    return [
      new H({
        key: new $("characterCount"),
        appendTransaction: (t, n, r) => {
          if (e)
            return;
          const s = this.options.limit;
          if (s == null || s === 0) {
            e = !0;
            return;
          }
          const o = this.storage.characters({ node: r.doc });
          if (o > s) {
            const i = o - s, a = 0, c = i;
            console.warn(`[CharacterCount] Initial content exceeded limit of ${s} characters. Content was automatically trimmed.`);
            const l = r.tr.deleteRange(a, c);
            return e = !0, l;
          }
          e = !0;
        },
        filterTransaction: (t, n) => {
          const r = this.options.limit;
          if (!t.docChanged || r === 0 || r === null || r === void 0)
            return !0;
          const s = this.storage.characters({ node: n.doc }), o = this.storage.characters({ node: t.doc });
          if (o <= r || s > r && o > r && o <= s)
            return !0;
          if (s > r && o > r && o > s || !t.getMeta("paste"))
            return !1;
          const a = t.selection.$head.pos, c = o - r, l = a - c, u = a;
          return t.deleteRange(l, u), !(this.storage.characters({ node: t.doc }) > r);
        }
      })
    ];
  }
}), Oi = _.create({
  name: "dropCursor",
  addOptions() {
    return {
      color: "currentColor",
      width: 1,
      class: void 0
    };
  },
  addProseMirrorPlugins() {
    return [
      In(this.options)
    ];
  }
}), Li = _.create({
  name: "focus",
  addOptions() {
    return {
      className: "has-focus",
      mode: "all"
    };
  },
  addProseMirrorPlugins() {
    return [
      new H({
        key: new $("focus"),
        props: {
          decorations: ({ doc: e, selection: t }) => {
            const { isEditable: n, isFocused: r } = this.editor, { anchor: s } = t, o = [];
            if (!n || !r)
              return pt.create(e, []);
            let i = 0;
            this.options.mode === "deepest" && e.descendants((c, l) => {
              if (c.isText)
                return;
              if (!(s >= l && s <= l + c.nodeSize - 1))
                return !1;
              i += 1;
            });
            let a = 0;
            return e.descendants((c, l) => {
              if (c.isText || !(s >= l && s <= l + c.nodeSize - 1))
                return !1;
              if (a += 1, this.options.mode === "deepest" && i - a > 0 || this.options.mode === "shallowest" && a > 1)
                return this.options.mode === "deepest";
              o.push(zt.node(l, l + c.nodeSize, {
                class: this.options.className
              }));
            }), pt.create(e, o);
          }
        }
      })
    ];
  }
}), _i = _.create({
  name: "gapCursor",
  addProseMirrorPlugins() {
    return [
      $n()
    ];
  },
  extendNodeSchema(e) {
    var t;
    const n = {
      name: e.name,
      options: e.options,
      storage: e.storage
    };
    return {
      allowGapCursor: (t = E(S(e, "allowGapCursor", n))) !== null && t !== void 0 ? t : null
    };
  }
}), Pi = P.create({
  name: "hardBreak",
  addOptions() {
    return {
      keepMarks: !0,
      HTMLAttributes: {}
    };
  },
  inline: !0,
  group: "inline",
  selectable: !1,
  linebreakReplacement: !0,
  parseHTML() {
    return [
      { tag: "br" }
    ];
  },
  renderHTML({ HTMLAttributes: e }) {
    return ["br", C(this.options.HTMLAttributes, e)];
  },
  renderText() {
    return `
`;
  },
  addCommands() {
    return {
      setHardBreak: () => ({ commands: e, chain: t, state: n, editor: r }) => e.first([
        () => e.exitCode(),
        () => e.command(() => {
          const { selection: s, storedMarks: o } = n;
          if (s.$from.parent.type.spec.isolating)
            return !1;
          const { keepMarks: i } = this.options, { splittableMarks: a } = r.extensionManager, c = o || s.$to.parentOffset && s.$from.marks();
          return t().insertContent({ type: this.name }).command(({ tr: l, dispatch: u }) => {
            if (u && c && i) {
              const d = c.filter((p) => a.includes(p.type.name));
              l.ensureMarks(d);
            }
            return !0;
          }).run();
        })
      ])
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-Enter": () => this.editor.commands.setHardBreak(),
      "Shift-Enter": () => this.editor.commands.setHardBreak()
    };
  }
}), Ri = P.create({
  name: "listItem",
  addOptions() {
    return {
      HTMLAttributes: {},
      bulletListTypeName: "bulletList",
      orderedListTypeName: "orderedList"
    };
  },
  content: "paragraph block*",
  defining: !0,
  parseHTML() {
    return [
      {
        tag: "li"
      }
    ];
  },
  renderHTML({ HTMLAttributes: e }) {
    return ["li", C(this.options.HTMLAttributes, e), 0];
  },
  addKeyboardShortcuts() {
    return {
      Enter: () => this.editor.commands.splitListItem(this.name),
      Tab: () => this.editor.commands.sinkListItem(this.name),
      "Shift-Tab": () => this.editor.commands.liftListItem(this.name)
    };
  }
}), Hi = P.create({
  name: "paragraph",
  priority: 1e3,
  addOptions() {
    return {
      HTMLAttributes: {}
    };
  },
  group: "block",
  content: "inline*",
  parseHTML() {
    return [
      { tag: "p" }
    ];
  },
  renderHTML({ HTMLAttributes: e }) {
    return ["p", C(this.options.HTMLAttributes, e), 0];
  },
  addCommands() {
    return {
      setParagraph: () => ({ commands: e }) => e.setNode(this.name)
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-Alt-0": () => this.editor.commands.setParagraph()
    };
  }
}), Ii = _.create({
  name: "placeholder",
  addOptions() {
    return {
      emptyEditorClass: "is-editor-empty",
      emptyNodeClass: "is-empty",
      placeholder: "Write something …",
      showOnlyWhenEditable: !0,
      showOnlyCurrent: !0,
      includeChildren: !1
    };
  },
  addProseMirrorPlugins() {
    return [
      new H({
        key: new $("placeholder"),
        props: {
          decorations: ({ doc: e, selection: t }) => {
            const n = this.editor.isEditable || !this.options.showOnlyWhenEditable, { anchor: r } = t, s = [];
            if (!n)
              return null;
            const o = this.editor.isEmpty;
            return e.descendants((i, a) => {
              const c = r >= a && r <= a + i.nodeSize, l = !i.isLeaf && wt(i);
              if ((c || !this.options.showOnlyCurrent) && l) {
                const u = [this.options.emptyNodeClass];
                o && u.push(this.options.emptyEditorClass);
                const d = zt.node(a, a + i.nodeSize, {
                  class: u.join(" "),
                  "data-placeholder": typeof this.options.placeholder == "function" ? this.options.placeholder({
                    editor: this.editor,
                    node: i,
                    pos: a,
                    hasAnchor: c
                  }) : this.options.placeholder
                });
                s.push(d);
              }
              return this.options.includeChildren;
            }), pt.create(e, s);
          }
        }
      })
    ];
  }
}), $i = P.create({
  name: "text",
  group: "inline"
}), Di = P.create({
  name: "doc",
  topNode: !0,
  content: "block+"
}), Ni = N.create({
  name: "subscript",
  addOptions() {
    return {
      HTMLAttributes: {}
    };
  },
  parseHTML() {
    return [
      {
        tag: "sub"
      },
      {
        style: "vertical-align",
        getAttrs(e) {
          return e !== "sub" ? !1 : null;
        }
      }
    ];
  },
  renderHTML({ HTMLAttributes: e }) {
    return ["sub", C(this.options.HTMLAttributes, e), 0];
  },
  addCommands() {
    return {
      setSubscript: () => ({ commands: e }) => e.setMark(this.name),
      toggleSubscript: () => ({ commands: e }) => e.toggleMark(this.name),
      unsetSubscript: () => ({ commands: e }) => e.unsetMark(this.name)
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-,": () => this.editor.commands.toggleSubscript()
    };
  }
}), Bi = N.create({
  name: "superscript",
  addOptions() {
    return {
      HTMLAttributes: {}
    };
  },
  parseHTML() {
    return [
      {
        tag: "sup"
      },
      {
        style: "vertical-align",
        getAttrs(e) {
          return e !== "super" ? !1 : null;
        }
      }
    ];
  },
  renderHTML({ HTMLAttributes: e }) {
    return ["sup", C(this.options.HTMLAttributes, e), 0];
  },
  addCommands() {
    return {
      setSuperscript: () => ({ commands: e }) => e.setMark(this.name),
      toggleSuperscript: () => ({ commands: e }) => e.toggleMark(this.name),
      unsetSuperscript: () => ({ commands: e }) => e.unsetMark(this.name)
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-.": () => this.editor.commands.toggleSuperscript()
    };
  }
});
function Vo(e) {
  var t;
  const { char: n, allowSpaces: r, allowToIncludeChar: s, allowedPrefixes: o, startOfLine: i, $position: a } = e, c = r && !s, l = qs(n), u = new RegExp(`\\s${l}$`), d = i ? "^" : "", p = s ? "" : l, h = c ? new RegExp(`${d}${l}.*?(?=\\s${p}|$)`, "gm") : new RegExp(`${d}(?:^)?${l}[^\\s${p}]*`, "gm"), m = ((t = a.nodeBefore) === null || t === void 0 ? void 0 : t.isText) && a.nodeBefore.text;
  if (!m)
    return null;
  const f = a.pos - m.length, g = Array.from(m.matchAll(h)).pop();
  if (!g || g.input === void 0 || g.index === void 0)
    return null;
  const y = g.input.slice(Math.max(0, g.index - 1), g.index), M = new RegExp(`^[${o == null ? void 0 : o.join("")}\0]?$`).test(y);
  if (o !== null && !M)
    return null;
  const v = f + g.index;
  let b = v + g[0].length;
  return c && u.test(m.slice(b - 1, b + 1)) && (g[0] += " ", b += 1), v < a.pos && b >= a.pos ? {
    range: {
      from: v,
      to: b
    },
    query: g[0].slice(n.length),
    text: g[0]
  } : null;
}
const Wo = new $("suggestion");
function Ko({ pluginKey: e = Wo, editor: t, char: n = "@", allowSpaces: r = !1, allowToIncludeChar: s = !1, allowedPrefixes: o = [" "], startOfLine: i = !1, decorationTag: a = "span", decorationClass: c = "suggestion", command: l = () => null, items: u = () => [], render: d = () => ({}), allow: p = () => !0, findSuggestionMatch: h = Vo }) {
  let m;
  const f = d == null ? void 0 : d(), g = new H({
    key: e,
    view() {
      return {
        update: async (y, M) => {
          var v, b, w, k, T, x, O;
          const A = (v = this.key) === null || v === void 0 ? void 0 : v.getState(M), I = (b = this.key) === null || b === void 0 ? void 0 : b.getState(y.state), B = A.active && I.active && A.range.from !== I.range.from, J = !A.active && I.active, Y = A.active && !I.active, nt = !J && !Y && A.query !== I.query, j = J || B && nt, z = nt || B, Tt = Y || B && nt;
          if (!j && !z && !Tt)
            return;
          const X = Tt && !j ? A : I, Qt = y.dom.querySelector(`[data-decoration-id="${X.decorationId}"]`);
          m = {
            editor: t,
            range: X.range,
            query: X.query,
            text: X.text,
            items: [],
            command: (rt) => l({
              editor: t,
              range: X.range,
              props: rt
            }),
            decorationNode: Qt,
            // virtual node for popper.js or tippy.js
            // this can be used for building popups without a DOM node
            clientRect: Qt ? () => {
              var rt;
              const { decorationId: Ge } = (rt = this.key) === null || rt === void 0 ? void 0 : rt.getState(t.state), Ct = y.dom.querySelector(`[data-decoration-id="${Ge}"]`);
              return (Ct == null ? void 0 : Ct.getBoundingClientRect()) || null;
            } : null
          }, j && ((w = f == null ? void 0 : f.onBeforeStart) === null || w === void 0 || w.call(f, m)), z && ((k = f == null ? void 0 : f.onBeforeUpdate) === null || k === void 0 || k.call(f, m)), (z || j) && (m.items = await u({
            editor: t,
            query: X.query
          })), Tt && ((T = f == null ? void 0 : f.onExit) === null || T === void 0 || T.call(f, m)), z && ((x = f == null ? void 0 : f.onUpdate) === null || x === void 0 || x.call(f, m)), j && ((O = f == null ? void 0 : f.onStart) === null || O === void 0 || O.call(f, m));
        },
        destroy: () => {
          var y;
          m && ((y = f == null ? void 0 : f.onExit) === null || y === void 0 || y.call(f, m));
        }
      };
    },
    state: {
      // Initialize the plugin's internal state.
      init() {
        return {
          active: !1,
          range: {
            from: 0,
            to: 0
          },
          query: null,
          text: null,
          composing: !1
        };
      },
      // Apply changes to the plugin state from a view transaction.
      apply(y, M, v, b) {
        const { isEditable: w } = t, { composing: k } = t.view, { selection: T } = y, { empty: x, from: O } = T, A = { ...M };
        if (A.composing = k, w && (x || t.view.composing)) {
          (O < M.range.from || O > M.range.to) && !k && !M.composing && (A.active = !1);
          const I = h({
            char: n,
            allowSpaces: r,
            allowToIncludeChar: s,
            allowedPrefixes: o,
            startOfLine: i,
            $position: T.$from
          }), B = `id_${Math.floor(Math.random() * 4294967295)}`;
          I && p({
            editor: t,
            state: b,
            range: I.range,
            isActive: M.active
          }) ? (A.active = !0, A.decorationId = M.decorationId ? M.decorationId : B, A.range = I.range, A.query = I.query, A.text = I.text) : A.active = !1;
        } else
          A.active = !1;
        return A.active || (A.decorationId = null, A.range = { from: 0, to: 0 }, A.query = null, A.text = null), A;
      }
    },
    props: {
      // Call the keydown hook if suggestion is active.
      handleKeyDown(y, M) {
        var v;
        const { active: b, range: w } = g.getState(y.state);
        return b && ((v = f == null ? void 0 : f.onKeyDown) === null || v === void 0 ? void 0 : v.call(f, { view: y, event: M, range: w })) || !1;
      },
      // Setup decorator on the currently active suggestion.
      decorations(y) {
        const { active: M, range: v, decorationId: b } = g.getState(y);
        return M ? pt.create(y.doc, [
          zt.inline(v.from, v.to, {
            nodeName: a,
            class: c,
            "data-decoration-id": b
          })
        ]) : null;
      }
    }
  });
  return g;
}
const Uo = /(?:^|\s)(!\[(.+|:?)]\((\S+)(?:(?:\s+)["'](\S+)["'])?\))$/, ji = P.create({
  name: "image",
  addOptions() {
    return {
      inline: !1,
      allowBase64: !1,
      HTMLAttributes: {}
    };
  },
  inline() {
    return this.options.inline;
  },
  group() {
    return this.options.inline ? "inline" : "block";
  },
  draggable: !0,
  addAttributes() {
    return {
      src: {
        default: null
      },
      alt: {
        default: null
      },
      title: {
        default: null
      }
    };
  },
  parseHTML() {
    return [
      {
        tag: this.options.allowBase64 ? "img[src]" : 'img[src]:not([src^="data:"])'
      }
    ];
  },
  renderHTML({ HTMLAttributes: e }) {
    return ["img", C(this.options.HTMLAttributes, e)];
  },
  addCommands() {
    return {
      setImage: (e) => ({ commands: t }) => t.insertContent({
        type: this.name,
        attrs: e
      })
    };
  },
  addInputRules() {
    return [
      We({
        find: Uo,
        type: this.type,
        getAttributes: (e) => {
          const [, , t, n, r] = e;
          return { src: n, alt: t, title: r };
        }
      })
    ];
  }
}), Fi = P.create({
  name: "tableRow",
  addOptions() {
    return {
      HTMLAttributes: {}
    };
  },
  content: "(tableCell | tableHeader)*",
  tableRole: "row",
  parseHTML() {
    return [
      { tag: "tr" }
    ];
  },
  renderHTML({ HTMLAttributes: e }) {
    return ["tr", C(this.options.HTMLAttributes, e), 0];
  }
});
function jt(e, t) {
  return t ? ["width", `${Math.max(t, e)}px`] : ["min-width", `${e}px`];
}
function Se(e, t, n, r, s, o) {
  var i;
  let a = 0, c = !0, l = t.firstChild;
  const u = e.firstChild;
  if (u !== null)
    for (let d = 0, p = 0; d < u.childCount; d += 1) {
      const { colspan: h, colwidth: m } = u.child(d).attrs;
      for (let f = 0; f < h; f += 1, p += 1) {
        const g = s === p ? o : m && m[f], y = g ? `${g}px` : "";
        if (a += g || r, g || (c = !1), l) {
          if (l.style.width !== y) {
            const [M, v] = jt(r, g);
            l.style.setProperty(M, v);
          }
          l = l.nextSibling;
        } else {
          const M = document.createElement("col"), [v, b] = jt(r, g);
          M.style.setProperty(v, b), t.appendChild(M);
        }
      }
    }
  for (; l; ) {
    const d = l.nextSibling;
    (i = l.parentNode) === null || i === void 0 || i.removeChild(l), l = d;
  }
  c ? (n.style.width = `${a}px`, n.style.minWidth = "") : (n.style.width = "", n.style.minWidth = `${a}px`);
}
class qo {
  constructor(t, n) {
    this.node = t, this.cellMinWidth = n, this.dom = document.createElement("div"), this.dom.className = "tableWrapper", this.table = this.dom.appendChild(document.createElement("table")), this.colgroup = this.table.appendChild(document.createElement("colgroup")), Se(t, this.colgroup, this.table, n), this.contentDOM = this.table.appendChild(document.createElement("tbody"));
  }
  update(t) {
    return t.type !== this.node.type ? !1 : (this.node = t, Se(t, this.colgroup, this.table, this.cellMinWidth), !0);
  }
  ignoreMutation(t) {
    return t.type === "attributes" && (t.target === this.table || this.colgroup.contains(t.target));
  }
}
function Go(e, t, n, r) {
  let s = 0, o = !0;
  const i = [], a = e.firstChild;
  if (!a)
    return {};
  for (let d = 0, p = 0; d < a.childCount; d += 1) {
    const { colspan: h, colwidth: m } = a.child(d).attrs;
    for (let f = 0; f < h; f += 1, p += 1) {
      const g = n === p ? r : m && m[f];
      s += g || t, g || (o = !1);
      const [y, M] = jt(t, g);
      i.push([
        "col",
        { style: `${y}: ${M}` }
      ]);
    }
  }
  const c = o ? `${s}px` : "", l = o ? "" : `${s}px`;
  return { colgroup: ["colgroup", {}, ...i], tableWidth: c, tableMinWidth: l };
}
function ke(e, t) {
  return e.createAndFill();
}
function Jo(e) {
  if (e.cached.tableNodeTypes)
    return e.cached.tableNodeTypes;
  const t = {};
  return Object.keys(e.nodes).forEach((n) => {
    const r = e.nodes[n];
    r.spec.tableRole && (t[r.spec.tableRole] = r);
  }), e.cached.tableNodeTypes = t, t;
}
function Yo(e, t, n, r, s) {
  const o = Jo(e), i = [], a = [];
  for (let l = 0; l < n; l += 1) {
    const u = ke(o.cell);
    if (u && a.push(u), r) {
      const d = ke(o.header_cell);
      d && i.push(d);
    }
  }
  const c = [];
  for (let l = 0; l < t; l += 1)
    c.push(o.row.createChecked(null, r && l === 0 ? i : a));
  return o.table.createChecked(null, c);
}
function Xo(e) {
  return e instanceof Ce;
}
const ct = ({ editor: e }) => {
  const { selection: t } = e.state;
  if (!Xo(t))
    return !1;
  let n = 0;
  const r = Fe(t.ranges[0].$from, (o) => o.type.name === "table");
  return r == null || r.node.descendants((o) => {
    if (o.type.name === "table")
      return !1;
    ["tableCell", "tableHeader"].includes(o.type.name) && (n += 1);
  }), n === t.ranges.length ? (e.commands.deleteTable(), !0) : !1;
}, zi = P.create({
  name: "table",
  // @ts-ignore
  addOptions() {
    return {
      HTMLAttributes: {},
      resizable: !1,
      handleWidth: 5,
      cellMinWidth: 25,
      // TODO: fix
      View: qo,
      lastColumnResizable: !0,
      allowTableNodeSelection: !1
    };
  },
  content: "tableRow+",
  tableRole: "table",
  isolating: !0,
  group: "block",
  parseHTML() {
    return [{ tag: "table" }];
  },
  renderHTML({ node: e, HTMLAttributes: t }) {
    const { colgroup: n, tableWidth: r, tableMinWidth: s } = Go(e, this.options.cellMinWidth);
    return [
      "table",
      C(this.options.HTMLAttributes, t, {
        style: r ? `width: ${r}` : `min-width: ${s}`
      }),
      n,
      ["tbody", 0]
    ];
  },
  addCommands() {
    return {
      insertTable: ({ rows: e = 3, cols: t = 3, withHeaderRow: n = !0 } = {}) => ({ tr: r, dispatch: s, editor: o }) => {
        const i = Yo(o.schema, e, t, n);
        if (s) {
          const a = r.selection.from + 1;
          r.replaceSelectionWith(i).scrollIntoView().setSelection(D.near(r.doc.resolve(a)));
        }
        return !0;
      },
      addColumnBefore: () => ({ state: e, dispatch: t }) => Gn(e, t),
      addColumnAfter: () => ({ state: e, dispatch: t }) => qn(e, t),
      deleteColumn: () => ({ state: e, dispatch: t }) => Un(e, t),
      addRowBefore: () => ({ state: e, dispatch: t }) => Kn(e, t),
      addRowAfter: () => ({ state: e, dispatch: t }) => Wn(e, t),
      deleteRow: () => ({ state: e, dispatch: t }) => Vn(e, t),
      deleteTable: () => ({ state: e, dispatch: t }) => zn(e, t),
      mergeCells: () => ({ state: e, dispatch: t }) => ne(e, t),
      splitCell: () => ({ state: e, dispatch: t }) => re(e, t),
      toggleHeaderColumn: () => ({ state: e, dispatch: t }) => se("column")(e, t),
      toggleHeaderRow: () => ({ state: e, dispatch: t }) => se("row")(e, t),
      toggleHeaderCell: () => ({ state: e, dispatch: t }) => Fn(e, t),
      mergeOrSplit: () => ({ state: e, dispatch: t }) => ne(e, t) ? !0 : re(e, t),
      setCellAttribute: (e, t) => ({ state: n, dispatch: r }) => jn(e, t)(n, r),
      goToNextCell: () => ({ state: e, dispatch: t }) => ee(1)(e, t),
      goToPreviousCell: () => ({ state: e, dispatch: t }) => ee(-1)(e, t),
      fixTables: () => ({ state: e, dispatch: t }) => (t && Bn(e), !0),
      setCellSelection: (e) => ({ tr: t, dispatch: n }) => {
        if (n) {
          const r = Ce.create(t.doc, e.anchorCell, e.headCell);
          t.setSelection(r);
        }
        return !0;
      }
    };
  },
  addKeyboardShortcuts() {
    return {
      Tab: () => this.editor.commands.goToNextCell() ? !0 : this.editor.can().addRowAfter() ? this.editor.chain().addRowAfter().goToNextCell().run() : !1,
      "Shift-Tab": () => this.editor.commands.goToPreviousCell(),
      Backspace: ct,
      "Mod-Backspace": ct,
      Delete: ct,
      "Mod-Delete": ct
    };
  },
  addProseMirrorPlugins() {
    return [
      ...this.options.resizable && this.editor.isEditable ? [
        Dn({
          handleWidth: this.options.handleWidth,
          cellMinWidth: this.options.cellMinWidth,
          defaultCellMinWidth: this.options.cellMinWidth,
          View: this.options.View,
          lastColumnResizable: this.options.lastColumnResizable
        })
      ] : [],
      Nn({
        allowTableNodeSelection: this.options.allowTableNodeSelection
      })
    ];
  },
  extendNodeSchema(e) {
    const t = {
      name: e.name,
      options: e.options,
      storage: e.storage
    };
    return {
      tableRole: E(S(e, "tableRole", t))
    };
  }
}), Vi = P.create({
  name: "tableCell",
  addOptions() {
    return {
      HTMLAttributes: {}
    };
  },
  content: "block+",
  addAttributes() {
    return {
      colspan: {
        default: 1
      },
      rowspan: {
        default: 1
      },
      colwidth: {
        default: null,
        parseHTML: (e) => {
          const t = e.getAttribute("colwidth");
          return t ? t.split(",").map((r) => parseInt(r, 10)) : null;
        }
      }
    };
  },
  tableRole: "cell",
  isolating: !0,
  parseHTML() {
    return [
      { tag: "td" }
    ];
  },
  renderHTML({ HTMLAttributes: e }) {
    return ["td", C(this.options.HTMLAttributes, e), 0];
  }
}), Wi = P.create({
  name: "tableHeader",
  addOptions() {
    return {
      HTMLAttributes: {}
    };
  },
  content: "block+",
  addAttributes() {
    return {
      colspan: {
        default: 1
      },
      rowspan: {
        default: 1
      },
      colwidth: {
        default: null,
        parseHTML: (e) => {
          const t = e.getAttribute("colwidth");
          return t ? t.split(",").map((r) => parseInt(r, 10)) : null;
        }
      }
    };
  },
  tableRole: "header_cell",
  isolating: !0,
  parseHTML() {
    return [
      { tag: "th" }
    ];
  },
  renderHTML({ HTMLAttributes: e }) {
    return ["th", C(this.options.HTMLAttributes, e), 0];
  }
}), Qo = new $("mention"), Ki = P.create({
  name: "mention",
  priority: 101,
  addOptions() {
    return {
      HTMLAttributes: {},
      renderText({ options: e, node: t }) {
        var n;
        return `${e.suggestion.char}${(n = t.attrs.label) !== null && n !== void 0 ? n : t.attrs.id}`;
      },
      deleteTriggerWithBackspace: !1,
      renderHTML({ options: e, node: t }) {
        var n;
        return [
          "span",
          C(this.HTMLAttributes, e.HTMLAttributes),
          `${e.suggestion.char}${(n = t.attrs.label) !== null && n !== void 0 ? n : t.attrs.id}`
        ];
      },
      suggestion: {
        char: "@",
        pluginKey: Qo,
        command: ({ editor: e, range: t, props: n }) => {
          var r, s, o;
          const i = e.view.state.selection.$to.nodeAfter;
          ((r = i == null ? void 0 : i.text) === null || r === void 0 ? void 0 : r.startsWith(" ")) && (t.to += 1), e.chain().focus().insertContentAt(t, [
            {
              type: this.name,
              attrs: n
            },
            {
              type: "text",
              text: " "
            }
          ]).run(), (o = (s = e.view.dom.ownerDocument.defaultView) === null || s === void 0 ? void 0 : s.getSelection()) === null || o === void 0 || o.collapseToEnd();
        },
        allow: ({ state: e, range: t }) => {
          const n = e.doc.resolve(t.from), r = e.schema.nodes[this.name];
          return !!n.parent.type.contentMatch.matchType(r);
        }
      }
    };
  },
  group: "inline",
  inline: !0,
  selectable: !1,
  atom: !0,
  addAttributes() {
    return {
      id: {
        default: null,
        parseHTML: (e) => e.getAttribute("data-id"),
        renderHTML: (e) => e.id ? {
          "data-id": e.id
        } : {}
      },
      label: {
        default: null,
        parseHTML: (e) => e.getAttribute("data-label"),
        renderHTML: (e) => e.label ? {
          "data-label": e.label
        } : {}
      }
    };
  },
  parseHTML() {
    return [
      {
        tag: `span[data-type="${this.name}"]`
      }
    ];
  },
  renderHTML({ node: e, HTMLAttributes: t }) {
    if (this.options.renderLabel !== void 0)
      return console.warn("renderLabel is deprecated use renderText and renderHTML instead"), [
        "span",
        C({ "data-type": this.name }, this.options.HTMLAttributes, t),
        this.options.renderLabel({
          options: this.options,
          node: e
        })
      ];
    const n = { ...this.options };
    n.HTMLAttributes = C({ "data-type": this.name }, this.options.HTMLAttributes, t);
    const r = this.options.renderHTML({
      options: n,
      node: e
    });
    return typeof r == "string" ? [
      "span",
      C({ "data-type": this.name }, this.options.HTMLAttributes, t),
      r
    ] : r;
  },
  renderText({ node: e }) {
    return this.options.renderLabel !== void 0 ? (console.warn("renderLabel is deprecated use renderText and renderHTML instead"), this.options.renderLabel({
      options: this.options,
      node: e
    })) : this.options.renderText({
      options: this.options,
      node: e
    });
  },
  addKeyboardShortcuts() {
    return {
      Backspace: () => this.editor.commands.command(({ tr: e, state: t }) => {
        let n = !1;
        const { selection: r } = t, { empty: s, anchor: o } = r;
        return s ? (t.doc.nodesBetween(o - 1, o, (i, a) => {
          if (i.type.name === this.name)
            return n = !0, e.insertText(this.options.deleteTriggerWithBackspace ? "" : this.options.suggestion.char || "", a, a + i.nodeSize), !1;
        }), n) : !1;
      })
    };
  },
  addProseMirrorPlugins() {
    return [
      Ko({
        editor: this.editor,
        ...this.options.suggestion
      })
    ];
  }
});
export {
  si as $,
  ai as A,
  ii as B,
  hi as C,
  Di as D,
  _ as E,
  mi as F,
  _i as G,
  gi as H,
  di as I,
  li as J,
  Jt as K,
  Ti as L,
  Ki as M,
  P as N,
  Si as O,
  Ii as P,
  de as Q,
  yo as R,
  pi as S,
  yi as T,
  ui as U,
  ji as V,
  We as W,
  ri as X,
  lr as Y,
  ps as Z,
  oi as _,
  ci as a,
  vi as b,
  bi as c,
  Mi as d,
  wi as e,
  ki as f,
  Ei as g,
  qt as h,
  Ci as i,
  xi as j,
  Li as k,
  $i as l,
  C as m,
  Oi as n,
  Ai as o,
  Hi as p,
  Pi as q,
  Ri as r,
  fi as s,
  Ni as t,
  Bi as u,
  Ko as v,
  zi as w,
  Fi as x,
  Wi as y,
  Vi as z
};
