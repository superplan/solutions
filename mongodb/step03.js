//Libraries
var mongoClient = require('mongodb').MongoClient;
var assert = require('assert');

//Arguments
var minAge = parseInt(process.argv[2], 10);

//Variables
var url = 'mongodb://localhost:27017/learnyoumongo';

//Access DB
mongoClient.connect(url, function(err, db) {
  assert.equal(null, err);
//   console.log("Connected correctly to server");
  
  var coll = db.collection('parrots');
  
  coll.find({
      'age': { $gt: minAge}
  }).toArray(function(err, docs) {
    assert.equal(err, null);
    // console.log("Found the following records");
    console.log(docs);
  });

  db.close();
});

// //Musterlösung
// var mongo = require('mongodb').MongoClient
// var age = process.argv[2]

// var url = 'mongodb://localhost:27017/learnyoumongo'

// mongo.connect(url, function(err, db) {
//   if (err) throw err
//   var parrots = db.collection('parrots')
//   parrots.find({
//     age: {
//       $gt: +age
//     }
//   }).toArray(function(err, docs) {
//     if (err) throw err
//     console.log(docs)
//     db.close()
//   })
// })
