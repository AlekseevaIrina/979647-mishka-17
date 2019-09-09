var navMain = document.querySelector(".navigation");
var navToggle = document.querySelector(".navigation__toggle");

var modalOpen = document.querySelectorAll(".modal-open");
var modal = document.querySelector(".modal");
var modalWrapper = document.querySelector(".modal__wrapper");

navMain.classList.remove("navigation--nojs");

navToggle.addEventListener("click", function () {
  if (navMain.classList.contains("navigation--closed")) {
    navMain.classList.remove("navigation--closed");
    navMain.classList.add("navigation--opened");
  } else {
    navMain.classList.add("navigation--closed");
    navMain.classList.remove("navigation--opened");
  }
});

modalOpen.forEach(function (node) {
  node.addEventListener("click", function () {
    if (modal.classList.contains("modal--closed")) {
      modal.classList.remove("modal--closed");
    }
  });
});

modalWrapper.addEventListener("click", function () {
  modal.classList.add("modal--closed");
});
