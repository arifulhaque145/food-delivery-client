import React from "react";
import { useForm } from "react-hook-form";
import AllOrders from "../Components/AllOrders";

function Tabs({ color }) {
  const [openTab, setOpenTab] = React.useState(1);
  const [allOrders, setAllOrders] = React.useState([]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    fetch("https://calm-shore-51674.herokuapp.com/products", {
      method: "put",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    });
  };

  React.useEffect(() => {
    fetch("https://calm-shore-51674.herokuapp.com/orders")
      .then((res) => res.json())
      .then((data) => setAllOrders(data));
  }, [allOrders]);

  return (
    <div className="flex flex-wrap">
      <div className="w-full">
        <ul
          className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row"
          role="tablist"
        >
          <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
            <a
              className={
                "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                (openTab === 1
                  ? "text-white bg-" + color + "-600"
                  : "text-" + color + "-600 bg-white")
              }
              onClick={(e) => {
                e.preventDefault();
                setOpenTab(1);
              }}
              data-toggle="tab"
              href="#link1"
              role="tablist"
            >
              Manage all orders
            </a>
          </li>
          <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
            <a
              className={
                "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                (openTab === 2
                  ? "text-white bg-" + color + "-600"
                  : "text-" + color + "-600 bg-white")
              }
              onClick={(e) => {
                e.preventDefault();
                setOpenTab(2);
              }}
              data-toggle="tab"
              href="#link2"
              role="tablist"
            >
              Add a new food item
            </a>
          </li>
        </ul>
        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6">
          <div className="px-4 py-5 flex-auto">
            <div className="tab-content tab-space">
              {/* Order List */}
              <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                {allOrders.map((order) => (
                  <AllOrders key={order._id} data={order} />
                ))}
              </div>

              {/* Add new Product */}
              <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="flex flex-col justify-center w-3/4 mx-auto"
                >
                  <input
                    {...register("imgUrl", { required: true })}
                    type="text"
                    placeholder="Image URL"
                    className="mb-3 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
                  />
                  {errors.exampleRequired && (
                    <span>This field is required</span>
                  )}
                  <input
                    {...register("name", { required: true })}
                    type="text"
                    placeholder="Item Name"
                    className="capitalize mb-3 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
                  />
                  {errors.exampleRequired && (
                    <span>This field is required</span>
                  )}
                  <input
                    {...register("price", { required: true })}
                    type="number"
                    placeholder="Price"
                    className="mb-3 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
                  />
                  {errors.exampleRequired && (
                    <span>This field is required</span>
                  )}
                  <textarea
                    {...register("desc", { required: true })}
                    type="text"
                    rows="5"
                    placeholder="Description"
                    className="mb-3 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
                  />
                  {errors.exampleRequired && (
                    <span>This field is required</span>
                  )}
                  <input
                    type="submit"
                    className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tabs;
