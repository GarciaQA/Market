$('.main-banner .card').on('click', function(e){
    e.preventDefault();
    window.open('https://www.tulivery.com/buscar?lat=-12.1117254&lon=-76.9927518', '_blank');
});

$('.product .buy').on('click', function(e){
    e.preventDefault();
    window.open('https://www.tulivery.com/buscar?lat=-12.1117254&lon=-76.9927518', '_blank');
});

$('.see-more').on('click', function(e){
    e.preventDefault();
    window.open('https://www.tulivery.com/buscar?lat=-12.1117254&lon=-76.9927518', '_blank');
});

$('.category-item.ico').on('click', function(e){
    e.preventDefault();
    $('.md.menu').addClass('open');
});

$('.md.menu .close').on('click', function(e){
    e.preventDefault();
    $('.md.menu').removeClass('open');
});

$('.md.menu li').on('click', function(e){
    e.preventDefault();
    window.open('https://www.tulivery.com/buscar?lat=-12.1117254&lon=-76.9927518', '_blank');
})

$(function(){
    $.contextMenu({
        selector: '.context-menu-one', 
        trigger: 'left',
        callback: function(key, options) {
            var m = "clicked: " + key;
            //window.console && console.log(m) || alert(m); 
            window.open('https://www.tulivery.com/buscar?lat=-12.1117254&lon=-76.9927518', '_blank');
        },
        items: {
            "abarrotes": {name: "Abarrotes"},
            "vestuario": {name: "Vestuario"},
            "calzados": {name: "Calzado"},
            "juguetes": {name: "Juguetes"},
            "electro": {name: "Electro"},
            "comidas": {name: "Comidas"},
            "bebidas": {name: "Bebidas"},
        }
    });
});