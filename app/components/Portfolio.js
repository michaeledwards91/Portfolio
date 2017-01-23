//Include React
var React = require("react");

//Include child components
var Navbar = require("./Navbar");

//Create Portfolio Component
var Portfolio = React.createClass({

	render: function() {
		return (
			<div className="portfolioContainer">
				{/* <Navbar /> */}

				<div className="portfolioContent">
					<div className="container">
						<div className="row">

								<div className="col s12 m5">
								  <div className="card sticky-action hoverable">
								    <div className="card-image waves-effect waves-block waves-light">
								      <img className="activator" src="./images/yumyum.png"></img>
								    </div>
								    <div className="card-action">
								      <span className="card-title activator grey-text text-darken-4">Card Title<i className="material-icons right">more_vert</i></span>
								      <p><a href="#">This is a link</a></p>
								    </div>
								    <div className="card-reveal">
								      <span className="card-title grey-text text-darken-4">Card Title<i className="material-icons right">close</i></span>
								      <p>Here is some more information about this product that is only revealed once clicked on.</p>
								    </div>
								  </div>
								</div>

								<div className="col s12 m2">
									{/*Empty Div*/}
								</div>

								<div className="col s12 m5">
								  <div className="card sticky-action hoverable">
								    <div className="card-image waves-effect waves-block waves-light">
								      <img className="activator" src="./images/yumyum.png"></img>
								    </div>
								    <div className="card-action">
								      <span className="card-title activator grey-text text-darken-4">Card Title<i className="material-icons right">more_vert</i></span>
								      <p><a href="#">This is a link</a></p>
								    </div>
								    <div className="card-reveal">
								      <span className="card-title grey-text text-darken-4">Card Title<i className="material-icons right">close</i></span>
								      <p>Here is some more information about this product that is only revealed once clicked on.</p>
								    </div>
								  </div>
								</div>

						</div>
					</div>
				</div>
			</div>
		);
	}

});

module.exports = Portfolio;