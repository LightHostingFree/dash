import jsonwebtoken from 'jsonwebtoken';
import { b as private_env } from './shared-server-b7e48788.js';
import './sentry-release-injection-file-d6d76abc.js';

const { verify, sign } = jsonwebtoken;
function getJWT(jwt) {
  let response = verify(jwt, private_env.JWT_SECRET, (err, response2) => {
    if (err) {
      return null;
    }
    return response2;
  });
  return response || null;
}
function createJWT(data, secret = private_env.JWT_SECRET, options = {}) {
  return sign(data, secret, options);
}

export { createJWT as c, getJWT as g };
//# sourceMappingURL=jwt-c2f5353d.js.map
