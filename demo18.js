var events = require('events');
var utile = require('util');

// Function by default is an Object in JavaScript


var Person = function(name){  // Class scope | Function expression | Anonymous Function
    this.name = name; // Properties or Attributes
};

utile.inherits(Person, events.EventEmitter); // OOPS - inheritance

var John = new Person('John'); // Object initialization
var Swetha = new Person('Swetha');
var Alex = new Person('Alex');

var people = [John, Swetha, Alex]; // Create a custom obj collection

people.forEach(function(person){ // custom event handlers registration
    person.on('speak', function(message){
        console.log(person.name + ' said ' + message);
    });
});

console.log(John);
console.log(John.name);
Swetha.emit('speak', 'Hey Guys!'); //Raise or Fire the event