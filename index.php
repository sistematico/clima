<?php
	$config = include('cfg/config.php');
?>
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<meta name="description" content="Clima atual">
    	<meta name="author" content="Lucas Saliés Brum">
		<title>Clima</title>
		
		<meta property="og:title" content="Clima" />
		<meta property="og:description" content="Clima atual" />
		<meta property="og:type" content="website" />
		<meta property="og:url" content="http://clima.lucasbrum.net" />
		<meta property="og:image" content="img/frio.png" />
		
		<link rel="stylesheet" href="css/bulma.min.css">
		<link rel="stylesheet" href="css/fontawesome.min.css">
		<link rel="stylesheet" href="css/main.css">
		
		<link rel="shortcut icon" href="img/favicon.ico">
</head>
<body>
	<section class="hero is-info is-fullheight">
		<div class="hero-head">
			<nav class="navbar">
				<div class="container">
					<div class="navbar-brand">
						<a class="navbar-item">
							<!-- <img src="https://bulma.io/images/bulma-type-white.png" alt="Logo"> -->
							Clima
						</a>
						<span class="navbar-burger burger" data-target="navbarMenuHeroB">
							<span></span>
							<span></span>
							<span></span>
						</span>
					</div>
					<div id="navbarMenuHeroB" class="navbar-menu">
						<div class="navbar-end">
							<!-- <a class="navbar-item is-active">Home</a> -->
							<span class="navbar-item">
								<a href="https://github.com/sistematico/clima" class="button is-info is-inverted">
									<span class="icon">
										<i class="fab fa-github"></i>
									</span>
									<span>Download</span>
								</a>
							</span>
						</div>
					</div>
				</div>
			</nav>
		</div>

		<div class="hero-body">
			<div class="container has-text-centered">
				<figure class="image container is-128x128">
  					<img class="icone" src="">
				</figure>
				<p class="title clima mt-3"></p>
				<p class="subtitle local"></p>
			</div>
		</div>

		<div class="hero-foot">
			<nav class="tabs is-boxed is-fullwidth">
				<div class="container">
					<ul>
						<li class="is-active"><a href="/">Início</a></li>
						<li><a href="api.php">API</a></li>
						<li><a href="creditos.php">Créditos</a></li>
					</ul>
				</div>
			</nav>
		</div>
	</section>
	<script>
		const apikey = "<?php echo $config['api_key']; ?>";
		const ip = "<?php echo $_SERVER['REMOTE_ADDR']; ?>";
	</script> 
	<script src="js/ads.js"></script>
	<script src="js/weather.js"></script>
	<script>
    if (window.canRunAds === undefined) {
    	showFallbackImage();
    }
	</script>
</body>
</html>