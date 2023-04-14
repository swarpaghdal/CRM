
const mongoose = require('mongoose')

const adminschema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true
    },

    
    role: {
        type: String,
        required: true
    },

    password: {
        type: String,
        required: true
    }
})

const admin = mongoose.model('admin',adminschema)

module.exports = admin