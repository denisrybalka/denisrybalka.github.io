$('.order-btn').click(function() {
	$('main').css('filter','blur(5px)');
	$('.modal').fadeIn();
});

$('.close-popup').click(function() {
	$('.modal').fadeOut();
	$('main').css('filter','none');
});

$('.recall-btn').click(function() {
	$('.modal').fadeOut();
	$('.thanks-modal').fadeIn()
});


// $('.popup-btn').click(function() {
// 	$('.modal').fadeOut();
// 	$('.thanks-modal').fadeIn()
// });

$('.thanks-close-popup').click(function() {
	$('.thanks-popup').fadeOut();
	$('main').css('filter','none');
});

