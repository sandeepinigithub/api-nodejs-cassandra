
module.exports = class Data {
    constructor() { }
    static getAllUser() {
        return "SELECT * FROM PUBLIC.user;"
    }
}