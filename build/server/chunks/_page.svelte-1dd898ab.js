import { c as create_ssr_component, e as each, d as add_attribute, f as escape } from './index3-8659ab76.js';
import './ProgressBar.svelte_svelte_type_style_lang-9dfb11a6.js';
import './index2-0a6b26f5.js';

const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  data.JWT;
  let password = "";
  console.log(data.domains);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `
<h2 class="h2">SMTP settings</h2>
<br>

${data && data.domains && data.domains.length > 0 ? `
	<form><label class="label center"><span class="text-center">Select a domain</span>
			
			<select class="input">${each(data.domains, ({ domain, record }) => {
    return `<option${add_attribute("value", domain, 0)}>${escape(domain)}</option>`;
  })}</select></label>
		<label class="label center"><span class="text-center">Set a SMTP password</span>
			
			<input class="input" type="password" placeholder="Password Here please"${add_attribute("value", password, 0)}></label>
		
		<button type="submit" class="btn variant-filled">Save Password</button></form>
	<br>
	<button class="btn variant-filled mb-2">How to use SMTP
	</button>` : `
	<p class="text-center">You have no domains yet. <a href="/register">Let&#39;s change that!</a></p>`}`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-1dd898ab.js.map
