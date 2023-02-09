const Joi = require('joi')

module.exports = {
    createCategory: {
        params: Joi.object().keys({
            categoryName: Joi.string().required().trim()
        })
    },
    updateCategory:{
        params:Joi.object().keys({
            categoryName:Joi.string().required().trim()
        }),
        body:Joi.object().keys({
            categoryName:Joi.string().required().trim()
        })
    }
}