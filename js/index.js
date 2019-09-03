// Your code goes here
// 1) Mouseover
const logoScale = document.querySelector('.logo-heading');

logoScale.addEventListener('mouseover', e => {
    logoScale.style.transform = 'scale(1.2)';
});
// 2) Click
const headerChange = document.querySelector('.main-navigation');

headerChange.addEventListener('click', e => {
    headerChange.style.background = 'lightblue';
});
// 3) Dblclick
const imgSwitch = document.querySelector('.intro-img');

imgSwitch.addEventListener('dblclick', e => {
    imgSwitch.src = 'img/destination.jpg';
});
// 4) Resize
window.addEventListener('resize', e => {
    const bgChange = document.querySelector('.content-section');
    bgChange.style.background = 'lightblue';
})
// 5) Keydown
window.addEventListener('keyup', e => {
    const headingZoom = document.querySelector('.intro-heading');
    headingZoom.style.fontSize = '7rem';
});

