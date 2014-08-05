$(document).ready(function() {

	$('form').submit(function(event) {
		event.preventDefault();
		var item = $('.inputField').val();
		$('.inputField').val('');
		$('<div class="item"><li class="input list-group-item">' +item+ '</li><div class="remove btn btn-default">REMOVE</div></div>').appendTo('.listItem').hide().fadeIn('slow');	
		$('.inputField').focus();
	});
		
	$('.listItem').on('click', '.remove', function() {
		$(this).parent('.item').fadeOut('slow');
	});
		
	$('.listItem').on('click', '.input', function () {
		$(this).toggleClass("cross");
	});

	$('.inputField').focus();

	$('.listItem').sortable();


	//Added tap function for mobile devices
	$('.add').on('tap', function() {
		var item = $('.inputField').val();
		$('.inputField').val('');
		$('<div class="item"><li class="input list-group-item">' +item+ '</li><div class="remove btn btn-default">REMOVE</div></div>').appendTo('.listItem').hide().fadeIn('slow');	
	});
	
	$('.listItem').on('tap', '.remove', function() {
		$(this).parent('.item').fadeOut('slow');
	});

	$('.listItem').on('tap', '.input', function () {
		$(this).toggleClass("cross");
	});

});