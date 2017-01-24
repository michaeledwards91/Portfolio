$(document).ready(function() {

	//When label for each field on contact page is clicked, focus their respective input field
	$(document).on("click", "#nameLabel", function() {
		$("#nameInput").focus();
	});
	$(document).on("click", "emailLabel", function() {
		$("#emailInput").focus();
	});
	$(document).on("click", "messageLabel", function() {
		$("#messageInput").focus();
	});

	

});