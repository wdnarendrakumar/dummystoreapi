class ApiError extends Error {
    constructor(reference, statusCode, message, stack = '') {
        super(message)
        this.reference = reference
        this.statusCode = statusCode
        this.message = message
        if (stack) {
            this.stack = stack
        }
        else {
            Error.captureStackTrace(this, this.constructor)
        }
    }
}
exports.ApiError = ApiError