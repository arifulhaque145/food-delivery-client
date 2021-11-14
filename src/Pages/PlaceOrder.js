import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory, useParams } from "react-router-dom";
import useAuth from "../Hooks/useAuth";

function PlaceOrder() {
  const { id } = useParams();
  const { register, handleSubmit } = useForm();
  const history = useHistory();
  const { user } = useAuth();
  const [item, setItem] = useState({});

  fetch(`https://calm-shore-51674.herokuapp.com/products/${id}`)
    .then((res) => res.json())
    .then((data) => setItem(data));

  const onSubmit = (data) => {
    const pro = window.confirm("Do you want to add the item?");
    if (pro) {
      alert("Order Completed");
      history.push("/order");
    }
    console.log(data, id);
  };

  return (
    <>
      <div className="py-16">
        <div className="flex flex-col items-center">
          <div className="w-1/2 h-full text-center py-12 flex flex-col justify-center shadow-lg">
            <div className="flex justify-between w-1/2 mx-auto my-5 shadow-md p-5">
              <h1>{item?.name}</h1>
              <h1>{item?.price}</h1>
            </div>
            <div className="uppercase font-medium">Billing Details</div>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col w-1/2 mx-auto"
            >
              <input
                {...register("name")}
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
    </>
  );
}

export default PlaceOrder;
