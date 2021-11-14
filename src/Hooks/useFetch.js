import { useEffect, useState } from "react";
const url = "https://calm-shore-51674.herokuapp.com/products";
const userUrl = "https://calm-shore-51674.herokuapp.com/users";

function useFetch() {
  const [items, setItems] = useState([]);
  const [users, setUsers] = useState([]);
  const [dataLoader, setDataLoader] = useState(true);

  useEffect(() => {
    setDataLoader(true);
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setItems(data);
      })
      .finally(setDataLoader(false));
  }, [items]);

  useEffect(() => {
    setDataLoader(true);
    fetch(userUrl)
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
      })
      .finally(setDataLoader(false));
  }, [users]);

  return { items, users, dataLoader };
}

export default useFetch;
