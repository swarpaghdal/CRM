const passport = require('passport')

const passportlocal = require('passport-local').Strategy

const admin = require('../model/admin')
const Customer = require('../model/user')
const { request } = require('express')

passport.use('admin',new passportlocal({usernameField:'email'},async(email,password,done)=>{

    const checkadmin = await admin.findOne({email:email})
    if (checkadmin) {
        if (checkadmin.password == password) {
            // console.log('123')
            return done(null, checkadmin)
        } else {
            // console.log('123')

            return done(null,false) 
        }
    }
    else
    {
        return done(null,false)
    }

}))

passport.serializeUser(async(user,done)=>{
    return done(null, user.id)
})

passport.deserializeUser(async(id,done)=>{
    const adminid = await admin.findById(id)
    if (adminid) {

        return done(null, adminid)
        
    }
    // console.log('123')
    else{
        let data = await Customer.findById(id)
        return done(null, data)
    }    
})

passport.checkauthentiction = (req, res,next) =>{

    if (req.isAuthenticated()) {
        return next()
    }
    return res.redirect('/admin/login')

}

passport.setprofile = (req, res,next)=>{
    res.locals.user = req.user
    next();
}

module.exports = passport

