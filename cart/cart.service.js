const httpStatus = require('http-status')
const { ApiError } = require('../utils/ApiError')
const _ = require('./cart.model')

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
    findByUserId: (id) => {
        return _.find({ userId: id })
    },
    create: async (cart_details) => {
        const data = await _.findOne({ userId: cart_details.userId, productId: cart_details.productId })
        if (data) {
            throw new ApiError('/cart/service/create', httpStatus.NOT_FOUND, 'product already exist')
        }
        return await new _(cart_details).save()
    },
    deleteOne: async (productId, userId) => {
        const data = await _.deleteOne({ productId: productId, userId: userId })
        if (!data.deletedCount)
            throw new ApiError('/cart/deleteOne', httpStatus.NOT_FOUND, 'product not exist')
        return data
    },
    updateOne: async (productId, updateBody) => {
        const cartUpdate = await _.findOne({ productId: productId, userId: updateBody.userId })
        if (!cartUpdate) {
            throw new ApiError('/cart/updateOne', httpStatus.NOT_FOUND, 'product does not exist')
        }
        Object.assign(cartUpdate, updateBody)
        await cartUpdate.save()
        return cartUpdate
    }
}