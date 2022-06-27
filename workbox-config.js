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
		handler: 'NetworkFirst', // 1

		options: {
		  // Use a custom cache name.
		  cacheName: 'shopCache', // 1

		  expiration: {
			maxEntries: 100,
		  },
		},
	  }],
};

// 2
