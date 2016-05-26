$(function(){


$('.btn-publicar').on('click', function(event) {
	event.preventDefault();
	var _mensaje = $('#mensaje').val();
	
	var _array = Common._getArray({
		"texto":_mensaje

	});

	Common._insertPost(_array,function(_error){
		console.log(_error)
		if (!_error) {
			console.log(_error)
		}else{
			console.log(_error)
		}


	});

});

 
Common._getPost(function(_data){
var _contenedor = $('.container-post');
_contenedor.html('')
	$.each(_data, function(x, col) {
			var _html = _template.replace(':nombre:',col.nombre)
		  	                      .replace(':fecha:',col.fecha)
		  	                      .replace(':texto:',col.texto)
		  	    	      
		 _contenedor.prepend(_html)

	})
 
})





})

