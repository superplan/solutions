// Get packages
var express = require('express');
var morgan = require('morgan');
var fs = require('fs');

//Arguments
for (var i = 2; i < process.argv.length; i++){
    var iNr = i-1;
    console.log("Arg "+iNr+": " +process.argv[i] + "\n");
}
var myPort = process.argv[2];
var myFile = process.argv[3];

// Invoke App
var app = express();

//Logger
app.use(morgan('dev'));

//Handle requests
app.get('/books', function(req, res){
    
    var buf = fs.readFileSync(myFile);
    var obj = JSON.parse(buf);
    res.json(obj);
});

//Exercise
app.listen(myPort);
