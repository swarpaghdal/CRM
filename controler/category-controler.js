
const { response } = require('express')
const category = require('../model/catogery')

module.exports.addcat = function(req,res){
    return res.render('addcat')
}

module.exports.addcatt = async(req,res )=>{
    let addcat = await category.create(req.body)
    if (addcat) {
        return res.redirect('back')
    }
    console.log('cannot insert data')
    return res.redirect('back')
}

module.exports.viewcat = async (req,res) =>{
    let viewcat = await category.find({})
    if (viewcat) {

       return res.render('viewcat',{
            data : viewcat
        })
    }
    console.log('cannot find cate')
    return res.redirect('back') 

}