window.addEventListener('DOMContentLoaded', (event) => {
    let details;
    let actors;
    // let trailer;
    const newItems = document.querySelector('.topRated');
    const movieID  = window.location.search.slice(4);
    function fetchData() {
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
                        
                    //     const rate = Array.from(document.querySelectorAll('.voteRange'));
                    
                    //     rate.forEach(element => {
                    //         if(element.innerHTML >= 7) {
                    //             element.style.borderColor = "#48ee3b";
                    //         } else {
                    //             element.style.borderColor = "#fd6060";  
                    //         }
                    //     });
                    // }
                    // else {
                    //     document.querySelector('.col2').innerHTML = `
                    //     <div class="topContainer">
                    //         <div class="TobRatedSecTitle">
                    //             <h1 class="home__title"><b>No Result Found</b></h1>
                    //         </div>
                    //     </div>`
                    // }
                });
    }
    
    /**
     * @param  {array of object} details//draw elemnts of details on mor details page
     */
    function drawDetails (details, actors) {
            let htmlCards = '';
            let genres = "";
            let director = "";
            //get geners
            for (let  i = 0; i < details.genres.length; i++) {
                genres += `<div class = "perGenres">${details.genres[i].name}</div>`
            }

            //get dirictor
            for (let  i = 0; i < actors.crew.length; i++) {
                if(actors.crew[i].department.toUpperCase() == "Directing".toUpperCase()) {
                    director = actors.crew[i].name;
                    break;
                    console.log(director);
                }
            }

            if (details.release_date &&  details.poster_path ) {
                htmlCards += `
                <div class = "overSize">
                    <div class="imgBackground">
                    <img src="https://image.tmdb.org/t/p/original/${details.backdrop_path}" alt=""/>
                </div>
                </div>
                <div class="bigPoster">
                    <img src="https://image.tmdb.org/t/p/original/${details.backdrop_path}" alt=""/>
                </div>
                <h1>${details.title}</h1>
                <div class="year">
                    <div class ="releaseDate">${details.release_date.slice(0,4)}</div>
                </div>
                <div class = "playTrailer">
                    <a href="">
                        <img src="Images/play-circle-fill.svg" alt="">
                    </a>
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
                    <b>DIRECTOR</b>
                    <div class="dir"><div class'spaceBetween'>${actors.cast[0].name}</div><div class'spaceBetween'>${actors.cast[1].name}</div></div>
                </div>
                    `;
                }else if (details.release_date === null) {
                    htmlCards += 
                    `<div class = "moviescol">
                        <a class = "play" href="#">
                            <div class = "poster">
                                <span class = "voteRange">${checkVote(element.vote_average)}</span>
                                <img src="https://image.tmdb.org/t/p/w200/${element.poster_path}" alt="">
                            </div>
                        </a>    
                        <a href="#" title = "${element.title}">
                        <div class = "movieTitle">${element.title}</div>
                        <div class ="releaseDate">old movie</div>
                        </a>
                    </div>`;
                }else if (details.poster_path === null) {
                    htmlCards += 
                    `<div class = "moviescol">
                        <a class = "play" href="#">
                            <div class = "poster">
                                <span class = "voteRange">${checkVote(element.vote_average)}</span>
                                <img src="" alt="">
                            </div>
                        </a>    
                        <a href="#" title = "${element.title}">
                        <div class = "movieTitle">${element.title}</div>
                        <div class ="releaseDate">old movie</div>
                        </a>
                    </div>`;
                }
            
            document.querySelector('.allDetails').innerHTML += htmlCards;
            
    
    }

    /**
     * @param  {Array of objects} movies //draw tob rated section
     */
    // function drawTobList (movies) {
    //     let htmlCards = '';
    //     movies.forEach(element => {
    //         if (element.release_date &&  element.poster_path ) {
    //             htmlCards += 
    //             `<div class = "moviescol">
    //                 <a class = "play" href="#">
    //                     <div class = "poster">
    //                         <span class = "voteRange">${checkVote(element.vote_average)}</span>
    //                         <img src="https://image.tmdb.org/t/p/w200/${element.poster_path}" alt="">
    //                     </div>
    //                 </a>    
    //                 <a href="#" title = "${element.title}">
    //                 <div class = "movieTitle">${element.title}</div>
    //                 <div class ="releaseDate">${element.release_date.slice(0,4)}</div>
    //                 </a>
    //             </div>`;
    //         }else if (element.release_date === null) {
    //             htmlCards += 
    //             `<div class = "moviescol">
    //                 <a class = "play" href="#">
    //                     <div class = "poster">
    //                         <span class = "voteRange">${checkVote(element.vote_average)}</span>
    //                         <img src="https://image.tmdb.org/t/p/w200/${element.poster_path}" alt="">
    //                     </div>
    //                 </a>    
    //                 <a href="#" title = "${element.title}">
    //                 <div class = "movieTitle">${element.title}</div>
    //                 <div class ="releaseDate">old movie</div>
    //                 </a>
    //             </div>`;
    //         }else if (element.poster_path === null) {
    //             htmlCards += 
    //             `<div class = "moviescol">
    //                 <a class = "play" href="#">
    //                     <div class = "poster">
    //                         <span class = "voteRange">${checkVote(element.vote_average)}</span>
    //                         <img src="" alt="">
    //                     </div>
    //                 </a>    
    //                 <a href="#" title = "${element.title}">
    //                 <div class = "movieTitle">${element.title}</div>
    //                 <div class ="releaseDate">old movie</div>
    //                 </a>
    //             </div>`;
    //         }
    //     });
        
    //     document.querySelector('.col2').innerHTML += htmlCards;
        

    // }

    function checkVote (e) {
        if (e.toString().length < 2) {
            return e.toString()+'.0';
        }
        else
            return e;
    }

    fetchData();
});