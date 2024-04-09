import { b as private_env } from './shared-server-b7e48788.js';
import './sentry-release-injection-file-d6d76abc.js';

async function registerSite(subdomain) {
  let response = await fetch(`${private_env.PLAUSIBLE_API_PATH}/sites`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${private_env.PLAUSIBLE_API_KEY}`
    },
    body: JSON.stringify({
      domain: `${subdomain}.is-cool.me`
    })
  });
  let data = await response.json();
  return data;
}
async function generateLink(subdomain) {
  let response = await fetch(`${private_env.PLAUSIBLE_API_PATH}/sites/shared-links`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${private_env.PLAUSIBLE_API_KEY}`
    },
    body: JSON.stringify({
      site_id: `${subdomain}.is-cool.me`,
      name: "View stats for owner of this domain"
    })
  });
  let data = await response.json();
  return data;
}

export { generateLink as g, registerSite as r };
//# sourceMappingURL=plausible-a57c7257.js.map
