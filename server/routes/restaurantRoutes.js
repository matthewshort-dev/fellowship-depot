const express = require('express')

const {
  addRestaurant,
  getRestaurants,
} = require('../controllers/restaurantController')

const router = express.Router()

// [GET] => All Restaurants
router.get('/restaurants', getRestaurants);

// [POST] Add New Restaurant
router.post('/restaurfants', addRestaurant);

module.exports = router