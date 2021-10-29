import React from "react";
import { Link } from "react-router-dom";

function Navs() {
  return (
    <nav className="top-0 sticky shadow-lg z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg bg-gray-800">
      <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
        <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start ">
          <Link
            className="text-lg font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
            to="/home"
          >
            Foodhunter
          </Link>
          <button
            className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
            type="button"
            onClick={() => console.log("Hello Navs")}
          >
            <i className="text-white fas fa-bars"></i>
          </button>
        </div>
        <div
          className="lg:flex flex-grow items-center bg-white lg:bg-opacity-0 lg:shadow-none hidden bg-blueGray-800"
          id="example-collapse-navbar"
        >
          <ul className="flex flex-col lg:flex-row list-none lg:ml-auto items-center">
            <li className="inline-block relative">
              <Link
                className="lg:text-white lg:hover:text-blueGray-200 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                to="/home"
                onClick={() => console.log("Hello")}
              >
                Home
              </Link>
              <div
                className="hidden bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-48"
                id="demo-pages-dropdown"
              >
                <span className="text-sm pt-2 pb-0 px-4 font-bold block w-full whitespace-nowrap bg-transparent text-blueGray-400">
                  Admin Layout
                </span>
                <a
                  href="../admin/dashboard.html"
                  className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
                >
                  Dashboard
                </a>
                <a
                  href="../admin/settings.html"
                  className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
                >
                  Settings
                </a>
                <a
                  href="../admin/tables.html"
                  className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
                >
                  Tables
                </a>
                <a
                  href="../admin/maps.html"
                  className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
                >
                  Maps
                </a>
                <div className="h-0 mx-4 my-2 border border-solid border-blueGray-100"></div>
                <span className="text-sm pt-2 pb-0 px-4 font-bold block w-full whitespace-nowrap bg-transparent text-blueGray-400">
                  Auth Layout
                </span>
                <a
                  href="./login.html"
                  className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
                >
                  Login
                </a>
                <a
                  href="./register.html"
                  className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
                >
                  Register
                </a>
                <div className="h-0 mx-4 my-2 border border-solid border-blueGray-100"></div>
                <span className="text-sm pt-2 pb-0 px-4 font-bold block w-full whitespace-nowrap bg-transparent text-blueGray-400">
                  No Layout
                </span>
                <a
                  href="../landing.html"
                  className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
                >
                  Landing
                </a>
                <a
                  href="../profile.html"
                  className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
                >
                  Profile
                </a>
              </div>
            </li>
            <li className="inline-block relative">
              <Link
                className="lg:text-white lg:hover:text-blueGray-200 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                to="/events"
              >
                Events
              </Link>
            </li>
            <li className="flex items-center">
              {/* {!user.email ? ( */}
              {true ? (
                <Link
                  className="border border-white hover:bg-white text-white hover:text-black active:bg-gray-50 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
                  to="/login"
                >
                  Login
                </Link>
              ) : (
                <a
                  className="lg:text-white lg:hover:text-blueGray-200 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  href="#pablo"
                >
                  {/* {user?.displayName || user?.name || "unknown"} */}
                  Unknown
                </a>
              )}
            </li>
            <li className="flex items-center">
              {/* !user.email */}
              {true ? (
                <Link
                  className="hover:bg-gray-800 bg-white border text-gray-700 hover:text-white text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
                  to="/register"
                >
                  Register
                </Link>
              ) : (
                <Link
                  className="border border-white hover:bg-white text-white hover:text-black active:bg-gray-50 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
                  to="/home"
                //   onClick={logOut}
                >
                  Logout
                </Link>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navs;
