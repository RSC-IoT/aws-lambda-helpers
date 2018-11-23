const assert = require('assert')

const { Response } = require('../index')

describe('Domain - response', () => {
  it('buildResponse with no params', () => {
    let r = Response.buildResponse()
    assert.deepStrictEqual(r, { statusCode: 200, body: undefined })
  })

  it('buildResponse with string status code', () => {
    let r = Response.buildResponse('400')
    assert.deepStrictEqual(r, { statusCode: 400, body: undefined })
  })

  it('buildResponse with undefined body', () => {
    let r = Response.buildResponse(400)
    assert.deepStrictEqual(r, { statusCode: 400, body: undefined })
  })

  it('buildResponse with array body', () => {
    let r = Response.buildResponse(400, [])
    assert.deepStrictEqual(r, { statusCode: 400, body: '[]' })
  })

  it('buildResponse with object body', () => {
    let r = Response.buildResponse(400, { name: 'zoolander' })
    assert.deepStrictEqual(r, { statusCode: 400, body: '{"name":"zoolander"}' })
  })

  it('success', () => {
    let r = Response.success({})
    assert.deepStrictEqual(r, { statusCode: 200, body: '{}' })
  })

  it('resourceCreated', () => {
    let r = Response.resourceCreated({})
    assert.deepStrictEqual(r, { statusCode: 201, body: '{}' })
  })

  it('error', () => {
    let r = Response.error({})
    assert.deepStrictEqual(r, { statusCode: 500, body: '{}' })
  })

  it('badRequest', () => {
    let r = Response.badRequest({})
    assert.deepStrictEqual(r, { statusCode: 400, body: '{}' })
  })

  it('unauthorized', () => {
    let r = Response.unauthorized({})
    assert.deepStrictEqual(r, { statusCode: 401, body: '{}' })
  })

  it('notFound', () => {
    let r = Response.notFound({})
    assert.deepStrictEqual(r, { statusCode: 404, body: '{}' })
  })

  it('alreadyExists', () => {
    let r = Response.alreadyExists({})
    assert.deepStrictEqual(r, { statusCode: 409, body: '{}' })
  })

  it('validationError', () => {
    let r = Response.validationError({})
    assert.deepStrictEqual(r, { statusCode: 422, body: '{}' })
  })
})
