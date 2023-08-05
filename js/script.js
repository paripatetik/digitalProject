let btn = document.querySelector('.header__btn');
let body = document.body;
let menu = document.querySelector('.header__nav');

btn.addEventListener('click', function(){
    menu.classList.toggle('active');
    body.classList.toggle('lock');
    btn.classList.toggle('active');
})