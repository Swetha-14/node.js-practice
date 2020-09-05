// returns an array
var command = process.argv[2];

console.log('Command : ',command);

if(command === 'add'){
    console.log('Add a new note');
}
else if(command === 'list'){
    console.log('List all the notes');
}
else {
    console.log('Command not recognized');
}