
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

    function addZero(n) {
        return n.length > 1 ? n : (+n > 0 && +n <= 9) ? "0" + n : n;
    }

    var swiper = new Swiper(".promo__swiper", {
        pagination: {
            el: ".swiper-pagination",
            type: "progressbar"/* ,
            renderFraction: (currentClass, totalClass) => {
                return '<span class="current-number' + currentClass + '"></span>' +
                  ' of ' +
                  '<span class="total-number ' + totalClass + '"></span>';
            } */
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
        },
    });

    var servswiper = new Swiper(".additional__sliders_slider", {
        slidesPerView: 1,
        spaceBetween: 100,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        }
    });

    var giftswiper = new Swiper(".gift__slider", {
        slidesPerView: 1,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
        },
    });
    var calendarSwiper = new Swiper(".events__calendar",
    {
        slidesPerView: 1,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
    var EventsSwiper = new Swiper(".events__list",
    {
        slidesPerView: 4,
        spaceBetween: 30,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });


    $('.dropdown').on('click', function () {
       $(this).toggleClass('dropdown_active'); 
    });

        //Табы
    $('ul.tabs').on('click', 'li:not(.tabs__item_active)', function() {
        $(this)
            .addClass('tabs__item_active').siblings().removeClass('tabs__item_active')
            .closest('div.container').find('div.tabs__content').removeClass('tabs__content_active').eq($(this).index()).addClass('tabs__content_active');
    });


/*-------------------<cardSlider>------------------------------------------------------*/
    jQuery(document).ready(function(){

        function detect_active(){
              // get active
              var get_active = $("#dp-slider .dp_item:first-child").data("class");
              $("#dp-dots li").removeClass("active");
              $("#dp-dots li[data-class="+ get_active +"]").addClass("active");
          }
          $("#dp-next").click(function(){
              var total = $(".dp_item").length;
              $("#dp-slider .dp_item:first-child").hide().appendTo("#dp-slider").fadeIn();
              $.each($('.dp_item'), function (index, dp_item) {
                  $(dp_item).attr('data-position', index + 1);
              });
              detect_active();

          });

          $("#dp-prev").click(function(){
              var total = $(".dp_item").length;
              $("#dp-slider .dp_item:last-child").hide().prependTo("#dp-slider").fadeIn();
              $.each($('.dp_item'), function (index, dp_item) {
                  $(dp_item).attr('data-position', index + 1);
              });

              detect_active();
          });

          $("#dp-dots li").click(function(){
              $("#dp-dots li").removeClass("active");
              $(this).addClass("active");
              var get_slide = $(this).attr('data-class');
              console.log(get_slide);
              $("#dp-slider .dp_item[data-class=" + get_slide + "]").hide().prependTo("#dp-slider").fadeIn();
              $.each($('.dp_item'), function (index, dp_item) {
                  $(dp_item).attr('data-position', index + 1);
              });
          });


          $("body").on("click", "#dp-slider .dp_item:not(:first-child)", function(){
              var get_slide = $(this).attr('data-class');
              console.log(get_slide);
              $("#dp-slider .dp_item[data-class=" + get_slide + "]").hide().prependTo("#dp-slider").fadeIn();
              $.each($('.dp_item'), function (index, dp_item) {
                  $(dp_item).attr('data-position', index + 1);
              });

              detect_active();
          });
      });
    var _gaq = _gaq || [];
    _gaq.push(['_setAccount', 'UA-36251023-1']);
    _gaq.push(['_setDomainName', 'jqueryscript.net']);
    _gaq.push(['_trackPageview']);

    (function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
    })();
/*---------</cardSlider>-----------------------------------------------------------------*/
});



