document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  gsap.to(".text-reveal", {
    scrollTrigger: {
      trigger: ".scroll-fill-section",
      start: "top 80%",
      end: "top 20%",
      scrub: true
    },
    backgroundPosition: "100% 0",
    ease: "none"
  });
});

