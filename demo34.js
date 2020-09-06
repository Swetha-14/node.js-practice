var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, resp){
    resp.writeHead(200, {'Content-Type': 'application/json'});
    var myObj = {
        name: 'Swetha',
        job: 'Developer',
        age: '19'
    };
    resp.end(JSON.stringify(myObj));
})

/*
var server = http.createServer(function(req, resp){
    resp.writeHead(200, {'Content-Type': 'application/json'});
    var myObj = [{
        name: 'Swetha',
        job: 'Developer',
        age: 19
    },
    {
        name: 'Nivetha',
        job: 'Developer',
        age: 29
    }];
    resp.end(JSON.stringify(myObj));
})

*/
server.listen(3000, '127.0.0.1');
console.log('Server is running !');