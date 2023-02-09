const Joi = require('joi')

module.exports = {
    createRating: {
        params: Joi.object().keys({
            productId: Joi.string().required().trim()
        }),
        body: Joi.object().keys({
            rating: Joi.number().integer().required().min(1).max(5)
        })
    },
    getRating: {
        params: Joi.object().keys({
            productId: Joi.string().required().trim()
        })
    }
}