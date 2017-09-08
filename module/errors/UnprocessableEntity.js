module.exports = class extends Error {

    constructor(examplePayload = {}) {
        super('unprocessable-entity-error')
        this.name = JSON.stringify(examplePayload)
    }
}