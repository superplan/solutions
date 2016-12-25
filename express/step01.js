// Get packages
var express = require('express');
var morgan = require('morgan');

//Log Arguments
for (var i = 2; i < process.argv.length; i++){
    var iNr = i-1;
    console.log("Arg "+iNr+": " +process.argv[i] + "\n");
}
// Invoke App
var app = express();

//Logger
app.use(morgan());

//Handle requests
app.get('/home', function(req, res) {
  res.end('Hello World!öö');
});

//Listen on port
// app.listen(process.argv[2]);
app.listen(process.env.PORT, process.env.IP);