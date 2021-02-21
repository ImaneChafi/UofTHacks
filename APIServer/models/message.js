const mongoose = require("mongoose");

const MessageSchema = new mongoose.Schema({
    authour: {
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    content: String
},{
    timestamps: true
}) ;
const Message = mongoose.model("Message", MessageSchema);
module.exports = { Message }