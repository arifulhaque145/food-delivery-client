import React, { useState } from "react";
import useAuth from "../Hooks/useAuth";
import useFetch from "../Hooks/useFetch";

function Card({ data }) {
  const { _id, name, imgUrl, desc, price } = data;

  const { user } = useAuth();
  const [state, setstate] = useState(true);
  const { users } = useFetch();

  const getId = users?.find((item) => item?.email === user?.email);

  const selectItem = (newid) => {
    if (state) {
      fetch(`http://localhost:5000/users/${getId?._id}`, {
        method: "put",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ cart: `${newid}` }),
      });
      setstate(false);
    }
  };

  return (
    <>
      {data && (
        <div className="p-5">
          <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <div className="mb-8 m-2 shadow-lg border-gray-800 bg-gray-100 relative">
              <img className="w-full" src={imgUrl} alt="Mountain" />
              {!state && (
                <div className="badge absolute top-0 right-0 bg-indigo-500 m-1 text-gray-200 p-1 px-2 text-xs font-bold rounded">
                  selected
                </div>
              )}
            </div>
            <div className="px-6">
              <div className="font-bold text-xl mb-2 text-center">{name}</div>
              <p className="text-gray-500 text-center italic">{desc}</p>
            </div>
            <div className="px-6 py-4 flex justify-center">
              <span className="inline-block px-3 py-1 text-3xl font-extrabold text-gray-700 mr-2 mb-2">
                $<span>{price}</span>
              </span>
            </div>
            <div className="px-6 pb-8 flex justify-center">
              <div
                className="bg-red-800 hover:bg-red-600 py-2 px-6 rounded shadow-md hover:shadow-lg uppercase text-white font-bold select-none cursor-pointer"
                onClick={() => selectItem(_id)}
              >
                Add to cart
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Card;
