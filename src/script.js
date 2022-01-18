$(document).ready(() => {
    const slickOptions = {
        autoplay: true,
        autoplaySpeed: 3000,
        dots: false,
        prevArrow: '<button type="button" class="slick-prev slider__prev-arrow">Previous</button>;',
        nextArrow: '<button type="button" class="slick-next slider__next-arrow">Next</button>;'
    };
    $('.slider').slick(slickOptions);
      
    setInterval(() => {
        const numberCollection = document.querySelectorAll('.counter__number');
    }, 1000);
});