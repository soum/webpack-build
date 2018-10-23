var path = require('path');
var pathMap = require('./PathMap');
const SpriteLoaderPlugin = require('svg-sprite-loader/plugin');

module.exports = env => {
	console.log('region' + env.region);
	switch(env.region){
		case 'emea':
			return [{
				mode: 'development',
				entry: require('./GetFilePath').getFilePath(),
				output: {
					filename: '[name].js',
					path: path.resolve(__dirname, 'app_dist_'+env.region)
				},
				module: pathMap.webpackModule[env.region],
				plugins: [
					new SpriteLoaderPlugin()
				]
			},{
				mode: 'development',
				entry: require('./GetFilePath').getFilePath(),
				output: {
					filename: '[name].js',
					path: path.resolve(__dirname, 'app_dist')
				},
				module: pathMap.webpackModule.refapp,
				plugins: [
					new SpriteLoaderPlugin()
				]
			}]
		break;
		default:
			return {
				mode: 'development',
				entry: require('./GetFilePath').getFilePath(),
				output: {
					filename: '[name].js',
					path: path.resolve(__dirname, 'app_dist')
				},
				module: pathMap.webpackModule.refapp,
				plugins: [
					new SpriteLoaderPlugin()
				]
			}

	}
}

