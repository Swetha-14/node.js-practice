var temp = require('./demo14');

console.log(temp.count(['Swetha', 'Alex', 'Rahul']));
console.log(temp.add(5, 6));
console.log(temp.add(5, temp.pi));
console.group('Result :', temp.addNote());