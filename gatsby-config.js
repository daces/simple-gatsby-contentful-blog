module.exports = {
	siteMetadata: {
		title: 'Jason’s Blog Theme — It’s SICK',
		description: `
		  This is a blog theme. The description will be showed in SEO results on pages
		  without their own descriptions.
		`,
		siteUrl: 'https://example.com',
		image: 'https://lengstorf.com/images/jason-lengstorf.jpg',
		author: {
			name: 'Your Name',
			minibio: `
			This bio is shown at the bottom of each blog post. It supports
			<strong>custom HTML</strong> if you’re into that sort of thing.
		  `,
		},
		organization: {
			name: 'Example, Inc.',
			url: 'https://dragan.dev/',
			logo: 'https://lengstorf.com/android-chrome-512x512.png',
		},
		social: {
			twitter: '@jlengstorf',
			fbAppID: '',
		},
		categories: [
			{
				slug: 'test',
				name: 'Test Category',
			},
		],
	},
	plugins: [
		{
			resolve: 'gatsby-source-contentful',
			options: {
				spaceId: 'cljzqi2i776m',
				accessToken: '4vUmNr9QAXmNvnRZw0iX29ce1C_tGDSiTVLgAol0ZEM',
			},
		},
		'gatsby-transformer-remark',
		'gatsby-plugin-react-helmet',
		{
			resolve: `gatsby-plugin-google-gtag`,
			options: {
				// You can add multiple tracking ids and a pageview event will be fired for all of them.
				trackingIds: [
					'UA-195113996-1', // Google Analytics / GA
					'AW-CONVERSION_ID', // Google Ads / Adwords / AW
					'DC-FLOODIGHT_ID', // Marketing Platform advertising products (Display & Video 360, Search Ads 360, and Campaign Manager)
				],
				// This object gets passed directly to the gtag config command
				// This config will be shared across all trackingIds
				gtagConfig: {
					optimize_id: 'OPT_CONTAINER_ID',
					anonymize_ip: true,
					cookie_expires: 0,
				},
				// This object is used for configuration specific to this plugin
				pluginConfig: {
					// Puts tracking script in the head instead of the body
					head: true,
					// Setting this parameter is also optional
					respectDNT: true,
					// Avoids sending pageview hits from custom paths
					exclude: ['/preview/**', '/do-not-track/me/too/'],
				},
			},
		},
	],
};
