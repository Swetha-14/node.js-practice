const fs = require('fs');
const os = require('os');

var user = os.userInfo();
fs.appendFile('readme1.txt', `Hello  ${user.username}! `, function(){});