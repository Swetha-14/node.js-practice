var fs = require('fs');
var myReadStream = fs.createReadStream(__dirname + '/readme1.txt', 'utf-8');

var myWriteStream = fs.createWriteStream(__dirname + '/writeme2.txt');

myReadStream.on('data', function(chunk){
    console.log('New chunk recieved !');
    myWriteStream.write(chunk);
});