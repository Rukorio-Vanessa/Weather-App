const apiKey = "64d07ebd73f88f10fc21d800abdfc343"

const input = document.getElementById('search-input')
const inputVal = input.value;

d = new Date()
localTime = d.getTime()
localOffset = d.getTimezoneOffset() * 60000
utc = localTime + localOffset
var atlanta = utc + (1000 * -14400)
nd = new Date()

const form = document.querySelector("#search-form");
form.addEventListener("submit", e => {
  e.preventDefault();
  let inputVal = input.value;
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputVal}&APPID=64d07ebd73f88f10fc21d800abdfc343&units=metric`)
      .then(response => response.json())
      .then(data => {
        const{main, sys, name, weather} = data
        const weatherImage = `./icons/${weather[0]['icon']}.svg`


        let list = document.createElement('li')
        list.innerHTML = `
            <section class="location">
					     <div class="city-country">${name}, ${sys.country}</div>
               <div class="current-date">${nd}</div>
				    </section>
            <div class="weather-details">
               <div class="temperature">${Math.round(main.temp)}°C</div>
               <figure><img src="${weatherImage}" alt="${weather[0]['main']}"></figure>
               <div class="weather-description">${weather[0]['description']}</div>
               <div class="temp-range">${Math.round(main.temp_max)}°C/${Math.round(main.temp_min)}°C</div>
            </div>   `
            
        document.querySelector(".city-weather").appendChild(list)    
      })

  //const inputVal = input.value;
});

//function getWeatherInfo(city){
    //fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputVal}&APPID=64d07ebd73f88f10fc21d800abdfc343`)
    //.then(response => response.json())
    //.then(data => {console.log(data)})
//}

/*function initialize(){
    getWeatherInfo()
}
initialize()*/