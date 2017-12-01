module.exports = class extends Error {

    constructor() {
        super('already-exists')
        this.name = "already-exists"
    }
}