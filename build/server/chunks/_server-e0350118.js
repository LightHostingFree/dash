import { r as redirect } from './index-9b9a1ed0.js';
import './sentry-release-injection-file-d6d76abc.js';

async function GET({ cookies }) {
  await cookies.set("jwt", "", {
    httpOnly: true,
    path: "/",
    maxAge: 0
  });
  throw redirect(303, "/");
}

export { GET };
//# sourceMappingURL=_server-e0350118.js.map
