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

 // Texto infinito visible en esta sección
  gsap.fromTo(".capsule-background-text",
    { opacity: 0 },
    {
      opacity: 1,
      scrollTrigger: {
        trigger: ".capsule-transition-section",
        start: "top bottom",
        end: "bottom top",
        scrub: true
      }
    }
  );

  // Zoom de imagen sin moverse del centro
  gsap.to(".capsule-image", {
    scale: 1,
    borderRadius: "0px",
    scrollTrigger: {
      trigger: ".capsule-transition-section",
      start: "top top",
      end: "bottom top",
      scrub: true
    }
  });

  // Aparece el texto al final del zoom
  gsap.fromTo(".capsule-overlay",
    { opacity: 0, y: 40 },
    {
      opacity: 1,
      y: 0,
      scrollTrigger: {
        trigger: ".capsule-transition-section",
        start: "70% center",
        end: "bottom top",
        scrub: true
      },
      ease: "power2.out"
    }
  );
});
