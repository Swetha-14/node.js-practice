var promise = new Promise(function(resolve, reject){
    const a=10;
    const b=10;
    if(a==b){
        resolve();
    }
    else {
        reject();
    }
}).then(function(){
    console.log('The numbers are equal !');
}).catch(function(){
    console.log('Error !');
});


var promise = new Promise(function(resolve, reject){
    const a=10;
    const b=10;
    if(a==b){
        resolve(a, b);
    }
    else {
        reject('Failure');
    }
}).then(value => {
    console.log(value);
}).catch(value => {
    console.log(value);
});