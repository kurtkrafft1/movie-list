const getMovies = () => {
    const url = "http://localhost:8088/movies"
    fetch(url)
        .then(resp => resp.json())
        .then(movieData =>
            renderMovies(movieData)
        
        )
};
