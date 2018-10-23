var fs = require('fs');
var path = require('./PathMap').path;
function getFilePath() {
	var out = {};
	out.sass = [];
	path.forEach(obj => {
		obj.inputPath.forEach(dirNname => {
			var fileNames = fs.readdirSync(dirNname);
			fileNames.forEach(fileName => {
				if(obj.type == 'js'){
					out[obj.outputPath+fileName.split('.')[0]] = dirNname + fileName;
				} else {
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