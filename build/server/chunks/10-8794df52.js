import { wrapServerLoadWithSentry } from '@sentry/sveltekit';
import { g as getJWT } from './jwt-c2f5353d.js';
import { r as redirect } from './index-9b9a1ed0.js';
import { M as Maintainer, D as DomainInfo } from './api-f8fcb1e8.js';
import './sentry-release-injection-file-d6d76abc.js';
import 'jsonwebtoken';
import './shared-server-b7e48788.js';
import '@octokit/rest';

async function load$1({ cookies, params }) {
  let jwt = cookies.get("jwt");
  let user = getJWT(jwt);
  if (!user)
    throw redirect(303, "/login");
  let Maintainers = await Maintainer(user.user.login);
  if (!Maintainers)
    throw redirect(303, "/");
  let domain = await DomainInfo(params.domain);
  if (domain.error)
    throw redirect(303, "/domains");
  return {
    user: user.user,
    domain: {
      name: params.domain,
      ...domain
    },
    emails: user.emails,
    token: user.token
  };
}
const load = load$1 ? wrapServerLoadWithSentry(load$1) : void 0;

var _page_server = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 10;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-ffdf1dfa.js')).default;
const server_id = "src/routes/maintainers/[domain]/edit/+page.server.js";
const imports = ["_app/immutable/nodes/10.8e18e160.js","_app/immutable/chunks/index.c676ab83.js","_app/immutable/chunks/navigation.ddd6bc37.js","_app/immutable/chunks/singletons.1250e275.js","_app/immutable/chunks/index.0d35ad8e.js","_app/immutable/chunks/paths.6e21c0d1.js","_app/immutable/chunks/fa.3821bd40.js","_app/immutable/chunks/stores.73e18257.js","_app/immutable/chunks/ProgressBar.svelte_svelte_type_style_lang.314e35e5.js","_app/immutable/chunks/index.3cde08c5.js","_app/immutable/chunks/ProgressRadial.90f2db42.js","_app/immutable/chunks/index.4f6188fb.js","_app/immutable/chunks/sentry-release-injection-file.7de3efab.js"];
const stylesheets = ["_app/immutable/assets/fa.95b16411.css","_app/immutable/assets/ProgressBar.4f1e9ba5.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=10-8794df52.js.map
