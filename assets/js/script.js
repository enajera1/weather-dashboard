var cityButtons = document.querySelector(".big-city-btn");
var button = document.querySelector("#input-btn");
var inputValue = document.querySelector(".inputValue");
var cityName = document.querySelector(".name");

var weatherDate = document.querySelector("#date");
var weatherIcon = document.querySelector("#icon");
var weatherTemp = document.querySelector(".temp");
var weatherHumid = document.querySelector(".humid");
var weatherWind = document.querySelector(".wind");
var weatherIndex = document.querySelector(".index");
var weatherLocation = document.querySelector(".location");

var desc = document.querySelector(".desc");

button.addEventListener('click',function(){
  fetch("https://api.openweathermap.org/data/2.5/weather?q="+inputValue.value+"&appid=9fed56c63d48caf6d924f040bbcd31fc&units=imperial")
  .then(response => response.json())
  .then(data => {
    var nameValue = data['name'];
    var tempValue = data['main']['temp'];
    var windValue = data['wind']['speed'];
    var humidValue = data['main']['humidity'];
    var descValue = data['weather'][0]['main'];
    var indexValue = data['']

    cityName.innerHTML = nameValue;
    weatherTemp.innerHTML = "Temp: " + tempValue + "F";
    weatherWind.innerHTML = "Wind: " + windValue + " MPH";
    weatherHumid.innerHTML = "Humidity: " + humidValue + " %";
    desc.innerHTML = descValue;
    console.log(data)
  })

  .catch(err => alert("Wrong city name!"))
});


// Button controls
buttonClickHandler = function(event) {
  var buttonValue = event.target.getAttribute('id');
  if(buttonValue) {
    getButtonRun(buttonValue);
  }
}





var getButtonRun = function(buttonValue) {
  fetch("https://api.openweathermap.org/data/2.5/weather?q="+buttonValue+"&appid=9fed56c63d48caf6d924f040bbcd31fc&units=imperial")
.then(response => response.json())
.then(data => {
  var nameValue = data['name'];
  var tempValue = data['main']['temp'];
  var windValue = data['wind']['speed'];
  var humidValue = data['main']['humidity'];
  var descValue = data['weather'][0]['main'];
  var indexValue = data['']

  cityName.innerHTML = nameValue;
  weatherTemp.innerHTML = "Temp: " + tempValue + "F";
  weatherWind.innerHTML = "Wind: " + windValue + " MPH";
  weatherHumid.innerHTML = "Humidity: " + humidValue + " %";
  desc.innerHTML = descValue;
  console.log(data)
})
}

// buttonClickHandler = function(event) {
//   var buttonValue = event.target.getAttribute('id');
//   if(buttonValue) {
//     getButtonRunForecast(buttonValue);
//   }
// }
// var getButtonRunForecast = function(buttonValue) {
//   fetch("https://api.openweathermap.org/data/2.5/forecast?q="+buttonValue+"&appid=9fed56c63d48caf6d924f040bbcd31fc&units=imperial")
// .then(response => response.json())
// .then(data => {
//   console.log(data);
// }
// )}



var url =
"https://api.openweathermap.org/data/2.5/forecast?lat=30.26&lon=-97.7&appid=9fed56c63d48caf6d924f040bbcd31fc&units=imperial"
var apiKey = "9fed56c63d48caf6d924f040bbcd31fc"

//////NEED THIS///////////
//test response from api
fetch(url)
.then(function(response){
  if(response.status !==200) {
    console.log(response.status);
  }
  return response.json();
})
.then(function(data) {
  console.log(data);
});

cityButtons.addEventListener('click',buttonClickHandler);