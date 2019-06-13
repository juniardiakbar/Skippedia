Dropzone.autoDiscover = false;
$(document).ready(function() {
  // Get _csrf
  _csrf = csrf.value;

  // Start Dropzone Plugin
  $('#dropzoneDiv').dropzone({
    url: '/api/file/upload',
    paramName: 'file',
    maxFilesize: 5, // MB
    maxFiles: 1,
    dictDefaultMessage: 'Drag an image here to upload, or click to select one',
    dictResponseError: 'Server not Configured',
    acceptedFiles: '.png,.jpg,.gif,.jpeg',

    headers: {
      'x-csrf-token': _csrf,
    },

    init() {
      // Success
      this.on('success', function (data) {
        let response = JSON.parse(data.xhr.response);
        let file = response.message._id;

        if (file) {
          swal({
            position: 'center',
            title: 'File Successfully saved',
            type: 'success',
            showConfirmButton: false,
            timer: 1500
          })
            .then(function () {
              $("#myImagePicker").val(file);
            });
        }
      });

      // Error
      this.on('error', function () {
        swal({
          type: 'error',
          title: 'Oops...',
          text: 'File format must .png, .jpg, .gif, .jpeg and max file is 1',
        })
          .then(function () {
            location.reload();
          });
      });
    }
  });
});