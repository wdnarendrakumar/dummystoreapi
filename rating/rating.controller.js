const { catchAsync } = require("../utils/catchAsync");

const { findById } = require('../product/product.service');
const { ApiError } = require("../utils/ApiError");
const httpStatus = require("http-status");
const { insert, findByProductId ,findAverageOfProduct} = require("./rating.service");

module.exports.ratingController = {
    createRating: catchAsync(async (req, res) => {
        const product = await findById(req.params.productId)
        if (!product)
            throw new ApiError('/category/createRating', httpStatus.NOT_FOUND, 'product not exist')
        res.json(await insert({ productId: req.params.productId, rating: req.body.rating }))
    }),
    getRating: catchAsync(async (req, res) => {
        const rating = await findAverageOfProduct(req.params.productId)
        if (!rating)
            throw new ApiError('/category/getRating', httpStatus.NOT_FOUND, 'category not exist')
        res.json(rating)
    }),
    deleteRating: catchAsync(async (req, res) => {
        const rating = await findByProductId(req.params.productId)
        if (!rating)
            throw new ApiError('/category/deleteRating', httpStatus.NOT_FOUND, 'rating not exist')
        res.json(await rating.remove())
    })
}