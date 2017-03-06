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
							<img className="circle left" src="./images/meface3.png" id="meFaceImg"></img>
							<h3 id="hi">Hi, I'm Michael.</h3>
							{/*<p className="aboutP">As a person whose hobbies have always involved computer screens, it was only natural for me to develop a passion for web development. In October of 2016, I decided to turn my passion into a career and enrolled in UT Austin's Coding Bootcamp. I love the feeling of overcoming the challenges of development and plan to keep learning and improving as a developer for many years!</p>*/}

							<p className="aboutP">I'm an ex-professional gamer turned full stack web developer. As a person whose hobbies have always involved surrounding myself with computer screens, I've had a lifelong soft interest in web development. In mid-2016, I made the decision to turn that soft interest into a full-time commitment. Since then, I've gained knowledge and experience through building several projects which you can see on my <a href="/#/portfolio">work samples page</a> and <a href="https://github.com/michaeledwards91">GitHub</a>. I'm skilled with many of the web's most cutting-edge technologies and always learning more.
							</p>

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