//Include React
var React = require("react");

//Include child components
var Navbar = require("./Navbar");

//Create Main component
var Index = React.createClass({

	render: function() {
		return (
			<div className="indexContainer">
				
				{/* <Navbar /> */}
				<div className="indexContent">
					<h1 className="center" id="indexH1">Michael Edwards</h1>
					<hr></hr>
					<p className="center" id="indexP">FULL STACK WEB DEVELOPER</p>
				</div>
			</div>

		);
	}

});

module.exports = Index;