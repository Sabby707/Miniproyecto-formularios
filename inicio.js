// Slider principal
const slides = document.querySelectorAll('.hero-slider .slide');
const nextBtn = document.querySelector('.hero-slider .next');
const prevBtn = document.querySelector('.hero-slider .prev');
let current = 0;
const slideIntervalTime = 4000;
let slideInterval;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
    });
    current = index;
}

function nextSlide() {
    showSlide((current + 1) % slides.length);
}

function prevSlide() {
    showSlide((current - 1 + slides.length) % slides.length);
}

nextBtn.addEventListener('click', () => {
    nextSlide();
    resetInterval();
});

prevBtn.addEventListener('click', () => {
    prevSlide();
    resetInterval();
});

function startInterval() {
    slideInterval = setInterval(nextSlide, slideIntervalTime);
}

function resetInterval() {
    clearInterval(slideInterval);
    startInterval();
}

const slider = document.querySelector('.hero-slider');
slider.addEventListener('mouseenter', () => clearInterval(slideInterval));
slider.addEventListener('mouseleave', () => startInterval());

startInterval();

// Mostrar más/menos en "Más sobre nosotros"
const toggleBtn = document.querySelector('.toggle-about-btn');
const extraText = document.querySelector('.extra-about-text');

toggleBtn.addEventListener('click', () => {
    const isHidden = extraText.style.display === 'none';
    extraText.style.display = isHidden ? 'block' : 'none';
    toggleBtn.textContent = isHidden ? 'Ver menos' : 'Ver más';

    if (isHidden) {
        setTimeout(() => {
            const lastElement = extraText.lastElementChild || extraText;
            lastElement.scrollIntoView({ behavior: 'smooth', block: 'end' });
        }, 200);
    }
});


//modal login
document.addEventListener("DOMContentLoaded", function () {
  const abrirLogin = document.getElementById("abrirLogin");
  const modalLogin = document.getElementById("modalLogin");
  const cerrarLogin = document.getElementById("cerrarLogin");

  if (!abrirLogin || !modalLogin || !cerrarLogin) {
    console.warn("Faltan elementos del modal (abrirLogin / modalLogin / cerrarLogin). Revisa IDs.");
    return;
  }

  abrirLogin.addEventListener("click", function (e) {
    e.preventDefault();
    modalLogin.classList.add("open");
    modalLogin.setAttribute("aria-hidden", "false");
  });

  cerrarLogin.addEventListener("click", function () {
    modalLogin.classList.remove("open");
    modalLogin.setAttribute("aria-hidden", "true");
  });

  // Cerrar al clicar fuera del contenido
  modalLogin.addEventListener("click", function (e) {
    if (e.target === modalLogin) {
      modalLogin.classList.remove("open");
      modalLogin.setAttribute("aria-hidden", "true");
    }
  });

  // Esc para cerrar
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && modalLogin.classList.contains("open")) {
      modalLogin.classList.remove("open");
      modalLogin.setAttribute("aria-hidden", "true");
    }
  });
});


// Escuchar mensajes desde el iframe (login.html)
window.addEventListener("message", function (event) {
    if (event.data && event.data.tipo === 'loginExitoso') {
        const modalLogin = document.getElementById("modalLogin");
        modalLogin.classList.remove("open");
        modalLogin.setAttribute("aria-hidden", "true");
    }
});

