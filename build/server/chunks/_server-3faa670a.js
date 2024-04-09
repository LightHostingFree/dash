import { j as json } from './index-9b9a1ed0.js';
import { g as getJWT } from './jwt-c2f5353d.js';
import { h as forkRepo } from './api-f8fcb1e8.js';
import './sentry-release-injection-file-d6d76abc.js';
import 'jsonwebtoken';
import './shared-server-b7e48788.js';
import '@octokit/rest';

async function GET({ cookies, url }) {
  let apiKey;
  let jwt = cookies.get("jwt");
  let session = getJWT(jwt);
  if (!session && url.searchParams.get("apikey"))
    apiKey = url.searchParams.get("key");
  else if (!session)
    return json({ error: "No session or api key provided" }, 400);
  else
    apiKey = session.token;
  let response = await forkRepo(apiKey);
  if (response.error)
    return json(response, 400);
  else
    return json(response, 200);
}

export { GET };
//# sourceMappingURL=_server-3faa670a.js.map
