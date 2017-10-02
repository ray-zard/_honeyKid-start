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

$(document).on('hover', '#msMiniCart', function () {
	$.ajax({
		type: "POST",
		url: '[[~32]]',
		data: {
			parent: '[[*id]]'
		},
		success: function (data) {
			if (data) {
				$('.mini-cart .ajax-data').html(data);
			} else {
				miniShop2.Message.error('Что-то пошло не так, попробуйте позже!');
			}
		}
	});
});