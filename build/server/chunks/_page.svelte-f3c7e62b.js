import { c as create_ssr_component, v as validate_component, f as escape } from './index3-8659ab76.js';
import './ProgressBar.svelte_svelte_type_style_lang-9dfb11a6.js';
import { M as Modal } from './Modal-a6623968.js';
import './index2-0a6b26f5.js';

const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  console.log(data.domain.record);
  let hosting = data.hosting;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `${``}
${validate_component(Modal, "Modal").$$render($$result, {}, {}, {})}
<h2 class="h2">${escape(data.domain.name)}.is-cool.me</h2>
<br>
${hosting ? `<button class="btn variant-filled mb-2">Manage files
	</button>` : ``}
<br>
<button class="btn variant-filled mb-2">Edit Record(s)
</button>
${!hosting ? `<br>
	<p>HOSTING IS DISABLED ON STAFF DOMAINS</p>
	<br>
	<button class="btn variant-filled mb-2">Delete domain
	</button>` : ``}

<button class="btn variant-filled">Analytics
</button>
<button class="text-sm text-gray-500 mt-2">how to set up analytics
</button>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-f3c7e62b.js.map
