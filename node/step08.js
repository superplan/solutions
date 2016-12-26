// Load Libraries
var net = require("net");
var strftime = require("strftime");

// Evaluate input parameters
var port = process.argv[2];

// Set up Server
var server = net.createServer(listener);

server.listen(port);

function listener(socket) {

    //Evaluate Date
    var now = new Date();
    var dateFormated = strftime("%Y-%m-%d %H:%M", now);

    // Send Data
    socket.write(dateFormated + "\n");
    socket.end();
}
