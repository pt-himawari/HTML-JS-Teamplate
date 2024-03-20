/*=============== SCROLLREVEAL animation  =============== */
const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2500,
  delay: 400,
  reset: true, // animation repeat
});
sr.reveal(`.home__data, .list__container, .join__content,.footer__container`);
sr.reveal(`.home__img`, { origin: "bottom" });

sr.reveal(`.health__image, .routine__images, .follow__img-3`, {
  origin: "left",
});
sr.reveal(`.health__data, .routine__data,.follow__img-4`, { origin: "right" });
sr.reveal(`.follow__data, .follow__content-1 img`, { interval: 100 });

/*=============== navbar  =============== */

const navMenu = document.getElementById("nav-menu"),
  navClose = document.getElementById("nav-close"),
  navToggle = document.getElementById("nav-toggle");

// navToggle = document.getElementById("nav-toggle");
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}
//
/*=============== remove menu mobile =============== */

const navLink = document.querySelectorAll(".nav__link");
const linkAction = () => {
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.remove("show-menu");
};
navLink.forEach((n) => n.addEventListener("click", linkAction));
/*=============== change background header =============== */

//
const blurHeader = () => {
  const header = document.getElementById("header");
  // when the scroll is greater than 50 viewport height , add the blur class to the header tag
  this.scrollY >= 50
    ? header.classList.add("blur-header")
    : header.classList.remove("blur-header");
};
window.addEventListener("scroll", blurHeader);
/*=============== Scroll upr =============== */
// const scrollUpb = document.getElementById("scroll-up");

const scrollUp = () => {
  const scrollUp = document.getElementById("scroll-up");
  this.scrollY >= 350
    ? scrollUp.classList.add("show-scroll")
    : scrollUp.classList.remove("show-scroll");
};
window.addEventListener("scroll", scrollUp);
/*=============== Scroll section active link =============== */

// Attach scroll event listener to window
window.addEventListener("scroll", () => {
  const halfWindowHeight = window.innerHeight / 2;

  document.querySelectorAll("section").forEach((section) => {
    if (
      section.getBoundingClientRect().top <= halfWindowHeight &&
      section.getBoundingClientRect().bottom >= halfWindowHeight
    ) {
      document.querySelectorAll(".nav__link").forEach((link) => {
        link.classList.toggle(
          "active-link",
          link.getAttribute("href") === `#${section.id}`
        );
      });
    }
  });
});
/*=============== Dark light theme =============== */
// const themeButton = document.getElementById("theme-button");
// const darkTheme = "dark-theme";
// const iconTheme = "ri-sun-line";
// const selectedTheme = localStorage.getItem("selected-theme");
// const selectedIcon = localStorage.getItem("selected-icon");
// const getCurrentTheme = () =>
//   document.body.classList.contains(darkTheme) ? "dark" : "light";
// const getCurrentIcon = () =>
//   document.body.classList.contains(iconTheme) ? "ri-moon-line" : "ri-sun-line";
// if (selectedTheme) {
//   document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
//     darkTheme
//   );
//   themeButton.classList[selectedIcon === "ri-moon-line" ? "add" : "remove"](
//     iconTheme
//   );
// }
// themeButton.addEventListener("click", () => {
//   document.body.classList.toggle(darkTheme);
//   themeButton.classList.toggle(iconTheme);
//   localStorage.setItem("selected-theme", getCurrentTheme());
//   localStorage.setItem("selected-icon", getCurrentTheme());
// });
// ==========> chatgpt
const themeButton = document.getElementById("theme-button");
const darkTheme = "dark-theme";
const iconTheme = "ri-sun-line";

// Cập nhật giao diện dựa trên lựa chọn lưu trữ
document.body.classList.toggle(
  darkTheme,
  localStorage.getItem("selected-theme") === "dark"
);
themeButton.classList.toggle(
  iconTheme,
  localStorage.getItem("selected-icon") === "ri-moon-line"
);

themeButton.addEventListener("click", () => {
  // Toggle theme
  const isDark = document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme, isDark);

  // Lưu trữ lựa chọn
  localStorage.setItem("selected-theme", isDark ? "dark" : "light");
  localStorage.setItem(
    "selected-icon",
    isDark ? "ri-moon-line" : "ri-sun-line"
  );
});
