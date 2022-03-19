const express = require('express')
const app = express()

const courses = [
    {id:1,course:"Course1"},
    {id:2,course:"Course2"},
    {id:3,course:"Course3"},
    {id:4,course:"Course4"},
    {id:5,course:"Course5"},
]

app.get('/api/course',(req,res)=>res.send(courses))

app.get('/api/course/:id',(req,res)=>{
    const course = courses.find(c=> c.id === parseInt(req.params.id))
    if(!course){    //404
        res.status(404).send("Course not found")
    }else{
        res.send(course)
    }
})


app.listen(3000,()=>console.log("App started on port 3000"))