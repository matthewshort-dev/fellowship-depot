require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const restaurantRoutes = require('./routes/restaurantRoutes')
const PORT = process.env.PORT

const app = express()

// Middleware //

// Checks each request for json body
app.use(express.json())
// Runs every request, logs the path/method, calls next() for next request
app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})

// Routes //
app.use('/api', restaurantRoutes)

mongoose.connect(process.env.MONGO_URI)
  .then(
    app.listen(PORT, () => {
      console.log(`Connected to MongoDB and listening on port ${PORT}`)
    })
  )
  .catch((error) => {
    console.log(error)
  })