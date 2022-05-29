"use strict";

document
  .querySelector(".dark-mode-toggle")
  .addEventListener("click", function () {
    document.body.classList.toggle("dark-theme");
    const btn = document.querySelector(".dark-mode-toggle");
    btn.classList.toggle("fa-inverse");
  });
