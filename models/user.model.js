
module.exports = class Data {
    constructor() { }
    static getAllUser() {
        return 'SELECT id, name, designation FROM  users'
    }
}