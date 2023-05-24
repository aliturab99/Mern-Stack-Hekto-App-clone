require("dotenv").config()
const express = require('express');
const mongoose = require('mongoose')
const cors = require('cors')
const app = express();

const userController = require("./controllers/users")
const categoryController = require("./controllers/categories")
const productController = require("./controllers/products")
const reviewController = require("./controllers/reviews")
const storeController = require("./controllers/store")



// app.use
app.use( express.json() )
app.use('/content', express.static('content/'))
//cors Error is set here
app.use(cors())


app.use('/api/users', userController)
app.use('/api/category', categoryController)
app.use('/api/products', productController)
app.use('/api/reviews', reviewController)
app.use('/api/store', storeController)


mongoose.connect(process.env.MONGODB_CONNECTION_URI).then( () => {
  console.log("database is connected")
}).catch(err => {
  console.log( `Error`, err )
})

app.use( (err, req, res, next ) => {
  if(err){
    res.status(400).json({ error: err.message });
  }else{
    next()
  }
})

app.listen( 5000, () => {
  console.log(`Listing at 5000`)
})