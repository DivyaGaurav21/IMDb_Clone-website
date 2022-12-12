// Script for open side menu and hide menu when you click on Icon 

var sideOption=document.getElementById("side");
function showMenu(){
    sideOption.style.left="0";
}
function hideMenu(){
    sideOption.style.left="-300px";
}


// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '144cee50bfmshb43713f1c85811ep164433jsn972d85b733e7',
// 		'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
// 	}
// };

// fetch('https://imdb8.p.rapidapi.com/auto-complete?q=game%20of%20thr', options)
// 	.then(response => response.json())
//     .then(data => {const list = data.d})
// 	.then(response => console.log(response))
// 	.catch(err => console.error(err));

//     console.log(list)