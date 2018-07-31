$(document).ready(function() {
	$('.jiage').hover(function() {
		$(this).css({
			'color': '#fff',
			'background': '#428bca',
			'margin': '20px 5px',
		});
	}, function() {
		$(this).css({
			'color': '#428bca',
			'background': '#fff',
			'margin': '20px',
		});
	});
});