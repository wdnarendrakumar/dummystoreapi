const Joi = require('joi')

module.exports = {
    addToCart: {
        body: Joi.object().keys({
            quantity: Joi.number().integer().required().min(1),
            userId: Joi.string().required().trim()
        }),
        params: Joi.object().keys({
            productId: Joi.string().required().trim()
        })
    },
    removeFromCart: {
        params: Joi.object().keys({
            productId: Joi.string().required().trim()
        }),
        body: Joi.object().keys({
            userId: Joi.string().required().trim()
        })
    },
    updateCart: {
        params: Joi.object().keys({
            productId: Joi.string().required().trim()
        }),
        body: Joi.object().keys({
            userId: Joi.string().required().trim(),
            quantity: Joi.number().integer().min(1).required()
        })
    },
    getCart: {
        body: Joi.object().keys({
            userId: Joi.string().required().trim()
        })
    }
}
