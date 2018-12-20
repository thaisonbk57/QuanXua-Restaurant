require("dotenv").config();

const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
const helmet = require("helmet");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static("dist"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(helmet());
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res, next) => {
  res.send({
    name: "test"
  });
});

app.listen(PORT, () => {
  console.log(`listening to ${PORT}...`);
});
