const express = require('express')

const categorycontroller = require('../controler/category-controler')

const routs =  express.Router()

routs.get('/addcat', categorycontroller.addcat)
    
routs.get('/viewcat',categorycontroller.viewcat)

routs.post('/addcatt',categorycontroller.addcatt)

module.exports = routs 