document.addEventListener("DOMContentLoaded", () => {
  const intro = document.getElementById("intro");
  const logo = document.getElementById("introLogo");
  const content = document.getElementById("content");
  const scrollBtn = document.getElementById("scrollBtn");
  const sideMenu = document.getElementById("sideMenu");

  if (logo && intro) {
    logo.addEventListener("click", () => {
      if (logo.classList.contains("move-up")) return;
      logo.classList.add("move-up");
      intro.classList.add("minimized");

      setTimeout(() => {
        content.classList.remove("hidden");
        if (sideMenu) sideMenu.classList.remove("hidden");

        document.querySelectorAll(".fade-in").forEach((el, i) =>
          setTimeout(() => el.classList.add("show"), i * 160)
        );
      }, 900);
    });
  } else {

    document.querySelectorAll(".fade-in").forEach((el, i) =>
      setTimeout(() => el.classList.add("show"), i * 160)
    );
  }

  if (scrollBtn) {
    scrollBtn.addEventListener("click", () => {
      if (scrollBtn.classList.contains("up")) {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        window.scrollBy({ top: window.innerHeight, behavior: "smooth" });
      }
    });

    window.addEventListener("scroll", () => {
      const scrolled = window.scrollY;

      const triggerPoint = document.body.scrollHeight / 2.5;

      if (scrolled > triggerPoint && document.body.scrollHeight > window.innerHeight * 1.5) {
        scrollBtn.textContent = "↑";
        scrollBtn.classList.add("up");
      } else {
        scrollBtn.textContent = "↓";
        scrollBtn.classList.remove("up");
      }
    });
  }
});