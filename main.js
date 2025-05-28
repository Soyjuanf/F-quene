document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  const text = document.querySelector(".text-layer");
  const phrase = text.textContent;
  text.setAttribute("data-text", phrase);

  gsap.to(text, {
    scrollTrigger: {
      trigger: ".scroll-fill-section",
      start: "top 80%",
      end: "top 30%",
      scrub: true
    },
    "--reveal-width": "100%",
    onUpdate: function () {
      const progress = this.progress();
      text.style.setProperty("--reveal-width", `${progress * 100}%`);
      text.style.setProperty("--mask-width", `${progress * 100}%`);
      text.style.setProperty("width", "100%");
      text.querySelector("::after")?.style.setProperty("width", `${progress * 100}%`);
    }
  });
});
