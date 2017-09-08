module.exports = class extends Error {

    constructor(challenges = []) {
        super('unauthorized-error')
        this.name = JSON.stringify(challenges)
    }
}