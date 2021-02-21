'use strict';
const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const UserSchema = new mongoose.Schema({
    email: String,
    password: String,
    fname: String,
    lname: String,
    School: Number, 
    Friends: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }], 
    Class: [{
        type: mongoose.Schema.Types.ObjectId,
        ref:'Class'
    }],
	Feed: [{
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Feed'
	}]
});

UserSchema.pre('save', function(next) {
	const user = this; 

	if (user.isModified('password')) {
		bcrypt.genSalt(10, (err, salt) => {
			bcrypt.hash(user.password, salt, (err, hash) => {
				user.password = hash
				next()
			})
		})
	} else {
		next()
	}
})

UserSchema.statics.findByEmailPassword = function(email, password) {
	const User = this

	return User.findOne({ email: email }).populate('Class').populate('Feed').populate('Friends').then((user) => {
		if (!user) {
			return Promise.reject()
		}
		return new Promise((resolve, reject) => {
			bcrypt.compare(password, user.password, (err, result) => {
				if (result) {
					resolve(user)
				} else {
					reject()
				}
			})
		})
	})
}

const User = mongoose.model("User", UserSchema);

module.exports = { User }