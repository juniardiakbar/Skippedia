function ajax(_url){
  axios({
    method: 'GET',
    url: _url
  }).then(function(result){
  	let data = result.data;
  	// console.log(data);
  	$('#tbody').html(data);
  });
}


this.csrf = csrf.value;
axios.defaults.headers.common['X-CSRF-TOKEN'] = this.csrf;
var page = $('#page').val();
var limit = $('#limit').val();
var search = $('#search').val();
var sort = $('#sort').val();
var method = $('#method').val();

var url = '/mahasiswa/all?'
var query = 'page='+page+'&limit='+limit+'&search='+search+'&angkatan=bit';

$(document).on('click','#namaASC', function(){
	ajax(url+'sort=nama&method=DESC&'+query+'&jurusan=all');
	$('#namaASC').attr('id', 'namaDESC');
  $('#icon-sort').remove();
  $('#namaDESC').append('<i class="fa fa-arrow-down" id="icon-sort"></i>');
  $('#sort').val('nama');
  $('#method').val('DESC');
});
$(document).on('click','#namaDESC', function(){
	ajax(url+'sort=nama&method=ASC&'+query+'&jurusan=all');
	$('#namaDESC').attr('id', 'namaASC');
  $('#icon-sort').remove();
  $('#namaASC').append('<i class="fa fa-arrow-up" id="icon-sort"></i>');
  $('#sort').val('nama');
  $('#method').val('ASC');
});
$(document).on('click','#nama', function(){
	ajax(url+'sort=nama&method=ASC&'+query+'&jurusan=all');
	$('#nama').attr('id', 'namaASC');
  $('#icon-sort').remove();
  $('#namaASC').append('<i class="fa fa-arrow-up" id="icon-sort"></i>')
  $('#sort').val('nama');
  $('#method').val('ASC');
});

$(document).on('click','#nimASC', function(){
	ajax(url+'sort=nim&method=DESC&'+query+'&jurusan=all');
	$('#nimASC').attr('id', 'nimDESC');
  $('#icon-sort').remove();
  $('#nimDESC').append('<i class="fa fa-arrow-down" id="icon-sort"></i>');
  $('#sort').val('nim');
  $('#method').val('DESC');
});
$(document).on('click','#nimDESC', function(){
	ajax(url+'sort=nim&method=ASC&'+query+'&jurusan=all');
	$('#nimDESC').attr('id', 'nimASC');
  $('#icon-sort').remove();
  $('#nimASC').append('<i class="fa fa-arrow-up" id="icon-sort"></i>')
  $('#sort').val('nim');
  $('#method').val('ASC');
});

$(document).on('click','#ratingASC', function(){
  ajax(url+'sort=rating&method=DESC&'+query+'&jurusan=all');
  $('#ratingASC').attr('id', 'ratingDESC');
  $('#icon-sort').remove();
  $('#ratingDESC').append('<i class="fa fa-arrow-down" id="icon-sort"></i>')
  $('#sort').val('rating');
  $('#method').val('DESC');
});
$(document).on('click','#ratingDESC', function(){
  ajax(url+'sort=rating&method=ASC&'+query+'&jurusan=all');
  $('#ratingDESC').attr('id', 'ratingASC');
  $('#icon-sort').remove();
  $('#ratingASC').append('<i class="fa fa-arrow-up" id="icon-sort"></i>')
  $('#sort').val('rating');
  $('#method').val('ASC');
});
$(document).on('click','#rating', function(){
  ajax(url+'sort=rating&method=ASC&'+query+'&jurusan=all');
  $('#rating').attr('id', 'ratingASC');
  $('#icon-sort').remove();
  $('#ratingASC').append('<i class="fa fa-arrow-up" id="icon-sort"></i>')
  $('#sort').val('rating');
  $('#method').val('ASC');
});

$('#prev').on('click', function() {
  if ($('#page').val() != '1'){
    $('#page').val(parseInt($('#page').val()) - 1);
    var page = $('#page').val();

    var query = 'page='+page+'&limit='+limit+'&search='+search+'&angkatan=bit';
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

    var query = 'page='+page+'&limit='+limit+'&search='+search+'&angkatan=bit';
    ajax(url+'sort='+sort+'&method='+method+'&'+query+'&jurusan=all');
    if (page == $('#pages').val() || $('#pages').val() == '1'){
      $('#next').addClass('disabled');
    }
    $('#prev').removeClass('disabled');
    $('#number').text(page);
  }
});

$('#search').keyup(function() {
  var search = $('#search').val();
  $('#page').val(1);
  var page = 1;
  $('#number').text(page);  
  var url = '/mahasiswa/all?'
  var query = 'page='+page+'&limit='+limit+'&search='+search+'&angkatan=bit';
  ajax(url+'sort='+sort+'&method='+method+'&'+query+'&jurusan=all');  
  console.log('OK');
});