var express = require('express')
var template = require('./views/template')
var app = express()



app.get('/', function (req, res) {
  var ourText = '<div>Hi there</div>'
  res.send(ourText)
})

app.get('/test', function (req, res) {
  var ourData = {
    para: "Hi, i'm colour paragraph"
  }

  var ourText = template(ourData)
  res.send(ourText)
})

app.listen(3000)
console.log("server is up and listening")
