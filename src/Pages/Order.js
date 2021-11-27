import React, { useEffect, useState } from "react";
import Footer from "../Components/Footer";
import Navs from "../Components/Navs";
import OrderList from "../Components/OrderList";
import useAuth from "../Hooks/useAuth";

function Order() {
  const [orderData, setOrderData] = useState([]);
  const { user } = useAuth();
  useEffect(() => {
    fetch(`https://calm-shore-51674.herokuapp.com/orders/${user.email}`)
      .then((res) => res.json())
      .then((data) => setOrderData(data));
  }, [orderData]);

  return (
    <>
      <Navs />
      <div className="text-center lg:mt-10 my-5 lg:mb-20 text-3xl uppercase font-bold">
        Your total orders: {orderData.length}
      </div>
      <div className="lg:mx-12 lg:mb-16 p-5">
        {orderData.map((item) => (
          <OrderList key={item._id} data={item} />
        ))}
      </div>
      <Footer />
    </>
  );
}

export default Order;
