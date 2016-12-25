var mongo = require('mongodb').MongoClient;

var dataBase = process.argv[2];
var collName = process.argv[3];
var argID = process.argv[4];

var selector = {
    _id: argID
};


var url = 'mongodb://localhost:27017/' + dataBase;

mongo.connect(url, function(err, db) {
  if (err) throw err;
  var coll = db.collection(collName);
  
  coll.remove(selector, function(err, data) {
    if (err) throw err;
    console.log("huhu");
    db.close();
    });
    
});
