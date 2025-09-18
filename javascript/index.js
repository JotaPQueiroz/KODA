

//CARROSSEL 
var swiper = new Swiper(".mySwiper", {
      spaceBetween: 30,
      centeredSlides: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });


//BOX PERGUNTAS FREQUENTES

  document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', () => {
      const item = question.parentElement;
      item.classList.toggle('active');

      const icon = question.querySelector('.faq-icon');
      icon.textContent = item.classList.contains('active') ? '−' : '+';
    });
  });


  //API DE ACESSIBILIDADE
  (function(d){
    var s = d.createElement("script");
    s.setAttribute("data-account", "SUA_CHAVE");
    s.src="https://cdn.userway.org/widget.js";
    (d.body || d.head).appendChild(s);
  })(document)