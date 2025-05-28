document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  // Efecto: Texto que se rellena horizontalmente
  gsap.to(".scroll-fill-text", {
    scrollTrigger: {
      trigger: ".scroll-fill-section",
      start: "top 80%",
      end: "top 30%",
      scrub: true
    },
    clipPath: "inset(0 0% 0 0)",
    ease: "none"
  });

  // Mostrar texto de fondo solo durante esta sección
  gsap.to(".capsule-background-text", {
    scrollTrigger: {
      trigger: ".capsule-transition-section",
      start: "top bottom",
      end: "bottom top",
      scrub: true
    },
    opacity: 0.05, // más visible que 0.1
    ease: "none"
  });

  // Zoom de imagen al hacer scroll
  gsap.to(".capsule-image", {
    scrollTrigger: {
      trigger: ".capsule-transition-section",
      start: "top top",
      end: "center center", // SOLO hasta la mitad del scroll
      scrub: true
    },
    scale: 1.2,
    ease: "none"
  });

  // Fade-in del texto después del zoom
  gsap.fromTo(".capsule-overlay", 
    { opacity: 0, y: 30 }, 
    {
      opacity: 1,
      y: 0,
      scrollTrigger: {
        trigger: ".capsule-transition-section",
        start: "center center", // empieza justo cuando el zoom termina
        end: "bottom top",
        scrub: true
      },
      ease: "power2.out"
    }
  );
});
