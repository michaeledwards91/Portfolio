//Include React
var React = require("react");

//Include Child components
var Navbar = require("./Navbar");

//Create Contact component
var Contact = React.createClass({

	render: function() {
		return (
			<div className="contactContainer">
				<div className="container">
					<div className="row">
						<div className="col s12 m8 push-m2">
							
							<form action="/api/mailer" method="POST">
								<div className="input-field col s12">
									<i className="material-icons prefix">account_circle</i>
	                <input type="text" name="name" id="nameInput"></input>
	                <label htmlFor="name" id="nameLabel">Your Name</label>
	            	</div>

	            	<div className="input-field col s12">
	            		<i className="material-icons prefix">info</i>
	                <input type="text" name="email" id="emailInput"></input>
	                <label htmlFor="email" id="emailLabel">Your Email Address</label>
	            	</div>

	            	<div className="input-field col s12">
	            		<i className="material-icons prefix">note_add</i>
	                <textarea className="materialize-textarea" name="message" id="messageInput"></textarea>
	                <label htmlFor="message" id="messageLabel">Your Message</label>
            		</div>


	            	<button className="btn waves-effect waves-light" type="submit" name="action" id="submitBtn">Submit
		            <i className="material-icons right">send</i>
		            </button>
							</form>

						</div>
					</div>

					<div className="row">
						<div className="col s12 m8 push-m2 contactIconContainer">

							<a href="https://www.linkedin.com/in/michaeledwards91"><img className="contactIcon" src="./images/linkedin-logo-lg-transparent.png" alt="LinkedIn"></img></a>

							<a href="https://github.com/michaeledwards91"><img className="contactIcon" src="./images/github-logo-lg.png" alt="GitHub"></img></a>

							<a href="http://stackoverflow.com/users/7038116/michael-edwards"><img className="contactIcon" src="./images/stackoverflow-logo-transparent.png" alt="StackOverflow"></img></a>

						</div>
					</div>
				</div>
			</div>
		);
	}

});

module.exports = Contact;