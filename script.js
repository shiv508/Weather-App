const apiKey = "34d9a7eb56f07f407e62b0919a1477cb"; // Get API Key from openweathermap.org

function getWeather() {
    let city = document.getElementById("city").value;
    if (city === "") {
        alert("Please enter a city name!");
        return;
    }

    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            document.querySelector(".weather-info").style.display = "block";
            document.getElementById("location").innerText = `${data.name}, ${data.sys.country}`;
            document.getElementById("temperature").innerText = `🌡 ${data.main.temp}°C`;
            document.getElementById("description").innerText = data.weather[0].description;
            document.getElementById("humidity").innerText = `💧 Humidity: ${data.main.humidity}%`;
            document.getElementById("wind").innerText = `💨 Wind Speed: ${data.wind.speed} m/s`;
            document.getElementById("icon").src = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
        })
        .catch(() => alert("City not found!"));
}
