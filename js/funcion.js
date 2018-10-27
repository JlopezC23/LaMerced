/* INICIALIZANDO ANIMACION EN WOW */
new WOW().init();

/* INICIALIZANDO ARCHIVO SCROLL */
var scroll = new SmoothScroll('a[href*="#"]');
SmoothScroll.init({
    speed: 10,
    offset: 100
});

/* MOSTRAR Y OCULTAR FLECHA INDICADORA */
$(function () {
    $(window).scroll(function () {
        var scrolltop = $(this).scrollTop();
        if (scrolltop >= 20) {
            $(".ir-arriba").fadeIn();    
        } else {
            $(".ir-arriba").fadeOut();
        }
    });
});