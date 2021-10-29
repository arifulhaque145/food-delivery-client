import React from "react";
import Banner from "../Components/Banner";
import Feedback from "../Components/Feedback";
import FoodItems from "../Components/FoodItems";
import Footer from "../Components/Footer";
import Navs from "../Components/Navs";
import Offers from "../Components/Offers";

function Home() {
  return (
    <>
      <Navs />
      <Banner />
      <FoodItems />
      <Offers />
      <Feedback />
      <Footer />
    </>
  );
}

export default Home;
