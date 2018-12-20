$(function() {
  $("#arrow-left").on("click", () => {
    prevSlide();
    slideshow();
  });

  $("#arrow-right").on("click", () => {
    nextSlide();
    slideshow();
  });
});

let i = 1;
const header = document.querySelector(".Header");
const indicators = Array.from(document.querySelectorAll(".Indicator"));

// function changes the background of Header section after a period of time (3s)
function slideshow() {
  // change the background
  header.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)) ,url("./assets/images/slider/s${i}.jpeg")`;

  // remove 'active' class from all Indicators
  indicators.forEach(indicator => {
    indicator.classList.remove("active");
  });

  // add class 'activ' to current Indicator
  document.querySelector(`.Indicator-${i}`).classList.add("active");
}

function nextSlide() {
  if (i >= 5) {
    i = 1;
  } else {
    i++;
  }
}

function prevSlide() {
  if (i <= 1) {
    i = 5;
  } else {
    i--;
  }
}
