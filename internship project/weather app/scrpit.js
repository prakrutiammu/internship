const apiKey = "YOUR_API_KEY"; // Replace with your actual API key
const searchButton = document.getElementById("searchButton");
const cityInput = document.getElementById("cityInput");
const weatherInfo = document.getElementById("weatherInfo");

searchButton.addEventListener("click", () => {
  const cityName = cityInput.value.trim();
  if (cityName) {
    fetchWeather(cityName);
  }
});

async function fetchWeather(city) {
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
  
  try {
    const response = await fetch(apiUrl);
    if (!response.ok) throw new Error("City not found");
    const data = await response.json();
    updateUI(data);
  } catch (error) {
    alert(error.message);
  }
}

function updateUI(data) {
  const { name, main, weather, wind } = data;
  document.getElementById("cityName").textContent = `City: ${name}`;
  document.getElementById("temperature").textContent = `Temperature: ${main.temp}°C`;
  document.getElementById("description").textContent = `Weather: ${weather[0].description}`;
  document.getElementById("humidity").textContent = `Humidity: ${main.humidity}%`;
  document.getElementById("wind").textContent = `Wind Speed: ${wind.speed} m/s`;
  weatherInfo.classList.remove("hidden");
}
