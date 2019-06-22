function ajax(_url, _div){
  axios({
    method: 'GET',
    url: _url
  }).then(function(result){
	var data = result.data;  
  	$(_div).html(data);
  });
}


// this.csrf = csrf.value;
// axios.defaults.headers.common['X-CSRF-TOKEN'] = this.csrf;
var limit = 10;
$('#pageBest').val(1);
$('#pageWorst').val(1);
$('#jurusanBest').val('all');
$('#jurusanWorst').val('all');
var url = '/mahasiswa/allHome?'

$('#allCarry').on('click', function(){
	$('#jurusanBest').val('all');
	$('#pageBest').val(1);

	var page = $('#pageBest').val();
	var pages = $('#pages').val();
	if (pages <= 1) {
		$('#nextBest').addClass('disabled')
	}
	else {
		$('#nextBest').removeClass('disabled')
	}
	$('#prevBest').addClass('disabled')
	$('#numberBest').text(page);
	var method = 'page='+page+'&limit='+limit+'&search=&angkatan=all';
	ajax(url+'sort=rating&method=DESC&'+method+'&jurusan=all', '#tabelCarry');
});

$('#ifCarry').on('click', function(){
	$('#jurusanBest').val('if');
	$('#pageBest').val(1);

	var page = $('#pageBest').val();
	var pages = $('#pagesIf').val();
	if (pages <= 1) {
		$('#nextBest').addClass('disabled')
	}
	else {
		$('#nextBest').removeClass('disabled')
	}
	$('#prevBest').addClass('disabled')
	$('#numberBest').text(page);
	var method = 'page='+page+'&limit='+limit+'&search=&angkatan=all';
	ajax(url+'sort=rating&method=DESC&'+method+'&jurusan=if', '#tabelCarry');
});

$('#stiCarry').on('click', function(){
	$('#jurusanBest').val('sti');
	$('#pageBest').val(1);

	var page = $('#pageBest').val();
	var pages = $('#pagesSti').val();
	if (pages <= 1) {
		$('#nextBest').addClass('disabled')
	}
	else {
		$('#nextBest').removeClass('disabled')
	}
	$('#prevBest').addClass('disabled')
	$('#numberBest').text(page);
	var method = 'page='+page+'&limit='+limit+'&search=&angkatan=all';
	ajax(url+'sort=rating&method=DESC&'+method+'&jurusan=sti', '#tabelCarry');
});

$('#allSkip').on('click', function(){
	$('#jurusanWorst').val('all');
	$('#pageWorst').val(1);

	var page = $('#pageWorst').val();
	var pages = $('#pages').val();
	if (pages <= 1) {
		$('#nextWorst').addClass('disabled')
	}
	else {
		$('#nextWorst').removeClass('disabled')
	}
	$('#prevWorst').addClass('disabled')
	$('#numberWorst').text(page);
	var method = 'page='+page+'&limit='+limit+'&search=&angkatan=all';
	ajax(url+'sort=rating&method=ASC&'+method+'&jurusan=all', '#tabelSkip');
});

$('#ifSkip').on('click', function(){
	$('#jurusanWorst').val('if');
	$('#pageWorst').val(1);

	var page = $('#pageWorst').val();
	var pages = $('#pagesIf').val();
	if (pages <= 1) {
		$('#nextWorst').addClass('disabled')
	}
	else {
		$('#nextWorst').removeClass('disabled')
	}
	$('#prevWorst').addClass('disabled')
	$('#numberWorst').text(page);
	var method = 'page='+page+'&limit='+limit+'&search=&angkatan=all';
	ajax(url+'sort=rating&method=ASC&'+method+'&jurusan=if', '#tabelSkip');
});

$('#stiSkip').on('click', function(){
	$('#jurusanWorst').val('sti');
	$('#pageWorst').val(1);

	var page = $('#pageWorst').val();
	var pages = $('#pagesSti').val();
	console.log(pages);
	if (pages <= 1) {
		$('#nextWorst').addClass('disabled')
	}
	else {
		$('#nextWorst').removeClass('disabled')
	}
	$('#prevWorst').addClass('disabled')
	$('#numberWorst').text(page);
	var method = 'page='+page+'&limit='+limit+'&search=&angkatan=all';
	ajax(url+'sort=rating&method=ASC&'+method+'&jurusan=sti', '#tabelSkip');
});

$('#prevBest').on('click', function() {
	if ($('#pageBest').val() != 1) {
		$('#pageBest').val(parseInt($('#pageBest').val()) -1);
		var page = $('#pageBest').val();

		if (page <= 1) {
			$('#prevBest').addClass('disabled');
		}
		$('#nextBest').removeClass('disabled');
    	$('#numberBest').text(page);

		var jurusan = $('#jurusanBest').val()
		var method = 'page='+page+'&limit='+limit+'&search=&angkatan=all';
		ajax(url+'sort=rating&method=DESC&'+method+'&jurusan='+jurusan, '#tabelCarry');
	}
});

$('#nextBest').on('click', function() {
	var pages = $('#pages').val();
	if ($('#jurusanBest').val() == 'if') {
		pages = $('#pagesIf').val();
	}
	else if ($('#jurusanBest').val() == 'sti') {
		pages = $('#pagesSti').val();
	}
	if ($('#pageBest').val() != pages && pages > 1) {
		$('#pageBest').val(parseInt($('#pageBest').val()) + 1);
		var page = $('#pageBest').val();

		if (page == pages || pages == 1){
			$('#nextBest').addClass('disabled');
		}
		$('#prevBest').removeClass('disabled');
		$('#numberBest').text(page);
		
		var jurusan = $('#jurusanBest').val()
		var method = 'page='+page+'&limit='+limit+'&search=&angkatan=all';
		ajax(url+'sort=rating&method=DESC&'+method+'&jurusan='+jurusan, '#tabelCarry');
	}
});

$('#prevWorst').on('click', function() {
	if ($('#pageWorst').val() != 1) {
		$('#pageWorst').val(parseInt($('#pageWorst').val()) -1);
		var page = $('#pageWorst').val();

		if (page == '1'){
			$('#prevWorst').addClass('disabled');
		}
		$('#nextWorst').removeClass('disabled');
    	$('#numberWorst').text(page);

		var jurusan = $('#jurusanWorst').val()
		var method = 'page='+page+'&limit='+limit+'&search=&angkatan=all';
		ajax(url+'sort=rating&method=ASC&'+method+'&jurusan='+jurusan, '#tabelSkip');
	}
});

$('#nextWorst').on('click', function() {
	var pages = $('#pages').val();
	if ($('#jurusanWorst').val() == 'if') {
		pages = $('#pagesIf').val();
	}
	else if ($('#jurusanWorst').val() == 'sti') {
		pages = $('#pagesSti').val();
	}
	if ($('#pageWorst').val() != pages && pages > 1) {
		$('#pageWorst').val(parseInt($('#pageWorst').val()) + 1);
		var page = $('#pageWorst').val();

		if (page == pages || pages == 1){
			$('#nextWorst').addClass('disabled');
		}
		$('#prevWorst').removeClass('disabled');
		$('#numberWorst').text(page);
		
		var jurusan = $('#jurusanWorst').val()
		var method = 'page='+page+'&limit='+limit+'&search=&angkatan=all';
		ajax(url+'sort=rating&method=ASC&'+method+'&jurusan='+jurusan, '#tabelSkip');
	}
});

