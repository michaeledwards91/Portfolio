$(document).ready(function() {

	//When label for each field on contact page is clicked, focus their respective input field
	$(document).on("click", "#nameLabel", function() {
		$("#nameInput").focus();
	});
	$(document).on("click", "#emailLabel", function() {
		$("#emailInput").focus();
	});
	$(document).on("click", "#messageLabel", function() {
		$("#messageInput").focus();
	});
	//End of label clicks

	//Toast to notify user of successful email send
	$(document).on("click", "#submitBtn", function() {
		Materialize.toast("Thanks for contacting me!", 4000);
	});

	//Rotate In effect on page load
	$("#indexH1").textillate( {in: { effect: 'rotateIn' }, out: { effect: 'hinge', shuffle: true }} );
	//Rotate In effect when clicking name
	$(document).on("click", ".brand-logo", function() {
		$("#indexH1").textillate( {in: { effect: 'rotateIn' }, out: { effect: 'hinge', shuffle: true } } );
		$("#indexH1").textillate("in");
	});

});