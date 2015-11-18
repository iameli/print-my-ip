var http = require('http');

function handleRequest(request, response) {
  console.log(request);
  response.end('It Works!! Path Hit: ' + request.url);
}

var server = http.createServer(function(req, res) {
  var ret = 'Headers\n\n';
  Object.keys(req.headers).forEach(function(name) {
    ret += name + ': ' + req.headers[name] + '\n';
  });
  ret += '\n';
  ret += 'Remote Address: ' + req.connection.remoteAddress;
  res.end(ret);
});

server.listen(3000, function(){
  console.log("Server listening on: http://localhost:%s", 3000);
});
