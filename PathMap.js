var webpackModule = {
	emea: {
		rules: [
			{
				test: /\.js$/,
				use: ['babel-loader']
			},
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
	refapp: {
		rules: [
			{
				test: /\.js$/,
				use: ['babel-loader']
			},
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
	}
}
var path = [
	{
		inputPath: [
			'./app_emea/js/pages/',
			'./app_core/js/pages/'
		],
		outputPath: 'static/default/js/',
		type: 'js'
	},{
		inputPath: [
			'./app_emea/scss/pages/',
			'./app_core/scss/pages/'
		],
		outputPath: 'static/default/css/',
		type: 'sass'
	}
];
module.exports = {
	webpackModule: webpackModule,
	path: path
}

