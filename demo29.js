var fs = require('fs');
var myReadStream = fs.createReadStream(__dirname + '/readme1.txt');

myReadStream.on('data', function(chunk){
    console.log('New chunk recieved !');
    console.log(chunk);
});