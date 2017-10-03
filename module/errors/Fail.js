module.exports = class extends Error {

    constructor() {
        super('fail')
        this.name = "fail"
    }
}