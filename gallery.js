// **************************************
// **************************************
// GALLERY SCROLL BUTTON
// **************************************

const btnFixed = document.querySelector(".btn__fixed");
console.log(btnFixed);

btnFixed.addEventListener("click", function (e) {
  e.preventDefault();

  const headerLink = document.querySelector(".gallery__header--logo-link");
  const href = headerLink.getAttribute("href");

  if (href == "#") {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
});

// *************************************************
// *************************************************

const imgToObserve = document.querySelector(".card-4");

const observer = new IntersectionObserver(function (entries) {
  const ent = entries[0];

  if (ent.isIntersecting === false) {
    const btnTop = document.querySelector(".btn__fixed");
    btnTop.style.display = "block";
  } else {
    const btnTop = document.querySelector(".btn__fixed");
    btnTop.style.display = "none";
  }
}, {});
observer.observe(imgToObserve);
