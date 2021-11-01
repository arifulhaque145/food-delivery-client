import React from "react";
import Footer from "../Components/Footer";
import Navs from "../Components/Navs";
import SelectedItem from "../Components/SelectedItem";
import useAuth from "../Hooks/useAuth";
import useFetch from "../Hooks/useFetch";

function Cart() {
  const { user } = useAuth();
  const { users, items } = useFetch();

  const getId = users?.find((item) => item?.email === user?.email);

  const carts = getId?.cart;

  let logs = [];
  if (carts) {
    logs = carts?.map((ids) => items?.find((item) => item?._id === ids));

    // const news = carts?.reduce(function (prev, cur) {
    //   prev[cur] = (prev[cur] || 0) + 1;
    //   return prev;
    // }, {});
    // console.log(news);
    // news?.map((item) => console.log(item));
    // for (const key in news) {
    //   console.log(key, news[key]);
    // }
  }

  return (
    <>
      <Navs />
      <div className="text-center mt-20 mb-10 text-3xl uppercase font-bold">
        Your Food Items
      </div>
      {logs?.length !== 0 ? (
        <div className="px-12 flex flex-col">
          {logs?.map((item, i) => (
            <SelectedItem key={i} data={item} />
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
      {logs?.length !== 0 && (
        <div className="flex justify-center py-8">
          <div className="bg-red-900 uppercase font-bold text-xl px-10 py-3 shadow-md hover:bg-red-600 select-none cursor-pointer text-white">
            Click to proceed
          </div>
        </div>
      )}
      <Footer />
    </>
  );
}

export default Cart;
