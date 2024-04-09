import { wrapServerLoadWithSentry } from '@sentry/sveltekit';
import { g as getJWT } from './jwt-c2f5353d.js';
import { r as redirect } from './index-9b9a1ed0.js';
import { D as DomainInfo } from './api-f8fcb1e8.js';
import './sentry-release-injection-file-d6d76abc.js';
import 'jsonwebtoken';
import './shared-server-b7e48788.js';
import '@octokit/rest';

async function load$1({ cookies, params }) {
  let jwt = cookies.get("jwt");
  let user = getJWT(jwt);
  if (!user)
    throw redirect(303, "/login");
  let domain = await DomainInfo(params.domain);
  if (domain.error)
    throw redirect(303, "/domains");
  if (domain.owner.username !== user.user.login)
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

const index = 5;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-9854e8b0.js')).default;
const server_id = "src/routes/domains/[domain]/delete/+page.server.js";
const imports = ["_app/immutable/nodes/5.dc48a4e8.js","_app/immutable/chunks/index.c676ab83.js","_app/immutable/chunks/paths.6e21c0d1.js","_app/immutable/chunks/ProgressBar.svelte_svelte_type_style_lang.314e35e5.js","_app/immutable/chunks/index.0d35ad8e.js","_app/immutable/chunks/sentry-release-injection-file.7de3efab.js"];
const stylesheets = ["_app/immutable/assets/ProgressBar.4f1e9ba5.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=5-7af1dfd0.js.map
