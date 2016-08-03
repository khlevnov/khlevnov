import throttle from 'lodash/throttle';

let menu = document.getElementById('menu');
let headerHeight = window.innerHeight - menu.clientHeight;

window.addEventListener('scroll', throttle(function() {
    let offset = window.pageYOffset;
    if (offset > headerHeight) {
        menu.classList.add('menu--fixed');
    } else {
        menu.classList.remove('menu--fixed');
    }
}, 50));
