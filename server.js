//Include dependencies
var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");

//Include nodemailer transport
var transport = require("./config/transport.js");

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

//Route to handle form submission on contact page
app.post("/api/mailer", function(req, res) {

	transport.sendMail({
		from: "michael.edwards1991@gmail.com",
		to: "michael.edwards1991@gmail.com",
		subject: "Email from " + req.body.name + "! (from portfolio site)",
		text: req.body.message
	}, function(err, info) {
		if (err) throw err;
		console.log("info: ");
		console.log(info);

		setTimeout(function() {
			res.redirect("/#/contact");
		}, 3000);
		// res.redirect("/#/contact");
	});

});

//Listener
app.listen(PORT, function() {
	console.log("Server listening on port " + PORT);
});