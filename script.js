"use strict";

// selecting the buttons from the css or html
const darkMode = document.querySelector(".btn");
const darkModeOn = document.querySelector(".btn-toggle-on");
const darkModeOff = document.querySelector(".btn-toggle-off");

// selecting the containers from the css or html
const headerContainer = document.querySelector("header");
const bodyContainer = document.querySelector("body");
const socialCards = document.querySelectorAll(
  ".social-media-detail, .daily-overview"
);

// selecting the texts from the css or html
const h1Texts = document.querySelector("h1");
const h2Texts = document.querySelector("h2");
const numbers = document.querySelectorAll(".number");

const changeTheme = function () {
  darkModeOn.classList.toggle("hidden");
  darkModeOff.classList.toggle("hidden");
  headerContainer.classList.toggle("dark-header");
  bodyContainer.classList.toggle("dark-body");
  h1Texts.classList.toggle("dark-theme-texts");
  h2Texts.classList.toggle("dark-theme-texts");
  numbers.forEach((el) => el.classList.toggle("dark-theme-texts"));
  socialCards.forEach((el) => {
    el.classList.toggle("dark-card");
  });
};

darkModeOn.addEventListener("click", changeTheme);

darkModeOff.addEventListener("click", changeTheme);
