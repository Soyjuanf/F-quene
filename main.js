document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  gsap.to(".scroll-reveal-text", {
    scrollTrigger: {
      trigger: ".scroll-reveal-text",
      start: "top 90%",
      end: "top 30%",
      scrub: true
    },
    color: "#ffffff"
  });
});
