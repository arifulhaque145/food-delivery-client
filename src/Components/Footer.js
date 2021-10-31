import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <footer className="bg-gray-800 pt-10 sm:mt-10 pt-10">
        <div className="max-w-6xl m-auto text-gray-800 flex flex-wrap justify-left">
          <div className="p-5 w-1/2 sm:w-4/12 md:w-3/12">
            <div className="text-xs uppercase text-gray-400 font-medium mb-6">
              Get Togather
            </div>
            <span className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
              23 East Street, Mirpur, Dhaka
            </span>
            <span className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700 uppercase">
              Mon - Sat (<span className="font-bold">11AM - 11PM</span>)
            </span>
            <span className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700 uppercase">
              Sun (<span className="font-bold">11AM - 08PM</span>)
            </span>
            <span className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700 uppercase">
              019-00000-000000
            </span>
          </div>
          <div className="p-5 w-1/2 sm:w-4/12 md:w-3/12">
            <div className="text-xs uppercase text-gray-400 font-medium mb-6">
              About Us
            </div>
            <span className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
              Our Story
            </span>
            <span className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
              Our Team
            </span>
            <span className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
              Our Food
            </span>
          </div>
          <div className="p-5 w-1/2 sm:w-4/12 md:w-3/12">
            <div className="text-xs uppercase text-gray-400 font-medium mb-6">
              Quick Menu
            </div>
            <span className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
              Beef Burgur
            </span>
            <span className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
              Chicken Burgur
            </span>
            <span className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
              Kabab
            </span>
            <span className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
              BBQ
            </span>
          </div>
          <div className="p-5 w-1/2 sm:w-4/12 md:w-3/12">
            <div className="text-xs uppercase text-gray-400 font-medium mb-6">
              Our Branches
            </div>
            <span className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
              Lake View
            </span>
            <span className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
              Hungry Me
            </span>
            <span className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
              H20
            </span>
          </div>
        </div>
        <div className="pt-2">
          <div
            className="flex pb-5 px-3 m-auto pt-5 
            border-t border-gray-500 text-gray-400 text-sm 
            flex-col md:flex-row max-w-6xl"
          >
            <div className="mt-2">
              FoodHunter©Copyright 2021. All Rights Reserved.
            </div>
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
