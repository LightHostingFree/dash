import { wrapServerLoadWithSentry } from '@sentry/sveltekit';
import { g as getJWT } from './jwt-c2f5353d.js';
import { r as redirect } from './index-9b9a1ed0.js';
import { M as Maintainer, g as getHosting, D as DomainInfo } from './api-f8fcb1e8.js';
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
  let hosting = await getHosting(jwt, params.domain);
  let domain = await DomainInfo(params.domain);
  if (domain.error)
    throw redirect(303, "/domains");
  return {
    user: user.user,
    domain: {
      name: params.domain,
      ...domain
    },
    hosting,
    jwt
  };
}
const load = load$1 ? wrapServerLoadWithSentry(load$1) : void 0;

var _page_server = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 9;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-f3c7e62b.js')).default;
const server_id = "src/routes/maintainers/[domain]/+page.server.js";
const imports = ["_app/immutable/nodes/9.d2315450.js","_app/immutable/chunks/index.c676ab83.js","_app/immutable/chunks/public.e27fc8de.js","_app/immutable/chunks/navigation.ddd6bc37.js","_app/immutable/chunks/singletons.1250e275.js","_app/immutable/chunks/index.0d35ad8e.js","_app/immutable/chunks/paths.6e21c0d1.js","_app/immutable/chunks/stores.848b0f50.js","_app/immutable/chunks/ProgressBar.svelte_svelte_type_style_lang.314e35e5.js","_app/immutable/chunks/index.3cde08c5.js","_app/immutable/chunks/Modal.43f3f8c9.js","_app/immutable/chunks/sentry-release-injection-file.7de3efab.js"];
const stylesheets = ["_app/immutable/assets/ProgressBar.4f1e9ba5.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=9-0e421090.js.map
