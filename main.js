document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  gsap.utils.toArray(".section").forEach(section => {
    gsap.from(section, {
      opacity: 0,
      y: 50,
      duration: 1,
      scrollTrigger: {
        trigger: section,
        start: "top 80%",
        toggleActions: "play none none reverse",
      }
    });
  });

  const music = document.getElementById("bg-music");
  const control = document.getElementById("music-control");
  let playing = false;

  control.addEventListener("click", () => {
    if (!playing) {
      music.play();
      control.textContent = "🔊";
    } else {
      music.pause();
      control.textContent = "🎵";
    }
    playing = !playing;
  });
});
