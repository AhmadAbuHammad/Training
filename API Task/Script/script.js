window.addEventListener('DOMContentLoaded', (event) => {
    fetch('https://api.openweathermap.org/data/2.5/forecast?q=amman&appid=f056211ce8781b6750716d0b5e12a1b2&units=metric')
    .then(response => response.json())
    .then(data => console.log(data));

});