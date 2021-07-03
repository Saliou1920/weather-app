const apiUrl = "https://goweather.herokuapp.com/weather/rufisque";
getData();
async function getData() {
    const response = await fetch(apiUrl);
    const data = await response.json();
    console.log(data);
}
