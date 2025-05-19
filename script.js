let slides = document.querySelectorAll('.slide');
let index = 0;

function showSlide(i) {
  slides.forEach((slide, idx) => {
    slide.classList.remove('active');
    if (idx === i) {
      slide.classList.add('active');
    }
  });
}

function nextSlide() {
  index = (index + 1) % slides.length; // reinicia quando chega no fim
  showSlide(index);
}

showSlide(index);
setInterval(nextSlide, 4000); // troca a cada 4 segundos

const swiper = new Swiper('.swiper', {
      loop: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      slidesPerView: 3, // Mostra 3 slides ao mesmo tempo
      spaceBetween: 30, // Espaço entre os slides (px)
      breakpoints: {
        0: {
          slidesPerView: 1, // em telas pequenas
        },
        768: {
          slidesPerView: 2, // tablets
        },
        1024: {
          slidesPerView: 3, // desktops
        }
      }
});



