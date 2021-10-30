import { useContext } from "react";
import { DeliveryContext } from "../Context/DeliveryProvider";

export const useDelivery = () => {
  return useContext(DeliveryContext);
};
