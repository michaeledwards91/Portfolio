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
				<div className="indexContent">
					<h1 className="center" id="indexH1">Michael Edwards</h1>
					{/*<hr>*/}
					<p className="center" id="indexP">Full Stack Web Developer</p>
				</div>
			</div>

		);
	}

});

module.exports = Index;