// load module to perform file-system operations
var http = require("http");
var url = process.argv[2];
var outStr = "";

http.get(url, httpGetCallback);



function httpGetCallback(response) {
    response.setEncoding("utf8");
    response.on("data", respDatCallback);
    response.on("end", respEndCallback);

    function respDatCallback(data) {
        outStr += data;
    }

    function respEndCallback(data) {
        console.log(outStr.length);
        console.log(outStr);
    }
}
