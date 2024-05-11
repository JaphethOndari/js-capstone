const navBar = document.getElementById('input');
const menu = document.getElementsByClassName("icon")[0]; // Assuming there's only one element with class "menu"
const info = document.getElementsByClassName("dis")[0]
const info1 = document.getElementsByClassName("dis1")[0]
const info2 = document.getElementsByClassName("dis2")[0]
const info3 = document.getElementsByClassName("dis3")[0]
const info4 = document.getElementsByClassName("dis4")[0]
const info5 = document.getElementsByClassName("dis5")[0]
const info6 = document.getElementsByClassName("dis6")[0]


menu.addEventListener('click', function () {
    navBar.style.width = "15%";
    info.style.display = "flex"
    info1.style.display = "flex"
    info2.style.display = "flex"
    info3.style.display = "flex"
    info4.style.display = "flex"
    info5.style.display = "flex"
    info6.style.display = "flex"
});

const searchCity = document.querySelector(".that7")
const searchBtn = document.querySelector(".search__icon")
const mainImg = document.getElementById("mainw")
const wind = document.getElementsByClassName("wind")
const humid = document.getElementsByClassName("humidity")


const apiKey = "63286d7210dd5b17fa7559859877fef6";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

async function checkWether (city){
    const response =await fetch(apiUrl + city + `&appid=${apiKey}`)
    let data = await response.json()

    console.log(data)
    document.querySelector('.city').innerHTML = data.name;
    document.querySelector('.tdata').innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector('.wdata').innerHTML = data.wind.speed + "KM/H";
    document.querySelector('.hdata').innerHTML = data.main.humidity + "%";

    const cond = data.weather[0].main;
    
    if(cond=="Clouds"){
        mainImg.src ="clouds.png";
    }
    else if(cond =="Drizzle"){
        mainImg.src="dizzle.png";
    }
    else if(cond =="Clear"){
        mainImg.src="clear.png";
    }
    else if(cond =="Mist"){
        mainImg.src="mist.png";
    }
    else if(cond =="Rain"){
        mainImg.src="rain.png";
    }

  
}
searchBtn.addEventListener("click", () => {
    checkWether(searchCity.value);
});



let currentTime = document.querySelector('.time')

setInterval(()=>{
    let d = new Date();
    currentTime.innerHTML = d.toLocaleTimeString()
},1000)

