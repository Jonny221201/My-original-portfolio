let themesBtn = document.getElementById("themesBtn");
let colorHolder = document.getElementById("color-container");
let linkTheme = document.getElementById('link-theme');

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
let lightGreenery = document.getElementById("light-greenery");
let lightLightgreen = document.getElementById("light-lightgreen");

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
let darkGreenery = document.getElementById("dark-greenery");
let darkLightgreen = document.getElementById("dark-lightgreen");



homeBtnClose.addEventListener('click', () => {
   
    if ( links.style.display === 'none') {
        links.style.display = 'block';
    } else if (links.style.display === 'block'){
        links.style.display = 'none';
        colorHolder.style.display = "none";
    } else {
        colorHolder.style.display = "none";
    }
});
aboutBtnClose.addEventListener('click', () => {
    if ( links.style.display === 'none') {
        links.style.display = 'block';
        
    } else if (links.style.display === 'block'){
        links.style.display = 'none';
    } else {
        colorHolder.style.display = "none";
    }
});
skillsBtnClose.addEventListener('click', () => {
    if ( links.style.display === 'none') {
        links.style.display = 'block';
    } else if (links.style.display === 'block'){
        links.style.display = 'none';
        colorHolder.style.display = "none";
    } else {
        colorHolder.style.display = "none";
    }
});
projectsBtnClose.addEventListener('click', () => {
    if ( links.style.display === 'none') {
        links.style.display = 'block';
    } else if (links.style.display === 'block'){
        links.style.display = 'none';
        colorHolder.style.display = "none";
    } else {
        colorHolder.style.display = "none";
    }
});
contactBtnClose.addEventListener('click', () => {
    if ( links.style.display === 'none') {
        links.style.display = 'block';
    } else if (links.style.display === 'block'){
        links.style.display = 'none';
        colorHolder.style.display = "none";
    } else {
        colorHolder.style.display = "none";
     
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
    // if (links.style.display === "block") {
    //     links.style.display = "none";
    //     colorHolder.style.display = "none";
    // } else {
    //     links.style.display = "block";
    // }    
    if(links.style.display === 'none') {
        links.style.display = 'block';
       } else if (links.style.display === "block"){
        links.style.display = 'none';
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



//dark themes
//dark themes
//dark themes




darkWhite.addEventListener('click', () => {
    linkTheme.href = 'themes/darkwhite.css';
    colorHolder.style.display = "none";
    if(links.style.display === 'block') {
        links.style.display = 'none';
       } else if (links.style.display === "none"){
        links.style.display = 'block';
       };
});
darkOrange.addEventListener('click', () => {
    linkTheme.href = 'themes/darkorange.css';
    colorHolder.style.display = "none";
    if(links.style.display === 'block') {
        links.style.display = 'none';
       } else if (links.style.display === "none"){
        links.style.display = 'block';
       };
});
darkRed.addEventListener('click', () => {
    linkTheme.href = 'themes/darkred.css';
    colorHolder.style.display = "none";
    if(links.style.display === 'block') {
        links.style.display = 'none';
       } else if (links.style.display === "none"){
        links.style.display = 'block';
       };
});
darkBlue.addEventListener('click', () => {
    linkTheme.href = 'themes/darkblue.css';
       colorHolder.style.display = "none";
       if(links.style.display === 'block') {
        links.style.display = 'none';
       } else if (links.style.display === "none"){
        links.style.display = 'block';
       };
});
darkAqua.addEventListener('click', () => {
    linkTheme.href = 'themes/darkaqua.css';
       colorHolder.style.display = "none";
       if(links.style.display === 'block') {
        links.style.display = 'none';
       } else if (links.style.display === "none"){
        links.style.display = 'block';
       };
});
darkPurple.addEventListener('click', () => {
    linkTheme.href = 'themes/darkpurple.css';
       colorHolder.style.display = "none";
       if(links.style.display === 'block') {
        links.style.display = 'none';
       } else if (links.style.display === "none"){
        links.style.display = 'block';
       };
});
darkYellow.addEventListener('click', () => {
    linkTheme.href = 'themes/darkyellow.css';
       colorHolder.style.display = "none";
       if(links.style.display === 'block') {
        links.style.display = 'none';
       } else if (links.style.display === "none"){
        links.style.display = 'block';
       };
});
darkGreen.addEventListener('click', () => {
    linkTheme.href = 'themes/darkgreen.css';
       colorHolder.style.display = "none";
       if(links.style.display === 'block') {
        links.style.display = 'none';
       } else if (links.style.display === "none"){
        links.style.display = 'block';
       };
     
});
darkViolet.addEventListener('click', () => {
    linkTheme.href = 'themes/darkviolet.css';
       colorHolder.style.display = "none";
       if(links.style.display === 'block') {
        links.style.display = 'none';
       } else if (links.style.display === "none"){
        links.style.display = 'block';
       };
});
darkTomato.addEventListener('click', () => {
    linkTheme.href = 'themes/darktomato.css';
       colorHolder.style.display = "none";
       if(links.style.display === 'block') {
        links.style.display = 'none';
       } else if (links.style.display === "none"){
        links.style.display = 'block';
       };
});
darkGreenery.addEventListener('click', () => {
    linkTheme.href = 'themes/darkgreenery.css';
       colorHolder.style.display = "none";
       if(links.style.display === 'block') {
        links.style.display = 'none';
       } else if (links.style.display === "none"){
        links.style.display = 'block';
       };
});
darkLightgreen.addEventListener('click', () => {
    linkTheme.href = 'themes/darklightgreen.css';
       colorHolder.style.display = "none";
       if(links.style.display === 'block') {
        links.style.display = 'none';
       } else if (links.style.display === "none"){
        links.style.display = 'block';
       };
});

// light themes
// light themes
// light themes



lightBlack.addEventListener('click', () => {
    linkTheme.href = 'style.css';
       colorHolder.style.display = "none";
       if(links.style.display === 'block') {
        links.style.display = 'none';
       } else if (links.style.display === "none"){
        links.style.display = 'block';
       };
});
lightOrange.addEventListener('click', () => {
    linkTheme.href = 'themes/lightorange.css';
       colorHolder.style.display = "none";
       if(links.style.display === 'block') {
        links.style.display = 'none';
       } else if (links.style.display === "none"){
        links.style.display = 'block';
       };
});
lightRed.addEventListener('click', () => {
    linkTheme.href = 'themes/lightred.css';
       colorHolder.style.display = "none";
       if(links.style.display === 'block') {
        links.style.display = 'none';
       } else if (links.style.display === "none"){
        links.style.display = 'block';
       };
});
lightBlue.addEventListener('click', () => {
    linkTheme.href = 'themes/lightblue.css';
       colorHolder.style.display = "none";
       if(links.style.display === 'block') {
        links.style.display = 'none';
       } else if (links.style.display === "none"){
        links.style.display = 'block';
       };
});
lightGreen.addEventListener('click', () => {
    linkTheme.href = 'themes/lightgreen.css';
       colorHolder.style.display = "none";
       if(links.style.display === 'block') {
        links.style.display = 'none';
       } else if (links.style.display === "none"){
        links.style.display = 'block';
       };
});
lightPurple.addEventListener('click', () => {
    linkTheme.href = 'themes/lightpurple.css';
       colorHolder.style.display = "none";
       if(links.style.display === 'block') {
        links.style.display = 'none';
       } else if (links.style.display === "none"){
        links.style.display = 'block';
       };
});
lightYellow.addEventListener('click', () => {
    linkTheme.href = 'themes/lightyellow.css';
       colorHolder.style.display = "none";
        if(links.style.display === 'block') {
        links.style.display = 'none';
       } else if (links.style.display === "none"){
        links.style.display = 'block';
       };
});
lightAqua.addEventListener('click', () => {
    linkTheme.href = 'themes/lightaqua.css';
       colorHolder.style.display = "none";
       if(links.style.display === 'block') {
        links.style.display = 'none';
       } else if (links.style.display === "none"){
        links.style.display = 'block';
       };
});
lightViolet.addEventListener('click', () => {
    linkTheme.href = 'themes/lightviolet.css';
       colorHolder.style.display = "none";
       if(links.style.display === 'block') {
        links.style.display = 'none';
       } else if (links.style.display === "none"){
        links.style.display = 'block';
       };
});
lightTomato.addEventListener('click', () => {
    linkTheme.href = 'themes/lighttomato.css';
       colorHolder.style.display = "none";
       if(links.style.display === 'block') {
        links.style.display = 'none';
       } else if (links.style.display === "none"){
        links.style.display = 'block';
       };
});
lightGreenery.addEventListener('click', () => {
    linkTheme.href = 'themes/lightgreenery.css';
       colorHolder.style.display = "none";
       if(links.style.display === 'block') {
        links.style.display = 'none';
       } else if (links.style.display === "none"){
        links.style.display = 'block';
       };
});
lightLightgreen.addEventListener('click', () => {
    linkTheme.href = 'themes/lightlightgreen.css';
       colorHolder.style.display = "none";
       if(links.style.display === 'block') {
        links.style.display = 'none';
       } else if (links.style.display === "none"){
        links.style.display = 'block';
       };
});






