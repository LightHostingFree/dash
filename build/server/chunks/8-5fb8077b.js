import { wrapServerLoadWithSentry } from '@sentry/sveltekit';
import { g as getJWT } from './jwt-c2f5353d.js';
import { r as redirect } from './index-9b9a1ed0.js';
import { M as Maintainer, L as ListDomains } from './api-f8fcb1e8.js';
import './sentry-release-injection-file-d6d76abc.js';
import 'jsonwebtoken';
import './shared-server-b7e48788.js';
import '@octokit/rest';

async function load$1({ cookies }) {
  let jwt = cookies.get("jwt");
  let user = getJWT(jwt);
  if (!user)
    throw redirect(303, "/login");
  let Maintainers = await Maintainer(user.user.login);
  if (!Maintainers)
    throw redirect(303, "/");
  let domains = await ListDomains("is-cool-me");
  return {
    user: user.user,
    subdomains: domains,
    count: domains.length || 0
  };
}
const load = load$1 ? wrapServerLoadWithSentry(load$1) : void 0;

var _page_server = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 8;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-0fc48f85.js')).default;
const server_id = "src/routes/maintainers/+page.server.js";
const imports = ["_app/immutable/nodes/8.49d6790b.js","_app/immutable/chunks/index.c676ab83.js","_app/immutable/chunks/ProgressBar.svelte_svelte_type_style_lang.314e35e5.js","_app/immutable/chunks/index.0d35ad8e.js","_app/immutable/chunks/Table.e27a227b.js","_app/immutable/chunks/sentry-release-injection-file.7de3efab.js"];
const stylesheets = ["_app/immutable/assets/ProgressBar.4f1e9ba5.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=8-5fb8077b.js.map
