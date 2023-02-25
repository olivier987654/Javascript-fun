const apiKey = "163c92533ea1686bf33457e5fc97ff78";
const submitButton = document.getElementById("submit-button");
const cityInput = document.getElementById("city-input");
const weatherInfo = document.getElementById("weather-info");

submitButton.addEventListener("click", () => {
  const city = cityInput.value;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      const temperature = data.main.temp;
      const description = data.weather[0].description;
      weatherInfo.innerHTML = `Temperature: ${temperature}°C<br>Description: ${description}`;
    })
    .catch(error => {
      console.error(error);
      weatherInfo.innerHTML = "An error occurred while fetching weather data.";
    });
});
