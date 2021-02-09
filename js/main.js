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

// Stickjaw
var SJ_setiings = {
    options: {
        hlw: true, // Height as width
        wlh: true, // Width as height
        hlt: true, // Width of the target element (target id is the same as for height)
        wlt: true, // Height of the target element (target id is the same as for width)
        alo: true, // All elements as one (height)
    },
    settings: {
        windowResize: true, 
        writeHystory: true 
    }
}
var sj = new SJ({
    settings: {
        windowResize: true
    }
});
