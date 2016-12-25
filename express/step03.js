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
var myPath = process.argv[3] || "/home/ubuntu/.nvm/versions/node/v4.1.2/lib/node_modules/expressworks/exercises/jade/templates";

// Invoke App
var app = express();

//Logger
app.use(morgan('dev'));

//Set path
app.set('views', myPath);

//Set view
app.set('view engine', 'jade');

//Handle requests
app.get('/home', function(req, res) {
  res.render('index', {date: new Date().toDateString()});
});


//Exercise
app.listen(myPort);

//Server test
// app.listen(process.env.PORT, process.env.IP);