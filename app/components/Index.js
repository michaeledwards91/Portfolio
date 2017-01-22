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
			      <a href="#" className="brand-logo">Logo</a>
			      <ul id="nav-mobile" className="right hide-on-med-and-down">
			        <li><a href="sass.html">Sass</a></li>
			        <li><a href="badges.html">Components</a></li>
			        <li><a href="collapsible.html">JavaScript</a></li>
			      </ul>
			    </div>
			  </nav>

			</div>

		);
	}

});

module.exports = Index;