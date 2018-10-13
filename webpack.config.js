
var path = require('path');
// //var GetFilePath = require('./GetFilePath').getFilePath();
// var input = { 'static/default/js/util': './app_util/js/util.js',
// 'static/default/js/index': './app_main/js/index.js',
// 'static/default/js/interaction': './app_main/js/interaction.js',
// 'sass': ['./app_util/scss/pages/product.scss','./app_main/scss/pages/app.scss'] }
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
			},
			{
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            }
		]
	}
	
};

