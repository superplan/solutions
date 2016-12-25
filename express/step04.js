// Get packages
var express = require('express');
var morgan = require('morgan');
var bodyparser = require("body-parser");

//Arguments
for (var i = 2; i < process.argv.length; i++){
    var iNr = i-1;
    console.log("Arg "+iNr+": " +process.argv[i] + "\n");
}
var myPort = process.argv[2] || process.env.PORT;

// Invoke App
var app = express();

//Logger
app.use(morgan('dev'));

//Parser
app.use(bodyparser.urlencoded({extended: false}));

//Handle requests
app.post('/form', function(req, res){
    
    if (!req.body) {
        return res.sendStatus(400);
    }
    res.send(req.body.str.split('').reverse().join(''));
});

//Exercise
// console.log("listening on port " + myPort);
app.listen(myPort);

//Server test
// app.listen(process.env.PORT, process.env.IP);