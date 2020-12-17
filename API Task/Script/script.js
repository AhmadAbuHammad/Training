window.addEventListener('DOMContentLoaded', (event) => {
       let data = fetch('https://api.openweathermap.org/data/2.5/forecast?q=amman&appid=9e7c406d697fefd876a13cc45637aae9&units=metric')
        .then(response => response.json())
        .then((data) => {
            console.log(data);
            drawWeather(data)
        });
    
    const today = new Date();
    const currtime = today.getHours()
    function drawWeather(d) {
        const celcius = Math.round(parseFloat(d.list[0].main.temp));
        const { description } = d.list[0].weather[0];
        document.getElementById('temp').innerHTML = `${celcius}&deg;`;
        document.getElementById('location').innerHTML = `${d.city.country}, ${d.city.name}`;
        let iconcode = d.list[0].weather[0].icon;
        let iconurl = "http://openweathermap.org/img/wn/" + iconcode + "@2x.png";
        document.getElementById('icon').src = iconurl;
        for(let i = 1; i < 4; i++) {
            const innCelcius = Math.round(parseFloat(d.list[i].main.temp));

            let iDiv = document.createElement('div');
            iDiv.className = 'block1';
            
            let inn1Div = document.createElement('div');
            inn1Div.className = 'temp';
            inn1Div.innerHTML = `${innCelcius}&deg;`;

            let image = document.createElement('img');
            let iconInner = d.list[i].weather[0].icon;
            let iconInnUrl = "http://openweathermap.org/img/wn/" + iconInner + "@2x.png";
            image.className = 'icon';
            image.src= iconInnUrl;
            
            let inn2Div = document.createElement('div');
            inn2Div.className = 'time';
            inn2Div.innerHTML =  time(d.list[i].dt_txt) + ":00";

            let inn3Div = document.createElement('div');
            inn3Div.className = 'AmBM';
            inn3Div.innerHTML =  checkAmPm(d.list[i].dt_txt);

            let c =`<div class="block1"><div class="temp">${innCelcius}&deg;</div><img class="icon" src="${iconInnUrl}"><div class="time">${time(d.list[i].dt_txt)}:00</div><div class="AmBM">${checkAmPm(d.list[i].dt_txt)}</div></div>`

            document.querySelector('.section2').innerHTML += c;
            // appendChild(iDiv);
            // document.querySelector('.block1').appendChild(inn1Div);
            // document.querySelector('.block1').appendChild(image);
            // document.querySelector('.block1').appendChild(inn2Div);
            // document.querySelector('.block1').appendChild(inn3Div);
        }
    }
    function time(txtDate) {
        
        const hour = txtDate.slice(11,13);
        return hour > 12 ? hour-12 : hour;
    
    }
    function checkAmPm(txtDate) {
        
        const hour1 = txtDate.slice(11,13);
        return hour1 >= 12 ? 'Pm' : 'Am';
    
    }
});