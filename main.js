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

  // Zoom de la imagen al hacer scroll
  gsap.to(".capsule-image", {
    scrollTrigger: {
      trigger: ".capsule-transition-section",
      start: "top top",
      end: "bottom top",
      scrub: true
    },
    scale: 1.2
  });

  // Fade in del texto al hacer scroll
  gsap.to(".capsule-overlay", {
    scrollTrigger: {
      trigger: ".capsule-transition-section",
      start: "top 60%",
      end: "top 30%",
      scrub: true
    },
    opacity: 1,
    y: -30,
    ease: "power1.out"
  });
});
