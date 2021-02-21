const mongoose = require("mongoose");

const ThreadSchema = new mongoose.Schema({
    messages: [{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Message'
    }],
    users: [{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    }]
}) ;
const Thread =  mongoose.model("Thread", ThreadSchema);
module.exports = { Thread }