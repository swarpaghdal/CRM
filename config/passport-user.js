

const passport = require('passport')

const passportlocal = require('passport-local').Strategy

const customer = require('../model/user')

passport.use('userlogin',new passportlocal({usernameField:'email'},async(email,password,done)=>{

    const user = await customer.findOne({email:email})
    if (user) {
        if (user.password == password) {
            // console.log(user)
            return done(null, user)
        } else {
            return done(null,false) 
        }
    }
    else
    {
        return done(null,false)
    }

}))


passport.checkauth = (req, res,next) =>{
    // console.log(req.user)
    if (req.isAuthenticated()) {
        
        return next()
    }
    return res.redirect('/login')

}

module.exports = passport