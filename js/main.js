// Swiper JS
const bannerSwiper = new Swiper('.swiper-container.banner-swiper-container', {
    slidesPerView: 1,
    pagination: {
        el: '.swiper-pagination',
        el: '.swiper-pagination',
        clickable: true
    }
});
const menuSwiper = new Swiper('.swiper-container.menu-swiper-container', {
    slidesPerView: 'auto',
    spaceBetween: 95,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    }
});