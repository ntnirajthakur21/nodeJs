const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/playground')
.then(()=>console.log("Connected to MongoDb..."))
.catch((err)=>console.log("Can't connect to MongoDb .." + err))

const courseSchema= new mongoose.Schema({
    name: String,
    author:String,
    tags:[String],
    date:{type:Date, default:Date.now},
    isPublished: Boolean
})

const Course = mongoose.model('Course', courseSchema)

const course = new Course({
    name:'Node js course',
    author:'Niraj',
    tags:['node','backend'],
    isPublished: true
})