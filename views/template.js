var handlebars = require('handlebars')


var template = function (data) {
  var templateText = '<p>{{para}}</p>'
  var smartTemplate = handlebars.compile(templateText)
  var html = smartTemplate(data)
  return html
}


module.exports = template
