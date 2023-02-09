const httpStatus = require("http-status")

const { ApiError } = require('../utils/ApiError')

module.exports.errorHandlor = (err, req, res, next) => {
    let { statusCode, reference, message, stack } = err
    message = message.replace(/\"/g, '')
    stack = stack.replaceAll(/\"/g, '')
    res.status(statusCode).send(JSON.stringify({ statuscode: statusCode, message: message, stack: stack, reference: reference }))
    // logger.error(`${statuscode || 500} - ${res.statusMessage} - ${message} - ${req.originalUrl} - ${req.method} - ${req.ip}`);
}

module.exports.errorConverter = (err, req, res, next) => {
    console.log(err)
    if (err instanceof ApiError) return next(err)
    next(new ApiError('internal error', httpStatus.INTERNAL_SERVER_ERROR, 'internal server error'))
}