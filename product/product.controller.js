const { catchAsync } = require('../utils/catchAsync')
const { insertProduct, findOne, find, updateOne, deleteOne } = require('./product.service')
const ProductInterceptor = require('./product.interceptor')
const { pick } = require('../utils/pick')
exports.productController = {
    createProduct: catchAsync(async (req, res) => {
        const product = await insertProduct(req.body)
        const response = await ProductInterceptor.createProductResponse(product.toJSON())
        res.json({ data: response })
    }),
    getProduct: catchAsync(async (req, res) => {
        const product = await findOne(req.params.productId)
        const response = await ProductInterceptor.filteringIsDeletedData([product.toJSON()])
        res.json({ data: response })
    }),
    patchProduct: catchAsync(async (req, res) => {
        const product = await updateOne(req.params.productId, req.body)
        res.json({ data: product })
    }),
    deleteProduct: catchAsync(async (req, res) => {
        const product = await deleteOne(req.params.productId)
        res.json({ data: product })
    }),
    getProducts: catchAsync(async (req, res) => {
        const option = pick(req.query, ['sort', 'page', 'limit'])
        const page = option.page && parseInt(option.page) > 0 ? parseInt(option.page) : 1
        const limit = option.limit && parseInt(option.limit) > 0 ? parseInt(option.limit) : 20
        const sort = option.sort && option.sort === 'DESC' ? { createdAt: -1 } : { createdAt: 1 }
        const skip = (page - 1) * limit
        const product = await find(skip, limit, sort)
        const response = await ProductInterceptor.filteringIsDeletedData(product)
        res.json({ data: response })
    })
}