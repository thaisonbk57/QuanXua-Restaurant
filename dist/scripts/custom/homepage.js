"use strict";var DOMStrings={header:".Header",indicator:".Indicator",arrowLeft:"#arrow-left",arrowRight:"#arrow-right",reservationForm:"#ReservationForm",reservationBtn:"#reservation-btn",serverMsg:"#server-msg"},submitting=!1,i=1,header=document.querySelector(DOMStrings.header),indicators=Array.from(document.querySelectorAll(DOMStrings.indicator));function slideShow(){$(DOMStrings.arrowLeft).on("click",function(){prevSlide(),changeBackground()}),$(DOMStrings.arrowRight).on("click",function(){nextSlide(),changeBackground()})}function changeBackground(){header.style.backgroundImage='linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)) ,url("./assets/images/slider/s'.concat(i,'.jpeg")'),indicators.forEach(function(e){e.classList.remove("active")}),document.querySelector(".Indicator-".concat(i)).classList.add("active")}function nextSlide(){5<=i?i=1:i++}function prevSlide(){i<=1?i=5:i--}function reservation(){$(DOMStrings.reservationForm).on("submit",function(e){e.preventDefault(),$(DOMStrings.reservationBtn).attr("disabled","true").val("Sending...");var r=[$('[name="date"]').val(),$('[name="time"]').val(),$('[name="people"]').val(),$('[name="name"]').val(),$('[name="phone"]').val(),$('[name="note"]').val()],t=r[4],n=r[5],i={date:r[0],time:r[1],people:r[2],name:r[3].trim(),phone:t.trim(),note:n};$.post("https://quanxua.herokuapp.com/api/reservation",i,function(e,r,t){"success"===r?($(DOMStrings.reservationForm).trigger("reset"),$(DOMStrings.reservationBtn).removeAttr("disabled").val("Reservation"),"OK"===e.status?(console.log(e.message),$(DOMStrings.serverMsg).css("color","green").text(e.message)):$(DOMStrings.serverMsg).css("color","red").text(e.message),window.setTimeout(function(){$(DOMStrings.serverMsg).text("")},3e3)):$(DOMStrings.serverMsg).css("color","red").text("Server ist gerade beschäftig!")})})}$(function(){slideShow(),reservation()});