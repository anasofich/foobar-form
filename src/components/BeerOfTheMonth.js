import React from "react";

let beerNumber = "";
let beerName = "";
let beerImg = "";
let background = "";

setNumber();

function setNumber() {
  beerNumber = Math.floor(Math.random() * 6) + 1;
  setBeer();
}

function setBeer() {
  if (beerNumber === 1) {
    beerName = "El Hefe";
    beerImg = "../beer-images/elhefe.png.webp";
    background = "linear-gradient(180deg, #FDEEBB 0%, rgba(255, 255, 255, 1) 100%)";
  } else if (beerNumber === 2) {
    beerName = "Hollaback Lager";
    beerImg = "../beer-images/hollaback.png.webp";
    background = "linear-gradient(180deg, #FEE2CD 0%, rgba(255, 255, 255, 1) 100%)";
  } else if (beerNumber === 3) {
    beerName = "Hoppily Ever After";
    beerImg = "../beer-images/hoppilyeverafter.png.webp";
    background = "linear-gradient(180deg, #DAFCAE 0%, rgba(255, 255, 255, 1) 100%)";
  } else if (beerNumber === 4) {
    beerName = "Ruined Childhood";
    beerImg = "../beer-images/ruinedchildhood.png.webp";
    background = "linear-gradient(180deg, #FBFDB6 0%, rgba(255, 255, 255, 1) 100%)";
  } else if (beerNumber === 5) {
    beerName = "Sleighride";
    beerImg = "../beer-images/sleighride.png.webp";
    background = "linear-gradient(180deg, #E0D0FD 0%, rgba(255, 255, 255, 1) 100%)";
  } else if (beerNumber === 6) {
    beerName = "Steampunk";
    beerImg = "../beer-images/steampunk.png.webp";
    background = "linear-gradient(180deg, #CDDEEB 0%, rgba(255, 255, 255, 1) 100%)";
  }
}

export default function BeerOfTheMonth(props) {
  return (
    <div className="beerSugItem">
      <h2>Beer of the month</h2>
      <div
        className="popularImgWrapper"
        style={{
          background: background,
        }}
      >
        <img className="popularImg" src={beerImg} />
      </div>
      <h1>{beerName}</h1>
    </div>
  );
}
