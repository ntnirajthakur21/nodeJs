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


// Update course using PUT methpd
app.put('/api/course/:id',(req,res)=>{
    // Lookup id course exist
    const course_exist = courses.find(c=> c.id === parseInt(req.params.id))

    // If not exist, return 404
    if(!course_exist){
        return res.status(404).send("Course not found")
    }

    // Validate
    const vlidateResult =  schema.validate(req.body)

    // If not valid, return 400 -Bad request
    if(vlidateResult.error){
        // 400 bad request
        return res.status(400).send(vlidateResult.error.details[0].message)
    }

    // Update course
    const course = {
        id:courses.length + 1,
        course: req.body.course
    }

    const new_courses = courses.map(c=>{
        if(c.id === parseInt(req.params.id)){
            return {...c, course:req.body.course}
        }
        else return c
    })

    // return the output
    res.send(course)
    console.table(new_courses)

})


// Starting server
app.listen(3000,()=>console.log("Server started on port 3000"))