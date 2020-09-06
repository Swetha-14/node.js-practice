var express = require('express');
var app = express();
app.set('view engine', 'ejs');

app.get('/', function(req, resp){
    resp.render('profile');
});

app.get('/profile/:name', function(req, resp){
    resp.render('profile', {person: req.params.name});
});



app.listen(3000);

