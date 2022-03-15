//Using node we can get information about operationg system

const os = require('os')

const totalMemory = os.totalmem() //Returns total memory in system
const freeMemory = os.freemem(); //Returns free momory in system

console.log(`Total Memory is ${totalMemory}`)
console.log(`Free Memory is ${freeMemory}`)