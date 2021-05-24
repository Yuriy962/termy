
window.addEventListener('DOMContentLoaded', () => {
    const sidebar = document.querySelector('.header__sidebar'),
    //menuList = document.querySelector('.menu__list'),
    menuItem = document.querySelectorAll('.menu__item'),
    hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        sidebar.classList.toggle('header__sidebar_active');
        //menuList.classList.toggle('container');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            sidebar.classList.toggle('header__sidebar_active');
        })
    });
});

$(document).ready(function () {
    $().fancybox();
    $('a[href^="#"]:not(a[href="#request"])').on('click', function() {
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
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
            on: {
                init: function (swiper) {
                    console.log(swiper.slides.length);
                    console.log(swiper.activeIndex);
                    console.log(addZero(swiper.slides.length));// общее кол-во слайдов
                },
                slideChange: function (swiper) {
                    console.log(addZero(swiper.activeIndex + 1));
                }
            },
            pagination: {
                el: ".swiper-pagination"
            },
            breakpoints:  {
                768:{
                    pagination: {
                        el: ".swiper-pagination",
                        type: "progressbar",
                        renderFraction: function (currentClass, totalClass) {
                            return '<span class="' + currentClass + '"></span>' +
                                    ' of ' +
                                    '<span class="' + totalClass + '"></span>';
                        }
                    },
                },
                320: {
                    pagination: {
                        el: ".swiper-pagination",
                        type: "bullets",
                    }
                },
            },
        });

    var servswiper = new Swiper(".services__photos", {
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
            nextEl: ".swiper-button-next.calendar__arrow",
            prevEl: ".swiper-button-prev.calendar__arrow",
        }
    });
    var EventsSwiper = new Swiper(".events__list",
    {
        spaceBetween: 30,
        navigation: {
            nextEl: ".swiper-button-next.event__arrow.event__arrow-right",
            prevEl: ".swiper-button-prev.event__arrow.event__arrow-left",
        },
        breakpoints:  {
            1200:{
                slidesPerView: 4,
            },
            992:{
                slidesPerView: 3,
            }
        }
    });


    $('.dropdown').on('click', function () {
       $(this).toggleClass('dropdown_active'); 
    });
    $('.calendar__day').on('click', function () {
        $(this).toggleClass('calendar__day_active'); 
     });
     $('.basket.icon').on('click', function (e) {
        e.preventDefault();
        $(this).find('.basket__content').toggleClass('basket__content_active'); 
        $('.page-overflow').toggleClass('page-overflow_active');
     });
     $('.page-overflow').on('click', function(){
        $(this).toggleClass('page-overflow_active');
        $('.basket__content').toggleClass('basket__content_active'); 
     });

        //Табы
    $('ul.tabs').on('click', 'li:not(.tabs__item_active)', function() {
        $(this)
            .addClass('tabs__item_active').siblings().removeClass('tabs__item_active')
            .closest('div.container').find('div.tabs__content').removeClass('tabs__content_active').eq($(this).index()).addClass('tabs__content_active');
    });



    $().fancybox();


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