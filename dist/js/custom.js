window.addEventListener('DOMContentLoaded', () => {
    const sidebar = document.querySelector('.header__sidebar'),
    //menuList = document.querySelector('.menu__list'),
    menuItem = document.querySelectorAll('.menu li a'),
    hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        sidebar.classList.toggle('header__sidebar_active');
        //menuList.classList.toggle('container');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            hamburger.classList.toggle('hamburger_active');
            sidebar.classList.toggle('header__sidebar_active');
        })
    });

    $(function() {
        $(".lazy").lazyload();
    });
});

$(document).ready(function(){
    YaMapsShown = false; 
    $(window).scroll(function() {
        if (!YaMapsShown){
            if($(window).scrollTop() + $(window).height() > $(document).height() - 457) {      
            showYaMaps();
            YaMapsShown = true;
            }
        }
    });
    function showYaMaps(){
        var script   = document.createElement("script");
        script.type  = "text/javascript";
        script.src   = "https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A935ecaccfa030000a607632df855edd8d964e0430b6b9e62b879cf4166e7a31d&amp;width=100%25&amp;height=457&amp;lang=ru_RU&amp;scroll=true";
        document.getElementById("YaMaps").appendChild(script);
    }
});