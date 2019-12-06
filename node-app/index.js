var express = require('express')
var app = express()
var mysql = require('mysql')

var con = mysql.createConnection({
  host:'0.0.0.0',
  user:'root',
  password:'devops'
})

con.connect(function(err){
  console.log('Happy connection established!')
})

app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.listen(8081, function () {
  console.log('app listening on port 8081!')
})