const database_connection = require("./database-config");


class User {
    async user_by_Email(email) {
        const connect = await database_connection() ;
        const data = await connect.query(`SELECT * FROM user WHERE email = ?`, [ email ]) ;
        return data[0][0] ;
    }    
}


module.exports = {
    User
}
