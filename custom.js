$('document').ready(function(){
	var owlCarousel = $('.owl-carousel');
	owlCarousel.each(function() {
		$(this).owlCarousel($(this).data('owl-carousel-options'));
	});
})