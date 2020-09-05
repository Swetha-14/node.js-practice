var fs = require('fs');
const { Console } = require('console');

// Asynchronous Programming
var readme = fs.readFile('readme1.txt', 'utf-8', function(err, data){
    console.log(data);
});

console.log('Finished Program !')