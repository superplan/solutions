// Load Libraries
var http = require("http");
var fs = require("fs");

// Evaluate input parameters
var port = process.argv[2];
var file = process.argv[3];
console.log(file);

// Set up server
var server = http.createServer(listener);
server.listen(port);


//--------------------------------------------
function listener(req, res) {

    // Data handling
    var fstream = fs.createReadStream(file);
    fstream.pipe(res);
}
