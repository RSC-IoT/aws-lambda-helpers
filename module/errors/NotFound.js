module.exports = class extends Error {

    constructor() {
        super('not-found')
        this.name = "not-found"
    }
}