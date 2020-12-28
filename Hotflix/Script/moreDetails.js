window.addEventListener('DOMContentLoaded', (event) => {
    const newItems = document.querySelector('.topRated');
    const movieID  = window.location.search.slice(4);
    let time = 0;
    /**
     * @param  {} // fetching details data
     */
    function fetchDetails() {
        fetch(`https://api.themoviedb.org/3/movie/${movieID}?api_key=00a40d32da148e834ad60e85aa769f38&language=en-US`)
                .then(response => response.json())
                .then((data1) => {
                    console.log(data1);
                    if(data1.success == null && data1){
                        fetch(`https://api.themoviedb.org/3/movie/${movieID}/credits?api_key=00a40d32da148e834ad60e85aa769f38&language=en-US`)
                        .then(response => response.json())
                        .then((data2) => {
                            console.log(data2);
                            if(data2.success == null && data2){

                                drawDetails(data1,data2);
                            }
                        });
                    }
                });
    }
    
    /**
     * @param  {} // fetching similar movie data
     */
    function fetchSimilars() {
        fetch(`https://api.themoviedb.org/3/movie/${movieID}/similar?api_key=00a40d32da148e834ad60e85aa769f38&language=en-US`)
                .then(response => response.json())
                .then((data) => {
                    console.log(data);
                    if(data.total_results > 0 && data){
                        drawSimilar(data.results);

                        const rate = Array.from(document.querySelectorAll('.voteRange'));
            
                        rate.forEach(element => {
                            if(element.innerHTML >= 7) {
                                element.style.borderColor = "#48ee3b";
                            } else {
                                element.style.borderColor = "#fd6060";  
                            }
                        });
                    }
                });
    }
    
    /**
     * @param  {} //fetch trailer video
     */
    function fetchTrailer() {
        fetch(`https://api.themoviedb.org/3/movie/${movieID}/videos?api_key=00a40d32da148e834ad60e85aa769f38&language=en-US`)
                .then(response => response.json())
                .then((data) => {
                    console.log(data);
                    if(data.success == null && data){
                        document.querySelector('.movieTrailer').innerHTML +=
                            `<iframe
                                src="https://www.youtube.com/embed/${data.results[0].key}"allowfullscreen="allowfullscreen">
                            </iframe>`
                    }
                });
    }
    
    /**
     * @param  {} details
     * @param  {} actors
     */
    function drawDetails (details, actors) {
            let htmlCards = '';
            let background = '';
            let genres = "";
            let director = "";
            let Stars = "";

            //get geners
            for (let  i = 0; i < details.genres.length; i++) {
                genres += `<span class = "perGenres">${details.genres[i].name}</span>`
            }

            //get dirictor
            for (let  i = 0; i < actors.crew.length; i++) {
                if(actors.crew[i].department.toUpperCase() == "Directing".toUpperCase()) {
                    director = actors.crew[i].name;
                    break;
                    console.log(director);
                }
            }
            
            //get Stars
            for (let i = 0; i < actors.cast.length && i < 2; i++) {
                Stars += `<span class = 'spaceBetween'>${actors.cast[i].name}</span>`;
            }

            if (details.release_date &&  details.poster_path ) {
                background += `
                <div class="imgBackground searchBack">
                    <img src="https://image.tmdb.org/t/p/w500/${details.poster_path}" alt=""/>
                </div>
                <div class = "topContainer">
                <div class="bigPoster">
                    <img src="https://image.tmdb.org/t/p/w500/${details.poster_path}" alt=""/>
                </div>
                </div>`;
                htmlCards += `
                <div class = "topContainer">
                    <h1>${details.title}</h1>
                    <div class="year">
                        <div class ="releaseDate">${details.release_date.slice(0,4)}</div>
                    </div>
                    <div class = "playTrailer">
                        <button class="videoPlay" type="submit">
                            <img src="Images/play-circle-fill.svg" alt="">
                        </button>
                        <b>TRAILER</b>
                    </div>
                    <div class = "overview">${details.overview}</div>
                    <div class="geners">
                        ${genres}
                    </div>
                    <div class="director">
                        <b>DIRECTOR</b>
                        <div class="dir">${director}</div>
                    </div>
                    <div class="actors">
                        <b>Stars</b>
                        <div class="dir">${Stars}</div>
                    </div>
                </div>
                    `;
                }
                // else if (details.release_date === null) {
                //     htmlCards += 
                //     `<div class = "moviescol">
                //         <a class = "play" href="#">
                //             <div class = "poster">
                //                 <span class = "voteRange">${checkVote(element.vote_average)}</span>
                //                 <img src="https://image.tmdb.org/t/p/w200/${element.poster_path}" alt="">
                //             </div>
                //         </a>    
                //         <a href="#" title = "${element.title}">
                //         <div class = "movieTitle">${element.title}</div>
                //         <div class ="releaseDate">old movie</div>
                //         </a>
                //     </div>`;
                // }else if (details.poster_path === null) {
                //     htmlCards += 
                //     `<div class = "moviescol">
                //         <a class = "play" href="#">
                //             <div class = "poster">
                //                 <span class = "voteRange">${checkVote(element.vote_average)}</span>
                //                 <img src="" alt="">
                //             </div>
                //         </a>    
                //         <a href="#" title = "${element.title}">
                //         <div class = "movieTitle">${element.title}</div>
                //         <div class ="releaseDate">old movie</div>
                //         </a>
                //     </div>`;
                // }
            
            document.querySelector('.topRated').innerHTML += background;
            document.querySelector('.allDetails').innerHTML += htmlCards;
            
    
    }

    /**
     * @param  {Array of objects} movies //draw tob rated section
     */
     function drawSimilar (movies) {
        document.querySelector('.similar').innerHTML +=
        `<div class="scroll2">
            <button class="tobRatedNav prev" type="button">
                <img src="Images/arrow-left-s-line.svg" alt="">
            </button>
            <button class="tobRatedNav next" type="button">
                <img src="Images/arrow-right-s-line.svg" alt="">
            </button>
        </div>`;
        let htmlCard = '';
        movies.forEach(element => {
            if (element.release_date &&  element.poster_path ) {
            htmlCard += 
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
            }
        });
        
        document.querySelector('.col').innerHTML += htmlCard;
        $('.col').slick({
            infinite: true,
            arrows: false,
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
        if (e.toString().length < 2) {
            return e.toString()+'.0';
        }
        else
            return e;
    }

    fetchDetails();
    fetchSimilars();
    fetchTrailer();
    
    
});