var path = require('path');

var webpack = require('webpack');

var packageData = require('./package.json');

var filename = [packageData.name, 'js'];

module.exports = {
	entry: path.resolve(__dirname, packageData.devJS),
	output: {
		path: __dirname,
		filename: packageData.main
	},
	devtool: 'source-map',
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				exclude: /(node_modules)/,
				loader: 'babel',
				query: {
					presets: ['es2015', 'react']
				}
			}
		]
	},
	resolve: {
		extentions: ['', '.js', '.jsx']
	}
};