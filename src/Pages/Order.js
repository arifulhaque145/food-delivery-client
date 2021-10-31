import React from "react";
import { Link } from "react-router-dom";
import Footer from "../Components/Footer";
import Navs from "../Components/Navs";
import OrderList from "../Components/OrderList";
import SelectedItem from "../Components/SelectedItem";
import { useDelivery } from "../Hooks/useDelivery";
import useFetch from "../Hooks/useFetch";

function Order() {
  const items = useFetch();
  const { delivery, setdelivery } = useDelivery();

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
        <div className="px-12 flex flex-col">
          {selectedItems.map((item) => (
            <OrderList key={item.id} data={item} />
          ))}
        </div>
      ) : (
        <div
          style={{ height: "315px" }}
          className="flex justify-center items-center"
        >
          <div className="text-4xl italic uppercase text-gray-500">
            No item selected
          </div>
        </div>
      )}
      {selectedItems.length !== 0 && (
        <div className="flex justify-center py-8">
          <Link
            className="bg-red-900 uppercase font-bold text-xl px-10 py-3 shadow-md hover:bg-red-600 select-none cursor-pointer text-white"
            to="/placeorder"
            onClick={() => setdelivery([])}
          >
            Click to proceed
          </Link>
        </div>
      )}
      <Footer />
    </>
  );
}

export default Order;
