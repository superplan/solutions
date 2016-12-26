var fs = require("fs");

module.exports = function(dirName, fileExt, cb) {

    fs.readdir(dirName, doneReading);

    function doneReading(err, data) {
        if (err) {
            return cb(err, "");
        } else {
            var filtered = data.filter(filesWithExt);
            return cb(null, filtered);
        }
    }

    function filesWithExt(val) {
        var tmp = val.split(".");
        var ending = tmp[tmp.length - 1];
        return ending == fileExt && tmp.length > 1;
    }

}
