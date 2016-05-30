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
	 
		if (!_error) {
			console.log(_error)
		}else{
			console.log(_error)
		}


	});

});


$('.container-post').on('keypress', '.input-comment', function(event) {
		console.log(event)
		var code = event.keyCode || event.which;
		 if(code == 13) {
		 	var _this = $(this)
		 	var id = _this.data('id')
		 	var _post = {
				"comentarios":[
					{
						"texto": _this.val()
					}
				]
			}

			 
			Common._updatePost(id,_post,function(_error){
				console.log(_error)
				if (!_error) {
					console.log("ok",_error)
				}else{
					console.log("error",_error)
				}


			});		

		   
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
		  	    	      
	  	var _comentarios = col.comentarios;

	  	
	  	$.each(_comentarios, function(key, val) {
	  		 var _html2 = _template2.replace(':comment:',val.texto)
	  		var _p =  $(_html)
	  		console.log(_p.find('.main-comment').html('<p>aaa</p>'))
	  		
	  			
	  	});



		 _contenedor.prepend(_html)

	})
 
})





})

