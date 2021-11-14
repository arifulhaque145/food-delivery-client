import React from "react";
import Footer from "../Components/Footer";
import Navs from "../Components/Navs";

function Order() {
  return (
    <>
      <Navs />
      <div className="text-center mt-20 mb-10 text-3xl uppercase font-bold">
        Your orders
      </div>
      <Footer />
    </>
  );
}

export default Order;
