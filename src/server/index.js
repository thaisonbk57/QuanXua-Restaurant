require("dotenv").config();

const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
const helmet = require("helmet");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;
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
  res.send("test");
});

app.post("/api/reservation", (req, res) => {
  //@TODO: data sent from client need to be validated.
  const { date, time, people, name, phone, note } = req.body;

  const option = {
    from: `RESERVIERUNG QUANXUA <${process.env.FROM_EMAIL}`,
    to: process.env.TO_EMAIL,
    subject: "RESERVIERUNG",
    html: `
        <p style='font-size: 20px'><b>Name:</b> ${name || "unknown"}</p>  
        <p style='font-size: 20px'><b>Datum:</b> ${date || "unknown"}</p>
        <p style='font-size: 20px'><b>Uhrzeit:</b> ${time || "unknown"}</p>
        <p style='font-size: 20px'><b>Personen:</b> ${people || "unknown"}</p>
        <p style='font-size: 20px'><b>Tel:</b> <a href='tel:${phone ||
          "unknown"}'>${phone || "unknown"}</a></p>
        <p style='font-size: 19px'><b style='font-size: 20px'>Besondere Wünsche:</b> ${note ||
          "empty"}</p>
        `
  };

  transporter.sendMail(option, (err, info) => {
    if (err) {
      res.send({
        status: "ERROR",
        message: "Fehlgeschlagen. Versuchen Sie später nochmal!",
        err
      });
    } else {
      res.send({
        status: "OK",
        message: "Ihre Reservierung war erfolreich. Danke schön!"
      });
    }
  });
});

app.listen(PORT, () => {
  console.log(`listening to ${PORT}...`);
});
