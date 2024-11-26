const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const reservationRouter = require("./routes/reservation.js");

const app = express();

mongoose
  .connect("mongodb://localhost:27017/blogify")
  .then((e) => console.log("MongoDB connnected"));

app.use(
  cors({
    origin: ["http://localhost:5173"],
    methods: ["POST"],
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/reservation", reservationRouter);

module.exports = app;
