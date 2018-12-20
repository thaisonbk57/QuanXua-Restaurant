const DOMStrings = {
  contactForm: "#contact-form",
  sendMsgBtn: "#send-btn",
  serverMsg: "#server-msg"
};

$(function() {
  contact();
});

// function send email for contact system
function contact() {
  $(DOMStrings.contactForm).on("submit", e => {
    e.preventDefault();

    // disable the reservation button
    $(DOMStrings.sendMsgBtn)
      .attr("disabled", "true")
      .val("Sending...");

    // get form information
    const [name, email, subject, message, phone] = [
      $('[name="name"]').val(),
      $('[name="email"]').val(),
      $('[name="subject"]').val(),
      $('[name="message"]').val(),
      $('[name="phone"]').val()
    ];

    const contactInfo = {
      email: email.trim(),
      subject: subject.trim(),
      message: message.trim(),
      name: name.trim(),
      phone
    };

    // send post request to server
    $.post(
      "http://localhost:3000/api/contact",
      contactInfo,
      (data, status, xhr) => {
        if (status === "success") {
          // clear the form
          $(DOMStrings.contactForm).trigger("reset");

          // enable the reservation button
          $(DOMStrings.sendMsgBtn)
            .removeAttr("disabled")
            .val("Abschicken");

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
