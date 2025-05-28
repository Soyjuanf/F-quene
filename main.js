document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

gsap.to("#mask-rect", {
    scrollTrigger: {
      trigger: ".svg-text-scroll",
      start: "top 80%",
      end: "top 20%",
      scrub: true
    },
    attr: { width: "1600" },
    ease: "none"
  });
});
