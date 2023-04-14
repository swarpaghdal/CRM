
const productdb =require('../model/product')

const categorydb = require('../model/catogery')
const { request } = require('express')

module.exports.addproduct =async (req,res)=>{

    let category = await categorydb.find({})
    return res.render('product',{catedata:category})
}

    module.exports.viweproduct = async(req,res) =>{

        let page = 1 
        if (req.query.page) {
            page = req.query.page
        }


        let product = await productdb.find({}).populate('catogery').exec()
        return res.render('viweproduct',{productdata:product})
    }


module.exports.addproductt = async(req,res)=>{

    if (req.file) {

        let imagepath = productdb.imagepath+'/'+req.file.filename

        req.body.image = imagepath
        
    }

     const data = await productdb.create(req.body)
    return res.redirect('back')

}
module.exports.buyNow = (req,res)=>{
    console.log(req.params.id);
}