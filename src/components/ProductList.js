import Product from "./Product";
import Nav from "./Nav";
import React, { useState } from "react";

export default function ProductList(props) {
  const mapped = props.products.map((product) => <Product {...product} key={product.name} addToBasket={props.addToBasket} />);
  const [modal, showModal] = useState(true);
  const toggleProduct = () => {
    showModal(!modal);
  };

  return (
    <section className="productListHead">
      <Nav />
      <h1>Order your favourite beer</h1>
      <h2>Beer is served from the tap in a glass</h2>
      {/* <div className="introBeer">
        <div className="beerGlass">
          <img src="../images/glass.svg" alt="beer glass" />
        </div>
        <div className="beerLiquid">
          <img className="serving" src="../images/beer.svg" alt="beer" />
        </div>
        <div className="beerGlass">
          <img src="../images/shadows.svg" alt="beer glass" />
        </div>
      </div> */}
      <section className="ProductList">{mapped}</section>
      {modal && (
        <section className="beer">
          <div className="beer_wrapper">
            <h2 className="close" onClick={toggleProduct}>
              TAP TO ORDER{" "}
            </h2>
            <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 194.77 303.27">
              <defs></defs>

              <path
                id="foam"
                className="cls-1"
                d="M202.47,119.91c-1.93,0-3.82.1-5.67.27-4.53-2.32-11.52-2-17.57-2.71-5.13-8.25-16.86-16.14-32.38-16.14-12,0-22.64,3.52-29.22,8.93a24.86,24.86,0,0,0-10.77-2.44c-9.36,0-17.27,4.68-19.85,14.62-1.76-.22-3.34-1.35-6.75-2.53-15.88-5.49-30.42,9.74-30.42,21.74s13.62,21.74,30.42,21.74c11.95,0,22.29-4.93,27.26-12.1a23.84,23.84,0,0,0,19.18-10.17,50.77,50.77,0,0,0,12.79,3.23c5.13,8.25,18.37,14.13,33.89,14.13q2.9,0,5.67-.27a52.05,52.05,0,0,0,23.42,5.18c20,0,36.17-9.73,36.17-21.74S222.45,119.91,202.47,119.91Z"
                transform="translate(-46.65 -100.83)"
              />
              <path id="body" className="cls-2" d="M204.09,403.6H88.15A4.23,4.23,0,0,1,84,400L47.2,145.5a4.23,4.23,0,0,1,4.19-4.83h185.3a4.24,4.24,0,0,1,4.2,4.77L208.29,399.9A4.23,4.23,0,0,1,204.09,403.6Z" transform="translate(-46.65 -100.83)" />
              <line id="line-horizontal" className="cls-3" x1="3.19" y1="62.56" x2="191.99" y2="62.56" />
              <line id="line-vertical" className="cls-3" x1="17.03" y1="95.34" x2="41.68" y2="267.11" />
            </svg>
          </div>
        </section>
      )}
    </section>
  );
}
