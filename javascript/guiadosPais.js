new Swiper('.transparencia-container', {
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
    320: {
      slidesPerView: 1,
      spaceBetween: 50
    },
    // when window width is >= 480px
    768: {
      slidesPerView: 1,
      spaceBetween: 40
    },
    1000: {
      slidesPerView: 1,
      spaceBetween: 70
    }
  }
});

(function(d){

  var s = d.createElement("script");
  s.setAttribute("data-account", "SUA_CHAVE");
  s.src="https://cdn.userway.org/widget.js";
  (d.body || d.head).appendChild(s);

})(document)
