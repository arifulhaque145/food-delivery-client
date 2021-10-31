import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router";
import { useAuth } from "../Hooks/useAuth";
import Loader from "./Loader";

function RegisterForm() {
  const { register, handleSubmit } = useForm();
  const [error, seterror] = useState("");
  const [loading, setloading] = useState(false);
  const history = useHistory();

  const { createAccount } = useAuth();

  const onSubmit = (data) => {
    const { name, email, password } = data;
    if (password.length < 6) {
      seterror("Password mustbe 6 characters");
      return;
    } else {
      seterror("");
    }

    createAccount(name, email, password);
    // console.log(data);

    fetch("http://localhost:5000/users", {
      method: "post",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((datas) => {
        if (datas.insertedId) {
        }
      });

    setloading(true);
    setTimeout(() => {
      history.push("/home");
    }, 1500);
  };

  return (
    <>
      {!loading ? (
        <div className="max-w-lg max-w-xs bg-gray-50 shadow-md rounded-lg mx-auto text-center py-12 lg:my-20 rounded-xl">
          <div className="text-black font-bold mb-8 text-3xl">
            Create An Account
          </div>
          <div className="container py-5 max-w-md mx-auto">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-4">
                <input
                  placeholder="Name"
                  className="shadow appearance-none placeholder-black rounded w-full p-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  {...register("name")}
                  type="text"
                  required
                />
              </div>
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
                  required
                />
                {error && <p className="my-2 text-red-500">{error}</p>}
              </div>
              <div className="flex items-center justify-center mt-8">
                <input
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline uppercase w-full"
                  type="submit"
                  value="Register"
                />
              </div>
            </form>
          </div>
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
}

export default RegisterForm;
