import React from "react";
import Footer from "../Components/Footer";
import Navs from "../Components/Navs";
import Tabs from "../Components/Tabs";

function Admin() {
  return (
    <>
      <Navs />
      <div className="lg:w-3/4 lg:mx-auto m-5 lg:my-8">
        <Tabs color="pink" />
      </div>
      <Footer />
    </>
  );
}

export default Admin;
