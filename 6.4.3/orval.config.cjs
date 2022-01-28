module.exports = {
	browser: {
		input: '../swagger.yml',
		output: {
			mode: 'tags-split',
			target: 'src/browser.ts',
			schemas: 'src/model',
			client: 'react-query',
			override: {
				mutator: {
					path: './request.ts',
					name: 'request',
				}
			}
		},
	},
};
