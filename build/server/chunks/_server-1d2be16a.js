import { j as json, r as redirect } from './index-9b9a1ed0.js';
import { g as getJWT, c as createJWT } from './jwt-c2f5353d.js';
import { b as private_env } from './shared-server-b7e48788.js';
import './sentry-release-injection-file-d6d76abc.js';
import 'jsonwebtoken';

function GET({ url, cookies }) {
  let next = url.searchParams.get("next");
  if (!next)
    return json({ error: "No next URL provided" });
  let provider = url.searchParams.get("provider");
  if (!provider)
    return json({ error: "No provider provided" });
  if (!private_env[`PROVIDER_${provider.toUpperCase()}_SECRET`])
    return json({ error: "Invalid provider provided" });
  let session = getJWT(cookies.get("jwt"));
  if (!session)
    throw redirect(
      303,
      `/login/in?next=${encodeURIComponent(
        `/login/authorize?next=${encodeURIComponent(next)}&provider=${provider}`
      )}`
    );
  let jwt = createJWT(session, private_env[`PROVIDER_${provider.toUpperCase()}_SECRET`]);
  throw redirect(303, `${next}?jwt=${jwt}`);
}

export { GET };
//# sourceMappingURL=_server-1d2be16a.js.map
