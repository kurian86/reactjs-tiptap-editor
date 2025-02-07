import { J as p, j as C, g as S, B as h, d as x, e as B, C as g, b as I, s as R, u as k, E, x as H, z as T, F as b, a as A, r as L, H as M, c as y, i as z, h as F, v as j, p as v, K as O, y as U, l as _, I as q, n as w, L as D, G, M as K, t as N, O as P, w as V, o as W, S as J, k as Q, q as X, A as Y, f as Z, T as $, D as aa, N as sa, U as ea, V as ta, R as oa } from "./utils-z0ZGxJJi.js";
import { k as ia, m as na, j as la, p as ua, v as da, z as ma } from "./locales-Bxq8mp1I.js";
import { useRef as l, useState as t, useEffect as u } from "react";
import { B as fa } from "./tiptap-CfhZKmWB.js";
function m() {
  var s;
  const a = l({ editor: null }), [o, r] = t(!1), [i, n] = t(null);
  return u(() => {
    var e;
    (e = a.current) != null && e.editor && (r(!0), n(a.current.editor));
  }, [a, (s = a.current) == null ? void 0 : s.editor]), { isReady: o, editor: i, editorRef: a };
}
export {
  p as Attachment,
  C as BaseKit,
  S as Blockquote,
  h as Bold,
  fa as BubbleMenu,
  x as BulletList,
  B as Clear,
  g as Code,
  I as Color,
  R as Column,
  k as ColumnActionButton,
  E as Emoji,
  H as ExportPdf,
  T as ExportWord,
  b as FontFamily,
  A as FontSize,
  L as FormatPainter,
  M as Heading,
  y as Highlight,
  z as History,
  F as HorizontalRule,
  j as Iframe,
  v as Image,
  O as ImageGif,
  U as ImportWord,
  _ as Indent,
  q as Italic,
  w as LineHeight,
  D as Link,
  G as Mention,
  K as MoreMark,
  N as MultiColumn,
  P as OrderedList,
  V as SearchAndReplace,
  W as SlashCommand,
  J as Strike,
  Q as SubAndSuperScript,
  X as Table,
  Y as TableOfContents,
  Z as TaskList,
  $ as TextAlign,
  aa as TextDirection,
  sa as Twitter,
  ea as Underline,
  ta as Video,
  oa as default,
  ia as en,
  na as hu_HU,
  la as locale,
  ua as pt_BR,
  m as useEditorState,
  da as vi,
  ma as zh_CN
};
