var fs = require('fs');

var readme = fs.readFile('readme1.txt', 'utf-8', function(err, data){
    fs.writeFile('writeme1.txt', data, function(){});
});