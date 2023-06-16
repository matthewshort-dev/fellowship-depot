const mongoose = require('mongoose')

// Allows us to create a schema for our MongoDB data
const Schema = mongoose.Schema

// Schema => Defines the structure of a particular 'document' (piece of data)
const restaurantSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  revisit: {
    type: Boolean,
    required: true
  }
}, {timestamps: true})

module.exports = mongoose.model('Restaurant', restaurantSchema)