const renderMovies = (arr) => {
    arr.forEach(item => {
        const article = document.getElementById('movie-container');
        const movieHtml =  movieFactory(item);
        article.innerHTML +=movieHtml;
        ;
    })
};

const renderMoviesTwo = (movie) => {
    const article = document.getElementById('movie-container');
        const movieHtml =  movieFactoryTwo(movie);
        article.innerHTML= movieHtml;
}
const movieFactory = (item) => {
    const itemNameArr = item.title.split(" ");
    if (itemNameArr[1] === 'Willy'){
        return `<div class='movie-img'><h3>Here is the poster for <em>${item.title}</em>...</h3>
        <h5>Release Date: ${item['Release Date']}</h5>
        <img src="${item.img}">
        <p>Oh Snap Willy, how you been?</p></div>`;
    } else {
    return  `<div class='movie-img'><h3>Here is the poster for <em>${item.title}</em>...</h3>
    <h5>Release Date: ${item['Release Date']}</h5>
    <img src="${item.img}">
    <p>What's brockin' bruh, how you livin?</p></div>`;}
}

const movieFactoryTwo = (item) => {
    const itemNameArr = item.title.split(" ");
    if (itemNameArr[1] === 'Willy'){
        return `<div class='movie-img2'><h3>Here is the poster for <em>${item.title}</em>...</h3>
        <h5>Release Date: ${item['Release Date']}</h5>
        <img src="${item.img}">
        <p>Oh Snap Willy, how you been?</p></div>`;
    } else {
    return  `<div class='movie-img2'><h3>Here is the poster for <em>${item.title}</em>...</h3>
    <h5>Release Date: ${item['Release Date']}</h5>
    <img src="${item.img}">
    <p>What's brockin' bruh, how you livin?</p></div>`;}
}
const sorryUrl = "https://media0.giphy.com/media/3o7WIwkSmw32NgXvTG/giphy.gif";

const unknownMovieFactory = () => {
    return `<div class='movie-img2'>
    <h5>We are sorry, we don't have that movie in our database</h5>
    <img src="${sorryUrl}">
    <p>Oh Snap Willy, how you been?</p></div>`
}

const renderUnknown = () => {
    const article = document.getElementById('movie-container');
    const unknownHtml = unknownMovieFactory();
    article.innerHTML = unknownHtml;
}