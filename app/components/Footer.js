//Include React
var React = require("react");

//Include child components
var IconGroup = require("./IconGroup");

//Create Footer component
var Footer = React.createClass({
	render: function() {
		return (
			<div className="footerContainer">
				<footer className="page-footer">
					<div className="container">
						<div className="row footerRow">
							<div className="col s12 l6 push-l3">
								<IconGroup />
							</div>
						</div>
					</div>
				</footer>
			</div>
		);
	}
});

module.exports = Footer;