let themesBtn = document.getElementById("themesBtn");
let colorHolder = document.getElementById("color-container");

let sideBarOpen = document.getElementById("openSidebar");
let sideBarIcons = document.getElementById("sideBarHolder");
let closebtn = document.getElementById("close-btn-sidebar");

let burger = document.getElementById("burger");
let links = document.getElementById("links");
let close = document.getElementById("close");
let body = document.getElementById("body");


let nav = document.getElementById("home");
let linkColors = document.getElementById("colors-nav");

let homeBtnClose = document.getElementById('home-btn');
let aboutBtnClose = document.getElementById('about-btn');
let skillsBtnClose = document.getElementById('skills-btn');
let projectsBtnClose = document.getElementById('projects-btn');
let contactBtnClose = document.getElementById('contact-btn');

homeBtnClose.addEventListener('click', () => {
   
    if ( links.style.display === 'none') {
        links.style.display = 'block';
    } else if (links.style.display === 'block'){
        links.style.display = 'none';
    }
});
aboutBtnClose.addEventListener('click', () => {
    if ( links.style.display === 'none') {
        links.style.display = 'block';
    } else if (links.style.display === 'block'){
        links.style.display = 'none';
    }
});
skillsBtnClose.addEventListener('click', () => {
    if ( links.style.display === 'none') {
        links.style.display = 'block';
    } else if (links.style.display === 'block'){
        links.style.display = 'none';
    }
});
projectsBtnClose.addEventListener('click', () => {
    if ( links.style.display === 'none') {
        links.style.display = 'block';
    } else if (links.style.display === 'block'){
        links.style.display = 'none';
    }
});
contactBtnClose.addEventListener('click', () => {
    if ( links.style.display === 'none') {
        links.style.display = 'block';
    } else if (links.style.display === 'block'){
        links.style.display = 'none';
    }
});


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


// theme functions
// theme functions
// theme functions

let linkTheme = document.getElementById('link-theme');

//dark themes
//dark themes
//dark themes

let darkWhite = document.getElementById("dark-white");
let darkRed = document.getElementById("dark-red");
let darkOrange = document.getElementById("dark-orange");
let darkBlue = document.getElementById("dark-blue");
let darkPurple = document.getElementById("dark-purple");
let darkGreen = document.getElementById("dark-green");
let darkAqua = document.getElementById("dark-aqua");
let darkYellow = document.getElementById("dark-yellow");
let darkViolet = document.getElementById("dark-violet");
let darkTomato = document.getElementById("dark-tomato");


darkWhite.addEventListener('click', () => {
    linkTheme.href = 'themes/darkwhite.css';
});
darkOrange.addEventListener('click', () => {
    linkTheme.href = 'themes/darkorange.css';
});
darkRed.addEventListener('click', () => {
    linkTheme.href = 'themes/darkred.css';
});
darkBlue.addEventListener('click', () => {
    linkTheme.href = 'themes/darkblue.css';
});
darkAqua.addEventListener('click', () => {
    linkTheme.href = 'themes/darkaqua.css';
});
darkPurple.addEventListener('click', () => {
    linkTheme.href = 'themes/darkpurple.css';
});
darkYellow.addEventListener('click', () => {
    linkTheme.href = 'themes/darkyellow.css';
});
darkGreen.addEventListener('click', () => {
    linkTheme.href = 'themes/darkgreen.css';
});
darkViolet.addEventListener('click', () => {
    linkTheme.href = 'themes/darkviolet.css';
});
darkTomato.addEventListener('click', () => {
    linkTheme.href = 'themes/darktomato.css';
});

// light themes
// light themes
// light themes

let lightBlack = document.getElementById("light-black");
let lightRed = document.getElementById("light-red");
let lightOrange = document.getElementById("light-orange");
let lightBlue = document.getElementById("light-blue");
let lightPurple = document.getElementById("light-purple");
let lightGreen = document.getElementById("light-green");
let lightAqua = document.getElementById("light-aqua");
let lightYellow = document.getElementById("light-yellow");
let lightViolet = document.getElementById("light-violet");
let lightTomato = document.getElementById("light-tomato");


lightBlack.addEventListener('click', () => {
    linkTheme.href = 'style.css';
});
lightOrange.addEventListener('click', () => {
    linkTheme.href = 'themes/lightorange.css';
});
lightRed.addEventListener('click', () => {
    linkTheme.href = 'themes/lightred.css';
});
lightBlue.addEventListener('click', () => {
    linkTheme.href = 'themes/lightblue.css';
});
lightGreen.addEventListener('click', () => {
    linkTheme.href = 'themes/lightgreen.css';
});
lightPurple.addEventListener('click', () => {
    linkTheme.href = 'themes/lightpurple.css';
});
lightYellow.addEventListener('click', () => {
    linkTheme.href = 'themes/lightyellow.css';
});
lightAqua.addEventListener('click', () => {
    linkTheme.href = 'themes/lightaqua.css';
});
lightViolet.addEventListener('click', () => {
    linkTheme.href = 'themes/lightviolet.css';
});
lightTomato.addEventListener('click', () => {
    linkTheme.href = 'themes/lighttomato.css';
});






