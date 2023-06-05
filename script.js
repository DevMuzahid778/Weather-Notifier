// get API key from API generator site
const ApiKey = "8078d6f1016e77f5e8dd632562c7614c";
const Searchfield = document.getElementById("SearchByName");

document.getElementById("SearchButton").addEventListener("click", function(){
    const SearchValue = Searchfield.value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${SearchValue}&appid=${ApiKey}&units=metric`
    fetch(url)
    .then(res =>res.json())
    .then(data => console.log(data));

})