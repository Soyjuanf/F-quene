document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  // 1. Texto que se rellena horizontalmente (otra sección)
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

  // 2. Texto de fondo infinito FÚQUENE – blanco, solo visible en su sección
  gsap.to(".capsule-background-text", {
    scrollTrigger: {
      trigger: ".capsule-transition-section",
      start: "top bottom",
      end: "bottom top",
      scrub: true
    },
    opacity: 1, // blanco total
    ease: "none"
  });

  // 3. Zoom completo de la imagen en toda la sección
  gsap.to(".capsule-image", {
    scrollTrigger: {
      trigger: ".capsule-transition-section",
      start: "top top",
      end: "bottom top",
      scrub: true
    },
    scale: 1.5,
    ease: "none"
  });

  // 4. Aparecer texto solo después de que imagen está en zoom completo
  gsap.fromTo(".capsule-overlay",
    { opacity: 0, y: 40 },
    {
      opacity: 1,
      y: 0,
      scrollTrigger: {
        trigger: ".capsule-transition-section",
        start: "70% center", // empieza ya cuando la imagen casi está en su punto final
        end: "bottom top",
        scrub: true
      },
      ease: "power2.out"
    }
  );
});
