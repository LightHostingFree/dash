import { wrapServerLoadWithSentry } from '@sentry/sveltekit';
import { r as redirect } from './index-9b9a1ed0.js';
import { g as getJWT } from './jwt-c2f5353d.js';
import { C as CountDomains } from './api-f8fcb1e8.js';
import './sentry-release-injection-file-d6d76abc.js';
import 'jsonwebtoken';
import './shared-server-b7e48788.js';
import '@octokit/rest';

async function load$1({ cookies }) {
  let user = await getJWT(cookies.get("jwt"));
  if (user)
    throw redirect(303, "/");
  let stats = await CountDomains();
  return {
    stats
  };
}
const load = load$1 ? wrapServerLoadWithSentry(load$1) : void 0;

var _page_server = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 7;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-1666a74a.js')).default;
const server_id = "src/routes/login/+page.server.js";
const imports = ["_app/immutable/nodes/7.7c54ec4b.js","_app/immutable/chunks/index.c676ab83.js","_app/immutable/chunks/fa.3821bd40.js","_app/immutable/chunks/index.04ca9c1a.js","_app/immutable/chunks/sentry-release-injection-file.7de3efab.js"];
const stylesheets = ["_app/immutable/assets/fa.95b16411.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=7-d914a03f.js.map
