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

// menampilkan semua dtaa mahasiswa berdasarkan id

exports.tampilById = function(req, res){
  let id = req.params.id;
  connection.query('SELECT * FROM mahasiswa where id_mahasiswa = ?', [id],
  function(error, rows, field){
    if(error){
      console.log(error);
    } else {
      response.ok(rows, res)
    }
  })
};