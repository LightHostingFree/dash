import { c as create_ssr_component, f as escape } from './index3-8659ab76.js';
import './ProgressBar.svelte_svelte_type_style_lang-9dfb11a6.js';
import './index2-0a6b26f5.js';

const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  data.domain.record || [];
  l;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<h2 class="h2">Are you sure you want to delete ${escape(data.domain.name)}.is-cool.me?</h2>
<br>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-9854e8b0.js.map
