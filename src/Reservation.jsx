import bowlFood from "./assets/bowl-food.png";
import React, { useState } from "react";

export default function Reservation() {
  useState;

  return (
    <>
      <div className="reservation">
        <div className="app-form-container">
          <div className="reservation-container">
            <div className="img-container">
              <img src={bowlFood} alt="" />
            </div>
            <form className="form">
              <div className="form-msg">
                <h2>MAKE AN RESERVATION</h2>
                <p>For Further Questions, Please Call</p>
              </div>
              <div className="input-name">
                <input
                  type="text"
                  placeholder="First Name"
                  className="first-name"
                  required
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="last-name"
                  required
                />
              </div>
              <div className="input-date">
                <input type="date" className="date-input-bar" required />
              </div>
              <input
                type="email"
                className="email-input-bar"
                placeholder="Email"
                required
              />
              <input
                type="text"
                className="remark-input-bar"
                placeholder="Remarks"
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
