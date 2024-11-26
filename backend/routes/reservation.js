const express = require("express");
const Reservation = require("../models/reservation");

const router = express.Router();

router.post("/", async (req, res) => {
  const { firstName, lastName, email, phone, time, date } = req.body;
  await Reservation.create({
    firstName,
    lastName,
    email,
    phone,
    time,
    date,
  });
  return res.status(200).json({ message: "Reservation created successfully" });
});

module.exports = router;
