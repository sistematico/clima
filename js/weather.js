fetch('https://ipapi.co/' + ip + '/json/').then(function(response) {
    return response.json();
}).then(function(json) {
    let coords = { country: json.country, region: json.region, city: json.city, lat: json.latitude, lon: json.longitude };
}).then(function(coords) {
    fetch('https://api.openweathermap.org/data/2.5/weather?lat=' + coords.lat + '&lon=' + coords.lon + '&units=metric&appid=' + apikey).then(function(response) {
        return response.json();
    }).then(function(json) {
        document.querySelector('.clima').innerHTML = `<i class="fas fa-thermometer-half"></i> ${json.main.temp}°C em ${coords.city}, ${coords.region}`;
    });
});