const mongoose = require("mongoose");

const ClassSchema = new mongoose.Schema({
    name:String,
    school:String, 
    listOfPosts:[{
        type: String
    }],
    students: [{
        type: String
    }],
}) ;
module.exports = mongoose.model("classes",ClassSchema);