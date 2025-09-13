new Swiper('.guia_pais__transparencia--container', {
  grabCursor: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
    // when window width is >= 320px
    640: {
      slidesPerView: 1,
      spaceBetween: 30
    },
    // when window width is >= 480px
    768: {
      slidesPerView: 1,
      spaceBetween: 40
    }
  }
});