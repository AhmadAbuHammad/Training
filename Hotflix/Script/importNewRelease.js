window.addEventListener('DOMContentLoaded', (event) => {
    let data = fetch('https://api.themoviedb.org/3/movie/popular?api_key=00a40d32da148e834ad60e85aa769f38&language=en-US&page=1')
        .then(response => response.json())
        .then((data) => {
            console.log(data);
            let page = 2;
            let last_known_scroll_position = 0;
            let ticking = false;
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
                document.addEventListener('scroll', function() {
                      // document bottom
                      let windowRelativeBottom = document.documentElement.getBoundingClientRect().bottom;
                      console.log(document.documentElement.clientHeight + 100);
                      console.log(windowRelativeBottom);
                      console.log(window.scrollY);
                      // if the user hasn't scrolled far enough (>100px to the end)
                    //   if (windowRelativeBottom > document.documentElement.clientHeight + 153){
                    //       fetch(`https://api.themoviedb.org/3/movie/popular?api_key=00a40d32da148e834ad60e85aa769f38&language=en-US&page=${page}`)
                    //       .then(response => response.json())
                    //       .then((more) => { 
                    //         console.log(more);
                    //         drawTobList(more);
                    //       });
                    //     }
                  });
            }
        });
    let c = '';
    /**
     * @param  {Array of objects} movies //draw tob rated section
     */
    function drawTobList (movies) {
        
        movies.forEach(element => {
            c += 
            `<div class = "moviescol">
                <a class = "play" href="#">
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
        
        document.querySelector('.col2').innerHTML += c;

    }
    function checkVote (e) {
        if(e.toString().length < 2)
        return e.toString()+'.0';
        else
        return e;
    }
});