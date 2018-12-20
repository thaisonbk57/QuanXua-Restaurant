require("dotenv").config();

const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
const helmet = require("helmet");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;
console.log(process.env.FROM_EMAIL, process.env.PASS);
app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.resolve(__dirname, "../dist")));

const transporter = nodemailer.createTransport({
  service: "gmail",
  secure: true,
  port: 25,
  auth: {
    user: process.env.FROM_EMAIL,
    pass: process.env.PASS
  },
  tls: {
    rejectUnauthorized: false
  }
});

app.route("/").get((req, res) => {
  res.render("index");
});

app.post("/api/reservation", (req, res) => {
  const { name, email, seat, time, date, note, phone } = req.body;
  console.log(req.body);

  const option = {
    from: `RESERVATION ${name} <${email}`,
    to: process.env.TO_EMAIL,
    subject: name,
    html: `
        <p><b>Name: ${name || "unknown"}</b></p>  
        <p><b>Date: ${date || "unknown"}</b></p>
        <p><b>Time: ${time || "unknown"}</b></p>
        <p><b>Seats: ${seat || "unknown"}</b></p>
        <p><b>Phone: ${phone || "unknown"}</b></p>
        <p><b>Email: ${email || "unknown"}</b></p>
        <p><b>Note: ${note || "empty"}</b></p>
        `
  };

  transporter.sendMail(option, (err, info) => {
    if (err) {
      res.send({
        status: "ERROR",
        message: "Something went wrong. Your reservation failed.",
        err
      });
    } else {
      res.send({
        status: "OK",
        message: "Thank you for your reservation!"
      });
    }
  });
});

app.listen(PORT, () => {
  console.log(`listening to ${PORT}...`);
});
