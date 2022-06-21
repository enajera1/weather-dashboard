var cityButtons = document.querySelector(".big-city-btn");
var button = document.querySelector("#input-btn");
var inputValue = document.querySelector(".inputValue");
var cityName = document.querySelector(".name");
var fiveDayEl = document.querySelector("#forecast-cards");
var weatherDate = document.querySelector("#city-current-date");
var weatherIcon = document.querySelector("#city-current-icon");
var weatherTemp = document.querySelector(".temp");
var weatherHumid = document.querySelector(".humid");
var weatherWind = document.querySelector(".wind");
var weatherIndex = document.querySelector(".index");
var weatherLocation = document.querySelector(".location");
var currentDate = moment();
var desc = document.querySelector(".desc");
var cityArray = []; 
var city = inputValue.value.trim();
//apiKey
var apiKey = "9fed56c63d48caf6d924f040bbcd31fc"


button.addEventListener('click',function(){
  var city = inputValue.value.trim();

  fetch("https://api.openweathermap.org/data/2.5/weather?q="+city+"&appid=9fed56c63d48caf6d924f040bbcd31fc&units=imperial")
  .then(response => response.json())
  .then(data => {
    // city name
    var nameValue = data['name'];
    cityName.innerHTML = nameValue;
    // city temp
    var tempValue = data['main']['temp'];
    weatherTemp.innerHTML = "Temp: " + tempValue + "F";
    //city wind speed
    var windValue = data['wind']['speed'];
    weatherWind.innerHTML = "Wind: " + windValue + " MPH";
    //city humidity 
    var humidValue = data['main']['humidity'];
    weatherHumid.innerHTML = "Humidity: " + humidValue + " %";

    var descValue = data['weather'][0]['main'];
    desc.innerHTML = descValue;

    var indexValue = data['']
    
    // weatherDate.innerHTML = currentDate.format("(L)"); 
    console.log(data)
  })

  .catch(err => alert("Wrong city name!"))
});

// display UV
var displayCurrentUv = function(data) {
  var uv = data.value;
      if (uv >= 6) {
        weatherIndex.classList="badge badge-danger"
        weatherIndex.innerHTML=" " + uv + " ";
      } else if (uv > 3 ) {
        weatherIndex.classList="badge badge-warning"
        weatherIndex.innerHTML=" " + uv + " ";
      } else {
        weatherIndex.classList="badge badge-success"
        weatherIndex.innerHTML=" " + uv + " ";
      }
};


// Displaying 5 day forecast   
var displayForecast = function (list) { 
  console.log(list);

      for (var i = 0; i <= 4; i++) {

      //date
      var displayDate1 = document.querySelector("#date-0");
      var forecastDate1 = moment().add(1, "days").format("L");
      displayDate1.textContent = forecastDate1;

      var displayDate2 = document.querySelector("#date-1");
      var forecastDate2 = moment().add(2, "days").format("L");
      displayDate2.textContent = forecastDate2;

      var displayDate3 = document.querySelector("#date-2");
      var forecastDate3 = moment().add(3, "days").format("L");
      displayDate3.textContent = forecastDate3;

      var displayDate4 = document.querySelector("#date-3");
      var forecastDate4 = moment().add(4, "days").format("L");
      displayDate4.textContent = forecastDate4;

      var displayDate5 = document.querySelector("#date-4");
      var forecastDate5 = moment().add(5, "days").format("L");
      displayDate5.textContent = forecastDate5;

      // temp
      var displayTemp = document.querySelector(`#temp-${i}`);
      var forecastTemp = list[i].main.temp + " °F";
      displayTemp.textContent = forecastTemp; 

      //humidity
      var displayHumidity = document.querySelector(`#humidity-${i}`);
      var forecastHumidity = list[i].main.humidity + "%";
      displayHumidity.textContent = forecastHumidity;
      
      // weather icons 
      var displayIcon1 = document.querySelector("#city-icon-1");
      var currentIcon1 = "https://openweathermap.org/img/wn/" + list[1].weather[0].icon + "@2x.png"
      displayIcon1.setAttribute ("src", currentIcon1);

      var displayIcon2 = document.querySelector("#city-icon-2");
      var currentIcon2 = "https://openweathermap.org/img/wn/" + list[2].weather[0].icon  + "@2x.png"
      displayIcon2.setAttribute ("src", currentIcon2);

      var displayIcon3 = document.querySelector("#city-icon-3");
      var currentIcon3 = "https://openweathermap.org/img/wn/" + list[3].weather[0].icon  + "@2x.png"
      displayIcon3.setAttribute ("src", currentIcon3);

      var displayIcon4 = document.querySelector("#city-icon-4");
      var currentIcon4 = "https://openweathermap.org/img/wn/" + list[4].weather[0].icon  + "@2x.png"
      displayIcon4.setAttribute ("src", currentIcon4);

      var displayIcon5 = document.querySelector("#city-icon-5");
      var currentIcon5 = "https://openweathermap.org/img/wn/" + list[5].weather[0].icon  + "@2x.png"
      displayIcon5.setAttribute ("src", currentIcon5);

      }
}; 

var getForecast = function(city) {
  var forecastURL = "https://api.openweathermap.org/data/2.5/forecast?q="+city+"&units=imperial&cnt=6&appid="+apiKey;

    // if response was successful 
    fetch(forecastURL).then(function(response) {
      if (response.ok) {
          response.json().then(function(data) {
              displayForecast(data.list);
          });
      } else {
          alert("Error:" + response.statusText);
      }
  })
  // if network error 
  .catch(function(error) {
      alert("Unable to connect to Open Weather");
  })
}

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