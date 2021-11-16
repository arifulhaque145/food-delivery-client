import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory, useParams } from "react-router-dom";
import Alert from "../Components/Alert";
import Footer from "../Components/Footer";
import Navs from "../Components/Navs";
import useAuth from "../Hooks/useAuth";

function PlaceOrder() {
  const { id } = useParams();
  const { register, handleSubmit } = useForm();
  const history = useHistory();
  const { user } = useAuth();
  const [item, setItem] = useState({});
  const [insertState, setInsertState] = useState(false);

  fetch(`https://calm-shore-51674.herokuapp.com/products/${id}`)
    .then((res) => res.json())
    .then((data) => setItem(data));

  const { _id, ...rest } = item;

  const onSubmit = (data) => {
    fetch("https://calm-shore-51674.herokuapp.com/orders", {
      method: "post",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ ...rest, ...data, status: "pending" }),
    })
      .then((res) => res.json())
      .then((check) => setInsertState(check.acknowledged));

    setTimeout(() => {
      history.push("/order");
    }, 1000);
  };

  return (
    <>
      <Navs />
      <div className="lg:py-16 px-2">
        <div className="flex flex-col items-center">
          <div className="lg:w-1/2 w-full h-full text-center py-12 flex flex-col justify-center px-5">
            <div className="flex lg:flex-row flex-col justify-between lg:items-center lg:w-full mx-auto lg:my-5 shadow-md p-5 mb-5">
              <img
                src={item?.imgUrl}
                alt=""
                className="lg:h-20 lg:w-auto w-full"
              />
              <div className="font-bold">{item?.name}</div>
              <div className="text-xl font-bold">${item?.price}</div>
            </div>
            <div className="uppercase font-bold my-4 text-xl">Billing Details</div>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col w-full lg:mx-auto shadow-lg lg:px-8 px-4 py-8"
            >
              <input
                {...register("userName")}
                defaultValue={user?.displayName}
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
                defaultValue={user?.email}
                className="my-2 py-2 px-4 bg-blue-50"
                placeholder="Email"
              />
              <select
                {...register("delivery")}
                className="my-2 py-2 px-4 bg-blue-50"
              >
                <option value="in 1 day">In 1 day</option>
                <option value="in 7 days">In 7 days</option>
                <option value="in 20 days">In 20 days</option>
              </select>
              <input
                type="submit"
                className="bg-red-500 uppercase text-white text-lg font-bold rounded-full mt-10 py-3 px-6 select-none cursor-pointer mx-auto shadow-lg"
                value="Place Order"
              />
            </form>
            {insertState && (
              <div className="flex flex-col justify-content items-center">
                <Alert title="Successfully Added" />
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default PlaceOrder;
