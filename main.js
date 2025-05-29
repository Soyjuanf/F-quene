document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  const images = [".image-1", ".image-2", ".image-3"];
  const texts = [".text-1", ".text-2", ".text-3"];

  const durations = [150, 150, 100]; // VH que dura cada imagen

  images.forEach((img, i) => {
    const start = durations.slice(0, i).reduce((a, b) => a + b, 0);
    const end = start + durations[i];

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".pin-section",
        start: `${start}vh top`,
        end: `${end}vh top`,
        scrub: true,
      }
    });

    tl.to(img, { opacity: 1, scale: 1.1, duration: 1 });
    tl.to(texts[i], { opacity: 1 }, "<+0.3");
    tl.to(texts[i], { opacity: 0 }, ">+0.6");
  });

  gsap.set([".image-2", ".image-3"], { zIndex: (i) => i + 2 });
  gsap.set(".image-1", { zIndex: 1 });

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
