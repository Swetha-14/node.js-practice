
const request = require('request');
const url = "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY"; // url to live REST API on the web

request(url, {json:true}, (err, res, data) => { // call the REST API, get data, error, completed notification
    console.log(data.url); // print the data retrieved from the live REST API hosted on the web
    console.log(data.explanation);
});




