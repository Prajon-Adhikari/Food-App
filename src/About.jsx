import foodPlate from "./assets/food-plate.png";

export default function About() {
  return (
    <div className="aboutpage">
      <div className="app-form-container">
        <div className="about-container">
          <div className="about-side">
            <div className="heading-msg">
              <p className="larger-text">ABOUT US</p>
              <p className="smaller-text">
                The only thing we've serious about is food
              </p>
            </div>
            <div className="body-msg">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consequuntur saepe cupiditate ipsa natus inventore, labore
                dignissimos quasi odit sunt dolore similique. Error at magnam
                laboriosam voluptatum ullam aperiam, cum, magni excepturi
                maiores eum porro? Alias, quod. Totam laboriosam itaque eum
                blanditiis, officia ipsa maiores vitae minima fugit rem culpa
                unde quibusdam officiis! Quidem adipisci inventore assumenda
                quia deleniti minus, nihil sunt voluptas quo tempore delectus
                unde cum, ea repellendus similique?
              </p>
            </div>
            <button className="explore-button">Explore Menu</button>
          </div>
          <div className="about-img">
            <img src={foodPlate} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
