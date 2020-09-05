var http = require('http');

var server = http.createServer(function(req, resp){
    resp.writeHead(200, {'Content-Type' : 'text/plain'}); //Header
    resp.end('Hello World'); //Body
});
server.listen(3000, '127.0.0.1');
console.log('Sever listening !');