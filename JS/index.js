const apiKey = "64d07ebd73f88f10fc21d800abdfc343"

const input = document.getElementById('search-input')
const inputVal = input.value;

const form = document.querySelector("#search-form");
form.addEventListener("submit", e => {
  e.preventDefault();
  let inputVal = input.value;
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputVal}&APPID=64d07ebd73f88f10fc21d800abdfc343&units=metric`)
      .then(response => response.json())
      .then(data => {
        
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