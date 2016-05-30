var _template = '<div class="post" data-id=":post_id:">'+
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
		'<hr>'+
		'<div class="comentarios">'+
          '<div class="panel panel-default">'+
              '<div class="panel-heading">'+
                '<p>8Thiago AH, Katty Sanchez Gonzales y 6 personas más</p>'+
              '</div>'+
              '<div class="panel-body">'+
                '<div class="col-md-1">'+
                    '<img width="40" src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTHSgCIl9AhqSb3GLNVDhnKtgcMf20ddr1V0MyZ5ssNMVIunP93cNzBhA" alt="">'+
                '</div>'+
                '<div class="col-md-11">'+
                    '<p>'+
                      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam aliquid dignissimos, iure, sed optio id, quas veniam molestias eum excepturi, earum assumenda velit eligendi voluptas est repellendus quisquam magnam ut.'+
                      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero dolor, illo aut enim corrupti, nesciunt consequatur? Nam saepe incidunt at, odit rem temporibus eveniet illo vel magnam porro aliquid minima!'+
                    '</p>'+
                '</div>'+
              '</div>'+
              '<div class="panel-footer over">'+
                '<div class="col-md-12">'+
                    '<input type="text" class="form-control input-comment" >'+
                '</div>'+
              '</div>'+
        '</div>'+
      '</div>'+
'</div>';


const URL = 'https://blinding-heat-5189.firebaseio.com/';
 
var Common = {

	_gerUrl:function(){
		return  new Firebase(URL)
	},

	_getArray:function(array_push){

		var _array_base = {
      "avatar": "f1.jpg",
      "nombre": "Augusto",
      "fecha": "24-05-2016",
      "hora": "10:08",
      "texto": '',
      "likes": [
        {
          "icon": "icon1.jpg",
          "tipo": "MGusta",
          "cantidad": 0
        },
        {
          "icon": "icon2.jpg",
          "tipo": "MEncanta",
          "cantidad": 0
        },
        {
          "icon": "icon3.jpg",
          "tipo": "MDivierte",
          "cantidad": 0
        },
        {
          "icon": "icon4.jpg",
          "tipo": "MAsombra",
          "cantidad": 0
        },
        {
          "icon": "icon5.jpg",
          "tipo": "MEntristese",
          "cantidad": 0
        },
        {
          "icon": "icon5.jpg",
          "tipo": "MEnoja",
          "cantidad": 0
        }
      		  ]
   	     };

   	     

		return $.extend( _array_base, array_push );

	},

	_getPost:function(myfuncion){
 		var fire = Common._gerUrl();
		fire.on("value", function(data) {

			var post = data.val()

 

			var _p = post.post
			 
		  	myfuncion(_p);      
		  	 
		  })
	},
	_insertPost:function(array,callback){
 		var fire = Common._gerUrl();

 		var post = fire.child("post");
		post.push().set(array,function(error){
			callback(error)
		});
		
	}


};