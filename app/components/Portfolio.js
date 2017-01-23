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

								<div className="col s12 m6">
								  <div className="card sticky-action hoverable">
								    <div className="card-image waves-effect waves-block waves-light">
								      <img className="activator responsive-img" src="./images/yumyum3.png"></img>

								    </div>
								    
								    <div className="card-action">
								      <div className="card-title activator grey-text text-darken-4"><a href="http://yum-yumrecipes.herokuapp.com/" className="deployedLink" target="_blank">Yum-Yum Recipes</a><i className="material-icons right">more_vert</i></div>
								      <p className="cardActionP">
								      <img className="githubImg" src="./images/githubicon.png" alt="GitHub"></img>
								      <a className="githubLink" href="https://github.com/Rhyngoh/ProjectDionysus">GitHub</a>
								      </p>
								    </div>
								    <div className="card-reveal">
								      <span className="card-title grey-text text-darken-4"><i className="material-icons right">close</i></span>
								      <p>MySQL, Node, Express, and Handlebars application that displays recipes, ingredients, and instructions to the user and allows the user to save ingredients to a shopping list. Used Trello and Git/GitHub to collaborate with 3 other students. Personally designed and implemented code to style page and display results from database queries on the page.</p>
								    </div>
								  </div>
								</div>
								
								<div className="col s12 m6">
								  <div className="card sticky-action hoverable">
								    <div className="card-image waves-effect waves-block waves-light">
								      <img className="activator responsive-img" src="./images/typsyweather.png"></img>
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