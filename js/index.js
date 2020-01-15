// Your code goes here
let navBar = document.querySelector(".main-navigation");
let upperImg = document.querySelector(".intro img");
let secondImg = document.querySelector(".img-content img");
let headingTxt = document.querySelector(".intro h2")
let bottomButton = document.querySelectorAll(".btn");
let pickDest = document.querySelector(".content-destination h2");
let topParagraph = document.querySelector(".intro p");

//moves navBar right when hovered over and goes back
navBar.addEventListener("mouseover", function(){
    TweenMax.to(".main-navigation", .5, {x:50});
})

navBar.addEventListener("mouseleave", function(){
    TweenMax.to(".main-navigation", .5, {x:-50});
})

//removes the top img from the page
upperImg.addEventListener("drag", function(){
    upperImg.style.display = "none";
})

//scrolls screen down to 7px per 350ms and up to 400ms
window.addEventListener("scroll", () => {
    if(scrollY < 400){
        window.scroll(0, scrollY += 7);
    }
})

//click on second pic and rotates both pictures
secondImg.style.cursor = "pointer";
secondImg.addEventListener("click", () => {
    TweenMax.to(".img-content img", 0.2, {rotation:4, scale:0.9});
})

//changes header text to what you click
window.addEventListener("keydown",function(e){
    e = e.code.split("")
    headingTxt.textContent = `you clicked ${e[e.length-1]}`;
})

//changes above results
window.addEventListener("keyup",function(e){
    e = e.code.split("")
    headingTxt.textContent = `you released ${e[e.length-1]}`;
})

//buttom buttons go pink and black and drop when dbl clicked
bottomButton.forEach(function(x){
    x.addEventListener("dblclick", function(){
        x.style.backgroundColor = "pink";
        x.style.color = "black";
        TweenLite.to(x, 1, { ease: Bounce.easeOut, y: 20 });
    })
})

//when wheel moves, text gets bigger and turns green
window.addEventListener("wheel", (e) => {
    pickDest.style.fontSize = "80px";
    pickDest.style.color = "green";
})


//when mouse moves over first paragraph, paragragraph has a margin on left
topParagraph.addEventListener("mousemove", function(e){
    topParagraph.style.marginLeft = "80px";
})



//propogation/stop nav items section
const navItems = document.querySelectorAll(".nav a")

navItems.forEach(function(indic){
    indic.addEventListener("click", function(e){
        console.log("a nav item was clicked");
        e.preventDefault();
    })
})

const bigBtn = document.querySelector(".bigBtn");
bigBtn.addEventListener('click', e => {
  console.log(`This is my target: ${e.target}`);
});

const smallBtn = document.querySelector(".smallBtn");
smallBtn.addEventListener('click', e => {
  console.log(`Small btn has been clicked!`);
  e.stopPropagation();
});

bigBtn.style.cursor = "pointer";
smallBtn.style.cursor = "pointer";