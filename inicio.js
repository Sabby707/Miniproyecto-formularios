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
