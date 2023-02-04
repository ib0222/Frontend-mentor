const hamburgerBtn = document.querySelector('.hamburger');
const hamburgerMenu = document.querySelector('.hamburger-menu');

hamburgerBtn.addEventListener('click',function(){
    hamburgerMenu.classList.toggle("hamburger-menu-shown");

})