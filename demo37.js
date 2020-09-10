var express = require('express');
var bodyParser = require('body-parser');

var app = express();
var urlencodedParser = bodyParser.urlencoded({extended: false});

app.set('view engine', 'ejs');
app.use('/assets', express.static('assets'));

app.get('/', function(req, resp){
    resp.render('index');
});

app.get('/contact', function(req, resp){
    resp.render('contact');
});

app.post('/contact',urlencodedParser, function(req, resp){
    // console.log(req.query);
    console.log(req.body);
    resp.render('contact-success',{
        data: req.body
    });
});

app.get('/profile/:name', function(req, resp){
    var data = { 
        age:19,
        job: 'Developer',
        hobbies:['Reading', 'Travelling', 'Cycling']
    };
    resp.render('profile', {
        'person': req.params.name,
        'data': data
    });
});


app.listen(3000);

