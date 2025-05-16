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
