
const mongoose = require('mongoose')

const userchema = mongoose.Schema({
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

const user = mongoose.model('user',userchema)

module.exports = user