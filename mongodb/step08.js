var mongo = require('mongodb').MongoClient;

var argAge = process.argv[2];
var dataBase = 'learnyoumongo';
var collName = 'parrots';

var selector = {
    age: {$gt: +argAge}
};

var url = 'mongodb://localhost:27017/' + dataBase;

mongo.connect(url, function(err, db) {
  if (err) throw err;
  var coll = db.collection(collName);
  
  coll.count(selector, function(err, data) {
    if (err) throw err;
    // console.log("Selection erfolgreich!");
    console.log(data);
    db.close();
    });
    
});
