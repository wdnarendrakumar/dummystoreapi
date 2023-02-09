const Joi = require('joi')

module.exports = {
    createProduct: {
        body: Joi.object().keys({
            title: Joi.string().required().trim(),
            price: Joi.number().required(),
            quantity: Joi.number().required().min(1),
            description: Joi.string().trim(),
            image: Joi.string().required(),
            category: Joi.string().trim()
        })
    },
    getProduct: {
        params: Joi.object().keys({
            productId: Joi.string().required()
        })
    },
    getProducts: {
        query: Joi.object().keys({
            sort: Joi.string().valid('DESC', 'ASC'),
            limit: Joi.number().integer(),
            page: Joi.number().integer()
        })
    },
    deleteProduct: {
        params: Joi.object().keys({
            productId: Joi.string().required()
        })
    },
    patchProduct: {
        params: Joi.object().keys({
            productId: Joi.string().required()
        }),
        body: Joi.object().keys({
            title: Joi.string().trim(),
            price: Joi.number(),
            quantity: Joi.number().min(1),
            description: Joi.string().trim(),
            image: Joi.string(),
            category: Joi.string()
        })
    }
}