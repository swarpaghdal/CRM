const multer = require('multer') 

const { ServerDescription } = require('mongodb')
const mongoose = require('mongoose')

const imagepath ='/uplode'

const path =  require('path')



const productschema = mongoose.Schema({

    name :{
        type: String,
        require: true,
    },

    Description :{
        type: String,
        require: true,
    },

    brand :{
        type: String,
        require: true,
    },

    price :{
        type: String,
        require: true,
    },

    catogery :{
        type: mongoose.Schema.Types.ObjectId,
        ref:'category',
        require: true,
    },

    image :{
        type: String,
        require: true,
    },
})

const storage = multer.diskStorage({
    destination:(req,file,cb) =>{
        cb(null,path.join(__dirname,'..',imagepath))
    },
    filename:(req,file,cb) =>{
        cb(null,file.fieldname+'-'+Date.now())
    }
})

productschema.statics.uplodeimage = multer({storage:storage}).single('image') 

productschema.statics.imagepath = imagepath

const product = mongoose.model('product',productschema)

module.exports = product