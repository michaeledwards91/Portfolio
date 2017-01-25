// Include React
var React = require("react");
var router = require("react-router");

// Router Setup
var Route = router.Route;
var Router = router.Router;
var hashHistory = router.hashHistory;
var IndexRoute = router.IndexRoute;

// Include components
var Index = require("../components/Index");
var Portfolio = require("../components/Portfolio");
var Contact = require("../components/Contact");
var About = require("../components/About");

// Export the Routes
module.exports = (

  <Router history={hashHistory}>
    <Route path="/" component={Index} />
    <Route path="/about" component={About} />
    <Route path="/portfolio" component={Portfolio} />
    <Route path="/contact" component={Contact} />
  </Router>

);