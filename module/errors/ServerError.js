module.exports = class extends Error {

    constructor() {
        super('server-error')
        this.name = "server-error"
    }
}