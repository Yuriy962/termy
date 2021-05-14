
/* window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.menu'),
    //menuList = document.querySelector('.menu__list'),
    menuItem = document.querySelectorAll('.menu__item'),
    hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger-active');
        menu.classList.toggle('menu-active');
        //menuList.classList.toggle('container');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger-active');
            menu.classList.toggle('menu-active');
        })
    });
}); */

$(document).ready(function () {
    $().fancybox();
    $('a[href^="#"]').on('click', function() {
        let href = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(href).offset().top
        });
        return false;
    });

    // const swiper = new Swiper('.promo__swiper', {
    //     speed: 400,
    //     spaceBetween: 100,
    //     // Navigation arrows
    //     navigation: {
    //       nextEl: '.swiper-button-next',
    //       prevEl: '.swiper-button-prev',
    //     },
      
    //     // And if we need scrollbar
    //     scrollbar: {
    //       el: '.swiper-scrollbar',
    //     },
    //   });
    //   swiper.init();

    function addZero(n) {
        return n.length > 1 ? n : (+n > 0 && +n <= 9) ? "0" + n : n;
    }

    var swiper = new Swiper(".promo__swiper", {
        pagination: {
            el: ".swiper-pagination",
            type: "progressbar",
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        on: {
            init: function (swiper) {
                console.log(swiper.activeIndex);
                console.log(addZero(swiper.slides.length));// общее кол-во слайдов
            },
            slideChange: function (swiper) {
                console.log(addZero(swiper.activeIndex + 1));
            }
        }
    });
});

