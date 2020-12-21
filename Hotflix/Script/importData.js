window.addEventListener('DOMContentLoaded', (event) => {
    let data = fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=00a40d32da148e834ad60e85aa769f38&language=en-US&page=1')
        .then(response => response.json())
        .then((data) => {
            console.log(data);
            drawTobList (data.results)
        });
    /**
     * @param  {Array of objects} movies //draw tob rated section
     */
    function drawTobList (movies) {
        movies.forEach(element => {
            document.querySelector('tobRated').innerHTML = `<div>${}</div>`
        });
    }

});