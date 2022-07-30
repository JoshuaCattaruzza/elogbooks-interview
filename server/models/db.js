const mysql = require('mysql')
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'elogbooktest'
})

connection.connect(err =>{
    if(err) throw err;
    console.log("connected to db");
});

module.exports = connection;