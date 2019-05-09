const request = require('request');

let apiKey = '818105d2f232ae11a90fe3f295d523cc';
let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

let cityInp = document.getElementById('city');
let submit = document.getElementById('submit');

submit.addEventListener('click', function() {
  var city = cityInp.value || 'kolding';
  request();
});

let unixTimeToString = (t) => {
  var date = new Date(t*1000);
  var hour = date.getHours();
  var min = "0" + date.getMinutes();
  var sec = "0" + date.getSeconds();
  return hour+ ':' + min.substr(-2) + ':' + sec.substr(-2);
};

request(url, function (err, response, body) {
  if(err){
    console.log('error:', error);
  } else {
    let weather = JSON.parse(body);
    let message;
    message = `It's ${weather.main.temp} degrees in ${weather.name} and ${weather.weather[0].description}\n`;
    message += `windspeed: ${weather.wind.speed}\n`;
    message += `sunrise: ${unixTimeToString(weather.sys.sunrise)}\n`;
    message += `sunset: ${unixTimeToString(weather.sys.sunset)}\n`;
    console.log(message);
  }
});
