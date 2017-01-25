//Include React
var React = require("react");

//Include child components
var SkillsGroup = require("./SkillsGroup");
var IconGroup = require("./IconGroup");
var Footer = require("./Footer");

//Create About component
var About = React.createClass({

	render: function() {
		return (
			<div className="aboutContainer">
				<div className="container">
					<div className="row">
						{/*Content*/}
						<div className="col s12 m10 push-m1 aboutCol">
							<img className="circle left" src="./images/meface2.png" id="meFaceImg"></img>
							<h3 id="hi">Hi, I'm Michael.</h3>
							<p className="aboutP">As a person whose hobbies have always involved computer screens, it was only natural for me to develop a passion for web development. In October of 2016, I decided to turn my passion into a career and enrolled in UT Austin's Coding Bootcamp. I love the feeling of overcoming the challenges of development and plan to keep learning and improving as a developer for many years!</p>

							<SkillsGroup />

						</div>

					</div>
				</div>

				<Footer />

			</div>
		);
	}

});

module.exports = About;