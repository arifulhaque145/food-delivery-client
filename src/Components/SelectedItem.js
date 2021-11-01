import React from "react";
import useAuth from "../Hooks/useAuth";
import useFetch from "../Hooks/useFetch";

function SelectedItem({ data }) {
  const { user } = useAuth();
  const { users } = useFetch();
  const getId = users?.find((item) => item?.email === user?.email);

  function deleteItem(id) {
    if (id) {
      const lists = getId?.cart.filter((item) => item !== id);
      console.log(lists);
      fetch(`http://localhost:5000/users/${getId?._id}`, {
        method: "put",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ cart: lists }),
      });
    }
  }

  return (
    <div className="w-full bg-gray-50 mb-5 flex items-center justify-between px-6 py-4 rounded-md shadow-md">
      <img src={data?.imgUrl} alt="" className="h-20" />
      <span className="text-xl uppercase font-bold">{data?.name}</span>
      <span className="uppercase italic text-gray-500">{data?.desc}</span>
      <span>1</span>
      <span className="font-bold text-xl">
        $<span>{data?.price}</span>
      </span>
      <span
        className="bg-red-500 uppercase text-white font-bold px-5 py-2 select-none cursor-pointer shadow-md hover:bg-red-700"
        onClick={() => deleteItem(data?._id)}
      >
        Delete
      </span>
    </div>
  );
}

export default SelectedItem;
