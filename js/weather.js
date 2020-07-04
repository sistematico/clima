// api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={your api key}
// http://ip-api.com/json/IP?fields=status,city,lat,lon
        
fetch('https://api.openweathermap.org/data/2.5/weather?q=Campo+Grande&units=metric&appid=' + apikey).then(function(response) {
    return response.json();
}).then(function(json) {
    document.querySelector('.clima').innerHTML = '<i class="fas fa-thermometer-half"></i> ' + json.main.temp + '°C';
});