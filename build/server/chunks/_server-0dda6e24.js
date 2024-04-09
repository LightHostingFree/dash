import { r as redirect } from './index-9b9a1ed0.js';
import { b as private_env } from './shared-server-b7e48788.js';
import './sentry-release-injection-file-d6d76abc.js';

async function GET({ url }) {
  let next = url.searchParams.get("next") || "/";
  let provider = url.searchParams.get("provider");
  throw redirect(
    303,
    `https://github.com/login/oauth/authorize?client_id=${private_env.GITHUB_CLIENT_ID}&scope=public_repo%20user:email&redirect_uri=${encodeURIComponent(
      `${url.protocol}//${url.host}/login/callback?next=${encodeURIComponent(
        next
      )}&provider=${encodeURIComponent(provider)}`
    )}`
  );
}

export { GET };
//# sourceMappingURL=_server-0dda6e24.js.map
