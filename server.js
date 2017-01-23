//Include dependencies
var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");

//Express instance
var app = express();

var PORT = process.env.PORT || 3000;

//Body Parser setup
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

//Method Override setup
app.use(methodOverride("_method"));

//Express setup
app.use(express.static("./public"));

//Routes
app.get("/", function(req, res) {
	res.sendFile(__dirname + "/public/index.html");
});

//Route for node mailer
app.post("/api/mailer", function(req, res) {
	console.log(req.body);
	
	res.redirect("/#/contact");
});

//Listener
app.listen(PORT, function() {
	console.log("Server listening on port " + PORT);
});