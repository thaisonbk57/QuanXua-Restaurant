"use strict";$(function(){$("#arrow-left").on("click",function(){prevSlide(),slideshow()}),$("#arrow-right").on("click",function(){nextSlide(),slideshow()})});var i=1,header=document.querySelector(".Header"),indicators=Array.from(document.querySelectorAll(".Indicator"));function slideshow(){header.style.backgroundImage='linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)) ,url("./assets/images/slider/s'.concat(i,'.jpeg")'),indicators.forEach(function(e){e.classList.remove("active")}),document.querySelector(".Indicator-".concat(i)).classList.add("active")}function nextSlide(){5<=i?i=1:i++}function prevSlide(){i<=1?i=5:i--}