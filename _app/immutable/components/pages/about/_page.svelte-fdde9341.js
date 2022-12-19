import { S as SvelteComponent, i as init, s as safe_not_equal, k as element, a as space, q as text, l as claim_element, m as children, h as detach, c as claim_space, r as claim_text, O as src_url_equal, n as attr, b as insert_hydration, E as append_hydration, u as set_data, B as noop, w as create_component, x as claim_component, y as mount_component, f as transition_in, t as transition_out, z as destroy_component } from "../../../chunks/index-91e48c8d.js";
import { b as base } from "../../../chunks/paths-e8c03176.js";
const ChatBubble_svelte_svelte_type_style_lang = "";
function create_fragment$1(ctx) {
  let div3;
  let div1;
  let div0;
  let img;
  let img_src_value;
  let t0;
  let div2;
  let t1;
  return {
    c() {
      div3 = element("div");
      div1 = element("div");
      div0 = element("div");
      img = element("img");
      t0 = space();
      div2 = element("div");
      t1 = text(ctx[0]);
      this.h();
    },
    l(nodes) {
      div3 = claim_element(nodes, "DIV", { class: true });
      var div3_nodes = children(div3);
      div1 = claim_element(div3_nodes, "DIV", { class: true });
      var div1_nodes = children(div1);
      div0 = claim_element(div1_nodes, "DIV", { class: true });
      var div0_nodes = children(div0);
      img = claim_element(div0_nodes, "IMG", { src: true, alt: true });
      div0_nodes.forEach(detach);
      div1_nodes.forEach(detach);
      t0 = claim_space(div3_nodes);
      div2 = claim_element(div3_nodes, "DIV", { class: true });
      var div2_nodes = children(div2);
      t1 = claim_text(div2_nodes, ctx[0]);
      div2_nodes.forEach(detach);
      div3_nodes.forEach(detach);
      this.h();
    },
    h() {
      if (!src_url_equal(img.src, img_src_value = ctx[1]))
        attr(img, "src", img_src_value);
      attr(img, "alt", "profile-image");
      attr(div0, "class", "w-10 rounded-full");
      attr(div1, "class", "chat-image avatar");
      attr(div2, "class", "chat-bubble chat-bubble-error svelte-m6qfny");
      attr(div3, "class", "chat chat-start");
    },
    m(target, anchor) {
      insert_hydration(target, div3, anchor);
      append_hydration(div3, div1);
      append_hydration(div1, div0);
      append_hydration(div0, img);
      append_hydration(div3, t0);
      append_hydration(div3, div2);
      append_hydration(div2, t1);
    },
    p(ctx2, [dirty]) {
      if (dirty & 2 && !src_url_equal(img.src, img_src_value = ctx2[1])) {
        attr(img, "src", img_src_value);
      }
      if (dirty & 1)
        set_data(t1, ctx2[0]);
    },
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching)
        detach(div3);
    }
  };
}
function instance($$self, $$props, $$invalidate) {
  let { message } = $$props;
  let { imageSrc: imageSrc2 } = $$props;
  $$self.$$set = ($$props2) => {
    if ("message" in $$props2)
      $$invalidate(0, message = $$props2.message);
    if ("imageSrc" in $$props2)
      $$invalidate(1, imageSrc2 = $$props2.imageSrc);
  };
  return [message, imageSrc2];
}
class ChatBubble extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance, create_fragment$1, safe_not_equal, { message: 0, imageSrc: 1 });
  }
}
const _page_svelte_svelte_type_style_lang = "";
function create_fragment(ctx) {
  let div10;
  let div9;
  let a0;
  let div0;
  let t0;
  let t1;
  let div3;
  let div2;
  let div1;
  let img;
  let img_src_value;
  let t2;
  let div8;
  let chatbubble0;
  let t3;
  let chatbubble1;
  let t4;
  let chatbubble2;
  let t5;
  let chatbubble3;
  let t6;
  let div7;
  let a1;
  let div4;
  let t7;
  let t8;
  let a2;
  let div5;
  let t9;
  let t10;
  let a3;
  let div6;
  let t11;
  let current;
  chatbubble0 = new ChatBubble({ props: { message: "hello", imageSrc } });
  chatbubble1 = new ChatBubble({
    props: { message: "I'm swimmingkiim", imageSrc }
  });
  chatbubble2 = new ChatBubble({
    props: {
      message: "Hope you have a merry little christmas!",
      imageSrc
    }
  });
  chatbubble3 = new ChatBubble({
    props: { message: "Checkout my github!", imageSrc }
  });
  return {
    c() {
      div10 = element("div");
      div9 = element("div");
      a0 = element("a");
      div0 = element("div");
      t0 = text("✕");
      t1 = space();
      div3 = element("div");
      div2 = element("div");
      div1 = element("div");
      img = element("img");
      t2 = space();
      div8 = element("div");
      create_component(chatbubble0.$$.fragment);
      t3 = space();
      create_component(chatbubble1.$$.fragment);
      t4 = space();
      create_component(chatbubble2.$$.fragment);
      t5 = space();
      create_component(chatbubble3.$$.fragment);
      t6 = space();
      div7 = element("div");
      a1 = element("a");
      div4 = element("div");
      t7 = text("#Github");
      t8 = space();
      a2 = element("a");
      div5 = element("div");
      t9 = text("#Linkedin");
      t10 = space();
      a3 = element("a");
      div6 = element("div");
      t11 = text("#Blog");
      this.h();
    },
    l(nodes) {
      div10 = claim_element(nodes, "DIV", { id: true, class: true });
      var div10_nodes = children(div10);
      div9 = claim_element(div10_nodes, "DIV", { class: true });
      var div9_nodes = children(div9);
      a0 = claim_element(div9_nodes, "A", { href: true, class: true });
      var a0_nodes = children(a0);
      div0 = claim_element(a0_nodes, "DIV", { class: true });
      var div0_nodes = children(div0);
      t0 = claim_text(div0_nodes, "✕");
      div0_nodes.forEach(detach);
      a0_nodes.forEach(detach);
      t1 = claim_space(div9_nodes);
      div3 = claim_element(div9_nodes, "DIV", { id: true, class: true });
      var div3_nodes = children(div3);
      div2 = claim_element(div3_nodes, "DIV", { class: true });
      var div2_nodes = children(div2);
      div1 = claim_element(div2_nodes, "DIV", { class: true });
      var div1_nodes = children(div1);
      img = claim_element(div1_nodes, "IMG", { src: true });
      div1_nodes.forEach(detach);
      div2_nodes.forEach(detach);
      div3_nodes.forEach(detach);
      t2 = claim_space(div9_nodes);
      div8 = claim_element(div9_nodes, "DIV", { id: true, class: true });
      var div8_nodes = children(div8);
      claim_component(chatbubble0.$$.fragment, div8_nodes);
      t3 = claim_space(div8_nodes);
      claim_component(chatbubble1.$$.fragment, div8_nodes);
      t4 = claim_space(div8_nodes);
      claim_component(chatbubble2.$$.fragment, div8_nodes);
      t5 = claim_space(div8_nodes);
      claim_component(chatbubble3.$$.fragment, div8_nodes);
      t6 = claim_space(div8_nodes);
      div7 = claim_element(div8_nodes, "DIV", { id: true, class: true });
      var div7_nodes = children(div7);
      a1 = claim_element(div7_nodes, "A", { href: true, target: true });
      var a1_nodes = children(a1);
      div4 = claim_element(a1_nodes, "DIV", { class: true });
      var div4_nodes = children(div4);
      t7 = claim_text(div4_nodes, "#Github");
      div4_nodes.forEach(detach);
      a1_nodes.forEach(detach);
      t8 = claim_space(div7_nodes);
      a2 = claim_element(div7_nodes, "A", { href: true, target: true });
      var a2_nodes = children(a2);
      div5 = claim_element(a2_nodes, "DIV", { class: true });
      var div5_nodes = children(div5);
      t9 = claim_text(div5_nodes, "#Linkedin");
      div5_nodes.forEach(detach);
      a2_nodes.forEach(detach);
      t10 = claim_space(div7_nodes);
      a3 = claim_element(div7_nodes, "A", { href: true, target: true });
      var a3_nodes = children(a3);
      div6 = claim_element(a3_nodes, "DIV", { class: true });
      var div6_nodes = children(div6);
      t11 = claim_text(div6_nodes, "#Blog");
      div6_nodes.forEach(detach);
      a3_nodes.forEach(detach);
      div7_nodes.forEach(detach);
      div8_nodes.forEach(detach);
      div9_nodes.forEach(detach);
      div10_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(div0, "class", "btn btn-sm btn-circle absolute right-2 top-2");
      attr(a0, "href", base);
      attr(a0, "class", "link link-hover");
      if (!src_url_equal(img.src, img_src_value = imageSrc))
        attr(img, "src", img_src_value);
      attr(div1, "class", "w-36 rounded-full");
      attr(div2, "class", "avatar");
      attr(div3, "id", "avatar-container");
      attr(div3, "class", "svelte-hgltks");
      attr(div4, "class", "badge badge-info gap-2 svelte-hgltks");
      attr(a1, "href", "https://github.com/swimmingkiim");
      attr(a1, "target", "__blank");
      attr(div5, "class", "badge badge-success gap-2 svelte-hgltks");
      attr(a2, "href", "https://www.linkedin.com/in/sooyoung-kim-424b51213/");
      attr(a2, "target", "__blank");
      attr(div6, "class", "badge badge-warning gap-2 svelte-hgltks");
      attr(a3, "href", "https://dev.to/swimmingkiim");
      attr(a3, "target", "__blank");
      attr(div7, "id", "social-link-container");
      attr(div7, "class", "svelte-hgltks");
      attr(div8, "id", "chat-screen");
      attr(div8, "class", "artboard svelte-hgltks");
      attr(div9, "class", "artboard phone-1 svelte-hgltks");
      attr(div10, "id", "outer-container");
      attr(div10, "class", "svelte-hgltks");
    },
    m(target, anchor) {
      insert_hydration(target, div10, anchor);
      append_hydration(div10, div9);
      append_hydration(div9, a0);
      append_hydration(a0, div0);
      append_hydration(div0, t0);
      append_hydration(div9, t1);
      append_hydration(div9, div3);
      append_hydration(div3, div2);
      append_hydration(div2, div1);
      append_hydration(div1, img);
      append_hydration(div9, t2);
      append_hydration(div9, div8);
      mount_component(chatbubble0, div8, null);
      append_hydration(div8, t3);
      mount_component(chatbubble1, div8, null);
      append_hydration(div8, t4);
      mount_component(chatbubble2, div8, null);
      append_hydration(div8, t5);
      mount_component(chatbubble3, div8, null);
      append_hydration(div8, t6);
      append_hydration(div8, div7);
      append_hydration(div7, a1);
      append_hydration(a1, div4);
      append_hydration(div4, t7);
      append_hydration(div7, t8);
      append_hydration(div7, a2);
      append_hydration(a2, div5);
      append_hydration(div5, t9);
      append_hydration(div7, t10);
      append_hydration(div7, a3);
      append_hydration(a3, div6);
      append_hydration(div6, t11);
      current = true;
    },
    p: noop,
    i(local) {
      if (current)
        return;
      transition_in(chatbubble0.$$.fragment, local);
      transition_in(chatbubble1.$$.fragment, local);
      transition_in(chatbubble2.$$.fragment, local);
      transition_in(chatbubble3.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(chatbubble0.$$.fragment, local);
      transition_out(chatbubble1.$$.fragment, local);
      transition_out(chatbubble2.$$.fragment, local);
      transition_out(chatbubble3.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(div10);
      destroy_component(chatbubble0);
      destroy_component(chatbubble1);
      destroy_component(chatbubble2);
      destroy_component(chatbubble3);
    }
  };
}
const imageSrc = "https://avatars.githubusercontent.com/u/54804279?v=4";
class Page extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, null, create_fragment, safe_not_equal, {});
  }
}
export {
  Page as default
};
