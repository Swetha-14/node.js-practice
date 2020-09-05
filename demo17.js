// Referencing system defined module "events"
var events = require('events');

// Initialising the event or the system defined object
var myEmitter = new events.EventEmitter();

// Defining the event
myEmitter.on('someEvent', function(msg){
    console.log(msg);
});

// Raise the event
myEmitter.emit('someEvent', 'This is my custom event emitter!');