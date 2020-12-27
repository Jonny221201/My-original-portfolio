let themesBtn = document.getElementById("themesBtn");
let colorHolder = document.getElementById("color-container");

let sideBarOpen = document.getElementById("openSidebar");
let sideBarIcons = document.getElementById("sideBarHolder");
let closebtn = document.getElementById("close-btn-sidebar");

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

sideBarOpen.addEventListener('click', () => {
    if (sideBarIcons.style.display === "none") {
        sideBarIcons.style.display = "flex";
        sideBarOpen.style.display = 'none';
    }  else {
        sideBarIcons.style.display = 'none';
    }
});

closebtn.addEventListener('click', () => {
    if (sideBarIcons.style.display === "flex") {
        sideBarIcons.style.display = 'none';
        sideBarOpen.style.display = 'block';
    } else {
        sideBarIcons.style.display = 'flex';
    }
});

let characters = 'All rights reserved. Copyright d abdulazizdeveloper.netlify.app';

console.log(characters.length)




