<?php
$config = include('cfg/config.php');
?>
<script>
	// api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={your api key}
	// http://ip-api.com/json/IP?fields=status,city,lat,lon
	const apikey = "<?php echo $config['api_key']; ?>";
</script> 
