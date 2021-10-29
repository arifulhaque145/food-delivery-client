import React from "react";

function Banner() {
  return (
    <>
      <div
        class="bg-cover bg-center lg:h-96 text-white py-24 px-10 object-fill"
        style={{
          backgroundImage:
            "url(https://mimiejay.com/wp-content/uploads/2020/10/pexels-ella-olsson-1640777-scaled.jpg)",
        }}
      >
        <div className="md:w-1/2 lg:w-full">
          <div class="px-3 md:w-2/3 mb-10 md:mb-0 flex flex-col items-center">
            <div className="text-xl text-black md:text-6xl font-bold mb-5 leading-tight">
              Stay Connected
            </div>
            <div className="text-black text-xl mb-7 font-medium leading-tight">
              Subscribe now and receive the latest updates.
            </div>
            <div>
              <span class="inline-block w-40 h-1 rounded-full bg-black"></span>
              <span class="inline-block w-3 h-1 rounded-full bg-black ml-1"></span>
              <span class="inline-block w-1 h-1 rounded-full bg-black ml-1"></span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Banner;
