const mongoose = require("mongoose");

const FeedSchema = new mongoose.Schema({
    posts: [{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Post'
    }],
    users: [{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    }],
    name: String
}) ;
const Feed = mongoose.model("Feed", FeedSchema);
module.exports = { Feed }