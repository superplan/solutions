// load module to perform file-system operations
var fs = require("fs");

var buf = fs.readFileSync(process.argv[2]);

//buf = fs.readFileSync('/home/ubuntu/workspace/solutions/step01.js')
var str = buf.toString();
var num = str.split("\n").length;


console.log(num-1);

