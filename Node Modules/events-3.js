const EventEmittter = require('events')
const Logger = require('./extending-eventEmitter')  //This module exports a class
const logger = new Logger()     //Creating new object 

logger.on('messageLogged',args=>console.log(`Listener called`,args))

// Calling methods from Logger class
logger.log('Hello')