import React from "react";

function FeedbackCard({ data }) {
  const { name, desc } = data;
  return (
    <div className="p-5">
      <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <div className="m-2 shadow-lg border-gray-800 bg-gray-100 relative">
          
        </div>
        <div className="py-8">
          <div className="font-bold text-xl mb-2 text-center">{name}</div>
          <p className="text-gray-500 text-center italic">{desc}</p>
        </div>
      </div>
    </div>
  );
}

export default FeedbackCard;
