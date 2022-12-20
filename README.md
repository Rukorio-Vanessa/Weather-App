# Weather-App
An app that shows the current weather in different cities

## General Description
An application that allows you to search for the  current weather of any city.

You can access this website on this link: [weather-app](https://rukorio-vanessa.github.io/Weather-App/)

## Getting Started
* To use the content in the repository ensure you have
 - A computer that runs on either: Windows 7+, Linux, Mac OS
 - node 9.0+

## Installation
To use this repository on your machine carry out the following steps:

* Open your terminal

* Clone the reository using:
   https://github.com/Rukorio-Vanessa/Weather-App

* Now, change your directory to the new repository folder using:
   cd Weather-App

* To open in vs code use:
   code .         
  

## Project Description
This app allows you to search for the current weather of any city.

It contains a single html document containing a navigation bar and a body that has a div container to hild the search form and button and a section element that contains a list of the weather deatils based on the city.

Data of the weather was obtained from the openweathermap api: https://api.openweathermap.org

the main.css file contains all the styling for the application.

in the index.js file is an event listener domContentLoaded that allows the html document to be completely loaded first.

I generated the current date using the code:
  d = new Date()
  localTime = d.getTime()
  localOffset = d.getTimezoneOffset() * 60000
  utc = localTime + localOffset
  let atlanta = utc + (1000 * -14400)
  nd = new Date()
 I added a submit event listener to the search button:
    form.addEventListener("submit", e => {
  e.preventDefault();
fetch data from the openweathermap api using:
    fetch("https://api.openweathermap.org/data/2.5/weather?q=${inputVal}&APPID=64d07ebd73f88f10fc21d800abdfc343&units=metric`)
    .then((resp) => resp.json())
with the data I got back I performed the following functions in order to create the weather list in th DOM:    
    .then(data => {
        const{main, sys, name, weather} = data
        //access relevant image depending on code for image in the api
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
        //append list to the ul element    
        document.querySelector(".city-weather").appendChild(list)    
      })

A user can now input a city name in the search form, click the button and the details for the weather in that area will be displayed.



## Dependencies
- package.json

## Technologies Used
1. HTML
2. Javascript
3. CSS

## Author 
[Vanessa Rukorio](https://github.com/Rukorio-Vanessa) 

## Contact Information
* Email : vanessa.kirangari@student.moringaschool.com

## License
The product is licensed under ISC
