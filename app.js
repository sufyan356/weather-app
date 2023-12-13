const weatherdata = async (e) => {
    e.preventDefault()
   
    let submitBtn = document.querySelector(".submitBtn").classList.add("hide")
    let buttonload = document.querySelector(".buttonload").classList.add("display")
    let fa = document.querySelector(".fa").classList.add("display")

    let InputSearch = document.querySelector("#InputSearch").value;
    let temp = document.querySelector(".temperature");
    let containerBlur = document.querySelector(".container");
    let feels = document.querySelector("#feels");
    let humidity = document.querySelector("#humidity");
    let pressure = document.querySelector("#pressure");
    let maxTemp = document.querySelector("#max-temp");
    let minTemp = document.querySelector("#min-temp");
    let currentdate = new Date();
    if(!InputSearch) {
        let submitBtn = document.querySelector(".submitBtn").classList.remove("hide")
        let buttonload = document.querySelector(".buttonload").classList.remove("display")
        let fa = document.querySelector(".fa").classList.remove("display")
        alert("Enter City / Country Name")
    }
    else{
        let apiKey = 'aed7d81fb3c7c137196bd0e0c7c3a59b'
        let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${InputSearch}&units=metric&appid=${apiKey}`)
        if(!response.ok){
            let submitBtn = document.querySelector(".submitBtn").classList.remove("hide")
            let buttonload = document.querySelector(".buttonload").classList.remove("display")
            let fa = document.querySelector(".fa").classList.remove("display")
            alert("NOT FOUND")
        }
        else{
            let submitBtn = document.querySelector(".submitBtn").classList.remove("hide")
            let buttonload = document.querySelector(".buttonload").classList.remove("display")
            let fa = document.querySelector(".fa").classList.remove("display")
            let imageToShowWeather = document.querySelector(".imageShow")
            let data = await response.json();
            console.log(data.weather[0].main)
            containerBlur.classList.add("display")
            
            feels.innerHTML = `<img src = 'tempFeels.png' class = 'img-fluid icons' > Feels:${data.main.feels_like}`
            humidity.innerHTML = `<img src = 'humidity.png' class = 'img-fluid icons' > humidity:${data.main.humidity}`
            pressure.innerHTML = `<img src = 'windPressure.png' class = 'img-fluid icons' > Pressure:${data.main.pressure}`
            maxTemp.innerHTML = `<img src = 'max-Temp.png' class = 'img-fluid icons' > Max Temp:${data.main.temp_max}`
            minTemp.innerHTML = `<img src = 'minTemp.png' class = 'img-fluid icons' > Min Temp:${data.main.temp_min}`

            if(data.weather[0].main === "Clear"){
                console.log("Clear")
                imageToShowWeather.style.backgroundImage = 'url("clearClouds.png")'
            }
            else if(data.weather[0].main === "Clouds"){
                console.log("Cloudy Weather: ")
                imageToShowWeather.style.backgroundImage = 'url("cloudyWeather.png")'
            }
            
            else if(data.weather[0].main === "Drizzle"){
                imageToShowWeather.style.backgroundImage = 'drizzle.png'
            }
            else if(data.weather[0].main === "humidity"){
                imageToShowWeather.style.backgroundImage = 'url("humidityWeather.png")'
            }
            else if(data.weather[0].main === "Rain"){
                imageToShowWeather.style.backgroundImage = 'url("rain.png")'
            }
            else if(data.weather[0].main === "Mist"){
                imageToShowWeather.style.backgroundImage = 'url("mist.png")'
            }
            else if(data.weather[0].main === "Wind"){
                imageToShowWeather.style.backgroundImage = 'url("wind.png")'
            }
            else if(data.weather[0].main === "Snow"){
                imageToShowWeather.style.backgroundImage = 'url("snow.png")'
            }
            else if(data.weather[0].main === "Smoke"){
                console.log("SMOOK WEATHER")
                imageToShowWeather.style.backgroundImage = 'url("smoke.svg")'
            }
            else if(data.weather[0].main === "Haze"){
                console.log("SMOOK WEATHER")
                imageToShowWeather.style.backgroundImage = 'url("clearClouds.png")'
            }
            else{
                imageToShowWeather.src = 'url("clearClouds.png")'
            }


            temp.innerHTML = `
            
            <div id = 'tempContainer'>
                <p id = 'degree '>${data.main.temp}&deg;C</p>
                <div class="searchCity">
                    <p>${InputSearch.toUpperCase()}</p>

                </div>
            </div>
                
            `;
           
            
        }
    }
}