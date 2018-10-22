var path = require('path');
var pathMap = require('./PathMap');
const SpriteLoaderPlugin = require('svg-sprite-loader/plugin');

module.exports = {
	mode: 'development',
	entry: require('./GetFilePath').getFilePath(pathMap),
	output: {
		filename: '[name].js',
		path: path.resolve(__dirname, 'app_dist')
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				use: ['babel-loader']
			},
			// {
			// 	test: /\.js$/,
			// 	use: ['raw-loader']
			// },
			{
				test: /\.svg$/,
				loader: 'svg-sprite-loader',
				options: {
				  extract: true,
				  spriteFilename: '/static/default/images/icons.svg',
				  runtimeCompat: true
				}
			},
			{
				test: /\.scss$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: 'static/default/css/[name].css',
						}
					},
					{
						loader: 'sass-loader'
					}
				]
			}
		]
	},
	plugins: [
		new SpriteLoaderPlugin()
	]
};

