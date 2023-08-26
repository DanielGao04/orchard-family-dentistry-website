import React from "react";
import { Link } from "react-router-dom";
import banner from "../../images/Orchard3.png";

const Banner = () => {
  return (
    <div
      className="w-90 bg-center md:bg-cover md:bg-no-repeat md:bg-center md:py-40 lg:py-40 xl:py-80"
      style={{
        backgroundImage: `url(${banner})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        position: "relative",
        shrink: 0,
        grow: 0

      }}
    >
      <div className="container text-center text-white py-40 md:mt-40 md:py-40">
        <h1 className="text-5xl capitalize mb-0 mt-52 font-semibold md:mb-5 md: text-white md:text-8xl">
          Eat Wisely, Smile Nicely
        </h1>
        <p className="mb-10 text-gray-200 md:text-2xl md:mx-auto md:mb-8 md:w-2/3 ">
          Discover the smart way to find the perfect dentist.
          Get matched with a great dentist today. It's time for a healthy smile.
        </p>
        <div>
          <Link
            to="/appointment"
            className="bg-sky-800 text-white px-6 py-4 font-medium rounded hover:bg-sky-700 transition"
          >
            Make an Appointment
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
