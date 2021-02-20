const mongoose = require("mongoose");

const MessageSchema = new mongoose.Schema({
    name:String,
    quote:String
}) ;
module.exports = mongoose.model("quotes",MessageSchema);