// load module to perform file-system operations
var fs = require("fs");

var buf = fs.readFile(process.argv[2], 'utf8', doneReading);

function doneReading(err, data) {
    if (err) return console.log("error while reading");
    else {
        // console.log("file read");
        return console.log(data.split("\n").length - 1);
    }
}
