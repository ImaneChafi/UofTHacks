const mongoose = require('mongoose')

const mongoURI = process.env.MONGODB_URI || "mongodb+srv://kyoji:goto@cluster0.e4o4z.mongodb.net/Hacks?retryWrites=true&w=majority"

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })

module.exports = { mongoose }