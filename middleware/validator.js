const { pick } = require('../utils/pick')
const { ApiError } = require('../utils/ApiError')
const httpStatus = require('http-status')
const Joi = require('joi')
exports.validate = (schema) =>
    (req, res, next) => {
        const validSchema = pick(schema, ['params', 'query', 'body'])
        const object = pick(req, Object.keys(validSchema))
        const { error } = Joi.compile(validSchema).prefs({ errors: { label: 'key' }, abortEarly: false }).validate(object)
        if (error) {
            return next(new ApiError('/middlreware/validation', httpStatus.FAILED_DEPENDENCY, error.details.map((val) => val.message).join(', ')))
        }
        next()
    }