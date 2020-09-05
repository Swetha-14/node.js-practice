/*
Problem

1.Create a new folder named "Data"
2.Create a new file inside "Data" named "Finance.txt"
3.Open the file and write "Hello World" inside it
4.Create a new folder called "Banking"
5.Create a new file inside "Banking" named "Accounts.txt"
6.Open the "Finance.txt" file, read the data inside it & copy it
7.Paste the data into the "Accounts.txt" file
8.Delete the "Finance.txt" file
9.Delete the "Data" folder

*/

var fs = require('fs');
fs.mkdir('Data', function(){
    fs.writeFile('./Data/Finance.txt', 'Hello World', function(){
        fs.readFile('./Data/Finance.txt', 'utf-8', function(err, data){
            fs.mkdir('Banking', function(){
                fs.writeFile('./Banking/Accounts', data, function(){
                    fs.unlink('./Data/Finance.txt', function(){
                        fs.rmdir('Data', function(){});
                    });
                });
            });
        });
    });
});
