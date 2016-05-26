$(function(){


$('.btn-publicar').on('click', function(event) {
	event.preventDefault();


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

