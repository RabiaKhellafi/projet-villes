//import du module sql
const mysql = require('mysql');

//Initialisation de la connexion
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: ''
});

//Utilisation de la base de donées ecf
connection.query('USE ecf;');

//Exportation du module
module.exports = connection;