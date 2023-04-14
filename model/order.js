const multer = require('multer') 

const { ServerDescription } = require('mongodb')
const mongoose = require('mongoose')

const imagepath ='/uplode'

const path =  require('path')



const orderSchema = mongoose.Schema({

    cname :{
        type: String,
        require: true,
    },
    shipping :{
        type: String,
        require: true,
    },
    quntity :{
        type: String,
        require: true,
    },
    product :{
        type: mongoose.Schema.Types.ObjectId,
        ref : 'product',
        require: true,
    },

})


const order = mongoose.model('order',orderSchema)

module.exports = order