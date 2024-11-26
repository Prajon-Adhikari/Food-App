import foodIcon from "./assets/burger-flat.png";
import egg from "./assets/egg.avif";
import sushi from "./assets/sushi.jpg";
import paella from "./assets/paella.webp";
import pancake from "./assets/pancake.webp";
import pasta from "./assets/pasta.webp";
import burger from "./assets/burger.webp";

export default function Services() {
  return (
    <div className="service">
      <div className="app-form-container">
        <div className="service-container">
          <div className="service-icon-container">
            <div className="quality-food service-item">
              <img src={foodIcon} alt="" />
              <h3>Quality Food</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
                totam saepe eveniet
              </p>
            </div>
            <div className="super-taste service-item">
              <img src={foodIcon} alt="" />
              <h3>Super Taste</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
                totam saepe eveniet
              </p>
            </div>
            <div className="fast delivery service-item">
              <img src={foodIcon} alt="" />
              <h3>Fast Delivery</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
                totam saepe eveniet
              </p>
            </div>
          </div>
          <div className="dishes-container">
            <div className="popular-dishes">
              <h1>POPULAR DISHES</h1>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Dignissimos, sit!
              </p>
            </div>
            <div className="dishes">
              <div className="dish-item">
                <img src={egg} alt="" />
                <h2> Egg</h2>
              </div>
              <div className="dish-item">
                <img src={sushi} alt="" />
                <h2>Sushi</h2>
              </div>
              <div className="dish-item">
                <img src={paella} alt="" />
                <h2>Paella</h2>
              </div>
              <div className="dish-item">
                <img src={pancake} alt="" />
                <h2>Pancake</h2>
              </div>
              <div className="dish-item">
                <img src={burger} alt="" />
                <h2>Burger</h2>
              </div>
              <div className="dish-item">
                <img src={egg} alt="" />
                <h2> Egg</h2>
              </div>
              <div className="dish-item">
                <img src={pasta} alt="" />
                <h2>Pasta</h2>
              </div>
              <div className="dish-item">
                <img src={egg} alt="" />
                <h2> Egg</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
