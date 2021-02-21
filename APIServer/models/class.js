const mongoose = require("mongoose");

const ClassSchema = new mongoose.Schema({
    name: String,
    thread: {
        type:mongoose.Schema.Types.ObjectId,
        ref:'Thread'
    },
    students: [{
        type: mongoose.Schema.Types.ObjectId,
        ref:'User'
    }],
}) ;
const Class = mongoose.model("Class", ClassSchema);
module.exports = { Class }