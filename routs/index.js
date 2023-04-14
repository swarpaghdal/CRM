const express = require('express')

const passport = require('passport')

const routs = express.Router();

const user_controler = require('../controler/user-controler');
const { get } = require('mongoose');

routs.get('/',user_controler.indexhome)

routs.get('/login',user_controler.login)

routs.post('/userlogin',passport.authenticate('userlogin',{failureRedirect:'/login'}),user_controler.userlogin)

routs.use('/admin',require('./admin'))

routs.get('/signup',user_controler.signup)

routs.post('/userrejister',user_controler.userrejister)

routs.get('/logout', user_controler.logout)

routs.get('/buyNow', user_controler.buyNow);

routs.post('/buyorderFromUser',passport.checkauth, user_controler.buyorderFromUser)

routs.get('/read_product/:id',passport.checkauth,user_controler.read_product)
module.exports = routs