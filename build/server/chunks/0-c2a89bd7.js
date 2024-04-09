import { wrapServerLoadWithSentry } from '@sentry/sveltekit';
import { g as getJWT } from './jwt-c2f5353d.js';
import { M as Maintainer } from './api-f8fcb1e8.js';
import './sentry-release-injection-file-d6d76abc.js';
import 'jsonwebtoken';
import './shared-server-b7e48788.js';
import '@octokit/rest';

async function load$1({ cookies }) {
  let user = await getJWT(cookies.get("jwt"));
  let maintainer = true;
  if (user) {
    let Maintainers = await Maintainer(user.user.login);
    if (!Maintainers)
      maintainer = false;
    else
      maintainer = true;
  }
  return {
    user,
    maintainer
  };
}
const load = load$1 ? wrapServerLoadWithSentry(load$1) : void 0;

var _layout_server = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 0;
let component_cache;
const component = async () => component_cache ??= (await import('./_layout.svelte-86b91f5f.js')).default;
const server_id = "src/routes/+layout.server.js";
const imports = ["_app/immutable/nodes/0.53c2fb63.js","_app/immutable/chunks/index.c676ab83.js","_app/immutable/chunks/stores.ade05507.js","_app/immutable/chunks/singletons.1250e275.js","_app/immutable/chunks/index.0d35ad8e.js","_app/immutable/chunks/paths.6e21c0d1.js","_app/immutable/chunks/navigation.ddd6bc37.js","_app/immutable/chunks/stores.848b0f50.js","_app/immutable/chunks/ProgressBar.svelte_svelte_type_style_lang.314e35e5.js","_app/immutable/chunks/Modal.43f3f8c9.js","_app/immutable/chunks/index.3cde08c5.js","_app/immutable/chunks/stores.73e18257.js","_app/immutable/chunks/fa.3821bd40.js","_app/immutable/chunks/index.04ca9c1a.js","_app/immutable/chunks/index.4f6188fb.js","_app/immutable/chunks/sentry-release-injection-file.7de3efab.js"];
const stylesheets = ["_app/immutable/assets/0.81a94002.css","_app/immutable/assets/ProgressBar.4f1e9ba5.css","_app/immutable/assets/fa.95b16411.css"];
const fonts = [];

export { component, fonts, imports, index, _layout_server as server, server_id, stylesheets };
//# sourceMappingURL=0-c2a89bd7.js.map
