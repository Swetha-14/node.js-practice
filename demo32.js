var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, resp){
    resp.writeHead(200, {'Content-Type': 'text/plain'});
    var myReadStream = fs.createReadStream(__dirname + '/readme1.txt', 'utf-8');
    myReadStream.pipe(resp);
})

server.listen(3000, '127.0.0.1');
console.log('Server is running !');