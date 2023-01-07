"use strict";

document.querySelector(".header__burger").addEventListener("click", () => {
  document.querySelector(".header__burger").classList.toggle("header__burger_active");
  document.querySelector(".nav").classList.toggle("nav_active");
  document.querySelector("body").classList.toggle("scroll-lock");
});
