import React from "react";

function OrderList({ data }) {
  const { _id, name, imgUrl, desc, price, delivery } = data;

  const deleteItem = (id) => {
    const conformMessage = window.confirm("Press a button!");
    
    conformMessage &&
      fetch(`https://calm-shore-51674.herokuapp.com/orders/${id}`, {
        method: "delete",
      });
  };

  return (
    <div className="w-full bg-gray-50 mb-5 grid lg:grid-cols-6 lg:gap-4 place-items-center lg:px-6 lg:py-4 p-6 rounded-md shadow-md">
      <img src={imgUrl} alt="" className="lg:h-20 lg:w-auto w-full" />
      <span className="text-xl uppercase font-bold mt-5">{name}</span>
      <span className="italic text-gray-500">{desc}</span>
      <span className="capitalize font-medium mb-5">{delivery}</span>
      <span className="font-bold lg:text-xl text-3xl">
        $<span>{price}</span>
      </span>
      <div className="my-8">
        <span
          className="bg-red-500 uppercase text-white font-bold px-5 py-2 select-none cursor-pointer shadow-md hover:bg-red-700"
          onClick={() => deleteItem(_id)}
        >
          Delete
        </span>
      </div>
    </div>
  );
}

export default OrderList;
