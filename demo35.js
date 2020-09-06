var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, resp){
    console.log('Request was made at' + req.url);
    if(req.url === '/home' || req.url === '/'){
        resp.writeHead(200, {'Content-Type': 'text/html'});
        fs.createReadStream(__dirname + '/index.html').pipe(resp);
    }
});


server.listen(3000, '127.0.0.1');
console.log('Server is running !');

/*

var server = http.createServer(function(req, resp){
    console.log('Request was made at' + req.url);
    resp.writeHead(200, {'Content-Type': 'text/plain'});
    resp.end('This is a sample Index Page');
})


*/
