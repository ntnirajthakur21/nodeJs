const express = require('express')
const app = express();


//  /api/users/Id-of-user
app.get('/api/user/:id',(req,res)=>{
    res.send(req.params)
})


// To send multiple parameter
app.get('/api/user/:id/:dob',(req,res)=>{
    res.send(req.params)
})


// To read query parameters
app.get('/api/user',(req,res)=>{
    res.send(req.query)
})

app.listen(3000,()=>console.log("Server started on port 3000"))