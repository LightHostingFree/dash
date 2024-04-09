import jsonwebtoken from 'jsonwebtoken';
import { r as redirect } from './index-9b9a1ed0.js';
import { b as private_env } from './shared-server-b7e48788.js';
import './sentry-release-injection-file-d6d76abc.js';

const { sign } = jsonwebtoken;
async function GET({ url, cookies }) {
  let query = url.searchParams.get("code");
  if (!query)
    return new Response("The code was not found in the request", { status: 400 });
  let token = await fetch(
    `https://github.com/login/oauth/access_token?client_id=${private_env.GITHUB_CLIENT_ID}&client_secret=${private_env.GITHUB_CLIENT_SECRET}&code=${query}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      }
    }
  ).then((res) => res.json());
  if (!token.access_token)
    return new Response("The access token was not found in the response", { status: 400 });
  let user = await fetch("https://api.github.com/user", {
    headers: {
      Authorization: `token ${token.access_token}`
    }
  }).then((res) => res.json());
  if (user.message === "Bad credentials") {
    return new Response("The generated token was invalid", { status: 400 });
  }
  let emails = await fetch("https://api.github.com/user/emails", {
    headers: {
      Authorization: `token ${token.access_token}`
    }
  }).then((res) => res.json());
  if (emails.message === "Bad credentials") {
    return new Response("The generated token was invalid", { status: 400 });
  }
  let jwt = sign(
    {
      user,
      token: token.access_token,
      emails
    },
    private_env.JWT_SECRET,
    {
      expiresIn: "8h"
    }
  );
  cookies.set("jwt", jwt, {
    httpOnly: true,
    path: "/",
    maxAge: 60 * 60 * 8
  });
  cookies.set("welcome", true, {
    httpOnly: false,
    path: "/",
    maxAge: 60 * 60 * 8
  });
  if (url.searchParams.get("next"))
    throw redirect(303, url.searchParams.get("next"));
  else
    throw redirect(303, "/");
}

export { GET };
//# sourceMappingURL=_server-d5937346.js.map
