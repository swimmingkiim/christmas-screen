import { S as SvelteComponent, i as init, s as safe_not_equal, a as space, k as element, e as empty, c as claim_space, l as claim_element, m as children, h as detach, n as attr, b as insert_hydration, E as append_hydration, N as set_input_value, H as listen, B as noop, o as onMount, C as svg_element, q as text, D as claim_svg_element, r as claim_text } from "../../chunks/index-91e48c8d.js";
import { b as base } from "../../chunks/paths-e8c03176.js";
import { s as shareWithKakao } from "../../chunks/kakao-99eced2a.js";
const _page_svelte_svelte_type_style_lang = "";
function create_else_block(ctx) {
  let button;
  let t;
  let mounted;
  let dispose;
  return {
    c() {
      button = element("button");
      t = text("Share");
      this.h();
    },
    l(nodes) {
      button = claim_element(nodes, "BUTTON", { class: true });
      var button_nodes = children(button);
      t = claim_text(button_nodes, "Share");
      button_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(button, "class", "btn btn-xs sm:btn-sm md:btn-md lg:btn-lg svelte-1r56ooj");
    },
    m(target, anchor) {
      insert_hydration(target, button, anchor);
      append_hydration(button, t);
      if (!mounted) {
        dispose = listen(button, "click", ctx[6]);
        mounted = true;
      }
    },
    p: noop,
    d(detaching) {
      if (detaching)
        detach(button);
      mounted = false;
      dispose();
    }
  };
}
function create_if_block_3(ctx) {
  let a;
  let t;
  let a_href_value;
  return {
    c() {
      a = element("a");
      t = text("Share");
      this.h();
    },
    l(nodes) {
      a = claim_element(nodes, "A", { href: true, target: true, class: true });
      var a_nodes = children(a);
      t = claim_text(a_nodes, "Share");
      a_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(a, "href", a_href_value = `intent://${ctx[5](ctx[1]).replace("https://", "")}#Intent;scheme=https;package=com.android.chrome;end'`);
      attr(a, "target", "__blank");
      attr(a, "class", "btn btn-xs sm:btn-sm md:btn-md lg:btn-lg svelte-1r56ooj");
    },
    m(target, anchor) {
      insert_hydration(target, a, anchor);
      append_hydration(a, t);
    },
    p(ctx2, dirty) {
      if (dirty & 2 && a_href_value !== (a_href_value = `intent://${ctx2[5](ctx2[1]).replace("https://", "")}#Intent;scheme=https;package=com.android.chrome;end'`)) {
        attr(a, "href", a_href_value);
      }
    },
    d(detaching) {
      if (detaching)
        detach(a);
    }
  };
}
function create_if_block_2(ctx) {
  let div1;
  let div0;
  let svg;
  let path;
  let t0;
  let span;
  let t1;
  return {
    c() {
      div1 = element("div");
      div0 = element("div");
      svg = svg_element("svg");
      path = svg_element("path");
      t0 = space();
      span = element("span");
      t1 = text("Link copied!");
      this.h();
    },
    l(nodes) {
      div1 = claim_element(nodes, "DIV", { class: true });
      var div1_nodes = children(div1);
      div0 = claim_element(div1_nodes, "DIV", {});
      var div0_nodes = children(div0);
      svg = claim_svg_element(div0_nodes, "svg", {
        xmlns: true,
        class: true,
        fill: true,
        viewBox: true
      });
      var svg_nodes = children(svg);
      path = claim_svg_element(svg_nodes, "path", {
        "stroke-linecap": true,
        "stroke-linejoin": true,
        "stroke-width": true,
        d: true
      });
      children(path).forEach(detach);
      svg_nodes.forEach(detach);
      t0 = claim_space(div0_nodes);
      span = claim_element(div0_nodes, "SPAN", {});
      var span_nodes = children(span);
      t1 = claim_text(span_nodes, "Link copied!");
      span_nodes.forEach(detach);
      div0_nodes.forEach(detach);
      div1_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(path, "stroke-linecap", "round");
      attr(path, "stroke-linejoin", "round");
      attr(path, "stroke-width", "2");
      attr(path, "d", "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z");
      attr(svg, "xmlns", "http://www.w3.org/2000/svg");
      attr(svg, "class", "stroke-current flex-shrink-0 h-6 w-6");
      attr(svg, "fill", "none");
      attr(svg, "viewBox", "0 0 24 24");
      attr(div1, "class", "alert alert-success shadow-lg svelte-1r56ooj");
    },
    m(target, anchor) {
      insert_hydration(target, div1, anchor);
      append_hydration(div1, div0);
      append_hydration(div0, svg);
      append_hydration(svg, path);
      append_hydration(div0, t0);
      append_hydration(div0, span);
      append_hydration(span, t1);
    },
    d(detaching) {
      if (detaching)
        detach(div1);
    }
  };
}
function create_if_block_1(ctx) {
  let div1;
  let div0;
  let svg;
  let path;
  let t0;
  let span;
  let t1;
  return {
    c() {
      div1 = element("div");
      div0 = element("div");
      svg = svg_element("svg");
      path = svg_element("path");
      t0 = space();
      span = element("span");
      t1 = text("Please enter your message");
      this.h();
    },
    l(nodes) {
      div1 = claim_element(nodes, "DIV", { class: true });
      var div1_nodes = children(div1);
      div0 = claim_element(div1_nodes, "DIV", {});
      var div0_nodes = children(div0);
      svg = claim_svg_element(div0_nodes, "svg", {
        xmlns: true,
        class: true,
        fill: true,
        viewBox: true
      });
      var svg_nodes = children(svg);
      path = claim_svg_element(svg_nodes, "path", {
        "stroke-linecap": true,
        "stroke-linejoin": true,
        "stroke-width": true,
        d: true
      });
      children(path).forEach(detach);
      svg_nodes.forEach(detach);
      t0 = claim_space(div0_nodes);
      span = claim_element(div0_nodes, "SPAN", {});
      var span_nodes = children(span);
      t1 = claim_text(span_nodes, "Please enter your message");
      span_nodes.forEach(detach);
      div0_nodes.forEach(detach);
      div1_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(path, "stroke-linecap", "round");
      attr(path, "stroke-linejoin", "round");
      attr(path, "stroke-width", "2");
      attr(path, "d", "M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z");
      attr(svg, "xmlns", "http://www.w3.org/2000/svg");
      attr(svg, "class", "stroke-current flex-shrink-0 h-6 w-6");
      attr(svg, "fill", "none");
      attr(svg, "viewBox", "0 0 24 24");
      attr(div1, "class", "alert alert-error shadow-lg svelte-1r56ooj");
    },
    m(target, anchor) {
      insert_hydration(target, div1, anchor);
      append_hydration(div1, div0);
      append_hydration(div0, svg);
      append_hydration(svg, path);
      append_hydration(div0, t0);
      append_hydration(div0, span);
      append_hydration(span, t1);
    },
    d(detaching) {
      if (detaching)
        detach(div1);
    }
  };
}
function create_if_block(ctx) {
  let div1;
  let div0;
  let svg;
  let path;
  let t0;
  let span;
  let t1;
  return {
    c() {
      div1 = element("div");
      div0 = element("div");
      svg = svg_element("svg");
      path = svg_element("path");
      t0 = space();
      span = element("span");
      t1 = text("Something went wrong!");
      this.h();
    },
    l(nodes) {
      div1 = claim_element(nodes, "DIV", { class: true });
      var div1_nodes = children(div1);
      div0 = claim_element(div1_nodes, "DIV", {});
      var div0_nodes = children(div0);
      svg = claim_svg_element(div0_nodes, "svg", {
        xmlns: true,
        class: true,
        fill: true,
        viewBox: true
      });
      var svg_nodes = children(svg);
      path = claim_svg_element(svg_nodes, "path", {
        "stroke-linecap": true,
        "stroke-linejoin": true,
        "stroke-width": true,
        d: true
      });
      children(path).forEach(detach);
      svg_nodes.forEach(detach);
      t0 = claim_space(div0_nodes);
      span = claim_element(div0_nodes, "SPAN", {});
      var span_nodes = children(span);
      t1 = claim_text(span_nodes, "Something went wrong!");
      span_nodes.forEach(detach);
      div0_nodes.forEach(detach);
      div1_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(path, "stroke-linecap", "round");
      attr(path, "stroke-linejoin", "round");
      attr(path, "stroke-width", "2");
      attr(path, "d", "M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z");
      attr(svg, "xmlns", "http://www.w3.org/2000/svg");
      attr(svg, "class", "stroke-current flex-shrink-0 h-6 w-6");
      attr(svg, "fill", "none");
      attr(svg, "viewBox", "0 0 24 24");
      attr(div1, "class", "alert alert-error shadow-lg svelte-1r56ooj");
    },
    m(target, anchor) {
      insert_hydration(target, div1, anchor);
      append_hydration(div1, div0);
      append_hydration(div0, svg);
      append_hydration(svg, path);
      append_hydration(div0, t0);
      append_hydration(div0, span);
      append_hydration(span, t1);
    },
    d(detaching) {
      if (detaching)
        detach(div1);
    }
  };
}
function create_fragment(ctx) {
  let t0;
  let div;
  let textarea;
  let textarea_class_value;
  let t1;
  let t2;
  let t3;
  let if_block3_anchor;
  let mounted;
  let dispose;
  function select_block_type(ctx2, dirty) {
    if (ctx2[0])
      return create_if_block_3;
    return create_else_block;
  }
  let current_block_type = select_block_type(ctx);
  let if_block0 = current_block_type(ctx);
  let if_block1 = ctx[3] && create_if_block_2();
  let if_block2 = ctx[4] && create_if_block_1();
  let if_block3 = ctx[2] && create_if_block();
  return {
    c() {
      if_block0.c();
      t0 = space();
      div = element("div");
      textarea = element("textarea");
      t1 = space();
      if (if_block1)
        if_block1.c();
      t2 = space();
      if (if_block2)
        if_block2.c();
      t3 = space();
      if (if_block3)
        if_block3.c();
      if_block3_anchor = empty();
      this.h();
    },
    l(nodes) {
      if_block0.l(nodes);
      t0 = claim_space(nodes);
      div = claim_element(nodes, "DIV", { id: true, class: true });
      var div_nodes = children(div);
      textarea = claim_element(div_nodes, "TEXTAREA", { placeholder: true, class: true });
      children(textarea).forEach(detach);
      div_nodes.forEach(detach);
      t1 = claim_space(nodes);
      if (if_block1)
        if_block1.l(nodes);
      t2 = claim_space(nodes);
      if (if_block2)
        if_block2.l(nodes);
      t3 = claim_space(nodes);
      if (if_block3)
        if_block3.l(nodes);
      if_block3_anchor = empty();
      this.h();
    },
    h() {
      attr(textarea, "placeholder", "Type here");
      attr(textarea, "class", textarea_class_value = "textarea textarea-ghost " + (ctx[1].length > 0 ? `text-error` : "") + " svelte-1r56ooj");
      attr(div, "id", "title-container");
      attr(div, "class", "svelte-1r56ooj");
    },
    m(target, anchor) {
      if_block0.m(target, anchor);
      insert_hydration(target, t0, anchor);
      insert_hydration(target, div, anchor);
      append_hydration(div, textarea);
      set_input_value(textarea, ctx[1]);
      insert_hydration(target, t1, anchor);
      if (if_block1)
        if_block1.m(target, anchor);
      insert_hydration(target, t2, anchor);
      if (if_block2)
        if_block2.m(target, anchor);
      insert_hydration(target, t3, anchor);
      if (if_block3)
        if_block3.m(target, anchor);
      insert_hydration(target, if_block3_anchor, anchor);
      if (!mounted) {
        dispose = listen(textarea, "input", ctx[9]);
        mounted = true;
      }
    },
    p(ctx2, [dirty]) {
      if (current_block_type === (current_block_type = select_block_type(ctx2)) && if_block0) {
        if_block0.p(ctx2, dirty);
      } else {
        if_block0.d(1);
        if_block0 = current_block_type(ctx2);
        if (if_block0) {
          if_block0.c();
          if_block0.m(t0.parentNode, t0);
        }
      }
      if (dirty & 2 && textarea_class_value !== (textarea_class_value = "textarea textarea-ghost " + (ctx2[1].length > 0 ? `text-error` : "") + " svelte-1r56ooj")) {
        attr(textarea, "class", textarea_class_value);
      }
      if (dirty & 2) {
        set_input_value(textarea, ctx2[1]);
      }
      if (ctx2[3]) {
        if (if_block1)
          ;
        else {
          if_block1 = create_if_block_2();
          if_block1.c();
          if_block1.m(t2.parentNode, t2);
        }
      } else if (if_block1) {
        if_block1.d(1);
        if_block1 = null;
      }
      if (ctx2[4]) {
        if (if_block2)
          ;
        else {
          if_block2 = create_if_block_1();
          if_block2.c();
          if_block2.m(t3.parentNode, t3);
        }
      } else if (if_block2) {
        if_block2.d(1);
        if_block2 = null;
      }
      if (ctx2[2]) {
        if (if_block3)
          ;
        else {
          if_block3 = create_if_block();
          if_block3.c();
          if_block3.m(if_block3_anchor.parentNode, if_block3_anchor);
        }
      } else if (if_block3) {
        if_block3.d(1);
        if_block3 = null;
      }
    },
    i: noop,
    o: noop,
    d(detaching) {
      if_block0.d(detaching);
      if (detaching)
        detach(t0);
      if (detaching)
        detach(div);
      if (detaching)
        detach(t1);
      if (if_block1)
        if_block1.d(detaching);
      if (detaching)
        detach(t2);
      if (if_block2)
        if_block2.d(detaching);
      if (detaching)
        detach(t3);
      if (if_block3)
        if_block3.d(detaching);
      if (detaching)
        detach(if_block3_anchor);
      mounted = false;
      dispose();
    }
  };
}
function instance($$self, $$props, $$invalidate) {
  let title;
  let showCopiedAlert;
  let showEmptyAlert;
  let showErrorAlert;
  let shouldOpenInChrome;
  let { data } = $$props;
  const prerender = true;
  const getShareUrl = (message) => {
    const host = "https://swimmingkiim.github.io";
    const url = `${host}${base}?message=${message}`;
    return encodeURI(url);
  };
  const fallbackOnClipboardWrite = () => {
    const textArea = document.createElement("textarea");
    textArea.value = getShareUrl(title);
    textArea.readOnly = true;
    textArea.style.top = "0";
    textArea.style.left = "0";
    textArea.style.position = "fixed";
    textArea.style.display = "hidden";
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    try {
      const successful = document.execCommand("copy");
      document.body.removeChild(textArea);
      return true;
    } catch (err) {
      document.body.removeChild(textArea);
      return false;
    }
  };
  const onCopyShareLink = async () => {
    if (title.length <= 0) {
      $$invalidate(4, showEmptyAlert = true);
      setTimeout(
        () => {
          $$invalidate(4, showEmptyAlert = false);
        },
        3e3
      );
      return;
    }
    const url = getShareUrl(title);
    if (navigator.userAgent.indexOf("KAKAOTALK") >= 0) {
      shareWithKakao(url, title);
    } else if (navigator.share) {
      navigator.share({ title: "Christmas Message", url });
    } else {
      navigator.clipboard.writeText(url).then(() => {
        $$invalidate(3, showCopiedAlert = true);
        setTimeout(
          () => {
            $$invalidate(3, showCopiedAlert = false);
          },
          3e3
        );
      }).catch((_) => {
        const result = fallbackOnClipboardWrite();
        if (result) {
          $$invalidate(3, showCopiedAlert = true);
          setTimeout(
            () => {
              $$invalidate(3, showCopiedAlert = false);
            },
            3e3
          );
        } else {
          $$invalidate(2, showErrorAlert = true);
          setTimeout(
            () => {
              $$invalidate(2, showErrorAlert = false);
            },
            3e3
          );
        }
      });
    }
  };
  onMount(() => {
    if (data.message) {
      $$invalidate(1, title = data.message);
    }
    if (!navigator.share && !navigator.clipboard) {
      $$invalidate(0, shouldOpenInChrome = true);
    }
  });
  function textarea_input_handler() {
    title = this.value;
    $$invalidate(1, title);
  }
  $$self.$$set = ($$props2) => {
    if ("data" in $$props2)
      $$invalidate(7, data = $$props2.data);
  };
  $$invalidate(1, title = "");
  $$invalidate(3, showCopiedAlert = false);
  $$invalidate(4, showEmptyAlert = false);
  $$invalidate(2, showErrorAlert = false);
  $$invalidate(0, shouldOpenInChrome = false);
  return [
    shouldOpenInChrome,
    title,
    showErrorAlert,
    showCopiedAlert,
    showEmptyAlert,
    getShareUrl,
    onCopyShareLink,
    data,
    prerender,
    textarea_input_handler
  ];
}
class Page extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance, create_fragment, safe_not_equal, { data: 7, prerender: 8 });
  }
  get prerender() {
    return this.$$.ctx[8];
  }
}
export {
  Page as default
};
