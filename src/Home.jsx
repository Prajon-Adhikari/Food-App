import React from "react";
import HomePage from "./HomePage";
import About from "./About";
import Services from "./Services";
import Teams from "./Teams";
import Reservation from "./Reservation";
import Footer from "./Footer";

function Home() {
  return (
    <div className="main-container">
      <HomePage />
      <About />
      <Services />
      <Teams />
      <Reservation />
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default Home;
