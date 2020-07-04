if (cidade != "") {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + cidade + '&units=metric&appid=' + apikey).then(function(response) {
        return response.json();
    }).then(function(json) {
        document.querySelector('.clima').innerHTML = `<i class="fas fa-thermometer-half"></i> ${json.main.temp}°C`;
        document.querySelector('.local').innerHTML = `${cidade}`;

        if (document.querySelector('.hero').classList.contains('is-info'))
            document.querySelector('.hero').classList.remove('is-info');

        if (document.querySelector('.hero').classList.contains('is-link'))
            document.querySelector('.hero').classList.remove('is-link');

        if (document.querySelector('.hero').classList.contains('is-warning'))
            document.querySelector('.hero').classList.remove('is-warning');

        if (document.querySelector('.hero').classList.contains('is-danger'))
            document.querySelector('.hero').classList.remove('is-danger');

        if (json.main.temp < 25) {
            document.querySelector('.hero').classList.add('is-link');
            document.querySelector('.icone').src = 'img/frio.svg';
        } else if (json.main.temp < 26) {
            document.querySelector('.hero').classList.add('is-warning');
            document.querySelector('.icone').src = 'img/legal.svg';
        } else {
            document.querySelector('.hero').classList.add('is-danger');
            document.querySelector('.icone').src = 'img/calor.svg';
        } 
    });
} else {
    fetch('https://ipapi.co/' + ip + '/json/').then(function(response) {
        return response.json();
    }).then(function(json) {
        let coords = { country: json.country, region: json.region, city: json.city, lat: json.latitude, lon: json.longitude };
        return coords;
    }).then(function(coord) {
        fetch('https://api.openweathermap.org/data/2.5/weather?lat=' + coord.lat + '&lon=' + coord.lon + '&units=metric&appid=' + apikey).then(function(response) {
            return response.json();
        }).then(function(json) {
            document.querySelector('.clima').innerHTML = `<i class="fas fa-thermometer-half"></i> ${json.main.temp}°C`;
            document.querySelector('.local').innerHTML = `${coord.city}, ${coord.region}, ${coord.country}`;

            if (document.querySelector('.hero').classList.contains('is-info'))
                document.querySelector('.hero').classList.remove('is-info');

            if (document.querySelector('.hero').classList.contains('is-link'))
                document.querySelector('.hero').classList.remove('is-link');

            if (document.querySelector('.hero').classList.contains('is-warning'))
                document.querySelector('.hero').classList.remove('is-warning');

            if (document.querySelector('.hero').classList.contains('is-danger'))
                document.querySelector('.hero').classList.remove('is-danger');

            if (json.main.temp < 25) {
                document.querySelector('.hero').classList.add('is-link');
                document.querySelector('.icone').src = 'img/frio.svg';
            } else if (json.main.temp < 26) {
                document.querySelector('.hero').classList.add('is-warning');
                document.querySelector('.icone').src = 'img/legal.svg';
            } else {
                document.querySelector('.hero').classList.add('is-danger');
                document.querySelector('.icone').src = 'img/calor.svg';
            } 
        });
    });
}

var metaTags=document.getElementsByTagName("meta");
for (var i = 0; i < metaTags.length; i++) {
    if (metaTags[i].getAttribute("property") == "og:image") {
        metaTags[i].setAttribute("content", document.querySelector('.icone').src + '?v=' + Math.round((new Date()).getTime() / 1000));
        break;
    }
}