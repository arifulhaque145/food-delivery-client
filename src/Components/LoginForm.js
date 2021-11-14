import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory, useLocation } from "react-router";
import useAuth from "../Hooks/useAuth";
import Loader from "./Loader";

function LoginForm() {
  const { register, handleSubmit } = useForm();
  const { signInUsingGoogle, logIn } = useAuth();
  const history = useHistory();
  const loc = useLocation();
  const [loading, setloading] = useState(true);

  const url = loc.state?.from || "/";

  const onSubmit = (data) => {
    const { email, password } = data;
    logIn(email, password);
    setloading(!loading);
    setTimeout(() => {
      history.push(url);
    }, 2000);
  };

  const googleLogIn = () => {
    signInUsingGoogle();
    setTimeout(() => {
      history.push(url);
    }, 5000);
  };

  return (
    <>
      {loading ? (
        <div className="max-w-lg max-w-xs bg-gray-50 shadow-md rounded-lg mx-auto text-center py-12 lg:my-20 rounded-xl">
          <div className="text-black font-bold mb-8 text-3xl">Login</div>
          <div className="container py-5 max-w-md mx-auto">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-4">
                <input
                  placeholder="Email"
                  className="shadow appearance-none placeholder-black rounded w-full p-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  {...register("email")}
                  type="email"
                  required
                />
              </div>
              <div className="mb-4">
                <input
                  placeholder="Password"
                  className="shadow appearance-none placeholder-black rounded w-full p-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  {...register("password")}
                  type="password"
                />
              </div>
              <div className="flex items-center justify-center mt-8">
                <input
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline uppercase w-full"
                  type="submit"
                  value="Login"
                />
              </div>
            </form>
            <div className="flex items-center justify-center mt-8">
              <input
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline uppercase w-full"
                type="submit"
                value="Google Sign in"
                onClick={googleLogIn}
              />
            </div>
          </div>
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
}

export default LoginForm;
