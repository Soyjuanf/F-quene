document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  // Efecto: Texto que se rellena horizontalmente
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

  // Scroll-fill (si lo tienes de antes)
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

  // Zoom de imagen
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

  // Fade in del texto encima de la imagen
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

  // Mostrar texto de fondo solo en esta sección
  gsap.to(".capsule-background-text", {
    scrollTrigger: {
      trigger: ".capsule-transition-section",
      start: "top bottom",
      end: "bottom top",
      scrub: true
    },
    opacity: 0.1,
    ease: "none"
  });

  // 1. Zoom a la imagen mientras haces scroll
  gsap.to(".capsule-image", {
    scrollTrigger: {
      trigger: ".capsule-transition-section",
      start: "top top",
      end: "center top", // termina antes de que aparezca el texto
      scrub: true
    },
    scale: 1.2,
    ease: "none"
  });

  // 2. Fade-in del texto, comienza después del zoom
  gsap.fromTo(".capsule-overlay",
    { opacity: 0, y: 40 },
    {
      opacity: 1,
      y: 0,
      scrollTrigger: {
        trigger: ".capsule-transition-section",
        start: "center top",   // comienza justo donde termina el zoom
        end: "bottom top",
        scrub: true
      },
      ease: "power2.out"
    }
  );
});


});
