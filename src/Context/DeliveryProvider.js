import React, { createContext, useState } from "react";

export const DeliveryContext = createContext();

const DeliveryProvider = ({ children }) => {
  const [delivery, setdelivery] = useState([]);

  const selectOrder = (newid) => {
    setdelivery((preId) => {
      return [...preId, newid];
    });
  };

  const removeOrder = (newid) => {
    setdelivery((preId) => {
      return preId.filter((item) => {
        return item.id !== newid;
      });
    });
  };

  const allDelivery = { delivery, setdelivery, selectOrder, removeOrder };

  return (
    <DeliveryContext.Provider value={allDelivery}>
      {children}
    </DeliveryContext.Provider>
  );
};

export default DeliveryProvider;
