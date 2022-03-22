// To get data from mongodb
const mongoose = require('mongoose')


// Connection
mongoose.connect('mongodb://localhost:27017/playground')
.then(()=>console.log("Connected to database...."))
.catch(err=>console.log(err))


const courseSchema = new mongoose.Schema({
    name: String,
    author:String,
    tags:[String],
    date:{type:Date, default:Date.now},
    isPublished: Boolean
})


// compiling schema into module
//This will return a class so the first letter of name is capital
const CourseModel = mongoose.model('Course', courseSchema)


// Find all course
const allCourse = async ()=>{
    const datas = await CourseModel.find();
    console.log(datas[0])
}


// Limit course
const limitCourse = async ()=>{
    const datas = await CourseModel.find()
    .limit(2)               //Only find first 2 data
    console.log(datas)
}

// Filter Course
const filterCourse = async ()=>{
    const datas = await CourseModel.find({name:"Master React"})     //will only finds course whose name is : Master React
    console.log(datas)
}

// Short courses
const shortCourses = async ()=>{
    const datas = await CourseModel.find()
    .sort({name:1})             //Short in asc. order by name  ----- 1 = ascending order   -1 = descending order
    console.log(datas)
}

// Select specific properties / select specific column
const selectProperty = async ()=>{
    const datas = await CourseModel.find()
    .select({name:1,author:1})
    console.log(datas)
}
