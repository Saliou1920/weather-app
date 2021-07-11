const apiUrl = "https://goweather.herokuapp.com/weather/mbour";
const description = document.getElementById('description');
const degres = document.getElementById('degres');
const wind = document.getElementById('wind');
const day = document.querySelectorAll('.date');
const temp = document.querySelectorAll('.degres-1');

getData();
async function getData() {
    try {
        
        const response = await fetch(apiUrl);
        const data = await response.json();
        console.log(data);
        description.innerText = data.description;
        degres.innerText = data.temperature;
        wind.innerText = data.wind;
        
        //Get date forecast
        for (let i = 0; i < 3; i++) {
            console.log(day[i]);
            console.log(getDate(data, i));
            day[i].innerText = await getDate(data, i);
        }
        // Get temperature
        for (let i = 0; i < 3; i++) {
            temp[i].innerText = await getTemperature(data, i);
        }

    } catch (err) {
        console.log(err);
    }
    
}

async function getDate(data, i) {
    var date = new Date();
    date.setDate(date.getDate() + parseInt(data.forecast[i].day));
    let dateString = date.toString();
    return dateString.slice(0, 10);
}

async function getTemperature(data, i) {
    return data.forecast[i].temperature;
}