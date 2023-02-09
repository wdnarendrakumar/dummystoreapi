const httpStatus = require('http-status')
const { ApiError } = require('../utils/ApiError')
const _ = require('./rating.model')

const ObjectId = require('mongoose').Types.ObjectId

module.exports = {
    findById: (id) => {
        return _.findById(id)
    },
    findAverageOfProduct:async(id)=>{
        let rating = await _.aggregate([{$match:{productId:ObjectId(id)}},{$project:{rating:{$avg:'$rating'}}}])
        return rating[0]
    },
    findByProductId: (productId) => {
        return _.findOne({ productId: productId })
    },
    insert: async ({ productId, rating }) => {
        const ratings = await _.findOne({ productId: productId })
        if (ratings) {
            return await _.updateOne({ productId: productId }, { $push: { rating: rating } })
        } else
            return await new _({ productId: productId, rating: [rating] }).save()
    }
}