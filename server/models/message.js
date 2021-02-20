const mongoose = require("mongoose");

const MessageSchema = new mongoose.Schema({
    username:String,
    message:String,
    anonymous:Boolean
}) ;
module.exports = mongoose.model("Message",MessageSchema);