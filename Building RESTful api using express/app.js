const express = require('express')      //This will return function express()
const app = express()

//Methods of app or express()

//app.get(url,route-handler/callback-function)
app.get('/',(req,res)=>{
    res.send("Hello world")
})


//Another route 
app.get('/api/courses',(req,res)=>{
    res.send([1,2,4,5])
})


//To read environment vairable 
const port = process.env.PORT || 3000
//To listen application
// app.listen(port,callback-function)
app.listen(port,()=>console.log(`listening on port: ${port}`))

