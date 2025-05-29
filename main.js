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

  // Zoom
  gsap.to(".capsule-image", {
    scrollTrigger: {
      trigger: ".capsule-transition-section",
      start: "top top",
      end: "bottom top",
      scrub: true
    },
    scale: 1.8,
    ease: "none"
  });
  
 // Capsule
  gsap.fromTo(".capsule-overlay", 
    { opacity: 0, y: 30 }, 
    {
      opacity: 1,
      y: 0,
      scrollTrigger: {
        trigger: ".capsule-transition-section",
        start: "top 60%",
        end: "center top",
        scrub: true
      },
      ease: "power2.out"
    }
  );

    // Efecto: Mostrar el texto de fondo solo en su sección
  gsap.to(".capsule-background-text", {
    scrollTrigger: {
      trigger: ".capsule-transition-section",
      start: "top bottom",     // Comienza cuando empieza a entrar
      end: "bottom top",       // Termina cuando ya no se ve
      scrub: true
    },
    opacity: 0.1,
    ease: "none"
  });
});
