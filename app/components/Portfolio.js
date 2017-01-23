//Include React
var React = require("react");

//Include child components
var Navbar = require("./Navbar");

//Create Portfolio Component
var Portfolio = React.createClass({

	render: function() {
		return (
			<div className="portfolioContainer">
				<Navbar />

				<div className="portfolioContent">
					<div className="container">
						<div className="row">
							
								<div className="col s1 m1">
									{/*Empty Div*/}
								</div>

								<div className="col s10 m4">
									<p>test</p>
								</div>

								<div className="col s1 m2">
									{/*Empty Div*/}
								</div>

								<div className="col s10 m4">
									<p>test</p>
								</div>

						</div>
					</div>
				</div>
			</div>
		);
	}

});

module.exports = Portfolio;