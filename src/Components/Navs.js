import React from "react";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../Hooks/useAuth";

function Navs() {
  const { user, logOut } = useAuth();
  const history = useHistory();

  const url = "/home";

  const nowLogOut = () => {
    logOut();
    history.push(url);
  };

  return (
    <nav className="top-0 sticky shadow-lg z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg bg-gray-800">
      <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
        <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start ">
          <Link
            className="text-lg font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
            to="/"
          >
            Foodhunter
          </Link>
          <button
            className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
            type="button"
          >
            <i className="text-white fas fa-bars"></i>hi
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
              >
                Home
              </Link>
            </li>
            <li className="inline-block relative">
              <Link
                className="lg:text-white lg:hover:text-blueGray-200 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                to="/order"
              >
                Orders
              </Link>
            </li>
            <li className="flex items-center">
              {!user.email ? (
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
                  {user?.displayName || user.displayName !== null || "unknown"}
                </a>
              )}
            </li>
            <li className="flex items-center">
              {!user.email ? (
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
                  onClick={nowLogOut}
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
