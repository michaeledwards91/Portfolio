//Include React
var React = require("react");

//Create SkillsGroup component
var SkillsGroup = React.createClass({
	render: function() {
		return (

				
			<div className="skillsGroupContainer">
				<h3 className="center" id="skillsH3">Skills</h3>

				<div className="skillsIconsWrapper">
					{/*HTML5, CSS3, JavaScript, jQuery, Node.js, Express.js, React.js, MongoDB, MySQL, Heroku, Materialize, Bootstrap, Git, Handlebars.js*/}
					<img className="skillsIcon" src="./images/skill-icons/html5.ico"></img>
					<img className="skillsIcon" src="./images/skill-icons/css3.png"></img>
					<img className="skillsIcon" src="./images/skill-icons/javascript.png"></img>
					<img className="skillsIcon" src="./images/skill-icons/jquery.png"></img>
					<img className="skillsIcon" src="./images/skill-icons/nodejs.png"></img>
					<img className="skillsIcon" src="./images/skill-icons/expressjs.png"></img>
					<img className="skillsIcon" src="./images/skill-icons/reactjs.png"></img>
					<img className="skillsIcon" src="./images/skill-icons/mongodb.png"></img>
					<img className="skillsIcon" src="./images/skill-icons/mysql.png"></img>
					<img className="skillsIcon" src="./images/skill-icons/heroku.png"></img>
					<img className="skillsIcon" src="./images/skill-icons/materializecss.png"></img>
					<img className="skillsIcon" src="./images/skill-icons/bootstrapcss.png"></img>
					<img className="skillsIcon" src="./images/skill-icons/git.png"></img>
					<img className="skillsIcon" src="./images/skill-icons/handlebars.png"></img>

				</div>
			</div>

		);
	}
});

module.exports = SkillsGroup;