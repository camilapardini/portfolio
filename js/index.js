import { BlurScrollEffect as BlurScrollEffect4 } from './effect-4/blurScrollEffect.js';
import { preloadFonts } from './utils.js';


// Registers the ScrollTrigger plugin with GSAP
gsap.registerPlugin(ScrollTrigger);

const init = () => {
  const effects = [
    { selector: '[data-effect-4]', effect: BlurScrollEffect4 },
  ];

  // Iterate over each effect configuration and apply the effect to all matching elements
  effects.forEach(({ selector, effect }) => {
    document.querySelectorAll(selector).forEach(el => {
      new effect(el);
    });
  });
};

// Preload images and fonts and remove loader
preloadFonts('lnu1fpi').then(() => {
  document.body.classList.remove('loading');
  init();
});

window.addEventListener('load', () => {
  const textElement = document.querySelector('.load'); // Selecciona el elemento con la clase 'load'
  gsap.fromTo(textElement, 
    {
      opacity: 0, // Inicia con opacidad 0
    }, 
    {
      opacity: 1, // Llega a opacidad 1
      duration: 4, // Duración de 2 segundos para hacerla más lenta
      ease: 'power4.out', // Easing más suave
    }
  );
});

gsap.from(".divider-animation", {
  opacity: 0,
   x: 3000,
  duration: 5, // Duración más larga para un efecto más suave
  ease: "power2.out", // Easing para suavizar la animación
  scrollTrigger: {
    trigger: ".divider-animation",  // El trigger es el elemento que activa la animación
    start: "top 70%",      // El punto de inicio para activar la animación
    end: "top 30%",        // El punto donde termina la animación
    scrub: true,           // Hace que la animación esté sincronizada con el desplazamiento
  }
});

gsap.from(".cards-animation", {
  opacity: 0,
  duration: 4, // Duración más larga para un efecto más suave
  ease: "power2.out", // Easing para suavizar la animación
  scrollTrigger: {
    trigger: ".cards-animation",  // El trigger es el elemento que activa la animación
    start: "top 40%",      // El punto de inicio para activar la animación
    end: "top 30%",        // El punto donde termina la animación
    scrub: true,           // Hace que la animación esté sincronizada con el desplazamiento
  }
});
