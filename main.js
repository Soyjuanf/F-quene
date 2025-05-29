document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  const images = [".image-1", ".image-2", ".image-3"];
  const texts = [".text-1", ".text-2", ".text-3"];
  const durations = [800, 800, 550]; // Duración del scroll por imagen

  images.forEach((img, i) => {
    const start = durations.slice(0, i).reduce((a, b) => a + b, 0);
    const end = start + durations[i];

    // Crear una sola línea de tiempo para sincronizar imagen + texto
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".pin-section",
        start: `${start}vh top`,
        end: `${end}vh top`,
        scrub: true,
      }
    });

    // Imagen 1 arranca pequeña
    if (i === 0) {
      gsap.set(img, { scale: 0.6 });
      tl.to(img, { opacity: 1, scale: 1.3, duration: 3, ease: "power2.out" });
    } else {
      tl.to(img, { opacity: 1, scale: 1.1, duration: 3, ease: "power2.out" });
    }

    // Texto aparece y desaparece dentro del mismo timeline que su imagen
    tl.to(texts[i], { opacity: 1, duration: 5 }, "<+0.2");
    tl.to(texts[i], { opacity: 0, duration: 5 }, `>-${0.5}`);
  });

  // Z-index correcto
  gsap.set([".image-2", ".image-3"], { zIndex: (i) => i + 2 });
  gsap.set(".image-1", { zIndex: 1 });

  // Marquesina final
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
