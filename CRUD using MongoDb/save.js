const mongoose = require('mongoose')


// Connection to database
mongoose.connect('mongodb://localhost:27017/playground')
.then(()=>console.log("Connected to database...."))
.catch(err=>console.log(err))

// Create schema for course
const courseSchema = new mongoose.Schema({
    name: String,
    author:String,
    tags:[String],
    date:{type:Date, default:Date.now},
    isPublished: Boolean
})

// Compile schema into module
const Course = mongoose.model('Course',courseSchema)

// Create object of model
const newCourse = new Course({
    name:"Master PHP",
    author:"Niraj",
    tags:['php','laravel','backend'],
    isPublished:true
})

// Saving
newCourse.save()
.then(()=>console.log("saved document"))
.catch((err)=>console.log(err))