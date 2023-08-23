const mysql = require('mysql2/promise');

async function database_connection() {
    const connection = await mysql.createConnection({
        host: 'localhost', 
        user: 'root',      
        password: '', 
        database: 'welding_join_history_ks',
    });
      
    try {
        await connection.connect();
        console.log('Connected to Database');
        return connection; // this function will return connection
    } catch (error) {
        console.error('Error connecting to Database:', error.message);
        throw error; 
    }
}

module.exports = database_connection ;