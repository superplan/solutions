var out = sumArgs()
console.log(out)



function sumArgs(){
    var myArgs = process.argv
    var out = 0
    for (var i = 2; i < myArgs.length; i++){
        var tmp = toNum(myArgs[i])
        if (typeof(tmp) == "number") out += tmp
        else return [typeof(toNum(myArgs[i])), toNum(myArgs[i]), myArgs[i]]
    }
    return out;
}

function toNum(arg){
    var dim = arg.length
    var out = 0;
    for (var i = 0; i < dim; i++){
        var tmp = arg[i].charCodeAt(0)
        if (48 <= tmp && tmp <= 57) out += (tmp - 48) * exp(10, (dim-i-1));
        else return undefined
    }
    return out
}

function exp(num, ex){
  var out = 1;
  for(var i = 0; i< ex; i++){
    out *= num;
  }
  return out;
}