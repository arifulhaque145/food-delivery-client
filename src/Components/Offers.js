import React from "react";
import OfferCard from "./OfferCard";

function Offers() {
  return (
    <div className="px-12">
      <div className="my-14">
        <div className="text-center text-4xl font-bold uppercase tracking-widest">
          Offers
        </div>
        <div className="text-center text-gray-500 italic">
          All Food contains
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <OfferCard data={{ offer: "20" }} />
        <OfferCard data={{ offer: "50" }} />
        <OfferCard data={{ offer: "90" }} />
      </div>
    </div>
  );
}

export default Offers;
