module.exports = {
	globDirectory: 'build/',
	globPatterns: [
		'**/*.{json,ico,html,png,txt,js,css}'
	],
	swDest: 'build/sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	],

	// Define runtime caching rules.
	runtimeCaching: [{
		// Match any request that ends with .png, .jpg, .jpeg or .svg.
		urlPattern: '/\.(?:png|jpg|jpeg|svg)$/',

		// Apply a cache-first strategy.
		handler: 'NetworkFirst',

		options: {
		  // Use a custom cache name.
		  cacheName: 'shopCache',

		  expiration: {
			maxEntries: 100,
		  },
		},
	  }],
};
