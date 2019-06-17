$(document).on('click', '#delete', function () {
  console.log('delete');
  const _id = $(this).data('deletedobject');
  const nim = $(this).data('nim');

  swal({
    title: 'Are you sure?',
    text: `You will delete your comment???`,
    type: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!',
  }).then(function(result) {
    if (result.value) {
      this.csrf = csrf.value;
      axios.defaults.headers.common['X-CSRF-TOKEN'] = this.csrf;
      axios({
        method: 'DELETE',
        url: `/mahasiswa/comment/${nim}/${_id}`,
      })
        .then(function(result) {
          let data = result.data;
          swal({
            title: 'Deleted!',
            text: 'Mahasiswa has been deleted.',
            type: 'success',
            showConfirmButton: false,
          });
          setTimeout(function() {
            location.href = `/mahasiswa/info/${nim}`;
          }, 1000);
        })
        .catch(function(e) {
          swal({
            title: 'The Internet ?',
            text: 'Cannot delete this file !',
            type: 'question'
          });
        });
    }
  });
});

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