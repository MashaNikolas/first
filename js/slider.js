let slider = document.querySelector('#slider');
let img = document.querySelector('#slider img');
let close = document.querySelector('#slider i');
let rightSlide = document.querySelector('#slider .right-slide');
let leftSlide = document.querySelector('#slider .left-slide');
let arrPhoto = document.querySelectorAll('.photo-item img');

let numPhoto = 0;

for (let i = 0; i < arrPhoto.length; i++) {
    arrPhoto[i].addEventListener('click', (e) => {
        let atr = arrPhoto[i].getAttribute('src');
        let fileName = atr.slice(12);
        let newFileName = 'img/gallery/big/' + fileName

        slider.classList.add('slider-toggle');

        img.setAttribute('src', newFileName);
        img.style.display = 'block'
        close.style.display = 'block'
        rightSlide.style.display = 'block';
        leftSlide.style.display = 'block';

        numPhoto = i;
        console.log(numPhoto, ' - numPhoto');
    })
}

slider.addEventListener('click', (e) => {
    slider.classList.remove('slider-toggle');
    img.style.display = 'none';
    close.style.display = 'none';
    rightSlide.style.display = 'none';
    leftSlide.style.display = 'none';

})

rightSlide.addEventListener('click', (e) => {
    e.stopPropagation();
    if (numPhoto + 1 >= arrPhoto.length) {
        console.log('а нема');
    } else {
        let count = numPhoto + 1;
        let newFileName = 'img/gallery/big/' + count + '.jpg'
        numPhoto = numPhoto + 1;
        img.setAttribute('src', newFileName);
    }

})

leftSlide.addEventListener('click', (e) => {
    e.stopPropagation();

    if (numPhoto - 1 < 0) {
        console.log('а нема');
    } else {
        let count = numPhoto - 1;
        console.log(count, ' - count');
        let newFileName = 'img/gallery/big/' + count + '.jpg'
        numPhoto = numPhoto - 1;
        img.setAttribute('src', newFileName);
    }
})