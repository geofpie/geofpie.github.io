document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-item");

  function activateCurrentLink() {
    const scrollPosition = window.scrollY + window.innerHeight / 2;

    let found = false;

    sections.forEach((section) => {
      const top = section.offsetTop;
      const bottom = top + section.offsetHeight;
      const sectionId = section.getAttribute("id");

      if (scrollPosition >= top && scrollPosition < bottom) {
        found = true;
        navLinks.forEach((link) => {
          link.classList.remove("active");
          if (link.querySelector("a")?.getAttribute("href") === `#${sectionId}`) {
            link.classList.add("active");
          }
        });
      }
    });

    if (!found) {
      navLinks.forEach((link) => link.classList.remove("active"));
    }
  }

  window.addEventListener("scroll", activateCurrentLink);
  activateCurrentLink(); // Run on load
});