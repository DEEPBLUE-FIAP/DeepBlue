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
const slides = document.querySelectorAll(".slides img");
let slideIndex = 0;
let intervalId = null;

document.addEventListener("DOMContentLoaded", initializeSlider);

function initializeSlider(){
    if(slides.length > 0){
        slides[slideIndex].classList.add("displaySlide");
        intervalId = setInterval(nextSlide, 5000);
    }
}

function showSlide(index){
    if(index >= slides.length){
        slideIndex = 0;
    }
    else if(index < 0){
        slideIndex = slides.length - 1;
    }

    slides.forEach(slide => {
        slide.classList.remove("displaySlide");
    });
    slides[slideIndex].classList.add("displaySlide");
}

function prevSlide(){
    clearInterval(intervalId);
    slideIndex--;
    showSlide(slideIndex);
}

function nextSlide(){
    slideIndex++;
    showSlide(slideIndex);
}

