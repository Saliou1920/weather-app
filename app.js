import {loader} from "./loader.js";

const apiUrl = "https://goweather.herokuapp.com/weather";
const description = document.getElementById('description');
const degres = document.getElementById('degres');
const wind = document.getElementById('wind');
const day = document.querySelectorAll('.date');
const temp = document.querySelectorAll('.degres-1');
const input = document.querySelector("input");
const title = document.getElementById('uil');
let welcomeMessage = document.getElementById('welcome');


window.addEventListener('load', () => {
    loader();
    getData();
});


input.addEventListener('change', handleChange);
function handleChange(e) {
    let city = e.target.value;
    getData(city);
}

// fetching api
async function getData(city = 'Dakar') {
    try {
        
        const response = await fetch(`${apiUrl}/${city}`);
        const data = await response.json();
        description.innerText = data.description;
        degres.innerText = data.temperature;
        wind.innerText = data.wind;
        title.innerText = city;

        //Get date forecast
        for (let i = 0; i < 3; i++) {
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
// animate welcome message
let i = 0;
typing();
function typing() {
    let text = "Hi Weather !";
    if (i < text.length) {
        welcomeMessage.innerHTML += text.charAt(i);
        i++;
        setTimeout(typing, 70);
    }
}
