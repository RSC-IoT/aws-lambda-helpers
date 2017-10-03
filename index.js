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

module.exports = {
    Response,
    Errors: {
        Unauthorized: require('./module/errors/Unauthorized'),
        UnprocessableEntity: require('./module/errors/UnprocessableEntity'),
        InternalServerError: require('./module/errors/InternalServerError'),
        Forbidden: require('./module/errors/Forbidden'),
        NotFound: require('./module/errors/NotFound'),
        Fail: require('./module/errors/Fail')
    },

}