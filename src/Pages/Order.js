import React from "react";
import Footer from "../Components/Footer";
import Navs from "../Components/Navs";
import useAuth from "../Hooks/useAuth";
import useFetch from "../Hooks/useFetch";

function Order() {
  const { user } = useAuth();
  const { users } = useFetch();

  const getId = users?.find((item) => item?.email === user?.email);

  // const carts = getId?.cart;
  // console.log(getId?._id, getId?.cart);
  if (getId) {
    const newOrder = { userid: getId?._id, name: getId?.name, email: getId?.email, items: getId?.cart, status: 'pending'};
    fetch(`https://calm-shore-51674.herokuapp.com/orders`, {
      method: "post",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newOrder),
    });
  }

  return (
    <>
      <Navs />
      <div className="text-center mt-20 mb-10 text-3xl uppercase font-bold">
        Your orders
      </div>
      {/* {selectedItems.length !== 0 ? (
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
      )} */}
      <Footer />
    </>
  );
}

export default Order;
