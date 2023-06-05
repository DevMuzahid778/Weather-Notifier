// get API key from API generator site
const ApiKey = "8078d6f1016e77f5e8dd632562c7614c";
const Searchfield = document.getElementById("SearchByName");
const CityName = document.getElementById("Cityname");
const Temperature = document.getElementById("Temperature");
const WeatherStatus = document.getElementById("weather-status");

document.getElementById("SearchButton").addEventListener("click", function(){
    const SearchValue = Searchfield.value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${SearchValue}&appid=${ApiKey}&units=metric`
    fetch(url)
    .then(res =>res.json())
    .then(data => GetWeatherData(data));

    function GetWeatherData(Data){
        CityName.innerText = Data.name;
        Temperature.innerText = Data.main.temp;
        WeatherStatus.innerText = Data.weather[0].main;

        // after Search city the search Field will clear
        Searchfield.value = ""
    }
})