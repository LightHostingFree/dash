import { L as ListDomains } from './api-f8fcb1e8.js';
import { j as json } from './index-9b9a1ed0.js';
import './sentry-release-injection-file-d6d76abc.js';
import '@octokit/rest';
import './shared-server-b7e48788.js';

async function GET({ params }) {
  let user = params.user;
  let domains = await ListDomains(user);
  return json({
    domains
  });
}

export { GET };
//# sourceMappingURL=_server-9bdea7b0.js.map
