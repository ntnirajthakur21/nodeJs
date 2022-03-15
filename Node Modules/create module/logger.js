var url = 'https://mylogger.io/log'

function log(message) {
    // Send HTTP request
    console.log(message);
}


//To use it in outside we have to set exports in module object module.export
module.exports.log = log;


// Let's see what's in module.exports
console.log(module)
    //We will find it exports a function name with key log { log: [Function: log] }