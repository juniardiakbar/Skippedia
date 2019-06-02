$(document).ready(function() {
    $('.deleteButton').click(function () {
      const _id = $(this).data('deletedobject');
  
      swal({
        title: 'Are you sure?',
        text: `You will delete this id '${_id}'`,
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
            url: `/mahasiswa/delete/${_id}`,
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
                location.href = "/dashboard/mahasiswa";
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
  });
  