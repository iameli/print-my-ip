var http = require('http');

function handleRequest(request, response) {
  console.log(request);
  response.end('It Works!! Path Hit: ' + request.url);
}

var server = http.createServer(function(req, res) {
  res.end(req.connection.remoteAddress);
});

server.listen(3000, function(){
  console.log("Server listening on: http://localhost:%s", 3000);
});
