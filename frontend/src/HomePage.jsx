import burgerimg from "./assets/burger.webp";
import pancakeimg from "./assets/pancake.webp";
import Navbar from "./Navbar";

export default function HomePage() {
  return (
    <div className="homepage">
      <div className="app-form-container">
        <div className="home-page-container">
          <Navbar />
          <div className="welcome-page">
            <img src={burgerimg} alt="" className="burger-img homepage-img" />
            <h1>WELCOME TO FOODAPP</h1>
            <img src={pancakeimg} alt="" className="pancake-img homepage-img" />
          </div>
        </div>
      </div>
    </div>
  );
}
