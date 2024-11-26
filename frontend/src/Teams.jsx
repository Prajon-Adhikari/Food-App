import worker1 from "./assets/worker1.jpg";
import worker2 from "./assets/worker2.webp";
import worker3 from "./assets/worker3.avif";

export default function Teams() {
  return (
    <div className="teams">
      <div className="app-form-container">
        <div className="team-container">
          <div className="team-msg">
            <p className="team-heading">OUR TEAM</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil,
              doloremque!
            </p>
          </div>
          <div className="team-members">
            <div className="member">
              <img src={worker1} alt="" />
              <div className="about-member">
                <p className="name">RYAN RENOLDS</p>
                <p className="profession">Founder & New Chef</p>
              </div>
            </div>
            <div className="member">
              <img src={worker2} alt="" />
              <div className="about-member">
                <p className="name">CHRIS HEMSWORTH</p>
                <p className="profession">Junior Chef</p>
              </div>
            </div>
            <div className="member">
              <img src={worker3} alt="" />
              <div className="about-member">
                <p className="name">PAUL RUDD</p>
                <p className="profession">Fast Food Chef</p>
              </div>
            </div>
            <div className="member">
              <img src={worker1} alt="" />
              <div className="about-member">
                <p className="name">CHRIS EVANS</p>
                <p className="profession">Senior Chef</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
