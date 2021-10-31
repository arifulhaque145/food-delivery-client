import React from "react";
import { useForm } from "react-hook-form";
import { Redirect } from "react-router";
import Footer from "../Components/Footer";
import Navs from "../Components/Navs";

function PlaceOrder() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    const pro = window.confirm("Delete the item?");
    if (pro) {
      <Redirect to="/" />;
    }
    console.log(data);
    alert("Order Completed");
  };

  return (
    <>
      <Navs />
      <div className="px-24">
        <div className="text-center uppercase text-2xl my-5 font-bold">
          placeorder
        </div>
        <div className="flex flex-col items-center">
          <div className="w-1/2 h-full text-center py-24 flex flex-col justify-center shadow-lg">
            <div>
              <div className="uppercase font-medium">Your Order</div>
              <div className="w-1/2 mx-auto my-8">
                <div className="flex justify-between bg-red-600 text-white font-medium rounded py-1 px-3 uppercase">
                  <div>Product</div>
                  <div>Subtotal</div>
                </div>
                <div className="flex justify-between my-1 text-gray-700 rounded py-1 px-3">
                  <div>
                    Product <span className="font-bold">x 1</span>{" "}
                  </div>
                  <div>$12.99</div>
                </div>
                <hr />
                <div className="flex justify-between my-1 text-gray-700 rounded py-1 px-3 font-bold">
                  <div>Total</div>
                  <div>$100</div>
                </div>
              </div>
            </div>
            <div className="uppercase font-medium">Billing Details</div>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col w-1/2 mx-auto"
            >
              <input
                {...register("name")}
                className="my-2 py-2 px-4 bg-blue-50"
                placeholder="Full Name"
              />
              <input
                {...register("phone")}
                className="my-2 py-2 px-4 bg-blue-50"
                placeholder="Phone"
              />
              <input
                {...register("email")}
                className="my-2 py-2 px-4 bg-blue-50"
                placeholder="Email"
              />
              <select
                {...register("delivery")}
                className="my-2 py-2 px-4 bg-blue-50"
              >
                <option>Delivery</option>
                <option value="1">In 1 day</option>
                <option value="7">In 7 days</option>
                <option value="20">In 20 days</option>
              </select>
              <input
                type="submit"
                className="bg-red-500 uppercase text-white text-lg font-bold rounded-full mt-10 py-3 px-6 select-none cursor-pointer mx-auto"
                value="Place Order"
              />
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default PlaceOrder;
