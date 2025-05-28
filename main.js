document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  gsap.to(".scroll-fill-text", {
    scrollTrigger: {
      trigger: ".scroll-fill-section",
      start: "top 80%",
      end: "top 30%",
      scrub: true
    },
    clipPath: "inset(0 0% 0 0)", // Revela horizontalmente
    ease: "none"

  gsap.to(".capsule-image", {
    scrollTrigger: {
      trigger: ".capsule-transition-section",
      start: "top top",
      end: "bottom top",
      scrub: true
    },
    scale: 1.8,
    borderRadius: "0px"
  });

  gsap.to(".capsule-overlay", {
    scrollTrigger: {
      trigger: ".capsule-transition-section",
      start: "center center",
      end: "bottom top",
      scrub: true
    },
    opacity: 1
  });
});

