const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
    title: String,
    authour: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    message: String
    
},{
    timestamps:true
});
const Post = mongoose.model("Post",PostSchema);
module.exports = { Post }