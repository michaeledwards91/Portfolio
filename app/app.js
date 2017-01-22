// Include the Main React Dependencies
var React = require("react");
var ReactDOM = require("react-dom");

//Include routes
var routes = require("./config/routes.js");

// Render routes to app container
ReactDOM.render(routes, document.getElementById("app"));