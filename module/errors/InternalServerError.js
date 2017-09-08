module.exports = class extends Error {

    constructor() {
        super('internal-server-error')
        this.name = "internal-server-error"
    }
}