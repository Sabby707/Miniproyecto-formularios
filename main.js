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
    const hamburger = document.querySelector('.hamburger');
    const mobileMenu = document.getElementById('mobileMenu');
    const closeBtn = document.querySelector('.close-btn');
    const menuOverlay = document.getElementById('menuOverlay');

    function openMenu() {
        mobileMenu.classList.add('active');
        menuOverlay.classList.add('active');
        document.body.classList.add('no-scroll');
        document.documentElement.classList.add('no-scroll');
    }

    function closeMenu() {
        mobileMenu.classList.remove('active');
        menuOverlay.classList.remove('active');
        document.body.classList.remove('no-scroll');
        document.documentElement.classList.remove('no-scroll');
    }

    if(hamburger && closeBtn && menuOverlay && mobileMenu) {
        hamburger.addEventListener('click', openMenu);
        closeBtn.addEventListener('click', closeMenu);
        menuOverlay.addEventListener('click', closeMenu);

        document.querySelectorAll('.mobile-menu a').forEach(link => {
            link.addEventListener('click', closeMenu);
        });
    }
