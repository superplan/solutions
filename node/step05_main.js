var printList = require('./step05_module.js')

function callback(err, data) {
    if (err) return console.error(err);

    data.forEach(function(i) {
        console.log(i)
    });
}

printList(process.argv[2], process.argv[3], callback);
