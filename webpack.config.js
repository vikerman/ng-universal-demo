const ngtools = require('@ngtools/webpack');

module.exports = {
	entry: {
		main: './lib/main.server.js'
	},
	resolve: {
      extensions: ['.js']
    },
	target: 'node',
	output: {
		path: 'dist',
		filename: '[name].js'
	},
}
