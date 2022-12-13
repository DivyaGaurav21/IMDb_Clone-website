// // Script for open side menu and hide menu when you click on Icon 

var sideOption = document.getElementById("side");
function showMenu() {
    sideOption.style.left = "0";
}
function hideMenu() {
    sideOption.style.left = "-300px";
}


const API_KEY = 'api_key=49e3be45df1c1a483b5eb9560e3c73ab';
const BASE_URL = 'https://api.themoviedb.org/3';
const IMAGE_URL = 'https://image.tmdb.org/t/p/w500';

// geting the movie id when you click movie image on home page
let id = '';
const urlParams = new URLSearchParams(location.search);
for (const [key, value] of urlParams) {
    id = value;
}

let link = `/movie/${id}?language=en-US&append_to_response=videos&`;
let find_url = BASE_URL + link + API_KEY;
// console.log(find_url);

apiCall(find_url);

// function to create element 
function apiCall(url) {
    const x = new XMLHttpRequest();
    x.open('get', url);
    x.send();
    x.onload = function () {
        document.getElementById('movie-display').innerHTML = '';
        var res = x.response;
        var Json = JSON.parse(res);
        console.log(Json)
        getMovies(Json);
    }
    x.onerror = function () {
        window.alert('cannot get')
    }
}


// filter array for video 
function filterArray(obj) {
    var vtitle = obj.name
    var rg = /Official Trailer/i;
    if (vtitle.match(rg)) {
        return obj;
    }
}

function getMovies(myJson) {
    // get the movie youtube link 
    var MovieTrailer = myJson.videos.results.filter(filterArray);
}