let menu = document.querySelector('#menu');
let topnav = document.querySelector('.topnav');

menu.addEventListener('click', (e) => {
    e.stopPropagation();
    topnav.classList.toggle('toggle');

})
window.addEventListener('resize', () => {
    console.log('size window = ', window.innerWidth);
    if (window.innerWidth > 768) {
        topnav.classList.remove('toggle')
    }
})

window.addEventListener('click', () => {
    topnav.classList.remove('toggle');
})