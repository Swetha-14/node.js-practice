var express = require('express');
var app = express();

app.get('/', function(req, resp){
    resp.sendFile(__dirname + '/index.html');
});

app.get('/contact', function(req, resp){
    resp.send('This is the Contact Page !');
});

app.get('/profile/:id', function(req, resp){
    resp.send('You requested ' + req.params.id);
});


app.listen(3000);

