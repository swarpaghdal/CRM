const { request } = require('express')
const product = require('../model/product')

const usermodel = require('../model/user')
const order = require('../model/order');

module.exports.indexhome = async(req, res) =>{
        let findproduct = await product.find({})
        return res.render('findex',{data:findproduct})
        
}

module.exports.login = (req,res)=>{
        return res.render('flogin')
}

module.exports.userlogin = async(req,res)=>{
       return res.redirect('/')
}

module.exports.signup = async (req, res)=>{
        return res.render('frejister')
}

module.exports.userrejister = async(req, res)=>{
        req.body.role = 'user'
        let data = await usermodel.create(req.body)
        return res.redirect('/login')
}

module.exports.logout = (req,res) => {
        req.logout((err)=> {
                if(err)
                {
                        console.log(err)
                }
                return res.redirect('/login')
        })
}

module.exports.buyNow = async (req,res) =>{
        let data = await product.findById(req.params.id);

        return res.render('fbuyPage',{
                data : data
        })
}
module.exports.read_product = async (req,res)=>{
        const prod_data = await product.findById(req.params.id)
        if(prod_data){
                res.render('order',{
                        prod_data : prod_data
                })
        }
}

module.exports.buyorderFromUser = async(req,res)=>{
        let getorder = await order.create(req.body);

        if(getorder)
        {
                return res.redirect('back')
        }
        console.log('can not find Data');
        return res.redirect('back')

}