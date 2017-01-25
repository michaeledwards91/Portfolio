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
							<div className="col l4 push-l4">
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