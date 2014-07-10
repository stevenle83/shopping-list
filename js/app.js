$(document).ready(function() {

	$('.add').on('click', function() {
		var item = $('.inputField').val();
		$('.inputField').val('');
		$('<div class="item"><li class="input list-group-item">' +item+ '</li><div class="remove btn btn-default">REMOVE</div></div>').appendTo('.listItem').hide().fadeIn('slow');	
	});
		
	$('.remove').on('click', function() {
		$(this).parent('.item').fadeOut('slow');
	});
		
	$('.listItem').on('click', '.input', function () {
		$(this).toggleClass("cross");
	});

	$('.listItem').sortable();


	//Added tap function for mobile devices
	$('.add').on('tap', function() {
		var item = $('.inputField').val();
		$('.inputField').val('');
		$('<div class="item"><li class="input list-group-item">' +item+ '</li><div class="remove btn btn-default">REMOVE</div></div>').appendTo('.listItem').hide().fadeIn('slow');	
	});
	
	$('.remove').on('tap', function() {
		$(this).parent('.item').fadeOut('slow');
	});

	$('.listItem').on('tap', '.input', function () {
		$(this).toggleClass("cross");
	});

});
