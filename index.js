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

let homeBtnClose = document.getElementById('home-btn');
let aboutBtnClose = document.getElementById('about-btn');
let skillsBtnClose = document.getElementById('skills-btn');
let projectsBtnClose = document.getElementById('projects-btn');
let contactBtnClose = document.getElementById('contact-btn');

homeBtnClose.addEventListener('click', () => {
    links.style.display = 'none';
})
aboutBtnClose.addEventListener('click', () => {
    links.style.display = 'none';
})
skillsBtnClose.addEventListener('click', () => {
    links.style.display = 'none';
})
projectsBtnClose.addEventListener('click', () => {
    links.style.display = 'none';
})
contactBtnClose.addEventListener('click', () => {
    links.style.display = 'none';
})


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





