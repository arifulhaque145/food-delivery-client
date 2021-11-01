import { useEffect, useState } from "react";
const url = "https://calm-shore-51674.herokuapp.com/products";
const userUrl = "https://calm-shore-51674.herokuapp.com/users";

function useFetch() {
  const [items, setItems] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setItems(data);
      });
  }, [items]);

  useEffect(() => {
    fetch(userUrl)
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
      });
  }, [users]);

  return { items, users };
}

export default useFetch;
