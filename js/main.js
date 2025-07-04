const words = document.getElementById('words');
const logo = document.getElementById('logo');

window.addEventListener('scroll', () => {

    if (window.scrollY > 0) {

        words.classList.add('hide');
        logo.classList.remove('hide');

        console.log('Page has been scrolled down');
    } else {
        
        words.classList.remove('hide');
        logo.classList.add('hide');
        
        console.log('Page is at the top');
    }
});