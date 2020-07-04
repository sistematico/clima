// api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={your api key}
// http://ip-api.com/json/IP?fields=status,city,lat,lon
        
// fetch('https://api.openweathermap.org/data/2.5/weather?q=Campo+Grande&units=metric&appid=' + apikey).then(function(response) {
//     return response.json();
// }).then(function(json) {
//     document.querySelector('.clima').innerHTML = '<i class="fas fa-thermometer-half"></i> ' + json.main.temp + '°C';
// });


//fetch('http://ip-api.com/json/' + ip + '?fields=status,city,lat,lon').then(function(response) {
fetch('http://ip-api.com/json/' + ip).then(function(response) {
    return response.json();
}).then(function(json) {
    let coords = { country: json.country, region: json.regionName, city: json.city, lat: json.lat, lon: json.lon };
}).then(function(coords) {

    fetch('https://api.openweathermap.org/data/2.5/weather?lat=' + coords.lat + '&lon=' + coords.lon + '&units=metric&appid=' + apikey).then(function(response) {
        return response.json();
    }).then(function(json) {
        document.querySelector('.clima').innerHTML = `<i class="fas fa-thermometer-half"></i> ${json.main.temp}°C em ${coords.city}, ${coords.region}`;
    });

});