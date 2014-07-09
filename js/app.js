$(document).ready(function() {
	
	$('.add').on('click', function() {
		var item = $('.inputField').val();
		$('.listItem').append('<div class="item"><li class="input list-group-item">' +item+ '</li><div class="remove btn btn-default">REMOVE</div></div>');
		$('.inputField').val('');

		$('.remove').on('click', function() {
			$(this).parent('.item').remove();
		});
	});

	$('.listItem').on('click', '.input', function () {
		$(this).toggleClass("cross");
	});

});

