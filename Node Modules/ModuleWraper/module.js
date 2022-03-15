//While exporting our all file code is wrapped inside a function which have some arguments

function displayName() {
    console.log("Name")
}

module.exports.displayName = displayName
    //While exporting it wraps all code into function like
    //While exporting a function have arguments list let's print the arguments
console.log(exports)
console.log(require)
console.log(module)
console.log(__filename)
console.log(__dirname)

// (function(exports, require, module, __filename, __dirname) {
//All file code here
// })