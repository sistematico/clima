fetch('https://ipapi.co/' + ip + '/json/').then(function(response) {
    return response.json();
}).then(function(json) {
    let coords = { country: json.country, region: json.region, city: json.city, lat: json.latitude, lon: json.longitude };
    return coords;
}).then(function(coord) {
    fetch('https://api.openweathermap.org/data/2.5/weather?lat=' + coord.lat + '&lon=' + coord.lon + '&units=metric&appid=' + apikey).then(function(response) {
        return response.json();
    }).then(function(json) {
        document.querySelector('.clima').innerHTML = `<i class="fas fa-thermometer-half"></i> ${json.main.temp}°C em ${coord.city}, ${coord.region}`;
    });
});