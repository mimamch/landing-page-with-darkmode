const body = document.querySelector('body');
const menu = document.querySelector('.menu');
const list = document.querySelector('ul');
const switchSlider = document.querySelector('.switch')
const switchScroll = document.querySelector('.switch-scroll')
const logo = document.querySelector('.logo')
const nav = document.querySelector('.navigation')
const textbox = document.querySelector('.content .textbox')
const imgbox = document.querySelector('.content .imgbox')



// MOBILE NAV
menu.addEventListener("click", function() {
    // body.classList.toggle('active');
    list.classList.toggle('active');
    menu.classList.toggle('active');
    // menu.style.backgroundImage = "url('img/close.png')";
})


// DARK MODE
switchSlider.addEventListener('click', function(){
    switchScroll.classList.toggle('active')
    switchSlider.classList.toggle('active')
    body.classList.toggle('active');
    logo.classList.toggle('dark');
    nav.classList.toggle('dark');
    textbox.classList.toggle('dark');
    imgbox.classList.toggle('dark');



})