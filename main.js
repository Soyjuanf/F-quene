document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  // Texto que se rellena (otra sección)
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

  // SECCIÓN CAPSULE - usar timeline para más control
  const capsuleTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: ".capsule-transition-section",
      start: "top top",
      end: "bottom top",
      scrub: true,
      pin: ".capsule-zoom-container",
      anticipatePin: 1
    }
  });

  // 1. Texto de fondo: opacidad 1 siempre
  capsuleTimeline.to(".capsule-background-text", {
    opacity: 1,
    duration: 1,
    ease: "none"
  });

  // 2. Zoom de imagen progresivo
  capsuleTimeline.to(".capsule-image", {
    scale: 1.5,
    duration: 1,
    ease: "none"
  }, 0); // sincronizado con texto de fondo

  // 3. Mostrar el texto principal
  capsuleTimeline.fromTo(".capsule-overlay",
    { opacity: 0, y: 40 },
    { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" },
    ">-0.3"
  );
});
