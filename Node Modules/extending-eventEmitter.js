const EventEmittter = require('events')

class Logger extends EventEmittter{
    // Adding mthods in class
    log(message){
        // Send and HTTP request
        console.log(message)
        //Rise an event
        this.emit('messageLogged',{id:1,name:"hari"})
    }
}

module.exports = Logger