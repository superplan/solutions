// load module to perform file-system operations
var fs = require("fs");
var pathDir = process.argv[2];
var fileExt = process.argv[3];

fs.readdir(pathDir, doneReading);

function doneReading(err, data) {
    if (err) {
        console.log("error while reading");
        console.log(err);
    } else {
        var outFiles = data.filter(filesWithExt);
        for (var i = 0; i < outFiles.length; i++) {
            console.log(outFiles[i]);
        }
    }
}

function filesWithExt(val) {
    var tmp = val.split(".");
    var ending = tmp[tmp.length - 1];
    return ending == fileExt && tmp.length > 1;
}
