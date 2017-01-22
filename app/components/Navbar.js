var React = require("react");

var Navbar = React.createClass({

	render: function() {
		return (
			<nav>
		    <div className="nav-wrapper">
		      <a href="#" className="brand-logo">Michael Edwards</a>
		      <ul id="nav-mobile" className="right hide-on-med-and-down">
		        <li><a href="/#">Home</a></li>
		        <li><a href="/#portfolio">Work</a></li>
		        <li><a href="/#contact">Contact</a></li>
		      </ul>
		    </div>
		  </nav>
		);
	}

});

module.exports = Navbar;