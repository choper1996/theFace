$(document).ready(_=> {if ($('.clients')) {

    const slider = $('.clients__slider');

    $(slider).slick({
        dots: true,
        arrows: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        dotsClass: 'clients__dots',
    });

    $('.clients__dots')[1].remove();
}});