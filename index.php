<?php
$config = include('cfg/config.php');
?>

<!doctype html>
<html lang="pt-br">
<head>
	<meta charset="utf-8">
	<meta http-equiv="x-ua-compatible" content="ie=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<meta name="description" content="Clima Atual">
	<meta name="author" content="Lucas Saliés Brum">
	<title>Clima</title>
	<meta property="og:title" content="Clima" />
	<meta property="og:description" content="Clima Atual" />
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://clima.lucasbrum.net" />
	<meta property="og:image" content="https://clima.lucasbrum.net/img/logo.png" />
	<link rel="stylesheet" href="css/main.css">
	<link rel="shortcut icon" href="img/favicon.ico">
</head>
<body>
	<div class="clima"></div>
	<script src="js/weather.js"></script>
</body>
</html>
<script>
	// api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={your api key}
	// http://ip-api.com/json/IP?fields=status,city,lat,lon
	const apikey = "<?php echo $config['api_key']; ?>";
</script> 
