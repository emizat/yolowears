const header = document.querySelector(".header");

const btnOpen = document.querySelector(".icon-open");

const btnClose = document.querySelector(".icon-close");

btnOpen.addEventListener("click", function () {
  const header = document.querySelector(".header");

  header.classList.add("open");
});

btnClose.addEventListener("click", function () {
  const header = document.querySelector(".header");
  header.classList.remove("open");
});

// *******************************

const year = new Date();
console.log(year);
