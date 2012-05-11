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
				<a href="#!/page">page</a> &nbsp;&nbsp;&nbsp;
				<a href="#!/page">contact</a>
				</h6>
			</div>
			
			<div class="well" id = "page">
					<a href="#" class="btn add-item">Add list item</a>
					
					<ul id="list">
							
					</ul>
			</div>

		</div> <!-- /container -->

		<!-- Le javascript
		================================================== -->
		<!-- Placed at the end of the document so the pages load faster -->
		
		<script type="text/tmpl" id ="list-add-template">
				<li><span class="name"></span><a href="#" class="remove-item">remove</a></li>
		</script>
		
		<script src="http://code.jquery.com/jquery-1.7.2.min.js"></script>
		<script src="jquery-mvc.js"></script>
		
	</body>
</html>
