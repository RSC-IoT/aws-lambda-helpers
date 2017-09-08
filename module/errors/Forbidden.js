module.exports = class extends Error {

    constructor(reason = {}) {
        super('forbidden-error')
        this.name = JSON.stringify(reason)
    }
}