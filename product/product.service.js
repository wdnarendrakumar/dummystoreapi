const httpStatus = require('http-status')
const { ApiError } = require('../utils/ApiError')
const _ = require('./product.model')

module.exports = {
    find: (skip, limit, sort) => {
        return _.find().skip(skip).limit(limit).sort(sort)
    },
    findOne: (id) => {
        return _.findOne({ _id: id })
    },
    findById: (id) => {
        return _.findById(id)
    },
    insertProduct: (productData) => {
        return new _(productData).save()
    },
    updateOne: async (id, updateBody) => {
        const product = await _.findById(id)
        if (!product || product.isDeleted)
            throw new ApiError('updateOne', httpStatus.NOT_FOUND, 'product does not exist')
        Object.assign(product, updateBody)
        await product.save()
        return product
    },
    deleteOne: async (id) => {
        const product = await _.findByIdAndUpdate(id, { $set: { isDeleted: true } })
        if (!product) {
            throw new ApiError('deleteOne', httpStatus.NOT_FOUND, 'product does not exist')
        }
        Object.assign(product, { isDeleted: true })
        return product
    }
}