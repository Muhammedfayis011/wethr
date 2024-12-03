


// Function to fetch weather data
function getWeather() {
    var city = document.getElementById('city').value;  // Get the city entered by the user

    if (city) {  
        // api fetching
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=839be0a0c813c2e1b0d1d055a4687895&units=metric`)
            .then(response => response.json())  // Convert the response to JSON
            .then(data => {
                // Check if the city is valid
                if (data.cod == 200) {
                    var temperature = data.main.temp;
                    var humidity = data.main.humidity;
                    var windSpeed = data.wind.speed;
                    var description = data.weather[0].description;
                    var icon = data.weather[0].icon;

                    
                    document.getElementById('result').innerHTML = `
                        <h3>Weather in ${city}</h3>
                        <img src="https://openweathermap.org/img/wn/${icon}.png" alt="${description}">
                        <h3>${description}</h3>
                        <h1>${temperature}°C</h1>
                        
                    `;
                    

                    
                    document.getElementById('humidity').textContent = `Humdity:${humidity}%`;
                    document.getElementById('wind-speed').textContent = ` wind speed:${windSpeed} km/h`;
                } else {
                    alert("City not found. Please enter a valid city.");
                }
            })
            .catch(error => {
                alert(" Please try again.");
            });
    } else {
        alert("Please enter a city.");
    }
}
