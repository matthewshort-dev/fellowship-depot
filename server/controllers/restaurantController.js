const Restaurant = require('../models/restaurantModel')
const mongoose = require('mongoose')

// [GET] => All Restaurants
const getRestaurants = async (req, res) => {
  const restaurants = await Restaurant.find({}).sort({createdAt: -1})

  res.status(200).json(restaurants)
}

// [POST] => Add New Restaurant
const addRestaurant = async (req, res) => {
  console.log(req)
  const {
    name,
    rating,
    type,
    revisit
  } = req.body

  try {
    const restaurant = await Restaurant.create({
      name,
      rating,
      type,
      revisit
    })

    res.status(200).json(restaurant)
  } catch (error) {
    res.status(400).json({error: error.message})
  }
}

module.exports = {
  addRestaurant,
  getRestaurants
}