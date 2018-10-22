var fs = require('fs');
function getFilePath(path) {
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

//console.log(getFilePath()); // eslint-disable-line no-console