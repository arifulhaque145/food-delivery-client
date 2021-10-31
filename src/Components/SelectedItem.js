import React from "react";
import { useDelivery } from "../Hooks/useDelivery";

function SelectedItem({ data }) {
  const { id, name, imgUrl, desc, price } = data;
  const { removeOrder } = useDelivery();

  return (
    <div className="w-full bg-gray-50 mb-5 flex items-center justify-between px-6 py-4 rounded-md shadow-md">
      <img src={imgUrl} alt="" className="h-20 rounded-full" />
      <span className="text-xl uppercase font-bold">{name}</span>
      <span className="uppercase italic text-gray-500">{desc}</span>
      <span>1</span>
      <span className="font-bold text-xl">
        $<span>{price}</span>
      </span>
      <span
        className="bg-red-500 uppercase text-white font-bold px-5 py-2 select-none cursor-pointer shadow-md hover:bg-red-700"
        onClick={() => removeOrder(id)}
      >
        Delete
      </span>
    </div>
  );
}

export default SelectedItem;
