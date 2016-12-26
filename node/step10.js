// Load Libraries
var http = require("http");
var map = require('through2-map');

// Evaluate input parameters
var port = process.argv[2];

// Set up server
var server = http.createServer(listener);
server.listen(port);


//--------------------------------------------
function listener(req, res) {

    req.pipe(map(function(chunk) {
        return chunk.toString().toUpperCase();
    })).pipe(res);
}
