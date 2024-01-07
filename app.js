const apiKey = "fac68f047aabcdd4583c0188eceb20e1";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchInput = document.querySelector(".search-bar");
const weatherIcon = document.querySelector(".weather-icon");
const tempElement = document.querySelector(".temp");
const cityElement = document.querySelector(".city");
const humidityElement = document.querySelector(".humidity");
const windElement = document.querySelector(".wind");

async function checkWeather(city) {
    try {
        const response = await fetch(`${apiUrl}${city}&appid=${apiKey}`);
        const data = await response.json();

        console.log(data);

        weatherIcon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
        tempElement.innerHTML = Math.round(data.main.temp) + "°C";
        cityElement.innerHTML = data.name;
        humidityElement.innerHTML = data.main.humidity + "%";
        windElement.innerHTML = data.wind.speed + "km/hr";
    } catch (error) {
        console.error("Error fetching weather data:", error);
    }
}

function searchWeather() {
    checkWeather(searchInput.value);
}

// Initial weather check for a default city (e.g., Kathmandu)
checkWeather("Kathmandu");