var mongo = require('mongodb').MongoClient;

var dataBase = process.argv[2];

var selector = {
    username: "tinatime",
};

var setter = {
    $set: {age: 40}
};

var url = 'mongodb://localhost:27017/' + dataBase;

mongo.connect(url, function(err, db) {
  if (err) throw err;
  var coll = db.collection('users');
  
  coll.update(selector, setter, function(err, data) {
    if (err) throw err;
    console.log("huhu");
    db.close();
    });
    
});
