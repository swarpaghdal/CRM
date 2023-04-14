const express = require('express')

const product = require('../model/product')

const  productcontroller = require('../controler/product-controler')

const routs = express.Router()

routs.get('/addproduct',productcontroller.addproduct)

routs.get('/viweproduct',productcontroller.viweproduct)

routs.post('/addproductt',product.uplodeimage,productcontroller.addproductt)

routs.get('/buyNow/:id',productcontroller.buyNow)

module.exports = routs