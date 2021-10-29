import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div>
      <div>404 Not Found</div>
      <Link to="/">
        <div className="w-32 rounded border border-blue-500 hover:bg-blue-500 hover:text-white py-2 px-6 rounded shadow-md hover:shadow-lg uppercase text-black font-bold select-none cursor-pointer">
          Go back
        </div>
      </Link>
    </div>
  );
}

export default NotFound;
