var fs = require('fs');
var myReadStream = fs.createReadStream(__dirname + '/readme1.txt', 'utf8');

var myWriteStream = fs.createWriteStream(__dirname + '/writeme2.txt');

myReadStream.pipe(myWriteStream);