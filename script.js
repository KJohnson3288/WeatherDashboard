const searchbtn = document.getElementById("search-btn");
let searchedCities = document.getElementById("searched-cities");
let cardContainer = document.getElementById("card-container");
let currentForcast = document.getElementById("currentDay-forecast");
let date = new Date();

searchbtn.addEventListener("click", (event) => {

    event.preventDefault();

    cardContainer.innerHTML = "";

    let citiesSearched = [];
    let city = document.getElementById("city-search").value;

    console.log("searching " + city);

            //Pushing to array
            citiesSearched.push(city);
    

    
    //Taking array and displaying it in the html
    for (let i = 0; i < citiesSearched.length; i++) {

        
        let cities = document.createElement("button");
        cities.setAttribute("class", "btn btn-outline-info")
        cities.textContent = citiesSearched[i];
        cities.style.margin = "1rem";
        searchedCities.append(cities);
        cities.addEventListener("click", () => {
            
        cardContainer.innerHTML = "";

            let queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&units=imperial&appid=d3b85d453bf90d469c82e650a0a3da26";

            $.ajax({
                url:  queryURL,
                method: "GET",
            }).then((response) => {

        let currInfo = response.list[0];
        let currDate = (date.getMonth()) + "/" +(date.getDate()) + "/" + date.getFullYear();
        let currIcon = currInfo.weather[0].icon;
        
        currentForcast.innerHTML = "";

        //Current Day Title
        let currentTitle = document.createElement("h2");
        currentTitle.textContent = city;
        currentForcast.append(currentTitle);

        //Current Date
        let currentDate = document.createElement("p");
        currentDate.setAttribute("class", "card-text");
        currentDate.textContent = currDate;
        currentForcast.append(currentDate);

        //Current Icon
        let currentImg = document.createElement("img");
        currentImg.setAttribute("class", "card-image-top");
        currentImg.setAttribute("src", "http://openweathermap.org/img/wn/" + currIcon + "@2x.png")
        currentForcast.appendChild(currentImg);

        //Current Forcast
        let currentWeather = document.createElement("p")
        currentWeather.setAttribute("class", "card-text")
        currentWeather.textContent = "Forecast: " + currInfo.weather[0].main;
        currentForcast.appendChild(currentWeather);

        //Temperature
        let currentTemp = document.createElement("p")
        currentTemp.setAttribute("class", "card-text")
        currentTemp.textContent = "Temp: " + currInfo.main.temp + "F";
        currentForcast.appendChild(currentTemp);

        //Humidity
        let currentHumidity = document.createElement("p")
        currentHumidity.setAttribute("class", "card-text")
        currentHumidity.textContent = "Humidity: " + currInfo.main.temp + "%";
        currentForcast.appendChild(currentHumidity);

        //WindSpeed
        let windSpeed = document.createElement("p")
        windSpeed.setAttribute("class", "card-text")
        windSpeed.textContent = "Wind Speed: " + currInfo.wind.speed + "mph";
        currentForcast.appendChild(windSpeed);
        
                for(let i = 0; i < 5; i++){

                let weatherInfo = response.list[i];
                let setDate = (date.getMonth()) + "/" +(date.getDate() + i + 1) + "/" + date.getFullYear();

                console.log(weatherInfo);
           
                //Card for weather 
                let weatherCard = document.createElement("div");
                weatherCard.setAttribute("class", "card");
                weatherCard.style.width = "11rem";
                weatherCard.style.margin = "0.5rem";
                weatherCard.style.padding = "5px";
                weatherCard.style.float = "left";
        
                //The Date
                let cardTextDate = document.createElement("p");
                cardTextDate.setAttribute("class", "card-text");
                cardTextDate.textContent = "Date: " + setDate;
                weatherCard.appendChild(cardTextDate);
        
                //Image 
                let cardImg = document.createElement("img");
                let weatherIcon = weatherInfo.weather[0].icon;
                cardImg.setAttribute("class", "card-image-top");
                cardImg.setAttribute("src", "http://openweathermap.org/img/wn/" + weatherIcon + "@2x.png")
                weatherCard.appendChild(cardImg);
        
                //Card Body
                let cardBody = document.createElement("div");
                cardBody.setAttribute("class", "card-body");
                weatherCard.appendChild(cardBody);
        
                //Forcast
                let cardTextDiscription = document.createElement("p");
                cardTextDiscription.setAttribute("class", "card-text")
                cardTextDiscription.textContent = "Forecast: " + weatherInfo.weather[0].main;
                cardBody.appendChild(cardTextDiscription);
        
                //Temp
                let cardTextTemp = document.createElement("p");
                cardTextTemp.setAttribute("class", "card-text")
                cardTextTemp.textContent = "Temp: " + weatherInfo.main.temp;
                cardBody.appendChild(cardTextTemp);

                //Humidity
                let cardHumidity = document.createElement("p");
                cardHumidity.setAttribute("class", "card-text")
                cardHumidity.textContent = "Humidity: " + weatherInfo.main.humidity + "%";
                cardBody.appendChild(cardHumidity);
        
                cardContainer.appendChild(weatherCard);
                }
        
                
            });
            
        })
}
   
    

    //Ajax call too api
    let queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&units=imperial&appid=d3b85d453bf90d469c82e650a0a3da26";

    $.ajax({
        url:  queryURL,
        method: "GET",
    }).then((response) => {

        let currInfo = response.list[0];
        let currDate = (date.getMonth()) + "/" +(date.getDate()) + "/" + date.getFullYear();
        let currIcon = currInfo.weather[0].icon;
        
        currentForcast.innerHTML = "";

        //Current Day Title
        let currentTitle = document.createElement("h2");
        currentTitle.textContent = city;
        currentForcast.append(currentTitle);

        //Current Date
        let currentDate = document.createElement("p");
        currentDate.setAttribute("class", "card-text");
        currentDate.textContent = currDate;
        currentForcast.append(currentDate);

        //Current Icon
        let currentImg = document.createElement("img");
        currentImg.setAttribute("class", "card-image-top");
        currentImg.setAttribute("src", "http://openweathermap.org/img/wn/" + currIcon + "@2x.png")
        currentForcast.appendChild(currentImg);

        //Current Forcast
        let currentWeather = document.createElement("p")
        currentWeather.setAttribute("class", "card-text")
        currentWeather.textContent = "Forecast: " + currInfo.weather[0].main;
        currentForcast.appendChild(currentWeather);

        //Temperature
        let currentTemp = document.createElement("p")
        currentTemp.setAttribute("class", "card-text")
        currentTemp.textContent = "Temp: " + currInfo.main.temp + "F";
        currentForcast.appendChild(currentTemp);

        //Humidity
        let currentHumidity = document.createElement("p")
        currentHumidity.setAttribute("class", "card-text")
        currentHumidity.textContent = "Humidity: " + currInfo.main.temp + "%";
        currentForcast.appendChild(currentHumidity);

        //WindSpeed
        let windSpeed = document.createElement("p")
        windSpeed.setAttribute("class", "card-text")
        windSpeed.textContent = "Wind Speed: " + currInfo.wind.speed + "mph";
        currentForcast.appendChild(windSpeed);

    console.log(currentTitle);
        

        for(let i = 0; i < 5; i++){
            let weatherInfo = response.list[i];
            let setDate = (date.getMonth()) + "/" +(date.getDate() + i + 1) + "/" + date.getFullYear();
            let weatherCard = document.createElement("div");
            let cardTextDate = document.createElement("p");
            let cardImg = document.createElement("img");
            let weatherIcon = weatherInfo.weather[0].icon;
            let cardBody = document.createElement("div");
            let cardTextDiscription = document.createElement("p");
            let cardTextTemp = document.createElement("p");

        console.log(weatherInfo);

        //Card for weather 
        weatherCard.setAttribute("class", "card");
        weatherCard.style.width = "11rem";
        weatherCard.style.margin = "0.5rem";
        weatherCard.style.padding = "5px";
        weatherCard.style.float = "left";

        //The Date
        cardTextDate.setAttribute("class", "card-text")
        cardTextDate.textContent = "Date: " + setDate;
        weatherCard.appendChild(cardTextDate);

        //Image   
        cardImg.setAttribute("class", "card-image-top");
        cardImg.setAttribute("src", "http://openweathermap.org/img/wn/" + weatherIcon + "@2x.png")
        weatherCard.appendChild(cardImg);

        //Card Body
        cardBody.setAttribute("class", "card-body");
        weatherCard.appendChild(cardBody);

        //Forcast
        cardTextDiscription.setAttribute("class", "card-text")
        cardTextDiscription.textContent = "Forecast: " + weatherInfo.weather[0].main;
        cardBody.appendChild(cardTextDiscription);

        //Temp
        cardTextTemp.setAttribute("class", "card-text")
        cardTextTemp.textContent = "Temp: " + weatherInfo.main.temp + "F";
        cardBody.appendChild(cardTextTemp);

        //Humidity
        let cardHumidity = document.createElement("p");
        cardHumidity.setAttribute("class", "card-text")
        cardHumidity.textContent = "Humidity: " + weatherInfo.main.humidity + "%";
        cardBody.appendChild(cardHumidity);

        cardContainer.appendChild(weatherCard);
        }

        
    });


    //Reset the input field
    reset();

    function reset() {
        document.getElementById("city-search").value="";
    }
});





