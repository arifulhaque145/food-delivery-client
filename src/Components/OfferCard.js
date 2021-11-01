import React from "react";

function OfferCard({ data }) {
  const { offer } = data;
  return (
    <div className="p-5">
      <div className="max-w-sm rounded overflow-hidden shadow-lg bg-red-400">
        <div className="px-6 py-16 flex justify-center">
          <span className="inline-block px-3 py-1 text-3xl font-extrabold text-gray-700 mr-2 mb-2">
            <span className="text-white text-5xl">{offer}%</span>
          </span>
        </div>
      </div>
    </div>
  );
}

export default OfferCard;
