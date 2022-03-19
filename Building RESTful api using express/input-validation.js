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

 // Define schema for validation
 const schema = Joi.object({
    course: Joi.string()
        .min(3)
        .max(30)
        .required(),
})

// Add new course using post method
app.post('/api/course',(req,res)=>{

    // To call vallidation
    const vlidateResult =  schema.validate(req.body)

    if(vlidateResult.error){
        // 400 bad request
        res.status(400).send(vlidateResult.error.details[0].message)
        return;
    }

    const course = {
        id: courses.length + 1,
        course: req.body.course
    }
    courses.push(course)

    res.send(course)
    console.table(courses)
})


// Starting server
app.listen(3000,()=>console.log("Server started on port 3000"))