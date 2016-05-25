<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<title></title>
	<!-- Latest compiled and minified CSS & JS -->
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" integrity="sha384-1q8mTJOASx8j1Au+a5WDVnPi2lkFfwwEAa8hDDdjZlpLegxhjVME1fgjWPGmkzs7" crossorigin="anonymous">
	<script src="//code.jquery.com/jquery.js"></script>
	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js" integrity="sha384-0mSbJDEHialfmuBBQP6A4Qrprq5OVfW37PRR3j5ELqxss1yVqOtnepnHVP9aJ7xS" crossorigin="anonymous"></script>
  
  <link rel="stylesheet" href="estilos.css">

</head>
<body>

<div class="container">
		
		<div class="main-post">

      <div class="row">
          <div class="col-md-12">
            <textarea name="" id="input" class="form-control" rows="3" required="required"></textarea>
          </div>
          <div class="col-md-12">
              <div class="pull-right">
                <button type="button" class="btn btn-info btn-publicar"><span class="glyphicon glyphicon-send" aria-hidden="true"></span> Publicar</button>
              </div>
          </div>
      </div>

      <hr>


      <?php 
        for ($i=0; $i < 10; $i++) { 
          # code...
        
       ?>
			<div class="post">
				<div class="row">
					<div class="col-md-1">
						<img src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTHSgCIl9AhqSb3GLNVDhnKtgcMf20ddr1V0MyZ5ssNMVIunP93cNzBhA" alt="">
					</div>
					<div class="col-md-11">
						<h4>HUGO TRIGOSO PAREDES</h4>
						<span><i>24-05-2016 12:08 PM</i></span>
					</div>
				</div>
				<div class="row">
					<div class="col-md-12">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis incidunt dicta unde molestias at omnis fuga perspiciatis eos. Alias, accusamus debitis ex mollitia adipisci ipsam, aut non error dolorum molestias.
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut ea excepturi, deserunt ducimus fugit aspernatur libero quisquam repellendus impedit quibusdam consequuntur deleniti corporis odit, eaque quod reiciendis perferendis mollitia! Alias.
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis asperiores, atque aspernatur ipsum possimus numquam, rem minus reprehenderit odit! Pariatur voluptate nesciunt cumque voluptatem reprehenderit, recusandae. Soluta magni, porro magnam.
					</div>
				</div>
				<hr>
				<div class="row">
					<div class="col-md-1"><span><i class="icon-img u-mgu"></i></span></div>
					<div class="col-md-1"><span><i class="icon-img u-men"></i></span></div>
					<div class="col-md-1"><span><i class="icon-img u-mdi"></i></span></div>
					<div class="col-md-1"><span><i class="icon-img u-mas"></i></span></div>
					<div class="col-md-1"><span><i class="icon-img u-ment"></i></span></div>
					<div class="col-md-1"><span><i class="icon-img u-meno"></i></span></div>
				</div>
			</div>

<?php } ?>

		</div>


</div>


</script>
</body>
</html>

