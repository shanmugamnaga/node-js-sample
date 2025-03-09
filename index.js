var express = require('express')
var app = express()

app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/public'))

app.get('/', function(request, response) {
  response.send('Hello This is nodjs application!')
})

app.listen(app.get('port'),'0.0.0.0', function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})
