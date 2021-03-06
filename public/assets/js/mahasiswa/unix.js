function ajax(_url){
  axios({
    method: 'GET',
    url: _url
  }).then(function(result){
  	let data = result.data;
  	$('#tbody').html(data);
    $('#number').html($('#page').val())
  });
}


this.csrf = csrf.value;
axios.defaults.headers.common['X-CSRF-TOKEN'] = this.csrf;

var url = '/mahasiswa/all?'

$(document).on('click','#namaASC', function(){
  $('#page').val(1);
  var page = $('#page').val();
  var limit = $('#limit').val();
  var search = $('#search').val();

  var query = 'page='+page+'&limit='+limit+'&search='+search+'&angkatan=unix';

	ajax(url+'sort=nama&method=DESC&'+query+'&jurusan=all');
	$('#namaASC').attr('id', 'namaDESC');
  $('#icon-sort').remove();
  $('#namaDESC').append('<i class="fas fa-sort-alpha-up fa-lg" id="icon-sort"></i>');
  $('#sort').val('nama');
  $('#method').val('DESC');
});
$(document).on('click','#namaDESC', function(){
  $('#page').val(1);
  var page = $('#page').val();
  var limit = $('#limit').val();
  var search = $('#search').val();

  var query = 'page='+page+'&limit='+limit+'&search='+search+'&angkatan=unix';

	ajax(url+'sort=nama&method=ASC&'+query+'&jurusan=all');
	$('#namaDESC').attr('id', 'namaASC');
  $('#icon-sort').remove();
  $('#namaASC').append('<i class="fas fa-sort-alpha-down fa-lg" id="icon-sort"></i>');
  $('#sort').val('nama');
  $('#method').val('ASC');
});

$(document).on('click','#nama', function(){
  $('#page').val(1);
  var page = $('#page').val();
  var limit = $('#limit').val();
  var search = $('#search').val();

  var query = 'page='+page+'&limit='+limit+'&search='+search+'&angkatan=unix';

	ajax(url+'sort=nama&method=ASC&'+query+'&jurusan=all');
	$('#nama').attr('id', 'namaASC');
  $('#icon-sort').remove();
  $('#namaASC').append('<i class="fas fa-sort-alpha-down fa-lg" id="icon-sort"></i>')
  $('#sort').val('nama');
  $('#method').val('ASC');
});

$(document).on('click','#nimASC', function(){
  $('#page').val(1);
  var page = $('#page').val();
  var limit = $('#limit').val();
  var search = $('#search').val();

  var query = 'page='+page+'&limit='+limit+'&search='+search+'&angkatan=unix';

	ajax(url+'sort=nim&method=DESC&'+query+'&jurusan=all');
	$('#nimASC').attr('id', 'nimDESC');
  $('#icon-sort').remove();
  $('#nimDESC').append('<i class="fas fa-sort-numeric-up fa-lg" id="icon-sort"></i>');
  $('#sort').val('nim');
  $('#method').val('DESC');
});

$(document).on('click','#nimDESC', function(){
  $('#page').val(1);
  var page = $('#page').val();
  var limit = $('#limit').val();
  var search = $('#search').val();

  var query = 'page='+page+'&limit='+limit+'&search='+search+'&angkatan=unix';

	ajax(url+'sort=nim&method=ASC&'+query+'&jurusan=all');
	$('#nimDESC').attr('id', 'nimASC');
  $('#icon-sort').remove();
  $('#nimASC').append('<i class="fas fa-sort-numeric-down fa-lg" id="icon-sort"></i>')
  $('#sort').val('nim');
  $('#method').val('ASC');
});

$(document).on('click','#ratingASC', function(){
  $('#page').val(1);
  var page = $('#page').val();
  var limit = $('#limit').val();
  var search = $('#search').val();

  var query = 'page='+page+'&limit='+limit+'&search='+search+'&angkatan=unix';

  ajax(url+'sort=rating&method=DESC&'+query+'&jurusan=all');
  $('#ratingASC').attr('id', 'ratingDESC');
  $('#icon-sort').remove();
  $('#ratingDESC').append('<i class="fas fa-sort-numeric-up fa-lg" id="icon-sort"></i>')
  $('#sort').val('rating');
  $('#method').val('DESC');
});

$(document).on('click','#ratingDESC', function(){
  $('#page').val(1);
  var page = $('#page').val();
  var limit = $('#limit').val();
  var search = $('#search').val();

  var query = 'page='+page+'&limit='+limit+'&search='+search+'&angkatan=unix';

  ajax(url+'sort=rating&method=ASC&'+query+'&jurusan=all');
  $('#ratingDESC').attr('id', 'ratingASC');
  $('#icon-sort').remove();
  $('#ratingASC').append('<i class="fas fa-sort-numeric-down fa-lg" id="icon-sort"></i>')
  $('#sort').val('rating');
  $('#method').val('ASC');
});

