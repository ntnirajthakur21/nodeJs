console.log("Hello") //This is function of global object called windows



//window.console.log("I am from window object") 
//This only works on browser / in node we don't have window object. this will show error

//Instead window we can use global object

globalThis.console.log("Hello") //global is Globa object in node

//but we can't use variables with global object