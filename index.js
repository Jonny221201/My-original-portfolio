let themesBtn = document.getElementById("themesBtn");
let colorHolder = document.getElementById("color-container");

let burger = document.getElementById("burger");
let links = document.getElementById("links");
let close = document.getElementById("close");
let body = document.getElementById("body");

let lightWhite = document.getElementById("light-white");
let nav = document.getElementById("home");
let linkColors = document.getElementById("colors-nav");



themesBtn.addEventListener('click', () => {
    if (colorHolder.style.display === "none") {
        colorHolder.style.display = "block";
    } else {
        colorHolder.style.display = "none";
    }
   
});

burger.addEventListener('click', () => {
    if (links.style.display === "none") {
        links.style.display = "block";
    
    } else {
        links.style.display = "none";
    }
   
});

close.addEventListener('click', () => {
    if (links.style.display === "block") {
        links.style.display = "none";
    } else {
        links.style.display = "block";
    }
   
});