$(document).on('click','#rating', function(){
  $('#page').val(1);
  var page = $('#page').val();
  var limit = $('#limit').val();
  var search = $('#search').val();

  var query = 'page='+page+'&limit='+limit+'&search='+search+'&angkatan=unix';

  ajax(url+'sort=rating&method=ASC&'+query+'&jurusan=all');
  $('#rating').attr('id', 'ratingASC');
  $('#icon-sort').remove();
  $('#ratingASC').append('<i class="fas fa-sort-numeric-down fa-lg" id="icon-sort"></i>')
  $('#sort').val('rating');
  $('#method').val('ASC');
});

$(document).on('click','#login', function(){
  $('#page').val(1);
  var page = $('#page').val();
  var limit = $('#limit').val();
  var search = $('#search').val();

  var query = 'page='+page+'&limit='+limit+'&search='+search+'&angkatan=unix';

  ajax(url+'sort=haveLogin&method=DESC&'+query+'&jurusan=all');
  $('#login').attr('id', 'loginDESC');
  $('#icon-sort').remove();
  $('#loginDESC').append('<i class="fas fa-check fa-lg" id="icon-sort"></i>')
  $('#sort').val('haveLogin');
  $('#method').val('DESC');
});

$(document).on('click','#loginDESC', function(){
  $('#page').val(1);
  var page = $('#page').val();
  var limit = $('#limit').val();
  var search = $('#search').val();

  var query = 'page='+page+'&limit='+limit+'&search='+search+'&angkatan=unix';

  ajax(url+'sort=haveLogin&method=ASC&'+query+'&jurusan=all');
  $('#loginDESC').attr('id', 'loginASC');
  $('#icon-sort').remove();
  $('#loginASC').append('<i class="fas fa-times fa-lg" id="icon-sort"></i>')
  $('#sort').val('haveLogin');
  $('#method').val('ASC');
});

$(document).on('click','#loginASC', function(){
  $('#page').val(1);
  var page = $('#page').val();
  var limit = $('#limit').val();
  var search = $('#search').val();

  var query = 'page='+page+'&limit='+limit+'&search='+search+'&angkatan=unix';

  ajax(url+'sort=haveLogin&method=DESC&'+query+'&jurusan=all');
  $('#loginASC').attr('id', 'loginDESC');
  $('#icon-sort').remove();
  $('#loginDESC').append('<i class="fas fa-check fa-lg" id="icon-sort"></i>')
  $('#sort').val('haveLogin');
  $('#method').val('DESC');
});

$('#prev').on('click', function() {
  if ($('#page').val() != '1'){
    $('#page').val(parseInt($('#page').val()) - 1);
    var page = $('#page').val();
    var limit = $('#limit').val();
    var search = $('#search').val();
    var sort = $('#sort').val();
    var method = $('#method').val();

    var query = 'page='+page+'&limit='+limit+'&search='+search+'&angkatan=unix';
    ajax(url+'sort='+sort+'&method='+method+'&'+query+'&jurusan=all');
    if (page == '1'){
      $('#prev').addClass('disabled');
    }
    $('#next').removeClass('disabled');
    $('#number').text(page);
  }
});

$('#next').on('click', function() {
  if ($('#page').val() != $('#pages').val() && $('#pages').val() != '1'){
    $('#page').val(parseInt($('#page').val()) + 1);
    var page = $('#page').val();
    var limit = $('#limit').val();
    var search = $('#search').val();
    var sort = $('#sort').val();
    var method = $('#method').val();

    var query = 'page='+page+'&limit='+limit+'&search='+search+'&angkatan=unix';
    ajax(url+'sort='+sort+'&method='+method+'&'+query+'&jurusan=all');
    if (page == $('#pages').val() || $('#pages').val() == '1'){
      $('#next').addClass('disabled');
    }
    $('#prev').removeClass('disabled');
    $('#number').text(page);
  }
});

$('#search').keyup(function() {
  var limit = $('#limit').val();
  var sort = $('#sort').val();
  var method = $('#method').val();
  var search = $('#search').val();
  
  $('#page').val(1);
  var page = 1;
  $('#number').text(page);  
  var url = '/mahasiswa/all?'
  var query = 'page='+page+'&limit='+limit+'&search='+search+'&angkatan=unix';
  ajax(url+'sort='+sort+'&method='+method+'&'+query+'&jurusan=all');  
  console.log('OK');
});