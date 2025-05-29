document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  const images = [".image-1", ".image-2", ".image-3"];
  const texts = [".text-1", ".text-2", ".text-3"];
  const durations = [800, 800, 550]; // Duración por sección (en vh)

  images.forEach((img, i) => {
    const start = durations.slice(0, i).reduce((a, b) => a + b, 0);
    const end = start + durations[i];

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".pin-section",
        start: `${start}vh top`,
        end: `${end}vh top`,
        scrub: true,
      }
    });

    // Ajustes específicos para la primera imagen
    if (i === 0) {
      gsap.set(img, { scale: 0.6, opacity: 0 });
      tl.to(img, {
        opacity: 1,
        scale: 1.3,
        duration: 3,
        ease: "power2.out"
      });
    } else {
      gsap.set(img, { scale: 1, opacity: 0 });
      tl.to(img, {
        opacity: 1,
        scale: 1.1,
        duration: 3,
        ease: "power2.out"
      });
    }

    // Aparece texto
    gsap.set(texts[i], { opacity: 0 });
    tl.to(texts[i], {
      opacity: 1,
      duration: 3,
      ease: "power2.out"
    }, "<+0.2");

    // Desaparece texto
    tl.to(texts[i], {
      opacity: 0,
      duration: 3,
      ease: "power2.inOut"
    }, ">-0.5");
  });

  // Z-index para que las imágenes se superpongan correctamente
  gsap.set(images, {
    zIndex: (i) => i + 1,
    position: "absolute"
  });

  // Marquesina scroll-fill
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

  // Marquesina scroll-fill
  gsap.to(".scroll-fill-text-final", {
    scrollTrigger: {
      trigger: ".scroll-fill-section-final",
      start: "top 80%",
      end: "top 30%",
      scrub: true
    },
    clipPath: "inset(0 0% 0 0)",
    ease: "none"
  });

  // Animación título principal
  gsap.fromTo(".main-title",
    { opacity: 0, y: 50 },
    {
      opacity: 1,
      y: 0,
      duration: 1.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".main-title",
        start: "top 80%",
        toggleActions: "play none none none"
      }
    }
  );

  // Animación columna izquierda
  gsap.fromTo(".left-info",
    { opacity: 0, x: -60 },
    {
      opacity: 1,
      x: 0,
      duration: 1.2,
      delay: 0.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".left-info",
        start: "top 85%",
        toggleActions: "play none none none"
      }
    }
  );

  // Animación columna derecha
  gsap.fromTo(".right-info",
    { opacity: 0, x: 60 },
    {
      opacity: 1,
      x: 0,
      duration: 1.2,
      delay: 0.4,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".right-info",
        start: "top 85%",
        toggleActions: "play none none none"
      }
    }
  );

  // Animación de entrada de los ítems de la galería
  gsap.utils.toArray(".gallery-item").forEach((item) => {
    gsap.from(item, {
      opacity: 0,
      y: 60,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: item,
        start: "top 85%",
        toggleActions: "play none none none"
      }
    });
  });
});
