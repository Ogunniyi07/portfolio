//Side Navigation JS code
//identify the inputs in the html file
let menuBtn = document.querySelector(".menu-btn");
let cancelBtn = document.querySelector(".cancel-btn");
let navBar = document.querySelector(".navbar");
let body = document.querySelector("body");



menuBtn.onclick = function(){ //Button clicked
    menuBtn.style.opacity = "0"; //button dissapear
    menuBtn.style.pointerEvents = "none"; //pointerEvents dissapear
    navBar.classList.add("active"); //navBar would slide out
    body.style.overflow = "hidden"
}
cancelBtn.onclick = function(){ //cancel clicked
    menuBtn.style.opacity = "1"; //cancel btn still remains
    menuBtn.style.pointerEvents = "auto"; //pointerEvents on auto
    navBar.classList.remove("active"); //navBar slides in back
    body.style.overflow = "auto";
}

//sticky Navigation menu JS code
let nav = document.querySelector("nav");
let val;
window.onscroll = function(){
    if(document.documentElement.scrollTop > 20){
        nav.classList.add("sticky");
    }else{
        nav.classList.remove("sticky");
    }
}


// Side Navigation Menu Closed When Navigation Links Clicked
let navLinks = document.querySelectorAll(".menu li a");
for (var i = 0; i < navLinks.length; i++){
    navLinks[i].addEventListener("click", ()=>{
        menuBtn.style.opacity = "1"; //cancel btn still remains
        menuBtn.style.pointerEvents = "auto"; //pointerEvents on auto
        navBar.classList.remove("active"); //navBar slides in back
        body.style.overflow = "auto";
    });
}