const http = require('http')
// const server = http.createServer();


const server = http.createServer((req,res)=>{
    // console.log(req)
    if(req.url === '/'){
        res.write(`You are on home page`)
        res.end()
        console.log("New connection on home page")
    }

    if(req.url === '/about'){
        res.write("You are on about page")
        res.end()
        console.log("New connectio on about page")
    }
})



// Register on event 
// server.on('connection',()=>console.log("new connection"))
//The event will emit when new  connection occours



// It will start the server on port 3000 and redy to listen an event
server.listen(3000)