//Include React
var React = require("react");

//Include child components
var Navbar = require("./Navbar");

//Create Main component
var Index = React.createClass({

	render: function() {
		return (
			<div className="indexContainer">
				
				<Navbar />

			</div>

		);
	}

});

module.exports = Index;