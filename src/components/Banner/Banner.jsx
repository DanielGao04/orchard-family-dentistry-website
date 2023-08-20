import React from "react";
import { Link } from "react-router-dom";
import banner from "../../images/Orchard3.png";

const Banner = () => {
  return (
    <div
      className="bg-cover bg-no-repeat bg-center bg-fixed py-80"
      style={{
        backgroundImage: `url(${banner})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        position: "relative",
      }}
    >
      <div className="container text-center text-white mt-40 py-40">
        <h1 className="text-8xl capitalize font-semibold mb-5 text-white">
          Eat Wisely, Smile Nicely
        </h1>
        <p className="text-2xl w-2/3 mx-auto mb-8 text-gray-200">
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
