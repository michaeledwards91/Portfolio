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
						<div className="col s12 m10 push-m1">
							<img className="circle left" src="./images/meface2.png" id="meFaceImg"></img>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nec enim at lorem convallis porta vel lacinia velit. Phasellus semper porttitor mattis. In ut dui vulputate, tempor diam eu, aliquet tellus. Integer faucibus sem turpis. Phasellus non bibendum ligula, a pulvinar sapien. Integer fermentum ornare lacus, non lacinia nisi aliquam auctor. Fusce augue nunc, laoreet ut sem at, bibendum mollis ex. Suspendisse lorem diam, iaculis id augue id, tempus imperdiet massa. Aliquam erat volutpat.</p>
							<p>

								Nulla facilisis lorem eget feugiat porta. Nulla congue id enim eget interdum. Donec fringilla risus at elit tempus convallis. Sed tincidunt massa eu dapibus pharetra. Curabitur vestibulum nibh ut nulla malesuada, quis accumsan quam lobortis. Phasellus vitae turpis id dolor elementum tincidunt at eu erat. Praesent sed tellus vestibulum, dignissim felis eu, mollis lectus. Morbi faucibus blandit mattis. Vivamus et pharetra felis, id tincidunt augue.</p>

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