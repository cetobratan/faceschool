$(function(){






var _template = '<div class="post">'+
		'<div class="row">'+
			'<div class="col-md-1">'+
				'<img src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTHSgCIl9AhqSb3GLNVDhnKtgcMf20ddr1V0MyZ5ssNMVIunP93cNzBhA" alt="">'+
			'</div>'+
			'<div class="col-md-11">'+
				'<h4>:nombre:</h4>'+
				'<span><i>:fecha:</i></span>'+
			'</div>'+
		'</div>'+
		'<div class="row">'+
			'<div class="col-md-12">'+
			':texto:'+
			'</div>'+
		'</div>'+
		'<hr>'+
		'<div class="row">'+
			'<div class="col-md-1"><span><i class="icon-img u-mgu"></i></span></div>'+
			'<div class="col-md-1"><span><i class="icon-img u-men"></i></span></div>'+
			'<div class="col-md-1"><span><i class="icon-img u-mdi"></i></span></div>'+
			'<div class="col-md-1"><span><i class="icon-img u-mas"></i></span></div>'+
			'<div class="col-md-1"><span><i class="icon-img u-ment"></i></span></div>'+
			'<div class="col-md-1"><span><i class="icon-img u-meno"></i></span></div>'+
		'</div>'+
'</div>';

listado_fire();
function listado_fire(){
	 
	myFirebaseRef = new Firebase("https://blinding-heat-5189.firebaseio.com/");
 
	myFirebaseRef.on("value", function(data) {
		var post = data.val();
		var _p = post.post;
		var _array = [];
		$.each(_p, function(x, col) {
		var _html = _template.replace(':nombre:',col.nombre)
	  	                      .replace(':fecha:',col.fecha)
	  	                      .replace(':texto:',col.texto)
	  	    	      
	  	$('.container-post').prepend(_html)
	  });

	})
}
	


$('.btn-publicar').on('click', function(event) {
	event.preventDefault();

	
listado(function(data){
	var _array = [];
	$.each(data, function(x, col) {
		var _html = _template.replace(':nombre:',col.nombre)
	  	                      .replace(':fecha:',col.fecha)
	  	                      .replace(':texto:',col.texto)
	  	    	      
	  	$('.container-post').prepend(_html)
	  });

});



});


var listado = function(list) {


	jQuery.getJSON('post.js', function(json) {
	  var _post = json.post;
	  list(_post);
});







}










});
