import { wrapServerLoadWithSentry } from '@sentry/sveltekit';
import { r as redirect } from './index-9b9a1ed0.js';
import { g as getJWT } from './jwt-c2f5353d.js';
import './sentry-release-injection-file-d6d76abc.js';
import 'jsonwebtoken';
import './shared-server-b7e48788.js';

async function load$1({ cookies }) {
  let user = await getJWT(cookies.get("jwt"));
  if (!user)
    throw redirect(303, "/login");
  return {
    user: user.user,
    token: user.token,
    emails: user.emails
  };
}
const load = load$1 ? wrapServerLoadWithSentry(load$1) : void 0;

var _page_server = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 11;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-5cc2d746.js')).default;
const server_id = "src/routes/register/+page.server.js";
const imports = ["_app/immutable/nodes/11.3fbd0030.js","_app/immutable/chunks/index.c676ab83.js","_app/immutable/chunks/ProgressBar.svelte_svelte_type_style_lang.314e35e5.js","_app/immutable/chunks/index.0d35ad8e.js","_app/immutable/chunks/index.3cde08c5.js","_app/immutable/chunks/ProgressRadial.90f2db42.js","_app/immutable/chunks/sentry-release-injection-file.7de3efab.js"];
const stylesheets = ["_app/immutable/assets/11.fcbfb570.css","_app/immutable/assets/ProgressBar.4f1e9ba5.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=11-ae68ff9c.js.map
