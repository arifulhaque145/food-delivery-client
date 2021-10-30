import React, { createContext, useState } from "react";

export const DeliveryContext = createContext();

const DeliveryProvider = ({ children }) => {
  const [delivery, setdelivery] = useState([]);
  const allDelivery = { delivery, setdelivery };

  return (
    <DeliveryContext.Provider value={allDelivery}>
      {children}
    </DeliveryContext.Provider>
  );
};

export default DeliveryProvider;
