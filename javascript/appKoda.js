document.addEventListener("DOMContentLoaded", () => {
  // ---------------- Fade + Slide on Scroll ----------------
  const scrollElements = document.querySelectorAll(
     '.scroll-animate, .slide-left, .slide-right, .slide-up, .bounce'
  );
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.classList.add('visible');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });
 scrollElements.forEach(el => observer.observe(el));
 
  // ---------------- Hover: zoom e brilho em imagens ----------------
  const hoverImages = document.querySelectorAll('.phone-container img, .pelucia-img, .quiz-img');
  hoverImages.forEach(img => {
    img.style.transition = "transform 0.3s ease, filter 0.3s ease";
    img.addEventListener('mouseenter', () => {
      img.style.transform = "scale(1.05)";
      img.style.filter = "brightness(1.1)";
    });
    img.addEventListener('mouseleave', () => {
      img.style.transform = "scale(1)";
      img.style.filter = "brightness(1)";
    });
  });
});

//----------------- API DE ACESSIBILIDADE -------------------
  (function(d){
    var s = d.createElement("script");
    s.setAttribute("data-account", "SUA_CHAVE");
    s.src="https://cdn.userway.org/widget.js";
    (d.body || d.head).appendChild(s);
  })(document)