var counter = function(arr){
    return 'There are ' + arr.length + ' elements in this array.'
}

var adder = function(a, b){
    return `The sum of ${a} and ${b} is ${a+b}.`;
}

var pi = 3.142;

module.exports = {
    count: counter,
    add: adder,
    pi:pi
}

module.exports.addNote = () => {
    console.log('add note');
    return 'New Note';
}

module.exports.Sub = (a, b) => {
    return a-b;
}