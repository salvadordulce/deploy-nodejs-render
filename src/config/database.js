const mysql2 = require("mysql2/promise");

const pool = mysql2.createPool({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'prisma'
})

module.exports = pool