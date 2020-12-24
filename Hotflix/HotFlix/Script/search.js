window.addEventListener('DOMContentLoaded', (event) => {
    let startPointFetch;
    let page = 1;
    isLoading = false;
    let dataTotalPages;
    const newItems = document.querySelector('.topRated');

    function fetchData() {
        isLoading = true;
        // console.log('Aa%20Okkati%20Adakku%20');
        let movieName = window.location.search.slice(4);
        
            let data = fetch(`https://api.themoviedb.org/3/search/movie?api_key=00a40d32da148e834ad60e85aa769f38&language=en-US&query=${movieName}&page=${page}`)
                .then(response => response.json())
                .then((data) => {
                    console.log(data);
                    page += 1;
                    if(data.total_results) {
                        dataTotalPages = data.total_pages;
                        drawTobList(data.results);
                        const rate = Array.from(document.querySelectorAll('.voteRange'));
                    
                        rate.forEach(element => {
                            if(element.innerHTML >= 7) {
                                element.style.borderColor = "#48ee3b";
                            } else {
                                element.style.borderColor = "#fd6060";  
                            }
                        });
    
                        startPointFetch = newItems.offsetTop + newItems.offsetHeight;
                        isLoading = false;
                    }
                    else {
                        document.querySelector('.col2').innerHTML = `
                        <div class="topContainer">
                            <div class="TobRatedSecTitle">
                                <h1 class="home__title"><b>No Result Found</b></h1>
                            </div>
                        </div>`
                    }
                });
    }
    /**
     * @param  {Array of objects} movies //draw tob rated section
     */
    function drawTobList (movies) {
        let htmlCards = '';
        movies.forEach(element => {
            if (element.release_date &&  element.poster_path ) {
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
                    <div class ="releaseDate">${element.release_date.slice(0,4)}</div>
                    </a>
                </div>`;
            }else if (element.release_date === null) {
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
            }else if (element.poster_path === null) {
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
        });
        
        document.querySelector('.col2').innerHTML += htmlCards;
        

    }

    function checkVote (e) {
        if (e.toString().length < 2) {
            return e.toString()+'.0';
        }
        else
            return e;
    }

    fetchData();
    // console.log(data);
    // window.location.href = "http://mywebsite.com/home.html";
    document.addEventListener('scroll', function() {
      startPointFetch = newItems.offsetTop + newItems.offsetHeight;
      if ((window.scrollY >= startPointFetch - window.innerHeight) && !isLoading && dataTotalPages != 0 && page <= dataTotalPages) {
          
          fetchData();
      }
    });
});