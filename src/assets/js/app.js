import $ from 'jquery';
import whatInput from 'what-input';

window.$ = $;

// import Foundation from 'foundation-sites';
// If you want to pick and choose which modules to include, comment out the above and uncomment
// the line below
import './lib/foundation-explicit-pieces';
import './lib/main-scripts';

$(document).foundation();

var newElem = new Foundation.Orbit($('.presentation'), {
	// autoPlay: false,
	animInFromLeft: 'fade-in',
	animInFromRight: 'fade-in', 
	animOutToLeft: 'fade-out',
	animOutToRight: 'fade-out',
	boxOfBullets: 'presentation__bullets',
	containerClass: 'presentation__container',
	slideClass: 'presentation__slide',
});

// var miniCartMenu = new Foundation.DropdownMenu(
// 	$('#miniCart')
// );