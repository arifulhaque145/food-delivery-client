import React from "react";
import { Redirect } from "react-router";
import Footer from "../Components/Footer";
import Navs from "../Components/Navs";

const clickNow = () => {
  const pro = window.confirm("Delete the item?");
  if (pro) {
    <Redirect to="/" />;
  }
};

function PlaceOrder() {
  return (
    <>
      <Navs />
      <div className="px-24">
        <div className="text-center uppercase text-2xl my-5 font-bold">
          placeorder
        </div>
        <div
          className="flex flex-col items-center bg-red-300"
          style={{ height: "500px" }}
        >
          <div className="w-1/2 h-full bg-blue-200 text-center py-24">
            <div>Details</div>
            <div onClick={clickNow}>Proceed To Checkout</div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default PlaceOrder;
