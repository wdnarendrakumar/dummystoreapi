const httpStatus = require('http-status')
const { ApiError } = require('../utils/ApiError')
const _ = require('./category.model')

module.exports = {
    findOne: (params) => {
        return _.findOne(params)
    },
    findById: (id) => {
        return _.findById(id)
    },
    find: (params) => {
        return _.find(params)
    },
    create: async (cart_details) => {
        const category = await _.findOne({categoryName:cart_details.categoryName})
        if(category){
            Object.assign(category,cart_details)
            return await category.save()
        }
        return await new _(cart_details).save()
    },
    deleteOne: async (categoryName) => {
        const data = await _.deleteOne({ categoryName: categoryName})
        if (!data.deletedCount)
            throw new ApiError('/category/deleteOne', httpStatus.NOT_FOUND, 'category not exist')
        return data
    },
    updateOne: async (categoryName, updateBody) => {
        const cartUpdate = await _.findOne({ categoryName: categoryName})
        if (!cartUpdate) {
            throw new ApiError('/category/updateOne', httpStatus.NOT_FOUND, 'categoryName does not exist')
        }
        Object.assign(cartUpdate, updateBody)
        await cartUpdate.save()
        return cartUpdate
    }
}