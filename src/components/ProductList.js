import Product from "./Product";
import SoldOutProduct from "./SoldOutProduct";
import Nav from "./Nav";
import BeerSug from "./BeerSug";
import React, { useState } from "react";

export default function ProductList(props) {
  const mapped = props.products.map((product) => <Product {...product} key={product.name} addToBasket={props.addToBasket} />);
  const mappedSoldOut = props.soldOutProducts.map((soldOutProduct) => <SoldOutProduct {...soldOutProduct} key={soldOutProduct.name} />);

  const [modal, showModal] = useState(true);
  const toggleProduct = () => {
    showModal(!modal);
  };

  return (
    <section className="productListHead">
      <Nav />
      <h1>Order your favourite beer</h1>
      <h2>Beer is served from the tap in a glass</h2>
      <BeerSug />

      <h1>All our beers</h1>
      <section className="ProductList">
        {mapped}
        {mappedSoldOut}
      </section>
      <section className="ProductList"></section>
    </section>
  );
}
