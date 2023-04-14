const express = require('express')

const passport = require("passport")

const adminController = require('../controler/adminController');
const { get } = require('mongoose');

const routs = express.Router();

routs.get('/',passport.checkauthentiction,adminController.adminDashbord)

routs.get('/addAdmin',passport.checkauthentiction,adminController.addAdmin)

routs.post('/addAdminn',passport.checkauthentiction,adminController.addAdmindata);

routs.get('/viewadmin', passport.checkauthentiction,adminController.viewadmin)

routs.get('/login',adminController.login)

routs.get('/register',adminController.register)

routs.post('/adminreister',adminController.adminreister)

routs.get('/logout',adminController.logout)

routs.post('/adminlogin',passport.authenticate('admin',{failureRedirect:'/login'}),adminController.adminlogin)

routs.get('/order',passport.checkauthentiction, adminController.order);

routs.use('/category',passport.checkauthentiction,require('./catogery-routs'))
routs.use('/product', passport.checkauthentiction,require('../routs/product-routs'))

module.exports = routs