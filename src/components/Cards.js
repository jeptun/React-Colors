import React from "react";
import CardItem from "./CardItem.js";
import "./Cards.css";
import ImagesValh from "../../src/images/Valh.jpg";
import ImagesIndustrial from "../../src/images/industrial.jpg";
import ImagesBaro from "../../src/images/sub1.jpg";


function Cards() {
  return (
    <div className="cards">
      <h1>Prohlédni si barvy!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src={ImagesValh}
              text=" Text info"
              label="B-ball"
              path="/services"
            />
          </ul>
          <ul className="cards__items">
         
            <CardItem
              src={ImagesBaro}
              text="Text Info"
              label="RGB? No"
              path="/services"
            />
            <CardItem
              src={ImagesIndustrial}
              text="Text Info"
              label="Lines"
              path="/services"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
