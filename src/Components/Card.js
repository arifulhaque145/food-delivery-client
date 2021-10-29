import React from 'react'

function Card() {
    const url =
      "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg";
      
    return (
      <>
        <div className="p-10">
          <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <div className="mb-8 m-2 shadow-lg border-gray-800 bg-gray-100 relative">
              <img className="w-full" src={url} alt="Mountain" />
              <div className="badge absolute top-0 right-0 bg-indigo-500 m-1 text-gray-200 p-1 px-2 text-xs font-bold rounded">
                selected
              </div>
            </div>
            <div className="px-6">
              <div className="font-bold text-xl mb-2 text-center">Mountain</div>
              <p className="text-gray-500 text-center italic">
                Lorem ipsum dolor sit amet, consectetur
              </p>
            </div>
            <div className="px-6 py-8 flex justify-center">
              <span className="inline-block px-3 py-1 text-3xl font-extrabold text-gray-700 mr-2 mb-2">
                $12.99
              </span>
            </div>
          </div>
        </div>
      </>
    );
}

export default Card
