const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1/e-comm')

const db = mongoose.connection

db.once('open',function(err){
    if(err)
    {
        console.log(err)
    }
    console.log('sb is connected')
})