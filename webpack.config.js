var path = require('path');
var pathMap = require('./PathMap');
const SpriteLoaderPlugin = require('svg-sprite-loader/plugin');

class RuntimeObject {
	static returnObject(env, outputPath) {
		var obj = { 
			mode: 'development',
			entry: require('./GetFilePath').getFilePath(),
			output: {
				filename: '[name].bundle.js',
				path: path.resolve(__dirname, outputPath)
			},
			module: pathMap.webpackModule[env.region],
			plugins: [
				new SpriteLoaderPlugin()
			]
		};
		return obj;
	}
}

module.exports = env => {
	console.log(env.region);
	if(env.region !== 'refapp'){
		return [
			RuntimeObject.returnObject(env, 'app_dist_'+env.region),
			RuntimeObject.returnObject(env, 'app_dist')
		]
	}else {
		return RuntimeObject.returnObject(env, 'app_dist');
	}
}

