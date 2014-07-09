$(document).ready(function() {
	
	$('.add').on('click', function() {
		var item = $('.inputField').val();
		$('.inputField').val('');
		$('.listItem').append('<div class="item"><li class="input list-group-item">' +item+ '</li><div class="remove btn btn-default">REMOVE</div></div>');
			
		$('.listItem').on('click', '.remove', function() {
			$(this).parent('.item').remove();
		});
	});

	$('.listItem').on('click', '.input', function () {
		$(this).toggleClass("cross");
	});

});