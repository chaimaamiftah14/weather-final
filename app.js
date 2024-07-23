// State variables
let currCity = "London";
let units = "metric";

// DOM element selectors
let city = document.querySelector(".weather__city");
let datetime = document.querySelector(".weather__datetime");
let weather__forecast = document.querySelector('.weather__forecast');
// ... (other selectors)

// Event listener for search form submission
document.querySelector(".weather__search").addEventListener('submit', e => {
    // ... (search functionality)
});

// Event listeners for temperature unit toggle
document.querySelector(".weather_unit_celsius").addEventListener('click', () => {
    // ... (toggle to Celsius)
});

document.querySelector(".weather_unit_farenheit").addEventListener('click', () => {
    // ... (toggle to Fahrenheit)
});

// Function to convert timestamp to readable date and time
function convertTimeStamp(timestamp, timezone){
    // ... (timestamp conversion logic)
}

// Function to convert country code to full name
function convertCountryCode(country){
    // ... (country code conversion logic)
}

// Main function to fetch and display weather data
function getWeather(){
    const API_KEY = '64f60853740a1ee3ba20d0fb595c97d5'
    // ... (API call and data processing)
}

// Initial weather data fetch on page load
document.body.addEventListener('load', getWeather())
