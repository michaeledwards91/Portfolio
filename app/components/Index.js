//Include React
var React = require("react");


//Create Main component
var Index = React.createClass({

	render: function() {
		return (
			<div className="indexContainer">
				{/*Navbar*/}
				<nav>
			    <div className="nav-wrapper">
			      <a href="#" className="brand-logo">Michael Edwards</a>
			      <ul id="nav-mobile" className="right hide-on-med-and-down">
			        <li><a href="/#">Home</a></li>
			        <li><a href="/#portfolio">Work</a></li>
			        <li><a href="/#about">About</a></li>
			      </ul>
			    </div>
			  </nav>

			</div>

		);
	}

});

module.exports = Index;