import { useEffect, useState } from "react";

function useFetch() {
  const [items, setItems] = useState([]);
  const url = "https://calm-shore-51674.herokuapp.com/products";

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setItems(data);
      });
  }, [items]);

  return items;
}

export default useFetch;
