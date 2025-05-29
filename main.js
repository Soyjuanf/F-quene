document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  // Transiciones de imágenes y textos
  const images = [".image-1", ".image-2", ".image-3"];
  const texts = [".text-1", ".text-2", ".text-3"];

  images.forEach((img, i) => {
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".wrapper",
        start: `${i * 100}vh top`,
        end: `${(i + 1) * 100}vh top`,
        scrub: true,
        pin: i === 0,
      }
    });

    timeline.to(img, { opacity: 1, scale: 1.1, duration: 1 });
    timeline.to(texts[i], { opacity: 1 }, "<");
    timeline.to(texts[i], { opacity: 0 });
  });

  // Superposición correcta de imágenes
  gsap.set([".image-2", ".image-3"], { zIndex: (i) => i + 2 });
  gsap.set(".image-1", { zIndex: 1 });

  // Marquesina durante la sección
  gsap.to(".marquee", {
    scrollTrigger: {
      trigger: ".wrapper",
      start: "top top",
      end: "bottom top",
      scrub: true,
    },
    opacity: 1
  });

  // Efecto de relleno de texto horizontal (otra sección)
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

