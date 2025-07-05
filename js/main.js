const words = document.getElementById('words');
const logo = document.getElementById('logo');
const stacked1 = document.getElementById('stacked1');
const stacked2 = document.getElementById('stacked2');
const width = window.innerWidth;

const mainImageCan = document.getElementById('bigImgCan');
const thumbnailsCan = document.querySelectorAll('.swapCan');

thumbnailsCan.forEach(img => {
    img.addEventListener('click', () => {
        // Swap src values
        const tempSrc = mainImageCan.src;
        mainImageCan.src = img.src;
        img.src = tempSrc;
    });
});

const mainImagePort = document.getElementById('bigImgPort');
const thumbnailsPort = document.querySelectorAll('.swapPort');

thumbnailsPort.forEach(img => {
    img.addEventListener('click', () => {
        // Swap src values
        const tempSrc = mainImagePort.src;
        mainImagePort.src = img.src;
        img.src = tempSrc;
    });
});

const mainImageGrad = document.getElementById('bigImgGrad');
const thumbnailsGrad = document.querySelectorAll('.swapGrad');

thumbnailsGrad.forEach(img => {
    img.addEventListener('click', () => {
        // Swap src values
        const tempSrc = mainImageGrad.src;
        mainImageGrad.src = img.src;
        img.src = tempSrc;
    });
});

// PBJ SCROLL DOWN BAR
// window.addEventListener('scroll', () => {

//     if (window.scrollY > 80) {

//         words.classList.add('hide');
//         logo.classList.remove('hide');

//         // console.log('Page has been scrolled down');
//     } else {
        
//         words.classList.remove('hide');
//         logo.classList.add('hide');
        
//         // console.log('Page is at the top');
//     }
// });

// UNSTACKING THE IMAGES BASED ON SCREEN SIZE
// window.addEventListener("resize", () => {
//     const width = window.innerWidth;
//     console.log(`New size: ${width}`);

//     if (width <= 766) {
//         stacked1.classList.remove('row');
//         stacked2.classList.remove('row');
//     }
//     else {
//         stacked1.classList.add('row');        
//         stacked2.classList.add('row');
//     }
// });

//     if (width <= 766) {
//         stacked1.classList.remove('row');
//         stacked2.classList.remove('row');
//     }
//     else {
//         stacked1.classList.add('row');        
//         stacked2.classList.add('row');
//     }