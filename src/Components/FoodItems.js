import React from "react";
import useFetch from "../Hooks/useFetch";
import Card from "./Card";

function FoodItems() {
  const items = useFetch();

  return (
    <div className="px-16">
      <div className="my-14">
        <div className="text-center text-4xl font-bold uppercase tracking-widest">
          FoodItems
        </div>
        <div className="text-center text-gray-500 italic">
          All Food contains
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {items.map((item) => (
          <Card key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
}

export default FoodItems;
