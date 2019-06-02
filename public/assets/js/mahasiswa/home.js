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
var url = '/mahasiswa/all?'
var method = 'page=&limit='+limit+'&search=&angkatan=all';

$('#allCarry').on('click', function(){
	ajax(url+'sort=rating&method=DESC&'+method+'&jurusan=all', '#tabelCarry');
});

$('#ifCarry').on('click', function(){
	ajax(url+'sort=rating&method=DESC&'+method+'&jurusan=if', '#tabelCarry');
});

$('#stiCarry').on('click', function(){
	ajax(url+'sort=rating&method=DESC&'+method+'&jurusan=sti', '#tabelCarry');
});

$('#allSkip').on('click', function(){
	ajax(url+'sort=rating&method=ASC&'+method+'&jurusan=all', '#tabelSkip');
});

$('#ifSkip').on('click', function(){
	ajax(url+'sort=rating&method=ASC&'+method+'&jurusan=if', '#tabelSkip');
});

$('#stiSkip').on('click', function(){
	ajax(url+'sort=rating&method=ASC&'+method+'&jurusan=sti', '#tabelSkip');
});