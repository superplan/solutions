// Get packages
var express = require('express');
var morgan = require('morgan');
var path = require('path');

//Arguments
for (var i = 2; i < process.argv.length; i++){
    var iNr = i-1;
    console.log("Arg "+iNr+": " +process.argv[i] + "\n");
}
var myPort = process.argv[2];
var myMiddleware = process.argv[3];

// Invoke App
var app = express();

//Logger
app.use(morgan('dev'));

//Handle requests
app.use(express.static(myMiddleware || path.join(__dirname, 'public')));

//Exercise
// app.listen(myPort);

//Server test
app.listen(process.env.PORT, process.env.IP);