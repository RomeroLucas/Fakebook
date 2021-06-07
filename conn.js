// import de LIBS
const mysql = require('mysql')

// função para connectar ao banco de dados mysql
const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'fakeb'
})

module.exports = conn