var mongo = require('mongodb').MongoClient;

var url = 'mongodb://localhost:27017/learnyoumongo';
var obj = {
  firstName: process.argv[2]
, lastName: process.argv[3]
};

mongo.connect(url, function(err, db) {
  if (err) throw err;
  var coll = db.collection('docs');
  coll.insert(obj, function(err, data) {
    if (err) throw err;
    console.log(JSON.stringify(obj));
    db.close();
    });
});
