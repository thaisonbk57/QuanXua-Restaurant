"use strict";var state={showSideDrawer:!1},screenHeight=window.screen.availHeight,screenWidth=window.screen.availWidth;function toggleNavBar(){document.querySelector("#NavToggle").addEventListener("click",function(e){state.showSideDrawer?document.querySelector("#Nav").style.transform="translateX(-110%)":document.querySelector("#Nav").style.transform="translateX(0)",document.querySelector("#nav-toggle").classList.toggle("active"),state.showSideDrawer=!state.showSideDrawer})}function lazyImage(){Array.prototype.slice.call(document.getElementsByClassName("lazy")).forEach(function(t){if(t.getBoundingClientRect().top<window.innerHeight-100){var e=t.dataset.src;t.setAttribute("src",e),t.classList.add("show")}window.addEventListener("scroll",function(){if(t.getBoundingClientRect().top<window.innerHeight-100){var e=t.dataset.src;t.setAttribute("src",e),t.classList.add("show")}})})}$(function(){screenWidth<=900&&toggleNavBar()}),lazyImage();