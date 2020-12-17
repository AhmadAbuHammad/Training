window.addEventListener('DOMContentLoaded', (event) => {
       let data = fetch('https://api.openweathermap.org/data/2.5/forecast?q=amman&appid=9e7c406d697fefd876a13cc45637aae9&units=metric')
        .then(response => response.json())
        .then((data) => {
            console.log(data);
            drawWeather(data)
        });

        var getDaysInMonth = function(month,year) {
           return new Date(year, month, 0).getDate();
          };


    const today = new Date();
    let thisDay = today.getDate();
    
    function drawWeather(d) {
        const celcius = Math.round(parseFloat(d.list[0].main.temp));
        const { description } = d.list[0].weather[0];
        document.getElementById('temp').innerHTML = `${celcius}&deg;`;
        document.getElementById('location').innerHTML = `${d.city.country}, ${d.city.name}`;
        let iconcode = d.list[0].weather[0].icon;
        let iconurl = "http://openweathermap.org/img/wn/" + iconcode + "@2x.png";
        document.getElementById('icon').src = iconurl;

        let c = `<div class = "section2 center">`;
            for(let i =1; i < 40; i++) {
                console.log(gitdate(d.list[i].dt_txt) != Number(thisDay));
                console.log(Number(gitdate(d.list[i].dt_txt)));
                console.log(Number(thisDay));
                if (Number(gitdate(d.list[i].dt_txt)) != Number(thisDay)) {
                    c += `</div>`;
                    document.querySelector('.parent').innerHTML += c;
                    if(i == 39)
                    break;
                    c = `<div class="section2 center">`;
                    thisDay++;
                    thisDay = checkThisDay(thisDay);
                }
                // console.log(checkThisDay(thisDay++));
                    const innCelcius = Math.round(parseFloat(d.list[i].main.temp));
                    let iconInner = d.list[i].weather[0].icon;
                    let iconInnUrl = "http://openweathermap.org/img/wn/" + iconInner + "@2x.png";
                    c +=`<div class="block1"><div class="temp">${innCelcius}&deg;</div><img class="icon" src="${iconInnUrl}"/><div class="time">${Number(time(d.list[i].dt_txt))}:00</div><div class="AmBM">${checkAmPm(d.list[i].dt_txt)}</div></div>`
                if (i == 39)
                {
                    c += `</div>`;
                    document.querySelector('.parent').innerHTML += c;
                }    
            
            }
    }
    function checkThisDay(now) {
        let s = getDaysInMonth(today.getMonth()+1, today.getFullYear());
        if( now > s)
        return  now - s;
        else
        return now
        
    }
    function gitdate(txtDate) {
        const day = txtDate.slice(8,10);
        return day;
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