import { r as registerSite, g as generateLink } from './plausible-a57c7257.js';
import { j as json } from './index-9b9a1ed0.js';
import { g as getJWT } from './jwt-c2f5353d.js';
import { D as DomainInfo } from './api-f8fcb1e8.js';
import './sentry-release-injection-file-d6d76abc.js';
import './shared-server-b7e48788.js';
import 'jsonwebtoken';
import '@octokit/rest';

async function GET({ params, cookies }) {
  let jwt = cookies.get("jwt");
  let session = await getJWT(jwt);
  if (!session)
    return json({ error: "User not signed in" }, 400);
  let domain = params.domain;
  if (!domain)
    return json({ error: "No domain provided" }, 400);
  let domainInfo = await DomainInfo(domain);
  if (!domainInfo)
    return json({ error: "No domain found" }, 400);
  if (domainInfo.error)
    return json({ error: domainInfo.error }, 400);
  console.log(domainInfo);
  if (domainInfo.owner.username.toLowerCase() !== session.user.login.toLowerCase())
    return json({ error: "You do not own this domain" }, 400);
  await registerSite(domain);
  let result2 = await generateLink(domain);
  if (!result2 || !result2.url)
    return json({ error: "Failed to generate link" }, 400);
  return json({ success: true, url: result2.url });
}

export { GET };
//# sourceMappingURL=_server-539b4c82.js.map
