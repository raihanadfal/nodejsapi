'use strict';

var response = require('./res');
var connection = require('./connection');

exports.index = function(req, res){
  response.ok("Aplikasi rest api berjalan", res)
}

// menampilkan semua data mahasiswa
exports.tampil = function(req, res) {
  connection.query('SELECT * FROM mahasiswa', function(err, rows, fields){
    if(err){
      console.log(err)
    } else {
      response.ok(rows, res)
    }
  });
};