// JavaScript Document

var animationBalk = document.getElementById('animation');
var heart = document.getElementById('filled');
var button = document.getElementById('button');
var menu = document.getElementById('menu');
var nav = document.getElementById('navigatie');
var close = document.getElementById('cross');
var open = false;
var dicht = true;

function animation() {
    animationBalk.classList.remove('right_two');
    setTimeout(animationTwo, 5000);
}

function animationTwo() {
    animationBalk.classList.add('right');
    setTimeout(animationThree, 5000);
};

function animationThree() {
    animationBalk.classList.remove('right');
    animationBalk.classList.add('right_two');
    setTimeout(animation, 5000);
};

function add(event) {
    event.preventDefault();
    heart.classList.toggle('none');
};

function menuToggle() {
    if (open == true) {
        nav.classList.remove('open');
        nav.classList.add('close');
        open = false;
        dicht = true;
    }
    
    else if (dicht == true) {
        nav.classList.add('open');
        nav.classList.remove('close');
        open = true;
        dicht = false;
    }
};

animation();

close.addEventListener('click', menuToggle);
menu.addEventListener('click', menuToggle);
button.addEventListener('click', add);