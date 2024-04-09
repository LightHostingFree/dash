var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

var sentryReleaseInjectionFile = {};

var hasRequiredSentryReleaseInjectionFile;

function requireSentryReleaseInjectionFile () {
	if (hasRequiredSentryReleaseInjectionFile) return sentryReleaseInjectionFile;
	hasRequiredSentryReleaseInjectionFile = 1;
	var _global = typeof window !== "undefined" ? window : typeof commonjsGlobal !== "undefined" ? commonjsGlobal : typeof self !== "undefined" ? self : {};
	_global.SENTRY_RELEASE = { id: "f9be6a65426a494eb4450b9ab6e21778" };
	
	return sentryReleaseInjectionFile;
}

requireSentryReleaseInjectionFile();
//# sourceMappingURL=sentry-release-injection-file-d6d76abc.js.map
