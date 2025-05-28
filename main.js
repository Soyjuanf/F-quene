document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  gsap.to(".scroll-fill-text", {
    scrollTrigger: {
      trigger: ".scroll-fill-section",
      start: "top 80%",
      end: "top 20%",
      scrub: true
    },
    clipPath: "inset(0% 0 0 0)",
    ease: "none"
  });
});
