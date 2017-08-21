import $ from 'jquery';
// import whatInput from 'what-input';

window.$ = $;

// import Foundation from 'foundation-sites';
// // If you want to pick and choose which modules to include, comment out the above and uncomment
// // the line below
// //import './lib/foundation-explicit-pieces';


//E-mail Ajax Send
$("form").submit(function() { //Change
	var th = $(this);
	$.ajax({
		type: "POST",
		url: "mail.php", //Change
		data: th.serialize()
	}).done(function() {
		alert("Спасибо!");
		setTimeout(function() {
			// Done Functions
			th.trigger("reset");
		}, 1000);
	});
	return false;
});