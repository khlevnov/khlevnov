import throttle from 'lodash/throttle';

let menu = document.getElementById('menu'),
    headerHeight = window.innerHeight - menu.clientHeight;

window.addEventListener('scroll', throttle(function() {
    if (window.pageYOffset > headerHeight) {
        menu.classList.add('menu--fixed');
    } else {
        menu.classList.remove('menu--fixed');
    }
}, 50));
