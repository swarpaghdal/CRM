const { urlencoded } = require('express');
const express = require('express')

const port = 4001

const server = express();

const db = require('./config/db')

server.set('view engine','ejs')

server.use(express.static('assets'))

server.use('/uplode',express.static('uplode'))

server.use(urlencoded())

const passport = require('passport')

const session = require('express-session')

const passport_admin = require('./config/passport-admin')
const passportUser = require('./config/passport-user')

server.use(new session({
    name: 'login',
    secret: 'secret',
    saveUninitialized: false,
    resave: true,
    cookie: {maxAge:50000000}
}) )

server.use(passport.initialize())

server.use(passport.session())
server.use(passport.setprofile)

server.use('/',require('./routs'))

server.listen(port,(err)=>{
    if(err){
        console.log('server is not running')
        return false
    }
    console.log('srever is running at port'+port)
})

