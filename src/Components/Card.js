import React from "react";
import { Link } from "react-router-dom";

function Card({ data }) {
  const { _id, name, imgUrl, desc, price } = data;

  return (
    <>
      {data && (
        <div className="p-5">
          <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <div className="mb-8 m-2 shadow-lg border-gray-800 bg-gray-100 relative">
              <img className="w-full" src={imgUrl} alt="Mountain" />
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
              <Link
                to={`/placeorder/${_id}`}
                className="bg-red-800 hover:bg-red-600 py-2 px-6 rounded shadow-md hover:shadow-lg uppercase text-white font-bold select-none cursor-pointer"
              >
                Add to cart
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Card;
