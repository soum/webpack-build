var path = require('path');
var pathMap = require('./PathMap');
const SpriteLoaderPlugin = require('svg-sprite-loader/plugin');

module.exports = env => {
	console.log(env.region, env.instance);
	if(env.region !== 'refapp'){
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
	}else {
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

