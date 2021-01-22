let slider = document.querySelector('#slider');
let img = document.querySelector('#slider img');


let arrPhoto = document.querySelectorAll('.photo-item img');
for (let i = 0; i < arrPhoto.length; i++) {
    arrPhoto[i].addEventListener('click', (e) => {
        let atr = arrPhoto[i].getAttribute('src');
        let fileName = atr.slice(12);
        let newFileName = 'img/gallery/big/' + fileName

        slider.classList.add('slider-toggle');

        img.setAttribute('src', newFileName);
        img.style.display = 'block'
    })
}

slider.addEventListener('click', (e) => {
    slider.classList.remove('slider-toggle');
    img.style.display = 'none';
})