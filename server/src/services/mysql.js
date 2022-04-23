const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: 'jabass',
  multipleStatements: true,
});

module.exports = connection;
