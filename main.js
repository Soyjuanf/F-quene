document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  gsap.utils.toArray(".scroll-image").forEach((img) => {
    gsap.to(img, {
      opacity: 1,
      y: 0,
      duration: 1.4,
      ease: "power3.out",
      scrollTrigger: {
        trigger: img,
        start: "top 90%",
        toggleActions: "play none none reverse"
      }
    });
  });
});
