document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  // 1. Efecto: Texto que se rellena horizontalmente (de otra sección)
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

  // 2. Mostrar texto de fondo "FÚQUENE" solo durante la sección
  gsap.to(".capsule-background-text", {
    scrollTrigger: {
      trigger: ".capsule-transition-section",
      start: "top bottom",
      end: "bottom top",
      scrub: true
    },
    opacity: 0.05,
    ease: "none"
  });

  // 3. Zoom de imagen desde el principio hasta el final de la sección
  gsap.to(".capsule-image", {
    scrollTrigger: {
      trigger: ".capsule-transition-section",
      start: "top top",
      end: "bottom top",
      scrub: true
    },
    scale: 1.5,
    ease: "none"
  });

  // 4. Mostrar texto sin transición (blanco y estático cuando se activa)
  gsap.set(".capsule-overlay", {
    scrollTrigger: {
      trigger: ".capsule-transition-section",
      start: "center center",
      toggleActions: "play none none reverse"
    },
    opacity: 1,
    y: 0
  });
});

