var fs = require('fs');

var path = [
	{
		inputPath: [
			'./app_util/js/pages/',
			'./app_main/js/pages/'
		],
		outputPath: 'static/default/js/',
		type: 'js'
	},{
		inputPath: [
			'./app_util/scss/pages/',
			'./app_main/scss/pages/'
		],
		outputPath: 'static/default/css/',
		type: 'sass'
	}
];

function getFilePath() {
	var out = {};
	out.sass = [];
	path.forEach(obj => {
		obj.inputPath.forEach(dirNname => {
			var fileNames = fs.readdirSync(dirNname);
			fileNames.forEach(fileName => {
				if(obj.type == 'js'){
					out[obj.outputPath+fileName.split('.')[0]] = dirNname + fileName;
				} else{
					out.sass.push(dirNname + fileName);
				}
				
			});
		});
	});
	return out;
}

module.exports = {
	getFilePath: getFilePath
}

//console.log(getFilePath()); // eslint-disable-line no-console