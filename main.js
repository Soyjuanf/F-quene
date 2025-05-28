document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  // Texto que se rellena horizontalmente (otra sección)
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

  // Texto de fondo (FÚQUENE): aparece fijo al inicio de la sección
  gsap.fromTo(".capsule-background-text",
    { opacity: 0 },
    {
      opacity: 1,
      scrollTrigger: {
        trigger: ".capsule-transition-section",
        start: "top bottom",
        end: "bottom top",
        scrub: true
      },
      ease: "none"
    }
  );

  // Imagen hace zoom desde escala 1 → 1.5
  gsap.fromTo(".capsule-image",
    { scale: 1 }, // arranca más pequeña
    {
      scale: 1.5,
      scrollTrigger: {
        trigger: ".capsule-transition-section",
        start: "top top",
        end: "bottom top",
        scrub: true
      },
      ease: "none"
    }
  );

  // Texto aparece cuando zoom está casi completo
  gsap.fromTo(".capsule-overlay",
    { opacity: 0, y: 40 },
    {
      opacity: 1,
      y: 0,
      scrollTrigger: {
        trigger: ".capsule-transition-section",
        start: "70% center", // espera al final del zoom
        end: "bottom top",
        scrub: true
      },
      ease: "power2.out"
    }
  );
});
