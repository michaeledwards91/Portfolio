//Include React
var React = require("react");

var IconGroup = React.createClass({

	render: function() {
		return (
			<div className="contactIconContainer" id="contactIconWrapper">
				<a href="https://www.linkedin.com/in/michaeledwards91"><img className="contactIcon" src="./images/linkedin-logo-lg-transparent.png" alt="LinkedIn"></img></a>

				<a href="https://github.com/michaeledwards91"><img className="contactIcon" src="./images/github-logo-lg.png" alt="GitHub"></img></a>

				<a href="http://stackoverflow.com/users/7038116/michael-edwards"><img className="contactIcon" src="./images/stackoverflow-logo-transparent.png" alt="StackOverflow"></img></a>
			</div>
		);
	}

});

module.exports = IconGroup;