import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <footer className="bg-gray-800 pt-10 sm:mt-10 pt-10">
        <div className="max-w-6xl m-auto text-gray-800 flex flex-wrap justify-left">
          <div className="p-5 w-1/2 sm:w-4/12 md:w-3/12">
            <div className="text-xs uppercase text-gray-400 font-medium mb-6">
              Getting Started
            </div>
            <Link
              to="#"
              className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700"
            >
              Installation
            </Link>
          </div>
          <div className="p-5 w-1/2 sm:w-4/12 md:w-3/12">
            <div className="text-xs uppercase text-gray-400 font-medium mb-6">
              Core Concepts
            </div>
            <Link
              to="#"
              className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700"
            >
              Utility-First
            </Link>
          </div>
          <div className="p-5 w-1/2 sm:w-4/12 md:w-3/12">
            <div className="text-xs uppercase text-gray-400 font-medium mb-6">
              Customization
            </div>
            <Link
              to="#"
              className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700"
            >
              Configuration
            </Link>
          </div>
          <div className="p-5 w-1/2 sm:w-4/12 md:w-3/12">
            <div className="text-xs uppercase text-gray-400 font-medium mb-6">
              Community
            </div>
            <Link
              to="#"
              className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700"
            >
              GitHub
            </Link>
          </div>
        </div>
        <div className="pt-2">
          <div
            className="flex pb-5 px-3 m-auto pt-5 
            border-t border-gray-500 text-gray-400 text-sm 
            flex-col md:flex-row max-w-6xl"
          >
            <div className="mt-2">FoodHunter©Copyright 2021. All Rights Reserved.</div>
            <div className="md:flex-auto md:flex-row-reverse mt-2 flex-row flex text-2xl">
              <Link to="#" className="w-6 mx-1">
                <i className="fab fa-facebook-square"></i>
              </Link>
              <Link to="#" className="w-6 mx-1">
                <i className="fab fa-twitter-square"></i>
              </Link>
              <Link to="#" className="w-6 mx-1">
                <i className="fab fa-linkedin"></i>
              </Link>
              <Link to="#" className="w-6 mx-1">
                <i className="fab fa-instagram-square"></i>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
