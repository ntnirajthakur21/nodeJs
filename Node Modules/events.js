//Importing events class
const events = require('events')
const emitter = new events();      //Creating new emitter object of events class

// Register an event
emitter.on('Hello',()=>console.log("Hello: event emitted"))

// Register another event
emitter.on('Bye',()=>console.log("Bye : event emitted"))


// Raise an events
emitter.emit('Hello');

// Raise bye events     -- Its like calling a function
emitter.emit('Bye')


//Register an event which reveive arguments
emitter.on('login',args=>console.log(`Login: events called. It's arguments are ${args}`))

//Raise an event with arguments
emitter.emit('login',"I am argument")
emitter.emit('login', {arg1:"Argment1", arg2:"Argument2"})
