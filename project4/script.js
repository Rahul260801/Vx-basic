function getweather(){
    const city = document.getElementById("city").value.trim();
        
        if (city) {
            var apiKey = "cc97fc062e7417388737858b156f0e56";  
            var apiUrl = `http://api.weatherstack.com/current?access_key=${apiKey}&query=${city}`; // API endpoint for WeatherStack
            
            fetch(apiUrl)
                .then(response => response.json())
                .then(data => {
                    if (data.success !== false) {
                        // Successfully fetched data
                        var weatherInfo = { 
                            city: data.location.name,
                            weather: data.current.weather_descriptions[0],
                            temperature: data.current.temperature,
                            humidity: data.current.humidity,
                            icon: data.current.weather_icons[0]  // Icon URL
                        };
    
                        // Display the data in #bar2
                        var bar2 = document.getElementById("bar2");
                        bar2.innerHTML = `
                            <h2>Weather Info for ${weatherInfo.city}</h2>
                            <img src="${weatherInfo.icon}" alt="Weather icon" width="50px" />
                            <p>Weather: ${weatherInfo.weather}</p>
                            <p>Temperature: ${weatherInfo.temperature}°C</p>
                            <p>Humidity: ${weatherInfo.humidity}%</p>
                        `;
                    } else {
                        // Handle the case where the city is not found or there's an error
                        alert("City not found or there was an error. Please try again.");
                        document.getElementById("bar2").innerHTML = "";
                    }
                })
                .catch(error => {
                    console.error("Error fetching the weather data: ", error);
                    alert("An error occurred while fetching the weather data. Please try again.");
                });
        } else {
            alert("Please enter a city!");
        }
}
