import React from "react";
import "./Animation.css";
function Animation() {
  return (
    <div className="card-container">
      <div className="card1">
        <div className="card-inner1">
          <div className="card-front1">
            <img src="/my-card-reactjs/images/taj.jpeg" alt="card" />
          </div>
          <div className="card-back1">
            <h1>
              <u>Taj Mahal</u>
            </h1>
            <p>
              An immense mausoleum of white marble, built in Agra between 1631
              and 1648 by order of the Mughal emperor Shah Jahan in memory of
              his favourite wife, the Taj Mahal is the jewel of Muslim art in
              India and one of the universally admired masterpieces of the
              world's heritage.
            </p>
          </div>
        </div>
      </div>
      <div className="card1">
        <div className="card-inner1">
          <div className="card-front1">
            <img src="/my-card-reactjs/images/dubai.jpeg" alt="card" />
          </div>
          <div className="card-back1">
            <h1>
              <u>Burj Khalifa</u>
            </h1>
            <p>
              The Burj Khalifa is a mixed-use skyscraper located in Dubai,
              U.A.E. It is the world's tallest building, according to all three
              of the main criteria by which such buildings are judged.One of the
              lesser known and more interesting facts about Burj Khalifa is that
              the tip of the sphere of the Burj Khalifa can be seen from up to
              95 kilometers away.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Animation;
