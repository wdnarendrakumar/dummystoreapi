const { catchAsync } = require("../utils/catchAsync");

const { create, deleteOne, updateOne, find } = require('./cart.service')

const { findOne } = require('../product/product.service');

const { ApiError } = require("../utils/ApiError");
const httpStatus = require("http-status");


module.exports.cartController = {
    addToCart: catchAsync(async (req, res) => {
        const product = await findOne(req.params.productId)
        if (!product)
            throw new ApiError('/cart/addtocart', httpStatus.NOT_FOUND, 'product does not exist')
        const data = Object.assign(req.body, req.params)
        const cart = await create(data)
        res.json({ data: cart })
    }),
    removeFromCart: catchAsync(async (req, res) => {
        const product = await deleteOne(req.params.productId, req.body.userId)
        res.json(product)
    }),
    updateCart: catchAsync(async (req, res) => {
        const cart = await updateOne(req.params.productId, req.body)
        res.json(cart)
    }),
    getCart: catchAsync(async (req, res) => {
        const cartData = await find(req.body)
        res.json(cartData)
    })
}