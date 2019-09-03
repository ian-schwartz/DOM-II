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
window.addEventListener('keydown', e => {
    const headingZoom = document.querySelector('.intro-heading');
    headingZoom.style.fontSize = '7rem';
});
// 6) Keyup
window.addEventListener('keyup', e => {
    const contentHeadingZoom = document.querySelector('.content-heading');
    contentHeadingZoom.style.fontSize = '7rem';
});
// 7) Load
window.addEventListener('load', e => {
    const footerBg = document.querySelector('.footer');
    footerBg.style.background = '#fcba03';
});
// 8) Scroll
window.addEventListener('scroll', e => {
    const headingChange = document.querySelector('.bottom-content-heading');
    headingChange.textContent = 'Adventure Lies Ahead';
});
// 9) Mouseenter
const textColor = document.querySelector('.content-destination');
textColor.addEventListener('mouseenter', e => {
    textColor.style.color = "red";
});
// 10) Mouseleave
const textColorBack = document.querySelector('.content-destination');
textColorBack.addEventListener('mouseleave', e => {
    textColorBack.style.color = "black";
});



