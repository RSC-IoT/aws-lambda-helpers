# AWS Lambda Helpers
Small commonly used helper functions to be used within with AWS Lambda.

## Installation
`npm install aws-lambda-helpers --save`

## Response
Used to respond to an API Gateway event. Returns `statusCode` & `body`

Basic example:
```js
const { Response } = require('rsc-aws-lambda-helpers')
exports.handler = (event, context, callback) => {
  return callback(null, Response.success({ name: 'james' }))
  
  // { statusCode: 200, body: '{"name": "james"}' }
}
```

### Predefined Methods
| Method | Response Code |
|--------|---------------|
| `Response.success`         | 200
| `Response.resourceCreated` | 201
| `Response.badRequest`      | 400
| `Response.unauthorized`    | 401
| `Response.notFound`        | 404
| `Response.alreadyExists`   | 409
| `Response.validationError` | 422
| `Response.error`           | 500

Usage:
```js
Response.error(<object or string>)
```


### Custom Response
```js
Response.buildResponse(418, { teapot: true })
```