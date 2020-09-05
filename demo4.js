"use strict" // will not allow variable hoisting or clumsy things
//regular function
function sayHi(){
    console.log('hi');
}

sayHi();


// function expression | anonymous function

var sayBye = function(x){
    console.log('Bye ' + x);
}

sayBye("Swetha");


// function exxpression can be passed as a paramter in another function
function callFunction(func){
    func("Alex");
}

callFunction(sayBye);