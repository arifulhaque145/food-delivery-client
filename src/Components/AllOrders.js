import React from "react";

function AllOrders({ data }) {
  const { _id, name, userName, status } = data;

  const approvedItem = (id) => {
    fetch(`https://calm-shore-51674.herokuapp.com/orders/${id}`, {
      method: "put",
      headers: { "content-type": "application/json" },
    });
  };

  const deleteItem = (id) => {
    const conformMessage = window.confirm("Press a button!");

    conformMessage &&
      fetch(`https://calm-shore-51674.herokuapp.com/orders/${id}`, {
        method: "delete",
      });
  };

  return (
    <div className="w-full bg-gray-50 mb-5 grid lg:grid-cols-5 lg:gap-4 place-items-center lg:px-6 lg:py-4 p-6 rounded-md shadow-md">
      <span className="text-sm uppercase font-bold">{_id}</span>
      <span className="italic text-gray-500">{name}</span>
      <span className="capitalize font-medium">{userName}</span>
      <span
        className={`capitalize font-medium ${
          status === "pending" ? "text-red-500" : "text-green-500"
        }`}
      >
        {status}
      </span>
      <div className="flex lg:pr-10">
        <div className="my-8 mr-3">
          <span
            className="bg-green-500 uppercase text-white font-bold px-5 py-2 select-none cursor-pointer shadow-md hover:bg-green-700"
            onClick={() => approvedItem(_id)}
          >
            Approved
          </span>
        </div>
        <div className="my-8">
          <span
            className="bg-red-500 uppercase text-white font-bold px-5 py-2 select-none cursor-pointer shadow-md hover:bg-red-700"
            onClick={() => deleteItem(_id)}
          >
            Delete
          </span>
        </div>
      </div>
    </div>
  );
}

export default AllOrders;
