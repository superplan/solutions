// Load Libraries
var http = require("http");
var url = require('url');
var strftime = require("strftime");

// Evaluate input parameters
var port = process.argv[2];

// Set up server
var server = http.createServer(listener);
server.listen(port);


//--------------------------------------------
function listener(req, res) {

    // Set content-Type
    res.writeHead(200, {
        'Content-Type': 'application/json'
    });

    // Parse url
    var myUrl = url.parse(req.url, true);

    // Time format
    var myDate = new Date(myUrl.query.iso);
    var dateFormated = {};

    // Route the requests
    if (myUrl.pathname == '/api/parsetime') {

        dateFormated["hour"] = parseInt(strftime("%H", myDate), 10);
        dateFormated["minute"] = parseInt(strftime("%M", myDate), 10);
        dateFormated["second"] = parseInt(strftime("%S", myDate), 10);
    }

    if (myUrl.pathname == '/api/unixtime') {

        var epochSeconds = strftime("%s", myDate);
        var milliSeconds = strftime("%L", myDate);
        dateFormated["unixtime"] = parseInt(epochSeconds + milliSeconds, 10);
    }

    // Write response
    res.write(JSON.stringify(dateFormated));
    req.pipe(res);

}
