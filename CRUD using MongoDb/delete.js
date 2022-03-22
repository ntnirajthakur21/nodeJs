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




// Delete
const deleteDoc = async (id) =>{
    const findDoc = await CourseModel.findByIdAndRemove(id)
    if(!findDoc) return console.log("Error while deleting .....")
    console.log("deleted sucessfully....")
}




deleteDoc("623825607237e4b59cfaa0c9")