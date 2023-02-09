const route = require('express').Router()

const { validate } = require('../middleware/validator')

const { createProduct, getProduct, getProducts, patchProduct, deleteProduct } = require('./product.validator')

const { productController } = require('./product.controller')

route.route('/:productId')
    .get(validate(getProduct), productController.getProduct)
    .patch(validate(patchProduct), productController.patchProduct)
    .delete(validate(deleteProduct), productController.deleteProduct)

route.route('/')
    .post(validate(createProduct), productController.createProduct)
    .get(validate(getProducts), productController.getProducts)

module.exports = route