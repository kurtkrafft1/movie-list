const getMovies = () => {
    const url = "http://localhost:8088/movies"
    fetch(url)
        .then(resp => resp.json())
        .then(movieData =>
            renderMovies(movieData)
        
        )
};

const searchMovies = () => {
    const url = "http://localhost:8088/movies"
    fetch(url)
        .then(resp => resp.json())
        .then(movieData => {
            movieData.forEach(movie => {
                // const filteredMoviesTitles = filterMovies(movieData);
                // console.log(filteredMoviesTitles);
                // filteredMoviesTitles.forEach(word => {
                //     if ()
                // })

                const userMovie = getUserMovie();
                if (movie.title.includes(userMovie)){
                    renderMoviesTwo(movie);
                    
                } else {
                    // renderUnknown();
                    console.log('hey')
                }
            })
        })
}

const filterMovies = (arr) => {
    const newArr = arr.filter(arr=> arr.title.split(" "));
    const titlesArr = []
    newArr.forEach(obj => {
        titlesArr.push(obj.title)
    })
    const noSpaceArr = [];
    titlesArr.forEach(item => {
        const noSpaceItem = item.split(' ');
        noSpaceArr.push(noSpaceItem)
    })
    const finalArr =[]
    noSpaceArr.forEach(item => {
        item.forEach(word => {
            finalArr.push(word);
        });
    })
    return finalArr;
}