module.exports = class extends Error {

    constructor(examplePayload) {
        super('validation-error')
        this.name = JSON.stringify(examplePayload)
    }
}