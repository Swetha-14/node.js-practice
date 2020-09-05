var counter = function(arr){
    return 'There are ' + arr.length + ' elements in this array.'
}

var adder = function(a, b){
    return `The sum of ${a} and ${b} is ${a+b}.`;
}

var pi=3.142;
module.exports.count = counter;
module.exports.add = adder;
module.exports.pi = pi;
