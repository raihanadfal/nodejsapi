var mysql = require('mysql');

// buat koneksi
const  conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'dbapi'
});

conn.connect((err) => {
  if(err) throw err;
  console.log('Connection succes')
})

module.exports = conn;