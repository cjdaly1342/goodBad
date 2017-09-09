// Using the previous example as a guide, create an app that has two web servers.
// One that listens on port 7000 and one that listens on port 7500.
// The one listening on port 7000 will always tell the user something good about themselves.
// The one listening on 7500 will always tell the user something bad about themselves.
// Make sure you create a Github repo and commit this code!
// Bonus

// Look for other ways to expand what your server can do. As possibilities:
// Generate the good/bad phrase randomly from a list of predefined phrases
// Use the twitter package inside the response to also return a random tweet
// =========================================================================================
var http = require("http");

var PORT = 7000;

function requestHandler(request, response) {
	response.end("You're a real nice person!!!!");
}; // End function requestHandler(request, response)

var server = http.createServer(requestHandler);
server.listen(PORT, function() {
	console.log("The server is listening on: localhost:%s", PORT);
}); // End server.listen(PORT, function() {})

var PORT2 = 7500;

function requestHandler2(request, response) {
	response.end("What a jerk :(");
}; // End function requestHandler(request, response)

var server2 = http.createServer(requestHandler2);
server2.listen(PORT2, function() {
	console.log("The server is listening on: localhost:%s", PORT2);
}); // End server.listen(PORT, function() {})