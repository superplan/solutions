var mongo = require('mongodb').MongoClient;

var argSize = process.argv[2];
var dataBase = 'learnyoumongo';
var collName = 'prices';

var match = { $match: { size: argSize}};
var group = { $group: {
      _id: 'id'
    , average: {$avg: '$price'}
}}

var url = 'mongodb://localhost:27017/' + dataBase;

mongo.connect(url, function(err, db) {
  if (err) throw err;
  var coll = db.collection(collName);
  
  coll.aggregate([match, group]).toArray(function(err, res) {
    if (err) throw err;
    // console.log("Selection erfolgreich!");
    var avgNr = res[0].average;
    console.log(Number(avgNr).toFixed(2));
    db.close();
    });
    
});
