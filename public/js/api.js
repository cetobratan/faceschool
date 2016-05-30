$(function(){

$('#mensaje').on('focus', function(event) {
	event.preventDefault();
	console.log("yate")
});




$('.btn-publicar').on('click', function(event) {
	event.preventDefault();
	var _mensaje = $('#mensaje').val();
	

	var _post = {
		"texto":_mensaje
	}

	var _array = Common._getArray(_post);
	Common._insertPost(_array,function(_error){
		console.log(_error)
		if (!_error) {
			console.log(_error)
		}else{
			console.log(_error)
		}


	});

});


$('.container-post').on('keypress', '.input-comment', function(event) {
	
		var code = e.keyCode || e.which;
		 if(code == 13) {
		   
		 }
});















 
Common._getPost(function(_data){
var _contenedor = $('.container-post');
_contenedor.html('')

	$.each(_data, function(key, col) {

		var _html = _template.replace(':post_id:',key)
							.replace(':nombre:',col.nombre)
	  	                    .replace(':fecha:',col.fecha)
	  	                    .replace(':texto:',col.texto)
		  	    	      
		 _contenedor.prepend(_html)

	})
 
})





})

