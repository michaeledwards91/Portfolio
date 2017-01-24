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
	                <input type="text" name="name" id="nameInput"></input>
	                <label for="name" id="nameLabel">Your Name</label>
	            	</div>

	            	<div className="input-field col s12">
	                <input type="text" name="email" id="emailInput"></input>
	                <label for="email" id="emailLabel">Your Email Address</label>
	            	</div>

	            	<div className="input-field col s12">
	                <textarea className="materialize-textarea" name="message" id="messageInput"></textarea>
	                <label for="message" id="messageLabel">Your Message</label>
            		</div>


	            	<button className="btn waves-effect waves-light" type="submit" name="action">Submit
		            <i className="material-icons right">send</i>
		            </button>
							</form>

						</div>
					</div>
				</div>
			</div>
		);
	}

});

module.exports = Contact;