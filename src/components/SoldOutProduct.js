import { useState } from "react";
import SoldOutProductView from "./SoldOutProductView";

export default function SoldOutProduct(props) {
  //for bg color
  let gradientColor = "";
  setColors();

  function setColors() {
    //setting background colors
    if (props.name === "El Hefe") {
      gradientColor = "linear-gradient(180deg, #FDEEBB 0%, rgba(255, 255, 255, 1) 100%)";
    } else if (props.name === "Fairy Tale Ale") {
      gradientColor = "linear-gradient(180deg, #F9E1FF 0%, rgba(255, 255, 255, 1) 100%)";
    } else if (props.name === "Row 26") {
      gradientColor = "linear-gradient(180deg, #C7D3FA 0%, rgba(255, 255, 255, 1) 100%)";
    } else if (props.name === "GitHop") {
      gradientColor = "linear-gradient(180deg, #FDD1D0 0%, rgba(255, 255, 255, 1) 100%)";
    } else if (props.name === "Hollaback Lager") {
      gradientColor = "linear-gradient(180deg, #FEE2CD 0%, rgba(255, 255, 255, 1) 100%)";
    } else if (props.name === "Mowintime") {
      gradientColor = "linear-gradient(180deg, #B8FCE1 0%, rgba(255, 255, 255, 1) 100%)";
    } else if (props.name === "Hoppily Ever After") {
      gradientColor = "linear-gradient(180deg, #DAFCAE 0%, rgba(255, 255, 255, 1) 100%)";
    } else if (props.name === "Steampunk") {
      gradientColor = "linear-gradient(180deg, #CDDEEB 0%, rgba(255, 255, 255, 1) 100%)";
    } else if (props.name === "Ruined Childhood") {
      gradientColor = "linear-gradient(180deg, #FBFDB6 0%, rgba(255, 255, 255, 1) 100%)";
    } else if (props.name === "Sleighride") {
      gradientColor = "linear-gradient(180deg, #E0D0FD 0%, rgba(255, 255, 255, 1) 100%)";
    }
  }

  /* for showing the selected product */

  const [shown, showProduct] = useState(false);
  const toggleProduct = () => {
    showProduct(!shown);
  };
  return (
    <div>
      <article>
        <a className="beerView" onClick={toggleProduct}>
          <div className="soldOut">
            <p>Sold out</p>
          </div>
          <div
            style={{
              background: gradientColor,
            }}
            className="beerImgBg"
          ></div>
          <img src={`../beer-images/${props.label}.webp`} alt={props.label} className="beerImage" />
          <h2>{props.name}</h2>
          <div className="beer-price">
            <h3>{props.category}</h3>
            <div className="line"></div>
            <p>40 dkk</p>
          </div>
        </a>
        <div className="addBasket">
          <button className="addToBasketSoldOut">ADD TO BASKET</button>
        </div>
      </article>
      {shown && <SoldOutProductView handleClose={toggleProduct} {...props} />}
    </div>
  );
}
