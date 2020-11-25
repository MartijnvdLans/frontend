// JavaScript Document

var animationBalk = document.getElementById('animation');
var heart = document.getElementById('filled');
var button = document.getElementById('button');

function animation() {
    animationBalk.classList.remove('right_two');
    setTimeout(animationTwo, 5000);
};

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
}
animation();

button.addEventListener('click', add);