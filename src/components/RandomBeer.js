import React, { useState } from "react";

export default function RandomBeer() {
  //for updating the random beer when clicking on button
  const [beerNumber, setNumber] = useState(Math.floor(Math.random() * 10) + 1);
  const [beerName, setBeerName] = useState("?");
  const [beerImg, setImg] = useState("../beer-images/random-can.webp");
  const [background, setBackground] = useState("linear-gradient(180deg, #E7E7E7 0%, rgba(255, 255, 255, 1) 100%)");

  function setNewNumber() {
    const newNumber = Math.floor(Math.random() * 10) + 1;
    setNumber(newNumber);
    setNewBeer();
  }

  function setNewBeer() {
    if (beerNumber === 1) {
      const newName = "El Hefe";
      const newImg = "../beer-images/elhefe.png.webp";
      const newBackground = "linear-gradient(180deg, #FDEEBB 0%, rgba(255, 255, 255, 1) 100%)";

      setBeerName(newName);
      setImg(newImg);
      setBackground(newBackground);
    } else if (beerNumber === 2) {
      const newName = "Hollaback Lager";
      const newImg = "../beer-images/hollaback.png.webp";
      const newBackground = "linear-gradient(180deg, #FEE2CD 0%, rgba(255, 255, 255, 1) 100%)";

      setBeerName(newName);
      setImg(newImg);
      setBackground(newBackground);
    } else if (beerNumber === 3) {
      const newName = "Hoppily Ever After";
      const newImg = "../beer-images/hoppilyeverafter.png.webp";
      const newBackground = "linear-gradient(180deg, #DAFCAE 0%, rgba(255, 255, 255, 1) 100%)";

      setBeerName(newName);
      setImg(newImg);
      setBackground(newBackground);
    } else if (beerNumber === 4) {
      const newName = "Ruined Childhood";
      const newImg = "../beer-images/ruinedchildhood.png.webp";
      const newBackground = "linear-gradient(180deg, #FBFDB6 0%, rgba(255, 255, 255, 1) 100%)";

      setBeerName(newName);
      setImg(newImg);
      setBackground(newBackground);
    } else if (beerNumber === 5) {
      const newName = "Sleighride";
      const newImg = "../beer-images/sleighride.png.webp";
      const newBackground = "linear-gradient(180deg, #E0D0FD 0%, rgba(255, 255, 255, 1) 100%)";

      setBeerName(newName);
      setImg(newImg);
      setBackground(newBackground);
    } else if (beerNumber === 6) {
      const newName = "Steampunk";
      const newImg = "../beer-images/steampunk.png.webp";
      const newBackground = "linear-gradient(180deg, #CDDEEB 0%, rgba(255, 255, 255, 1) 100%)";

      setBeerName(newName);
      setImg(newImg);
      setBackground(newBackground);
    } else if (beerNumber === 7) {
      const newName = "Fairy Tale Ale";
      const newImg = "../beer-images/fairytaleale.png.webp";
      const newBackground = "linear-gradient(180deg, #F9E1FF 0%, rgba(255, 255, 255, 1) 100%)";

      setBeerName(newName);
      setImg(newImg);
      setBackground(newBackground);
    } else if (beerNumber === 8) {
      const newName = "Row 26";
      const newImg = "../beer-images/row26.png.webp";
      const newBackground = "linear-gradient(180deg, #C7D3FA 0%, rgba(255, 255, 255, 1) 100%)";

      setBeerName(newName);
      setImg(newImg);
      setBackground(newBackground);
    } else if (beerNumber === 9) {
      const newName = "GitHop";
      const newImg = "../beer-images/githop.png.webp";
      const newBackground = "linear-gradient(180deg, #FDD1D0 0%, rgba(255, 255, 255, 1) 100%)";

      setBeerName(newName);
      setImg(newImg);
      setBackground(newBackground);
    } else if (beerNumber === 10) {
      const newName = "Mowintime";
      const newImg = "../beer-images/mowintime.png.webp";
      const newBackground = "linear-gradient(180deg, #B8FCE1 0%, rgba(255, 255, 255, 1) 100%)";

      setBeerName(newName);
      setImg(newImg);
      setBackground(newBackground);
    }
  }

  return (
    <div className="beerSugItem">
      <h2>Get a random beer!</h2>
      <div
        className="popularImgWrapper"
        style={{
          background: background,
        }}
      >
        <img className="popularImg" src={beerImg} />
      </div>
      <h1>{beerName}</h1>
      <button onClick={setNewNumber}>Get beer</button>
    </div>
  );
}
