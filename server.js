//Include dependencies
var express = require("express");

//Express instance
var app = express();

var PORT = process.env.PORT || 3000;

//Express setup
app.use(express.static("./public"));

//Routes
app.get("/", function(req, res) {
	res.sendFile(__dirname + "/public/index.html");
});

app.get("/portfolio", function(req, res) {
	res.sendFile(__dirname + "/public/portfolio.html");
});

//Listener
app.listen(PORT, function() {
	console.log("Server listening on port " + PORT);
});