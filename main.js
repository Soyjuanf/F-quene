document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  const images = [".image-1", ".image-2", ".image-3"];
  const texts = [".text-1", ".text-2", ".text-3"];
  const durations = [700, 700, 450]; // vh por cada imagen

  images.forEach((img, i) => {
    const start = durations.slice(0, i).reduce((a, b) => a + b, 0);
    const end = start + durations[i];
    const textStart = start + 5;
    const textEnd = start + 600;

    // Imagen entra y hace zoom
    gsap.timeline({
      scrollTrigger: {
        trigger: ".pin-section",
        start: `${start}vh top`,
        end: `${end}vh top`,
        scrub: true,
      }
    }).to(img, {
      opacity: 1,
      scale: i === 0 ? 1.3 : 1.1,
      duration: 1,
      ease: "power2.out"
    });

    // Imagen 1 empieza pequeña
    if (i === 0) {
      gsap.set(img, { scale: 0.3 });
    }

    // Texto aparece y desaparece con buena duración
    gsap.timeline({
      scrollTrigger: {
        trigger: ".pin-section",
        start: `${textStart}vh top`,
        end: `${textEnd}vh top`,
        scrub: true
      }
    })
    .to(texts[i], { opacity: 1, duration: 2 })
    .to(texts[i], { opacity: 0, duration: 2 });
  });

  // Ajustar z-index para superposición correcta
  gsap.set([".image-2", ".image-3"], { zIndex: (i) => i + 2 });
  gsap.set(".image-1", { zIndex: 1 });

  // Clip-path horizontal (sección extra)
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
