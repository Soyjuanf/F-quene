document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  const images = [".image-1", ".image-2", ".image-3"];
  const texts = [".text-1", ".text-2", ".text-3"];

  images.forEach((img, i) => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".pin-section",
        start: `${i * 100}vh top`,
        end: `${(i + 1) * 100}vh top`,
        scrub: true
      }
    });

    tl.to(img, { opacity: 1, scale: 1.05, duration: 1 });
    tl.to(texts[i], { opacity: 1 }, "<+0.3");
    tl.to(texts[i], { opacity: 0 }, ">+0.6");
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
