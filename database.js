const mysql = require("mysql");

const { rootCertificates } = require("tls");

let connection = mysql.createConnection({
    host: 'localhost',
    database: 'notes',
    user: 'root',
    password: 'root'
});

module.exports = connection;