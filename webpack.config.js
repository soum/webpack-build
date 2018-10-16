
var path = require('path');
module.exports = {
	mode: 'development',
	entry: require('./GetFilePath').getFilePath(),
	output: {
		filename: '[name].js',
		path: path.resolve(__dirname, 'app_dist')
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				use: ['babel-loader']
			},
			{
				test: /\.tpl.js$/,
				use: ['raw-loader']
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
	}
	
};

