const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");
const UserSchema = new mongoose.Schema({
    username:String,
    password:String,
    fname:String,
    lname:String, 
    Image: String,
    School: Number, 
    Courses: Number, 
    Friends: [{
        type: String
    }], 
    is_prof: Boolean,
}) ;
UserSchema.plugin(passportLocalMongoose);
module.exports = mongoose.model("User",UserSchema);