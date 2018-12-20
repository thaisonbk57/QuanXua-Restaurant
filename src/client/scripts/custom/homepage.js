const DOMStrings = {
  header: ".Header",
  indicator: ".Indicator",
  arrowLeft: "#arrow-left",
  arrowRight: "#arrow-right",
  reservationForm: "#ReservationForm",
  reservationBtn: "#reservation-btn",
  serverMsg: "#server-msg"
};

// if true, disable the reservation button
let submitting = false;

// index of the current active photo for Header section
let i = 1;
const header = document.querySelector(DOMStrings.header);
const indicators = Array.from(document.querySelectorAll(DOMStrings.indicator));

$(function() {
  slideShow();
  reservation();
});

function slideShow() {
  $(DOMStrings.arrowLeft).on("click", () => {
    prevSlide();
    changeBackground();
  });

  $(DOMStrings.arrowRight).on("click", () => {
    nextSlide();
    changeBackground();
  });
}
// function changes the background of Header section after a period of time (3s)
function changeBackground() {
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

// function send email for reservation system
// $(selector).post(URL,data,function(data,status,xhr),dataType)

function reservation() {
  $(DOMStrings.reservationForm).on("submit", e => {
    e.preventDefault();

    // disable the reservation button
    $(DOMStrings.reservationBtn)
      .attr("disabled", "true")
      .val("Sending...");

    // get form information
    const [date, time, people, name, phone, note] = [
      $('[name="date"]').val(),
      $('[name="time"]').val(),
      $('[name="people"]').val(),
      $('[name="name"]').val(),
      $('[name="phone"]').val(),
      $('[name="note"]').val()
    ];

    const reservationInfo = {
      date,
      time,
      people,
      name: name.trim(),
      phone: phone.trim(),
      note
    };

    // send post request to server
    $.post(
      "https://quanxua.herokuapp.com/api/reservation",
      reservationInfo,
      (data, status, xhr) => {
        if (status === "success") {
          // clear the form
          $(DOMStrings.reservationForm).trigger("reset");

          // enable the reservation button
          $(DOMStrings.reservationBtn)
            .removeAttr("disabled")
            .val("Reservation");

          // display the message from server inform user that reservation is successful.
          if (data.status === "OK") {
            $(DOMStrings.serverMsg)
              .css("color", "green")
              .text(data.message);
          } else {
            $(DOMStrings.serverMsg)
              .css("color", "red")
              .text(data.message);
          }

          // remove the message after 3s
          window.setTimeout(() => {
            $(DOMStrings.serverMsg).text("");
          }, 3000);
        } else {
          $(DOMStrings.serverMsg)
            .css("color", "red")
            .text("Server ist gerade beschäftig!");
        }
      }
    );
  });
}
