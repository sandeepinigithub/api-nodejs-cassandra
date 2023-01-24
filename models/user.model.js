
module.exports = class Data {
    constructor() { }

    static createUser(data) {        
        return `INSERT INTO users (id,name,designation) VALUES (${data.id},'${data.name}','${data.designation}')`
    }

    static getAllUser() {
        return 'SELECT id, name, designation FROM  users'
    }

    static updateUser(data) {        
        return `UPDATE users SET name = '${data.name}',designation = '${data.designation}' WHERE id = ${data.id}`
    }

    static deleteUser(data) { 
        return `DELETE FROM users WHERE id = ${data.id}`
    }
    
}
