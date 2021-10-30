import React, { createContext, useState } from "react";

export const DeliveryContext = createContext();

const DeliveryProvider = ({ children }) => {
  const [delivery, setdelivery] = useState([]);
  const allContext = { delivery, setdelivery };

  return (
    <DeliveryContext.Provider value={allContext}>
      {children}
    </DeliveryContext.Provider>
  );
};

export default DeliveryProvider;
