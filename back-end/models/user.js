const mongoose = require('mongoose')


const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: Number }
})

// module.exports = User = mongoose.model("user", userSchema)

const User = mongoose.model("user", userSchema)
module.exports = User