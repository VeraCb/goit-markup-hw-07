//mobile menu

const hamburger = document.querySelector(".hamburger");
const list = document.querySelector(".list");
const addressMenu = document.querySelector(".address-menu");
const socialMedia = document.querySelector(".social-media");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  list.classList.toggle("active");
  addressMenu.classList.toggle("active");
  socialMedia.classList.toggle("active");
});

document.querySelectorAll("list-link").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    list.classList.remove("active");
  })
);

document.querySelectorAll("address-link").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    addressMenu.classList.remove("active");
    socialMedia.classList.toggle("active");
  })
);
