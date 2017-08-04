// import $ from 'jquery';
// import whatInput from 'what-input';

// window.$ = $;

// import Foundation from 'foundation-sites';
// // If you want to pick and choose which modules to include, comment out the above and uncomment
// // the line below
// //import './lib/foundation-explicit-pieces';


// $(document).foundation();

// Set the date we're counting down to
var countDownDate = new Date("Aug 20, 2017 13:00:00 GMT+4").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get todays date and time
  var now = new Date().getTime();

  // Find the distance between now an the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
	var seconds = Math.floor((distance % (1000 * 60)) / 1000);
	
  // Display the result in the element with id="demo"
  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
	document.getElementById("minutes").innerHTML = minutes;
	
	// alert(days.length);

	// if (days < 5) {
	// 	document.getElementById("days").nextSibling.innerHTML = 'Дня';
	// } if (days < 2) {
	// 	document.getElementById("days").nextSibling.innerHTML = 'Днь';
	// }

	if (days == 21) {
		document.getElementById("days").nextSibling.innerHTML = 'День';
	} if (days > 21) {
		document.getElementById("days").nextSibling.innerHTML = 'Дней';
	} if (days > 5) {
		document.getElementById("days").nextSibling.innerHTML = 'Дня';
	} if (days < 1) {
		document.getElementById("days").nextSibling.innerHTML = 'День';
	}


	if (hours > 21) {
		document.getElementById("hours").nextSibling.innerHTML = 'Часа';
	} if (hours == 21) {
		document.getElementById("hours").nextSibling.innerHTML = 'Час';
	} if (hours >= 5) {
		document.getElementById("hours").nextSibling.innerHTML = 'Часов';
	} if (hours < 1) {
		document.getElementById("hours").nextSibling.innerHTML = 'Часа';
	} if (hours < 5) {
		document.getElementById("hours").nextSibling.innerHTML = 'Час';
	}
	   

	if (minutes < 5) {
		document.getElementById("minutes").nextSibling.innerHTML = 'Минута';
	} if (minutes < 2) {
		document.getElementById("minutes").nextSibling.innerHTML = 'Минуты';
	} if (minutes >= 5) {
		document.getElementById("minutes").nextSibling.innerHTML = 'Минут';
	} if (minutes == 21) {
		document.getElementById("minutes").nextSibling.innerHTML = 'Минута';
	} if (minutes > 21) {
		document.getElementById("minutes").nextSibling.innerHTML = 'Минуты';
	} if (minutes >= 25) {
		document.getElementById("minutes").nextSibling.innerHTML = 'Минут';
	} if (minutes == 31) {
		document.getElementById("minutes").nextSibling.innerHTML = 'Минута';
	} if (minutes > 31) {
		document.getElementById("minutes").nextSibling.innerHTML = 'Минуты';
	} if (minutes >= 35) {
		document.getElementById("minutes").nextSibling.innerHTML = 'Минут';
	} if (minutes == 41) {
		document.getElementById("minutes").nextSibling.innerHTML = 'Минута';
	} if (minutes > 41) {
		document.getElementById("minutes").nextSibling.innerHTML = 'Минуты';
	} if (minutes >= 45) {
		document.getElementById("minutes").nextSibling.innerHTML = 'Минут';
	} if (minutes == 51) {
		document.getElementById("minutes").nextSibling.innerHTML = 'Минута';
	} if (minutes < 51) {
		document.getElementById("minutes").nextSibling.innerHTML = 'Минуты';
	} if (minutes >= 55) {
		document.getElementById("minutes").nextSibling.innerHTML = 'Минут';
	}

}, 1000);