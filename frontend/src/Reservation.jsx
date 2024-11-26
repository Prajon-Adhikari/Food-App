import bowlFood from "./assets/bowl-food.png";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

export default function Reservation() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");
  const [phone, setPhone] = useState("");

  const navigate = useNavigate();

  const handleReservation = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:4000/reservation/",
        { firstName, lastName, email, phone, time, date },
        {
          headers: {
            "Content-type": "application/json",
          },
          withCredentials: true,
        }
      );
      toast.success(data.message);
      setFirstName("");
      setLastName("");
      setPhone("");
      setEmail("");
      setTime("");
      setDate("");
      navigate("/success");
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <>
      <div className="reservation">
        <div className="app-form-container">
          <div className="reservation-container">
            <div className="img-container">
              <img src={bowlFood} alt="" />
            </div>
            <form className="form" onSubmit={handleReservation}>
              <div className="form-msg">
                <h2>MAKE AN RESERVATION</h2>
                <p>For Further Questions, Please Call</p>
              </div>
              <div className="input-name">
                <input
                  type="text"
                  placeholder="First Name"
                  className="first-name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="last-name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  required
                />
              </div>
              <div className="input-date">
                <input
                  type="date"
                  className="date-input-bar"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  required
                />
              </div>
              <input
                type="email"
                className="email-input-bar"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <input
                type="number"
                className="email-input-bar"
                placeholder="Phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
              <input
                type="text"
                className="remark-input-bar"
                placeholder="Remarks"
              />
              <input
                type="time"
                className="email-input-bar"
                placeholder="Time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                required
              />
              <input
                type="submit"
                className="reserve-now"
                value={"Reserve Now"}
              />
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
