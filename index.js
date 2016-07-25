var handlebars = require('handlebars')

var data = {
  para: "Hi, i'm colour paragraph"
}
var simpleTemplate = '<p>{{para}}</p>'
var createSimpleResult = handlebars.compile(simpleTemplate)
var simpleResult = createSimpleResult(data)

console.log(simpleResult)
