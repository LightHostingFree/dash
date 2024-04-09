import { g as getJWT } from './jwt-c2f5353d.js';
import { j as json } from './index-9b9a1ed0.js';
import { b as getUser, c as getEmail, E as EditDomain } from './api-f8fcb1e8.js';
import './sentry-release-injection-file-d6d76abc.js';
import 'jsonwebtoken';
import './shared-server-b7e48788.js';
import '@octokit/rest';

async function PATCH({ url, cookies, params }) {
  let jwt = cookies.get("jwt");
  let session = await getJWT(jwt);
  let apiKey;
  let query = url.searchParams;
  if (!session && query.get("key"))
    apiKey = query.get("key");
  else if (!session)
    return json({ error: "No session or api key provided" }, 400);
  else
    apiKey = session.token;
  let user;
  if (session?.user)
    user = session.user;
  else
    user = await getUser(apiKey);
  let username;
  if (session?.user?.login)
    username = session.user.login;
  else
    username = user.login;
  if (!username)
    return json({ error: "Invalid API key." }, 400);
  let email;
  if (session?.emails)
    email = session.emails.find((email2) => email2.primary);
  else
    email = await getEmail(apiKey);
  email = email.email;
  if (!email)
    return json({ error: "No primary email found." }, 400);
  const records = query.get("records");
  const subdomain = params.domain;
  if (!records)
    return json({ error: "Missing records" }, 400);
  const result = await EditDomain(subdomain, username, email, apiKey, records);
  if (result.error)
    return json(result, 400);
  else
    return json(result, 200);
}

export { PATCH };
//# sourceMappingURL=_server-a0105938.js.map
