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


const URL = 'https://blinding-heat-5189.firebaseio.com/';
 
var Common = {

	_gerUrl:function(){
		return  new Firebase(URL)
	},

	_getPost:function(myfuncion){
 		var fire = Common._gerUrl();
		fire.on("value", function(data) {

			var post = data.val()

			var _p = post.post
			 
		  	myfuncion(_p);      
		  	 
		  })
	},
	_insertPost:function(myfuncion){
 		var fire = Common._gerUrl();
		fire.on("value", function(data) {

			var post = data.val()

			var _p = post.post
			 
		  	myfuncion(_p);      
		  	 
		  })
	},


};