import { useEffect, useState } from "react";

function useFetch() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("./data.json")
      .then((res) => res.json())
      .then((data) => {
        setItems(data);
      });
  }, []);

  return items;
}

export default useFetch;
