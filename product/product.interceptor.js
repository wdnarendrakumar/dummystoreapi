const { pick } = require('../utils/pick')

class ProductInterceptor {
    static async createProductResponse(product) {
        return pick(product, ['title', 'price', 'quantity', 'image', 'createdAt', 'updatedAt', '_id'])
    }
    static async filteringIsDeletedData(product) {
        const productResponse = product.filter((product) => {
            if (!product.isDeleted)
                return product
        })
        if (!productResponse.length)
            return {}
        else if (productResponse.length === 1)
            return productResponse[0]
        else
            return productResponse
    }
}

module.exports = ProductInterceptor