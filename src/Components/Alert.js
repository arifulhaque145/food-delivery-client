import React from "react";

function Alert({ title }) {
  return (
    <div class="flex text-white px-6 py-4 border-0 rounded relative my-4 bg-green-500">
      <span class="text-xl inline-block mr-5 align-middle">
        <i class="fas fa-bell" />
      </span>
      <span class="inline-block align-middle mr-8">{title}</span>
    </div>
  );
}

export default Alert;
