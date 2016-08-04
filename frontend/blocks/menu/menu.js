import throttle from 'lodash/throttle';

let menu = document.getElementById('menu'),
    headerHeight = window.innerHeight - menu.clientHeight;

window.addEventListener('scroll', throttle(() => {
    if (window.pageYOffset > headerHeight) {
        menu.classList.add('menu--fixed');
    } else {
        menu.classList.remove('menu--fixed');
    }
}, 50));

Array.from(menu.querySelectorAll('.menu__item')).forEach((button) => {
    button.addEventListener('click', () => {
        document.getElementById(button.dataset.scroll).scrollIntoView();
    });
})
