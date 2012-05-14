<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="utf-8">
		<title>jQuery MVC</title>
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<meta name="description" content="">
		<meta name="author" content="">

		<!-- Le styles -->
		<link href="bootstrap.css" rel="stylesheet">
		<style>
			body {
				padding-top: 60px; /* 60px to make the container go all the way to the bottom of the topbar */
			}
		</style>

		<!-- Le HTML5 shim, for IE6-8 support of HTML5 elements -->
		<!--[if lt IE 9]>
			<script src="http://html5shim.googlecode.com/svn/trunk/html5.js"></script>
		<![endif]-->
	</head>

	<body>

		<div class="container">
			
			<div class="well">
				<h6>
  				<a href="#">home</a> &nbsp;&nbsp;&nbsp;
  				<a href="#!/list">list</a> &nbsp;&nbsp;&nbsp;
  				<a href="#!/contact">contact</a>
				</h6>
			</div>
			
			<div class="well" id = "page">

			</div>

		</div> <!-- /container -->

		<!-- Le javascript
		================================================== -->
		<!-- Placed at the end of the document so the pages load faster -->

		
		<script src="http://code.jquery.com/jquery-1.7.2.min.js"></script>
		<script src="https://raw.github.com/cowboy/jquery-hashchange/v1.3/jquery.ba-hashchange.min.js"></script>
		<script src="https://raw.github.com/headjs/headjs/v0.96/dist/head.min.js"></script>
		
		<script src="app/jquery-mvc.js"></script>
		
	</body>
</html>
