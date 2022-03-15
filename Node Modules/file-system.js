// Intraction with files in system
const fs = require('fs');

const files = fs.readdirSync('./'); //Synchronous method to read directory
//This will return an array with list of files in directory


//Asynchronous method to read directory
let path = 'C:/Users/Niraj/OneDrive/Desktop/Node/Node Modules'
fs.readdir(path, (err, files) => {
    if (err) { console.log(err) } else { console.log(files) }
})

// console.log(files)

// Always prefer to use asyncronous over syncronous


//To copy file
const orginal_file = 'C:/Users/Niraj/OneDrive/Desktop/Node/Node Modules/file-system.js';
const desgination = 'C:/Users/Niraj/OneDrive/Desktop/Node/Node Modules/copied-files/file-system-copy.js'
fs.copyFile(orginal_file, '/copied-files/file-system-copy.js', fs.constants.COPYFILE_FICLONE_FORCE, (err) => {
    if (err) { console.log(err) } else { console.log("File copied") }
})