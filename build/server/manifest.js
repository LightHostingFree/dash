const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","logo.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.059aa691.js","app":"_app/immutable/entry/app.71c37998.js","imports":["_app/immutable/entry/start.059aa691.js","_app/immutable/chunks/index.c676ab83.js","_app/immutable/chunks/singletons.1250e275.js","_app/immutable/chunks/index.0d35ad8e.js","_app/immutable/chunks/paths.6e21c0d1.js","_app/immutable/entry/app.71c37998.js","_app/immutable/chunks/stores.ade05507.js","_app/immutable/chunks/singletons.1250e275.js","_app/immutable/chunks/index.0d35ad8e.js","_app/immutable/chunks/index.c676ab83.js","_app/immutable/chunks/paths.6e21c0d1.js","_app/immutable/chunks/exports.b48acbb0.js","_app/immutable/chunks/sentry-release-injection-file.7de3efab.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./chunks/0-c2a89bd7.js')),
			__memo(() => import('./chunks/1-0ca40d74.js')),
			__memo(() => import('./chunks/2-e2ca4d77.js')),
			__memo(() => import('./chunks/3-095364ba.js')),
			__memo(() => import('./chunks/4-59bbc05b.js')),
			__memo(() => import('./chunks/5-7af1dfd0.js')),
			__memo(() => import('./chunks/6-2ec496a3.js')),
			__memo(() => import('./chunks/7-d914a03f.js')),
			__memo(() => import('./chunks/8-5fb8077b.js')),
			__memo(() => import('./chunks/9-0e421090.js')),
			__memo(() => import('./chunks/10-8794df52.js')),
			__memo(() => import('./chunks/11-ae68ff9c.js')),
			__memo(() => import('./chunks/12-47dfc45a.js')),
			__memo(() => import('./chunks/13-f8574e6b.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/api/domains",
				pattern: /^\/api\/domains\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./chunks/_server-38d04d6c.js'))
			},
			{
				id: "/api/domains/list/[user]",
				pattern: /^\/api\/domains\/list\/([^/]+?)\/?$/,
				params: [{"name":"user","optional":false,"rest":false,"chained":false}],
				page: null,
				endpoint: __memo(() => import('./chunks/_server-f96ab7cb.js'))
			},
			{
				id: "/api/domains/[domain]/analytics",
				pattern: /^\/api\/domains\/([^/]+?)\/analytics\/?$/,
				params: [{"name":"domain","optional":false,"rest":false,"chained":false}],
				page: null,
				endpoint: __memo(() => import('./chunks/_server-539b4c82.js'))
			},
			{
				id: "/api/domains/[domain]/check",
				pattern: /^\/api\/domains\/([^/]+?)\/check\/?$/,
				params: [{"name":"domain","optional":false,"rest":false,"chained":false}],
				page: null,
				endpoint: __memo(() => import('./chunks/_server-d6289ad7.js'))
			},
			{
				id: "/api/domains/[domain]/delete",
				pattern: /^\/api\/domains\/([^/]+?)\/delete\/?$/,
				params: [{"name":"domain","optional":false,"rest":false,"chained":false}],
				page: null,
				endpoint: __memo(() => import('./chunks/_server-110b304b.js'))
			},
			{
				id: "/api/domains/[domain]/edit",
				pattern: /^\/api\/domains\/([^/]+?)\/edit\/?$/,
				params: [{"name":"domain","optional":false,"rest":false,"chained":false}],
				page: null,
				endpoint: __memo(() => import('./chunks/_server-c4e30c2d.js'))
			},
			{
				id: "/api/domains/[domain]/get",
				pattern: /^\/api\/domains\/([^/]+?)\/get\/?$/,
				params: [{"name":"domain","optional":false,"rest":false,"chained":false}],
				page: null,
				endpoint: __memo(() => import('./chunks/_server-217c7f27.js'))
			},
			{
				id: "/api/domains/[domain]/hosting",
				pattern: /^\/api\/domains\/([^/]+?)\/hosting\/?$/,
				params: [{"name":"domain","optional":false,"rest":false,"chained":false}],
				page: null,
				endpoint: __memo(() => import('./chunks/_server-47243cf5.js'))
			},
			{
				id: "/api/domains/[domain]/host",
				pattern: /^\/api\/domains\/([^/]+?)\/host\/?$/,
				params: [{"name":"domain","optional":false,"rest":false,"chained":false}],
				page: null,
				endpoint: __memo(() => import('./chunks/_server-3ea3bf9c.js'))
			},
			{
				id: "/api/domains/[domain]/register",
				pattern: /^\/api\/domains\/([^/]+?)\/register\/?$/,
				params: [{"name":"domain","optional":false,"rest":false,"chained":false}],
				page: null,
				endpoint: __memo(() => import('./chunks/_server-e482a5a2.js'))
			},
			{
				id: "/api/fork",
				pattern: /^\/api\/fork\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./chunks/_server-3faa670a.js'))
			},
			{
				id: "/api/maintainers",
				pattern: /^\/api\/maintainers\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./chunks/_server-fc961225.js'))
			},
			{
				id: "/api/maintainers/list/[user]",
				pattern: /^\/api\/maintainers\/list\/([^/]+?)\/?$/,
				params: [{"name":"user","optional":false,"rest":false,"chained":false}],
				page: null,
				endpoint: __memo(() => import('./chunks/_server-9bdea7b0.js'))
			},
			{
				id: "/api/maintainers/[domain]/analytics",
				pattern: /^\/api\/maintainers\/([^/]+?)\/analytics\/?$/,
				params: [{"name":"domain","optional":false,"rest":false,"chained":false}],
				page: null,
				endpoint: __memo(() => import('./chunks/_server-d5356e8d.js'))
			},
			{
				id: "/api/maintainers/[domain]/check",
				pattern: /^\/api\/maintainers\/([^/]+?)\/check\/?$/,
				params: [{"name":"domain","optional":false,"rest":false,"chained":false}],
				page: null,
				endpoint: __memo(() => import('./chunks/_server-e84f1991.js'))
			},
			{
				id: "/api/maintainers/[domain]/delete",
				pattern: /^\/api\/maintainers\/([^/]+?)\/delete\/?$/,
				params: [{"name":"domain","optional":false,"rest":false,"chained":false}],
				page: null,
				endpoint: __memo(() => import('./chunks/_server-f3373cf1.js'))
			},
			{
				id: "/api/maintainers/[domain]/edit",
				pattern: /^\/api\/maintainers\/([^/]+?)\/edit\/?$/,
				params: [{"name":"domain","optional":false,"rest":false,"chained":false}],
				page: null,
				endpoint: __memo(() => import('./chunks/_server-a0105938.js'))
			},
			{
				id: "/api/maintainers/[domain]/get",
				pattern: /^\/api\/maintainers\/([^/]+?)\/get\/?$/,
				params: [{"name":"domain","optional":false,"rest":false,"chained":false}],
				page: null,
				endpoint: __memo(() => import('./chunks/_server-2cceeb7c.js'))
			},
			{
				id: "/api/maintainers/[domain]/hosting",
				pattern: /^\/api\/maintainers\/([^/]+?)\/hosting\/?$/,
				params: [{"name":"domain","optional":false,"rest":false,"chained":false}],
				page: null,
				endpoint: __memo(() => import('./chunks/_server-d2b972f0.js'))
			},
			{
				id: "/api/maintainers/[domain]/host",
				pattern: /^\/api\/maintainers\/([^/]+?)\/host\/?$/,
				params: [{"name":"domain","optional":false,"rest":false,"chained":false}],
				page: null,
				endpoint: __memo(() => import('./chunks/_server-2f145604.js'))
			},
			{
				id: "/api/maintainers/[domain]/register",
				pattern: /^\/api\/maintainers\/([^/]+?)\/register\/?$/,
				params: [{"name":"domain","optional":false,"rest":false,"chained":false}],
				page: null,
				endpoint: __memo(() => import('./chunks/_server-e0c3d8f8.js'))
			},
			{
				id: "/api/stats",
				pattern: /^\/api\/stats\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./chunks/_server-d16aaf85.js'))
			},
			{
				id: "/domains",
				pattern: /^\/domains\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/domains/[domain]",
				pattern: /^\/domains\/([^/]+?)\/?$/,
				params: [{"name":"domain","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/domains/[domain]/delete",
				pattern: /^\/domains\/([^/]+?)\/delete\/?$/,
				params: [{"name":"domain","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/domains/[domain]/edit",
				pattern: /^\/domains\/([^/]+?)\/edit\/?$/,
				params: [{"name":"domain","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/login",
				pattern: /^\/login\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/login/authorize",
				pattern: /^\/login\/authorize\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./chunks/_server-1d2be16a.js'))
			},
			{
				id: "/login/callback",
				pattern: /^\/login\/callback\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./chunks/_server-d5937346.js'))
			},
			{
				id: "/login/in",
				pattern: /^\/login\/in\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./chunks/_server-0dda6e24.js'))
			},
			{
				id: "/login/out",
				pattern: /^\/login\/out\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./chunks/_server-e0350118.js'))
			},
			{
				id: "/maintainers",
				pattern: /^\/maintainers\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 8 },
				endpoint: null
			},
			{
				id: "/maintainers/[domain]",
				pattern: /^\/maintainers\/([^/]+?)\/?$/,
				params: [{"name":"domain","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 9 },
				endpoint: null
			},
			{
				id: "/maintainers/[domain]/edit",
				pattern: /^\/maintainers\/([^/]+?)\/edit\/?$/,
				params: [{"name":"domain","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 10 },
				endpoint: null
			},
			{
				id: "/register",
				pattern: /^\/register\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 11 },
				endpoint: null
			},
			{
				id: "/sentry-example",
				pattern: /^\/sentry-example\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 12 },
				endpoint: __memo(() => import('./chunks/_server-e517dc2d.js'))
			},
			{
				id: "/smtp",
				pattern: /^\/smtp\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 13 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();

const prerendered = new Set([]);

export { manifest, prerendered };
//# sourceMappingURL=manifest.js.map
