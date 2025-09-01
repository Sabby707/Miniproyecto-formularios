// Ocultar header al bajar
let lastScrollY = window.scrollY;
const headerGroup = document.querySelector('.header-group');

window.addEventListener('scroll', () => {
  if (window.scrollY > lastScrollY) {
    headerGroup.classList.add('scroll-hidden');
  } else {
    headerGroup.classList.remove('scroll-hidden');
  }
  lastScrollY = window.scrollY;
});

// Preguntas frecuentes
const faqBtn = document.getElementById('faq-btn');
const faqContainer = document.getElementById('faq-container');
const faqItems = document.querySelectorAll('.faq-item');

if(faqBtn && faqContainer && faqItems.length) {
  faqBtn.addEventListener('click', () => {
    faqContainer.style.display = faqContainer.style.display === 'block' ? 'none' : 'block';
  });

  faqItems.forEach(item => {
    item.addEventListener('click', () => {
      const answer = item.querySelector('.faq-answer');
      if(answer) {
        answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
      }
    });
  });
}

// Menú móvil 
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
const closeMenu = document.getElementById('closeMenu');
const menuOverlay = document.getElementById('menuOverlay');

function toggleMenu(show) {
  if(show) {
    mobileMenu.classList.add('active');
    menuOverlay.classList.add('active');
    document.documentElement.classList.add('no-scroll');
    document.body.classList.add('no-scroll');
  } else {
    mobileMenu.classList.remove('active');
    menuOverlay.classList.remove('active');
    document.documentElement.classList.remove('no-scroll');
    document.body.classList.remove('no-scroll');
  }
}

if(hamburger && closeMenu && menuOverlay && mobileMenu) {
  hamburger.addEventListener('click', () => toggleMenu(true));
  closeMenu.addEventListener('click', () => toggleMenu(false));
  menuOverlay.addEventListener('click', () => toggleMenu(false));
}
