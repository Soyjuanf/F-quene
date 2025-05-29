document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  // Texto que se rellena horizontalmente (otra sección)
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

  // Zoom
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
  
 // Capsule
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
