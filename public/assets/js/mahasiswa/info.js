var rating = parseFloat($('#input-rating').val());
if (rating > 4.5) {
	for (var i=0; i<5; i++) {
		$('#rating').append(`<span class="star fa fa-star fill"></span>`);	
	}
} else if (rating > 4) {
	for (var i=0; i<4; i++) {
		$('#rating').append(`<span class="star fa fa-star fill"></span>`);	
	}
	$('#rating').append(`<span class="star fa fa-star-half-alt fill"></span>`);		
} else if (rating > 3.5) {
	for (var i=0; i<4; i++) {
		$('#rating').append(`<span class="star fa fa-star fill"></span>`);	
	}
	$('#rating').append(`<span class="star fa fa-star"></span>`);	
} else if (rating > 3) {
	for (var i=0; i<3; i++) {
		$('#rating').append(`<span class="star fa fa-star fill"></span>`);	
	}
	$('#rating').append(`<span class="star fa fa-star-half-alt fill"></span>`);
	$('#rating').append(`<span class="star fa fa-star"></span>`);
} else if (rating > 2.5) {
	for (var i=0; i<3; i++) {
		$('#rating').append(`<span class="star fa fa-star fill"></span>`);	
	}
	$('#rating').append(`<span class="star fa fa-star"></span>`);
	$('#rating').append(`<span class="star fa fa-star"></span>`);
} else if (rating > 2) {
	$('#rating').append(`<span class="star fa fa-star fill"></span>`);	
	$('#rating').append(`<span class="star fa fa-star fill"></span>`);	
	$('#rating').append(`<span class="star fa fa-star-half-alt fill"></span>`);
	$('#rating').append(`<span class="star fa fa-star"></span>`);
	$('#rating').append(`<span class="star fa fa-star"></span>`);
} else if (rating > 1.5) {
	$('#rating').append(`<span class="star fa fa-star fill"></span>`);	
	$('#rating').append(`<span class="star fa fa-star fill"></span>`);	
	for (var i=0; i<3; i++) {
		$('#rating').append(`<span class="star fa fa-star"></span>`);	
	}
} else if (rating > 1) {
	$('#rating').append(`<span class="star fa fa-star fill"></span>`);	
	$('#rating').append(`<span class="star fa fa-star-half-alt fill"></span>`);
	for (var i=0; i<3; i++) {
		$('#rating').append(`<span class="star fa fa-star"></span>`);	
	}
} else if (rating > 0.5) {
	$('#rating').append(`<span class="star fa fa-star fill"></span>`);	
	for (var i=0; i<4; i++) {
		$('#rating').append(`<span class="star fa fa-star"></span>`);	
	}
}