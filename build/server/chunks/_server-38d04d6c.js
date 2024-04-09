import { D as DomainInfo, L as ListDomains } from './api-f8fcb1e8.js';
import { j as json } from './index-9b9a1ed0.js';
import './sentry-release-injection-file-d6d76abc.js';
import '@octokit/rest';
import './shared-server-b7e48788.js';

async function GET({ url }) {
  let query = url.searchParams;
  const domain = query.get("domain");
  const username = query.get("username");
  if (domain) {
    let domains = await DomainInfo(domain);
    if (domains.error)
      return json(domains, 404);
    else {
      return json(domains, 200);
    }
  } else if (username) {
    return json(await ListDomains(username), 200);
  } else {
    return json({ error: "No domain or username provided" }, 400);
  }
}

export { GET };
//# sourceMappingURL=_server-38d04d6c.js.map
