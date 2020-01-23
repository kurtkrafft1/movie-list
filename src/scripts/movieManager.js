const renderMovies = (arr) => {
    arr.forEach(item => {
        const article = document.getElementById('movie-container');
        const movieHtml =  movieFactory(item);
        article.innerHTML +=movieHtml;
        ;
    })
};
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