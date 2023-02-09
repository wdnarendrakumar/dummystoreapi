const route = require('express').Router()

const { addToCart, removeFromCart, updateCart, getCart } = require('./cart.validation')

const { validate } = require('../middleware/validator')

const { cartController } = require('./cart.controller')

route.route('/:productId')
    .post(validate(addToCart), cartController.addToCart)
    .delete(validate(removeFromCart), cartController.removeFromCart)
    .patch(validate(updateCart), cartController.updateCart)


route.route('/')
    .get(validate(getCart), cartController.getCart)


module.exports = route