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

  // Efecto: Imagen que hace zoom al hacer scroll
  gsap.to(".capsule-image", {
    scrollTrigger: {
      trigger: ".capsule-transition-section",
      start: "top top",
      end: "bottom top",
      scrub: true
    },
    scale: 1.8,
    ease: "none"
  });

  // Efecto: Texto aparece encima de la cápsula
  gsap.to(".capsule-overlay", {
    scrollTrigger: {
      trigger: ".capsule-transition-section",
      start: "center center",
      end: "bottom top",
      scrub: true
    },
    opacity: 1,
    ease: "none"
  });
});
