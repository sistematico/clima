<?php
	$config = include('cfg/config.php');
?>
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<title>Clima</title>
		<link rel="stylesheet" href="css/bulma.min.css">
</head>
<body>
	<section class="section">
		<div class="container">
			<p class="subtitle">
				<div class="clima"></div>
			</p>
		</div>
	</section>
	<script>
		const apikey = "<?php echo $config['api_key']; ?>";
		const ip = "<?php echo $_SERVER['REMOTE_ADDR']; ?>";
	</script> 
	<script src="js/ads.js"></script>
	<script src="js/weather.js"></script>
</body>
</html>