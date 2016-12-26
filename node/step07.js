// load module to perform file-system operations
var http = require("http");

// eliminate first two arguments
process.argv.shift()
process.argv.shift()


var out = [];
var globalCounter = 0;

for (var i in process.argv) {
    argCallback(i);
}




//------------------------------------------------
function argCallback(counter) {
    var url = process.argv[counter];
    // console.log(counter);
    // console.log(url);
    http.get(url, function(response) {

        var outStr = "";

        // https://nodejs.org/api/http.html#http_http_get_options_callback
        if (response.statusCode !== 200) {
            console.log(response.statusCode);
            return;
        }
        else {
            response.setEncoding("utf8");
            response.on("data", respDatCallback);
            response.on("end", respEndCallback);
        }

        function respDatCallback(data) {
            outStr += data;
        }

        function respEndCallback(data) {
            // console.log(outStr.length);
            // console.log(outStr);
            // console.log("-------------");
            out[counter] = outStr;
            globalCounter++;
            // console.log(counter);
            // console.log(globalCounter);

            if (globalCounter >= 3) {
                for (var bla = 0; bla < out.length; bla++) {
                    // console.log("###")
                    console.log(out[bla]);
                }
            }
        }
    });
}
