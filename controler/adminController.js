const admin = require('../model/admin')
const order = require('../model/order');
module.exports.adminDashbord = (req, res)=>{
res.render('index')
}

module.exports.login = (req, res)=>{
    res.render('login')
}

module.exports.adminreister =async (req, res) =>{
    req.body.role = 'admin'
    const data = await admin.create(req.body)
    return res.redirect('/admin/login')
}

module.exports.adminlogin = (req, res)=>{
    return res.redirect('/admin/')
}

module.exports.register = (req,res)=>{
    res.render('register')
}

module.exports.addAdmin= (req, res)=>{
    res.render('form')
}

module.exports.logout = (req, res)=>{
    req.logout((err)=>{
        if (err) {
            console.log('err')
        }
        return res.redirect('/admin/login')
    })
}

module.exports.addAdmindata =async(req, res)=>{
    req.body.role = 'admin'
    let addAdmin = await admin.create(req.body)
    if (addAdmin) {
        return res.redirect('back')
    }
    console.log('cannot insert data')
    return res.redirect('back')
}

module.exports.viewadmin = async(req,res)=>{
    let adminData = await admin.find({});
    if(adminData)
    {
        return res.render('viewadmin',{
            data : adminData
        });
    }
    console.log('Can not Find Data');
    return res.redirect('back');
}

module.exports.order = async(req,res)=>{
    let viewOrder= await order.find({}).populate('product').exec();
    return res.render('vieworder',{
        data : viewOrder
    })
}