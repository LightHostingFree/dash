import { c as create_ssr_component, f as escape } from './index3-8659ab76.js';
import { t as toastStore } from './stores2-8e9a41c0.js';
import './ProgressBar.svelte_svelte_type_style_lang-9dfb11a6.js';
import './index2-0a6b26f5.js';

const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if (data.welcome)
    toastStore.trigger({
      background: "variant-filled-success",
      message: `Signed in as ${data.user.name || data.user.login}!`,
      timeout: 3e3
    });
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<h2 class="h2">Welcome, ${escape(data.user.name || data.user.login)}!
</h2>
<p class="text-lg text-center">${escape(data.stats.subdomains)} domains have been registered by ${escape(data.stats.individualOwners)} people!
</p>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-6ed9eb9a.js.map
