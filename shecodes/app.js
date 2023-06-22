let apikey = "52972406f32773a9b6df9fc438d70ab1";

let apiurl =
  "https://api.openweathermap.org/data/2.5/weather?q=London&units=metric";

function showTemperature(response) {
  console.log(response.data);
  let tempround = Math.round(response.data.main.temp);
  let temperature = document.querySelector("#span");
  let weatherDescription = document.querySelector("#weather");
  temperature.innerHTML = ` ${tempround}<strong>°C | °F</strong>`;
  weatherDescription.innerHTML = `Weather: ${response.data.weather[0].description}`;
}

axios.get(`${apiurl}&appid=${apikey}`).then(showTemperature);
