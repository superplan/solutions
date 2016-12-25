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

// Invoke App
var app = express();

//Logger
app.use(morgan('dev'));

//Handle requests
var searchQuery = {};
app.get('/search', function(req, res){
    searchQuery['results'] = req.query.results;
    searchQuery['type'] = req.query.type;
    searchQuery['page'] = req.query.page;
    // res.end(JSON.stringify(searchQuery));
    
    var query = req.query;
    res.send(query);
});

//Exercise
app.listen(myPort);

//Server test
// app.listen(process.env.PORT, process.env.IP);