const mongoose = require("mongoose");

const ThreadSchema = new mongoose.Schema({
    message:String,
    author: String,
    post:String //link to the original post
}) ;
module.exports = mongoose.model("quotes",ThreadSchema);