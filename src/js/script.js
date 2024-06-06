//CONTROLE DOS NAVS (PRIMEIRO E SEGUNDO)
const primaryHeader = document.querySelector(".primary-header");
const navToggle = document.querySelector(".mobile-nav-toggle");
const primaryNav = document.querySelector(".primary-navigation");
const secondaryNav = document.querySelector(".secondary-navigation");
const about = document.querySelector(".about");

navToggle.addEventListener('click', () => {
    primaryNav.hasAttribute('data-visible')
        ? navToggle.setAttribute("aria-expanded", false)
        : navToggle.setAttribute("aria-expanded", true);
    primaryNav.toggleAttribute("data-visible");
    primaryHeader.toggleAttribute("data-overlay");
    secondaryNav.toggleAttribute("data-visible");
});

//CONTROLE DA VISIBILIDADE DO SEGUNDO NAV NO DESKTOP
const Arrow = document.getElementById('arrow');
about.addEventListener('click', () => {
    secondaryNav.toggleAttribute("data-visible");
    Arrow.classList.toggle("active");
});

//SLIDER

var swiper = new Swiper(".swiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 100,
      modifier: 3,
      slideShadows: true
    },
    keyboard: {
      enabled: true
    },
    mousewheel: {
      thresholdDelta: 70
    },
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
    breakpoints: {
      640: {
        slidesPerView: 2
      },
      768: {
        slidesPerView: 1
      },
      1024: {
        slidesPerView: 2
      },
      1560: {
        slidesPerView: 3
      }
    }
  });