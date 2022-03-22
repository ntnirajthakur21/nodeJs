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




// Update Document
const updateDoc = async (id,value) =>{
    const findDoc = await CourseModel.findByIdAndUpdate(id,value,{new:true})
    if(!findDoc) return console.log("Error while updating .....")
    console.log("Updated sucessfully....")
}




updateDoc("623825607237e4b59cfaa0c9", {
    name:"New Name",
    author:"Suman"
})