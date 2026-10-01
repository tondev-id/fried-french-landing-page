const hamburgerMenu = document.getElementById("hamburger-menu");
const navbar = document.querySelector(".header .navbar");
const spanTop = document.querySelector("#hamburger-menu .top");
const spanMiddle = document.querySelector("#hamburger-menu .middle");
const spanBottom = document.querySelector("#hamburger-menu .bottom");

let hamburgerMenuIsOpen = false;

hamburgerMenu.addEventListener("click", () => {
  if (hamburgerMenuIsOpen) {
    navbar.classList.add("active");
    spanTop.classList.add("active");
    spanMiddle.classList.add("active");
    spanBottom.classList.add("active");
    hamburgerMenuIsOpen = false;
  } else {
    navbar.classList.remove("active");
    spanTop.classList.remove("active");
    spanMiddle.classList.remove("active");
    spanBottom.classList.remove("active");
    hamburgerMenuIsOpen = true;
  }
})