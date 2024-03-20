/*===== MENU SHOW Y HIDDEN =====*/
const navMenu = document.getElementById("nav-menu"),
  toggleMenu = document.getElementById("nav-toggle"),
  closeMenu = document.getElementById("nav-close");

// SHOW
toggleMenu.addEventListener("click", () => {
  navMenu.classList.toggle("show");
});

// HIDDEN
closeMenu.addEventListener("click", () => {
  navMenu.classList.remove("show");
});
/*===== MOUSEMOVE HOME IMG =====*/
// animation mouse move
// document.addEventListener("mousemove", move);
// function move(e) {
//   this.querySelectorAll(".move").forEach((layer) => {
//     const speed = layer.getAttribute("data-speed");

//     const x = (window.innerWidth - e.pageX * speed) / 120;
//     const y = (window.innerHeight - e.pageY * speed) / 120;

//     layer.style.transform = `translateX(${x}px) translateY(${y}px)`;
//   });
// }
// animation repeat
function moveImages() {
  const images = document.querySelectorAll(".home__img img.move");

  images.forEach((image) => {
    const speed = parseFloat(image.getAttribute("data-speed"));
    const currentTime = performance.now();
    const offsetX = Math.sin(currentTime * 0.001 * speed) * 10;
    const offsetY = Math.cos(currentTime * 0.001 * speed) * 10;

    image.style.transform = `translateX(${offsetX}px) translateY(${offsetY}px)`;
  });

  requestAnimationFrame(moveImages);
}

// Bắt đầu vòng lặp
moveImages();

/*===== GSAP ANIMATION =====*/
// NAV
gsap.from(".nav__logo, .nav__toggle", {
  opacity: 0,
  duration: 1,
  delay: 2,
  y: 10,
});
gsap.from(".nav__item", {
  opacity: 0,
  duration: 1,
  delay: 2.1,
  y: 30,
  stagger: 0.2,
});

// HOME
gsap.from(".home__title", { opacity: 0, duration: 1, delay: 1.6, y: 30 });
gsap.from(".home__description", { opacity: 0, duration: 1, delay: 1.8, y: 30 });
gsap.from(".home__button", { opacity: 0, duration: 1, delay: 2.1, y: 30 });
gsap.from(".home__img", { opacity: 0, duration: 1, delay: 1.3, y: 30 });
