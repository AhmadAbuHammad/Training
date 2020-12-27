window.addEventListener('DOMContentLoaded', (event) => {
    let data = fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=00a40d32da148e834ad60e85aa769f38&language=en-US&page=1')
        .then(response => response.json())
        .then((data) => {
            console.log(data);
            if(data) {
                drawTobList (data.results);
                const rate = Array.from(document.querySelectorAll('.voteRange'));
            
            rate.forEach(element => {
                if(element.innerHTML >= 7) {
                    element.style.borderColor = "#48ee3b";
                } else {
                    element.style.borderColor = "#fd6060";  
                }
            });
            // document.querySelector('.prev').addEventListener('click', event => {
            //     console.log('hh')
            //     $('.col').slick('slickPrev');
            // });
            // document.querySelector('.next').addEventListener('click', event => {
            //     console.log('hh')
            //     $('.col').slick('slickNext');
            // });
            }
        });

    /**
     * @param  {Array of objects} movies //draw tob rated section
     */
    function drawTobList (movies) {
        let c = '';
        movies.forEach(element => {
            c += 
            `<div class = "moviescol">
                <a class = "play" href="moredetails.html?id=${element.id}">
                    <div class = "poster">
                        <span class = "voteRange">${checkVote(element.vote_average)}</span>
                        <img src="https://image.tmdb.org/t/p/w200/${element.poster_path}" alt="">
                    </div>
                </a>    
                <a href="#" title = "${element.title}">
                <div class = "movieTitle">${element.title}</div>
                <div class ="releaseDate">${element.release_date.slice(0,4)}</div>
                </a>
            </div>`;
        });
        
        document.querySelector('.col').innerHTML += c;
        $('.col').slick({
            infinite: true,
            slidesToShow: 5,
            slidesToScroll: 1,
            responsive: [
                {
                  breakpoint: 1240,
                  settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                  }
                },
                {
                  breakpoint: 1012,
                  settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                  }
                },
                {
                  breakpoint: 784,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                  }
                }
                // You can unslick at a given breakpoint now by adding:
                // settings: "unslick"
                // instead of a settings object
              ]
          });
    }
    function checkVote (e) {

        if(e.toString().length < 2)
        return e.toString()+'.0';
        else
        return e;
    }
    
});