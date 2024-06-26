import * as Sentry from '@sentry/sveltekit';
import { sentryHandle, handleErrorWithSentry } from '@sentry/sveltekit';
import './sentry-release-injection-file-d6d76abc.js';

function sequence(...handlers) {
  const length = handlers.length;
  if (!length)
    return ({ event, resolve }) => resolve(event);
  return ({ event, resolve }) => {
    return apply_handle(0, event, {});
    function apply_handle(i, event2, parent_options) {
      const handle2 = handlers[i];
      return handle2({
        event: event2,
        resolve: (event3, options) => {
          const transformPageChunk = async ({ html, done }) => {
            if (options?.transformPageChunk) {
              html = await options.transformPageChunk({ html, done }) ?? "";
            }
            if (parent_options?.transformPageChunk) {
              html = await parent_options.transformPageChunk({ html, done }) ?? "";
            }
            return html;
          };
          const filterSerializedResponseHeaders = parent_options?.filterSerializedResponseHeaders ?? options?.filterSerializedResponseHeaders;
          const preload = parent_options?.preload ?? options?.preload;
          return i < length - 1 ? apply_handle(i + 1, event3, {
            transformPageChunk,
            filterSerializedResponseHeaders,
            preload
          }) : resolve(event3, { transformPageChunk, filterSerializedResponseHeaders, preload });
        }
      });
    }
  };
}
var _global = typeof window !== "undefined" ? window : typeof globalThis !== "undefined" ? globalThis : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
_global["__sentry_sveltekit_output_dir"] = "build";
Sentry.init({
  dsn: "https://e89674b6551f1884ad5ca3cbddf47bbe@o4506898679463936.ingest.us.sentry.io/4506909431300096",
  tracesSampleRate: 1
});
const handle = sequence(sentryHandle());
const handleError = handleErrorWithSentry();

export { handle, handleError };
//# sourceMappingURL=hooks.server-75db2e1f.js.map
