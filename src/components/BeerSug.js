import React from "react";
import MostOrdered from "./MostOrdered";
import BeerOfTheMonth from "./BeerOfTheMonth";
import RandomBeer from "./RandomBeer";

export default function BeerSug() {
  return (
    <section className="BeerSugSec">
      <MostOrdered />
      <BeerOfTheMonth />
      <RandomBeer />
    </section>
  );
}
