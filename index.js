const Response = {

    success(body) {
        return this.buildResponse(200,body)
    },

    error(body) {
        return this.buildResponse(500,body)
    },

    notFound(body) {
        return this.buildResponse(404,body)
    },

    badRequest(body) {
        return this.buildResponse(400,body)
    },

    validationError(body) {
        return this.buildResponse(422,body)
    },

    buildResponse(statusCode,body) {
        if (typeof body === 'object') {
            body = JSON.stringify(body)
        }

        return {
            statusCode,
            body,
        }
    }
}

const CustomError = (name=ERRORS.FAIL, message='') => {
    let error = new Error(message)
    error.name = name
    return error
}

const ERRORS = {
    BREAK_POINT: 'BreakPoint',
    FAIL: 'Fail',
    RETRY: 'Retry',
    NOT_FOUND: 'NotFound',
    VALIDATION: 'Validation',
    RESOURCE_EXISTS: 'ResourceExists'
}


module.exports = {
    Response,
    CustomError,
    ERRORS
}