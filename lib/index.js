import { useRef as d, useState as o, useEffect as f } from "react";
import { R as m } from "./RichTextEditor-Du9yCsKC.js";
import { B as x } from "./tiptap-B-aFGwLp.js";
function c() {
  var t;
  const e = d({ editor: null }), [u, s] = o(!1), [i, n] = o(null);
  return f(() => {
    var r;
    (r = e.current) != null && r.editor && (s(!0), n(e.current.editor));
  }, [e, (t = e.current) == null ? void 0 : t.editor]), { isReady: u, editor: i, editorRef: e };
}
export {
  x as BubbleMenu,
  m as default,
  c as useEditorState
};
