const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
    name:String,
    author: String,
    message:String, 
    isAnonymous:String
}) ;
module.exports = mongoose.model("quotes",PostSchema);