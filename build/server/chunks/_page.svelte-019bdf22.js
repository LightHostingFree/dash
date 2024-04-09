import { c as create_ssr_component, f as escape, v as validate_component } from './index3-8659ab76.js';
import './ProgressBar.svelte_svelte_type_style_lang-9dfb11a6.js';
import { T as Table } from './Table-9c6449a2.js';
import './index2-0a6b26f5.js';

const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  const source = {
    head: ["Domain", "Records", "Actions"],
    body: data.subdomains.map((domain) => {
      return [
        domain.domain,
        domain.record.map((record) => `${record.type} ${record.value}`).join(", "),
        `<a href="/domains/${domain.domain.split(".is-cool.me")[0]}">Edit</a>`
      ];
    })
  };
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<h2 class="h2">Your Domains (${escape(data.count)})</h2>
<br>

${data.count === 0 ? `<p class="text-center">You have no domains yet. <a href="/register">Let&#39;s change that!</a></p>` : `${validate_component(Table, "Table").$$render($$result, { source }, {}, {})}`}`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-019bdf22.js.map
