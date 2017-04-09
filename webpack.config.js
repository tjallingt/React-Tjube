/* eslint import/no-extraneous-dependencies: 0 */

const path = require('path');
// const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	entry: {
		player: './src/player.jsx',
		remote: './src/remote.jsx',
	},
	output: {
		path: path.join(__dirname, 'build'),
		publicPath: '/',
		filename: '[name].js',
	},
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				use: 'babel-loader', // somehow use ["es2015", { modules: false }] in production only...
				include: path.join(__dirname, 'src'),
			},
			{
				test: /\.css$/,
				use: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: [
						{
							loader: 'css-loader',
							options: {
								modules: true,
								importLoaders: 1,
								localIdentName: '[name]__[local]___[hash:base64:5]',
							},
						},
						'postcss-loader',
					],
				}),
			},
		],
	},
	plugins: [
		new ExtractTextPlugin({
			filename: '[name].css',
			allChunks: true,
		}),
	],
	resolve: {
		extensions: ['.js', '.jsx'],
		enforceExtension: false,
	},
};