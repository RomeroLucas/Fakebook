// import de LIBS
const mysql = require('mysql')

// função para connectar ao banco de dados mysql
const conn = mysql.createConnection({
    host: 'bbixrrsdcbzk5qbws81x-mysql.services.clever-cloud.com',
    user: 'uhhdbrfci7dkkkdf',
    password: 'ZUZ5WVk26SZTl5NyxDK4',
    database: 'bbixrrsdcbzk5qbws81x'
})

module.exports = conn