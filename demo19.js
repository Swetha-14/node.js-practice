var fs = require('fs');
var readme = fs.readFileSync('readme1.txt', 'utf-8'); //Synchronous Programming
console.log(readme);
fs.writeFileSync('writeme1.txt', readme);