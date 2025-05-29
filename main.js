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
    { opacity: 0, y: 200 }, 
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
    opacity: 2,
    ease: "none"
  });

 // Desvanecer el texto de fondo
  ScrollTrigger.create({
    trigger: ".scroll-gallery-section",
    start: "top 80%",
    end: "top top",
    onEnter: () => {
      gsap.to(".capsule-background-text", {
        opacity: 0,
        duration: 0.3
      });
    },
    onLeaveBack: () => {
      gsap.to(".capsule-background-text", {
        opacity: 1,
        duration: 0.3
      });
    }
  });

  // Hacer que las imágenes suban una sobre otra
  const frames = gsap.utils.toArray(".scroll-gallery-frame");

  frames.forEach((frame, i) => {
    gsap.to(frame, {
      top: "0vh",
      scrollTrigger: {
        trigger: ".scroll-gallery-section",
        start: () => `top+=${i * window.innerHeight} top`,
        end: () => `top+=${(i + 1) * window.innerHeight} top`,
        scrub: true
      }
    });
  });
});
