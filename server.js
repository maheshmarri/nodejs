var http = require('http');
var url = require('url');

var server = http.createServer(function(req, res) {
var page = url.parse(req.url).pathname;
console.log(page);
console.log(req.url)
res.writeHead(200, {"Content-Type": "text/plain"});
if (page == '/') {
res.write('You\'re at the reception desk. How can I help you?');

}
else if (page == '/health') {
res.write('/health status code '+res.statusCode);

}
else if (page == '/metadata') {
res.write('Hey, this is a private area!');
}
res.end();
});
server.listen(5001);
