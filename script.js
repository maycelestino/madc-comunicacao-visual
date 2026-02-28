const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");
const navLinks = document.querySelectorAll(".nav a");
const sections = document.querySelectorAll("main section[id]");

if (menuToggle && nav) {
  menuToggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });
}

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

// Atualiza o link ativo no menu com base na secao visivel.
const setActiveLink = () => {
  const offset = window.scrollY + 120;
  let currentId = "";

  sections.forEach((section) => {
    if (offset >= section.offsetTop && offset < section.offsetTop + section.offsetHeight) {
      currentId = section.id;
    }
  });

  navLinks.forEach((link) => {
    const match = link.getAttribute("href") === `#${currentId}`;
    link.classList.toggle("active", match);
  });
};

window.addEventListener("scroll", setActiveLink);
window.addEventListener("load", setActiveLink);
