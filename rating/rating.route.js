const route = require('express').Router()

const { createRating, getRating } = require('./rating.validation')

const { validate } = require('../middleware/validator')

const { ratingController } = require('./rating.controller')

route.route('/:productId')
    .post(validate(createRating), ratingController.createRating)
    .delete(validate(getRating),ratingController.deleteRating)
    .get(validate(getRating), ratingController.getRating)

module.exports = route