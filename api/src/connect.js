const mysql = require('mysql');
const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'tarefas' // Alterado para o novo banco de dados
});
module.exports = con;