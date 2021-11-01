import React from "react";
import FeedbackCard from "./FeedbackCard";

function Feedback() {
  return (
    <div className="lg:px-12">
      <div className="my-14">
        <div className="text-center text-4xl font-bold uppercase tracking-widest">
          Reviews
        </div>
        <div className="text-center text-gray-500 italic">
          All Food contains
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <FeedbackCard
          data={{ name: "Henry Ford", desc: "Nice and beautiful" }}
        />
        <FeedbackCard
          data={{ name: "Peter Martin", desc: "Delivery on right time" }}
        />
        <FeedbackCard
          data={{ name: "Gray Hackings", desc: "Food Items are good and well services" }}
        />
      </div>
    </div>
  );
}

export default Feedback;
