
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
    $('a[href^="#"]:not(a.popup)').on('click', function() {
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
                    $('.promo__scrollbar').before('<div class="promo__slides-counter"><span>' 
                    + addZero(swiper.activeIndex+1) + '</span>' +
                    ' / ' +
                    '<span>' + addZero(swiper.slides.length) + '</span></div>');
                },
                slideChange: function (swiper) {
                    $('.promo__slides-counter span:first-child').text(addZero(swiper.activeIndex+1));
                }
            },
            breakpoints:  {
                320: {
                    pagination: {
                        el: ".promo__scrollbar",
                        type: "bullets",
                    }
                },
                992:{
                    pagination: {
                        el: ".swiper-pagination",
                        type: "progressbar"
                    },
                }
            },
        });
        $(swiper).on('paginationShow',function () {
            console.log('ds');
        });

    var servswiper = new Swiper(".services__photos", {
        slidesPerView: 1,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        }
    });

    var giftswiper = new Swiper(".gift__slider", {
        slidesPerView: 1,
        effect: "fade",
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: ".swiper-pagination.gift__pag",
            type: "bullets"
        },
    });
    var eventsSwiper = new Swiper(".events__list",
    {
        slidesPerView: 1,
        spaceBetween: 30,
        navigation: {
            nextEl: ".swiper-button-next.event__arrow.event__arrow-right",
            prevEl: ".swiper-button-prev.event__arrow.event__arrow-left",
        },
        breakpoints: {
            320: {
                pagination: {
                    el: '.swiper-pagination.event__pag',
                    type: 'bullets',
                },
            },
            768: {
                sliderPerView: 2,
                pagination: {

                }
            },
            992: {
                slidesPerView: 3,
            },
            1200: {
                slidesPerView: 4,
            },
        },
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

      $(document).ready(function() {
        $('.minus').click(function () {
            var $input = $(this).parent().find('.counter__quantity');
            var count = parseInt($input.val()) - 1;
            count = count < 1 ? 1 : count;
            $input.val(count);
            $input.change();
            return false;
        });
        $('.plus').click(function () {
            var $input = $(this).parent().find('.counter__quantity');
            $input.val(parseInt($input.val()) + 1);
            $input.change();
            return false;
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

$(".rules__bullet:not(.rules__bullet-active)").on('click', function(){
    $(this)
        .addClass('rules__bullet-active').siblings().removeClass('rules__bullet-active');
        $.each($('.dp_item:first-child'), function (index, dp_item) {
            $(dp_item).attr('data-position', index + 1);
        });
        $("#dp-slider .dp_item:first-child").hide().appendTo("#dp-slider").fadeIn();
        $.each($('.dp_item'), function (index, dp_item) {
            $(dp_item).attr('data-position', index + 1);
        });
        detect_active();
});