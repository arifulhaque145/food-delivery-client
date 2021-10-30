import React from "react";
import { Link } from "react-router-dom";
import Card from "../Components/Card";
import Footer from "../Components/Footer";
import Navs from "../Components/Navs";
import { useDelivery } from "../Hooks/useDelivery";
import useFetch from "../Hooks/useFetch";

function Order() {
  const items = useFetch();
  const { delivery } = useDelivery();

  const filterItems = delivery.map((ids) =>
    items.find((element) => element.id === ids)
  );

  let selectedItems = [];
  filterItems.map((item) => {
    if (item !== undefined) {
      selectedItems.push(item);
    }
  });

  return (
    <>
      <Navs />
      <div className="text-center mt-20 mb-10 text-3xl uppercase font-bold">
        Your orders
      </div>
      {selectedItems.length !== 0 ? (
        <div className="px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {selectedItems.map((item) => (
            <Card key={item.id} data={item} />
          ))}
        </div>
      ) : (
        <div
          style={{ height: "315px" }}
          className="flex justify-center items-center"
        >
          <div className="text-4xl italic uppercase text-gray-500">No item selected</div>
        </div>
      )}
      {selectedItems.length !== 0 && (
        <div className="flex justify-center py-8">
          <Link className="bg-red-900 uppercase font-bold text-xl px-10 py-3 shadow-md hover:bg-red-600 select-none cursor-pointer text-white" to="/placeorder">
            Click to proceed
          </Link>
        </div>
      )}
      <Footer />
    </>
  );
}

export default Order;