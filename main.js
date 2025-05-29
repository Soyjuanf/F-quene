document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  const images = [".image-1", ".image-2", ".image-3"];
  const texts = [".text-1", ".text-2", ".text-3"];

  const sectionDuration = 200; // Altura virtual por imagen (en vh)

  images.forEach((img, i) => {
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".pin-section",
        start: `${i * sectionDuration}vh top`,
        end: `${(i + 1) * sectionDuration}vh top`,
        scrub: true,
        pin: i === 0,
      }
    });

    timeline.to(img, { opacity: 1, scale: 1.1, duration: 1 });
    timeline.to(texts[i], { opacity: 1 }, "<+0.3");
    timeline.to(texts[i], { opacity: 0 }, `>+0.6`);
  });

  gsap.set([".image-2", ".image-3"], { zIndex: (i) => i + 2 });
  gsap.set(".image-1", { zIndex: 1 });

  gsap.to(".marquee", {
    scrollTrigger: {
      trigger: ".pin-section",
      start: "top top",
      end: "bottom top",
      scrub: true,
    },
    opacity: 1
  });

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
});
