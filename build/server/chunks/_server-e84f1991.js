import { a as CheckDomain } from './api-f8fcb1e8.js';
import { j as json } from './index-9b9a1ed0.js';
import './sentry-release-injection-file-d6d76abc.js';
import '@octokit/rest';
import './shared-server-b7e48788.js';

async function GET({ params }) {
  let domain = params.domain;
  if (!domain)
    return json({ error: "No domain provided" }, 400);
  let result = await CheckDomain(domain);
  return json(
    {
      available: result
    },
    200
  );
}

export { GET };
//# sourceMappingURL=_server-e84f1991.js.map
