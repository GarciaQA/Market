//responsive when charge event
$(function () {

    var card = $('.swiper-wrapper .card.product').width();
    console.log(card);
    $('.swiper-wrapper .card.product').css('height', card+'px');

    let win = window.matchMedia("only screen and (max-width: 978px)").matches;
    if (win) {
    } else {
    }
});

//responsive when resize event
$(window).resize(function () {

    var card = $('.swiper-wrapper .card.product').width();
    console.log(card);
    $('.swiper-wrapper .card.product').css('height', card+'px');

    let win = window.matchMedia("only screen and (max-width: 978px)").matches;
    if (win) {
    } else {
    }
});