const route = require('express').Router()

const { createCategory, updateCategory } = require('./category.validation')

const { validate } = require('../middleware/validator')

const { categoryController } = require('./category.controller')


route.route('/:categoryName')
    .post(validate(createCategory), categoryController.addCategory)
    .delete(validate(createCategory), categoryController.removeCategory)
    .patch(validate(updateCategory), categoryController.updateCategory)

route.route('/')
    .get(categoryController.getCategory)


module.exports = route