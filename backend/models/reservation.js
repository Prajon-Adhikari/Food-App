const mongoose = require("mongoose");
const validator = require("validator");

const reservationSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      minLength: [3, "First Name must have at least 3 character"],
      maxLength: [30, " First name cannnot have more than 30 character"],
    },
    lastName: {
      type: String,
      required: true,
      minLength: [3, "Last Name must have at least 3 character"],
      maxLength: [30, "Last name cannnot have more than 30 character"],
    },
    email: {
      type: String,
      Validite: [validator.isEmail, "Provide valid email"],
    },

    phone: {
      type: String,
      required: true,
      minLength: [10, "Phone Number must contain 10 digits"],
      maxLength: [10, "Phone Number must contain 10 digits"],
    },
    time: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Reservation = mongoose.model("reservation", reservationSchema);

module.exports = Reservation;
