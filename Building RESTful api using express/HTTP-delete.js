const express = require('express')
const Joi = require('joi');
const app = express()

// Middleware to read JSON
app.use(express.json())


const courses = [
    {id:1,course:"Course1"},
    {id:2,course:"Course2"},
    {id:3,course:"Course3"},
    {id:4,course:"Course4"},
    {id:5,course:"Course5"},
]

// Delete course using Delete methpd
app.delete('/api/course/:id',(req,res)=>{
    // Lookup id course exist
    const course_exist = courses.find(c=> c.id === parseInt(req.params.id))

    // If not exist, return 404
    if(!course_exist) return res.status(404).send("Course not found")
        

    // Delete course
    const index = courses.indexOf(course_exist)
    courses.splice(index,1)

    
    // return the output
    res.send(course_exist)
    console.table(courses)

})


// Starting server
app.listen(3000,()=>console.log("Server started on port 3000"))