$(document).ready(_=> {if ($('.ways')) {

    const slider = $('.ways__slider');

    $(slider).slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '.ways__slider-arrow--prev',
        nextArrow: '.ways__slider-arrow--next'
    })

}});