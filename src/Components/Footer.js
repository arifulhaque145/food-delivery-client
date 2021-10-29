import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <footer class="bg-gray-800 pt-10 sm:mt-10 pt-10">
        <div class="max-w-6xl m-auto text-gray-800 flex flex-wrap justify-left">
          <div class="p-5 w-1/2 sm:w-4/12 md:w-3/12">
            <div class="text-xs uppercase text-gray-400 font-medium mb-6">
              Getting Started
            </div>
            <Link
              href="#"
              class="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700"
            >
              Installation
            </Link>
          </div>
          <div class="p-5 w-1/2 sm:w-4/12 md:w-3/12">
            <div class="text-xs uppercase text-gray-400 font-medium mb-6">
              Core Concepts
            </div>
            <Link
              href="#"
              class="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700"
            >
              Utility-First
            </Link>
          </div>
          <div class="p-5 w-1/2 sm:w-4/12 md:w-3/12">
            <div class="text-xs uppercase text-gray-400 font-medium mb-6">
              Customization
            </div>
            <Link
              href="#"
              class="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700"
            >
              Configuration
            </Link>
          </div>
          <div class="p-5 w-1/2 sm:w-4/12 md:w-3/12">
            <div class="text-xs uppercase text-gray-400 font-medium mb-6">
              Community
            </div>
            <Link
              href="#"
              class="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700"
            >
              GitHub
            </Link>
          </div>
        </div>
        <div class="pt-2">
          <div
            class="flex pb-5 px-3 m-auto pt-5 
            border-t border-gray-500 text-gray-400 text-sm 
            flex-col md:flex-row max-w-6xl"
          >
            <div class="mt-2">© Copyright 1998-year. All Rights Reserved.</div>
            <div class="md:flex-auto md:flex-row-reverse mt-2 flex-row flex text-2xl">
              <Link href="#" class="w-6 mx-1">
                <i class="fab fa-facebook-square"></i>
              </Link>
              <Link href="#" class="w-6 mx-1">
                <i class="fab fa-twitter-square"></i>
              </Link>
              <Link href="#" class="w-6 mx-1">
                <i class="fab fa-linkedin"></i>
              </Link>
              <Link href="#" class="w-6 mx-1">
                <i class="fab fa-instagram-square"></i>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
